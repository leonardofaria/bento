// based on https://shindakun.dev/posts/adding-webmentions-to-microblog/

// user-circle icon from heroicons.com encoded by https://yoksel.github.io/url-encoder/
const ANON_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"%3E%3Cpath fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" /%3E%3C/svg%3E';

const fetchWebmentions = (url, aliases, productionBaseUrl) => {
  if (!url) {
    url = document.location.origin + document.location.pathname;
  }
  const targets = getUrlPermutations(url, aliases, productionBaseUrl);

  const script = document.createElement('script');
  let src =
    'https://webmention.io/api/mentions?perPage=500&jsonp=parseWebmentions';
  targets.forEach((targetUrl) => {
    src += `&target[]=${encodeURIComponent(targetUrl)}`;
  });
  src += `&_=${Math.random()}`;
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

const getUrlPermutations = (url, aliases, productionBaseUrl) => {
  const urls = [];

  // Replace the current base URL (ex.: http://localhost:1313) to the production one
  const currentUrl = new URL(window.location);
  url = url.replace(currentUrl.origin, productionBaseUrl);
  urls.push(url);

  // Add http variation
  urls.push(url.replace('https://', 'http://'));

  // Add variation with final /
  if (url.substr(-1) === '/') {
    var noslash = url.substr(0, url.length - 1);
    urls.push(noslash);
    urls.push(noslash.replace('https://', 'http://'));
  }

  // Add aliases variations
  if (aliases) {
    aliases.forEach((alias) => {
      urls.push(`${productionBaseUrl}/${alias}`);
    });
  }

  return urls;
}

const parseWebmentions = (data) => {
  const links = data.links.sort(wmSort);
  const likes = [];
  const reposts = [];
  const replies = [];
  const avatarUrls = [];

  links.map((l) => {
    if (!l.activity || !l.activity.type) {
      console.warning('unknown link type', l);
      return;
    }
    if (!l.verified) {
      return;
    }
    if (l.data.author) {
      avatarUrls.push(l.data.author.photo);
    }
    switch (l.activity.type) {
      case 'like':
        likes.push(l);
        break;
      case 'link':
        reposts.push(l);
        break;
      default:
        replies.push(l);
        break;
    }
  });

  resetContainers();
  render(likes, 'like-template', 'likes');
  render(reposts, 'reply-template', 'shares');
  render(replies, 'reply-template', 'replies');
  renderSummary(likes.length, (reposts.length + replies.length), avatarUrls);
}
window.parseWebmentions = parseWebmentions;

// Reset containers due to the usage of Turbolinks
const resetContainers = () => {
  const likes = document.querySelector('#likes');
  const shares = document.querySelector('#shares');
  const replies = document.querySelector('#replies');
  const avatars = document.querySelector('#webmentions-avatars');

  while (likes.lastChild) { likes.removeChild(likes.lastChild); }
  while (shares.lastChild) { shares.removeChild(shares.lastChild); }
  while (replies.lastChild) { replies.removeChild(replies.lastChild); }
  while (avatars.lastChild) { avatars.removeChild(avatars.lastChild); }
}

const wmSort = (a, b) => {
  const dateA = getWmDate(a);
  const dateB = getWmDate(b);
  if (dateA < dateB) {
    return -1;
  } else if (dateB < dateA) {
    return 1;
  }
  return 0;
}

const getWmDate = (webmention) => {
  if (webmention.data.published) {
    return new Date(webmention.data.published);
  }
  return new Date(webmention.verified_date);
}

const render = (items, template, destination) => {
  const t = document.getElementById(template).content;
  const list = document.getElementById(destination);

  items.map((l) => {
    const data = {
      url: l.data.url,
      date: new Date(l.data.published || l.verified_date),
      content: l.data.content,
    };

    if (l.data.author) {
      data.photo = l.data.author.photo || ANON_AVATAR;
      data.name = l.data.author.name;
      data.authorUrl = l.data.author.url;  
    } else {
      data.photo = ANON_AVATAR;
      data.name = getHostName(l.data.url) || 'inbound link';
      data.authorUrl = l.data.url;
    }

    if (l.activity.sentence) {
      data.sentence = l.activity.sentence;
    }

    fillTemplate(t, data);
    const clone = document.importNode(t, true);
    list.appendChild(clone);
  });

}

const getHostName = (url) => {
  var a = document.createElement('a');
  a.href = url;
  return (a.hostname || '').replace('www.', '');
}

const fillTemplate = (template, vals) => {
  template.querySelector('.js-avatar').src = vals.photo;
  template.querySelector('.js-author').href = vals.authorUrl;
  template.querySelector('.js-author').title = vals.name;
  template.querySelector('.js-author-name').innerHTML = vals.name;
  template.querySelector('.js-author-name').href = vals.authorUrl;
  template.querySelector('.js-source').href = vals.url;
  if (vals.sentence && template.querySelector('.js-sentence')) {
    template.querySelector('.js-sentence').innerText = vals.sentence;
  }
  const date = template.querySelector('.js-date');
  if (date) {
    date.innerHTML = formatDate(vals.date);
  }
  if (vals.content) {
    template.querySelector('.js-content').innerHTML = vals.content;
  }
}

const formatDate = (date) => {
  if (!date) {
    return '';
  }
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
}

const renderSummary = (totalLikes, totalInteractions, avatars) => {
  document.querySelector('#webmentions-total-likes').innerText = totalLikes;
  document.querySelector('#webmentions-total-interactions').innerText = totalInteractions;
  const avatarsContainer = document.querySelector('#webmentions-avatars');
  const uniqueAvatars = [...new Set(avatars)];

  for (const [index, avatar] of uniqueAvatars.entries()) {
    const image = document.createElement("img");
    image.src = avatar;
    image.classList = 'inline-block h-8 w-8 rounded-full ring-2 ring-white';
    image.alt = '';

    avatarsContainer.appendChild(image);

    if (index > 9) {
      const more = document.createElement("span");
      more.classList = 'flex items-center justify-center text-xs bg-black text-white font-bold h-8 w-8 rounded-full ring-2 ring-white';
      more.innerHTML = `+${uniqueAvatars.length - 9}`;
      avatarsContainer.appendChild(more);

      break;
    }
  };
}

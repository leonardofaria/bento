# Bento Hugo Theme

[![Buy me a coffee](https://badgen.net/badge/icon/buymeacoffee?icon=buymeacoffee&label)](https://www.buymeacoffee.com/leonardofaria)

A minimalist theme for Hugo, built with Tailwind CSS.

## Demo: [Bento demo site](https://bento-hugo-theme.netlify.app/) - [My personal website](https://leonardofaria.net)

![Theme screenshot](https://raw.githubusercontent.com/leonardofaria/bento/master/images/screenshot.png)

## Features

- Clean: inspired by Casper, Medium and other minimalist design ideas
- Responsive
- Super-fast - [100% in Lighthouse tests](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fbento-hugo-theme.netlify.app%2F)
- Tailwind CSS with PostCSS: super tiny CSS file
- Google Analytics, Fathom Analytics, Umami and Disqus integration
- Syntax Highlighting with GitHub theme
- Full content RSS
- Turbolinks: no page refresh
- Support to custom links in the top bar
- Subtle animations
- [Check all features live and learn more about customization](https://bento-hugo-theme.netlify.app/)

## Installation

Inside the folder of your Hugo site run:

```
$ git submodule add https://github.com/leonardofaria/bento.git themes/bento
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

### The config file

Copy the `config.toml` in the `exampleSite` to the root of your Hugo site. Change strings as you like.

### The `package.json` file

Copy the `package.json` in this folder to the root of your Hugo site and run:

```
$ npm install # or yarn install
```

### Local preview

In order to see your site in action, run Hugo's built-in local server:

```
$ npm run dev
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## Customization

### The home page

The home page will show the headline, description and a list of all posts. 

If you don't like this setup, in your Hugo website you can create a `layouts/index.html` if the content you like.

### Writing posts

Write posts using Markdown. You can also add HTML and use TailwindCSS classes for custom styles.

The theme has support to categories and tags. Tags will be shown in the archives page.

[Learn more about writing posts in the live demo website](https://bento-hugo-theme.netlify.app/).

## Update the theme

Inside the folder of your Hugo site run:

```
$ git submodule update --remote --merge
```

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/leonardofaria/bento/issues) to let me know. Or make directly a [pull request](https://github.com/leonardofaria/bento/pulls).

## License

This theme is released under the [MIT license](https://github.com/leonardofaria/bento/blob/master/LICENSE).

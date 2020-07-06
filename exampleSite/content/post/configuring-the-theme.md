+++
author = "Bento"
title = "Configuring the theme"
date = "2020-07-04"
description = "A brief post showing all configuration options"
tags = [
    "theme",
]
+++

Sharing the [`config.toml`](https://github.com/leonardofaria/bento/blob/master/exampleSite/config.toml) used in this website:

```toml
# Better code higlighting
# via https://discourse.gohugo.io/t/pygmentscodefences-how-to-choose-themes/3842/3
pygmentsCodefences = true
pygmentsStyle = "vs"

# Integrations
googleAnalytics = "UA-XXXXXX-XX"
disqusShortname = "your-disqus-shortname"

# Hightlight theme
[markup.highlight]
  style = "github"

# Allow HTML rendering inside markdown
[markup.goldmark.renderer]
  unsafe = true

[params]
  # Show intro in the home page (with headline and description)
  intro = true
  headline = "This is a headline"
  description = "A minimalist theme for Hugo, build with Tailwind CSS."

  # Copyright note in the footer
  copyright = "Copyright © 2020 Someone"

  # Image in the homepage. You can setup a different image for social media
  cover = "images/vancouver.jpg"
  ogImage = "images/og_image.jpg"

  # Social media usernames
  github = "XXXX"
  twitter = "XXXX"
  linkedin = "https://linkedin.com/in/XXXX"
  email = "email@xxxx.com"

  # Avatar (shown in the homepage)
  avatar = "images/avatar.jpg"
  # Bio is shown in the end of posts
  authorBio = "Bento is a doggo who likes to code. Follow him on <a href='https://twitter.com/XXX'>Twitter</a>"

# Items in the top menu
[menu]
  [[menu.main]]
      name = "About"
      url = "/about"
      weight = 1

  [[menu.main]]
      name = "Archives"
      url = "/archives"
      weight = 1

  [[menu.main]]
      name = "Source code"
      url = "https://github.com/leonardofaria/bento"
      weight = 1

```
# Bento Hugo Theme

A minimalist theme for Hugo, build with Tailwind CSS.

## Demo: [Bento](https://bento-hugo-theme.netlify.app/)

![Theme screenshot](https://raw.githubusercontent.com/leonardofaria/bento/master/images/screenshot.png)

## Features

- Clean: inspired by Casper, Medium and other minimalist design ideas
- Responsive
- Super-fast - close to 100% in Lighthouse tests
- Tailwind CSS with PostCSS: super tiny CSS file

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

## Update the theme

Inside the folder of your Hugo site run:

```
$ git submodule update --remote --merge
```

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/leonardofaria/bento/issues) to let me know. Or make directly a [pull request](https://github.com/leonardofaria/bento/pulls).

## License

This theme is released under the [MIT license](https://github.com/leonardofaria/bento/blob/master/LICENSE).

+++
author = "Bento"
title = "Writing content"
date = "2020-07-05"
description = "A brief post showing all features of the theme"
tags = [
    "theme",
]
+++

Check in this post a few tips to use Bento better :) 

## Hiding design elements

You can hide elements shown in the single page. Check this example - from the [about page](https://github.com/leonardofaria/bento/blob/master/exampleSite/content/about.md):

```
hideMetadata = "true"
hideAuthorBio = "true"
hideComments = "true"
hideSuggestions = "true"
```

- `hideMetadata` hides the date about the page title
- `hideAuthorBio` hides the avatar / author bio
- `hideComments` hides Disqus comments
- `hideSuggestions` hides previous/next posts

## Using TailwindCSS

Using the Bento theme, you can use [TailwindCSS](https://tailwindcss.com/) to create custom designs.

Inside a markdown file, add any TailwindCSS class and they will be rendered according to the framework. Example (from their website):

<div class="shadow-lg leading-normal self-end bg-white w-64 rounded-lg relative" style="width: 26.1782rem;">
  <div class="hidden p-6" style="display: flex;">
    <img src="https://tailwindcss.com/img/erin-lindford.jpg" alt="" class="h-24 w-24 block mr-6 rounded-full"> 
    <div class="text-gray-800 text-left">
      <div class="text-xl font-normal text-gray-800">
        <div class="inline-block relative">Erin Lindford</div>
      </div>
      <div>
        <div class="inline-block relative text-purple-500">Product Engineer</div>
      </div>
      <div>
        <div class="inline-block relative text-gray-600">erinlindford@example.com</div>
      </div>
      <div>
        <div class="inline-block relative text-gray-600">(555) 765-4321</div>
      </div>
    </div>
  </div>
</div>

## Creating full-width content

Use the `.full-width` class in elements you want to take the whole viewport width. Example: 

<div class="full-width">
  <img src="/images/vancouver.jpg" alt="Vancouver" />
</div>

Code:

```html
<div class="full-width">
  <img src="/images/vancouver.jpg" alt="Vancouver" />
</div>
```

This will also work for embedded content. Check the example, embedding codepen: 

<div class="full-width">
  <iframe src="https://codepen.io/leonardofaria/pen/yLLZNrw" class="w-full h-screen"></iframe>
</div>

```html
<div class="full-width">
  <iframe src="https://codepen.io/leonardofaria/pen/yLLZNrw" class="w-full h-screen"></iframe>
</div>

```
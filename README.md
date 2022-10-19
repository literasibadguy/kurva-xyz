# Kurva - Web Design Publishing Index

https://kurva.xyz/

KURVA is a web design exploration index, personal project by [literasibadguy](https://literasi.blog). Making graphic design, ugly posters and many more into web design. It's also a place to learn web design and deep more on HTML and CSS.

<a href="https://www.buymeacoffee.com/literasibadguy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 200px !important;" ></a>

## Building the site

Developed the website using [Eleventy](https://11ty.dev) and using [CUBE CSS](https://cube.fyi) methodology, SASS processed.

The latest Node.js and NPM are required for the development

## Start a local server

```bash
npm install
npm run start
```
Open `http://localhost:8080` to see the site locally

## Web Design Index

Every web design page have own their single file SCSS, so it make me easier and fast to create new page.

So we use nunjucks shortcode that include in header page

```nunjucks
{% if styleScripts %}
{% for item in styleScripts %}
    <link rel="stylesheet" href="{{ helpers.hashForProd(item) }}">
{% endfor %}
{% endif %}
```

and call them in front matter data page

```nunjucks
---
layout: 'layouts/base'
title: Fresh Lemon Soda Machine
cover: "https://assets.kurva.xyz/fresh-lemon-store.png"
pageScripts:
    - '/js/experiments-page.js'
styleScripts:
    - /css/fresh-lemon-soda.css
tags: 
    - feeds
    - flex
    - intermediate
    - in-progress
---
```

## Credit Images

Every web design have material images inside to experiment with it, some of the resources image are through from Tumblr and Are.na. Only respective to owners. Including literasibadguy material contents.
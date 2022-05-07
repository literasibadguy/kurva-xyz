---
layout: layouts/item-page.njk
path: 'tags'
showHero: true
title: Tags
permalink: /{{lang}}/{{ paged.href }}{% if paged.index > 0 %}{{ paged.index + 1 }}/{% endif %}index.html
description: Belajar desain web dan CSS dari contoh kasus
renderData:
  title: "{{ paged.overrideTitle or paged.title | title }}"
  description: "{{ paged.description }}"
  hero: "{{ paged.data.hero }}"
pagination:
  data: collections.tags
  size: 1
  alias: paged
  resolve: values
  addAllPagesToCollections: true
---

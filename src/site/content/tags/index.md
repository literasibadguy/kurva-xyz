---
layout: layouts/index-page.njk
title: Tags
permalink: /{{ paged.href }}{% if paged.index > 0 %}{{ paged.index + 1 }}/{% endif %}index.html
description: Jurnal dan desain terbaru
pagination:
  data: collections.tags
  size: 1
  alias: paged
  resolve: values
  addAllPagesToCollections: true
---

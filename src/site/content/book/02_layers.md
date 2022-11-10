---
layout: layouts/jurnal.njk
title: Layers
tags: book
styleScripts:
    - /css/poster-hate-aesthetic.css
---

*DRAFT INTERACTIVE BOOK, SUPPOSED ANYONE NOT SEEING IT*

One of the process, you always use for designing poster, managing the layers for the object. This chapter we will explore how we using CSS to layers your object.

Some CSS catch you mind, you are familiar with this properties. But there are more for that.

```css
z-index: 2;
```

`z-index` is giving the order how you position your objects in one block element.

You know how to positions yourself in the block.

Lets get into practice.

{% include "posters/hate-aesthetic.njk" %}

We have two elements in this poster, two texts in front and two women hangout image as background.



The rest of them like images, just stay in default.

```html
<div id="hate-aesthetic-poster">
    <div id="dialogue-list">
    </div>
    <img src="/" alt="Woman with a picture" />
</div>
```

To make texts in fronts, we can put `z-index: 2` so It gives signal the order, the texts are leading.

But It requires `position` other than static, giving the texts access for freedom. So we can write

```css

.hate-aesthetic-titles {
    position: absolute;
    z-index: 2;
}

```

Absolute, absolutely giving the freedom, the parent div element must giving the lock to adapt the poster page, with a relative position

```css

#hate-aesthetic-page {
    width: 640px;
    height: 600px;
    background-color: #7096b8;
    position: relative;
}

```
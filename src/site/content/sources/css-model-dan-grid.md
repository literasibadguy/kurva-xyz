---
layout: layouts/source-page.html
title: Kunci CSS Model dan Grid
jurnal: "/jurnal/grid-sederhana-menyusun-foto-model"
renderData:
    title: Kunci CSS Model dan Grid
    demo: "/feeds/model-dan-grid"
    premium: true
tags: 
    - grid
    - basic
---

### CSS

```css
.model__and-grid {
    /* --region-space: #{get-space('base')}; */
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.header-nav {
    height: 60px;
    background-color: antiquewhite;
    margin-bottom: 1rem;
}

.header-nav h3 {
    margin: 0 auto;
    max-width: 1000px;
    text-align: center;
}


.women-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill,
     minmax(var(--auto-grid-min-size, 16rem), 1fr));
    grid-gap: 1rem;
    max-width: 1000px;
    margin: 0 auto;
}

/* Make member in the center of item */
.women-member {
    margin: 0 auto;
}

/* Lets make a space between text and image */
.women-member > * {
    margin-top: 1rem;
  }

.women-member img {
    width: 30vh;
    height: 400px;
    object-fit: cover;
    display: block;
}

```

## HTML Kunci

```html

<main class="model__and-grid">
 <div class="header-nav region">
        <h3>Our Selection Model</h3>
</div>
    <div class="women-grid region">
        <div class="women-member">
            <img src="..." />
            <h3>Kim</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Nadia</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Shinta</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Lia</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Anissa</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Anita</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Kesha</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Nindya</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Margaret</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Tata</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Tiffany</h3>
        </div>
        <div class="women-member">
            <img src="..." />
            <h3>Sari</h3>
        </div>
</div>
</main>

```
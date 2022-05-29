---
layout: layouts/source-page.html
title: Source Key CSS Aviation and Grid Area
renderData:
    title: Source Key CSS Aviation and Grid Area
    demo: "/feeds/aviation-and-grid-area"
    premium: true
tags: 
    - grid
    - basic
# pageScripts:
    # - '/js/access-source.js'
# pageScripts:
    # - '/js/checkout.js'
---

```css
.flight_grid {
    width: 100%;
    display: grid;
    /* // grid-template-columns: 800px 16fr 16fr auto; */
    grid-template-columns: [col1-mulai] 1fr
     [col1-akhir col2-mulai] 1fr
      [col2-akhir col3-mulai] 1fr
       [col3-akhir col4-mulai] 1fr
        [col4-akhir col5-mulai] 1fr
        [col5-akhir col6-mulai] 1fr
        [col6-akhir col7-mulai] 1fr
        [col7-akhir col8-mulai] 1fr
        [col8-akhir];
    grid-template-rows: [baris1-mulai] auto
    [baris1-akhir baris2-mulai] auto
     [baris2-akhir baris3-mulai] auto
      [baris3-akhir baris4-mulai] auto
       [baris4-akhir baris5-mulai] auto
       [baris5-akhir baris6-mulai] auto
       [baris6-akhir baris7-mulai] auto
       [baris7-akhir baris8-mulai] auto
       [baris8-akhir];
    background-color: black;

    h1, h2, h3, h4, p {
        color: white;
        font-weight: 400;
    }

    h3 {
        border-bottom: 1px solid white;
        padding-bottom: 1rem;
    }
}

.arrow-icon {
    filter: invert(1);
    width: 30px;
}

.featured__flight {
    border: 0.5px solid white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-mulai;
    gap: $global-gutter;
    grid-area: baris1-mulai / col1-mulai / baris1-akhir / col8-akhir;
}

.flight__subs {
    grid-area: baris2-mulai/col1-mulai/baris2-akhir/col4-akhir;
}

.white__item {
    grid-area: baris2-mulai/col5-mulai/baris2-akhir/col8-akhir;
}

.order__item {
    grid-area: baris3-mulai/col1-mulai/baris3-akhir/col4-akhir;
}

.test__item {
    grid-area: baris3-mulai/col5-mulai/baris3-akhir/col8-akhir;
}

.career__item {
    grid-area: baris4-mulai/col1-mulai/baris4-akhir/col4-akhir;
}

.research__item {
    grid-area: baris4-mulai/col5-mulai/baris4-akhir/col8-akhir;
}

.office__item {
    grid-area: baris5-mulai/col1-mulai/baris5-akhir/col8-akhir;
}

@include media-query('md') {
    .featured__flight {
        grid-area: baris1-mulai / col1-mulai / baris1-akhir / col4-akhir;
    }

    .flight__subs {
        grid-area: baris1-mulai/col5-mulai/baris1-akhir/col6-akhir;
    }

    .white__item {
        grid-area: baris1-mulai/col7-mulai/baris1-akhir/col7-akhir;
    }

    .order__item {
        grid-area: baris2-mulai/col1-mulai/baris2-akhir/col2-akhir;
    }
    
    .test__item {
        grid-area: baris2-mulai/col3-mulai/baris2-akhir/col4-akhir;
    }

    .career__item {
        grid-area: baris2-mulai/col5-mulai/baris2-akhir/col6-akhir;
    }

    .research__item {
        grid-area: baris2-mulai/col7-mulai/baris2-akhir/col8-akhir;
    }

    .office__item {
        grid-area: baris1-mulai/col8-mulai/baris1-akhir/col8-akhir;
    }
}




.airline__item {
    border: 0.5px solid white;
    padding: 1rem;
}

.flight__meta {
    min-width: 250px;
}

.flight__cover {
    img {
        object-fit: cover;
        min-height: 565px;
    }
}

.subs__item {
    padding: 1rem;
    align-items: flex-mulai;
}

.white__item {
    background-color:  #f7f1ea;
    --guter: 0;
    --repel-vertical-alignment: end;

    h1, h2, h3, h4, p {
        color: #231b15
    }

    h3 {
        border-bottom: 1px solid #231b15;
    }
    
    .jet__cover img {
        min-height: 375px;
        object-fit: cover;
    }
}

.airline__sub_items {
    border-bottom: 1px solid bisque;
    grid-area: baris2-mulai/col1-mulai/baris2-akhir/col4-akhir;
}

// BAGIAN OFFICE

.office__head {
    border-bottom: 0.5px solid white;
    padding-bottom: 1rem;
}

.office__address {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid white;
}

.divide__item {
    max-width: 350px;
    min-height: 500px;
    --flow-space: 1rem;
    padding: 1rem;
    --repel-vertical-alignment: end;


    .divide__img {
        min-height: 300px;
        min-width: 250px;
        object-fit: cover;
    }

    &:first-child {
        border-right: 1px solid grey;
    }
}

.career__visual {
    min-height: 350px;
    object-fit: cover;
    object-position: revert;
    z-index: 1;
}

.career__item {
    display: block;

    .career__hint {
        padding-top: 10px;
    }
}

.research__item {
    display: flex;
    align-items: flex-end;
    
}


```
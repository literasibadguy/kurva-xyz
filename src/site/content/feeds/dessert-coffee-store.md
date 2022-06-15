---
layout: 'layouts/landing-page'
title: Dessert & Coffee Store with Tab Menu
cover: "./src/images/feeds/dessert-and-coffee-store.jpg"
draft: true
pageScripts:
    - '/js/experiments-page.js'
tags: 
    - feeds
    - flex
    - intermediate
---

{# <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1" hidden>
            <slot name="slot-1"></slot>
        </div>
        <div id="panel-2" role="tabpanel" tabindex="-1" aria-labelledby="tab-2" hidden>
            <slot name="slot-2"></slot>
        </div> #}

{# {% set tabFilters = [{title: "Dessert", id: "panel-1", }, {title: "Cocktail", id: "panel-2"}] %} #}

<div id="dessert-page">
        <div id="dessert-intro" class="switcher">
          <div id="dessert-info" class="all-center edges">
          <div id="dessert-store">
            <h2>Visit our store</h2>
            <p>Open 10am - 8pm</p>
            <p>2699 Velvet St.</p>
            <p>Bugis City, 24556</p>
          </div>
           <div id="dessert-title">
            <h1>DESSERT & COFFEE STORE</h1>
            <h2>Established since 2019</h2>
          </div>
          </div>
          <div class="dessert-cover">
              <h1 id="des-slogan">Sweets for your daily</h1>
              <img src="https://d2w9rnfcy7mm78.cloudfront.net/7787053/original_62bdba825b89686b992bce78ccf3383a.png?1593126635?bc=0" />
          </div>
        </div>
        <tab-filters all="All">
        </tab-filters>
        <div id="panel-1" role="tabpanel" aria-labelledby="tab-1">
          <h2 id="dessert-heading" class="all-center wrapper region edges">"I have been thinking get coffee and dessert, It's just a couple of miles from our village"</h2>
          <div id="dessert-list" class="wrapper auto-grid">
                <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/11619598/original_5ab811222e687d35e2b8faedbf698b4c.jpg?1618648750?bc=0" />
                    <div class="h-stack">
                    <h2 class="dessert-item__title">Pancake Apple Klasik</h2>
                    <h2>$25</h2>
                    </div>
                </div>
                <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/11504864/original_40046d78e91a12cbc26f6db22abf4dcc.jpg?1617875581?bc=0" />
                    <div class="h-stack">
                      <h2 class="dessert-item__title">Strawberry Vanilla Cake</h2>
                      <h2>$4</h2>
                    </div>
                </div>
                <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/12625110/original_2df9411cc4faf82ce262f027716ee2bf.jpg?1627046675?bc=0" />
                    <div class="h-stack">
                      <h2 class="dessert-item__title">Red White Pudding</h2>
                      <h2>$6</h2>
                    </div>
                </div>
                <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/13254381/original_2b92d5c3e36342d1079095b1f09b187f.jpg?1632219187?bc=0" />
                    <div class="h-stack">
                      <h2 class="dessert-item__title">Angler Signature</h2>
                      <p>$6</p>
                    </div>
                </div>
                <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/11504865/original_ec1af6bca61cef43804cd13aec821ec4.jpg?1617875585?bc=0" />
                    <div class="h-stack">
                      <h2 class="dessert-item__title">Classic Cheese Cake</h2>
                      <h2>$6</h2>
                    </div>
                </div>
            </div>
        </div>
        <div id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
            <h2 id="coffee-heading" class="all-center wrapper region edges">Our Fresh Drinking</h2>
            <div id="coffee-list" class="wrapper auto-grid">
              <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/12929361/original_25f19c9c385b5c76f46ad7b0e17452f3.jpg?1629750992?bc=0" />
                    <div class="h-stack">
                    <h2 class="dessert-item__title">Lemon Fresh Drink</h2>
                    <h2>$25</h2>
                    </div>
              </div>
               <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/14538477/original_f1330c0ba8726eee8c706f71cfa5f946.jpg?1641130908?bc=0" />
                    <div class="h-stack">
                    <h2 class="dessert-item__title">Pulm Citrus Ice</h2>
                    <h2>$25</h2>
                    </div>
              </div>
              <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/2955104/original_76ecbb2d7b5678f5090a8a2374e42967.jpg?1540895954?bc=1" />
                    <div class="h-stack">
                    <h2 class="dessert-item__title">Pandan Squash Soda</h2>
                    <h2>$25</h2>
                    </div>
              </div>
              <div class="dessert__item">
                    <img class="dessert__item-cover" src="https://d2w9rnfcy7mm78.cloudfront.net/2955104/original_76ecbb2d7b5678f5090a8a2374e42967.jpg?1540895954?bc=1" />
                    <div class="h-stack">
                    <h2 class="dessert-item__title">Pandan Squash Soda</h2>
                    <h2>$25</h2>
                    </div>
              </div>
            </div>
        </div>

</div>
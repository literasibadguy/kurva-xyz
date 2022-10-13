---
layout: layouts/source-page.html
title: Source CSS Ocean Red Concert Poster Page
renderData:
    title: Source CSS Ocean Red Concert Poster Page
    demo: "/feeds/model-dan-grid"
    premium: true
tags: 
    - grid
    - basic
---

This source written with SCSS

```scss

#concert-red-page {
    color: black;
    min-height: 1400px;
    background-color: rgb(245, 2, 1);
}

#ocean-base {
    z-index: 1;
    position: relative;
    display: block;
    max-height: 700px;
}

#ocean-layout {
    display: flex;
    flex-direction: column;
    // border: 2px solid black;
    z-index: 2;
    position: relative;
}

// END FOR WIDE

#ocean-yellow {
    display: grid;
    clip-rule: evenodd;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    // margin-top: -40em;
    position: absolute;
    top: 0;

    #yellow-2 {
        grid-row: 2;
        grid-column: 5;
    }

    #yellow-3 {
        grid-row: 3;
        grid-column: 2;
    }

    #yellow-3 {
        grid-row: 4;
        grid-column: 5;
    }

    #yellow-4 {
        grid-row: 5;
        grid-column: 6;
    }

    #yellow-5 {
        grid-row: 6;
        grid-column: 1;
    }

    #yellow-6 {
        grid-row: 1;
        grid-column: 7;
    }


}


.yellow-circle {
    width: 80px;
    height: 80px;
    background-color: yellow;
    z-index: 1;
    clip-path: circle();

}


#concert-head {
    margin-inline: auto;
    line-height: 1;

    h1 {
        font-size: 30px;
        color: rgb(254, 255, 0);
    }
}

#ocean-box {
    width: 300px;
    height: 100px;
    border-right: 8px solid yellow;
    border-top: 8px solid yellow;
}

#concert-cover-1 {
    position: relative;
    object-fit: cover;
    margin-inline: auto;
    max-height: 1280px;
    object-fit: cover;
    padding-top: 5em;
}

#ocean-blue-fade {
    opacity: 0.5;
    text-align: left;
    min-width: 300px;
}

.ocean-grid {
    position: relative;
    margin: 2em;
}

.ocean-blue {
    // transform: rotate(30deg);
    float: left;
    text-align: center;
    font-size: 24px;
    color: rgb(254, 255, 0);
}

#ocean-blue-fade {
    text-align: center;
}

#ocean-blue-black-right {
    float: right;
}

#ocean-blue-black-center {
    color: black;
}

#dragon-center {
    margin-inline: auto;
    position: relative;
    margin-top: 1em;
    // margin-top: -30em;
    // margin-top: -40em;
    // margin-bottom: -6em;
}

.dragon-moon {
    font-size: 20px;
    color: rgb(254, 255, 0);
}

#dragon-pattern {
    margin: 0 auto;
    max-width: 1000px;
    color: rgb(254, 255, 0);
    z-index: 3;
    margin-top: 1em;
    padding-bottom: 1em;
}

#pupu-large-size {
    font-size: 80px;
    transform: scale(1, 3);
}


.inline-concert {
    position: relative;
    display: flex;
    flex-wrap: wrap;
   
    h1 {
        font-size: 25px;
    }
}

#concert-schedule {
    font-size: 12px;
    justify-content: space-between;
}

#concert-club {
    bottom: -50px;
    justify-content: space-between;
}

@include media-query('md') {

    #ocean-base {
        z-index: 1;
        position: relative;
        display: block;
    }

    #ocean-layout {
        display: flex;
        flex-direction: column;
        // border: 2px solid black;
        z-index: 2;
        position: absolute;
        top: 5em;
    }

    #ocean-yellow {
        display: grid;
        clip-rule: evenodd;
        grid-template-columns: repeat(8, 2fr);
        grid-template-rows: repeat(6, 2fr);
        // margin-top: -40em;
        position: absolute;
        top: 0;
        left: 10em;
    
        #yellow-2 {
            grid-row: 2;
            grid-column: 5;
        }
    
        #yellow-3 {
            grid-row: 3;
            grid-column: 2;
        }
    
        #yellow-3 {
            grid-row: 4;
            grid-column: 5;
        }
    
        #yellow-4 {
            grid-row: 5;
            grid-column: 6;
        }
    
        #yellow-5 {
            grid-row: 6;
            grid-column: 1;
        }
    
        #yellow-6 {
            grid-row: 1;
            grid-column: 7;
        }
    }

    #concert-cover-1 {
        max-height: 1400px;
        padding-top: 8em;
        padding-bottom: 8em;
    }

    // Grid Yellow
.yellow-circle {
    width: 160px;
    height: 160px;
    background-color: yellow;
    z-index: 1;
    clip-path: circle();

}

.ocean-blue {
    // transform: rotate(30deg);
    float: left;
    text-align: left;
    font-size: 30px;
    color: rgb(254, 255, 0);
}

#dragon-center {
    margin-inline: auto;
    position: relative;
    margin-top: 18em;
    // margin-top: -30em;
    // margin-top: -40em;
    // margin-bottom: -6em;
}

.ocean-grid {
    position: relative;
    margin-top: 10em;
}


#dragon-pattern {
    margin: 0 auto;
    max-width: 1000px;
    color: rgb(254, 255, 0);
    z-index: 3;
    margin-top: 1em;
}

#pupu-large-size {
    font-size: 200px;
    transform: scale(1, 2);
}

.dragon-moon {
    font-size: 24px;
    color: rgb(254, 255, 0);
}

.inline-concert {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5em;
   
    h1 {
        font-size: 45px;
    }
}

.inline-concert {
    gap: 5em;
}

#concert-club {
    gap: 2em;
    justify-content: space-between;
}

#concert-schedule {
    justify-content: space-between;
}

}
```
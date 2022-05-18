
const path = require('path');
const {PAGINATION_COUNT} = require('../_utils/constants');

module.exports = {
  env: process.env.ELEVENTY_ENV || 'dev',
  percy: process.env.PERCY || false,
  contentDir: path.join('src/site/content/', process.env.ELEVENTY_LANG || ''),
  title: 'Kurva',
  titleVariation: 'Home',
  url: 'https://kurva.xyz',
  buildDate: new Date(),
  paginationCount: PAGINATION_COUNT,
  firebase: {
    prod: {
      apiKey: "AIzaSyAs0uVHfoQxIjdKdnlbz-BOIMZO_3ThnKw",
      authDomain: "kurva-xyz.firebaseapp.com",
      projectId: "kurva-xyz",
      storageBucket: "kurva-xyz.appspot.com",
      messagingSenderId: "314902854293",
      appId: "1:314902854293:web:a6dde1e4f82b218310b99c",
      measurementId: "G-QDKE98Q7WR"
    },
    stag: {
      apiKey: "AIzaSyDkM-N1ElhDcKMqZjppH19_DXdybZsAaX4",
      authDomain: "kurva-stage-xyz.firebaseapp.com",
      projectId: "kurva-stage-xyz",
      storageBucket: "kurva-stage-xyz.appspot.com",
      messagingSenderId: "443896995756",
      appId: "1:443896995756:web:aac54fe4c84523e2536409",
      measurementId: "G-6HHTTHF0J6"
    }
  }
}
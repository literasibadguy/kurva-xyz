
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
}
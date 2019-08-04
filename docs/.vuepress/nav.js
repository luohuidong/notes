const basics = require('../basics/')
const react = require('../react/')

module.exports = [
  {
    text: '首页',
    link: '/',
  },
  basics.nav,
  react.nav,
  {
    text: '前端工程化',
    items: [
      { text: 'Webpack', link: '/advance/webpack/' },
      { text: 'Babel', link: '/advance/babel/' }
    ]
  }
]

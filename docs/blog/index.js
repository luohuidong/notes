const fs = require('fs')
const path = require('path')

let fileNames = fs.readdirSync(path.resolve(__dirname, './posts'))
fileNames.reverse()
const firstPost = fileNames[0].replace(/.md/, '')
fileNames = fileNames.map(filename => filename.replace(/.md/, ''))

const nav = {
  text: '博客',
  link: `/blog/posts/${firstPost}`
}
const sidebar = {
  '/blog/posts/': [
    {
      title: '博客',
      children: fileNames
    }
  ]
}

module.exports = {
  nav,
  sidebar
}

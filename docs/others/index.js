const { generateNavAndSidebarConfig } = require('../utils')

const videoAudioConfig = require('./video-audio')

const docs = [videoAudioConfig]
const nav = {
  text: '其它',
  items: []
}
const sidebar = {}
generateNavAndSidebarConfig(docs, nav, sidebar)

module.exports = {
  nav,
  sidebar
}

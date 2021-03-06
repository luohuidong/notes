const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'Linux'
const firstPost = 'ssh'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title,
      children: [
        firstPost,
        'change-ssh-login-port',
        'find-ip-address',
        'systemctl',
        'yum',
        'upload-download',
        'proxy'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}

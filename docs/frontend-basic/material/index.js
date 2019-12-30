const navItem = {
  text: '基础',
  link: '/frontend-basic/material/material'
}

const sidebar = {
  ['/frontend-basic/material/']: [
    {
      title: '基础',
      children: [
        'material',
        'css',
        'event',
        'web-api',
      ]
    },
  ]
}

module.exports = {
  navItem,
  sidebar
}

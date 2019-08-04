const path = '/basics/es5/'
const title = 'ES5'

// 定义导航中 ES5 链接
const navItem = { 
  text: title, 
  link: `${path}basic-types`
}

// 定义 ES5 相关内容的侧边栏
const sidebar = {
  [path]: [
    {
      title,
      collapsable: false,
      children: [
        'basic-types',
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar
}

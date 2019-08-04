const path = '/basics/typescript/'
const title = 'TypeScript'

const navItem = { 
  text: title, 
  link: `${path}basic-types`
}

const sidebar = {
  [path]: [
    {
      title,
      collapsable: false,
      children: [
        'basic-types',
        'interfaces'
      ]
    }
  ]
}

module.exports = {
  navItem,
  sidebar  
}

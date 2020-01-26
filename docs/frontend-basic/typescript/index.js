const { getDocsDirectory } = require('../../utils')

const path = getDocsDirectory(__dirname)
const title = 'TypeScript'
const firstPost = 'material'

const navItem = {
  text: title,
  link: `${path}${firstPost}`
}

const sidebar = {
  [path]: [
    {
      title: 'TypeScript',
      children: [
        'material',
        'function',
        'generics'
      ]
    },
    {
      title: '基本类型',
      children: [
        'basic-types/introduce',
        'basic-types/primary',
        'basic-types/object',
        'basic-types/extends'
      ]
    },
    {
      title: '枚举',
      children: [
        'enums/introduce',
        'enums/enums-type',
        'enums/enums-member-type',
        'enums/others',
        'enums/question'
      ]
    },
    {
      title: '接口',
      children: [
        'interfaces/excess-property-checks',
      ]
    },
    {
      title: '类型检查机制',
      children: [
        'type-check/type-inference',
        'type-check/type-compatibility'
      ]
    }
  ],
}

module.exports = {
  navItem,
  sidebar
}

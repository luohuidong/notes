const { getDocsDirectory, addPrefix } = require('../../../utils')

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
        'generics'
      ]
    },
    {
      title: '函数',
      children: addPrefix([
        'introduce',
        'function-types',
        'optional-and-default-parameters',
        'rest-parameters',
        'this'
      ], 'function')
    },
    {
      title: '基本类型',
      children: addPrefix([
        'introduce',
        'primary',
        'object',
        'extends'
      ], 'basic-types')
    },
    {
      title: '枚举',
      children: addPrefix([
        'introduce',
        'enums-type',
        'enums-member-type',
        'others',
        'question'
      ], 'enums')
    },
    {
      title: '接口',
      children: addPrefix([
        'excess-property-checks',
      ], 'interfaces')
    },
    'type-inference',
    {
      title: '类型兼容性',
      children: addPrefix([
        'introduction',
        'function',
        'class'
      ], 'type-compatibility')
    }
  ],
}

module.exports = {
  navItem,
  sidebar
}

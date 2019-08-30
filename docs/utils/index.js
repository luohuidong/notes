const path = require('path')

/**
 * 获取文档的目录，文档对应路径的规则请看 vuepress 文档
 * 如 /mnt/d/project/notes/docs/frontend-basic/typescript
 * 处理后将得到 /frontend-basic/typescript/
 * @param {string} dirName 文档所在文件目录路径
 */
function getDocsDirectory(dirName) {
  const paths = dirName.split(path.sep)
  paths.indexOf('docs')
  return '/' + paths.slice(paths.indexOf('docs') + 1).join('/') + '/'
}

module.exports = {
  getDocsDirectory
}

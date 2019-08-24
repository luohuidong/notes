/**
 * 获取文档的目录
 * 如 /mnt/d/project/notes/docs/frontend-basic/typescript
 * 处理后将得到 /frontend-basic/typescript/
 * @param {string} dirName 文档所在文件目录路径
 */
function getDocsDirectory(dirName) {
  return dirName.split('/docs')[1] + '/'
}

module.exports = {
  getDocsDirectory
}

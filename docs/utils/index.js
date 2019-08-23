function getDocsDirectory(dirName) {
  return dirName.split('/docs')[1] + '/'
}

module.exports = {
  getDocsDirectory
}

const path = '/advance/git/'

const navItem = {
  text: 'Git',
  link: `${path}material`
}

const sidebar = {
  [path]: [
    {
      title: 'Git',
      children: [
        'material',
        'start',
        'getting-a-git-repository',
        'recording-changes-to-the-repository',
        'rename-filename',
        'git-log',
        'git-folder',
        'git-objects',
        'git-flow'
      ]
    },
  ],
}

module.exports = {
  navItem,
  sidebar
}

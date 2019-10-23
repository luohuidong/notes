# 分支模型

在 git flow 中有两个重要的分支，master 分支以及 develop 分支。

master 分支只应该存有生产环境的代码。我们不应该直接在 master 分支上进行开发，而是应该在其它特定的分支上进行开发。所以不应该存在直接向 master 分支 commit 的情况。

develop 分支是所有新功能开发的基础分支，当我们需要添加一个新的 feature 的时候，应该基于 develop 分支创建一个新的 feature 分支。develop 分支应用于汇总所有已完成的 feature 代码，这些代码等待着被合并到 master 分支上，并通过 master 分支发布正式版本。



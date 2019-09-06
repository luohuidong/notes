# 给文件重命名的简便方法

Git 的初学者，如果对已经被 Git 跟踪的文件进行重命名，那么很可能进行下面的步骤

1. 工作区中进行文件名的修改，如 `mv a.md abc.md`。
1. 通过 `git add abc.md` 保存到暂存区中。
1. 通过 `git rm a.md` 将 a.md 文件从 Git 中删除。
1. 然后再通过 `git commit -m 'your_message'` 将更改纳入到版本历史中。

上面给文件重命名经历了三个步骤，如果每次都这么命名未免有些繁琐，而执行 `git mv old_filename new_filename` 就能直接将文件进行重命名，并且放到暂存区中等待纳入到版本历史。

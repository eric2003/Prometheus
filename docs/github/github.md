# Github Pages

## article link
- [Publish a Website with Material for MkDocs and GitHub Pages](https://yang-xijie.github.io/BLOG/Markdown/mkdocs-site/).

## Github相关专题链接整理
- [github actions 从入门到精通系列链接整理](https://zhuanlan.zhihu.com/p/388642124/).
- [Complete list of github markdown emoji markup](https://zhuanlan.zhihu.com/p/556368600/).
- [Enrich your GitHub profile with these tips](https://zhuanlan.zhihu.com/p/557622947/).
- [github profile trophy](https://zhuanlan.zhihu.com/p/558769626/).
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme/).
- [GitHub Codespaces简单测试](https://zhuanlan.zhihu.com/p/602898559/).
- [如何在github上创建自己的主页](https://zhuanlan.zhihu.com/p/354493120/).
- [Github科学计算相关链接整理](https://zhuanlan.zhihu.com/p/532669612/).
- [使用makdown+mkdocs在github上创建自己的主页](https://zhuanlan.zhihu.com/p/685390406/).
- [使用sphinx在github上创建自己的主页](https://zhuanlan.zhihu.com/p/685677623/).

- [通过ipaddress更新github的hostsIP](https://zhuanlan.zhihu.com/p/681350679).

git clone git@github.com:eric2003/ModernCpp.git
```
eric@fantasy:~/work/cpp_work$ git clone git@github.com:eric2003/ModernCpp.git
Cloning into 'ModernCpp'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

根据错误信息，git@github.com: Permission denied (publickey)表明你尝试通过SSH连接到GitHub时，GitHub无法识别你的SSH公钥。以下是解决此问题的步骤：
1. 检查SSH密钥是否已生成
```
ls -al ~/.ssh
```

```
然后，登录到你的GitHub账户，进入Settings > SSH and GPG keys，点击New SSH key按钮，粘贴你的公钥内容，并保存。
你可以为每个公钥添加一个描述性的标题，例如Ubuntu Laptop或Windows Desktop，以便区分不同的设备。
测试SSH连接
在每台机器上，运行以下命令测试SSH连接：
ssh -T git@github.com
```

ssh -T git@github.com
```
eric@fantasy:~/work/cpp_work$ ssh -T git@github.com
Hi eric2003! You've successfully authenticated, but GitHub does not provide shell access.
```

```
eric@fantasy:~/work/cpp_work$ git clone git@github.com:eric2003/ModernCpp.git
Cloning into 'ModernCpp'...
remote: Enumerating objects: 521, done.
remote: Counting objects: 100% (521/521), done.
remote: Compressing objects: 100% (453/453), done.
remote: Total 521 (delta 43), reused 517 (delta 43), pack-reused 0 (from 0)
Receiving objects: 100% (521/521), 91.36 KiB | 203.00 KiB/s, done.
Resolving deltas: 100% (43/43), done.
```



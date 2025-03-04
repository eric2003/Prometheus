# Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Git Link

- [git-scm.com](https://git-scm.com/).

## git --version

```git
eric@DELL MINGW64 ~
$ git --version
git version 2.47.1.windows.1
```

```powershell
PS C:\Users\eric> git --version
git version 2.47.1.windows.1
PS C:\Users\eric> git --version
git version 2.48.1.windows.1
```


## ssh-keygen
```
ssh-keygen -t rsa -C 'xxx@163.com'
```

## 显示gitconfig内容
```
git config --list
```


## failed to connect to github 443 error
```
```

## 取消代理

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

ipaddress
```
https://www.ipaddress.com/
```

获取github的global.ssl.fastly地址
```
访问：http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo 获取cdn和ip域名
github.global.ssl  IN  A  151.101.1.194
github.global.ssl  IN  A  151.101.65.194
github.global.ssl  IN  A  151.101.129.194
github.global.ssl  IN  A  151.101.193.194
```

获取github的地址
```
  IN  A  140.82.113.3
```



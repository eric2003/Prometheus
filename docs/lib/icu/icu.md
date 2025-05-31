# icu

## Link

- [icu](https://github.com/unicode-org/icu).
- [ICU-TC Home Page](https://icu.unicode.org/).


git clone git@github.com:unicode-org/icu.git
```
PS D:\work\icu_work> git clone git@github.com:unicode-org/icu.git
Cloning into 'icu'...
remote: Enumerating objects: 1852265, done.
remote: Counting objects: 100% (665/665), done.
remote: Compressing objects: 100% (424/424), done.
remote: Total 1852265 (delta 500), reused 284 (delta 159), pack-reused 1851600 (from 3)
Receiving objects: 100% (1852265/1852265), 3.20 GiB | 5.67 MiB/s, done.
Resolving deltas: 100% (1098175/1098175), done.
Updating files: 100% (13938/13938), done.
PS D:\work\icu_work>
```


```
配置构建：
运行 runConfigureICU 脚本，指定 VS2022 和 x64：
batch

Copy
runConfigureICU.bat Windows MSVC --prefix=C:\dev\icu
```


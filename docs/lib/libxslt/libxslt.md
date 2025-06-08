# libxslt

## Link

- [SQLite3](https://github.com/madler/zlib).

## Windows
```
pacman -Syu
```

```
pacman -Syu --overwrite '*'
```


### pacman -S mingw-w64-x86_64-libxslt
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-libxslt
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-libxslt-1.1.43-1

Total Download Size:   0.35 MiB
Total Installed Size:  1.76 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libxslt-1...   354.6 KiB   277 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-libxslt                    [###############################] 100%
```

### xsltproc --version
```
eric@DELL MINGW64 ~
$ xsltproc --version
Using libxml 21210, libxslt 10143 and libexslt 824
xsltproc was compiled against libxml 21210, libxslt 10143 and libexslt 824
libxslt 10143 was compiled against libxml 21210
libexslt 824 was compiled against libxml 21210
```
# Meson

## Link

- [Meson 介绍](https://www.cnblogs.com/RioTian/p/17984286).
- [Meson构建系统（一）](https://blog.csdn.net/u010074726/article/details/108695256).
- [Meson](https://zh.wikipedia.org/wiki/Meson).
- [Meson编译系统使用方法](https://soaringleefighting.github.io/2021/08/12/%E3%80%90%E5%B7%A5%E7%A8%8B%E5%8C%96%E7%B3%BB%E5%88%97%E3%80%91Meson%E7%BC%96%E8%AF%91%E7%B3%BB%E7%BB%9F%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/).
- [七大顶尖 C++ 开源构建系统](https://www.incredibuild.cn/blog/top-7-open-source-c-build-systems).

## Install

### python --version
```
PS C:\Users\eric> python --version
Python 3.13.3
```

### python -m pip install --upgrade pip
```
PS C:\Users\eric> python -m pip install --upgrade pip
Requirement already satisfied: pip in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (25.0.1)
Collecting pip
  Downloading pip-25.1.1-py3-none-any.whl.metadata (3.6 kB)
Downloading pip-25.1.1-py3-none-any.whl (1.8 MB)
   ---------------------------------------- 1.8/1.8 MB 1.9 MB/s eta 0:00:00
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 25.0.1
    Uninstalling pip-25.0.1:
      Successfully uninstalled pip-25.0.1
Successfully installed pip-25.1.1
```

### pip3 install --user meson
```
PS C:\Users\eric> pip3 install --user meson
Collecting meson
  Downloading meson-1.8.0-py3-none-any.whl.metadata (1.8 kB)
Downloading meson-1.8.0-py3-none-any.whl (1.0 MB)
   ---------------------------------------- 1.0/1.0 MB 1.0 MB/s eta 0:00:00
Installing collected packages: meson
  WARNING: The script meson.exe is installed in 'C:\Users\eric\AppData\Roaming\Python\Python313\Scripts' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
Successfully installed meson-1.8.0
```

### meson --version
```
PS C:\Users\eric> meson --version
1.8.0
```


## MSYS2

###

```
python -m pip install --upgrade pip
```
### pacman -S mingw-w64-x86_64-python-pip
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-python-pip
resolving dependencies...
looking for conflicting packages...

Packages (3) mingw-w64-x86_64-python-distlib-0.3.9-1  mingw-w64-x86_64-python-setuptools-78.1.0-1
             mingw-w64-x86_64-python-pip-25.0.1-1

Total Download Size:    4.68 MiB
Total Installed Size:  28.46 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-python-di...   283.2 KiB   250 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-python-se...     2.1 MiB  1690 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-python-pi...     2.3 MiB  1745 KiB/s 00:01 [###############################] 100%
 Total (3/3)                       4.7 MiB  2.84 MiB/s 00:02 [###############################] 100%
(3/3) checking keys in keyring                               [###############################] 100%
(3/3) checking package integrity                             [###############################] 100%
(3/3) loading package files                                  [###############################] 100%
(3/3) checking for file conflicts                            [###############################] 100%
(3/3) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/3) installing mingw-w64-x86_64-python-setuptools          [###############################] 100%
(2/3) installing mingw-w64-x86_64-python-distlib             [###############################] 100%
(3/3) installing mingw-w64-x86_64-python-pip                 [###############################] 100%

eric@DELL MINGW64 ~
```

pacman -S mingw-w64-x86_64-ca-certificates
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-ca-certificates
resolving dependencies...
looking for conflicting packages...

Packages (3) mingw-w64-x86_64-libtasn1-4.20.0-1  mingw-w64-x86_64-p11-kit-0.25.5-1
             mingw-w64-x86_64-ca-certificates-20241223-1

Total Download Size:   0.99 MiB
Total Installed Size:  4.03 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libtasn1-...   196.3 KiB   190 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-ca-certif...   395.0 KiB   370 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-p11-kit-0...   422.7 KiB   293 KiB/s 00:01 [###############################] 100%
 Total (3/3)                    1014.1 KiB   587 KiB/s 00:02 [###############################] 100%
(3/3) checking keys in keyring                               [###############################] 100%
(3/3) checking package integrity                             [###############################] 100%
(3/3) loading package files                                  [###############################] 100%
(3/3) checking for file conflicts                            [###############################] 100%
(3/3) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/3) installing mingw-w64-x86_64-libtasn1                   [###############################] 100%
(2/3) installing mingw-w64-x86_64-p11-kit                    [###############################] 100%
(3/3) installing mingw-w64-x86_64-ca-certificates            [###############################] 100%

eric@DELL MINGW64 ~
```

### 安装或更新 OpenSSL

```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-openssl
warning: mingw-w64-x86_64-openssl-3.5.0-1 is up to date -- reinstalling
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-openssl-3.5.0-1

Total Installed Size:  58.30 MiB
Net Upgrade Size:       0.00 MiB

:: Proceed with installation? [Y/n] y
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) reinstalling mingw-w64-x86_64-openssl                  [###############################] 100%
```

date
```
eric@DELL MINGW64 ~
$ date
Tue May 27 01:56:09 CST 2025
```

### pacman -S mingw-w64-x86_64-meson
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-meson
resolving dependencies...
looking for conflicting packages...

Packages (2) mingw-w64-x86_64-ninja-1.12.1-1  mingw-w64-x86_64-meson-1.8.1-1

Total Download Size:    2.55 MiB
Total Installed Size:  14.70 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-ninja-1.1...   500.5 KiB   441 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-meson-1.8...     2.1 MiB  1254 KiB/s 00:02 [###############################] 100%
 Total (2/2)                       2.6 MiB  1506 KiB/s 00:02 [###############################] 100%
(2/2) checking keys in keyring                               [###############################] 100%
(2/2) checking package integrity                             [###############################] 100%
(2/2) loading package files                                  [###############################] 100%
(2/2) checking for file conflicts                            [###############################] 100%
(2/2) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/2) installing mingw-w64-x86_64-ninja                      [###############################] 100%
(2/2) installing mingw-w64-x86_64-meson                      [###############################] 100%
Optional dependencies for mingw-w64-x86_64-meson
    mingw-w64-x86_64-ccache: for a faster compilation
    mingw-w64-x86_64-sccache: for a faster compilation (preferred over ccache)

```

### pacman -S mingw-w64-x86_64-cmake
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-cmake
resolving dependencies...
looking for conflicting packages...

Packages (16) mingw-w64-x86_64-c-ares-1.34.5-1  mingw-w64-x86_64-cppdap-1.65-1
              mingw-w64-x86_64-curl-8.13.0-2  mingw-w64-x86_64-jsoncpp-1.9.6-3
              mingw-w64-x86_64-libarchive-3.8.0-1  mingw-w64-x86_64-libb2-0.98.1-2
              mingw-w64-x86_64-libidn2-2.3.8-2  mingw-w64-x86_64-libpsl-0.21.5-3
              mingw-w64-x86_64-libssh2-1.11.1-1  mingw-w64-x86_64-libunistring-1.3-1
              mingw-w64-x86_64-libuv-1.51.0-1  mingw-w64-x86_64-lz4-1.10.0-1
              mingw-w64-x86_64-nghttp2-1.65.0-1  mingw-w64-x86_64-nghttp3-1.9.0-1
              mingw-w64-x86_64-rhash-1.4.5-1  mingw-w64-x86_64-cmake-4.0.2-1

Total Download Size:   14.80 MiB
Total Installed Size:  81.73 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libarchiv...   878.4 KiB   819 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-cppdap-1....   491.9 KiB   441 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libunistr...   832.7 KiB   565 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-cmake-4.0...     9.2 MiB  6.04 MiB/s 00:02 [###############################] 100%
 mingw-w64-x86_64-curl-8.13...  1519.4 KiB   940 KiB/s 00:02 [###############################] 100%
 mingw-w64-x86_64-libssh2-1...   309.0 KiB   623 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-c-ares-1....   309.2 KiB   421 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-rhash-1.4...   219.0 KiB   646 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-nghttp2-1...   196.3 KiB   530 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-jsoncpp-1...   176.1 KiB   521 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-libuv-1.5...   221.5 KiB   370 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libidn2-2...   170.6 KiB   467 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-lz4-1.10....   166.9 KiB   445 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-libpsl-0....    94.4 KiB   271 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-nghttp3-1...   123.4 KiB   312 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-libb2-0.9...    23.7 KiB  69.2 KiB/s 00:00 [###############################] 100%
 Total (16/16)                    14.8 MiB  5.21 MiB/s 00:03 [###############################] 100%
(16/16) checking keys in keyring                             [###############################] 100%
(16/16) checking package integrity                           [###############################] 100%
(16/16) loading package files                                [###############################] 100%
(16/16) checking for file conflicts                          [###############################] 100%
(16/16) checking available disk space                        [###############################] 100%
:: Processing package changes...
( 1/16) installing mingw-w64-x86_64-cppdap                   [###############################] 100%
( 2/16) installing mingw-w64-x86_64-c-ares                   [###############################] 100%
( 3/16) installing mingw-w64-x86_64-libunistring             [###############################] 100%
( 4/16) installing mingw-w64-x86_64-libidn2                  [###############################] 100%
( 5/16) installing mingw-w64-x86_64-libpsl                   [###############################] 100%
( 6/16) installing mingw-w64-x86_64-libssh2                  [###############################] 100%
( 7/16) installing mingw-w64-x86_64-nghttp2                  [###############################] 100%
( 8/16) installing mingw-w64-x86_64-nghttp3                  [###############################] 100%
( 9/16) installing mingw-w64-x86_64-curl                     [###############################] 100%
(10/16) installing mingw-w64-x86_64-jsoncpp                  [###############################] 100%
(11/16) installing mingw-w64-x86_64-libb2                    [###############################] 100%
(12/16) installing mingw-w64-x86_64-lz4                      [###############################] 100%
(13/16) installing mingw-w64-x86_64-libarchive               [###############################] 100%
(14/16) installing mingw-w64-x86_64-libuv                    [###############################] 100%
(15/16) installing mingw-w64-x86_64-rhash                    [###############################] 100%
(16/16) installing mingw-w64-x86_64-cmake                    [###############################] 100%
Optional dependencies for mingw-w64-x86_64-cmake
    mingw-w64-x86_64-emacs: for cmake emacs mode

eric@DELL MINGW64 ~
```

### cmake --version
```
eric@DELL MINGW64 ~
$ cmake --version
cmake version 4.0.2

CMake suite maintained and supported by Kitware (kitware.com/cmake).
```

### pacman -S mingw-w64-x86_64-libjpeg-turbo
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-libjpeg-turbo
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-libjpeg-turbo-3.1.0-1

Total Download Size:   0.63 MiB
Total Installed Size:  5.75 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libjpeg-t...   640.7 KiB   548 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-libjpeg-turbo              [###############################] 100%
```

### pkg-config --modversion libjpeg
```
eric@DELL MINGW64 ~
$ pkg-config --modversion libjpeg
3.1.0
```

### pacman -S mingw-w64-x86_64-openjpeg2
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-openjpeg2
resolving dependencies...
looking for conflicting packages...
warning: dependency cycle detected:
warning: mingw-w64-x86_64-libwebp will be installed before its mingw-w64-x86_64-libtiff dependency

Packages (8) mingw-w64-x86_64-giflib-5.2.2-1  mingw-w64-x86_64-jbigkit-2.1-5
             mingw-w64-x86_64-lcms2-2.17-1  mingw-w64-x86_64-lerc-4.0.0-1
             mingw-w64-x86_64-libdeflate-1.24-1  mingw-w64-x86_64-libtiff-4.7.0-1
             mingw-w64-x86_64-libwebp-1.5.0-1  mingw-w64-x86_64-openjpeg2-2.5.3-1

Total Download Size:    2.63 MiB
Total Installed Size:  14.39 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libtiff-4...   669.0 KiB   622 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-lcms2-2.1...   377.5 KiB   348 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-lerc-4.0....   284.3 KiB   260 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libwebp-1...   606.5 KiB   549 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-openjpeg2...   438.7 KiB   390 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-giflib-5....   118.9 KiB   324 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-jbigkit-2...   103.7 KiB   273 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-libdeflat...    91.7 KiB   236 KiB/s 00:00 [###############################] 100%
 Total (8/8)                       2.6 MiB  1431 KiB/s 00:02 [###############################] 100%
(8/8) checking keys in keyring                               [###############################] 100%
(8/8) checking package integrity                             [###############################] 100%
(8/8) loading package files                                  [###############################] 100%
(8/8) checking for file conflicts                            [###############################] 100%
(8/8) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/8) installing mingw-w64-x86_64-jbigkit                    [###############################] 100%
(2/8) installing mingw-w64-x86_64-lerc                       [###############################] 100%
(3/8) installing mingw-w64-x86_64-libdeflate                 [###############################] 100%
(4/8) installing mingw-w64-x86_64-giflib                     [###############################] 100%
(5/8) installing mingw-w64-x86_64-libwebp                    [###############################] 100%
(6/8) installing mingw-w64-x86_64-libtiff                    [###############################] 100%
(7/8) installing mingw-w64-x86_64-lcms2                      [###############################] 100%
(8/8) installing mingw-w64-x86_64-openjpeg2                  [###############################] 100%
```

### pkg-config --modversion libopenjp2
```
eric@DELL MINGW64 ~
$ pkg-config --modversion libopenjp2
2.5.3
```

### pacman -S mingw-w64-x86_64-cairo
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-cairo
resolving dependencies...
looking for conflicting packages...

Packages (4) mingw-w64-x86_64-fontconfig-2.16.2-1  mingw-w64-x86_64-lzo2-2.10-2
             mingw-w64-x86_64-pixman-0.46.0-1  mingw-w64-x86_64-cairo-1.18.4-1

Total Download Size:   1.52 MiB
Total Installed Size:  7.64 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-lzo2-2.10...    94.8 KiB  96.7 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-fontconfi...   266.6 KiB   263 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-pixman-0....   347.4 KiB   322 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-cairo-1.1...   851.8 KiB   605 KiB/s 00:01 [###############################] 100%
 Total (4/4)                    1560.6 KiB   911 KiB/s 00:02 [###############################] 100%
(4/4) checking keys in keyring                               [###############################] 100%
(4/4) checking package integrity                             [###############################] 100%
(4/4) loading package files                                  [###############################] 100%
(4/4) checking for file conflicts                            [###############################] 100%
(4/4) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/4) installing mingw-w64-x86_64-fontconfig                 [###############################] 100%
updating font cache... done.
(2/4) installing mingw-w64-x86_64-lzo2                       [###############################] 100%
(3/4) installing mingw-w64-x86_64-pixman                     [###############################] 100%
(4/4) installing mingw-w64-x86_64-cairo                      [###############################] 100%
:: Running post-transaction hooks...
(1/1) Updating fontconfig cache...

```


### pkg-config --modversion cairo
```
eric@DELL MINGW64 ~
$ pkg-config --modversion cairo
1.18.4
```

### 更新 MSYS2 软件源

pacman -Syu
```
eric@DELL MINGW64 ~
$ pacman -Syu
:: Synchronizing package databases...
 clangarm64 is up to date
 mingw32 is up to date
 mingw64 is up to date
 ucrt64 is up to date
 clang64 is up to date
 msys is up to date
:: Starting core system upgrade...
 there is nothing to do
:: Starting full system upgrade...
 there is nothing to do
```

pacman -Ss gdk-pixbuf
```
eric@DELL MINGW64 ~
$ pacman -Ss gdk-pixbuf
clangarm64/mingw-w64-clang-aarch64-gdk-pixbuf2 2.42.12-4
    An image loading library (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-gdk-pixbuf2-docs 2.42.12-4
    An image loading library (mingw-w64) (documentation)
mingw32/mingw-w64-i686-gdk-pixbuf2 2.42.12-4
    An image loading library (mingw-w64)
mingw32/mingw-w64-i686-gdk-pixbuf2-docs 2.42.12-4
    An image loading library (mingw-w64) (documentation)
mingw64/mingw-w64-x86_64-gdk-pixbuf2 2.42.12-4
    An image loading library (mingw-w64)
mingw64/mingw-w64-x86_64-gdk-pixbuf2-docs 2.42.12-4
    An image loading library (mingw-w64) (documentation)
ucrt64/mingw-w64-ucrt-x86_64-gdk-pixbuf2 2.42.12-4
    An image loading library (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-gdk-pixbuf2-docs 2.42.12-4
    An image loading library (mingw-w64) (documentation)
clang64/mingw-w64-clang-x86_64-gdk-pixbuf2 2.42.12-4
    An image loading library (mingw-w64)
clang64/mingw-w64-clang-x86_64-gdk-pixbuf2-docs 2.42.12-4
    An image loading library (mingw-w64) (documentation)

```

### pacman -S mingw-w64-x86_64-gdk-pixbuf2
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-gdk-pixbuf2
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-gdk-pixbuf2-2.42.12-4

Total Download Size:   0.78 MiB
Total Installed Size:  5.89 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-gdk-pixbu...   796.8 KiB   703 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-gdk-pixbuf2                [###############################] 100%
Optional dependencies for mingw-w64-x86_64-gdk-pixbuf2
    mingw-w64-x86_64-libwmf: Load .wmf and .apm
    mingw-w64-x86_64-libavif: Load .avif
    mingw-w64-x86_64-libheif: Load .heif, .heic, and .avif
    mingw-w64-x86_64-libjxl: Load .jxl
    mingw-w64-x86_64-librsvg: Load .svg, .svgz, and .svg.gz
    mingw-w64-x86_64-webp-pixbuf-loader: Load .webp
:: Running post-transaction hooks...
(1/1) Probing GDK-Pixbuf loader modules...
```

### pkg-config --cflags --libs gdk-pixbuf-2.0
```
eric@DELL MINGW64 ~
$ pkg-config --cflags --libs gdk-pixbuf-2.0
-IC:/msys64/mingw64/include/gdk-pixbuf-2.0 -IC:/msys64/mingw64/include/libpng16 -IC:/msys64/mingw64/include/webp -DLIBDEFLATE_DLL -IC:/msys64/mingw64/include/glib-2.0 -IC:/msys64/mingw64/lib/glib-2.0/include -lgdk_pixbuf-2.0 -lgobject-2.0 -lglib-2.0 -lintl
```

### pkg-config --modversion gdk-pixbuf-2.0
```
eric@DELL MINGW64 ~
$ pkg-config --modversion gdk-pixbuf-2.0
2.42.12
```

### pacman -S mingw-w64-x86_64-libxml2
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-libxml2
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-libxml2-2.12.10-1

Total Download Size:   1.01 MiB
Total Installed Size:  6.10 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libxml2-2...  1034.8 KiB   878 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-libxml2                    [###############################] 100%
Optional dependencies for mingw-w64-x86_64-libxml2
    mingw-w64-x86_64-python: Python bindings [installed]
```

### pkg-config --modversion libxml-2.0
```
eric@DELL MINGW64 ~
$ pkg-config --modversion libxml-2.0
2.12.10
```

### pacman -S mingw-w64-x86_64-ninja
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-ninja
warning: mingw-w64-x86_64-ninja-1.12.1-1 is up to date -- reinstalling
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-ninja-1.12.1-1

Total Installed Size:  1.86 MiB
Net Upgrade Size:      0.00 MiB

:: Proceed with installation? [Y/n] y
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) reinstalling mingw-w64-x86_64-ninja                    [###############################] 100%

```

### ninja --version
```
eric@DELL MINGW64 ~
$ ninja --version
1.12.1
```

### meson setup --help
```
$ meson setup --help
usage: meson setup [-h] [--prefix PREFIX] [--bindir BINDIR] [--datadir DATADIR]
                   [--includedir INCLUDEDIR] [--infodir INFODIR] [--libdir LIBDIR]
                   [--licensedir LICENSEDIR] [--libexecdir LIBEXECDIR] [--localedir LOCALEDIR]
                   [--localstatedir LOCALSTATEDIR] [--mandir MANDIR] [--sbindir SBINDIR]
                   [--sharedstatedir SHAREDSTATEDIR] [--sysconfdir SYSCONFDIR]
                   [--auto-features {enabled,disabled,auto}]
                   [--backend {ninja,vs,vs2010,vs2012,vs2013,vs2015,vs2017,vs2019,vs2022,xcode,none}]
                   [--genvslite {vs2022}]
                   [--buildtype {plain,debug,debugoptimized,release,minsize,custom}] [--debug]
                   [--default-library {shared,static,both}]
                   [--default-both-libraries {shared,static,auto}] [--errorlogs]
                   [--install-umask INSTALL_UMASK] [--layout {mirror,flat}]
                   [--optimization {plain,0,g,1,2,3,s}] [--prefer-static] [--stdsplit] [--strip]
                   [--unity {on,off,subprojects}] [--unity-size UNITY_SIZE]
                   [--warnlevel {0,1,2,3,everything}] [--werror]
                   [--wrap-mode {default,nofallback,nodownload,forcefallback,nopromote}]
                   [--force-fallback-for FORCE_FALLBACK_FOR] [--vsenv] [--pkgconfig.relocatable]
                   [--python.bytecompile PYTHON.BYTECOMPILE]
                   [--python.install-env {auto,prefix,system,venv}]
                   [--python.platlibdir PYTHON.PLATLIBDIR] [--python.purelibdir PYTHON.PURELIBDIR]
                   [--python.allow-limited-api] [--pkg-config-path PKG_CONFIG_PATH]
                   [--build.pkg-config-path BUILD.PKG_CONFIG_PATH]
                   [--cmake-prefix-path CMAKE_PREFIX_PATH]
                   [--build.cmake-prefix-path BUILD.CMAKE_PREFIX_PATH] [-D option]
                   [--native-file NATIVE_FILE] [--cross-file CROSS_FILE] [-v]
                   [--fatal-meson-warnings] [--reconfigure] [--wipe] [--clearcache]
                   [builddir] [sourcedir]

positional arguments:
  builddir
  sourcedir

options:
  -h, --help                                      show this help message and exit
  --prefix PREFIX                                 Installation prefix (default: C:/msys64/mingw64).
  --bindir BINDIR                                 Executable directory (default: bin).
  --datadir DATADIR                               Data file directory (default: share).
  --includedir INCLUDEDIR                         Header file directory (default: include).
  --infodir INFODIR                               Info page directory (default: share/info).
  --libdir LIBDIR                                 Library directory (default: lib).
  --licensedir LICENSEDIR                         Licenses directory (default: ).
  --libexecdir LIBEXECDIR                         Library executable directory (default: libexec).
  --localedir LOCALEDIR                           Locale data directory (default: share/locale).
  --localstatedir LOCALSTATEDIR                   Localstate data directory (default: var).
  --mandir MANDIR                                 Manual page directory (default: share/man).
  --sbindir SBINDIR                               System executable directory (default: sbin).
  --sharedstatedir SHAREDSTATEDIR                 Architecture-independent data directory (default:
                                                  com).
  --sysconfdir SYSCONFDIR                         Sysconf data directory (default: etc).
  --auto-features {enabled,disabled,auto}         Override value of all 'auto' features (default:
                                                  auto).
  --backend {ninja,vs,vs2010,vs2012,vs2013,vs2015,vs2017,vs2019,vs2022,xcode,none}
                                                  Backend to use (default: ninja).
  --genvslite {vs2022}                            Setup multiple buildtype-suffixed ninja-backend
                                                  build directories, and a [builddir]_vs containing
                                                  a Visual Studio meta-backend with multiple
                                                  configurations that calls into them (default:
                                                  vs2022).
  --buildtype {plain,debug,debugoptimized,release,minsize,custom}
                                                  Build type to use (default: debug).
  --debug                                         Enable debug symbols and other information
  --default-library {shared,static,both}          Default library type (default: shared).
  --default-both-libraries {shared,static,auto}   Default library type for both_libraries (default:
                                                  shared).
  --errorlogs                                     Whether to print the logs from failing tests
  --install-umask INSTALL_UMASK                   Default umask to apply on permissions of installed
                                                  files (default: 0o22).
  --layout {mirror,flat}                          Build directory layout (default: mirror).
  --optimization {plain,0,g,1,2,3,s}              Optimization level (default: 0).
  --prefer-static                                 Whether to try static linking before shared
                                                  linking
  --stdsplit                                      Split stdout and stderr in test logs
  --strip                                         Strip targets on install
  --unity {on,off,subprojects}                    Unity build (default: off).
  --unity-size UNITY_SIZE                         Unity block size (default: 4).
  --warnlevel {0,1,2,3,everything}                Compiler warning level to use (default: 1).
  --werror                                        Treat warnings as errors
  --wrap-mode {default,nofallback,nodownload,forcefallback,nopromote}
                                                  Wrap mode (default: default).
  --force-fallback-for FORCE_FALLBACK_FOR         Force fallback for those subprojects (default:
                                                  []).
  --vsenv                                         Activate Visual Studio environment
  --pkgconfig.relocatable                         Generate pkgconfig files as relocatable
  --python.bytecompile PYTHON.BYTECOMPILE         Whether to compile bytecode (default: 0).
  --python.install-env {auto,prefix,system,venv}  Which python environment to install to (default:
                                                  prefix).
  --python.platlibdir PYTHON.PLATLIBDIR           Directory for site-specific, platform-specific
                                                  files (default: ).
  --python.purelibdir PYTHON.PURELIBDIR           Directory for site-specific, non-platform-specific
                                                  files (default: ).
  --python.allow-limited-api                      Whether to allow use of the Python Limited API
  --pkg-config-path PKG_CONFIG_PATH               List of additional paths for pkg-config to search
                                                  (default: []). (just for host machine)
  --build.pkg-config-path BUILD.PKG_CONFIG_PATH   List of additional paths for pkg-config to search
                                                  (default: []). (just for build machine)
  --cmake-prefix-path CMAKE_PREFIX_PATH           List of additional prefixes for cmake to search
                                                  (default: []). (just for host machine)
  --build.cmake-prefix-path BUILD.CMAKE_PREFIX_PATH
                                                  List of additional prefixes for cmake to search
                                                  (default: []). (just for build machine)
  -D option                                       Set the value of an option, can be used several
                                                  times to set multiple options.
  --native-file NATIVE_FILE                       File containing overrides for native compilation
                                                  environment.
  --cross-file CROSS_FILE                         File describing cross compilation environment.
  -v, --version                                   show program's version number and exit
  --fatal-meson-warnings                          Make all Meson warnings fatal
  --reconfigure                                   Set options and reconfigure the project. Useful
                                                  when new options have been added to the project
                                                  and the default value is not working.
  --wipe                                          Wipe build directory and reconfigure using
                                                  previous command line options. Useful when build
                                                  directory got corrupted, or when rebuilding with a
                                                  newer version of meson.
  --clearcache                                    Clear cached state (e.g. found dependencies).
                                                  Since 1.3.0.

eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
```
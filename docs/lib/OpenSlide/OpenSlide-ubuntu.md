# OpenSlide-ubuntu.md


## Link

- [github OpenSlide](https://github.com/openslide/openslide).
- [Openslide3.4.1 安装](https://zhuanlan.zhihu.com/p/464876966).

## Ubuntu

### pkg-config --modversion openslide
```
eric@fantasy:~$ pkg-config --modversion openslide
Package openslide was not found in the pkg-config search path.
Perhaps you should add the directory containing `openslide.pc'
to the PKG_CONFIG_PATH environment variable
Package 'openslide', required by 'virtual:world', not found
```

### sudo apt-get install libopenslide-dev
```
eric@fantasy:~$ sudo apt-get install libopenslide-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libopenslide0
The following NEW packages will be installed:
  libopenslide-dev libopenslide0
0 upgraded, 2 newly installed, 0 to remove and 1 not upgraded.
Need to get 109 kB of archives.
After this operation, 280 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libopenslide0 amd64 3.4.1+dfsg-7build2 [86.9 kB]
Get:2 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libopenslide-dev amd64 3.4.1+dfsg-7build2 [22.3 kB]
Fetched 109 kB in 0s (255 kB/s)             
Selecting previously unselected package libopenslide0.
(Reading database ... 240971 files and directories currently installed.)
Preparing to unpack .../libopenslide0_3.4.1+dfsg-7build2_amd64.deb ...
Unpacking libopenslide0 (3.4.1+dfsg-7build2) ...
Selecting previously unselected package libopenslide-dev.
Preparing to unpack .../libopenslide-dev_3.4.1+dfsg-7build2_amd64.deb ...
Unpacking libopenslide-dev (3.4.1+dfsg-7build2) ...
Setting up libopenslide0 (3.4.1+dfsg-7build2) ...
Setting up libopenslide-dev (3.4.1+dfsg-7build2) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```
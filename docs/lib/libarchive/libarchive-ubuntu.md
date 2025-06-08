# libarchive-ubuntu

## Link

- [github libarchive](https://github.com/libarchive/libarchive).

## Ubuntu

### pkg-config --modversion libarchive
```
eric@fantasy:~$ pkg-config --modversion libarchive
Package libarchive was not found in the pkg-config search path.
Perhaps you should add the directory containing `libarchive.pc'
to the PKG_CONFIG_PATH environment variable
Package 'libarchive', required by 'virtual:world', not found
```

### sudo apt-get install libarchive-dev
```
eric@fantasy:~$ sudo apt-get install libarchive-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  comerr-dev libacl1-dev libattr1-dev libext2fs-dev nettle-dev
Suggested packages:
  doc-base
The following NEW packages will be installed:
  comerr-dev libacl1-dev libarchive-dev libattr1-dev libext2fs-dev nettle-dev
0 upgraded, 6 newly installed, 0 to remove and 1 not upgraded.
Need to get 2,189 kB of archives.
After this operation, 6,986 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libattr1-dev amd64 1:2.5.2-1build1.1 [23.1 kB]
Get:2 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libacl1-dev amd64 2.3.2-1build1.1 [78.5 kB]
Get:3 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 comerr-dev amd64 2.1-1.47.0-2.4~exp1ubuntu4.1 [43.8 kB]
Get:4 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libext2fs-dev amd64 1.47.0-2.4~exp1ubuntu4.1 [300 kB]
Get:5 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 nettle-dev amd64 3.9.1-2.2build1.1 [1,154 kB]
Get:6 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libarchive-dev amd64 3.7.2-2ubuntu0.4 [589 kB]
Fetched 2,189 kB in 1s (2,202 kB/s)     
Selecting previously unselected package libattr1-dev:amd64.
(Reading database ... 240986 files and directories currently installed.)
Preparing to unpack .../0-libattr1-dev_1%3a2.5.2-1build1.1_amd64.deb ...
Unpacking libattr1-dev:amd64 (1:2.5.2-1build1.1) ...
Selecting previously unselected package libacl1-dev:amd64.
Preparing to unpack .../1-libacl1-dev_2.3.2-1build1.1_amd64.deb ...
Unpacking libacl1-dev:amd64 (2.3.2-1build1.1) ...
Selecting previously unselected package comerr-dev:amd64.
Preparing to unpack .../2-comerr-dev_2.1-1.47.0-2.4~exp1ubuntu4.1_amd64.deb ...
Unpacking comerr-dev:amd64 (2.1-1.47.0-2.4~exp1ubuntu4.1) ...
Selecting previously unselected package libext2fs-dev.
Preparing to unpack .../3-libext2fs-dev_1.47.0-2.4~exp1ubuntu4.1_amd64.deb ...
Unpacking libext2fs-dev (1.47.0-2.4~exp1ubuntu4.1) ...
Selecting previously unselected package nettle-dev:amd64.
Preparing to unpack .../4-nettle-dev_3.9.1-2.2build1.1_amd64.deb ...
Unpacking nettle-dev:amd64 (3.9.1-2.2build1.1) ...
Selecting previously unselected package libarchive-dev:amd64.
Preparing to unpack .../5-libarchive-dev_3.7.2-2ubuntu0.4_amd64.deb ...
Unpacking libarchive-dev:amd64 (3.7.2-2ubuntu0.4) ...
Setting up libattr1-dev:amd64 (1:2.5.2-1build1.1) ...
Setting up nettle-dev:amd64 (3.9.1-2.2build1.1) ...
Setting up comerr-dev:amd64 (2.1-1.47.0-2.4~exp1ubuntu4.1) ...
Setting up libext2fs-dev (1.47.0-2.4~exp1ubuntu4.1) ...
Setting up libacl1-dev:amd64 (2.3.2-1build1.1) ...
Setting up libarchive-dev:amd64 (3.7.2-2ubuntu0.4) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for install-info (7.1-3build2) ...
```
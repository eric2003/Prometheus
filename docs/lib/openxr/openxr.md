# openxr


## Link

- [openxr](https://github.com/RenderKit/openvkl).

## find /usr /usr/local /opt/intel/oneapi -name "OpenXRConfig.cmake"
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "OpenXRConfig.cmake"
eric@fantasy:~$ 
```

## dpkg -l | grep openxr
```
eric@fantasy:~$ dpkg -l | grep openxr
eric@fantasy:~$
```

## sudo apt install libopenxr-dev
```
eric@fantasy:~$ sudo apt install libopenxr-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libopenxr-loader1
Suggested packages:
  openxr-layer-corevalidation
The following NEW packages will be installed:
  libopenxr-dev libopenxr-loader1
0 upgraded, 2 newly installed, 0 to remove and 1 not upgraded.
Need to get 154 kB of archives.
After this operation, 696 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libopenxr-loader1 amd64 1.0.20~dfsg1-1build2 [106 kB]
Get:2 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libopenxr-dev amd64 1.0.20~dfsg1-1build2 [47.6 kB]
Fetched 154 kB in 1s (169 kB/s)         
Selecting previously unselected package libopenxr-loader1:amd64.
(Reading database ... 214761 files and directories currently installed.)
Preparing to unpack .../libopenxr-loader1_1.0.20~dfsg1-1build2_amd64.deb ...
Unpacking libopenxr-loader1:amd64 (1.0.20~dfsg1-1build2) ...
Selecting previously unselected package libopenxr-dev:amd64.
Preparing to unpack .../libopenxr-dev_1.0.20~dfsg1-1build2_amd64.deb ...
Unpacking libopenxr-dev:amd64 (1.0.20~dfsg1-1build2) ...
Setting up libopenxr-loader1:amd64 (1.0.20~dfsg1-1build2) ...
Setting up libopenxr-dev:amd64 (1.0.20~dfsg1-1build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

## find /usr /usr/local -name "OpenXRConfig.cmake"
```
eric@fantasy:~$ find /usr /usr/local -name "OpenXRConfig.cmake"
/usr/lib/x86_64-linux-gnu/cmake/openxr/OpenXRConfig.cmake
```

## pkg-config --modversion openxr
```
eric@fantasy:~$ pkg-config --modversion openxr
1.0
```


## git clone https://github.com/openvkl/openvkl.git
```
eric@fantasy:~/work/openvkl_work$ git clone https://github.com/openvkl/openvkl.git
Cloning into 'openvkl'...
remote: Enumerating objects: 18413, done.
remote: Counting objects: 100% (613/613), done.
remote: Compressing objects: 100% (202/202), done.
remote: Total 18413 (delta 414), reused 582 (delta 394), pack-reused 17800 (from 1)
Receiving objects: 100% (18413/18413), 6.76 MiB | 109.00 KiB/s, done.
Resolving deltas: 100% (13348/13348), done.
```


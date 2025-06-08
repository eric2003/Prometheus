# OpenVDB


## Link

- [OpenVDB简介](https://cloud.tencent.com/developer/article/2197787).
- [走进向量计算：从源码编译 OpenBLAS](https://soulteary.com/2022/07/08/into-vector-computing-compiling-openblas-from-source.html).


## git clone git@github.com:OpenMathLib/OpenBLAS.git
```
PS D:\work\OpenBLAS_work> git clone git@github.com:OpenMathLib/OpenBLAS.git
Cloning into 'OpenBLAS'...
remote: Enumerating objects: 80058, done.
remote: Counting objects: 100% (536/536), done.
remote: Compressing objects: 100% (198/198), done.
remote: Total 80058 (delta 419), reused 349 (delta 338), pack-reused 79522 (from 3)
Receiving objects: 100% (80058/80058), 58.35 MiB | 5.29 MiB/s, done.
Resolving deltas: 100% (64869/64869), done.
Updating files: 100% (12498/12498), done.
```

## Ubuntu

### find /usr /usr/local /opt/intel/oneapi -name "OpenVDBConfig.cmake" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "OpenVDBConfig.cmake" 2>/dev/null
eric@fantasy:~$ 
```

```
find /usr /usr/local /opt/intel/oneapi -name "openvdb.h" 2>/dev/null
find /usr /usr/local /opt/lib -name "libopenvdb.so" 2>/dev/null
```

### find /usr /usr/local /opt/intel/oneapi -name "openvdb.h" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "openvdb.h" 2>/dev/null
eric@fantasy:~$ 
```

### find /usr /usr/local /opt/lib -name "libopenvdb.so" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/lib -name "libopenvdb.so" 2>/dev/null
eric@fantasy:~$
```

### dpkg -l | grep libopenvdb
```
eric@fantasy:~$ dpkg -l | grep libopenvdb
eric@fantasy:~$ 
```

### sudo apt install libopenvdb-dev
```
eric@fantasy:~$ sudo apt install libopenvdb-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libblosc-dev libblosc1 libboost-iostreams1.83.0 libimath-3-1-29t64 libimath-dev liblog4cplus-2.0.5t64 libopenvdb10.0t64 libtbb-dev libtbb12 libtbbbind-2-5 libtbbmalloc2
Suggested packages:
  libtbb-doc
The following NEW packages will be installed:
  libblosc-dev libblosc1 libboost-iostreams1.83.0 libimath-3-1-29t64 libimath-dev liblog4cplus-2.0.5t64 libopenvdb-dev libopenvdb10.0t64 libtbb-dev libtbb12 libtbbbind-2-5 libtbbmalloc2
0 upgraded, 12 newly installed, 0 to remove and 1 not upgraded.
Need to get 5,430 kB/5,867 kB of archives.
After this operation, 44.2 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libblosc1 amd64 1.21.5+ds-1build1 [36.2 kB]
Get:2 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libblosc-dev amd64 1.21.5+ds-1build1 [43.7 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libboost-iostreams1.83.0 amd64 1.83.0-2.1ubuntu3.1 [259 kB]
Get:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libimath-3-1-29t64 amd64 3.1.9-3.1ubuntu2 [72.2 kB]
Get:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libimath-dev amd64 3.1.9-3.1ubuntu2 [115 kB]
Get:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 liblog4cplus-2.0.5t64 amd64 2.0.8-1.1ubuntu3 [188 kB]
Get:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libopenvdb10.0t64 amd64 10.0.1-2.1build5 [4,138 kB]
Get:8 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libopenvdb-dev amd64 10.0.1-2.1build5 [577 kB]
Fetched 5,430 kB in 1s (3,913 kB/s)     
Selecting previously unselected package libblosc1:amd64.
(Reading database ... 215456 files and directories currently installed.)
Preparing to unpack .../00-libblosc1_1.21.5+ds-1build1_amd64.deb ...
Unpacking libblosc1:amd64 (1.21.5+ds-1build1) ...
Selecting previously unselected package libblosc-dev:amd64.
Preparing to unpack .../01-libblosc-dev_1.21.5+ds-1build1_amd64.deb ...
Unpacking libblosc-dev:amd64 (1.21.5+ds-1build1) ...
Selecting previously unselected package libboost-iostreams1.83.0:amd64.
Preparing to unpack .../02-libboost-iostreams1.83.0_1.83.0-2.1ubuntu3.1_amd64.deb ...
Unpacking libboost-iostreams1.83.0:amd64 (1.83.0-2.1ubuntu3.1) ...
Selecting previously unselected package libimath-3-1-29t64:amd64.
Preparing to unpack .../03-libimath-3-1-29t64_3.1.9-3.1ubuntu2_amd64.deb ...
Unpacking libimath-3-1-29t64:amd64 (3.1.9-3.1ubuntu2) ...
Selecting previously unselected package libimath-dev:amd64.
Preparing to unpack .../04-libimath-dev_3.1.9-3.1ubuntu2_amd64.deb ...
Unpacking libimath-dev:amd64 (3.1.9-3.1ubuntu2) ...
Selecting previously unselected package liblog4cplus-2.0.5t64:amd64.
Preparing to unpack .../05-liblog4cplus-2.0.5t64_2.0.8-1.1ubuntu3_amd64.deb ...
Unpacking liblog4cplus-2.0.5t64:amd64 (2.0.8-1.1ubuntu3) ...
Selecting previously unselected package libtbbmalloc2:amd64.
Preparing to unpack .../06-libtbbmalloc2_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbbmalloc2:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libtbbbind-2-5:amd64.
Preparing to unpack .../07-libtbbbind-2-5_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbbbind-2-5:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libtbb12:amd64.
Preparing to unpack .../08-libtbb12_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbb12:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libopenvdb10.0t64:amd64.
Preparing to unpack .../09-libopenvdb10.0t64_10.0.1-2.1build5_amd64.deb ...
Unpacking libopenvdb10.0t64:amd64 (10.0.1-2.1build5) ...
Selecting previously unselected package libtbb-dev:amd64.
Preparing to unpack .../10-libtbb-dev_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbb-dev:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libopenvdb-dev.
Preparing to unpack .../11-libopenvdb-dev_10.0.1-2.1build5_amd64.deb ...
Unpacking libopenvdb-dev (10.0.1-2.1build5) ...
Setting up libtbbmalloc2:amd64 (2021.11.0-2ubuntu2) ...
Setting up liblog4cplus-2.0.5t64:amd64 (2.0.8-1.1ubuntu3) ...
Setting up libtbbbind-2-5:amd64 (2021.11.0-2ubuntu2) ...
Setting up libboost-iostreams1.83.0:amd64 (1.83.0-2.1ubuntu3.1) ...
Setting up libimath-3-1-29t64:amd64 (3.1.9-3.1ubuntu2) ...
Setting up libblosc1:amd64 (1.21.5+ds-1build1) ...
Setting up libimath-dev:amd64 (3.1.9-3.1ubuntu2) ...
Setting up libblosc-dev:amd64 (1.21.5+ds-1build1) ...
Setting up libtbb12:amd64 (2021.11.0-2ubuntu2) ...
Setting up libtbb-dev:amd64 (2021.11.0-2ubuntu2) ...
Setting up libopenvdb10.0t64:amd64 (10.0.1-2.1build5) ...
Setting up libopenvdb-dev (10.0.1-2.1build5) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### find /usr -name "OpenVDBConfig.cmake" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "OpenVDBConfig.cmake" 2>/dev/null
eric@fantasy:~$
```

### find /usr -name "openvdb.h" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "openvdb.h" 2>/dev/null
/usr/include/openvdb/openvdb.h
```

### find /usr -name "libopenvdb.so" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "libopenvdb.so" 2>/dev/null
/usr/lib/x86_64-linux-gnu/libopenvdb.so
```

```
CMAKE_MODULE_PATH
```
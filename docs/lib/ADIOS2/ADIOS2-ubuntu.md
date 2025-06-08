# ADIOS2-ubuntu

## Link

- [ADIOS2](https://github.com/ornladios/ADIOS2).

## git clone git@github.com:ornladios/ADIOS2.git
```
PS D:\work\ADIOS2_work> git clone git@github.com:ornladios/ADIOS2.git
Cloning into 'ADIOS2'...
remote: Enumerating objects: 97275, done.
remote: Counting objects: 100% (253/253), done.
remote: Compressing objects: 100% (140/140), done.
remote: Total 97275 (delta 170), reused 113 (delta 113), pack-reused 97022 (from 3)
Receiving objects: 100% (97275/97275), 33.16 MiB | 4.85 MiB/s, done.
Resolving deltas: 100% (70343/70343), done.
Updating files: 100% (3111/3111), done.
```

```
sudo find /usr /usr/local /opt -name "ADIOS2Config.cmake" 2>/dev/null
sudo find /usr /usr/local /opt -name "adios2-config.cmake" 2>/dev/null
```

## Ubuntu

### sudo find /usr /usr/local /opt -name "ADIOS2Config.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "ADIOS2Config.cmake" 2>/dev/null
eric@fantasy:~$ 
```

### sudo find /usr /usr/local /opt -name "adios2-config.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "adios2-config.cmake" 2>/dev/null
eric@fantasy:~$
```

```
sudo find /usr /usr/local /opt -name "adios2.h" 2>/dev/null
sudo find /usr /usr/local /opt/lib -name "libadios2*.so" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "adios2.h" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "adios2.h" 2>/dev/null
eric@fantasy:~$ 
```

### sudo find /usr /usr/local /opt/lib -name "libadios2*.so" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt/lib -name "libadios2*.so" 2>/dev/null
eric@fantasy:~$ 
```

### dpkg -l | grep adios2
```
eric@fantasy:~$ dpkg -l | grep adios2
eric@fantasy:~$
```

```
sudo apt update
sudo apt install libadios2-dev
```

### git clone https://github.com/ornladios/ADIOS2.git
```
eric@fantasy:~/work/ADIOS2_work$ git clone https://github.com/ornladios/ADIOS2.git
Cloning into 'ADIOS2'...
remote: Enumerating objects: 97424, done.
remote: Counting objects: 100% (321/321), done.
remote: Compressing objects: 100% (194/194), done.
remote: Total 97424 (delta 207), reused 129 (delta 127), pack-reused 97103 (from 3)
Receiving objects: 100% (97424/97424), 33.34 MiB | 44.00 KiB/s, done.
Resolving deltas: 100% (70403/70403), done.
```

### mkdir build && cd build
```
eric@fantasy:~/work/ADIOS2_work/ADIOS2$ mkdir build && cd build
eric@fantasy:~/work/ADIOS2_work/ADIOS2/build$ 
```

```
sudo apt install libhdf5-dev libbz2-dev zlib1g-dev
```

### sudo apt install libhdf5-dev libbz2-dev zlib1g-dev
```
eric@fantasy:~$ sudo apt install libhdf5-dev libbz2-dev zlib1g-dev
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libbz2-dev is already the newest version (1.0.8-5.1build0.1).
libbz2-dev set to manually installed.
zlib1g-dev is already the newest version (1:1.3.dfsg-3.1ubuntu2.1).
zlib1g-dev set to manually installed.
The following additional packages will be installed:
  hdf5-helpers libaec-dev libaec0 libhdf5-103-1t64 libhdf5-cpp-103-1t64 libhdf5-fortran-102t64 libhdf5-hl-100t64 libhdf5-hl-cpp-100t64 libhdf5-hl-fortran-100t64 libsz2
Suggested packages:
  libhdf5-doc
The following NEW packages will be installed:
  hdf5-helpers libaec-dev libaec0 libhdf5-103-1t64 libhdf5-cpp-103-1t64 libhdf5-dev libhdf5-fortran-102t64 libhdf5-hl-100t64 libhdf5-hl-cpp-100t64 libhdf5-hl-fortran-100t64 libsz2
0 upgraded, 11 newly installed, 0 to remove and 1 not upgraded.
Need to get 4,423 kB of archives.
After this operation, 18.6 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.aliyun.com/ubuntu noble/universe amd64 hdf5-helpers amd64 1.10.10+repack-3.1ubuntu4 [15.8 kB]
Get:2 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libaec0 amd64 1.1.2-1build1 [22.9 kB]
Get:3 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libsz2 amd64 1.1.2-1build1 [5,476 B]
Get:4 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-103-1t64 amd64 1.10.10+repack-3.1ubuntu4 [1,270 kB]
Get:5 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-cpp-103-1t64 amd64 1.10.10+repack-3.1ubuntu4 [128 kB]
Get:6 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-fortran-102t64 amd64 1.10.10+repack-3.1ubuntu4 [85.2 kB]
Get:7 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-hl-100t64 amd64 1.10.10+repack-3.1ubuntu4 [56.0 kB]
Get:8 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-hl-fortran-100t64 amd64 1.10.10+repack-3.1ubuntu4 [31.5 kB]
Get:9 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-hl-cpp-100t64 amd64 1.10.10+repack-3.1ubuntu4 [11.2 kB]
Get:10 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libaec-dev amd64 1.1.2-1build1 [19.8 kB]
Get:11 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libhdf5-dev amd64 1.10.10+repack-3.1ubuntu4 [2,777 kB]
Fetched 4,423 kB in 3s (1,581 kB/s)     
Selecting previously unselected package hdf5-helpers.
(Reading database ... 216407 files and directories currently installed.)
Preparing to unpack .../00-hdf5-helpers_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking hdf5-helpers (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libaec0:amd64.
Preparing to unpack .../01-libaec0_1.1.2-1build1_amd64.deb ...
Unpacking libaec0:amd64 (1.1.2-1build1) ...
Selecting previously unselected package libsz2:amd64.
Preparing to unpack .../02-libsz2_1.1.2-1build1_amd64.deb ...
Unpacking libsz2:amd64 (1.1.2-1build1) ...
Selecting previously unselected package libhdf5-103-1t64:amd64.
Preparing to unpack .../03-libhdf5-103-1t64_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-103-1t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libhdf5-cpp-103-1t64:amd64.
Preparing to unpack .../04-libhdf5-cpp-103-1t64_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-cpp-103-1t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libhdf5-fortran-102t64:amd64.
Preparing to unpack .../05-libhdf5-fortran-102t64_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-fortran-102t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libhdf5-hl-100t64:amd64.
Preparing to unpack .../06-libhdf5-hl-100t64_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-hl-100t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libhdf5-hl-fortran-100t64:amd64.
Preparing to unpack .../07-libhdf5-hl-fortran-100t64_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-hl-fortran-100t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libhdf5-hl-cpp-100t64:amd64.
Preparing to unpack .../08-libhdf5-hl-cpp-100t64_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-hl-cpp-100t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Selecting previously unselected package libaec-dev:amd64.
Preparing to unpack .../09-libaec-dev_1.1.2-1build1_amd64.deb ...
Unpacking libaec-dev:amd64 (1.1.2-1build1) ...
Selecting previously unselected package libhdf5-dev.
Preparing to unpack .../10-libhdf5-dev_1.10.10+repack-3.1ubuntu4_amd64.deb ...
Unpacking libhdf5-dev (1.10.10+repack-3.1ubuntu4) ...
Setting up hdf5-helpers (1.10.10+repack-3.1ubuntu4) ...
Setting up libaec0:amd64 (1.1.2-1build1) ...
Setting up libsz2:amd64 (1.1.2-1build1) ...
Setting up libaec-dev:amd64 (1.1.2-1build1) ...
Setting up libhdf5-103-1t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Setting up libhdf5-hl-100t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Setting up libhdf5-cpp-103-1t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Setting up libhdf5-fortran-102t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Setting up libhdf5-hl-cpp-100t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Setting up libhdf5-hl-fortran-100t64:amd64 (1.10.10+repack-3.1ubuntu4) ...
Setting up libhdf5-dev (1.10.10+repack-3.1ubuntu4) ...
update-alternatives: using /usr/lib/x86_64-linux-gnu/pkgconfig/hdf5-serial.pc to provide /usr/lib/x86_64-linux-gnu/pkgconfig/hdf5.pc (hdf5.pc) in auto mode
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

```
make -j$(nproc)
sudo make install
```
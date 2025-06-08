# ODBC


## Link

- [OpenVDB简介](https://cloud.tencent.com/developer/article/2197787).
- [走进向量计算：从源码编译 OpenBLAS](https://soulteary.com/2022/07/08/into-vector-computing-compiling-openblas-from-source.html).

## Ubuntu

```
find /usr /usr/local /opt/intel/oneapi -name "sql.h" 2>/dev/null
find /usr /usr/local /opt/lib -name "libodbc.so" 2>/dev/null
```

### find /usr /usr/local /opt/intel/oneapi -name "sql.h" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "sql.h" 2>/dev/null
eric@fantasy:~$ 
```

### find /usr /usr/local /opt/lib -name "libodbc.so" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/lib -name "libodbc.so" 2>/dev/null
eric@fantasy:~$ 
```

### dpkg -l | grep libodbc
```
eric@fantasy:~$ dpkg -l | grep libodbc
eric@fantasy:~$ 
```

### sudo apt install unixodbc-dev
```
eric@fantasy:~$ sudo apt install unixodbc-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libodbc2 libodbccr2 libodbcinst2 unixodbc-common
Suggested packages:
  odbc-postgresql tdsodbc
The following NEW packages will be installed:
  libodbc2 libodbccr2 libodbcinst2 unixodbc-common unixodbc-dev
0 upgraded, 5 newly installed, 0 to remove and 1 not upgraded.
Need to get 464 kB of archives.
After this operation, 2,486 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libodbc2 amd64 2.3.12-1ubuntu0.24.04.1 [158 kB]
Get:2 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libodbccr2 amd64 2.3.12-1ubuntu0.24.04.1 [16.1 kB]
Get:3 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 unixodbc-common all 2.3.12-1ubuntu0.24.04.1 [8,806 B]
Get:4 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libodbcinst2 amd64 2.3.12-1ubuntu0.24.04.1 [30.7 kB]
Get:5 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 unixodbc-dev amd64 2.3.12-1ubuntu0.24.04.1 [250 kB]
Fetched 464 kB in 1s (631 kB/s)       
Selecting previously unselected package libodbc2:amd64.
(Reading database ... 215948 files and directories currently installed.)
Preparing to unpack .../libodbc2_2.3.12-1ubuntu0.24.04.1_amd64.deb ...
Unpacking libodbc2:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Selecting previously unselected package libodbccr2:amd64.
Preparing to unpack .../libodbccr2_2.3.12-1ubuntu0.24.04.1_amd64.deb ...
Unpacking libodbccr2:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Selecting previously unselected package unixodbc-common.
Preparing to unpack .../unixodbc-common_2.3.12-1ubuntu0.24.04.1_all.deb ...
Unpacking unixodbc-common (2.3.12-1ubuntu0.24.04.1) ...
Selecting previously unselected package libodbcinst2:amd64.
Preparing to unpack .../libodbcinst2_2.3.12-1ubuntu0.24.04.1_amd64.deb ...
Unpacking libodbcinst2:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Selecting previously unselected package unixodbc-dev:amd64.
Preparing to unpack .../unixodbc-dev_2.3.12-1ubuntu0.24.04.1_amd64.deb ...
Unpacking unixodbc-dev:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Setting up unixodbc-common (2.3.12-1ubuntu0.24.04.1) ...
Setting up libodbc2:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Setting up libodbccr2:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Setting up libodbcinst2:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Setting up unixodbc-dev:amd64 (2.3.12-1ubuntu0.24.04.1) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### find /usr -name "sql.h" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "sql.h" 2>/dev/null
/usr/include/sql.h
```

### find /usr -name "libodbc.so" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "libodbc.so" 2>/dev/null
/usr/lib/x86_64-linux-gnu/libodbc.so
```

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


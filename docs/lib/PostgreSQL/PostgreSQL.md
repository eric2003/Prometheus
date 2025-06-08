# PostgreSQL


## Link

- [github ANARI-SDK](https://github.com/KhronosGroup/ANARI-SDK).


```
find /usr /usr/local /opt/intel/oneapi -name "libpq-fe.h" 2>/dev/null
find /usr /usr/local /opt/lib -name "libpq.so" 2>/dev/null
```

```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "libpq-fe.h" 2>/dev/null
eric@fantasy:~$ 
```

```
eric@fantasy:~$ find /usr /usr/local /opt/lib -name "libpq.so" 2>/dev/null
eric@fantasy:~$ 
```

```
eric@fantasy:~$ dpkg -l | grep libpq-dev
eric@fantasy:~$
```

```
sudo apt update
sudo apt install libpq-dev
```

### sudo apt install libpq-dev
```
eric@fantasy:~$ sudo apt install libpq-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libpq5 libssl-dev
Suggested packages:
  postgresql-doc-16 libssl-doc
The following NEW packages will be installed:
  libpq-dev libpq5 libssl-dev
0 upgraded, 3 newly installed, 0 to remove and 1 not upgraded.
Need to get 2,702 kB of archives.
After this operation, 14.4 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libpq5 amd64 16.9-0ubuntu0.24.04.1 [143 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libssl-dev amd64 3.0.13-0ubuntu3.5 [2,408 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libpq-dev amd64 16.9-0ubuntu0.24.04.1 [151 kB]
Fetched 2,702 kB in 1s (2,522 kB/s)
Selecting previously unselected package libpq5:amd64.
(Reading database ... 215276 files and directories currently installed.)
Preparing to unpack .../libpq5_16.9-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libpq5:amd64 (16.9-0ubuntu0.24.04.1) ...
Selecting previously unselected package libssl-dev:amd64.
Preparing to unpack .../libssl-dev_3.0.13-0ubuntu3.5_amd64.deb ...
Unpacking libssl-dev:amd64 (3.0.13-0ubuntu3.5) ...
Selecting previously unselected package libpq-dev.
Preparing to unpack .../libpq-dev_16.9-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libpq-dev (16.9-0ubuntu0.24.04.1) ...
Setting up libpq5:amd64 (16.9-0ubuntu0.24.04.1) ...
Setting up libssl-dev:amd64 (3.0.13-0ubuntu3.5) ...
Setting up libpq-dev (16.9-0ubuntu0.24.04.1) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
find /usr -name "libpq-fe.h" 2>/dev/null
find /usr -name "libpq.so" 2>/dev/null
```

### find /usr -name "libpq-fe.h" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "libpq-fe.h" 2>/dev/null
/usr/include/postgresql/libpq-fe.h
```

### find /usr -name "libpq.so" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "libpq.so" 2>/dev/null
/usr/lib/x86_64-linux-gnu/libpq.so
```

### pkg-config --modversion libpq
```
eric@fantasy:~$ pkg-config --modversion libpq
16.9
```
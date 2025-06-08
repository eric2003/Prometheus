# embree

## Link

- [github embree.git](https://github.com/RenderKit/embree).

## git clone https://github.com/embree/embree.git
```
eric@fantasy:~/work/embree_work$ git clone https://github.com/embree/embree.git
Cloning into 'embree'...
remote: Enumerating objects: 164566, done.
remote: Counting objects: 100% (1662/1662), done.
remote: Compressing objects: 100% (381/381), done.
error: RPC failed; curl 92 HTTP/2 stream 3 was not closed cleanly: CANCEL (err 8)
error: 6507 bytes of body are still expected
fetch-pack: unexpected disconnect while reading sideband packet
fatal: early EOF
fatal: fetch-pack: invalid index-pack output
eric@fantasy:~/work/embree_work$ git clone https://github.com/embree/embree.git
Cloning into 'embree'...
remote: Enumerating objects: 164566, done.
remote: Counting objects: 100% (1662/1662), done.
remote: Compressing objects: 100% (381/381), done.
remote: Total 164566 (delta 1456), reused 1284 (delta 1281), pack-reused 162904 (from 2)
Receiving objects: 100% (164566/164566), 258.55 MiB | 9.99 MiB/s, done.
Resolving deltas: 100% (135818/135818), done.
```

### ls
```
eric@fantasy:~/work/embree_work/embree$ ls
CHANGELOG.md       doc          README.md         tests                                  third-party-programs.txt
CMakeLists.txt     include      readme.pdf        third-party-programs-DPCPP.txt         tutorials
CMakePresets.json  kernels      requirements.txt  third-party-programs-OIDN.txt
common             LICENSE.txt  scripts           third-party-programs-oneAPI-DPCPP.txt
CTestConfig.cmake  man          SECURITY.md       third-party-programs-TBB.txt
```

### mkdir build && cd build
```
eric@fantasy:~/work/embree_work/embree$ mkdir build && cd build
eric@fantasy:~/work/embree_work/embree/build$ 
```

```
module load cmake/4.0.2
module load oneapi/2025.1.0
```

```
sudo apt update
sudo apt install libxrandr-dev
```

```
eric@fantasy:~$ sudo apt install libxrandr-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  libxrandr-dev
0 upgraded, 1 newly installed, 0 to remove and 4 not upgraded.
Need to get 26.4 kB of archives.
After this operation, 129 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libxrandr-dev amd64 2:1.5.2-2build1 [26.4 kB]
Fetched 26.4 kB in 1s (36.5 kB/s)      
Selecting previously unselected package libxrandr-dev:amd64.
(Reading database ... 214216 files and directories currently installed.)
Preparing to unpack .../libxrandr-dev_2%3a1.5.2-2build1_amd64.deb ...
Unpacking libxrandr-dev:amd64 (2:1.5.2-2build1) ...
Setting up libxrandr-dev:amd64 (2:1.5.2-2build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
eric@fantasy:~$ dpkg -l | grep libxrandr
ii  libxrandr-dev:amd64                            2:1.5.2-2build1                          amd64        X11 RandR extension library (development headers)
ii  libxrandr2:amd64                               2:1.5.2-2build1                          amd64        X11 RandR extension library
```

```
sudo apt install libx11-dev libxext-dev libxt-dev libxcursor-dev libxi-dev
```

### sudo apt install libx11-dev libxext-dev libxt-dev libxcursor-dev libxi-dev
```
eric@fantasy:~$ sudo apt install libx11-dev libxext-dev libxt-dev libxcursor-dev libxi-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libx11-dev is already the newest version (2:1.8.7-1build1).
libx11-dev set to manually installed.
libxext-dev is already the newest version (2:1.3.4-1build2).
libxext-dev set to manually installed.
libxt-dev is already the newest version (1:1.2.1-1.2build1).
libxt-dev set to manually installed.
The following additional packages will be installed:
  libxfixes-dev
The following NEW packages will be installed:
  libxcursor-dev libxfixes-dev libxi-dev
0 upgraded, 3 newly installed, 0 to remove and 4 not upgraded.
Need to get 238 kB of archives.
After this operation, 930 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libxfixes-dev amd64 1:6.0.0-2build1 [12.1 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libxcursor-dev amd64 1:1.2.1-1build1 [31.8 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libxi-dev amd64 2:1.8.1-1build1 [194 kB]
Fetched 238 kB in 1s (223 kB/s)    
Selecting previously unselected package libxfixes-dev:amd64.
(Reading database ... 214238 files and directories currently installed.)
Preparing to unpack .../libxfixes-dev_1%3a6.0.0-2build1_amd64.deb ...
Unpacking libxfixes-dev:amd64 (1:6.0.0-2build1) ...
Selecting previously unselected package libxcursor-dev:amd64.
Preparing to unpack .../libxcursor-dev_1%3a1.2.1-1build1_amd64.deb ...
Unpacking libxcursor-dev:amd64 (1:1.2.1-1build1) ...
Selecting previously unselected package libxi-dev:amd64.
Preparing to unpack .../libxi-dev_2%3a1.8.1-1build1_amd64.deb ...
Unpacking libxi-dev:amd64 (2:1.8.1-1build1) ...
Setting up libxfixes-dev:amd64 (1:6.0.0-2build1) ...
Setting up libxi-dev:amd64 (2:1.8.1-1build1) ...
Setting up libxcursor-dev:amd64 (1:1.2.1-1build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
Xinerama headers not found; install libxinerama development package
```

```
eric@fantasy:~$ sudo apt install libxinerama-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  libxinerama-dev
0 upgraded, 1 newly installed, 0 to remove and 4 not upgraded.
Need to get 7,988 B of archives.
After this operation, 41.0 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libxinerama-dev amd64 2:1.1.4-3build1 [7,988 B]
Fetched 7,988 B in 1s (11.9 kB/s)          
Selecting previously unselected package libxinerama-dev:amd64.
(Reading database ... 214398 files and directories currently installed.)
Preparing to unpack .../libxinerama-dev_2%3a1.1.4-3build1_amd64.deb ...
Unpacking libxinerama-dev:amd64 (2:1.1.4-3build1) ...
Setting up libxinerama-dev:amd64 (2:1.1.4-3build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
cmake .. -D EMBREE_ISPC_SUPPORT=ON
```
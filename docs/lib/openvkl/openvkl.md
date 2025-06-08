# openvkl


## Link

- [openvkl](https://github.com/RenderKit/openvkl).


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

## mkdir build && cd build
```
eric@fantasy:~/work/openvkl_work/openvkl$ mkdir build && cd build
eric@fantasy:~/work/openvkl_work/openvkl/build$ 
```

## sudo apt install libglfw3-dev
```
eric@fantasy:~$ sudo apt install libglfw3-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libegl1-mesa-dev libffi-dev libglfw3 libvulkan-dev libwayland-bin libwayland-dev
Suggested packages:
  libosmesa6 libglfw3-doc libwayland-doc
The following NEW packages will be installed:
  libegl1-mesa-dev libffi-dev libglfw3 libglfw3-dev libvulkan-dev libwayland-bin libwayland-dev
0 upgraded, 7 newly installed, 0 to remove and 1 not upgraded.
Need to get 1,539 kB of archives.
After this operation, 28.2 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 libegl1-mesa-dev amd64 24.2.8-1ubuntu1~24.04.1 [23.7 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libglfw3 amd64 3.3.10-1build1 [80.5 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libglfw3-dev amd64 3.3.10-1build1 [41.5 kB]
Get:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libvulkan-dev amd64 1.3.275.0-1build1 [1,239 kB]
Get:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libffi-dev amd64 3.4.6-1build1 [62.8 kB]
Get:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libwayland-bin amd64 1.22.0-2.1build1 [20.6 kB]
Get:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libwayland-dev amd64 1.22.0-2.1build1 [71.3 kB]
Fetched 1,539 kB in 1s (1,314 kB/s)       
Selecting previously unselected package libegl1-mesa-dev:amd64.
(Reading database ... 214411 files and directories currently installed.)
Preparing to unpack .../0-libegl1-mesa-dev_24.2.8-1ubuntu1~24.04.1_amd64.deb ...
Unpacking libegl1-mesa-dev:amd64 (24.2.8-1ubuntu1~24.04.1) ...
Selecting previously unselected package libglfw3:amd64.
Preparing to unpack .../1-libglfw3_3.3.10-1build1_amd64.deb ...
Unpacking libglfw3:amd64 (3.3.10-1build1) ...
Selecting previously unselected package libglfw3-dev:amd64.
Preparing to unpack .../2-libglfw3-dev_3.3.10-1build1_amd64.deb ...
Unpacking libglfw3-dev:amd64 (3.3.10-1build1) ...
Selecting previously unselected package libvulkan-dev:amd64.
Preparing to unpack .../3-libvulkan-dev_1.3.275.0-1build1_amd64.deb ...
Unpacking libvulkan-dev:amd64 (1.3.275.0-1build1) ...
Selecting previously unselected package libffi-dev:amd64.
Preparing to unpack .../4-libffi-dev_3.4.6-1build1_amd64.deb ...
Unpacking libffi-dev:amd64 (3.4.6-1build1) ...
Selecting previously unselected package libwayland-bin.
Preparing to unpack .../5-libwayland-bin_1.22.0-2.1build1_amd64.deb ...
Unpacking libwayland-bin (1.22.0-2.1build1) ...
Selecting previously unselected package libwayland-dev:amd64.
Preparing to unpack .../6-libwayland-dev_1.22.0-2.1build1_amd64.deb ...
Unpacking libwayland-dev:amd64 (1.22.0-2.1build1) ...
Setting up libglfw3:amd64 (3.3.10-1build1) ...
Setting up libvulkan-dev:amd64 (1.3.275.0-1build1) ...
Setting up libglfw3-dev:amd64 (3.3.10-1build1) ...
Setting up libffi-dev:amd64 (3.4.6-1build1) ...
Setting up libwayland-bin (1.22.0-2.1build1) ...
Setting up libegl1-mesa-dev:amd64 (24.2.8-1ubuntu1~24.04.1) ...
Setting up libwayland-dev:amd64 (1.22.0-2.1build1) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for install-info (7.1-3build2) ...
```

## dpkg -l | grep libglfw3-dev
```
eric@fantasy:~$ dpkg -l | grep libglfw3-dev
ii  libglfw3-dev:amd64                             3.3.10-1build1                           amd64        portable library for OpenGL, window and input (development files)
```

```
eric@fantasy:~$ find /usr /usr/local -name "glfw3Config.cmake"
/usr/lib/x86_64-linux-gnu/cmake/glfw3/glfw3Config.cmake
```


```
eric@fantasy:~/work/openvkl_work/openvkl/build$ dpkg -l | grep tbb
ii  libtbb-dev:amd64                               2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - development files
ii  libtbb12:amd64                                 2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - runtime files
ii  libtbbbind-2-5:amd64                           2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - runtime files
ii  libtbbmalloc2:amd64                            2021.11.0-2ubuntu2                       amd64        parallelism helper library for C++ - runtime files
```

```
sudo apt remove libtbb-dev libtbb12 libtbbbind-2-5 libtbbmalloc2
sudo apt autoremove
```

```
eric@fantasy:~/work/openvkl_work/openvkl/build$ sudo apt remove libtbb-dev libtbb12 libtbbbind-2-5 libtbbmalloc2
sudo apt autoremove
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  libtbb-dev libtbb12 libtbbbind-2-5 libtbbmalloc2
0 upgraded, 0 newly installed, 4 to remove and 1 not upgraded.
After this operation, 1,977 kB disk space will be freed.
Do you want to continue? [Y/n] y
(Reading database ... 214576 files and directories currently installed.)
Removing libtbb-dev:amd64 (2021.11.0-2ubuntu2) ...
Removing libtbb12:amd64 (2021.11.0-2ubuntu2) ...
Removing libtbbbind-2-5:amd64 (2021.11.0-2ubuntu2) ...
Removing libtbbmalloc2:amd64 (2021.11.0-2ubuntu2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
eric@fantasy:~/work/openvkl_work/openvkl/build$ sudo apt autoremove
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded
```

```
eric@fantasy:~/work/openvkl_work/openvkl/build$ dpkg -l | grep tbb
eric@fantasy:~/work/openvkl_work/openvkl/build$ 
```

```
module load oneapi/2025.1.0
module load tbb/2022.1
```
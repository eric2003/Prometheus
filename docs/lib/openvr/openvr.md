# openvr


## Link

- [github openvr](https://github.com/ValveSoftware/openvr).

## find /usr /usr/local /opt/intel/oneapi -name "openvr.h"
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "openvr.h"
eric@fantasy:~$ 
```

## find /usr /usr/local /opt/intel/oneapi -name "libopenvr_api.so"
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "libopenvr_api.so"
eric@fantasy:~$ 
```

## dpkg -l | grep openvr
```
eric@fantasy:~$ dpkg -l | grep openvr
eric@fantasy:~$ 
```

## git clone https://github.com/ValveSoftware/openvr.git
```
eric@fantasy:~/work/openvr_work$ git clone https://github.com/ValveSoftware/openvr.git
Cloning into 'openvr'...
remote: Enumerating objects: 4000, done.
remote: Counting objects: 100% (185/185), done.
remote: Compressing objects: 100% (116/116), done.
remote: Total 4000 (delta 109), reused 69 (delta 69), pack-reused 3815 (from 2)
Receiving objects: 100% (4000/4000), 492.17 MiB | 6.53 MiB/s, done.
Resolving deltas: 100% (1728/1728), done.
Updating files: 100% (855/855), done.
```

## sudo apt install build-essential cmake libgl1-mesa-dev
```
eric@fantasy:~$ sudo apt install build-essential cmake libgl1-mesa-dev
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
build-essential is already the newest version (12.10ubuntu1).
The following additional packages will be installed:
  cmake-data librhash0
Suggested packages:
  cmake-doc cmake-format elpa-cmake-mode ninja-build
The following NEW packages will be installed:
  cmake cmake-data libgl1-mesa-dev librhash0
0 upgraded, 4 newly installed, 0 to remove and 1 not upgraded.
Need to get 13.5 MB of archives.
After this operation, 48.9 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 librhash0 amd64 1.4.3-3build1 [129 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 cmake-data all 3.28.3-1build7 [2,155 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 cmake amd64 3.28.3-1build7 [11.2 MB]
Get:4 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgl1-mesa-dev amd64 24.2.8-1ubuntu1~24.04.1 [19.2 kB]
Fetched 13.5 MB in 2s (8,962 kB/s)         
Selecting previously unselected package librhash0:amd64.
(Reading database ... 214782 files and directories currently installed.)
Preparing to unpack .../librhash0_1.4.3-3build1_amd64.deb ...
Unpacking librhash0:amd64 (1.4.3-3build1) ...
Selecting previously unselected package cmake-data.
Preparing to unpack .../cmake-data_3.28.3-1build7_all.deb ...
Unpacking cmake-data (3.28.3-1build7) ...
Selecting previously unselected package cmake.
Preparing to unpack .../cmake_3.28.3-1build7_amd64.deb ...
Unpacking cmake (3.28.3-1build7) ...
Selecting previously unselected package libgl1-mesa-dev:amd64.
Preparing to unpack .../libgl1-mesa-dev_24.2.8-1ubuntu1~24.04.1_amd64.deb ...
Unpacking libgl1-mesa-dev:amd64 (24.2.8-1ubuntu1~24.04.1) ...
Setting up librhash0:amd64 (1.4.3-3build1) ...
Setting up libgl1-mesa-dev:amd64 (24.2.8-1ubuntu1~24.04.1) ...
Setting up cmake-data (3.28.3-1build7) ...
Setting up cmake (3.28.3-1build7) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

## mkdir build && cd build
```
eric@fantasy:~/work/openvr_work/openvr$ mkdir build && cd build
eric@fantasy:~/work/openvr_work/openvr/build$
```


```
module load cmake/4.0.2
module load oneapi/2025.1.0
#module load tbb/2022.1
```

```
eric@fantasy:~/work/openvr_work/openvr/build$ cmake ..
CMake Error at CMakeLists.txt:2 (cmake_minimum_required):
  Compatibility with CMake < 3.5 has been removed from CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.

  Or, add -DCMAKE_POLICY_VERSION_MINIMUM=3.5 to try configuring anyway.


-- Configuring incomplete, errors occurred!
eric@fantasy:~/work/openvr_work/openvr/build$ cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5
```

## cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5
```
eric@fantasy:~/work/openvr_work/openvr/build$ cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5
CMake Deprecation Warning at CMakeLists.txt:2 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- The C compiler identification is GNU 13.3.0
-- The CXX compiler identification is GNU 13.3.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: /usr/bin/cc - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done (0.6s)
-- Generating done (0.0s)
-- Build files have been written to: /home/eric/work/openvr_work/openvr/build
```

```
make -j$(nproc)
sudo make install
```
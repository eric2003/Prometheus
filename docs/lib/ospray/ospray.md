# ospray

## Link

- [github ospray](https://github.com/RenderKit/ospray).

```
ipconfig /flushdns
```

## windows11

git clone https://github.com/ospray/ospray.git
```
PS D:\work\ospray_work> git clone https://github.com/ospray/ospray.git
Cloning into 'ospray'...
remote: Enumerating objects: 101795, done.
remote: Counting objects: 100% (1864/1864), done.
remote: Compressing objects: 100% (384/384), done.
remote: Total 101795 (delta 1568), reused 1480 (delta 1480), pack-reused 99931 (from 3)
Receiving objects: 100% (101795/101795), 31.53 MiB | 138.00 KiB/s, done.
Resolving deltas: 100% (78712/78712), done.
```

## git clone https://github.com/ospray/ospray.git
```
eric@fantasy:~/work/ospray_work$ git clone https://github.com/ospray/ospray.git
Cloning into 'ospray'...
remote: Enumerating objects: 101795, done.
remote: Counting objects: 100% (13109/13109), done.
remote: Compressing objects: 100% (2496/2496), done.
remote: Total 101795 (delta 9872), reused 12604 (delta 9654), pack-reused 88686 (from 1)
Receiving objects: 100% (101795/101795), 30.49 MiB | 54.00 KiB/s, done.
Resolving deltas: 100% (78797/78797), done.
```

## ispc --version
```
eric@fantasy:~/work/ospray_work/ospray/build$ ispc --version
Command 'ispc' not found, but can be installed with:
sudo snap install ispc  # version 1.27.0, or
sudo apt  install ispc  # version 1.22.0-4
See 'snap info ispc' for additional versions.
```

## sudo apt install ispc
```
eric@fantasy:~$ sudo apt install ispc
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  ispc
0 upgraded, 1 newly installed, 0 to remove and 4 not upgraded.
Need to get 3,331 kB of archives.
After this operation, 23.7 MB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 ispc amd64 1.22.0-4 [3,331 kB]
Fetched 3,331 kB in 1s (3,373 kB/s)
Selecting previously unselected package ispc.
(Reading database ... 214211 files and directories currently installed.)
Preparing to unpack .../ispc_1.22.0-4_amd64.deb ...
Unpacking ispc (1.22.0-4) ...
Setting up ispc (1.22.0-4) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
module load oneapi/2025.1.0
```

```
eric@fantasy:~/work/ospray_work/ospray/build$ module list
Currently Loaded Modulefiles:
 1) cmake/4.0.2            7) ishmem/1.3.0                13) dev-utilities/2025.1.0        
 2) umf/0.10.0             8) intel_ippcp_intel64/2025.1  14) debugger/2025.1.0             
 3) tbb/2022.1             9) intel_ipp_intel64/2022.1    15) compiler/2025.1.0             
 4) compiler-rt/2025.1.0  10) dpl/2022.8                  16) compiler-intel-llvm/2025.1.0  
 5) mpi/2021.15           11) dpct/2025.1.0               17) ccl/2021.15.0                 
 6) mkl/2025.1            12) dnnl/3.7.1                  18) oneapi/2025.1.0               

Key:
auto-loaded  
```

```
eric@fantasy:~/work/ospray_work/ospray/build$ cmake ..
CMake Deprecation Warning at CMakeLists.txt:4 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- Found Git: /usr/bin/git (found version "2.43.0")
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
-- Found ISPC v1.22.0: /usr/bin/ispc
-- ISPC supports: x86, x86-64, arm, aarch64
CMake Error at cmake/ospray_options.cmake:79 (find_package):
  By not providing "Findrkcommon.cmake" in CMAKE_MODULE_PATH this project has
  asked CMake to find a package configuration file provided by "rkcommon",
  but CMake did not find one.

  Could not find a package configuration file provided by "rkcommon"
  (requested version 1.14.2) with any of the following names:

    rkcommonConfig.cmake
    rkcommon-config.cmake

  Add the installation prefix of "rkcommon" to CMAKE_PREFIX_PATH or set
  "rkcommon_DIR" to a directory containing one of the above files.  If
  "rkcommon" provides a separate development package or SDK, be sure it has
  been installed.
Call Stack (most recent call first):
  CMakeLists.txt:44 (include)


-- Configuring incomplete, errors occurred!
```

### sudo apt install libembree-dev
```
eric@fantasy:~$ sudo apt install libembree-dev
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libembree4-4
Suggested packages:
  embree-tools
The following NEW packages will be installed:
  libembree-dev libembree4-4
0 upgraded, 2 newly installed, 0 to remove and 4 not upgraded.
Need to get 9,401 kB of archives.
After this operation, 40.6 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libembree4-4 amd64 4.3.0+dfsg-2 [9,265 kB]
Get:2 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libembree-dev amd64 4.3.0+dfsg-2 [136 kB]
Fetched 9,401 kB in 1s (8,414 kB/s)     
Selecting previously unselected package libembree4-4:amd64.
(Reading database ... 214216 files and directories currently installed.)
Preparing to unpack .../libembree4-4_4.3.0+dfsg-2_amd64.deb ...
Unpacking libembree4-4:amd64 (4.3.0+dfsg-2) ...
Selecting previously unselected package libembree-dev:amd64.
Preparing to unpack .../libembree-dev_4.3.0+dfsg-2_amd64.deb ...
Unpacking libembree-dev:amd64 (4.3.0+dfsg-2) ...
Setting up libembree4-4:amd64 (4.3.0+dfsg-2) ...
Setting up libembree-dev:amd64 (4.3.0+dfsg-2) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

```
dpkg -L libembree4-4
dpkg -L libembree-dev
```


```
module load cmake/4.0.2
module load oneapi/2025.1.0
export embree_DIR=/usr/lib/x86_64-linux-gnu/cmake/embree-4.3.0
```

### sudo apt remove libembree-dev libembree4-4
```
eric@fantasy:~$ sudo apt remove libembree-dev libembree4-4
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  libembree-dev libembree4-4
0 upgraded, 0 newly installed, 2 to remove and 4 not upgraded.
After this operation, 40.6 MB disk space will be freed.
Do you want to continue? [Y/n] y
(Reading database ... 214373 files and directories currently installed.)
Removing libembree-dev:amd64 (4.3.0+dfsg-2) ...
Removing libembree4-4:amd64 (4.3.0+dfsg-2) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### sudo apt purge libembree-dev libembree4-4
```
sudo apt purge libembree-dev libembree4-4
sudo apt autoremove
```

```
Found OpenGL: /usr/lib/x86_64-linux-gnu/libOpenGL.so (Required is at least version "3")
```

### sudo apt install mesa-utils
```
eric@fantasy:~$ sudo apt install mesa-utils
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
mesa-utils is already the newest version (9.0.0-2).
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
```

```
eric@fantasy:~$ ps aux | grep cmake
eric       74190  0.2  0.0  29396 20204 pts/9    S+   19:30   0:00 cmake ..
eric       74264  0.0  0.0  20860  8868 pts/9    S+   19:30   0:00 /home/eric/software/cmake/cmake-4.0.2-linux-x86_64/bin/cmake --build . --config Debug
eric       74279  0.0  0.0   2808  1584 pts/9    S+   19:30   0:00 /bin/sh -c cd /home/eric/work/ospray_work/ospray/build/_deps && /home/eric/software/cmake/cmake-4.0.2-linux-x86_64/bin/cmake -DCMAKE_MESSAGE_LOG_LEVEL=VERBOSE -P /home/eric/work/ospray_work/ospray/build/_deps/imgui-subbuild/imgui-populate-prefix/tmp/imgui-populate-gitclone.cmake
eric       74280  0.0  0.0  20956  9280 pts/9    S+   19:30   0:00 /home/eric/software/cmake/cmake-4.0.2-linux-x86_64/bin/cmake -DCMAKE_MESSAGE_LOG_LEVEL=VERBOSE -P /home/eric/work/ospray_work/ospray/build/_deps/imgui-subbuild/imgui-populate-prefix/tmp/imgui-populate-gitclone.cmake
eric       74409  0.0  0.0  17816  2224 pts/2    S+   19:33   0:00 grep --color=auto cmake
```


```
CMake Error at apps/ospBenchmark/CMakeLists.txt:8 (find_package):
  By not providing "Findbenchmark.cmake" in CMAKE_MODULE_PATH this project
  has asked CMake to find a package configuration file provided by
  "benchmark", but CMake did not find one.

  Could not find a package configuration file provided by "benchmark" with
  any of the following names:

    benchmarkConfig.cmake
    benchmark-config.cmake

  Add the installation prefix of "benchmark" to CMAKE_PREFIX_PATH or set
  "benchmark_DIR" to a directory containing one of the above files.  If
  "benchmark" provides a separate development package or SDK, be sure it has
  been installed.
```

```
sudo apt update
sudo apt install libbenchmark-dev
```

```
eric@fantasy:~$ sudo apt install libbenchmark-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libbenchmark1.8.3
Suggested packages:
  libbenchmark-tools
The following NEW packages will be installed:
  libbenchmark-dev libbenchmark1.8.3
0 upgraded, 2 newly installed, 0 to remove and 1 not upgraded.
Need to get 247 kB of archives.
After this operation, 564 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libbenchmark1.8.3 amd64 1.8.3-3 [160 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libbenchmark-dev amd64 1.8.3-3 [86.8 kB]
Fetched 247 kB in 1s (271 kB/s)            
Selecting previously unselected package libbenchmark1.8.3:amd64.
(Reading database ... 214453 files and directories currently installed.)
Preparing to unpack .../libbenchmark1.8.3_1.8.3-3_amd64.deb ...
Unpacking libbenchmark1.8.3:amd64 (1.8.3-3) ...
Selecting previously unselected package libbenchmark-dev:amd64.
Preparing to unpack .../libbenchmark-dev_1.8.3-3_amd64.deb ...
Unpacking libbenchmark-dev:amd64 (1.8.3-3) ...
Setting up libbenchmark1.8.3:amd64 (1.8.3-3) ...
Setting up libbenchmark-dev:amd64 (1.8.3-3) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### find /usr /usr/local -name "benchmarkConfig.cmake"
```
eric@fantasy:~$ find /usr /usr/local -name "benchmarkConfig.cmake"
/usr/lib/x86_64-linux-gnu/cmake/benchmark/benchmarkConfig.cmake
eric@fantasy:~$ 
```


```
eric@fantasy:~$ pkg-config --modversion benchmar
Package benchmar was not found in the pkg-config search path.
Perhaps you should add the directory containing `benchmar.pc'
to the PKG_CONFIG_PATH environment variable
Package 'benchmar', required by 'virtual:world', not found
```

```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "GTestConfig.cmake"
eric@fantasy:~$ 
```

```
eric@fantasy:~$ dpkg -l | grep gtest
eric@fantasy:~$
```

```
eric@fantasy:~$ sudo apt install libgtest-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  googletest
The following NEW packages will be installed:
  googletest libgtest-dev
0 upgraded, 2 newly installed, 0 to remove and 1 not upgraded.
Need to get 789 kB of archives.
After this operation, 5,160 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 googletest all 1.14.0-1 [521 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libgtest-dev amd64 1.14.0-1 [268 kB]
Fetched 789 kB in 1s (854 kB/s)       
Selecting previously unselected package googletest.
(Reading database ... 214491 files and directories currently installed.)
Preparing to unpack .../googletest_1.14.0-1_all.deb ...
Unpacking googletest (1.14.0-1) ...
Selecting previously unselected package libgtest-dev:amd64.
Preparing to unpack .../libgtest-dev_1.14.0-1_amd64.deb ...
Unpacking libgtest-dev:amd64 (1.14.0-1) ...
Setting up googletest (1.14.0-1) ...
Setting up libgtest-dev:amd64 (1.14.0-1) ...
```

find /usr /usr/local -name "GTestConfig.cmake"
```
eric@fantasy:~$ find /usr /usr/local -name "GTestConfig.cmake"
/usr/lib/x86_64-linux-gnu/cmake/GTest/GTestConfig.cmake
eric@fantasy:~$ 
```

```
eric@fantasy:~/work/ospray_work/ospray/build$ cmake ..
CMake Deprecation Warning at CMakeLists.txt:4 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- Found ISPC v1.22.0: /usr/bin/ispc
-- ISPC supports: x86, x86-64, arm, aarch64
-- Found Embree v4.4.0: /usr/local/lib/libembree4.so.4
-- Found Open VKL v2.0.1: /usr/local/lib/libopenvkl.so.2.0.1
-- OSPRay SSE4 ISA target enabled.
-- OSPRay AVX ISA target enabled.
-- OSPRay AVX2 ISA target enabled.
-- OSPRay AVX512SKX ISA target enabled.
CMake Deprecation Warning at test_image_data/CMakeLists.txt:4 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- Configuring done (0.6s)
-- Generating done (0.3s)
-- Build files have been written to: /home/eric/work/ospray_work/ospray/build
```

```
make -j$(nproc)
sudo make install
```
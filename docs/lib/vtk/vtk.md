# VTK

## Link

- [SQLite3](https://github.com/madler/zlib).


## Ubuntu

```bash
cmake .. \
      -D CMAKE_BUILD_TYPE=Release \
      -D BUILD_SHARED_LIBS=ON \
      -D VTK_BUILD_ALL_MODULES=ON \
      -D VTK_USE_MPI=ON \
      -D VTK_MODULE_USE_EXTERNAL_VTK_jsoncpp=ON \
      -D VTK_MODULE_ENABLE_VTK_MomentInvariants=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingLookingGlass=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO \
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO \
      -D VTK_MODULE_ENABLE_VTK_GUISupportMFC=NO \
      | tee output.txt
```

output
```
-- Could NOT find JsonCpp (missing: JsonCpp_LIBRARY JsonCpp_INCLUDE_DIR) (Required is at least version "0.7.0")
CMake Error at CMake/vtkModule.cmake:5357 (message):
  Could not find the JsonCpp external dependency.
Call Stack (most recent call first):
  CMake/vtkModule.cmake:5994 (vtk_module_find_package)
  CMake/vtkModule.cmake:5861 (vtk_module_third_party_external)
  ThirdParty/jsoncpp/CMakeLists.txt:5 (vtk_module_third_party)
```

```
dpkg -l | grep libjsoncpp-dev
dpkg-query -W -f='${Status}' libjsoncpp-dev
ls /usr/include/jsoncpp/json/
ls /usr/lib/x86_64-linux-gnu/libjsoncpp*
```

### dpkg -l | grep libjsoncpp-dev
```
eric@fantasy:~$ dpkg -l | grep libjsoncpp-dev
eric@fantasy:~$ 
```

sudo apt install libjsoncpp-dev
```
eric@fantasy:~$ sudo apt install libjsoncpp-dev
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages were automatically installed and are no longer required:
  linux-headers-6.11.0-24-generic linux-hwe-6.11-headers-6.11.0-24 linux-hwe-6.11-tools-6.11.0-24
  linux-image-6.11.0-24-generic linux-modules-6.11.0-24-generic linux-modules-extra-6.11.0-24-generic
  linux-tools-6.11.0-24-generic
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  libjsoncpp25
The following NEW packages will be installed:
  libjsoncpp-dev libjsoncpp25
0 upgraded, 2 newly installed, 0 to remove and 6 not upgraded.
Need to get 106 kB of archives.
After this operation, 352 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libjsoncpp25 amd64 1.9.5-6build1 [82.8 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libjsoncpp-dev amd64 1.9.5-6build1 [23.0 kB]
Fetched 106 kB in 2s (55.3 kB/s)          
Selecting previously unselected package libjsoncpp25:amd64.
(Reading database ... 252369 files and directories currently installed.)
Preparing to unpack .../libjsoncpp25_1.9.5-6build1_amd64.deb ...
Unpacking libjsoncpp25:amd64 (1.9.5-6build1) ...
Selecting previously unselected package libjsoncpp-dev:amd64.
Preparing to unpack .../libjsoncpp-dev_1.9.5-6build1_amd64.deb ...
Unpacking libjsoncpp-dev:amd64 (1.9.5-6build1) ...
Setting up libjsoncpp25:amd64 (1.9.5-6build1) ...
Setting up libjsoncpp-dev:amd64 (1.9.5-6build1) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### dpkg -l | grep libjsoncpp-dev
```
eric@fantasy:~$ dpkg -l | grep libjsoncpp-dev
ii  libjsoncpp-dev:amd64                           1.9.5-6build1                            amd64        library for reading and writing JSON for C++ (devel files)
```

### dpkg -L libjsoncpp-dev
```
eric@fantasy:~$ dpkg -L libjsoncpp-dev
/.
/usr
/usr/include
/usr/include/jsoncpp
/usr/include/jsoncpp/json
/usr/include/jsoncpp/json/allocator.h
/usr/include/jsoncpp/json/assertions.h
/usr/include/jsoncpp/json/config.h
/usr/include/jsoncpp/json/forwards.h
/usr/include/jsoncpp/json/json.h
/usr/include/jsoncpp/json/json_features.h
/usr/include/jsoncpp/json/reader.h
/usr/include/jsoncpp/json/value.h
/usr/include/jsoncpp/json/version.h
/usr/include/jsoncpp/json/writer.h
/usr/lib
/usr/lib/x86_64-linux-gnu
/usr/lib/x86_64-linux-gnu/cmake
/usr/lib/x86_64-linux-gnu/cmake/jsoncpp
/usr/lib/x86_64-linux-gnu/cmake/jsoncpp/jsoncpp-namespaced-targets.cmake
/usr/lib/x86_64-linux-gnu/cmake/jsoncpp/jsoncpp-targets-none.cmake
/usr/lib/x86_64-linux-gnu/cmake/jsoncpp/jsoncpp-targets.cmake
/usr/lib/x86_64-linux-gnu/cmake/jsoncpp/jsoncppConfig.cmake
/usr/lib/x86_64-linux-gnu/cmake/jsoncpp/jsoncppConfigVersion.cmake
/usr/lib/x86_64-linux-gnu/pkgconfig
/usr/lib/x86_64-linux-gnu/pkgconfig/jsoncpp.pc
/usr/share
/usr/share/doc
/usr/share/doc/libjsoncpp-dev
/usr/share/doc/libjsoncpp-dev/copyright
/usr/lib/x86_64-linux-gnu/libjsoncpp.so
/usr/share/doc/libjsoncpp-dev/changelog.Debian.gz
```


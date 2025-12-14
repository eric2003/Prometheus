# vcpkg

vcpkg is a free C/C++ package manager for acquiring and managing libraries. Choose from over 1500 open source libraries to download and build in a single step or add your own private libraries to simplify your build process. Maintained by the Microsoft C++ team and open source contributors.


## article link

- [vcpkg.io](https://vcpkg.io/en/).
- [vcpkg documentation](https://learn.microsoft.com/en-us/vcpkg/).
- [vcpkg系列链接整理](https://zhuanlan.zhihu.com/p/564608106/).

## vcpkg-tool

- [vcpkg-tool](https://github.com/microsoft/vcpkg-tool#).

git clone git@github.com:microsoft/vcpkg-tool.git
```
```


## Set up vcpkg

1、Clone the repository
```
PS C:\dev> git clone https://github.com/microsoft/vcpkg.git
Cloning into 'vcpkg'...
remote: Enumerating objects: 245363, done.
remote: Counting objects: 100% (22102/22102), done.
remote: Compressing objects: 100% (378/378), done.
remote: Total 245363 (delta 21931), reused 21736 (delta 21724), pack-reused 223261 (from 1)Receiving objects: 100% (2453Receiving objects: 100% (245363/245363), 72.53 MiB | 4.07 MiB/s, done.

Resolving deltas: 100% (164093/164093), done.
Updating files: 100% (11632/11632), done.
```

2、Run the bootstrap script
```
cd vcpkg && bootstrap-vcpkg.bat
```

```
PS C:\dev\vcpkg> ./bootstrap-vcpkg.bat
Downloading https://github.com/microsoft/vcpkg-tool/releases/download/2024-08-01/vcpkg.exe -> C:\dev\vcpkg\vcpkg.exe (using IE proxy: 127.0.0.1:10809)... done.
Validating signature... done.

vcpkg package management program version 2024-08-01-fd884a0d390d12783076341bd43d77c3a6a15658

See LICENSE.txt for license information.
Telemetry
---------
vcpkg collects usage data in order to help us improve your experience.
The data collected by Microsoft is anonymous.
You can opt-out of telemetry by re-running the bootstrap-vcpkg script with -disableMetrics,
passing --disable-metrics to vcpkg on the command line,
or by setting the VCPKG_DISABLE_METRICS environment variable.

Read more about vcpkg telemetry at docs/about/privacy.md
```

## update
```
  .\vcpkg.exe update
  .\vcpkg.exe upgrade
  .\vcpkg.exe upgrade --no-dry-run
```

## git pull
```
  PS C:\dev\vcpkg> .\vcpkg.exe update
  Using local portfile versions. To update the local portfiles, use `git pull`.
```
 
## update example
```
  PS C:\dev\vcpkg> .\vcpkg.exe update
  Using local portfile versions. To update the local portfiles, use `git pull`.
  The following packages differ from their port versions:
          angle:x64-windows                chromium_5414#4 -> chromium_5414#7
          assimp:x64-windows               5.2.5 -> 5.3.1#3
          eigen3:x64-windows               3.4.0#2 -> 3.4.0#3
          kubazip:x64-windows              0.2.4 -> 0.2.6
          minizip:x64-windows              1.2.13#2 -> 1.3#1
          pugixml:x64-windows              1.13.0 -> 1.14
          rapidjson:x64-windows            2023-04-27 -> 2023-07-17
          utfcpp:x64-windows               3.2.3 -> 4.0.2
          vcpkg-get-python-packages:x64-windows 2022-06-30 -> 2023-07-28
          zlib:x64-windows                 1.2.13 -> 1.3  
```

## upgrade
```
  PS C:\dev\vcpkg> .\vcpkg.exe upgrade
  The following packages will be rebuilt:
    * angle:x64-windows -> chromium_5414#7
    * assimp:x64-windows -> 5.3.1#3
    * eigen3:x64-windows -> 3.4.0#3
    * kubazip:x64-windows -> 0.2.6
    * minizip:x64-windows -> 1.3#1
    * pugixml:x64-windows -> 1.14
    * rapidjson:x64-windows -> 2023-07-17
    * utfcpp:x64-windows -> 4.0.2
    * vcpkg-get-python-packages:x64-windows -> 2023-07-28
    * zlib:x64-windows -> 1.3
  The following packages will be built and installed:
    * polyclipping:x64-windows -> 6.4.2#12
    * vcpkg-cmake-get-vars:x64-windows -> 2023-03-02
  Additional packages (*) will be modified to complete this operation.
  If you are sure you want to rebuild the above packages, run this command with the --no-dry-run option.		  
```

## .\vcpkg upgrade
```
To update these packages and all dependencies, run
.\vcpkg upgrade'
To only remove outdated packages, run
.\vcpkg remove --outdated
```

## .\vcpkg remove --outdated

```
.\vcpkg remove --outdated --recurse
```

## search
```
  .\vcpkg.exe search poly2tri
  .\vcpkg.exe search eigen
```

## remove

```
  .\vcpkg.exe remove --outdated
  .\vcpkg.exe remove --outdated --recurse
```

  
## list
```
  .\vcpkg.exe list  
```
  
## install
```
  .\vcpkg.exe install eigen3
``` 

## cmake
```
  cmake -DCMAKE_TOOLCHAIN_FILE="C:/dev/vcpkg/scripts/buildsystems/vcpkg.cmake" ..  
```

```
cmake .. -DCMAKE_TOOLCHAIN_FILE="C:/dev/vcpkg/scripts/buildsystems/vcpkg.cmake" -DVCPKG_TARGET_TRIPLET=x64-windows
or
cmake .. -DCMAKE_TOOLCHAIN_FILE="C:/dev/vcpkg/scripts/buildsystems/vcpkg.cmake" -DVCPKG_TARGET_TRIPLET="x64-windows"
```

## error info

```
PS C:\dev\vcpkg> .\vcpkg.exe install eigen3
Computing installation plan...
The following packages will be built and installed:
    eigen3:x64-windows -> 3.4.0#4
  * vcpkg-cmake:x64-windows -> 2024-04-23
  * vcpkg-cmake-config:x64-windows -> 2024-05-23
Additional packages (*) will be modified to complete this operation.
error: in triplet x64-windows: Unable to find a valid Visual Studio instance
Could not locate a complete Visual Studio instance
The following paths were examined for Visual Studio instances:
    C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary/Build\vcvarsall.bat
```

## example
```
cmake_minimum_required(VERSION 3.0)
project(YourProjectName)

# 设置vcpkg的路径
set(VCPKG_ROOT "path/to/vcpkg" CACHE STRING "Vcpkg root directory")

# 设置vcpkg的三个变量
set(CMAKE_TOOLCHAIN_FILE "${VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake" CACHE STRING "Vcpkg toolchain file")
set(VCPKG_TARGET_TRIPLET "x64-windows" CACHE STRING "Vcpkg target triplet")
set(VCPKG_OVERLAY_PORTS "path/to/your/overlay/ports" CACHE STRING "Vcpkg overlay ports directory")

# 添加vcpkg的库
find_package(vcpkg_library_name REQUIRED)

# 添加你的库
add_library(YourLibraryName SHARED YourSourceFiles)

# 链接vcpkg的库到你的库
target_link_libraries(YourLibraryName PRIVATE vcpkg_library_name)
```

## z_vcpkg_add_vcpkg_to_cmake_path
```
function(z_vcpkg_add_vcpkg_to_cmake_path list suffix)
    set(vcpkg_paths
        "${_VCPKG_INSTALLED_DIR}/${VCPKG_TARGET_TRIPLET}${suffix}"
        "${_VCPKG_INSTALLED_DIR}/${VCPKG_TARGET_TRIPLET}/debug${suffix}"
    )
    if(NOT DEFINED CMAKE_BUILD_TYPE OR CMAKE_BUILD_TYPE MATCHES "^[Dd][Ee][Bb][Uu][Gg]$")
        list(REVERSE vcpkg_paths)
    endif()
    if(VCPKG_PREFER_SYSTEM_LIBS)
        list(APPEND "${list}" "${vcpkg_paths}")
    else()
        list(INSERT "${list}" "0" "${vcpkg_paths}")
    endif()
    set("${list}" "${${list}}" PARENT_SCOPE)
endfunction()
z_vcpkg_add_vcpkg_to_cmake_path(CMAKE_PREFIX_PATH "")
z_vcpkg_add_vcpkg_to_cmake_path(CMAKE_LIBRARY_PATH "/lib/manual-link")
z_vcpkg_add_vcpkg_to_cmake_path(CMAKE_FIND_ROOT_PATH "")s
```

```
功能：
将 vcpkg 的库路径（Release 和 Debug）添加到 CMake 的查找路径：
CMAKE_PREFIX_PATH：查找包和配置文件。
CMAKE_LIBRARY_PATH：查找手动链接的库。
CMAKE_FIND_ROOT_PATH：交叉编译时的根路径。
逻辑：
为每个路径添加 Release（VCPKG_TARGET_TRIPLET）和 Debug（VCPKG_TARGET_TRIPLET/debug）版本。
Debug 构建时，优先查找 Debug 路径（通过 list(REVERSE)）。
如果 VCPKG_PREFER_SYSTEM_LIBS 为 ON，将 vcpkg 路径追加到列表末尾（系统库优先）；否则插入到开头（vcpkg 库优先）。
意义：
确保 CMake 能找到 vcpkg 安装的库和头文件。
支持 Debug/Release 配置和交叉编译。
```

```
PS D:\work\openvdb_work\simple\01a\build> Remove-Item -Recurse -Force *
PS D:\work\openvdb_work\simple\01a\build> cmake --version
cmake version 4.0.2

CMake suite maintained and supported by Kitware (kitware.com/cmake).
PS D:\work\openvdb_work\simple\01a\build> cmake .. -DCMAKE_MODULE_PATH=C:/dev/OpenVDB/lib/cmake/OpenVDB -G "Visual Studio 17 2022" -A x64
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
COMPONENT = openvdb
-- Found OpenVDB: C:/dev/OpenVDB/include (found version "12.0.2") found components: openvdb
-- OpenVDB ABI Version: 12
-- Found TBB: C:/Program Files (x86)/Intel/oneAPI/tbb/latest/include (found version "2022.0") found components: tbb
-- Found Blosc: C:/dev/blosc/lib/blosc.lib (found version "1.21.7")
-- Found ZLIB: C:/dev/zlib/lib/z.lib (found version "1.3.1.1")
CMake Warning (dev) at C:/dev/OpenVDB/lib/cmake/OpenVDB/FindOpenVDB.cmake:632 (find_package):
  Policy CMP0167 is not set: The FindBoost module is removed.  Run "cmake
  --help-policy CMP0167" for policy details.  Use the cmake_policy command to
  set the policy and suppress this warning.

Call Stack (most recent call first):
  CMakeLists.txt:8 (find_package)
This warning is for project developers.  Use -Wno-dev to suppress it.

-- Found Boost: C:/dev/boost_1_88_0/stage/lib/cmake/Boost-1.88.0/BoostConfig.cmake (found version "1.88.0") found components: iostreams
-- Found TBB: C:/Program Files (x86)/Intel/oneAPI/tbb/latest/include (found version "2022.0") found components: tbb tbbmalloc tbbmalloc_proxy
-- Configuring done (6.7s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/openvdb_work/simple/01a/build
PS D:\work\openvdb_work\simple\01a\build>
```

## vcpkg-cmake-wrapper.cmake Search results
```
Search results:
63 files and 0 directories found

c:\dev\vcpkg\ports\z3\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\zlib\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\zeromq\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\zeus\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\vera++\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\verilator\c\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxwidgets\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wtl\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxsqlite3\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxpython\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxpython-4.0\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxsqlite\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxscintilla\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\wxscintilla-aq\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\sdl2pp\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\python3\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\protobuf\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\polyclipping\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\physfs\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\opencv\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\octomap\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\nccl\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\mosquitto\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\vma\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\vnc\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\vncserver\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libxslt\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libxml2\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libxml++\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libx11\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libssh2\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\librdkafka\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\librsvg\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\librsync\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libtiff\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libpq\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libpng\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libnotify\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libmng\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libmad\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\liblzma\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libjpeg-turbo\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libjpeg\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libjxrt\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libiconv\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libicu\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libidn2\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libidn11\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libiconv\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\libssh\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\librsvg\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\librdkafka\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\librdkafka\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\glib\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\glog\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\glew\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\giflib\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\gflags\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\gettext-lib\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\gdal\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\freetype\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\freeglut\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\fleacs\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\ffmpeg\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\expat\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\egl\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\cpng\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\curl\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\cudnn\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\curlpp\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\boost-uninstall\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\asiosdk\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\amalgamated\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\ports\alsa\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\packages\lib64-windows\share\lib\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\packages\opengl\lib64-windows\share\opengl\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\packages\libm2m\lib64-windows\share\libm2m\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\packages\boost-uninstall_x64-windows\share\boost\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\installed\x64-windows\share\zlib\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\installed\x64-windows\share\opencv4\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\installed\x64-windows\share\libibm\vcpkg-cmake-wrapper.cmake
c:\dev\vcpkg\installed\x64-windows\share\boost\vcpkg-cmake-wrapper.cmake
```

## Find text vcpkg-cmake-wrapper in file
```
Search results:
244 files and 0 directories found

c:\dev\vcpkg\vcpkg.exe
c:\dev\vcpkg\scripts\buildsystems\vcpkg.cmake
c:\dev\vcpkg\ports\zyre\portfile.cmake
c:\dev\vcpkg\ports\zlib\portfile.cmake
c:\dev\vcpkg\ports\zeromq\portfile.cmake
c:\dev\vcpkg\ports\weu\portfile.cmake
c:\dev\vcpkg\ports\wxwidgets\portfile.cmake
c:\dev\vcpkg\ports\wxportfile.cmake
c:\dev\vcpkg\ports\wtl\portfile.cmake
c:\dev\vcpkg\ports\tiff\portfile.cmake
c:\dev\vcpkg\ports\stb\portfile.cmake
c:\dev\vcpkg\ports\sqlite\portfile.cmake
c:\dev\vcpkg\ports\silk-encoder\portfile.cmake
c:\dev\vcpkg\ports\shiftmedia-libgdx\portfile.cmake
c:\dev\vcpkg\ports\sd2pp\portfile.cmake
c:\dev\vcpkg\ports\qtbase\fix_eg_2_patch\portfile.cmake
c:\dev\vcpkg\ports\python3\portfile.cmake
c:\dev\vcpkg\ports\pthreads\portfile.cmake
c:\dev\vcpkg\ports\protobuf\portfile.cmake
c:\dev\vcpkg\ports\polyclipping\portfile.cmake
c:\dev\vcpkg\ports\physfs\portfile.cmake
c:\dev\vcpkg\ports\openvdb\portfile.cmake
c:\dev\vcpkg\ports\openssl\portfile.cmake
c:\dev\vcpkg\ports\openexr\portfile.cmake
c:\dev\vcpkg\ports\opencv\portfile.cmake
c:\dev\vcpkg\ports\octomap\portfile.cmake
c:\dev\vcpkg\ports\nccl\portfile.cmake
c:\dev\vcpkg\ports\nmp\portfile.cmake
c:\dev\vcpkg\ports\nmosquito\portfile.cmake
c:\dev\vcpkg\ports\nvml\portfile.cmake
c:\dev\vcpkg\ports\nvapi\portfile.cmake
c:\dev\vcpkg\ports\nvffti\portfile.cmake
c:\dev\vcpkg\ports\nvrtc\portfile.cmake
c:\dev\vcpkg\ports\nvtx\portfile.cmake
c:\dev\vcpkg\ports\nvToolsExt\portfile.cmake
c:\dev\vcpkg\ports\nv_omp\portfile.cmake
c:\dev\vcpkg\ports\nvrtc\portfile.cmake
c:\dev\vcpkg\ports\nvtx\portfile.cmake
c:\dev\vcpkg\ports\nvToolsExt\portfile.cmake
c:\dev\vcpkg\ports\nv_omp\portfile.cmake
c:\dev\vcpkg\ports\nvrtc\portfile.cmake
c:\dev\vcpkg\ports\nvtx\portfile.cmake
c:\dev\vcpkg\ports\nvToolsExt\portfile.cmake
c:\dev\vcpkg\ports\nv_omp\portfile.cmake
c:\dev\vcpkg\ports\nvrtc\portfile.cmake
c:\dev\vcpkg\ports\nvtx\portfile.cmake
c:\dev\vcpkg\ports\nvToolsExt\portfile.cmake
c:\dev\vcpkg\ports\nv_omp\portfile.cmake
c:\dev\vcpkg\ports\nvrtc\portfile.cmake
c:\dev\vcpkg\ports\nvtx\portfile.cmake
c:\dev\vcpkg\ports\nvToolsExt\portfile.cmake
```

## ./vcpkg install fltk

```powershell
# 手动下载文件
Invoke-WebRequest -Uri "https://gitlab.gnome.org/GNOME/gdk-pixbuf/-/archive/2.42.12/gdk-pixbuf-2.42.12.tar.gz" -OutFile "C:\tmp\gdk-pixbuf-test.tar.gz"

# 计算哈希值（多次运行看是否一致）
Get-FileHash -Path "C:\tmp\gdk-pixbuf-test.tar.gz" -Algorithm SHA512
```

```
& "C:\Program Files\Git\mingw64\bin\curl.exe" `
  -L -o C:\tmp\gdk-pixbuf-curl.tar.gz `
  https://gitlab.gnome.org/GNOME/gdk-pixbuf/-/archive/2.42.12/gdk-pixbuf-2.42.12.tar.gz
```

```
# 将手动下载的文件复制到 vcpkg 缓存，使用 vcpkg 期望的精确文件名
Copy-Item "C:\tmp\gdk-pixbuf-curl.tar.gz" "C:\dev\vcpkg\downloads\GNOME-gdk-pixbuf-2.42.12.tar.gz" -Force

# 验证文件存在且大小正确 (7MB)
Get-Item "C:\dev\vcpkg\downloads\GNOME-gdk-pixbuf-2.42.12.tar.gz"
```
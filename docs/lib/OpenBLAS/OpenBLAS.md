# OpenBLAS


## Link

- [github OpenBLAS](https://github.com/OpenMathLib/OpenBLAS).
- [走进向量计算：从源码编译 OpenBLAS](https://soulteary.com/2022/07/08/into-vector-computing-compiling-openblas-from-source.html).
- [OpenBLAS](https://docs.hpc.sjtu.edu.cn/app/compilers_and_languages/openblas.html).
- [OpenBLAS An optimized BLAS library](http://www.openmathlib.org/OpenBLAS/).


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

```
SQLite3_INCLUDE_DIR c:/dev/sqlite3/include/
SQLite3_LIBRARY c:/dev/sqlite3/lib/libsqlite3.lib
```


```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake -T
```

```
PS D:\work\OpenBLAS_work\OpenBLAS\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
:: initializing oneAPI environment...
   Initializing Visual Studio command-line environment...
   Visual Studio version 17.13.7 environment configured.
   "C:\Program Files\Microsoft Visual Studio\2022\Community\"
   Visual Studio command-line environment initialized for: 'x64'
:  advisor -- latest
:  compiler -- latest
:  dal -- latest
:  debugger -- latest
:  dev-utilities -- latest
:  dnnl -- latest
:  dpcpp-ct -- latest
:  dpl -- latest
:  ipp -- latest
:  ippcp -- latest
:  mkl -- latest
:  mpi -- latest
:  ocloc -- latest
:  pti -- latest
:  tbb -- latest
:  umf -- latest
:  vtune -- latest
:: oneAPI environment initialized ::
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
```

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. `
     -G "Visual Studio 17 2022" -A x64 `
     -T fortran=ifx `
     -D CMAKE_INSTALL_PREFIX="C:/dev/OpenBLAS"
cmake-gui.exe
```

```
18>LIBCMT.lib(exe_main.obj) : error LNK2019: 无法解析的外部符号 main，函数 "int __cdecl __scrt_common_main_seh(void)" (?__scrt_common_main_seh@@YAHXZ) 中引用了该符号
18>D:\work\OpenBLAS_work\OpenBLAS\build\ctest\Release\xzcblat1.exe : fatal error LNK1120: 1 个无法解析的外部命令
21>openblas.lib(cblas_srotg.obj) : error LNK2019: 无法解析的外部符号 __imp_copysign，函数 cblas_srotg 中引用了该符号
21>LIBCMT.lib(exe_main.obj) : error LNK2019: 无法解析的外部符号 main，函数 "int __cdecl __scrt_common_main_seh(void)" (?__scrt_common_main_seh@@YAHXZ) 中引用了该符号
21>D:\work\OpenBLAS_work\OpenBLAS\build\ctest\Release\xscblat1.exe : fatal error LNK1120: 2 个无法解析的外部命令
```

main.cpp
```cpp
#include <stdio.h>
#include <cblas.h>

int main() {
    // 定义 2x2 矩阵 A 和向量 x
    double A[4] = {1.0, 2.0, 3.0, 4.0}; // 矩阵 A (按行存储)
    double x[2] = {1.0, 1.0};           // 向量 x
    double y[2] = {0.0, 0.0};           // 结果向量 y
    double alpha = 1.0;                  // 标量 alpha
    double beta = 0.0;                   // 标量 beta

    // 调用 cblas_dgemv: y = alpha * A * x + beta * y
    cblas_dgemv(CblasRowMajor, CblasNoTrans, 2, 2, alpha, A, 2, x, 1, beta, y, 1);

    // 输出结果
    printf("Matrix-Vector multiplication result:\n");
    printf("y = [%g, %g]\n", y[0], y[1]);

    return 0;
}
```

```cmake
# 确保 CMake 最低版本要求
cmake_minimum_required(VERSION 3.12)

# 项目名称，启用 C 和 Fortran
project(OpenBLASExample LANGUAGES CXX)

# 启用详细调试输出
set(CMAKE_FIND_DEBUG_MODE TRUE)
set(CMAKE_VERBOSE_MAKEFILE ON)

# 设置 MSVC 运行时库为动态链接
set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreadedDLL")

# 输出编译器信息
message(STATUS "C Compiler: ${CMAKE_C_COMPILER}")

# 查找 OpenBLAS
message(STATUS "Searching for OpenBLAS include directory...")
find_path(BLAS_INCLUDE_DIR cblas.h
  HINTS
    "c:/dev/OpenBLAS/"
  PATH_SUFFIXES
    include
    include/openblas
  DOC "Path to the OpenBLAS include directory"
)

if(BLAS_INCLUDE_DIR)
  message(STATUS "OpenBLAS include directory found at: ${BLAS_INCLUDE_DIR}")
else()
  message(FATAL_ERROR "OpenBLAS include directory not found! Please install OpenBLAS or specify the include path.")
endif()

message(STATUS "Searching for OpenBLAS library...")
set(BLA_VENDOR OpenBLAS)
find_library(BLAS_LIBRARY
  NAMES openblas
  HINTS
    "c:/dev/OpenBLAS/"
  PATH_SUFFIXES
    lib
  DOC "Path to the OpenBLAS library"
)

if(BLAS_LIBRARY)
  message(STATUS "OpenBLAS library found at: ${BLAS_LIBRARY}")
else()
  message(FATAL_ERROR "OpenBLAS library not found! Please install OpenBLAS or specify BLAS_LIBRARY.")
endif()

# 关闭调试模式
set(CMAKE_FIND_DEBUG_MODE FALSE)

# 添加可执行文件
add_executable(openblas_example main.cpp)

# 包含头文件目录并链接库
include_directories(${BLAS_INCLUDE_DIR})
target_link_libraries(openblas_example PRIVATE ${BLAS_LIBRARY} msvcrt)
```

cmake ..
```powershell
PS D:\work\OpenBLAS_work\simple\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- C Compiler:
-- Searching for OpenBLAS include directory...
CMake Debug Log at CMakeLists.txt:19 (find_path):
  find_path called with the following settings:

    VAR: BLAS_INCLUDE_DIR
    NAMES: "cblas.h"
    Documentation: Path to the OpenBLAS include directory
    Framework
      Only Search Frameworks: 0
      Search Frameworks Last: 0
      Search Frameworks First: 0
    AppBundle
      Only Search AppBundle: 0
      Search AppBundle Last: 0
      Search AppBundle First: 0
    CMAKE_FIND_USE_CMAKE_PATH: 1
    CMAKE_FIND_USE_CMAKE_ENVIRONMENT_PATH: 1
    CMAKE_FIND_USE_SYSTEM_ENVIRONMENT_PATH: 1
    CMAKE_FIND_USE_CMAKE_SYSTEM_PATH: 1
    CMAKE_FIND_USE_INSTALL_PREFIX: 1

  find_path considered the following locations:

    c:/dev/OpenBLAS/include/cblas.h

  The item was found at

    c:/dev/OpenBLAS/include/openblas/cblas.h



-- OpenBLAS include directory found at: c:/dev/OpenBLAS/include/openblas
-- Searching for OpenBLAS library...
CMake Debug Log at CMakeLists.txt:36 (find_library):
  find_library called with the following settings:

    VAR: BLAS_LIBRARY
    NAMES: "openblas"
    Documentation: Path to the OpenBLAS library
    Framework
      Only Search Frameworks: 0
      Search Frameworks Last: 0
      Search Frameworks First: 0
    AppBundle
      Only Search AppBundle: 0
      Search AppBundle Last: 0
      Search AppBundle First: 0
    CMAKE_FIND_USE_CMAKE_PATH: 1
    CMAKE_FIND_USE_CMAKE_ENVIRONMENT_PATH: 1
    CMAKE_FIND_USE_SYSTEM_ENVIRONMENT_PATH: 1
    CMAKE_FIND_USE_CMAKE_SYSTEM_PATH: 1
    CMAKE_FIND_USE_INSTALL_PREFIX: 1

  find_library considered the following locations:

  The item was found at

    C:/dev/OpenBLAS/lib/openblas.lib



-- OpenBLAS library found at: C:/dev/OpenBLAS/lib/openblas.lib
-- Configuring done (3.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/OpenBLAS_work/simple/01/build
PS D:\work\OpenBLAS_work\simple\01\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  Building Custom Rule D:/work/OpenBLAS_work/simple/01/CMakeLists.txt
  用于 x64 的 Microsoft (R) C/C++ 优化编译器 19.43.34810 版
  版权所有(C) Microsoft Corporation。保留所有权利。
  cl /c /Ic:\dev\OpenBLAS\include\openblas /I"C:\dev\vcpkg\installed\x64-windows\include" /Zi /W3 /WX- /diagnostics:col
  umn /Od /Ob0 /D _MBCS /D WIN32 /D _WINDOWS /D "CMAKE_INTDIR=\"Debug\"" /EHsc /RTC1 /MDd /GS /Zc:wchar_t /Zc:forScope
  /Zc:inline /GR /Fo"openblas_example.dir\Debug\\" /Fd"openblas_example.dir\Debug\vc143.pdb" /external:W3 /Gd /TP /erro
  rReport:queue D:\work\OpenBLAS_work\simple\01\main.cpp
  main.cpp
D:\work\OpenBLAS_work\simple\01\main.cpp(1,1): warning C4819: 该文件包含不能在当前代码页(936)中表示的字符。请将该文件保 存为 Unicode 格式以防止数据丢失 [D:\w
ork\OpenBLAS_work\simple\01\build\openblas_example.vcxproj]
LINK : warning LNK4098: 默认库“MSVCRTD”与其他库的使用冲突；请使用 /NODEFAULTLIB:library [D:\work\OpenBLAS_work\simple\01\build\openblas
_example.vcxproj]
  openblas_example.vcxproj -> D:\work\OpenBLAS_work\simple\01\build\Debug\openblas_example.exe
  Building Custom Rule D:/work/OpenBLAS_work/simple/01/CMakeLists.txt
PS D:\work\OpenBLAS_work\simple\01\build> .\Debug\openblas_example.exe
Matrix-Vector multiplication result:
y = [3, 7]
```


```
PS D:\work\OpenBLAS_work\simple\01a\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- C Compiler:
-- Searching for OpenBLAS include directory...
CMake Debug Log at CMakeLists.txt:28 (find_package):
  find_package considered the following paths for FindOpenBLAS.cmake:

    C:/Program Files/CMake/share/cmake-4.0/Modules/FindOpenBLAS.cmake

  The file was not found.

  The internally managed CMAKE_FIND_PACKAGE_REDIRECTS_DIR.

    D:/work/OpenBLAS_work/simple/01a/build/CMakeFiles/pkgRedirects

  <PackageName>_ROOT CMake variable [CMAKE_FIND_USE_PACKAGE_ROOT_PATH].

    none

  CMAKE_PREFIX_PATH variable [CMAKE_FIND_USE_CMAKE_PATH].

    none

  CMAKE_FRAMEWORK_PATH and CMAKE_APPBUNDLE_PATH variables
  [CMAKE_FIND_USE_CMAKE_PATH].

    none

  Env variable OpenBLAS_DIR [CMAKE_FIND_USE_CMAKE_ENVIRONMENT_PATH].

    C:/dev/OpenBLAS/lib/cmake/OpenBLAS

  CMAKE_PREFIX_PATH env variable [CMAKE_FIND_USE_CMAKE_ENVIRONMENT_PATH].

  CMAKE_FRAMEWORK_PATH and CMAKE_APPBUNDLE_PATH env variables
  [CMAKE_FIND_USE_CMAKE_ENVIRONMENT_PATH].

  Paths specified by the find_package HINTS option.

    none

  Standard system environment variables
  [CMAKE_FIND_USE_SYSTEM_ENVIRONMENT_PATH].

    C:/Program Files/PowerShell/7
    C:/dev/VulkanSDK/1.4.313.0/Bin
    C:/Program Files/Microsoft MPI/Bin
    C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v12.5
    C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v12.5/libnvvp
    C:/dev/ffmpeg
    C:/dev/ActiveTcl
    D:/software/Tecplot/Tecplot 360 EX 2016 R2
    C:/Program Files/Common Files/Oracle/Java/javapath
    C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v12.2
    C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v12.2/libnvvp
    C:/Program Files (x86)/VMware/VMware Workstation
    C:/Windows/System32/wbem
    C:/Windows/System32/WindowsPowerShell/v1.0
    C:/Windows/System32/OpenSSH
    C:/Program Files/dotnet
    C:/Program Files (x86)/NVIDIA Corporation/PhysX/Common
    C:/Windows/System32
    C:/Windows
    D:/software/Matlab/runtime/win64
    D:/software/Matlab
    D:/software/Matlab/polyspace
    C:/dev/debug/jsoncpp
    C:/Program Files/CodeBlocks/MinGW
    C:/Program Files/doxygen
    C:/ProgramData/chocolatey
    C:/Program Files/gs/gs10.03.0
    C:/Program Files/Graphviz
    C:/dev/VTK
    C:/dev/glew
    C:/dev/QtNodesLibrary
    C:/Program Files/nodejs
    C:/Program Files (x86)/Windows Kits/10/Windows Performance Toolkit
    C:/Program Files/NVIDIA Corporation/Nsight Compute 2024.2.1
    C:/Program Files/NVIDIA Corporation/NVIDIA app/NvDLISR
    C:/Users/eric/.elan
    C:/Program Files/Git/cmd
    C:/Program Files/CMake
    C:/dev/openvr/bin/win64
    C:/dev/VTK_debug
    C:/dev/HDF_Group/HDF5/1.14.6
    C:/dev/Imath
    C:/dev/OCCT/win64/vc14
    C:/dev/icu/bin64
    C:/dev/boost_1_88_0/stage/lib
    C:/Users/eric/AppData/Local/Programs/Python/Python313/Scripts
    C:/Users/eric/AppData/Local/Programs/Python/Python313
    C:/Users/eric/AppData/Roaming/Python/Python313/Scripts
    C:/Users/eric/AppData/Local/ActiveState/StateTool/release
    C:/Users/eric/AppData/Local/ActiveState/cache
    D:/software/texlive/2022/bin/win32
    C:/Users/eric/AppData/Local/Microsoft/WindowsApps
    C:/Users/eric/AppData/Local/GitHubDesktop
    C:/Users/eric/AppData/Local/Programs/MiKTeX/miktex/bin/x64
    C:/dev/LLVM
    C:/dev/win_flex_bison3
    C:/Users/eric/AppData/Local/Programs/Microsoft VS Code
    C:/dev/freeglut
    C:/dev/SDL3
    C:/dev/GLFW
    C:/Program Files (x86)/HTML Help Workshop
    C:/Users/eric/AppData/Roaming/npm
    C:/Users/eric/.dotnet/tools
    C:/Users/eric/AppData/Local/Programs/Julia-1.11.4
    C:/msys64/mingw64

  CMake User Package Registry [CMAKE_FIND_USE_PACKAGE_REGISTRY].

    none

  CMake variables defined in the Platform file
  [CMAKE_FIND_USE_CMAKE_SYSTEM_PATH].

    C:/Program Files
    C:/Program Files (x86)
    C:/Program Files (x86)/OpenBLASExample

  CMake System Package Registry
  [CMAKE_FIND_PACKAGE_NO_SYSTEM_PACKAGE_REGISTRY].

    none

  Paths specified by the find_package PATHS option.

    none

  find_package considered the following locations for OpenBLAS's Config
  module:

    D:/work/OpenBLAS_work/simple/01a/build/CMakeFiles/pkgRedirects/OpenBLASConfig.cmake
    D:/work/OpenBLAS_work/simple/01a/build/CMakeFiles/pkgRedirects/openblas-config.cmake
    C:/dev/OpenBLAS/lib/cmake/OpenBLAS/OpenBLASConfig.cmake

  The file was found at

    C:/dev/OpenBLAS/lib/cmake/OpenBLAS/OpenBLASConfig.cmake



-- OpenBLAS_FOUND=1
CMake Error at CMakeLists.txt:35 (message):
  OpenBLAS include directory not found! Please install OpenBLAS or specify
  the include path.


-- Configuring incomplete, errors occurred!
```


```cmake
# 确保 CMake 最低版本要求
cmake_minimum_required(VERSION 3.12)

# 项目名称，启用 C 和 Fortran
project(OpenBLASExample LANGUAGES CXX)

# 启用详细调试输出
set(CMAKE_FIND_DEBUG_MODE TRUE)
set(CMAKE_VERBOSE_MAKEFILE ON)

# 设置 MSVC 运行时库为动态链接
set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreadedDLL")

# 输出编译器信息
message(STATUS "C Compiler: ${CMAKE_C_COMPILER}")

# 查找 OpenBLAS
message(STATUS "Searching for OpenBLAS include directory...")

find_package(OpenBLAS)

message(STATUS "OpenBLAS_FOUND=${OpenBLAS_FOUND}")
message(STATUS "OpenBLAS_VERSION=${OpenBLAS_VERSION}")
message(STATUS "OpenBLAS_INCLUDE_DIR=${OpenBLAS_INCLUDE_DIR}")
message(STATUS "OpenBLAS_INCLUDE_DIRS=${OpenBLAS_INCLUDE_DIRS}")
message(STATUS "OpenBLAS_LIBRARY=${OpenBLAS_LIBRARY}")
message(STATUS "OpenBLAS_LIBRARIES=${OpenBLAS_LIBRARIES}")

#   OpenBLAS_FOUND - true if OpenBLAS and all required components found on the system
#   OpenBLAS_VERSION - OpenBLAS version in format Major.Minor.Release
#   OpenBLAS_INCLUDE_DIRS - Directory where OpenBLAS header is located.
#   OpenBLAS_INCLUDE_DIR - same as DIRS
#   OpenBLAS_LIBRARIES - OpenBLAS library to link against.
#   OpenBLAS_LIBRARY - same as LIBRARIES

# 关闭调试模式
set(CMAKE_FIND_DEBUG_MODE FALSE)

# 添加可执行文件
add_executable(openblas_example main.cpp)

# 包含头文件目录并链接库
include_directories(${OpenBLAS_INCLUDE_DIRS})
target_link_libraries(openblas_example PRIVATE ${OpenBLAS_LIBRARY} msvcrt)
```

```
my_import_targets=OpenBLAS::OpenBLAS
```

```cmake
# 确保 CMake 最低版本要求
cmake_minimum_required(VERSION 3.12)

# 项目名称，启用 C 和 Fortran
project(OpenBLASExample LANGUAGES CXX)

# 输出编译器信息
message(STATUS "C Compiler: ${CMAKE_C_COMPILER}")

find_package(OpenBLAS)

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )

get_target_property(LOCATION OpenBLAS::OpenBLAS LOCATION)
message("LOCATION: ${LOCATION}")

get_target_property(IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE OpenBLAS::OpenBLAS IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE)
message("IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE: ${IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE}")

get_target_property(IMPORTED_LOCATION_RELEASE OpenBLAS::OpenBLAS IMPORTED_LOCATION_RELEASE)
message("IMPORTED_LOCATION_RELEASE: ${IMPORTED_LOCATION_RELEASE}")

get_target_property(IMPORTED_LOCATION OpenBLAS::OpenBLAS IMPORTED_LOCATION)
message("IMPORTED_LOCATION: ${IMPORTED_LOCATION}")

get_target_property(INCLUDE_DIRS OpenBLAS::OpenBLAS INTERFACE_INCLUDE_DIRECTORIES)
message("INTERFACE_INCLUDE_DIRECTORIES: ${INCLUDE_DIRS}")

get_target_property(LINK_LIBS OpenBLAS::OpenBLAS INTERFACE_LINK_LIBRARIES)
message("INTERFACE_LINK_LIBRARIES: ${LINK_LIBS}")

get_target_property(COMPILE_DEFS OpenBLAS::OpenBLAS INTERFACE_COMPILE_DEFINITIONS)
message("INTERFACE_COMPILE_DEFINITIONS: ${COMPILE_DEFS}")

get_target_property(COMPILE_OPTS OpenBLAS::OpenBLAS INTERFACE_COMPILE_OPTIONS)
message("INTERFACE_COMPILE_OPTIONS: ${COMPILE_OPTS}")

get_target_property(IMPORTED_LOCATION OpenBLAS::OpenBLAS IMPORTED_LOCATION)
message("IMPORTED_LOCATION: ${IMPORTED_LOCATION}")

get_target_property(IMPORTED_LINK_LIBS OpenBLAS::OpenBLAS IMPORTED_LINK_INTERFACE_LIBRARIES)
message("IMPORTED_LINK_INTERFACE_LIBRARIES: ${IMPORTED_LINK_LIBS}")

get_target_property(TARGET_TYPE OpenBLAS::OpenBLAS TYPE)
message("TYPE: ${TARGET_TYPE}")

get_target_property(SOURCE_FILES OpenBLAS::OpenBLAS SOURCES)
message("SOURCES: ${SOURCE_FILES}")

get_target_property(INCLUDE_DIRS OpenBLAS::OpenBLAS INCLUDE_DIRECTORIES)
message("INCLUDE_DIRECTORIES: ${INCLUDE_DIRS}")

get_target_property(LINK_LIBS OpenBLAS::OpenBLAS LINK_LIBRARIES)
message("LINK_LIBRARIES: ${LINK_LIBS}")

get_target_property(COMPILE_DEFS OpenBLAS::OpenBLAS COMPILE_DEFINITIONS)
message("COMPILE_DEFINITIONS: ${COMPILE_DEFS}")

get_target_property(COMPILE_OPTS OpenBLAS::OpenBLAS COMPILE_OPTIONS)
message("COMPILE_OPTIONS: ${COMPILE_OPTS}")

get_target_property(PIC OpenBLAS::OpenBLAS POSITION_INDEPENDENT_CODE)
message("POSITION_INDEPENDENT_CODE: ${PIC}")

get_target_property(OUTPUT_NAME OpenBLAS::OpenBLAS OUTPUT_NAME)
message("OUTPUT_NAME: ${OUTPUT_NAME}")

message(STATUS "OpenBLAS_FOUND=${OpenBLAS_FOUND}")


# 添加可执行文件
add_executable(openblas_example main.cpp)

# 包含头文件目录并链接库
#include_directories(${OpenBLAS_INCLUDE_DIRS})
target_link_libraries(openblas_example PRIVATE OpenBLAS::OpenBLAS msvcrt)
```

```
PS D:\work\OpenBLAS_work\simple\01c\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- C Compiler:
-- my_import_targets=OpenBLAS::OpenBLAS
LOCATION: C:/dev/OpenBLAS/lib/openblas.lib
IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE: C;Fortran
IMPORTED_LOCATION_RELEASE: C:/dev/OpenBLAS/lib/openblas.lib
IMPORTED_LOCATION: IMPORTED_LOCATION-NOTFOUND
INTERFACE_INCLUDE_DIRECTORIES: C:/dev/OpenBLAS/include/openblas
INTERFACE_LINK_LIBRARIES: LINK_LIBS-NOTFOUND
INTERFACE_COMPILE_DEFINITIONS: COMPILE_DEFS-NOTFOUND
INTERFACE_COMPILE_OPTIONS: COMPILE_OPTS-NOTFOUND
IMPORTED_LOCATION: IMPORTED_LOCATION-NOTFOUND
IMPORTED_LINK_INTERFACE_LIBRARIES: IMPORTED_LINK_LIBS-NOTFOUND
TYPE: STATIC_LIBRARY
SOURCES: SOURCE_FILES-NOTFOUND
INCLUDE_DIRECTORIES: INCLUDE_DIRS-NOTFOUND
LINK_LIBRARIES: LINK_LIBS-NOTFOUND
COMPILE_DEFINITIONS: COMPILE_DEFS-NOTFOUND
COMPILE_OPTIONS: COMPILE_OPTS-NOTFOUND
POSITION_INDEPENDENT_CODE: PIC-NOTFOUND
OUTPUT_NAME: OUTPUT_NAME-NOTFOUND
-- OpenBLAS_FOUND=1
-- Configuring done (3.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/OpenBLAS_work/simple/01c/build
PS D:\work\OpenBLAS_work\simple\01c\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  Building Custom Rule D:/work/OpenBLAS_work/simple/01c/CMakeLists.txt
  main.cpp
D:\work\OpenBLAS_work\simple\01c\main.cpp(1,1): warning C4819: 该文件包含不能在当前代码页(936)中表示的字符。请将该文件保存为 Unicode 格式以防止数据丢失 [D:\
work\OpenBLAS_work\simple\01c\build\openblas_example.vcxproj]
LINK : warning LNK4098: 默认库“MSVCRTD”与其他库的使用冲突；请使用 /NODEFAULTLIB:library [D:\work\OpenBLAS_work\simple\01c\build\openbla
s_example.vcxproj]
  openblas_example.vcxproj -> D:\work\OpenBLAS_work\simple\01c\build\Debug\openblas_example.exe
  Building Custom Rule D:/work/OpenBLAS_work/simple/01c/CMakeLists.txt
PS D:\work\OpenBLAS_work\simple\01c\build> .\Debug\openblas_example.exe
Matrix-Vector multiplication result:
y = [3, 7]
```

```
cmake -DBLA_VENDOR=OpenBLAS ..
```

## C++ fortran mixed
```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. -G "NMake Makefiles" `
  -DCMAKE_C_COMPILER=icx `
  -DCMAKE_CXX_COMPILER=icx `
  -DCMAKE_Fortran_COMPILER=ifx
```

```cmake
cmake_minimum_required(VERSION 4.0.1)

project(testprj LANGUAGES C Fortran)

# 调试输出编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_C_COMPILER_ID=${CMAKE_C_COMPILER_ID}")
message(STATUS "CMAKE_C_COMPILER_VERSION=${CMAKE_C_COMPILER_VERSION}")

message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER_ID=${CMAKE_CXX_COMPILER_ID}")
message(STATUS "CMAKE_CXX_COMPILER_VERSION=${CMAKE_CXX_COMPILER_VERSION}")

message(STATUS "CMAKE_Fortran_COMPILER=${CMAKE_Fortran_COMPILER}")
message(STATUS "CMAKE_Fortran_COMPILER_ID=${CMAKE_Fortran_COMPILER_ID}")
message(STATUS "CMAKE_Fortran_COMPILER_VERSION=${CMAKE_Fortran_COMPILER_VERSION}")

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

add_library( myshared SHARED )

target_sources( myshared
    PRIVATE
        lib/sub.c
)

target_compile_definitions( myshared 
	PRIVATE 
		MYLIB_EXPORTS
)

set_target_properties( myshared 
	PROPERTIES 
		OUTPUT_NAME "myshared" 
)

add_executable( ${PROJECT_NAME} )

target_sources( ${PROJECT_NAME}
    PRIVATE
        test/main.f90
)

target_link_libraries( ${PROJECT_NAME}
	PRIVATE 
		myshared
)

set_target_properties( ${PROJECT_NAME}  
	PROPERTIES 
		Fortran_MODULE_DIRECTORY "${CMAKE_BINARY_DIR}/modules"
)
```

```powershell
PS D:\work\OpenBLAS_work\simple\02a\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
:: initializing oneAPI environment...
   Initializing Visual Studio command-line environment...
   Visual Studio version 17.13.7 environment configured.
   "C:\Program Files\Microsoft Visual Studio\2022\Community\"
   Visual Studio command-line environment initialized for: 'x64'
:  advisor -- latest
:  compiler -- latest
:  dal -- latest
:  debugger -- latest
:  dev-utilities -- latest
:  dnnl -- latest
:  dpcpp-ct -- latest
:  dpl -- latest
:  ipp -- latest
:  ippcp -- latest
:  mkl -- latest
:  mpi -- latest
:  ocloc -- latest
:  pti -- latest
:  tbb -- latest
:  umf -- latest
:  vtune -- latest
:: oneAPI environment initialized ::
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\OpenBLAS_work\simple\02a\build> ifx --version
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

ifx: command line warning #10006: ignoring unknown option '/-version'
ifx: command line error: no files specified; for help type "ifx /help"
PS D:\work\OpenBLAS_work\simple\02a\build> icx --version
Intel(R) oneAPI DPC++/C++ Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Intel(R) oneAPI DPC++/C++ Compiler 2025.0.4 (2025.0.4.20241205)
Target: x86_64-pc-windows-msvc
Thread model: posix
InstalledDir: C:\Program Files (x86)\Intel\oneAPI\compiler\2025.0\bin\compiler
Configuration file: C:\Program Files (x86)\Intel\oneAPI\compiler\2025.0\bin\compiler\..\icx.cfg
```

```
cmake .. -G "NMake Makefiles" `
         -DCMAKE_C_COMPILER=icx `
         -DCMAKE_CXX_COMPILER=icx `
         -DCMAKE_Fortran_COMPILER=ifx
```

```
PS D:\work\OpenBLAS_work\simple\02a\build> cmake .. -G "NMake Makefiles" `
>>   -DCMAKE_C_COMPILER=icx `
>>   -DCMAKE_CXX_COMPILER=icx `
>>   -DCMAKE_Fortran_COMPILER=ifx
-- The C compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
-- The CXX compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
-- The Fortran compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/icx.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/icx.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Detecting Fortran compiler ABI info
-- Detecting Fortran compiler ABI info - done
-- Check for working Fortran compiler: C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/ifx.exe - skipped
-- CMAKE_C_COMPILER=C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/icx.exe
-- CMAKE_C_COMPILER_ID=IntelLLVM
-- CMAKE_C_COMPILER_VERSION=2025.0.4
-- CMAKE_CXX_COMPILER=C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/icx.exe
-- CMAKE_CXX_COMPILER_ID=IntelLLVM
-- CMAKE_CXX_COMPILER_VERSION=2025.0.4
-- CMAKE_Fortran_COMPILER=C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/ifx.exe
-- CMAKE_Fortran_COMPILER_ID=IntelLLVM
-- CMAKE_Fortran_COMPILER_VERSION=2025.0.4
-- Configuring done (5.7s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/OpenBLAS_work/simple/02a/build
```

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. -G "NMake Makefiles" `
         -D CMAKE_INSTALL_PREFIX="C:/dev/OpenBLAS" `
         -D CMAKE_C_COMPILER=icx `
         -D CMAKE_CXX_COMPILER=icx `
         -D CMAKE_Fortran_COMPILER=ifx
cmake --build . --parallel 4 --config Release
cmake --install . --prefix "c:/dev/OpenBLAS/"  --config Release
```

## dsymv_
```
Search results:
[10 files and 0 directories found]

- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dla_porfs_extended.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dla_syrfs_extended.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dlaiyr.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dlatrd.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dports.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysvfs.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv2.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv_rook.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\TESTING\MATGEN\dlaasy.c
```

## dsymv
```
Search results:
[19 files and 0 directories found]

- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\Makefile
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dla_porfs_extended.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dla_syrfs_extended.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dlaiyr.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dlatrd.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dports.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv2.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv_rook.c
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dla_porfs_extended.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dla_syrfs_extended.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dlaiyr.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dlatrd.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dports.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv2.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv.f
- d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\SRC\dsysv_rook.f
```

prog.f90
```fortran
program f_prog
  character(len=10) :: str
  str = "hello"
  call c_print_string(trim(str)//char(0))
end program f_prog
```
  
csub.c
```cpp
#include <stdio.h>
void c_print_string_(char *str){
    printf("%s\n", str);
}
```

```
eric@DELL MINGW64 ~/work/fortran/mixed/01
$ gfortran -c fprog.f90

eric@DELL MINGW64 ~/work/fortran/mixed/01
$ ls
README.txt  csub.c  fprog.f90  fprog.o
```

```
eric@DELL MINGW64 ~/work/fortran/mixed/01
$ objdump -t fprog.o

fprog.o:     file format pe-x86-64

SYMBOL TABLE:
[  0](sec -2)(fl 0x00)(ty    0)(scl 103) (nx 1) 0x0000000000000000 fprog.f90
File
[  2](sec  1)(fl 0x00)(ty   20)(scl   3) (nx 1) 0x0000000000000000 MAIN__
AUX tagndx 0 ttlsiz 0x0 lnnos 0 next 0
[  4](sec  1)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x00000000000000d5 main
[  5](sec  4)(fl 0x00)(ty    0)(scl   3) (nx 0) 0x0000000000000010 options.3.0
[  6](sec  1)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .text
AUX scnlen 0x11b nreloc 11 nlnno 0
[  8](sec  2)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .data
AUX scnlen 0x0 nreloc 0 nlnno 0
[ 10](sec  3)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .bss
AUX scnlen 0x0 nreloc 0 nlnno 0
[ 12](sec  4)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .rdata
AUX scnlen 0x2c nreloc 0 nlnno 0
[ 14](sec  5)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .xdata
AUX scnlen 0x18 nreloc 0 nlnno 0
[ 16](sec  6)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .pdata
AUX scnlen 0x18 nreloc 6 nlnno 0
[ 18](sec  7)(fl 0x00)(ty    0)(scl   3) (nx 1) 0x0000000000000000 .rdata$zzz
AUX scnlen 0x2b nreloc 0 nlnno 0
[ 20](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 __main
[ 21](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 _gfortran_string_trim
[ 22](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 malloc
[ 23](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 _gfortran_concat_string
[ 24](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 free
[ 25](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 c_print_string_
[ 26](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 _gfortran_set_args
[ 27](sec  0)(fl 0x00)(ty   20)(scl   2) (nx 0) 0x0000000000000000 _gfortran_set_options
```

```
eric@DELL MINGW64 ~/work/fortran/mixed/01
$ nm fprog.o
0000000000000000 b .bss
0000000000000000 d .data
0000000000000000 p .pdata
0000000000000000 r .rdata
0000000000000000 r .rdata$zzz
0000000000000000 t .text
0000000000000000 r .xdata
                 U __main
                 U _gfortran_concat_string
                 U _gfortran_set_args
                 U _gfortran_set_options
                 U _gfortran_string_trim
                 U c_print_string_
                 U free
00000000000000d5 T main
0000000000000000 t MAIN__
                 U malloc
0000000000000010 r options.3.0

eric@DELL MINGW64 ~/work/fortran/mixed/01
```

```
eric@DELL MINGW64 ~/work/fortran/mixed/01
$ gcc -c csub.c

eric@DELL MINGW64 ~/work/fortran/mixed/01
$ ls
README.txt  csub.c  csub.o  fprog.f90  fprog.o
```

```
eric@DELL MINGW64 ~/work/fortran/mixed/01
$ nm csub.o
0000000000000000 b .bss
0000000000000000 d .data
0000000000000000 p .pdata
0000000000000000 r .rdata$zzz
0000000000000000 t .text
0000000000000000 r .xdata
0000000000000000 T c_print_string_
                 U puts
```

## dsymv.f
```
d:\work\OpenBLAS_work\OpenBLAS\lapack-netlib\BLAS\SRC\dsymv.f
```


```
eric@DELL MINGW64 ~/work/fortran/simple/01
$ gfortran -c dsymv.f

eric@DELL MINGW64 ~/work/fortran/simple/01
$ ls
README.txt  dsymv.f  dsymv.o

eric@DELL MINGW64 ~/work/fortran/simple/01
$ nm dsymv.o
0000000000000000 b .bss
0000000000000000 d .data
0000000000000000 p .pdata
0000000000000000 r .rdata
0000000000000000 r .rdata$zzz
0000000000000000 t .text
0000000000000000 r .xdata
0000000000000000 T dsymv_
                 U lsame_
                 U xerbla_
```

## dsymv.f(windows11+ifx)
```
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\01> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\01


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/5/23     10:56           9730 dsymv.f
-a----         2025/5/24     21:23           5487 dsymv.obj
-a----         2025/5/24     21:23            151 README.txt
```

```
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\01> dumpbin /symbols dsymv.obj
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file dsymv.obj

File Type: COFF OBJECT

COFF SYMBOL TABLE
000 00000000 SECT1  notype       Static       | .text
    Section length 1023, #relocs    C, #linenums    0, checksum 5C7C3F1A
002 00000000 SECT2  notype       Static       | .data
    Section length    0, #relocs    0, #linenums    0, checksum        0
004 00000000 SECT3  notype       Static       | .bss
    Section length    0, #relocs    0, #linenums    0, checksum        0
006 00000000 SECT4  notype       Static       | .rdata
    Section length    8, #relocs    0, #linenums    0, checksum A2DACC80, selection    2 (pick any)
008 00000000 SECT4  notype       External     | __real@3ff0000000000000
009 00000000 SECT5  notype       Static       | .rdata
    Section length   28, #relocs    8, #linenums    0, checksum C5599FCC
00B 00000000 SECT6  notype       Static       | .xdata
    Section length   1C, #relocs    0, #linenums    0, checksum B6F83379
00D 00000000 SECT7  notype       Static       | .drectve
    Section length   B7, #relocs    0, #linenums    0, checksum 8DF7970F
00F 00000000 SECT8  notype       Static       | .pdata
    Section length    C, #relocs    3, #linenums    0, checksum 1027F97B
011 00000000 ABS    notype       Static       | @feat.00
012 00000000 SECT1  notype ()    External     | DSYMV
013 00000027 SECT5  notype       Static       | strlit.3
014 00000000 UNDEF  notype       External     | LSAME
015 00000026 SECT5  notype       Static       | strlit.2
016 00000000 UNDEF  notype       External     | _intel_fast_memset
017 00000020 SECT5  notype       Static       | strlit.1
018 00000000 UNDEF  notype       External     | XERBLA
019 00000000 UNDEF  notype       External     | _fltused

String Table Size = 0x2F bytes

  Summary

           0 .bss
           0 .data
          B7 .drectve
           C .pdata
          30 .rdata
        1023 .text
          1C .xdata
```

## dsymv.f(windows11+ifx+lowercase+underscore)

ifx -c /names:lowercase /assume:underscore dsymv.f
```
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\01b> ifx -c /names:lowercase /assume:underscore dsymv.f
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\01b> dumpbin /symbols dsymv.obj
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file dsymv.obj

File Type: COFF OBJECT

COFF SYMBOL TABLE
000 00000000 SECT1  notype       Static       | .text
    Section length 1023, #relocs    C, #linenums    0, checksum 5C7C3F1A
002 00000000 SECT2  notype       Static       | .data
    Section length    0, #relocs    0, #linenums    0, checksum        0
004 00000000 SECT3  notype       Static       | .bss
    Section length    0, #relocs    0, #linenums    0, checksum        0
006 00000000 SECT4  notype       Static       | .rdata
    Section length    8, #relocs    0, #linenums    0, checksum A2DACC80, selection    2 (pick any)
008 00000000 SECT4  notype       External     | __real@3ff0000000000000
009 00000000 SECT5  notype       Static       | .rdata
    Section length   28, #relocs    8, #linenums    0, checksum C5599FCC
00B 00000000 SECT6  notype       Static       | .xdata
    Section length   1C, #relocs    0, #linenums    0, checksum B6F83379
00D 00000000 SECT7  notype       Static       | .drectve
    Section length   B7, #relocs    0, #linenums    0, checksum 8DF7970F
00F 00000000 SECT8  notype       Static       | .pdata
    Section length    C, #relocs    3, #linenums    0, checksum 1027F97B
011 00000000 ABS    notype       Static       | @feat.00
012 00000000 SECT1  notype ()    External     | dsymv_
013 00000027 SECT5  notype       Static       | strlit.3
014 00000000 UNDEF  notype       External     | lsame_
015 00000026 SECT5  notype       Static       | strlit.2
016 00000000 UNDEF  notype       External     | _intel_fast_memset
017 00000020 SECT5  notype       Static       | strlit.1
018 00000000 UNDEF  notype       External     | xerbla_
019 00000000 UNDEF  notype       External     | _fltused

String Table Size = 0x2F bytes

  Summary

           0 .bss
           0 .data
          B7 .drectve
           C .pdata
          30 .rdata
        1023 .text
          1C .xdata
```

## dsymv.f(windows11+ifx+lowercase+underscore+CMake+CMAKE_Fortran_FLAGS)

```cmake
cmake_minimum_required(VERSION 3.20)
project(MyFortranProject LANGUAGES Fortran)

# 设置 Fortran 编译器为 ifx（确保已配置）
set(CMAKE_Fortran_COMPILER ifx)

# 设置全局 Fortran 编译器标志
set(CMAKE_Fortran_FLAGS "${CMAKE_Fortran_FLAGS} /names:lowercase /assume:underscore")

# 添加可执行目标
add_executable(my_program dsymv.f)

```

```
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\02a\build> cmake ../ -T fortran=ifx
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The Fortran compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
-- Detecting Fortran compiler ABI info
-- Detecting Fortran compiler ABI info - done
-- Determine Intel Fortran Compiler Implicit Link Path
-- Determine Intel Fortran Compiler Implicit Link Path - done
-- Check for working Fortran compiler: C:/Program Files (x86)/Intel/oneAPI/compiler/2025.0/bin/ifx.exe - skipped
-- Configuring done (20.1s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/fortran_work/ModernFortran/codes/windows/ifx/dsymv/02a/build
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\02a\build> cmake --build .

Microsoft Visual Studio 2022 版本 17.13.7.
版权所有(C) Microsoft Corp.。保留所有权利。
生成开始于 22:29...
1>------ 已启动生成: 项目: ZERO_CHECK, 配置: Debug x64 ------
1>1>Checking Build System
2>------ 已启动生成: 项目: my_program, 配置: Debug x64 ------
Compiling with Intel® Fortran Compiler 2025.0.4 [Intel(R) 64]...
dsymv.f
Compiling manifest to resources...
Microsoft (R) Windows (R) Resource Compiler Version 10.0.10011.16384
Copyright (C) Microsoft Corporation.  All rights reserved.
Linking...
Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.
/OUT:D:/work/fortran_work/ModernFortran/codes/windows/ifx/dsymv/02a/build/Debug/my_program.exe
/VERSION:0.0
/MANIFEST
/MANIFESTFILE:my_program.dir/Debug/my_program.exe.intermediate.manifest
"/MANIFESTUAC:level='asInvoker' uiAccess='false'"
/DEBUG
/PDB:D:/work/fortran_work/ModernFortran/codes/windows/ifx/dsymv/02a/build/Debug/my_program.pdb
/SUBSYSTEM:CONSOLE
/IMPLIB:D:/work/fortran_work/ModernFortran/codes/windows/ifx/dsymv/02a/build/Debug/my_program.lib
user32.lib
/machine:x64
/debug
/INCREMENTAL
my_program.dir/Debug/dsymv.obj
my_program.dir/Debug/my_program.exe.embed.manifest.res
dsymv.obj : error LNK2019: 无法解析的外部符号 lsame_，函数 lsame_.t127p.t128p.t3v.t3v 中引用了该符号
dsymv.obj : error LNK2019: 无法解析的外部符号 xerbla_，函数 xerbla_.t150p.t151p.t3v 中引用了该符号
libifcoremdd.lib(for_main.obj) : error LNK2019: 无法解析的外部符号 MAIN__，函数 main 中引用了该符号
D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\02a\build\Debug\my_program.exe : fatal error LNK1120: 3 个无 法解析的外部命令

Build log written to  "file://D:/work/fortran_work/ModernFortran/codes/windows/ifx/dsymv/02a/build/my_program.dir/Debug/BuildLog.htm"
my_program - 4 error(s), 0 warning(s)
3>------ 已启动生成: 项目: ALL_BUILD, 配置: Debug x64 ------
3>Building Custom Rule D:/work/fortran_work/ModernFortran/codes/windows/ifx/dsymv/02a/CMakeLists.txt
========== 生成: 2 成功，1 失败，0 最新，0 已跳过 ==========
========== 生成 于 22:29 完成，耗时 01.069 秒 ==========
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\dsymv\02a\build> dumpbin /symbols ./my_program.dir/Debug/dsymv.obj
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file .\my_program.dir\Debug\dsymv.obj

File Type: COFF OBJECT

COFF SYMBOL TABLE
000 00000000 SECT1  notype       Static       | .text
    Section length 131F, #relocs    E, #linenums    0, checksum 453F12C5
002 00000000 SECT2  notype       Static       | .data
    Section length    0, #relocs    0, #linenums    0, checksum        0
004 00000000 SECT3  notype       Static       | .bss
    Section length    0, #relocs    0, #linenums    0, checksum        0
006 00000000 SECT4  notype       Static       | .rdata
    Section length    8, #relocs    0, #linenums    0, checksum A2DACC80, selection    2 (pick any)
008 00000000 SECT4  notype       External     | __real@3ff0000000000000
009 00000000 SECT5  notype       Static       | .xdata
    Section length   2C, #relocs    0, #linenums    0, checksum BAEBE122
00B 00000000 SECT6  notype       Static       | .rdata
    Section length    9, #relocs    0, #linenums    0, checksum 9D2B4D2F
00D 00000000 SECT7  notype       Static       | .drectve
    Section length   BB, #relocs    0, #linenums    0, checksum FEB225B7
00F 00000000 SECT8  notype       Static       | .debug$S
    Section length  A94, #relocs   40, #linenums    0, checksum 29A5E3B9
011 00000000 SECT9  notype       Static       | .debug$T
    Section length  270, #relocs    0, #linenums    0, checksum 83E98120
013 00000000 SECTA  notype       Static       | .pdata
    Section length   3C, #relocs    F, #linenums    0, checksum CDC4102B
015 00000000 ABS    notype       Static       | @feat.00
016 00000000 SECT1  notype ()    External     | dsymv_
017 00000008 SECT6  notype       Static       | strlit.3
018 000012E0 SECT1  notype ()    Static       | lsame_.t127p.t128p.t3v.t3v
019 00000007 SECT6  notype       Static       | strlit.2
01A 000012F0 SECT1  notype ()    Static       | lsame_.t137p.t138p.t3v.t3v
01B 00000001 SECT6  notype       Static       | strlit.1
01C 00001300 SECT1  notype ()    Static       | xerbla_.t150p.t151p.t3v
01D 00000000 SECT6  notype       Static       | strlit
01E 00001310 SECT1  notype ()    Static       | lsame_.t183p.t184p.t3v.t3v
01F 00000000 UNDEF  notype       External     | lsame_
020 00000000 UNDEF  notype       External     | xerbla_
021 00000000 UNDEF  notype       External     | _fltused

String Table Size = 0x85 bytes

  Summary

           0 .bss
           0 .data
         A94 .debug$S
         270 .debug$T
          BB .drectve
          3C .pdata
          11 .rdata
        131F .text
          2C .xdata
```

Intel Fortran
```
# Intel Fortran
elseif( CMAKE_Fortran_COMPILER_ID STREQUAL "Intel" )
  if( "${CMAKE_Fortran_FLAGS}" MATCHES "[-/]fpe(-all=|)0" )
    set( FPE_EXIT TRUE )
# eric add 2025,05,24
    set(CMAKE_Fortran_FLAGS "${CMAKE_Fortran_FLAGS} /names:lowercase /assume:underscore")
# eric add 2025,05,24
  endif()
```

```
Search results:
[6 files and 0 directories found]

- d:\work\OpenBLAS_work\OpenBLAS\build\driver\level2\CMakeFiles\driver_level2.dir\CMakeFiles\dsymv_thread_L.c.obj
- d:\work\OpenBLAS_work\OpenBLAS\build\driver\level2\CMakeFiles\driver_level2.dir\CMakeFiles\dsymv_thread_U.c.obj
- d:\work\OpenBLAS_work\OpenBLAS\build\interface\CMakeFiles\interface.dir\CMakeFiles\cblas_dsymv_thread_U.c.obj
- d:\work\OpenBLAS_work\OpenBLAS\build\interface\CMakeFiles\interface.dir\CMakeFiles\dsymv.c.obj
- d:\work\OpenBLAS_work\OpenBLAS\build\kernel\CMakeFiles\kernel.dir\CMakeFiles\dsymv_L.c.obj
- d:\work\OpenBLAS_work\OpenBLAS\build\kernel\CMakeFiles\kernel.dir\CMakeFiles\dsymv_U.c.obj
```

dumpbin /symbols dsymv.c.obj
dumpbin /symbols cblas_dsymv.c.obj

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. -G "NMake Makefiles" `
         -D CMAKE_INSTALL_PREFIX="C:/dev/OpenBLAS" `
         -D CMAKE_C_COMPILER=icx `
         -D CMAKE_CXX_COMPILER=icx `
         -D CMAKE_Fortran_COMPILER=ifx
cmake --build . --parallel 4 --config Release
cmake --install . --prefix "c:/dev/OpenBLAS/"  --config Release
```


```
foreach (SUBDIR ${SUBDIRS})
  add_subdirectory(${SUBDIR})
  string(REPLACE "/" "_" subdir_obj ${SUBDIR})
  list(APPEND TARGET_OBJS "$<TARGET_OBJECTS:${subdir_obj}>")
endforeach ()
-- TARGET_OBJS=$<TARGET_OBJECTS:interface>;$<TARGET_OBJECTS:driver_level2>;$<TARGET_OBJECTS:driver_level3>;$<TARGET_OBJECTS:driver_others>;$<TARGET_OBJECTS:kernel>;$<TARGET_OBJECTS:lapack>
```

```
-- CMAKE_Fortran_FLAGS=/nologo /fpp  /fp:precise /recursive /names:lowercase /assume:nounderscore -recursive -fp-model=consistent
```

```
${NETLIB_LAPACK_DIR}
```

## Ubuntu

```
make DYNAMIC_ARCH=1 USE_OPENMP=1
make PREFIX=/usr/local/OpenBLAS install
```

```
$ make PREFIX=/usr/local/OpenBLAS install
make -f Makefile.install install
make[1]: Entering directory '/home/eric/soft/OpenBLAS-0.3.29'
Generating openblas_config.h in /usr/local/OpenBLAS/include
Generating f77blas.h in /usr/local/OpenBLAS/include
Generating cblas.h in /usr/local/OpenBLAS/include
Copying LAPACKE header files to /usr/local/OpenBLAS/include
Copying the static library to /usr/local/OpenBLAS/lib
Copying the shared library to /usr/local/OpenBLAS/lib
PKGFILE="/usr/local/OpenBLAS/lib/pkgconfig/openblas.pc"
Generating openblas.pc in /usr/local/OpenBLAS/lib/pkgconfig
Generating OpenBLASConfig.cmake in /usr/local/OpenBLAS/lib/cmake/openblas
add_library(OpenBLAS::OpenBLAS SHARED IMPORTED)
target_include_directories(OpenBLAS::OpenBLAS INTERFACE ${OpenBLAS_INCLUDE_DIRS})
set_property(TARGET OpenBLAS::OpenBLAS PROPERTY IMPORTED_LOCATION ${OpenBLAS_LIBRARIES})
set_property(TARGET OpenBLAS::OpenBLAS PROPERTY IMPORTED_IMPLIB ${_OpenBLAS_ROOT_DIR}/lib/libopenblas.lib)
Generating OpenBLASConfigVersion.cmake in /usr/local/OpenBLAS/lib/cmake/openblas
Install OK!
make[1]: Leaving directory '/home/eric/soft/OpenBLAS-0.3.29'
```


```
eric@DELL MINGW64 ~
$ cd /usr/local/OpenBLAS/lib

eric@DELL MINGW64 /usr/local/OpenBLAS/lib
$ ls
cmake  libopenblas.a  libopenblas.dll.a  libopenblasp-r0.3.29.a  pkgconfig
```

```
gendef libopenblas.a
```

```
make DYNAMIC_ARCH=1 \
     USE_OPENMP=1 \
     FC=gfortran \
     CC=gcc \
     COMMON_OPT="-O3 -g -fPIC" \
     FCOMMON_OPT="-O3 -g -fPIC -frecursive"

```

```
make FC=gfortran \
     CC=gcc \
     COMMON_OPT="-O3 -g -fPIC" \
     FCOMMON_OPT="-O3 -g -fPIC -frecursive"

```

```
eric@DELL MINGW64 ~/soft/OpenBLAS-0.3.29
$ find /mingw64/bin/ -name "libgomp*.dll"
/mingw64/bin/libgomp-1.dll
```

```
 OpenBLAS build complete. (BLAS CBLAS LAPACK LAPACKE)

  OS               ... WINNT
  Architecture     ... x86_64
  BINARY           ... 64bit
  C compiler       ... GCC  (cmd & version : gcc.exe (Rev4, Built by MSYS2 project) 15.1.0)
  Fortran compiler ... GFORTRAN  (cmd & version : GNU Fortran (Rev4, Built by MSYS2 project) 15.1.0)
  Library Name     ... libopenblas_haswellp-r0.3.29.a (Multi-threading; Max num-threads is 16)

To install the library, you can run "make PREFIX=/path/to/your/installation install".

Note that any flags passed to make during build should also be passed to make install
to circumvent any install errors.
```


```
make PREFIX=/usr/local/OpenBLAS install
```

```
eric@DELL MINGW64 ~/soft/OpenBLAS-0.3.29
$ make PREFIX=/usr/local/OpenBLAS install
make -f Makefile.install install
make[1]: Entering directory '/home/eric/soft/OpenBLAS-0.3.29'
Generating openblas_config.h in /usr/local/OpenBLAS/include
Generating f77blas.h in /usr/local/OpenBLAS/include
Generating cblas.h in /usr/local/OpenBLAS/include
Copying LAPACKE header files to /usr/local/OpenBLAS/include
Copying the static library to /usr/local/OpenBLAS/lib
Copying the shared library to /usr/local/OpenBLAS/lib
PKGFILE="/usr/local/OpenBLAS/lib/pkgconfig/openblas.pc"
Generating openblas.pc in /usr/local/OpenBLAS/lib/pkgconfig
Generating OpenBLASConfig.cmake in /usr/local/OpenBLAS/lib/cmake/openblas
add_library(OpenBLAS::OpenBLAS SHARED IMPORTED)
target_include_directories(OpenBLAS::OpenBLAS INTERFACE ${OpenBLAS_INCLUDE_DIRS})
set_property(TARGET OpenBLAS::OpenBLAS PROPERTY IMPORTED_LOCATION ${OpenBLAS_LIBRARIE
set_property(TARGET OpenBLAS::OpenBLAS PROPERTY IMPORTED_IMPLIB ${_OpenBLAS_ROOT_DIR}s.lib)
Generating OpenBLASConfigVersion.cmake in /usr/local/OpenBLAS/lib/cmake/openblas
Install OK!
make[1]: Leaving directory '/home/eric/soft/OpenBLAS-0.3.29'

eric@DELL MINGW64 ~/soft/OpenBLAS-0.3.29

```

```
libopenblas.dll.a
gendef libopenblas.a
gendef libopenblas.dll.a
```

```
eric@DELL MINGW64 /usr/local/OpenBLAS/lib
$ gendef libopenblas.a
*** [libopenblas.a] not a PE(+) file

eric@DELL MINGW64 /usr/local/OpenBLAS/lib
$ gendef libopenblas.dll.a
*** [libopenblas.dll.a] not a PE(+) file
```

## gendef libopenblas.dll
```
eric@DELL MINGW64 /usr/local/OpenBLAS/bin
$ ls
libopenblas.dll

eric@DELL MINGW64 /usr/local/OpenBLAS/bin
$ gendef libopenblas.dll
 * [libopenblas.dll] Found PE+ image

eric@DELL MINGW64 /usr/local/OpenBLAS/bin
$ ls
libopenblas.def  libopenblas.dll

```

```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
lib /machine:x64 /def:libopenblas.def /out:libopenblas.lib
```

## vcvarsall.bat
```
PS C:\msys64\usr\local\OpenBLAS\bin> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\msys64\usr\local\OpenBLAS\bin> ls


    Directory: C:\msys64\usr\local\OpenBLAS\bin


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/5/27      0:30         112590 libopenblas.def
-a----         2025/5/26     21:51       56428032 libopenblas.dll
```

## lib /machine:x64 /def:libopenblas.def /out:libopenblas.lib
```
PS C:\msys64\usr\local\OpenBLAS\bin> lib /machine:x64 /def:libopenblas.def /out:libopenblas.lib
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library libopenblas.lib and object libopenblas.exp
PS C:\msys64\usr\local\OpenBLAS\bin> ls


    Directory: C:\msys64\usr\local\OpenBLAS\bin


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/5/27      0:30         112590 libopenblas.def
-a----         2025/5/26     21:51       56428032 libopenblas.dll
-a----         2025/5/27      0:37         971343 libopenblas.exp
-a----         2025/5/27      0:37        1704662 libopenblas.lib
```
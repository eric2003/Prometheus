# Boost C++ Libraries

## Boost C++ Libraries

-  [Welcome to Boost.org!](https://www.boost.org/).
-  [Boost download](https://www.boost.org/users/download/).
-  [Boost-github](https://github.com/boostorg/boost/).


## Install

-  [How to Install C++ Boost Libraries on Windows?](https://www.geeksforgeeks.org/how-to-install-c-boost-libraries-on-windows/).
-  [027 - (SETUP) Install Boost C++ Library on Windows (2020, Aug. 22)](https://www.youtube.com/watch?v=5afpq2TkOHc/).
-  [B2 User Manual](https://www.boost.org/doc/libs/1_85_0/tools/build/doc/html/index.html).
-  [B2 Tutorial](https://boostorg.github.io/build/tutorial.html).
-  [01 - boost 库的安装和编译](https://keepfightinghxz.xyz/tools/c-%E5%BA%93/boost%E5%BA%93/01%20boost%E5%BA%93%E7%9A%84%E5%AE%89%E8%A3%85%E5%92%8C%E7%BC%96%E8%AF%91/).



install
```
C:\dev\boost_1_85_0\tools\build\src\engine>dir *.exe
 驱动器 C 中的卷没有标签。
 卷的序列号是 6E19-00BE

 C:\dev\boost_1_85_0\tools\build\src\engine 的目录

2024/04/16  11:18           506,368 b2.exe
               1 个文件        506,368 字节
               0 个目录 101,801,897,984 可用字节

Generating Boost.Build configuration in project-config.jam for msvc...

Bootstrapping is done. To build, run:

    .\b2

To adjust configuration, edit 'project-config.jam'.
Further information:

    - Command line help:
    .\b2 --help

    - Getting started guide:
    http://boost.org/more/getting_started/windows.html

    - Boost.Build documentation:
    http://www.boost.org/build/
```

Info
```
...updated 3214 targets...


The Boost C++ Libraries were successfully built!

The following directory should be added to compiler include paths:

    C:\dev\boost_1_85_0

The following directory should be added to linker library paths:

    C:\dev\boost_1_85_0\stage\lib
```

.\b2 --help
```
PS C:\dev\boost_1_85_0> .\b2 --help
B2 5.1.0 (OS=NT, jobs=16)

Project-specific help:

   Project has jamfile at Jamroot

Usage:

  b2 [options] [properties] [install|stage]

  Builds and installs Boost.

Targets and Related Options:

  install                 Install headers and compiled library files to the
  =======                 configured locations (below).

  --prefix=<PREFIX>       Install architecture independent files here.
                          Default: C:\Boost on Windows
                          Default: /usr/local on Unix, Linux, etc.

  --exec-prefix=<EPREFIX> Install architecture dependent files here.
                          Default: <PREFIX>

  --libdir=<LIBDIR>       Install library files here.
                          Default: <EPREFIX>/lib

  --includedir=<HDRDIR>   Install header files here.
                          Default: <PREFIX>/include

  --cmakedir=<CMAKEDIR>   Install CMake configuration files here.
                          Default: <LIBDIR>/cmake

  --no-cmake-config       Do not install CMake configuration files.

  stage                   Build and install only compiled library files to the
  =====                   stage directory.

  --stagedir=<STAGEDIR>   Install library files here
                          Default: ./stage

Other Options:

  --build-type=<type>     Build the specified pre-defined set of variations of
                          the libraries. Note, that which variants get built
                          depends on what each library supports.

                              -- minimal -- (default) Builds a minimal set of
                              variants. On Windows, these are static
                              multithreaded libraries in debug and release
                              modes, using shared runtime. On Linux, these are
                              static and shared multithreaded libraries in
                              release mode.

                              -- complete -- Build all possible variations.

  --build-dir=DIR         Build in this location instead of building within
                          the distribution tree. Recommended!

  --show-libraries        Display the list of Boost libraries that require
                          build and installation steps, and then exit.

  --layout=<layout>       Determine whether to choose library names and header
                          locations such that multiple versions of Boost or
                          multiple compilers can be used on the same system.

                              -- versioned -- Names of boost binaries include
                              the Boost version number, name and version of
                              the compiler and encoded build properties. Boost
                              headers are installed in a subdirectory of
                              <HDRDIR> whose name contains the Boost version
                              number.

                              -- tagged -- Names of boost binaries include the
                              encoded build properties such as variant and
                              threading, but do not including compiler name
                              and version, or Boost version. This option is
                              useful if you build several variants of Boost,
                              using the same compiler.

                              -- system -- Binaries names do not include the
                              Boost version number or the name and version
                              number of the compiler. Boost headers are
                              installed directly into <HDRDIR>. This option is
                              intended for system integrators building
                              distribution packages.

                          The default value is 'versioned' on Windows, and
                          'system' on Unix.

  --buildid=ID            Add the specified ID to the name of built libraries.
                          The default is to not add anything.

  --python-buildid=ID     Add the specified ID to the name of built libraries
                          that depend on Python. The default is to not add
                          anything. This ID is added in addition to --buildid.

  --help                  This message.

  --with-<library>        Build and install the specified <library>. If this
                          option is used, only libraries specified using this
                          option will be built.

  --without-<library>     Do not build, stage, or install the specified
                          <library>. By default, all libraries are built.

Properties:

  toolset=toolset         Indicate the toolset to build with.

  variant=debug|release   Select the build variant

  link=static|shared      Whether to build static or shared libraries

  threading=single|multi  Whether to build single or multithreaded binaries

  runtime-link=static|shared
                          Whether to link to static or shared C and C++
                          runtime.


General command line usage:

    b2 [options] [properties] [targets]

  Options, properties and targets can be specified in any order.

Important Options:

  * --clean Remove targets instead of building
  * -a Rebuild everything
  * -n Don't execute the commands, only print them
  * -d+2 Show commands as they are executed
  * -d0 Suppress all informational messages
  * -q Stop at first error
  * --reconfigure Rerun all configuration checks
  * --durations[=N] Report top N targets by execution time
  * --debug-configuration Diagnose configuration
  * --debug-building Report which targets are built with what properties
  * --debug-generator Diagnose generator search/execution

Further Help:

   The following options can be used to obtain additional documentation.

  * --help-options Print more obscure command line options.
  * --help-internal B2 implementation details.
  * --help-doc-options Implementation details doc formatting.

...found 1 target...
```


## install Version 1.88.0 (April 10th, 2025 20:39 GMT)

```
"C:\Program Files\Microsoft Visual Studio\2022\Community\"
%comspec% /k "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat"
cmd /k "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat"
cmd /k '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" && powershell'
```

### cd c:\dev\boost_1_88_0\
```
PS C:\Users\eric> cd c:\dev\boost_1_88_0\
PS C:\dev\boost_1_88_0>
```

### cmd /k 
```
PS C:\dev\boost_1_88_0> cmd /k '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.6
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\dev\boost_1_88_0>
```

### 运行 Bootstrap 脚本：.\bootstrap.bat
在 Boost 根目录下运行以下命令，生成编译工具：

```
PS C:\dev\boost_1_88_0> .\bootstrap.bat
Building Boost.Build engine
LOCALAPPDATA=C:\Users\eric\AppData\Local
Found with vswhere C:\Program Files\Microsoft Visual Studio\2022\Community
Found with vswhere C:\Program Files\Microsoft Visual Studio\2022\Community
###
### Using 'vc143' toolset.
###

C:\dev\boost_1_88_0\tools\build\src\engine>"cl" /nologo /MP /MT /TP /Feb2 /wd4996 /wd4675 /O2 /GL /EHsc /Zc:wchar_t /Gw   -DNDEBUG  bindjam.cpp builtins.cpp class.cpp command.cpp compile.cpp constants.cpp cwd.cpp debug.cpp debugger.cpp events.cpp execcmd.cpp execnt.cpp execunix.cpp filent.cpp filesys.cpp fileunix.cpp frames.cpp function.cpp glob.cpp hash.cpp hcache.cpp hdrmacro.cpp headers.cpp jam.cpp jamgram.cpp lists.cpp make.cpp make1.cpp md5.cpp mem.cpp modules.cpp native.cpp option.cpp output.cpp parse.cpp pathnt.cpp pathsys.cpp pathunix.cpp regexp.cpp rules.cpp scan.cpp search.cpp jam_strings.cpp startup.cpp tasks.cpp timestamp.cpp value.cpp variable.cpp w32_getreg.cpp mod_command_db.cpp mod_db.cpp mod_jam_builtin.cpp mod_jam_class.cpp mod_jam_errors.cpp mod_jam_modules.cpp mod_order.cpp mod_path.cpp mod_property_set.cpp mod_regex.cpp mod_sequence.cpp mod_set.cpp mod_string.cpp mod_summary.cpp mod_sysinfo.cpp mod_version.cpp /link kernel32.lib advapi32.lib user32.lib /MANIFEST:EMBED /MANIFESTINPUT:b2.exe.manifest
bindjam.cpp
builtins.cpp
class.cpp
command.cpp
compile.cpp
constants.cpp
cwd.cpp
debug.cpp
debugger.cpp
events.cpp
execcmd.cpp
execnt.cpp
execunix.cpp
filent.cpp
filesys.cpp
fileunix.cpp
frames.cpp
function.cpp
glob.cpp
hash.cpp
hcache.cpp
hdrmacro.cpp
headers.cpp
jam.cpp
jamgram.cpp
lists.cpp
make.cpp
make1.cpp
md5.cpp
mem.cpp
modules.cpp
native.cpp
option.cpp
output.cpp
parse.cpp
pathnt.cpp
pathsys.cpp
pathunix.cpp
regexp.cpp
rules.cpp
scan.cpp
search.cpp
jam_strings.cpp
startup.cpp
tasks.cpp
timestamp.cpp
value.cpp
variable.cpp
w32_getreg.cpp
mod_command_db.cpp
mod_db.cpp
mod_jam_builtin.cpp
mod_jam_class.cpp
mod_jam_errors.cpp
mod_jam_modules.cpp
mod_order.cpp
mod_path.cpp
mod_property_set.cpp
mod_regex.cpp
mod_sequence.cpp
mod_set.cpp
mod_string.cpp
mod_summary.cpp
mod_sysinfo.cpp
mod_version.cpp
Generating code
Finished generating code

C:\dev\boost_1_88_0\tools\build\src\engine>dir *.exe
 Volume in drive C has no label.
 Volume Serial Number is 6E19-00BE

 Directory of C:\dev\boost_1_88_0\tools\build\src\engine

2025/05/12  20:58           774,656 b2.exe
               1 File(s)        774,656 bytes
               0 Dir(s)  20,499,988,480 bytes free

Generating Boost.Build configuration in project-config.jam for msvc...

Bootstrapping is done. To build, run:

    .\b2

To adjust configuration, edit 'project-config.jam'.
Further information:

    - Command line help:
    .\b2 --help

    - Getting started guide:
    http://boost.org/more/getting_started/windows.html

    - Boost.Build documentation:
    http://www.boost.org/build/

PS C:\dev\boost_1_88_0>
```

```
PS C:\dev\boost_1_88_0> .\b2 --help
B2 5.2.1 (OS=NT, jobs=16)

Project-specific help:

   Project has jamfile at Jamroot

Usage:

  b2 [options] [properties] [install|stage]

  Builds and installs Boost.

Targets and Related Options:

  install                 Install headers and compiled library files to the
  =======                 configured locations (below).

  --prefix=<PREFIX>       Install architecture independent files here.
                          Default: C:\Boost on Windows
                          Default: /usr/local on Unix, Linux, etc.

  --exec-prefix=<EPREFIX> Install architecture dependent files here.
                          Default: <PREFIX>

  --libdir=<LIBDIR>       Install library files here.
                          Default: <EPREFIX>/lib

  --includedir=<HDRDIR>   Install header files here.
                          Default: <PREFIX>/include

  --cmakedir=<CMAKEDIR>   Install CMake configuration files here.
                          Default: <LIBDIR>/cmake

  --no-cmake-config       Do not install CMake configuration files.

  stage                   Build and install only compiled library files to the
  =====                   stage directory.

  --stagedir=<STAGEDIR>   Install library files here
                          Default: ./stage

Other Options:

  --build-type=<type>     Build the specified pre-defined set of variations of
                          the libraries. Note, that which variants get built
                          depends on what each library supports.

                              -- minimal -- (default) Builds a minimal set of
                              variants. On Windows, these are static
                              multithreaded libraries in debug and release
                              modes, using shared runtime. On Linux, these are
                              static and shared multithreaded libraries in
                              release mode.

                              -- complete -- Build all possible variations.

  --build-dir=DIR         Build in this location instead of building within
                          the distribution tree. Recommended!

  --show-libraries        Display the list of Boost libraries that require
                          build and installation steps, and then exit.

  --layout=<layout>       Determine whether to choose library names and header
                          locations such that multiple versions of Boost or
                          multiple compilers can be used on the same system.

                              -- versioned -- Names of boost binaries include
                              the Boost version number, name and version of
                              the compiler and encoded build properties. Boost
                              headers are installed in a subdirectory of
                              <HDRDIR> whose name contains the Boost version
                              number.

                              -- tagged -- Names of boost binaries include the
                              encoded build properties such as variant and
                              threading, but do not including compiler name
                              and version, or Boost version. This option is
                              useful if you build several variants of Boost,
                              using the same compiler.

                              -- system -- Binaries names do not include the
                              Boost version number or the name and version
                              number of the compiler. Boost headers are
                              installed directly into <HDRDIR>. This option is
                              intended for system integrators building
                              distribution packages.

                          The default value is 'versioned' on Windows, and
                          'system' on Unix.

  --buildid=ID            Add the specified ID to the name of built libraries.
                          The default is to not add anything.

  --python-buildid=ID     Add the specified ID to the name of built libraries
                          that depend on Python. The default is to not add
                          anything. This ID is added in addition to --buildid.

  --help                  This message.

  --with-<library>        Build and install the specified <library>. If this
                          option is used, only libraries specified using this
                          option will be built.

  --without-<library>     Do not build, stage, or install the specified
                          <library>. By default, all libraries are built.

Properties:

  toolset=toolset         Indicate the toolset to build with.

  variant=debug|release   Select the build variant

  link=static|shared      Whether to build static or shared libraries

  threading=single|multi  Whether to build single or multithreaded binaries

  runtime-link=static|shared
                          Whether to link to static or shared C and C++
                          runtime.


General command line usage:

    b2 [options] [properties] [targets]

  Options, properties and targets can be specified in any order.

Important Options:

  * --clean Remove targets instead of building
  * -a Rebuild everything
  * -n Don't execute the commands, only print them
  * -d+2 Show commands as they are executed
  * -d0 Suppress all informational messages
  * -q Stop at first error
  * --reconfigure Rerun all configuration checks
  * --durations[=N] Report top N targets by execution time
  * --debug-configuration Diagnose configuration
  * --debug-building Report which targets are built with what properties
  * --debug-generator Diagnose generator search/execution

Further Help:

   The following options can be used to obtain additional documentation.

  * --help-options Print more obscure command line options.
  * --help-internal B2 implementation details.
  * --help-doc-options Implementation details doc formatting.

...found 1 target...
PS C:\dev\boost_1_88_0>
```

```
  link=static|shared      Whether to build static or shared libraries

  threading=single|multi  Whether to build single or multithreaded binaries

  runtime-link=static|shared
                          Whether to link to static or shared C and C++
                          runtime.
./b2.exe address-model=64 link=shared threading=multi runtime-link=shared --build-type=complete stage
./b2.exe --toolset=msvc-14.3 address-model=64 link=static,shared threading=multi runtime-link=static,shared --build-type=complete stage
```

```
b2 --toolset=msvc-14.3 address-model=64 link=static,shared threading=multi runtime-link=shared --build-type=complete stage
./b2.exe --toolset=msvc-14.3 address-model=64 link=shared threading=multi runtime-link=shared --build-type=complete stage
```

```
PS C:\dev\boost_1_88_0> ./b2.exe --toolset=msvc-14.3 address-model=64 link=static,shared threading=multi runtime-link=shared --build-type=complete stage
```

```
c:\dev\boost_1_88_0\stage\lib\cmake\
c:\dev\boost_1_88_0\stage\lib\cmake\Boost-1.88.0\
c:\dev\boost_1_85_0\stage\lib\cmake\Boost-1.85.0\
```

```
# 64位
b2.exe install --prefix="D:\CppLibs\Boost\x64" --build-type=complete --toolset=msvc-14.3 threading=multi --build-type=complete address-model=64

# 32位
b2.exe install --prefix="D:\CppLibs\Boost\x86" --build-type=complete --toolset=msvc-14.3 threading=multi --build-type=complete address-model=32
```

## CMake

```cmake
cmake_minimum_required(VERSION 4.0.2)

project ( testprj )

find_package ( BOOST )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

cmake ..
```
PS D:\work\boost_work\ModernBoost\codes\cmakeinfo\build> cmake ..
-- Building for: Visual Studio 17 2022
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
CMake Warning (dev) at C:/Program Files/CMake/share/cmake-4.0/Modules/FindPackageHandleStandardArgs.cmake:430 (message):
  The package name passed to find_package_handle_standard_args() (Boost) does
  not match the name of the calling package (BOOST).  This can lead to
  problems in calling code that expects find_package() result variables
  (e.g., `_FOUND`) to follow a certain pattern.
Call Stack (most recent call first):
  C:/Program Files/CMake/share/cmake-4.0/Modules/FindBOOST.cmake:641 (find_package_handle_standard_args)
  CMakeLists.txt:5 (find_package)
This warning is for project developers.  Use -Wno-dev to suppress it.

-- Found Boost: C:/dev/boost_1_88_0/stage/lib/cmake/Boost-1.88.0/BoostConfig.cmake (found version "1.88.0")
-- my_import_targets=Boost::headers;Boost::boost;Boost::diagnostic_definitions;Boost::disable_autolinking;Boost::dynamic_linking
-- Configuring done (7.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/boost_work/ModernBoost/codes/cmakeinfo/build
```

### exapmle 1

```cmake
cmake_minimum_required ( VERSION 3.20 )

project ( testprj )

set ( PRJ_INCLUDE_DIRS )
set ( PRJ_COMPILE_FEATURES )
set ( PRJ_LIBRARIES )

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_20 )

#set ( Boost_USE_STATIC_LIBS ON )

# 查找 Boost
find_package(Boost REQUIRED COMPONENTS filesystem)

# 检查是否找到 Boost
if(Boost_FOUND)
    message(STATUS "Boost found: ${Boost_INCLUDE_DIRS}")
    message(STATUS "Boost libraries: ${Boost_LIBRARIES}")
else()
    message(FATAL_ERROR "Boost not found!")
endif()

list ( APPEND PRJ_INCLUDE_DIRS ${Boost_INCLUDE_DIRS} )
list ( APPEND PRJ_LIBRARIES ${Boost_LIBRARIES} )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

add_executable ( ${PROJECT_NAME}
    main.cpp
)

target_include_directories ( ${PROJECT_NAME}
    PRIVATE 
        ${PRJ_INCLUDE_DIRS}
)

target_link_libraries( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_LIBRARIES}
)

target_compile_features ( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_COMPILE_FEATURES}
)
```

main.cpp
```cpp
#include <boost/filesystem.hpp>
#include <iostream>

int main() {
    boost::filesystem::path p("test.txt");
    std::cout << "Path: " << p << std::endl;
    return 0;
}
```


program_options::variables_map
```
Search results:
29 files and 0 directories found:
c:\dev\boost_1_88_0\libs\context\performance\calloc\performance.cpp
c:\dev\boost_1_88_0\libs\context\performance\context\performance.cpp
c:\dev\boost_1_88_0\libs\context\performance\fiber\performance.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\asymmetric\performance_create_prealloc.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\asymmetric\performance_create_protected.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\asymmetric\performance_create_standard.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\asymmetric\performance_switch.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\asymmetric\segmented\performance_create_segmented.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\symmetric\performance_create_prealloc.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\symmetric\performance_create_protected.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\symmetric\performance_create_standard.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\symmetric\performance_switch.cpp
c:\dev\boost_1_88_0\libs\coroutine\performance\symmetric\segmented\performance_create_segmented.cpp
c:\dev\boost_1_88_0\libs\coroutine2\performance\performance.cpp
c:\dev\boost_1_88_0\libs\coroutine2\performance\segmented\performance_create_segmented.cpp
c:\dev\boost_1_88_0\libs\wave\test\testwave\testwave_app.cpp
c:\dev\boost_1_88_0\tools\quickbook\src\quickbook.cpp
c:\dev\boost_1_88_0\libs\program_options\doc\program_options.dox
c:\dev\boost_1_88_0\libs\program_options\doc\program_options_erl
c:\dev\boost_1_88_0\libs\wave\test\testwave\testwave_app.hpp
c:\dev\boost_1_88_0\doc/html\doxygen\classboost_1_1program__options_1_1variables__map.html
c:\dev\boost_1_88_0\bin.v2\libs\program_options\build\msvc-14.3\debug\x86_64\link-static\threading-multi\boost_program_options-vc143-mt-gd-x64-1_88.lib
c:\dev\boost_1_88_0\stage\lib\libboost_program_options-vc143-mt-gd-x64-1_88.lib
c:\dev\boost_1_88_0\bin.v2\libs\program_options\build\msvc-14.3\debug\x86_64\link-static\threading-multi\variables_map.obj
c:\dev\boost_1_88_0\bin.v2\libs\program_options\build\msvc-14.3\debug\x86_64\threading-multi\boost_program_options-vc143-mt-gd-x64-1_88.pdb
c:\dev\boost_1_88_0\libs\program_options\doc\howto.xml
```
# OpenVDB

## Article Link

-  [OpenVR](https://www.youtube.com/playlist?list=PLua0bJg-zOpOLC1wP-FrYoOCpmsJaRULq).


```
.\vcpkg.exe install openvdb
```

```
PS C:\dev\vcpkg> .\vcpkg.exe install openvdb:x64-windows
Computing installation plan...
The following packages are already installed:
    openvdb:x64-windows@12.0.0#1
openvdb:x64-windows is already installed
Total install time: 2.5 ms
The package openvdb provides CMake targets:

    find_package(OpenVDB CONFIG REQUIRED)
    target_link_libraries(main PRIVATE OpenVDB::openvdb)
```


```
cmake -DCMAKE_TOOLCHAIN_FILE=C:\dev\vcpkg\scripts\buildsystems\vcpkg.cmake
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


```
cmake .. -DCMAKE_MODULE_PATH=C:/dev/OpenVDB/lib/cmake/OpenVDB -G "Visual Studio 17 2022" -A x64
cmake .. -DCMAKE_MODULE_PATH=c:\dev\OpenVDB\lib\cmake\OpenVDB -G "Visual Studio 17 2022" -A x64
```

## cmake .. -DCMAKE_MODULE_PATH=c:\dev\OpenVDB\lib\cmake\OpenVDB
```
PS D:\work\openvdb_work\simple\01b\build> cmake .. -DCMAKE_MODULE_PATH=c:\dev\OpenVDB\lib\cmake\OpenVDB
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
CMake Error at D:/work/openvdb_work/simple/01b/build/CMakeFiles/CMakeScratch/TryCompile-qph0e2/CMakeLists.txt:2 (set):
  Syntax error in cmake code at

    D:/work/openvdb_work/simple/01b/build/CMakeFiles/CMakeScratch/TryCompile-qph0e2/CMakeLists.txt:2

  when parsing string

    c:\dev\OpenVDB\lib\cmake\OpenVDB

  Invalid character escape '\d'.


CMake Error at C:/Program Files/CMake/share/cmake-4.0/Modules/CMakeDetermineCompilerABI.cmake:83 (try_compile):
  Failed to configure test project build system.
Call Stack (most recent call first):
  C:/Program Files/CMake/share/cmake-4.0/Modules/CMakeTestCCompiler.cmake:26 (CMAKE_DETERMINE_COMPILER_ABI)
  CMakeLists.txt:2 (project)


-- Configuring incomplete, errors occurred!
```

## cmake .. -DCMAKE_MODULE_PATH=c:/dev/OpenVDB/lib/cmake/OpenVDB
```
PS D:\work\openvdb_work\simple\01b\build> cmake .. -DCMAKE_MODULE_PATH=c:/dev/OpenVDB/lib/cmake/OpenVDB
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
COMPONENT = openvdb
-- Found OpenVDB: C:/dev/OpenVDB/include (found version "12.0.2") found components: openvdb
-- OpenVDB ABI Version: 12
-- Found TBB: C:/Program Files (x86)/Intel/oneAPI/tbb/latest/include (found version "2022.0") found components: tbb
-- Found Blosc: C:/dev/blosc/lib/blosc.lib (found version "1.21.7")
-- Found ZLIB: C:/dev/zlib/lib/z.lib (found version "1.3.1.1")
CMake Warning (dev) at c:/dev/OpenVDB/lib/cmake/OpenVDB/FindOpenVDB.cmake:632 (find_package):
  Policy CMP0167 is not set: The FindBoost module is removed.  Run "cmake
  --help-policy CMP0167" for policy details.  Use the cmake_policy command to
  set the policy and suppress this warning.

Call Stack (most recent call first):
  CMakeLists.txt:8 (find_package)
This warning is for project developers.  Use -Wno-dev to suppress it.

-- Found Boost: C:/dev/boost_1_88_0/stage/lib/cmake/Boost-1.88.0/BoostConfig.cmake (found version "1.88.0") found components: iostreams
-- Found TBB: C:/Program Files (x86)/Intel/oneAPI/tbb/latest/include (found version "2022.0") found components: tbb tbbmalloc tbbmalloc_proxy
-- Configuring done (6.3s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/openvdb_work/simple/01b/build
```

## cmake .. -DCMAKE_MODULE_PATH="c:\dev\OpenVDB\lib\cmake\OpenVDB"
```
PS D:\work\openvdb_work\simple\01c\build> cmake .. -DCMAKE_MODULE_PATH="c:\dev\OpenVDB\lib\cmake\OpenVDB"
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
CMake Error at D:/work/openvdb_work/simple/01c/build/CMakeFiles/CMakeScratch/TryCompile-cvw2wk/CMakeLists.txt:2 (set):
  Syntax error in cmake code at

    D:/work/openvdb_work/simple/01c/build/CMakeFiles/CMakeScratch/TryCompile-cvw2wk/CMakeLists.txt:2

  when parsing string

    c:\dev\OpenVDB\lib\cmake\OpenVDB

  Invalid character escape '\d'.


CMake Error at C:/Program Files/CMake/share/cmake-4.0/Modules/CMakeDetermineCompilerABI.cmake:83 (try_compile):
  Failed to configure test project build system.
Call Stack (most recent call first):
  C:/Program Files/CMake/share/cmake-4.0/Modules/CMakeTestCCompiler.cmake:26 (CMAKE_DETERMINE_COMPILER_ABI)
  CMakeLists.txt:2 (project)


-- Configuring incomplete, errors occurred!
```

## vcpkg-cmake-wrapper.cmake(c:\dev\vcpkg\installed\x64-windows\share\openvdb\)
```cmake
set(OPENVDB_PREV_MODULE_PATH ${CMAKE_MODULE_PATH})
list(APPEND CMAKE_MODULE_PATH ${CMAKE_CURRENT_LIST_DIR})

list(REMOVE_ITEM ARGS "NO_MODULE")
list(REMOVE_ITEM ARGS "CONFIG")
list(REMOVE_ITEM ARGS "MODULE")

set(OPENVDB_USE_STATIC_LIBS 0)

_find_package(${ARGS})

set(CMAKE_MODULE_PATH ${OPENVDB_PREV_MODULE_PATH})
```
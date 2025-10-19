# Eigen

## Link

- [eigen](https://gitlab.com/libeigen/eigen).
- [eigen Main_Page](https://eigen.tuxfamily.org/index.php?title=Main_Page).

## git clone https://gitlab.com/libeigen/eigen.git

```
PS D:\work\libarchive_work> git clone git@github.com:libarchive/libarchive.git
Cloning into 'libarchive'...
remote: Enumerating objects: 39808, done.
remote: Counting objects: 100% (297/297), done.
remote: Compressing objects: 100% (124/124), done.
remote: Total 39808 (delta 216), reused 174 (delta 173), pack-reused 39511 (from 3)
Receiving objects: 100% (39808/39808), 28.76 MiB | 92.00 KiB/s, done.
Resolving deltas: 100% (29025/29025), done.
```


```cmake
cmake_minimum_required(VERSION 3.10)
project(test_eigen3)

# 1. 找包
find_package(Eigen3 3.1.0 QUIET)

# 2. 打印所有可用的结果变量
message(STATUS "----------------------------------------")
message(STATUS "Eigen3_FOUND        = ${Eigen3_FOUND}")
message(STATUS "EIGEN3_FOUND        = ${EIGEN3_FOUND}")  # 旧变量，可能也存在
message(STATUS "EIGEN3_VERSION      = ${EIGEN3_VERSION_STRING}")
message(STATUS "EIGEN3_INCLUDE_DIR  = ${EIGEN3_INCLUDE_DIR}")
message(STATUS "EIGEN3_INCLUDE_DIRS = ${EIGEN3_INCLUDE_DIRS}")
message(STATUS "EIGEN3_ROOT         = ${EIGEN3_ROOT}")      # 某些 finder 提供
message(STATUS "Eigen3_DIR          = ${Eigen3_DIR}")       # 指向 <package>Config.cmake 的位置
```

## CMakeDetermineFortranCompiler

```cmake
if (EIGEN_BUILD_BLAS OR EIGEN_BUILD_LAPACK)
  # BLAS and LAPACK currently need a fortran compiler.
  include(CMakeDetermineFortranCompiler)
  if (NOT CMAKE_Fortran_COMPILER)
    set(EIGEN_BUILD_BLAS OFF)
    set(EIGEN_BUILD_LAPACK OFF)
  else()
    # Determine if we should build shared libraries for BLAS/LAPACK on this platform.
    get_cmake_property(EIGEN_BUILD_SHARED_LIBS TARGET_SUPPORTS_SHARED_LIBS)
  endif()
endif()
```


```
cmake .. -G "Visual Studio 17 2022" -A x64 -T fortran=ifx
```

```powershell
The Fortran compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
CMAKE_Fortran_COMPILER=C:/Program Files (x86)/Intel/oneAPI/compiler/2025.0/bin/ifx.exe
```


```cmake
cmake_minimum_required ( VERSION 3.26 )

project ( testprj )

set ( PRJ_INCLUDE_DIRS )
set ( PRJ_COMPILE_FEATURES )
set ( PRJ_LIBRARIES )

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

find_package(Eigen3 CONFIG REQUIRED)

message ( STATUS "EIGEN3_INCLUDE_DIR    = ${EIGEN3_INCLUDE_DIR}" )

list ( APPEND PRJ_INCLUDE_DIRS ${EIGEN3_INCLUDE_DIR} )
list ( APPEND PRJ_LIBRARIES Eigen3::Eigen )

set_property ( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )

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

```
cmake .. -DCMAKE_PREFIX_PATH="c:/dev/Eigen3"
cmake --build . --parallel 4 --config Release 
```
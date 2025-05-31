# CMake Custom


## Link

-  [CMake从入门到精通（一）Hello World](https://zhuanlan.zhihu.com/p/392730984/).

## cmake -E help
```
PS C:\Users\eric> cmake -E help
CMake Error: cmake version 4.0.2
Usage: C:\Program Files\CMake\bin\cmake.exe -E <command> [arguments...]
Available commands:
  capabilities              - Report capabilities built into cmake in JSON format
  cat [--] <files>...       - concat the files and print them to the standard output
  chdir dir cmd [args...]   - run command in a given directory
  compare_files [--ignore-eol] file1 file2
                              - check if file1 is same as file2
  copy <file>... destination  - copy files to destination (either file or directory)
  copy_directory <dir>... destination   - copy content of <dir>... directories to 'destination' directory
  copy_directory_if_different <dir>... destination   - copy changed content of <dir>... directories to 'destination' directory
  copy_if_different <file>... destination  - copy files if it has changed
  echo [<string>...]        - displays arguments as text
  echo_append [<string>...] - displays arguments as text but no new line
  env [--unset=NAME ...] [NAME=VALUE ...] [--] <command> [<arg>...]
                            - run command in a modified environment
  environment               - display the current environment
  make_directory <dir>...   - create parent and <dir> directories
  md5sum <file>...          - create MD5 checksum of files
  sha1sum <file>...         - create SHA1 checksum of files
  sha224sum <file>...       - create SHA224 checksum of files
  sha256sum <file>...       - create SHA256 checksum of files
  sha384sum <file>...       - create SHA384 checksum of files
  sha512sum <file>...       - create SHA512 checksum of files
  remove [-f] <file>...     - remove the file(s), use -f to force it (deprecated: use rm instead)
  remove_directory <dir>... - remove directories and their contents (deprecated: use rm instead)
  rename oldname newname    - rename a file or directory (on one volume)
  rm [-rRf] [--] <file/dir>... - remove files or directories, use -f to force it, r or R to remove directories and their contents recursively
  sleep <number>...         - sleep for given number of seconds
  tar [cxt][vf][zjJ] file.tar [file/dir1 file/dir2 ...]
                            - create or extract a tar or zip archive
  time command [args...]    - run command and display elapsed time
  touch <file>...           - touch a <file>.
  touch_nocreate <file>...  - touch a <file> but do not create it.
  create_symlink old new    - create a symbolic link new -> old
  create_hardlink old new   - create a hard link new -> old
  true                      - do nothing with an exit code of 0
  false                     - do nothing with an exit code of 1
Available on Windows only:
  delete_regv key           - delete registry value
  env_vs8_wince sdkname     - displays a batch file which sets the environment for the provided Windows CE SDK installed in VS2005
  env_vs9_wince sdkname     - displays a batch file which sets the environment for the provided Windows CE SDK installed in VS2008
  write_regv key value      - write registry value
```

## add_custom_target

### example 1

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(testprj)

add_executable(${PROJECT_NAME} main.cpp)

add_custom_command(OUTPUT printout 
                   COMMAND ${CMAKE_COMMAND} -E echo "compile finished"
                   VERBATIM
                  )

add_custom_target(myfinish
                  DEPENDS printout
                  )
```

cmake ..
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\01\build> cmake ..
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
-- Configuring done (6.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/01/build
```

cmake --build . --target myfinish
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\01\build> cmake --build . --target myfinish
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  1>Generating printout
  compile finished
C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): w
arning MSB8065: 项“D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\01\build\CMakeFiles\42e117739033
a674683fd6f02191edb7\printout.rule”的自定义生成成功，但尚未创建指定的输出“d:\work\modern_cmake_work\moderncmake\codes\cmake\add_custom_com
mand\01\build\printout”。这可能会导致增量生成无法正常工作。 [D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\01\buil
d\myfinish.vcxproj]
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/01/CMakeLists.txt
```

### example 2

CMakeLists.txt
```
cmake_minimum_required(VERSION 4.0.2)

project(testprj)

add_executable(${PROJECT_NAME} main.cpp)

add_custom_command(OUTPUT printout.txt
                   COMMAND ${CMAKE_COMMAND} -E echo "compile finished" > printout.txt
                   VERBATIM
                  )

add_custom_target(myfinish
                  DEPENDS printout.txt
                  )
```

cmake ..
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\01d\build> cmake ..
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
-- Configuring done (6.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/01d/build
```

cmake --build . --target myfinish
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\01d\build> cmake --build . --target myfinish
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  1>Generating printout.txt
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/01d/CMakeLists.txt
```

### example post build

cmake ..
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\02\build> cmake ..
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
-- Configuring done (6.1s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/02/build
```

cmake --build .
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\02\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/02/CMakeLists.txt
  main.cpp
  testprj.vcxproj -> D:\work\modern_cmake_work\ModernCMake\codes\cmake\add_custom_command\02\build\Debug\testprj.exe
  compile finish
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/add_custom_command/02/CMakeLists.txt
```

### example make_directory 1

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(testprj)

add_executable(${PROJECT_NAME} main.cpp)

set( directory mydir )

add_custom_target(mkdir_target)

add_custom_command(
    TARGET mkdir_target PRE_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target ${directory}
    COMMAND ${CMAKE_COMMAND} -E make_directory ${directory}
)
```

cmake ..
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01\build> cmake ..
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
-- Configuring done (6.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/make_directory/01/build
```

ls
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01\build> ls

    Directory: D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01\build

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/5/21    10:55                CMakeFiles
-a---           2025/5/21    10:55          49808 ALL_BUILD.vcxproj
-a---           2025/5/21    10:55            322 ALL_BUILD.vcxproj.filters
-a---           2025/5/21    10:55           2025 cmake_install.cmake
-a---           2025/5/21    10:55          14264 CMakeCache.txt
-a---           2025/5/21    10:55          51282 mkdir_target.vcxproj
-a---           2025/5/21    10:55            322 mkdir_target.vcxproj.filters
-a---           2025/5/21    10:55           4132 testprj.sln
-a---           2025/5/21    10:55          60047 testprj.vcxproj
-a---           2025/5/21    10:55            647 testprj.vcxproj.filters
-a---           2025/5/21    10:55          49826 ZERO_CHECK.vcxproj
-a---           2025/5/21    10:55            565 ZERO_CHECK.vcxproj.filters
```

cmake --build . --target mkdir_target
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01\build> cmake --build . --target mkdir_target
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  mkdir_target mydir
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/make_directory/01/CMakeLists.txt
```

ls
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01\build> ls

    Directory: D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01\build

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/5/21    11:03                CMakeFiles
d----           2025/5/21    11:03                mydir
d----           2025/5/21    11:03                x64
-a---           2025/5/21    10:55          49808 ALL_BUILD.vcxproj
-a---           2025/5/21    10:55            322 ALL_BUILD.vcxproj.filters
-a---           2025/5/21    10:55           2025 cmake_install.cmake
-a---           2025/5/21    10:55          14264 CMakeCache.txt
-a---           2025/5/21    10:55          51282 mkdir_target.vcxproj
-a---           2025/5/21    10:55            322 mkdir_target.vcxproj.filters
-a---           2025/5/21    10:55           4132 testprj.sln
-a---           2025/5/21    10:55          60047 testprj.vcxproj
-a---           2025/5/21    10:55            647 testprj.vcxproj.filters
-a---           2025/5/21    10:55          49826 ZERO_CHECK.vcxproj
-a---           2025/5/21    10:55            565 ZERO_CHECK.vcxproj.filters
```

### example make_directory 2

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(testprj)

add_executable(${PROJECT_NAME} main.cpp)

set( directory mydir )

add_custom_target(mkdir_target)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target ${directory}
    COMMAND ${CMAKE_COMMAND} -E make_directory ${directory}
)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target mydir1
    COMMAND ${CMAKE_COMMAND} -E make_directory mydir1
)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target mydir2
    COMMAND ${CMAKE_COMMAND} -E make_directory mydir2
)
```

```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01b\build> cmake ..
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
-- Configuring done (6.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/make_directory/01b/build
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01b\build> cmake --build . --target mkdir_target
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/make_directory/01b/CMakeLists.txt
  mkdir_target mydir
  mkdir_target mydir1
  mkdir_target mydir2
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01b\build> ls

    Directory: D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\01b\build

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/5/21    11:36                CMakeFiles
d----           2025/5/21    11:36                mydir
d----           2025/5/21    11:36                mydir1
d----           2025/5/21    11:36                mydir2
d----           2025/5/21    11:36                x64
-a---           2025/5/21    11:35          49847 ALL_BUILD.vcxproj
-a---           2025/5/21    11:35            323 ALL_BUILD.vcxproj.filters
-a---           2025/5/21    11:35           2028 cmake_install.cmake
-a---           2025/5/21    11:35          14270 CMakeCache.txt
-a---           2025/5/21    11:35          54208 mkdir_target.vcxproj
-a---           2025/5/21    11:35            323 mkdir_target.vcxproj.filters
-a---           2025/5/21    11:35           4132 testprj.sln
-a---           2025/5/21    11:35          60098 testprj.vcxproj
-a---           2025/5/21    11:35            649 testprj.vcxproj.filters
-a---           2025/5/21    11:35          49863 ZERO_CHECK.vcxproj
-a---           2025/5/21    11:35            566 ZERO_CHECK.vcxproj.filters
```

### example make_directory 3

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(testprj)

add_executable(${PROJECT_NAME} main.cpp)

set( directory mydir )

add_custom_target(mkdir_target
  COMMAND ${CMAKE_COMMAND} -E echo "Create directories"
)
  
add_custom_command(
    TARGET mkdir_target PRE_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target ${directory}
    COMMAND ${CMAKE_COMMAND} -E make_directory ${directory}
)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target mydir1
    COMMAND ${CMAKE_COMMAND} -E make_directory mydir1
)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target mydir2
    COMMAND ${CMAKE_COMMAND} -E make_directory mydir2
)
```

```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\02\build> cmake ..
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
-- Configuring done (6.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/make_directory/02/build
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\02\build> cmake --build . --target mkdir_target
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  mkdir_target mydir
  1>
  Create directories
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/make_directory/02/CMakeLists.txt
  mkdir_target mydir1
  mkdir_target mydir2
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\02\build> ls

    Directory: D:\work\modern_cmake_work\ModernCMake\codes\cmake\make_directory\02\build

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/5/21    12:03                CMakeFiles
d----           2025/5/21    12:03                mydir
d----           2025/5/21    12:03                mydir1
d----           2025/5/21    12:03                mydir2
d----           2025/5/21    12:03                x64
-a---           2025/5/21    12:03          49808 ALL_BUILD.vcxproj
-a---           2025/5/21    12:03            322 ALL_BUILD.vcxproj.filters
-a---           2025/5/21    12:03           2025 cmake_install.cmake
-a---           2025/5/21    12:03          14264 CMakeCache.txt
-a---           2025/5/21    12:03          59211 mkdir_target.vcxproj
-a---           2025/5/21    12:03            830 mkdir_target.vcxproj.filters
-a---           2025/5/21    12:03           4132 testprj.sln
-a---           2025/5/21    12:03          60047 testprj.vcxproj
-a---           2025/5/21    12:03            647 testprj.vcxproj.filters
-a---           2025/5/21    12:03          49826 ZERO_CHECK.vcxproj
-a---           2025/5/21    12:03            565 ZERO_CHECK.vcxproj.filters
```

### example rm directory

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(testprj)

add_executable(${PROJECT_NAME} main.cpp)

set( directory mydir )

add_custom_target(mkdir_target
  COMMAND ${CMAKE_COMMAND} -E echo "Create directories"
)

add_custom_target(rmdir_target
  COMMAND ${CMAKE_COMMAND} -E echo "Delete directories"
)

add_custom_command(
    TARGET mkdir_target PRE_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target ${directory}
    COMMAND ${CMAKE_COMMAND} -E make_directory ${directory}
)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target mydir1
    COMMAND ${CMAKE_COMMAND} -E make_directory mydir1
)

add_custom_command(
    TARGET mkdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo mkdir_target mydir2
    COMMAND ${CMAKE_COMMAND} -E make_directory mydir2
)


add_custom_command(
    TARGET rmdir_target POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E echo rmdir_target mydir mydir1 mydir2
    COMMAND ${CMAKE_COMMAND} -E rm -rf mydir
    COMMAND ${CMAKE_COMMAND} -E rm -rf mydir1
    COMMAND ${CMAKE_COMMAND} -E rm -rf mydir2
)
```

cmake ..
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build> cmake ..
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
-- Configuring done (6.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/rm/02/build
```

cmake --build . --target mkdir_target
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build> cmake --build . --target mkdir_target
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  mkdir_target mydir
  1>
  Create directories
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/rm/02/CMakeLists.txt
  mkdir_target mydir1
  mkdir_target mydir2
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build> ls

    Directory: D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/5/21    12:23                CMakeFiles
d----           2025/5/21    12:23                mydir
d----           2025/5/21    12:23                mydir1
d----           2025/5/21    12:23                mydir2
d----           2025/5/21    12:23                x64
-a---           2025/5/21    12:23          49340 ALL_BUILD.vcxproj
-a---           2025/5/21    12:23            310 ALL_BUILD.vcxproj.filters
-a---           2025/5/21    12:23           1989 cmake_install.cmake
-a---           2025/5/21    12:23          14192 CMakeCache.txt
-a---           2025/5/21    12:23          58683 mkdir_target.vcxproj
-a---           2025/5/21    12:23            794 mkdir_target.vcxproj.filters
-a---           2025/5/21    12:23          56187 rmdir_target.vcxproj
-a---           2025/5/21    12:23            794 rmdir_target.vcxproj.filters
-a---           2025/5/21    12:23           4761 testprj.sln
-a---           2025/5/21    12:23          59435 testprj.vcxproj
-a---           2025/5/21    12:23            623 testprj.vcxproj.filters
-a---           2025/5/21    12:23          49382 ZERO_CHECK.vcxproj
-a---           2025/5/21    12:23            553 ZERO_CHECK.vcxproj.filters
```

cmake --build . --target rmdir_target
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build> cmake --build . --target rmdir_target
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>
  Delete directories
  Building Custom Rule D:/work/modern_cmake_work/ModernCMake/codes/cmake/rm/02/CMakeLists.txt
  rmdir_target mydir mydir1 mydir2
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build> ls

    Directory: D:\work\modern_cmake_work\ModernCMake\codes\cmake\rm\02\build

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/5/21    12:23                CMakeFiles
d----           2025/5/21    12:23                x64
-a---           2025/5/21    12:23          49340 ALL_BUILD.vcxproj
-a---           2025/5/21    12:23            310 ALL_BUILD.vcxproj.filters
-a---           2025/5/21    12:23           1989 cmake_install.cmake
-a---           2025/5/21    12:23          14192 CMakeCache.txt
-a---           2025/5/21    12:23          58683 mkdir_target.vcxproj
-a---           2025/5/21    12:23            794 mkdir_target.vcxproj.filters
-a---           2025/5/21    12:23          56187 rmdir_target.vcxproj
-a---           2025/5/21    12:23            794 rmdir_target.vcxproj.filters
-a---           2025/5/21    12:23           4761 testprj.sln
-a---           2025/5/21    12:23          59435 testprj.vcxproj
-a---           2025/5/21    12:23            623 testprj.vcxproj.filters
-a---           2025/5/21    12:23          49382 ZERO_CHECK.vcxproj
-a---           2025/5/21    12:23            553 ZERO_CHECK.vcxproj.filters
```
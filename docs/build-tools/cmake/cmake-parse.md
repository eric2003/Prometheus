# Parse


## CMake Parse Arguments

-  [cmake_parse_arguments](https://cmake.org/cmake/help/latest/command/cmake_parse_arguments.html).

## cmake_parse_arguments code segment
```cmake
cmake_minimum_required ( VERSION 3.28 )

macro(my_install)
    set(options OPTIONAL FAST)
    set(oneValueArgs DESTINATION RENAME)
    set(multiValueArgs TARGETS CONFIGURATIONS)
    cmake_parse_arguments(MY_INSTALL "${options}" "${oneValueArgs}"
                          "${multiValueArgs}" ${ARGN} )
endmacro()

project ( testprj )

my_install(TARGETS foo bar DESTINATION bin OPTIONAL blub CONFIGURATIONS)

message( STATUS "MY_INSTALL_OPTIONAL=${MY_INSTALL_OPTIONAL}" )
message( STATUS "MY_INSTALL_FAST=${MY_INSTALL_FAST}" )
message( STATUS "MY_INSTALL_DESTINATION=${MY_INSTALL_DESTINATION}" )
message( STATUS "MY_INSTALL_RENAME=${MY_INSTALL_RENAME}" )
message( STATUS "MY_INSTALL_TARGETS=${MY_INSTALL_TARGETS}" )
message( STATUS "MY_INSTALL_CONFIGURATIONS=${MY_INSTALL_CONFIGURATIONS}" )
message( STATUS "MY_INSTALL_UNPARSED_ARGUMENTS=${MY_INSTALL_UNPARSED_ARGUMENTS}" )
message( STATUS "MY_INSTALL_KEYWORDS_MISSING_VALUES=${MY_INSTALL_KEYWORDS_MISSING_VALUES}" )
```

results:
```
PS D:\work\modern_cmake_work\ModernCMake\codes\cmake\cmake_parse_arguments\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.38.33134.0
-- The CXX compiler identification is MSVC 19.38.33134.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- MY_INSTALL_OPTIONAL=TRUE
-- MY_INSTALL_FAST=FALSE
-- MY_INSTALL_DESTINATION=bin
-- MY_INSTALL_RENAME=
-- MY_INSTALL_TARGETS=foo;bar
-- MY_INSTALL_CONFIGURATIONS=
-- MY_INSTALL_UNPARSED_ARGUMENTS=blub
-- MY_INSTALL_KEYWORDS_MISSING_VALUES=CONFIGURATIONS
-- Configuring done (4.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/cmake/cmake_parse_arguments/01/build
```


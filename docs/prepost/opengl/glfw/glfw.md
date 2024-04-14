# GLFW

GLFW is an Open Source, multi-platform library for OpenGL, OpenGL ES and Vulkan development on the desktop. It provides a simple API for creating windows, contexts and surfaces, receiving input and events.

GLFW is written in C and supports Windows, macOS, Wayland and X11.

## GLFW Link

-  [glfw.org](https://www.glfw.org/).
-  [GLFW-github](https://github.com/glfw/glfw/).
-  [GLFW-doc](https://www.glfw.org/docs/latest/).


## Set environment variables

```
GLFW3_DIR = c:\dev\GLFW\lib\cmake\glfw3\
```


## CMake Info


## glfw3Targets.cmake code segment
```cmake
# Create imported target glfw
add_library(glfw SHARED IMPORTED)

set_target_properties(glfw PROPERTIES
  INTERFACE_COMPILE_DEFINITIONS "GLFW_DLL"
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
```

## glfw3Targets-release.cmake code segment

```cmake
# Import target "glfw" for configuration "Release"
set_property(TARGET glfw APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(glfw PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/glfw3dll.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/glfw3.dll"
  )

list(APPEND _cmake_import_check_targets glfw )
list(APPEND _cmake_import_check_files_for_glfw "${_IMPORT_PREFIX}/lib/glfw3dll.lib" "${_IMPORT_PREFIX}/bin/glfw3.dll" )
```

```
INTERFACE_COMPILE_DEFINITIONS
INTERFACE_INCLUDE_DIRECTORIES
IMPORTED_IMPLIB_RELEASE
IMPORTED_LOCATION_RELEASE
```


## Print GLFW3 import targets

```cmake
cmake_minimum_required(VERSION 3.25)

project ( testprj )
find_package ( GLFW3 )
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
PS D:\work\glfw_work\ModernGFLW\codes\cmakeinfo\01\build> cmake ..
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- my_import_targets=Threads::Threads;glfw
-- Configuring done (6.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/glfw_work/ModernGFLW/codes/cmakeinfo/01/build
```

## Print GLFW3 target glfw properties
```cmake
cmake_minimum_required(VERSION 3.25)

function(print_target_properties targetname )
    include(CMakePrintHelpers)
    message ( STATUS "targetname = ${targetname}" )
    set( props ${ARGN} )
    foreach ( prop IN LISTS props )
        cmake_print_properties(
          TARGETS ${targetname}
          PROPERTIES ${prop}
        )
    endforeach()
endfunction()

project ( testprj )

find_package ( GLFW3 )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

set ( props
  INTERFACE_COMPILE_DEFINITIONS
  INTERFACE_INCLUDE_DIRECTORIES
  IMPORTED_IMPLIB_RELEASE
  IMPORTED_LOCATION_RELEASE
)
print_target_properties( glfw ${props} )
```

results:
```
PS D:\work\glfw_work\ModernGFLW\codes\cmakeinfo\02\build> cmake ..
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- my_import_targets=Threads::Threads;glfw
-- targetname = glfw
--
 Properties for TARGET glfw:
   glfw.INTERFACE_COMPILE_DEFINITIONS = "GLFW_DLL"

--
 Properties for TARGET glfw:
   glfw.INTERFACE_INCLUDE_DIRECTORIES = "C:/dev/GLFW/include"

--
 Properties for TARGET glfw:
   glfw.IMPORTED_IMPLIB_RELEASE = "C:/dev/GLFW/lib/glfw3dll.lib"

--
 Properties for TARGET glfw:
   glfw.IMPORTED_LOCATION_RELEASE = "C:/dev/GLFW/bin/glfw3.dll"

-- Configuring done (6.5s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/glfw_work/ModernGFLW/codes/cmakeinfo/02/build
```

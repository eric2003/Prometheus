# FreeGLUT

Freeglut, the Free OpenGL Utility Toolkit, is meant to be a free alternative to Mark Kilgard's GLUT library. Freeglut is free software, distributed under an MIT/X11 style license. You are free to use, modify, and redistribute freeglut with or without modifications (see COPYING for details).


## Free Glut Link

-  [freeglut.sourceforge.net](https://freeglut.sourceforge.net/).
-  [freeglut](https://github.com/freeglut/freeglut/).

## FindGLUT

-  [CMake FindGLUT](https://cmake.org/cmake/help/latest/module/FindGLUT.html).

## FreeGLUTTargets.cmake code segment

```cmake
# Create imported target FreeGLUT::freeglut
add_library(FreeGLUT::freeglut SHARED IMPORTED)

set_target_properties(FreeGLUT::freeglut PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
  INTERFACE_LINK_LIBRARIES "OpenGL::GL;winmm;gdi32"
)

# Create imported target FreeGLUT::freeglut_static
add_library(FreeGLUT::freeglut_static STATIC IMPORTED)

set_target_properties(FreeGLUT::freeglut_static PROPERTIES
  INTERFACE_COMPILE_DEFINITIONS "FREEGLUT_STATIC"
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
  INTERFACE_LINK_LIBRARIES "OpenGL::GL;winmm;gdi32"
)
```

## FreeGLUTTargets-release.cmake code segment

```cmake
# Import target "FreeGLUT::freeglut" for configuration "Release"
set_property(TARGET FreeGLUT::freeglut APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(FreeGLUT::freeglut PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/freeglut.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/freeglut.dll"
  )
# Import target "FreeGLUT::freeglut_static" for configuration "Release"
set_property(TARGET FreeGLUT::freeglut_static APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(FreeGLUT::freeglut_static PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C;RC"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/freeglut_static.lib"
  )
```

```
INTERFACE_COMPILE_DEFINITIONS
INTERFACE_INCLUDE_DIRECTORIES
INTERFACE_LINK_LIBRARIES
IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE
IMPORTED_IMPLIB_RELEASE
IMPORTED_LOCATION_RELEASE
```

## Print FreeGLUT import targets

```cmake
cmake_minimum_required(VERSION 3.25)
project( testprj )
find_package(FreeGLUT REQUIRED)
get_directory_property( FreeGLUT_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "FreeGLUT_import_targets=${FreeGLUT_import_targets}" )
```

results:
```
S D:\work\glew_work\ModernGlew\codes\freeglut\03\build> cmake ..
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
-- FreeGLUT_import_targets=FreeGLUT::freeglut;FreeGLUT::freeglut_static
-- Configuring done (5.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/glew_work/ModernGlew/codes/freeglut/03/build
```

## Print FreeGLUT target FreeGLUT::freeglut properties

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

project( testprj )

find_package(FreeGLUT REQUIRED)

get_directory_property( FreeGLUT_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "FreeGLUT_import_targets=${FreeGLUT_import_targets}" )

set ( props
  INTERFACE_COMPILE_DEFINITIONS
  INTERFACE_INCLUDE_DIRECTORIES
  INTERFACE_LINK_LIBRARIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE
  IMPORTED_IMPLIB_RELEASE
  IMPORTED_LOCATION_RELEASE
)

print_target_properties( FreeGLUT::freeglut ${props} )
```

results:
```
PS D:\work\glew_work\ModernGlew\codes\freeglut\03\build> cmake ..
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.22631.
-- FreeGLUT_import_targets=FreeGLUT::freeglut;FreeGLUT::freeglut_static
-- targetname = FreeGLUT::freeglut
--
 Properties for TARGET FreeGLUT::freeglut:
   FreeGLUT::freeglut.INTERFACE_COMPILE_DEFINITIONS = <NOTFOUND>

--
 Properties for TARGET FreeGLUT::freeglut:
   FreeGLUT::freeglut.INTERFACE_INCLUDE_DIRECTORIES = "C:/dev/freeglut/include"

--
 Properties for TARGET FreeGLUT::freeglut:
   FreeGLUT::freeglut.INTERFACE_LINK_LIBRARIES = "OpenGL::GL;winmm;gdi32"

--
 Properties for TARGET FreeGLUT::freeglut:
   FreeGLUT::freeglut.IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE = <NOTFOUND>

--
 Properties for TARGET FreeGLUT::freeglut:
   FreeGLUT::freeglut.IMPORTED_IMPLIB_RELEASE = "C:/dev/freeglut/lib/freeglut.lib"

--
 Properties for TARGET FreeGLUT::freeglut:
   FreeGLUT::freeglut.IMPORTED_LOCATION_RELEASE = "C:/dev/freeglut/bin/freeglut.dll"

-- Configuring done (0.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/glew_work/ModernGlew/codes/freeglut/03/build
```




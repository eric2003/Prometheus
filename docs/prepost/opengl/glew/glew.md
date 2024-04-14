# GLEW

## The OpenGL Extension Wrangler Library

The OpenGL Extension Wrangler Library (GLEW) is a cross-platform open-source C/C++ extension loading library. GLEW provides efficient run-time mechanisms for determining which OpenGL extensions are supported on the target platform. OpenGL core and extension functionality is exposed in a single header file. GLEW has been tested on a variety of operating systems, including Windows, Linux, Mac OS X, FreeBSD, Irix, and Solaris.

-  [The OpenGL Extension Wrangler Library](https://glew.sourceforge.net/).
-  [GLEW - The OpenGL Extension Wrangler Library](https://github.com/nigels-com/glew/).
-  [OpenGL ES glut glew glfw glad freeglut](https://zhuanlan.zhihu.com/p/584162800/).

## GLEW Examples

-  [GLEW系列链接整理](https://zhuanlan.zhihu.com/p/691229854/).
-  [GLEW2.2.0+CMake+VS2022+GLEW_VERSION简单测试](https://zhuanlan.zhihu.com/p/691222194/).
-  [GLEW+CMake+打印信息简单测试](https://zhuanlan.zhihu.com/p/691231119/).

## GLEW CMake Info

```cmake
cmake_minimum_required(VERSION 3.25)
project( testprj )
find_package(GLEW)
message( STATUS "GLEW_FOUND=${GLEW_FOUND}" )
message( STATUS "GLEW_VERSION=${GLEW_VERSION}" )
message( STATUS "GLEW_VERSION_MAJOR=${GLEW_VERSION_MAJOR}" )
message( STATUS "GLEW_VERSION_MINOR=${GLEW_VERSION_MINOR}" )
message( STATUS "GLEW_VERSION_MICRO=${GLEW_VERSION_MICRO}" )
message( STATUS "GLEW_INCLUDE_DIRS=${GLEW_INCLUDE_DIRS}" )
message( STATUS "GLEW_LIBRARIES=${GLEW_LIBRARIES}" )
message( STATUS "GLEW_SHARED_LIBRARIES=${GLEW_SHARED_LIBRARIES}" )
message( STATUS "GLEW_STATIC_LIBRARIES=${GLEW_STATIC_LIBRARIES}" )
```

GLEW import_targets
```cmake
cmake_minimum_required ( VERSION 3.25 )
project ( testprj )
find_package ( GLEW )
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

## GLEW source code

```
$(OutDir) = ..\..\bin\Release\x64\
```
Output Directory
```
Expression：
$(BIN_DIR)\$(Configuration)\$(PlatformName)\
Value：
$(BIN_DIR)=..\..\bin
$(Configuration)=Release
$(PlatformName)=x64
..\..\bin\Release\x64\
```

Intermediate Directory
```
Expression：
tmp\$(TargetName)\$(Configuration)\$(PlatformName)\
Value：
$(TargetName)=glew32
$(Configuration)=Release
$(PlatformName)=x64
tmp\glew32\Release\x64\
```

$(VC_ExecutablePath_x64)
```
Expression：
$(VC_ExecutablePath_x64)
Value：
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.38.33130\bin\HostX64\x64
```

$(INCLUDE_DIR)
```
Expression：
$(INCLUDE_DIR)
Value：
..\..\include
```

$(ProjectDir)
```
Expression：
$(ProjectDir)
Value：
D:\work\glew_work\glew-2.2.0\build\vc15\
```
Preprocessor Definitions
```
glew_shared:
WIN32
WIN32_LEAN_AND_MEAN
VC_EXTRALEAN
GLEW_BUILD

glew_static:
WIN32
NDEBUG
_LIB
WIN32_LEAN_AND_MEAN
GLEW_STATIC

glewinfo:
WIN32
WIN32_LEAN_AND_MEAN
GLEW_STATIC
_CRT_SECURE_NO_WARNINGS

visualinfo:
WIN32
WIN32_LEAN_AND_MEAN
GLEW_STATIC
_CRT_SECURE_NO_WARNINGS
```

## CMake

glew.pc.in
```cmake
prefix=@prefix@
exec_prefix=${prefix}
libdir=@libdir@
includedir=${prefix}/include

Name: glew
Description: The OpenGL Extension Wrangler library
Version: @version@
Cflags: -I${includedir} @cflags@
Libs: -L${libdir} -l@libname@ @libgl@
Requires: @requireslib@
```

glew-config.cmake
```cmake
# This config-module creates the following import libraries:
#
# - GLEW::glew shared lib
# - GLEW::glew_s static lib
#
# Additionally GLEW::GLEW will be created as an
# copy of either the shared (default) or the static libs.
#
# Dependending on the setting of BUILD_SHARED_LIBS at GLEW build time
# either the static or shared versions may not be available.
#
# Set GLEW_USE_STATIC_LIBS to OFF or ON to force using the shared
# or static lib for GLEW::GLEW 
#

include(${CMAKE_CURRENT_LIST_DIR}/glew-targets.cmake)
include(${CMAKE_CURRENT_LIST_DIR}/CopyImportedTargetProperties.cmake)

# decide which import library (glew/glew_s)
# needs to be copied to GLEW::GLEW
set(_glew_target_postfix "")
set(_glew_target_type SHARED)
if(DEFINED GLEW_USE_STATIC_LIBS)
  # if defined, use only static or shared
  if(GLEW_USE_STATIC_LIBS)
    set(_glew_target_postfix "_s")
  endif()
  # else use static only if no shared
elseif(NOT TARGET GLEW::glew AND TARGET GLEW::glew_s)
  set(_glew_target_postfix "_s")
endif()
if(_glew_target_postfix STREQUAL "")
  set(_glew_target_type SHARED)
else()
  set(_glew_target_type STATIC)
endif()

# CMake doesn't allow creating ALIAS lib for an IMPORTED lib
# so create imported ones and copy the properties
foreach(_glew_target glew)
  set(_glew_src_target "GLEW::${_glew_target}${_glew_target_postfix}")
  string(TOUPPER "GLEW::${_glew_target}" _glew_dest_target)
  if(TARGET ${_glew_dest_target})
    get_target_property(_glew_previous_src_target ${_glew_dest_target}
      _GLEW_SRC_TARGET)
    if(NOT _glew_previous_src_target STREQUAL _glew_src_target)
      message(FATAL_ERROR "find_package(GLEW) was called the second time with "
        "different GLEW_USE_STATIC_LIBS setting. Previously, "
        "`glew-config.cmake` created ${_glew_dest_target} as a copy of "
        "${_glew_previous_src_target}. Now it attempted to copy it from "
        "${_glew_src_target}. ")
    endif()
  else()
    add_library(${_glew_dest_target} ${_glew_target_type} IMPORTED)
    # message(STATUS "add_library(${_glew_dest_target} ${_glew_target_type} IMPORTED)")
    copy_imported_target_properties(${_glew_src_target} ${_glew_dest_target})
    set_target_properties(${_glew_dest_target} PROPERTIES
      _GLEW_SRC_TARGET ${_glew_src_target})
  endif()
endforeach()
```

CopyImportedTargetProperties.cmake
```cmake
#.rst:
# CopyImportedTargetProperties
# --------------------------
#
# Copies the `INTERFACE*` and `IMPORTED*` properties from a target
# to another one.
# This function can be used to duplicate an `IMPORTED` or an `ALIAS` library
# with a different name since ``add_library(... ALIAS ...)`` does not work
# for those targets.
#
# ::
#
#   copy_imported_target_properties(<source-target> <destination-target>)
#
# The function copies all the `INTERFACE*` and `IMPORTED*` target
# properties from `<source-target>` to `<destination-target>`.
#
# The function uses the `IMPORTED_CONFIGURATIONS` property to determine
# which configuration-dependent properties should be copied
# (`IMPORTED_LOCATION_<CONFIG>`, etc...)
#
# Example:
#
# Internally the CMake project of ZLIB builds the ``zlib`` and
# ``zlibstatic`` targets which can be exported in the ``ZLIB::`` namespace
# with the ``install(EXPORT ...)`` command.
#
# The config-module will then create the import libraries ``ZLIB::zlib`` and
# ``ZLIB::zlibstatic``. To use ``ZLIB::zlibstatic`` under the standard
# ``ZLIB::ZLIB`` name we need to create the ``ZLIB::ZLIB`` imported library
# and copy the appropriate properties:
#
#   add_library(ZLIB::ZLIB STATIC IMPORTED)
#   copy_imported_target_properties(ZLIB::zlibstatic ZLIB::ZLIB)
#

function(copy_imported_target_properties src_target dest_target)

    set(config_dependent_props
        IMPORTED_IMPLIB
        IMPORTED_LINK_DEPENDENT_LIBRARIES
        IMPORTED_LINK_INTERFACE_LANGUAGES
        IMPORTED_LINK_INTERFACE_LIBRARIES
        IMPORTED_LINK_INTERFACE_MULTIPLICITY
        IMPORTED_LOCATION
        IMPORTED_NO_SONAME
        IMPORTED_SONAME
    )

    # copy configuration-independent properties
    foreach(prop
        ${config_dependent_props}
        IMPORTED_CONFIGURATIONS
        INTERFACE_AUTOUIC_OPTIONS
        INTERFACE_COMPILE_DEFINITIONS
        INTERFACE_COMPILE_FEATURES
        INTERFACE_COMPILE_OPTIONS
        INTERFACE_INCLUDE_DIRECTORIES
        INTERFACE_LINK_LIBRARIES
        INTERFACE_POSITION_INDEPENDENT_CODE
        INTERFACE_SOURCES
        INTERFACE_SYSTEM_INCLUDE_DIRECTORIES
    )
        get_property(is_set TARGET ${src_target} PROPERTY ${prop} SET)
        if(is_set)
            get_target_property(v ${src_target} ${prop})
            set_target_properties(${dest_target} PROPERTIES ${prop} "${v}")
            # message(STATUS "set_target_properties(${dest_target} PROPERTIES ${prop} ${v})")
        endif()
    endforeach()

    # copy configuration-dependent properties
    get_target_property(imported_configs ${src_target}
        IMPORTED_CONFIGURATIONS)

    foreach(config ${imported_configs})
        foreach(prop_prefix ${config_dependent_props})
            set(prop ${prop_prefix}_${config})
            get_property(is_set TARGET ${src_target} PROPERTY ${prop} SET)
            if(is_set)
                get_target_property(v ${src_target} ${prop})
                set_target_properties(${dest_target}
                    PROPERTIES ${prop} "${v}")
                # message(STATUS "set_target_properties(${dest_target} PROPERTIES ${prop} ${v})")
            endif()
        endforeach()
    endforeach()
endfunction()
```
## glew-targets.cmake code segment

```cmake
# Create imported target GLEW::glew
add_library(GLEW::glew SHARED IMPORTED)

set_target_properties(GLEW::glew PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
  INTERFACE_LINK_LIBRARIES "opengl32;glu32"
)

# Create imported target GLEW::glew_s
add_library(GLEW::glew_s STATIC IMPORTED)

set_target_properties(GLEW::glew_s PROPERTIES
  INTERFACE_COMPILE_DEFINITIONS "GLEW_STATIC"
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
  INTERFACE_LINK_LIBRARIES "opengl32;glu32"
)
```

## glew-targets-release.cmake code segment

```cmake
# Import target "GLEW::glew" for configuration "Release"
set_property(TARGET GLEW::glew APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(GLEW::glew PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/glew32.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/glew32.dll"
  )

list(APPEND _cmake_import_check_targets GLEW::glew )
list(APPEND _cmake_import_check_files_for_GLEW::glew "${_IMPORT_PREFIX}/lib/glew32.lib" "${_IMPORT_PREFIX}/bin/glew32.dll" )

# Import target "GLEW::glew_s" for configuration "Release"
set_property(TARGET GLEW::glew_s APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(GLEW::glew_s PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C;RC"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libglew32.lib"
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

## Print GLEW import targets

```cmake
cmake_minimum_required(VERSION 3.25)

project ( testprj )
find_package ( GLEW )
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
PS D:\work\glew_work\ModernGlew\codes\cmakeinfo\05\build> cmake ..
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
-- Found GLEW: C:/dev/glew/lib/cmake/glew/glew-config.cmake
-- my_import_targets=GLEW::glew;GLEW::glew_s;GLEW::GLEW
-- Configuring done (5.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/glew_work/ModernGlew/codes/cmakeinfo/05/build
```

## Print GLEW target GLEW::glew properties

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

find_package ( GLEW )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

set ( props
  INTERFACE_COMPILE_DEFINITIONS
  INTERFACE_INCLUDE_DIRECTORIES
  INTERFACE_LINK_LIBRARIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE
  IMPORTED_IMPLIB_RELEASE
  IMPORTED_LOCATION_RELEASE
)

print_target_properties( GLEW::glew ${props} )
```

results:
```
PS D:\work\glew_work\ModernGlew\codes\cmakeinfo\06\build> cmake ..
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
-- Found GLEW: C:/dev/glew/lib/cmake/glew/glew-config.cmake
-- my_import_targets=GLEW::glew;GLEW::glew_s;GLEW::GLEW
-- targetname = GLEW::glew
--
 Properties for TARGET GLEW::glew:
   GLEW::glew.INTERFACE_COMPILE_DEFINITIONS = <NOTFOUND>

--
 Properties for TARGET GLEW::glew:
   GLEW::glew.INTERFACE_INCLUDE_DIRECTORIES = "C:/dev/glew/include"

--
 Properties for TARGET GLEW::glew:
   GLEW::glew.INTERFACE_LINK_LIBRARIES = "opengl32;glu32"

--
 Properties for TARGET GLEW::glew:
   GLEW::glew.IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE = <NOTFOUND>

--
 Properties for TARGET GLEW::glew:
   GLEW::glew.IMPORTED_IMPLIB_RELEASE = "C:/dev/glew/lib/glew32.lib"

--
 Properties for TARGET GLEW::glew:
   GLEW::glew.IMPORTED_LOCATION_RELEASE = "C:/dev/glew/bin/glew32.dll"

-- Configuring done (5.1s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/glew_work/ModernGlew/codes/cmakeinfo/06/build
```





# FFmpeg

## FFmpeg Link

-  [FFmpeg homepage](https://ffmpeg.org/).
-  [How to Use FFMpeg in Python (with Examples)](https://www.bannerbear.com/blog/how-to-use-ffmpeg-in-python-with-examples/).
-  [【FFmpeg入门教程】C/C++程序员零基础入门音视频流媒体开发教程](https://www.bilibili.com/video/BV16V4y1K7kt/).
-  [FFmpeg 4.3 音视频基础到工程应用-多路H265监控录放C++开发](https://www.bilibili.com/video/BV1Qt4y1a7t1/).
-  [【FFmpeg6.0版本】音视频入门系列](https://www.bilibili.com/video/BV1Mj41177Eq/).
-  [ffmpeg的源码结构和它的样例代码详解](https://www.bilibili.com/video/BV1aQ4y1W7RZ/).
-  [FFmpeg原理介绍](https://ffmpeg.xianwaizhiyin.net/).

## FFMPEGTargets.cmake
###FFMPEGTargets.cmake
```cmake
# Generated by CMake

if("${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION}" LESS 2.8)
   message(FATAL_ERROR "CMake >= 2.8.0 required")
endif()
if(CMAKE_VERSION VERSION_LESS "2.8.3")
   message(FATAL_ERROR "CMake >= 2.8.3 required")
endif()
cmake_policy(PUSH)
cmake_policy(VERSION 2.8.3...3.27)
#----------------------------------------------------------------
# Generated CMake target import file.
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Protect against multiple inclusion, which would fail when already imported targets are added once more.
set(_cmake_targets_defined "")
set(_cmake_targets_not_defined "")
set(_cmake_expected_targets "")
foreach(_cmake_expected_target IN ITEMS FFMPEG::FFMPEG)
  message( STATUS "FFMPEG::FFMPEG _cmake_expected_targets=${_cmake_expected_target}")
  list(APPEND _cmake_expected_targets "${_cmake_expected_target}")
  if(TARGET "${_cmake_expected_target}")
    list(APPEND _cmake_targets_defined "${_cmake_expected_target}")
  else()
    list(APPEND _cmake_targets_not_defined "${_cmake_expected_target}")
  endif()
endforeach()
unset(_cmake_expected_target)
if(_cmake_targets_defined STREQUAL _cmake_expected_targets)
  unset(_cmake_targets_defined)
  unset(_cmake_targets_not_defined)
  unset(_cmake_expected_targets)
  unset(CMAKE_IMPORT_FILE_VERSION)
  cmake_policy(POP)
  return()
endif()
if(NOT _cmake_targets_defined STREQUAL "")
  string(REPLACE ";" ", " _cmake_targets_defined_text "${_cmake_targets_defined}")
  string(REPLACE ";" ", " _cmake_targets_not_defined_text "${_cmake_targets_not_defined}")
  message(FATAL_ERROR "Some (but not all) targets in this export set were already defined.\nTargets Defined: ${_cmake_targets_defined_text}\nTargets not yet defined: ${_cmake_targets_not_defined_text}\n")
endif()
unset(_cmake_targets_defined)
unset(_cmake_targets_not_defined)
unset(_cmake_expected_targets)


# Compute the installation prefix relative to this file.
get_filename_component(_IMPORT_PREFIX "${CMAKE_CURRENT_LIST_FILE}" PATH)
get_filename_component(_IMPORT_PREFIX "${_IMPORT_PREFIX}" PATH)
get_filename_component(_IMPORT_PREFIX "${_IMPORT_PREFIX}" PATH)
get_filename_component(_IMPORT_PREFIX "${_IMPORT_PREFIX}" PATH)
if(_IMPORT_PREFIX STREQUAL "/")
  set(_IMPORT_PREFIX "")
endif()

set ( complist
  avcodec
  avdevice
  avfilter
  avformat
  avutil
  postproc
  swresample
  swscale
)

set( package_name FFMPEG )

set ( ${package_name}_INCLUDE_DIRS "${_IMPORT_PREFIX}/include" )

foreach( item ${complist} )
  # Create imported target ${package_name}::${item}
  add_library(${package_name}::${item} SHARED IMPORTED)
  
  set_target_properties(${package_name}::${item} PROPERTIES
    INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
  )
 
  set ( ${package_name}_${item}_INCLUDE_DIR "${_IMPORT_PREFIX}/include" )
endforeach()

# Load information for each installed configuration.
file(GLOB _cmake_config_files "${CMAKE_CURRENT_LIST_DIR}/FFMPEGTargets-*.cmake")
foreach(_cmake_config_file IN LISTS _cmake_config_files)
  include("${_cmake_config_file}")
endforeach()
unset(_cmake_config_file)
unset(_cmake_config_files)

# Cleanup temporary variables.
set(_IMPORT_PREFIX)

# Loop over all imported files and verify that they actually exist
foreach(_cmake_target IN LISTS _cmake_import_check_targets)
  if(CMAKE_VERSION VERSION_LESS "3.28"
      OR NOT DEFINED _cmake_import_check_xcframework_for_${_cmake_target}
      OR NOT IS_DIRECTORY "${_cmake_import_check_xcframework_for_${_cmake_target}}")
    foreach(_cmake_file IN LISTS "_cmake_import_check_files_for_${_cmake_target}")
      if(NOT EXISTS "${_cmake_file}")
        message(FATAL_ERROR "The imported target \"${_cmake_target}\" references the file
   \"${_cmake_file}\"
but this file does not exist.  Possible reasons include:
* The file was deleted, renamed, or moved to another location.
* An install or uninstall procedure did not complete successfully.
* The installation package was faulty and contained
   \"${CMAKE_CURRENT_LIST_FILE}\"
but not all the files it references.
")
      endif()
    endforeach()
  endif()
  unset(_cmake_file)
  unset("_cmake_import_check_files_for_${_cmake_target}")
endforeach()
unset(_cmake_target)
unset(_cmake_import_check_targets)

# This file does not depend on other imported targets which have
# been exported from the same project but in a separate export set.

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
cmake_policy(POP)
```

### FFMPEGTargets-release.cmake
```cmake
#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

set ( dllnamelist
  avcodec-61
  avdevice-61
  avfilter-10
  avformat-61
  avutil-59
  postproc-58
  swresample-5
  swscale-8
)

message( STATUS "complist in FFMPEGTargets-release.cmake=${complist}" )

foreach( item itemdllname IN ZIP_LISTS complist dllnamelist )
  # Import target "${package_name}::${item}" for configuration "Release"
  set_property(TARGET ${package_name}::${item} APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
  set_target_properties(${package_name}::${item} PROPERTIES
    IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/${item}.lib"
    IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/${itemdllname}.dll"
    )  
  
  list(APPEND _cmake_import_check_targets ${package_name}::{item} )
  list(APPEND _cmake_import_check_files_for_${package_name}::{item} "${_IMPORT_PREFIX}/lib/${item}.lib" )
  list(APPEND ${package_name}_LIBRARIES "${_IMPORT_PREFIX}/lib/${item}.lib" )
  set( ${package_name}_${item}_LIBRARY "${_IMPORT_PREFIX}/lib/${item}.lib" )
endforeach()

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(${package_name}
  REQUIRED_VARS ${package_name}_INCLUDE_DIRS ${package_name}_LIBRARIES
)

foreach( item ${complist} )
  find_package_handle_standard_args(${package_name}_${item}
    REQUIRED_VARS ${package_name}_${item}_INCLUDE_DIR ${package_name}_${item}_LIBRARY
  )
endforeach()

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
```

### FFMPEGConfig.cmake
```cmake
####### Expanded from @PACKAGE_INIT@ by configure_package_config_file() #######
####### Any changes to this file will be overwritten by the next CMake run ####
####### The input file was ffmpegConfig.cmake.in                           ########

get_filename_component(PACKAGE_PREFIX_DIR "${CMAKE_CURRENT_LIST_DIR}/../../../" ABSOLUTE)

####################################################################################

include ( "${CMAKE_CURRENT_LIST_DIR}/FFMPEGTargets.cmake" )
```

### FFMPEGConfigVersion.cmake
```cmake
# This is a basic version file for the Config-mode of find_package().
# It is used by write_basic_package_version_file() as input file for configure_file()
# to create a version-file which can be installed along a config.cmake file.
#
# The created file sets PACKAGE_VERSION_EXACT if the current version string and
# the requested version string are exactly the same and it sets
# PACKAGE_VERSION_COMPATIBLE if the current version is >= requested version.
# The variable CVF_VERSION must be set before calling configure_file().

set(PACKAGE_VERSION "7.0-full_build-www.gyan.dev")

if (PACKAGE_FIND_VERSION_RANGE)
  # Package version must be in the requested version range
  if ((PACKAGE_FIND_VERSION_RANGE_MIN STREQUAL "INCLUDE" AND PACKAGE_VERSION VERSION_LESS PACKAGE_FIND_VERSION_MIN)
      OR ((PACKAGE_FIND_VERSION_RANGE_MAX STREQUAL "INCLUDE" AND PACKAGE_VERSION VERSION_GREATER PACKAGE_FIND_VERSION_MAX)
        OR (PACKAGE_FIND_VERSION_RANGE_MAX STREQUAL "EXCLUDE" AND PACKAGE_VERSION VERSION_GREATER_EQUAL PACKAGE_FIND_VERSION_MAX)))
    set(PACKAGE_VERSION_COMPATIBLE FALSE)
  else()
    set(PACKAGE_VERSION_COMPATIBLE TRUE)
  endif()
else()
  if(PACKAGE_VERSION VERSION_LESS PACKAGE_FIND_VERSION)
    set(PACKAGE_VERSION_COMPATIBLE FALSE)
  else()
    set(PACKAGE_VERSION_COMPATIBLE TRUE)
    if(PACKAGE_FIND_VERSION STREQUAL PACKAGE_VERSION)
      set(PACKAGE_VERSION_EXACT TRUE)
    endif()
  endif()
endif()


# if the installed or the using project don't have CMAKE_SIZEOF_VOID_P set, ignore it:
if("${CMAKE_SIZEOF_VOID_P}" STREQUAL "" OR "8" STREQUAL "")
  return()
endif()

# check that the installed version has the same 32/64bit-ness as the one which is currently searching:
if(NOT CMAKE_SIZEOF_VOID_P STREQUAL "8")
  math(EXPR installedBits "8 * 8")
  set(PACKAGE_VERSION "${PACKAGE_VERSION} (${installedBits}bit)")
  set(PACKAGE_VERSION_UNSUITABLE TRUE)
endif()
```

## MSVC

### ffmpegTargets.cmake
```cmake
# Generated by CMake

if("${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION}" LESS 2.8)
   message(FATAL_ERROR "CMake >= 2.8.0 required")
endif()
if(CMAKE_VERSION VERSION_LESS "2.8.3")
   message(FATAL_ERROR "CMake >= 2.8.3 required")
endif()
cmake_policy(PUSH)
cmake_policy(VERSION 2.8.3...3.27)
#----------------------------------------------------------------
# Generated CMake target import file.
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Protect against multiple inclusion, which would fail when already imported targets are added once more.
set(_cmake_targets_defined "")
set(_cmake_targets_not_defined "")
set(_cmake_expected_targets "")
foreach(_cmake_expected_target IN ITEMS ffmpeg::ffmpeg)
  list(APPEND _cmake_expected_targets "${_cmake_expected_target}")
  if(TARGET "${_cmake_expected_target}")
    list(APPEND _cmake_targets_defined "${_cmake_expected_target}")
  else()
    list(APPEND _cmake_targets_not_defined "${_cmake_expected_target}")
  endif()
endforeach()
unset(_cmake_expected_target)
if(_cmake_targets_defined STREQUAL _cmake_expected_targets)
  unset(_cmake_targets_defined)
  unset(_cmake_targets_not_defined)
  unset(_cmake_expected_targets)
  unset(CMAKE_IMPORT_FILE_VERSION)
  cmake_policy(POP)
  return()
endif()
if(NOT _cmake_targets_defined STREQUAL "")
  string(REPLACE ";" ", " _cmake_targets_defined_text "${_cmake_targets_defined}")
  string(REPLACE ";" ", " _cmake_targets_not_defined_text "${_cmake_targets_not_defined}")
  message(FATAL_ERROR "Some (but not all) targets in this export set were already defined.\nTargets Defined: ${_cmake_targets_defined_text}\nTargets not yet defined: ${_cmake_targets_not_defined_text}\n")
endif()
unset(_cmake_targets_defined)
unset(_cmake_targets_not_defined)
unset(_cmake_expected_targets)


# Compute the installation prefix relative to this file.
get_filename_component(_IMPORT_PREFIX "${CMAKE_CURRENT_LIST_FILE}" PATH)
get_filename_component(_IMPORT_PREFIX "${_IMPORT_PREFIX}" PATH)
get_filename_component(_IMPORT_PREFIX "${_IMPORT_PREFIX}" PATH)
get_filename_component(_IMPORT_PREFIX "${_IMPORT_PREFIX}" PATH)
if(_IMPORT_PREFIX STREQUAL "/")
  set(_IMPORT_PREFIX "")
endif()

# Create imported target ffmpeg::avcodec
add_library(ffmpeg::avcodec SHARED IMPORTED)

set_target_properties(ffmpeg::avcodec PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)

# Create imported target ffmpeg::avdevice
add_library(ffmpeg::avdevice SHARED IMPORTED)

set_target_properties(ffmpeg::avdevice PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)

# Create imported target ffmpeg::avfilter
add_library(ffmpeg::avfilter SHARED IMPORTED)

set_target_properties(ffmpeg::avfilter PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)


# Create imported target ffmpeg::avformat
add_library(ffmpeg::avformat SHARED IMPORTED)

set_target_properties(ffmpeg::avformat PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)

# Create imported target ffmpeg::avutil
add_library(ffmpeg::avutil SHARED IMPORTED)

set_target_properties(ffmpeg::avutil PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)


# Create imported target ffmpeg::postproc
add_library(ffmpeg::postproc SHARED IMPORTED)

set_target_properties(ffmpeg::postproc PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)

# Create imported target ffmpeg::swscale
add_library(ffmpeg::swscale SHARED IMPORTED)

set_target_properties(ffmpeg::swscale PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)

# Create imported target ffmpeg::swresample
add_library(ffmpeg::swresample SHARED IMPORTED)

set_target_properties(ffmpeg::swresample PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include"
)

# Load information for each installed configuration.
file(GLOB _cmake_config_files "${CMAKE_CURRENT_LIST_DIR}/ffmpegTargets-*.cmake")
foreach(_cmake_config_file IN LISTS _cmake_config_files)
  include("${_cmake_config_file}")
endforeach()
unset(_cmake_config_file)
unset(_cmake_config_files)

# Cleanup temporary variables.
set(_IMPORT_PREFIX)

# Loop over all imported files and verify that they actually exist
foreach(_cmake_target IN LISTS _cmake_import_check_targets)
  if(CMAKE_VERSION VERSION_LESS "3.28"
      OR NOT DEFINED _cmake_import_check_xcframework_for_${_cmake_target}
      OR NOT IS_DIRECTORY "${_cmake_import_check_xcframework_for_${_cmake_target}}")
    foreach(_cmake_file IN LISTS "_cmake_import_check_files_for_${_cmake_target}")
      if(NOT EXISTS "${_cmake_file}")
        message(FATAL_ERROR "The imported target \"${_cmake_target}\" references the file
   \"${_cmake_file}\"
but this file does not exist.  Possible reasons include:
* The file was deleted, renamed, or moved to another location.
* An install or uninstall procedure did not complete successfully.
* The installation package was faulty and contained
   \"${CMAKE_CURRENT_LIST_FILE}\"
but not all the files it references.
")
      endif()
    endforeach()
  endif()
  unset(_cmake_file)
  unset("_cmake_import_check_files_for_${_cmake_target}")
endforeach()
unset(_cmake_target)
unset(_cmake_import_check_targets)

# This file does not depend on other imported targets which have
# been exported from the same project but in a separate export set.

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
cmake_policy(POP)
```

### ffmpegTargets-release.cmake
```cmake
#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "ffmpeg::avcodec" for configuration "Release"
set_property(TARGET ffmpeg::avcodec APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::avcodec PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/avcodec.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/avcodec.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::avcodec )
list(APPEND _cmake_import_check_files_for_ffmpeg::avcodec "${_IMPORT_PREFIX}/lib/avcodec.lib" )

# Import target "ffmpeg::avdevice" for configuration "Release"
set_property(TARGET ffmpeg::avdevice APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::avdevice PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/avdevice.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/avdevice.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::avdevice )
list(APPEND _cmake_import_check_files_for_ffmpeg::avdevice "${_IMPORT_PREFIX}/lib/avdevice.lib" )

# Import target "ffmpeg::avfilter" for configuration "Release"
set_property(TARGET ffmpeg::avfilter APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::avfilter PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/avfilter.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/avfilter.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::avfilter )
list(APPEND _cmake_import_check_files_for_ffmpeg::avfilter "${_IMPORT_PREFIX}/lib/avfilter.lib" )

# Import target "ffmpeg::avformat" for configuration "Release"
set_property(TARGET ffmpeg::avformat APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::avformat PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/avformat.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/avformat.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::avformat )
list(APPEND _cmake_import_check_files_for_ffmpeg::avformat "${_IMPORT_PREFIX}/lib/avformat.lib" )

# Import target "ffmpeg::avutil" for configuration "Release"
set_property(TARGET ffmpeg::avutil APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::avutil PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/avutil.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/avutil.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::avutil )
list(APPEND _cmake_import_check_files_for_ffmpeg::avutil "${_IMPORT_PREFIX}/lib/avutil.lib" )


# Import target "ffmpeg::postproc" for configuration "Release"
set_property(TARGET ffmpeg::postproc APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::postproc PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/postproc.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/postproc.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::postproc )
list(APPEND _cmake_import_check_files_for_ffmpeg::postproc "${_IMPORT_PREFIX}/lib/postproc.lib" )

# Import target "ffmpeg::swresample" for configuration "Release"
set_property(TARGET ffmpeg::swresample APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::swresample PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/swresample.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/swresample.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::swresample )
list(APPEND _cmake_import_check_files_for_ffmpeg::swresample "${_IMPORT_PREFIX}/lib/swresample.lib" )


# Import target "ffmpeg::swscale" for configuration "Release"
set_property(TARGET ffmpeg::swscale APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(ffmpeg::swscale PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/swscale.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/swscale.dll"
  )  

list(APPEND _cmake_import_check_targets ffmpeg::swscale )
list(APPEND _cmake_import_check_files_for_ffmpeg::swscale "${_IMPORT_PREFIX}/lib/swscale.lib" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
```

### ffmpegConfig.cmake
```cmake

####### Expanded from @PACKAGE_INIT@ by configure_package_config_file() #######
####### Any changes to this file will be overwritten by the next CMake run ####
####### The input file was ffmpegConfig.cmake.in                           ########

get_filename_component(PACKAGE_PREFIX_DIR "${CMAKE_CURRENT_LIST_DIR}/../../../" ABSOLUTE)

####################################################################################

include ( "${CMAKE_CURRENT_LIST_DIR}/ffmpegTargets.cmake" )
```

### ffmpegConfigVersion.cmake
```cmake
# This is a basic version file for the Config-mode of find_package().
# It is used by write_basic_package_version_file() as input file for configure_file()
# to create a version-file which can be installed along a config.cmake file.
#
# The created file sets PACKAGE_VERSION_EXACT if the current version string and
# the requested version string are exactly the same and it sets
# PACKAGE_VERSION_COMPATIBLE if the current version is >= requested version.
# The variable CVF_VERSION must be set before calling configure_file().

set(PACKAGE_VERSION "6.1.1")

if (PACKAGE_FIND_VERSION_RANGE)
  # Package version must be in the requested version range
  if ((PACKAGE_FIND_VERSION_RANGE_MIN STREQUAL "INCLUDE" AND PACKAGE_VERSION VERSION_LESS PACKAGE_FIND_VERSION_MIN)
      OR ((PACKAGE_FIND_VERSION_RANGE_MAX STREQUAL "INCLUDE" AND PACKAGE_VERSION VERSION_GREATER PACKAGE_FIND_VERSION_MAX)
        OR (PACKAGE_FIND_VERSION_RANGE_MAX STREQUAL "EXCLUDE" AND PACKAGE_VERSION VERSION_GREATER_EQUAL PACKAGE_FIND_VERSION_MAX)))
    set(PACKAGE_VERSION_COMPATIBLE FALSE)
  else()
    set(PACKAGE_VERSION_COMPATIBLE TRUE)
  endif()
else()
  if(PACKAGE_VERSION VERSION_LESS PACKAGE_FIND_VERSION)
    set(PACKAGE_VERSION_COMPATIBLE FALSE)
  else()
    set(PACKAGE_VERSION_COMPATIBLE TRUE)
    if(PACKAGE_FIND_VERSION STREQUAL PACKAGE_VERSION)
      set(PACKAGE_VERSION_EXACT TRUE)
    endif()
  endif()
endif()


# if the installed or the using project don't have CMAKE_SIZEOF_VOID_P set, ignore it:
if("${CMAKE_SIZEOF_VOID_P}" STREQUAL "" OR "8" STREQUAL "")
  return()
endif()

# check that the installed version has the same 32/64bit-ness as the one which is currently searching:
if(NOT CMAKE_SIZEOF_VOID_P STREQUAL "8")
  math(EXPR installedBits "8 * 8")
  set(PACKAGE_VERSION "${PACKAGE_VERSION} (${installedBits}bit)")
  set(PACKAGE_VERSION_UNSUITABLE TRUE)
endif()
```
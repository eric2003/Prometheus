# VTK CMake

## VTK_BUILD_TESTING

-  [VTK File Formats](https://docs.vtk.org/en/latest/design_documents/VTKFileFormats.html).

VTK-9.3.0\CMakeLists.txt
```cmake
include(vtkCompilerChecks)
include(vtkCompilerPlatformFlags)
include(vtkCompilerExtraFlags)
include(vtkCompilerWarningFlags)
include(vtkInitializeBuildType)
include(vtkSupportMacros)
include(vtkDownload)
include(vtkSanitize)
include(vtkTesting)
include(vtkMobileDevices)
include(vtkWrapSettings)
include(vtkCrossCompiling)
include(vtkObjectFactory)
```


```cmake
if (VTK_BUILD_TESTING)
  if (NOT VTK_DATA_STORE)
    # These checks must be synchronized with vtkExternalData.cmake
    if (NOT EXISTS "${VTK_SOURCE_DIR}/.ExternalData/README.rst" AND
        NOT IS_DIRECTORY "${CMAKE_SOURCE_DIR}/../VTKExternalData" AND
        NOT IS_DIRECTORY "${CMAKE_SOURCE_DIR}/../ExternalData" AND
        NOT DEFINED "ENV{VTKExternalData_OBJECT_STORES}" AND
        NOT DEFINED "ENV{ExternalData_OBJECT_STORES}")

      # The file .ExternalData/README.rst exists in the VTK git repository
      # but is not included in the VTK-x.y.z.tar.gz release tarball, only
      # in the VTKData-x.y.z.tar.gz tarball.
      message(FATAL_ERROR "VTK_BUILD_TESTING is ${VTK_BUILD_TESTING}, but "
              "there is no ExternalData directory! Please download VTKData, "
              "which contains an .ExternalData directory that must go into "
              "your VTK source directory (including the leading dot).")
    endif ()
  endif ()

  include(vtkExternalData)
  include(CTest)
  set_property(CACHE BUILD_TESTING
    PROPERTY
      TYPE INTERNAL)
  set(BUILD_TESTING ON)
else ()
  set(BUILD_TESTING OFF)
endif ()
```

VTK_FORBID_DOWNLOADS
```cmake
if (VTK_FORBID_DOWNLOADS AND VTK_BUILD_TESTING)
  message(STATUS
    "Module testing will fail due to `VTK_FORBID_DOWNLOADS` without a local "
    "copy of the testing data.")
endif ()
```

vtkExternalData.cmake
```cmake
include(ExternalData)

if(NOT VTK_DATA_STORE)
  # Select a default from the following.
  set(vtk_data_store_default "")
  if(EXISTS "${VTK_SOURCE_DIR}/.ExternalData/config/store")
    # Configuration left by developer setup script.
    file(STRINGS "${VTK_SOURCE_DIR}/.ExternalData/config/store"
      vtk_data_store_default LIMIT_COUNT 1 LIMIT_INPUT 1024)
  elseif(IS_DIRECTORY "${CMAKE_SOURCE_DIR}/../VTKExternalData")
    # Adjacent directory created by user.
    get_filename_component(vtk_data_store_default
      "${CMAKE_SOURCE_DIR}/../VTKExternalData" ABSOLUTE)
  elseif(IS_DIRECTORY "${CMAKE_SOURCE_DIR}/../ExternalData")
    # Generic adjacent directory created by user.
    get_filename_component(vtk_data_store_default
      "${CMAKE_SOURCE_DIR}/../ExternalData" ABSOLUTE)
  elseif(DEFINED "ENV{VTKExternalData_OBJECT_STORES}")
    # The VTKExternalData environment variable.
    file(TO_CMAKE_PATH "$ENV{VTKExternalData_OBJECT_STORES}" vtk_data_store_default)
  elseif(DEFINED "ENV{ExternalData_OBJECT_STORES}")
    # Generic ExternalData environment variable.
    file(TO_CMAKE_PATH "$ENV{ExternalData_OBJECT_STORES}" vtk_data_store_default)
  endif()
endif()
```

## vtk_module_find_package FFMPEG

```cmake
vtk_module_find_package(
  PACKAGE FFMPEG
  VERSION 2.3.3
  FORWARD_VERSION_REQ MINOR
  COMPONENTS
    avformat
    avcodec
    avutil
    swscale
  OPTIONAL_COMPONENTS
    swresample)

set(classes
  vtkFFMPEGWriter)

set_source_files_properties(vtkFFMPEGWriter.cxx
  PROPERTIES
    COMPILE_DEFINITIONS __STDC_CONSTANT_MACROS)

# vtkFFMPEGVideoSource requires ffmpeg 3.1 or later.
if (NOT FFMPEG_VERSION VERSION_LESS "3.1")
  list(APPEND classes
    vtkFFMPEGVideoSource)
endif ()

set(ffmpeg_libraries)
if (NOT FFMPEG_VERSION VERSION_LESS "5.0")
  if (NOT FFMPEG_swresample_FOUND)
    message(FATAL_ERROR
      "FFMPEG 5.0 requires the `swresample` library.")
  endif ()

  list(APPEND ffmpeg_libraries
    FFMPEG::swresample)
endif ()

vtk_module_add_module(VTK::IOFFMPEG
  CLASSES ${classes})
vtk_module_link(VTK::IOFFMPEG
  PRIVATE
    FFMPEG::avformat
    FFMPEG::avcodec
    FFMPEG::avutil
    FFMPEG::swscale
    ${ffmpeg_libraries})
vtk_add_test_mangling(VTK::IOFFMPEG)

```

VTK-9.3.0/IO/FFMPEG/vtk.module
```
NAME
  VTK::IOFFMPEG
LIBRARY_NAME
  vtkIOFFMPEG
KIT
  VTK::IO
SPDX_LICENSE_IDENTIFIER
  BSD-3-Clause
SPDX_COPYRIGHT_TEXT
  Copyright (c) Ken Martin, Will Schroeder, Bill Lorensen
DEPENDS
  VTK::IOMovie
  VTK::IOVideo
PRIVATE_DEPENDS
  VTK::CommonCore
  VTK::CommonDataModel
  VTK::CommonMisc
  VTK::CommonSystem
  VTK::vtksys
TEST_DEPENDS
  VTK::ImagingCore
  VTK::ImagingSources
  VTK::InteractionStyle
  VTK::RenderingOpenGL2
  VTK::TestingCore
  VTK::TestingRendering
```
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


## VTK_MODULE_ENABLE_VTK_InfovisBoost
```
VTK_MODULE_ENABLE_VTK_InfovisBoost
VTK_MODULE_ENABLE_VTK_InfovisBoostGraphAlgorithms
VTK_MODULE_ENABLE_VTK_InfovisCore
VTK_MODULE_ENABLE_VTK_InfovisLayout
IOExportOpenGL2.
```

## Error Info

```
Cannot find vtkMultiBlockDataSet element in file
```

## VTK::FiltersParallelStatistics

```
VTK_MODULE_ENABLE_VTK_FiltersParallelStatistics
```

## Qt

```
Could not find the VTK package with the following required components:
  GUISupportQt, RenderingQt.
```

### VTK::GUISupportQt
```
VTK::GUISupportQt
VTK::RenderingQt
```

### vtkhdf5/CMakeInstallation.cmake

Wix Location
```
C:\Users\eric\.dotnet\tools\wix.exe
```

VTK-9.3.0\ThirdParty\hdf5\vtkhdf5\CMakeInstallation.cmake
```cmake
if (WIN32)
  set (PF_ENV_EXT "(x86)")
  find_program (NSIS_EXECUTABLE NSIS.exe PATHS "$ENV{ProgramFiles}\\NSIS" "$ENV{ProgramFiles${PF_ENV_EXT}}\\NSIS")
  if(NOT CPACK_WIX_ROOT)
    file(TO_CMAKE_PATH "$ENV{WIX}" CPACK_WIX_ROOT)
  endif ()
  find_program (WIX_EXECUTABLE candle  PATHS "${CPACK_WIX_ROOT}/bin")
endif ()
```

modified
```cmake
if (WIN32)
  set (PF_ENV_EXT "(x86)")
  find_program (NSIS_EXECUTABLE NSIS.exe PATHS "$ENV{ProgramFiles}\\NSIS" "$ENV{ProgramFiles${PF_ENV_EXT}}\\NSIS")
  if(NOT CPACK_WIX_ROOT)
    file(TO_CMAKE_PATH "$ENV{WIX}" CPACK_WIX_ROOT)
  endif ()
  find_program (WIX_EXECUTABLE wix PATHS "${CPACK_WIX_ROOT}")
endif ()
```

vtkStandardNewMacro(vtkStructuredGridOutlineFilter);
```cpp
vtkStructuredGridOutlineFilter* vtkStructuredGridOutlineFilter::New() {
    auto result = new vtkStructuredGridOutlineFilter; result->InitializeObjectBase(); return result;
}
```

## Examples StructuredGrid/BlankPoint
  
```
BlankPoint.obj : error LNK2019: 无法解析的外部符号 "__declspec(dllimport) public: static class vtkStructuredGridGeometryFilter *
 __cdecl vtkStructuredGridGeometryFilter::New(void)" (__imp_?New@vtkStructuredGridGeometryFilter@@SAPEAV1@XZ)，函数 main 中
引用了该符号 [D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\BlankPoint.vcxproj]
```

modify
```cmake
find_package(VTK COMPONENTS 
  CommonColor
  CommonCore
  CommonDataModel
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
)
```

add FiltersGeometry to CMake
```
find_package(VTK COMPONENTS 
  CommonColor
  CommonCore
  CommonDataModel
  FiltersGeometry
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
)
```

### VTK_ENABLE_REMOTE_MODULES

```
VTK_MODULE_ENABLE_VTK_PoissonReconstruction
VTK_MODULE_ENABLE_VTK_Powercrust
```

## About VTK Remote Modules

-  [About VTK Remote Modules](https://discourse.vtk.org/t/about-vtk-remote-modules/7821).
-  [VTK 的 Remote功能 SplineDrivenImageSlicer 修复](https://blog.csdn.net/comedate/article/details/113586539/).
-  [VTK 9.2.6源码编译Remote功能 SplineDrivenImageSlicer](https://blog.csdn.net/yonniem/article/details/131087239/).


```cmake
message(STATUS "SplineDrivenImageSlicer: Building as a Remote VTK module")
set(src
vtkSplineDrivenImageSlicer
vtkFrenetSerretFrame)

set(include
vtkSplineDrivenImageSlicer.h
vtkFrenetSerretFrame.h
)
vtk_module_add_module(VTK::SplineDrivenImageSlicer
CLASSES ${src}
HEADERS ${include}
)
```

Mudule DICOM: module.cmake
```
vtk_module(vtkDICOM
  DESCRIPTION
    "${DOCUMENTATION}"
  DEPENDS
    vtkCommonCore
    vtkCommonDataModel
    vtkCommonExecutionModel
    vtkIOImage
  PRIVATE_DEPENDS
    vtkCommonMisc
    vtkImagingCore
    vtkIOCore
    vtkzlib
  COMPILE_DEPENDS
    vtkImagingStatistics
    vtkInteractionStyle
    vtkRenderingImage
    vtkRendering${VTK_RENDERING_BACKEND}
)
```

Mudule DICOM: vtk.module
```
NAME
  VTK::DICOM
LIBRARY_NAME
  vtkDICOM
LICENSE_FILES
  Copyright.txt
GROUPS
  StandAlone
SPDX_LICENSE_IDENTIFIER
  BSD-3-Clause
SPDX_COPYRIGHT_TEXT
  Copyright (c) 2012-2023 David Gobbi
DEPENDS
  VTK::CommonCore
  VTK::CommonDataModel
  VTK::CommonExecutionModel
  VTK::IOImage
PRIVATE_DEPENDS
  VTK::CommonMisc
  VTK::ImagingCore
  VTK::IOCore
  VTK::zlib
TEST_DEPENDS
  VTK::TestingCore
```

Mudule SplineDrivenImageSlicer: module.cmake
```
vtk_module( SplineDrivenImageSlicer
  DESCRIPTION
    "${DOCUMENTATION}"
  DEPENDS
    vtkCommonCore
    vtkFiltersCore
    vtkFiltersSources
    vtkImagingCore
  TEST_DEPENDS
    vtkTestingCore
    vtkImagingSources
  KIT
    vtkRemote
)

```

Mudule SplineDrivenImageSlicer: vtk.module
```
NAME
  VTK::SplineDrivenImageSlicer
LIBRARY_NAME
  vtkSplineDrivenImageSlicer
LICENSE_FILES
  Copyright.txt
GROUPS
  StandAlone
SPDX_LICENSE_IDENTIFIER
  BSD-3-Clause
SPDX_COPYRIGHT_TEXT
  Copyright (c) 2012-2023 David Gobbi
DEPENDS
  VTK::CommonCore
  VTK::FiltersCore
  VTK::FiltersSources
  VTK::ImagingCore
TEST_DEPENDS
  VTK::TestingCore
  VTK::ImagingSources
```

SplineDrivenImageSlicer CMakeLists.txt
```cmake
message(STATUS "SplineDrivenImageSlicer: Building as a Remote VTK module")

set(Module_SRCS
  vtkFrenetSerretFrame.cxx
  vtkSplineDrivenImageSlicer.cxx  
)

## vtk_module_library(SplineDrivenImageSlicer ${Module_SRCS})

set(class_src
vtkFrenetSerretFrame
vtkSplineDrivenImageSlicer)

set(Module_include
vtkFrenetSerretFrame.h
vtkSplineDrivenImageSlicer.h
)
vtk_module_add_module(VTK::SplineDrivenImageSlicer
CLASSES ${class_src}
HEADERS ${Module_include}
)

```

## vtk_module_find_package FFMPEG Analysis

```cmake
cmake_minimum_required(VERSION 3.28)

macro (vtk_module_find_package)
  # Note: when adding arguments here, add them to the `unset` block at the end
  # of the function.
  cmake_parse_arguments(_vtk_find_package
    "PRIVATE;CONFIG_MODE"
    "PACKAGE;VERSION;FORWARD_VERSION_REQ;VERSION_VAR"
    "COMPONENTS;OPTIONAL_COMPONENTS"
    ${ARGN})
  message( STATUS "ARGN=${ARGN}" )
  set ( my_pack_name _vtk_find_package )
  message( STATUS "my_pack_name=${my_pack_name}" )
  message( STATUS "${my_pack_name}_PRIVATE=${${my_pack_name}_PRIVATE}" )
  message( STATUS "${my_pack_name}_CONFIG_MODE=${${my_pack_name}_CONFIG_MODE}" )
  message( STATUS "${my_pack_name}_PACKAGE=${${my_pack_name}_PACKAGE}" )
  message( STATUS "${my_pack_name}_VERSION=${${my_pack_name}_VERSION}" )
  message( STATUS "${my_pack_name}_FORWARD_VERSION_REQ=${${my_pack_name}_FORWARD_VERSION_REQ}" )
  message( STATUS "${my_pack_name}_VERSION_VAR=${${my_pack_name}_VERSION_VAR}" )
  message( STATUS "${my_pack_name}_COMPONENTS=${${my_pack_name}_COMPONENTS}" )
  message( STATUS "${my_pack_name}_OPTIONAL_COMPONENTS=${${my_pack_name}_OPTIONAL_COMPONENTS}" )
  message( STATUS "${my_pack_name}_UNPARSED_ARGUMENTS=${${my_pack_name}_UNPARSED_ARGUMENTS}" )
  message( STATUS "${my_pack_name}_KEYWORDS_MISSING_VALUES=${${my_pack_name}_KEYWORDS_MISSING_VALUES}" )
endmacro ()

project(testprj)

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
    swresample
)

```

typical results:
```
-- my_pack_name=_vtk_find_package
-- _vtk_find_package_PRIVATE=FALSE
-- _vtk_find_package_CONFIG_MODE=FALSE
-- _vtk_find_package_PACKAGE=FFMPEG
-- _vtk_find_package_VERSION=2.3.3
-- _vtk_find_package_FORWARD_VERSION_REQ=MINOR
-- _vtk_find_package_VERSION_VAR=
-- _vtk_find_package_COMPONENTS=avformat;avcodec;avutil;swscale
-- _vtk_find_package_OPTIONAL_COMPONENTS=swresample
-- _vtk_find_package_UNPARSED_ARGUMENTS=
-- _vtk_find_package_KEYWORDS_MISSING_VALUES=
```

## VTK-vtk-module-find-packages.cmake

```cmake
if (_vtk_module_find_package_enabled)
  set(_vtk_module_find_package_required)
  if (_vtk_module_find_package_is_required)
    set(_vtk_module_find_package_required REQUIRED)
  endif ()

  find_package(FFMPEG
    7.0-full_build-www
    
    
    ${_vtk_module_find_package_quiet}
    ${_vtk_module_find_package_required}
    COMPONENTS          avformat;avcodec;avutil;swscale
    OPTIONAL_COMPONENTS swresample)
  if (NOT FFMPEG_FOUND AND _vtk_module_find_package_fail_if_not_found)
    if (NOT ${CMAKE_FIND_PACKAGE_NAME}_FIND_QUIETLY)
      message(STATUS
        "Could not find the ${CMAKE_FIND_PACKAGE_NAME} package due to a "
        "missing dependency: FFMPEG")
    endif ()
    set("${CMAKE_FIND_PACKAGE_NAME}_IOFFMPEG_FOUND" 0)
    list(APPEND "${CMAKE_FIND_PACKAGE_NAME}_IOFFMPEG_NOT_FOUND_MESSAGE"
      "Failed to find the FFMPEG package.")
  endif ()
endif ()
```

### ./VTK-9.3.0/CMake/vtkInstallCMakePackage.cmake

```cmake
vtk_module_export_find_packages(
  CMAKE_DESTINATION "${vtk_cmake_destination}"
  FILE_NAME         "VTK-vtk-module-find-packages.cmake"
  MODULES           ${vtk_modules})
```

### _vtk_export_module_content

```cmake
      set(_vtk_export_module_content
"  find_package(${_vtk_export_package}
    ${_vtk_export_version}
    ${_vtk_export_exact_arg}
    ${_vtk_export_config_arg}
    \${_vtk_module_find_package_quiet}
    \${_vtk_module_find_package_required}
    COMPONENTS          ${_vtk_export_components}
    OPTIONAL_COMPONENTS ${_vtk_export_optional_components})
```	

results:
```cmake
  find_package(FFMPEG
    7.0-full_build-www
    
    
    ${_vtk_module_find_package_quiet}
    ${_vtk_module_find_package_required}
    COMPONENTS          avformat;avcodec;avutil;swscale
    OPTIONAL_COMPONENTS swresample)
  if (NOT FFMPEG_FOUND AND _vtk_module_find_package_fail_if_not_found)
    if (NOT ${CMAKE_FIND_PACKAGE_NAME}_FIND_QUIETLY)
      message(STATUS
        "Could not find the ${CMAKE_FIND_PACKAGE_NAME} package due to a "
        "missing dependency: FFMPEG")
    endif ()
    set("${CMAKE_FIND_PACKAGE_NAME}_IOFFMPEG_FOUND" 0)
    list(APPEND "${CMAKE_FIND_PACKAGE_NAME}_IOFFMPEG_NOT_FOUND_MESSAGE"
      "Failed to find the FFMPEG package.")
  endif ()
endif ()
```

```cmake
    foreach (_vtk_export_package IN LISTS _vtk_export_packages)
      set(_vtk_export_base_package "${_vtk_export_base}_${_vtk_export_package}")
      get_property(_vtk_export_private GLOBAL
        PROPERTY "${_vtk_export_base_package}_private")
      get_property(_vtk_export_version GLOBAL
        PROPERTY "${_vtk_export_base_package}_version")
      get_property(_vtk_export_config GLOBAL
        PROPERTY "${_vtk_export_base_package}_config")
      get_property(_vtk_export_exact GLOBAL
        PROPERTY "${_vtk_export_base_package}_exact")
      get_property(_vtk_export_components GLOBAL
        PROPERTY "${_vtk_export_base_package}_components")
      get_property(_vtk_export_optional_components GLOBAL
        PROPERTY "${_vtk_export_base_package}_optional_components")
      get_property(_vtk_export_optional_components_found GLOBAL
        PROPERTY "${_vtk_export_base_package}_optional_components_found")
```

```cmake
  foreach (_vtk_export_module IN LISTS _vtk_export_MODULES)
    get_property(_vtk_export_target_name GLOBAL
      PROPERTY "_vtk_module_${_vtk_export_module}_target_name")
    # Use the export name of the target if it has one set.
    get_property(_vtk_export_target_has_export_name
      TARGET    "${_vtk_export_target_name}"
      PROPERTY  EXPORT_NAME SET)
    if (_vtk_export_target_has_export_name)
      get_property(_vtk_export_target_name
        TARGET    "${_vtk_export_target_name}"
        PROPERTY  EXPORT_NAME)
    endif ()
    set(_vtk_export_base "_vtk_module_find_package_${_vtk_export_module}")
    get_property(_vtk_export_packages GLOBAL
      PROPERTY "${_vtk_export_base}")
    if (NOT _vtk_export_packages)
      continue ()
    endif ()
```	

### vtk_module_export_find_packages
```cmake
  message("_vtk_export_install_file=${_vtk_export_install_file}")
  message("_vtk_export_CMAKE_DESTINATION=${_vtk_export_CMAKE_DESTINATION}")
  message("_vtk_export_FILE_NAME=${_vtk_export_FILE_NAME}")
  message("_vtk_export_COMPONENT=${_vtk_export_COMPONENT}")
```

typical results:
```
_vtk_export_install_file=D:/work/vtk_2024_work/ModernVTK/codes/cmakeinfo/findffmpeg/01a/build/CMakeFiles/VTK-vtk-module-find-packages.cmake.install
_vtk_export_CMAKE_DESTINATION=/cmake/vtk
_vtk_export_FILE_NAME=VTK-vtk-module-find-packages.cmake
_vtk_export_COMPONENT=development
```

### vtk_module_scan
```cmake
vtk_module_scan(
  MODULE_FILES        ${vtk_module_files}
  KIT_FILES           ${vtk_kit_files}
  REQUEST_MODULES     ${vtk_requested_modules}
  REJECT_MODULES      ${vtk_rejected_modules}
  PROVIDES_MODULES    vtk_modules
  PROVIDES_KITS       vtk_kits
  REQUIRES_MODULES    vtk_required_modules
  UNRECOGNIZED_MODULES vtk_unrecognized_modules
  WANT_BY_DEFAULT     "${VTK_BUILD_ALL_MODULES}"
  ENABLE_TESTS        "${VTK_BUILD_TESTING}")
```  

```cmake
  get_property(_vtk_export_version GLOBAL
    PROPERTY "${_vtk_export_base_package}_version")
```

### ${_vtk_export_base_package}_version
```
message( STATUS "_vtk_export_packages=${_vtk_export_packages}" )
message( STATUS "_vtk_export_base_package=${_vtk_export_base_package}" )	
message( STATUS "\${_vtk_export_base_package}_version=${_vtk_export_base_package}_version" )
message( STATUS "_vtk_export_version=${_vtk_export_version}" )
```

```
-- _vtk_export_packages=FFMPEG
-- _vtk_export_base_package=_vtk_module_find_package_VTK::IOFFMPEG_FFMPEG
-- ${_vtk_export_base_package}_version=_vtk_module_find_package_VTK::IOFFMPEG_FFMPEG_version
-- _vtk_export_version=7.0-full_build-www
```

### one or more multiply defined symbols found
```
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<float>::vtkConstantImplicitBackend<float>(float)" (??0?$vtkConstantImplicitBackend@M@@QEAA@M@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<double>::vtkConstantImplicitBackend<double>(double)" (??0?$vtkConstantImplicitBackend@N@@QEAA@N@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<char>::vtkConstantImplicitBackend<char>(char)" (??0?$vtkConstantImplicitBackend@D@@QEAA@D@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<signed char>::vtkConstantImplicitBackend<signed char>(signed char)" (??0?$vtkConstantImplicitBackend@C@@QEAA@C@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<unsigned char>::vtkConstantImplicitBackend<unsigned char>(unsigned char)" (??0?$vtkConstantImplicitBackend@E@@QEAA@E@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<short>::vtkConstantImplicitBackend<short>(short)" (??0?$vtkConstantImplicitBackend@F@@QEAA@F@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<unsigned short>::vtkConstantImplicitBackend<unsigned short>(unsigned short)" (??0?$vtkConstantImplicitBackend@G@@QEAA@G@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<int>::vtkConstantImplicitBackend<int>(int)" (??0?$vtkConstantImplicitBackend@H@@QEAA@H@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<unsigned int>::vtkConstantImplicitBackend<unsigned int>(unsigned int)" (??0?$vtkConstantImplicitBackend@I@@QEAA@I@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<long>::vtkConstantImplicitBackend<long>(long)" (??0?$vtkConstantImplicitBackend@J@@QEAA@J@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<unsigned long>::vtkConstantImplicitBackend<unsigned long>(unsigned long)" (??0?$vtkConstantImplicitBackend@K@@QEAA@K@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<__int64>::vtkConstantImplicitBackend<__int64>(__int64)" (??0?$vtkConstantImplicitBackend@_J@@QEAA@_J@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>vtkCommonCore-9.3d.lib(vtkCommonCore-9.3d.dll) : error LNK2005: "public: __cdecl vtkConstantImplicitBackend<unsigned __int64>::vtkConstantImplicitBackend<unsigned __int64>(unsigned __int64)" (??0?$vtkConstantImplicitBackend@_K@@QEAA@_K@Z) already defined in vtkToImplicitRamerDouglasPeuckerStrategy.obj
205>   Creating library D:/work/vtk_software_2024/VTK-9.3.0/build/lib/Debug/vtkFiltersReduction-9.3d.lib and object D:/work/vtk_software_2024/VTK-9.3.0/build/lib/Debug/vtkFiltersReduction-9.3d.exp
205>D:\work\vtk_software_2024\VTK-9.3.0\build\bin\Debug\vtkFiltersReduction-9.3d.dll : fatal error LNK1169: one or more multiply defined symbols found
```


-  [VTK9.3 编译debug链接问题](https://blog.csdn.net/ruihaha/article/details/134502360/).


```
Fixed by replacing
struct VTKCOMMONCORE_EXPORT vtkConstantImplicitBackend final
by
struct vtkConstantImplicitBackend final
in Common/Core/vtkConstantImplicitBackend.h
```

### vtkConstantImplicitBackend
```
#ifdef VTK_CONSTANT_BACKEND_INSTANTIATING
#define VTK_INSTANTIATE_CONSTANT_BACKEND(ValueType)                                                \
  VTK_ABI_NAMESPACE_BEGIN                                                                          \
  template struct VTKCOMMONCORE_EXPORT vtkConstantImplicitBackend<ValueType>;                      \
  VTK_ABI_NAMESPACE_END
#endif
```

### The default set of scalar types:

```cmake
#The default set of scalar types:
set(vtkArrayDispatch_all_types
  "char"
  "double"
  "float"
  "int"
  "long"
  "long long"
  "short"
  "signed char"
  "unsigned char"
  "unsigned int"
  "unsigned long"
  "unsigned long long"
  "unsigned short"
  "vtkIdType"
)
```

### vtkCreateArrayDispatchArrayList.cmake

```
// This file is autogenerated by vtkCreateArrayDispatchImplicitList.cmake.
// Do not edit this file. Your changes will not be saved.
```

### trace

```
cmake --trace-expand .. > trace.txt 2>&1
cmake --trace .. > trace.txt 2>&1
```
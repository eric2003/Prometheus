# VTK Remote

## Link

-  [VTK9.3+CMake+VS2022+Remote module+ExtrudePolyDataAlongLine简单测试](https://zhuanlan.zhihu.com/p/694140623).

VTK-9.4.2\Remote tree.exe -L 1
```
PS D:\work\vtk2025\VTK-9.4.2\Remote> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CMakeLists.txt
|-- MomentInvariants
|-- MomentInvariants.remote.cmake
|-- README.md
|-- RenderingLookingGlass
|-- RenderingLookingGlass.remote.cmake
|-- vtkDICOM
`-- vtkDICOM.remote.cmake

3 directories, 5 files
```

VTK-9.4.2\Remote tree.exe -L 2
```
PS D:\work\vtk2025\VTK-9.4.2\Remote> &"c:\Program Files\Git\usr\bin\tree.exe" -L 2
.
|-- CMakeLists.txt
|-- MomentInvariants
|   |-- CMakeLists.txt
|   |-- Copyright.txt
|   |-- MomentInvariants
|   |-- MomentInvariants.xml
|   |-- ParallelMomentInvariants
|   |-- README.md
|   |-- Testing
|   `-- dfftlib
|-- MomentInvariants.remote.cmake
|-- README.md
|-- RenderingLookingGlass
|   |-- CMakeLists.txt
|   |-- Examples
|   |-- FetchFromUrl.cmake
|   |-- FetchHoloPlayCore.cmake
|   |-- FetchVTKExternalModule.cmake
|   |-- FindHoloPlayCore.cmake
|   |-- LICENSE
|   |-- README.md
|   |-- Testing
|   |-- lib
|   |-- pyproject.toml
|   |-- setup.py
|   |-- vtk.module
|   |-- vtkCocoaLookingGlassRenderWindow.h
|   |-- vtkCocoaLookingGlassRenderWindow.mm
|   |-- vtkLookingGlassInterface.cxx
|   |-- vtkLookingGlassInterface.h
|   |-- vtkLookingGlassPass.cxx
|   |-- vtkLookingGlassPass.h
|   |-- vtkLookingGlassRenderWindowImpl.h
|   |-- vtkWin32LookingGlassRenderWindow.cxx
|   |-- vtkWin32LookingGlassRenderWindow.h
|   |-- vtkXLookingGlassRenderWindow.cxx
|   `-- vtkXLookingGlassRenderWindow.h
|-- RenderingLookingGlass.remote.cmake
|-- vtkDICOM
|   |-- CMake
|   |-- CMakeLists.txt
|   |-- CTestConfig.cmake
|   |-- Copyright.txt
|   |-- DicomCli
|   |-- Documents
|   |-- Examples
|   |-- Programs
|   |-- Readme.txt
|   |-- Source
|   |-- Testing
|   |-- Utilities
|   |-- module.cmake
|   `-- vtk.module
`-- vtkDICOM.remote.cmake

18 directories, 36 files
```

SplineDrivenImageSlicer.remote.cmake
```cmake
#
# Midas Journal 838
#

vtk_fetch_module(SplineDrivenImageSlicer
  "Spline Driven Image Slicer - http://www.vtkjournal.org/browse/publication/838"

# FIXME lorensen's repo needs to accept merge request #2 for new vtkCellArray
# API support. Once that happens, this url should be switched back and the
# tag updated. This change is intended to only be temporary so that Kitware's
# CI builds pass.

#  GIT_REPOSITORY https://github.com/lorensen/midas-journal-838.git
  GIT_REPOSITORY https://github.com/allisonvacanti/midas-journal-838.git

  GIT_TAG 281f1adfb681f2fce8be00dda0e07b3b92dc7939
  )
```

add SplineDrivenImageSlicer.remote.cmake to VTK-9.4.2\Remote
```
PS D:\work\vtk2025\VTK-9.4.2\Remote> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CMakeLists.txt
|-- MomentInvariants
|-- MomentInvariants.remote.cmake
|-- README.md
|-- RenderingLookingGlass
|-- RenderingLookingGlass.remote.cmake
|-- SplineDrivenImageSlicer.remote.cmake
|-- vtkDICOM
`-- vtkDICOM.remote.cmake

3 directories, 6 files
```

enable VTK_MODULE_ENABLE_VTK_SplineDrivenImageSlicer
```
VTK_MODULE_ENABLE_VTK_SplineDrivenImageSlicer
```

vtk.module
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

```
https://github.com/midas-journal/midas-journal-838
```

d:\work\vtk2025\VTK-9.4.2\Remote\SplineDrivenImageSlicer\CMakeLists.txt
```cmake
message(STATUS "SplineDrivenImageSlicer: Building as a Remote VTK module")

set(Module_SRCS
  vtkFrenetSerretFrame.cxx
  vtkSplineDrivenImageSlicer.cxx  
)

set(Module_headers
  vtkFrenetSerretFrame.h
  vtkSplineDrivenImageSlicer.h
)

if (VTK_VERSION VERSION_LESS "8.90.0")
  vtk_module_library(SplineDrivenImageSlicer ${Module_SRCS})
else()
  vtk_module_add_module(VTK::SplineDrivenImageSlicer
    SOURCES ${Module_SRCS}
	HEADERS ${Module_headers}
    )
endif()

```



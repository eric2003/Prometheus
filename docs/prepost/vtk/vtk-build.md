# VTK Build

## VTK_BUILD_TESTING

-  [VTK File Formats](https://docs.vtk.org/en/latest/design_documents/VTKFileFormats.html).

## example 1
```
cmake .. -DVTK_GROUP_ENABLE_Qt=YES
```

## example 2
```
cmake .. cmake -DCMAKE_INSTALL_PREFIX="c:/dev/VTK" -DVTK_GROUP_ENABLE_Qt=YES
```

```
cmake .. -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
         -D CMAKE_BUILD_TYPE=Release `
         -D BUILD_SHARED_LIBS=ON `
         -D VTK_GROUP_ENABLE_Qt=YES `
         -D VTK_BUILD_EXAMPLES=ON
```

```
cmake -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_GROUP_ENABLE_Qt=YES `
      -D VTK_BUILD_EXAMPLES=ON `
      ..
```

```
cmake -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_GROUP_ENABLE_Qt=YES `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_BUILD_EXAMPLES=ON `
      ..
```

```
cmake -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      ..
```

Release
```
cmake --build . --parallel 4 --config Release
```

Install
```
cmake --install . --prefix "c:/dev/VTK"  --config Release
```

or
```
cmake --install . --prefix "c:/dev/VTK"  --config Debug
```


```
$env:PATH = "c:/local/Qt/6.9.0/msvc2022_64/bin;" + $env:PATH
or

```
c:\local\Qt\6.9.0\msvc2022_64\bin\windeployqt.exe .\Release
```


```
VTK_MODULE_ENABLE_VTK_cli11
VTK_MODULE_USE_EXTERNAL_VTK_cli11
VTK_MODULE_ENABLE_VTK_FiltersParallelStatistics
IOFFMPEG
```

```
VTK_MODULE_ENABLE_VTK_InfovisBoost
VTK_MODULE_ENABLE_VTK_InfovisBoostGraphAlgorithms
```

MPEG
```
Search results:
[26 files and 0 directories found]
d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\theora\vtktheora\README
d:\work\vtk2025\codes\VTK-9.4.2\CMake\FindFFMPEG.cmake
d:\work\vtk2025\codes\VTK-9.4.2\CMake\vtkInstallFFMPEGPackage.cmake
d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\libproj\vtklibproj\src\iso191111\operation\parmappings.cpp
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSource.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSourceWithAudio.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGWriter.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGWriter.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\Movie\vtkFFMPEG\vtkFFMPEGWriter.cxx
d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FFMPEGOpenGL2\Testing\Cxx\TestMovieSphere.cxx
d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FFMPEGOpenGL2\vtkOpenGLMovieSphere.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.h
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.h
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGWriter.h
d:\work\vtk2025\codes\VTK-9.4.2\Ogg\Theora\vtkOggTheoraWriter.h
d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FFMPEGOpenGL2\vtkOpenGLMovieSphere.h
d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\jpeg\vtkjpeg\README.jg
d:\work\vtk2025\codes\VTK-9.4\Documentation\docs\build_instructions\build.md
d:\work\vtk2025\codes\VTK-9.4\Documentation\release\9.2.md
d:\work\vtk2025\codes\VTK-9.4\IO\FFMPEG\vtk.module
d:\work\vtk2025\codes\VTK-9.4\Rendering\FFMPEGOpenGL2\vtk_module
d:\work\vtk2025\codes\VTK-9.4.2\CMake\vtkcppcheck_Suppressions.txt
d:\work\vtk2025\codes\VTK-9.4\IO\FFMPEG\CMakeLists.txt
d:\work\vtk2025\codes\VTK-9.4\IO\FFMPEG\Testing\Cxx\CMakeLists.txt
d:\work\vtk2025\codes\VTK-9.4\Rendering\FFMPEGOpenGL2\Testing\Cxx\CMakeLists.txt
```

VTK_USE_MPEG2_ENCODER
```
Search results:
[No files found]
```

```
Search results:
[23 files and 0 directories found]
d:\work\vtk2025\VTK-8.2.0\CMake\FindFFMPEG.cmake
d:\work\vtk2025\VTK-8.2\CMake\FindFFMPEG2.cmake
d:\work\vtk2025\VTK-8.2\CMake\VTKcppcheck_Suppressions.txt
d:\work\vtk2025\VTK-8.2\CMake\vtkTestFFMPEG.cmake
d:\work\vtk2025\VTK-8.2\Common\Core\vtkToolkit.h.in
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\CMakeLists.txt
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\module.cmake
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\Testing\Cxx\CMakeLists.txt
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSource.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSourceWithAudio.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGConfig.h.in
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGVideoSource.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGVideoSource.h
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGWriter.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGWriter.h
d:\work\vtk2025\VTK-8.2\IO\Movie\vtkOggTheoraWriter.h
d:\work\vtk2025\VTK-8.2\ThirdParty\glew\vtkglew\include\GL\glew.h
d:\work\vtk2025\VTK-8.2\ThirdParty\glew\vtkglew\src\glewinfo.c
d:\work\vtk2025\VTK-8.2\ThirdParty\glew\vtkglew\src\glewinfo.c
d:\work\vtk2025\VTK-8.2\ThirdParty\jpeg\vtkjpeg\README
d:\work\vtk2025\VTK-8.2\ThirdParty\theora\vtktheora\README
d:\work\vtk2025\VTK-8.2\Wrapping\Python\CMakeLists.txt
```

VTK_USE_MPEG2_ENCODER
```
Search results:
[2 files and 0 directories found]
d:\work\vtk2025\VTK-8.2.0\CMake\FindMPEG2.cmake
d:\work\vtk2025\VTK-8.2.0\Common\Core\vtkToolkits.h.in
```

## GenericClip: examples/Filtering/GenericClip

```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(GenericClip)

find_package(VTK COMPONENTS 
  CommonColor
  CommonCore
  CommonDataModel
  FiltersCore
  FiltersGeneric
  FiltersSources
  ImagingHybrid
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
  TestingGenericBridge
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "GenericClip: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(GenericClip MACOSX_BUNDLE GenericClip.cxx )
  target_link_libraries(GenericClip PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS GenericClip
  MODULES ${VTK_LIBRARIES}
)
```

output
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Filtering\GenericClip\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  TestingGenericBridge.



CMake Error at CMakeLists.txt:24 (message):
  GenericClip: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

## LinearCellDemo: examples/GeometricObjects/LinearCellDemo

```cmake

cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(LinearCellDemo)

find_package(VTK COMPONENTS 
  CommonColor
  CommonCore
  CommonDataModel
  FiltersSources
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingLabel
  RenderingOpenGL2
  cli11
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "LinearCellDemo: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(LinearCellDemo MACOSX_BUNDLE LinearCellDemo.cxx )
  target_link_libraries(LinearCellDemo PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS LinearCellDemo
  MODULES ${VTK_LIBRARIES}
)
```

output
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\GeometricObjects\LinearCellDemo\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  cli11.



CMake Error at CMakeLists.txt:22 (message):
  LinearCellDemo: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

## ParametricObjectsDemo: examples/GeometricObjects/ParametricObjectsDemo

```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(ParametricObjectsDemo)

find_package(VTK COMPONENTS 
  CommonColor
  CommonComputationalGeometry
  CommonCore
  FiltersCore
  FiltersSources
  IOImage
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
  cli11
  fmt
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "ParametricObjectsDemo: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(ParametricObjectsDemo MACOSX_BUNDLE ParametricObjectsDemo.cxx )
  target_link_libraries(ParametricObjectsDemo PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS ParametricObjectsDemo
  MODULES ${VTK_LIBRARIES}
)
```

output
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\GeometricObjects\ParametricObjectsDemo\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  cli11.



CMake Error at CMakeLists.txt:24 (message):
  ParametricObjectsDemo: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```


```
2025-05-12 17:49:04.559 (   0.249s) [8AB821A10DDBFA96]vtkTreeLayoutStrategy.c:72
ERR| vtkTreeLayoutStrategy (0000021B0B534600):
Layout only works on vtkTree if VTK::InfovisBoostGraphAlgorithms is available.
```


## BoostBreadthFirstSearchTree: examples/Graphs/BoostBreadthFirstSearchTree

```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(BoostBreadthFirstSearchTree)

find_package(VTK COMPONENTS 
  CommonCore
  CommonDataModel
  InfovisBoostGraphAlgorithms
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
  ViewsInfovis
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "BoostBreadthFirstSearchTree: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(BoostBreadthFirstSearchTree MACOSX_BUNDLE BoostBreadthFirstSearchTree.cxx )
  target_link_libraries(BoostBreadthFirstSearchTree PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS BoostBreadthFirstSearchTree
  MODULES ${VTK_LIBRARIES}
)

```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Graphs\BoostBreadthFirstSearchTree\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  InfovisBoostGraphAlgorithms.



CMake Error at CMakeLists.txt:20 (message):
  BoostBreadthFirstSearchTree: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

FiltersParallelStatistics
```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(PKMeansClustering)

find_package(VTK COMPONENTS 
  CommonCore
  CommonDataModel
  FiltersGeneral
  FiltersParallelStatistics
  IOXML
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "PKMeansClustering: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(PKMeansClustering MACOSX_BUNDLE PKMeansClustering.cxx )
  target_link_libraries(PKMeansClustering PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS PKMeansClustering
  MODULES ${VTK_LIBRARIES}
)

```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\InfoVis\PKMeansClustering\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  FiltersParallelStatistics.



CMake Error at CMakeLists.txt:21 (message):
  PKMeansClustering: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Math\VectorDot\01\build> .\Release\VectorDot.exe
Value 0 : -nan(ind)
Value 1 : inf
Value 2 : inf
```

Matlab\MatlabEngineFilter
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab\MatlabEngineFilter\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Configuring done (7.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/Matlab/MatlabEngineFilter/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/Matlab/MatlabEngineFilter/01/CMakeLists.txt
  MatlabEngineFilter.cxx
D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab\MatlabEngineFilter\01\MatlabEngineFilter.cxx(3,10): error C1083:
无法打开包括文件: “vtkMatlabEngineFilter.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab\M
atlabEngineFilter\01\build\MatlabEngineFilter.vcxproj]
```

Points\CompareExtractSurface
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\CompareExtractSurface\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Configuring done (8.0s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/CompareExtractSurface/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/CompareExtractSurface/01/CMakeLists.txt
  CompareExtractSurface.cxx
D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\CompareExtractSurface\01\CompareExtractSurface.cxx(9,10): error C
1083: 无法打开包括文件: “vtkPoissonReconstruction.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\examples
\Points\CompareExtractSurface\01\build\CompareExtractSurface.vcxproj]
```


```
1. Verify VTK Installation
Ensure that VTK is properly installed and includes the vtkPoissonReconstruction module. The vtkPoissonReconstruction.h header is part of the vtkFiltersPoints module, which may not be included in a minimal VTK build.

Check VTK Installation:
Confirm that VTK is installed and built correctly on your system.
If you built VTK from source, ensure the VTK_MODULE_ENABLE_VTK_FiltersPoints option was enabled during the CMake configuration. Run cmake -L in your VTK build directory to list available modules and verify that VTK_FiltersPoints is enabled.
If you used a pre-built VTK binary, ensure it includes the vtkFiltersPoints module. Some pre-built distributions may exclude optional modules.
Rebuild VTK if Necessary: If the module is missing, reconfigure and rebuild VTK with CMake:
Open the CMake GUI or use the command line in your VTK source directory.
Set VTK_MODULE_ENABLE_VTK_FiltersPoints=ON.
Configure, generate, and rebuild VTK.
Install the rebuilt VTK to your desired location (e.g., C:\VTK or D:\VTK).
```

Points\PoissonExtractSurface
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\PoissonExtractSurface\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Configuring done (8.0s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/PoissonExtractSurface/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/PoissonExtractSurface/01/CMakeLists.txt
  PoissonExtractSurface.cxx
  vtkPoissonReconstruction.cxx
D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\PoissonExtractSurface\01\PoissonExtractSurface.cxx(12,10): error
C1083: 无法打开包括文件: “vtkPoissonReconstruction.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\example
s\Points\PoissonExtractSurface\01\build\PoissonExtractSurface.vcxproj]
D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\PoissonExtractSurface\01\vtkPoissonReconstruction.h(38,10): error
 C1083: 无法打开包括文件: “PoissonReconstructionModule.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\exa
mples\Points\PoissonExtractSurface\01\build\PoissonExtractSurface.vcxproj]
  正在生成代码...
  (编译源文件“../vtkPoissonReconstruction.cxx”)
```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Qt\BarChartQt\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:11 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  GUISupportQt, RenderingQt.



CMake Error at CMakeLists.txt:28 (message):
  BarChartQt: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

StructuredGrid\BlankPoint
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Configuring done (8.0s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/StructuredGrid/BlankPoint/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/StructuredGrid/BlankPoint/01/CMakeLists.txt
  BlankPoint.cxx
BlankPoint.obj : error LNK2019: 无法解析的外部符号 "__declspec(dllimport) public: static class vtkStructuredGridGeometryFilter *
 __cdecl vtkStructuredGridGeometryFilter::New(void)" (__imp_?New@vtkStructuredGridGeometryFilter@@SAPEAV1@XZ)，函数 main 中
引用了该符号 [D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\BlankPoint.vcxproj]
    已定义且可能匹配的符号上的提示:
      "__declspec(dllimport) public: static class vtkActor * __cdecl vtkActor::New(void)" (__imp_?New@vtkActor@@SAPEAV1
  @XZ)
      "__declspec(dllimport) public: static class vtkDataSetMapper * __cdecl vtkDataSetMapper::New(void)" (__imp_?New@v
  tkDataSetMapper@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkNamedColors * __cdecl vtkNamedColors::New(void)" (__imp_?New@vtkNa
  medColors@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkPoints * __cdecl vtkPoints::New(void)" (__imp_?New@vtkPoints@@SAPE
  AV1@XZ)
      "__declspec(dllimport) public: static class vtkRenderWindow * __cdecl vtkRenderWindow::New(void)" (__imp_?New@vtk
  RenderWindow@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkRenderWindowInteractor * __cdecl vtkRenderWindowInteractor::New(vo
  id)" (__imp_?New@vtkRenderWindowInteractor@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkRenderer * __cdecl vtkRenderer::New(void)" (__imp_?New@vtkRenderer
  @@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkStructuredGrid * __cdecl vtkStructuredGrid::New(void)" (__imp_?New
  @vtkStructuredGrid@@SAPEAV1@XZ)
D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\Release\BlankPoint.exe : fatal error
LNK1120: 1 个无法解析的外部命令 [D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\BlankPoint.vcx
proj]
```

Visualization\ExtrudePolyDataAlongLine
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Visualization\ExtrudePolyDataAlongLine\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  SplineDrivenImageSlicer.



CMake Error at CMakeLists.txt:30 (message):
  ExtrudePolyDataAlongLine: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

VolumeRendering\OpenVRVolume
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\VolumeRendering\OpenVRVolume\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
CMake Warning at CMakeLists.txt:5 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  RenderingOpenVR.



CMake Error at CMakeLists.txt:20 (message):
  OpenVRVolume: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```
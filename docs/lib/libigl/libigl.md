# libigl

## Link

- [github libigl](https://github.com/libigl/libigl).
- [libigl.github.io](https://libigl.github.io/dox/index.html).


## download

git clone git@github.com:libigl/libigl.git
```
PS D:\work\libjpeg_work> git clone git@github.com:winlibs/libjpeg.git
Cloning into 'libjpeg'...
remote: Enumerating objects: 1563, done.
remote: Counting objects: 100% (994/994), done.
remote: Compressing objects: 100% (477/477), done.
remote: Total 1563 (delta 535), reused 893 (delta 497), pack-reused 569 (from 1)
Receiving objects: 100% (1563/1563), 5.02 MiB | 2.69 MiB/s, done.
Resolving deltas: 100% (922/922), done.
```

git clone --recursive git@github.com:libigl/libigl.git
```
```

## cmake-gui
```
CMake Warning at CMakeLists.txt:78 (message):
  Mosek not found, disabling igl_restricted::mosek module.


Creating target: igl::core (igl_core)
Third-party: creating target 'Eigen3::Eigen'
CMake Warning (dev) at C:/Program Files/CMake/share/cmake-4.1/Modules/FetchContent.cmake:1953 (message):
  Calling FetchContent_Populate(eigen) is deprecated, call
  FetchContent_MakeAvailable(eigen) instead.  Policy CMP0169 can be set to
  OLD to allow FetchContent_Populate(eigen) to be called directly for now,
  but the ability to call it with declared details will be removed completely
  in a future version.
Call Stack (most recent call first):
  cmake/recipes/external/eigen.cmake:16 (FetchContent_Populate)
  cmake/igl/modules/core.cmake:23 (include)
  cmake/igl/igl_include.cmake:32 (include)
  cmake/igl/igl_include.cmake:54 (_igl_include_full)
  cmake/libigl.cmake:15 (igl_include)
  CMakeLists.txt:151 (include)
This warning is for project developers.  Use -Wno-dev to suppress it.

Third-party: creating target 'Catch2::Catch2'
CMake Deprecation Warning at build/_deps/catch2-src/CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


Third-party: creating target 'igl::tests_data'
Creating target: igl::embree (igl_embree)
Third-party: creating target 'embree::embree'
CMake Deprecation Warning at build/_deps/embree-src/CMakeLists.txt:4 (CMAKE_MINIMUM_REQUIRED):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- MSVC detected
Detecting default ISA...
Detected default ISA: SSE2
Creating target: igl::opengl (igl_opengl)
Third-party: creating target 'glad::glad'
CMake Deprecation Warning at build/_deps/glad-src/CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


Creating target: igl::glfw (igl_glfw)
Third-party: creating target 'glfw::glfw'
Using Win32 for window creation
Creating target: igl::imgui (igl_imgui)
Third-party: creating target 'imgui::imgui'
Third-party: creating target 'imguizmo::imguizmo'
Third-party: creating target 'igl::imgui_fonts'
CMake Warning (dev) at C:/Program Files/CMake/share/cmake-4.1/Modules/FetchContent.cmake:1953 (message):
  Calling FetchContent_Populate(libigl_imgui_fonts) is deprecated, call
  FetchContent_MakeAvailable(libigl_imgui_fonts) instead.  Policy CMP0169 can
  be set to OLD to allow FetchContent_Populate(libigl_imgui_fonts) to be
  called directly for now, but the ability to call it with declared details
  will be removed completely in a future version.
Call Stack (most recent call first):
  cmake/recipes/external/libigl_imgui_fonts.cmake:15 (FetchContent_Populate)
  cmake/igl/modules/imgui.cmake:19 (include)
  cmake/igl/igl_include.cmake:32 (include)
  cmake/igl/igl_include.cmake:43 (_igl_include_full)
  cmake/libigl.cmake:19 (igl_include_optional)
  CMakeLists.txt:151 (include)
This warning is for project developers.  Use -Wno-dev to suppress it.

Creating target: igl::predicates (igl_predicates)
Third-party: creating target 'predicates::predicates'
CMake Deprecation Warning at build/_deps/predicates-src/CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


Creating target: igl::stb (igl_stb)
Including igl/opengl/stb support
Third-party: creating target 'stb::stb'
Creating target: igl::spectra (igl_spectra)
Third-party: creating target 'spectra::spectra'
CMake Deprecation Warning at build/_deps/spectra-src/CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


Could NOT find CLANG_FORMAT: Found unsuitable version "0.0", but required is at least "9" (found CLANG_FORMAT_EXECUTABLE-NOTFOUND)
The following OPTIONAL packages have been found:

 * Matlab
 * Git

-- The following REQUIRED packages have been found:

 * OpenGL
 * Threads

-- The following OPTIONAL packages have not been found:

 * MOSEK
 * CLANG_FORMAT (required version >= 9)

Creating target: igl::xml (igl_xml)
Third-party: creating target 'tinyxml2::tinyxml2'
CMake Warning (dev) at C:/Program Files/CMake/share/cmake-4.1/Modules/FetchContent.cmake:1953 (message):
  Calling FetchContent_Populate(tinyxml2) is deprecated, call
  FetchContent_MakeAvailable(tinyxml2) instead.  Policy CMP0169 can be set to
  OLD to allow FetchContent_Populate(tinyxml2) to be called directly for now,
  but the ability to call it with declared details will be removed completely
  in a future version.
Call Stack (most recent call first):
  cmake/recipes/external/tinyxml2.cmake:16 (FetchContent_Populate)
  cmake/igl/modules/xml.cmake:17 (include)
  cmake/igl/igl_include.cmake:32 (include)
  cmake/igl/igl_include.cmake:43 (_igl_include_full)
  cmake/libigl.cmake:23 (igl_include_optional)
  CMakeLists.txt:151 (include)
This warning is for project developers.  Use -Wno-dev to suppress it.

Creating target: igl_copyleft::core (igl_copyleft_core)
Creating target: igl_copyleft::cgal (igl_copyleft_cgal)
Third-party: creating target 'CGAL::CGAL'
CMake Warning (dev) at C:/Program Files/CMake/share/cmake-4.1/Modules/FetchContent.cmake:1373 (message):
  The DOWNLOAD_EXTRACT_TIMESTAMP option was not given and policy CMP0135 is
  not set.  The policy's OLD behavior will be used.  When using a URL
  download, the timestamps of extracted files should preferably be that of
  the time of extraction, otherwise code that depends on the extracted
  contents might not be rebuilt if the URL changes.  The OLD behavior
  preserves the timestamps from the archive instead, but this is usually not
  what you want.  Update your project to the NEW behavior or specify the
  DOWNLOAD_EXTRACT_TIMESTAMP option with a value of true to avoid this
  robustness issue.
Call Stack (most recent call first):
  cmake/recipes/external/cgal.cmake:8 (FetchContent_Declare)
  cmake/igl/modules/copyleft/cgal.cmake:17 (include)
  cmake/igl/igl_include.cmake:32 (include)
  cmake/igl/igl_include.cmake:40 (_igl_include_full)
  cmake/libigl.cmake:27 (igl_include_optional)
  CMakeLists.txt:151 (include)
This warning is for project developers.  Use -Wno-dev to suppress it.

CMake Warning (dev) at C:/Program Files/CMake/share/cmake-4.1/Modules/FetchContent.cmake:1953 (message):
  Calling FetchContent_Populate(cgal) is deprecated, call
  FetchContent_MakeAvailable(cgal) instead.  Policy CMP0169 can be set to OLD
  to allow FetchContent_Populate(cgal) to be called directly for now, but the
  ability to call it with declared details will be removed completely in a
  future version.
Call Stack (most recent call first):
  cmake/recipes/external/cgal.cmake:17 (FetchContent_Populate)
  cmake/igl/modules/copyleft/cgal.cmake:17 (include)
  cmake/igl/igl_include.cmake:32 (include)
  cmake/igl/igl_include.cmake:40 (_igl_include_full)
  cmake/libigl.cmake:27 (igl_include_optional)
  CMakeLists.txt:151 (include)
This warning is for project developers.  Use -Wno-dev to suppress it.

Third-party: creating targets 'Boost::boost'...
Visual Leak Detector (VLD) is not found.
Boost include dirs: C:/dev/boost_1_88_0
Boost libraries:    
Populating copy rules for target: test_igl_copyleft_cgal
Creating target: igl_copyleft::tetgen (igl_copyleft_tetgen)
Third-party: creating target 'tetgen::tetgen'
CMake Deprecation Warning at build/_deps/tetgen-src/CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


Creating target: igl_restricted::matlab (igl_restricted_matlab)
Found Matlab: D:/software/Matlab (found version "9.10.0.1602886") found components: MEX_COMPILER MX_LIBRARY ENG_LIBRARY MAT_LIBRARY
Creating target: igl_restricted::triangle (igl_restricted_triangle)
Third-party: creating target 'triangle::triangle'
CMake Deprecation Warning at build/_deps/triangle-src/CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


Third-party: creating target 'igl::tutorial_data'
Creating libigl tutorial: 101_FileIO
Creating libigl tutorial: 102_DrawMesh
Creating libigl tutorial: 103_Events
Creating libigl tutorial: 104_Colors
Creating libigl tutorial: 105_Overlays
Creating libigl tutorial: 106_ViewerMenu
Creating libigl tutorial: 107_MultipleMeshes
Creating libigl tutorial: 108_MultipleViews
Creating libigl tutorial: 109_ImGuizmo
Creating libigl tutorial: 110_MshView
Creating libigl tutorial: 111_MatCap
Creating libigl tutorial: 112_Selection
Creating libigl tutorial: 113_Shadows
Creating libigl tutorial: 114_CustomShader
Creating libigl tutorial: 201_Normals
Creating libigl tutorial: 202_GaussianCurvature
Creating libigl tutorial: 203_CurvatureDirections
Creating libigl tutorial: 204_Gradient
Creating libigl tutorial: 205_Laplacian
Creating libigl tutorial: 206_GeodesicDistance
Creating libigl tutorial: 207_PolygonLaplacian
Creating libigl tutorial: 301_Slice
Creating libigl tutorial: 302_Sort
Creating libigl tutorial: 303_LaplaceEquation
Creating libigl tutorial: 304_LinearEqualityConstraints
Creating libigl tutorial: 305_QuadraticProgramming
Creating libigl tutorial: 306_EigenDecomposition
Creating libigl tutorial: 401_BiharmonicDeformation
Creating libigl tutorial: 402_PolyharmonicDeformation
Creating libigl tutorial: 403_BoundedBiharmonicWeights
Creating libigl tutorial: 404_DualQuaternionSkinning
Creating libigl tutorial: 405_AsRigidAsPossible
Creating libigl tutorial: 406_FastAutomaticSkinningTransformations
Creating libigl tutorial: 407_BiharmonicCoordinates
Creating libigl tutorial: 408_DirectDeltaMush
Creating libigl tutorial: 409_Kelvinlets
Creating libigl tutorial: 501_HarmonicParam
Creating libigl tutorial: 502_LSCMParam
Creating libigl tutorial: 503_ARAPParam
Creating libigl tutorial: 504_Planarization
Creating libigl tutorial: 601_Serialization
Creating libigl tutorial: 602_Matlab
Creating libigl tutorial: 604_Triangle
Creating libigl tutorial: 605_Tetgen
Creating libigl tutorial: 606_AmbientOcclusion
Creating libigl tutorial: 607_ScreenCapture
Creating libigl tutorial: 608_RayTrace
Creating libigl tutorial: 609_Boolean
Populating copy rules for target: 609_Boolean
Creating libigl tutorial: 610_CSGTree
Populating copy rules for target: 610_CSGTree
Creating libigl tutorial: 701_Statistics
Creating libigl tutorial: 702_WindingNumber
Creating libigl tutorial: 703_Decimation
Creating libigl tutorial: 704_SignedDistance
Creating libigl tutorial: 705_MarchingCubes
Creating libigl tutorial: 706_FacetOrientation
Creating libigl tutorial: 707_SweptVolume
Creating libigl tutorial: 708_Picking
Creating libigl tutorial: 709_SLIM
Creating libigl tutorial: 710_SCAF
Creating libigl tutorial: 801_Subdivision
Creating libigl tutorial: 802_DataSmoothing
Creating libigl tutorial: 803_ShapeUp
Creating libigl tutorial: 804_MarchingTets
Creating libigl tutorial: 805_MeshImplicitFunction
Creating libigl tutorial: 806_HeatGeodesics
Creating libigl tutorial: 807_FastWindingNumber
Populating copy rules for target: 807_FastWindingNumber
Creating libigl tutorial: 808_IterativeClosestPoint
Creating libigl tutorial: 809_ExplodedView
Creating libigl tutorial: 810_BlueNoise
Creating libigl tutorial: 901_VectorFieldSmoothing
Creating libigl tutorial: 902_VectorParallelTransport
Creating libigl tutorial: 903_FastFindSelfIntersections
Creating libigl tutorial: 904_FastFindIntersections
Creating libigl tutorial: 905_Isolines
Creating libigl tutorial: 906_TrimWithSolid
Creating libigl tutorial: 907_DynamicAABB
Creating libigl tutorial: 908_IntersectionBlockingDecimation
Creating libigl tutorial: 909_BatchMarchingCubes
Creating libigl tutorial: 910_OrientedBoundingBox
Creating libigl tutorial: 1001_LipschitzOctree
Creating libigl tutorial: 1002_EytzingerAABB
Configuring done (7300.7s)
```

triangle_triangle_intersect.cpp
```
14>D:\work\libigl_work\libigl\include\igl\triangle_triangle_intersect.cpp(127,100): error C2001: 常量中有换行符
14>D:\work\libigl_work\libigl\include\igl\triangle_triangle_intersect.cpp(138,62): error C2001: 常量中有换行符
14>D:\work\libigl_work\libigl\include\igl\triangle_triangle_intersect.cpp(138,23): error C1075: “(”: 未找到匹配令牌

32>D:\work\libigl_work\libigl\include\igl\predicates\find_intersections.cpp(53,75): error C2001: 常量中有换行符
32>D:\work\libigl_work\libigl\include\igl\predicates\find_intersections.cpp(203,71): error C2001: 常量中有换行符
32>D:\work\libigl_work\libigl\include\igl\predicates\find_intersections.cpp(112,20): error C1075: “(”: 未找到匹配令牌

```

Notepad++
```
triangle_triangle_intersect.cpp
UTF-8编码->UTF-8-BOM编码
find_intersections.cpp
UTF-8编码->UTF-8-BOM编码
```

vs2022
```
triangle_triangle_intersect.cpp
Unicode(UTF-8 无签名)-代码页 65001 ->Unicode(UTF-8 带签名)-代码页 65001
find_intersections.cpp
Unicode(UTF-8 无签名)-代码页 65001 ->Unicode(UTF-8 带签名)-代码页 65001
```

cmake-gui
```
CMAKE_PREFIX_PATH="c:/dev/Eigen3"
```


```
FetchContent_Declare(eigen …)
FetchContent_Populate(eigen)
Replace it with
FetchContent_Declare(eigen …)
FetchContent_MakeAvailable(eigen)
```


```
cmake .. -D CMAKE_PREFIX_PATH="c:/dev/libigl"
```
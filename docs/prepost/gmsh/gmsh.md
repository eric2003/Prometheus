# GMesh

## Article Link

-  [Gmsh](https://gmsh.info/).
-  [Gmsh code](https://gitlab.onelab.info/gmsh/gmsh).
-  [Gmsh Netgen OCCT](https://www.bilibili.com/video/BV1i541117SK/).
-  [gmsh + python: how to access mesh information from scripts](https://www.youtube.com/watch?v=cQwYmk3bMSo/).
-  [GMSH: Structured (Transfinite) Rectangular Mesh (4 Pt)](https://www.youtube.com/watch?v=O1FyiBBuN98/).
-  [GMSH: Structured (Transfinite) Rectangular Mesh (5/6 Pt)](https://www.youtube.com/watch?v=-mdLDszKADg/).

## Youtuber

-  [Jose A. Abell M.](https://www.youtube.com/@JoseAbell/).
-  [JoshTheEngineer](https://www.youtube.com/@JoshTheEngineer/).

## GMSH tutorial

-  [[GMSH tutorial 1] Installation and first model building and meshing](https://www.youtube.com/watch?v=aFc6Wpm69xo/).
-  [[GMSH tutorial 1] Installation and first model building and meshing](https://www.youtube.com/watch?v=aFc6Wpm69xo/).
-  [[GMSH tutorial 3] Extruding Mesh, Parameters and Options - t3.geo](https://www.youtube.com/watch?v=VokUbWUhU-c/).


## Tutorial on Computational Grid Generation for CFD using GMSH

-  [Grid Generation - GMSH - 1 - Introduction, Installation, and Interface](https://www.youtube.com/watch?v=N0Givc5zZ3M&list=PLbiOzt50Bx-l2QyX5ZBv9pgDtIei-CYs_&index=1/).
-  [Grid Generation - GMSH - 2 - Importing CAD Files](https://www.youtube.com/watch?v=e7zA3joOWX8&list=PLbiOzt50Bx-l2QyX5ZBv9pgDtIei-CYs_&index=2/).
-  [Grid Generation - GMSH - 3 - Parametric Modeling](https://www.youtube.com/watch?v=wSA71rYvg0E/).
-  [Grid Generation - GMSH - 4 - Creating Basic Geometry, Mesh, Boundary Condition, and Export](https://www.youtube.com/watch?v=ARXlqUS8R5U&list=PLbiOzt50Bx-l2QyX5ZBv9pgDtIei-CYs_&index=4/).
-  [Grid Generation - GMSH - 5 - Creating Two-Dimensional Unstructured and Structured Grids](https://www.youtube.com/watch?v=-wm2LzCFvQQ&list=PLbiOzt50Bx-l2QyX5ZBv9pgDtIei-CYs_&index=5/).
-  [Grid Generation - GMSH - 6 - Exporting to CFD Solver and Examination of File Contents](https://www.youtube.com/watch?v=No-B6VS4JJ0&list=PLbiOzt50Bx-l2QyX5ZBv9pgDtIei-CYs_&index=6/).
-  [Grid Generation - GMSH - 7 - Controlling Grid Point Density with Fields](https://www.youtube.com/watch?v=GL6GUoIwSdU&list=PLbiOzt50Bx-l2QyX5ZBv9pgDtIei-CYs_&index=7/).

## download

### git clone https://gitlab.onelab.info/gmsh/gmsh.git
```
PS D:\work\gmsh_work> git clone https://gitlab.onelab.info/gmsh/gmsh.git
Cloning into 'gmsh'...
remote: Enumerating objects: 200360, done.
remote: Counting objects: 100% (770/770), done.
remote: Compressing objects: 100% (365/365), done.
remote: Total 200360 (delta 419), reused 740 (delta 402), pack-reused 199590 (from 1)
Receiving objects: 100% (200360/200360), 209.07 MiB | 160.00 KiB/s, done.
Resolving deltas: 100% (162382/162382), done.
Updating files: 100% (5202/5202), done.
```

### CMakeLists.txt

```cmake
  # then try the built-in FindFLTK module
  if(NOT HAVE_FLTK)
    set(FLTK_SKIP_FORMS TRUE)
    set(FLTK_SKIP_FLUID TRUE)
    #find_package(FLTK)
    find_package(FLTK CONFIG REQUIRED)
    if(FLTK_FOUND)
      add_subdirectory(src/fltk)
      set_config_option(HAVE_FLTK "Fltk")
      list(APPEND EXTERNAL_INCLUDES ${FLTK_INCLUDE_DIR})
    endif()
  endif()
```

```
-openmp:llvm
```


```
GMSH_EXTERNAL_LIBRARIES
fltk_z;fltk_png;fltk_jpeg;fltk;fltk_forms;fltk_images;fltk_gl;winmm;wsock32;ws2_32;psapi;opengl32;glu32
```

```
GMSH_EXTERNAL_INCLUDE_DIRS
fltk_z;fltk_png;fltk_jpeg;fltk;fltk_forms;fltk_images;fltk_gl;winmm;wsock32;ws2_32;psapi;opengl32;glu32
```

```
if(EXTERNAL_INCLUDES)
  list(REMOVE_DUPLICATES EXTERNAL_INCLUDES)
endif()
```

```
get_property(dirs DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY INCLUDE_DIRECTORIES)
message("Include directories: ${dirs}")
```


```
D:\work\gmsh_work\gmsh\contrib\WinslowUntangler
D:\work\gmsh_work\gmsh\contrib\QuadMeshingTools
D:\work\gmsh_work\gmsh\contrib\hxt\tetMesh\include
D:\work\gmsh_work\gmsh\contrib\hxt\tetMesh\src
D:\work\gmsh_work\gmsh\contrib\hxt\tetBR\include
D:\work\gmsh_work\gmsh\contrib\hxt\tetBR\src
D:\work\gmsh_work\gmsh\contrib\hxt\predicates\include
D:\work\gmsh_work\gmsh\contrib\hxt\predicates\src
D:\work\gmsh_work\gmsh\contrib\hxt\reparam\include
D:\work\gmsh_work\gmsh\contrib\hxt\reparam\src
D:\work\gmsh_work\gmsh\contrib\hxt\core\include
D:\work\gmsh_work\gmsh\contrib\hxt\core\src
D:\work\gmsh_work\gmsh\contrib\hxt\Combine\src
D:\work\gmsh_work\gmsh\contrib\eigen
D:\work\gmsh_work\gmsh\contrib\onelab
D:\work\gmsh_work\gmsh\contrib\mpeg_encode\headers
D:\work\gmsh_work\gmsh\contrib\ANN\include
D:\work\gmsh_work\gmsh\contrib\ALGLIB
D:\work\gmsh_work\gmsh\contrib\DiscreteIntegration
D:\work\gmsh_work\gmsh\contrib\kbipack
D:\work\gmsh_work\gmsh\contrib\MathEx
D:\work\gmsh_work\gmsh\contrib\tinyxml2
D:\work\gmsh_work\gmsh\contrib\metis\include
D:\work\gmsh_work\gmsh\contrib\metis\libmetis
D:\work\gmsh_work\gmsh\contrib\metis\GKlib
D:\work\gmsh_work\gmsh\contrib\voro++\src
D:\work\gmsh_work\gmsh\contrib\HighOrderMeshOptimizer
D:\work\gmsh_work\gmsh\contrib\MeshOptimizer
D:\work\gmsh_work\gmsh\build\contrib\MeshOptimizer
D:\work\gmsh_work\gmsh\contrib\MeshQualityOptimizer
D:\work\gmsh_work\gmsh\contrib\domhex
D:\work\gmsh_work\gmsh\contrib\QuadTri
D:\work\gmsh_work\gmsh\cont\blossom\MATCH
D:\work\gmsh_work\gmsh\contrib\blossom\concorde97
D:\work\gmsh_work\gmsh\contrib\blossom\concorde97\INCLUDE
D:\work\gmsh_work\gmsh\contrib\nii2mesh
D:\work\gmsh_work\gmsh\contrib\untangle
D:\work\gmsh_work\gmsh\contrib\Netgen
D:\work\gmsh_work\gmsh\contrib\Netgen\libsrc\include
D:\work\gmsh_work\gmsh\contrib\Netgen\nglib
D:\work\gmsh_work\gmsh\contrib\bamg
D:\work\gmsh_work\gmsh\contrib\bamg\bamglib
D:\work\gmsh_work\gmsh\contrib\gmm\include
D:\work\gmsh_work\gmsh\src\common
D:\work\gmsh_work\gmsh\src\fltk
D:\work\gmsh_work\gmsh\src\geo
D:\work\gmsh_work\gmsh\src\graphics
D:\work\gmsh_work\gmsh\src\mesh
D:\work\gmsh_work\gmsh\src\solver
D:\work\gmsh_work\gmsh\src\numeric
D:\work\gmsh_work\gmsh\src\parser
D:\work\gmsh_work\gmsh\src\plugin
D:\work\gmsh_work\gmsh\src\post
D:\work\gmsh_work\gmsh\api
C:\dev\HDF_Group\HDF5\1.14.6\include
D:\work\gmsh_work\gmsh\build\src\common
%(AdditionalIncludeDirectories)
```

```
Include directories 014: D:/work/gmsh_work/gmsh/contrib/WinslowUntangler
D:/work/gmsh_work/gmsh/contrib/QuadMeshingTools
D:/work/gmsh_work/gmsh/contrib/hxt/tetMesh/include
D:/work/gmsh_work/gmsh/contrib/hxt/tetMesh/src
D:/work/gmsh_work/gmsh/contrib/hxt/tetBR/include
D:/work/gmsh_work/gmsh/contrib/hxt/tetBR/src
D:/work/gmsh_work/gmsh/contrib/hxt/predicates/include
D:/work/gmsh_work/gmsh/contrib/hxt/predicates/src
D:/work/gmsh_work/gmsh/contrib/hxt/reparam/include
D:/work/gmsh_work/gmsh/contrib/hxt/reparam/src
D:/work/gmsh_work/gmsh/contrib/hxt/core/include
D:/work/gmsh_work/gmsh/contrib/hxt/core/src
D:/work/gmsh_work/gmsh/contrib/hxt/Combine/src
D:/work/gmsh_work/gmsh/contrib/eigen
D:/work/gmsh_work/gmsh/contrib/onelab
D:/work/gmsh_work/gmsh/contrib/mpeg_encode/headers
D:/work/gmsh_work/gmsh/contrib/ANN/include
D:/work/gmsh_work/gmsh/contrib/ALGLIB
D:/work/gmsh_work/gmsh/contrib/DiscreteIntegration
D:/work/gmsh_work/gmsh/contrib/kbipack
D:/work/gmsh_work/gmsh/contrib/MathEx
D:/work/gmsh_work/gmsh/contrib/tinyxml2
D:/work/gmsh_work/gmsh/contrib/metis/include
D:/work/gmsh_work/gmsh/contrib/metis/libmetis
D:/work/gmsh_work/gmsh/contrib/metis/GKlib
D:/work/gmsh_work/gmsh/contrib/voro++/src
D:/work/gmsh_work/gmsh/contrib/HighOrderMeshOptimizer
D:/work/gmsh_work/gmsh/contrib/MeshOptimizer
D:/work/gmsh_work/gmsh/build/contrib/MeshOptimizer
D:/work/gmsh_work/gmsh/contrib/MeshQualityOptimizer
D:/work/gmsh_work/gmsh/contrib/domhex
D:/work/gmsh_work/gmsh/contrib/QuadTri
D:/work/gmsh_work/gmsh/contrib/blossom/MATCH
D:/work/gmsh_work/gmsh/contrib/blossom/concorde97
D:/work/gmsh_work/gmsh/contrib/blossom/concorde97/INCLUDE
D:/work/gmsh_work/gmsh/contrib/nii2mesh
D:/work/gmsh_work/gmsh/contrib/untangle
D:/work/gmsh_work/gmsh/contrib/Netgen
D:/work/gmsh_work/gmsh/contrib/Netgen/libsrc/include
D:/work/gmsh_work/gmsh/contrib/Netgen/nglib
D:/work/gmsh_work/gmsh/contrib/bamg
D:/work/gmsh_work/gmsh/contrib/bamg/bamglib
D:/work/gmsh_work/gmsh/contrib/gmm/include
D:/work/gmsh_work/gmsh/src/common
D:/work/gmsh_work/gmsh/src/fltk
D:/work/gmsh_work/gmsh/src/geo
D:/work/gmsh_work/gmsh/src/graphics
D:/work/gmsh_work/gmsh/src/mesh
D:/work/gmsh_work/gmsh/src/solver
D:/work/gmsh_work/gmsh/src/numeric
D:/work/gmsh_work/gmsh/src/parser
D:/work/gmsh_work/gmsh/src/plugin
D:/work/gmsh_work/gmsh/src/post
D:/work/gmsh_work/gmsh/api
C:/dev/FLTK/include
C:/dev/HDF_Group/HDF5/1.14.6/include
D:/work/gmsh_work/gmsh/build/src/common
```

```cmake
get_property(dirs DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY INCLUDE_DIRECTORIES)
message("Include directories: ${dirs}")
```

```cmake
# 获取并打印 gmsh 目标的 include 路径
get_target_property(gmsh_include_dirs gmsh INCLUDE_DIRECTORIES)
message("gmsh target include directories: ${gmsh_include_dirs}")
```

```cpp
enum Fl_Cursor {
  FL_CURSOR_DEFAULT    =  0, /**< the default cursor, usually an arrow: ↖*/ // U+2196
  FL_CURSOR_ARROW      = 35, /**< an arrow pointer: ↖*/ // U+2196
  FL_CURSOR_CROSS      = 66, /**< crosshair: ＋*/ // U+FF0B
  FL_CURSOR_WAIT       = 76, /**< busy indicator (for instance hourglass): ⌚,⌛*/ // U+231A, U+231B
  FL_CURSOR_INSERT     = 77, /**< I-beam: ⌶*/ // U+2336
  FL_CURSOR_HAND       = 31, /**< pointing hand: ☜*/ // U+261C
  FL_CURSOR_HELP       = 47, /**< question mark pointer:  ?*/
  FL_CURSOR_MOVE       = 27, /**< 4-pointed arrow or hand: ✥, ✋*/ // U+2725, U+270B

  /* Resize indicators */
  FL_CURSOR_NS         = 78, /**< up/down resize: ⇕ */ // U+21D5
  FL_CURSOR_WE         = 79, /**< left/right resize: ⇔*/ // U+21D4
  FL_CURSOR_NWSE       = 80, /**< diagonal resize: ⤡*/ // U+2921
  FL_CURSOR_NESW       = 81, /**< diagonal resize: ⤢*/ // U+2922
  FL_CURSOR_N          = 70, /**< upwards resize: ⤒*/ // U+2912
  FL_CURSOR_NE         = 69, /**< upwards, right resize: ↗*/ // U+2197
  FL_CURSOR_E          = 49, /**< rightwards resize: ⇥*/ // U+21E5
  FL_CURSOR_SE         =  8, /**< downwards, right resize: ⇲*/ // U+21F2
  FL_CURSOR_S          =  9, /**< downwards resize: ⤓*/ // U+2913
  FL_CURSOR_SW         =  7, /**< downwards, left resize: ↙*/ // U+2199
  FL_CURSOR_W          = 36, /**< leftwards resize: ⇤*/ // U+21E4
  FL_CURSOR_NW         = 68, /**< upwards, left resize: ⇱*/ // U+21F1

  FL_CURSOR_NONE       =255  /**< invisible. */
};
```

```cpp
//cursor(FL_CURSOR_CROSS, FL_BLACK, FL_WHITE);
  cursor(Fl_Cursor(66), FL_BLACK, FL_WHITE);
```

以下是你提供的 contrib 目录中部分模块的功能概述：
```
ALGLIB：一个数值分析和数据处理库，可能用于 Gmsh 的数学计算或优化。
ANN（Approximate Nearest Neighbors）：用于高效的最近邻搜索，可能用于网格生成或点云处理。
bamg（Bidimensional Anisotropic Mesh Generator）：二维各向异性网格生成器，用于生成高质量的三角形网格。
blossom：可能是用于匹配算法（如 Blossom 算法），在网格优化或拓扑处理中应用。
eigen：一个高性能的 C++ 线性代数库，可能用于矩阵运算或有限元分析。
gmm（GetFEM Matrix Library）：用于矩阵运算，可能支持 Gmsh 的有限元功能。
hxt（Hexahedral eXtrusion Toolkit）：高效的六面体和四面体网格生成工具，支持 OpenMP 并行化（与你的错误相关）。
HighOrderMeshOptimizer：优化高阶网格，确保高阶有限元方法的精度。
MeshQualityOptimizer：提高网格质量，优化网格的形状或拓扑。
metis：图分割库，用于并行网格划分或负载均衡。
Netgen：一个强大的三维网格生成器，集成到 Gmsh 中以支持复杂几何的网格生成。
voro++：Voronoi 分割库，可能用于生成 Voronoi 网格或分析几何结构。
WinslowUntangler：用于解纠缠网格，改善网格质量
```

```cmake
macro(append_gmsh_src DIRNAME FILES)
  foreach(FILE ${FILES})
    list(APPEND LIST ${DIRNAME}/${FILE})
  endforeach()
  set(GMSH_SRC ${GMSH_SRC};${LIST} PARENT_SCOPE)
  set(GMSH_DIRS ${GMSH_DIRS};${DIRNAME} PARENT_SCOPE)
endmacro()
```

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. -D CMAKE_POLICY_VERSION_MINIMUM=3.5 `
-D FLTK_DIR=c:/dev/FLTK/CMake/
cmake .. -G Ninja `
-D CMAKE_POLICY_VERSION_MINIMUM=3.5 `
-D CMAKE_C_COMPILER=clang `
-D CMAKE_CXX_COMPILER=clang++ `
-D FLTK_DIR=c:/dev/FLTK/CMake/ `
-D CMAKE_INSTALL_PREFIX=c:/dev/gmsh
```

```
cmake .. `
-D CMAKE_POLICY_VERSION_MINIMUM=3.5 `
-D CMAKE_C_COMPILER=clang `
-D CMAKE_CXX_COMPILER=clang++ `
-D FLTK_DIR=c:/dev/FLTK/CMake/ `
-D CMAKE_INSTALL_PREFIX=c:/dev/gmsh
```

```
cmake .. `
-D CMAKE_C_COMPILER=clang `
-D CMAKE_CXX_COMPILER=clang++ `
-D FLTK_DIR=c:/dev/FLTK/CMake/ `
-D CMAKE_INSTALL_PREFIX=c:/dev/gmsh
```

```cmake
  # then try the built-in FindFLTK module
  if(NOT HAVE_FLTK)
    set(FLTK_SKIP_FORMS TRUE)
    set(FLTK_SKIP_FLUID TRUE)
    #find_package(FLTK)
    find_package(FLTK CONFIG REQUIRED)
    if(FLTK_FOUND)
      add_subdirectory(src/fltk)
      set_config_option(HAVE_FLTK "Fltk")
      list(APPEND EXTERNAL_INCLUDES ${FLTK_INCLUDE_DIR})
    endif()
  endif()
```

```
Unicode(UTF-8 无签名)-代码页 65001
Unicode(UTF-8 带签名)-代码页 65001
```

```
c:\dev\FLTK\include\FL\Enumerations.H
```

```
d:\work\gmsh_work\gmsh-github-code-bak\src\geo\GModelIO_OBJ.cpp
```

```
-openmp;-openmp:llvm
-openmp:experimental
```

```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'   
cmake .. -G Ninja `
-D CMAKE_C_COMPILER=clang `
-D CMAKE_CXX_COMPILER=clang++ `
-D FLTK_DIR=c:/dev/FLTK/CMake/ `
-D CMAKE_INSTALL_PREFIX=c:/dev/gmsh
```

```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'   
cmake .. -G Ninja `
-D WIN32=1 `
-D CMAKE_C_COMPILER=clang `
-D CMAKE_CXX_COMPILER=clang++ `
-D FLTK_DIR=c:/dev/FLTK/CMake/ `
-D CMAKE_INSTALL_PREFIX=c:/dev/gmsh
```

```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'   
cmake .. -G Ninja `
-D CMAKE_C_COMPILER=clang-cl `
-D CMAKE_CXX_COMPILER=clang-cl `
-D FLTK_DIR=c:/dev/FLTK/CMake/ `
-D CMAKE_INSTALL_PREFIX=c:/dev/gmsh
```

```
cmake --build . *>&1 | Tee-Object -FilePath build_output.log
```

```
无法定位程序输入点 __kmpc_dispatch_deinit 于动态链接库 D:\work\gmsh_work\gmsh\build\gmsh.exe 上。
```

```
c:/Program Files/totalcmd/TOTALCMD64.EXE
dumpbin /dependents D:\work\gmsh_work\gmsh\build\gmsh.exe
dumpbin /dependents gmsh.exe
```

```
Search results:
[0 files and 0 directories found]
c:\Program Files\Microsoft Visual Studio\2022\Community\VC\Redist\MSVC\14.44.35112\debug_nonredist\x64\Microsoft.VC143.OpenMP.LLVM\libomp140.x86_64.dll
c:\Windows\System32\libomp140.x86_64.dll
```
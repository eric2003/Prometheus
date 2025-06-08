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
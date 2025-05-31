# OpenCascade Install

## Article Link

-  [【opencascade新手教程六】在ubuntu22.04下编译opencascade 7.8.0（详解cmake配置）](https://zhuanlan.zhihu.com/p/692844776).
-  [OpenCascade安装编译](https://blog.csdn.net/Zz_er/article/details/130237220).
-  [Windows下安装编译 Open Cascade 7.8.0](https://blog.csdn.net/Hudeyu777/article/details/135665472).
-  [www.opencascade.com](https://www.opencascade.com).
-  [下载地址](https://dev.opencascade.org/release).
-  [dev.opencascade.org](https://dev.opencascade.org/).
-  [【opencascade】常用资料整合](https://zhuanlan.zhihu.com/p/448986691).

## Codes

-  [github OCCT](https://github.com/Open-Cascade-SAS/OCCT).


```
FREETYPE_INCLUDE_DIR_freetype2 C:/msys64/mingw64/include/freetype2
FREETYPE_INCLUDE_DIR_ft2build C:/msys64/mingw64/include/freetype2
FREETYPE_LIBRARY_DEBUG C:/msys64/mingw64/lib/libfreetype.dll.lib
FREETYPE_LIBRARY_RELEASE C:/msys64/mingw64/lib/libfreetype.dll.lib

GIT_EXECUTABLE C:/Program Files/Git/cmd/git.exe
INSTALL_DIR C:/Program Files (x86)/OCCT

CMake Warning at CMakeLists.txt:983 (message):
  Could not find DLLs of used third-party products: 3RDPARTY_TCL_DLL_DIR
  3RDPARTY_TK_DLL_DIR 3RDPARTY_FREETYPE_DLL_DIR
```

```
TCL_INCLUDE_PATH C:/dev/ActiveTcl/include
TCL_LIBRARY C:/dev/ActiveTcl/lib/tcl86t.lib
TCL_TCLSH C:/dev/ActiveTcl/bin/tclsh.exe
TK_INCLUDE_PATH C:/dev/ActiveTcl/include
TK_LIBRARY C:/dev/ActiveTcl/lib/tk86t.lib
TK_WISH C:/dev/ActiveTcl/bin/wish.exe
```


```
Name
3RDPARTY_DIR
3RDPARTY_FREETYPE_DIR
3RDPARTY_FREETYPE_DLL
3RDPARTY_FREETYPE_DLL_DIR
```


```
-D3RDPARTY_FREETYPE_DIR="C:/freetype-2.13.3" ^
-D3RDPARTY_FREETYPE_DLL="C:/freetype-2.13.3/bin/freetype.dll" ^
-D3RDPARTY_FREETYPE_DLL_DIR="C:/freetype-2.13.3/bin"
```

```
-D3RDPARTY_FREETYPE_DIR="c:/msys64/mingw64/"
-D3RDPARTY_FREETYPE_DLL="c:/msys64/mingw64/bin/libfreetype-6.dll"
-D3RDPARTY_FREETYPE_DLL_DIR="c:/msys64/mingw64/bin"
```


| Name                                | Value                                      |
|-------------------------------------|--------------------------------------------|
| 3RDPARTY_DIR                        | C:/msys64/mingw64/                         |
| 3RDPARTY_FREETYPE_DIR                | C:/msys64/mingw64/                         |
| 3RDPARTY_FREETYPE_DLL                | C:/msys64/mingw64/bin/libfreetype-6.dll      |
| 3RDPARTY_FREETYPE_DLL_DIR            | C:/msys64/mingw64/bin                      |
| 3RDPARTY_FREETYPE_INCLUDE_DIR_freetype2| C:/msys64/mingw64/include/freetype2         |
| 3RDPARTY_FREETYPE_INCLUDE_DIR_ft2build | C:/msys64/mingw64/include/freetype2         |
| 3RDPARTY_FREETYPE_LIBRARY            | C:/msys64/mingw64/lib/libfreetype.dll.a      |
| 3RDPARTY_FREETYPE_LIBRARY_DIR         | C:/msys64/mingw64/lib                      |



```
3RDPARTY_TCL_DIR
3RDPARTY_TCL_DLL
3RDPARTY_TCL_DLL_DIR
3RDPARTY_TK_DIR
3RDPARTY_TK_DLL
3RDPARTY_TK_DLL_DIR
```


```
cmake -D3RDPARTY_TCL_DIR="C:/ActiveTcl-8.6.13" ^
      -D3RDPARTY_TCL_DLL="C:/ActiveTcl-8.6.13/bin/tcl86.dll" ^
      -D3RDPARTY_TCL_DLL_DIR="C:/ActiveTcl-8.6.13/bin" ^
      -D3RDPARTY_TK_DIR="C:/ActiveTcl-8.6.13" ^
      -D3RDPARTY_TK_DLL="C:/ActiveTcl-8.6.13/bin/tk86.dll" ^
      -D3RDPARTY_TK_DLL_DIR="C:/ActiveTcl-8.6.13/bin" ^
      -D3RDPARTY_TCL_INCLUDE_DIR="C:/ActiveTcl-8.6.13/include" ^
      -D3RDPARTY_TK_INCLUDE_DIR="C:/ActiveTcl-8.6.13/include" ..
```

```
3RDPARTY_TCL_DIR="c:/dev/ActiveTcl"
3RDPARTY_TCL_DLL="c:/dev/ActiveTcl/bin/tcl86t.dll"
3RDPARTY_TCL_DLL_DIR="c:/dev/ActiveTcl/bin"
3RDPARTY_TK_DIR="c:/dev/ActiveTcl"
3RDPARTY_TK_DLL="c:/dev/ActiveTcl/bin/tk86t.dll"
3RDPARTY_TK_DLL_DIR="c:/dev/ActiveTcl/bin"
```

```powershell
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
c:\dev\OCCT\win64\vc14\bin\DRAWEXE.exe
```


```powershell
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
c:/dev/OCCT/draw.bat
```

```
Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
The C compiler identification is MSVC 19.43.34810.0
The CXX compiler identification is MSVC 19.43.34810.0
Detecting C compiler ABI info
Detecting C compiler ABI info - done
Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
Detecting C compile features
Detecting C compile features - done
Detecting CXX compiler ABI info
Detecting CXX compiler ABI info - done
Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
Detecting CXX compile features
Detecting CXX compile features - done
Info: TCL is used by OCCT
Info: TK is used by OCCT
Info: FreeType is used by OCCT
Info: TKIVtk and TKIVtkDraw toolkits excluded due to VTK usage is disabled
Info: /D_WINDOWS has been removed from CMAKE_CXX_FLAGS
Info: /DWIN32 has been removed from CMAKE_CXX_FLAGS
Info: /D_WINDOWS has been removed from CMAKE_C_FLAGS
Info: /DWIN32 has been removed from CMAKE_C_FLAGS
Info: TK is used from TCL folder: C:/dev/ActiveTcl
Info: The directories of 3rdparty headers: 
	C:/dev/ActiveTcl/include
	C:/msys64/mingw64/include/freetype2
Info: The directories of 3rdparty libraries: 
	C:/dev/ActiveTcl/lib
	C:/msys64/mingw64/lib
CMake Warning at CMakeLists.txt:983 (message):
  Could not find DLLs of used third-party products: 3RDPARTY_TCL_DLL_DIR
  3RDPARTY_TK_DLL_DIR



Info: (09:01:46) Start collecting all OCCT header files into D:/work/opencascade_work/OCCT/build/inc ...
Info: (09:01:53) End the collecting
Info: Used native memory manager
Info: (09:01:53) OCCT toolkits processed
Info: (09:01:53) OCCT configuration files prepared
Configuring done (19.4s)
```

```
Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
The C compiler identification is MSVC 19.43.34810.0
The CXX compiler identification is MSVC 19.43.34810.0
Detecting C compiler ABI info
Detecting C compiler ABI info - done
Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
Detecting C compile features
Detecting C compile features - done
Detecting CXX compiler ABI info
Detecting CXX compiler ABI info - done
Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
Detecting CXX compile features
Detecting CXX compile features - done
Info: TCL is used by OCCT
Info: TK is used by OCCT
Info: FreeType is used by OCCT
Info: TKIVtk and TKIVtkDraw toolkits excluded due to VTK usage is disabled
Info: /D_WINDOWS has been removed from CMAKE_CXX_FLAGS
Info: /DWIN32 has been removed from CMAKE_CXX_FLAGS
Info: /D_WINDOWS has been removed from CMAKE_C_FLAGS
Info: /DWIN32 has been removed from CMAKE_C_FLAGS
Info: TK is used from TCL folder: C:/dev/ActiveTcl
Info: The directories of 3rdparty headers: 
	C:/dev/ActiveTcl/include
	C:/msys64/mingw64/include/freetype2
Info: The directories of 3rdparty libraries: 
	C:/dev/ActiveTcl/lib
	C:/msys64/mingw64/lib
CMake Warning at CMakeLists.txt:983 (message):
  Could not find DLLs of used third-party products: 3RDPARTY_TCL_DLL_DIR
  3RDPARTY_TK_DLL_DIR



Info: (09:01:46) Start collecting all OCCT header files into D:/work/opencascade_work/OCCT/build/inc ...
Info: (09:01:53) End the collecting
Info: Used native memory manager
Info: (09:01:53) OCCT toolkits processed
Info: (09:01:53) OCCT configuration files prepared
Configuring done (19.4s)
Generating done (3.4s)
```


```
6>已完成生成项目“TKStd.vcxproj”的操作 - 失败。
55>------ 已启动全部重新生成: 项目: TKDECascade, 配置: Release x64 ------
56>------ 已启动全部重新生成: 项目: TKDCAF, 配置: Release x64 ------
57>------ 已启动全部重新生成: 项目: TKXSDRAW, 配置: Release x64 ------
58>------ 已启动全部重新生成: 项目: TKTObjDRAW, 配置: Release x64 ------
50>LINK : fatal error LNK1181: 无法打开输入文件“..\..\..\win64\vc14\lib\TKOpenGl.lib”
50>已完成生成项目“TKOpenGlTest.vcxproj”的操作 - 失败。
59>------ 已启动全部重新生成: 项目: TKXSDRAWVRML, 配置: Release x64 ------
60>------ 已启动全部重新生成: 项目: TKXSDRAWSTL, 配置: Release x64 ------
61>------ 已启动全部重新生成: 项目: TKXSDRAWSTEP, 配置: Release x64 ------
62>------ 已启动全部重新生成: 项目: TKXSDRAWPLY, 配置: Release x64 ------
63>------ 已启动全部重新生成: 项目: TKXSDRAWOBJ, 配置: Release x64 ------
64>------ 已启动全部重新生成: 项目: TKXSDRAWIGES, 配置: Release x64 ------
65>------ 已启动全部重新生成: 项目: TKXSDRAWGLTF, 配置: Release x64 ------
66>------ 已启动全部重新生成: 项目: TKXSDRAWDE, 配置: Release x64 ------
67>------ 已启动全部重新生成: 项目: TKXDEDRAW, 配置: Release x64 ------
68>------ 已启动全部重新生成: 项目: TKQADraw, 配置: Release x64 ------
69>------ 已启动全部重新生成: 项目: ALL_BUILD, 配置: Release x64 ------
70>------ 已跳过全部重新生成: 项目: INSTALL, 配置: Release x64 ------
70>没有为此解决方案配置选中要生成的项目 
========== 全部重新生成: 14 成功，55 失败，1 已跳过 ==========
========== 重新生成 于 8:58 完成，耗时 02:31.180 分钟 ==========
```


```
22>BRepSweep_Tool.cxx
22>BRepSweep_Translation.cxx
22>BRepSweep_Trsf.cxx
22>Sweep_NumShape.cxx
22>Sweep_NumShapeIterator.cxx
22>Sweep_NumShapeTool.cxx
22>BRepPreviewAPI_MakeBox.cxx
22>BRepPrimAPI_MakeBox.cxx
22>BRepPrimAPI_MakeCone.cxx
22>BRepPrimAPI_MakeCylinder.cxx
23>HLRBRep_EdgeBuilder.cxx
23>HLRBRep_EdgeData.cxx
23>HLRBRep_EdgeFaceTool.cxx
23>HLRBRep_EdgeIList.cxx
23>HLRBRep_EdgeInterferenceTool.cxx
22>D:\work\opencascade_work\OCCT\build\inc\NCollection_BaseAllocator.hxx(2,10): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepSweep/BRepSweep_Prism.cxx”)
22>D:\work\opencascade_work\OCCT\src\FoundationClasses\TKernel\Standard\Standard_Handle.hxx(59,1): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepSweep/BRepSweep_Iterator.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\eh.h(14,10): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_Builder.cxx”)
22>D:\work\opencascade_work\OCCT\src\FoundationClasses\TKernel\Standard\Standard_Handle.hxx(273,32): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_Cylinder.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\functional(978,1): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepSweep/BRepSweep_NumLinearRegularSweep.cxx”)
22>D:\work\opencascade_work\OCCT\src\FoundationClasses\TKernel\NCollection\NCollection_Mat3.hxx(455,1): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepSweep/BRepSweep_Builder.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\atomic(1705,1): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepSweep/BRepSweep_Revol.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\__msvc_sanitizer_annotate_container.hpp(13,9): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_OneAxis.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\sstream(872,80): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_Sphere.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\memory(1732,14): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_GWedge.cxx”)
22>D:\work\opencascade_work\OCCT\src\FoundationClasses\TKernel\Standard\Standard_Handle.hxx(280,23): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_Wedge.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\xstring(1259,1): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_Revolution.cxx”)
22>C:\Program Files (x86)\Windows Kits\10\Include\10.0.22621.0\ucrt\wchar.h(29,16): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepSweep/BRepSweep_Rotation.cxx”)
22>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\istream(309,1): error C1060: 编译器的堆空间不足
22>(编译源文件“../../../../src/ModelingAlgorithms/TKPrim/BRepPrim/BRepPrim_FaceBuilder.cxx”)
22>BRepPrimAPI_MakeHalfSpace.cxx
22>BRepPrimAPI_MakeOneAxis.cxx
22>BRepPrimAPI_MakePrism.cxx
22>BRepPrimAPI_MakeRevol.cxx
23>HLRBRep_ExactIntersectionPointOfTheIntPCurvePCurveOfCInter_0.cxx
23>HLRBRep_FaceData.cxx
23>HLRBRep_FaceIterator.cxx
21>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(781,5): error : 无法从“CL.exe”读取输出: Could not load file or assembly 'System.Text.Json, Version=8.0.0.5, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51' or one of its dependencies. 页面文件太小，无法完成操作。 (Exception from HRESULT: 0x800705AF)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\xutility(261,94): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\vadefs.h(196,1): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_CInter_0.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\type_traits(17,9): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_Data.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\cwchar(91,32): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_AreaLimit.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\cmath(1,1): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_BSurfaceTool.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\xutility(1926,1): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRTopoBRep/HLRTopoBRep_FaceIsoLiner.cxx”)
23>C:\Program Files (x86)\Windows Kits\10\Include\10.0.22621.0\ucrt\stdio.h(1964,1): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRTopoBRep/HLRTopoBRep_VData.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\__msvc_iter_core.hpp(42,41): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRTopoBRep/HLRTopoBRep_DSFiller.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\stdexcept(50,1): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_Curve.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\type_traits(1935,1): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_CurveTool.cxx”)
23>C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\include\xutility(5246,30): error C1060: 编译器的堆空间不足
23>(编译源文件“../../../../src/ModelingAlgorithms/TKHLR/HLRBRep/HLRBRep_CLProps_0.cxx”)
```
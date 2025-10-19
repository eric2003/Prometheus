# Netgen

## Links

-  [Netgen mesh generator](https://github.com/NGSolve/netgen).
-  [ngsolve.org](https://ngsolve.org/).
-  [Netgen/NGSolve安装](https://blog.csdn.net/weixin_44897632/article/details/139760560).

## download

### git clone https://github.com/NGSolve/netgen.git
```
PS D:\work\netgen_work> git clone https://github.com/NGSolve/netgen.git
Cloning into 'netgen'...
remote: Enumerating objects: 32371, done.
remote: Counting objects: 100% (6706/6706), done.
remote: Compressing objects: 100% (523/523), done.
remote: Total 32371 (delta 6439), reused 6206 (delta 6183), pack-reused 25665 (from 3)
Receiving objects: 100% (32371/32371), 11.87 MiB | 133.00 KiB/s, done.
Resolving deltas: 100% (25723/25723), done.
```

### git clone https://github.com/NGSolve/ngsolve.git ngsolve-src
```
PS D:\work\netgen_work> git clone https://github.com/NGSolve/ngsolve.git ngsolve-src
Cloning into 'ngsolve-src'...
remote: Enumerating objects: 83514, done.
remote: Counting objects: 100% (3749/3749), done.
remote: Compressing objects: 100% (425/425), done.
remote: Total 83514 (delta 3385), reused 3412 (delta 3316), pack-reused 79765 (from 3)
Receiving objects: 100% (83514/83514), 61.28 MiB | 95.00 KiB/s, done.
Resolving deltas: 100% (63517/63517), done.
```

## check occt version

c:\dev\OCCT\inc\Standard_Version.hxx
```
// Primary definitions
#define OCC_VERSION_MAJOR 8
#define OCC_VERSION_MINOR 0
#define OCC_VERSION_MAINTENANCE 0
```

打开 Visual Studio 的命令行工具（如“Developer Command Prompt for VS 2022”）。
```
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************

C:\Program Files\Microsoft Visual Studio\2022\Community>set PYTHONIOENCODING=utf-8

C:\Program Files\Microsoft Visual Studio\2022\Community>
```

d:\work\netgen_work\netgen\libsrc\occ\vsocc.cpp
```cpp
#if OCC_VERSION_MAJOR>=7 && OCC_VERSION_MINOR>=5
              uv = triangulation -> UVNode(triangle(k));
#else              
              uv = triangulation -> UVNodes()(triangle(k));
#endif
```

```cpp
#if (OCC_VERSION_MAJOR>=7 && OCC_VERSION_MINOR>=5) || OCC_VERSION_MAJOR>=8
```

search libfreetype
```
13 files and directories found:
c:\msys64\mingw64\lib\libfreetype.a
c:\msys64\mingw64\lib\libfreetype.dll.a
c:\Program Files\Epic Games\UE_5.4\Engine\Source\ThirdParty\FreeType2\FreeType2-2.10.0\lib\Unix\aarch64-unknown-linux-gnueabi\libfreetype.FPIC.a
c:\Program Files\Epic Games\UE_5.4\Engine\Source\ThirdParty\FreeType2\FreeType2-2.10.0\lib\Unix\x86_64-unknown-linux-gnu\libfreetype.FPIC.a
c:\Users\eric\.julia\artifacts\09e3c39a4281ff9e36aa9071725a5e176004c32d\lib\libfreetype.dll.a
c:\msys64\mingw64\bin\libfreetype-6.dll
c:\Program Files (x86)\Steam\steamapps\common\SteamVR\tools\steamvr_environments\game\bin\win64\libfreetype-6.dll
c:\Users\eric\.julia\artifacts\09e3c39a4281ff9e36aa9071725a5e176004c32d\bin\libfreetype-6.dll
c:\Users\eric\nuget\packages\monogame\content builder task\3.8.0.1641\tools\netcoreapp3.1\any\libfreetype6.dylib
c:\msys64\mingw64\lib\libfreetype.dll.exp
c:\msys64\mingw64\lib\libfreetype.dll.lib
c:\Users\eric\AppData\Roaming\Microsoft\Windows\Recent\libfreetype.dll.lnk
c:\Users\eric\nuget\packages\monogame\content builder task\3.8.0.1641\tools\netcoreapp3.1\any\libfreetype6.so
```

```
libbz2-1.dll
libbrotlidec.dll
libpng16-16.dll
```

```
无法定位程序输入点 hb_ot_tags_from_script_and_language 于动态链接库 C:\dev\netgen\bin\libfreetype-6.dll 上;
```

```
dir C:\dev\netgen\bin\libfreetype-6.dll
dir libfreetype-6.dll
```

```
c:\dev\netgen\bin>dir libfreetype-6.dll
 驱动器 C 中的卷没有标签。
 卷的序列号是 6E19-00BE

 c:\dev\netgen\bin 的目录

2024/08/13  13:39           787,954 libfreetype-6.dll
               1 个文件        787,954 字节
               0 个目录 12,533,018,624 可用字节
```

```
dumpbin /exports C:\dev\netgen\bin\libfreetype-6.dll
dumpbin /exports libfreetype-6.dll
```

```
hb_ot_tags_from_script_and_language：
此函数是 HarfBuzz 库的一部分，HarfBuzz 是一个用于文本整形（text shaping）的开源库，通常与 FreeType 一起使用以支持高级字体渲染。
FreeType 可以选择性地与 HarfBuzz 集成。如果 FreeType 在编译时启用了 HarfBuzz 支持，某些 HarfBuzz 函数（如 hb_ot_tags_from_script_and_language）可能通过 FreeType 的 DLL 导出或由 HarfBuzz 的 DLL（如 libharfbuzz-0.dll）提供。
你的 libfreetype-6.dll（时间戳为 2024-08-13，版本未知，但导出函数中无 HarfBuzz 相关函数）可能是在 未启用 HarfBuzz 支持 的情况下编译的，或者 HarfBuzz 版本过旧。
```

```
libharfbuzz-0.dll
libbrotlicommon.dll
libglib-2.0-0.dll
libgraphite2.dll
libintl-8.dll
libiconv-2.dll
```
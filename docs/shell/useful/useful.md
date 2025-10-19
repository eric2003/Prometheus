# Useful

## Link

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).

## 常用命令

### $env:PATH

```powershell
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
```

### VsDevCmd.bat

```
cmd /k '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" && powershell'   
```

```
& "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64   
```

### "VsDevCmd.bat" -arch=x64

```cmd
C:\Users\eric>"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64   
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************

C:\Users\eric>
```

### &"VsDevCmd.bat" -arch=x64 && powershell
```
PS C:\Users\eric> &"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell   
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\eric>
```

### cmd.exe "/K" '"VsDevCmd.bat" -arch=x64 && powershell'
```
PS C:\Users\eric> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'   
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\eric> 
```

### cmd.exe "/K" '"vcvars64.bat" && powershell'
```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'   
```

### oneAPI\setvars.bat

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'   
```

### IMPORTED_TARGETS
```cmake
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )
```

### cmake .. -G "Ninja"

```cmake
cmake .. -G "Ninja" -D CMAKE_C_COMPILER=cl -D CMAKE_Fortran_COMPILER=ifx
```

### CMAKE_MODULE_PATH

```cmake
list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake")
```

```cmake
# 直接指定模块文件路径
include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/FindXXX.cmake")

# 调用FindXXX.cmake模块
find_package(XXX REQUIRED)
```

### msys Path
```
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
cmake -DCMAKE_FIND_DEBUG_MODE=TRUE ..
```

### oneAPI path
```
$env:PATH = "c:/Program Files (x86)/Intel/oneAPI/2025.0/bin;" + $env:PATH
c:\Program Files (x86)\Intel\oneAPI\2025.0\bin\tbb12_debug.dll
```

### qt6 path
```
$env:PATH = "c:/local/Qt/6.9.0/msvc2022_64/bin;" + $env:PATH
```

### pacman -Syu

```
pacman -Syu
```

### tar

```
tar -xvf 文件名.tar
tar -zxvf 文件名.tar.gz
tar -jxvf 文件名.tar.bz2
tar -Jxvf 文件名.tar.xz
```

### cp
```
cp -r 01/ 02/
cp -r 01a/ 01b/
```

### rm
windows
```powershell
rm * -recurse -Force
```

### export
```bash
export PATH=/usr/local/cuda-12.8/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.8/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

export PATH=/opt/hdfview/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/opt/hdfview/lib${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

### git pull

Use the git pull command to fetch the latest updates from the remote repository.
```
git pull
```

### sed

```
echo "banana" | sed 's/a/b/g'
echo "hello" | sed 's/e/h/g'
```

output
```
eric@eric-virtual-machine:~$ echo "banana" | sed 's/a/b/g'
bbnbnb
eric@eric-virtual-machine:~$ echo "hello" | sed 's/e/h/g'
hhllo
eric@eric-virtual-machine:~$ echo "hello" | sed 's/e/hj/g'
hhjllo
```

echo 'd:\work\vtk_2024_work\ModernVTK\' | sed 's/\\/\//g'
```
eric@eric-virtual-machine:~$ echo 'd:\work\vtk_2024_work\ModernVTK\' | sed 's/\\/\//g'
d:/work/vtk_2024_work/ModernVTK/
```

echo "d:\\work\\vtk_2024_work\\ModernVTK\\" | sed 's/\\/\//g'
```
eric@eric-virtual-machine:~$ echo "d:\\work\\vtk_2024_work\\ModernVTK\\" | sed 's/\\/\//g'
d:/work/vtk_2024_work/ModernVTK/
```
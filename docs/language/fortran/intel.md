# Intel(R) Fortran Compiler

## Link
-  [FORTRAN系列链接整理](https://zhuanlan.zhihu.com/p/662370470).
-  [CFD中基于Fortran的常见linux环境库配置](https://zhuanlan.zhihu.com/p/669344418).
-  [intel oneAPI fortran 编译器 ifx, icx 编译 LAPACK](https://zhuanlan.zhihu.com/p/13958124087).
-  [Intel新的Fortran编译器ifx移植指南](https://zhuanlan.zhihu.com/p/716905979).

## Makefile
-  [Writing Makefiles for Modern Fortran](https://aoterodelaroza.github.io/devnotes/modern-fortran-makefiles/).
-  [An introduction to make](https://fortran-lang.org/learn/building_programs/project_make/).

## Jom

jom is a clone of nmake to support the execution of multiple independent commands in parallel.
It basically adds the -j command line switch similar to GNU make.
The original blog post can still be found on the Qt blog

-  [Jom](https://wiki.qt.io/Jom).

## Interoperability of Fortran with C/C++

-  [Interoperability of Fortran with C/C++: coding tutorial (2024)](https://www.paulnorvig.com/guides/interoperability-of-fortran-with-cc.html).
-  [Example codes to demonstrate Fortran-C/C++ interoperability](https://github.com/aerosayan/fortran-c-interop).
-  [Interoperability: Fortran to C++](https://community.intel.com/t5/Intel-Fortran-Compiler/Interoperability-Fortran-to-C/td-p/1144147).
-  [C interoperability](https://fortranwiki.org/fortran/show/C+interoperability).
-  [Example of calling Fortran from C++ using the enhanced C/Fortran interoperability](https://gist.github.com/ivan-pi/13fcfc03a47294fa581077842dc7cac2).
-  [Standard Fortran and C Interoperability](https://ahamodel.uib.no/intel/GUID-C0FA4080-4548-4045-9E6D-EFE57A0DE1A3.html).
-  [C/C++ calling Fortran](https://www.ibm.com/docs/en/xl-c-and-cpp-aix/13.1.3?topic=guide-using-xl-cc-fortran).
-  [Just Talk to Each Other: Getting Fortran and C to Work Together](https://www.youtube.com/watch?v=z5km039ZVYE).
-  [c_interop_demo](https://gitlab.com/everythingfunctional/c_interop_demo).
-  [Standard Fortran and C Interoperability](https://www.intel.com/content/www/us/en/docs/fortran-compiler/developer-guide-reference/2025-1/standard-fortran-and-c-interoperability.html).


## CMake

-  [用CMake来编译Fortran](https://www.lainme.com/doku.php/blog/2015/12/%E7%94%A8cmake%E6%9D%A5%E7%BC%96%E8%AF%91fortran).



```
/link /LIBPATH:"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\lib\x64"
```

nmake
```powershell
$env:path += ";c:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\bin\Hostx64\x64\"
```

```powershell
%comspec% /k "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat"
cmd.exe /k "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat"
cmd.exe /k '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" && powershell'
cmd.exe "/K" '"C:\Program Files (x86)\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'
```

VS2022 LIB PATH(x86)
```
C:\Program Files\Microsoft Visual Studio\2022\Community>echo %LIB%
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\ATLMFC\lib\x86;
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\lib\x86;
C:\Program Files (x86)\Windows Kits\NETFXSDK\4.8\lib\um\x86;
C:\Program Files (x86)\Windows Kits\10\lib\10.0.22621.0\ucrt\x86;
C:\Program Files (x86)\Windows Kits\10\\lib\10.0.22621.0\\um\x86
```

VS2022 LIB PATH(x64)
```powershell
PS C:\Users\eric> $env:LIB
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\ATLMFC\lib\x64;
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\lib\x64;
C:\Program Files (x86)\Windows Kits\NETFXSDK\4.8\lib\um\x64;
C:\Program Files (x86)\Windows Kits\10\lib\10.0.22621.0\ucrt\x64;
C:\Program Files (x86)\Windows Kits\10\\lib\10.0.22621.0\\um\x64
```

```
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\nmake\01b\test> $env:LIB
C:\Program Files (x86)\Intel\oneAPI\tbb\latest\env\..\lib\\;
C:\Program Files (x86)\Intel\oneAPI\pti\latest\env\..\lib;
C:\Program Files (x86)\Intel\oneAPI\mpi\latest\env\\..\lib;
C:\Program Files (x86)\Intel\oneAPI\mkl\latest\lib;
C:\Program Files (x86)\Intel\oneAPI\ippcp\latest\lib;
C:\Program Files (x86)\Intel\oneAPI\ipp\latest\lib;
C:\Program Files (x86)\Intel\oneAPI\dnnl\latest\env\..\lib;
C:\Program Files (x86)\Intel\oneAPI\dal\latest\lib;
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\lib\clang\19\lib\windows;
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\opt\compiler\lib;
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\lib;
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\ATLMFC\lib\x64;
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\lib\x64;
C:\Program Files (x86)\Windows Kits\NETFXSDK\4.8\lib\um\x64;C:\Program Files (x86)\Windows Kits\10\lib\10.0.22621.0\ucrt\x64;
C:\Program Files (x86)\Windows Kits\10\\lib\10.0.22621.0\\um\x64;
C:\Program Files (x86)\Intel\oneAPI\umf\latest\lib;
C:\Program Files (x86)\Intel\oneAPI\tcm\latest\lib
```

```
C:\Program Files (x86)\Intel\oneAPI\tbb\latest\env\..\lib\
C:\Program Files (x86)\Intel\oneAPI\pti\latest\env\..\lib
C:\Program Files (x86)\Intel\oneAPI\mpi\latest\env\\..\lib
C:\Program Files (x86)\Intel\oneAPI\mkl\latest\lib
C:\Program Files (x86)\Intel\oneAPI\ippcp\latest\lib
C:\Program Files (x86)\Intel\oneAPI\ipp\latest\lib
C:\Program Files (x86)\Intel\oneAPI\dnnl\latest\env\..\lib
C:\Program Files (x86)\Intel\oneAPI\dal\latest\lib
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\lib\clang\19\lib\windows
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\opt\compiler\lib
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\lib
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\ATLMFC\lib\x64
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\lib\x64
C:\Program Files (x86)\Windows Kits\NETFXSDK\4.8\lib\um\x64
C:\Program Files (x86)\Windows Kits\10\lib\10.0.22621.0\ucrt\x64
C:\Program Files (x86)\Windows Kits\10\\lib\10.0.22621.0\\um\x64
C:\Program Files (x86)\Intel\oneAPI\umf\latest\lib
C:\Program Files (x86)\Intel\oneAPI\tcm\latest\lib
```

VS2022 PATH
```
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\bin\HostX64\x64
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\VC\VCPackages
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TestWindow
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer
C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\bin\Roslyn
C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\x64\
C:\Program Files\Microsoft Visual Studio\2022\Community\Team Tools\DiagnosticsHub\Collector
C:\Program Files (x86)\Windows Kits\10\bin\10.0.22621.0\x64
C:\Program Files (x86)\Windows Kits\10\bin\x64
C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\amd64
C:\Windows\Microsoft.NET\Framework64\v4.0.30319
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\
C:\Program Files\PowerShell\7
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\libnvvp
C:\dev\VulkanSDK\1.3.280.0\Bin
c:\dev\FFmpeg\bin\
C:\Program Files\Microsoft MPI\Bin\
C:\dev\ActiveTcl\bin
D:\software\Tecplot\Tecplot 360 EX 2016 R2\bin
C:\Program Files\Common Files\Oracle\Java\javapath
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\libnvvp
C:\Program Files (x86)\VMware\VMware Workstation\bin\
C:\Windows\system32
C:\Windows
C:\Windows\System32\Wbem
C:\Windows\System32\WindowsPowerShell\v1.0\
C:\Windows\System32\OpenSSH\
C:\Program Files\dotnet\
C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Program Files (x86)\NetSarang\Xshell 7\
C:\Program Files (x86)\NetSarang\Xftp 7\
D:\software\Matlab\runtime\win64
D:\software\Matlab\bin
D:\software\Matlab\polyspace\bin
c:\dev\debug\jsoncpp\bin\
C:\Program Files\CodeBlocks\MinGW\bin
c:\Program Files\doxygen\bin\
C:\ProgramData\chocolatey\bin
C:\Program Files\gs\gs10.03.0\bin
C:\Program Files\Graphviz\bin
c:\dev\VTK_debug\bin\
c:\dev\HDF_Group\HDF5\1.14.2\bin\
c:\dev\VTK\bin\
c:\dev\glew\bin\
c:\dev\cgns\4.4.0\bin\
c:\local\Qt\6.7.1\msvc2019_64\bin\
c:\dev\QtNodesLibrary\bin\
C:\Program Files\nodejs\
C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\
C:\Program Files\NVIDIA Corporation\Nsight Compute 2024.2.1\
C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Users\eric\.elan\bin
C:\Program Files\PowerShell\7\
C:\Program Files\Git\cmd
c:\Program Files\CMake\bin
C:\Users\eric\AppData\Local\Programs\Python\Python313\Scripts\
C:\Users\eric\AppData\Local\Programs\Python\Python313\
C:\Users\eric\.elan\bin
C:\Users\eric\AppData\Local\ActiveState\StateTool\release\bin
C:\Users\eric\AppData\Local\activestate\cache\bin
D:\software\texlive\2022\bin\win32
C:\Users\eric\AppData\Local\Microsoft\WindowsApps
C:\Users\eric\AppData\Local\GitHubDesktop\bin
C:\Users\eric\AppData\Local\Programs\MiKTeX\miktex\bin\x64\
c:\Program Files\MySQL\MySQL Server 8.0\bin\
C:\dev\LLVM\bin
c:\dev\win_flex_bison3\
C:\Users\eric\AppData\Local\Programs\Microsoft VS Code\bin
c:\local\mingw32\bin
C:\Users\eric\AppData\Local\Programs\Python\Python312\Scripts
c:\dev\freeglut\bin\
c:\dev\SDL3\bin\
c:\dev\GLFW\bin\
c:\local\Qt\6.7.2\msvc2019_64\bin\
c:\Program Files (x86)\HTML Help Workshop\
C:\Users\eric\AppData\Roaming\npm
C:\Users\eric\.dotnet\tools
C:\Users\eric\AppData\Local\Programs\Julia-1.11.4\bin
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\Ninja
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\VC\Linux\bin\ConnectionManagerExe
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\vcpkg
```

oneAPI PATH
```
C:\Program Files (x86)\Intel\oneAPI\tbb\latest\env\..\bin\
C:\Program Files (x86)\Intel\oneAPI\pti\latest\env\..\bin
C:\Program Files (x86)\Intel\oneAPI\ocloc\latest\bin
C:\Program Files (x86)\Intel\oneAPI\mpi\latest\env\..\opt\mpi\libfabric\bin
C:\Program Files (x86)\Intel\oneAPI\mpi\latest\env\..\bin
C:\Program Files (x86)\Intel\oneAPI\mkl\latest\bin
C:\Program Files (x86)\Intel\oneAPI\ippcp\latest\bin
C:\Program Files (x86)\Intel\oneAPI\ipp\latest\bin
C:\Program Files (x86)\Intel\oneAPI\dpcpp-ct\latest\env\..\bin
C:\Program Files (x86)\Intel\oneAPI\dnnl\latest\env\..\bin
C:\Program Files (x86)\Intel\oneAPI\dev-utilities\latest\bin
C:\Program Files (x86)\Intel\oneAPI\debugger\latest\env\..\opt\debugger\bin
C:\Program Files (x86)\Intel\oneAPI\dal\latest\bin
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\lib\ocloc
C:\Program Files (x86)\Intel\oneAPI\compiler\latest\bin
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.43.34808\bin\HostX64\x64
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\VC\VCPackages
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TestWindow
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer
C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\bin\Roslyn
C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\x64\
C:\Program Files\Microsoft Visual Studio\2022\Community\Team Tools\DiagnosticsHub\Collector
C:\Program Files (x86)\Windows Kits\10\bin\10.0.22621.0\x64
C:\Program Files (x86)\Windows Kits\10\bin\x64
C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\amd64
C:\Windows\Microsoft.NET\Framework64\v4.0.30319
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\
C:\Program Files\PowerShell\7
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\libnvvp
C:\dev\VulkanSDK\1.3.280.0\Bin
c:\dev\FFmpeg\bin\
C:\Program Files\Microsoft MPI\Bin\
C:\dev\ActiveTcl\bin
D:\software\Tecplot\Tecplot 360 EX 2016 R2\bin
C:\Program Files\Common Files\Oracle\Java\javapath
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\libnvvp
C:\Program Files (x86)\VMware\VMware Workstation\bin\
C:\Windows\system32
C:\Windows
C:\Windows\System32\Wbem
C:\Windows\System32\WindowsPowerShell\v1.0\
C:\Windows\System32\OpenSSH\
C:\Program Files\dotnet\
C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Program Files (x86)\NetSarang\Xshell 7\
C:\Program Files (x86)\NetSarang\Xftp 7\
D:\software\Matlab\runtime\win64
D:\software\Matlab\bin
D:\software\Matlab\polyspace\bin
c:\dev\debug\jsoncpp\bin\
C:\Program Files\CodeBlocks\MinGW\bin
c:\Program Files\doxygen\bin\
C:\ProgramData\chocolatey\bin
C:\Program Files\gs\gs10.03.0\bin
C:\Program Files\Graphviz\bin
c:\dev\VTK_debug\bin\
c:\dev\HDF_Group\HDF5\1.14.2\bin\
c:\dev\VTK\bin\
c:\dev\glew\bin\
c:\dev\cgns\4.4.0\bin\
c:\local\Qt\6.7.1\msvc2019_64\bin\
c:\dev\QtNodesLibrary\bin\
C:\Program Files\nodejs\
C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\
C:\Program Files\NVIDIA Corporation\Nsight Compute 2024.2.1\
C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Users\eric\.elan\bin
C:\Program Files\PowerShell\7\
C:\Program Files\Git\cmd
c:\Program Files\CMake\bin
C:\Users\eric\AppData\Local\Programs\Python\Python313\Scripts\
C:\Users\eric\AppData\Local\Programs\Python\Python313\
C:\Users\eric\.elan\bin
C:\Users\eric\AppData\Local\ActiveState\StateTool\release\bin
C:\Users\eric\AppData\Local\activestate\cache\bin
D:\software\texlive\2022\bin\win32
C:\Users\eric\AppData\Local\Microsoft\WindowsApps
C:\Users\eric\AppData\Local\GitHubDesktop\bin
C:\Users\eric\AppData\Local\Programs\MiKTeX\miktex\bin\x64\
c:\Program Files\MySQL\MySQL Server 8.0\bin\
C:\dev\LLVM\bin
c:\dev\win_flex_bison3\
C:\Users\eric\AppData\Local\Programs\Microsoft VS Code\bin
c:\local\mingw32\bin
C:\Users\eric\AppData\Local\Programs\Python\Python312\Scripts
c:\dev\freeglut\bin\
c:\dev\SDL3\bin\
c:\dev\GLFW\bin\
c:\local\Qt\6.7.2\msvc2019_64\bin\
c:\Program Files (x86)\HTML Help Workshop\
C:\Users\eric\AppData\Roaming\npm
C:\Users\eric\.dotnet\tools
C:\Users\eric\AppData\Local\Programs\Julia-1.11.4\bin
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\Ninja
C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\VC\Linux\bin\ConnectionManagerExe
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\vcpkg
C:\Program Files (x86)\Intel\oneAPI\advisor\2025.0\bin64
C:\Program Files (x86)\Intel\oneAPI\umf\latest\bin
C:\Program Files (x86)\Intel\oneAPI\tcm\latest\bin
C:\Program Files (x86)\Intel\oneAPI\vtune\2025.0\bin64
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

output
```powershell
PS C:\Users\eric> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
:: initializing oneAPI environment...
   Initializing Visual Studio command-line environment...
   Visual Studio version 17.13.6 environment configured.
   "C:\Program Files\Microsoft Visual Studio\2022\Community\"
   Visual Studio command-line environment initialized for: 'x64'
:  advisor -- latest
:  compiler -- latest
:  dal -- latest
:  debugger -- latest
:  dev-utilities -- latest
:  dnnl -- latest
:  dpcpp-ct -- latest
:  dpl -- latest
:  ipp -- latest
:  ippcp -- latest
:  mkl -- latest
:  mpi -- latest
:  ocloc -- latest
:  pti -- latest
:  tbb -- latest
:  umf -- latest
:  vtune -- latest
:: oneAPI environment initialized ::
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
```

get-command ifx
```powershell
PS C:\Users\eric> get-command ifx

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     ifx.exe                                            2025.0.4.0 C:\Program Files (x86)\Intel\oneAPI\co...
```

or

gcm ifx
```powershell
PS C:\Users\eric> gcm ifx

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     ifx.exe                                            2025.0.4.0 C:\Program Files (x86)\Intel\oneAPI\co...
```

ifx --version
```powershell
PS C:\Users\eric> ifx --version
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

ifx: command line warning #10006: ignoring unknown option '/-version'
ifx: command line error: no files specified; for help type "ifx /help"
```

## ifx compile

### example 1

main.f90
```fortran
program main
    print *, 'Hello, World!'
end program main
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01\build> ifx ../main.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:main.exe
-subsystem:console
main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\01\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18      9:39         566784 main.exe
-a----         2025/4/18      9:39           1221 main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01\build> .\main.exe
 Hello, World!
```

### example 2

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build> ifx -c ../main.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     10:06           1221 main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build> ifx .\main.obj -o main
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:main.exe
-subsystem:console
.\main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     10:09         566784 main.exe
-a----         2025/4/18     10:06           1221 main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01a\build> .\main.exe
 Hello, World!
```

### example 3

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build> ifx -c ../main.f90 -o main.obj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     10:33           1221 main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build> ifx ./main.obj -o main
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:main.exe
-subsystem:console
./main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     10:34         566784 main.exe
-a----         2025/4/18     10:34           1221 main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\01b\build> .\main.exe
 Hello, World!
```

### example 4

main.f90
```fortran
program main_prog
implicit none

    call sub1
    call sub2
   
end program main_prog
```

sub1.f90
```fortran
subroutine sub1() 
implicit none

    print*,"haha1"
    
end subroutine sub1
```

sub2.f90
```fortran
subroutine sub2() 
implicit none

    print*,"haha2"
    
end subroutine sub2
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02\build> ifx ../main.f90 ../sub1.f90 ../sub2.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:main.exe
-subsystem:console
main.obj
sub1.obj
sub2.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\02\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:01         566784 main.exe
-a----         2025/4/18     11:01           1118 main.obj
-a----         2025/4/18     11:01            992 sub1.obj
-a----         2025/4/18     11:01            992 sub2.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02\build> .\main.exe
 haha1
 haha2
```

### example 5

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ifx -c ../main.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:16           1118 main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ifx -c ../sub1.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:16           1118 main.obj
-a----         2025/4/18     11:18            992 sub1.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ifx -c ../sub2.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:16           1118 main.obj
-a----         2025/4/18     11:18            992 sub1.obj
-a----         2025/4/18     11:19            992 sub2.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ifx ./main.obj ./sub1.obj ./sub2.obj -o main
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:main.exe
-subsystem:console
./main.obj
./sub1.obj
./sub2.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:19         566784 main.exe
-a----         2025/4/18     11:16           1118 main.obj
-a----         2025/4/18     11:18            992 sub1.obj
-a----         2025/4/18     11:19            992 sub2.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\02a\build> .\main.exe
 haha1
 haha2
```

### example 6

main.f90
```fortran
module mymod1  
implicit none 

   integer, parameter :: N = 1024 
   
contains      
   subroutine show_N()          
      print*, "N = ", N          
   end subroutine show_N 
   
end module mymod1 

module mymod2
implicit none 

   integer, parameter :: M = 256
   
contains      
   subroutine show_M()          
      print*, "M = ", M          
   end subroutine show_M 
   
end module mymod2

program main_prog     
use mymod1
use mymod2
implicit none     
   
   call show_N() 
   call show_M()
   
end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\03\build> ifx ../main.f90 -o main
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:main.exe
-subsystem:console
main.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\03\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\03\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:32         566784 main.exe
-a----         2025/4/18     11:32           2057 main.obj
-a----         2025/4/18     11:32            454 mymod1.mod
-a----         2025/4/18     11:32            453 mymod2.mod


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\03\build> .\main.exe
 N =         1024
 M =          256
```

### example 7

main.f90
```fortran
program main_prog     
use mod1
use mod2
use mod3
implicit none     
   
   call show_N1() 
   call show_N2()
   call show_N3()

end program main_prog
```

onemod.f90
```fortran
module mod3
implicit none 

   integer, parameter :: N3 = 3
   
contains      
   subroutine show_N3()
      print*, "N3 = ", N3
   end subroutine show_N3
   
end module mod3
```

twomods.f90
```fortran
module mod1
implicit none 

   integer, parameter :: N1 = 1
   
contains      
   subroutine show_N1()
      print*, "N1 = ", N1
   end subroutine show_N1
   
end module mod1

module mod2
implicit none 

   integer, parameter :: N2 = 2
   
contains      
   subroutine show_N2()
      print*, "N2 = ", N2
   end subroutine show_N2
   
end module mod2
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ifx -c ../twomods.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:52            454 mod1.mod
-a----         2025/4/18     11:52            454 mod2.mod
-a----         2025/4/18     11:52           1453 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:52            454 mod1.mod
-a----         2025/4/18     11:52            454 mod2.mod
-a----         2025/4/18     11:53            453 mod3.mod
-a----         2025/4/18     11:53           1138 onemod.obj
-a----         2025/4/18     11:52           1453 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ifx -c ../main.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:54           1199 main.obj
-a----         2025/4/18     11:52            454 mod1.mod
-a----         2025/4/18     11:52            454 mod2.mod
-a----         2025/4/18     11:53            453 mod3.mod
-a----         2025/4/18     11:53           1138 onemod.obj
-a----         2025/4/18     11:52           1453 twomods.obj

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ifx ./main.obj ./twomods.obj ./onemod.obj -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
./main.obj
./twomods.obj
./onemod.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     11:54           1199 main.obj
-a----         2025/4/18     11:52            454 mod1.mod
-a----         2025/4/18     11:52            454 mod2.mod
-a----         2025/4/18     11:53            453 mod3.mod
-a----         2025/4/18     11:53           1138 onemod.obj
-a----         2025/4/18     11:55         566784 testprj.exe
-a----         2025/4/18     11:52           1453 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\04\build> .\testprj.exe
 N1 =            1
 N2 =            2
 N3 =            3
```

### example 8

main.f90
```fortran
program main_prog     
use mod1
use mod2
use mod3
implicit none     
   
   call show_N1() 
   call show_N2()
   call show_N3()

end program main_prog
```

onemod.f90
```fortran
module mod3
implicit none 

   integer, parameter :: N3 = 3
   
contains      
   subroutine show_N3()
      print*, "N3 = ", N3
   end subroutine show_N3
   
end module mod3
```

twomods.f90
```fortran
module mod1
implicit none 

   integer, parameter :: N1 = 1
   
contains      
   subroutine show_N1()
      print*, "N1 = ", N1
   end subroutine show_N1
   
end module mod1

module mod2
use mod3
implicit none 

   integer, parameter :: N2 = 2
   
contains      
   subroutine show_N2()
      print*, "N2 = ", N2
      print*, " begin to call show_N3() in show_N2()"
      call show_N3()
      print*, " end to call show_N3() in show_N2()"
   end subroutine show_N2
   
end module mod2
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ifx -c ../twomods.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

../twomods.f90(14): error #7002: Error in opening the compiled module file.  Check INCLUDE paths.   [MOD3]
use mod3
----^
compilation aborted for ../twomods.f90 (code 1)
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     12:39            454 mod1.mod


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     12:39            454 mod1.mod


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> rm *
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     12:41            453 mod3.mod
-a----         2025/4/18     12:41           1138 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ifx -c ../twomods.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     12:42            454 mod1.mod
-a----         2025/4/18     12:42            656 mod2.mod
-a----         2025/4/18     12:41            453 mod3.mod
-a----         2025/4/18     12:41           1138 onemod.obj
-a----         2025/4/18     12:42           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ifx -c ../main.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     12:43           1199 main.obj
-a----         2025/4/18     12:42            454 mod1.mod
-a----         2025/4/18     12:42            656 mod2.mod
-a----         2025/4/18     12:41            453 mod3.mod
-a----         2025/4/18     12:41           1138 onemod.obj
-a----         2025/4/18     12:42           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ifx ./main.obj ./twomods.obj ./onemod.obj -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
./main.obj
./twomods.obj
./onemod.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/18     12:43           1199 main.obj
-a----         2025/4/18     12:42            454 mod1.mod
-a----         2025/4/18     12:42            656 mod2.mod
-a----         2025/4/18     12:41            453 mod3.mod
-a----         2025/4/18     12:41           1138 onemod.obj
-a----         2025/4/18     12:44         567296 testprj.exe
-a----         2025/4/18     12:42           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\05\build> .\testprj.exe
 N1 =            1
 N2 =            2
  begin to call show_N3() in show_N2()
 N3 =            3
  end to call show_N3() in show_N2()
 N3 =            3
```

### example 9

main.f90
```fortran
program main_prog     
use mymod1
use mymod2
implicit none     
   
   call show_N() 
   call show_M()
   call sub1
   call sub2   
end program main_prog
```

onemod.f90
```fortran
module mod3
implicit none 

   integer, parameter :: N3 = 3
   
contains      
   subroutine show_N3()
      print*, "N3 = ", N3
   end subroutine show_N3
   
end module mod3
```

twomods.f90
```fortran
module mod1
implicit none 

   integer, parameter :: N1 = 1
   
contains      
   subroutine show_N1()
      print*, "N1 = ", N1
   end subroutine show_N1
   
end module mod1

module mod2
use mod3
implicit none 

   integer, parameter :: N2 = 2
   
contains      
   subroutine show_N2()
      print*, "N2 = ", N2
      print*, " begin to call show_N3() in show_N2()"
      call show_N3()
      print*, " end to call show_N3() in show_N2()"
   end subroutine show_N2
   
end module mod2
```

mymod1.f90
```fortran
module mymod1  
implicit none 

   integer, parameter :: N = 1024 
   
contains      
   subroutine show_N()          
      print*, "N = ", N          
   end subroutine show_N 
   
end module mymod1 
```

mymod2.f90
```fortran
module mymod2
implicit none 

   integer, parameter :: M = 256
   
contains      
   subroutine show_M()          
      print*, "M = ", M          
   end subroutine show_M 
   
end module mymod2
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output 
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ifx -c ../mymod1.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19      2:21            456 mymod1.mod
-a----         2025/4/19      2:21           1138 mymod1.obj

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ifx -c ../mymod2.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19      2:21            456 mymod1.mod
-a----         2025/4/19      2:21           1138 mymod1.obj
-a----         2025/4/19      2:22            455 mymod2.mod
-a----         2025/4/19      2:22           1138 mymod2.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ifx -c ../sub1.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19      2:21            456 mymod1.mod
-a----         2025/4/19      2:21           1138 mymod1.obj
-a----         2025/4/19      2:22            455 mymod2.mod
-a----         2025/4/19      2:22           1138 mymod2.obj
-a----         2025/4/19      2:23            992 sub1.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ifx -c ../sub2.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19      2:21            456 mymod1.mod
-a----         2025/4/19      2:21           1138 mymod1.obj
-a----         2025/4/19      2:22            455 mymod2.mod
-a----         2025/4/19      2:22           1138 mymod2.obj
-a----         2025/4/19      2:23            992 sub1.obj
-a----         2025/4/19      2:24            992 sub2.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ifx -c ../main.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19      2:25           1218 main.obj
-a----         2025/4/19      2:21            456 mymod1.mod
-a----         2025/4/19      2:21           1138 mymod1.obj
-a----         2025/4/19      2:22            455 mymod2.mod
-a----         2025/4/19      2:22           1138 mymod2.obj
-a----         2025/4/19      2:23            992 sub1.obj
-a----         2025/4/19      2:24            992 sub2.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ifx ./main.obj ./sub1.obj ./sub2.obj ./mymod1.obj ./mymod2.obj -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
./main.obj
./sub1.obj
./sub2.obj
./mymod1.obj
./mymod2.obj
PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19      2:25           1218 main.obj
-a----         2025/4/19      2:21            456 mymod1.mod
-a----         2025/4/19      2:21           1138 mymod1.obj
-a----         2025/4/19      2:22            455 mymod2.mod
-a----         2025/4/19      2:22           1138 mymod2.obj
-a----         2025/4/19      2:23            992 sub1.obj
-a----         2025/4/19      2:24            992 sub2.obj
-a----         2025/4/19      2:27         566784 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\ifx\06\build> .\testprj.exe
 N =         1024
 M =          256
 haha1
 haha2
```

## Fortran static library

### example 1

sub.f90
```fortran
subroutine sub() 
implicit none

    print*,"haha"
    
end subroutine sub
```

main.f90
```fortran
program main_prog
implicit none

    call sub()
   
end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ifx -c ../sub.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     14:39            991 sub.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> lib /OUT:sub.lib sub.obj
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     14:39           1210 sub.lib
-a----         2025/4/19     14:39            991 sub.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> ifx ../main.f90 ../../lib/build/sub.lib -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/sub.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     14:52           1085 main.obj
-a----         2025/4/19     14:52         566784 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> .\testprj.exe
 haha
```

### example 2

onemod.f90
```fortran
module onemod  
implicit none 

   integer, parameter :: N = 1024 
   
contains      
   subroutine show_N()          
      print*, "N = ", N          
   end subroutine show_N 
   
end module onemod 
```

main.f90
```fortran
program main_prog     
use onemod
implicit none     
   
   call show_N() 
   
end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:23            456 onemod.mod
-a----         2025/4/19     15:23           1138 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> lib /OUT:onemod.lib onemod.obj
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:24           1406 onemod.lib
-a----         2025/4/19     15:23            456 onemod.mod
-a----         2025/4/19     15:23           1138 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> ifx ../main.f90 ../../lib/build/onemod.lib -I ../../lib/build/ -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/onemod.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:24           1102 main.obj
-a----         2025/4/19     15:24         566784 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> .\testprj.exe
 N =         1024
```

### example 3

onemod.f90
```fortran
module mod3
implicit none 

   integer, parameter :: N3 = 3
   
contains      
   subroutine show_N3()
      print*, "N3 = ", N3
   end subroutine show_N3
   
end module mod3
```

twomods.f90
```fortran
module mod1
implicit none 

   integer, parameter :: N1 = 1
   
contains      
   subroutine show_N1()
      print*, "N1 = ", N1
   end subroutine show_N1
   
end module mod1

module mod2
use mod3
implicit none 

   integer, parameter :: N2 = 2
   
contains      
   subroutine show_N2()
      print*, "N2 = ", N2
      print*, " begin to call show_N3() in show_N2()"
      call show_N3()
      print*, " end to call show_N3() in show_N2()"
   end subroutine show_N2
   
end module mod2
```

main.f90
```fortran
program main_prog     
use mod1
use mod2
use mod3
implicit none     
   
   call show_N1() 
   call show_N2()
   call show_N3()

end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:46            453 mod3.mod
-a----         2025/4/19     15:46           1138 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> ifx -c ../twomods.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:48            454 mod1.mod
-a----         2025/4/19     15:48            656 mod2.mod
-a----         2025/4/19     15:46            453 mod3.mod
-a----         2025/4/19     15:46           1138 onemod.obj
-a----         2025/4/19     15:48           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> lib /OUT:mods.lib onemod.obj twomods.obj
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:48            454 mod1.mod
-a----         2025/4/19     15:48            656 mod2.mod
-a----         2025/4/19     15:46            453 mod3.mod
-a----         2025/4/19     15:49           3396 mods.lib
-a----         2025/4/19     15:46           1138 onemod.obj
-a----         2025/4/19     15:48           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\test\build> ifx ../main.f90 ../../lib/build/mods.lib -I ../../lib/build/ -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/mods.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     15:51           1199 main.obj
-a----         2025/4/19     15:51         567296 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\03\test\build> .\testprj.exe
 N1 =            1
 N2 =            2
  begin to call show_N3() in show_N2()
 N3 =            3
  end to call show_N3() in show_N2()
 N3 =            3
```

### example 4

onemod.f90
```fortran
module mod3
implicit none 

   integer, parameter :: N3 = 3
   
contains      
   subroutine show_N3()
      print*, "N3 = ", N3
   end subroutine show_N3
   
end module mod3
```

twomods.f90
```fortran
module mod1
implicit none 

   integer, parameter :: N1 = 1
   
contains      
   subroutine show_N1()
      print*, "N1 = ", N1
   end subroutine show_N1
   
end module mod1

module mod2
use mod3
implicit none 

   integer, parameter :: N2 = 2
   
contains      
   subroutine show_N2()
      print*, "N2 = ", N2
      print*, " begin to call show_N3() in show_N2()"
      call show_N3()
      print*, " end to call show_N3() in show_N2()"
   end subroutine show_N2
   
end module mod2
```

sub1.f90
```fortran
subroutine sub1() 
implicit none

    print*,"haha1"
    
end subroutine sub1
```

sub2.f90
```fortran
subroutine sub2() 
implicit none

    print*,"haha2"
    
end subroutine sub2
```

main.f90
```fortran
program main_prog     
use mod1
use mod2
use mod3
implicit none     
   
   call show_N1() 
   call show_N2()
   call show_N3()
   call sub1()
   call sub2()

end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:13            453 mod3.mod
-a----         2025/4/19     17:13           1138 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ifx -c ../twomods.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:14            454 mod1.mod
-a----         2025/4/19     17:14            656 mod2.mod
-a----         2025/4/19     17:13            453 mod3.mod
-a----         2025/4/19     17:13           1138 onemod.obj
-a----         2025/4/19     17:14           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ifx -c ../sub1.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:14            454 mod1.mod
-a----         2025/4/19     17:14            656 mod2.mod
-a----         2025/4/19     17:13            453 mod3.mod
-a----         2025/4/19     17:13           1138 onemod.obj
-a----         2025/4/19     17:14            992 sub1.obj
-a----         2025/4/19     17:14           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ifx -c ../sub2.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:14            454 mod1.mod
-a----         2025/4/19     17:14            656 mod2.mod
-a----         2025/4/19     17:13            453 mod3.mod
-a----         2025/4/19     17:13           1138 onemod.obj
-a----         2025/4/19     17:14            992 sub1.obj
-a----         2025/4/19     17:14            992 sub2.obj
-a----         2025/4/19     17:14           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> lib /OUT:mystatic.lib onemod.obj twomods.obj sub1.obj sub2.obj
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:14            454 mod1.mod
-a----         2025/4/19     17:14            656 mod2.mod
-a----         2025/4/19     17:13            453 mod3.mod
-a----         2025/4/19     17:14           5540 mystatic.lib
-a----         2025/4/19     17:13           1138 onemod.obj
-a----         2025/4/19     17:14            992 sub1.obj
-a----         2025/4/19     17:14            992 sub2.obj
-a----         2025/4/19     17:14           1821 twomods.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\test\build> ifx ../main.f90 ../../lib/build/mystatic.lib -I ../../lib/build/ -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/mystatic.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:15           1265 main.obj
-a----         2025/4/19     17:15         567296 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\static-lib\ifx\04\test\build>  .\testprj.exe
 N1 =            1
 N2 =            2
  begin to call show_N3() in show_N2()
 N3 =            3
  end to call show_N3() in show_N2()
 N3 =            3
 haha1
 haha2
```

## Fortran shared library

### example 1

sub.f90
```fortran
subroutine sub() 
!DEC$ ATTRIBUTES DLLEXPORT :: sub
implicit none

    print*,"haha"
    
end subroutine sub
```

main.f90
```fortran
program main_prog
implicit none

    call sub()
   
end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ifx -c ../sub.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:35           1003 sub.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ifx -dll -exe:sub.dll sub.obj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:sub.dll
-dll
-implib:sub.lib
sub.obj
   Creating library sub.lib and object sub.exp
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:38         531968 sub.dll
-a----         2025/4/19     17:38            689 sub.exp
-a----         2025/4/19     17:38           1628 sub.lib
-a----         2025/4/19     17:35           1003 sub.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> ifx ../main.f90 ../../lib/build/sub.lib -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/sub.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     17:41           1085 main.obj
-a----         2025/4/19     17:41         460288 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> .\testprj.exe
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> $env:path += ";d:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\lib\build\"
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> .\testprj.exe
 haha
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build> dumpbin /imports ./testprj.exe
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file .\testprj.exe

File Type: EXECUTABLE IMAGE

  Section contains the following imports:

    sub.dll
             14004E3B8 Import Address Table
             14006A7E0 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                           0 SUB

    KERNEL32.dll
             14004E000 Import Address Table
             14006A428 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                         637 WideCharToMultiByte
                          DA CreateFileW
                         470 QueryPerformanceCounter
                         233 GetCurrentProcessId
                         237 GetCurrentThreadId
                         30A GetSystemTimeAsFileTime
                         38A InitializeSListHead
                         4F5 RtlCaptureContext
                         4FD RtlLookupFunctionEntry
                         504 RtlVirtualUnwind
                         3A0 IsDebuggerPresent
                         5E6 UnhandledExceptionFilter
                         5A4 SetUnhandledExceptionFilter
                         2F1 GetStartupInfoW
                         3A8 IsProcessorFeaturePresent
                         295 GetModuleHandleW
                         292 GetModuleHandleA
                         2CD GetProcAddress
                         254 GetEnvironmentVariableA
                         564 SetLastError
                         51B SetConsoleCtrlHandler
                         547 SetErrorMode
                         1CC GetACP
                         1F0 GetCommandLineA
                         5B4 Sleep
                         5D8 TlsGetValue
                         5D9 TlsSetValue
                         5D6 TlsAlloc
                         5D7 TlsFree
                         610 WaitForSingleObject
                          94 CloseHandle
                         232 GetCurrentProcess
                         1C0 FormatMessageA
                         323 GetThreadLocale
                         3E5 LoadLibraryExA
                          D2 CreateFileA
                         554 SetFilePointer
                         64B WriteFile
                         2F3 GetStdHandle
                         27D GetLastError
                         1C5 FreeLibrary
                         385 InitializeCriticalSection
                         123 DeleteCriticalSection
                         149 EnterCriticalSection
                         3E0 LeaveCriticalSection
                         548 SetEvent
                          CB CreateEventA
                         179 ExitThread
                         5C5 TerminateThread
                         26A GetFileType
                         542 SetEndOfFile
                          F1 CreateProcessA
                         593 SetThreadPriority
                         300 GetSystemDirectoryA
                         125 DeleteFileA
                         498 ReadFile
                         33A GetUserDefaultLangID
                         2FD GetSystemDefaultLangID
                         412 MultiByteToWideChar
                         275 GetFullPathNameW
                         502 RtlUnwind
                         272 GetFullPathNameA
                         318 GetTempPathA
                         314 GetTempFileNameA
                         1B9 FlushFileBuffers
                         236 GetCurrentThread
                         293 GetModuleHandleExA
                         607 VirtualQuery
                         42E OpenProcess
                         3C5 K32GetModuleFileNameExA
                         3F2 LocalFree
                         3E4 LoadLibraryA
                         25E GetFileAttributesExW
                         495 ReadConsoleW
                         555 SetFilePointerEx
                         268 GetFileSizeEx
                         503 RtlUnwindEx
                         386 InitializeCriticalSectionAndSpinCount
                         3E6 LoadLibraryExW
                         145 EncodePointer
                         487 RaiseException
                         4FF RtlPcToFileHeader
                         291 GetModuleFileNameW
                         178 ExitProcess
                         5C4 TerminateProcess
                         294 GetModuleHandleExW
                         1F1 GetCommandLineW
                         64A WriteConsoleW
                         471 QueryPerformanceFrequency
                         21A GetConsoleOutputCP
                         216 GetConsoleMode
                         57F SetStdHandle
                         43A OutputDebugStringW
                         36C HeapAlloc
                         370 HeapFree
                         18F FindClose
                         195 FindFirstFileExW
                         1A6 FindNextFileW
                         3AE IsValidCodePage
                         2B6 GetOEMCP
                         1DB GetCPInfo
                         253 GetEnvironmentStringsW
                         1C4 FreeEnvironmentStringsW
                         546 SetEnvironmentVariableW
                         2F8 GetStringTypeW
                         1B4 FlsAlloc
                         1B6 FlsGetValue
                         1B7 FlsSetValue
                         1B5 FlsFree
                          AA CompareStringW
                         3D4 LCMapStringW
                         2D4 GetProcessHeap
                         373 HeapReAlloc
                         375 HeapSize

    imagehlp.dll
             14004E398 Import Address Table
             14006A7C0 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                          39 SymCleanup
                          7F SymInitialize
                          35 StackWalk64

  Summary

       1C000 .data
        3000 .pdata
       1E000 .rdata
        2000 .reloc
       4D000 .text
        1000 .trace
        2000 _RDATA
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\01\test\build>
```

### example 2

onemod.f90
```fortran
module onemod  
implicit none 

   integer, parameter :: N = 1024 
   
contains      
   subroutine show_N()
      !DEC$ ATTRIBUTES DLLEXPORT :: show_N   
      print*, "N = ", N          
   end subroutine show_N 
   
end module onemod 

```

main.f90
```fortran
program main_prog     
use onemod
implicit none     
   
   call show_N() 
   
end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     20:59            456 onemod.mod
-a----         2025/4/19     20:59           1163 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ifx -dll -exe:onemod.dll onemod.obj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:onemod.dll
-dll
-implib:onemod.lib
onemod.obj
   Creating library onemod.lib and object onemod.exp
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     20:59         531968 onemod.dll
-a----         2025/4/19     20:59            738 onemod.exp
-a----         2025/4/19     20:59           1730 onemod.lib
-a----         2025/4/19     20:59            456 onemod.mod
-a----         2025/4/19     20:59           1163 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> ifx ../main.f90 ../../lib/build/onemod.lib -I ../../lib/build/ -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/onemod.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     21:02           1110 main.obj
-a----         2025/4/19     21:02         460288 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> $env:path += ";d:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\lib\build\"
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> .\testprj.exe
 N =         1024
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\02\test\build> dumpbin /imports ./testprj.exe
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file .\testprj.exe

File Type: EXECUTABLE IMAGE

  Section contains the following imports:

    onemod.dll
             14004E3B8 Import Address Table
             14006A7E0 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                           0 ONEMOD_mp_SHOW_N

    KERNEL32.dll
             14004E000 Import Address Table
             14006A428 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                         637 WideCharToMultiByte
                          DA CreateFileW
                         470 QueryPerformanceCounter
                         233 GetCurrentProcessId
                         237 GetCurrentThreadId
                         30A GetSystemTimeAsFileTime
                         38A InitializeSListHead
                         4F5 RtlCaptureContext
                         4FD RtlLookupFunctionEntry
                         504 RtlVirtualUnwind
                         3A0 IsDebuggerPresent
                         5E6 UnhandledExceptionFilter
                         5A4 SetUnhandledExceptionFilter
                         2F1 GetStartupInfoW
                         3A8 IsProcessorFeaturePresent
                         295 GetModuleHandleW
                         292 GetModuleHandleA
                         2CD GetProcAddress
                         254 GetEnvironmentVariableA
                         564 SetLastError
                         51B SetConsoleCtrlHandler
                         547 SetErrorMode
                         1CC GetACP
                         1F0 GetCommandLineA
                         5B4 Sleep
                         5D8 TlsGetValue
                         5D9 TlsSetValue
                         5D6 TlsAlloc
                         5D7 TlsFree
                         610 WaitForSingleObject
                          94 CloseHandle
                         232 GetCurrentProcess
                         1C0 FormatMessageA
                         323 GetThreadLocale
                         3E5 LoadLibraryExA
                          D2 CreateFileA
                         554 SetFilePointer
                         64B WriteFile
                         2F3 GetStdHandle
                         27D GetLastError
                         1C5 FreeLibrary
                         385 InitializeCriticalSection
                         123 DeleteCriticalSection
                         149 EnterCriticalSection
                         3E0 LeaveCriticalSection
                         548 SetEvent
                          CB CreateEventA
                         179 ExitThread
                         5C5 TerminateThread
                         26A GetFileType
                         542 SetEndOfFile
                          F1 CreateProcessA
                         593 SetThreadPriority
                         300 GetSystemDirectoryA
                         125 DeleteFileA
                         498 ReadFile
                         33A GetUserDefaultLangID
                         2FD GetSystemDefaultLangID
                         412 MultiByteToWideChar
                         275 GetFullPathNameW
                         502 RtlUnwind
                         272 GetFullPathNameA
                         318 GetTempPathA
                         314 GetTempFileNameA
                         1B9 FlushFileBuffers
                         236 GetCurrentThread
                         293 GetModuleHandleExA
                         607 VirtualQuery
                         42E OpenProcess
                         3C5 K32GetModuleFileNameExA
                         3F2 LocalFree
                         3E4 LoadLibraryA
                         25E GetFileAttributesExW
                         495 ReadConsoleW
                         555 SetFilePointerEx
                         268 GetFileSizeEx
                         503 RtlUnwindEx
                         386 InitializeCriticalSectionAndSpinCount
                         3E6 LoadLibraryExW
                         145 EncodePointer
                         487 RaiseException
                         4FF RtlPcToFileHeader
                         291 GetModuleFileNameW
                         178 ExitProcess
                         5C4 TerminateProcess
                         294 GetModuleHandleExW
                         1F1 GetCommandLineW
                         64A WriteConsoleW
                         471 QueryPerformanceFrequency
                         21A GetConsoleOutputCP
                         216 GetConsoleMode
                         57F SetStdHandle
                         43A OutputDebugStringW
                         36C HeapAlloc
                         370 HeapFree
                         18F FindClose
                         195 FindFirstFileExW
                         1A6 FindNextFileW
                         3AE IsValidCodePage
                         2B6 GetOEMCP
                         1DB GetCPInfo
                         253 GetEnvironmentStringsW
                         1C4 FreeEnvironmentStringsW
                         546 SetEnvironmentVariableW
                         2F8 GetStringTypeW
                         1B4 FlsAlloc
                         1B6 FlsGetValue
                         1B7 FlsSetValue
                         1B5 FlsFree
                          AA CompareStringW
                         3D4 LCMapStringW
                         2D4 GetProcessHeap
                         373 HeapReAlloc
                         375 HeapSize

    imagehlp.dll
             14004E398 Import Address Table
             14006A7C0 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                          39 SymCleanup
                          7F SymInitialize
                          35 StackWalk64

  Summary

       1C000 .data
        3000 .pdata
       1E000 .rdata
        2000 .reloc
       4D000 .text
        1000 .trace
        2000 _RDATA
```

### example 3

onemod.f90
```fortran
module onemod  
implicit none 

   integer, parameter :: N = 1024 
   integer, parameter :: M = 2048
   
contains      
   subroutine show_N()
      !DEC$ ATTRIBUTES DLLEXPORT :: show_N   
      print*, "N = ", N          
   end subroutine show_N 
   
   subroutine show_M()
      !DEC$ ATTRIBUTES DLLEXPORT :: show_M   
      print*, "M = ", M          
   end subroutine show_M    
   
end module onemod
```

main.f90
```fortran
program main_prog     
use onemod
implicit none     
   
   call show_N() 
   print*, "N Para = ", N
   call show_M() 
   
end program main_prog
```

```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

Some of the output
```powershell
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build> ifx -c ../onemod.f90
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     21:15            701 onemod.mod
-a----         2025/4/19     21:15           1469 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build> ifx -dll -exe:onemod.dll onemod.obj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:onemod.dll
-dll
-implib:onemod.lib
onemod.obj
   Creating library onemod.lib and object onemod.exp
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     21:15         531968 onemod.dll
-a----         2025/4/19     21:15            864 onemod.exp
-a----         2025/4/19     21:15           1934 onemod.lib
-a----         2025/4/19     21:15            701 onemod.mod
-a----         2025/4/19     21:15           1469 onemod.obj


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build> cd ../../test/build
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\test\build> ifx ../main.f90 ../../lib/build/onemod.lib -I ../../lib/build/ -o testprj
Intel(R) Fortran Compiler for applications running on Intel(R) 64, Version 2025.0.4 Build 20241205
Copyright (C) 1985-2024 Intel Corporation. All rights reserved.

Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:testprj.exe
-subsystem:console
main.obj
../../lib/build/onemod.lib
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\test\build> ls


    Directory: D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\test\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/4/19     21:17           1427 main.obj
-a----         2025/4/19     21:17         566784 testprj.exe


PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\test\build> $env:path += ";d:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\lib\build\"
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\test\build> .\testprj.exe
 N =         1024
 N Para =         1024
 M =         2048
PS D:\work\fortran_work\ModernFortran\codes\windows\shared-lib\ifx\03\test\build> dumpbin /imports ./testprj.exe
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file .\testprj.exe

File Type: EXECUTABLE IMAGE

  Section contains the following imports:

    onemod.dll
             1400673B8 Import Address Table
             1400845B8 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                           0 ONEMOD_mp_SHOW_M
                           1 ONEMOD_mp_SHOW_N

    KERNEL32.dll
             140067000 Import Address Table
             140084200 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                         637 WideCharToMultiByte
                          DA CreateFileW
                         25E GetFileAttributesExW
                         470 QueryPerformanceCounter
                         233 GetCurrentProcessId
                         237 GetCurrentThreadId
                         30A GetSystemTimeAsFileTime
                         38A InitializeSListHead
                         4F5 RtlCaptureContext
                         4FD RtlLookupFunctionEntry
                         504 RtlVirtualUnwind
                         3A0 IsDebuggerPresent
                         5E6 UnhandledExceptionFilter
                         5A4 SetUnhandledExceptionFilter
                         2F1 GetStartupInfoW
                         3A8 IsProcessorFeaturePresent
                         295 GetModuleHandleW
                         292 GetModuleHandleA
                         2CD GetProcAddress
                         254 GetEnvironmentVariableA
                         564 SetLastError
                         51B SetConsoleCtrlHandler
                         547 SetErrorMode
                         1CC GetACP
                         1F0 GetCommandLineA
                         5B4 Sleep
                         5D8 TlsGetValue
                         5D9 TlsSetValue
                         5D6 TlsAlloc
                         5D7 TlsFree
                         610 WaitForSingleObject
                          94 CloseHandle
                         26A GetFileType
                         27D GetLastError
                         64B WriteFile
                         554 SetFilePointer
                         232 GetCurrentProcess
                         1C0 FormatMessageA
                         323 GetThreadLocale
                         3E5 LoadLibraryExA
                          D2 CreateFileA
                         2F3 GetStdHandle
                         1C5 FreeLibrary
                         385 InitializeCriticalSection
                         123 DeleteCriticalSection
                         149 EnterCriticalSection
                         3E0 LeaveCriticalSection
                         548 SetEvent
                          CB CreateEventA
                         179 ExitThread
                         5C5 TerminateThread
                         542 SetEndOfFile
                          F1 CreateProcessA
                         593 SetThreadPriority
                         300 GetSystemDirectoryA
                         125 DeleteFileA
                         498 ReadFile
                         33A GetUserDefaultLangID
                         2FD GetSystemDefaultLangID
                         412 MultiByteToWideChar
                         275 GetFullPathNameW
                         502 RtlUnwind
                         272 GetFullPathNameA
                         318 GetTempPathA
                         314 GetTempFileNameA
                         1B9 FlushFileBuffers
                         236 GetCurrentThread
                         293 GetModuleHandleExA
                         607 VirtualQuery
                         42E OpenProcess
                         3C5 K32GetModuleFileNameExA
                         3F2 LocalFree
                         3E4 LoadLibraryA
                         495 ReadConsoleW
                         555 SetFilePointerEx
                         268 GetFileSizeEx
                         375 HeapSize
                         503 RtlUnwindEx
                         386 InitializeCriticalSectionAndSpinCount
                         3E6 LoadLibraryExW
                         145 EncodePointer
                         487 RaiseException
                         4FF RtlPcToFileHeader
                         291 GetModuleFileNameW
                         178 ExitProcess
                         5C4 TerminateProcess
                         294 GetModuleHandleExW
                         1F1 GetCommandLineW
                         64A WriteConsoleW
                         471 QueryPerformanceFrequency
                         21A GetConsoleOutputCP
                         216 GetConsoleMode
                         57F SetStdHandle
                         43A OutputDebugStringW
                         36C HeapAlloc
                         370 HeapFree
                         18F FindClose
                         195 FindFirstFileExW
                         1A6 FindNextFileW
                         3AE IsValidCodePage
                         2B6 GetOEMCP
                         1DB GetCPInfo
                         253 GetEnvironmentStringsW
                         1C4 FreeEnvironmentStringsW
                         546 SetEnvironmentVariableW
                         2F8 GetStringTypeW
                         1B4 FlsAlloc
                         1B6 FlsGetValue
                         1B7 FlsSetValue
                         1B5 FlsFree
                          AA CompareStringW
                         3D4 LCMapStringW
                         2D4 GetProcessHeap
                         373 HeapReAlloc

    imagehlp.dll
             140067398 Import Address Table
             140084598 Import Name Table
                     0 time date stamp
                     0 Index of first forwarder reference

                          39 SymCleanup
                          7F SymInitialize
                          35 StackWalk64

  Summary

       1C000 .data
        3000 .pdata
       1E000 .rdata
        2000 .reloc
       66000 .text
        1000 .trace
        2000 _RDATA
```
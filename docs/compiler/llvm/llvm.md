# LLVM

The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. Despite its name, LLVM has little to do with traditional virtual machines. The name "LLVM" itself is not an acronym; it is the full name of the project.

## Article link

-  [llvm official website](https://llvm.org/).
-  [LLVM系列链接整理](https://zhuanlan.zhihu.com/p/569966102/).
-  [Writing a compiler with LLVM - Cailin Smith - NDC Oslo 2022](https://www.youtube.com/watch?v=vrRXIQDCCEk).
-  [Programming Language with LLVM [1/20] Introduction to LLVM IR and tools](https://www.youtube.com/watch?v=Lvc8qx8ukOI).


## LLVM系列链接整理

-  [The LLVM Compiler Infrastructure](https://llvm.org/).
-  [windows11+LLVM 15.0.1简单安装](https://zhuanlan.zhihu.com/p/569934036/).
-  [windows11+LLVM 15.0.1+简单代码编译测试](https://zhuanlan.zhihu.com/p/569965022/).
-  [VS2022+LLVM 15.0.1+简单代码Debug](https://zhuanlan.zhihu.com/p/569968214/).
-  [游戏引擎Piccolo+PiccoloParser简单编译测试](https://zhuanlan.zhihu.com/p/569983989/).
-  [LLVM Tutorial Walkthrough](https://zhuanlan.zhihu.com/p/576334563/).
-  [Converting a C source code to LLVM IR](https://zhuanlan.zhihu.com/p/576382889/).
-  [Windows11+clang convert LLVM IR to executable](https://zhuanlan.zhihu.com/p/576678216/).
-  [Windows11+Simple LLVM IR运行简单测试](https://zhuanlan.zhihu.com/p/576689016/).
-  [Windows11+HelloWorld LLVM IR编译运行简单测试](https://zhuanlan.zhihu.com/p/576696012/).
-  [Windows11+Infinite loop+LLVM IR编译运行简单测试](https://zhuanlan.zhihu.com/p/576711594).
-  [Windows11+nested loop+LLVM IR编译运行简单测试](https://zhuanlan.zhihu.com/p/576745932/).
-  [Windows11+if+LLVM IR编译运行简单测试](https://zhuanlan.zhihu.com/p/576760306/).
-  [Windows11+add+sub+LLVM IR编译运行简单测试](https://zhuanlan.zhihu.com/p/576767896/).


## dumpbin /headers

dumpbin /headers hello.exe
```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\01a\build\Debug> dumpbin /headers hello.exe
Microsoft (R) COFF/PE Dumper Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.


Dump of file hello.exe

PE signature found

File Type: EXECUTABLE IMAGE

FILE HEADER VALUES
            8664 machine (x64)
               8 number of sections
        6844E0FA time date stamp Sun Jun  8 09:01:46 2025
               0 file pointer to symbol table
               0 number of symbols
              F0 size of optional header
              22 characteristics
                   Executable
                   Application can handle large (>2GB) addresses

OPTIONAL HEADER VALUES
             20B magic # (PE32+)
           14.43 linker version
            8600 size of code
            6600 size of initialized data
               0 size of uninitialized data
            11AE entry point (00000001400011AE) @ILT+425(mainCRTStartup)
            1000 base of code
       140000000 image base (0000000140000000 to 0000000140014FFF)
            1000 section alignment
             200 file alignment
            6.00 operating system version
            0.00 image version
            6.00 subsystem version
               0 Win32 version
           15000 size of image
             400 size of headers
               0 checksum
               3 subsystem (Windows CUI)
            8160 DLL characteristics
                   High Entropy Virtual Addresses
                   Dynamic base
                   NX compatible
                   Terminal Server Aware
          100000 size of stack reserve
            1000 size of stack commit
          100000 size of heap reserve
            1000 size of heap commit
               0 loader flags
              10 number of directories
               0 [       0] RVA [size] of Export Directory
           104F8 [      78] RVA [size] of Import Directory
           13000 [     43C] RVA [size] of Resource Directory
            F000 [     5F4] RVA [size] of Exception Directory
               0 [       0] RVA [size] of Certificates Directory
           14000 [      68] RVA [size] of Base Relocation Directory
            BA60 [      38] RVA [size] of Debug Directory
               0 [       0] RVA [size] of Architecture Directory
               0 [       0] RVA [size] of Global Pointer Directory
               0 [       0] RVA [size] of Thread Storage Directory
            B8E0 [     140] RVA [size] of Load Configuration Directory
               0 [       0] RVA [size] of Bound Import Directory
           10000 [     4F8] RVA [size] of Import Address Table Directory
               0 [       0] RVA [size] of Delay Import Directory
               0 [       0] RVA [size] of COM Descriptor Directory
               0 [       0] RVA [size] of Reserved Directory


SECTION HEADER #1
   .text name
    85C7 virtual size
    1000 virtual address (0000000140001000 to 00000001400095C6)
    8600 size of raw data
     400 file pointer to raw data (00000400 to 000089FF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
60000020 flags
         Code
         Execute Read

SECTION HEADER #2
  .rdata name
    30AE virtual size
    A000 virtual address (000000014000A000 to 000000014000D0AD)
    3200 size of raw data
    8A00 file pointer to raw data (00008A00 to 0000BBFF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
40000040 flags
         Initialized Data
         Read Only

  Debug Directories

        Time Type        Size      RVA  Pointer
    -------- ------- -------- -------- --------
    6844E0FA cv            60 0000BF9C     A99C    Format: RSDS, {1E22B83A-2439-4C37-B458-652A49990BDB}, 1, D:\work\llvm_work\ModernLLVM\codes\simplecode\01a\build\Debug\hello.pdb
    6844E0FA feat          14 0000BFFC     A9FC    Counts: Pre-VC++ 11.00=0, C/C++=35, /GS=35, /sdl=0, guardN=34

SECTION HEADER #3
   .data name
     961 virtual size
    E000 virtual address (000000014000E000 to 000000014000E960)
     200 size of raw data
    BC00 file pointer to raw data (0000BC00 to 0000BDFF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
C0000040 flags
         Initialized Data
         Read Write

SECTION HEADER #4
  .pdata name
     7B0 virtual size
    F000 virtual address (000000014000F000 to 000000014000F7AF)
     800 size of raw data
    BE00 file pointer to raw data (0000BE00 to 0000C5FF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
40000040 flags
         Initialized Data
         Read Only

SECTION HEADER #5
  .idata name
    164F virtual size
   10000 virtual address (0000000140010000 to 000000014001164E)
    1800 size of raw data
    C600 file pointer to raw data (0000C600 to 0000DDFF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
40000040 flags
         Initialized Data
         Read Only

SECTION HEADER #6
  .00cfg name
     175 virtual size
   12000 virtual address (0000000140012000 to 0000000140012174)
     200 size of raw data
    DE00 file pointer to raw data (0000DE00 to 0000DFFF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
40000040 flags
         Initialized Data
         Read Only

SECTION HEADER #7
   .rsrc name
     43C virtual size
   13000 virtual address (0000000140013000 to 000000014001343B)
     600 size of raw data
    E000 file pointer to raw data (0000E000 to 0000E5FF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
40000040 flags
         Initialized Data
         Read Only

SECTION HEADER #8
  .reloc name
     1B4 virtual size
   14000 virtual address (0000000140014000 to 00000001400141B3)
     200 size of raw data
    E600 file pointer to raw data (0000E600 to 0000E7FF)
       0 file pointer to relocation table
       0 file pointer to line numbers
       0 number of relocations
       0 number of line numbers
42000040 flags
         Initialized Data
         Discardable
         Read Only

  Summary

        1000 .00cfg
        1000 .data
        2000 .idata
        1000 .pdata
        4000 .rdata
        1000 .reloc
        1000 .rsrc
        9000 .text
```

## clang++ --version
```
PS C:\Users\eric> clang++ --version
clang version 20.1.6
Target: x86_64-pc-windows-msvc
Thread model: posix
InstalledDir: C:\dev\LLVM\bin
```

## cmake .. -G "Visual Studio 17 2022" -T ClangCL


cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\01b\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
:: initializing oneAPI environment...
   Initializing Visual Studio command-line environment...
   Visual Studio version 17.13.7 environment configured.
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

cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\01b\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
-- The C compiler identification is Clang 20.1.6 with GNU-like command-line
-- The CXX compiler identification is Clang 20.1.6 with GNU-like command-line
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/dev/LLVM/bin/clang.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/dev/LLVM/bin/clang++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_CXX_COMPILER=C:/dev/LLVM/bin/clang++.exe
-- CMAKE_CXX_COMPILER=clang++
-- Configuring done (2.7s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/01b/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\01b\build> cmake --build .
[2/2] Linking CXX executable hello.exe
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\01b\build> .\hello.exe
Hello, LLVM with CMake!
Compiled with Clang
```

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, LLVM with CMake!" << std::endl;
    #ifdef __clang__
    std::cout << "Clang defined, version: " << __clang_major__ << "." << __clang_minor__ << "." << __clang_patchlevel__ << std::endl;
    #else
    std::cout << "__clang__ not defined" << std::endl;
    #endif
    #ifdef _MSC_VER
    std::cout << "_MSC_VER defined: " << _MSC_VER << std::endl;
    #else
    std::cout << "_MSC_VER not defined" << std::endl;
    #endif
    #ifdef __GNUC__
    std::cout << "__GNUC__ defined: " << __GNUC__ << std::endl;
    #else
    std::cout << "__GNUC__ not defined" << std::endl;
    #endif
    return 0;
}
```

## openmp

### clang++ -fopenmp -x c++ -E -v - < nul
```cmd
clang++ -fopenmp -x c++ -E -v - < nul
```
### New-Item empty.cpp -Type File
```powershell
PS C:\Users\eric> New-Item empty.cpp -Type File

    Directory: C:\Users\eric

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---            2025/6/8    12:05              0 empty.cpp
```

clang++ -fopenmp -x c++ -E -v empty.cpp
```powershell
PS C:\Users\eric> clang++ -fopenmp -x c++ -E -v empty.cpp
clang version 20.1.6
Target: x86_64-pc-windows-msvc
Thread model: posix
InstalledDir: C:\dev\LLVM\bin
 (in-process)
 "C:\\dev\\LLVM\\bin\\clang++.exe" -cc1 -triple x86_64-pc-windows-msvc19.43.34810 -E -disable-free -clear-ast-before-backend -disable-llvm-verifier -discard-value-names -main-file-name empty.cpp -mrelocation-model pic -pic-level 2 -mframe-pointer=none -relaxed-aliasing -fmath-errno -ffp-contract=on -fno-rounding-math -mconstructor-aliases -fms-volatile -funwind-tables=2 -target-cpu x86-64 -tune-cpu generic "-fdebug-compilation-dir=C:\\Users\\eric" -v "-fcoverage-compilation-dir=C:\\Users\\eric" -resource-dir "C:\\dev\\LLVM\\lib\\clang\\20" -internal-isystem "C:\\dev\\LLVM\\lib\\clang\\20\\include" -internal-isystem "c:\\dev\\icu\\include" -fdeprecated-macro -ferror-limit 19 -fmessage-length=120 -fopenmp -fno-use-cxa-atexit -fms-extensions -fms-compatibility -fms-compatibility-version=19.43.34810 -std=c++14 -fskip-odr-check-in-gmf -fdelayed-template-parsing -fcxx-exceptions -fexceptions -fcolor-diagnostics -faddrsig -o - -x c++ empty.cpp
clang -cc1 version 20.1.6 based upon LLVM 20.1.6 default target x86_64-pc-windows-msvc
#include "..." search starts here:
#include <...> search starts here:
 C:\dev\LLVM\lib\clang\20\include
 c:\dev\icu\include
End of search list.
# 1 "empty.cpp"
# 1 "<built-in>" 1
# 1 "<built-in>" 3
# 447 "<built-in>" 3
# 1 "<command line>" 1
# 1 "<built-in>" 2
# 1 "empty.cpp" 2
```

### cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\02> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
```
### clang++ -fopenmp main.cpp -o test_openmp.exe
```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\02> clang++ -fopenmp main.cpp -o test_openmp.exe
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\02> ls


    Directory: D:\work\llvm_work\ModernLLVM\codes\simplecode\02


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----          2025/6/8     12:08                build
-a----          2025/6/8      2:47            420 CMakeLists.txt
-a----          2025/6/8     12:09            378 main.cpp
-a----          2025/6/8     12:34            429 README.txt
-a----          2025/6/8     12:34         276480 test_openmp.exe
```

```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\02> .\test_openmp.exe
Max threads: 16
Hello from thread 7 of 16
Hello from thread 0 of 16
Hello from thread 6 of 16
Hello from thread 1 of 16
Hello from thread 3 of 16
Hello from thread 4 of 16
Hello from thread 5 of 16
Hello from thread 8 of 16
Hello from thread 9 of 16
Hello from thread 11 of 16
Hello from thread 10 of 16
Hello from thread 12 of 16
Hello from thread 2 of 16
Hello from thread 13 of 16
Hello from thread 15 of 16
Hello from thread 14 of 16
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\02>
```

## VS2022+LLVM-Clang+OpenMP

```
平台工具集：LLVM (clang-cl)
c/c++: 其它选项: -openmp
链接器：输入：附加依赖项：libomp.lib
即
Linker/Input/AdditionalDependencies: libomp.lib
```

```
平台工具集：Visual Studio 2022 (v143)
c/c++: 其它选项: /openmp:llvm 
```

```cmake
cmake_minimum_required(VERSION 4.0.2)
project(openmp_test)

# 指定使用 C++11 标准
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# 打印编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")

# 手动指定 OpenMP 配置
set(OpenMP_CXX_FLAGS "-openmp:llvm")

# 查找 OpenMP
find_package(OpenMP REQUIRED)

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )

# 打印调试信息
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")
message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
message(STATUS "OpenMP_CXX_LIB_NAMES=${OpenMP_CXX_LIB_NAMES}")
message(STATUS "OpenMP_libomp_LIBRARY=${OpenMP_libomp_LIBRARY}")

# 添加可执行文件
add_executable(openmp_test main.cpp)

target_compile_options(openmp_test PRIVATE ${OpenMP_CXX_FLAGS})
target_link_libraries(openmp_test PRIVATE OpenMP::OpenMP_CXX)
```
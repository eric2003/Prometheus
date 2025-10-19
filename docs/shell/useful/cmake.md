# CMake

## Link

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).

## cmake --install

```
cmake --install . --prefix "c:/dev/myprj/"
```

## CMAKE_PREFIX_PATH
```
cmake .. -DCMAKE_PREFIX_PATH=C:/dev/libpng;C:/dev/zlib
cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libpng;C:/dev/zlib"
$env:PATH = "c:/dev/libpng/bin;" + $env:PATH
```

## try_compile
```cmake
try_compile(
    OpenMP_SPECTEST_${LANG}_${OPENMP_PLAIN_FLAG}  # 输出变量名
    SOURCE_FROM_VAR "${_OPENMP_TEST_SRC_NAME}" _OPENMP_TEST_SRC_CONTENT  # 源代码来源
    LOG_DESCRIPTION "Detecting ${LANG} OpenMP version"  # 日志描述
    CMAKE_FLAGS "-DCOMPILE_DEFINITIONS:STRING=${OpenMP_${LANG}_FLAGS}" ${_includeDirFlags}  # 传递给 CMake 的额外标志
    COPY_FILE "${BIN_FILE}"  # 编译后的可执行文件路径
)
```


```powershell
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" && powershell'
&"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell
```

```powershell
cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
```

OMP_NUM_THREADS
```cmd
echo %OMP_NUM_THREADS%
C:\Users\eric>echo %OMP_NUM_THREADS%
%OMP_NUM_THREADS%
```

```powershell
$env:OMP_NUM_THREADS
```

clang --version
```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03f\build> clang --version
clang version 19.1.5
Target: x86_64-pc-windows-msvc
Thread model: posix
InstalledDir: C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\Llvm\x64\bin
```

```powershell
PowerShell 7.5.1
PS C:\Users\eric> cd d:\work\llvm_work\ModernLLVM\codes\simplecode\03h\build\
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03h\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03h\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
-- The CXX compiler identification is Clang 19.1.5 with GNU-like command-line
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/Llvm/x64/bin/clang++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=clang
-- CMAKE_CXX_COMPILER=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/Llvm/x64/bin/clang++.exe
-- Found OpenMP_CXX: -fopenmp=libomp (found version "5.1")
-- Found OpenMP: TRUE (found version "5.1")
-- my_import_targets=OpenMP::OpenMP_CXX
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- OpenMP_FOUND=TRUE
-- OpenMP_RUNTIME_MSVC=
-- OpenMP_C_FOUND=
-- OpenMP_CXX_FOUND=TRUE
-- OpenMP_CXX_INCLUDE_DIRS=
-- OpenMP_CXX_FLAGS=-openmp:llvm
-- OpenMP_CXX_LIB_NAMES=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- OpenMP_VERSION=
-- OpenMP_CXX_VERSION=5.1
-- OpenMP_CXX_VERSION_MAJOR=5
-- OpenMP_CXX_VERSION_MINOR=1
-- OpenMP_CXX_SPEC_DATE=202011
-- OpenMP_Fortran_HAVE_OMPLIB_MODULE=
-- Configuring done (6.3s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/03h/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03h\build> cmake --build .
[2/2] Linking CXX executable openmp_test.exe
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03h\build> .\openmp_test.exe
Max threads = 4
Available processors = 16
Thread 0: my_num_threads = 1
```

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

int main() {
    omp_set_num_threads(4);
    printf("Max threads = %d\n", omp_get_max_threads()); // 检查最大线程数
    printf("Available processors = %d\n", omp_get_num_procs()); // 检查可用处理器核心数

    #pragma omp parallel
    {
        int my_num_threads = omp_get_num_threads();
        int thread_id = omp_get_thread_num();
        printf("Thread %d: my_num_threads = %d\n", thread_id, my_num_threads);
    }

    return 0;
}
```

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

int main() {
    #ifdef _OPENMP
    printf("OpenMP is supported by the compiler.\n");
    printf("OpenMP version: %d\n", _OPENMP);
    #else
    printf("OpenMP is NOT supported by the compiler.\n");
    #endif
    return 0;
}
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03j\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/03j/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -openmp:llvm -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/03j/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."
```


```
clang++ -openmp:llvm -c ../main.cpp -o main.o
clang++ main.o -o openmp_test.exe -L"C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64" -llibomp
```
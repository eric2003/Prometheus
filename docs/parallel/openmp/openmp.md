# OpenMP

## Link
-  [www.openmp.org](https://www.openmp.org/).
-  [OpenMP tutorials](https://www.openmp.org/resources/tutorials-articles/).
-  [OpenMP's GitHub page](https://github.com/OpenMP/).
-  [OpenMP Beginner to Mastery Series Links](https://zhuanlan.zhihu.com/p/497798114/).


## pragma omp declare reduction

-  [#pragma omp declare reduction](https://www.ibm.com/docs/en/xl-c-and-cpp-linux/16.1.1?topic=parallelization-pragma-omp-declare-reduction).
-  [学习openmp-自定义reduction](https://blog.mangoeffect.net/parallel-programming/learn-openmp-custom-reduction).

```
# Search Results

- [16 files and 0 directories found]

## Files
- `C:\dev\LLVM\bin\clang\20\include\omp.h`
- `C:\dev\mingw64\bin\gcc.exe\86.64-w64-mingw32\21.3.2.0\include\omp.h`
- `C:\local\Qt\Tools\mingw1310_64\lib\gcc\x86_64-w64-mingw32\13.1.0\include\omp.h`
- `C:\vocalQt\Tools\QtCreator\bin\clang\lib\clang\19\include\omp.h`
- `C:\msys64\mingw64\include\omp.h`
- `C:\msys64\mingw64\lib\gcc\x86_64-w64-mingw32\15.1.0\include\omp.h`
- `C:\Program Files (x86)\Intel\oneAPI\compiler\2025.0\opt\compiler\include\omp.h`
- `C:\Program Files (x86)\Intel\oneAPI\compiler\latest\opt\compiler\include\omp.h`
- `C:\Program Files (x86)\Intel\oneAPI\toolkit\linking_tool\envs\2025.0\oneapi-base-toolkit\compiler\opt\compiler\include\omp.h`
- `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\Llvm\x64\bin\clang\19\include\omp.h`
- `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\Llvm\ARM64\bin\clang\19\include\omp.h`
- `C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.44.35207\include\omp.h`
- `C:\Users\eric\julia\artifacts\5e5ccc6ef845206fca19b4a7ae9946fd791ce2\include\omp.h`
```

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

// 定义自定义归约操作，用于浮点数数组的元素求和
#pragma omp declare reduction (sum_array : double* : \
    for (int i = 0; i < 4; i++) omp_out[i] += omp_in[i]) \
    initializer (omp_priv = (double*)calloc(4, sizeof(double)))

int main() {
    int n = 4;
    double *result = (double*)calloc(n, sizeof(double));
    double data[4] = {1.0, 2.0, 3.0, 4.0};

    // 并行区域，使用自定义归约
    #pragma omp parallel for reduction(sum_array:result)
    for (int i = 0; i < 100; i++) {
        int tid = omp_get_thread_num() % n;
        result[tid] += data[tid];
    }

    // 输出结果
    printf("Result array: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    free(result);
    return 0;
}
```


```
c/c++/命令行/其它选项: /openmp:llvm 
```

```cpp
#include <iostream>
#include <omp.h>

int main() {
#pragma omp parallel num_threads(4)
    {
        int thread_id = omp_get_thread_num();
        std::cout << "Hello from thread " << thread_id << std::endl;
    }

// OpenMP 5.1 新特性示例：simd 和 distribute
int arr[100];
#pragma omp simd
for (int i = 0; i < 100; ++i) {
    arr[i] = i * 2;
}

std::cout << "D
```

## clang++

### clang++ example1

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 4.0.2) # 更新到更现代的版本
project(openmp_test CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 打印编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")

# 查找 OpenMP
find_package(OpenMP REQUIRED)

# 打印 OpenMP 信息
message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
message(STATUS "OpenMP_CXX_LIBRARIES=${OpenMP_CXX_LIBRARIES}")

# 添加可执行文件
add_executable(openmp_test main.cpp)

# 使用 CMake 提供的 OpenMP 标志和库
target_link_libraries(openmp_test PRIVATE OpenMP::OpenMP_CXX)
```

```powershell
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'  
cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++  
cmake --build . --verbose  
```


```powershell
PowerShell 7.5.1
PS C:\Users\eric> cd d:\work\llvm_work\ModernLLVM\codes\simplecode\03k\build\
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03k\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03k\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (6.0s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/03k/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03k\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/03k/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/03k/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03k\build> .\openmp_test.exe
OpenMP is supported by the compiler.
OpenMP version: 202011
Max threads = 4
Available processors = 16
Thread 0: my_num_threads = 4
Thread 3: my_num_threads = 4
Thread 1: my_num_threads = 4
Thread 2: my_num_threads = 4
```

### clang++ example2

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 4.0.2) # 更新到更现代的版本
project(openmp_test CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 打印编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")

# 查找 OpenMP
find_package(OpenMP REQUIRED)

# 打印 OpenMP 信息
message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
message(STATUS "OpenMP_CXX_LIBRARIES=${OpenMP_CXX_LIBRARIES}")

# 添加可执行文件
add_executable(openmp_test main.cpp)

# 使用 CMake 提供的 OpenMP 标志和库
#target_link_libraries(openmp_test PRIVATE OpenMP::OpenMP_CXX)

set(OpenMP_CXX_FLAGS "-fopenmp")
target_compile_options(openmp_test PRIVATE ${OpenMP_CXX_FLAGS})
target_link_libraries(openmp_test PRIVATE ${OpenMP_CXX_LIBRARIES})
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03l\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03l\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (6.1s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/03l/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03l\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/03l/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/03l/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03l\build> .\openmp_test.exe
OpenMP is supported by the compiler.
OpenMP version: 202011
Max threads = 4
Available processors = 16
Thread 0: my_num_threads = 4
Thread 1: my_num_threads = 4
Thread 2: my_num_threads = 4
Thread 3: my_num_threads = 4
```

### clang++ example3

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 4.0.2) # 更新到更现代的版本
project(openmp_test CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 打印编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")

# 查找 OpenMP
find_package(OpenMP REQUIRED)

# 打印 OpenMP 信息
message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
message(STATUS "OpenMP_CXX_LIBRARIES=${OpenMP_CXX_LIBRARIES}")

# 添加可执行文件
add_executable(openmp_test main.cpp)

# 使用 CMake 提供的 OpenMP 标志和库
#target_link_libraries(openmp_test PRIVATE OpenMP::OpenMP_CXX)

#set(OpenMP_CXX_FLAGS "-fopenmp")
set(OpenMP_CXX_FLAGS "-fopenmp=libomp")

target_compile_options(openmp_test PRIVATE ${OpenMP_CXX_FLAGS})
target_link_libraries(openmp_test PRIVATE ${OpenMP_CXX_LIBRARIES})
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03m\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03m\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (6.5s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/03m/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03m\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/03m/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/03m/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03m\build> .\openmp_test.exe
OpenMP is supported by the compiler.
OpenMP version: 202011
Max threads = 4
Available processors = 16
Thread 0: my_num_threads = 4
Thread 1: my_num_threads = 4
Thread 3: my_num_threads = 4
Thread 2: my_num_threads = 4
```

### clang++ example4

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 4.0.2) # 更新到更现代的版本
project(openmp_test CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 打印编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")

# 查找 OpenMP
find_package(OpenMP REQUIRED)

# 打印 OpenMP 信息
message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
message(STATUS "OpenMP_CXX_LIBRARIES=${OpenMP_CXX_LIBRARIES}")

# 添加可执行文件
add_executable(openmp_test main.cpp)

target_compile_options(openmp_test PRIVATE ${OpenMP_CXX_FLAGS})
target_link_libraries(openmp_test PRIVATE ${OpenMP_CXX_LIBRARIES})
```

```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03n\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03n\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.7s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/03n/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03n\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/03n/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/03n/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03n\build> .\openmp_test.exe
OpenMP is supported by the compiler.
OpenMP version: 202011
Max threads = 4
Available processors = 16
Thread 0: my_num_threads = 4
Thread 1: my_num_threads = 4
Thread 2: my_num_threads = 4
Thread 3: my_num_threads = 4
```

### clang++ example5 (error)
CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 4.0.2) # 更新到更现代的版本
project(openmp_test CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 打印编译器信息
message(STATUS "CMAKE_C_COMPILER=${CMAKE_C_COMPILER}")
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")

# 查找 OpenMP
find_package(OpenMP REQUIRED)

# 打印 OpenMP 信息
message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
message(STATUS "OpenMP_CXX_LIBRARIES=${OpenMP_CXX_LIBRARIES}")

# 添加可执行文件
add_executable(openmp_test main.cpp)

#target_compile_options(openmp_test PRIVATE ${OpenMP_CXX_FLAGS})
target_link_libraries(openmp_test PRIVATE ${OpenMP_CXX_LIBRARIES})
```

```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03o\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03o\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.6s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/03o/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03o\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/03o/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/03o/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\03o\build> .\openmp_test.exe
OpenMP is NOT supported by the compiler.
```

## 自定义归约

### example 1

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// 定义最简单的自定义归约操作：对 double 类型进行加法
#pragma omp declare reduction(my_sum : double : omp_out += omp_in) initializer(omp_priv = 0.0)

int main() {
    printf("测试自定义归约编译\n");
    return 0;
}
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04a\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04a\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.9s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04a/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04a\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04a/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04a/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04a\build> .\openmp_test.exe
测试自定义归约编译
```

### example 2
```cpp
#include <stdio.h>
#include <omp.h>

// 定义自定义归约操作：对 double 类型进行加法
#pragma omp declare reduction(my_sum : double : omp_out += omp_in) initializer(omp_priv = 0.0)

int main() {
    int n = 100;
    double result = 0.0;
    double data[100];

    // 初始化数据数组，每个元素为 1.0
    for (int i = 0; i < n; i++) {
        data[i] = 1.0;
    }

    omp_set_num_threads(4); // 设置 4 个线程

    // 并行循环，使用自定义归约 my_sum
    #pragma omp parallel for reduction(my_sum:result)
    for (int i = 0; i < n; i++) {
        result += data[i];
        #pragma omp critical
        printf("线程 %d: 添加 data[%d] = %.1f\n", omp_get_thread_num(), i, data[i]);
    }

    // 输出结果
    printf("最终求和结果: %.1f\n", result);

    return 0;
}
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04b\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04b\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.8s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04b/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04b\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04b/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04b/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04b\build> .\openmp_test.exe
线程 1: 添加 data[25] = 1.0
线程 2: 添加 data[50] = 1.0
线程 0: 添加 data[0] = 1.0
线程 3: 添加 data[75] = 1.0
线程 1: 添加 data[26] = 1.0
线程 2: 添加 data[51] = 1.0
线程 0: 添加 data[1] = 1.0
线程 3: 添加 data[76] = 1.0
线程 1: 添加 data[27] = 1.0
线程 2: 添加 data[52] = 1.0
线程 0: 添加 data[2] = 1.0
线程 3: 添加 data[77] = 1.0
线程 1: 添加 data[28] = 1.0
线程 2: 添加 data[53] = 1.0
线程 0: 添加 data[3] = 1.0
线程 3: 添加 data[78] = 1.0
线程 1: 添加 data[29] = 1.0
线程 2: 添加 data[54] = 1.0
线程 0: 添加 data[4] = 1.0
线程 3: 添加 data[79] = 1.0
线程 1: 添加 data[30] = 1.0
线程 2: 添加 data[55] = 1.0
线程 0: 添加 data[5] = 1.0
线程 3: 添加 data[80] = 1.0
线程 1: 添加 data[31] = 1.0
线程 2: 添加 data[56] = 1.0
线程 0: 添加 data[6] = 1.0
线程 3: 添加 data[81] = 1.0
线程 1: 添加 data[32] = 1.0
线程 2: 添加 data[57] = 1.0
线程 0: 添加 data[7] = 1.0
线程 3: 添加 data[82] = 1.0
线程 1: 添加 data[33] = 1.0
线程 2: 添加 data[58] = 1.0
线程 0: 添加 data[8] = 1.0
线程 3: 添加 data[83] = 1.0
线程 1: 添加 data[34] = 1.0
线程 2: 添加 data[59] = 1.0
线程 0: 添加 data[9] = 1.0
线程 3: 添加 data[84] = 1.0
线程 1: 添加 data[35] = 1.0
线程 2: 添加 data[60] = 1.0
线程 0: 添加 data[10] = 1.0
线程 3: 添加 data[85] = 1.0
线程 1: 添加 data[36] = 1.0
线程 2: 添加 data[61] = 1.0
线程 0: 添加 data[11] = 1.0
线程 3: 添加 data[86] = 1.0
线程 1: 添加 data[37] = 1.0
线程 2: 添加 data[62] = 1.0
线程 0: 添加 data[12] = 1.0
线程 3: 添加 data[87] = 1.0
线程 1: 添加 data[38] = 1.0
线程 2: 添加 data[63] = 1.0
线程 0: 添加 data[13] = 1.0
线程 3: 添加 data[88] = 1.0
线程 1: 添加 data[39] = 1.0
线程 2: 添加 data[64] = 1.0
线程 0: 添加 data[14] = 1.0
线程 3: 添加 data[89] = 1.0
线程 1: 添加 data[40] = 1.0
线程 2: 添加 data[65] = 1.0
线程 0: 添加 data[15] = 1.0
线程 3: 添加 data[90] = 1.0
线程 1: 添加 data[41] = 1.0
线程 2: 添加 data[66] = 1.0
线程 0: 添加 data[16] = 1.0
线程 3: 添加 data[91] = 1.0
线程 1: 添加 data[42] = 1.0
线程 2: 添加 data[67] = 1.0
线程 0: 添加 data[17] = 1.0
线程 3: 添加 data[92] = 1.0
线程 1: 添加 data[43] = 1.0
线程 2: 添加 data[68] = 1.0
线程 0: 添加 data[18] = 1.0
线程 3: 添加 data[93] = 1.0
线程 1: 添加 data[44] = 1.0
线程 2: 添加 data[69] = 1.0
线程 0: 添加 data[19] = 1.0
线程 3: 添加 data[94] = 1.0
线程 1: 添加 data[45] = 1.0
线程 2: 添加 data[70] = 1.0
线程 0: 添加 data[20] = 1.0
线程 3: 添加 data[95] = 1.0
线程 1: 添加 data[46] = 1.0
线程 2: 添加 data[71] = 1.0
线程 0: 添加 data[21] = 1.0
线程 3: 添加 data[96] = 1.0
线程 1: 添加 data[47] = 1.0
线程 2: 添加 data[72] = 1.0
线程 0: 添加 data[22] = 1.0
线程 3: 添加 data[97] = 1.0
线程 1: 添加 data[48] = 1.0
线程 2: 添加 data[73] = 1.0
线程 0: 添加 data[23] = 1.0
线程 3: 添加 data[98] = 1.0
线程 1: 添加 data[49] = 1.0
线程 2: 添加 data[74] = 1.0
线程 0: 添加 data[24] = 1.0
线程 3: 添加 data[99] = 1.0
最终求和结果: 100.0
```

### example 3 标量整数的最大值归约

```cpp
#include <stdio.h>
#include <omp.h>

// 定义自定义归约：计算 int 类型的最大值
#pragma omp declare reduction(max_int : int : \
    omp_out = omp_in > omp_out ? omp_in : omp_out) \
    initializer(omp_priv = -2147483648) // INT_MIN

int main() {
    int n = 100;
    int result = -2147483648; // 初始为最小值
    int data[100];

    // 初始化数据：0 到 99
    for (int i = 0; i < n; i++) {
        data[i] = i;
    }

    omp_set_num_threads(4);

    // 并行循环，计算最大值
    #pragma omp parallel for reduction(max_int:result)
    for (int i = 0; i < n; i++) {
        if (data[i] > result) {
            result = data[i];
        }
        #pragma omp critical
        printf("线程 %d: 检查 data[%d] = %d\n", omp_get_thread_num(), i, data[i]);
    }

    printf("最大值: %d\n", result);
    return 0;
}
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04c\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04c\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (6.0s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04c/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04c\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04c/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04c/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04c\build> .\openmp_test.exe
线程 0: 检查 data[0] = 0
线程 1: 检查 data[25] = 25
线程 0: 检查 data[1] = 1
线程 2: 检查 data[50] = 50
线程 1: 检查 data[26] = 26
线程 3: 检查 data[75] = 75
线程 0: 检查 data[2] = 2
线程 2: 检查 data[51] = 51
线程 1: 检查 data[27] = 27
线程 3: 检查 data[76] = 76
线程 0: 检查 data[3] = 3
线程 2: 检查 data[52] = 52
线程 1: 检查 data[28] = 28
线程 3: 检查 data[77] = 77
线程 0: 检查 data[4] = 4
线程 2: 检查 data[53] = 53
线程 1: 检查 data[29] = 29
线程 3: 检查 data[78] = 78
线程 0: 检查 data[5] = 5
线程 2: 检查 data[54] = 54
线程 1: 检查 data[30] = 30
线程 3: 检查 data[79] = 79
线程 0: 检查 data[6] = 6
线程 2: 检查 data[55] = 55
线程 1: 检查 data[31] = 31
线程 3: 检查 data[80] = 80
线程 0: 检查 data[7] = 7
线程 2: 检查 data[56] = 56
线程 1: 检查 data[32] = 32
线程 3: 检查 data[81] = 81
线程 0: 检查 data[8] = 8
线程 2: 检查 data[57] = 57
线程 1: 检查 data[33] = 33
线程 3: 检查 data[82] = 82
线程 0: 检查 data[9] = 9
线程 2: 检查 data[58] = 58
线程 1: 检查 data[34] = 34
线程 3: 检查 data[83] = 83
线程 0: 检查 data[10] = 10
线程 2: 检查 data[59] = 59
线程 1: 检查 data[35] = 35
线程 3: 检查 data[84] = 84
线程 0: 检查 data[11] = 11
线程 2: 检查 data[60] = 60
线程 1: 检查 data[36] = 36
线程 3: 检查 data[85] = 85
线程 0: 检查 data[12] = 12
线程 2: 检查 data[61] = 61
线程 1: 检查 data[37] = 37
线程 3: 检查 data[86] = 86
线程 0: 检查 data[13] = 13
线程 2: 检查 data[62] = 62
线程 1: 检查 data[38] = 38
线程 3: 检查 data[87] = 87
线程 0: 检查 data[14] = 14
线程 2: 检查 data[63] = 63
线程 1: 检查 data[39] = 39
线程 3: 检查 data[88] = 88
线程 0: 检查 data[15] = 15
线程 2: 检查 data[64] = 64
线程 1: 检查 data[40] = 40
线程 3: 检查 data[89] = 89
线程 0: 检查 data[16] = 16
线程 2: 检查 data[65] = 65
线程 1: 检查 data[41] = 41
线程 3: 检查 data[90] = 90
线程 0: 检查 data[17] = 17
线程 2: 检查 data[66] = 66
线程 1: 检查 data[42] = 42
线程 3: 检查 data[91] = 91
线程 0: 检查 data[18] = 18
线程 2: 检查 data[67] = 67
线程 1: 检查 data[43] = 43
线程 3: 检查 data[92] = 92
线程 0: 检查 data[19] = 19
线程 2: 检查 data[68] = 68
线程 1: 检查 data[44] = 44
线程 3: 检查 data[93] = 93
线程 0: 检查 data[20] = 20
线程 2: 检查 data[69] = 69
线程 1: 检查 data[45] = 45
线程 3: 检查 data[94] = 94
线程 0: 检查 data[21] = 21
线程 2: 检查 data[70] = 70
线程 1: 检查 data[46] = 46
线程 3: 检查 data[95] = 95
线程 0: 检查 data[22] = 22
线程 2: 检查 data[71] = 71
线程 1: 检查 data[47] = 47
线程 3: 检查 data[96] = 96
线程 0: 检查 data[23] = 23
线程 2: 检查 data[72] = 72
线程 1: 检查 data[48] = 48
线程 3: 检查 data[97] = 97
线程 0: 检查 data[24] = 24
线程 2: 检查 data[73] = 73
线程 1: 检查 data[49] = 49
线程 3: 检查 data[98] = 98
线程 2: 检查 data[74] = 74
线程 3: 检查 data[99] = 99
最大值: 99
```

### example 4 标量浮点数的乘法归约

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// 定义自定义归约：计算 double 类型的乘积
#pragma omp declare reduction(product : double : omp_out *= omp_in) \
    initializer(omp_priv = 1.0)

int main() {
    int n = 10;
    double result = 1.0;
    double data[10];

    // 初始化数据：每个元素为 2.0
    for (int i = 0; i < n; i++) {
        data[i] = 2.0;
    }

    omp_set_num_threads(4);

    // 并行循环，计算乘积
    #pragma omp parallel for reduction(product:result)
    for (int i = 0; i < n; i++) {
        result *= data[i];
        #pragma omp critical
        printf("线程 %d: 乘以 data[%d] = %.1f\n", omp_get_thread_num(), i, data[i]);
    }

    printf("乘积结果: %.1f\n", result);
    return 0;
}
```

```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04d\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04d\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04d/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04d\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04d/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04d/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04d\build> .\openmp_test.exe
线程 0: 乘以 data[0] = 2.0
线程 1: 乘以 data[3] = 2.0
线程 0: 乘以 data[1] = 2.0
线程 2: 乘以 data[6] = 2.0
线程 1: 乘以 data[4] = 2.0
线程 3: 乘以 data[8] = 2.0
线程 0: 乘以 data[2] = 2.0
线程 2: 乘以 data[7] = 2.0
线程 1: 乘以 data[5] = 2.0
线程 3: 乘以 data[9] = 2.0
乘积结果: 1024.0
```

### example 5 结构体类型的加法归约

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// 定义结构体
struct Pair {
    double x, y;
};

// 定义自定义归约：对 Pair 结构体成员逐一加法
#pragma omp declare reduction(sum_pair : struct Pair : \
    omp_out.x += omp_in.x, omp_out.y += omp_in.y) \
    initializer(omp_priv = {0.0, 0.0})

int main() {
    int n = 10;
    struct Pair result = {0.0, 0.0};
    struct Pair data[10];

    // 初始化数据：每个 Pair 为 {1.0, 2.0}
    for (int i = 0; i < n; i++) {
        data[i].x = 1.0;
        data[i].y = 2.0;
    }

    omp_set_num_threads(4);

    // 并行循环，计算结构体加法
    #pragma omp parallel for reduction(sum_pair:result)
    for (int i = 0; i < n; i++) {
        result.x += data[i].x;
        result.y += data[i].y;
        #pragma omp critical
        printf("线程 %d: 添加 data[%d] = {%.1f, %.1f}\n", omp_get_thread_num(), i, data[i].x, data[i].y);
    }

    printf("结果: x = %.1f, y = %.1f\n", result.x, result.y);
    return 0;
}
```

```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04e\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04e\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.8s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04e/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04e\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04e/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04e/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04e\build> .\openmp_test.exe
线程 0: 添加 data[0] = {1.0, 2.0}
线程 1: 添加 data[3] = {1.0, 2.0}
线程 2: 添加 data[6] = {1.0, 2.0}
线程 0: 添加 data[1] = {1.0, 2.0}
线程 3: 添加 data[8] = {1.0, 2.0}
线程 1: 添加 data[4] = {1.0, 2.0}
线程 2: 添加 data[7] = {1.0, 2.0}
线程 0: 添加 data[2] = {1.0, 2.0}
线程 3: 添加 data[9] = {1.0, 2.0}
线程 1: 添加 data[5] = {1.0, 2.0}
结果: x = 10.0, y = 20.0
```


### example 6 简单数组归约

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// 定义自定义归约：固定大小数组 double[4]
#pragma omp declare reduction(sum_array : double[4] : \
    for (int i = 0; i < 4; i++) omp_out[i] += omp_in[i]) \
    initializer(omp_priv = {0.0, 0.0, 0.0, 0.0})

int main() {
    int n = 4;
    double result[4] = {0.0, 0.0, 0.0, 0.0};
    double data[4] = {1.0, 2.0, 3.0, 4.0};

    omp_set_num_threads(4);

    #pragma omp parallel for reduction(sum_array:result)
    for (int i = 0; i < 100; i++) {
        int tid = omp_get_thread_num() % n;
        result[tid] += data[tid];
        #pragma omp critical
        printf("线程 %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

    printf("结果数组: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    return 0;
}
```

```powershell
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04f\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04f\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.8s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04f/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04f\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04f/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04f/main.cpp
FAILED: CMakeFiles/openmp_test.dir/main.cpp.obj
C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04f/main.cpp
D:/work/llvm_work/ModernLLVM/codes/simplecode/04f/main.cpp:5:43: error: reduction type cannot be an array type
    5 | #pragma omp declare reduction(sum_array : double[4] : \
      |                                           ^
D:/work/llvm_work/ModernLLVM/codes/simplecode/04f/main.cpp:16:40: error: incorrect reduction identifier, expected one of '+', '-', '*', '&', '|', '^', '&&', '||', 'min' or 'max' or declare reduction for type 'double'
   16 |     #pragma omp parallel for reduction(sum_array:result)
      |                                        ^~~~~~~~~
2 errors generated.
ninja: build stopped: subcommand failed.
```

### example 6 标准数组段归约（推荐）

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

int main() {
    int n = 4;
    double result[4] = {0.0, 0.0, 0.0, 0.0};
    double data[4] = {1.0, 2.0, 3.0, 4.0};

    omp_set_num_threads(4);

    #pragma omp parallel for reduction(+:result[0:4])
    for (int i = 0; i < 100; i++) {
        int tid = omp_get_thread_num() % n;
        result[tid] += data[tid];
        #pragma omp critical
        printf("线程 %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

    printf("结果数组: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    return 0;
}
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04g\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04g\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.8s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04g/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04g\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04g/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04g/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04g\build> .\openmp_test.exe
线程 0: tid = 0, result[0] += 1.0
线程 1: tid = 1, result[1] += 2.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 0: tid = 0, result[0] += 1.0
线程 3: tid = 3, result[3] += 4.0
线程 1: tid = 1, result[1] += 2.0
线程 2: tid = 2, result[2] += 3.0
线程 3: tid = 3, result[3] += 4.0
线程 2: tid = 2, result[2] += 3.0
结果数组: 25.0 50.0 75.0 100.0
```

### example 7 标准数组段归约 v1

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

int main() {
    int n = 4;
    double *result = (double*)calloc(n, sizeof(double));
    double data[4] = {1.0, 2.0, 3.0, 4.0};

    omp_set_num_threads(4);

    #pragma omp parallel for reduction(+:result[0:4])
    for (int i = 0; i < 100; i++) {
        int tid = omp_get_thread_num() % n;
        result[tid] += data[tid];
        #pragma omp critical
        printf("线程 %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

    printf("结果数组: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    free(result);
    return 0;
}
```

```
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04h\build> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.14.5
** Copyright (c) 2025 Microsoft Corporation
**********************************************************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04h\build> cmake .. -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
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
-- OpenMP_CXX_FLAGS=-fopenmp=libomp
-- OpenMP_CXX_LIBRARIES=C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib
-- Configuring done (5.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/04h/build
PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04h\build> cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/04h/build'

Run Build Command(s): C:/PROGRA~1/MICROS~2/2022/COMMUN~1/Common7/IDE/COMMON~1/MICROS~1/CMake/Ninja/ninja.exe -v
[1/2] C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE   -O0 -std=gnu++14 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -fopenmp=libomp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/04h/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\PROGRA~1\MICROS~2\2022\COMMUN~1\VC\Tools\Llvm\x64\bin\CLANG_~1.EXE -nostartfiles -nostdlib -O0 -D_DEBUG -D_DLL -D_MT -Xclang --dependent-lib=msvcrtd -g -Xclang -gcodeview -Xlinker /subsystem:console -fuse-ld=lld-link CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Xlinker /MANIFEST:EMBED -Xlinker /implib:openmp_test.lib -Xlinker /pdb:openmp_test.pdb -Xlinker /version:0.0   "C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/lib/x64/libomp.lib"  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -loldnames  && cd ."

PS D:\work\llvm_work\ModernLLVM\codes\simplecode\04h\build> .\openmp_test.exe
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
线程 0: tid = 0, result[0] += 1.0
线程 2: tid = 2, result[2] += 3.0
线程 1: tid = 1, result[1] += 2.0
线程 3: tid = 3, result[3] += 4.0
结果数组: 25.0 50.0 75.0 100.0
```
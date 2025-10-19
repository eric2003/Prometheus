# OpenMP-GCC

## Link
-  [www.openmp.org](https://www.openmp.org/).
-  [OpenMP tutorials](https://www.openmp.org/resources/tutorials-articles/).
-  [OpenMP's GitHub page](https://github.com/OpenMP/).
-  [OpenMP Beginner to Mastery Series Links](https://zhuanlan.zhihu.com/p/497798114/).

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
/d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build/
```

```
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (8.0s)
-- Generating done (0.2s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
```

```
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8
```

```
eric@DELL MINGW64 ~
$ export LANG=en_US.UTF-8

eric@DELL MINGW64 ~
$ export LC_ALL=en_US.UTF-8
```


```
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.7s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ cmake --build .
[2/2] Linking CXX executable openmp_test.exe

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ ./openmp_test.exe
娴嬭瘯鑷畾涔夊綊绾︾紪璇
```

```
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (5.9s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/maincpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -cD:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\c++.exe   CMakeFiles/openmp_tes.dir/main.cpp.obj -o openmp_test.exe -Wl,--out-implib,libopenmp_test.dll.a -Wl,--major-image-versio,0,--minor-image-version,0  C:/msys64/mingw64/lib/libgomp.dll.a  C:/msys64/mingw64/lib/libmingwthrda  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32&& cd ."


eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ ./openmp_test.exe
测试自定义归约编译

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01/build
$ tail ../main.cpp
#include <windows.h>

// 定义最简单的自定义归约操作：对 double 类型进行加法
#pragma omp declare reduction(my_sum : double : omp_out += omp_in) initializer(omp_priv = 0.0)

int main() {
    SetConsoleOutputCP(CP_UTF8); // 设置控制台为 UTF-8
    printf("测试自定义归约编译\n");
    return 0;
}

```

echo $TERM
```
eric@DELL MINGW64 ~
$ echo $TERM
xterm-256color
```

### example 2

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// Define a custom reduction operation: addition for double type
#pragma omp declare reduction(my_sum : double : omp_out += omp_in) initializer(omp_priv = 0.0)

int main() {
    int n = 100;
    double result = 0.0;
    double data[100];

    // Initialize the data array, each element is 1.0
    for (int i = 0; i < n; i++) {
        data[i] = 1.0;
    }

    omp_set_num_threads(4); // Set 4 threads

    // Parallel loop using the custom reduction my_sum
    #pragma omp parallel for reduction(my_sum:result)
    for (int i = 0; i < n; i++) {
        result += data[i];
        #pragma omp critical
        printf("Thread %d: Adding data[%d] = %.1f\n", omp_get_thread_num(), i, data[i]);
    }

    // Output the result
    printf("Final sum result: %.1f\n", result);

    return 0;
}
```

```powershell
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01b/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01b/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01b/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01b/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01b/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\c++.exe   CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Wl,--out-implib,libopenmp_test.dll.a -Wl,--major-image-version,0,--minor-image-version,0  C:/msys64/mingw64/lib/libgomp.dll.a  C:/msys64/mingw64/lib/libmingwthrd.a  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 && cd ."


eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01b/build
$ ./openmp_test.exe
Thread 0: Adding data[0] = 1.0
Thread 0: Adding data[1] = 1.0
Thread 0: Adding data[2] = 1.0
Thread 0: Adding data[3] = 1.0
Thread 0: Adding data[4] = 1.0
Thread 0: Adding data[5] = 1.0
Thread 0: Adding data[6] = 1.0
Thread 0: Adding data[7] = 1.0
Thread 0: Adding data[8] = 1.0
Thread 0: Adding data[9] = 1.0
Thread 0: Adding data[10] = 1.0
Thread 0: Adding data[11] = 1.0
Thread 0: Adding data[12] = 1.0
Thread 0: Adding data[13] = 1.0
Thread 0: Adding data[14] = 1.0
Thread 0: Adding data[15] = 1.0
Thread 0: Adding data[16] = 1.0
Thread 0: Adding data[17] = 1.0
Thread 0: Adding data[18] = 1.0
Thread 0: Adding data[19] = 1.0
Thread 0: Adding data[20] = 1.0
Thread 0: Adding data[21] = 1.0
Thread 0: Adding data[22] = 1.0
Thread 0: Adding data[23] = 1.0
Thread 0: Adding data[24] = 1.0
Thread 1: Adding data[25] = 1.0
Thread 1: Adding data[26] = 1.0
Thread 1: Adding data[27] = 1.0
Thread 1: Adding data[28] = 1.0
Thread 1: Adding data[29] = 1.0
Thread 1: Adding data[30] = 1.0
Thread 1: Adding data[31] = 1.0
Thread 1: Adding data[32] = 1.0
Thread 1: Adding data[33] = 1.0
Thread 1: Adding data[34] = 1.0
Thread 1: Adding data[35] = 1.0
Thread 1: Adding data[36] = 1.0
Thread 1: Adding data[37] = 1.0
Thread 1: Adding data[38] = 1.0
Thread 1: Adding data[39] = 1.0
Thread 1: Adding data[40] = 1.0
Thread 1: Adding data[41] = 1.0
Thread 1: Adding data[42] = 1.0
Thread 1: Adding data[43] = 1.0
Thread 1: Adding data[44] = 1.0
Thread 1: Adding data[45] = 1.0
Thread 1: Adding data[46] = 1.0
Thread 1: Adding data[47] = 1.0
Thread 1: Adding data[48] = 1.0
Thread 1: Adding data[49] = 1.0
Thread 2: Adding data[50] = 1.0
Thread 2: Adding data[51] = 1.0
Thread 2: Adding data[52] = 1.0
Thread 2: Adding data[53] = 1.0
Thread 2: Adding data[54] = 1.0
Thread 2: Adding data[55] = 1.0
Thread 2: Adding data[56] = 1.0
Thread 2: Adding data[57] = 1.0
Thread 2: Adding data[58] = 1.0
Thread 2: Adding data[59] = 1.0
Thread 2: Adding data[60] = 1.0
Thread 2: Adding data[61] = 1.0
Thread 2: Adding data[62] = 1.0
Thread 2: Adding data[63] = 1.0
Thread 2: Adding data[64] = 1.0
Thread 2: Adding data[65] = 1.0
Thread 2: Adding data[66] = 1.0
Thread 2: Adding data[67] = 1.0
Thread 2: Adding data[68] = 1.0
Thread 2: Adding data[69] = 1.0
Thread 2: Adding data[70] = 1.0
Thread 2: Adding data[71] = 1.0
Thread 2: Adding data[72] = 1.0
Thread 2: Adding data[73] = 1.0
Thread 2: Adding data[74] = 1.0
Thread 3: Adding data[75] = 1.0
Thread 3: Adding data[76] = 1.0
Thread 3: Adding data[77] = 1.0
Thread 3: Adding data[78] = 1.0
Thread 3: Adding data[79] = 1.0
Thread 3: Adding data[80] = 1.0
Thread 3: Adding data[81] = 1.0
Thread 3: Adding data[82] = 1.0
Thread 3: Adding data[83] = 1.0
Thread 3: Adding data[84] = 1.0
Thread 3: Adding data[85] = 1.0
Thread 3: Adding data[86] = 1.0
Thread 3: Adding data[87] = 1.0
Thread 3: Adding data[88] = 1.0
Thread 3: Adding data[89] = 1.0
Thread 3: Adding data[90] = 1.0
Thread 3: Adding data[91] = 1.0
Thread 3: Adding data[92] = 1.0
Thread 3: Adding data[93] = 1.0
Thread 3: Adding data[94] = 1.0
Thread 3: Adding data[95] = 1.0
Thread 3: Adding data[96] = 1.0
Thread 3: Adding data[97] = 1.0
Thread 3: Adding data[98] = 1.0
Thread 3: Adding data[99] = 1.0
Final sum result: 100.0
```

### example 3 Scalar integer maximum reduction

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// Define a custom reduction: compute the maximum value for int type
#pragma omp declare reduction(max_int : int : \
    omp_out = omp_in > omp_out ? omp_in : omp_out) \
    initializer(omp_priv = -2147483648) // INT_MIN

int main() {
    int n = 100;
    int result = -2147483648; // Initialize to minimum value
    int data[100];

    // Initialize data: 0 to 99
    for (int i = 0; i < n; i++) {
        data[i] = i;
    }

    omp_set_num_threads(4);

    // Parallel loop to compute the maximum value
    #pragma omp parallel for reduction(max_int:result)
    for (int i = 0; i < n; i++) {
        if (data[i] > result) {
            result = data[i];
        }
        #pragma omp critical
        printf("Thread %d: Checking data[%d] = %d\n", omp_get_thread_num(), i, data[i]);
    }

    printf("Maximum value: %d\n", result);
    return 0;
}
```

```bash
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01c/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01c/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01c/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01c/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01c/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\c++.exe   CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Wl,--out-implib,libopenmp_test.dll.a -Wl,--major-image-version,0,--minor-image-version,0  C:/msys64/mingw64/lib/libgomp.dll.a  C:/msys64/mingw64/lib/libmingwthrd.a  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 && cd ."


eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01c/build
$ ./openmp_test.exe
Thread 0: Checking data[0] = 0
Thread 0: Checking data[1] = 1
Thread 0: Checking data[2] = 2
Thread 0: Checking data[3] = 3
Thread 0: Checking data[4] = 4
Thread 0: Checking data[5] = 5
Thread 0: Checking data[6] = 6
Thread 0: Checking data[7] = 7
Thread 0: Checking data[8] = 8
Thread 0: Checking data[9] = 9
Thread 0: Checking data[10] = 10
Thread 0: Checking data[11] = 11
Thread 0: Checking data[12] = 12
Thread 0: Checking data[13] = 13
Thread 0: Checking data[14] = 14
Thread 0: Checking data[15] = 15
Thread 0: Checking data[16] = 16
Thread 0: Checking data[17] = 17
Thread 0: Checking data[18] = 18
Thread 0: Checking data[19] = 19
Thread 0: Checking data[20] = 20
Thread 0: Checking data[21] = 21
Thread 0: Checking data[22] = 22
Thread 0: Checking data[23] = 23
Thread 0: Checking data[24] = 24
Thread 2: Checking data[50] = 50
Thread 2: Checking data[51] = 51
Thread 2: Checking data[52] = 52
Thread 2: Checking data[53] = 53
Thread 2: Checking data[54] = 54
Thread 2: Checking data[55] = 55
Thread 2: Checking data[56] = 56
Thread 2: Checking data[57] = 57
Thread 2: Checking data[58] = 58
Thread 2: Checking data[59] = 59
Thread 2: Checking data[60] = 60
Thread 2: Checking data[61] = 61
Thread 2: Checking data[62] = 62
Thread 2: Checking data[63] = 63
Thread 2: Checking data[64] = 64
Thread 2: Checking data[65] = 65
Thread 2: Checking data[66] = 66
Thread 2: Checking data[67] = 67
Thread 2: Checking data[68] = 68
Thread 2: Checking data[69] = 69
Thread 2: Checking data[70] = 70
Thread 2: Checking data[71] = 71
Thread 2: Checking data[72] = 72
Thread 2: Checking data[73] = 73
Thread 2: Checking data[74] = 74
Thread 1: Checking data[25] = 25
Thread 1: Checking data[26] = 26
Thread 1: Checking data[27] = 27
Thread 1: Checking data[28] = 28
Thread 1: Checking data[29] = 29
Thread 1: Checking data[30] = 30
Thread 1: Checking data[31] = 31
Thread 1: Checking data[32] = 32
Thread 1: Checking data[33] = 33
Thread 1: Checking data[34] = 34
Thread 1: Checking data[35] = 35
Thread 1: Checking data[36] = 36
Thread 1: Checking data[37] = 37
Thread 1: Checking data[38] = 38
Thread 1: Checking data[39] = 39
Thread 1: Checking data[40] = 40
Thread 1: Checking data[41] = 41
Thread 1: Checking data[42] = 42
Thread 1: Checking data[43] = 43
Thread 1: Checking data[44] = 44
Thread 1: Checking data[45] = 45
Thread 1: Checking data[46] = 46
Thread 1: Checking data[47] = 47
Thread 1: Checking data[48] = 48
Thread 1: Checking data[49] = 49
Thread 3: Checking data[75] = 75
Thread 3: Checking data[76] = 76
Thread 3: Checking data[77] = 77
Thread 3: Checking data[78] = 78
Thread 3: Checking data[79] = 79
Thread 3: Checking data[80] = 80
Thread 3: Checking data[81] = 81
Thread 3: Checking data[82] = 82
Thread 3: Checking data[83] = 83
Thread 3: Checking data[84] = 84
Thread 3: Checking data[85] = 85
Thread 3: Checking data[86] = 86
Thread 3: Checking data[87] = 87
Thread 3: Checking data[88] = 88
Thread 3: Checking data[89] = 89
Thread 3: Checking data[90] = 90
Thread 3: Checking data[91] = 91
Thread 3: Checking data[92] = 92
Thread 3: Checking data[93] = 93
Thread 3: Checking data[94] = 94
Thread 3: Checking data[95] = 95
Thread 3: Checking data[96] = 96
Thread 3: Checking data[97] = 97
Thread 3: Checking data[98] = 98
Thread 3: Checking data[99] = 99
Maximum value: 99
```


### example 4 Scalar floating-point multiplication reduction

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// Define a custom reduction: compute the product of double type
#pragma omp declare reduction(product : double : omp_out *= omp_in) \
    initializer(omp_priv = 1.0)

int main() {
    int n = 10;
    double result = 1.0;
    double data[10];

    // Initialize data: each element is 2.0
    for (int i = 0; i < n; i++) {
        data[i] = 2.0;
    }

    omp_set_num_threads(4);

    // Parallel loop to compute the product
    #pragma omp parallel for reduction(product:result)
    for (int i = 0; i < n; i++) {
        result *= data[i];
        #pragma omp critical
        printf("Thread %d: Multiplying by data[%d] = %.1f\n", omp_get_thread_num(), i, data[i]);
    }

    printf("Product result: %.1f\n", result);
    return 0;
}
```

```
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01d/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01d/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01d/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01d/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01d/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\c++.exe   CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Wl,--out-implib,libopenmp_test.dll.a -Wl,--major-image-version,0,--minor-image-version,0  C:/msys64/mingw64/lib/libgomp.dll.a  C:/msys64/mingw64/lib/libmingwthrd.a  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 && cd ."


eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01d/build
$ ./openmp_test.exe
Thread 0: Multiplying by data[0] = 2.0
Thread 0: Multiplying by data[1] = 2.0
Thread 0: Multiplying by data[2] = 2.0
Thread 3: Multiplying by data[8] = 2.0
Thread 3: Multiplying by data[9] = 2.0
Thread 2: Multiplying by data[6] = 2.0
Thread 2: Multiplying by data[7] = 2.0
Thread 1: Multiplying by data[3] = 2.0
Thread 1: Multiplying by data[4] = 2.0
Thread 1: Multiplying by data[5] = 2.0
Product result: 1024.0
```

### example 5 Additive reduction of structure types

```cpp
#include <stdio.h>
#include <omp.h>

// Define a structure
struct Pair {
    double x, y;
};

// Define a custom reduction: element-wise addition for Pair structure
#pragma omp declare reduction(sum_pair : struct Pair : \
    omp_out.x += omp_in.x, omp_out.y += omp_in.y) \
    initializer(omp_priv = {0.0, 0.0})

int main() {
    int n = 10;
    struct Pair result = {0.0, 0.0};
    struct Pair data[10];

    // Initialize data: each Pair is {1.0, 2.0}
    for (int i = 0; i < n; i++) {
        data[i].x = 1.0;
        data[i].y = 2.0;
    }

    omp_set_num_threads(4);

    // Parallel loop to compute structure addition
    #pragma omp parallel for reduction(sum_pair:result)
    for (int i = 0; i < n; i++) {
        result.x += data[i].x;
        result.y += data[i].y;
        #pragma omp critical
        printf("Thread %d: Adding data[%d] = {%.1f, %.1f}\n", omp_get_thread_num(), i, data[i].x, data[i].y);
    }

    printf("Result: x = %.1f, y = %.1f\n", result.x, result.y);
    return 0;
}
```

```bash
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01e/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01e/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01e/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01e/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01e/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\c++.exe   CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Wl,--out-implib,libopenmp_test.dll.a -Wl,--major-image-version,0,--minor-image-version,0  C:/msys64/mingw64/lib/libgomp.dll.a  C:/msys64/mingw64/lib/libmingwthrd.a  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 && cd ."


eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01e/build
$ ./openmp_test.exe
Thread 1: Adding data[3] = {1.0, 2.0}
Thread 1: Adding data[4] = {1.0, 2.0}
Thread 1: Adding data[5] = {1.0, 2.0}
Thread 3: Adding data[8] = {1.0, 2.0}
Thread 3: Adding data[9] = {1.0, 2.0}
Thread 2: Adding data[6] = {1.0, 2.0}
Thread 2: Adding data[7] = {1.0, 2.0}
Thread 0: Adding data[0] = {1.0, 2.0}
Thread 0: Adding data[1] = {1.0, 2.0}
Thread 0: Adding data[2] = {1.0, 2.0}
Result: x = 10.0, y = 20.0
```

### example 6 Additive reduction of structure types

main.cpp
```cpp
#include <stdio.h>
#include <omp.h>

// Define a custom reduction: fixed-size array double[4]
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
        printf("Thread %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

    printf("Result array: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    return 0;
}
```

```
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.7s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/main.cpp
FAILED: CMakeFiles/openmp_test.dir/main.cpp.obj
C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/main.cpp
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/main.cpp:5:43: error: function or array type 'double [4]' in '#pragma omp declare reduction'
    5 | #pragma omp declare reduction(sum_array : double[4] : \
      |                                           ^~~~~~
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/main.cpp: In function 'int main()':
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01f/main.cpp:16:50: error: user defined reduction not found for 'result'
   16 |     #pragma omp parallel for reduction(sum_array:result)
      |                                                  ^~~~~~
ninja: build stopped: subcommand failed.
```

### example 7

main.cpp
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <omp.h>
#include <windows.h>

// Define a custom reduction: dynamic array double*
#pragma omp declare reduction(sum_array : double* : \
    for (int i = 0; i < 4; i++) omp_out[i] += omp_in[i]) \
    initializer(omp_priv = (double*)calloc(4, sizeof(double)))

int main() {
    SetConsoleOutputCP(CP_UTF8);
    int n = 4;
    double *result = (double*)calloc(n, sizeof(double));
    double data[4] = {1.0, 2.0, 3.0, 4.0};

    omp_set_num_threads(4);

    #pragma omp parallel for reduction(sum_array:result)
    for (int i = 0; i < 100; i++) {
        int tid = omp_get_thread_num() % n;
        result[tid] += data[tid];
        #pragma omp critical
        printf("Thread %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

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
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.6s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/main.cpp
FAILED: CMakeFiles/openmp_test.dir/main.cpp.obj
C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/main.cpp
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/main.cpp: In function 'void omp declare reduction sum_array~Pd(double*&)':
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/main.cpp:8:5: error: expected primary-expression before 'for'
    8 |     for (int i = 0; i < 4; i++) omp_out[i] += omp_in[i]) \
      |     ^~~
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01g/main.cpp:7:52: error: expected ')' before 'for'
    7 | #pragma omp declare reduction(sum_array : double* : \
      |                                                    ^
      |                                                    )
    8 |     for (int i = 0; i < 4; i++) omp_out[i] += omp_in[i]) \
      |     ~~~
ninja: build stopped: subcommand failed.
```

### example 8

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
        printf("Thread %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

    printf("Result array: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    return 0;
}
```

```
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01h/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.7s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01h/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01h/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01h/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01h/main.cpp
[2/2] C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\c++.exe   CMakeFiles/openmp_test.dir/main.cpp.obj -o openmp_test.exe -Wl,--out-implib,libopenmp_test.dll.a -Wl,--major-image-version,0,--minor-image-version,0  C:/msys64/mingw64/lib/libgomp.dll.a  C:/msys64/mingw64/lib/libmingwthrd.a  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 && cd ."


eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01h/build
$ ./openmp_test.exe
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 0: tid = 0, result[0] += 1.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 1: tid = 1, result[1] += 2.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 2: tid = 2, result[2] += 3.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Thread 3: tid = 3, result[3] += 4.0
Result array: 25.0 50.0 75.0 100.0
```

## example 9
```cpp
#include <stdio.h>
#include <vector>
#include <algorithm>
#include <functional>
#include <omp.h>

// Define a custom reduction for std::vector<double>
#pragma omp declare reduction(vec_double_plus : std::vector<double> : \
    std::transform(omp_out.begin(), omp_out.end(), omp_in.begin(), omp_out.begin(), std::plus<double>)) \
    initializer(omp_priv = std::vector<double>(omp_orig.size(), 0.0))

int main() {
    int n = 4;
    std::vector<double> result(n, 0.0);
    std::vector<double> data = {1.0, 2.0, 3.0, 4.0};

    omp_set_num_threads(4);

    #pragma omp parallel for reduction(vec_double_plus:result)
    for (int i = 0; i < 100; i++) {
        int tid = omp_get_thread_num() % n;
        result[tid] += data[tid];
        #pragma omp critical
        printf("Thread %d: tid = %d, result[%d] += %.1f\n", omp_get_thread_num(), tid, tid, data[tid]);
    }

    printf("Result array: ");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", result[i]);
    }
    printf("\n");

    return 0;
}
```


```bash
eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=C:/msys64/mingw64/bin/c++.exe
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=C:/msys64/mingw64/lib/libgomp.dll.a;C:/msys64/mingw64/lib/libmingwthrd.a
-- Configuring done (3.8s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/build

eric@DELL MINGW64 /d/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/build
$ cmake --build . --verbose
Change Dir: 'D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/build'

Run Build Command(s): C:/msys64/mingw64/bin/ninja.exe -v
[1/2] C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/main.cpp
FAILED: CMakeFiles/openmp_test.dir/main.cpp.obj
C:\msys64\mingw64\bin\c++.exe   -std=gnu++11 -fopenmp -MD -MT CMakeFiles/openmp_test.dir/main.cpp.obj -MF CMakeFiles\openmp_test.dir\main.cpp.obj.d -o CMakeFiles/openmp_test.dir/main.cpp.obj -c D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/main.cpp
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/main.cpp: In function 'void omp declare reduction vec_double_plus~St6vectorIdSaIdEE(std::vector<double>&)':
D:/work/llvm_work/ModernLLVM/codes/simplecode/g++/01i/main.cpp:9:102: error: expected primary-expression before ')' token
    9 |     std::transform(omp_out.begin(), omp_out.end(), omp_in.begin(), omp_out.begin(), std::plus<double>)) \
      |
         ^
ninja: build stopped: subcommand failed.

```


```
sudo apt-get remove --purge gcc
sudo apt-get remove --purge g++
sudo apt-get remove --purge gfortran
sudo apt-get remove --purge cpp
```

```
sudo snap install cmake --classic
eric@DELL:~$ sudo snap install cmake --classic
cmake 4.0.3 from Crascit✓ installed
```

### sudo apt install gcc
```
eric@DELL:~$ gcc --version
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### g++ --version
```
eric@DELL:~$ g++ --version
g++ (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### gfortran --version
```
eric@DELL:~$ gfortran --version
GNU Fortran (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### _OPENMP

| OpenMP 版本 | `_OPENMP` 值 |
|-------------|----------------|
| OpenMP 2.0  | 200203         |
| OpenMP 2.5  | 200505         |
| OpenMP 3.0  | 200805         |
| OpenMP 3.1  | 201107         |
| OpenMP 4.0  | 201307         |
| OpenMP 4.5  | 201511         |
| OpenMP 5.0  | 201811         |
| OpenMP 5.1  | 202011         |
| OpenMP 5.2  | 202211         |


```
eric@DELL:~$ g++ -dM -E -fopenmp -x c++ /dev/null | grep _OPENMP
#define _OPENMP 201511
```

sudo apt install make
```
eric@DELL:~/work/openmp_work/simple/01/build$ make --version
GNU Make 4.3
Built for x86_64-pc-linux-gnu
Copyright (C) 1988-2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

cmake ..
```
eric@DELL:~/work/openmp_work/simple/01/build$ cmake ..
-- The CXX compiler identification is GNU 13.3.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_C_COMPILER=
-- CMAKE_CXX_COMPILER=/usr/bin/c++
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=/usr/lib/gcc/x86_64-linux-gnu/13/libgomp.so;/usr/lib/x86_64-linux-gnu/libpthread.a
-- Configuring done (0.4s)
-- Generating done (0.0s)
-- Build files have been written to: /home/eric/work/openmp_work/simple/01/build
```

```
sudo snap install gcc
```

sudo add-apt-repository ppa:ubuntu-toolchain-r/test
```
eric@DELL:~$ apt-cache madison gcc
       gcc | 4:13.2.0-7ubuntu1 | http://cn.archive.ubuntu.com/ubuntu noble/main amd64 Packages
eric@DELL:~$ sudo add-apt-repository ppa:ubuntu-toolchain-r/test
PPA publishes dbgsym, you may need to include 'main/debug' component
Repository: 'Types: deb
URIs: https://ppa.launchpadcontent.net/ubuntu-toolchain-r/test/ubuntu/
Suites: noble
Components: main
'
Description:
Toolchain test builds; see https://wiki.ubuntu.com/ToolChain

More info: https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test
Adding repository.
Press [ENTER] to continue or Ctrl-c to cancel.

```

### apt-cache madison gcc
```
eric@DELL:~$ apt-cache madison gcc
       gcc | 4:13.2.0-7ubuntu1 | http://cn.archive.ubuntu.com/ubuntu noble/main amd64 Packages
```

```
#include "omp-api.h" 
```

Search _OPENMP
```
Search results:
[44 files and 0 directories found]

d:\work\gcc_work\gcc-15.1.0\libstdc++-v3\include\pstl_config.h
d:\work\gcc_work\gcc-15.1.0\libstdc++-v3\include\pstl_parallel_backend.h
d:\work\gcc_work\gcc-15.1.0\libstdc++-v3\include\pstl_execution_impl.h
d:\work\gcc_work\gcc-15.1.0\libgomp\testsuite\libgomp\fortran\omp_cond.F90
d:\work\gcc_work\gcc-15.1.0\libgomp\testsuite\libgomp\fortran\omp_cond3.F90
d:\work\gcc_work\gcc-15.1.0\libgomp\testsuite\libgomp\c\sort-1.c
d:\work\gcc_work\gcc-15.1.0\libgomp\testsuite\libgomp.c\appendix-a.3.1.c
d:\work\gcc_work\gcc-15.1.0\libgomp\task.c
d:\work\gcc_work\gcc-15.1.0\libgomp\target.c
d:\work\gcc_work\gcc-15.1.0\libgomp\plugin\plugin-nvptx.c
d:\work\gcc_work\gcc-15.1.0\libgomp\plugin\plugin.c
d:\work\gcc_work\gcc-15.1.0\libgomp\omp_lib.f90.in
d:\work\gcc_work\gcc-15.1.0\libgomp\omp.h.in
d:\work\gcc_work\gcc-15.1.0\libgomp\libgomp-plugin.h
d:\work\gcc_work\gcc-15.1.0\libgomp\libgomp.texi
d:\work\gcc_work\gcc-15.1.0\libgomp\libgomp.info
d:\work\gcc_work\gcc-15.1.0\libgomp\env.c
d:\work\gcc_work\gcc-15.1.0\libgomp\ChangeLog
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\gfortran.dg\openmp\define-3.f90
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\gfortran.dg\openmp\define-2.f90
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\gfortran.dg\openmp\define-1.f90
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\ChangeLog-2015
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\ChangeLog-2014
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\c++-common\spellcheck-missing-option.c
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\c++-common\cpp\openmp\define-3.c
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\c++-common\cpp\openmp\define-2.c
d:\work\gcc_work\gcc-15.1.0\gcc\testsuite\c++-common\cpp\openmp\define-1.c
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\dump-parse-tree.cc
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\cpp_cc.c
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\ChangeLog-2016
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\ChangeLog-2014
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\ChangeLog-2011
d:\work\gcc_work\gcc-15.1.0\gcc\fortran\ChangeLog-2008
d:\work\gcc_work\gcc-15.1.0\gcc\vcp\name-lookup.cc
d:\work\gcc_work\gcc-15.1.0\gcc\vcp\module.cc
d:\work\gcc_work\gcc-15.1.0\gcc\vcp\ChangeLog
d:\work\gcc_work\gcc-15.1.0\gcc\ChangeLog-2017
d:\work\gcc_work\gcc-15.1.0\gcc\ChangeLog-2016
d:\work\gcc_work\gcc-15.1.0\gcc\ChangeLog-2015
d:\work\gcc_work\gcc-15.1.0\gcc\ChangeLog-2008
d:\work\gcc_work\gcc-15.1.0\gcc\ChangeLog-2006
d:\work\gcc_work\gcc-15.1.0\gcc\c\family\ChangeLog
d:\work\gcc_work\gcc-15.1.0\gcc\c\family\c-cppbuiltin.c
d:\work\gcc_work\gcc-15.1.0\gcc\c\c-decl.c
```

```
tar -xzvf filename.tar.gz
tar -xzvf gcc-15.1.0.tar.gz
```

```
sudo apt-get install -y \
  build-essential \
  libgmp-dev \
  libmpfr-dev \
  libmpc-dev \
  libc6-dev \
  libtbb-dev
```

```
eric@DELL:~$ dpkg -l | grep -E 'libgmp|libmpfr|libmpc|zlib|libiconv|libtbb'
ii  libgmp-dev:amd64                              2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library developers tools
ii  libgmp10:amd64                                2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library
ii  libgmpxx4ldbl:amd64                           2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library (C++ bindings)
ii  libmpc-dev:amd64                              1.3.1-1build1.1                          amd64        multiple precision complex floating-point library development package
ii  libmpc3:amd64                                 1.3.1-1build1.1                          amd64        multiple precision complex floating-point library
ii  libmpfr-dev:amd64                             4.2.1-1build1.1                          amd64        multiple precision floating-point computation developers tools
ii  libmpfr6:amd64                                4.2.1-1build1.1                          amd64        multiple precision floating-point computation
ii  libtbb-dev:amd64                              2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - development files
ii  libtbb12:amd64                                2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - runtime files
ii  libtbbbind-2-5:amd64                          2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - runtime files
ii  libtbbmalloc2:amd64                           2021.11.0-2ubuntu2                       amd64        parallelism helper library for C++ - runtime files
ii  zlib1g:amd64                                  1:1.3.dfsg-3.1ubuntu2.1                  amd64        compression library - runtime

```

```
eric@DELL:~$ dpkg -l | grep -E 'libc6-dev|build-essential'
ii  build-essential                               12.10ubuntu1                             amd64        Informational list of build-essential packages
ii  libc6-dev:amd64                               2.39-0ubuntu8.4                          amd64        GNU C Library: Development Libraries and Header Files
```

```
../configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --with-tune=generic \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-debug \
  --enable-libstdcxx-parallel \
  --enable-nls \
  --disable-multilib
```

```
make -j$(nproc)
```


```
sudo apt update
sudo apt install zlib1g-dev
```


```
eric@DELL:~/work/gcc_work/gcc-15.1.0/build$ /home/eric/software/gcc/gcc-15.1.0/bin/g++ --version
g++ (GCC) 15.1.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

```
/home/eric/software/gcc/gcc-15.1.0/bin/g++ -dM -E -fopenmp -x c++ /dev/null | grep _OPENMP
```

```
/d/work/gmsh_work/gmsh-gmsh_4_13_1/build/
cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5 
```

```
-- Gmsh 4.13.1 has been configured for Windows64
--
--  * Build options: 64Bit ALGLIB[contrib] ANN[contrib] Bamg Blossom Cairo DIntegration DomHex Eigen[contrib] Fltk GMP Gmm[contrib] Hxt Jpeg Kbipack MathEx[contrib] Mesh Metis[contrib] Mpeg Netgen Nii2mesh NoSocklenT ONELAB ONELABMetamodel OpenGL OpenMP OptHom Parser Plugins Png Post QuadMeshingTools QuadTri Solver TetGen/BR TinyXML2[contrib] Untangle Voro++[contrib] WinslowUntangler Zlib
--  * Build type: RelWithDebInfo
--  * C compiler: C:/msys64/mingw64/bin/cc.exe
--  * C++ compiler: C:/msys64/mingw64/bin/c++.exe
--  * Install prefix: C:/Program Files (x86)/gmsh
```

```
-- Gmsh 4.13.1 has been configured for Linux64
-- 
--  * Build options: 64Bit ALGLIB[contrib] ANN[contrib] Bamg Blossom DIntegration Dlopen DomHex Eigen[contrib] GMP Gmm[contrib] Hxt Kbipack LinuxJoystick MathEx[contrib] Mesh Metis[contrib] Netgen Nii2mesh ONELAB ONELABMetamodel OpenMP OptHom Parser Plugins Post QuadMeshingTools QuadTri Solver TetGen/BR TinyXML2[contrib] Untangle Voro++[contrib] WinslowUntangler
--  * Build type: RelWithDebInfo
--  * C compiler: /usr/bin/cc
--  * C++ compiler: /usr/bin/c++
--  * Install prefix: /usr/local
```

```
make -j 8 2>&1 | tee build_output.log
```

```
pacman -S make
```

```
pacman -S mingw-w64-x86_64-fltk
```

```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-fltk
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-fltk-1.4.3-1

Total Download Size:    2.01 MiB
Total Installed Size:  17.34 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-fltk-1.4....     2.0 MiB   746 KiB/s 00:03 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-fltk                       [###############################] 100%
```

```
d:\work\gmsh_work\gmsh-gmsh_4_13_1\src\mesh\meshGRegionHxt.cpp
meshGRegionHxt.cpp:28
extern "C" {
#include "hxt_omp.h"
#include "hxt_tetMesh.h"
#include "hxt_tetDelaunay.h"
}
```


```
from D:/work/gmsh_work/gmsh-gmsh_4_13_1/contrib/hxt/tetBR/src/hxt_boundary_recovery.cxx:4:
extern "C" {
#include "hxt_mesh.h"
#include "hxt_tools.h"
#include "hxt_omp.h"
#include "predicates.h"
}
->
#include "hxt_omp.h"
extern "C" {
#include "hxt_mesh.h"
#include "hxt_tools.h"
#include "predicates.h"
}

```

pacman -Syu
```
pacman -Syu
pacman -S tree
```

```
# this variable controls the default value of the options which are normally set
# to ON (useful if you want to configure a minimal version of Gmsh: e.g. "cmake
# -DDEFAULT=0 -DENABLE_POST=1 -DENABLE_PARSER=1")
set(DEFAULT ON CACHE INTERNAL "Default value for enabled-by-default options")

macro(opt OPTION HELP VALUE)
  option(ENABLE_${OPTION} ${HELP} ${VALUE})
  set(OPT_TEXI "${OPT_TEXI}\n@item ENABLE_${OPTION}\n${HELP} (default: ${VALUE})")
endmacro()
opt(UNTANGLE "Enable 2D and 3D UNTANGLER" ${DEFAULT})
```

```
由于找不到 libfltk-1.4.dll，无法继续执行代码。重新安装程序可能会解决此问题。
由于找不到 libfltk_gl-1.4.dll，无法继续执行代码。重新安装程序可能会解决此问题。
由于找不到 libcairo-2.dll，无法继续执行代码。重新安装程序可能会解决此问题。
由于找不到 libfltk_images-1.4.dll，无法继续执行代码。重新安装程序可能会解决此问题。
```

```
libfltk-1.4.dll
libfltk_gl-1.4.dll
libcairo-2.dll
libfltk_images-1.4.dll
```

```
无法定位程序输入点 hb_ot_tags_from_script_and_language 于动态链接库 c:\mys64\mingw64\bin\libfreetype-6.dll 上。
```

```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-freetype mingw-w64-x86_64-harfbuzz
warning: mingw-w64-x86_64-freetype-2.13.3-1 is up to date -- reinstalling
warning: mingw-w64-x86_64-harfbuzz-11.2.1-1 is up to date -- reinstalling
resolving dependencies...
looking for conflicting packages...
warning: dependency cycle detected:
warning: mingw-w64-x86_64-harfbuzz will be installed before its mingw-w64-x86_64-freetype dependenc

Packages (2) mingw-w64-x86_64-freetype-2.13.3-1  mingw-w64-x86_64-harfbuzz-11.2.1-1

Total Installed Size:  15.52 MiB
Net Upgrade Size:       0.00 MiB

:: Proceed with installation? [Y/n] y
(2/2) checking keys in keyring                               [###############################] 100%
(2/2) checking package integrity                             [###############################] 100%
(2/2) loading package files                                  [###############################] 100%
(2/2) checking for file conflicts                            [###############################] 100%
(2/2) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/2) reinstalling mingw-w64-x86_64-harfbuzz                 [###############################] 100%
(2/2) reinstalling mingw-w64-x86_64-freetype                 [###############################] 100%
```

```
sudo apt-get update
sudo apt install libfltk1.3-dev
```

```
sudo apt-get install open-vm-tools
sudo apt-get install open-vm-tools-desktop
```

```
sudo apt install libfltk1.3-dev
```

### fltk-config --version
```
eric@DELL:~$ fltk-config --version
1.3.8
```

### dpkg -l | grep libfreetype
```
eric@DELL:~$ dpkg -l | grep libfreetype
ii  libfreetype6:amd64                            2.13.2+dfsg-1build3                      amd64        FreeType 2 font engine, shared library files
```

sudo snap install code --classic
```
eric@DELL:~/work/gmsh_work/gmsh-cmake-debug/build$ sudo snap install code
[sudo] password for eric: 
error: This revision of snap "code" was published using classic confinement
       and thus may perform arbitrary system changes outside of the security
       sandbox that snaps are usually confined to, which may put your system at
       risk.

       If you understand and want to proceed repeat the command including
       --classic.
```

```
cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5
message(STATUS "GMSH_RELEASE=${GMSH_RELEASE}")
message(STATUS "ENABLE_RPATH=${ENABLE_RPATH}")
message(STATUS "ENABLE_OPENMP=${ENABLE_OPENMP}")
message(STATUS "OpenMP_FOUND=${OpenMP_FOUND}")
message(STATUS "OPENMP_FOUND=${OPENMP_FOUND}")
```

```
option(<variable> "<help_text>" [value])
```

```cmake
cmake_minimum_required ( VERSION 4.0.2 )

macro(opt OPTION HELP VALUE)
  message(STATUS "HELP=${HELP}")
  message(STATUS "VALUE=${VALUE}")
  option(ENABLE_${OPTION} ${HELP} ${VALUE})
  set(OPT_TEXI "${OPT_TEXI}\n@item ENABLE_${OPTION}\n${HELP} (default: ${VALUE})")
  message(STATUS "ENABLE_${OPTION}=${ENABLE_${OPTION}}")
  message(STATUS "OPT_TEXI=${OPT_TEXI}")
endmacro()

project ( testprj )

opt(UNTANGLE "Enable 2D and 3D UNTANGLER" ON)
```

```
-- HELP=Enable 2D and 3D UNTANGLER
-- VALUE=ON
-- ENABLE_UNTANGLE=ON
-- OPT_TEXI=
@item ENABLE_UNTANGLE
Enable 2D and 3D UNTANGLER (default: ON)
```


```cmake
cmake_minimum_required ( VERSION 4.0.2 )

macro(set_config_option VARNAME STRING)
  message(STATUS "VARNAME=${VARNAME}")
  set(${VARNAME} TRUE)
  message(STATUS "VARNAME=${VARNAME}")
  message(STATUS "STRING=${STRING}")  
  list(APPEND CONFIG_OPTIONS ${STRING})
  message(STATUS "CONFIG_OPTIONS=${CONFIG_OPTIONS}")
  message(STATUS "Found " ${STRING})
endmacro()

project ( testprj )

set_config_option(HAVE_OPENMP "OpenMP")
```

```
-- VARNAME=HAVE_OPENMP
-- VARNAME=HAVE_OPENMP
-- STRING=OpenMP
-- CONFIG_OPTIONS=OpenMP
-- Found OpenMP
```

```cmake
if(ENABLE_OPENMP)
  find_package(OpenMP)
  message(STATUS "OpenMP_FOUND=${OpenMP_FOUND}")
  message(STATUS "OPENMP_FOUND=${OPENMP_FOUND}")
  message(STATUS "OpenMP_C_FLAGS=${OpenMP_C_FLAGS}")
  message(STATUS "OpenMP_CXX_FLAGS=${OpenMP_CXX_FLAGS}")
  message(STATUS "OpenMP_CXX_LIBRARIES=${OpenMP_CXX_LIBRARIES}")
  message(STATUS "CMAKE_C_FLAGS=${CMAKE_C_FLAGS}")
  message(STATUS "CMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}")
  if(OpenMP_FOUND OR OPENMP_FOUND)
    set_config_option(HAVE_OPENMP "OpenMP")
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${OpenMP_C_FLAGS}")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OpenMP_CXX_FLAGS}")
    list(APPEND EXTERNAL_LIBRARIES "${OpenMP_CXX_LIBRARIES}")
    message(STATUS "CMAKE_C_FLAGS=${CMAKE_C_FLAGS}")
    message(STATUS "CMAKE_CXX_FLAGS=${CMAKE_CXX_FLAGS}") 
```

```
-- ENABLE_RPATH=ON
-- ENABLE_OPENMP=ON
-- Found OpenMP_C: -fopenmp (found version "4.5")
-- Found OpenMP_CXX: -fopenmp (found version "4.5")
-- Found OpenMP: TRUE (found version "4.5")
-- OpenMP_FOUND=TRUE
-- OPENMP_FOUND=TRUE
-- OpenMP_C_FLAGS=-fopenmp
-- OpenMP_CXX_FLAGS=-fopenmp
-- OpenMP_CXX_LIBRARIES=/usr/lib/gcc/x86_64-linux-gnu/13/libgomp.so;/usr/lib/x86_64-linux-gnu/libpthread.a
-- CMAKE_C_FLAGS=
-- CMAKE_CXX_FLAGS=
-- Found OpenMP
-- CMAKE_C_FLAGS= -fopenmp
-- CMAKE_CXX_FLAGS= -fopenmp
```

```
/home/eric/work/gmsh_work/gmsh-test/build/CMakeFiles/gmsh.dir/contrib/ALGLIB
```

```
cmake .. -D DEFAULT=0 -D CMAKE_POLICY_VERSION_MINIMUM=3.5
-D ENABLE_OPENMP=ON
cmake .. -D DEFAULT=0 -D CMAKE_POLICY_VERSION_MINIMUM=3.5
-D ENABLE_OPENMP=ON 2>&1 | tee build_output.log
make -j 8 2>&1 | tee build_output.log
cmake .. -D CMAKE_POLICY_VERSION_MINIMUM=3.5 \
-D DEFAULT=0 \
-D ENABLE_MESH=ON \
-D ENABLE_UNTANGLE=ON \
-D ENABLE_OPENMP=ON \
2>&1 | tee cmake_output.log
make -j 8 2>&1 | tee build_output.log
```

```
eric@DELL:~$ g++ -dM -E -fopenmp -x c++ /dev/null | grep _OPENMP
#define _OPENMP 201511
```

```cmake
if(WIN32)
  add_definitions(-D_USE_MATH_DEFINES)
  list(APPEND EXTERNAL_LIBRARIES winmm wsock32 ws2_32 psapi)
endif()

if(MSVC)
  add_definitions(-DNOMINMAX -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS
                  -D_SCL_SECURE_NO_DEPRECATE)
endif()
```

```cmake
check_symbol_exists(vsnprintf "stdio.h" HAVE_VSNPRINTF)
check_cxx_compiler_flag("-Wall" WALL)
```
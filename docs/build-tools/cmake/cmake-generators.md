# CMake Generators

## Visual Studio Toolset Selection

-  [Visual Studio Toolset Selection](https://cmake.org/cmake/help/latest/variable/CMAKE_GENERATOR_TOOLSET.html).

```cmake
he Visual Studio Generators support toolset specification using one of these forms:

toolset

toolset[,key=value]*

key=value[,key=value]*

The toolset specifies the toolset name. The selected toolset name is provided in the CMAKE_VS_PLATFORM_TOOLSET variable.

The key=value pairs form a comma-separated list of options to specify generator-specific details of the toolset selection. Supported pairs are:

cuda=<version>|<path>
Specify the CUDA toolkit version to use or the path to a standalone CUDA toolkit directory. Supported by VS 2010 and above. The version can only be used with the CUDA toolkit VS integration globally installed. See the CMAKE_VS_PLATFORM_TOOLSET_CUDA and CMAKE_VS_PLATFORM_TOOLSET_CUDA_CUSTOM_DIR variables.

fortran=<compiler>
Added in version 3.29.

Specify the Fortran compiler to use, among those that have the required Visual Studio Integration feature installed. The value may be one of:

ifort
Intel classic Fortran compiler.

ifx
Intel oneAPI Fortran compiler.

See the CMAKE_VS_PLATFORM_TOOLSET_FORTRAN variable.

host=<arch>
Specify the host tools architecture as x64 or x86. Supported by VS 2013 and above. See the CMAKE_VS_PLATFORM_TOOLSET_HOST_ARCHITECTURE variable.

version=<version>
Specify the toolset version to use. Supported by VS 2017 and above with the specified toolset installed. See the CMAKE_VS_PLATFORM_TOOLSET_VERSION variable.

VCTargetsPath=<path>
Specify an alternative VCTargetsPath value for Visual Studio project files. This allows use of VS platform extension configuration files (.props and .targets) that are not installed with VS.
```


```
cmake ../ -G "Visual Studio 17 2022" -T "Intel C++ Compiler 2025" -DCMAKE_C_COMPILER=icx -DCMAKE_Fortran_COMPILER=ifx
cmake ../ -G "Visual Studio 17 2022" -A x64 -T "Intel C++ Compiler 2025" -DCMAKE_C_COMPILER=icx -DCMAKE_Fortran_COMPILER=ifx
```

```
cmake ../ -T fortran=ifx
cmake ../ -G "Ninja" -DCMAKE_C_COMPILER=icx -DCMAKE_Fortran_COMPILER=ifx
```

理解 CMake 的编译器检测
```powershell
CMake 在运行时会自动检测 C 和 C++ 编译器，并将结果存储在以下变量中：

CMAKE_C_COMPILER_ID: C 编译器的 ID（如 MSVC、GNU、IntelLLVM 等）。
CMAKE_CXX_COMPILER_ID: C++ 编译器的 ID。
CMAKE_C_COMPILER_VERSION: C 编译器的版本号。
CMAKE_CXX_COMPILER_VERSION: C++ 编译器的版本号。
```

MSVC
```cmake
cmake_minimum_required(VERSION 4.0.1)
set(CMAKE_C_COMPILER "cl")
set(CMAKE_CXX_COMPILER "cl")

project(HelloWorld LANGUAGES CXX)

# 输出编译器信息
message(STATUS "The C compiler identification is ${CMAKE_C_COMPILER_ID} ${CMAKE_C_COMPILER_VERSION}")
message(STATUS "The CXX compiler identification is ${CMAKE_CXX_COMPILER_ID} ${CMAKE_CXX_COMPILER_VERSION}")

# 添加可执行文件
add_executable(helloworld main.cpp)
```

cmake ../
```powershell
PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01a\build> cmake ../
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The C compiler identification is
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Configuring done (3.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/oneAPI/helloworld/01a/build
```

IntelLLVM
```cmake
cmake_minimum_required(VERSION 4.0.1)
set(CMAKE_C_COMPILER "icx")
set(CMAKE_CXX_COMPILER "icx")
project(HelloWorld LANGUAGES CXX)

# 输出编译器信息
message(STATUS "The C compiler identification is ${CMAKE_C_COMPILER_ID} ${CMAKE_C_COMPILER_VERSION}")
message(STATUS "The CXX compiler identification is ${CMAKE_CXX_COMPILER_ID} ${CMAKE_CXX_COMPILER_VERSION}")

# 添加可执行文件
add_executable(helloworld main.cpp)
```

cmake ../ -G "Ninja"
```powershell
PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
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

PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01\build> cmake ../ -G "Ninja"
-- The CXX compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/icx.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The C compiler identification is
-- The CXX compiler identification is IntelLLVM 2025.0.4
-- Configuring done (2.7s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/oneAPI/helloworld/01/build
```

cmake -DCMAKE_CXX_COMPILER=icx -G"Ninja" ../
```
PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01b\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
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
PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01b\build> cmake -DCMAKE_CXX_COMPILER=icx -G"Ninja" ../
-- The CXX compiler identification is IntelLLVM 2025.0.4 with MSVC-like command-line
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files (x86)/Intel/oneAPI/compiler/latest/bin/icx.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The C compiler identification is
-- The CXX compiler identification is IntelLLVM 2025.0.4
-- Configuring done (2.6s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/oneAPI/helloworld/01b/build
```

cmake -DCMAKE_CXX_COMPILER=cl -G"Ninja" ../
```
PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01c\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
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

PS D:\work\modern_cmake_work\ModernCMake\codes\oneAPI\helloworld\01c\build> cmake -DCMAKE_CXX_COMPILER=cl -G"Ninja" ../
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The C compiler identification is
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Configuring done (1.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/oneAPI/helloworld/01c/build
```


# Modules

## Example

### code example 1

main.cxx
```cpp
import importable;

int main(int argc, char* argv[])
{
  return from_import();
}
```

importable.cxx
```cpp
export module importable;
import <iostream>;

export int from_import()
{
    std::cout << "hello from_import!" << std::endl;
    return 0;
}
```

```cmake
cmake_minimum_required(VERSION 3.24...3.28)
project(cxx_modules_simple CXX)

add_executable(simple)
target_sources(simple
  PRIVATE
    main.cxx
  PRIVATE
    FILE_SET CXX_MODULES
      BASE_DIRS
        "${CMAKE_CURRENT_SOURCE_DIR}"
      FILES
        importable.cxx)
target_compile_features(simple PUBLIC cxx_std_20)
```

compile build & run
```powershell
PS D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The CXX compiler identification is MSVC 19.41.34123.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.41.34120/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done (5.1s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/01/build
PS D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\01\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.11.9+a69bbaaf5

  1>Checking Build System
  Building Custom Rule D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/01/CMakeLists.txt
  正在扫描源以查找模块依赖项...
  importable.cxx
  main.cxx
  iostream
  正在编译...
  iostream
  importable.cxx
  main.cxx
  simple.vcxproj -> D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\01\build\Debug\simple.exe
  Building Custom Rule D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/01/CMakeLists.txt
PS D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\01\build> .\Debug\simple.exe
hello from_import!
```

### code example 2

main.cxx
```cpp
import foo;

int main()
{
  foo f;
  f.helloworld();
  return 0;
}
```

foo.cxx
```cpp
// Global module fragment where #includes can happen
module;
#include <iostream>

// first thing after the Global module fragment must be a module command
export module foo;

export class foo {
public:
  foo();
  ~foo();
  void helloworld();
};

foo::foo() = default;
foo::~foo() = default;
void foo::helloworld() { std::cout << "hello world\n"; }
```

```cmake
cmake_minimum_required(VERSION 3.28)
project(std_module_example CXX)

# Turning off extensions avoids an issue with the clang 16 compiler
# clang 17 and greater can avoid this setting
set(CMAKE_CXX_EXTENSIONS OFF)
# Set the version of C++ for the project
set(CMAKE_CXX_STANDARD 20)
# Create a library
add_library(foo)
# Add the module file to the library
target_sources(foo
  PUBLIC
    FILE_SET CXX_MODULES FILES
      foo.cxx
)
# Create an executable
add_executable(hello main.cxx)
# Link to the library foo
target_link_libraries(hello foo)
```

compile build & run
```powershell
PS D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\02\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The CXX compiler identification is MSVC 19.41.34123.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.41.34120/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done (5.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/02/build
PS D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\02\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.11.9+a69bbaaf5

  1>Checking Build System
  Building Custom Rule D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/02/CMakeLists.txt
  正在扫描源以查找模块依赖项...
  foo.cxx
  正在编译...
  foo.cxx
  foo.vcxproj -> D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\02\build\Debug\foo.lib
  Building Custom Rule D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/02/CMakeLists.txt
  正在扫描源以查找模块依赖项...
  main.cxx
  正在编译...
  main.cxx
  hello.vcxproj -> D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\02\build\Debug\hello.exe
  Building Custom Rule D:/work/modern_cpp_work/ModernCpp/codes/CXXModules/simple/02/CMakeLists.txt
PS D:\work\modern_cpp_work\ModernCpp\codes\CXXModules\simple\02\build> .\Debug\hello.exe
hello world
```


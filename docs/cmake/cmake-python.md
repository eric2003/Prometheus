# CMake Python related

## FindPython

-  [FindPython](https://cmake.org/cmake/help/latest/module/FindPython.html).

## FindPython

## Print Python import targets

```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

find_package (Python)
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

message ( STATUS "Python_EXECUTABLE = ${Python_EXECUTABLE}" )
```

results:
```
PS D:\work\modern_cmake_work\ModernCMake\codes\python\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.38.33134.0
-- The CXX compiler identification is MSVC 19.38.33134.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found Python: C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe (found version "3.12.1") found components: Interpreter
-- my_import_targets=Python::Interpreter
-- Python_EXECUTABLE = C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe
-- Configuring done (5.7s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/python/01/build
```

find_package (Python COMPONENTS Interpreter Development)
```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

find_package (Python COMPONENTS Interpreter Development)
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
PS D:\work\modern_cmake_work\ModernCMake\codes\python\02\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.38.33134.0
-- The CXX compiler identification is MSVC 19.38.33134.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found Python: C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe (found version "3.12.1") found components: Interpreter Development Development.Module Development.Embed
-- my_import_targets=Python::Interpreter;Python::Python;Python::Module
-- Configuring done (6.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/python/02/build
```

find_package (Python COMPONENTS Interpreter Development NumPy)
```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )
find_package (Python COMPONENTS Interpreter Development NumPy)

message ( STATUS "Python_FOUND = ${Python_FOUND}" )
message ( STATUS "Python_Interpreter_FOUND = ${Python_Interpreter_FOUND}" )
message ( STATUS "Python_EXECUTABLE = ${Python_EXECUTABLE}" )
message ( STATUS "Python_INTERPRETER_ID = ${Python_INTERPRETER_ID}" )
message ( STATUS "Python_STDLIB = ${Python_STDLIB}" )
message ( STATUS "Python_STDARCH = ${Python_STDARCH}" )
message ( STATUS "Python_SITELIB = ${Python_SITELIB}" )
message ( STATUS "Python_SITEARCH = ${Python_SITEARCH}" )
message ( STATUS "Python_SOABI = ${Python_SOABI}" )
message ( STATUS "Python_SOSABI = ${Python_SOSABI}" )
message ( STATUS "Python_Compiler_FOUND = ${Python_Compiler_FOUND}" )
message ( STATUS "Python_COMPILER = ${Python_COMPILER}" )
message ( STATUS "Python_COMPILER_ID = ${Python_COMPILER_ID}" )
message ( STATUS "Python_DOTNET_LAUNCHER = ${Python_DOTNET_LAUNCHER}" )
message ( STATUS "Python_Development_FOUND = ${Python_Development_FOUND}" )
message ( STATUS "Python_Development.Module_FOUND = ${Python_Development.Module_FOUND}" )
message ( STATUS "Python_Development.SABIModule_FOUND = ${Python_Development.SABIModule_FOUND}" )
message ( STATUS "Python_Development.Embed_FOUND = ${Python_Development.Embed_FOUND}" )
message ( STATUS "Python_INCLUDE_DIRS = ${Python_INCLUDE_DIRS}" )
message ( STATUS "Python_LINK_OPTIONS = ${Python_LINK_OPTIONS}" )
message ( STATUS "Python_LIBRARIES = ${Python_LIBRARIES}" )
message ( STATUS "Python_LIBRARY_DIRS = ${Python_LIBRARY_DIRS}" )
message ( STATUS "Python_RUNTIME_LIBRARY_DIRS = ${Python_RUNTIME_LIBRARY_DIRS}" )
message ( STATUS "Python_SABI_LIBRARIES = ${Python_SABI_LIBRARIES}" )
message ( STATUS "Python_SABI_LIBRARY_DIRS = ${Python_SABI_LIBRARY_DIRS}" )
message ( STATUS "Python_RUNTIME_SABI_LIBRARY_DIRS = ${Python_RUNTIME_SABI_LIBRARY_DIRS}" )
message ( STATUS "Python_VERSION = ${Python_VERSION}" )
message ( STATUS "Python_VERSION_MAJOR = ${Python_VERSION_MAJOR}" )
message ( STATUS "Python_VERSION_MINOR = ${Python_VERSION_MINOR}" )
message ( STATUS "Python_VERSION_PATCH = ${Python_VERSION_PATCH}" )
message ( STATUS "Python_PyPy_VERSION = ${Python_PyPy_VERSION}" )
message ( STATUS "Python_NumPy_FOUND = ${Python_NumPy_FOUND}" )
message ( STATUS "Python_NumPy_INCLUDE_DIRS = ${Python_NumPy_INCLUDE_DIRS}" )
message ( STATUS "Python_NumPy_VERSION = ${Python_NumPy_VERSION}" )
```

results:
```
PS D:\work\modern_cmake_work\ModernCMake\codes\python\05\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.38.33134.0
-- The CXX compiler identification is MSVC 19.38.33134.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.38.33130/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found Python: C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe (found version "3.12.1") found components: Interpreter Development NumPy Development.Module Development.Embed
-- Python_FOUND = TRUE
-- Python_Interpreter_FOUND = TRUE
-- Python_EXECUTABLE = C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe
-- Python_INTERPRETER_ID = Python
-- Python_STDLIB = C:\Users\eric\AppData\Local\Programs\Python\Python312\Lib
-- Python_STDARCH = C:\Users\eric\AppData\Local\Programs\Python\Python312\Lib
-- Python_SITELIB = C:\Users\eric\AppData\Local\Programs\Python\Python312\Lib\site-packages
-- Python_SITEARCH = C:\Users\eric\AppData\Local\Programs\Python\Python312\Lib\site-packages
-- Python_SOABI = cp312-win_amd64
-- Python_SOSABI =
-- Python_Compiler_FOUND = FALSE
-- Python_COMPILER =
-- Python_COMPILER_ID =
-- Python_DOTNET_LAUNCHER =
-- Python_Development_FOUND = TRUE
-- Python_Development.Module_FOUND = TRUE
-- Python_Development.SABIModule_FOUND = FALSE
-- Python_Development.Embed_FOUND = TRUE
-- Python_INCLUDE_DIRS = C:/Users/eric/AppData/Local/Programs/Python/Python312/include
-- Python_LINK_OPTIONS =
-- Python_LIBRARIES = C:/Users/eric/AppData/Local/Programs/Python/Python312/libs/python312.lib
-- Python_LIBRARY_DIRS = C:/Users/eric/AppData/Local/Programs/Python/Python312/libs
-- Python_RUNTIME_LIBRARY_DIRS = C:/Users/eric/AppData/Local/Programs/Python/Python312
-- Python_SABI_LIBRARIES =
-- Python_SABI_LIBRARY_DIRS =
-- Python_RUNTIME_SABI_LIBRARY_DIRS =
-- Python_VERSION = 3.12.1
-- Python_VERSION_MAJOR = 3
-- Python_VERSION_MINOR = 12
-- Python_VERSION_PATCH = 1
-- Python_PyPy_VERSION =
-- Python_NumPy_FOUND = TRUE
-- Python_NumPy_INCLUDE_DIRS = C:/Users/eric/AppData/Local/Programs/Python/Python312/Lib/site-packages/numpy/core/include
-- Python_NumPy_VERSION = 1.26.4
-- Configuring done (30.2s)
-- Generating done (0.3s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/python/05/build
```



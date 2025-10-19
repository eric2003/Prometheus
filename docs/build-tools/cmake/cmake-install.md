# Install

## Add environment variables

HDF5 example
```
$env:HDF5_DIR = "c:/dev/HDF_Group/HDF5/1.14.0/cmake/"
$env:path += ";C:/dev/HDF_Group/HDF5/1.14.0/bin/"
```

GLAD example
```
$env:path += ";C:/dev/gladtest/bin/"
```


## install
```
cmake --install . --config Debug
cmake --install . --prefix "c:/dev/myprj/"  --config Debug
```

delete dir and files
```
rm * -recurse
```

### debug build and install
```
cmake ..
cmake --build .
cmake --install . --config Debug
```

### release build and install
```
cmake ..
cmake --build . --parallel 4 --config Release
cmake --install .  --config Release
or
cmake --install .
or 
cmake --install . --prefix "c:/dev/myprj/"  --config Release
```


### install destinations
```cmake
# make cache variables for install destinations
include(GNUInstallDirs)

message( STATUS "CMAKE_INSTALL_LIBDIR=${CMAKE_INSTALL_LIBDIR}" )
message( STATUS "CMAKE_INSTALL_BINDIR=${CMAKE_INSTALL_BINDIR}" )
message( STATUS "CMAKE_INSTALL_INCLUDEDIR=${CMAKE_INSTALL_INCLUDEDIR}" )
```

results:
```
-- CMAKE_INSTALL_LIBDIR=lib
-- CMAKE_INSTALL_BINDIR=bin
-- CMAKE_INSTALL_INCLUDEDIR=include
```

### Create generated files
```cmake
#--------------------------------------------------------------------
# Create generated files
#--------------------------------------------------------------------
include(CMakePackageConfigHelpers)

set(GLFW_CONFIG_PATH "${CMAKE_INSTALL_LIBDIR}/cmake/glfw3")

configure_package_config_file(CMake/glfw3Config.cmake.in
                              src/glfw3Config.cmake
                              INSTALL_DESTINATION "${GLFW_CONFIG_PATH}"
                              NO_CHECK_REQUIRED_COMPONENTS_MACRO)

write_basic_package_version_file(src/glfw3ConfigVersion.cmake
                                 VERSION ${GLFW_VERSION}
                                 COMPATIBILITY SameMajorVersion)
```

### install the target(MathFunctions) and create export-set
```cmake
install(TARGETS MathFunctions
        EXPORT MathFunctionsTargets
        LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
        ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
        RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
        INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}
)
```

### FooTargets-release.cmake
```cmake
#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "Foo::Foo_static" for configuration "Release"
set_property(TARGET Foo::Foo_static APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(Foo::Foo_static PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/Foo_static.lib"
  )

list(APPEND _cmake_import_check_targets Foo::Foo_static )
list(APPEND _cmake_import_check_files_for_Foo::Foo_static "${_IMPORT_PREFIX}/lib/Foo_static.lib" )

# Import target "Foo::Foo" for configuration "Release"
set_property(TARGET Foo::Foo APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(Foo::Foo PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/Foo.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/Foo.dll"
  )

list(APPEND _cmake_import_check_targets Foo::Foo )
list(APPEND _cmake_import_check_files_for_Foo::Foo "${_IMPORT_PREFIX}/lib/Foo.lib" "${_IMPORT_PREFIX}/bin/Foo.dll" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)

```

### 打印目标属性
```
include(CMakePrintHelpers)
cmake_print_properties(
    TARGETS Foo
    PROPERTIES INCLUDE_DIRECTORIES
)
```

```
在你的情况下，Foo.lib 和 Foo.dll 是预先提供的，不需要从源代码（例如 foo.cpp）编译生成。你希望通过 CMakeLists.txt 构造一个项目，
将这些预构建的库和头文件组织成目标目录结构，并生成 CMake 配置文件（如 FooConfig.cmake 等）以便其他项目可以方便地使用这个库。
以下是详细的解答，逐步说明如何编写 CMakeLists.txt 以及相关配置文件。
```

```cmake

```

```
cmake .. -D CMAKE_INSTALL_PREFIX=c:/local/foomixed3/
cmake --install . --prefix "c:/local/foomixed3/"
```

```
PS D:\work\libinstall_work\Foo\02\build> cmake --install . --prefix "c:/local/foomixed3/"
-- Install configuration: "Release"
-- Installing: c:/local/foomixed3/include/foo.h
-- Installing: c:/local/foomixed3/include/foover.h
-- Installing: c:/local/foomixed3/lib/Foo.lib
-- Installing: c:/local/foomixed3/bin/Foo.dll
-- Installing: c:/local/foomixed3/lib/cmake/Foo/FooConfig.cmake
-- Installing: c:/local/foomixed3/lib/cmake/Foo/FooConfigVersion.cmake
-- Installing: c:/local/foomixed3/lib/cmake/Foo/FooTargets.cmake
```

```
cmake .. -D CMAKE_INSTALL_PREFIX=c:/local/foomixed3/
cmake --build . --parallel 4 --config Release
cmake --install . --prefix "c:/local/foomixed3/" --config Release
cmake --install . --prefix "c:/local/foomixed4/" --config Release
```


```
<CMAKE_INSTALL_PREFIX>
├── bin
│   └── Foo.dll
├── include
│   ├── foo.h
│   └── foover.h
└── lib
    ├── cmake
    │   └── Foo
    │       ├── FooConfig.cmake
    │       ├── FooConfigVersion.cmake
    │       ├── FooTargets.cmake
    │       └── FooTargets-release.cmake
    └── Foo.lib
```

```
project
├── bin
│   └── Foo.dll
├── include
│   ├── foo.h
│   └── foover.h
├── lib
│    └── Foo.lib
└── CMakeLists.txt
```
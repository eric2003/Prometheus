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

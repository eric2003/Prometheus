# SDL

Simple Directmedia Layer (SDL) is a framework for creating cross-platform games and applications.

## Simple Directmedia Layer

-  [libsdl-org](https://github.com/libsdl-org/).
-  [Simple Directmedia Layer](https://github.com/libsdl-org/SDL/).

## SDL Tutorials

-  [SDL Tutorials](https://wiki.libsdl.org/SDL3/Tutorials/).
-  [SDL Made Easy](https://www.youtube.com/playlist?list=PLHJE4y54mpC5_eEz9gCqIkNpU-n_2eyNt/).
-  [SDL 2 Tutorial Series-Sonar Systems](https://www.youtube.com/watch?v=uvxV1xlApm4&list=PLRtjMdoYXLf75jCBW6Ln2aS7DZoB5q2Hr&index=1/).
-  [SDL2 Simple Directmedia Layer-Mike Shah](https://www.youtube.com/watch?v=QM4WW8hcsPU&list=PLvv0ScY6vfd-p1gSnbQhY7vMe2rng0IL0&index=1/).


## CMake Info

## SDL3Config.cmake code segment
```cmake
set(SDL3_LIBRARIES SDL3::SDL3)
set(SDL3_STATIC_LIBRARIES SDL3::SDL3-static)
set(SDL3_STATIC_PRIVATE_LIBS)

set(SDL3TEST_LIBRARY SDL3::SDL3_test)
```

## SDL3headersTargets.cmake code segment
```cmake
# Create imported target SDL3::Headers
add_library(SDL3::Headers INTERFACE IMPORTED)

set_target_properties(SDL3::Headers PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "${_IMPORT_PREFIX}/include;${_IMPORT_PREFIX}/include/SDL3"
)
```

## SDL3staticTargets.cmake code segment

```cmake
# Create imported target SDL3::SDL3-static
add_library(SDL3::SDL3-static STATIC IMPORTED)

set_target_properties(SDL3::SDL3-static PROPERTIES
  COMPATIBLE_INTERFACE_BOOL "SDL3_SHARED"
  COMPATIBLE_INTERFACE_STRING "SDL_VERSION"
  INTERFACE_LINK_LIBRARIES "\$<LINK_ONLY:kernel32>;\$<LINK_ONLY:user32>;\$<LINK_ONLY:gdi32>;\$<LINK_ONLY:winmm>;\$<LINK_ONLY:imm32>;\$<LINK_ONLY:ole32>;\$<LINK_ONLY:oleaut32>;\$<LINK_ONLY:version>;\$<LINK_ONLY:uuid>;\$<LINK_ONLY:advapi32>;\$<LINK_ONLY:setupapi>;\$<LINK_ONLY:shell32>;\$<LINK_ONLY:dinput8>;SDL3::Headers"
  INTERFACE_SDL3_SHARED "FALSE"
  INTERFACE_SDL_VERSION "SDL3"
)
```

## SDL3staticTargets-release.cmake code segment

```cmake
# Import target "SDL3::SDL3-static" for configuration "Release"
set_property(TARGET SDL3::SDL3-static APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(SDL3::SDL3-static PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/SDL3-static.lib"
  )

list(APPEND _cmake_import_check_targets SDL3::SDL3-static )
list(APPEND _cmake_import_check_files_for_SDL3::SDL3-static "${_IMPORT_PREFIX}/lib/SDL3-static.lib" )
```

## SDL3sharedTargets.cmake code segment

```cmake
# Create imported target SDL3::SDL3-shared
add_library(SDL3::SDL3-shared SHARED IMPORTED)

set_target_properties(SDL3::SDL3-shared PROPERTIES
  COMPATIBLE_INTERFACE_BOOL "SDL3_SHARED"
  COMPATIBLE_INTERFACE_STRING "SDL_VERSION"
  INTERFACE_LINK_LIBRARIES "SDL3::Headers"
  INTERFACE_SDL3_SHARED "TRUE"
  INTERFACE_SDL_VERSION "SDL3"
)
```

## SDL3sharedTargets-release.cmake code segment

```cmake
# Import target "SDL3::SDL3-shared" for configuration "Release"
set_property(TARGET SDL3::SDL3-shared APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(SDL3::SDL3-shared PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/SDL3.lib"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/SDL3.dll"
  )

list(APPEND _cmake_import_check_targets SDL3::SDL3-shared )
list(APPEND _cmake_import_check_files_for_SDL3::SDL3-shared "${_IMPORT_PREFIX}/lib/SDL3.lib" "${_IMPORT_PREFIX}/bin/SDL3.dll" )
```

## SDL3testTargets.cmake code segment

```cmake
# Create imported target SDL3::SDL3_test
add_library(SDL3::SDL3_test STATIC IMPORTED)

set_target_properties(SDL3::SDL3_test PROPERTIES
  COMPATIBLE_INTERFACE_STRING "SDL_VERSION"
  INTERFACE_LINK_LIBRARIES "SDL3::Headers"
  INTERFACE_SDL_VERSION "SDL3"
)
```

## SDL3testTargets-release.cmake code segment

```cmake
# Import target "SDL3::SDL3_test" for configuration "Release"
set_property(TARGET SDL3::SDL3_test APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(SDL3::SDL3_test PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/SDL3_test.lib"
  )

list(APPEND _cmake_import_check_targets SDL3::SDL3_test )
list(APPEND _cmake_import_check_files_for_SDL3::SDL3_test "${_IMPORT_PREFIX}/lib/SDL3_test.lib" )
```

```
INTERFACE_INCLUDE_DIRECTORIES
COMPATIBLE_INTERFACE_BOOL
COMPATIBLE_INTERFACE_STRING
INTERFACE_LINK_LIBRARIES
INTERFACE_SDL3_SHARED
INTERFACE_SDL_VERSION
IMPORTED_IMPLIB_RELEASE
IMPORTED_LOCATION_RELEASE
```


## Print SDL3 import targets

```cmake
cmake_minimum_required(VERSION 3.25)

project ( testprj )
find_package ( SDL3 )
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
PS D:\work\sdl_work\ModernSDL\codes\cmakeinfo\01\build> cmake ..
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
-- my_import_targets=SDL3::Headers;SDL3::SDL3-shared;SDL3::SDL3-static;SDL3::SDL3_test
-- Configuring done (5.1s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/sdl_work/ModernSDL/codes/cmakeinfo/01/build
```

## Print SDL3 target SDL3::SDL3-shared properties
```cmake
cmake_minimum_required(VERSION 3.25)

function(print_target_properties targetname )
    include(CMakePrintHelpers)
    message ( STATUS "targetname = ${targetname}" )
    set( props ${ARGN} )
    foreach ( prop IN LISTS props )
        cmake_print_properties(
          TARGETS ${targetname}
          PROPERTIES ${prop}
        )
    endforeach()
endfunction()

project ( testprj )

find_package ( SDL3 )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

set ( props
  INTERFACE_INCLUDE_DIRECTORIES
  COMPATIBLE_INTERFACE_BOOL
  COMPATIBLE_INTERFACE_STRING
  INTERFACE_LINK_LIBRARIES
  INTERFACE_SDL3_SHARED
  INTERFACE_SDL_VERSION
  IMPORTED_IMPLIB_RELEASE
  IMPORTED_LOCATION_RELEASE
)
print_target_properties( SDL3::SDL3-shared ${props} )
```

results:
```
PS D:\work\sdl_work\ModernSDL\codes\cmakeinfo\02\build> cmake ..
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
-- my_import_targets=SDL3::Headers;SDL3::SDL3-shared;SDL3::SDL3-static;SDL3::SDL3_test
-- targetname = SDL3::SDL3-shared
--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.INTERFACE_INCLUDE_DIRECTORIES = <NOTFOUND>

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.COMPATIBLE_INTERFACE_BOOL = "SDL3_SHARED"

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.COMPATIBLE_INTERFACE_STRING = "SDL_VERSION"

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.INTERFACE_LINK_LIBRARIES = "SDL3::Headers"

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.INTERFACE_SDL3_SHARED = "TRUE"

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.INTERFACE_SDL_VERSION = "SDL3"

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.IMPORTED_IMPLIB_RELEASE = "C:/dev/SDL3/lib/SDL3.lib"

--
 Properties for TARGET SDL3::SDL3-shared:
   SDL3::SDL3-shared.IMPORTED_LOCATION_RELEASE = "C:/dev/SDL3/bin/SDL3.dll"

-- Configuring done (5.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/sdl_work/ModernSDL/codes/cmakeinfo/02/build
```

## sdl3-sample

-  [sdl3-sample](https://github.com/Ravbug/sdl3-sample/).

SDL_MAIN_USE_CALLBACKS
```
# Link SDL to our executable. This also makes its include directory available to us. 
target_link_libraries(${EXECUTABLE_NAME} PUBLIC SDL3::SDL3-shared)
target_compile_definitions(${EXECUTABLE_NAME} PUBLIC SDL_MAIN_USE_CALLBACKS)
```

## Using SDL2 with CMake

-  [Using SDL2 with CMake](https://trenki2.github.io/blog/2017/06/02/using-sdl2-with-cmake/).

## sdl2-samples-and-projects

-  [sdl2-samples-and-projects](https://github.com/aminosbh/sdl2-samples-and-projects/).
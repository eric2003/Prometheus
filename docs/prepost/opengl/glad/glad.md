# GLAD


## GLAD Link

-  [glad-github](https://github.com/Dav1dde/glad/).
-  [Multi-Language GL/GLES/EGL/GLX/WGL Loader-Generator based on the official specs](https://glad.dav1d.de/).
-  [Video 3: CMake setup for Third-party libraries: GLFW, GLAD, GLM, STB, IMGUI, NativeFileDialog](https://www.youtube.com/watch?v=5Ms9R_dfBNc/).


## How to include GLAD

-  [How to include GLAD](https://rpxomi.github.io/).



## CMake Info


```cmake
cmake_minimum_required(VERSION 3.1)
project(glad_examples_c_multiwin_mx C CXX)

find_package(glfw3 REQUIRED)

set(GLAD_SOURCES_DIR "${PROJECT_SOURCE_DIR}/../../..")
add_subdirectory("${GLAD_SOURCES_DIR}/cmake" glad_cmake)

glad_add_library(glad_gl_core_mx_33 REPRODUCIBLE MX API gl:core=3.3)

add_executable(multiwin_mx
    multiwin_mx.cpp
    )
target_link_libraries(multiwin_mx
    PUBLIC
        glad_gl_core_mx_33
        glfw
    )
```

glad_add_library
```cmake
# Create a glad library named "${TARGET}"
function(glad_add_library TARGET)
    message(STATUS "Glad Library \'${TARGET}\'")

    find_package(Python COMPONENTS Interpreter REQUIRED)
    
    cmake_parse_arguments(GG "MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL" "LOCATION;LANGUAGE" "API;EXTENSIONS" ${ARGN})
    
    if(NOT GG_LOCATION)
        set(GG_LOCATION "${CMAKE_CURRENT_BINARY_DIR}/gladsources/${TARGET}")
    endif()
    if(BUILD_SHARED_LIBS)
        set(GG_SHARED TRUE)
    endif()
    set(GLAD_DIR "${GG_LOCATION}")
    if(NOT IS_DIRECTORY "${GLAD_DIR}")
        file(MAKE_DIRECTORY "${GLAD_DIR}")
    endif()
    set(GLAD_ARGS --out-path "${GLAD_DIR}")

    if(NOT GG_API)
        message(FATAL_ERROR "Need API")
    endif()
    string(REPLACE ";" "," GLAD_API "${GG_API}")
    list(APPEND GLAD_ARGS  --api "${GLAD_API}")

    if(GG_EXTENSIONS)
        list(FIND GG_EXTENSIONS NONE GG_EXT_NONE)
        if(GG_EXT_NONE GREATER -1)
            set(GLAD_EXTENSIONS " ")
        else()
            list(REMOVE_DUPLICATES GG_EXTENSIONS)
            list(JOIN GG_EXTENSIONS "," GLAD_EXTENSIONS)
        endif()
        list(APPEND GLAD_ARGS --extensions "${GLAD_EXTENSIONS}")
    endif()

    if(GG_QUIET)
        list(APPEND GLAD_ARGS --quiet)
    endif()

    if(GG_MERGE)
        list(APPEND GLAD_ARGS --merge)
    endif()

    if(GG_REPRODUCIBLE)
        list(APPEND GLAD_ARGS --reproducible)
    endif()

    set(GLAD_LANGUAGE "c")
    if(GG_LANGUAGE)
        string(TOLOWER "${GG_LANGUAGE}" "${GLAD_LANGUAGE}")
    endif()

    if(GLAD_LANGUAGE STREQUAL "c")
        __glad_c_library(LANG_ARGS GLAD_FILES ${GG_UNPARSED_ARGUMENTS} API ${GG_API})
    else()
        message(FATAL_ERROR "Unknown LANGUAGE")
    endif()
    list(APPEND GLAD_ARGS ${GLAD_LANGUAGE} ${LANG_ARGS})

    string(REPLACE "${GLAD_DIR}" GLAD_DIRECTORY GLAD_ARGS_UNIVERSAL "${GLAD_ARGS}")
    set(GLAD_ARGS_PATH "${GLAD_DIR}/args.txt")

    # add make custom target
    add_custom_command(
        OUTPUT ${GLAD_FILES} ${GLAD_ARGS_PATH}
        COMMAND echo Cleaning ${GLAD_DIR}
        COMMAND ${CMAKE_COMMAND} -E remove_directory ${GLAD_DIR}
        COMMAND ${CMAKE_COMMAND} -E make_directory   ${GLAD_DIR}
        COMMAND echo Generating with args ${GLAD_ARGS}
        COMMAND ${Python_EXECUTABLE} -m glad ${GLAD_ARGS}
        COMMAND echo Writing ${GLAD_ARGS_PATH}
        COMMAND echo ${GLAD_ARGS} > ${GLAD_ARGS_PATH}
        WORKING_DIRECTORY $<$<BOOL:${GLAD_SOURCES_DIR}>:${GLAD_SOURCES_DIR}>
        COMMENT "${TARGET}-generate"
        USES_TERMINAL
        )

    set(GLAD_ADD_LIBRARY_ARGS "")
    if(GG_SHARED)
        list(APPEND GLAD_ADD_LIBRARY_ARGS SHARED)
    elseif(GG_STATIC)
        list(APPEND GLAD_ADD_LIBRARY_ARGS STATIC)
    elseif(GG_MODULE)
        list(APPEND GLAD_ADD_LIBRARY_ARGS MODULE)
    elseif(GG_INTERFACE)
        list(APPEND GLAD_ADD_LIBRARY_ARGS INTERFACE)
    endif()

    if(GG_EXCLUDE_FROM_ALL)
        list(APPEND GLAD_ADD_LIBRARY_ARGS EXCLUDE_FROM_ALL)
    endif()

    add_library("${TARGET}" ${GLAD_ADD_LIBRARY_ARGS}
        ${GLAD_FILES}
        )

    target_include_directories("${TARGET}"
        PUBLIC
            "${GLAD_DIR}/include"
        )

    target_link_libraries("${TARGET}"
        PUBLIC
            ${CMAKE_DL_LIBS}
        )
        
    if(GG_SHARED)
        target_compile_definitions("${TARGET}" PUBLIC GLAD_API_CALL_EXPORT)
        set_target_properties("${TARGET}"
            PROPERTIES
            DEFINE_SYMBOL "GLAD_API_CALL_EXPORT_BUILD"
            )
    endif()
endfunction()
```

## analysis

```
-- PROJECT_SOURCE_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir
-- GLAD_SOURCES_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/../../
-- 0 GLAD_CMAKE_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/cmake
-- 0 CMAKE_CURRENT_LIST_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/cmake
-- 0 GLAD_SOURCES_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/../../
-- 1 GLAD_CMAKE_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/cmake
-- 1 CMAKE_CURRENT_LIST_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/cmake
-- 1 GLAD_SOURCES_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/cmake/../
-- Glad Library 'glad_gl_core_mx_33'
-- glad_add_library GLAD_SOURCES_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/../../
-- Found Python: C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe (found version "3.12.1") found components: Interpreter
-- glad_add_library GG_LOCATION 0=
-- glad_add_library CMAKE_CURRENT_BINARY_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/build
-- glad_add_library GG_LOCATION 1=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/build/gladsources/glad_gl_core_mx_33
-- glad_add_library BUILD_SHARED_LIBS=
-- glad_add_library GLAD_DIR=D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/build/gladsources/glad_gl_core_mx_33
```

python.exe -m glad
```
C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe -m glad
usage: __main__.py [-h] [--version] --api API [--extensions EXTENSIONS] [--merge] --out-path OUT_PATH [--quiet]
                   [--reproducible]
                   {c,rust} ...
__main__.py: error: the following arguments are required: --api, --out-path
```
python.exe -m glad -h
```
PS D:\work\glad_work\ModernGlad\codes\examples\01a> C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe -m glad -h
usage: __main__.py [-h] [--version] --api API [--extensions EXTENSIONS] [--merge] --out-path OUT_PATH [--quiet]
                   [--reproducible]
                   {c,rust} ...

Uses the official Khronos-XML specs to generate a Vulkan/GL/GLES/EGL/GLX/WGL Loader made for your needs. Subcommands
have additional help information, query with: `{subcommand} --help`

options:
  -h, --help            show this help message and exit
  --version             show program's version number and exit
  --api API             Comma separated list of APIs in `name:profile=version` pairs optionally including a
                        specification `name:profile/spec=version`. No version means latest, a profile is only required
                        if the API requires a profile. E.g. `gl:core=3.3,gles1/gl=2,gles2
  --extensions EXTENSIONS
                        Path to a file containing a list of extensions or a comma separated list of extensions, if
                        missing all possible extensions are included.
  --merge               Merge multiple APIs of the same specification into one file.
  --out-path OUT_PATH   Output directory for the generated files
  --quiet               Disable logging.
  --reproducible        Makes the build reproducible by not fetching the latest specification from Khronos.

subcommands:
  Generator to use

  {c,rust}
```

python.exe -m glad --version
```
PS D:\work\glad_work\ModernGlad\codes\examples\01a> C:/Users/eric/AppData/Local/Programs/Python/Python312/python.exe -m glad --version
2.0.6
```

```
GLAD_ARGS=
--out-path;D:/work/glad_work/ModernGlad/codes/examples/01a/c++/multiwin_mx_dir/build/gladsources/glad_gl_core_mx_33;
--api;gl:core=3.3;
--reproducible;c;
--mx

Generating with args
--out-path D:/work/glad_work/ModernGlad/codes/examples/01/c++/multiwin_mx_dir/build/gladsources/glad_gl_core_mx_33
--api gl:core=3.3 
--reproducible c 
--mx
```

sys.argv
```
sys.argv= ['D:\\work\\glad_work\\ModernGlad\\codes\\examples\\01c\\glad\\__main__.py', '--out-path', 'D:/work/glad_wo
rk/ModernGlad/codes/examples/01c/c++/multiwin_mx_dir/build/gladsources/glad_gl_core_mx_33', '--api', 'gl:core=3.3', '
--reproducible', 'c', '--mx']
```

sys.version_info
```
sys.version_info= sys.version_info(major=3, minor=12, micro=1, releaselevel='final', serial=0)
```

JinjaGenerator
```
  JinjaGenerator generate feature_set= FeatureSet(name=gl, info=[gl:core=3.3], extensions=619)
  JinjaGenerator generate type(feature_set)= <class 'glad.parse.FeatureSet'>
  generate template= gl.h
  generate output_path= include/glad/gl.h
  generate template now = <Template 'gl.h'>
  generate type(template) now = <class 'jinja2.environment.Template'>
  generate type(result) = <class 'str'>
  generate output_path now = D:\work\glad_work\ModernGlad\codes\examples\01c\c++\multiwin_mx_dir\build\gladsources\glad
  _gl_core_mx_33\include/glad/gl.h
  generate template= gl.c
  generate output_path= src/gl.c
  generate template now = <Template 'gl.c'>
  generate type(template) now = <class 'jinja2.environment.Template'>
  generate type(result) = <class 'str'>
  generate output_path now = D:\work\glad_work\ModernGlad\codes\examples\01c\c++\multiwin_mx_dir\build\gladsources\glad
  _gl_core_mx_33\src/gl.c
  CGenerator post_generate spec= <glad.specification.GL object at 0x00000297246B7E90>
  CGenerator post_generate type(spec)= <glad.specification.GL object at 0x00000297246B7E90>
  CGenerator post_generate feature_set= FeatureSet(name=gl, info=[gl:core=3.3], extensions=619)
  CGenerator post_generate type(feature_set)= FeatureSet(name=gl, info=[gl:core=3.3], extensions=619)
  CGenerator post_generate config= <glad.generator.c.CConfig object at 0x0000029723C402F0>
  CGenerator post_generate type(config)= <class 'glad.generator.c.CConfig'>
  CGenerator _add_additional_headers config= <glad.generator.c.CConfig object at 0x0000029723C402F0>
  CGenerator _add_additional_headers config['HEADER_ONLY']= False
  CGenerator _add_additional_headers header.name= khrplatform
  CGenerator _add_additional_headers path= D:\work\glad_work\ModernGlad\codes\examples\01c\c++\multiwin_mx_dir\build\gl
  adsources\glad_gl_core_mx_33\include/KHR/khrplatform.h
  CGenerator _add_additional_headers directory_path= D:\work\glad_work\ModernGlad\codes\examples\01c\c++\multiwin_mx_di
  r\build\gladsources\glad_gl_core_mx_33\include/KHR
```

## GLAD Lib CMake Example 1

```cmake
cmake_minimum_required(VERSION 3.25)

project ( glad VERSION 1.2.3 )

# make cache variables for install destinations
include(GNUInstallDirs)

set ( PRJ_SRC_LIST )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )
set ( PRJ_COMPILE_FEATURES )
set ( PRJ_COMPILE_DEFINITIONS )
set ( PRJ_TARGET_LIST )

set ( GLAD_INCLUDE_DIRS "${CMAKE_CURRENT_SOURCE_DIR}/include" )

set ( CMAKE_INSTALL_PREFIX C:/dev/gladtest)

message( STATUS "CMAKE_INSTALL_PREFIX=${CMAKE_INSTALL_PREFIX}")

set ( GLAD_INCLUDE_HEADERS 
    #include/glad/glad.h
	include/glad/gl.h
	include/KHR/khrplatform.h
)

set ( GLAD_SOURCE_CODES 
    #src/glad.c
	src/gl.c
)

list ( APPEND PRJ_INCLUDE_DIRS ${GLAD_INCLUDE_DIRS} )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

add_library(${PROJECT_NAME} STATIC )

target_sources( ${PROJECT_NAME}
    PRIVATE
        ${GLAD_INCLUDE_HEADERS}
		${GLAD_SOURCE_CODES}
)

#target_include_directories ( ${PROJECT_NAME}
#	PRIVATE 
#        ${PRJ_INCLUDE_DIRS}
#)

# add include directories
target_include_directories( ${PROJECT_NAME}
    PUBLIC
        $<BUILD_INTERFACE:${PRJ_INCLUDE_DIRS}>
        $<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>
)

target_link_libraries ( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_LIBRARIES}
)

target_compile_definitions( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_COMPILE_DEFINITIONS}
)

target_compile_features ( ${PROJECT_NAME} 
    PRIVATE 
    ${PRJ_COMPILE_FEATURES}
)

message( STATUS "CMAKE_INSTALL_LIBDIR=${CMAKE_INSTALL_LIBDIR}" )
message( STATUS "CMAKE_INSTALL_BINDIR=${CMAKE_INSTALL_BINDIR}" )
message( STATUS "CMAKE_INSTALL_INCLUDEDIR=${CMAKE_INSTALL_INCLUDEDIR}" )
message( STATUS "CMAKE_CURRENT_LIST_DIR=${CMAKE_CURRENT_LIST_DIR}" )
message( STATUS "PROJECT_VERSION=${PROJECT_VERSION}" )

#--------------------------------------------------------------------
# Create generated files
#--------------------------------------------------------------------
include(CMakePackageConfigHelpers)

set ( PackageName "glad" )
#set ( dest ${CMAKE_INSTALL_LIBDIR}/cmake/${PackageName} )

set(PACKAGE_CONFIG_PATH "${CMAKE_INSTALL_LIBDIR}/cmake/${PackageName}")

if ( TARGET ${PROJECT_NAME} )
  list(APPEND PRJ_TARGET_LIST ${PROJECT_NAME})
endif()

# install the target and create export-set
install ( TARGETS ${PRJ_TARGET_LIST}
    EXPORT HelloTargets
    RUNTIME DESTINATION bin 
    LIBRARY DESTINATION lib
    ARCHIVE DESTINATION lib
)

install ( DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/include" DESTINATION ${CMAKE_INSTALL_PREFIX} )

# generate and install export file
install( EXPORT HelloTargets
    FILE ${PackageName}Targets.cmake
    NAMESPACE ${PackageName}::
    DESTINATION ${PACKAGE_CONFIG_PATH}
)

# generate the config file that includes the exports
configure_package_config_file(
  "${CMAKE_CURRENT_SOURCE_DIR}/${PackageName}Config.cmake.in"
  "${CMAKE_CURRENT_BINARY_DIR}/${PackageName}Config.cmake"
  INSTALL_DESTINATION "${PACKAGE_CONFIG_PATH}"
  NO_SET_AND_CHECK_MACRO
  NO_CHECK_REQUIRED_COMPONENTS_MACRO
)

# generate the version file for the config file
write_basic_package_version_file(
  "${CMAKE_CURRENT_BINARY_DIR}/${PackageName}ConfigVersion.cmake"
  VERSION "${Foo_VERSION_MAJOR}.${Foo_VERSION_MINOR}"
  COMPATIBILITY AnyNewerVersion
)

write_basic_package_version_file(
  "${CMAKE_CURRENT_BINARY_DIR}/${PackageName}ConfigVersion.cmake"
  VERSION "${PROJECT_VERSION}"
  COMPATIBILITY AnyNewerVersion
)

# install config files
install(FILES
  "${CMAKE_CURRENT_BINARY_DIR}/${PackageName}Config.cmake"
  "${CMAKE_CURRENT_BINARY_DIR}/${PackageName}ConfigVersion.cmake"
  DESTINATION "${PACKAGE_CONFIG_PATH}"
)
```
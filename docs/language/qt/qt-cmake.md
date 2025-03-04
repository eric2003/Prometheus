# Qt-CMake

## CMake

Print import targets
```cmake
cmake_minimum_required(VERSION 3.28)

project( testprj )

set ( CMAKE_AUTOUIC ON )
set ( CMAKE_AUTOMOC ON )
set ( CMAKE_AUTORCC ON )

find_package ( Qt6 REQUIRED COMPONENTS Core )

get_directory_property( my_system_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} BUILDSYSTEM_TARGETS )
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_system_targets=${my_system_targets}" )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
PS D:\work\qt_2024_work\ModernQt\codes\Qt2024\cmakeinfo\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.39.33523.0
-- The CXX compiler identification is MSVC 19.39.33523.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.39.33519/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.39.33519/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Performing Test HAVE_STDATOMIC
-- Performing Test HAVE_STDATOMIC - Success
-- Found WrapAtomic: TRUE
-- my_system_targets=
-- my_import_targets=Qt6::Platform;Qt6::GlobalConfig;Qt6::GlobalConfigPrivate;Qt6::PlatformCommonInternal;Qt6::PlatformModuleInternal;Qt6::PlatformPluginInternal;Qt6::PlatformAppInternal;Qt6::PlatformToolInternal;Qt::Platform;Qt::GlobalConfig;Qt::GlobalConfigPrivate;Qt::PlatformCommonInternal;Qt::PlatformModuleInternal;Qt::PlatformPluginInternal;Qt::PlatformAppInternal;Qt::PlatformToolInternal;Threads::Threads;WrapAtomic::WrapAtomic;Qt6::syncqt;Qt6::moc;Qt6::rcc;Qt6::tracepointgen;Qt6::tracegen;Qt6::cmake_automoc_parser;Qt6::qlalr;Qt6::qtpaths;Qt6::androiddeployqt;Qt6::androidtestrunner;Qt6::windeployqt;Qt6::qmake;Qt::syncqt;Qt::moc;Qt::rcc;Qt::tracepointgen;Qt::tracegen;Qt::cmake_automoc_parser;Qt::qlalr;Qt::qtpaths;Qt::androiddeployqt;Qt::androidtestrunner;Qt::windeployqt;Qt::qmake;Qt6::ZlibPrivate;Qt::ZlibPrivate;Qt6::EntryPointPrivate;Qt6::EntryPointImplementation;Qt::EntryPointPrivate;Qt6::Core;Qt6::CorePrivate;Qt::Core;Qt::CorePrivate
-- Configuring done (9.5s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/qt_2024_work/ModernQt/codes/Qt2024/cmakeinfo/01/build
```

detail
```
-- my_import_targets=
Qt6::Platform;
Qt6::GlobalConfig;
Qt6::GlobalConfigPrivate;
Qt6::PlatformCommonInternal;
Qt6::PlatformModuleInternal;
Qt6::PlatformPluginInternal;
Qt6::PlatformAppInternal;
Qt6::PlatformToolInternal;
Qt::Platform;
Qt::GlobalConfig;
Qt::GlobalConfigPrivate;
Qt::PlatformCommonInternal;
Qt::PlatformModuleInternal;
Qt::PlatformPluginInternal;
Qt::PlatformAppInternal;
Qt::PlatformToolInternal;
Threads::Threads;
WrapAtomic::WrapAtomic;
Qt6::syncqt;
Qt6::moc;
Qt6::rcc;
Qt6::tracepointgen;
Qt6::tracegen;
Qt6::cmake_automoc_parser;
Qt6::qlalr;
Qt6::qtpaths;
Qt6::androiddeployqt;
Qt6::androidtestrunner;
Qt6::windeployqt;
Qt6::qmake;
Qt::syncqt;
Qt::moc;
Qt::rcc;
Qt::tracepointgen;
Qt::tracegen;
Qt::cmake_automoc_parser;
Qt::qlalr;
Qt::qtpaths;
Qt::androiddeployqt;
Qt::androidtestrunner;
Qt::windeployqt;
Qt::qmake;
Qt6::ZlibPrivate;
Qt::ZlibPrivate;
Qt6::EntryPointPrivate;
Qt6::EntryPointImplementation;
Qt::EntryPointPrivate;
Qt6::Core;
Qt6::CorePrivate;
Qt::Core;
Qt::CorePrivate
```

## find_package ( Qt6 )

```cmake
cmake_minimum_required(VERSION 3.28)

project( testprj )

find_package ( Qt6 )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
-- my_import_targets=Qt6::Platform;Qt6::GlobalConfig;Qt6::GlobalConfigPrivate;Qt6::PlatformCommonInternal;Qt6::PlatformModuleInternal;Qt6::PlatformPluginInternal;Qt6::PlatformAppInternal;Qt6::PlatformToolInternal;Qt::Platform;Qt::GlobalConfig;Qt::GlobalConfigPrivate;Qt::PlatformCommonInternal;Qt::PlatformModuleInternal;Qt::PlatformPluginInternal;Qt::PlatformAppInternal;Qt::PlatformToolInternal;Threads::Threads
```

detail:
```
-- my_import_targets=
Qt6::Platform;
Qt6::GlobalConfig;
Qt6::GlobalConfigPrivate;
Qt6::PlatformCommonInternal;
Qt6::PlatformModuleInternal;
Qt6::PlatformPluginInternal;
Qt6::PlatformAppInternal;
Qt6::PlatformToolInternal;
Qt::Platform;
Qt::GlobalConfig;
Qt::GlobalConfigPrivate;
Qt::PlatformCommonInternal;
Qt::PlatformModuleInternal;
Qt::PlatformPluginInternal;
Qt::PlatformAppInternal;
Qt::PlatformToolInternal;
Threads::Threads
```

## find_package(Qt6 REQUIRED COMPONENTS Core Gui Widgets)

```cmake
cmake_minimum_required(VERSION 3.28)

project( testprj )

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

find_package(Qt6 REQUIRED COMPONENTS Core Gui Widgets)

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
#message( STATUS "my_import_targets=${my_import_targets}" )
message( STATUS "my_import_targets:" )
foreach(item ${my_import_targets})
  message("${item}")
endforeach()
```

results:
```
-- my_import_targets:
Qt6::Platform
Qt6::GlobalConfig
Qt6::GlobalConfigPrivate
Qt6::PlatformCommonInternal
Qt6::PlatformModuleInternal
Qt6::PlatformPluginInternal
Qt6::PlatformAppInternal
Qt6::PlatformToolInternal
Qt::Platform
Qt::GlobalConfig
Qt::GlobalConfigPrivate
Qt::PlatformCommonInternal
Qt::PlatformModuleInternal
Qt::PlatformPluginInternal
Qt::PlatformAppInternal
Qt::PlatformToolInternal
Threads::Threads
WrapAtomic::WrapAtomic
Qt6::syncqt
Qt6::moc
Qt6::rcc
Qt6::tracepointgen
Qt6::tracegen
Qt6::cmake_automoc_parser
Qt6::qlalr
Qt6::qtpaths
Qt6::androiddeployqt
Qt6::androidtestrunner
Qt6::windeployqt
Qt6::qmake
Qt::syncqt
Qt::moc
Qt::rcc
Qt::tracepointgen
Qt::tracegen
Qt::cmake_automoc_parser
Qt::qlalr
Qt::qtpaths
Qt::androiddeployqt
Qt::androidtestrunner
Qt::windeployqt
Qt::qmake
Qt6::ZlibPrivate
Qt::ZlibPrivate
Qt6::EntryPointPrivate
Qt6::EntryPointImplementation
Qt::EntryPointPrivate
Qt6::Core
Qt6::CorePrivate
Qt::Core
Qt::CorePrivate
Vulkan::Vulkan
Vulkan::Headers
Vulkan::glslc
Vulkan::glslangValidator
WrapVulkanHeaders::WrapVulkanHeaders
Qt6::qvkgen
Qt::qvkgen
Qt6::Gui
Qt6::GuiPrivate
Qt::Gui
Qt::GuiPrivate
Qt6::QGifPlugin
Qt6::QICOPlugin
Qt6::QJpegPlugin
Qt6::QMinimalIntegrationPlugin
Qt6::QOffscreenIntegrationPlugin
Qt6::QSvgIconPlugin
Qt6::QSvgPlugin
Qt6::QTuioTouchPlugin
Qt6::QWindowsDirect2DIntegrationPlugin
Qt6::QWindowsIntegrationPlugin
Qt6::uic
Qt::uic
Qt6::Widgets
Qt6::WidgetsPrivate
Qt::Widgets
Qt::WidgetsPrivate
Qt6::QModernWindowsStylePlugin
```
## Qt6_DIR

Qt >= 6.4.2
```
Qt6_DIR=c:\local\Qt\6.8.1\msvc2022_64\lib\cmake\Qt6\
```

## Qt6 cmake

```cmake
cmake .. -DCMAKE_PREFIX_PATH="D;C:/local/Qt/6.8.1/msvc2022_64"
cmake .. -DCMAKE_PREFIX_PATH:PATH="C:/local/Qt/6.8.1/msvc2022_64"
```

## windeployqt

```powershell
C:\local\Qt\6.3.2\msvc2019_64\bin\windeployqt.exe .\Debug\testprj.exe
c:\local\Qt\6.8.1\msvc2022_64\bin\windeployqt.exe .\Debug\testprj.exe
```



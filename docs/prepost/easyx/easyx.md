# EasyX

EasyX Graphics Library is a free graphics library for Visual C++, supporting VC6.0 ~ VC2022. It is easy to use, has a very low learning cost, and has a wide range of applications. Currently, many universities have applied EasyX in teaching.

## EasyX Link

-  [easyx.cn](https://easyx.cn/).
-  [docs.easyx.cn](https://docs.easyx.cn/).

## EasyX Game development

-  [【从零开始的C++游戏开发】EasyX开发环境搭建](https://www.bilibili.com/video/BV1iQ4y1s7Qj/).
-  [【从零开始的C++游戏开发】| EasyX制作植物明星大乱斗](https://www.bilibili.com/video/BV1AS421P7Ut/).

## References

-  [E (Game : A Dance of Fire and Ice)](https://www.youtube.com/watch?v=r5PV14QKLN8/).
-  [Super Mario Bros. (1985) Full Walkthrough NES Gameplay [Nostalgia])](https://www.youtube.com/watch?v=rLl9XBg7wSs&t/).
-  [Rovio Classics: Angry Birds - Gameplay Walkthrough Part 1 Poached Eggs (iOS,Android Gameplay)](https://www.youtube.com/watch?v=aqVz3nZ5v58/).
-  [Cut The Rope | Todas las Temporadas | Full Walkthrough](https://www.youtube.com/watch?v=_oHc-uARVJE/).
-  [无敌身法大王](https://www.bilibili.com/video/BV11W421c7SE/).



## Install location

header
```
c:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\VS\include\easyx.h
```

lib
```
x64
c:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\VS\lib\x64\
EasyXa.lib
EasyXw.lib
x86
c:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\VS\lib\x86\
EasyXa.lib
EasyXw.lib
```

## CMake Example

```cmake
cmake_minimum_required(VERSION 3.28)

project(testprj)

set ( PRJ_SRC_LIST )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )
set ( PRJ_COMPILE_FEATURES )
set ( PRJ_COMPILE_DEFINITIONS )

set ( EASYX_PATH "c:/Program Files/Microsoft Visual Studio/2022/Community/VC/Auxiliary/VS/" )
set ( EASYX_INCLUDE_DIRS ${EASYX_PATH}/include )
set ( EASYX_LIBRARY_DIRS ${EASYX_PATH}/lib/x64 )
set ( EASYX_LIBRARIES ${EASYX_LIBRARY_DIRS}/EasyXa.lib )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

list ( APPEND PRJ_LIBRARIES ${EASYX_LIBRARIES} )
list ( APPEND PRJ_INCLUDE_DIRS ${EASYX_INCLUDE_DIRS} )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

add_executable( ${PROJECT_NAME} )

target_sources( ${PROJECT_NAME}
    PRIVATE
        main.cpp
)

target_include_directories ( ${PROJECT_NAME}
	PRIVATE 
        ${PRJ_INCLUDE_DIRS}
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
```

## code example

```cpp
#include <iostream>
#include <graphics.h>

int main()
{
    initgraph(600,480);
    int x = 300;
    int y = 300;
    
    BeginBatchDraw();
    while( true ){
        ExMessage msg;
        while( peekmessage(&msg) ){
            if( msg.message == WM_MOUSEMOVE ){
                x = msg.x;
                y = msg.y;
            }
        }
        cleardevice();
        solidcircle(x,y,100);
        FlushBatchDraw();
    }
    
    EndBatchDraw();
    return 0;
}
```

## teyvat-survivors(提瓦特幸存者)

```
```

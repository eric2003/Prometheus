# FFmpeg

## FFmpeg Link

-  [FFmpeg homepage](https://ffmpeg.org/).
-  [How to Use FFMpeg in Python (with Examples)](https://www.bannerbear.com/blog/how-to-use-ffmpeg-in-python-with-examples/).
-  [【FFmpeg入门教程】C/C++程序员零基础入门音视频流媒体开发教程](https://www.bilibili.com/video/BV16V4y1K7kt/).
-  [FFmpeg 4.3 音视频基础到工程应用-多路H265监控录放C++开发](https://www.bilibili.com/video/BV1Qt4y1a7t1/).
-  [【FFmpeg6.0版本】音视频入门系列](https://www.bilibili.com/video/BV1Mj41177Eq/).
-  [ffmpeg的源码结构和它的样例代码详解](https://www.bilibili.com/video/BV1aQ4y1W7RZ/).
-  [FFmpeg原理介绍](https://ffmpeg.xianwaizhiyin.net/).


## Install FFmpeg
-  [How to Install FFmpeg on Windows 11](https://www.youtube.com/watch?v=22vmzTs5BoE/).
-  [github release](https://github.com/GyanD/codexffmpeg/releases/tag/7.0).
-  [ShiftMediaProject-FFmpeg](https://github.com/ShiftMediaProject/FFmpeg).
-  [FFmpeg编译无坑版（Windows篇）--转载](https://www.wensent.com/detail/v6QBag8jJQ).


### OpenGL and FFmpeg

-  [Real-time video processing in C++ with OpenGL and FFmpeg](https://www.bilibili.com/video/BV1Dz421m7Lk/).


## Youtuber

-  [GamesWithGabe](https://www.youtube.com/@GamesWithGabe/).

## download

```
git clone https://git.ffmpeg.org/ffmpeg.git
```

check version

```
ffmpeg -version
```

## Installing/Adding the FFmpeg Libary in Python

```
pip install ffmpeg-python
```

## code

FFmpeg/libavutil/internal.h
```cpp
#if defined(_WIN32) && CONFIG_SHARED && !defined(BUILDING_avutil)
#    define av_export_avutil __declspec(dllimport)
#else
#    define av_export_avutil
#endif
```

### avcodec_configuration
```cmake
cmake_minimum_required(VERSION 3.28)

project(testprj)

set ( PRJ_SRC_LIST )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )
set ( PRJ_COMPILE_FEATURES )
set ( PRJ_COMPILE_DEFINITIONS )

list ( APPEND PRJ_INCLUDE_DIRS "c:/dev/FFmpeg/include/" )

list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/avcodec.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/avdevice.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/avfilter.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/avformat.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/avutil.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/postproc.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/swresample.lib" )
list ( APPEND PRJ_LIBRARIES "c:/dev/FFmpeg/lib/swscale.lib" )

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

```cpp
extern "C" {
#include <libavcodec/avcodec.h>
}
#include <iostream>

int main() {
	std::cout << avcodec_configuration() << std::endl;
    return 0;
}
```

cmake ..
```
PS D:\work\ffmpeg_work\ModernFFMPEG\codes\simple\02\build> cmake ..
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
-- Configuring done (4.8s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/ffmpeg_work/ModernFFMPEG/codes/simple/02/build
```

cmake --build .
```
PS D:\work\ffmpeg_work\ModernFFMPEG\codes\simple\02\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.8.5+b5265ef37

  1>Checking Build System
  Building Custom Rule D:/work/ffmpeg_work/ModernFFMPEG/codes/simple/02/CMakeLists.txt
  正在扫描源以查找模块依赖项...
  main.cpp
  正在编译...
  main.cpp
c:\dev\FFmpeg\include\libavutil\rational.h(1,1): warning C4819: 该文件包含不能在当前代码页(936)中表示的字符。请将该文件 保存为 Unicode 格式以防止数据丢失 [D:
\work\ffmpeg_work\ModernFFMPEG\codes\simple\02\build\testprj.vcxproj]
  (编译源文件“../main.cpp”)

  testprj.vcxproj -> D:\work\ffmpeg_work\ModernFFMPEG\codes\simple\02\build\Debug\testprj.exe
  Building Custom Rule D:/work/ffmpeg_work/ModernFFMPEG/codes/simple/02/CMakeLists.txt
```

.\Debug\testprj.exe
```
PS D:\work\ffmpeg_work\ModernFFMPEG\codes\simple\02\build> .\Debug\testprj.exe
--enable-gpl --enable-version3 --enable-shared --disable-w32threads
--disable-autodetect --enable-fontconfig --enable-iconv --enable-gnutls
--enable-libxml2 --enable-gmp --enable-bzlib --enable-lzma
--enable-libsnappy --enable-zlib --enable-librist --enable-libsrt
--enable-libssh --enable-libzmq --enable-avisynth --enable-libbluray
--enable-libcaca --enable-sdl2 --enable-libaribb24 --enable-libaribcaption
--enable-libdav1d --enable-libdavs2 --enable-libuavs3d --enable-libxevd
--enable-libzvbi --enable-librav1e --enable-libsvtav1 --enable-libwebp
--enable-libx264 --enable-libx265 --enable-libxavs2 --enable-libxeve
--enable-libxvid --enable-libaom --enable-libjxl --enable-libopenjpeg
--enable-libvpx --enable-mediafoundation --enable-libass --enable-frei0r
--enable-libfreetype --enable-libfribidi --enable-libharfbuzz --enable-liblensfun
--enable-libvidstab --enable-libvmaf --enable-libzimg --enable-amf
--enable-cuda-llvm --enable-cuvid --enable-dxva2 --enable-d3d11va
--enable-d3d12va --enable-ffnvcodec --enable-libvpl --enable-nvdec
--enable-nvenc --enable-vaapi --enable-libshaderc --enable-vulkan
--enable-libplacebo --enable-opencl --enable-libcdio --enable-libgme
--enable-libmodplug --enable-libopenmpt --enable-libopencore-amrwb
--enable-libmp3lame --enable-libshine --enable-libtheora --enable-libtwolame
--enable-libvo-amrwbenc --enable-libcodec2 --enable-libilbc --enable-libgsm
--enable-libopencore-amrnb --enable-libopus --enable-libspeex --enable-libvorbis
--enable-ladspa --enable-libbs2b --enable-libflite --enable-libmysofa
--enable-librubberband --enable-libsoxr --enable-chromaprint
```

## FFmpeg::avcodec
```
avcodec
avdevice
avfilter
avformat
avutil
postproc
swresample
swscale
```


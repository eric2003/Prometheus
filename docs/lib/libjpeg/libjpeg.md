# libjpeg

## Link

- [github libjpeg](https://github.com/winlibs/libjpeg).

## download

git clone git@github.com:winlibs/libjpeg.git
```
PS D:\work\libjpeg_work> git clone git@github.com:winlibs/libjpeg.git
Cloning into 'libjpeg'...
remote: Enumerating objects: 1563, done.
remote: Counting objects: 100% (994/994), done.
remote: Compressing objects: 100% (477/477), done.
remote: Total 1563 (delta 535), reused 893 (delta 497), pack-reused 569 (from 1)
Receiving objects: 100% (1563/1563), 5.02 MiB | 2.69 MiB/s, done.
Resolving deltas: 100% (922/922), done.
```

## Install
```
重新生成开始于 20:51...
1>------ 已启动全部重新生成: 项目: INSTALL, 配置: Release x64 ------
1>1>
1>-- Install configuration: "Release"
1>-- Installing: c:/dev/libjpeg-turbo64/lib/jpeg.lib
1>-- Installing: c:/dev/libjpeg-turbo64/bin/jpeg62.dll
1>-- Installing: c:/dev/libjpeg-turbo64/bin/cjpeg.exe
1>-- Installing: c:/dev/libjpeg-turbo64/bin/djpeg.exe
1>-- Installing: c:/dev/libjpeg-turbo64/bin/jpegtran.exe
1>-- Installing: c:/dev/libjpeg-turbo64/lib/turbojpeg.lib
1>-- Installing: c:/dev/libjpeg-turbo64/bin/turbojpeg.dll
1>-- Installing: c:/dev/libjpeg-turbo64/bin/tjbench.exe
1>-- Installing: c:/dev/libjpeg-turbo64/lib/turbojpeg-static.lib
1>-- Installing: c:/dev/libjpeg-turbo64/include/turbojpeg.h
1>-- Installing: c:/dev/libjpeg-turbo64/lib/libjpeg_a.lib
1>-- Installing: c:/dev/libjpeg-turbo64/bin/rdjpgcom.exe
1>-- Installing: c:/dev/libjpeg-turbo64/bin/wrjpgcom.exe
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/README.ijg
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/README.md
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/example.c
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/tjexample.c
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/libjpeg.txt
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/structure.txt
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/usage.txt
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/wizard.txt
1>-- Installing: c:/dev/libjpeg-turbo64/share/doc/libjpeg-turbo/LICENSE.md
1>-- Installing: c:/dev/libjpeg-turbo64/lib/pkgconfig/libjpeg.pc
1>-- Installing: c:/dev/libjpeg-turbo64/lib/pkgconfig/libturbojpeg.pc
1>-- Installing: c:/dev/libjpeg-turbo64/lib/cmake/libjpeg-turbo/libjpeg-turboConfig.cmake
1>-- Installing: c:/dev/libjpeg-turbo64/lib/cmake/libjpeg-turbo/libjpeg-turboConfigVersion.cmake
1>-- Installing: c:/dev/libjpeg-turbo64/lib/cmake/libjpeg-turbo/libjpeg-turboTargets.cmake
1>-- Installing: c:/dev/libjpeg-turbo64/lib/cmake/libjpeg-turbo/libjpeg-turboTargets-release.cmake
1>-- Installing: c:/dev/libjpeg-turbo64/include/jconfig.h
1>-- Installing: c:/dev/libjpeg-turbo64/include/jerror.h
1>-- Installing: c:/dev/libjpeg-turbo64/include/jmorecfg.h
1>-- Installing: c:/dev/libjpeg-turbo64/include/jpeglib.h
========== 全部重新生成: 1 成功，0 失败，0 已跳过 ==========
========== 重新生成 于 20:51 完成，耗时 05.663 秒 ==========
```

## Example 1
```cmake
cmake_minimum_required(VERSION 4.1.0)

project(JPEGExample)

set(CMAKE_CXX_STANDARD 11) 
set(CMAKE_CXX_STANDARD_REQUIRED ON)

#find_package(libjpeg-turbo REQUIRED CONFIG)
find_package(JPEG REQUIRED)

message(STATUS "CMAKE_SYSTEM_PREFIX_PATH: ${CMAKE_SYSTEM_PREFIX_PATH}")
message(STATUS "libjpeg-turbo_FOUND=${libjpeg-turbo_FOUND}")
message(STATUS "JPEG_FOUND=${JPEG_FOUND}")

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )

#JPEG::JPEG

add_executable(JPEGExample main.cpp)

target_link_libraries(JPEGExample PRIVATE JPEG::JPEG)
```

main.cpp
```cpp
#include <iostream>
#include <jpeglib.h>
#include <stdexcept>

// Function to write a JPEG file with a solid color
void writeJPEG(const char* filename, int width, int height, int quality, unsigned char r, unsigned char g, unsigned char b) {
    struct jpeg_compress_struct cinfo;
    struct jpeg_error_mgr jerr;
    
    // Open the output file
    FILE* outfile = fopen(filename, "wb");
    if (!outfile) {
        throw std::runtime_error("Cannot open output file");
    }
    
    // Initialize JPEG compression object
    cinfo.err = jpeg_std_error(&jerr);
    jpeg_create_compress(&cinfo);
    
    // Specify data destination
    jpeg_stdio_dest(&cinfo, outfile);
    
    // Set compression parameters
    cinfo.image_width = width;
    cinfo.image_height = height;
    cinfo.input_components = 3; // RGB
    cinfo.in_color_space = JCS_RGB;
    
    jpeg_set_defaults(&cinfo);
    jpeg_set_quality(&cinfo, quality, TRUE);
    
    // Start compression
    jpeg_start_compress(&cinfo, TRUE);
    
    // Create a solid color image buffer (RGB)
    unsigned char* row = new unsigned char[width * 3];
    for (int x = 0; x < width; x++) {
        row[x * 3 + 0] = r; // Red
        row[x * 3 + 1] = g; // Green
        row[x * 3 + 2] = b; // Blue
    }
    
    // Write scanlines
    while (cinfo.next_scanline < cinfo.image_height) {
        jpeg_write_scanlines(&cinfo, &row, 1);
    }
    
    // Finish compression
    jpeg_finish_compress(&cinfo);
    jpeg_destroy_compress(&cinfo);
    fclose(outfile);
    
    // Clean up
    delete[] row;
}

int main() {
    try {
        // Create a 512x512 JPEG image with a blue color (RGB: 0, 0, 255) and quality 90
        writeJPEG("output.jpg", 512, 512, 90, 0, 0, 255);
        std::cout << "JPEG file created successfully!" << std::endl;
    }
    catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }
    
    return 0;
}
```

cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libjpeg-turbo64"
```powershell
PS D:\work\libjpeg_work\simple\01c\build> cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libjpeg-turbo64"
-- Building for: Visual Studio 17 2022
-- The C compiler identification is MSVC 19.44.35214.0
-- The CXX compiler identification is MSVC 19.44.35214.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found JPEG: C:/dev/libjpeg-turbo64/lib/jpeg.lib (found version "62")
-- CMAKE_SYSTEM_PREFIX_PATH: C:/Program Files;C:/Program Files (x86);C:/Program Files/CMake;C:/Program Files (x86)/JPEGExample
-- libjpeg-turbo_FOUND=
-- JPEG_FOUND=TRUE
-- my_import_targets=JPEG::JPEG
-- Configuring done (3.8s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/libjpeg_work/simple/01c/build
```

## Example 2

```cmake
cmake_minimum_required(VERSION 4.1.0)

project(JPEGExample)

set(CMAKE_CXX_STANDARD 11) 
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(libjpeg-turbo REQUIRED CONFIG)

message(STATUS "CMAKE_SYSTEM_PREFIX_PATH: ${CMAKE_SYSTEM_PREFIX_PATH}")
message(STATUS "libjpeg-turbo_FOUND=${libjpeg-turbo_FOUND}")
message(STATUS "JPEG_LIBRARY=${JPEG_LIBRARY}")

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )

#libjpeg-turbo::jpeg;libjpeg-turbo::turbojpeg;libjpeg-turbo::turbojpeg-static;libjpeg-turbo::jpeg-static

add_executable(JPEGExample main.cpp)

target_link_libraries(JPEGExample PRIVATE libjpeg-turbo::jpeg-static)
```

cmake ..
```powershell
PS D:\work\libjpeg_work\simple\01b\build> cmake ..
-- Building for: Visual Studio 17 2022
-- The C compiler identification is MSVC 19.44.35214.0
-- The CXX compiler identification is MSVC 19.44.35214.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- CMAKE_SYSTEM_PREFIX_PATH: C:/Program Files;C:/Program Files (x86);C:/Program Files/CMake;C:/Program Files (x86)/JPEGExample
-- libjpeg-turbo_FOUND=1
-- JPEG_LIBRARY=
-- my_import_targets=libjpeg-turbo::jpeg;libjpeg-turbo::turbojpeg;libjpeg-turbo::turbojpeg-static;libjpeg-turbo::jpeg-static
-- Configuring done (4.0s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/libjpeg_work/simple/01b/build
```
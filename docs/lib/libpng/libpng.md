# libpng

## Link

- [PNG Reference Library: libpng](https://libpng.sourceforge.io/).
- [github libpng](https://github.com/pnggroup/libpng).

## download

git clone https://gitlab.com/libtiff/libtiff.git
```
PS D:\work\libpng_work> git clone git@github.com:pnggroup/libpng.git
Cloning into 'libpng'...
remote: Enumerating objects: 110082, done.
remote: Counting objects: 100% (152/152), done.
remote: Compressing objects: 100% (88/88), done.
remote: Total 110082 (delta 95), reused 64 (delta 64), pack-reused 109930 (from 3)
Receiving objects: 100% (110082/110082), 42.74 MiB | 1.08 MiB/s, done.
Resolving deltas: 100% (98929/98929), done.
```

## Install
```
重新生成开始于 20:44...
1>------ 已启动全部重新生成: 项目: INSTALL, 配置: Release x64 ------
1>1>
1>-- Install configuration: "Release"
1>-- Installing: C:/dev/libpng/lib/libpng16.lib
1>-- Installing: C:/dev/libpng/bin/libpng16.dll
1>-- Installing: C:/dev/libpng/lib/libpng16_static.lib
1>-- Installing: C:/dev/libpng/include/png.h
1>-- Installing: C:/dev/libpng/include/pngconf.h
1>-- Installing: C:/dev/libpng/include/pnglibconf.h
1>-- Installing: C:/dev/libpng/include/libpng16/png.h
1>-- Installing: C:/dev/libpng/include/libpng16/pngconf.h
1>-- Installing: C:/dev/libpng/include/libpng16/pnglibconf.h
1>-- Installing: C:/dev/libpng/bin/pngfix.exe
1>-- Installing: C:/dev/libpng/bin/png-fix-itxt.exe
1>-- Installing: C:/dev/libpng/share/man/man3/libpng.3
1>-- Installing: C:/dev/libpng/share/man/man3/libpngpf.3
1>-- Installing: C:/dev/libpng/share/man/man5/png.5
1>-- Installing: C:/dev/libpng/lib/libpng/libpng16.cmake
1>-- Installing: C:/dev/libpng/lib/libpng/libpng16-release.cmake
1>-- Up-to-date: C:/dev/libpng/lib/libpng16.lib
1>-- Up-to-date: C:/dev/libpng/bin/libpng16.dll
1>-- Up-to-date: C:/dev/libpng/lib/libpng16_static.lib
1>-- Installing: C:/dev/libpng/lib/cmake/PNG/PNGTargets.cmake
1>-- Installing: C:/dev/libpng/lib/cmake/PNG/PNGTargets-release.cmake
1>-- Installing: C:/dev/libpng/lib/cmake/PNG/PNGConfig.cmake
1>-- Installing: C:/dev/libpng/lib/cmake/PNG/PNGConfigVersion.cmake
========== 全部重新生成: 1 成功，0 失败，0 已跳过 ==========
========== 重新生成 于 20:44 完成，耗时 00.891 秒 ========
```

## Example 1

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(PngDemo)

# 1) 查找系统已安装的 libpng 和 zlib
find_package(PNG REQUIRED)      # 提供 PNG_INCLUDE_DIRS / PNG_LIBRARIES
# 如果 zlib 没被自动找到，可手动：
# find_package(ZLIB REQUIRED)

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )
message( STATUS "PNG_INCLUDE_DIRS=${PNG_INCLUDE_DIRS}" )
message( STATUS "PNG_LIBRARIES=${PNG_LIBRARIES}" )

# 2) 创建可执行文件
add_executable(png_demo main.cpp)

# 3) 包含头文件目录并链接库
target_include_directories(png_demo PRIVATE ${PNG_INCLUDE_DIRS})
target_link_libraries(png_demo PRIVATE ${PNG_LIBRARIES})
```

cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libpng;C:/dev/zlib"
```powershell
PS D:\work\libpng_work\simple\01\build> cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libpng;C:/dev/zlib"
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
-- Found ZLIB: C:/dev/zlib/lib/z.lib (found version "1.3.1.1")
-- Found PNG: C:/dev/libpng/lib/libpng16.lib (found version "1.6.49.git")
-- my_import_targets=ZLIB::ZLIB;PNG::PNG
-- PNG_INCLUDE_DIRS=C:/dev/libpng/include;C:/dev/zlib/include
-- PNG_LIBRARIES=C:/dev/libpng/lib/libpng16.lib;C:/dev/zlib/lib/z.lib
-- Configuring done (3.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/libpng_work/simple/01/build
```

## Example 2

```cmake
cmake_minimum_required(VERSION 4.0.2)

project(PngDemo)

# 1) 查找系统已安装的 libpng 和 zlib
find_package(PNG REQUIRED)      # 提供 PNG_INCLUDE_DIRS / PNG_LIBRARIES
# 如果 zlib 没被自动找到，可手动：
# find_package(ZLIB REQUIRED)

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )
message( STATUS "PNG_INCLUDE_DIRS=${PNG_INCLUDE_DIRS}" )
message( STATUS "PNG_LIBRARIES=${PNG_LIBRARIES}" )

# 2) 创建可执行文件
add_executable(png_demo main.cpp)

# 3) 包含头文件目录并链接库
target_link_libraries(png_demo PRIVATE PNG::PNG)
```

main.cpp
```cpp
#include <png.h>
#include <cstdio>
#include <cstdlib>
#include <vector>

void error_handler(png_structp png, png_const_charp msg) {
    std::fprintf(stderr, "libpng error: %s\n", msg);
    longjmp(png_jmpbuf(png), 1);
}

int main() {
    const int width = 64;
    const int height = 64;
    const int row_bytes = width * 4; // RGBA = 4 字节

    // 1. 打开输出文件
    FILE* fp = std::fopen("out.png", "wb");
    if (!fp) {
        std::perror("fopen");
        return 1;
    }
    // 测试文件可写性
    if (std::fputc(0, fp) == EOF) {
        std::perror("fputc");
        std::fclose(fp);
        fp = nullptr;
        return 1;
    }
    std::rewind(fp);

    // 2. 创建写结构 & 信息结构
    png_structp png = png_create_write_struct(PNG_LIBPNG_VER_STRING, nullptr, error_handler, nullptr);
    if (!png) {
        std::fclose(fp);
        fp = nullptr;
        return 2;
    }

    png_infop info = png_create_info_struct(png);
    if (!info) {
        png_destroy_write_struct(&png, nullptr);
        if (fp != nullptr) {
            std::fclose(fp);
            fp = nullptr;
        }
        return 3;
    }

    // 3. 设置错误跳转
    if (setjmp(png_jmpbuf(png))) {
        png_destroy_write_struct(&png, &info);
        if (fp != nullptr) {
            if (std::fclose(fp) != 0) {
                std::perror("fclose");
            }
            fp = nullptr;
        }
        return 4;
    }

    // 4. 绑定文件句柄
    png_init_io(png, fp);

    // 5. 写入文件头
    png_set_IHDR(png, info, width, height, 8, PNG_COLOR_TYPE_RGBA,
        PNG_INTERLACE_NONE, PNG_COMPRESSION_TYPE_DEFAULT, PNG_FILTER_TYPE_DEFAULT);
    png_write_info(png, info);

    // 6. 生成像素数据（纯红）并写入
    std::vector<png_byte> row(row_bytes);
    for (int x = 0; x < width; ++x) {
        row[x * 4 + 0] = 0xFF; // R
        row[x * 4 + 1] = 0x00; // G
        row[x * 4 + 2] = 0x00; // B
        row[x * 4 + 3] = 0xFF; // A
    }
    for (int y = 0; y < height; ++y) {
        png_write_row(png, row.data());
    }

    // 7. 结束写入
    png_write_end(png, nullptr);
    png_destroy_write_struct(&png, &info);
    if (fp != nullptr) {
        if (std::fclose(fp) != 0) {
            std::perror("fclose");
        }
        fp = nullptr;
    }
    return 0;
}
```

cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libpng;C:/dev/zlib"
```powershell
PS D:\work\libpng_work\simple\01\build> cmake .. -DCMAKE_PREFIX_PATH="C:/dev/libpng;C:/dev/zlib"
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
-- Found ZLIB: C:/dev/zlib/lib/z.lib (found version "1.3.1.1")
-- Found PNG: C:/dev/libpng/lib/libpng16.lib (found version "1.6.49.git")
-- my_import_targets=ZLIB::ZLIB;PNG::PNG
-- PNG_INCLUDE_DIRS=C:/dev/libpng/include;C:/dev/zlib/include
-- PNG_LIBRARIES=C:/dev/libpng/lib/libpng16.lib;C:/dev/zlib/lib/z.lib
-- Configuring done (3.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/libpng_work/simple/01/build
```

cmake --build .
```powershell
PS D:\work\libpng_work\simple\01a\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.14.18+a338add32

  1>Checking Build System
  Building Custom Rule D:/work/libpng_work/simple/01a/CMakeLists.txt
  main.cpp
  png_demo.vcxproj -> D:\work\libpng_work\simple\01a\build\Debug\png_demo.exe
  Building Custom Rule D:/work/libpng_work/simple/01a/CMakeLists.txt
```

```
PS D:\work\libpng_work\simple\01a\build> $env:PATH = "c:/dev/libpng/bin;" + $env:PATH
PS D:\work\libpng_work\simple\01a\build> .\Debug\png_demo.exe
```

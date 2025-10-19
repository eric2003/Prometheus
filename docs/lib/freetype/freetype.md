# freetype

## Links

- [freetype.org](https://freetype.org/).
- [gitlab codes](https://gitlab.freedesktop.org/freetype/freetype).

## download

git clone https://gitlab.freedesktop.org/freetype/freetype.git
```
PS D:\work\freetype_work> git clone https://gitlab.freedesktop.org/freetype/freetype.git
Cloning into 'freetype'...
remote: Enumerating objects: 93025, done.
remote: Counting objects: 100% (4118/4118), done.
remote: Compressing objects: 100% (1342/1342), done.
remote: Total 93025 (delta 2944), reused 3877 (delta 2766), pack-reused 88907 (from 1)
Receiving objects: 100% (93025/93025), 30.01 MiB | 6.04 MiB/s, done.
Resolving deltas: 100% (76700/76700), done.
```

## Compile

CMakelists.txt
```cmake
# 设置最低 CMake 版本要求
cmake_minimum_required(VERSION 4.0.2)

# 项目名称
project(testprj)

# 启用 C++ 标准
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(SOURCE_DIR ${PROJECT_SOURCE_DIR})

# 添加可执行文件目标
add_executable(${PROJECT_NAME} ${SOURCE_DIR}/main.cpp)

set(FREETYPE_ROOT "c:/dev/freetype")

target_include_directories(${PROJECT_NAME} PRIVATE
    "${FREETYPE_ROOT}/include"
    "${FREETYPE_ROOT}/include/freetype"
)

target_link_libraries(${PROJECT_NAME} PRIVATE
    "${FREETYPE_ROOT}/lib/freetype.lib"

)
```

main.cpp
```cpp
#include <ft2build.h>
#include FT_FREETYPE_H
int main() {
    FT_Library library;
    FT_Error error = FT_Init_FreeType(&library);
    if (error) {
        printf("FreeType 初始化失败！\n");
        return 1;
    }
    printf("FreeType 初始化成功！\n");
    FT_Done_FreeType(library);
    return 0;
}
```

```
PS D:\work\freetype_work\simple\02\build> cmake ..
-- Building for: Visual Studio 17 2022
-- The C compiler identification is MSVC 19.44.35209.0
-- The CXX compiler identification is MSVC 19.44.35209.0
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
-- Configuring done (4.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/freetype_work/simple/02/build
PS D:\work\freetype_work\simple\02\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.14.10+8b8e13593

  1>Checking Build System
  Building Custom Rule D:/work/freetype_work/simple/02/CMakeLists.txt
  main.cpp
  testprj.vcxproj -> D:\work\freetype_work\simple\02\build\Debug\testprj.exe
  Building Custom Rule D:/work/freetype_work/simple/02/CMakeLists.txt
PS D:\work\freetype_work\simple\02\build> .\Debug\testprj.exe
FreeType 初始化成功！
```

```
在Microsoft visual studio 控制台是对的：
FreeType初始化成功！版本：2.13.3，但是在powershell是乱码
```

```powershell
PS D:\work\freetype_work\simple\02b\build> [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
PS D:\work\freetype_work\simple\02b\build> $OutputEncoding = [System.Text.UTF8Encoding]::new()
PS D:\work\freetype_work\simple\02b\build> [Console]::OutputEncoding

Preamble          :
BodyName          : utf-8
EncodingName      : Unicode (UTF-8)
HeaderName        : utf-8
WebName           : utf-8
WindowsCodePage   : 1200
IsBrowserDisplay  : True
IsBrowserSave     : True
IsMailNewsDisplay : True
IsMailNewsSave    : True
IsSingleByte      : False
EncoderFallback   : System.Text.EncoderReplacementFallback
DecoderFallback   : System.Text.DecoderReplacementFallback
IsReadOnly        : False
CodePage          : 65001
```

```powershell
PS D:\work\freetype_work\simple\02b\build> [Console]::OutputEncoding.EncodingName
Unicode (UTF-8)
```

```powershell
PS D:\work\freetype_work\simple\02b\build> $OutputEncoding

Preamble          :
BodyName          : utf-8
EncodingName      : Unicode (UTF-8)
HeaderName        : utf-8
WebName           : utf-8
WindowsCodePage   : 1200
IsBrowserDisplay  : True
IsBrowserSave     : True
IsMailNewsDisplay : True
IsMailNewsSave    : True
IsSingleByte      : False
EncoderFallback   : System.Text.EncoderReplacementFallback
DecoderFallback   : System.Text.DecoderReplacementFallback
IsReadOnly        : True
CodePage          : 65001
```

```powershell
PS D:\work\freetype_work\simple\02b\build> chcp
Active code page: 65001
```

```
Could NOT find PkgConfig (missing: PKG_CONFIG_EXECUTABLE) 
Enabled dynamic loading of HarfBuzz library at runtime.
Could NOT find PNG (missing: PNG_LIBRARY PNG_PNG_INCLUDE_DIR) 
Could NOT find BZip2 (missing: BZIP2_LIBRARIES BZIP2_INCLUDE_DIR) 
Could NOT find BrotliDec (missing: BROTLIDEC_INCLUDE_DIRS BROTLIDEC_LIBRARIES) 
Configuring done (0.4s)
```

```
FreeType_DIR c:/dev/freetype/lib/cmake/freetype
```
# OpenSlide


## Link

- [github OpenSlide](https://github.com/openslide/openslide).
- [Openslide3.4.1 安装](https://zhuanlan.zhihu.com/p/464876966).

## git clone git@github.com:openslide/openslide.git
```
PS D:\work\OpenSlide_work> git clone git@github.com:openslide/openslide.git
Cloning into 'openslide'...
remote: Enumerating objects: 14961, done.
remote: Counting objects: 100% (36/36), done.
remote: Compressing objects: 100% (29/29), done.
remote: Total 14961 (delta 10), reused 19 (delta 7), pack-reused 14925 (from 1)
Receiving objects: 100% (14961/14961), 4.33 MiB | 2.51 MiB/s, done.
Resolving deltas: 100% (9367/9367), done.
PS D:\work\OpenSlide_work>
```

```
SQLite3_INCLUDE_DIR c:/dev/sqlite3/include/
SQLite3_LIBRARY c:/dev/sqlite3/lib/libsqlite3.lib
```


```
PS D:\work\OpenSlide_work\openslide> meson setup builddir
The Meson build system
Version: 1.8.0
Source dir: D:\work\OpenSlide_work\openslide
Build dir: D:\work\OpenSlide_work\openslide\builddir
Build type: native build
Project name: openslide
Project version: 4.0.0

cc1.exe - 无法找到入口

无法定位程序输入点 clock_gettime64 于动态链接库
C:\msys64\mingw64\bin\..\lib\gcc\x86_64-w64-mingw32\15.1.0\cc1.exe 上。
```

## cd /d/work/OpenSlide_work/openslide/
```
eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
$ ls
CHANGELOG.md    common       meson.format       pyproject.toml  subprojects
COPYING.LESSER  doc          meson_options.txt  scripts         test
README.md       meson.build  misc               src             tools

eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
```



```
meson setup builddir
meson compile -C builddir
meson install -C builddir
```

### meson setup builddir
```
eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
$ meson setup builddir
The Meson build system
Version: 1.8.1
Source dir: D:/work/OpenSlide_work/openslide
Build dir: D:/work/OpenSlide_work/openslide/builddir
Build type: native build
Project name: openslide
Project version: 4.0.0
C compiler for the host machine: cc (gcc 15.1.0 "cc (Rev5, Built by MSYS2 project) 15.1.0")
C linker for the host machine: cc ld.bfd 2.44
Host machine cpu family: x86_64
Host machine cpu: x86_64
Compiler for C supports arguments -Wstrict-prototypes: YES
Compiler for C supports arguments -Wmissing-prototypes: YES
Compiler for C supports arguments -Wmissing-declarations: YES
Compiler for C supports arguments -Wnested-externs: YES
Compiler for C supports arguments -fno-common: YES
Compiler for C supports link arguments -Wl,--no-undefined: YES
Message: Using "N" flag for close-on-exec (Windows)
Checking for function "floor" : YES
Checking for function "floor" : YES (cached)
Found pkg-config: YES (C:\msys64\mingw64\bin/pkg-config.EXE) 2.3.0
Run-time dependency zlib found: YES 1.3.1
Run-time dependency libzstd found: YES 1.5.7
Run-time dependency libjpeg found: YES 3.1.0
Run-time dependency libpng found: YES 1.6.48
Run-time dependency libopenjp2 found: YES 2.5.3
Run-time dependency libtiff-4 found: YES 4.7.0
Run-time dependency glib-2.0 found: YES 2.84.2
Run-time dependency gio-2.0 found: YES 2.84.2
Run-time dependency gobject-2.0 found: YES 2.84.2
Run-time dependency cairo found: YES 1.18.4
Run-time dependency gdk-pixbuf-2.0 found: YES 2.42.12
Run-time dependency libxml-2.0 found: YES 2.12.10
Run-time dependency sqlite3 found: YES 3.49.2
Found CMake: C:\msys64\mingw64\bin/cmake.EXE (4.0.2)
Run-time dependency libdicom found: NO (tried pkgconfig and cmake)
Looking for a fallback subproject for the dependency libdicom
Downloading libdicom source from https://github.com/ImagingDataCommons/libdicom/releases/download/v1.2.0/libdicom-1.2.0.tar.xz
Download size: 5161096
Downloading: ..........

Executing subproject libdicom

libdicom| Project name: libdicom
libdicom| Project version: 1.2.0
libdicom| C compiler for the host machine: cc (gcc 15.1.0 "cc (Rev5, Built by MSYS2 project) 15.1.0")
libdicom| C linker for the host machine: cc ld.bfd 2.44
libdicom| Check usable header "utarray.h" : NO
libdicom| Run-time dependency uthash found: NO (tried pkgconfig and cmake)
libdicom| Looking for a fallback subproject for the dependency uthash
libdicom| Downloading uthash source from https://github.com/troydhanson/uthash/archive/v2.3.0.tar.gz
Downloading file of unknown size.
libdicom| Downloading uthash patch from https://wrapdb.mesonbuild.com/v2/uthash_2.3.0-1/get_patch
Download size: 1123
Downloading: ..........

Executing subproject libdicom:uthash

uthash| Project name: uthash
uthash| Project version: 2.3.0
uthash| C compiler for the host machine: cc (gcc 15.1.0 "cc (Rev5, Built by MSYS2 project) 15.1.0")
uthash| C linker for the host machine: cc ld.bfd 2.44
uthash| Build targets in project: 0
uthash| Subproject uthash finished.

libdicom| Dependency uthash from subproject subprojects/uthash-2.3.0 found: YES 2.3.0
libdicom| Has header "io.h" : YES
libdicom| Has header "unistd.h" : YES
libdicom| Configuring config.h using configuration
libdicom| Compiler for C supports arguments -Wformat-security: YES
libdicom| Compiler for C supports arguments -Wmissing-declarations: YES (cached)
libdicom| Compiler for C supports arguments -Wmissing-prototypes: YES (cached)
libdicom| Compiler for C supports arguments -Wnested-externs: YES (cached)
libdicom| Compiler for C supports arguments -Wstrict-prototypes: YES (cached)
libdicom| Configuring version.h using configuration
libdicom| Configuring dcm-dump.1 using configuration
libdicom| Configuring dcm-getframe.1 using configuration
libdicom| Build targets in project: 7
libdicom| Subproject libdicom finished.

Dependency libdicom found: YES 1.2.0 (overridden)
Run-time dependency valgrind found: NO (tried pkgconfig)
Program doxygen found: NO
Checking for function "TIFFOpenOptionsSetErrorHandlerExtR" with dependency libtiff-4: YES
Header "glib.h" has symbol "g_autofree" with dependency glib-2.0: YES
Configuring config.h using configuration
Configuring openslide-dll.manifest using configuration
Configuring openslide-dll.rc using configuration
Windows resource compiler: GNU windres (GNU Binutils) 2.44
Configuring openslide-quickhash1sum.1 using configuration
Configuring openslide-show-properties.1 using configuration
Configuring openslide-write-png.1 using configuration
Configuring slidetool.1 using configuration
Configuring driver using configuration
Build targets in project: 22

openslide 4.0.0

  Subprojects
    libdicom: YES
    uthash  : YES (from libdicom)

Found ninja-1.12.1 at C:\msys64\mingw64\bin/ninja.EXE
```

meson compile -C builddir
```
$ meson compile -C builddir
INFO: autodetecting backend as ninja
INFO: calculating backend command to run: C:\msys64\mingw64\bin/ninja.EXE -C D:/work/OpenSlide_work/openslide/builddir
ninja: Entering directory `D:/work/OpenSlide_work/openslide/builddir'
[2/103] Compiling C object subprojects/libdicom-...com-dict-build.exe.p/src_dicom-dict-tables.c.obj
../subprojects/libdicom-1.2.0/src/dicom-dict-tables.c:3296:33: warning: initializer-string for array of 'char' truncates NUL terminator but destination lacks 'nonstring' attribute (64 chars into 63 available) [-Wunterminated-string-initialization]
 3296 |     {0X0070030B, DCM_VR_TAG_FD, "FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix"},
      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[35/103] Compiling C object subprojects/libdicom-1.2.0/libdicom-1.dll.p/src_dicom-dict-tables.c.obj
../subprojects/libdicom-1.2.0/src/dicom-dict-tables.c:3296:33: warning: initializer-string for array of 'char' truncates NUL terminator but destination lacks 'nonstring' attribute (64 chars into 63 available) [-Wunterminated-string-initialization]
 3296 |     {0X0070030B, DCM_VR_TAG_FD, "FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix"},
      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[103/103] Linking target test/try_open.exe

```

```
meson setup builddir
or
meson setup builddir --prefix=/usr/local/openslide
or
meson setup builddir --prefix="/usr/local/openslide"
meson compile -C builddir
meson install -C builddir
```

### meson setup builddir --prefix="/usr/local/openslide"
```
eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
$ meson setup builddir --prefix="/usr/local/openslide"
The Meson build system
Version: 1.8.1
Source dir: D:/work/OpenSlide_work/openslide
Build dir: D:/work/OpenSlide_work/openslide/builddir
Build type: native build
Project name: openslide
Project version: 4.0.0
C compiler for the host machine: cc (gcc 15.1.0 "cc (Rev5, Built by MSYS2 project) 15.1.0")
C linker for the host machine: cc ld.bfd 2.44
Host machine cpu family: x86_64
Host machine cpu: x86_64
Compiler for C supports arguments -Wstrict-prototypes: YES
Compiler for C supports arguments -Wmissing-prototypes: YES
Compiler for C supports arguments -Wmissing-declarations: YES
Compiler for C supports arguments -Wnested-externs: YES
Compiler for C supports arguments -fno-common: YES
Compiler for C supports link arguments -Wl,--no-undefined: YES
Message: Using "N" flag for close-on-exec (Windows)
Checking for function "floor" : YES
Checking for function "floor" : YES (cached)
Found pkg-config: YES (C:\msys64\mingw64\bin/pkg-config.EXE) 2.3.0
Run-time dependency zlib found: YES 1.3.1
Run-time dependency libzstd found: YES 1.5.7
Run-time dependency libjpeg found: YES 3.1.0
Run-time dependency libpng found: YES 1.6.48
Run-time dependency libopenjp2 found: YES 2.5.3
Run-time dependency libtiff-4 found: YES 4.7.0
Run-time dependency glib-2.0 found: YES 2.84.2
Run-time dependency gio-2.0 found: YES 2.84.2
Run-time dependency gobject-2.0 found: YES 2.84.2
Run-time dependency cairo found: YES 1.18.4
Run-time dependency gdk-pixbuf-2.0 found: YES 2.42.12
Run-time dependency libxml-2.0 found: YES 2.12.10
Run-time dependency sqlite3 found: YES 3.49.2
Found CMake: C:\msys64\mingw64\bin/cmake.EXE (4.0.2)
Run-time dependency libdicom found: NO (tried pkgconfig and cmake)
Looking for a fallback subproject for the dependency libdicom

Executing subproject libdicom

libdicom| Project name: libdicom
libdicom| Project version: 1.2.0
libdicom| C compiler for the host machine: cc (gcc 15.1.0 "cc (Rev5, Built by MSYS2 project) 1)
libdicom| C linker for the host machine: cc ld.bfd 2.44
libdicom| Check usable header "utarray.h" : NO
libdicom| Run-time dependency uthash found: NO (tried pkgconfig and cmake)
libdicom| Looking for a fallback subproject for the dependency uthash

Executing subproject libdicom:uthash

uthash| Project name: uthash
uthash| Project version: 2.3.0
uthash| C compiler for the host machine: cc (gcc 15.1.0 "cc (Rev5, Built by MSYS2 project) 15.
uthash| C linker for the host machine: cc ld.bfd 2.44
uthash| Build targets in project: 0
uthash| Subproject uthash finished.

libdicom| Dependency uthash from subproject subprojects/uthash-2.3.0 found: YES 2.3.0
libdicom| Has header "io.h" : YES
libdicom| Has header "unistd.h" : YES
libdicom| Configuring config.h using configuration
libdicom| Compiler for C supports arguments -Wformat-security: YES
libdicom| Compiler for C supports arguments -Wmissing-declarations: YES (cached)
libdicom| Compiler for C supports arguments -Wmissing-prototypes: YES (cached)
libdicom| Compiler for C supports arguments -Wnested-externs: YES (cached)
libdicom| Compiler for C supports arguments -Wstrict-prototypes: YES (cached)
libdicom| Configuring version.h using configuration
libdicom| Configuring dcm-dump.1 using configuration
libdicom| Configuring dcm-getframe.1 using configuration
libdicom| Build targets in project: 7
libdicom| Subproject libdicom finished.

Dependency libdicom found: YES 1.2.0 (overridden)
Run-time dependency valgrind found: NO (tried pkgconfig)
Program doxygen found: NO
Checking for function "TIFFOpenOptionsSetErrorHandlerExtR" with dependency libtiff-4: YES
Header "glib.h" has symbol "g_autofree" with dependency glib-2.0: YES
Configuring config.h using configuration
Configuring openslide-dll.manifest using configuration
Configuring openslide-dll.rc using configuration
Windows resource compiler: GNU windres (GNU Binutils) 2.44
Configuring openslide-quickhash1sum.1 using configuration
Configuring openslide-show-properties.1 using configuration
Configuring openslide-write-png.1 using configuration
Configuring slidetool.1 using configuration
Configuring driver using configuration
Build targets in project: 22

openslide 4.0.0

  Subprojects
    libdicom: YES
    uthash  : YES (from libdicom)

  User defined options
    prefix  : C:/msys64/usr/local/openslide

Found ninja-1.12.1 at C:\msys64\mingw64\bin/ninja.EXE
```

### meson compile -C builddir
```
eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
$ meson compile -C builddir
INFO: autodetecting backend as ninja
INFO: calculating backend command to run: C:\msys64\mingw64\bin/ninja.EXE -C D:/work/OpenSlide_work/openslide/builddir
ninja: Entering directory `D:/work/OpenSlide_work/openslide/builddir'
[2/103] Compiling C object subprojects/libdic...-dict-build.exe.p/src_dicom-dict-tables.c.obj
../subprojects/libdicom-1.2.0/src/dicom-dict-tables.c:3296:33: warning: initializer-string for array of 'char' truncates NUL terminator but destination lacks 'nonstring' attribute (64 chars into 63 available) [-Wunterminated-string-initialization]
 3296 |     {0X0070030B, DCM_VR_TAG_FD, "FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix"},
      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[30/103] Compiling C object subprojects/libdi.../libdicom-1.dll.p/src_dicom-dict-tables.c.obj
../subprojects/libdicom-1.2.0/src/dicom-dict-tables.c:3296:33: warning: initializer-string for array of 'char' truncates NUL terminator but destination lacks 'nonstring' attribute (64 chars into 63 available) [-Wunterminated-string-initialization]
 3296 |     {0X0070030B, DCM_VR_TAG_FD, "FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix"},
      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[103/103] Linking target tools/slidetool.exe
```

### meson install -C builddir
```
eric@DELL MINGW64 /d/work/OpenSlide_work/openslide
$ meson install -C builddir
ninja: Entering directory `D:/work/OpenSlide_work/openslide/builddir'
ninja: no work to do.
Installing subprojects/libdicom-1.2.0/libdicom-1.dll to C:/msys64/usr/local/openslide/bin
Installing subprojects/libdicom-1.2.0/libdicom.dll.a to C:/msys64/usr/local/openslide/lib
Installing subprojects/libdicom-1.2.0/dcm-dump.exe to C:/msys64/usr/local/openslide/bin
Installing subprojects/libdicom-1.2.0/dcm-getframe.exe to C:/msys64/usr/local/openslide/bin
Installing src/libopenslide-1.dll to C:/msys64/usr/local/openslide/bin
Installing src/libopenslide.dll.a to C:/msys64/usr/local/openslide/lib
Installing tools/openslide-quickhash1sum.exe to C:/msys64/usr/local/openslide/bin
Installing tools/openslide-show-properties.exe to C:/msys64/usr/local/openslide/bin
Installing tools/openslide-write-png.exe to C:/msys64/usr/local/openslide/bin
Installing tools/slidetool.exe to C:/msys64/usr/local/openslide/bin
Installing D:/work/OpenSlide_work/openslide/builddir/subprojects/libdicom-1.2.0/version.h to C:/msys64/usr/local/openslide/include/dicom
Installing D:/work/OpenSlide_work/openslide/subprojects/libdicom-1.2.0/include/dicom/dicom.h to C:/msys64/usr/local/openslide/include/dicom
Installing D:/work/OpenSlide_work/openslide/src/openslide-features.h to C:/msys64/usr/local/openslide/include/openslide
Installing D:/work/OpenSlide_work/openslide/src/openslide.h to C:/msys64/usr/local/openslide/include/openslide
Installing D:/work/OpenSlide_work/openslide/builddir/subprojects/libdicom-1.2.0/dcm-dump.1 to C:/msys64/usr/local/openslide/share/man/man1
Installing D:/work/OpenSlide_work/openslide/builddir/subprojects/libdicom-1.2.0/dcm-getframe.1 to C:/msys64/usr/local/openslide/share/man/man1
Installing D:/work/OpenSlide_work/openslide/builddir/tools/openslide-quickhash1sum.1 to C:/msys64/usr/local/openslide/share/man/man1
Installing D:/work/OpenSlide_work/openslide/builddir/tools/openslide-show-properties.1 to C:/msys64/usr/local/openslide/share/man/man1
Installing D:/work/OpenSlide_work/openslide/builddir/tools/openslide-write-png.1 to C:/msys64/usr/local/openslide/share/man/man1
Installing D:/work/OpenSlide_work/openslide/builddir/tools/slidetool.1 to C:/msys64/usr/local/openslide/share/man/man1
Installing D:/work/OpenSlide_work/openslide/builddir/meson-private/libdicom.pc to C:/msys64/usr/local/openslide/lib/pkgconfig
Installing D:/work/OpenSlide_work/openslide/builddir/meson-private/openslide.pc to C:/msys64/usr/local/openslide/lib/pkgconfig
```

```
export PATH=$PATH:/c/msys64/usr/local/openslide/bin
export PKG_CONFIG_PATH=/c/msys64/usr/local/openslide/lib/pkgconfig:$PKG_CONFIG_PATH
```


```
eric@DELL MINGW64 ~
$ source ~/.bashrc

eric@DELL MINGW64 ~
$ pkg-config --modversion openslide
4.0.0

eric@DELL MINGW64 ~
$ which code
/c/Users/eric/AppData/Local/Programs/Microsoft VS Code/bin/code
```


```
PS D:\work\OpenSlide_work\simple\01\build> $Env:PKG_CONFIG_PATH = "C:/msys64/usr/local/openslide/lib/pkgconfig;" + $Env:PKG_CONFIG_PATH
PS D:\work\OpenSlide_work\simple\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found PkgConfig: C:/msys64/mingw64/bin/pkg-config.exe (found version "2.3.0")
-- Checking for module 'openslide'
--   Found openslide, version 4.0.0
-- Configuring done (3.4s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/OpenSlide_work/simple/01/build
```

```
rm -rf * .*
```

```
eric@DELL MINGW64 /d/work/OpenSlide_work/simple/01a/build
$ cmake ..
-- Building for: Ninja
-- The CXX compiler identification is GNU 15.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found PkgConfig: C:/msys64/mingw64/bin/pkg-config.exe (found version "2.3.0")
-- Checking for module 'openslide'
--   Found openslide, version 4.0.0
OPENSLIDE_INCLUDE_DIRS: C:/msys64/usr/local/openslide/include/openslide;C:/msys64/usr/local/openslide/include;C:/msys64/mingw64/include/gdk-pixbuf-2.0;C:/msys64/mingw64/include;C:/msys64/mingw64/include/cairo;C:/msys64/mingw64/include/freetype2;C:/msys64/mingw64/include/harfbuzz;C:/msys64/mingw64/include/glib-2.0;C:/msys64/mingw64/lib/glib-2.0/include;C:/msys64/mingw64/include/pixman-1;C:/msys64/mingw64/include/libxml2;C:/msys64/mingw64/include/webp;C:/msys64/mingw64/include/openjpeg-2.5;C:/msys64/mingw64/include/libpng16
OPENSLIDE_LIBRARY_DIRS: C:/msys64/usr/local/openslide/lib
OPENSLIDE_LIBRARIES: openslide
OPENSLIDE_CFLAGS_OTHER: -DLIBDEFLATE_DLL
-- Configuring done (0.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/OpenSlide_work/simple/01a/build

eric@DELL MINGW64 /d/work/OpenSlide_work/simple/01a/build
$ cmake --build .
[2/2] Linking CXX executable openslide_example.exe

eric@DELL MINGW64 /d/work/OpenSlide_work/simple/01a/build
$ ./openslide_example.exe
Usage: D:\work\OpenSlide_work\simple\01a\build\openslide_example.exe <slide_file>

```

gendef libopenslide-1.dll
```
eric@DELL MINGW64 /usr/local/openslide/bin
$ ls
dcm-dump.exe      libdicom-1.dll      openslide-quickhash1sum.exe    openslide-write-png.exe
dcm-getframe.exe  libopenslide-1.dll  openslide-show-properties.exe  slidetool.exe

eric@DELL MINGW64 /usr/local/openslide/bin
$ gendef libopenslide-1.dll
 * [libopenslide-1.dll] Found PE+ image

eric@DELL MINGW64 /usr/local/openslide/bin
$ ls
dcm-dump.exe      libopenslide-1.def           openslide-show-properties.exe
dcm-getframe.exe  libopenslide-1.dll           openslide-write-png.exe
libdicom-1.dll    openslide-quickhash1sum.exe  slidetool.exe
```


```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
lib /machine:x64 /def:libopenslide-1.def /out:libopenslide-1.lib
lib /machine:x64 /def:libopenslide-1.def /out:libopenslide.lib
```

```
eric@DELL MINGW64 ~
$ ls -l /c/msys64/mingw64/bin/libfreetype-6.dll
-rwxr-xr-x 1 eric eric 787954 Aug 13  2024 /c/msys64/mingw64/bin/libfreetype-6.dll
eric@DELL MINGW64 ~
$ pacman -Qs harfbuzz
local/mingw-w64-x86_64-harfbuzz 11.2.1-1
    OpenType text shaping engine (mingw-w64)
```


```
eric@DELL MINGW64 ~
$ ldd /c/msys64/mingw64/bin/libfreetype-6.dll
        ntdll.dll => /c/WINDOWS/SYSTEM32/ntdll.dll (0x7ffb368a0000)
        KERNEL32.DLL => /c/WINDOWS/System32/KERNEL32.DLL (0x7ffb36210000)
        KERNELBASE.dll => /c/WINDOWS/System32/KERNELBASE.dll (0x7ffb33a30000)
        msvcrt.dll => /c/WINDOWS/System32/msvcrt.dll (0x7ffb365d0000)
        libbrotlidec.dll => /mingw64/bin/libbrotlidec.dll (0x7ffb0f4f0000)
        libbz2-1.dll => /mingw64/bin/libbz2-1.dll (0x7ffb0f490000)
        libharfbuzz-0.dll => /mingw64/bin/libharfbuzz-0.dll (0x7ffafa860000)
        libpng16-16.dll => /mingw64/bin/libpng16-16.dll (0x7ffb0ef10000)
        zlib1.dll => /mingw64/bin/zlib1.dll (0x7ffb0f000000)
        GDI32.dll => /c/WINDOWS/System32/GDI32.dll (0x7ffb35530000)
        win32u.dll => /c/WINDOWS/System32/win32u.dll (0x7ffb34430000)
        DWrite.dll => /c/WINDOWS/SYSTEM32/DWrite.dll (0x7ffb2f620000)
        libbrotlicommon.dll => /mingw64/bin/libbrotlicommon.dll (0x7ffb0e820000)
        libgcc_s_seh-1.dll => /mingw64/bin/libgcc_s_seh-1.dll (0x7ffb0e7f0000)
        gdi32full.dll => /c/WINDOWS/System32/gdi32full.dll (0x7ffb34520000)
        ucrtbase.dll => /c/WINDOWS/System32/ucrtbase.dll (0x7ffb34250000)
        msvcp_win.dll => /c/WINDOWS/System32/msvcp_win.dll (0x7ffb341a0000)
        RPCRT4.dll => /c/WINDOWS/System32/RPCRT4.dll (0x7ffb364b0000)
        libwinpthread-1.dll => /mingw64/bin/libwinpthread-1.dll (0x7ffb0e7d0000)
        USER32.dll => /c/WINDOWS/System32/USER32.dll (0x7ffb35270000)
        libgraphite2.dll => /mingw64/bin/libgraphite2.dll (0x7ffb0e7a0000)
        libintl-8.dll => /mingw64/bin/libintl-8.dll (0x7ffaffae0000)
        libglib-2.0-0.dll => /mingw64/bin/libglib-2.0-0.dll (0x7ffadc190000)
        ADVAPI32.dll => /c/WINDOWS/System32/ADVAPI32.dll (0x7ffb35180000)
        advapi32.dll => /c/Windows/System32/advapi32.dll (0x12b0000)
        sechost.dll => /c/WINDOWS/System32/sechost.dll (0x7ffb35980000)
        ole32.dll => /c/WINDOWS/System32/ole32.dll (0x7ffb35560000)
        libstdc++-6.dll => /mingw64/bin/libstdc++-6.dll (0x7ffab9d00000)
        USP10.dll => /c/WINDOWS/SYSTEM32/USP10.dll (0x7ffaed050000)
        combase.dll => /c/WINDOWS/System32/combase.dll (0x7ffb34df0000)
        SHELL32.dll => /c/WINDOWS/System32/SHELL32.dll (0x7ffb35ae0000)
        libiconv-2.dll => /mingw64/bin/libiconv-2.dll (0x7ffaf9f90000)
        wintypes.dll => /c/WINDOWS/System32/wintypes.dll (0x7ffb33ea0000)
        WS2_32.dll => /c/WINDOWS/System32/WS2_32.dll (0x7ffb35900000)
        libpcre2-8-0.dll => /mingw64/bin/libpcre2-8-0.dll (0x7ffafbcf0000)
        CRYPTBASE.DLL => /c/WINDOWS/SYSTEM32/CRYPTBASE.DLL (0x7ffb32f30000)
        bcryptPrimitives.dll => /c/WINDOWS/System32/bcryptPrimitives.dll (0x7ffb33e00000)
        IMM32.DLL => /c/WINDOWS/System32/IMM32.DLL (0x7ffb34670000)
```

$env:PATH
```
PS C:\Users\eric> $env:PATH
C:\Program Files\PowerShell\7
C:\dev\VulkanSDK\1.4.313.0\Bin
C:\Program Files\Microsoft MPI\Bin\
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\libnvvp
c:\dev\FFmpeg\bin\
C:\dev\ActiveTcl\bin
C:\Program Files\Common Files\Oracle\Java\javapath
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\libnvvp
C:\Program Files (x86)\VMware\VMware Workstation\bin\
C:\Windows\System32\Wbem
C:\Windows\System32\WindowsPowerShell\v1.0\
C:\Windows\System32\OpenSSH\
C:\Program Files\dotnet\
C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
c:\dev\debug\jsoncpp\bin\
C:\Program Files\CodeBlocks\MinGW\bin
c:\Program Files\doxygen\bin\
C:\ProgramData\chocolatey\bin
C:\Program Files\gs\gs10.03.0\bin
C:\Program Files\Graphviz\bin
c:\dev\VTK\bin\
c:\dev\glew\bin\
c:\dev\QtNodesLibrary\bin\
C:\Program Files\nodejs\
C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\
C:\Program Files\NVIDIA Corporation\Nsight Compute 2024.2.1\
C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Users\eric\.elan\bin
C:\Program Files\Git\cmd
C:\Program Files\PowerShell\7\
C:\Program Files\CMake\bin
c:\dev\openvr\bin\win64\
c:\dev\VTK_debug\bin\
c:\dev\HDF_Group\HDF5\1.14.6\bin\
c:\dev\VTK\bin\
c:\dev\glew\bin\
c:\dev\QtNodesLibrary\bin\
c:\dev\Imath\bin\
c:\dev\OCCT\win64\vc14\bin\
c:\dev\icu\bin64\
c:\dev\boost_1_88_0\stage\lib\

C:\Users\eric\AppData\Local\Programs\Python\Python313\Scripts\
C:\Users\eric\AppData\Local\Programs\Python\Python313\
c:\Users\eric\AppData\Roaming\Python\Python313\Scripts\
C:\Users\eric\.elan\bin
C:\Users\eric\AppData\Local\ActiveState\StateTool\release\bin
C:\Users\eric\AppData\Local\activestate\cache\bin
D:\software\texlive\2022\bin\win32
C:\Users\eric\AppData\Local\Microsoft\WindowsApps
C:\Users\eric\AppData\Local\GitHubDesktop\bin
C:\Users\eric\AppData\Local\Programs\MiKTeX\miktex\bin\x64\
C:\dev\LLVM\bin
c:\dev\win_flex_bison3\
C:\Users\eric\AppData\Local\Programs\Microsoft VS Code\bin
c:\dev\freeglut\bin\
c:\dev\SDL3\bin\
c:\dev\GLFW\bin\
c:\Program Files (x86)\HTML Help Workshop\
C:\Users\eric\AppData\Roaming\npm
C:\Users\eric\.dotnet\tools
C:\Users\eric\AppData\Local\Programs\Julia-1.11.4\bin
c:\msys64\mingw64\bin\
c:\dev\icu\bin64\
c:\msys64\usr\local\openslide\bin\
C:\Program Files\PowerShell\7
C:\dev\VulkanSDK\1.4.313.0\Bin
C:\Program Files\Microsoft MPI\Bin\
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.5\libnvvp
c:\dev\FFmpeg\bin\
C:\dev\ActiveTcl\bin
D:\software\Tecplot\Tecplot 360 EX 2016 R2\bin
C:\Program Files\Common Files\Oracle\Java\javapath
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\bin
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.2\libnvvp
C:\Program Files (x86)\VMware\VMware Workstation\bin\
C:\Windows\System32\Wbem
C:\Windows\System32\WindowsPowerShell\v1.0\
C:\Windows\System32\OpenSSH\
C:\Program Files\dotnet\
C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
c:\dev\debug\jsoncpp\bin\
C:\Program Files\CodeBlocks\MinGW\bin
c:\Program Files\doxygen\bin\
C:\ProgramData\chocolatey\bin
C:\Program Files\gs\gs10.03.0\bin
C:\Program Files\Graphviz\bin
c:\dev\VTK\bin\
c:\dev\glew\bin\
c:\dev\QtNodesLibrary\bin\
C:\Program Files\nodejs\
C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\
C:\Program Files\NVIDIA Corporation\Nsight Compute 2024.2.1\
C:\Program Files\NVIDIA Corporation\NVIDIA app\NvDLISR
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Users\eric\.elan\bin
C:\Program Files\Git\cmd
C:\Program Files\PowerShell\7\
C:\Program Files\CMake\bin
c:\dev\openvr\bin\win64\
c:\dev\VTK_debug\bin\
c:\dev\HDF_Group\HDF5\1.14.6\bin\
c:\dev\VTK\bin\
c:\dev\glew\bin\
c:\dev\QtNodesLibrary\bin\
c:\dev\Imath\bin\
c:\dev\OCCT\win64\vc14\bin\
c:\dev\icu\bin64\
c:\dev\boost_1_88_0\stage\lib\

C:\Users\eric\AppData\Local\Programs\Python\Python313\Scripts\
C:\Users\eric\AppData\Local\Programs\Python\Python313\
c:\Users\eric\AppData\Roaming\Python\Python313\Scripts\
C:\Users\eric\.elan\bin
C:\Users\eric\AppData\Local\ActiveState\StateTool\release\bin
C:\Users\eric\AppData\Local\activestate\cache\bin
D:\software\texlive\2022\bin\win32
C:\Users\eric\AppData\Local\Microsoft\WindowsApps
C:\Users\eric\AppData\Local\GitHubDesktop\bin
C:\Users\eric\AppData\Local\Programs\MiKTeX\miktex\bin\x64\
C:\dev\LLVM\bin
c:\dev\win_flex_bison3\
C:\Users\eric\AppData\Local\Programs\Microsoft VS Code\bin
c:\dev\freeglut\bin\
c:\dev\SDL3\bin\
c:\dev\GLFW\bin\
c:\Program Files (x86)\HTML Help Workshop\
C:\Users\eric\AppData\Roaming\npm
C:\Users\eric\.dotnet\tools
C:\Users\eric\AppData\Local\Programs\Julia-1.11.4\bin
c:\msys64\mingw64\bin\
c:\dev\icu\bin64\
c:\msys64\usr\local\openslide\bin\
```
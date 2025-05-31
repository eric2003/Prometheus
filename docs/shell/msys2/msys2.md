# MSYS2

## Link

-  [Software Distribution and Building Platform for Windows](https://www.msys2.org/).
-  [Window 下编译和配置 FFmpeg 和 LibX264](https://www.nxrte.com/jishu/8068.html).
-  [Win - 编译 ffmpeg （Msys2 + MSVC）](https://zhuanlan.zhihu.com/p/5815859492).
-  [Windows 下编译并裁剪FFmpeg](https://www.cnblogs.com/yongdaimi/p/16619804.html).
-  [Windows 下 FFmpeg +X264 +x265的编译和配置](https://segmentfault.com/a/1190000041847321).
-  [如何生成ffmpeg.dll](https://blog.51cto.com/u_15655186/6087352).


## Intall MSYS2

### pacman -Ss gcc | grep mingw
```
$ pacman -Ss gcc | grep mingw
clangarm64/mingw-w64-clang-aarch64-gcc-compat 19.1.7-1
    GCC compatibility aliases for Clang (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-lcov 1.16-1
clangarm64/mingw-w64-clang-aarch64-libc++ 19.1.7-1 (mingw-w64-clang-aarch64-toolchain)
    C++ Standard Library (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-perl 5.38.2-1
    A highly capable, feature-rich programming language (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-python-pygccxml 2.6.1-1
    Simple framework to navigate C++ declarations, using Python classes. (mingw-w64)
mingw32/mingw-w64-i686-gcc 14.2.0-2 (mingw-w64-i686-toolchain)
mingw32/mingw-w64-i686-gcc-fortran 14.2.0-2
mingw32/mingw-w64-i686-gcc-libgfortran 14.2.0-2
mingw32/mingw-w64-i686-gcc-libs 14.2.0-2
mingw32/mingw-w64-i686-gcc-lto-dump 14.2.0-2
    Dump link time optimization object files (mingw-w64)
mingw64/mingw-w64-x86_64-arm-none-eabi-gcc 13.3.0-1 (mingw-w64-x86_64-arm-none-eabi-toolchain)
    GNU Tools for ARM Embedded Processors - GCC (mingw-w64)
mingw64/mingw-w64-x86_64-avr-gcc 14.2.0-1 (mingw-w64-x86_64-avr-toolchain)
    GNU compiler collection for AVR 8-bit and 32-bit microcontrollers (mingw-w64)
mingw64/mingw-w64-x86_64-gcc 14.2.0-2 (mingw-w64-x86_64-toolchain)
mingw64/mingw-w64-x86_64-gcc-ada 14.2.0-2
mingw64/mingw-w64-x86_64-gcc-fortran 14.2.0-2
mingw64/mingw-w64-x86_64-gcc-libgfortran 14.2.0-2
mingw64/mingw-w64-x86_64-gcc-libs 14.2.0-2
mingw64/mingw-w64-x86_64-gcc-lto-dump 14.2.0-2
    Dump link time optimization object files (mingw-w64)
mingw64/mingw-w64-x86_64-gcc-objc 14.2.0-2
mingw64/mingw-w64-x86_64-gcc-rust 14.2.0-2
mingw64/mingw-w64-x86_64-lcov 1.16-1
mingw64/mingw-w64-x86_64-libgccjit 14.2.0-2
mingw64/mingw-w64-x86_64-perl 5.38.2-1
    A highly capable, feature-rich programming language (mingw-w64)
mingw64/mingw-w64-x86_64-python-pygccxml 2.6.1-1
    Simple framework to navigate C++ declarations, using Python classes. (mingw-w64)
mingw64/mingw-w64-x86_64-riscv64-unknown-elf-gcc 14.2.0-1 (mingw-w64-x86_64-riscv64-unknown-elf-toolchain)
    GNU Tools for RISC-V Embedded Processors - GCC (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-arm-none-eabi-gcc 13.3.0-1 (mingw-w64-ucrt-x86_64-arm-none-eabi-toolchain)
    GNU Tools for ARM Embedded Processors - GCC (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-avr-gcc 14.2.0-1 (mingw-w64-ucrt-x86_64-avr-toolchain)
    GNU compiler collection for AVR 8-bit and 32-bit microcontrollers (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-gcc 14.2.0-2 (mingw-w64-ucrt-x86_64-toolchain)
ucrt64/mingw-w64-ucrt-x86_64-gcc-ada 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-gcc-fortran 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-gcc-libgfortran 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-gcc-libs 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-gcc-lto-dump 14.2.0-2
    Dump link time optimization object files (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-gcc-objc 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-gcc-rust 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-lcov 1.16-1
ucrt64/mingw-w64-ucrt-x86_64-libgccjit 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-perl 5.38.2-1
    A highly capable, feature-rich programming language (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-python-pygccxml 2.6.1-1
    Simple framework to navigate C++ declarations, using Python classes. (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-riscv64-unknown-elf-gcc 14.2.0-1 (mingw-w64-ucrt-x86_64-riscv64-unknown-elf-toolchain)
    GNU Tools for RISC-V Embedded Processors - GCC (mingw-w64)
clang64/mingw-w64-clang-x86_64-arm-none-eabi-gcc 13.3.0-1 (mingw-w64-clang-x86_64-arm-none-eabi-toolchain)
    GNU Tools for ARM Embedded Processors - GCC (mingw-w64)
clang64/mingw-w64-clang-x86_64-avr-gcc 14.2.0-1 (mingw-w64-clang-x86_64-avr-toolchain)
    GNU compiler collection for AVR 8-bit and 32-bit microcontrollers (mingw-w64)
clang64/mingw-w64-clang-x86_64-gcc-compat 19.1.7-1
    GCC compatibility aliases for Clang (mingw-w64)
clang64/mingw-w64-clang-x86_64-lcov 1.16-1
clang64/mingw-w64-clang-x86_64-libc++ 19.1.7-1 (mingw-w64-clang-x86_64-toolchain)
    C++ Standard Library (mingw-w64)
clang64/mingw-w64-clang-x86_64-perl 5.38.2-1
    A highly capable, feature-rich programming language (mingw-w64)
clang64/mingw-w64-clang-x86_64-python-pygccxml 2.6.1-1
    Simple framework to navigate C++ declarations, using Python classes. (mingw-w64)
clang64/mingw-w64-clang-x86_64-riscv64-unknown-elf-gcc 14.2.0-1 (mingw-w64-clang-x86_64-riscv64-unknown-elf-toolchain)
    GNU Tools for RISC-V Embedded Processors - GCC (mingw-w64)
msys/mingw-w64-cross-gcc 14.2.0-3 (mingw-w64-cross-toolchain mingw-w64-cross)
msys/mingw-w64-cross-mingw32-gcc 14.2.0-3 (mingw-w64-cross-toolchain mingw-w64-cross)
msys/mingw-w64-cross-mingw64-gcc 14.2.0-3 (mingw-w64-cross-toolchain mingw-w64-cross)
msys/mingw-w64-cross-mingwarm64-gcc 15.0.0dev-3 (mingw-w64-cross-toolchain mingw-w64-cross)
msys/mingw-w64-cross-ucrt64-gcc 14.2.0-3 (mingw-w64-cross-toolchain mingw-w64-cross)
```

### pacman -S mingw-w64-x86_64-gcc
```
pacman -S mingw-w64-x86_64-gcc
pacman -S mingw-w64-x86_64-toolchain
```

```
$ pacman -S mingw-w64-x86_64-toolchain
:: There are 13 members in group mingw-w64-x86_64-toolchain:
:: Repository mingw64
   1) mingw-w64-x86_64-binutils  2) mingw-w64-x86_64-crt-git  3) mingw-w64-x86_64-gcc
   4) mingw-w64-x86_64-gdb  5) mingw-w64-x86_64-gdb-multiarch  6) mingw-w64-x86_64-headers-git
   7) mingw-w64-x86_64-libmangle-git  8) mingw-w64-x86_64-libwinpthread-git
   9) mingw-w64-x86_64-make  10) mingw-w64-x86_64-pkgconf  11) mingw-w64-x86_64-tools-git
   12) mingw-w64-x86_64-winpthreads-git  13) mingw-w64-x86_64-winstorecompat-git

Enter a selection (default=all):
```

### pacman -S mingw-w64-x86_64-toolchain
```
$ pacman -S mingw-w64-x86_64-toolchain
:: There are 13 members in group mingw-w64-x86_64-toolchain:
:: Repository mingw64
   1) mingw-w64-x86_64-binutils  2) mingw-w64-x86_64-crt-git  3) mingw-w64-x86_64-gcc
   4) mingw-w64-x86_64-gdb  5) mingw-w64-x86_64-gdb-multiarch  6) mingw-w64-x86_64-headers-git
   7) mingw-w64-x86_64-libmangle-git  8) mingw-w64-x86_64-libwinpthread-git
   9) mingw-w64-x86_64-make  10) mingw-w64-x86_64-pkgconf  11) mingw-w64-x86_64-tools-git
   12) mingw-w64-x86_64-winpthreads-git  13) mingw-w64-x86_64-winstorecompat-git

Enter a selection (default=all):
resolving dependencies...
looking for conflicting packages...

Packages (40) mingw-w64-x86_64-bzip2-1.0.8-3  mingw-w64-x86_64-expat-2.6.4-1
              mingw-w64-x86_64-gcc-libs-14.2.0-2  mingw-w64-x86_64-gettext-runtime-0.23.1-1
              mingw-w64-x86_64-gmp-6.3.0-2  mingw-w64-x86_64-isl-0.27-1
              mingw-w64-x86_64-libffi-3.4.7-1  mingw-w64-x86_64-libiconv-1.18-1
              mingw-w64-x86_64-libsystre-1.0.1-6  mingw-w64-x86_64-libtre-0.9.0-1
              mingw-w64-x86_64-mpc-1.3.1-2  mingw-w64-x86_64-mpdecimal-4.0.0-1
              mingw-w64-x86_64-mpfr-4.2.1-2  mingw-w64-x86_64-ncurses-6.5.20241228-3
              mingw-w64-x86_64-openssl-3.4.1-1  mingw-w64-x86_64-python-3.12.9-3
              mingw-w64-x86_64-readline-8.2.013-1  mingw-w64-x86_64-sqlite3-3.47.2-1
              mingw-w64-x86_64-tcl-8.6.13-1  mingw-w64-x86_64-termcap-1.3.1-7
              mingw-w64-x86_64-tk-8.6.13-1  mingw-w64-x86_64-tzdata-2025a-1
              mingw-w64-x86_64-windows-default-manifest-6.4-4  mingw-w64-x86_64-xxhash-0.8.3-1
              mingw-w64-x86_64-xz-5.6.4-1  mingw-w64-x86_64-zlib-1.3.1-1
              mingw-w64-x86_64-zstd-1.5.7-1  mingw-w64-x86_64-binutils-2.44-1
              mingw-w64-x86_64-crt-git-12.0.0.r509.g079e6092b-1  mingw-w64-x86_64-gcc-14.2.0-2
              mingw-w64-x86_64-gdb-16.2-1  mingw-w64-x86_64-gdb-multiarch-16.2-1
              mingw-w64-x86_64-headers-git-12.0.0.r509.g079e6092b-1
              mingw-w64-x86_64-libmangle-git-12.0.0.r509.g079e6092b-1
              mingw-w64-x86_64-libwinpthread-git-12.0.0.r509.g079e6092b-1
              mingw-w64-x86_64-make-4.4.1-3  mingw-w64-x86_64-pkgconf-1~2.3.0-1
              mingw-w64-x86_64-tools-git-12.0.0.r509.g079e6092b-1
              mingw-w64-x86_64-winpthreads-git-12.0.0.r509.g079e6092b-1
              mingw-w64-x86_64-winstorecompat-git-12.0.0.r509.g079e6092b-1

Total Download Size:   117.54 MiB
Total Installed Size:  862.02 MiB

:: Proceed with installation? [Y/n]

```

### gcc --version
```
eric@DELL MINGW64 ~
$ gcc --version
gcc.exe (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### g++ --version
```
eric@DELL MINGW64 ~
$ g++ --version
g++.exe (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

pacman -S mingw-w64-x86_64-gcc-gfortran
```
pacman -S mingw-w64-x86_64-gcc-gfortran
```

### pacman -Ss fortran | grep mingw
```
eric@DELL MINGW64 ~
$ pacman -Ss fortran | grep mingw
clangarm64/mingw-w64-clang-aarch64-arpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-arpack64 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with 64-bit indexing (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-cfitsio 1~4.5.0-1
    A library of C and Fortran subroutines for reading and writing data files in FITS (Flexible Image Transport System) data format (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-codeblocks 20.03.r13600-1
    A free C, C++ and Fortran IDE (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-codeblocks-fortranproject 1.8.r385-1
    FortranProject plugin for Code::Blocks IDE (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-f2c 20230428-1
    Fortran to C code translator (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-flang 19.1.7-1
    Fortran frontend for LLVM (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-lfortran 0.43.0-1
    Modern open-source (BSD licensed) interactive Fortran compiler built on top of LLVM (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-netcdf-fortran 4.6.1-1
    Unidata NetCDF Fortran Library (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-python-ford 7.0.9-1
    FORD, standing for FORtran Documenter, is an automatic documentation generator for modern Fortran programs (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-python-fortls 3.1.2-1
    A modern Language Server for Fortran. (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-python-fprettify 0.3.7-6
    An auto-formatter for modern Fortran code that imposes strict whitespace formatting, written in Python (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-python-fypp 3.2-3
    Python powered Fortran preprocessor (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-python-scikit-build 0.18.1-1
    Improved build system generator for Python C/C++/Fortran/Cython extensions (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-qrupdate 1.1.5-4
    Fortran library for fast updates of QR and Cholesky decompositions (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-toml-f 0.4.2-1
    A TOML parser implementation for data serialization and deserialization in Fortran. (mingw-w64)
clangarm64/mingw-w64-clang-aarch64-xmlf90 1.6.3-1
    Lightweight XML parser in Fortran. (mingw-w64)
mingw32/mingw-w64-i686-arpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems (mingw-w64)
mingw32/mingw-w64-i686-cfitsio 1~4.5.0-1
    A library of C and Fortran subroutines for reading and writing data files in FITS (Flexible Image Transport System) data format (mingw-w64)
mingw32/mingw-w64-i686-f2c 20230428-1
    Fortran to C code translator (mingw-w64)
mingw32/mingw-w64-i686-gcc-fortran 14.2.0-2
mingw32/mingw-w64-i686-gcc-libgfortran 14.2.0-2
mingw32/mingw-w64-i686-python-fypp 3.2-3
    Python powered Fortran preprocessor (mingw-w64)
mingw32/mingw-w64-i686-qrupdate 1.1.5-4
    Fortran library for fast updates of QR and Cholesky decompositions (mingw-w64)
mingw64/mingw-w64-x86_64-arpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems (mingw-w64)
mingw64/mingw-w64-x86_64-arpack64 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with 64-bit indexing (mingw-w64)
mingw64/mingw-w64-x86_64-cfitsio 1~4.5.0-1
    A library of C and Fortran subroutines for reading and writing data files in FITS (Flexible Image Transport System) data format (mingw-w64)
mingw64/mingw-w64-x86_64-f2c 20230428-1
    Fortran to C code translator (mingw-w64)
mingw64/mingw-w64-x86_64-fgsl 1.6.0-1
    Fortran interface to the GNU scientific library (mingw-w64)
mingw64/mingw-w64-x86_64-fortran-stdlib 0.7.0-1
    Fortran Standard Library (mingw-w64)
mingw64/mingw-w64-x86_64-fpm 0.10.0-1
    Fortran package manager (mingw-w64)
mingw64/mingw-w64-x86_64-gcc-fortran 14.2.0-2
mingw64/mingw-w64-x86_64-gcc-libgfortran 14.2.0-2
mingw64/mingw-w64-x86_64-lfortran 0.43.0-1
    Modern open-source (BSD licensed) interactive Fortran compiler built on top of LLVM (mingw-w64)
mingw64/mingw-w64-x86_64-netcdf-fortran 4.6.1-1
    Unidata NetCDF Fortran Library (mingw-w64)
mingw64/mingw-w64-x86_64-parpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with MPI (mingw-w64)
mingw64/mingw-w64-x86_64-python-ford 7.0.9-1
    FORD, standing for FORtran Documenter, is an automatic documentation generator for modern Fortran programs (mingw-w64)
mingw64/mingw-w64-x86_64-python-fortls 3.1.2-1
    A modern Language Server for Fortran. (mingw-w64)
mingw64/mingw-w64-x86_64-python-fprettify 0.3.7-6
    An auto-formatter for modern Fortran code that imposes strict whitespace formatting, written in Python (mingw-w64)
mingw64/mingw-w64-x86_64-python-fypp 3.2-3
    Python powered Fortran preprocessor (mingw-w64)
mingw64/mingw-w64-x86_64-python-scikit-build 0.18.1-1
    Improved build system generator for Python C/C++/Fortran/Cython extensions (mingw-w64)
mingw64/mingw-w64-x86_64-qrupdate 1.1.5-4
    Fortran library for fast updates of QR and Cholesky decompositions (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-arpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-arpack64 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with 64-bit indexing (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-cfitsio 1~4.5.0-1
    A library of C and Fortran subroutines for reading and writing data files in FITS (Flexible Image Transport System) data format (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-codeblocks 20.03.r13600-1
    A free C, C++ and Fortran IDE (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-codeblocks-fortranproject 1.8.r385-1
    FortranProject plugin for Code::Blocks IDE (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-f2c 20230428-1
    Fortran to C code translator (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-fgsl 1.6.0-1
    Fortran interface to the GNU scientific library (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-flang 19.1.7-1
    Fortran frontend for LLVM (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-fortran-stdlib 0.7.0-1
    Fortran Standard Library (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-fpm 0.10.0-1
    Fortran package manager (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-gcc-fortran 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-gcc-libgfortran 14.2.0-2
ucrt64/mingw-w64-ucrt-x86_64-json-fortran 9.0.2-1
    A Modern Fortran JSON API. (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-lfortran 0.43.0-1
    Modern open-source (BSD licensed) interactive Fortran compiler built on top of LLVM (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-netcdf-fortran 4.6.1-1
    Unidata NetCDF Fortran Library (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-parpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with MPI (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-python-ford 7.0.9-1
    FORD, standing for FORtran Documenter, is an automatic documentation generator for modern Fortran programs (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-python-fortls 3.1.2-1
    A modern Language Server for Fortran. (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-python-fprettify 0.3.7-6
    An auto-formatter for modern Fortran code that imposes strict whitespace formatting, written in Python (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-python-fypp 3.2-3
    Python powered Fortran preprocessor (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-python-scikit-build 0.18.1-1
    Improved build system generator for Python C/C++/Fortran/Cython extensions (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-qrupdate 1.1.5-4
    Fortran library for fast updates of QR and Cholesky decompositions (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-toml-f 0.4.2-1
    A TOML parser implementation for data serialization and deserialization in Fortran. (mingw-w64)
ucrt64/mingw-w64-ucrt-x86_64-xmlf90 1.6.3-1
    Lightweight XML parser in Fortran. (mingw-w64)
clang64/mingw-w64-clang-x86_64-arpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems (mingw-w64)
clang64/mingw-w64-clang-x86_64-arpack64 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with 64-bit indexing (mingw-w64)
clang64/mingw-w64-clang-x86_64-cfitsio 1~4.5.0-1
    A library of C and Fortran subroutines for reading and writing data files in FITS (Flexible Image Transport System) data format (mingw-w64)
clang64/mingw-w64-clang-x86_64-codeblocks 20.03.r13600-1
    A free C, C++ and Fortran IDE (mingw-w64)
clang64/mingw-w64-clang-x86_64-codeblocks-fortranproject 1.8.r385-1
    FortranProject plugin for Code::Blocks IDE (mingw-w64)
clang64/mingw-w64-clang-x86_64-f2c 20230428-1
    Fortran to C code translator (mingw-w64)
clang64/mingw-w64-clang-x86_64-flang 19.1.7-1
    Fortran frontend for LLVM (mingw-w64)
clang64/mingw-w64-clang-x86_64-json-fortran 9.0.2-1
    A Modern Fortran JSON API. (mingw-w64)
clang64/mingw-w64-clang-x86_64-lfortran 0.43.0-1
    Modern open-source (BSD licensed) interactive Fortran compiler built on top of LLVM (mingw-w64)
clang64/mingw-w64-clang-x86_64-netcdf-fortran 4.6.1-1
    Unidata NetCDF Fortran Library (mingw-w64)
clang64/mingw-w64-clang-x86_64-parpack 3.9.1-3
    Fortran77 subroutines designed to solve large scale eigenvalue problems with MPI (mingw-w64)
clang64/mingw-w64-clang-x86_64-python-ford 7.0.9-1
    FORD, standing for FORtran Documenter, is an automatic documentation generator for modern Fortran programs (mingw-w64)
clang64/mingw-w64-clang-x86_64-python-fortls 3.1.2-1
    A modern Language Server for Fortran. (mingw-w64)
clang64/mingw-w64-clang-x86_64-python-fprettify 0.3.7-6
    An auto-formatter for modern Fortran code that imposes strict whitespace formatting, written in Python (mingw-w64)
clang64/mingw-w64-clang-x86_64-python-fypp 3.2-3
    Python powered Fortran preprocessor (mingw-w64)
clang64/mingw-w64-clang-x86_64-python-scikit-build 0.18.1-1
    Improved build system generator for Python C/C++/Fortran/Cython extensions (mingw-w64)
clang64/mingw-w64-clang-x86_64-qrupdate 1.1.5-4
    Fortran library for fast updates of QR and Cholesky decompositions (mingw-w64)
clang64/mingw-w64-clang-x86_64-toml-f 0.4.2-1
    A TOML parser implementation for data serialization and deserialization in Fortran. (mingw-w64)
clang64/mingw-w64-clang-x86_64-xmlf90 1.6.3-1
    Lightweight XML parser in Fortran. (mingw-w64)

```

### pacman -S mingw-w64-x86_64-gcc-fortran
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-gcc-fortran
resolving dependencies...
looking for conflicting packages...

Packages (2) mingw-w64-x86_64-gcc-libgfortran-14.2.0-2  mingw-w64-x86_64-gcc-fortran-14.2.0-2

Total Download Size:   13.64 MiB
Total Installed Size:  46.85 MiB

:: Proceed with installation? [Y/n] y

```

### gfortran --version
```
eric@DELL MINGW64 ~
$ gfortran --version
GNU Fortran (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

```

### pacman -S git
```
eric@DELL MINGW64 ~
$ pacman -S git
resolving dependencies...
looking for conflicting packages...

Packages (34) heimdal-7.8.0-5  libcbor-0.11.0-1  libfido2-1.15.0-1  openssh-9.9p2-1
              perl-Authen-SASL-2.1700-1  perl-Clone-0.47-1  perl-Convert-BinHex-1.125-2
              perl-Encode-Locale-1.05-2  perl-Error-0.17029-2  perl-File-Listing-6.16-1
              perl-HTML-Parser-3.83-1  perl-HTML-Tagset-3.24-1  perl-HTTP-Cookies-6.11-1
              perl-HTTP-Daemon-6.16-1  perl-HTTP-Date-6.06-1  perl-HTTP-Message-7.00-1
              perl-HTTP-Negotiate-6.01-3  perl-IO-HTML-1.004-2  perl-IO-Socket-SSL-2.089-1
              perl-IO-Stringy-2.113-2  perl-LWP-MediaTypes-6.04-2  perl-MIME-tools-5.515-1
              perl-MailTools-2.22-1  perl-Net-HTTP-6.23-1  perl-Net-SMTP-SSL-1.04-2
              perl-Net-SSLeay-1.94-2  perl-TermReadKey-2.38-6  perl-TimeDate-2.33-2
              perl-Try-Tiny-0.32-1  perl-URI-5.31-1  perl-WWW-RobotRules-6.02-3
              perl-http-cookiejar-0.014-1  perl-libwww-6.77-1  git-2.48.1-1

Total Download Size:    9.63 MiB
Total Installed Size:  50.71 MiB

:: Proceed with installation? [Y/n]
```

### git --version
```
eric@DELL MINGW64 ~
$ git --version
git version 2.48.1
```

tar.xz
```
tar -xvf example.tar.xz
tar -xvf ffmpeg-7.1.1.tar.xz
```


### git clone https://code.videolan.org/videolan/x264.git
```
eric@DELL MINGW64 ~
$ git clone https://code.videolan.org/videolan/x264.git
Cloning into 'x264'...
remote: Enumerating objects: 24629, done.
remote: Counting objects: 100% (2169/2169), done.
remote: Compressing objects: 100% (434/434), done.
remote: Total 24629 (delta 1739), reused 2162 (delta 1735), pack-reused 22460 (from 1)
Receiving objects: 100% (24629/24629), 6.51 MiB | 56.00 KiB/s, done.
Resolving deltas: 100% (20371/20371), done.
Updating files: 100% (270/270), done.
```

### git clone https://git.ffmpeg.org/ffmpeg.git
```
eric@DELL MINGW64 ~
$ git clone https://git.ffmpeg.org/ffmpeg.git
Cloning into 'ffmpeg'...
remote: Enumerating objects: 14022, done.
remote: Counting objects: 100% (14022/14022), done.
remote: Compressing objects: 100% (7231/7231), done.
remote: Total 759250 (delta 9811), reused 9341 (delta 6775)
Receiving objects: 100% (759250/759250), 188.25 MiB | 9.72 MiB/s, done.
Resolving deltas: 100% (614709/614709), done.
Updating files: 100% (9798/9798), done.

```

### pacman -S mingw-w64-x86_64-nasm
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-nasm
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-nasm-2.16.03-1

Total Download Size:   0.36 MiB
Total Installed Size:  2.68 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-nasm-2.16...   373.1 KiB   270 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-nasm                       [###############################] 100%
```

nasm --version
```
eric@DELL MINGW64 ~
$ nasm --version
NASM version 2.16.03 compiled on May  5 2024
```

pacman -S mingw-w64-x86_64-libvpx
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-libvpx
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-libvpx-1.15.1-1

Total Download Size:    1.47 MiB
Total Installed Size:  10.42 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libvpx-1....  1500.9 KiB   736 KiB/s 00:02 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-libvpx                     [###############################] 100%

```

```
eric@DELL MINGW64 ~
$ ls /mingw64/lib/pkgconfig/vpx.pc
/mingw64/lib/pkgconfig/vpx.pc
```

### pacman -S mingw-w64-x86_64-libx264
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-libx264
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-libx264-0.164.r3161.a354f11-3

Total Download Size:   0.78 MiB
Total Installed Size:  4.85 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-libx264-0...   803.3 KiB   740 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing mingw-w64-x86_64-libx264                    [###############################] 100%
```

```

eric@DELL MINGW64 ~
$ ls /mingw64/lib/pkgconfig/x264.pc
/mingw64/lib/pkgconfig/x264.pc
```

### pacman -S diffutils
```
eric@DELL MINGW64 ~
$ pacman -S diffutils
resolving dependencies...
looking for conflicting packages...

Packages (1) diffutils-3.12-1

Total Download Size:   0.38 MiB
Total Installed Size:  1.67 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 diffutils-3.12-1-x86_64         385.3 KiB   294 KiB/s 00:01 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing diffutils                                   [###############################] 100%
:: Running post-transaction hooks...
(1/1) Updating the info directory file...
```

### cmp --version
```
eric@DELL MINGW64 ~
$ cmp --version
cmp (GNU diffutils) 3.12
Copyright (C) 2025 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Torbjörn Granlund and David MacKenzie.
```

### pacman -S make
```
eric@DELL MINGW64 ~/ffmpeg/build
$ pacman -S make
resolving dependencies...
looking for conflicting packages...

Packages (1) make-4.4.1-2

Total Download Size:   0.50 MiB
Total Installed Size:  1.61 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 make-4.4.1-2-x86_64             507.6 KiB   288 KiB/s 00:02 [###############################] 100%
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) installing make                                        [###############################] 100%
:: Running post-transaction hooks...
(1/1) Updating the info directory file...
```

make --version
```
eric@DELL MINGW64 ~/ffmpeg/build
$ make --version
GNU Make 4.4.1
Built for x86_64-pc-msys
Copyright (C) 1988-2023 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```


```
../configure --prefix=/usr/local \
             --enable-shared \
             --enable-gpl \
             --enable-nonfree \
             --enable-libx264 \
             --enable-libvpx
```

```
../configure --prefix=/usr/local/ffmpeg \
             --enable-shared \
             --enable-gpl \
             --enable-nonfree \
             --enable-libx264 \
             --enable-libvpx
```

```
make -j$(nproc)
make install
```


```
c:\dev\ffmpeg\lib\*.*
├── libavcodec.dll
├── libavdevice.dll
├── libavfilter.dll
├── libavformat.dll
├── libavutil.dll
├── libpostproc.dll
├── libswresample.dll
├── libswscale.dll
├── avcodec-61.def
├── avdevice-61.def
├── avfilter-10.def
├── avformat-61.def
├── avutil-59.def
├── postproc-58.def
├── swresample-5.def
├── swscale-8.def
├── avcodec.lib
├── avdevice.lib
├── avfilter.lib
├── avformat.lib
├── avutil.lib
├── postproc.lib
├── swresample.lib
└── swscale.lib
```

```
c:\msys64\usr\local\ffmpeg\lib\*.*
├── libavcodec.dll.a
├── libavdevice.dll.a
├── libavfilter.dll.a
├── libavformat.dll.a
├── libavutil.dll.a
├── libswresample.dll.a
├── libswscale.dll.a
├── avcodec-62.def
├── avdevice-62.def
├── avfilter-11.def
├── avformat-62.def
├── avutil-60.def
├── swresample-6.def
└── swscale-9.def
```

### cmd.exe "/K" 

cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
```powershell
PS C:\msys64\usr\local\ffmpeg\lib> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\msys64\usr\local\ffmpeg\lib>
```

### lib /def:avcodec-62.def /out:avcodec.lib /machine:x64
```powershell
lib /def:avcodec-62.def /out:avcodec.lib /machine:x64
lib /def:avdevice-62.def /out:avdevice.lib /machine:x64
lib /def:avfilter-11.def /out:avfilter.lib /machine:x64
lib /def:avformat-62.def /out:avformat.lib /machine:x64
lib /def:avutil-60.def /out:avutil.lib /machine:x64
lib /def:swresample-6.def /out:swresample.lib /machine:x64
lib /def:swscale-9.def /out:swscale.lib /machine:x64
```

```powershell
lib /def:avcodec-62.def /out:avcodec.lib /machine:x64; `
lib /def:avdevice-62.def /out:avdevice.lib /machine:x64; `
lib /def:avfilter-11.def /out:avfilter.lib /machine:x64; `
lib /def:avformat-62.def /out:avformat.lib /machine:x64; `
lib /def:avutil-60.def /out:avutil.lib /machine:x64; `
lib /def:swresample-6.def /out:swresample.lib /machine:x64; `
lib /def:swscale-9.def /out:swscale.lib /machine:x64;
```

```powershell
PS C:\msys64\usr\local\ffmpeg\lib> lib /def:avcodec-62.def /out:avcodec.lib /machine:x64; `
>> lib /def:avdevice-62.def /out:avdevice.lib /machine:x64; `
>> lib /def:avfilter-11.def /out:avfilter.lib /machine:x64; `
>> lib /def:avformat-62.def /out:avformat.lib /machine:x64; `
>> lib /def:avutil-60.def /out:avutil.lib /machine:x64; `
>> lib /def:swresample-6.def /out:swresample.lib /machine:x64; `
>> lib /def:swscale-9.def /out:swscale.lib /machine:x64;
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avcodec.lib and object avcodec.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avdevice.lib and object avdevice.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avfilter.lib and object avfilter.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avformat.lib and object avformat.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avutil.lib and object avutil.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library swresample.lib and object swresample.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library swscale.lib and object swscale.exp
```

cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
```powershell
PS C:\msys64\usr\local\ffmpeg\lib> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\msys64\usr\local\ffmpeg\lib>
```

```powershell
lib /def:avcodec-61.def /out:avcodec.lib /machine:x64; `
lib /def:avdevice-61.def /out:avdevice.lib /machine:x64; `
lib /def:avfilter-10.def /out:avfilter.lib /machine:x64; `
lib /def:avformat-61.def /out:avformat.lib /machine:x64; `
lib /def:avutil-59.def /out:avutil.lib /machine:x64; `
lib /def:postproc-58.def /out:postproc.lib /machine:x64; `
lib /def:swresample-5.def /out:swresample.lib /machine:x64; `
lib /def:swscale-8.def /out:swscale.lib /machine:x64;
```


```
PS C:\msys64\usr\local\ffmpeg\lib> lib /def:avcodec-61.def /out:avcodec.lib /machine:x64; `
>> lib /def:avdevice-61.def /out:avdevice.lib /machine:x64; `
>> lib /def:avfilter-10.def /out:avfilter.lib /machine:x64; `
>> lib /def:avformat-61.def /out:avformat.lib /machine:x64; `
>> lib /def:avutil-59.def /out:avutil.lib /machine:x64; `
>> lib /def:postproc-58.def /out:postproc.lib /machine:x64; `
>> lib /def:swresample-5.def /out:swresample.lib /machine:x64; `
>> lib /def:swscale-8.def /out:swscale.lib /machine:x64;
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avcodec.lib and object avcodec.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avdevice.lib and object avdevice.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avfilter.lib and object avfilter.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avformat.lib and object avformat.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library avutil.lib and object avutil.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library postproc.lib and object postproc.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library swresample.lib and object swresample.exp
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library swscale.lib and object swscale.exp
PS C:\msys64\usr\local\ffmpeg\lib> ls


    Directory: C:\msys64\usr\local\ffmpeg\lib


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2025/5/15     23:48                pkgconfig
-a----         2025/5/15     23:48           4316 avcodec-61.def
-a----         2025/5/16      0:50          24019 avcodec.exp
-a----         2025/5/16      0:50          40496 avcodec.lib
-a----         2025/5/15     23:48            453 avdevice-61.def
-a----         2025/5/16      0:50           2945 avdevice.exp
-a----         2025/5/16      0:50           5372 avdevice.lib
-a----         2025/5/15     23:48           1893 avfilter-10.def
-a----         2025/5/16      0:50          10365 avfilter.exp
-a----         2025/5/16      0:50          17792 avfilter.lib
-a----         2025/5/15     23:48           3699 avformat-61.def
-a----         2025/5/16      0:50          21535 avformat.exp
-a----         2025/5/16      0:50          36542 avformat.lib
-a----         2025/5/15     23:48          14348 avutil-59.def
-a----         2025/5/16      0:50          80643 avutil.exp
-a----         2025/5/16      0:50         134658 avutil.lib
-a----         2025/5/15     23:48         114486 libavcodec.dll.a
-a----         2025/5/15     23:48          11416 libavdevice.dll.a
-a----         2025/5/15     23:48          46018 libavfilter.dll.a
-a----         2025/5/15     23:48         106034 libavformat.dll.a
-a----         2025/5/15     23:48         398602 libavutil.dll.a
-a----         2025/5/15     23:48           7514 libpostproc.dll.a
-a----         2025/5/15     23:48          15964 libswresample.dll.a
-a----         2025/5/15     23:48          21390 libswscale.dll.a
-a----         2025/5/15     23:48            223 postproc-58.def
-a----         2025/5/16      0:50           1939 postproc.exp
-a----         2025/5/16      0:50           3702 postproc.lib
-a----         2025/5/15     23:48            475 swresample-5.def
-a----         2025/5/16      0:50           3492 swresample.exp
-a----         2025/5/16      0:50           6432 swresample.lib
-a----         2025/5/15     23:48            723 swscale-8.def
-a----         2025/5/16      0:50           4741 swscale.exp
-a----         2025/5/16      0:50           8308 swscale.lib
```

## Install pkgconf

### pacman -S mingw-w64-x86_64-pkgconf
```
eric@DELL MINGW64 ~
$ pacman -S mingw-w64-x86_64-pkgconf
warning: mingw-w64-x86_64-pkgconf-1~2.3.0-1 is up to date -- reinstalling
resolving dependencies...
looking for conflicting packages...

Packages (1) mingw-w64-x86_64-pkgconf-1~2.3.0-1

Total Installed Size:  0.51 MiB
Net Upgrade Size:      0.00 MiB

:: Proceed with installation? [Y/n] y
(1/1) checking keys in keyring                               [###############################] 100%
(1/1) checking package integrity                             [###############################] 100%
(1/1) loading package files                                  [###############################] 100%
(1/1) checking for file conflicts                            [###############################] 100%
(1/1) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/1) reinstalling mingw-w64-x86_64-pkgconf                  [###############################] 100%
```

which pkg-config
```
eric@DELL MINGW64 ~
$ which pkg-config
/mingw64/bin/pkg-config
```

which pkgconf
```
eric@DELL MINGW64 ~
$ which pkgconf
/mingw64/bin/pkgconf
```

pkg-config --version
```
eric@DELL MINGW64 ~
$ pkg-config --version
2.3.0
```

pkgconf --version
```
eric@DELL MINGW64 ~
$ pkgconf --version
2.3.0
```

## Install harfbuzz

### pacman -S mingw-w64-x86_64-harfbuzz
```
$ pacman -S mingw-w64-x86_64-harfbuzz
resolving dependencies...
looking for conflicting packages...
warning: dependency cycle detected:
warning: mingw-w64-x86_64-freetype will be installed before its mingw-w64-x86_64-harfbuzz dependency

Packages (9) mingw-w64-x86_64-brotli-1.1.0-4  mingw-w64-x86_64-freetype-2.13.3-1
             mingw-w64-x86_64-glib2-2.84.1-2  mingw-w64-x86_64-graphite2-1.3.14-3
             mingw-w64-x86_64-libpng-1.6.48-1  mingw-w64-x86_64-pcre2-10.45-1
             mingw-w64-x86_64-python-packaging-24.2-1  mingw-w64-x86_64-wineditline-2.208-1
             mingw-w64-x86_64-harfbuzz-11.2.1-1

Total Download Size:    9.79 MiB
Total Installed Size:  67.08 MiB

:: Proceed with installation? [Y/n] y
:: Retrieving packages...
 mingw-w64-x86_64-brotli-...   419.9 KiB   381 KiB/s 00:01 [##############################] 100%
 mingw-w64-x86_64-harfbuz...  1761.0 KiB  1416 KiB/s 00:01 [##############################] 100%
 mingw-w64-x86_64-glib2-2...     5.0 MiB  3.96 MiB/s 00:01 [##############################] 100%
 mingw-w64-x86_64-freetyp...   613.9 KiB   412 KiB/s 00:01 [##############################] 100%
 mingw-w64-x86_64-libpng-...   394.8 KiB   929 KiB/s 00:00 [##############################] 100%
 mingw-w64-x86_64-graphit...   141.2 KiB   274 KiB/s 00:01 [##############################] 100%
 mingw-w64-x86_64-python-...   124.8 KiB   232 KiB/s 00:01 [##############################] 100%
 mingw-w64-x86_64-winedit...    60.0 KiB   197 KiB/s 00:00 [##############################] 100%
 mingw-w64-x86_64-pcre2-1...  1354.0 KiB   333 KiB/s 00:04 [##############################] 100%
 Total (9/9)                     9.8 MiB  2.35 MiB/s 00:04 [##############################] 100%
(9/9) checking keys in keyring                             [##############################] 100%
(9/9) checking package integrity                           [##############################] 100%
(9/9) loading package files                                [##############################] 100%
(9/9) checking for file conflicts                          [##############################] 100%
(9/9) checking available disk space                        [##############################] 100%
:: Processing package changes...
(1/9) installing mingw-w64-x86_64-brotli                   [##############################] 100%
(2/9) installing mingw-w64-x86_64-libpng                   [##############################] 100%
(3/9) installing mingw-w64-x86_64-freetype                 [##############################] 100%
(4/9) installing mingw-w64-x86_64-wineditline              [##############################] 100%
(5/9) installing mingw-w64-x86_64-pcre2                    [##############################] 100%
(6/9) installing mingw-w64-x86_64-python-packaging         [##############################] 100%
(7/9) installing mingw-w64-x86_64-glib2                    [##############################] 100%
(8/9) installing mingw-w64-x86_64-graphite2                [##############################] 100%
(9/9) installing mingw-w64-x86_64-harfbuzz                 [##############################] 100%

eric@DELL MINGW64 ~
```

### pkg-config --modversion harfbuzz
```
eric@DELL MINGW64 ~
$ pkg-config --modversion harfbuzz
11.2.1
```

### pkg-config --modversion harfbuzz
```
eric@DELL MINGW64 ~
$ pkg-config --modversion harfbuzz
11.2.1
```


pacman -Qs mingw-w64-x86_64-harfbuzz
```
eric@DELL MINGW64 ~
$ pacman -Qs mingw-w64-x86_64-harfbuzz
local/mingw-w64-x86_64-harfbuzz 11.2.1-1
    OpenType text shaping engine (mingw-w64)
```

pkgconf --modversion freetype2
```
eric@DELL MINGW64 ~
$ pkgconf --modversion freetype2
26.2.20
```

lib
```
c:\msys64\mingw64\lib\
libfreetype.a
libfreetype.dll.a
```


```
![系统错误](image-url)

**MyFreeTypeAppCpp.exe - 系统错误**

由于找不到 libpng16-16.dll，无法继续执行代码。重新安装程序可能会解决此问题。

[确定]
```

加入路径
```
c:\msys64\mingw64\bin\
```

```
# MyFreeTypeAppCpp.exe - 无法找到入口

无法定位程序输入点 hb_ot_tags_from_script_and_language 于动态链接库 c:\msys64\mingw64\bin\libfreetype-6.dll 上。

[确定]
```


```
# MyFreeTypeAppCpp.exe - 无法找到入口

无法定位程序输入点 `hb_ot_tags_from_script_and_language` 于动态链接库 `c:\msys64\mingw64\bin\libfreetype-6.dll` 上。

[确定]
```

```
libharfbuzz.dll.a
```

```
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
```

```powershell
eric@DELL MINGW64 /d
$ cd /d/work/msys2_work/libconvert/01/

eric@DELL MINGW64 /d/work/msys2_work/libconvert/01
$ pwd
/d/work/msys2_work/libconvert/01

eric@DELL MINGW64 /d/work/msys2_work/libconvert/01
$
```

```
gendef freetype.dll
gendef libfreetype-6.dll
```

gendef libfreetype-6.dll
```
eric@DELL MINGW64 /d/work/msys2_work/libconvert/01
$ gendef libfreetype-6.dll
 * [libfreetype-6.dll] Found PE+ image

eric@DELL MINGW64 /d/work/msys2_work/libconvert/01
$ ls
libfreetype-6.def  libfreetype-6.dll
```

cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
```powershell
PS C:\Users\eric> cd d:\work\msys2_work\libconvert\01\
PS D:\work\msys2_work\libconvert\01> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
```

lib /def:libfreetype-6.def /out:libfreetype.lib /machine:x64
```
PS D:\work\msys2_work\libconvert\01> lib /def:libfreetype-6.def /out:libfreetype.lib /machine:x64
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library libfreetype.lib and object libfreetype.exp
PS D:\work\msys2_work\libconvert\01> ls


    Directory: D:\work\msys2_work\libconvert\01


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/5/19      1:31           4718 libfreetype-6.def
-a----         2024/8/13     13:39         787954 libfreetype-6.dll
-a----         2025/5/19      1:35          29826 libfreetype.exp
-a----         2025/5/19      1:35          50868 libfreetype.lib
```

lib /def:libfreetype-6.def /out:libfreetype.dll.lib /machine:x64
```
PS D:\work\msys2_work\libconvert\01> lib /def:libfreetype-6.def /out:libfreetype.dll.lib /machine:x64
Microsoft (R) Library Manager Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

   Creating library libfreetype.dll.lib and object libfreetype.dll.exp
PS D:\work\msys2_work\libconvert\01> ls


    Directory: D:\work\msys2_work\libconvert\01


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2025/5/19      1:31           4718 libfreetype-6.def
-a----         2024/8/13     13:39         787954 libfreetype-6.dll
-a----         2025/5/19      1:39          29830 libfreetype.dll.exp
-a----         2025/5/19      1:39          50868 libfreetype.dll.lib
-a----         2025/5/19      1:35          29826 libfreetype.exp
-a----         2025/5/19      1:35          50868 libfreetype.lib
```

```
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
```

```
C:\Users\<YourUsername>\AppData\Local\Programs\Microsoft VS Code\Code.exe
c:\Users\eric\AppData\Local\Programs\Microsoft VS Code\
c:/Users/eric/AppData/Local/Programs/Microsoft VS Code/
export PATH=$PATH:/c/Users/<YourUsername>/AppData/Local/Programs/Microsoft\ VS\ Code/bin
export PATH=$PATH:/c/Users/eric/AppData/Local/Programs/Microsoft VS Code
source ~/.bashrc
```

which code
```
eric@DELL MINGW64 ~
$ which code
/c/Users/eric/AppData/Local/Programs/Microsoft VS Code/bin/code
```
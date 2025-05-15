# MSYS2

## Link

-  [Software Distribution and Building Platform for Windows](https://www.msys2.org/).

## Intall MSYS2

pacman -Ss gcc | grep mingw
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

pacman -S mingw-w64-x86_64-gcc
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

```
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

gcc --version
```
eric@DELL MINGW64 ~
$ gcc --version
gcc.exe (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

g++ --version
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

pacman -Ss fortran | grep mingw
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

pacman -S mingw-w64-x86_64-gcc-fortran
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

gfortran --version
```
eric@DELL MINGW64 ~
$ gfortran --version
GNU Fortran (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

```

pacman -S git
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

git --version
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

git clone https://code.videolan.org/videolan/x264.git
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

git clone https://git.ffmpeg.org/ffmpeg.git
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

# libpsl

## Link

- [github libpsl](https://github.com/rockdaboot/libpsl).

git clone git@github.com:rockdaboot/libpsl.git
```
PS D:\work\libpsl_work> git clone git@github.com:rockdaboot/libpsl.git
Cloning into 'libpsl'...
remote: Enumerating objects: 5102, done.
remote: Counting objects: 100% (602/602), done.
remote: Compressing objects: 100% (246/246), done.
remote: Total 5102 (delta 295), reused 546 (delta 275), pack-reused 4500 (from 1)
Receiving objects: 100% (5102/5102), 5.31 MiB | 677.00 KiB/s, done.
Resolving deltas: 100% (2590/2590), done.
```


```
meson c:/dev/libpsl --buildtype=release --prefix=c:/deps/libpsl `
      --backend=vs2022 `
      -Dpsl_file=C:/deps/libpsl/list/public_suffix_list.dat `
      -Dpsl_testfile=C:/deps/libpsl/list/tests/tests.txt
```


```
meson D:/work/libpsl_work/libpsl --buildtype=release --prefix=C:/dev/libpsl `
      --backend=vs2022 `
      -Dpsl_file=D:/work/libpsl_work/libpsl/list/public_suffix_list.dat `
      -Dpsl_testfile=D:/work/libpsl_work/libpsl/list/tests/tests.txt `
      -Dicu_include_dir=C:/dev/icu/include `
      -Dicu_library=C:/dev/icu/lib/icuuc.lib
```

```
meson setup D:/work/libpsl_work/libpsl --buildtype=release --prefix=C:/dev/libpsl `
      --backend=vs2022 `
      -Dpsl_file=D:/work/libpsl_work/libpsl/list/public_suffix_list.dat `
      -Dpsl_testfile=D:/work/libpsl_work/libpsl/list/tests/tests.txt `
      -Druntime=libicu
```

```
meson setup D:/work/libpsl_work/libpsl --buildtype=release --prefix=C:/dev/libpsl `
      --backend=vs2022 `
      -Dpsl_file=D:/work/libpsl_work/libpsl/list/public_suffix_list.dat `
      -Dpsl_testfile=D:/work/libpsl_work/libpsl/list/tests/tests.txt `
      -Druntime=libicu
```




```
PS D:\work\libpsl_work\libpsl\build> meson setup D:/work/libpsl_work/libpsl --buildtype=release --prefix=C:/dev/libpsl `
>>       --backend=vs2022 `
>>       -Dpsl_file=D:/work/libpsl_work/libpsl/list/public_suffix_list.dat `
>>       -Dpsl_testfile=D:/work/libpsl_work/libpsl/list/tests/tests.txt `
>>       -Druntime=libicu
The Meson build system
Version: 1.8.0
Source dir: D:\work\libpsl_work\libpsl
Build dir: D:\work\libpsl_work\libpsl\build
Build type: native build
Project name: libpsl
Project version: 0.21.5
Activating VS 17.13.7
C compiler for the host machine: cl (msvc 19.43.34810 "Microsoft (R) C/C++ Optimizing Compiler Version 19.43.34810 for x64")
C linker for the host machine: link link 14.43.34810.0
Host machine cpu family: x86_64
Host machine cpu: x86_64
Found pkg-config: YES (c:\msys64\mingw64\bin\pkg-config.EXE) 2.3.0
Found CMake: C:\Program Files\CMake\bin\cmake.EXE (4.0.2)
Run-time dependency icu-uc found: NO (tried pkgconfig and cmake)
WARNING: Could not find and exact match for the CMake dependency ICU.

However, Meson found the following partial matches:

    ['ICU::uc']

Using imported is recommended, since this approach is less error prone
and better supported by Meson. Consider explicitly specifying one of
these in the dependency call with:

    dependency('ICU', modules: ['ICU::<name>', ...])

Meson will now continue to use the old-style ICU_LIBRARIES CMake
variables to extract the dependency information since no explicit
target is currently specified.


Run-time dependency icu found: YES 77.1
C++ compiler for the host machine: cl (msvc 19.43.34810 "Microsoft (R) C/C++ Optimizing Compiler Version 19.43.34810 for x64")
C++ linker for the host machine: link link 14.43.34810.0
Library ws2_32 found: YES
Check usable header "unistd.h" : NO
Check usable header "stdint.h" : YES
Check usable header "dirent.h" : NO
Checking for function "clock_gettime" : NO
Checking for function "fmemopen" : NO
Checking for function "nl_langinfo" : NO
Compiler for C supports function attribute visibility: NO
Configuring config.h using configuration
Program python3 found: YES (c:\msys64\mingw64\bin\python3.EXE)
Header "stdio.h" has symbol "snprintf" : YES
Configuring libpsl.h using configuration
Build targets in project: 14

libpsl 0.21.5

  User defined options
    backend     : vs2022
    buildtype   : release
    prefix      : C:/dev/libpsl
    psl_file    : D:/work/libpsl_work/libpsl/list/public_suffix_list.dat
    psl_testfile: D:/work/libpsl_work/libpsl/list/tests/tests.txt
    runtime     : libicu
```
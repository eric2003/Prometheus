# Boost C++ Libraries

## Boost C++ Libraries

-  [Welcome to Boost.org!](https://www.boost.org/).
-  [Boost download](https://www.boost.org/users/download/).
-  [Boost-github](https://github.com/boostorg/boost/).


## Install

-  [How to Install C++ Boost Libraries on Windows?](https://www.geeksforgeeks.org/how-to-install-c-boost-libraries-on-windows/).
-  [027 - (SETUP) Install Boost C++ Library on Windows (2020, Aug. 22)](https://www.youtube.com/watch?v=5afpq2TkOHc/).
-  [B2 User Manual](https://www.boost.org/doc/libs/1_85_0/tools/build/doc/html/index.html).
-  [B2 Tutorial](https://boostorg.github.io/build/tutorial.html).


install
```
C:\dev\boost_1_85_0\tools\build\src\engine>dir *.exe
 驱动器 C 中的卷没有标签。
 卷的序列号是 6E19-00BE

 C:\dev\boost_1_85_0\tools\build\src\engine 的目录

2024/04/16  11:18           506,368 b2.exe
               1 个文件        506,368 字节
               0 个目录 101,801,897,984 可用字节

Generating Boost.Build configuration in project-config.jam for msvc...

Bootstrapping is done. To build, run:

    .\b2

To adjust configuration, edit 'project-config.jam'.
Further information:

    - Command line help:
    .\b2 --help

    - Getting started guide:
    http://boost.org/more/getting_started/windows.html

    - Boost.Build documentation:
    http://www.boost.org/build/
```

Info
```
...updated 3214 targets...


The Boost C++ Libraries were successfully built!

The following directory should be added to compiler include paths:

    C:\dev\boost_1_85_0

The following directory should be added to linker library paths:

    C:\dev\boost_1_85_0\stage\lib
```

.\b2 --help
```
PS C:\dev\boost_1_85_0> .\b2 --help
B2 5.1.0 (OS=NT, jobs=16)

Project-specific help:

   Project has jamfile at Jamroot

Usage:

  b2 [options] [properties] [install|stage]

  Builds and installs Boost.

Targets and Related Options:

  install                 Install headers and compiled library files to the
  =======                 configured locations (below).

  --prefix=<PREFIX>       Install architecture independent files here.
                          Default: C:\Boost on Windows
                          Default: /usr/local on Unix, Linux, etc.

  --exec-prefix=<EPREFIX> Install architecture dependent files here.
                          Default: <PREFIX>

  --libdir=<LIBDIR>       Install library files here.
                          Default: <EPREFIX>/lib

  --includedir=<HDRDIR>   Install header files here.
                          Default: <PREFIX>/include

  --cmakedir=<CMAKEDIR>   Install CMake configuration files here.
                          Default: <LIBDIR>/cmake

  --no-cmake-config       Do not install CMake configuration files.

  stage                   Build and install only compiled library files to the
  =====                   stage directory.

  --stagedir=<STAGEDIR>   Install library files here
                          Default: ./stage

Other Options:

  --build-type=<type>     Build the specified pre-defined set of variations of
                          the libraries. Note, that which variants get built
                          depends on what each library supports.

                              -- minimal -- (default) Builds a minimal set of
                              variants. On Windows, these are static
                              multithreaded libraries in debug and release
                              modes, using shared runtime. On Linux, these are
                              static and shared multithreaded libraries in
                              release mode.

                              -- complete -- Build all possible variations.

  --build-dir=DIR         Build in this location instead of building within
                          the distribution tree. Recommended!

  --show-libraries        Display the list of Boost libraries that require
                          build and installation steps, and then exit.

  --layout=<layout>       Determine whether to choose library names and header
                          locations such that multiple versions of Boost or
                          multiple compilers can be used on the same system.

                              -- versioned -- Names of boost binaries include
                              the Boost version number, name and version of
                              the compiler and encoded build properties. Boost
                              headers are installed in a subdirectory of
                              <HDRDIR> whose name contains the Boost version
                              number.

                              -- tagged -- Names of boost binaries include the
                              encoded build properties such as variant and
                              threading, but do not including compiler name
                              and version, or Boost version. This option is
                              useful if you build several variants of Boost,
                              using the same compiler.

                              -- system -- Binaries names do not include the
                              Boost version number or the name and version
                              number of the compiler. Boost headers are
                              installed directly into <HDRDIR>. This option is
                              intended for system integrators building
                              distribution packages.

                          The default value is 'versioned' on Windows, and
                          'system' on Unix.

  --buildid=ID            Add the specified ID to the name of built libraries.
                          The default is to not add anything.

  --python-buildid=ID     Add the specified ID to the name of built libraries
                          that depend on Python. The default is to not add
                          anything. This ID is added in addition to --buildid.

  --help                  This message.

  --with-<library>        Build and install the specified <library>. If this
                          option is used, only libraries specified using this
                          option will be built.

  --without-<library>     Do not build, stage, or install the specified
                          <library>. By default, all libraries are built.

Properties:

  toolset=toolset         Indicate the toolset to build with.

  variant=debug|release   Select the build variant

  link=static|shared      Whether to build static or shared libraries

  threading=single|multi  Whether to build single or multithreaded binaries

  runtime-link=static|shared
                          Whether to link to static or shared C and C++
                          runtime.


General command line usage:

    b2 [options] [properties] [targets]

  Options, properties and targets can be specified in any order.

Important Options:

  * --clean Remove targets instead of building
  * -a Rebuild everything
  * -n Don't execute the commands, only print them
  * -d+2 Show commands as they are executed
  * -d0 Suppress all informational messages
  * -q Stop at first error
  * --reconfigure Rerun all configuration checks
  * --durations[=N] Report top N targets by execution time
  * --debug-configuration Diagnose configuration
  * --debug-building Report which targets are built with what properties
  * --debug-generator Diagnose generator search/execution

Further Help:

   The following options can be used to obtain additional documentation.

  * --help-options Print more obscure command line options.
  * --help-internal B2 implementation details.
  * --help-doc-options Implementation details doc formatting.

...found 1 target...
```
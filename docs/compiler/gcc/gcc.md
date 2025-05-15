# GCC, the GNU Compiler Collection

gcc, llvm, and clang are all compiler toolchains used to compile source code into executable machine code. They are open-source and widely used for compiling code in various programming languages.

## Link
-  [gcc official website](https://gcc.gnu.org/).


## GCC 15.1.0

-  [gcc-15.1.0](https://ftp.fu-berlin.de/unix/languages/gcc/releases/gcc-15.1.0/).
-  [gcc-15.1.0.tar.gz](https://ftp.fu-berlin.de/unix/languages/gcc/releases/gcc-15.1.0/gcc-15.1.0.tar.gz).
-  [[xim+]: 最新gcc15.1.0发布, 一键从源码构建 -- c++23 import std启动](https://juejin.cn/post/7498919779417260095).
-  [综合来说，几大主流 C++ 编译器（ICC / GCC / Clang / VC++）究竟孰优孰劣](https://www.zhihu.com/question/29156753/answer/3588358098).
-  [C++ Standards Support in GCC](https://gcc.gnu.org/projects/cxx-status.html).
-  [Configure](https://gcc.gnu.org/onlinedocs/libstdc%2B%2B/manual/configure.html).


## ./configure --help
```
eric@fantasy:~/work/compiler/gcc_work/gcc-15.1.0$ ./configure --help
`configure' configures this package to adapt to many kinds of systems.

Usage: ./configure [OPTION]... [VAR=VALUE]...

To assign environment variables (e.g., CC, CFLAGS...), specify them as
VAR=VALUE.  See below for descriptions of some of the useful variables.

Defaults for the options are specified in brackets.

Configuration:
  -h, --help              display this help and exit
      --help=short        display options specific to this package
      --help=recursive    display the short help of all the included packages
  -V, --version           display version information and exit
  -q, --quiet, --silent   do not print `checking ...' messages
      --cache-file=FILE   cache test results in FILE [disabled]
  -C, --config-cache      alias for `--cache-file=config.cache'
  -n, --no-create         do not create output files
      --srcdir=DIR        find the sources in DIR [configure dir or `..']

Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]

By default, `make install' will install all the files in
`/usr/local/bin', `/usr/local/lib' etc.  You can specify
an installation prefix other than `/usr/local' using `--prefix',
for instance `--prefix=$HOME'.

For better control, use the options below.

Fine tuning of the installation directories:
  --bindir=DIR            user executables [EPREFIX/bin]
  --sbindir=DIR           system admin executables [EPREFIX/sbin]
  --libexecdir=DIR        program executables [EPREFIX/libexec]
  --sysconfdir=DIR        read-only single-machine data [PREFIX/etc]
  --sharedstatedir=DIR    modifiable architecture-independent data [PREFIX/com]
  --localstatedir=DIR     modifiable single-machine data [PREFIX/var]
  --libdir=DIR            object code libraries [EPREFIX/lib]
  --includedir=DIR        C header files [PREFIX/include]
  --oldincludedir=DIR     C header files for non-gcc [/usr/include]
  --datarootdir=DIR       read-only arch.-independent data root [PREFIX/share]
  --datadir=DIR           read-only architecture-independent data [DATAROOTDIR]
  --infodir=DIR           info documentation [DATAROOTDIR/info]
  --localedir=DIR         locale-dependent data [DATAROOTDIR/locale]
  --mandir=DIR            man documentation [DATAROOTDIR/man]
  --docdir=DIR            documentation root [DATAROOTDIR/doc/PACKAGE]
  --htmldir=DIR           html documentation [DOCDIR]
  --dvidir=DIR            dvi documentation [DOCDIR]
  --pdfdir=DIR            pdf documentation [DOCDIR]
  --psdir=DIR             ps documentation [DOCDIR]

Program names:
  --program-prefix=PREFIX            prepend PREFIX to installed program names
  --program-suffix=SUFFIX            append SUFFIX to installed program names
  --program-transform-name=PROGRAM   run sed PROGRAM on installed program names

System types:
  --build=BUILD     configure for building on BUILD [guessed]
  --host=HOST       cross-compile to build programs to run on HOST [BUILD]
  --target=TARGET   configure for building compilers for TARGET [HOST]

Optional Features:
  --disable-option-checking  ignore unrecognized --enable/--with options
  --disable-FEATURE       do not include FEATURE (same as --enable-FEATURE=no)
  --enable-FEATURE[=ARG]  include FEATURE [ARG=yes]
  --enable-as-accelerator-for=ARG
                          build as offload target compiler. Specify offload
                          host triple by ARG
  --enable-offload-targets=LIST
                          enable offloading to devices from comma-separated
                          LIST of TARGET[=DIR]. Use optional path to find
                          offload target compiler during the build
  --enable-offload-defaulted
		If enabled, configured but not installed offload compilers and
		libgomp plugins are silently ignored.  Useful for distribution
		compilers where those are in separate optional packages.

  --enable-gold[=ARG]     build gold [ARG={default,yes,no}]
  --enable-ld[=ARG]       build ld [ARG={default,yes,no}]
  --disable-gprofng       do not build gprofng
  --enable-compressed-debug-sections={all,gas,gold,ld,none}
                          Enable compressed debug sections for gas, gold or ld
                          by default
  --enable-default-compressed-debug-sections-algorithm={zlib,zstd}
                          Default compression algorithm for
                          --enable-compressed-debug-sections.
  --enable-year2038       enable support for timestamps past the year 2038
  --disable-libquadmath   do not build libquadmath directory
  --disable-libquadmath-support
                          disable libquadmath support for Fortran
  --enable-libada         build libada directory
  --enable-libgm2         build libgm2 directory
  --enable-libssp         build libssp directory
  --disable-libstdcxx     do not build libstdc++-v3 directory
  --enable-bootstrap      enable bootstrapping [yes if native build]
  --enable-pgo-build[=lto]
                          enable the PGO build
  --disable-isl-version-check
                          disable check for isl version
  --enable-lto            enable link time optimization support
  --enable-linker-plugin-configure-flags=FLAGS
                          additional flags for configuring linker plugins
                          [none]
  --enable-linker-plugin-flags=FLAGS
                          additional flags for configuring and building linker
                          plugins [none]
  --enable-host-pie       build position independent host executables
  --enable-host-shared    build host code as shared libraries
  --enable-libgdiagnostics
                          build libgdiagnostics shared library
  --enable-stage1-languages[=all]
                          choose additional languages to build during stage1.
                          Mostly useful for compiler development
  --enable-objc-gc        enable use of Boehm's garbage collector with the GNU
                          Objective-C runtime
  --enable-vtable-verify  Enable vtable verification feature
  --enable-serial-[{host,target,build}-]configure
                          force sequential configuration of sub-packages for
                          the host, target or build machine, or all
                          sub-packages
  --enable-maintainer-mode
                          enable make rules and dependencies not useful (and
                          sometimes confusing) to the casual installer
  --enable-stage1-checking[=all]
                          choose additional checking for stage1 of the
                          compiler
  --enable-werror         enable -Werror in bootstrap stage2 and later

Optional Packages:
  --with-PACKAGE[=ARG]    use PACKAGE [ARG=yes]
  --without-PACKAGE       do not use PACKAGE (same as --with-PACKAGE=no)
  --with-build-libsubdir=DIR  Directory where to find libraries for build system
  --with-system-zlib      use installed libz
  --with-zstd             Support zstd compressed debug sections
                          (default=auto)
  --with-mpc=PATH         specify prefix directory for installed MPC package.
                          Equivalent to --with-mpc-include=PATH/include plus
                          --with-mpc-lib=PATH/lib
  --with-mpc-include=PATH specify directory for installed MPC include files
  --with-mpc-lib=PATH     specify directory for the installed MPC library
  --with-mpfr=PATH        specify prefix directory for installed MPFR package.
                          Equivalent to --with-mpfr-include=PATH/include plus
                          --with-mpfr-lib=PATH/lib
  --with-mpfr-include=PATH
                          specify directory for installed MPFR include files
  --with-mpfr-lib=PATH    specify directory for the installed MPFR library
  --with-gmp=PATH         specify prefix directory for the installed GMP
                          package. Equivalent to
                          --with-gmp-include=PATH/include plus
                          --with-gmp-lib=PATH/lib
  --with-gmp-include=PATH specify directory for installed GMP include files
  --with-gmp-lib=PATH     specify directory for the installed GMP library
  --with-stage1-libs=LIBS libraries for stage1
  --with-static-standard-libraries
                          use -static-libstdc++ and -static-libgcc
                          (default=auto)
  --with-stage1-ldflags=FLAGS
                          linker flags for stage1
  --with-boot-libs=LIBS   libraries for stage2 and later
  --with-boot-ldflags=FLAGS
                          linker flags for stage2 and later
  --with-isl=PATH         Specify prefix directory for the installed isl
                          package. Equivalent to
                          --with-isl-include=PATH/include plus
                          --with-isl-lib=PATH/lib
  --with-isl-include=PATH Specify directory for installed isl include files
  --with-isl-lib=PATH     Specify the directory for the installed isl library
  --with-target-bdw-gc=PATHLIST
                          specify prefix directory for installed bdw-gc
                          package. Equivalent to
                          --with-target-bdw-gc-include=PATH/include plus
                          --with-target-bdw-gc-lib=PATH/lib
  --with-target-bdw-gc-include=PATHLIST
                          specify directories for installed bdw-gc include
                          files
  --with-target-bdw-gc-lib=PATHLIST
                          specify directories for installed bdw-gc library
  --with-gcc-major-version-only
                          use only GCC major number in filesystem paths
  --with-build-sysroot=SYSROOT
                          use sysroot as the system root during the build
  --with-debug-prefix-map='A=B C=D ...'
                          map A to B, C to D ... in debug information
  --with-build-config='NAME NAME2...'
                          use config/NAME.mk build configuration
  --with-build-time-tools=PATH
                          use given path to find target tools during the build

Some influential environment variables:
  CC          C compiler command
  CFLAGS      C compiler flags
  LDFLAGS     linker flags, e.g. -L<lib dir> if you have libraries in a
              nonstandard directory <lib dir>
  LIBS        libraries to pass to the linker, e.g. -l<library>
  CPPFLAGS    (Objective) C/C++ preprocessor flags, e.g. -I<include dir> if
              you have headers in a nonstandard directory <include dir>
  CXX         C++ compiler command
  CXXFLAGS    C++ compiler flags
  build_configargs
              additional configure arguments for build directories
  host_configargs
              additional configure arguments for host directories
  target_configargs
              additional configure arguments for target directories
  AR          AR for the host
  AS          AS for the host
  DLLTOOL     DLLTOOL for the host
  DSYMUTIL    DSYMUTIL for the host
  LD          LD for the host
  LIPO        LIPO for the host
  NM          NM for the host
  RANLIB      RANLIB for the host
  STRIP       STRIP for the host
  WINDRES     WINDRES for the host
  WINDMC      WINDMC for the host
  OBJCOPY     OBJCOPY for the host
  OBJDUMP     OBJDUMP for the host
  OTOOL       OTOOL for the host
  READELF     READELF for the host
  CC_FOR_TARGET
              CC for the target
  CXX_FOR_TARGET
              CXX for the target
  GCC_FOR_TARGET
              GCC for the target
  GFORTRAN_FOR_TARGET
              GFORTRAN for the target
  GOC_FOR_TARGET
              GOC for the target
  GDC_FOR_TARGET
              GDC for the target
  GM2_FOR_TARGET
              GM2 for the target
  AR_FOR_TARGET
              AR for the target
  AS_FOR_TARGET
              AS for the target
  DLLTOOL_FOR_TARGET
              DLLTOOL for the target
  DSYMUTIL_FOR_TARGET
              DSYMUTIL for the target
  LD_FOR_TARGET
              LD for the target
  LIPO_FOR_TARGET
              LIPO for the target
  NM_FOR_TARGET
              NM for the target
  OBJCOPY_FOR_TARGET
              OBJCOPY for the target
  OBJDUMP_FOR_TARGET
              OBJDUMP for the target
  OTOOL_FOR_TARGET
              OTOOL for the target
  RANLIB_FOR_TARGET
              RANLIB for the target
  READELF_FOR_TARGET
              READELF for the target
  STRIP_FOR_TARGET
              STRIP for the target
  WINDRES_FOR_TARGET
              WINDRES for the target
  WINDMC_FOR_TARGET
              WINDMC for the target

Use these variables to override the choices made by `configure' or to help
it to find libraries and programs with nonstandard names/locations.

Report bugs to the package provider.
```

## gcc-15.1.0/gcc$ ./configure --help
```
eric@fantasy:~/work/compiler/gcc_work/gcc-15.1.0/gcc$ ./configure --help
`configure' configures this package to adapt to many kinds of systems.

Usage: ./configure [OPTION]... [VAR=VALUE]...

To assign environment variables (e.g., CC, CFLAGS...), specify them as
VAR=VALUE.  See below for descriptions of some of the useful variables.

Defaults for the options are specified in brackets.

Configuration:
  -h, --help              display this help and exit
      --help=short        display options specific to this package
      --help=recursive    display the short help of all the included packages
  -V, --version           display version information and exit
  -q, --quiet, --silent   do not print `checking ...' messages
      --cache-file=FILE   cache test results in FILE [disabled]
  -C, --config-cache      alias for `--cache-file=config.cache'
  -n, --no-create         do not create output files
      --srcdir=DIR        find the sources in DIR [configure dir or `..']

Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]

By default, `make install' will install all the files in
`/usr/local/bin', `/usr/local/lib' etc.  You can specify
an installation prefix other than `/usr/local' using `--prefix',
for instance `--prefix=$HOME'.

For better control, use the options below.

Fine tuning of the installation directories:
  --bindir=DIR            user executables [EPREFIX/bin]
  --sbindir=DIR           system admin executables [EPREFIX/sbin]
  --libexecdir=DIR        program executables [EPREFIX/libexec]
  --sysconfdir=DIR        read-only single-machine data [PREFIX/etc]
  --sharedstatedir=DIR    modifiable architecture-independent data [PREFIX/com]
  --localstatedir=DIR     modifiable single-machine data [PREFIX/var]
  --libdir=DIR            object code libraries [EPREFIX/lib]
  --includedir=DIR        C header files [PREFIX/include]
  --oldincludedir=DIR     C header files for non-gcc [/usr/include]
  --datarootdir=DIR       read-only arch.-independent data root [PREFIX/share]
  --datadir=DIR           read-only architecture-independent data [DATAROOTDIR]
  --infodir=DIR           info documentation [DATAROOTDIR/info]
  --localedir=DIR         locale-dependent data [DATAROOTDIR/locale]
  --mandir=DIR            man documentation [DATAROOTDIR/man]
  --docdir=DIR            documentation root [DATAROOTDIR/doc/PACKAGE]
  --htmldir=DIR           html documentation [DOCDIR]
  --dvidir=DIR            dvi documentation [DOCDIR]
  --pdfdir=DIR            pdf documentation [DOCDIR]
  --psdir=DIR             ps documentation [DOCDIR]

Program names:
  --program-prefix=PREFIX            prepend PREFIX to installed program names
  --program-suffix=SUFFIX            append SUFFIX to installed program names
  --program-transform-name=PROGRAM   run sed PROGRAM on installed program names

System types:
  --build=BUILD     configure for building on BUILD [guessed]
  --host=HOST       cross-compile to build programs to run on HOST [BUILD]
  --target=TARGET   configure for building compilers for TARGET [HOST]

Optional Features:
  --disable-option-checking  ignore unrecognized --enable/--with options
  --disable-FEATURE       do not include FEATURE (same as --enable-FEATURE=no)
  --enable-FEATURE[=ARG]  include FEATURE [ARG=yes]
  --enable-generated-files-in-srcdir
                          put copies of generated files in source dir intended
                          for creating source tarballs for users without
                          texinfo bison or flex
  --disable-largefile     omit support for large files
  --disable-build-format-warnings
                          don't use -Wformat while building GCC
  --enable-werror-always  enable -Werror despite compiler version
  --enable-checking[=LIST]
                          enable expensive run-time checks. With LIST, enable
                          only specific categories of checks. Categories are:
                          yes,no,all,none,release. Flags are:
                          assert,df,extra,fold,gc,gcac,gimple,misc,
                          rtlflag,rtl,runtime,tree,valgrind,types
  --enable-coverage[=LEVEL]
                          enable compiler's code coverage collection. Use to
                          measure compiler performance and locate unused parts
                          of the compiler. With LEVEL, specify optimization.
                          Values are opt, noopt, default is noopt
  --enable-gather-detailed-mem-stats
                          enable detailed memory allocation stats gathering
  --enable-valgrind-annotations
                          enable valgrind runtime interaction
  --enable-multilib       enable library support for multiple ABIs
  --enable-multiarch      enable support for multiarch paths
  --enable-__cxa_atexit   enable __cxa_atexit for C++
  --enable-decimal-float={no,yes,bid,dpd}
			enable decimal float extension to C.  Selecting 'bid'
			or 'dpd' choses which decimal floating point format
			to use
  --enable-fixed-point    enable fixed-point arithmetic extension to C
  --enable-threads[=LIB]  enable thread usage for target GCC, using LIB thread
                          package
  --enable-tls            enable or disable generation of tls code overriding
                          the assembler check for tls support
  --enable-vtable-verify  enable vtable verification feature
  --disable-analyzer      disable -fanalyzer static analyzer
  --enable-objc-gc        enable the use of Boehm's garbage collector with the
                          GNU Objective-C runtime
  --disable-shared        don't provide a shared libgcc
  --disable-gcov          don't provide libgcov and related host tools
  --enable-languages=LIST specify which front-ends to build
  --disable-rpath         do not hardcode runtime library paths
  --enable-sjlj-exceptions
                          arrange to use setjmp/longjmp exception handling
  --disable-win32-utf8-manifest
                          disable embedding a utf8 manifest on mingw hosts
  --enable-win32-utf8-manifest
                          enable embedding a utf8 manifest on mingw hosts
                          (default)
  --disable-nls           do not use Native Language Support
  --enable-secureplt      enable -msecure-plt by default for PowerPC
  --enable-mingw-wildcard Set whether to expand wildcard on command-line.
                          Default to platform configuration
  --enable-large-address-aware
                          Link mingw executables with --large-address-aware
  --enable-leading-mingw64-underscores
                          enable leading underscores on 64 bit mingw targets
  --enable-cld            enable -mcld by default for 32bit x86
  --enable-frame-pointer  enable -fno-omit-frame-pointer by default for x86
  --disable-win32-registry
                          disable lookup of installation paths in the Registry
                          on Windows hosts
  --enable-win32-registry enable registry lookup (default)
  --enable-win32-registry=KEY
                          use KEY instead of GCC version as the last portion
                          of the registry key
  --enable-shared[=PKGS]  build shared libraries [default=yes]
  --enable-static[=PKGS]  build static libraries [default=yes]
  --enable-fast-install[=PKGS]
                          optimize for fast installation [default=yes]
  --disable-libtool-lock  avoid locking (might break parallel builds)
  --enable-darwin-at-rpath
                          install libraries with @rpath/library-name, requires
                          rpaths to be added to executables
  --enable-ld[=ARG]       build ld [ARG={default,yes,no}]
  --enable-gold[=ARG]     build gold [ARG={default,yes,no}]
  --enable-gnu-indirect-function
                          enable the use of the @gnu_indirect_function to
                          glibc systems
  --enable-initfini-array	use .init_array/.fini_array sections
  --enable-comdat         enable COMDAT group support
  --enable-newlib-nano-formatted-io
                          Use nano version formatted IO

  --enable-standard-branch-protection
                          enable Branch Target Identification Mechanism,
                          Return Address Signing, and Guarded Control Stack by
                          default for AArch64
  --disable-standard-branch-protection
                          disable Branch Target Identification Mechanism,
                          Return Address Signing, and Guarded Control Stack by
                          default for AArch64


  --enable-fix-cortex-a53-835769
                          enable workaround for AArch64 Cortex-A53 erratum
                          835769 by default
  --disable-fix-cortex-a53-835769
                          disable workaround for AArch64 Cortex-A53 erratum
                          835769 by default


  --enable-fix-cortex-a53-843419
                          enable workaround for AArch64 Cortex-A53 erratum
                          843419 by default
  --disable-fix-cortex-a53-843419
                          disable workaround for AArch64 Cortex-A53 erratum
                          843419 by default

  --enable-gnu-unique-object
                          enable the use of the @gnu_unique_object ELF
                          extension on glibc systems
  --enable-linker-build-id
                          compiler will always pass --build-id to linker
  --enable-libssp         enable linking against libssp
  --enable-default-ssp    enable Stack Smashing Protection as default
  --enable-maintainer-mode
                          enable make rules and dependencies not useful (and
                          sometimes confusing) to the casual installer
  --enable-link-mutex     avoid linking multiple front-ends at once to avoid
                          thrashing on the build machine
  --enable-link-serialization
                          avoid linking multiple GCC front-ends at once using
                          make dependencies to avoid thrashing on the build
                          machine
  --enable-version-specific-runtime-libs
                          specify that runtime libraries should be installed
                          in a compiler-specific directory
  --enable-plugin         enable plugin support
  --enable-host-shared    build host code as shared libraries
  --enable-host-pie       build host code as PIE
  --enable-libgdiagnostics
                          build libgdiagnostics shared library
  --enable-host-bind-now  link host code as BIND_NOW
  --disable-libquadmath-support
                          disable libquadmath support for Fortran
  --enable-versioned-jit  enable versioned libgccjit build
  --enable-default-pie    enable Position Independent Executable as default
  --enable-cet            enable Intel CET in host libraries [default=auto]
  --enable-s390-excess-float-precision
                          on s390 targets, evaluate float with double
                          precision when in standards-conforming mode

Optional Packages:
  --with-PACKAGE[=ARG]    use PACKAGE [ARG=yes]
  --without-PACKAGE       do not use PACKAGE (same as --with-PACKAGE=no)
  --with-build-libsubdir=DIR  Directory where to find libraries for build system
  --with-local-prefix=DIR specifies directory to put local include
  --with-native-system-header-dir=dir
                          use dir as the directory to look for standard
                          system header files in.  Defaults to /usr/include.
  --with-build-sysroot=sysroot
                          use sysroot as the system root during the build
  --with-sysroot[=DIR]    search for usr/lib, usr/include, et al, within DIR
  --with-gxx-include-dir=DIR
                          specifies directory to put g++ header files
  --with-gxx-libcxx-include-dir=DIR
                          specifies directory to find libc++ header files
  --with-cpp-install-dir=DIR
                          install the user visible C preprocessor in DIR
                          (relative to PREFIX) as well as PREFIX/bin
  --with-gnu-ld           arrange to work with GNU ld
  --with-ld               arrange to use the specified ld (full pathname)
  --with-demangler-in-ld  try to use demangler in GNU ld
  --with-dsymutil         arrange to use the specified dsymutil (full
                          pathname)
  --with-gnu-as           arrange to work with GNU as
  --with-as               arrange to use the specified as (full pathname)
  --with-stack-clash-protection-guard-size=size
                          Set the default stack clash protection guard size
                          for specific targets as a power of two in bytes.
  --with-matchpd-partitions=num
                          Set the number of partitions to make for gimple and
                          generic when splitting match.pd. [default=10]
  --with-insnemit-partitions=num
                          Set the number of partitions of insn-emit.cc for
                          genemit and genrecog to create. [default=10]
  --with-dwarf2           force the default debug format to be DWARF 2 (or
                          later)
  --with-specs=SPECS      add SPECS to driver command-line processing
  --with-pkgversion=PKG   Use PKG in the version string in place of "GCC"
  --with-bugurl=URL       Direct users to URL to report a bug
  --with-documentation-root-url=URL
                          Root for documentation URLs
  --with-changes-root-url=URL
                          Root for GCC changes URLs
  --with-multilib-list    select multilibs (AArch64, ARM, AVR, nvptx, OR1K,
                          RISC-V, SH and x86-64 only)
  --with-multilib-generator
                          Multi-libs configuration string (RISC-V only)
  --with-zstd=PATH        specify prefix directory for installed zstd library.
                          Equivalent to --with-zstd-include=PATH/include plus
                          --with-zstd-lib=PATH/lib
  --with-zstd-include=PATH
                          specify directory for installed zstd include files
  --with-zstd-lib=PATH    specify directory for the installed zstd library
  --with-gnu-ld           assume the C compiler uses GNU ld default=no
  --with-libiconv-prefix[=DIR]  search for libiconv in DIR/include and DIR/lib
  --without-libiconv-prefix     don't search for libiconv in includedir and libdir
  --with-libiconv-type=TYPE     type of library to search for (auto/static/shared)
  --with-gcc-major-version-only
                          use only GCC major number in filesystem paths
  --with-libintl-prefix[=DIR]  search for libintl in DIR/include and DIR/lib
  --without-libintl-prefix     don't search for libintl in includedir and libdir
  --with-libintl-type=TYPE     type of library to search for (auto/static/shared)
  --with-pic              try to use only PIC/non-PIC objects [default=use
                          both]
  --with-gnu-ld           assume the C compiler uses GNU ld [default=no]
  --with-darwin-extra-rpath=[ARG]
                          Specify a runpath directory, additional to those
                          provided by the compiler
  --with-plugin-ld=[ARG]  specify the plugin linker
  --with-glibc-version=M.N
                          assume GCC used with glibc version M.N or later
  --with-long-double-128  use 128-bit long double by default
  --with-long-double-format={ieee,ibm}
		  Specify whether PowerPC long double uses IEEE or IBM format

  --with-gc={page,zone}   this option is not supported anymore. It used to
                          choose the garbage collection mechanism to use with
                          the compiler
  --with-system-zlib      use installed libz
  --with-linker-hash-style={sysv,gnu,both}
                          specify the linker hash style
  --with-diagnostics-color={never,auto,auto-if-env,always}
                          specify the default of -fdiagnostics-color option
                          auto-if-env stands for -fdiagnostics-color=auto if
                          GCC_COLOR environment variable is present and
                          -fdiagnostics-color=never otherwise
  --with-diagnostics-urls={never,auto,auto-if-env,always}
                          specify the default of -fdiagnostics-urls option
                          auto-if-env stands for -fdiagnostics-urls=auto if
                          GCC_URLS or TERM_URLS environment variable is
                          present and -fdiagnostics-urls=never otherwise

Some influential environment variables:
  CC          C compiler command
  CFLAGS      C compiler flags
  LDFLAGS     linker flags, e.g. -L<lib dir> if you have libraries in a
              nonstandard directory <lib dir>
  LIBS        libraries to pass to the linker, e.g. -l<library>
  CPPFLAGS    (Objective) C/C++ preprocessor flags, e.g. -I<include dir> if
              you have headers in a nonstandard directory <include dir>
  CXX         C++ compiler command
  CXXFLAGS    C++ compiler flags
  CXXCPP      C++ preprocessor
  CPP         C preprocessor
  GMPLIBS     How to link GMP
  GMPINC      How to find GMP include files
  ISLLIBS     How to link isl
  ISLINC      How to find isl include files

Use these variables to override the choices made by `configure' or to help
it to find libraries and programs with nonstandard names/locations.

Report bugs to the package provider.
eric@fantasy:~/work/compiler/gcc_work/gcc-15.1.0/gcc$ 
```

## gcc --version
```bash
eric@fantasy:~$ gcc --version
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

## apt show gcc
```bash
eric@fantasy:~$ apt show gcc
Package: gcc
Version: 4:13.2.0-7ubuntu1
Priority: optional
Build-Essential: yes
Section: devel
Source: gcc-defaults (1.214ubuntu1)
Origin: Ubuntu
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Original-Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>
Bugs: https://bugs.launchpad.net/ubuntu/+filebug
Installed-Size: 37.9 kB
Provides: c-compiler
Depends: cpp (= 4:13.2.0-7ubuntu1), cpp-x86-64-linux-gnu (= 4:13.2.0-7ubuntu1), gcc-13 (>= 13.2.0-11~), gcc-x86-64-linux-gnu (= 4:13.2.0-7ubuntu1)
Recommends: libc6-dev | libc-dev
Suggests: gcc-multilib, make, manpages-dev, autoconf, automake, libtool, flex, bison, gdb, gcc-doc
Conflicts: gcc-doc (<< 1:2.95.3)
Task: xubuntu-desktop, ubuntustudio-photography, ubuntustudio-publishing, ubuntukylin-desktop, ubuntukylin-desktop, ubuntukylin-desktop-minimal, ubuntu-mate-core, ubuntu-mate-desktop, ubuntu-budgie-desktop-minimal, ubuntu-budgie-desktop, ubuntu-budgie-desktop-raspi, ubuntu-unity-desktop, edubuntu-desktop-gnome-minimal, edubuntu-desktop-gnome, edubuntu-desktop-gnome-raspi, ubuntucinnamon-desktop-minimal, ubuntucinnamon-desktop
Download-Size: 5,018 B
APT-Manual-Installed: yes
APT-Sources: http://cn.archive.ubuntu.com/ubuntu noble/main amd64 Packages
Description: GNU C compiler
 This is the GNU C compiler, a fairly portable optimizing compiler for C.
 .
 This is a dependency package providing the default GNU C compiler.
```

/etc/apt/sources.list.d/ubuntu.sources
```
Types: deb
URIs: http://cn.archive.ubuntu.com/ubuntu/
Suites: noble noble-updates noble-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: http://security.ubuntu.com/ubuntu/
Suites: noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

## configure

-  [configure.html](https://gcc.gnu.org/install/configure.html).


验证 URL 是否有效：(应返回 200 OK)
```
curl -I http://archive.ubuntu.com/ubuntu/pool/main/g/gcc-13/gcc-13_13.2.0-23ubuntu4.debian.tar.xz
```

output
```bash
eric@fantasy:~/work/compiler/gcc_work/gcc_source$ curl -I http://archive.ubuntu.com/ubuntu/pool/main/g/gcc-13/gcc-13_13.2.0-23ubuntu4.debian.tar.xz
HTTP/1.1 200 OK
Date: Sat, 03 May 2025 10:53:57 GMT
Server: Apache/2.4.52 (Ubuntu)
Last-Modified: Sun, 14 Apr 2024 10:08:05 GMT
ETag: "1e1288-6160bae5a11d4"
Accept-Ranges: bytes
Content-Length: 1970824
Content-Type: application/x-xz
```

下载文件：
```
cd ~/work/compiler/gcc_work/gcc_source
wget http://archive.ubuntu.com/ubuntu/pool/main/g/gcc-13/gcc-13_13.2.0-23ubuntu4.debian.tar.xz
```

output
```bash
eric@fantasy:~/work/compiler/gcc_work/gcc_source$ wget http://archive.ubuntu.com/ubuntu/pool/main/g/gcc-13/gcc-13_13.2.0-23ubuntu4.debian.tar.xz
--2025-05-03 18:56:01--  http://archive.ubuntu.com/ubuntu/pool/main/g/gcc-13/gcc-13_13.2.0-23ubuntu4.debian.tar.xz
Resolving archive.ubuntu.com (archive.ubuntu.com)... 185.125.190.81, 91.189.91.83, 185.125.190.83, ...
Connecting to archive.ubuntu.com (archive.ubuntu.com)|185.125.190.81|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1970824 (1.9M) [application/x-xz]
Saving to: ‘gcc-13_13.2.0-23ubuntu4.debian.tar.xz’

gcc-13_13.2.0-23ubu 100%[===================>]   1.88M   693KB/s    in 2.8s    

2025-05-03 18:56:04 (693 KB/s) - ‘gcc-13_13.2.0-23ubuntu4.debian.tar.xz’ saved [1970824/1970824]
```

tar -xJf 
```bash
tar -xJf gcc-13_13.2.0-23ubuntu4.debian.tar.xz
```

gcc compile
```bash
./configure \
  --prefix=/usr/local/gcc-15 \
  --enable-languages=c,c++,fortran,objc,obj-c++ \
  --disable-multilib \
  --enable-shared \
  --enable-threads=posix \
  --enable-checking=release \
  --with-system-zlib \
  --enable-lto \
  --program-suffix=-15
```

```bash
cd ~/work/compiler/gcc_work/gcc-15.1.0
./configure \
  --prefix=/usr/local/gcc15 \
  --enable-languages=c,c++,fortran,objc,obj-c++,go \
  --enable-shared \
  --enable-static \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-threads=posix \
  --enable-checking=release \
  --enable-multilib \
  --with-sysroot=/ \
  --with-system-zlib \
  --disable-nls \
  --enable-linker-build-id \
  --enable-plugin \
  --enable-libssp \
  --enable-cet=auto \
  --with-tune=generic \
  --build=x86_64-linux-gnu \
  --host=x86_64-linux-gnu \
  --target=x86_64-linux-gnu
make -j$(nproc)
sudo make install
```

确保系统安装了以下依赖工具（以 Ubuntu 为例）：
```bash
sudo apt update
sudo apt install build-essential bison flex libgmp-dev libmpc-dev libmpfr-dev texinfo
```

3. 配置编译
创建一个独立的构建目录以避免污染源代码目录：
```bash
mkdir build && cd build
```

运行配置脚本，指定安装路径和语言支持（例如 C、C++、Fortran）：
```bash
../configure --prefix=/usr/local/gcc-14 --enable-languages=c,c++,fortran --disable-multilib
```

4. 编译
使用 make 编译，建议使用多核加速（例如使用 8 核）
```
make -j8
```

## Install gcc-14 on Ubuntu 22.04

```
sudo apt install build-essential
sudo apt install libmpfr-dev libgmp3-dev libmpc-dev -y
wget http://ftp.gnu.org/gnu/gcc/gcc-14.1.0/gcc-14.1.0.tar.gz
tar -xf gcc-14.1.0.tar.gz
cd gcc-14.1.0
./configure -v --build=x86_64-linux-gnu 
--host=x86_64-linux-gnu 
--target=x86_64-linux-gnu
--prefix=/usr/local/gcc-14.1.0
--enable-checking=release
--enable-languages=c,c++ 
--disable-multilib 
--program-suffix=-14.1.0
make
sudo make install
```

```
../gcc/configure \
  --prefix=/usr/local/gcc-14.2.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-linker-build-id \
  --with-tune=generic
```


```
./configure \
  --prefix=/usr/local/gcc-14.2.0 \
  --enable-languages=c,c++,fortran \
  --enable-shared \
  --enable-static \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-threads=posix \
  --enable-checking=release \
  --with-sysroot=/ \
  --with-system-zlib \
  --disable-nls \
  --enable-linker-build-id \
  --enable-plugin \
  --enable-libssp \
  --enable-cet=auto \
  --with-tune=generic \
  --build=x86_64-linux-gnu \
  --host=x86_64-linux-gnu \
  --target=x86_64-linux-gnu
```


```
../gcc/configure \
  --prefix=/usr/local/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \             # 支持 OpenMP 并行
  --enable-libatomic \           # 现代 C++ 原子操作
  --enable-libstdcxx-filesystem-ts \ # C++17 文件系统
  --enable-libstdcxx-time \      # C++ 计时支持
  --enable-cxx-modules \
  --with-system-zlib \
  --with-system-libiconv \       # 可选，非英语环境
  --enable-default-pie \
  --enable-default-ssp \         # 栈溢出保护
  --enable-libssp \              # 栈溢出保护库
  --enable-cet=auto \            # Intel CET，硬件支持时启用
  --enable-linker-build-id \
  --with-tune=generic
```


```
../gcc/configure \
  --prefix=/usr/local/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-time \
  --enable-cxx-modules \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --enable-lto \
  --with-tune=generic
```

```
../gcc/configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-time \
  --enable-cxx-modules \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --enable-lto \
  --with-tune=generic
```


```
由于 gcc-defaults 不适合，您需要明确指定实际 GCC 版本的源包。

查找可用 GCC 版本：
bash

Copy
apt-cache madison gcc-14 gcc-15
```

```
eric@fantasy:~$ apt-cache madison gcc-14 gcc-15
    gcc-14 | 14.2.0-4ubuntu2~24.04 | http://cn.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages
    gcc-14 | 14.2.0-4ubuntu2~24.04 | http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages
    gcc-14 | 14-20240412-0ubuntu1 | http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 Packages
    gcc-14 | 14-20240412-0ubuntu1 | http://cn.archive.ubuntu.com/ubuntu noble/main Sources
    gcc-14 | 14.2.0-4ubuntu2~24.04 | http://cn.archive.ubuntu.com/ubuntu noble-updates/main Sources
    gcc-14 | 14.2.0-4ubuntu2~24.04 | http://security.ubuntu.com/ubuntu noble-security/main Sources
N: Unable to locate package gcc-15
```

```
dpkg -l | grep -E 'libgmp|libmpfr|libmpc|zlib|libiconv|libtbb'
```

```
eric@fantasy:~$ dpkg -l | grep -E 'libgmp|libmpfr|libmpc|zlib|libiconv|libtbb'
ii  libgmp10:amd64                                 2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library
ii  libmpc3:amd64                                  1.3.1-1build1.1                          amd64        multiple precision complex floating-point library
ii  libmpfr6:amd64                                 4.2.1-1build1.1                          amd64        multiple precision floating-point computation
ii  zlib1g:amd64                                   1:1.3.dfsg-3.1ubuntu2.1                  amd64        compression library - runtime
ii  zlib1g-dev:amd64                               1:1.3.dfsg-3.1ubuntu2.1                  amd64        compression library - development

```

```
sudo apt-get build-dep gcc-15
```

```
eric@fantasy:~$ sudo apt-get build-dep gcc-15
[sudo] password for eric: 
Reading package lists... Done
E: Unable to find a source package for gcc-15
```

```
sudo apt-get install -y \
  build-essential \
  libgmp-dev \
  libmpfr-dev \
  libmpc-dev \
  libiconv-dev \
  libtbb-dev
```

```
eric@fantasy:~$ sudo apt-get install -y \
  build-essential \
  libgmp-dev \
  libmpfr-dev \
  libmpc-dev \
  libiconv-dev \
  libtbb-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
E: Unable to locate package libiconv-dev
```

sudo apt-get install -y 
```
eric@fantasy:~$ sudo apt-get install -y \
  build-essential \
  libgmp-dev \
  libmpfr-dev \
  libmpc-dev \
  libc6-dev \
  libtbb-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
build-essential is already the newest version (12.10ubuntu1).
libc6-dev is already the newest version (2.39-0ubuntu8.4).
libc6-dev set to manually installed.
The following additional packages will be installed:
  libgmpxx4ldbl libhwloc-plugins libhwloc15 libtbb12 libtbbbind-2-5
  libtbbmalloc2 libxnvctrl0 ocl-icd-libopencl1
Suggested packages:
  gmp-doc libgmp10-doc libhwloc-contrib-plugins libmpfr-doc libtbb-doc
  opencl-icd
The following NEW packages will be installed:
  libgmp-dev libgmpxx4ldbl libhwloc-plugins libhwloc15 libmpc-dev libmpfr-dev
  libtbb-dev libtbb12 libtbbbind-2-5 libtbbmalloc2 libxnvctrl0
  ocl-icd-libopencl1
0 upgraded, 12 newly installed, 0 to remove and 6 not upgraded.
Need to get 1,371 kB/1,383 kB of archives.
After this operation, 6,067 kB of additional disk space will be used.
Get:1 file:/var/cuda-repo-ubuntu2404-12-8-local  libxnvctrl0 570.124.06-0ubuntu1 [11.8 kB]
Get:2 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgmpxx4ldbl amd64 2:6.3.0+dfsg-2ubuntu6.1 [9,888 B]
Get:3 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgmp-dev amd64 2:6.3.0+dfsg-2ubuntu6.1 [340 kB]
Get:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libhwloc15 amd64 2.10.0-1build1 [172 kB]
Get:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libmpfr-dev amd64 4.2.1-1build1.1 [288 kB]
Get:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libtbbmalloc2 amd64 2021.11.0-2ubuntu2 [60.5 kB]
Get:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libtbbbind-2-5 amd64 2021.11.0-2ubuntu2 [16.4 kB]
Get:8 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libtbb12 amd64 2021.11.0-2ubuntu2 [106 kB]
Get:9 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 ocl-icd-libopencl1 amd64 2.3.2-1build1 [38.5 kB]
Get:10 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libhwloc-plugins amd64 2.10.0-1build1 [15.7 kB]
Get:11 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libmpc-dev amd64 1.3.1-1build1.1 [70.2 kB]
Get:12 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libtbb-dev amd64 2021.11.0-2ubuntu2 [253 kB]
Fetched 1,371 kB in 5s (265 kB/s)     
Selecting previously unselected package libgmpxx4ldbl:amd64.
(Reading database ... 211971 files and directories currently installed.)
Preparing to unpack .../00-libgmpxx4ldbl_2%3a6.3.0+dfsg-2ubuntu6.1_amd64.deb ...
Unpacking libgmpxx4ldbl:amd64 (2:6.3.0+dfsg-2ubuntu6.1) ...
Selecting previously unselected package libgmp-dev:amd64.
Preparing to unpack .../01-libgmp-dev_2%3a6.3.0+dfsg-2ubuntu6.1_amd64.deb ...
Unpacking libgmp-dev:amd64 (2:6.3.0+dfsg-2ubuntu6.1) ...
Selecting previously unselected package libhwloc15:amd64.
Preparing to unpack .../02-libhwloc15_2.10.0-1build1_amd64.deb ...
Unpacking libhwloc15:amd64 (2.10.0-1build1) ...
Selecting previously unselected package libmpfr-dev:amd64.
Preparing to unpack .../03-libmpfr-dev_4.2.1-1build1.1_amd64.deb ...
Unpacking libmpfr-dev:amd64 (4.2.1-1build1.1) ...
Selecting previously unselected package libtbbmalloc2:amd64.
Preparing to unpack .../04-libtbbmalloc2_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbbmalloc2:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libtbbbind-2-5:amd64.
Preparing to unpack .../05-libtbbbind-2-5_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbbbind-2-5:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libtbb12:amd64.
Preparing to unpack .../06-libtbb12_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbb12:amd64 (2021.11.0-2ubuntu2) ...
Selecting previously unselected package libxnvctrl0:amd64.
Preparing to unpack .../07-libxnvctrl0_570.124.06-0ubuntu1_amd64.deb ...
Unpacking libxnvctrl0:amd64 (570.124.06-0ubuntu1) ...
Selecting previously unselected package ocl-icd-libopencl1:amd64.
Preparing to unpack .../08-ocl-icd-libopencl1_2.3.2-1build1_amd64.deb ...
Unpacking ocl-icd-libopencl1:amd64 (2.3.2-1build1) ...
Selecting previously unselected package libhwloc-plugins:amd64.
Preparing to unpack .../09-libhwloc-plugins_2.10.0-1build1_amd64.deb ...
Unpacking libhwloc-plugins:amd64 (2.10.0-1build1) ...
Selecting previously unselected package libmpc-dev:amd64.
Preparing to unpack .../10-libmpc-dev_1.3.1-1build1.1_amd64.deb ...
Unpacking libmpc-dev:amd64 (1.3.1-1build1.1) ...
Selecting previously unselected package libtbb-dev:amd64.
Preparing to unpack .../11-libtbb-dev_2021.11.0-2ubuntu2_amd64.deb ...
Unpacking libtbb-dev:amd64 (2021.11.0-2ubuntu2) ...
Setting up libtbbmalloc2:amd64 (2021.11.0-2ubuntu2) ...
Setting up libxnvctrl0:amd64 (570.124.06-0ubuntu1) ...
Setting up libgmpxx4ldbl:amd64 (2:6.3.0+dfsg-2ubuntu6.1) ...
Setting up libhwloc15:amd64 (2.10.0-1build1) ...
Setting up ocl-icd-libopencl1:amd64 (2.3.2-1build1) ...
Setting up libgmp-dev:amd64 (2:6.3.0+dfsg-2ubuntu6.1) ...
Setting up libhwloc-plugins:amd64 (2.10.0-1build1) ...
Setting up libmpfr-dev:amd64 (4.2.1-1build1.1) ...
Setting up libtbbbind-2-5:amd64 (2021.11.0-2ubuntu2) ...
Setting up libmpc-dev:amd64 (1.3.1-1build1.1) ...
Setting up libtbb12:amd64 (2021.11.0-2ubuntu2) ...
Setting up libtbb-dev:amd64 (2021.11.0-2ubuntu2) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```


```
eric@fantasy:~$ dpkg -l | grep -E 'libgmp|libmpfr|libmpc|zlib|libiconv|libtbb'
ii  libgmp-dev:amd64                               2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library developers tools
ii  libgmp10:amd64                                 2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library
ii  libgmpxx4ldbl:amd64                            2:6.3.0+dfsg-2ubuntu6.1                  amd64        Multiprecision arithmetic library (C++ bindings)
ii  libmpc-dev:amd64                               1.3.1-1build1.1                          amd64        multiple precision complex floating-point library development package
ii  libmpc3:amd64                                  1.3.1-1build1.1                          amd64        multiple precision complex floating-point library
ii  libmpfr-dev:amd64                              4.2.1-1build1.1                          amd64        multiple precision floating-point computation developers tools
ii  libmpfr6:amd64                                 4.2.1-1build1.1                          amd64        multiple precision floating-point computation
ii  libtbb-dev:amd64                               2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - development files
ii  libtbb12:amd64                                 2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - runtime files
ii  libtbbbind-2-5:amd64                           2021.11.0-2ubuntu2                       amd64        parallelism library for C++ - runtime files
ii  libtbbmalloc2:amd64                            2021.11.0-2ubuntu2                       amd64        parallelism helper library for C++ - runtime files
ii  zlib1g:amd64                                   1:1.3.dfsg-3.1ubuntu2.1                  amd64        compression library - runtime
ii  zlib1g-dev:amd64                               1:1.3.dfsg-3.1ubuntu2.1                  amd64        compression library - development
```


```
sudo apt-get install -y libc6-dev
sudo apt-get install -y build-essential
dpkg -l | grep -E 'libc6-dev|build-essential'
```

```
eric@fantasy:~$ sudo apt-get install -y libc6-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libc6-dev is already the newest version (2.39-0ubuntu8.4).
0 upgraded, 0 newly installed, 0 to remove and 6 not upgraded.
```

```
eric@fantasy:~$ sudo apt-get install -y build-essential
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
build-essential is already the newest version (12.10ubuntu1).
0 upgraded, 0 newly installed, 0 to remove and 6 not upgraded.
```

```
eric@fantasy:~$ dpkg -l | grep -E 'libc6-dev|build-essential'
ii  build-essential                                12.10ubuntu1                             amd64        Informational list of build-essential packages
ii  libc6-dev:amd64                                2.39-0ubuntu8.4                          amd64        GNU C Library: Development Libraries and Header Files
```

```
mkdir build && cd build
../configure \
  --prefix=/usr/local/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --with-tune=generic \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-debug \
  --enable-libstdcxx-parallel \
  --enable-nls
```

```
mkdir build && cd build
../configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --with-tune=generic \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-debug \
  --enable-libstdcxx-parallel \
  --enable-nls
```


```
cd ~/work/compiler/gcc_work/gcc-15.1.0/build
rm -rf *
ls
```

```
../configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --with-tune=generic \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-debug \
  --enable-libstdcxx-parallel \
  --enable-nls \
  --disable-multilib

```

```
eric@fantasy:~/work/compiler/gcc_work/gcc-15.1.0/build$ ../configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --with-tune=generic \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-debug \
  --enable-libstdcxx-parallel \
  --enable-nls \
  --disable-multilib
checking build system type... x86_64-pc-linux-gnu
checking host system type... x86_64-pc-linux-gnu
checking target system type... x86_64-pc-linux-gnu
checking for a BSD-compatible install... /usr/bin/install -c
checking whether ln works... yes
checking whether ln -s works... yes
checking for a sed that does not truncate output... /usr/bin/sed
checking for gawk... no
checking for mawk... mawk
checking for libitm support... yes
checking for libsanitizer support... yes
checking for libvtv support... yes
checking for libphobos support... yes
checking for libgcobol support... yes
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc accepts -g... yes
checking for gcc option to accept ISO C89... none needed
checking for gcc option to accept ISO C99... none needed
checking for g++... g++
checking whether we are using the GNU C++ compiler... yes
checking whether g++ accepts -g... yes
checking whether g++ accepts -static-libstdc++ -static-libgcc... yes
checking for gnatbind... no
checking for gnatmake... no
checking whether compiler driver understands Ada and is recent enough... no
checking for gdc... no
checking whether the D compiler works... no
checking for cargo... no
checking how to compare bootstrapped objects... cmp --ignore-initial=16 $$f1 $$f2
checking for objdir... .libs
checking for the correct version of gmp.h... yes
checking for the correct version of mpfr.h... yes
checking for the correct version of mpc.h... yes
checking for the correct version of the gmp/mpfr libraries... yes
checking for the correct version of the mpc libraries... yes
checking for isl 0.15 or later... no
required isl version is 0.15 or later
checking whether to enable libgdiagnostics... no
checking for library containing dlopen... none required
checking for library containing pthread_create... none required
*** This configuration is not supported in the following subdirectories:
     zlib gnattools gotools libgrust target-libada target-libgcobol target-libphobos target-zlib target-libgo target-libffi target-libgm2 target-libobjc target-libgrust
    (Any other directories should still work fine.)
checking for default BUILD_CONFIG... bootstrap-debug
checking for --enable-vtable-verify... no
checking for bison... no
checking for byacc... no
checking for yacc... no
checking for bison... no
checking for gm4... no
checking for gnum4... no
checking for m4... m4
checking for flex... no
checking for lex... no
checking for flex... no
checking for makeinfo... no
/home/eric/work/compiler/gcc_work/gcc-15.1.0/missing: 81: makeinfo: not found
checking for expect... expect
checking for runtest... runtest
checking for ar... ar
checking for as... as
checking for dlltool... no
checking for dsymutil... no
checking for ld... ld
checking for lipo... no
checking for nm... nm
checking for ranlib... ranlib
checking for strip... strip
checking for windres... no
checking for windmc... no
checking for objcopy... objcopy
checking for objdump... objdump
checking for otool... no
checking for readelf... readelf
checking for -plugin option... --plugin /usr/libexec/gcc/x86_64-linux-gnu/13/liblto_plugin.so
checking for cc... cc
checking for c++... c++
checking for gcc... gcc
checking for gfortran... gfortran
checking for gccgo... no
checking for gdc... no
checking for gm2... no
checking for ar... no
checking for ar... ar
checking for as... no
checking for as... as
checking for dlltool... no
checking for dlltool... no
checking for dsymutil... no
checking for dsymutil... no
checking for ld... no
checking for ld... ld
checking for lipo... no
checking for lipo... no
checking for nm... no
checking for nm... nm
checking for objcopy... no
checking for objcopy... objcopy
checking for objdump... no
checking for objdump... objdump
checking for otool... no
checking for otool... no
checking for ranlib... no
checking for ranlib... ranlib
checking for readelf... no
checking for readelf... readelf
checking for strip... no
checking for strip... strip
checking for windres... no
checking for windres... no
checking for windmc... no
checking for windmc... no
checking where to find the target ar... host tool
checking where to find the target as... host tool
checking where to find the target cc... just compiled
checking where to find the target c++... just compiled
checking where to find the target c++ for libstdc++... just compiled
checking where to find the target dlltool... host tool
checking where to find the target dsymutil... host tool
checking where to find the target gcc... just compiled
checking where to find the target gfortran... just compiled
checking where to find the target gccgo... host tool
checking where to find the target gdc... host tool
checking where to find the target gm2... host tool
checking where to find the target ld... host tool
checking where to find the target lipo... host tool
checking where to find the target nm... host tool
checking where to find the target objcopy... host tool
checking where to find the target objdump... host tool
checking where to find the target otool... host tool
checking where to find the target ranlib... host tool
checking where to find the target readelf... host tool
checking where to find the target strip... host tool
checking where to find the target windres... host tool
checking where to find the target windmc... host tool
checking whether to enable maintainer-specific portions of Makefiles... no
configure: creating ./config.status
config.status: creating Makefile
```

nproc
```
```

make -j$(nproc)
```
make -j$(nproc)
```

sudo make install
```
sudo make install
```

/home/eric/software/gcc/gcc-15.1.0/bin/g++ --version
```
/home/eric/software/gcc/gcc-15.1.0/bin/g++ --version
```


```cpp
#include <ranges>
#include <iostream>

int main() {
    for (int x : std::views::iota(1, 10) | std::views::filter([](int n) { return n % 2 == 0; })) {
        std::cout << x << ' ';
    }
    return 0;
}
```

```
/home/eric/software/gcc/gcc-15.1.0/bin/g++ -std=c++23 test.cpp -o test
./test
```


```
eric@fantasy:~/work/compiler/gcc_work/gcc-15.1.0/build$ 
../configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \
  --enable-checking=release \
  --enable-shared \
  --enable-threads=posix \
  --enable-libgomp \
  --enable-libatomic \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \
  --enable-cet=auto \
  --enable-linker-build-id \
  --with-tune=generic \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-modules \
  --enable-libstdcxx-debug \
  --enable-libstdcxx-parallel \
  --enable-nls \
  --disable-multilib
```

```
eric@fantasy:~/work/compiler/gcc_work/gcc-15.1.0/build$ ../configure \
  --prefix=/home/eric/software/gcc/gcc-15.1.0 \
  --enable-languages=c,c++,fortran \
  --enable-bootstrap \lease \
  --enable-checking=release \
  --enable-shared \posix \
  --enable-threads=posix \
  --enable-libgomp \ \
  --enable-libatomic \ilesystem-ts \
  --enable-libstdcxx-filesystem-ts \
  --enable-libstdcxx-time \
  --with-system-zlib \nv \
  --with-system-libiconv \
  --enable-default-pie \
  --enable-default-ssp \
  --enable-libssp \ \
  --enable-cet=auto \ld-id \
  --enable-linker-build-id \
  --with-tune=generic \cxx-abi=new \
  --with-default-libstdcxx-abi=new \
  --enable-libstdcxx-modules \
  --enable-libstdcxx-debug \l \
  --enable-libstdcxx-parallel \
  --enable-nls \ilib
  --disable-multilib
checking build system type... x86_64-pc-linux-gnu
checking host system type... x86_64-pc-linux-gnu
checking target system type... x86_64-pc-linux-gnu
checking for a BSD-compatible install... /usr/bin/install -c
checking whether ln works... yes
checking whether ln -s works... yes
checking for a sed that does not truncate output... /usr/bin/sed
checking for gawk... no
checking for mawk... mawk
checking for libitm support... yes
checking for libsanitizer support... yes
checking for libvtv support... yes
checking for libphobos support... yes
checking for libgcobol support... yes
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc accepts -g... yes
checking for gcc option to accept ISO C89... none needed
checking for gcc option to accept ISO C99... none needed
checking for g++... g++
checking whether we are using the GNU C++ compiler... yes
checking whether g++ accepts -g... yes
checking whether g++ accepts -static-libstdc++ -static-libgcc... yes
checking for gnatbind... no
checking for gnatmake... no
checking whether compiler driver understands Ada and is recent enough... no
checking for gdc... no
checking whether the D compiler works... no
checking for cargo... no
checking how to compare bootstrapped objects... cmp --ignore-initial=16 $$f1 $$f2
checking for objdir... .libs
checking for the correct version of gmp.h... yes
checking for the correct version of mpfr.h... yes
checking for the correct version of mpc.h... yes
checking for the correct version of the gmp/mpfr libraries... yes
checking for the correct version of the mpc libraries... yes
checking for isl 0.15 or later... no
required isl version is 0.15 or later
checking whether to enable libgdiagnostics... no
checking for library containing dlopen... none required
checking for library containing pthread_create... none required
*** This configuration is not supported in the following subdirectories:
     zlib gnattools gotools libgrust target-libada target-libgcobol target-libphobos target-zlib target-libgo target-libffi target-libgm2 target-libobjc target-libgrust
    (Any other directories should still work fine.)
checking for default BUILD_CONFIG... bootstrap-debug
checking for --enable-vtable-verify... no
checking for bison... no
checking for byacc... no
checking for yacc... no
checking for bison... no
checking for gm4... no
checking for gnum4... no
checking for m4... m4
checking for flex... no
checking for lex... no
checking for flex... no
checking for makeinfo... no
/home/eric/work/compiler/gcc_work/gcc-15.1.0/missing: 81: makeinfo: not found
checking for expect... expect
checking for runtest... runtest
checking for ar... ar
checking for as... as
checking for dlltool... no
checking for dsymutil... no
checking for ld... ld
checking for lipo... no
checking for nm... nm
checking for ranlib... ranlib
checking for strip... strip
checking for windres... no
checking for windmc... no
checking for objcopy... objcopy
checking for objdump... objdump
checking for otool... no
checking for readelf... readelf
checking for -plugin option... --plugin /usr/libexec/gcc/x86_64-linux-gnu/13/liblto_plugin.so
checking for cc... cc
checking for c++... c++
checking for gcc... gcc
checking for gfortran... gfortran
checking for gccgo... no
checking for gdc... no
checking for gm2... no
checking for ar... no
checking for ar... ar
checking for as... no
checking for as... as
checking for dlltool... no
checking for dlltool... no
checking for dsymutil... no
checking for dsymutil... no
checking for ld... no
checking for ld... ld
checking for lipo... no
checking for lipo... no
checking for nm... no
checking for nm... nm
checking for objcopy... no
checking for objcopy... objcopy
checking for objdump... no
checking for objdump... objdump
checking for otool... no
checking for otool... no
checking for ranlib... no
checking for ranlib... ranlib
checking for readelf... no
checking for readelf... readelf
checking for strip... no
checking for strip... strip
checking for windres... no
checking for windres... no
checking for windmc... no
checking for windmc... no
checking where to find the target ar... host tool
checking where to find the target as... host tool
checking where to find the target cc... just compiled
checking where to find the target c++... just compiled
checking where to find the target c++ for libstdc++... just compiled
checking where to find the target dlltool... host tool
checking where to find the target dsymutil... host tool
checking where to find the target gcc... just compiled
checking where to find the target gfortran... just compiled
checking where to find the target gccgo... host tool
checking where to find the target gdc... host tool
checking where to find the target gm2... host tool
checking where to find the target ld... host tool
checking where to find the target lipo... host tool
checking where to find the target nm... host tool
checking where to find the target objcopy... host tool
checking where to find the target objdump... host tool
checking where to find the target otool... host tool
checking where to find the target ranlib... host tool
checking where to find the target readelf... host tool
checking where to find the target strip... host tool
checking where to find the target windres... host tool
checking where to find the target windmc... host tool
checking whether to enable maintainer-specific portions of Makefiles... no
configure: creating ./config.status
config.status: creating Makefile
```

一览：GCC 使用 C++ Modules 的常见编译选项
```
一览：GCC 使用 C++ Modules 的常见编译选项
编译选项	说明
-std=c++20 或 -std=c++23	启用 C++20/23 语言标准（模块是 C++20 的特性）
-fmodules-ts	启用模块技术预览（TS）支持（必须加）
-fmodule-header	指示当前处理的是模块头文件
-fmodule-only	编译模块接口但不生成可执行代码（只用于生成 .gcm 文件）
-fmodule-mapper=FILE	提供模块名称到 .gcm 文件的映射表（高级用法）
-fprebuilt-module-path=DIR	指定 .gcm 模块缓存路径（否则可能找不到）
-fmodule-output=PATH.gcm	手动指定模块接口编译后的 .gcm 文件输出路径
-x c++ / -x c++-system-header	指定输入文件类型，某些场景需要显式声明
-Winvalid-imported-macros	严格检测模块间宏定义冲突
-fmodules-ts -fsyntax-only	只检查模块语法，不生成代码（调试接口用）
```

g++ -v | grep enable-libstdcxx-modules
```
eric@fantasy:~$ /home/eric/software/gcc/gcc-15.1.0/bin/g++ -v | grep enable-libstdcxx-modules
Using built-in specs.
COLLECT_GCC=/home/eric/software/gcc/gcc-15.1.0/bin/g++
COLLECT_LTO_WRAPPER=/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/lto-wrapper
Target: x86_64-pc-linux-gnu
Configured with: ../configure --prefix=/home/eric/software/gcc/gcc-15.1.0 --enable-languages=c,c++,fortran --enable-bootstrap --enable-checking=release --enable-shared --enable-threads=posix --enable-libgomp --enable-libatomic --enable-libstdcxx-filesystem-ts --enable-libstdcxx-time --with-system-zlib --with-system-libiconv --enable-default-pie --enable-default-ssp --enable-libssp --enable-cet=auto --enable-linker-build-id --with-tune=generic --with-default-libstdcxx-abi=new --enable-libstdcxx-modules --enable-libstdcxx-debug --enable-libstdcxx-parallel --enable-nls --disable-multilib
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 15.1.0 (GCC) 
eric@fantasy:~$ 
```

```
eric@fantasy:~$ echo $LD_LIBRARY_PATH
/opt/hdfview/lib:/usr/local/cuda-12.8/lib64
eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ echo $LD_LIBRARY_PATH
/home/eric/software/gcc/gcc-15.1.0/lib64:/home/eric/software/gcc/gcc-15.1.0/lib:/opt/hdfview/lib:/usr/local/cuda-12.8/lib64
eric@fantasy:~$ 
```

## It’s Time to Use CXX Modules on Modern C++

-  [It’s Time to Use CXX Modules on Modern C++](https://igormcoelho.medium.com/its-time-to-use-cxx-modules-on-modern-c-41a574b77e83).
-  [最新 gcc15.1.0 发布, 一键从源码构建 -- c++23 import std 启动](https://v2ex.com/t/1129324).


bits/std.cc
```
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/include/bits
```


```
find /usr/include /usr/local/include /usr/lib/gcc -name "std.cc"
```


```
eric@fantasy:~$ g++ --version
g++ (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

eric@fantasy:~$ g++ -v -E -xc++ - < /dev/null 2>&1 | grep -A 100 "#include <...> search"
#include <...> search starts here:
 /usr/include/c++/13
 /usr/include/x86_64-linux-gnu/c++/13
 /usr/include/c++/13/backward
 /usr/lib/gcc/x86_64-linux-gnu/13/include
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "<stdin>"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "<stdin>"
COMPILER_PATH=/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/
LIBRARY_PATH=/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../lib/:/lib/x86_64-linux-gnu/:/lib/../lib/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
eric@fantasy:~$ 
```


```
eric@fantasy:~$ eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ g++ --version
g++ (GCC) 15.1.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

eric@fantasy:~$ g++ -v -E -xc++ - < /dev/null 2>&1 | grep -A 100 "#include <...> search"
#include <...> search starts here:
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/x86_64-pc-linux-gnu
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/backward
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
 /usr/local/include
 /home/eric/software/gcc/gcc-15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "<stdin>"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "<stdin>"
COMPILER_PATH=/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/
LIBRARY_PATH=/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../lib64/:/lib/x86_64-linux-gnu/:/lib/../lib64/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
eric@fantasy:~$ 
```

g++ -std=c++23 -fmodules -M main.cpp
```
eric@fantasy:~/work/cpp_work/ModernCpp/codes/ubuntu/test/02c$ g++ -std=c++23 -fmodules -M main.cpp
main.o: main.cpp /usr/include/stdc-predef.h
main.o: std.c++-module
CXX_IMPORTS += std.c++-module
```


```
eric@fantasy:~$ dpkg -S /usr/include/stdc-predef.h
libc6-dev:amd64: /usr/include/stdc-predef.h
eric@fantasy:~$ find /home/eric/software/gcc/gcc-15.1.0 -name stdc-predef.h
eric@fantasy:~$ ls -l /usr/include/stdc-predef.h
-rw-r--r-- 1 root root 2462 Jan 29 01:07 /usr/include/stdc-predef.h
eric@fantasy:~$ find / -name 'stdc-predef.h' 2>/dev/null
/usr/include/stdc-predef.h
eric@fantasy:~$ 
```

eric@fantasy:~$ find / -name 'std.cc' 2>/dev/null
```
eric@fantasy:~$ find / -name 'std.cc' 2>/dev/null
```

```
g++ -std=c++20 -fmodules-ts -x c++-module -c std.cppm -o std.o
g++ -std=c++20 -fmodules-ts main.cpp std.o -o main
```


```
eric@fantasy:~$ find / -name 'stdc++.h' 2>/dev/null
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/include/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/include/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/prev-x86_64-pc-linux-gnu/libstdc++-v3/include/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/libstdc++-v3/include/precompiled/stdc++.h
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu/bits/stdc++.h
/usr/include/x86_64-linux-gnu/c++/13/bits/stdc++.h
```

```
g++ -v -E -x c++ /dev/null
-v：显示详细的编译过程。
-E：仅运行预处理器。
-x c++：指定语言为 C++。
/dev/null：空输入文件。
```


```
eric@fantasy:~$ g++ -v -E -x c++ /dev/null
Using built-in specs.
COLLECT_GCC=g++
OFFLOAD_TARGET_NAMES=nvptx-none:amdgcn-amdhsa
OFFLOAD_TARGET_DEFAULT=1
Target: x86_64-linux-gnu
Configured with: ../src/configure -v --with-pkgversion='Ubuntu 13.3.0-6ubuntu2~24.04' --with-bugurl=file:///usr/share/doc/gcc-13/README.Bugs --enable-languages=c,ada,c++,go,d,fortran,objc,obj-c++,m2 --prefix=/usr --with-gcc-major-version-only --program-suffix=-13 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/libexec --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-bootstrap --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-libstdcxx-backtrace --enable-gnu-unique-object --disable-vtable-verify --enable-plugin --enable-default-pie --with-system-zlib --enable-libphobos-checking=release --with-target-system-zlib=auto --enable-objc-gc=auto --enable-multiarch --disable-werror --enable-cet --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-offload-targets=nvptx-none=/build/gcc-13-fG75Ri/gcc-13-13.3.0/debian/tmp-nvptx/usr,amdgcn-amdhsa=/build/gcc-13-fG75Ri/gcc-13-13.3.0/debian/tmp-gcn/usr --enable-offload-defaulted --without-cuda-driver --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu --with-build-config=bootstrap-lto-lean --enable-link-serialization=2
Thread model: posix
Supported LTO compression algorithms: zlib zstd
gcc version 13.3.0 (Ubuntu 13.3.0-6ubuntu2~24.04) 
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
 /usr/libexec/gcc/x86_64-linux-gnu/13/cc1plus -E -quiet -v -imultiarch x86_64-linux-gnu -D_GNU_SOURCE /dev/null -mtune=generic -march=x86-64 -fasynchronous-unwind-tables -fstack-protector-strong -Wformat -Wformat-security -fstack-clash-protection -fcf-protection -dumpbase null
ignoring duplicate directory "/usr/include/x86_64-linux-gnu/c++/13"
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/include-fixed/x86_64-linux-gnu"
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/include-fixed"
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/include"
#include "..." search starts here:
#include <...> search starts here:
 /usr/include/c++/13
 /usr/include/x86_64-linux-gnu/c++/13
 /usr/include/c++/13/backward
 /usr/lib/gcc/x86_64-linux-gnu/13/include
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "/dev/null"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "/dev/null"
COMPILER_PATH=/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/
LIBRARY_PATH=/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../lib/:/lib/x86_64-linux-gnu/:/lib/../lib/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
```


```
cpp -v /dev/null
```


```
ric@fantasy:~$ cpp -v /dev/null
Using built-in specs.
COLLECT_GCC=cpp
OFFLOAD_TARGET_NAMES=nvptx-none:amdgcn-amdhsa
OFFLOAD_TARGET_DEFAULT=1
Target: x86_64-linux-gnu
Configured with: ../src/configure -v --with-pkgversion='Ubuntu 13.3.0-6ubuntu2~24.04' --with-bugurl=file:///usr/share/doc/gcc-13/README.Bugs --enable-languages=c,ada,c++,go,d,fortran,objc,obj-c++,m2 --prefix=/usr --with-gcc-major-version-only --program-suffix=-13 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/libexec --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-bootstrap --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-libstdcxx-backtrace --enable-gnu-unique-object --disable-vtable-verify --enable-plugin --enable-default-pie --with-system-zlib --enable-libphobos-checking=release --with-target-system-zlib=auto --enable-objc-gc=auto --enable-multiarch --disable-werror --enable-cet --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-offload-targets=nvptx-none=/build/gcc-13-fG75Ri/gcc-13-13.3.0/debian/tmp-nvptx/usr,amdgcn-amdhsa=/build/gcc-13-fG75Ri/gcc-13-13.3.0/debian/tmp-gcn/usr --enable-offload-defaulted --without-cuda-driver --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu --with-build-config=bootstrap-lto-lean --enable-link-serialization=2
Thread model: posix
Supported LTO compression algorithms: zlib zstd
gcc version 13.3.0 (Ubuntu 13.3.0-6ubuntu2~24.04) 
COLLECT_GCC_OPTIONS='-E' '-v' '-mtune=generic' '-march=x86-64'
 /usr/libexec/gcc/x86_64-linux-gnu/13/cc1 -E -quiet -v -imultiarch x86_64-linux-gnu /dev/null -mtune=generic -march=x86-64 -fasynchronous-unwind-tables -fstack-protector-strong -Wformat -Wformat-security -fstack-clash-protection -fcf-protection -dumpbase null
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/include-fixed/x86_64-linux-gnu"
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/include-fixed"
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/include"
#include "..." search starts here:
#include <...> search starts here:
 /usr/lib/gcc/x86_64-linux-gnu/13/include
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "/dev/null"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "/dev/null"
COMPILER_PATH=/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/
LIBRARY_PATH=/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../lib/:/lib/x86_64-linux-gnu/:/lib/../lib/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-E' '-v' '-mtune=generic' '-march=x86-64'
```

echo $CPLUS_INCLUDE_PATH
```
eric@fantasy:~$ echo $CPLUS_INCLUDE_PATH
```

test.cpp
```
#include <bits/stdc++.h>
int main() { return 0; }
```

```
g++ test.cpp -o test
g++ -I/usr/include/x86_64-linux-gnu/c++/13 test.cpp -o test
```

## gcc -print-search-dirs
```
eric@fantasy:~$ gcc -print-search-dirs
install: /usr/lib/gcc/x86_64-linux-gnu/13/
programs: =/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/13/:/usr/libexec/gcc/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/bin/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/bin/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/bin/
libraries: =/usr/lib/gcc/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/lib/x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/lib/x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/lib/../lib/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../x86_64-linux-gnu/13/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../x86_64-linux-gnu/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../lib/:/lib/x86_64-linux-gnu/13/:/lib/x86_64-linux-gnu/:/lib/../lib/:/usr/lib/x86_64-linux-gnu/13/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/lib/:/usr/lib/gcc/x86_64-linux-gnu/13/../../../:/lib/:/usr/lib/
```

```
eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ gcc -print-search-dirs
install: /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/
programs: =/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/bin/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/bin/x86_64-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/bin/
libraries: =/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/lib/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/lib/x86_64-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../x86_64-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../lib64/:/lib/x86_64-pc-linux-gnu/15.1.0/:/lib/x86_64-linux-gnu/:/lib/../lib64/:/usr/lib/x86_64-pc-linux-gnu/15.1.0/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/lib/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../:/lib/:/usr/lib/
```


```
eric@fantasy:~$ g++ -v -E -x c++ /dev/null
Using built-in specs.
COLLECT_GCC=g++
Target: x86_64-pc-linux-gnu
Configured with: ../configure --prefix=/home/eric/software/gcc/gcc-15.1.0 --enable-languages=c,c++,fortran --enable-bootstrap --enable-checking=release --enable-shared --enable-threads=posix --enable-libgomp --enable-libatomic --enable-libstdcxx-filesystem-ts --enable-libstdcxx-time --with-system-zlib --with-system-libiconv --enable-default-pie --enable-default-ssp --enable-libssp --enable-cet=auto --enable-linker-build-id --with-tune=generic --with-default-libstdcxx-abi=new --enable-libstdcxx-modules --enable-libstdcxx-debug --enable-libstdcxx-parallel --enable-nls --disable-multilib
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 15.1.0 (GCC) 
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
 /home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/cc1plus -E -quiet -v -imultiarch x86_64-linux-gnu -D_GNU_SOURCE /dev/null -mtune=generic -march=x86-64 -dumpbase null
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0"
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/include"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed/x86_64-linux-gnu"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/include"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/include"
  as it is a non-system directory that duplicates a system directory
#include "..." search starts here:
#include <...> search starts here:
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0
 /home/eric/software/gcc/gcc-15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/x86_64-pc-linux-gnu
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/backward
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
 /usr/local/include
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "/dev/null"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "/dev/null"
COMPILER_PATH=/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/
LIBRARY_PATH=/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../lib64/:/lib/x86_64-linux-gnu/:/lib/../lib64/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
```



```
#%Module1.0
## GCC 15.1.0 modulefile
## Module file for user-compiled GCC 15.1.0 installed at /home/eric/software/gcc/gcc-15.1.0

# Help message describing the module
proc ModulesHelp { } {
    puts stderr "\tGCC 15.1.0 - Sets up environment for GCC 15.1.0\n"
    puts stderr "\tThis module configures the environment for GCC 15.1.0, including:\n"
    puts stderr "\t- Compilers (gcc, g++, gfortran)\n"
    puts stderr "\t- C++ header files\n"
    puts stderr "\t- Runtime and linker libraries\n"
    puts stderr "\t- Man pages\n"
    puts stderr "\tInstallation prefix: /home/eric/software/gcc/gcc-15.1.0\n"
    puts stderr "\tUse 'module show gcc/15.1.0' to view detailed environment changes.\n"
}

# Brief description for 'module list' and 'module avail'
module-whatis "Sets up environment for GCC 15.1.0 (user-compiled, prefix: /home/eric/software/gcc/gcc-15.1.0)"

# Prevent loading conflicting GCC modules
conflict gcc
conflict gcc/13

# Set installation prefix
set prefix /home/eric/software/gcc/gcc-15.1.0

# Check if installation directory exists
if { ![file isdirectory $prefix] } {
    puts stderr "Error: GCC 15.1.0 installation directory ($prefix) not found!"
    exit 1
}

# Add compiler binary path
prepend-path PATH $prefix/bin

# Add man pages path
prepend-path MANPATH $prefix/share/man

# Add C++ include paths (based on g++ -v output)
prepend-path CPLUS_INCLUDE_PATH $prefix/include/c++/15.1.0
prepend-path CPLUS_INCLUDE_PATH $prefix/include/c++/15.1.0/x86_64-pc-linux-gnu
prepend-path CPLUS_INCLUDE_PATH $prefix/include/c++/15.1.0/backward
prepend-path CPLUS_INCLUDE_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
prepend-path CPLUS_INCLUDE_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed
prepend-path CPLUS_INCLUDE_PATH $prefix/include

# Add runtime library paths
prepend-path LD_LIBRARY_PATH $prefix/lib
prepend-path LD_LIBRARY_PATH $prefix/lib64
prepend-path LD_LIBRARY_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0

# Add linker library paths
prepend-path LIBRARY_PATH $prefix/lib
prepend-path LIBRARY_PATH $prefix/lib64
prepend-path LIBRARY_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0

# Set compiler variables for build systems
setenv CC $prefix/bin/gcc
setenv CXX $prefix/bin/g++
setenv FC $prefix/bin/gfortran

# Set GCC version for scripts or build tools
setenv GCC_VERSION 15.1.0
```

```
eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ g++ --version
g++ (GCC) 15.1.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

eric@fantasy:~$ g++ -v -E -x c++ /dev/null
Using built-in specs.
COLLECT_GCC=g++
Target: x86_64-pc-linux-gnu
Configured with: ../configure --prefix=/home/eric/software/gcc/gcc-15.1.0 --enable-languages=c,c++,fortran --enable-bootstrap --enable-checking=release --enable-shared --enable-threads=posix --enable-libgomp --enable-libatomic --enable-libstdcxx-filesystem-ts --enable-libstdcxx-time --with-system-zlib --with-system-libiconv --enable-default-pie --enable-default-ssp --enable-libssp --enable-cet=auto --enable-linker-build-id --with-tune=generic --with-default-libstdcxx-abi=new --enable-libstdcxx-modules --enable-libstdcxx-debug --enable-libstdcxx-parallel --enable-nls --disable-multilib
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 15.1.0 (GCC) 
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
 /home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/cc1plus -E -quiet -v -imultiarch x86_64-linux-gnu -D_GNU_SOURCE /dev/null -mtune=generic -march=x86-64 -dumpbase null
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/x86_64-pc-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/backward"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include"
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/include"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed/x86_64-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/include"
#include "..." search starts here:
#include <...> search starts here:
 /home/eric/software/gcc/gcc-15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/backward
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "/dev/null"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "/dev/null"
COMPILER_PATH=/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/
LIBRARY_PATH=/home/eric/software/gcc/gcc-15.1.0/lib64/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../lib64/:/lib/x86_64-linux-gnu/:/lib/../lib64/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
```

```
‘_Atomic’ does not name a type
```

```
eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ g++ -E -dM -xc++ /dev/null
#define __DBL_MIN_EXP__ (-1021)
#define __LDBL_MANT_DIG__ 64
#define __cpp_nontype_template_parameter_auto 201606L
#define __UINT_LEAST16_MAX__ 0xffff
#define __FLT16_HAS_QUIET_NAN__ 1
#define __ATOMIC_ACQUIRE 2
#define __FLT128_MAX_10_EXP__ 4932
#define __FLT_MIN__ 1.17549435082228750796873653722224568e-38F
#define __GCC_IEC_559_COMPLEX 2
#define __cpp_aggregate_nsdmi 201304L
#define __UINT_LEAST8_TYPE__ unsigned char
#define __SIZEOF_FLOAT80__ 16
#define __BFLT16_DENORM_MIN__ 9.18354961579912115600575419704879436e-41BF16
#define __INTMAX_C(c) c ## L
#define __CHAR_BIT__ 8
#define __UINT8_MAX__ 0xff
#define __SCHAR_WIDTH__ 8
#define __WINT_MAX__ 0xffffffffU
#define __FLT32_MIN_EXP__ (-125)
#define __cpp_static_assert 201411L
#define __BFLT16_MIN_10_EXP__ (-37)
#define __cpp_inheriting_constructors 201511L
#define __ORDER_LITTLE_ENDIAN__ 1234
#define __WCHAR_MAX__ 0x7fffffff
#define __GCC_HAVE_SYNC_COMPARE_AND_SWAP_2 1
#define __GCC_HAVE_SYNC_COMPARE_AND_SWAP_4 1
#define __GCC_HAVE_SYNC_COMPARE_AND_SWAP_8 1
#define __GCC_ATOMIC_CHAR_LOCK_FREE 2
#define __GCC_IEC_559 2
#define __FLT32X_DECIMAL_DIG__ 17
#define __FLT_EVAL_METHOD__ 0
#define __cpp_binary_literals 201304L
#define __FLT64_DECIMAL_DIG__ 17
#define __cpp_noexcept_function_type 201510L
#define __GCC_ATOMIC_CHAR32_T_LOCK_FREE 2
#define __cpp_variadic_templates 200704L
#define __UINT_FAST64_MAX__ 0xffffffffffffffffUL
#define __SIG_ATOMIC_TYPE__ int
#define __DBL_MIN_10_EXP__ (-307)
#define __FINITE_MATH_ONLY__ 0
#define __cpp_variable_templates 201304L
#define __FLT32X_MAX_EXP__ 1024
#define __GCC_HAVE_SYNC_COMPARE_AND_SWAP_1 1
#define __FLT32_HAS_DENORM__ 1
#define __UINT_FAST8_MAX__ 0xff
#define __cpp_rvalue_reference 200610L
#define __cpp_nested_namespace_definitions 201411L
#define __DEC64_MAX_EXP__ 385
#define __INT8_C(c) c
#define __LDBL_HAS_INFINITY__ 1
#define __INT_LEAST8_WIDTH__ 8
#define __cpp_variadic_using 201611L
#define __UINT_LEAST64_MAX__ 0xffffffffffffffffUL
#define __INT_LEAST8_MAX__ 0x7f
#define __cpp_attributes 200809L
#define __cpp_capture_star_this 201603L
#define __SHRT_MAX__ 0x7fff
#define __LDBL_MAX__ 1.18973149535723176502126385303097021e+4932L
#define __FLT64X_MAX_10_EXP__ 4932
#define __cpp_if_constexpr 201606L
#define __BFLT16_MAX_10_EXP__ 38
#define __BFLT16_MAX_EXP__ 128
#define __LDBL_IS_IEC_60559__ 1
#define __FLT64X_HAS_QUIET_NAN__ 1
#define __UINT_LEAST8_MAX__ 0xff
#define __GCC_ATOMIC_BOOL_LOCK_FREE 2
#define __FLT128_DENORM_MIN__ 6.47517511943802511092443895822764655e-4966F128
#define __UINTMAX_TYPE__ long unsigned int
#define __cpp_nsdmi 200809L
#define __BFLT16_DECIMAL_DIG__ 4
#define __linux 1
#define __DEC32_EPSILON__ 1E-6DF
#define __FLT_EVAL_METHOD_TS_18661_3__ 0
#define __UINT32_MAX__ 0xffffffffU
#define __GXX_EXPERIMENTAL_CXX0X__ 1
#define __DBL_DENORM_MIN__ double(4.94065645841246544176568792868221372e-324L)
#define __FLT128_MIN_EXP__ (-16381)
#define __DEC64X_MAX_EXP__ 6145
#define __WINT_MIN__ 0U
#define __FLT128_MIN_10_EXP__ (-4931)
#define __FLT32X_IS_IEC_60559__ 1
#define __INT_LEAST16_WIDTH__ 16
#define __SCHAR_MAX__ 0x7f
#define __FLT128_MANT_DIG__ 113
#define __WCHAR_MIN__ (-__WCHAR_MAX__ - 1)
#define __INT64_C(c) c ## L
#define __GCC_ATOMIC_POINTER_LOCK_FREE 2
#define __ATOMIC_SEQ_CST 5
#define __unix 1
#define __INT_LEAST64_MAX__ 0x7fffffffffffffffL
#define __FLT32X_MANT_DIG__ 53
#define __GCC_ATOMIC_CHAR16_T_LOCK_FREE 2
#define __cpp_aligned_new 201606L
#define __FLT32_MAX_10_EXP__ 38
#define __FLT64X_EPSILON__ 1.08420217248550443400745280086994171e-19F64x
#define __STDC_HOSTED__ 1
#define __DEC64_MIN_EXP__ (-382)
#define __cpp_decltype_auto 201304L
#define __DBL_DIG__ 15
#define __STDC_EMBED_EMPTY__ 2
#define __FLT_EPSILON__ 1.19209289550781250000000000000000000e-7F
#define __GXX_WEAK__ 1
#define __SHRT_WIDTH__ 16
#define __FLT32_IS_IEC_60559__ 1
#define __LDBL_MIN__ 3.36210314311209350626267781732175260e-4932L
#define __DBL_IS_IEC_60559__ 1
#define __DEC32_MAX__ 9.999999E96DF
#define __cpp_threadsafe_static_init 200806L
#define __cpp_enumerator_attributes 201411L
#define __FLT64X_DENORM_MIN__ 3.64519953188247460252840593361941982e-4951F64x
#define __FLT32X_HAS_INFINITY__ 1
#define __unix__ 1
#define __INT_WIDTH__ 32
#define __STDC_IEC_559__ 1
#define __STDC_ISO_10646__ 201706L
#define __DECIMAL_DIG__ 21
#define __STDC_IEC_559_COMPLEX__ 1
#define __FLT64_EPSILON__ 2.22044604925031308084726333618164062e-16F64
#define __gnu_linux__ 1
#define __INT16_MAX__ 0x7fff
#define __FLT64_MIN_EXP__ (-1021)
#define __DEC64X_EPSILON__ 1E-33D64x
#define __FLT64X_MIN_10_EXP__ (-4931)
#define __LDBL_HAS_QUIET_NAN__ 1
#define __FLT16_MIN_EXP__ (-13)
#define __FLT64_MANT_DIG__ 53
#define __FLT64X_MANT_DIG__ 64
#define __BFLT16_DIG__ 2
#define __GNUC__ 15
#define __GXX_RTTI 1
#define __pie__ 2
#define __MMX__ 1
#define __FLT_HAS_DENORM__ 1
#define __SIZEOF_LONG_DOUBLE__ 16
#define __BIGGEST_ALIGNMENT__ 16
#define __STDC_UTF_16__ 1
#define __FLT64_MAX_10_EXP__ 308
#define __BFLT16_IS_IEC_60559__ 0
#define __FLT16_MAX_10_EXP__ 4
#define __cpp_delegating_constructors 200604L
#define __DBL_MAX__ double(1.79769313486231570814527423731704357e+308L)
#define __cpp_raw_strings 200710L
#define __INT_FAST32_MAX__ 0x7fffffffffffffffL
#define __DBL_HAS_INFINITY__ 1
#define __INT64_MAX__ 0x7fffffffffffffffL
#define __SIZEOF_FLOAT__ 4
#define __HAVE_SPECULATION_SAFE_VALUE 1
#define __cpp_fold_expressions 201603L
#define __DEC32_MIN_EXP__ (-94)
#define __INTPTR_WIDTH__ 64
#define __UINT_LEAST32_MAX__ 0xffffffffU
#define __FLT32X_HAS_DENORM__ 1
#define __INT_FAST16_TYPE__ long int
#define __MMX_WITH_SSE__ 1
#define __LDBL_HAS_DENORM__ 1
#define __SEG_GS 1
#define __BFLT16_EPSILON__ 7.81250000000000000000000000000000000e-3BF16
#define __cplusplus 201703L
#define __cpp_ref_qualifiers 200710L
#define __DEC32_MIN__ 1E-95DF
#define __DEPRECATED 1
#define __cpp_rvalue_references 200610L
#define __DBL_MAX_EXP__ 1024
#define __WCHAR_WIDTH__ 32
#define __FLT32_MAX__ 3.40282346638528859811704183484516925e+38F32
#define __DEC128_EPSILON__ 1E-33DL
#define __FLT16_DECIMAL_DIG__ 5
#define __SSE2_MATH__ 1
#define __ATOMIC_HLE_RELEASE 131072
#define __PTRDIFF_MAX__ 0x7fffffffffffffffL
#define __amd64 1
#define __DEC64X_MAX__ 9.999999999999999999999999999999999E6144D64x
#define __ATOMIC_HLE_ACQUIRE 65536
#define __GNUG__ 15
#define __LONG_LONG_MAX__ 0x7fffffffffffffffLL
#define __SIZEOF_SIZE_T__ 8
#define __BFLT16_HAS_INFINITY__ 1
#define __FLT64X_MIN_EXP__ (-16381)
#define __SIZEOF_WINT_T__ 4
#define __FLT32X_DIG__ 15
#define __LONG_LONG_WIDTH__ 64
#define __cpp_initializer_lists 200806L
#define __FLT32_MAX_EXP__ 128
#define __cpp_hex_float 201603L
#define __GXX_ABI_VERSION 1020
#define __FLT_MIN_EXP__ (-125)
#define __GCC_HAVE_DWARF2_CFI_ASM 1
#define __x86_64 1
#define __cpp_lambdas 200907L
#define __INT_FAST64_TYPE__ long int
#define __BFLT16_MAX__ 3.38953138925153547590470800371487867e+38BF16
#define __FLT64_DENORM_MIN__ 4.94065645841246544176568792868221372e-324F64
#define __cpp_template_auto 201606L
#define __FLT16_DENORM_MIN__ 5.96046447753906250000000000000000000e-8F16
#define __FLT128_EPSILON__ 1.92592994438723585305597794258492732e-34F128
#define __FLT64X_NORM_MAX__ 1.18973149535723176502126385303097021e+4932F64x
#define __SIZEOF_POINTER__ 8
#define __SIZE_TYPE__ long unsigned int
#define __LP64__ 1
#define __DBL_HAS_QUIET_NAN__ 1
#define __FLT32X_EPSILON__ 2.22044604925031308084726333618164062e-16F32x
#define __LDBL_MAX_EXP__ 16384
#define __DECIMAL_BID_FORMAT__ 1
#define __FLT64_MIN_10_EXP__ (-307)
#define __FLT16_MIN_10_EXP__ (-4)
#define __FLT64X_DECIMAL_DIG__ 21
#define __DEC128_MIN__ 1E-6143DL
#define __REGISTER_PREFIX__ 
#define __UINT16_MAX__ 0xffff
#define __FLT128_HAS_INFINITY__ 1
#define __FLT32_MIN__ 1.17549435082228750796873653722224568e-38F32
#define __UINT8_TYPE__ unsigned char
#define __FLT_DIG__ 6
#define __NO_INLINE__ 1
#define __DEC_EVAL_METHOD__ 2
#define __FLT_MANT_DIG__ 24
#define __LDBL_DECIMAL_DIG__ 21
#define __VERSION__ "15.1.0"
#define __UINT64_C(c) c ## UL
#define __cpp_unicode_characters 201411L
#define __DEC64X_MIN__ 1E-6143D64x
#define _STDC_PREDEF_H 1
#define __INT_LEAST32_MAX__ 0x7fffffff
#define __GCC_ATOMIC_INT_LOCK_FREE 2
#define __FLT128_MAX_EXP__ 16384
#define __FLT32_MANT_DIG__ 24
#define __cpp_decltype 200707L
#define __FLOAT_WORD_ORDER__ __ORDER_LITTLE_ENDIAN__
#define __FLT32X_MIN_EXP__ (-1021)
#define __STDC_IEC_60559_COMPLEX__ 201404L
#define __cpp_aggregate_bases 201603L
#define __BFLT16_MIN__ 1.17549435082228750796873653722224568e-38BF16
#define __FLT128_HAS_DENORM__ 1
#define __FLT32_DECIMAL_DIG__ 9
#define __FLT128_DIG__ 33
#define __INT32_C(c) c
#define __DEC64_EPSILON__ 1E-15DD
#define __ORDER_PDP_ENDIAN__ 3412
#define __DEC128_MIN_EXP__ (-6142)
#define __DEC128_MAX__ 9.999999999999999999999999999999999E6144DL
#define __INT_FAST32_TYPE__ long int
#define __UINT_LEAST16_TYPE__ short unsigned int
#define __DEC64X_MANT_DIG__ 34
#define __DEC128_MAX_EXP__ 6145
#define unix 1
#define __DBL_HAS_DENORM__ 1
#define __cpp_rtti 199711L
#define __UINT64_MAX__ 0xffffffffffffffffUL
#define __FLT_IS_IEC_60559__ 1
#define __GNUC_WIDE_EXECUTION_CHARSET_NAME "UTF-32LE"
#define __FLT64X_DIG__ 18
#define __INT8_TYPE__ signed char
#define __cpp_digit_separators 201309L
#define __ELF__ 1
#define __GCC_ASM_FLAG_OUTPUTS__ 1
#define __UINT32_TYPE__ unsigned int
#define __BFLT16_HAS_QUIET_NAN__ 1
#define __FLT_RADIX__ 2
#define __INT_LEAST16_TYPE__ short int
#define __LDBL_EPSILON__ 1.08420217248550443400745280086994171e-19L
#define __UINTMAX_C(c) c ## UL
#define __FLT16_DIG__ 3
#define __k8 1
#define __FLT32X_MIN__ 2.22507385850720138309023271733240406e-308F32x
#define __SIG_ATOMIC_MAX__ 0x7fffffff
#define __cpp_constexpr 201603L
#define __GCC_ATOMIC_WCHAR_T_LOCK_FREE 2
#define __USER_LABEL_PREFIX__ 
#define __STDC_IEC_60559_BFP__ 201404L
#define __SIZEOF_PTRDIFF_T__ 8
#define __FLT64X_HAS_INFINITY__ 1
#define __SIZEOF_LONG__ 8
#define __LDBL_DIG__ 18
#define __FLT64_IS_IEC_60559__ 1
#define __x86_64__ 1
#define __FLT16_IS_IEC_60559__ 1
#define __FLT16_MAX_EXP__ 16
#define __DEC32_SUBNORMAL_MIN__ 0.000001E-95DF
#define __STDC_EMBED_FOUND__ 1
#define __INT_FAST16_MAX__ 0x7fffffffffffffffL
#define __GCC_CONSTRUCTIVE_SIZE 64
#define __FLT64_DIG__ 15
#define __UINT_FAST32_MAX__ 0xffffffffffffffffUL
#define __UINT_LEAST64_TYPE__ long unsigned int
#define __FLT16_EPSILON__ 9.76562500000000000000000000000000000e-4F16
#define __FLT_HAS_QUIET_NAN__ 1
#define __FLT_MAX_10_EXP__ 38
#define __FLT64X_HAS_DENORM__ 1
#define __DEC128_SUBNORMAL_MIN__ 0.000000000000000000000000000000001E-6143DL
#define __FLT_HAS_INFINITY__ 1
#define __GNUC_EXECUTION_CHARSET_NAME "UTF-8"
#define __cpp_unicode_literals 200710L
#define __UINT_FAST16_TYPE__ long unsigned int
#define __DEC64_MAX__ 9.999999999999999E384DD
#define __STDC_EMBED_NOT_FOUND__ 0
#define __INT_FAST32_WIDTH__ 64
#define __CHAR16_TYPE__ short unsigned int
#define __PRAGMA_REDEFINE_EXTNAME 1
#define __DEC64X_SUBNORMAL_MIN__ 0.000000000000000000000000000000001E-6143D64x
#define __SIZE_WIDTH__ 64
#define __SEG_FS 1
#define __INT_LEAST16_MAX__ 0x7fff
#define __FLT16_NORM_MAX__ 6.55040000000000000000000000000000000e+4F16
#define __DEC64_MANT_DIG__ 16
#define __FLT32_DENORM_MIN__ 1.40129846432481707092372958328991613e-45F32
#define __SIG_ATOMIC_WIDTH__ 32
#define __INT_LEAST64_TYPE__ long int
#define __INT16_TYPE__ short int
#define __INT_LEAST8_TYPE__ signed char
#define __FLT16_MAX__ 6.55040000000000000000000000000000000e+4F16
#define __FLT128_MIN__ 3.36210314311209350626267781732175260e-4932F128
#define __cpp_structured_bindings 201606L
#define __SIZEOF_INT__ 4
#define __DEC32_MAX_EXP__ 97
#define __INT_FAST8_MAX__ 0x7f
#define __FLT128_MAX__ 1.18973149535723176508575932662800702e+4932F128
#define __INTPTR_MAX__ 0x7fffffffffffffffL
#define __cpp_sized_deallocation 201309L
#define __cpp_guaranteed_copy_elision 201606L
#define linux 1
#define __FLT64_HAS_QUIET_NAN__ 1
#define __FLT32_MIN_10_EXP__ (-37)
#define __EXCEPTIONS 1
#define __UINT16_C(c) c
#define __PTRDIFF_WIDTH__ 64
#define __cpp_range_based_for 201603L
#define __INT_FAST16_WIDTH__ 64
#define __FLT64_HAS_INFINITY__ 1
#define __FLT64X_MAX__ 1.18973149535723176502126385303097021e+4932F64x
#define __FLT16_HAS_INFINITY__ 1
#define __STDCPP_DEFAULT_NEW_ALIGNMENT__ 16
#define __SIG_ATOMIC_MIN__ (-__SIG_ATOMIC_MAX__ - 1)
#define __code_model_small__ 1
#define __GCC_ATOMIC_LONG_LOCK_FREE 2
#define __cpp_nontype_template_args 201411L
#define __DEC32_MANT_DIG__ 7
#define __k8__ 1
#define __INTPTR_TYPE__ long int
#define __UINT16_TYPE__ short unsigned int
#define __WCHAR_TYPE__ int
#define __pic__ 2
#define __UINTPTR_MAX__ 0xffffffffffffffffUL
#define __INT_FAST64_WIDTH__ 64
#define __INT_FAST64_MAX__ 0x7fffffffffffffffL
#define __GCC_ATOMIC_TEST_AND_SET_TRUEVAL 1
#define __FLT_NORM_MAX__ 3.40282346638528859811704183484516925e+38F
#define __FLT32_HAS_INFINITY__ 1
#define __FLT64X_MAX_EXP__ 16384
#define __UINT_FAST64_TYPE__ long unsigned int
#define __cpp_inline_variables 201606L
#define __BFLT16_MIN_EXP__ (-125)
#define __INT_MAX__ 0x7fffffff
#define __linux__ 1
#define __INT64_TYPE__ long int
#define __FLT_MAX_EXP__ 128
#define __ORDER_BIG_ENDIAN__ 4321
#define __DBL_MANT_DIG__ 53
#define __SIZEOF_FLOAT128__ 16
#define __BFLT16_MANT_DIG__ 8
#define __DEC64_MIN__ 1E-383DD
#define __WINT_TYPE__ unsigned int
#define __UINT_LEAST32_TYPE__ unsigned int
#define __SIZEOF_SHORT__ 2
#define __FLT32_NORM_MAX__ 3.40282346638528859811704183484516925e+38F32
#define __SSE__ 1
#define __LDBL_MIN_EXP__ (-16381)
#define __FLT64_MAX__ 1.79769313486231570814527423731704357e+308F64
#define __DEC64X_MIN_EXP__ (-6142)
#define __amd64__ 1
#define __WINT_WIDTH__ 32
#define __INT_LEAST64_WIDTH__ 64
#define __FLT32X_MAX_10_EXP__ 308
#define __cpp_namespace_attributes 201411L
#define __SIZEOF_INT128__ 16
#define __FLT16_MIN__ 6.10351562500000000000000000000000000e-5F16
#define __FLT64X_IS_IEC_60559__ 1
#define __GXX_CONSTEXPR_ASM__ 1
#define __LDBL_MAX_10_EXP__ 4932
#define __ATOMIC_RELAXED 0
#define __DBL_EPSILON__ double(2.22044604925031308084726333618164062e-16L)
#define __INT_LEAST32_TYPE__ int
#define _LP64 1
#define __UINT8_C(c) c
#define __FLT64_MAX_EXP__ 1024
#define __cpp_return_type_deduction 201304L
#define __SIZEOF_WCHAR_T__ 4
#define __GNUC_PATCHLEVEL__ 0
#define __FLT128_NORM_MAX__ 1.18973149535723176508575932662800702e+4932F128
#define __FLT64_NORM_MAX__ 1.79769313486231570814527423731704357e+308F64
#define __FLT128_HAS_QUIET_NAN__ 1
#define __INTMAX_MAX__ 0x7fffffffffffffffL
#define __INT_FAST8_TYPE__ signed char
#define __FLT64X_MIN__ 3.36210314311209350626267781732175260e-4932F64x
#define __STDCPP_THREADS__ 1
#define __BFLT16_HAS_DENORM__ 1
#define __GNUC_STDC_INLINE__ 1
#define __FLT64_HAS_DENORM__ 1
#define __FLT32_EPSILON__ 1.19209289550781250000000000000000000e-7F32
#define __FLT16_HAS_DENORM__ 1
#define __DBL_DECIMAL_DIG__ 17
#define __STDC_UTF_32__ 1
#define __INT_FAST8_WIDTH__ 8
#define __FXSR__ 1
#define __FLT32X_MAX__ 1.79769313486231570814527423731704357e+308F32x
#define __DBL_NORM_MAX__ double(1.79769313486231570814527423731704357e+308L)
#define __BYTE_ORDER__ __ORDER_LITTLE_ENDIAN__
#define __GCC_DESTRUCTIVE_SIZE 64
#define __INTMAX_WIDTH__ 64
#define __cpp_runtime_arrays 198712L
#define __FLT32_DIG__ 6
#define __UINT64_TYPE__ long unsigned int
#define __UINT32_C(c) c ## U
#define __cpp_alias_templates 200704L
#define __FLT_DENORM_MIN__ 1.40129846432481707092372958328991613e-45F
#define __FLT128_IS_IEC_60559__ 1
#define __INT8_MAX__ 0x7f
#define __LONG_WIDTH__ 64
#define __DBL_MIN__ double(2.22507385850720138309023271733240406e-308L)
#define __PIC__ 2
#define __INT32_MAX__ 0x7fffffff
#define __UINT_FAST32_TYPE__ long unsigned int
#define __FLT16_MANT_DIG__ 11
#define __FLT32X_NORM_MAX__ 1.79769313486231570814527423731704357e+308F32x
#define __CHAR32_TYPE__ unsigned int
#define __FLT_MAX__ 3.40282346638528859811704183484516925e+38F
#define __SSE2__ 1
#define __cpp_deduction_guides 201703L
#define __BFLT16_NORM_MAX__ 3.38953138925153547590470800371487867e+38BF16
#define __INT32_TYPE__ int
#define __SIZEOF_DOUBLE__ 8
#define __cpp_exceptions 199711L
#define __FLT_MIN_10_EXP__ (-37)
#define __FLT64_MIN__ 2.22507385850720138309023271733240406e-308F64
#define __INT_LEAST32_WIDTH__ 32
#define __INTMAX_TYPE__ long int
#define __GLIBCXX_BITSIZE_INT_N_0 128
#define __FLT32X_HAS_QUIET_NAN__ 1
#define __ATOMIC_CONSUME 1
#define __GNUC_MINOR__ 1
#define __GLIBCXX_TYPE_INT_N_0 __int128
#define __UINTMAX_MAX__ 0xffffffffffffffffUL
#define __PIE__ 2
#define __FLT32X_DENORM_MIN__ 4.94065645841246544176568792868221372e-324F32x
#define __cpp_template_template_args 201611L
#define __DBL_MAX_10_EXP__ 308
#define __LDBL_DENORM_MIN__ 3.64519953188247460252840593361941982e-4951L
#define __INT16_C(c) c
#define __STDC__ 1
#define __PTRDIFF_TYPE__ long int
#define __LONG_MAX__ 0x7fffffffffffffffL
#define __FLT32X_MIN_10_EXP__ (-307)
#define __UINTPTR_TYPE__ long unsigned int
#define __DEC64_SUBNORMAL_MIN__ 0.000000000000001E-383DD
#define __DEC128_MANT_DIG__ 34
#define __LDBL_MIN_10_EXP__ (-4931)
#define __cpp_generic_lambdas 201304L
#define __SSE_MATH__ 1
#define __SIZEOF_LONG_LONG__ 8
#define __cpp_user_defined_literals 200809L
#define __FLT128_DECIMAL_DIG__ 36
#define __GCC_ATOMIC_LLONG_LOCK_FREE 2
#define __FLT32_HAS_QUIET_NAN__ 1
#define __FLT_DECIMAL_DIG__ 9
#define __UINT_FAST16_MAX__ 0xffffffffffffffffUL
#define __LDBL_NORM_MAX__ 1.18973149535723176502126385303097021e+4932L
#define __GCC_ATOMIC_SHORT_LOCK_FREE 2
#define __SIZE_MAX__ 0xffffffffffffffffUL
#define __UINT_FAST8_TYPE__ unsigned char
#define _GNU_SOURCE 1
#define __cpp_init_captures 201304L
#define __ATOMIC_ACQ_REL 4
#define __ATOMIC_RELEASE 3
eric@fantasy:~$ 
```


## search file include text "stdatomic.h"
```
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ChangeLog-2013
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ChangeLog-2014
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ChangeLog-2015
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ChangeLog-2020
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ChangeLog-2022
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ChangeLog-2024
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\ChangeLog-2008
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\ChangeLog-2009
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\ChangeLog-2010
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\ChangeLog-2022
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\ChangeLog-2023
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\ChangeLog-2024
c:\Users\eric\Downloads\gcc-15.1.0\MD5SUMS
c:\Users\eric\Downloads\gcc-15.1.0\NEWS
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\include\Makefile.am
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\c11-atomic-exec-7.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\c23-atomic-lockfree-char8_t.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\c23-atomic-op-char8_t.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-bitint-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-bitint-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-compare-exchange-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-compare-exchange-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-compare-exchange-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-compare-exchange-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-exchange-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-exchange-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-exchange-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-exchange-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-fence-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-fence-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-flag-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-flag-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-generic.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-init.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-kill-dep.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-load-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-load-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-load-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-load-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-lockfree-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-op-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-op-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-op-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-op-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-op-5.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-store-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-store-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-store-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-store-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\stdatomic-vm.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\atomic\invalid-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\c11-atomic-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\c11-atomic-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\c11-atomic-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\c23-atomic-1.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\pr103184-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\pr61756.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.dg\Wtype-limits2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\aarch64\atomic-store.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\aarch64\ldaprc.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\aarch64\ldaprcex.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\aarch64\ldaprcex.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\atomic_load_10.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\atomic_load_11.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\pr117235.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\pr99904.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-10a.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-10b.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-11.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-12.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-13.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-14.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-3a.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-3a.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-3b.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-5.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-6.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-7.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-8a.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-8b.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-8c.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr102566-9a.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr103194-2.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr103194-3.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\x386\pr103194-4.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\powerpc\volatile-mem.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\wax\bboci.c
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\wax\bbseic.c
c:\Users\eric\Downloads\gcc-15.1.0\libatomic\libence.c
c:\Users\eric\Downloads\gcc-15.1.0\libatomic\flag.c
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\testsuite\29_atomics\headers\atomic_types.std_c++2a.negative
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\testsuite\29_atomics\headers\atomic.h\11580f.c
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\testsuite\29_atomics\headers\atomic.h\c_compat.cc
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\testsuite\29_atomics\headers\stdatomic.h\version.cc
c:\Users\eric\Downloads\gcc-15.1.0\libphobos\libdruntime\core\stdc\stdatomic.d
c:\Users\eric\Downloads\gcc-15.1.0\gcc\ginclude\stdatomic.h
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\include\c_compatibility\stdatomic.h
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\include\precompiled\stdc++.h
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\doc\html\manual\using_headers.html
c:\Users\eric\Downloads\gcc-15.1.0\gcc\Makefile.in
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\include\Makefile.in
c:\Users\eric\Downloads\gcc-15.1.0\gcc\doc\cpp_info
c:\Users\eric\Downloads\gcc-15.1.0\gcc\doc\vcpp.texi
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\atomic_acquire.x
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\atomic_loaddi_relaxed.x
c:\Users\eric\Downloads\gcc-15.1.0\gcc\testsuite\gcc.target\arm\atomic_loaddi_seq_cst.x
c:\Users\eric\Downloads\gcc-15.1.0\libstdc++\v3\doc\xml\manual\using.xml
```

find / -name 'stdatomic.h' 2>/dev/null
```
/home/eric/work/compiler/gcc_work/gcc-15.1.0/gcc/ginclude/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/include/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/include/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/gcc/include/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/stage1-gcc/include/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/prev-gcc/include/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/prev-x86_64-pc-linux-gnu/libstdc++-v3/include/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/libstdc++-v3/include/c_compatibility/stdatomic.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/libstdc++-v3/testsuite/29_atomics/headers/stdatomic.h
/home/eric/software/Qt/Tools/QtCreator/libexec/qtcreator/clang/lib/clang/19/include/stdatomic.h
/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include/stdatomic.h
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/stdatomic.h
/opt/intel/oneapi/dpcpp-ct/2025.1/opt/dpct/lib/clang/20/include/stdatomic.h
/opt/intel/oneapi/compiler/2025.1/lib/clang/20/include/stdatomic.h
/opt/intel/oneapi/2025.1/lib/clang/20/include/stdatomic.h
/opt/intel/oneapi/2025.1/opt/dpct/lib/clang/20/include/stdatomic.h
/usr/lib/gcc/x86_64-linux-gnu/13/include/stdatomic.h
/usr/include/c++/13/stdatomic.h
```

find / -name 'std.cc' 2>/dev/null
```
eric@fantasy:~$ find / -name 'std.cc' 2>/dev/null
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/src/c++23/std.cc
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/include/bits/std.cc
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/src/debug/c++23/std.cc
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/src/c++23/std.cc
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/include/bits/std.cc
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/prev-x86_64-pc-linux-gnu/libstdc++-v3/src/c++23/std.cc
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/prev-x86_64-pc-linux-gnu/libstdc++-v3/include/bits/std.cc
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/bits/std.cc
```

find / -name 'stdc++.h' 2>/dev/null
```
find / -name 'stdc++.h' 2>/dev/null
eric@fantasy:~$ find / -name 'stdc++.h' 2>/dev/null
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/include/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/x86_64-pc-linux-gnu/libstdc++-v3/include/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/build/prev-x86_64-pc-linux-gnu/libstdc++-v3/include/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/work/compiler/gcc_work/gcc-15.1.0/libstdc++-v3/include/precompiled/stdc++.h
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu/bits/stdc++.h
/usr/include/x86_64-linux-gnu/c++/13/bits/stdc++.h
```



```
g++ -std=c++23 -fmodules -O2 -c -fmodule-only bits/std.cc
```

```
eric@fantasy:~/work/cpp_work/ModernCpp/codes/ubuntu/ranges/02$ g++ -std=c++23 -fmodules -O2 -c -fmodule-only -fsearch-include-path bits/std.cc
In file included from /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu/bits/stdc++.h:102,
                 from /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/bits/std.cc:30:
/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include/stdatomic.h:40:9: error: ‘_Atomic’ does not name a type
   40 | typedef _Atomic _Bool atomic_bool;
      |         ^~~~~~~
/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include/stdatomic.h:41:9: error: ‘_Atomic’ does not name a type
   41 | typedef _Atomic char atomic_char;
```

```
/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0
/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include/stdatomic.h
```

```
eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ g++ --version
g++ (GCC) 15.1.0
Copyright (C) 2025 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

eric@fantasy:~$ g++ -std=c++23 -v -E -x c++ - < /dev/null
Using built-in specs.
COLLECT_GCC=g++
Target: x86_64-pc-linux-gnu
Configured with: ../configure --prefix=/home/eric/software/gcc/gcc-15.1.0 --enable-languages=c,c++,fortran --enable-bootstrap --enable-checking=release --enable-shared --enable-threads=posix --enable-libgomp --enable-libatomic --enable-libstdcxx-filesystem-ts --enable-libstdcxx-time --with-system-zlib --with-system-libiconv --enable-default-pie --enable-default-ssp --enable-libssp --enable-cet=auto --enable-linker-build-id --with-tune=generic --with-default-libstdcxx-abi=new --enable-libstdcxx-modules --enable-libstdcxx-debug --enable-libstdcxx-parallel --enable-nls --disable-multilib
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 15.1.0 (GCC) 
COLLECT_GCC_OPTIONS='-std=c++23' '-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
 /home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/cc1plus -E -quiet -v -imultiarch x86_64-linux-gnu -D_GNU_SOURCE - -mtune=generic -march=x86-64 -std=c++23 -dumpbase -
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/x86_64-pc-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/backward"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include"
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/include"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed/x86_64-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/include"
#include "..." search starts here:
#include <...> search starts here:
 /home/eric/software/gcc/gcc-15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/backward
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "<stdin>"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "<stdin>"
COMPILER_PATH=/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/
LIBRARY_PATH=/home/eric/software/gcc/gcc-15.1.0/lib64/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../lib64/:/lib/x86_64-linux-gnu/:/lib/../lib64/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-std=c++23' '-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
```

/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu/bits/stdc++.h

```
#include <bits/stdc++.h>
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu/bits/stdc++.h
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/bits/std.cc
/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/
```

gcc15.1.0
```
#%Module1.0
## GCC 15.1.0 modulefile
## Module file for user-compiled GCC 15.1.0 installed at /home/eric/software/gcc/gcc-15.1.0

# Help message describing the module
proc ModulesHelp { } {
    puts stderr "\tGCC 15.1.0 - Sets up environment for GCC 15.1.0\n"
    puts stderr "\tThis module configures the environment for GCC 15.1.0, including:\n"
    puts stderr "\t- Compilers (gcc, g++, gfortran)\n"
    puts stderr "\t- C++ header files\n"
    puts stderr "\t- Runtime and linker libraries\n"
    puts stderr "\t- Man pages\n"
    puts stderr "\tInstallation prefix: /home/eric/software/gcc/gcc-15.1.0\n"
    puts stderr "\tUse 'module show gcc/15.1.0' to view detailed environment changes.\n"
}

# Brief description for 'module list' and 'module avail'
module-whatis "Sets up environment for GCC 15.1.0 (user-compiled, prefix: /home/eric/software/gcc/gcc-15.1.0)"

# Prevent loading conflicting GCC modules
conflict gcc
conflict gcc/13

# Set installation prefix
set prefix /home/eric/software/gcc/gcc-15.1.0

# Check if installation directory exists
if { ![file isdirectory $prefix] } {
    puts stderr "Error: GCC 15.1.0 installation directory ($prefix) not found!"
    exit 1
}

# Add compiler binary path
prepend-path PATH $prefix/bin

# Add man pages path
prepend-path MANPATH $prefix/share/man

# Add C++ include paths (based on g++ -v output)
prepend-path CPLUS_INCLUDE_PATH $prefix/include/c++/15.1.0/backward
prepend-path CPLUS_INCLUDE_PATH $prefix/include/c++/15.1.0/x86_64-pc-linux-gnu
prepend-path CPLUS_INCLUDE_PATH $prefix/include/c++/15.1.0
prepend-path CPLUS_INCLUDE_PATH $prefix/include
#prepend-path CPLUS_INCLUDE_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
#prepend-path CPLUS_INCLUDE_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed

# Add runtime library paths
prepend-path LD_LIBRARY_PATH $prefix/lib
prepend-path LD_LIBRARY_PATH $prefix/lib64
prepend-path LD_LIBRARY_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0

# Add linker library paths
prepend-path LIBRARY_PATH $prefix/lib
prepend-path LIBRARY_PATH $prefix/lib64
prepend-path LIBRARY_PATH $prefix/lib/gcc/x86_64-pc-linux-gnu/15.1.0

# Set compiler variables for build systems
setenv CC $prefix/bin/gcc
setenv CXX $prefix/bin/g++
setenv FC $prefix/bin/gfortran

# Set GCC version for scripts or build tools
setenv GCC_VERSION 15.1.0
```

```
eric@fantasy:~$ module load gcc/15.1.0 
eric@fantasy:~$ echo $CPLUS_INCLUDE_PATH
/home/eric/software/gcc/gcc-15.1.0/include:/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0:/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu:/home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/backward
eric@fantasy:~$ g++ -std=c++23 -v -E -x c++ - < /dev/null
Using built-in specs.
COLLECT_GCC=g++
Target: x86_64-pc-linux-gnu
Configured with: ../configure --prefix=/home/eric/software/gcc/gcc-15.1.0 --enable-languages=c,c++,fortran --enable-bootstrap --enable-checking=release --enable-shared --enable-threads=posix --enable-libgomp --enable-libatomic --enable-libstdcxx-filesystem-ts --enable-libstdcxx-time --with-system-zlib --with-system-libiconv --enable-default-pie --enable-default-ssp --enable-libssp --enable-cet=auto --enable-linker-build-id --with-tune=generic --with-default-libstdcxx-abi=new --enable-libstdcxx-modules --enable-libstdcxx-debug --enable-libstdcxx-parallel --enable-nls --disable-multilib
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 15.1.0 (GCC) 
COLLECT_GCC_OPTIONS='-std=c++23' '-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'
 /home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/cc1plus -E -quiet -v -imultiarch x86_64-linux-gnu -D_GNU_SOURCE - -mtune=generic -march=x86-64 -std=c++23 -dumpbase -
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/x86_64-pc-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../include/c++/15.1.0/backward"
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"
ignoring duplicate directory "/home/eric/software/gcc/gcc-15.1.0/include"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed/x86_64-linux-gnu"
ignoring nonexistent directory "/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../x86_64-pc-linux-gnu/include"
#include "..." search starts here:
#include <...> search starts here:
 /home/eric/software/gcc/gcc-15.1.0/include
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/x86_64-pc-linux-gnu
 /home/eric/software/gcc/gcc-15.1.0/include/c++/15.1.0/backward
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include
 /usr/local/include
 /home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/include-fixed
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
# 0 "<stdin>"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "<stdin>"
COMPILER_PATH=/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/libexec/gcc/x86_64-pc-linux-gnu/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/
LIBRARY_PATH=/home/eric/software/gcc/gcc-15.1.0/lib64/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../../lib64/:/lib/x86_64-linux-gnu/:/lib/../lib64/:/usr/lib/x86_64-linux-gnu/:/usr/lib/../lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/:/home/eric/software/gcc/gcc-15.1.0/lib64/:/home/eric/software/gcc/gcc-15.1.0/lib/:/home/eric/software/gcc/gcc-15.1.0/lib/gcc/x86_64-pc-linux-gnu/15.1.0/../../../:/lib/:/usr/lib/
COLLECT_GCC_OPTIONS='-std=c++23' '-v' '-E' '-shared-libgcc' '-mtune=generic' '-march=x86-64'


```


# CGNS-Compile

## Code

-  [CGNS4.5.0](https://github.com/CGNS/CGNS/archive/refs/tags/v4.5.0.tar.gz).

```powershell
cmake -DCMAKE_INSTALL_PREFIX=c:/dev/cgns/4.4.0 .. `
      -DCMAKE_BUILD_TYPE=Release `
      -DCGNS_ENABLE_HDF5=ON `
      -DCGNS_ENABLE_64BIT=ON `
      -DCGNS_ENABLE_FORTRAN=ON `
      -DCGNS_ENABLE_TESTS=ON `
      -DCGNS_BUILD_SHARED=ON `
      -DCGNS_USE_SHARED=ON `
      -DCGNS_BUILD_TESTING=ON `
      -DCGNS_BUILD_CGNSTOOLS=ON `
      -DHDF5_DIR="c:/dev/HDF_Group/HDF5/1.14.2/cmake"
cmake --build . --parallel 4 --config Release
cmake --install . --config Release --prefix c:/dev/cgns/4.4.0
```

```bash
cmake -DCMAKE_INSTALL_PREFIX=/home/eric/software/cgns/4.5.0 .. \
      -DCMAKE_BUILD_TYPE=Release \
      -DCGNS_ENABLE_HDF5=ON \
      -DCGNS_ENABLE_64BIT=ON \
      -DCGNS_ENABLE_FORTRAN=ON \
      -DCGNS_ENABLE_TESTS=ON \
      -DCGNS_BUILD_SHARED=ON \
      -DCGNS_USE_SHARED=ON \
      -DCGNS_BUILD_TESTING=ON \
      -DCGNS_BUILD_CGNSTOOLS=ON \
      -DHDF5_DIR="/home/eric/software/HDF_Group/HDF5/1.14.8/cmake"
cmake --build . --parallel 4 --config Release
cmake --install . --config Release --prefix /home/eric/software/cgns/4.5.0
```

```bash
module load hdf5/1.14.6
echo $HDF5_DIR
cmake -DCMAKE_INSTALL_PREFIX=/home/eric/software/cgns/4.5.0 .. \
      -DCMAKE_BUILD_TYPE=Release \
      -DCGNS_ENABLE_HDF5=ON \
      -DCGNS_ENABLE_64BIT=ON \
      -DCGNS_ENABLE_FORTRAN=ON \
      -DCGNS_ENABLE_TESTS=ON \
      -DCGNS_BUILD_SHARED=ON \
      -DCGNS_USE_SHARED=ON \
      -DCGNS_BUILD_TESTING=ON \
      -DCGNS_BUILD_CGNSTOOLS=ON
cmake --build . --parallel 4 --config Release
cmake --install . --config Release
```


```
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ module list
No Modulefiles Currently Loaded.
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ module avail
------------------- /home/eric/software/modules/modulefiles --------------------
cmake/4.0.1  dot  hdf5/1.14.6  module-git  module-info  modules  null  use.own  

------------------- /opt/intel/oneapi/2025.1/etc/modulefiles -------------------
ccl/2021.15.0                 dnnl/3.7.1                  mkl/2025.1       
compiler-intel-llvm/2025.1.0  dpct/2025.1.0               mpi/2021.15      
compiler-rt/2025.1.0          dpl/2022.8                  oneapi/2025.1.0  
compiler/2025.1.0             intel_ipp_intel64/2022.1    tbb/2022.1       
debugger/2025.1.0             intel_ippcp_intel64/2025.1  umf/0.10.0       
dev-utilities/2025.1.0        ishmem/1.3.0                

Key:
modulepath  
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ module load cmake/4.0.1 
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ module load hdf5/1.14.6 
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ module list
Currently Loaded Modulefiles:
 1) cmake/4.0.1   2) hdf5/1.14.6  
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ cmake --version
cmake version 4.0.1

CMake suite maintained and supported by Kitware (kitware.com/cmake).
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ g++ --version
g++ (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ gfortran --version
GNU Fortran (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ echo $HDF5_DIR
/home/eric/software/HDF_Group/HDF5/1.14.6/cmake
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$

```

```
sudo apt-get install libglu1-mesa-dev
sudo apt-get install tcl-dev tk-dev
```

Install Missing X11 Libraries

The error suggests that libSM (Session Management) and libXmu (X Miscellaneous Utilities) are missing or not found.

```
sudo apt-get install libsm-dev libxmu-dev
```

Verify Library Installation
```
find /usr/lib -name "libSM*"
find /usr/lib -name "libXmu*
```

```
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ find /usr/lib -name "libSM*"
/usr/lib/x86_64-linux-gnu/libSM.so.6.0.1
/usr/lib/x86_64-linux-gnu/libSM.a
/usr/lib/x86_64-linux-gnu/libSM.so
/usr/lib/x86_64-linux-gnu/libSM.so.6
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ find /usr/lib -name "libXmu*"
/usr/lib/x86_64-linux-gnu/libXmuu.so.1
/usr/lib/x86_64-linux-gnu/libXmuu.so.1.0.0
/usr/lib/x86_64-linux-gnu/libXmu.so
/usr/lib/x86_64-linux-gnu/libXmu.so.6.2.0
/usr/lib/x86_64-linux-gnu/libXmu.so.6
/usr/lib/x86_64-linux-gnu/libXmu.a
```

```
cmake -DCMAKE_INSTALL_PREFIX=/home/eric/software/cgns/4.5.0 .. \
      -DCMAKE_BUILD_TYPE=Release \
      -DCGNS_ENABLE_HDF5=ON \
      -DCGNS_ENABLE_64BIT=ON \
      -DCGNS_ENABLE_FORTRAN=ON \
      -DCGNS_ENABLE_TESTS=ON \
      -DCGNS_BUILD_SHARED=ON \
      -DCGNS_USE_SHARED=ON \
      -DCGNS_BUILD_TESTING=ON \
      -DCGNS_BUILD_CGNSTOOLS=ON
```

```
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ cmake -DCMAKE_INSTALL_PREFIX=/home/eric/software/cgns/4.5.0 ..       -DCMAKE_BUILD_TYPE=Release       -DCGNS_ENABLE_HDF5=ON       -DCGNS_ENABLE_64BIT=ON       -DCGNS_ENABLE_FORTRAN=ON       -DCGNS_ENABLE_TESTS=ON       -DCGNS_BUILD_SHARED=ON       -DCGNS_USE_SHARED=ON       -DCGNS_BUILD_TESTING=ON       -DCGNS_BUILD_CGNSTOOLS=ON
-- The C compiler identification is GNU 13.3.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: /usr/bin/cc - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Looking for stdint.h
-- Looking for stdint.h - found
-- Looking for inttypes.h
-- Looking for inttypes.h - found
-- Looking for sys/types.h
-- Looking for sys/types.h - found
-- Looking for stddef.h
-- Looking for stddef.h - found
-- Check size of long
-- Check size of long - done
-- Check size of off_t
-- Check size of off_t - done
-- Check size of int64_t
-- Check size of int64_t - done
-- Check size of long long
-- Check size of long long - done
-- The Fortran compiler identification is GNU 13.3.0
-- Detecting Fortran compiler ABI info
-- Detecting Fortran compiler ABI info - done
-- Check for working Fortran compiler: /usr/bin/gfortran - skipped
-- Detecting Fortran/C Interface
-- Detecting Fortran/C Interface - Found GLOBAL and MODULE mangling
-- Fortran name mangling convention: LOWERCASE_
-- HDF5 find comps: C;shared
-- HDF5 C libs:1 static: and shared:1
-- HDF5-1.14.6 found: INC=/home/eric/software/HDF_Group/HDF5/1.14.6/include TOOLS=/home/eric/software/HDF_Group/HDF5/1.14.6/bin HDF5_BUILD_SHARED_LIBS=YES
-- HDF5 link libs: hdf5::hdf5-shared
-- Found int64_t: int64_t
-- Checking C compiler flag -std=gnu99
-- Performing Test std-gnu99
-- Performing Test std-gnu99 - Success
-- Testing Fortran Fortran2003 - OK
-- Testing Fortran Fortran2008TS - OK
-- Testing Fortran Fortran2008 - OK
-- Testing Fortran Sizeof_int - OK
-- Testing Fortran FortranConcat - Fail
-- Testing HDF5 Multi_Dataset - OK
-- Testing HDF5 Collective_metadata - NOT FOUND
-- Testing HDF5 H5Pset_file_space_strategy - OK
-- Performing Test CHECK_HAVE_STAT64_STRUCT
-- Performing Test CHECK_HAVE_STAT64_STRUCT - Failed
-- Found X11: /usr/include
-- Looking for XOpenDisplay in /usr/lib/x86_64-linux-gnu/libX11.so;/usr/lib/x86_64-linux-gnu/libXext.so
-- Looking for XOpenDisplay in /usr/lib/x86_64-linux-gnu/libX11.so;/usr/lib/x86_64-linux-gnu/libXext.so - found
-- Looking for gethostbyname
-- Looking for gethostbyname - found
-- Looking for connect
-- Looking for connect - found
-- Looking for remove
-- Looking for remove - found
-- Looking for shmat
-- Looking for shmat - found
-- Looking for IceConnectionNumber in ICE
-- Looking for IceConnectionNumber in ICE - found
-- Found OpenGL: /usr/lib/x86_64-linux-gnu/libOpenGL.so
-- Found Tclsh: /bin/tclsh (found version "8.6")
-- Found TCL: /usr/lib/x86_64-linux-gnu/libtcl.so
-- Found TCLTK: /usr/lib/x86_64-linux-gnu/libtcl.so
-- Found TK: /usr/lib/x86_64-linux-gnu/libtk.so
-- Configuring done (4.6s)
-- Generating done (0.4s)
-- Build files have been written to: /home/eric/work/cgns_work/CGNS-4.5.0/build
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ 
```

cmake --build . --parallel 4 --config Release
```
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ cmake --build . --parallel 4 --config Release
[  0%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/tkogl.c.o
[  0%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/get.c.o
[  1%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/gencyl.c.o
[  1%] Building Fortran object src/CMakeFiles/cgns_f2c.dir/cgns_f.F90.o
[  1%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/load3ds.c.o
[  1%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/nurbs.c.o
[  1%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/quadric.c.o
[  2%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/tess.c.o
[  2%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/printstr.c.o
[  2%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/feedback.c.o
[  2%] Building C object src/cgnstools/cgnsplot/tkogl/CMakeFiles/tkogl.dir/tkoglparse.c.o
[  2%] Built target cgns_f2c
[  2%] Building C object src/CMakeFiles/cgns_static.dir/cgns_error.c.o
[  2%] Building C object src/CMakeFiles/cgns_shared.dir/cgns_error.c.o
[  3%] Building C object src/CMakeFiles/cgns_static.dir/cgns_internals.c.o
[  4%] Building C object src/CMakeFiles/cgns_static.dir/cgns_io.c.o
[  4%] Building C object src/CMakeFiles/cgns_shared.dir/cgns_internals.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgns_io.c:27: warning: "_POSIX_C_SOURCE" redefined
   27 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  5%] Linking C static library libtkogl.a
[  5%] Built target tkogl
[  5%] Building C object src/CMakeFiles/cgns_shared.dir/cgns_io.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgns_io.c:27: warning: "_POSIX_C_SOURCE" redefined
   27 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  5%] Building C object src/CMakeFiles/cgns_static.dir/cgnslib.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:108: warning: "_POSIX_C_SOURCE" redefined
  108 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  5%] Building C object src/CMakeFiles/cgns_shared.dir/cgnslib.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:108: warning: "_POSIX_C_SOURCE" redefined
  108 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:110:
In function ‘snprintf’,
    inlined from ‘cg_base_write’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:1493:5:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:54:10: warning: null destination pointer [-Wformat-truncation=]
   54 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   55 |                                    __glibc_objsize (__s), __fmt,
      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   56 |                                    __va_arg_pack ());
      |                                    ~~~~~~~~~~~~~~~~~
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:110:
In function ‘snprintf’,
    inlined from ‘cg_base_write’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:1493:5:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:54:10: warning: null destination pointer [-Wformat-truncation=]
   54 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   55 |                                    __glibc_objsize (__s), __fmt,
      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   56 |                                    __va_arg_pack ());
      |                                    ~~~~~~~~~~~~~~~~~
In function ‘snprintf’,
    inlined from ‘cg_section_general_write’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:4981:5:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:54:10: warning: null destination pointer [-Wformat-truncation=]
   54 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   55 |                                    __glibc_objsize (__s), __fmt,
      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   56 |                                    __va_arg_pack ());
      |                                    ~~~~~~~~~~~~~~~~~
In function ‘snprintf’,
    inlined from ‘cg_section_general_write’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnslib.c:4981:5:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:54:10: warning: null destination pointer [-Wformat-truncation=]
   54 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   55 |                                    __glibc_objsize (__s), __fmt,
      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   56 |                                    __va_arg_pack ());
      |                                    ~~~~~~~~~~~~~~~~~
[  6%] Building C object src/CMakeFiles/cgns_static.dir/cg_hashmap.c.o
[  6%] Building C object src/CMakeFiles/cgns_static.dir/adf/ADF_interface.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/adf/ADF_interface.c:100: warning: "_POSIX_C_SOURCE" redefined
  100 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  7%] Building C object src/CMakeFiles/cgns_shared.dir/cg_hashmap.c.o
[  7%] Building C object src/CMakeFiles/cgns_shared.dir/adf/ADF_interface.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/adf/ADF_interface.c:100: warning: "_POSIX_C_SOURCE" redefined
  100 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  7%] Building C object src/CMakeFiles/cgns_shared.dir/adf/ADF_internals.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/adf/ADF_internals.c:170: warning: "_POSIX_C_SOURCE" redefined
  170 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  7%] Building C object src/CMakeFiles/cgns_static.dir/adf/ADF_internals.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/adf/ADF_internals.c:170: warning: "_POSIX_C_SOURCE" redefined
  170 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  7%] Building C object src/CMakeFiles/cgns_shared.dir/adfh/ADFH.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/adfh/ADFH.c:25: warning: "_POSIX_C_SOURCE" redefined
   25 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  7%] Building C object src/CMakeFiles/cgns_static.dir/adfh/ADFH.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/adfh/ADFH.c:25: warning: "_POSIX_C_SOURCE" redefined
   25 |   #define _POSIX_C_SOURCE 200112L
      | 
<command-line>: note: this is the location of the previous definition
[  8%] Building C object src/CMakeFiles/cgns_shared.dir/cg_ftoc.c.o
[  8%] Building C object src/CMakeFiles/cgns_shared.dir/cgio_ftoc.c.o
[  9%] Building C object src/CMakeFiles/cgns_static.dir/cg_ftoc.c.o
[  9%] Building C object src/CMakeFiles/cgns_static.dir/cgio_ftoc.c.o
[  9%] Linking Fortran shared library libcgns.so
[  9%] Built target cgns_shared
[  9%] Building C object src/tools/CMakeFiles/cgnsnames.dir/cgnsnames.c.o
[  9%] Building C object src/tools/CMakeFiles/cgnscheck.dir/cgnscheck.c.o
[  9%] Building C object src/tools/CMakeFiles/cgnsconvert.dir/cgnsconvert.c.o
[ 10%] Building C object src/tools/CMakeFiles/cgnsnames.dir/cgnames.c.o
[ 10%] Building C object src/tools/CMakeFiles/cgnsconvert.dir/getargs.c.o
[ 11%] Linking C executable cgnsconvert
[ 11%] Linking C executable cgnsnames
[ 11%] Built target cgnsconvert
[ 11%] Building C object src/tools/CMakeFiles/cgnsdiff.dir/cgnsdiff.c.o
[ 11%] Built target cgnsnames
[ 12%] Building C object src/tools/CMakeFiles/cgnslist.dir/cgnslist.c.o
[ 12%] Building C object src/tools/CMakeFiles/cgnslist.dir/getargs.c.o
[ 12%] Linking C executable cgnslist
[ 12%] Building C object src/tools/CMakeFiles/cgnsdiff.dir/getargs.c.o
[ 12%] Built target cgnslist
[ 12%] Building C object src/tools/CMakeFiles/cgnscompress.dir/cgnscompress.c.o
[ 12%] Linking C executable cgnsdiff
[ 13%] Linking C executable cgnscompress
[ 13%] Built target cgnsdiff
[ 13%] Linking C static library libcgns.a
[ 13%] Building C object src/tests/CMakeFiles/cgioc.dir/cgioc.c.o
[ 13%] Built target cgnscompress
[ 13%] Built target cgns_static
[ 14%] Building C object src/tests/CMakeFiles/dbtest.dir/dbtest.c.o
[ 14%] Building C object src/tests/CMakeFiles/elemtest.dir/elemtest.c.o
[ 14%] Linking C executable cgioc
[ 14%] Built target cgioc
[ 14%] Building C object src/tests/CMakeFiles/open_cgns.dir/open_cgns.c.o
[ 14%] Building C object src/tests/CMakeFiles/dbtest.dir/utils.c.o
[ 15%] Linking C executable elemtest
[ 15%] Linking C executable dbtest
[ 15%] Built target elemtest
[ 15%] Building C object src/tests/CMakeFiles/ser_benchmark_hdf5.dir/ser_benchmark_hdf5.c.o
[ 15%] Built target dbtest
[ 15%] Building C object src/tests/CMakeFiles/test_core_vfd.dir/test_core_vfd.c.o
[ 15%] Building C object src/tests/CMakeFiles/open_cgns.dir/utils.c.o
[ 16%] Linking C executable open_cgns
[ 16%] Built target open_cgns
[ 17%] Building C object src/tests/CMakeFiles/test_exts.dir/test_exts.c.o
[ 17%] Linking C executable test_core_vfd
[ 17%] Built target test_core_vfd
[ 17%] Building C object src/tests/CMakeFiles/test_goto.dir/test_goto.c.o
[ 17%] Linking C executable ser_benchmark_hdf5
[ 17%] Built target ser_benchmark_hdf5
[ 17%] Building C object src/tests/CMakeFiles/test_partial.dir/test_partial.c.o
[ 17%] Linking C executable test_exts
[ 17%] Built target test_exts
[ 17%] Building C object src/tests/CMakeFiles/test_ver31.dir/test_ver31.c.o
[ 17%] Linking C executable test_goto
[ 17%] Built target test_goto
[ 18%] Building C object src/tests/CMakeFiles/test_multifam.dir/test_multifam.c.o
[ 18%] Linking C executable test_multifam
[ 18%] Built target test_multifam
[ 18%] Building C object src/tests/CMakeFiles/test_general_rind.dir/test_general_rind.c.o
[ 18%] Linking C executable test_ver31
[ 18%] Built target test_ver31
[ 18%] Building C object src/tests/CMakeFiles/test_general_reshape.dir/test_general_reshape.c.o
[ 18%] Linking C executable test_general_rind
[ 18%] Linking C executable test_partial
[ 18%] Built target test_general_rind
[ 18%] Building C object src/tests/CMakeFiles/write_array.dir/write_array.c.o
[ 18%] Built target test_partial
[ 19%] Building C object src/tests/CMakeFiles/write_bcdata.dir/write_bcdata.c.o
[ 19%] Building C object src/tests/CMakeFiles/write_array.dir/utils.c.o
[ 20%] Linking C executable write_array
[ 20%] Building C object src/tests/CMakeFiles/write_bcdata.dir/utils.c.o
[ 20%] Built target write_array
[ 20%] Building C object src/tests/CMakeFiles/write_links.dir/write_links.c.o
[ 20%] Linking C executable write_bcdata
[ 20%] Built target write_bcdata
[ 20%] Building C object src/tests/CMakeFiles/write_rind.dir/write_rind.c.o
[ 20%] Building C object src/tests/CMakeFiles/write_links.dir/utils.c.o
[ 21%] Linking C executable write_links
[ 21%] Built target write_links
[ 21%] Building C object src/tests/CMakeFiles/write_test.dir/write_test.c.o
[ 22%] Linking C executable test_general_reshape
[ 22%] Built target test_general_reshape
[ 22%] Building C object src/tests/CMakeFiles/write_zones.dir/write_zones.c.o
[ 23%] Linking C executable write_rind
[ 23%] Built target write_rind
[ 23%] Building C object src/tests/CMakeFiles/test_family_tree.dir/test_family_tree.c.o
[ 23%] Building C object src/tests/CMakeFiles/write_zones.dir/utils.c.o
[ 24%] Linking C executable write_zones
[ 24%] Built target write_zones
[ 25%] Building C object src/tests/CMakeFiles/test_bbox.dir/test_bbox.c.o
[ 25%] Linking C executable test_bbox
[ 25%] Built target test_bbox
[ 26%] Building C object src/tests/CMakeFiles/test_complex.dir/test_complex.c.o
[ 27%] Linking C executable test_family_tree
[ 27%] Linking C executable test_complex
[ 27%] Built target test_complex
[ 27%] Built target test_family_tree
[ 27%] Building C object src/tests/CMakeFiles/test_back_comp.dir/test_back_comp.c.o
[ 28%] Building C object src/tests/CMakeFiles/test_convert_elem.dir/test_convert_elem.c.o
[ 28%] Linking C executable test_back_comp
[ 28%] Built target test_back_comp
[ 29%] Building C object src/tests/CMakeFiles/test_particle.dir/test_particle.c.o
[ 29%] Linking C executable write_test
[ 29%] Built target write_test
[ 30%] Building Fortran object src/tests/CMakeFiles/cgiof_f03.dir/cgiof_f03.F90.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgiof_f03.F90:116:45:

   58 |       CALL CGIO_WRITE_ALL_DATA_F(ICGIO,PID,A,IERR)
      |                                           2  
......
  116 |       CALL CGIO_WRITE_ALL_DATA_F(ICGIO,TMPID,IC,IERR)
      |                                             1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (INTEGER(4)/REAL(4)).
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgiof_f03.F90:155:53:

  139 |       CALL CGIO_READ_ALL_DATA_TYPE_F(ICGIO,PID,DTYPE,B,IERR)
      |                                                     2
......
  155 |       CALL CGIO_READ_ALL_DATA_TYPE_F(ICGIO,PID,DTYPE,ID,IERR)
      |                                                     1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (INTEGER(4)/REAL(4)).
[ 30%] Linking Fortran executable cgiof_f03
[ 30%] Building C object src/tools/CMakeFiles/cgnscheck.dir/getargs.c.o
[ 30%] Built target cgiof_f03
[ 30%] Building Fortran object src/tests/CMakeFiles/cgwrite_f03.dir/cgwrite_f03.F90.o
[ 31%] Building C object src/tools/CMakeFiles/cgnscheck.dir/hash.c.o
[ 31%] Linking C executable test_convert_elem
[ 31%] Linking C executable test_particle
[ 31%] Building C object src/tools/CMakeFiles/cgnscheck.dir/cgnames.c.o
[ 31%] Built target test_convert_elem
[ 31%] Building Fortran object src/tests/CMakeFiles/cgread_f03.dir/cgread_f03.F90.o
[ 31%] Built target test_particle
[ 31%] Building Fortran object src/tests/CMakeFiles/cgzconn_f03.dir/cgzconn_f03.F90.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgread_f03.F90:299:46:

  295 |                  CALL cg_array_read_f(iarray, data_single, ier)
      |                                              2
......
  299 |                  CALL cg_array_read_f(iarray, data_double, ier)
      |                                              1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (REAL(8)/REAL(4)).
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgread_f03.F90:390:45:

  386 |                     CALL cg_exponents_read_f(data_single, ier)
      |                                             2
......
  390 |                     CALL cg_exponents_read_f(data_double, ier)
      |                                             1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (REAL(8)/REAL(4)).
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgread_f03.F90:408:46:

  404 |                     CALL cg_conversion_read_f(data_single, ier)
      |                                              2
......
  408 |                     CALL cg_conversion_read_f(data_double, ier)
      |                                              1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (REAL(8)/REAL(4)).
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgread_f03.F90:524:22:

  518 |                       data_single, ier)
      |                      2
......
  524 |                       data_double, ier)
      |                      1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (REAL(8)/REAL(4)).
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/cgread_f03.F90:986:22:

  982 |                       data_single, ier)
      |                      2
......
  986 |                       data_double, ier)
      |                      1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (REAL(8)/REAL(4)).
[ 31%] Linking C executable cgnscheck
[ 32%] Linking Fortran executable cgwrite_f03
[ 32%] Built target cgnscheck
[ 33%] Building Fortran object src/tests/CMakeFiles/cgsubreg_f03.dir/cgsubreg_f03.F90.o
[ 33%] Built target cgwrite_f03
[ 33%] Building Fortran object src/tests/CMakeFiles/test_general_rindf.dir/test_general_rindf.F90.o
[ 33%] Linking Fortran executable cgzconn_f03
[ 33%] Built target cgzconn_f03
[ 33%] Building Fortran object src/tests/CMakeFiles/test_family_treef.dir/test_family_treef.F90.o
[ 33%] Linking Fortran executable cgsubreg_f03
[ 33%] Built target cgsubreg_f03
[ 33%] Building Fortran object src/tests/CMakeFiles/test_bboxf.dir/test_bboxf.F90.o
[ 33%] Linking Fortran executable test_bboxf
[ 33%] Linking Fortran executable test_family_treef
[ 33%] Built target test_bboxf
[ 33%] Building Fortran object src/tests/CMakeFiles/test_complexf.dir/test_complexf.F90.o
[ 33%] Built target test_family_treef
[ 33%] Linking Fortran executable test_complexf
[ 33%] Building Fortran object src/tests/CMakeFiles/test_particlef.dir/utilsf.F90.o
[ 33%] Built target test_complexf
[ 33%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_grid_str.dir/write_grid_str.c.o
[ 34%] Linking Fortran executable test_general_rindf
[ 34%] Building Fortran object src/tests/CMakeFiles/test_particlef.dir/test_particlef.F90.o
[ 34%] Linking C executable write_grid_str
[ 34%] Built target test_general_rindf
[ 34%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_bc_str.dir/write_bc_str.c.o
[ 34%] Built target write_grid_str
[ 34%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_bcpnts_str.dir/write_bcpnts_str.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/test_particlef.F90:178:64:

  178 |  CALL cg_array_write_f("TimeValues", CGNS_ENUMV(RealDouble), 1_CGSIZE_T, length, output_time, ier)
      |                                                             1

......
  762 |  CALL cg_array_write_f("CoordinateX", CGNS_ENUMV(RealSingle), 1_CGSIZE_T, num_particles, coord, ier)
      |                                                              2

Warning: Rank mismatch between actual argument at (1) and actual argument at (2) (rank-1 and scalar)
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/test_particlef.F90:178:72:

  178 | _array_write_f("TimeValues", CGNS_ENUMV(RealDouble), 1_CGSIZE_T, length, output_time, ier)
      |                                                             1

......
  762 | _array_write_f("CoordinateX", CGNS_ENUMV(RealSingle), 1_CGSIZE_T, num_particles, coord, ier)
      |                                                                     2

Warning: Type mismatch between actual argument at (1) and actual argument at (2) (REAL(8)/REAL(4)).
/home/eric/work/cgns_work/CGNS-4.5.0/src/tests/test_particlef.F90:179:66:

  179 | ALL cg_array_write_f("IterationValues", CGNS_ENUMV(INTEGER), 1_CGSIZE_T, length, iteration, ier)
      |                                                             1

......
  762 | ALL cg_array_write_f("CoordinateX", CGNS_ENUMV(RealSingle), 1_CGSIZE_T, num_particles, coord, ier)
      |                                                            2 

Warning: Rank mismatch between actual argument at (1) and actual argument at (2) (rank-1 and scalar)
[ 34%] Linking C executable write_bc_str
[ 34%] Built target write_bc_str
[ 34%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_bcpnts_unst.dir/write_bcpnts_unst.c.o
[ 34%] Linking C executable write_bcpnts_unst
[ 35%] Linking C executable write_bcpnts_str
[ 35%] Built target write_bcpnts_unst
[ 35%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_con2zn_str.dir/write_con2zn_str.c.o
[ 35%] Built target write_bcpnts_str
[ 35%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_con2zn_genrl_str.dir/write_con2zn_genrl_str.c.o
[ 35%] Linking C executable write_con2zn_str
[ 35%] Built target write_con2zn_str
[ 36%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_convergence.dir/write_convergence.c.o
[ 37%] Linking C executable write_con2zn_genrl_str
[ 37%] Linking C executable write_convergence
[ 37%] Built target write_con2zn_genrl_str
[ 37%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_descriptor.dir/write_descriptor.c.o
[ 37%] Built target write_convergence
[ 38%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_dimensional.dir/write_dimensional.c.o
[ 38%] Linking C executable write_descriptor
[ 38%] Linking C executable write_dimensional
[ 38%] Built target write_descriptor
[ 39%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_flowcent_str.dir/write_flowcent_str.c.o
[ 39%] Built target write_dimensional
[ 39%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_flowcentrind_str.dir/write_flowcentrind_str.c.o
[ 39%] Linking C executable write_flowcent_str
[ 40%] Linking Fortran executable test_particlef
[ 40%] Built target write_flowcent_str
[ 40%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_discreteface_str.dir/write_discreteface_str.c.o
[ 40%] Linking Fortran executable cgread_f03
[ 40%] Linking C executable write_flowcentrind_str
[ 40%] Built target test_particlef
[ 41%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_floweqn_str.dir/write_floweqn_str.c.o
[ 41%] Built target write_flowcentrind_str
[ 41%] Built target cgread_f03
[ 41%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_flowvert_str.dir/write_flowvert_str.c.o
[ 41%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_flowvert_unst.dir/write_flowvert_unst.c.o
[ 41%] Linking C executable write_discreteface_str
[ 41%] Linking C executable write_floweqn_str
[ 42%] Linking C executable write_flowvert_unst
[ 42%] Linking C executable write_flowvert_str
[ 42%] Built target write_discreteface_str
[ 42%] Built target write_floweqn_str
[ 42%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_grid2zn_str.dir/write_grid2zn_str.c.o
[ 42%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_grid_unst.dir/write_grid_unst.c.o
[ 42%] Built target write_flowvert_unst
[ 42%] Built target write_flowvert_str
[ 42%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_nondimensional.dir/write_nondimensional.c.o
[ 42%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/write_timevert_str.dir/write_timevert_str.c.o
[ 43%] Linking C executable write_grid2zn_str
[ 43%] Linking C executable write_nondimensional
[ 44%] Linking C executable write_timevert_str
[ 44%] Built target write_grid2zn_str
[ 44%] Built target write_nondimensional
[ 44%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_bc_str.dir/read_bc_str.c.o
[ 44%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_bcpnts_str.dir/read_bcpnts_str.c.o
[ 44%] Built target write_timevert_str
[ 44%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_bcpnts_unst.dir/read_bcpnts_unst.c.o
[ 44%] Linking C executable read_bc_str
[ 45%] Linking C executable read_bcpnts_str
[ 45%] Linking C executable read_bcpnts_unst
[ 45%] Built target read_bc_str
[ 45%] Built target read_bcpnts_str
[ 45%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_con2zn_genrl_str.dir/read_con2zn_genrl_str.c.o
[ 45%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_con2zn_str.dir/read_con2zn_str.c.o
[ 46%] Linking C executable write_grid_unst
[ 46%] Built target read_bcpnts_unst
[ 47%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_convergence.dir/read_convergence.c.o
[ 47%] Linking C executable read_con2zn_str
[ 48%] Linking C executable read_con2zn_genrl_str
[ 48%] Built target write_grid_unst
[ 48%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_descriptor.dir/read_descriptor.c.o
[ 48%] Linking C executable read_convergence
[ 48%] Built target read_con2zn_str
[ 48%] Built target read_con2zn_genrl_str
[ 49%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_dimensional.dir/read_dimensional.c.o
[ 50%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_flowcent_str.dir/read_flowcent_str.c.o
[ 50%] Linking C executable read_descriptor
[ 50%] Built target read_convergence
[ 50%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_flowcentrind_str.dir/read_flowcentrind_str.c.o
[ 50%] Linking C executable read_flowcent_str
[ 50%] Linking C executable read_dimensional
[ 50%] Built target read_descriptor
[ 50%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_discreteface_str.dir/read_discreteface_str.c.o
[ 50%] Linking C executable read_flowcentrind_str
[ 50%] Built target read_flowcent_str
[ 51%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_floweqn_str.dir/read_floweqn_str.c.o
[ 51%] Built target read_dimensional
[ 51%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_flowvert_str.dir/read_flowvert_str.c.o
[ 51%] Linking C executable read_discreteface_str
[ 51%] Built target read_flowcentrind_str
[ 51%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_flowvert_unst.dir/read_flowvert_unst.c.o
[ 52%] Linking C executable read_flowvert_str
[ 52%] Linking C executable read_floweqn_str
[ 52%] Built target read_discreteface_str
[ 52%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_grid2zn_str.dir/read_grid2zn_str.c.o
[ 52%] Linking C executable read_flowvert_unst
[ 52%] Built target read_floweqn_str
[ 52%] Built target read_flowvert_str
[ 52%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_grid_str.dir/read_grid_str.c.o
[ 52%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_grid_unst.dir/read_grid_unst.c.o
[ 52%] Built target read_flowvert_unst
[ 52%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_nondimensional.dir/read_nondimensional.c.o
[ 52%] Linking C executable read_grid_str
[ 53%] Linking C executable read_grid_unst
[ 53%] Linking C executable read_nondimensional
[ 54%] Linking C executable read_grid2zn_str
[ 54%] Built target read_grid_str
[ 55%] Built target read_grid_unst
[ 55%] Building C object src/Test_UserGuideCode/C_code/CMakeFiles/read_timevert_str.dir/read_timevert_str.c.o
[ 55%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_grid_str.dir/write_grid_str.F90.o
[ 55%] Built target read_nondimensional
[ 55%] Built target read_grid2zn_str
[ 56%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_bc_str.dir/write_bc_str.F90.o
[ 56%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_bcpnts_str.dir/write_bcpnts_str.F90.o
[ 56%] Linking C executable read_timevert_str
[ 56%] Linking Fortran executable Fortran_write_grid_str
[ 56%] Linking Fortran executable Fortran_write_bc_str
[ 56%] Built target read_timevert_str
[ 56%] Built target Fortran_write_grid_str
[ 57%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_bcpnts_unst.dir/write_bcpnts_unst.F90.o
[ 58%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_con2zn_str.dir/write_con2zn_str.F90.o
[ 58%] Built target Fortran_write_bc_str
[ 58%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_con2zn_genrl_str.dir/write_con2zn_genrl_str.F90.o
[ 58%] Linking Fortran executable Fortran_write_bcpnts_unst
[ 58%] Linking Fortran executable Fortran_write_con2zn_str
[ 58%] Linking Fortran executable Fortran_write_bcpnts_str
[ 58%] Built target Fortran_write_bcpnts_unst
[ 58%] Built target Fortran_write_con2zn_str
[ 58%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_convergence.dir/write_convergence.F90.o
[ 59%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_descriptor.dir/write_descriptor.F90.o
[ 59%] Linking Fortran executable Fortran_write_con2zn_genrl_str
[ 59%] Built target Fortran_write_bcpnts_str
[ 59%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_dimensional.dir/write_dimensional.F90.o
[ 59%] Linking Fortran executable Fortran_write_convergence
[ 59%] Linking Fortran executable Fortran_write_descriptor
[ 59%] Built target Fortran_write_con2zn_genrl_str
[ 59%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_flowcent_str.dir/write_flowcent_str.F90.o
[ 60%] Linking Fortran executable Fortran_write_dimensional
[ 60%] Built target Fortran_write_convergence
[ 60%] Built target Fortran_write_descriptor
[ 60%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_flowcentrind_str.dir/write_flowcentrind_str.F90.o
[ 60%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_floweqn_str.dir/write_floweqn_str.F90.o
[ 60%] Linking Fortran executable Fortran_write_flowcent_str
[ 60%] Built target Fortran_write_dimensional
[ 60%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_flowvert_str.dir/write_flowvert_str.F90.o
[ 60%] Built target Fortran_write_flowcent_str
[ 60%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_flowvert_unst.dir/write_flowvert_unst.F90.o
[ 60%] Linking Fortran executable Fortran_write_floweqn_str
[ 61%] Linking Fortran executable Fortran_write_flowcentrind_str
[ 62%] Linking Fortran executable Fortran_write_flowvert_str
[ 62%] Built target Fortran_write_floweqn_str
[ 63%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_grid2zn_str.dir/write_grid2zn_str.F90.o
[ 63%] Linking Fortran executable Fortran_write_flowvert_unst
[ 63%] Built target Fortran_write_flowcentrind_str
[ 63%] Built target Fortran_write_flowvert_str
[ 64%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_grid_unst.dir/write_grid_unst.F90.o
[ 64%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_nondimensional.dir/write_nondimensional.F90.o
[ 64%] Built target Fortran_write_flowvert_unst
[ 65%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_write_timevert_str.dir/write_timevert_str.F90.o
[ 65%] Linking Fortran executable Fortran_write_grid2zn_str
/home/eric/work/cgns_work/CGNS-4.5.0/src/Test_UserGuideCode/Fortran_code/write_timevert_str.F90:131:11:

  119 |       call cg_array_write_f('TimeValues',CGNS_ENUMV(RealDouble),1,[nuse],time,ier)
      |                                                             2
......
  131 |            solname,ier)
      |           1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (CHARACTER(32)/REAL(8)).
[ 65%] Linking Fortran executable Fortran_write_nondimensional
[ 65%] Built target Fortran_write_grid2zn_str
[ 65%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_bc_str.dir/read_bc_str.F90.o
[ 65%] Linking Fortran executable Fortran_write_timevert_str
[ 65%] Built target Fortran_write_nondimensional
[ 65%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_bcpnts_str.dir/read_bcpnts_str.F90.o
[ 65%] Linking Fortran executable Fortran_read_bc_str
[ 65%] Built target Fortran_write_timevert_str
[ 65%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_bcpnts_unst.dir/read_bcpnts_unst.F90.o
[ 66%] Linking Fortran executable Fortran_read_bcpnts_str
[ 66%] Built target Fortran_read_bc_str
[ 66%] Linking Fortran executable Fortran_write_grid_unst
[ 66%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_con2zn_genrl_str.dir/read_con2zn_genrl_str.F90.o
[ 66%] Linking Fortran executable Fortran_read_bcpnts_unst
[ 66%] Built target Fortran_read_bcpnts_str
[ 66%] Built target Fortran_write_grid_unst
[ 66%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_con2zn_str.dir/read_con2zn_str.F90.o
[ 66%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_convergence.dir/read_convergence.F90.o
[ 67%] Linking Fortran executable Fortran_read_con2zn_genrl_str
[ 67%] Built target Fortran_read_bcpnts_unst
[ 67%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_descriptor.dir/read_descriptor.F90.o
[ 68%] Linking Fortran executable Fortran_read_convergence
[ 68%] Linking Fortran executable Fortran_read_con2zn_str
[ 68%] Built target Fortran_read_con2zn_genrl_str
[ 69%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_dimensional.dir/read_dimensional.F90.o
[ 69%] Linking Fortran executable Fortran_read_descriptor
[ 69%] Built target Fortran_read_convergence
[ 69%] Built target Fortran_read_con2zn_str
[ 69%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_flowcent_str.dir/read_flowcent_str.F90.o
[ 70%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_flowcentrind_str.dir/read_flowcentrind_str.F90.o
[ 70%] Built target Fortran_read_descriptor
[ 70%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_floweqn_str.dir/read_floweqn_str.F90.o
[ 70%] Linking Fortran executable Fortran_read_dimensional
[ 70%] Linking Fortran executable Fortran_read_flowcent_str
[ 70%] Linking Fortran executable Fortran_read_flowcentrind_str
[ 70%] Built target Fortran_read_dimensional
[ 70%] Built target Fortran_read_flowcent_str
[ 71%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_flowvert_str.dir/read_flowvert_str.F90.o
[ 71%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_flowvert_unst.dir/read_flowvert_unst.F90.o
[ 71%] Built target Fortran_read_flowcentrind_str
[ 71%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_grid2zn_str.dir/read_grid2zn_str.F90.o
[ 71%] Linking Fortran executable Fortran_read_floweqn_str
[ 72%] Linking Fortran executable Fortran_read_flowvert_str
[ 72%] Linking Fortran executable Fortran_read_flowvert_unst
[ 72%] Built target Fortran_read_floweqn_str
[ 72%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_grid_str.dir/read_grid_str.F90.o
[ 72%] Linking Fortran executable Fortran_read_grid2zn_str
[ 72%] Built target Fortran_read_flowvert_str
[ 72%] Built target Fortran_read_flowvert_unst
[ 72%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_grid_unst.dir/read_grid_unst.F90.o
[ 72%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_nondimensional.dir/read_nondimensional.F90.o
[ 73%] Linking Fortran executable Fortran_read_grid_str
[ 73%] Built target Fortran_read_grid2zn_str
[ 73%] Building Fortran object src/Test_UserGuideCode/Fortran_code/CMakeFiles/Fortran_read_timevert_str.dir/read_timevert_str.F90.o
[ 74%] Linking Fortran executable Fortran_read_nondimensional
[ 74%] Built target Fortran_read_grid_str
/home/eric/work/cgns_work/CGNS-4.5.0/src/Test_UserGuideCode/Fortran_code/read_timevert_str.F90:109:42:

   87 |       call cg_array_read_as_f(1,CGNS_ENUMV(RealSingle),time,ier)
      |                                           2
......
  109 |       call cg_array_read_as_f(1,CGNS_ENUMV(Character),solname,ier)
      |                                          1
Warning: Type mismatch between actual argument at (1) and actual argument at (2) (CHARACTER(32)/REAL(4)).
[ 74%] Linking Fortran executable Fortran_read_grid_unst
[ 74%] Building C object src/cgnstools/cgnsview/CMakeFiles/cgiowish.dir/cgiowish.c.o
[ 74%] Built target Fortran_read_nondimensional
[ 74%] Built target Fortran_read_grid_unst
[ 74%] Building C object src/cgnstools/calclib/CMakeFiles/calclib.dir/calc.c.o
[ 75%] Building C object src/cgnstools/cgnsplot/CMakeFiles/plotwish.dir/cgnstcl.c.o
[ 76%] Building C object src/cgnstools/cgnsview/CMakeFiles/cgiowish.dir/cgiotcl.c.o
[ 76%] Linking Fortran executable Fortran_read_timevert_str
[ 76%] Built target Fortran_read_timevert_str
[ 76%] Building C object src/cgnstools/cgnsplot/CMakeFiles/plotwish.dir/plotwish.c.o
[ 76%] Building C object src/cgnstools/cgnsplot/CMakeFiles/plotwish.dir/__/common/hash.c.o
[ 77%] Building C object src/cgnstools/calclib/CMakeFiles/calclib.dir/vec.c.o
[ 77%] Building C object src/cgnstools/calclib/CMakeFiles/calclib.dir/vecsym.c.o
[ 77%] Linking C executable cgiowish
[ 77%] Built target cgiowish
[ 77%] Linking C static library libcalclib.a
[ 77%] Built target calclib
[ 77%] Building C object src/cgnstools/cgnscalc/CMakeFiles/calcwish.dir/calctcl.c.o
[ 77%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_info.dir/cgns_info.c.o
[ 77%] Building C object src/cgnstools/utilities/CMakeFiles/plot3d_to_cgns.dir/plot3d_to_cgns.c.o
[ 78%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_info.dir/cgnsutil.c.o
[ 79%] Building C object src/cgnstools/cgnscalc/CMakeFiles/calcwish.dir/calcwish.c.o
[ 80%] Building C object src/cgnstools/utilities/CMakeFiles/plot3d_to_cgns.dir/cgnsutil.c.o
[ 80%] Linking C executable calcwish
[ 80%] Built target calcwish
[ 81%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_plot3d.dir/cgns_to_plot3d.c.o
[ 81%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_plot3d.dir/cgnsutil.c.o
[ 82%] Linking C executable plotwish
[ 82%] Built target plotwish
[ 82%] Building C object src/cgnstools/utilities/CMakeFiles/patran_to_cgns.dir/patran_to_cgns.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/patran_to_cgns.c: In function ‘main’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/patran_to_cgns.c:266:17: warning: ignoring return value of ‘fscanf’ declared with attribute ‘warn_unused_result’ [-Wunused-result]
  266 |                 fscanf (fp, "%d%d", &type, &id);
      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[ 82%] Building C object src/cgnstools/utilities/CMakeFiles/patran_to_cgns.dir/cgnsImport.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c: In function ‘cgnsImportAddReg’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:1521:67: warning: ‘%ld’ directive writing between 1 and 20 bytes into a region of size 18 [-Wformat-overflow=]
 1521 |                 sprintf (errmsg, "cgnsImportAddReg:region element %ld not found",
      |                                                                   ^~~
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:1521:34: note: directive argument in the range [-1152921504606846976, 1152921504606846975]
 1521 |                 sprintf (errmsg, "cgnsImportAddReg:region element %ld not found",
      |                                  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:5:
In function ‘sprintf’,
    inlined from ‘cgnsImportAddReg’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:1521:17:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:30:10: note: ‘__builtin___sprintf_chk’ output between 44 and 63 bytes into a destination of size 50
   30 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   31 |                                   __glibc_objsize (__s), __fmt,
      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   32 |                                   __va_arg_pack ());
      |                                   ~~~~~~~~~~~~~~~~~
[ 83%] Building C object src/cgnstools/utilities/CMakeFiles/patran_to_cgns.dir/__/common/getargs.c.o
[ 83%] Building C object src/cgnstools/utilities/CMakeFiles/patran_to_cgns.dir/__/common/hash.c.o
[ 83%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_info.dir/__/common/getargs.c.o
[ 83%] Linking C executable cgns_info
[ 83%] Linking C executable patran_to_cgns
[ 83%] Built target cgns_info
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/tecplot_to_cgns.dir/tecplot_to_cgns.c.o
[ 84%] Built target patran_to_cgns
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_tecplot.dir/cgns_to_tecplot.c.o
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/plot3d_to_cgns.dir/binaryio.c.o
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/tecplot_to_cgns.dir/cgnsImport.c.o
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_tecplot.dir/cgnsutil.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c: In function ‘cgnsImportAddReg’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:1521:67: warning: ‘%ld’ directive writing between 1 and 20 bytes into a region of size 18 [-Wformat-overflow=]
 1521 |                 sprintf (errmsg, "cgnsImportAddReg:region element %ld not found",
      |                                                                   ^~~
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:1521:34: note: directive argument in the range [-1152921504606846976, 1152921504606846975]
 1521 |                 sprintf (errmsg, "cgnsImportAddReg:region element %ld not found",
      |                                  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:5:
In function ‘sprintf’,
    inlined from ‘cgnsImportAddReg’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/cgnsImport.c:1521:17:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:30:10: note: ‘__builtin___sprintf_chk’ output between 44 and 63 bytes into a destination of size 50
   30 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   31 |                                   __glibc_objsize (__s), __fmt,
      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   32 |                                   __va_arg_pack ());
      |                                   ~~~~~~~~~~~~~~~~~
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/plot3d_to_cgns.dir/__/common/getargs.c.o
[ 84%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_plot3d.dir/binaryio.c.o
[ 84%] Linking C executable plot3d_to_cgns
[ 84%] Built target plot3d_to_cgns
[ 85%] Building C object src/cgnstools/utilities/CMakeFiles/tetgen_to_cgns.dir/tetgen_to_cgns.c.o
[ 85%] Building C object src/cgnstools/utilities/CMakeFiles/tecplot_to_cgns.dir/__/common/getargs.c.o
[ 85%] Building C object src/cgnstools/utilities/CMakeFiles/tecplot_to_cgns.dir/__/common/hash.c.o
[ 86%] Linking C executable tecplot_to_cgns
[ 86%] Built target tecplot_to_cgns
[ 86%] Building C object src/cgnstools/utilities/CMakeFiles/vgrid_to_cgns.dir/vgrid_to_cgns.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c: In function ‘read_bc’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c:206:5: warning: ignoring return value of ‘fgets’ declared with attribute ‘warn_unused_result’ [-Wunused-result]
  206 |     fgets(buf, sizeof(buf), fp);
      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c: In function ‘read_mapbc’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c:290:9: warning: ignoring return value of ‘fgets’ declared with attribute ‘warn_unused_result’ [-Wunused-result]
  290 |         fgets(buf, sizeof(buf), fp);
      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~
[ 86%] Linking C executable tetgen_to_cgns
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c: In function ‘read_bc’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c:243:39: warning: ‘%0*d’ directive writing between 1 and 2147483647 bytes into a region of size 28 [-Wformat-overflow=]
  243 |         sprintf(Patchs[n].name, "Patch%0*d", i, n + 1);
      |                                       ^~~~
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c:243:33: note: directive argument in the range [1, 2147483647]
  243 |         sprintf(Patchs[n].name, "Patch%0*d", i, n + 1);
      |                                 ^~~~~~~~~~~
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c:5:
In function ‘sprintf’,
    inlined from ‘read_bc’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/vgrid_to_cgns.c:243:9:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:30:10: note: ‘__builtin___sprintf_chk’ output between 7 and 2147483653 bytes into a destination of size 33
   30 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   31 |                                   __glibc_objsize (__s), __fmt,
      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   32 |                                   __va_arg_pack ());
      |                                   ~~~~~~~~~~~~~~~~~
[ 86%] Built target tetgen_to_cgns
[ 86%] Building C object src/cgnstools/utilities/CMakeFiles/aflr3_to_cgns.dir/aflr3_to_cgns.c.o
[ 86%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_plot3d.dir/__/common/getargs.c.o
[ 86%] Building C object src/cgnstools/utilities/CMakeFiles/vgrid_to_cgns.dir/binaryio.c.o
[ 87%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_plot3d.dir/p3dfout.c.o
[ 87%] Linking C executable cgns_to_plot3d
[ 87%] Built target cgns_to_plot3d
[ 87%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_aflr3.dir/cgns_to_aflr3.c.o
[ 88%] Building C object src/cgnstools/utilities/CMakeFiles/aflr3_to_cgns.dir/binaryio.c.o
[ 89%] Building C object src/cgnstools/utilities/CMakeFiles/vgrid_to_cgns.dir/__/common/getargs.c.o
[ 89%] Linking C executable vgrid_to_cgns
[ 89%] Built target vgrid_to_cgns
[ 90%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_aflr3.dir/__/common/getargs.c.o
[ 90%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_aflr3.dir/__/common/hash.c.o
[ 90%] Building C object src/cgnstools/utilities/CMakeFiles/aflr3_to_cgns.dir/__/common/getargs.c.o
[ 90%] Linking C executable aflr3_to_cgns
[ 91%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_tecplot.dir/__/common/getargs.c.o
[ 91%] Linking C executable cgns_to_aflr3
[ 91%] Built target aflr3_to_cgns
[ 91%] Building C object src/cgnstools/utilities/CMakeFiles/fast_to_cgns.dir/fast_to_cgns.c.o
[ 91%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_fast.dir/cgns_to_fast.c.o
[ 91%] Built target cgns_to_aflr3
[ 92%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_fast.dir/__/common/getargs.c.o
[ 92%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_fast.dir/__/common/hash.c.o
[ 92%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_vtk.dir/cgns_to_vtk.c.o
[ 92%] Building C object src/cgnstools/utilities/CMakeFiles/fast_to_cgns.dir/binaryio.c.o
[ 92%] Linking C executable cgns_to_fast
[ 92%] Linking C executable cgns_to_tecplot
[ 92%] Built target cgns_to_fast
[ 92%] Building C object src/cgnstools/utilities/CMakeFiles/convert_location.dir/convert_location.c.o
[ 92%] Built target cgns_to_tecplot
[ 93%] Building C object src/cgnstools/utilities/CMakeFiles/convert_variables.dir/convert_variables.c.o
[ 94%] Building C object src/cgnstools/utilities/CMakeFiles/convert_location.dir/cgnsutil.c.o
[ 94%] Building C object src/cgnstools/utilities/CMakeFiles/convert_variables.dir/cgnsutil.c.o
[ 95%] Building C object src/cgnstools/utilities/CMakeFiles/cgns_to_vtk.dir/__/common/getargs.c.o
[ 95%] Linking C executable cgns_to_vtk
[ 96%] Building C object src/cgnstools/utilities/CMakeFiles/fast_to_cgns.dir/__/common/getargs.c.o
[ 96%] Built target cgns_to_vtk
[ 96%] Building C object src/cgnstools/utilities/CMakeFiles/convert_dataclass.dir/convert_dataclass.c.o
[ 96%] Linking C executable fast_to_cgns
[ 96%] Built target fast_to_cgns
[ 96%] Building C object src/cgnstools/utilities/CMakeFiles/extract_subset.dir/extract_subset.c.o
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/convert_dataclass.dir/cgnsutil.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/extract_subset.c: In function ‘main’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/extract_subset.c:689:62: warning: ‘__builtin___sprintf_chk’ may write a terminating nul past the end of the destination [-Wformat-overflow=]
  689 |                 sprintf (basename, "zone %d is not Structured", nz);
      |                                                              ^
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/extract_subset.c:5:
In function ‘sprintf’,
    inlined from ‘main’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/extract_subset.c:689:17:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:30:10: note: ‘__builtin___sprintf_chk’ output between 25 and 34 bytes into a destination of size 33
   30 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   31 |                                   __glibc_objsize (__s), __fmt,
      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   32 |                                   __va_arg_pack ());
      |                                   ~~~~~~~~~~~~~~~~~
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/extract_subset.dir/cgnsutil.c.o
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/convert_location.dir/__/common/getargs.c.o
[ 97%] Linking C executable convert_location
[ 97%] Built target convert_location
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/interpolate_cgns.dir/interpolate_cgns.c.o
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/convert_variables.dir/__/common/getargs.c.o
[ 97%] Linking C executable convert_variables
[ 97%] Built target convert_variables
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/update_ngon.dir/update_ngon.c.o
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/update_ngon.c: In function ‘main’:
/home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/update_ngon.c:614:30: warning: ‘%s’ directive writing up to 1023 bytes into a region of size 505 [-Wformat-overflow=]
  614 |         sprintf(msg, "rename %s -> %s failed", tempfile, outfile);
      |                              ^~                ~~~~~~~~
In file included from /usr/include/stdio.h:980,
                 from /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/update_ngon.c:4:
In function ‘sprintf’,
    inlined from ‘main’ at /home/eric/work/cgns_work/CGNS-4.5.0/src/cgnstools/utilities/update_ngon.c:614:9:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:30:10: note: ‘__builtin___sprintf_chk’ output 19 or more bytes (assuming 1042) into a destination of size 512
   30 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,
      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   31 |                                   __glibc_objsize (__s), __fmt,
      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   32 |                                   __va_arg_pack ());
      |                                   ~~~~~~~~~~~~~~~~~
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/update_ngon.dir/cgnsutil.c.o
[ 97%] Building C object src/cgnstools/utilities/CMakeFiles/convert_dataclass.dir/__/common/getargs.c.o
[ 97%] Linking C executable convert_dataclass
[ 97%] Built target convert_dataclass
[ 98%] Building C object src/cgnstools/utilities/CMakeFiles/extract_subset.dir/__/common/getargs.c.o
[ 98%] Building C object src/cgnstools/utilities/CMakeFiles/interpolate_cgns.dir/cgnsutil.c.o
[ 99%] Building C object src/cgnstools/utilities/CMakeFiles/interpolate_cgns.dir/__/common/getargs.c.o
[100%] Building C object src/cgnstools/utilities/CMakeFiles/update_ngon.dir/__/common/getargs.c.o
[100%] Linking C executable extract_subset
[100%] Built target extract_subset
[100%] Linking C executable update_ngon
[100%] Built target update_ngon
[100%] Linking C executable interpolate_cgns
[100%] Built target interpolate_cgns
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ ls
CMakeCache.txt       cmake_uninstall.cmake    CTestTestfile.cmake    src
CMakeFiles           CPackConfig.cmake        DartConfiguration.tcl  Testing
cmake_install.cmake  CPackSourceConfig.cmake  Makefile
```

cmake --install . --config Release 
```
eric@fantasy:~/work/cgns_work/CGNS-4.5.0/build$ cmake --install . --config Release 
-- Installing: /home/eric/software/cgns/4.5.0/lib/libcgns.a
-- Installing: /home/eric/software/cgns/4.5.0/lib/libcgns.so.4.5
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/lib/libcgns.so.4.5" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/lib/libcgns.so
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnslib.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgns_io.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnswin_f.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnsconfig.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnstypes.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnstypes_f.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnstypes_f03.h
-- Installing: /home/eric/software/cgns/4.5.0/include/cgnsBuild.defs
-- Installing: /home/eric/software/cgns/4.5.0/include/cgns.mod
-- Installing: /home/eric/software/cgns/4.5.0/lib/cmake/cgns/cgns-config-version.cmake
-- Installing: /home/eric/software/cgns/4.5.0/lib/cmake/cgns/cgns-config.cmake
-- Installing: /home/eric/software/cgns/4.5.0/lib/cmake/cgns/cgns-targets.cmake
-- Installing: /home/eric/software/cgns/4.5.0/lib/cmake/cgns/cgns-targets-release.cmake
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnscheck
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnscheck" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsconvert
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnsconvert" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsdiff
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnsdiff" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnslist
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnslist" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsnames
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnsnames" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnscompress
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnscompress" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsupdate
-- Installing: /home/eric/software/cgns/4.5.0/bin/adf2hdf
-- Installing: /home/eric/software/cgns/4.5.0/bin/hdf2adf
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgiowish
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgiowish" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsview
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsview.desktop
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsnodes
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsnodes.desktop
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsview.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgns.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsnodes.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/export.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/import.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tools.tcl
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/calcwish
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/calcwish" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnscalc
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnscalc.desktop
-- Installing: /home/eric/software/cgns/4.5.0/bin/unitconv
-- Installing: /home/eric/software/cgns/4.5.0/bin/unitconv.desktop
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnscalc.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/unitconv.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnscalc.ico
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnscalc.png
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnscalc-icon.xbm
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnscalc-mask.xbm
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/unitconv.ico
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/unitconv.png
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/unitconv.xbm
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/plotwish
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/plotwish" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsplot
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnsplot.desktop
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsplot.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsplot.ico
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsplot.png
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsplot-icon.xbm
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgnsplot-mask.xbm
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/balloon.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/color.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/combobox.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/config.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/dialog.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/editfile.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/filesel.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/findfile.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/frame.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/help.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/menubar.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tclIndex
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tclreg.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tkdir.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tree.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/units.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgns.ico
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgns.png
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgns-icon.xbm
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/cgns-mask.xbm
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/plot3d_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/plot3d_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_plot3d
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_plot3d" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/patran_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/patran_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/tecplot_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/tecplot_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_tecplot
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_tecplot" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/tetgen_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/tetgen_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/vgrid_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/vgrid_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/aflr3_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/aflr3_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_aflr3
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_aflr3" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/fast_to_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/fast_to_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_fast
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_fast" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_vtk
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_to_vtk" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/convert_location
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/convert_location" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/convert_variables
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/convert_variables" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/convert_dataclass
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/convert_dataclass" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/extract_subset
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/extract_subset" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/interpolate_cgns
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/interpolate_cgns" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/update_ngon
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/update_ngon" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_info
-- Set non-toolchain portion of runtime path of "/home/eric/software/cgns/4.5.0/bin/cgnstools/cgns_info" to "/home/eric/software/cgns/4.5.0/lib: /home/eric/software/cgns/4.5.0/lib"
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/conserved.cnv
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/convert.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/dimensional.cnv
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/patran.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/plot3d.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/primitive.cnv
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tecplot.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/tetgen.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/vgrid.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/aflr3.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/fast.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/util.tcl
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/utilities.mnu
-- Installing: /home/eric/software/cgns/4.5.0/share/cgnstools/vtk.tcl
-- Installing: /home/eric/software/cgns/4.5.0/bin/cgconfig
```

## cmake example

```cmake
cmake_minimum_required ( VERSION 3.20 )

project ( testprj )

if (NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()
message(STATUS "Build directory: ${PROJECT_BINARY_DIR}")
message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")

set ( PRJ_COMPILE_FEATURES )
set ( PRJ_COMPILE_DEFINITIONS )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_20 )

set ( CGNS_INCLUDE_DIRS $ENV{CGNS_INC} )
set ( CGNS_LIBRARIES $ENV{CGNS_LIB_SHARED_NAME} )

if ( ${CMAKE_SYSTEM_NAME} MATCHES "Windows" )
    set ( CGNS_ROOT "C:/dev/cgns/4.4.0" )
    set ( CGNS_LIBNAME "cgnsdll.lib" )

    set ( CGNS_INCLUDE_DIRS "${CGNS_ROOT}/include" CACHE PATH "path to CGNS headers" )
    set ( CGNS_LIBRARIES "${CGNS_ROOT}/lib/${CGNS_LIBNAME}" CACHE PATH "path to CGNS library" )
else()
    set ( CGNS_ROOT "/home/eric/software/cgns/4.5.0" )
    set ( CGNS_LIBNAME "libcgns.a" )

    set ( CGNS_INCLUDE_DIRS "${CGNS_ROOT}/include" CACHE PATH "path to CGNS headers" )
    set ( CGNS_LIBRARIES "${CGNS_ROOT}/lib/${CGNS_LIBNAME}" CACHE PATH "path to CGNS library" )
endif()

#message(STATUS "CGNS_INCLUDE_DIRS = ${CGNS_INCLUDE_DIRS}")

list ( APPEND PRJ_LIBRARIES ${CGNS_LIBRARIES} )
list ( APPEND PRJ_INCLUDE_DIRS ${CGNS_INCLUDE_DIRS} )
list ( APPEND PRJ_COMPILE_DEFINITIONS PRJ_ENABLE_CGNS )

message ( STATUS "MSVC=${MSVC}" )
if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

add_executable ( ${PROJECT_NAME}
    write_grid_str.c
)

target_include_directories ( ${PROJECT_NAME}
    PRIVATE
        ${PRJ_INCLUDE_DIRS}
)

target_link_libraries( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_LIBRARIES}
)

target_compile_features ( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_COMPILE_FEATURES}
)

target_compile_definitions ( ${PROJECT_NAME}
    PRIVATE
       ${PRJ_COMPILE_DEFINITIONS} 
)
```


```
update-desktop-database ~/.local/share/applications
```
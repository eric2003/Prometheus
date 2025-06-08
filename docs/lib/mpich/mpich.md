# MPICH

## Link

- [MPI_Comm_size always returns 1 again](https://stackoverflow.com/questions/78815680/mpi-comm-size-always-returns-1-again).

## Ubuntu

### sudo apt-get install mpich
```bash
eric@fantasy:~/work/vtk_work/VTK-9.4.2/build$ sudo apt-get install mpich
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages were automatically installed and are no longer required:
  linux-headers-6.11.0-24-generic linux-hwe-6.11-headers-6.11.0-24 linux-hwe-6.11-tools-6.11.0-24
  linux-image-6.11.0-24-generic linux-modules-6.11.0-24-generic linux-modules-extra-6.11.0-24-generic
  linux-tools-6.11.0-24-generic
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  hwloc-nox libamd-comgr2 libamdhip64-5 libevent-core-2.1-7t64 libevent-pthreads-2.1-7t64 libhsa-runtime64-1
  libhsakmt1 libllvm17t64 libmpich-dev libmpich12 libmunge2 libpmix2t64 librdmacm1t64 libslurm40t64 libucx0
Suggested packages:
  mpich-doc
The following NEW packages will be installed:
  hwloc-nox libamd-comgr2 libamdhip64-5 libevent-core-2.1-7t64 libevent-pthreads-2.1-7t64 libhsa-runtime64-1
  libhsakmt1 libllvm17t64 libmpich-dev libmpich12 libmunge2 libpmix2t64 librdmacm1t64 libslurm40t64 libucx0 mpich
0 upgraded, 16 newly installed, 0 to remove and 6 not upgraded.
Need to get 72.2 MB of archives.
After this operation, 324 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libllvm17t64 amd64 1:17.0.6-9ubuntu1 [26.2 MB]
Get:2 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libamd-comgr2 amd64 6.0+git20231212.4510c28+dfsg-3build2 [14.4 MB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libhsakmt1 amd64 5.7.0-1build1 [62.9 kB]
Get:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libhsa-runtime64-1 amd64 5.7.1-2build1 [491 kB]
Get:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libamdhip64-5 amd64 5.7.1-3 [9,621 kB]
Get:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libevent-core-2.1-7t64 amd64 2.1.12-stable-9ubuntu2 [91.3 kB]
Get:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libevent-pthreads-2.1-7t64 amd64 2.1.12-stable-9ubuntu2 [7,982 B]
Get:8 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libmunge2 amd64 0.5.15-4build1 [14.7 kB]
Get:9 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libpmix2t64 amd64 5.0.1-4.1build1 [697 kB]
Get:10 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 librdmacm1t64 amd64 50.0-2build2 [70.7 kB]
Get:11 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libslurm40t64 amd64 23.11.4-1.2ubuntu5 [553 kB]
Get:12 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 libucx0 amd64 1.16.0+ds-5ubuntu1 [1,140 kB]
Get:13 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 hwloc-nox amd64 2.10.0-1build1 [221 kB]
Get:14 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libmpich12 amd64 4.2.0-5build3 [8,247 kB]
Get:15 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 mpich amd64 4.2.0-5build3 [202 kB]
Get:16 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libmpich-dev amd64 4.2.0-5build3 [10.2 MB]
Fetched 72.2 MB in 4s (19.1 MB/s)       
Selecting previously unselected package libllvm17t64:amd64.
(Reading database ... 252399 files and directories currently installed.)
Preparing to unpack .../00-libllvm17t64_1%3a17.0.6-9ubuntu1_amd64.deb ...
Unpacking libllvm17t64:amd64 (1:17.0.6-9ubuntu1) ...
Selecting previously unselected package libamd-comgr2:amd64.
Preparing to unpack .../01-libamd-comgr2_6.0+git20231212.4510c28+dfsg-3build2_amd64.deb ...
Unpacking libamd-comgr2:amd64 (6.0+git20231212.4510c28+dfsg-3build2) ...
Selecting previously unselected package libhsakmt1:amd64.
Preparing to unpack .../02-libhsakmt1_5.7.0-1build1_amd64.deb ...
Unpacking libhsakmt1:amd64 (5.7.0-1build1) ...
Selecting previously unselected package libhsa-runtime64-1.
Preparing to unpack .../03-libhsa-runtime64-1_5.7.1-2build1_amd64.deb ...
Unpacking libhsa-runtime64-1 (5.7.1-2build1) ...
Selecting previously unselected package libamdhip64-5.
Preparing to unpack .../04-libamdhip64-5_5.7.1-3_amd64.deb ...
Unpacking libamdhip64-5 (5.7.1-3) ...
Selecting previously unselected package libevent-core-2.1-7t64:amd64.
Preparing to unpack .../05-libevent-core-2.1-7t64_2.1.12-stable-9ubuntu2_amd64.deb ...
Unpacking libevent-core-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Selecting previously unselected package libevent-pthreads-2.1-7t64:amd64.
Preparing to unpack .../06-libevent-pthreads-2.1-7t64_2.1.12-stable-9ubuntu2_amd64.deb ...
Unpacking libevent-pthreads-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Selecting previously unselected package libmunge2:amd64.
Preparing to unpack .../07-libmunge2_0.5.15-4build1_amd64.deb ...
Unpacking libmunge2:amd64 (0.5.15-4build1) ...
Selecting previously unselected package libpmix2t64:amd64.
Preparing to unpack .../08-libpmix2t64_5.0.1-4.1build1_amd64.deb ...
Unpacking libpmix2t64:amd64 (5.0.1-4.1build1) ...
Selecting previously unselected package librdmacm1t64:amd64.
Preparing to unpack .../09-librdmacm1t64_50.0-2build2_amd64.deb ...
Unpacking librdmacm1t64:amd64 (50.0-2build2) ...
Selecting previously unselected package libslurm40t64.
Preparing to unpack .../10-libslurm40t64_23.11.4-1.2ubuntu5_amd64.deb ...
Unpacking libslurm40t64 (23.11.4-1.2ubuntu5) ...
Selecting previously unselected package libucx0:amd64.
Preparing to unpack .../11-libucx0_1.16.0+ds-5ubuntu1_amd64.deb ...
Unpacking libucx0:amd64 (1.16.0+ds-5ubuntu1) ...
Selecting previously unselected package hwloc-nox.
Preparing to unpack .../12-hwloc-nox_2.10.0-1build1_amd64.deb ...
Unpacking hwloc-nox (2.10.0-1build1) ...
Selecting previously unselected package libmpich12:amd64.
Preparing to unpack .../13-libmpich12_4.2.0-5build3_amd64.deb ...
Unpacking libmpich12:amd64 (4.2.0-5build3) ...
Selecting previously unselected package mpich.
Preparing to unpack .../14-mpich_4.2.0-5build3_amd64.deb ...
Unpacking mpich (4.2.0-5build3) ...
Selecting previously unselected package libmpich-dev:amd64.
Preparing to unpack .../15-libmpich-dev_4.2.0-5build3_amd64.deb ...
Unpacking libmpich-dev:amd64 (4.2.0-5build3) ...
Setting up libslurm40t64 (23.11.4-1.2ubuntu5) ...
Setting up hwloc-nox (2.10.0-1build1) ...
Setting up libmunge2:amd64 (0.5.15-4build1) ...
Setting up libllvm17t64:amd64 (1:17.0.6-9ubuntu1) ...
Setting up librdmacm1t64:amd64 (50.0-2build2) ...
Setting up libevent-core-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Setting up libamd-comgr2:amd64 (6.0+git20231212.4510c28+dfsg-3build2) ...
Setting up libhsakmt1:amd64 (5.7.0-1build1) ...
Setting up libevent-pthreads-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Setting up libpmix2t64:amd64 (5.0.1-4.1build1) ...
Setting up libhsa-runtime64-1 (5.7.1-2build1) ...
Setting up libamdhip64-5 (5.7.1-3) ...
Setting up libucx0:amd64 (1.16.0+ds-5ubuntu1) ...
Setting up libmpich12:amd64 (4.2.0-5build3) ...
Setting up mpich (4.2.0-5build3) ...
update-alternatives: using /usr/bin/mpicc.mpich to provide /usr/bin/mpicc (mpi) in auto mode
update-alternatives: using /usr/bin/mpirun.mpich to provide /usr/bin/mpirun (mpirun) in auto mode
Setting up libmpich-dev:amd64 (4.2.0-5build3) ...
update-alternatives: using /usr/include/x86_64-linux-gnu/mpich to provide /usr/include/x86_64-linux-gnu/mpi (mpi-x86_64-linux-gnu) in auto mode
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### mpicc --version
```
eric@fantasy:~/work/vtk_work/VTK-9.4.2/build$ mpicc --version
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### dpkg -L mpich
```
eric@fantasy:~$ dpkg -L mpich
/.
/usr
/usr/bin
/usr/bin/hydra_nameserver
/usr/bin/hydra_persist
/usr/bin/hydra_pmi_proxy
/usr/bin/mpicc.mpich
/usr/bin/mpichversion
/usr/bin/mpicxx.mpich
/usr/bin/mpiexec.hydra
/usr/bin/mpifort.mpich
/usr/bin/mpivars
/usr/bin/parkill
/usr/share
/usr/share/doc
/usr/share/doc/mpich
/usr/share/doc/mpich/copyright
/usr/share/man
/usr/share/man/man1
/usr/share/man/man1/mpichversion.1.gz
/usr/share/man/man1/mpivars.1.gz
/usr/share/man/man1/parkill.1.gz
/usr/bin/mpiexec.mpich
/usr/bin/mpif77.mpich
/usr/bin/mpif90.mpich
/usr/bin/mpirun.mpich
/usr/share/doc/mpich/changelog.Debian.gz
```

mpicc.mpich --version
```
eric@fantasy:~$ mpicc.mpich --version
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

echo $PATH
```
eric@fantasy:~$ echo $PATH
/home/eric/bin:/opt/hdfview/bin:/usr/local/cuda-12.8/bin:/home/eric/software/modules/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

echo $LD_LIBRARY_PATH
```
eric@fantasy:~$ echo $LD_LIBRARY_PATH
/opt/hdfview/lib:/usr/local/cuda-12.8/lib64
```

```
eric@fantasy:~/work/mpi_work/simple/01/build$ ompi_info --version
Command 'ompi_info' not found, but can be installed with:
sudo apt install openmpi-bin
```

```
eric@fantasy:~/work/mpi_work/simple/01/build$ dpkg -l | grep openmpi
```

dpkg -l | grep mpich
```
eric@fantasy:~$ dpkg -l | grep mpich
ii  libmpich-dev:amd64                             4.2.0-5build3                            amd64        Development files for MPICH
ii  libmpich12:amd64                               4.2.0-5build3                            amd64        Shared libraries for MPICH
ii  mpich                                          4.2.0-5build3                            amd64        Implementation of the MPI Message Passing Interface standard
```


```
eric@fantasy:~$ which mpicc
/usr/bin/mpicc
eric@fantasy:~$ which mpirun
/usr/bin/mpirun
eric@fantasy:~$ which mpiexec.hydra
/usr/bin/mpiexec.hydra
```

```
eric@fantasy:~$ find /usr -name "libmpich.so"
/usr/lib/x86_64-linux-gnu/libmpich.so
/usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
eric@fantasy:~$ find /usr/local -name "libmpich.so"
```


```
eric@fantasy:~$ dpkg -l | grep mpich
ii  libmpich-dev:amd64                             4.2.0-5build3                            amd64        Development files for MPICH
ii  libmpich12:amd64                               4.2.0-5build3                            amd64        Shared libraries for MPICH
ii  mpich   
eric@fantasy:~$ which mpicc
/usr/bin/mpicc
eric@fantasy:~$ which mpirun
/usr/bin/mpirun
eric@fantasy:~$ which mpiexec.hydra
/usr/bin/mpiexec.hydra
eric@fantasy:~$ find /usr -name "libmpich.so"
/usr/lib/x86_64-linux-gnu/libmpich.so
/usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
eric@fantasy:~$ find /usr/local -name "libmpich.so"
```

确认 /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so 的版本：
```
```

```
eric@fantasy:~$ ldd --version /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
ldd (Ubuntu GLIBC 2.39-0ubuntu8.4) 2.39
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
Written by Roland McGrath and Ulrich Drepper.
```

```
  The item was found at
    /usr/bin/pkg-config
  The file was found at

    /home/eric/software/cmake/cmake-4.0.2-linux-x86_64/share/cmake-4.0/Modules/FindPkgConfig.cmake	
  The item was found at

    /usr/bin/mpiexec
  The item was found at

    /usr/bin/mpicc
  The item was found at

    /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
	  The item was found at

    /usr/lib/x86_64-linux-gnu/mpich/include/mpi.h
  The item was found at

    /usr/bin/mpicxx
	  The item was found at

    /usr/lib/x86_64-linux-gnu/mpich/lib/libmpichcxx.so
  The item was found at

    /usr/lib/x86_64-linux-gnu/mpich/include/mpi.h
	-- Found MPI_CXX: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpichcxx.so (found version "4.1")
-- Found MPI: TRUE (found version "4.1")
CMake Debug Log at CMakeLists.txt:9 (find_package):
  find_package considered the following paths for FindMPI.cmake:

  The file was found at

    /home/eric/software/cmake/cmake-4.0.2-linux-x86_64/share/cmake-4.0/Modules/FindMPI.cmake



-- my_import_targets=MPI::MPI_C;MPI::MPI_CXX
```


```
eric@fantasy:~/work/mpi_work/simple/01a/build$ mpirun --version
HYDRA build details:
    Version:                                 4.2.0
    Release Date:                            Fri Feb  9 12:29:21 CST 2024
    CC:                              gcc -Wdate-time -D_FORTIFY_SOURCE=3 -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -Wl,-Bsymbolic-functions -flto=auto -ffat-lto-objects -Wl,-z,relro 
    Configure options:                       '--with-hwloc-prefix=/usr' '--with-device=ch4:ucx' 'FFLAGS=-O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -fallow-invalid-boz -fallow-argument-mismatch' '--prefix=/usr' 'CFLAGS=-g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3' 'LDFLAGS=-Wl,-Bsymbolic-functions -flto=auto -ffat-lto-objects -Wl,-z,relro' 'CPPFLAGS=-Wdate-time -D_FORTIFY_SOURCE=3'
    Process Manager:                         pmi
    Launchers available:                     ssh rsh fork slurm ll lsf sge manual persist
    Topology libraries available:            hwloc
    Resource management kernels available:   user slurm ll lsf sge pbs cobalt
    Demux engines available:                 poll select
eric@fantasy:~/work/mpi_work/simple/01a/build$ which mpirun
/usr/bin/mpirun

```

### dpkg -l | grep mpi
```
eric@fantasy:~$ dpkg -l | grep mpi
ii  bpfcc-tools                                    0.29.1+ds-1ubuntu7                       all          tools for BPF Compiler Collection (BCC)
ii  cuda-compiler-12-8                             12.8.1-1                                 amd64        CUDA compiler
ii  g++                                            4:13.2.0-7ubuntu1                        amd64        GNU C++ compiler
ii  g++-13                                         13.3.0-6ubuntu2~24.04                    amd64        GNU C++ compiler
ii  g++-13-x86-64-linux-gnu                        13.3.0-6ubuntu2~24.04                    amd64        GNU C++ compiler for x86_64-linux-gnu architecture
ii  g++-x86-64-linux-gnu                           4:13.2.0-7ubuntu1                        amd64        GNU C++ compiler for the amd64 architecture
ii  gcc                                            4:13.2.0-7ubuntu1                        amd64        GNU C compiler
ii  gcc-13                                         13.3.0-6ubuntu2~24.04                    amd64        GNU C compiler
ii  gcc-13-base:amd64                              13.3.0-6ubuntu2~24.04                    amd64        GCC, the GNU Compiler Collection (base package)
ii  gcc-13-x86-64-linux-gnu                        13.3.0-6ubuntu2~24.04                    amd64        GNU C compiler for the x86_64-linux-gnu architecture
ii  gcc-14-base:amd64                              14.2.0-4ubuntu2~24.04                    amd64        GCC, the GNU Compiler Collection (base package)
ii  gcc-x86-64-linux-gnu                           4:13.2.0-7ubuntu1                        amd64        GNU C compiler for the amd64 architecture
ii  gfortran                                       4:13.2.0-7ubuntu1                        amd64        GNU Fortran 95 compiler
ii  gfortran-13                                    13.3.0-6ubuntu2~24.04                    amd64        GNU Fortran compiler
ii  gfortran-13-x86-64-linux-gnu                   13.3.0-6ubuntu2~24.04                    amd64        GNU Fortran compiler for the x86_64-linux-gnu architecture
ii  gfortran-x86-64-linux-gnu                      4:13.2.0-7ubuntu1                        amd64        GNU Fortran 95 compiler for the amd64 architecture
ii  libbpfcc:amd64                                 0.29.1+ds-1ubuntu7                       amd64        shared library for BPF Compiler Collection (BCC)
ii  libexempi8:amd64                               2.6.5-1build1                            amd64        library to parse XMP metadata (Library)
ii  libllvm17t64:amd64                             1:17.0.6-9ubuntu1                        amd64        Modular compiler and toolchain technologies, runtime library
ii  libllvm18:amd64                                1:18.1.3-1ubuntu1                        amd64        Modular compiler and toolchain technologies, runtime library
ii  libllvm19:amd64                                1:19.1.1-1ubuntu1~24.04.2                amd64        Modular compiler and toolchain technologies, runtime library
ii  libmagic-mgc                                   1:5.45-3build1                           amd64        File type determination library using "magic" numbers (compiled magic file)
ii  libmpich-dev:amd64                             4.2.0-5build3                            amd64        Development files for MPICH
ii  libmpich12:amd64                               4.2.0-5build3                            amd64        Shared libraries for MPICH
ii  liborc-0.4-0t64:amd64                          1:0.4.38-1ubuntu0.1                      amd64        Library of Optimized Inner Loops Runtime Compiler
ii  libxkbcommon0:amd64                            1.6.0-1build1                            amd64        library interface to the XKB compiler - shared library
ii  make                                           4.3-4.1build2                            amd64        utility for directing compilation
ii  mpich                                          4.2.0-5build3                            amd64        Implementation of the MPI Message Passing Interface standard
ii  pkg-config:amd64                               1.8.1-2build1                            amd64        manage compile and link flags for libraries (transitional package)
ii  pkgconf:amd64                                  1.8.1-2build1                            amd64        manage compile and link flags for libraries
ii  pkgconf-bin                                    1.8.1-2build1                            amd64        manage compile and link flags for libraries (binaries)
ii  python3-bpfcc                                  0.29.1+ds-1ubuntu7                       all          Python 3 wrappers for BPF Compiler Collection (BCC)
ii  rpcsvc-proto                                   1.4.2-0ubuntu7                           amd64        RPC protocol compiler and definitions
```

### ldd /usr/bin/mpirun
```
eric@fantasy:~$ ldd /usr/bin/mpirun
	linux-vdso.so.1 (0x0000702e45758000)
	libhwloc.so.15 => /lib/x86_64-linux-gnu/libhwloc.so.15 (0x0000702e45686000)
	libslurm.so.40 => /lib/x86_64-linux-gnu/libslurm.so.40 (0x0000702e4551a000)
	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x0000702e45200000)
	libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x0000702e45431000)
	libudev.so.1 => /lib/x86_64-linux-gnu/libudev.so.1 (0x0000702e451cd000)
	libresolv.so.2 => /lib/x86_64-linux-gnu/libresolv.so.2 (0x0000702e4541c000)
	/lib64/ld-linux-x86-64.so.2 (0x0000702e4575a000)
	libcap.so.2 => /lib/x86_64-linux-gnu/libcap.so.2 (0x0000702e451c0000)

```

### strings /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so | grep -i version
```
eric@fantasy:~$ strings /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so | grep -i version
PMPI_Get_library_version
PMPI_Get_version
ucp_init_version
**mpi_get_library_version
subversion
**mpi_get_version
**mpi_get_version %p %p
MPIR_CVAR_PMI_VERSION
MPICH_PMI_VERSION
MPIR_PARAM_PMI_VERSION
MPICH_CH4_OFI_MAJOR_VERSION
MPICH_CH4_OFI_MINOR_VERSION
pmix.rm.version
PMI_SUBVERSION
MPICH Version:      %s
**mpi_get_library_version %p %p
Variable to select runtime PMI version.
CVAR: MPIR_CVAR_PMI_VERSION = %s
If true, enable virtual addressing for OFI memory regions. This variable is only meaningful for OFI versions 1.5+. It is equivalent to using FI_MR_BASIC in versions of OFI older than 1.5.
If true, require all OFI memory regions must be backed by physical memory pages at the time the registration call is made. This variable is only meaningful for OFI versions 1.5+. It is equivalent to using FI_MR_BASIC in versions of OFI older than 1.5.
If true, enable provider supplied key for OFI memory regions. This variable is only meaningful for OFI versions 1.5+. It is equivalent to using FI_MR_BASIC in versions of OFI older than 1.5.
MPIR_CVAR_CH4_OFI_MAJOR_VERSION
Specifies the major version of the OFI library. The default is the major version of the OFI library used with MPICH. If using this CVAR, it is recommended that the user also specifies a specific OFI provider.
MPIR_PARAM_CH4_OFI_MAJOR_VERSION
CVAR: MPIR_CVAR_CH4_OFI_MAJOR_VERSION = %d
MPIR_CVAR_CH4_OFI_MINOR_VERSION
Specifies the major version of the OFI library. The default is the minor version of the OFI library used with MPICH. If using this CVAR, it is recommended that the user also specifies a specific OFI provider.
MPIR_PARAM_CH4_OFI_MINOR_VERSION
CVAR: MPIR_CVAR_CH4_OFI_MINOR_VERSION = %d
- If the file system is NFS, you need to use NFS version 3, ensure that the lockd daemon is running on all the machines, and mount the directory with the 'noac' option (no attribute caching).
%s not supported by PMIx Host %s version %s
internal_Get_version
internal_Get_library_version
MPI_Get_version(version=%p, subversion=%p) failed
**mpi_get_version %p %p
MPI_Get_library_version(version=%p, resultlen=%p) failed
**mpi_get_library_version %p %p
MPI_Get_version failed
**mpi_get_version
MPI_Get_library_version failed
**mpi_get_library_version
Read and Write datarep conversions are currently not supported by MPI-IO
An error occurred in a user-defined data conversion function
**conversion
.gnu.version
.gnu.version_r
```

### grep -i version /usr/lib/x86_64-linux-gnu/mpich/include/mpi.h
```
eric@fantasy:~$ grep -i version /usr/lib/x86_64-linux-gnu/mpich/include/mpi.h
#define MPI_VERSION    4
#define MPI_SUBVERSION 1
/* MPICH_VERSION is the version string. MPICH_NUMVERSION is the
 * numeric version that can be used in numeric comparisons.
 * MPICH_VERSION uses the following format:
 * Version: [MAJ].[MIN].[REV][EXT][EXT_NUMBER]
 * MPICH_NUMVERSION will convert EXT to a format number:
 * Numeric version will have 1 digit for MAJ, 2 digits for MIN, 2
 * 1.0.7rc1 will have the numeric version 10007201.
#define MPICH_VERSION "4.2.0"
#define MPICH_NUMVERSION 40200300
#define MPICH_CALC_VERSION(MAJOR, MINOR, REVISION, TYPE, PATCH) \
#  if defined(__STDC_VERSION__)
#    if __STDC_VERSION__ >= 199901
#ifdef __STDC_VERSION__
#if __STDC_VERSION__ >= 199901
/* C Versions (return pointer to value),
   Fortran Versions (return integer value).
   Fortran versions of the attributes are formed by adding one to
   the C version.
#define MPI_MAX_LIBRARY_VERSION_STRING 8192
#define MPI_ERR_CONVERSION  23      /* */
typedef int (MPI_Datarep_conversion_function)(void *, MPI_Datatype, int,
typedef int (MPI_Datarep_conversion_function_c)(void *, MPI_Datatype, MPI_Count,
#define MPI_CONVERSION_FN_NULL ((MPI_Datarep_conversion_function *)0)
#define MPI_CONVERSION_FN_NULL_C ((MPI_Datarep_conversion_function_c *)0)

```

```
eric@fantasy:~/work/mpi_work/simple/01a/build$ cmake ..
-- The C compiler identification is GNU 13.3.0
-- The CXX compiler identification is GNU 13.3.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: /usr/bin/cc - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found MPI_C: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so (found version "4.1")
-- Found MPI_CXX: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpichcxx.so (found version "4.1")
-- Found MPI: TRUE (found version "4.1")
-- my_import_targets=MPI::MPI_C;MPI::MPI_CXX
MPI_VERSION: 4.1
MPI_LIBRARIES: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
MPI_INCLUDE_PATH: /usr/lib/x86_64-linux-gnu/mpich/include
MPIEXEC: /usr/bin/mpiexec
-- Configuring done (1.5s)
-- Generating done (0.0s)
-- Build files have been written to: /home/eric/work/mpi_work/simple/01a/build
```


```
eric@fantasy:~$ which mpicc
/usr/bin/mpicc
eric@fantasy:~$ mpicc -v
mpicc for MPICH version 4.2.0
Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=/usr/libexec/gcc/x86_64-linux-gnu/13/lto-wrapper
OFFLOAD_TARGET_NAMES=nvptx-none:amdgcn-amdhsa
OFFLOAD_TARGET_DEFAULT=1
Target: x86_64-linux-gnu
Configured with: ../src/configure -v --with-pkgversion='Ubuntu 13.3.0-6ubuntu2~24.04' --with-bugurl=file:///usr/share/doc/gcc-13/README.Bugs --enable-languages=c,ada,c++,go,d,fortran,objc,obj-c++,m2 --prefix=/usr --with-gcc-major-version-only --program-suffix=-13 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/libexec --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-bootstrap --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-libstdcxx-backtrace --enable-gnu-unique-object --disable-vtable-verify --enable-plugin --enable-default-pie --with-system-zlib --enable-libphobos-checking=release --with-target-system-zlib=auto --enable-objc-gc=auto --enable-multiarch --disable-werror --enable-cet --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-offload-targets=nvptx-none=/build/gcc-13-fG75Ri/gcc-13-13.3.0/debian/tmp-nvptx/usr,amdgcn-amdhsa=/build/gcc-13-fG75Ri/gcc-13-13.3.0/debian/tmp-gcn/usr --enable-offload-defaulted --without-cuda-driver --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu --with-build-config=bootstrap-lto-lean --enable-link-serialization=2
Thread model: posix
Supported LTO compression algorithms: zlib zstd
gcc version 13.3.0 (Ubuntu 13.3.0-6ubuntu2~24.04) 
```

```
eric@fantasy:~$ ls -l /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
lrwxrwxrwx 1 root root 17 Apr  1  2024 /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so -> ../../libmpich.so
eric@fantasy:~$ ls -l /usr/lib/x86_64-linux-gnu/libmpich.so
lrwxrwxrwx 1 root root 14 Apr  1  2024 /usr/lib/x86_64-linux-gnu/libmpich.so -> libmpich.so.12
```

### sudo find /usr/lib -name "libmpich.so*"
```
eric@fantasy:~$ sudo find /usr/lib -name "libmpich.so*"
[sudo] password for eric: 
/usr/lib/x86_64-linux-gnu/libmpich.so
/usr/lib/x86_64-linux-gnu/libmpich.so.12.4.0
/usr/lib/x86_64-linux-gnu/libmpich.so.12
/usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
```

### sudo find /usr/lib -name "libmpichcxx.so*"
```
eric@fantasy:~$ sudo find /usr/lib -name "libmpichcxx.so*"
/usr/lib/x86_64-linux-gnu/libmpichcxx.so.12
/usr/lib/x86_64-linux-gnu/mpich/lib/libmpichcxx.so
/usr/lib/x86_64-linux-gnu/libmpichcxx.so.12.4.0
/usr/lib/x86_64-linux-gnu/libmpichcxx.so
```

```
sudo find /usr/lib -name "libmpich.so*" -delete
sudo find /usr/lib -name "libmpichcxx.so*" -delete
sudo apt update
sudo apt install --reinstall mpich libmpich-dev
```

```
sudo apt-get remove mpich libmpich-dev
sudo apt-get autoremove
```

```
eric@fantasy:~$ dpkg -L mpich
dpkg-query: package 'mpich' is not installed
Use dpkg --contents (= dpkg-deb --contents) to list archive files contents.
```

```
eric@fantasy:~$ dpkg -L libmpich-dev
/usr
/usr/lib
/usr/lib/x86_64-linux-gnu
/usr/lib/x86_64-linux-gnu/fortran
```

```
eric@fantasy:~$ sudo apt-get remove libmpich-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Package 'libmpich-dev' is not installed, so not removed
0 upgraded, 0 newly installed, 0 to remove and 6 not upgraded.
```

```
eric@fantasy:~$ sudo rm -rf /usr/lib/x86_64-linux-gnu/fortran
eric@fantasy:~$ sudo rm -rf /usr/lib/x86_64-linux-gnu/libmpich*
eric@fantasy:~$ ls /usr/lib/x86_64-linux-gnu | grep mpich
```

```
eric@fantasy:~$ sudo apt-get purge libmpich-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  libmpich-dev*
0 upgraded, 0 newly installed, 1 to remove and 6 not upgraded.
After this operation, 0 B of additional disk space will be used.
Do you want to continue? [Y/n] y
(Reading database ... 213739 files and directories currently installed.)
Purging configuration files for libmpich-dev:amd64 (4.2.0-5build3) ...
```

```
eric@fantasy:~$ dpkg -l | grep libmpich-dev
eric@fantasy:~$ ls /usr/lib/x86_64-linux-gnu | grep mpich
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ which mpicc
/usr/bin/mpicc
eric@fantasy:~/work/mpi_work/simple/01b/build$ mpichversion
MPICH Version:      4.2.0
MPICH Release date: Fri Feb  9 12:29:21 CST 2024
MPICH ABI:          16:0:4
MPICH Device:       ch4:ucx
MPICH configure:    --build=x86_64-linux-gnu --prefix=/usr --includedir=${prefix}/include --mandir=${prefix}/share/man --infodir=${prefix}/share/info --sysconfdir=/etc --localstatedir=/var --disable-option-checking --disable-silent-rules --libdir=${prefix}/lib/x86_64-linux-gnu --runstatedir=/run --disable-maintainer-mode --disable-dependency-tracking --with-pmix=/usr/lib/x86_64-linux-gnu/pmix2 --with-ucx=/usr --with-device=ch4:ucx --with-pm=hydra --with-hwloc-prefix=/usr --with-wrapper-dl-type=none --enable-shared --without-yaksa --prefix=/usr --enable-fortran=all --disable-rpath --disable-wrapper-rpath --sysconfdir=/etc/mpich --libdir=${prefix}/lib/x86_64-linux-gnu/mpich/lib --includedir=${prefix}/lib/x86_64-linux-gnu/mpich/include --docdir=/usr/share/doc/mpich CPPFLAGS= CFLAGS= CXXFLAGS= FFLAGS=-O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -fallow-invalid-boz -fallow-argument-mismatch FCFLAGS=-O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -fallow-invalid-boz -fallow-argument-mismatch BASH_SHELL=/bin/bash
MPICH CC:           gcc  -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3  -O2
MPICH CXX:          g++  -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -O2
MPICH F77:          gfortran -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3  -fallow-invalid-boz -fallow-argument-mismatch -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -cpp  -fallow-invalid-boz -fallow-argument-mismatch -O2
MPICH FC:           gfortran -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3  -fallow-invalid-boz -fallow-argument-mismatch -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -cpp  -fallow-invalid-boz -fallow-argument-mismatch -O2
MPICH features:     threadcomm
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ cmake ..
-- The C compiler identification is GNU 13.3.0
-- The CXX compiler identification is GNU 13.3.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: /usr/bin/cc - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found MPI_C: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so (found version "4.1")
-- Found MPI_CXX: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpichcxx.so (found version "4.1")
-- Found MPI: TRUE (found version "4.1")
-- my_import_targets=MPI::MPI_C;MPI::MPI_CXX
MPI_VERSION: 4.1
MPI_LIBRARIES: /usr/lib/x86_64-linux-gnu/mpich/lib/libmpich.so
MPI_INCLUDE_PATH: /usr/lib/x86_64-linux-gnu/mpich/include
MPIEXEC: /usr/bin/mpiexec
-- Configuring done (1.5s)
-- Generating done (0.0s)
-- Build files have been written to: /home/eric/work/mpi_work/simple/01b/build
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ cmake --build .
[ 50%] Building CXX object CMakeFiles/TestMPICH.dir/main.cpp.o
[100%] Linking CXX executable TestMPICH
[100%] Built target TestMPICH
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ ./TestMPICH 
Hello from rank 0 of 1 processes.
eric@fantasy:~/work/mpi_work/simple/01b/build$ mpirun -n 2 ./TestMPICH 
Hello from rank 0 of 1 processes.
Hello from rank 0 of 1 processes.
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ mpirun -np 2 --host localhost ./TestMPICH
Hello from rank 0 of 1 processes.
Hello from rank 0 of 1 processes.
```

cat ../main.cpp 
```
eric@fantasy:~/work/mpi_work/simple/01b/build$ cat ../main.cpp 
#include <mpi.h>
#include <iostream>

int main(int argc, char* argv[]) {
    // 初始化MPI环境
    int result = MPI_Init(&argc, &argv);
    if (result != MPI_SUCCESS) {
        std::cerr << "MPI_Init failed" << std::endl;
        return 1;
    }

    // 获取当前进程的秩
    int rank;
    result = MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    if (result != MPI_SUCCESS) {
        std::cerr << "MPI_Comm_rank failed" << std::endl;
        MPI_Abort(MPI_COMM_WORLD, 1);
    }

    // 获取总的进程数
    int size;
    result = MPI_Comm_size(MPI_COMM_WORLD, &size);
    if (result != MPI_SUCCESS) {
        std::cerr << "MPI_Comm_size failed" << std::endl;
        MPI_Abort(MPI_COMM_WORLD, 1);
    }

    // 打印信息
    std::cout << "Hello from rank " << rank << " of " << size << " processes." << std::endl;

    // 结束MPI环境
    result = MPI_Finalize();
    if (result != MPI_SUCCESS) {
        std::cerr << "MPI_Finalize failed" << std::endl;
        return 1;
    }

    return 0;
}
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ echo $PATH
/home/eric/software/cmake/cmake-4.0.2-linux-x86_64/bin:/home/eric/bin:/opt/hdfview/bin:/usr/local/cuda-12.8/bin:/home/eric/software/modules/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ /usr/bin/mpirun -np 2 ./TestMPICH
Hello from rank 0 of 1 processes.
Hello from rank 0 of 1 processes.
```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ /usr/bin/mpirun --version
HYDRA build details:
    Version:                                 4.2.0
    Release Date:                            Fri Feb  9 12:29:21 CST 2024
    CC:                              gcc -Wdate-time -D_FORTIFY_SOURCE=3 -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -Wl,-Bsymbolic-functions -flto=auto -ffat-lto-objects -Wl,-z,relro 
    Configure options:                       '--with-hwloc-prefix=/usr' '--with-device=ch4:ucx' 'FFLAGS=-O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -fallow-invalid-boz -fallow-argument-mismatch' '--prefix=/usr' 'CFLAGS=-g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3' 'LDFLAGS=-Wl,-Bsymbolic-functions -flto=auto -ffat-lto-objects -Wl,-z,relro' 'CPPFLAGS=-Wdate-time -D_FORTIFY_SOURCE=3'
    Process Manager:                         pmi
    Launchers available:                     ssh rsh fork slurm ll lsf sge manual persist
    Topology libraries available:            hwloc
    Resource management kernels available:   user slurm ll lsf sge pbs cobalt
    Demux engines available:                 poll select
eric@fantasy:~/work/mpi_work/simple/01b/build$ /usr/bin/mpiexec --version
HYDRA build details:
    Version:                                 4.2.0
    Release Date:                            Fri Feb  9 12:29:21 CST 2024
    CC:                              gcc -Wdate-time -D_FORTIFY_SOURCE=3 -g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -Wl,-Bsymbolic-functions -flto=auto -ffat-lto-objects -Wl,-z,relro 
    Configure options:                       '--with-hwloc-prefix=/usr' '--with-device=ch4:ucx' 'FFLAGS=-O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3 -fallow-invalid-boz -fallow-argument-mismatch' '--prefix=/usr' 'CFLAGS=-g -O2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer -ffile-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=. -flto=auto -ffat-lto-objects -fstack-protector-strong -fstack-clash-protection -Wformat -Werror=format-security -fcf-protection -fdebug-prefix-map=/build/mpich-C3oteG/mpich-4.2.0=/usr/src/mpich-4.2.0-5build3' 'LDFLAGS=-Wl,-Bsymbolic-functions -flto=auto -ffat-lto-objects -Wl,-z,relro' 'CPPFLAGS=-Wdate-time -D_FORTIFY_SOURCE=3'
    Process Manager:                         pmi
    Launchers available:                     ssh rsh fork slurm ll lsf sge manual persist
    Topology libraries available:            hwloc
    Resource management kernels available:   user slurm ll lsf sge pbs cobalt
    Demux engines available:                 poll select
```


```
eric@fantasy:~/work/mpi_work/simple/01b/build$ ldd ./TestMPICH
	linux-vdso.so.1 (0x000078fb70c1f000)
	libmpich.so.12 => /lib/x86_64-linux-gnu/libmpich.so.12 (0x000078fb6e400000)
	libstdc++.so.6 => /lib/x86_64-linux-gnu/libstdc++.so.6 (0x000078fb6e000000)
	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x000078fb6dc00000)
	libhwloc.so.15 => /lib/x86_64-linux-gnu/libhwloc.so.15 (0x000078fb70ba0000)
	libpmix.so.2 => /lib/x86_64-linux-gnu/libpmix.so.2 (0x000078fb6d800000)
	libucp.so.0 => /lib/x86_64-linux-gnu/libucp.so.0 (0x000078fb6e29d000)
	libucs.so.0 => /lib/x86_64-linux-gnu/libucs.so.0 (0x000078fb6df9a000)
	/lib64/ld-linux-x86-64.so.2 (0x000078fb70c21000)
	libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x000078fb6deb1000)
	libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x000078fb70b70000)
	libudev.so.1 => /lib/x86_64-linux-gnu/libudev.so.1 (0x000078fb6de7e000)
	libmunge.so.2 => /lib/x86_64-linux-gnu/libmunge.so.2 (0x000078fb70b66000)
	libevent_core-2.1.so.7 => /lib/x86_64-linux-gnu/libevent_core-2.1.so.7 (0x000078fb6de49000)
	libevent_pthreads-2.1.so.7 => /lib/x86_64-linux-gnu/libevent_pthreads-2.1.so.7 (0x000078fb70b61000)
	libuct.so.0 => /lib/x86_64-linux-gnu/libuct.so.0 (0x000078fb6dbba000)
	libucm.so.0 => /lib/x86_64-linux-gnu/libucm.so.0 (0x000078fb70b44000)
	libcap.so.2 => /lib/x86_64-linux-gnu/libcap.so.2 (0x000078fb6e28e000)
```


```
eric@fantasy:~/work/mpi_work/simple/01b/build$ echo $LD_LIBRARY_PATH
/opt/hdfview/lib:/usr/local/cuda-12.8/lib64

```

```
eric@fantasy:~/work/mpi_work/simple/01b/build$ echo $MANPATH
/home/eric/software/cmake/cmake-4.0.2-linux-x86_64/man
```


```
eric@fantasy:~/work/mpi_work/simple/01b/build$ which pkg-config
/usr/bin/pkg-config
```

```
eric@fantasy:~$ pkg-config --libs --cflags mpi-c mpi-cxx
Package mpi-c was not found in the pkg-config search path.
Perhaps you should add the directory containing `mpi-c.pc'
to the PKG_CONFIG_PATH environment variable
Package 'mpi-c', required by 'virtual:world', not found
Package 'mpi-cxx', required by 'virtual:world', not found
```


```
eric@fantasy:~$ dpkg -l | grep mpi
ii  bpfcc-tools                                    0.29.1+ds-1ubuntu7                       all          tools for BPF Compiler Collection (BCC)
ii  cuda-compiler-12-8                             12.8.1-1                                 amd64        CUDA compiler
ii  g++                                            4:13.2.0-7ubuntu1                        amd64        GNU C++ compiler
ii  g++-13                                         13.3.0-6ubuntu2~24.04                    amd64        GNU C++ compiler
ii  g++-13-x86-64-linux-gnu                        13.3.0-6ubuntu2~24.04                    amd64        GNU C++ compiler for x86_64-linux-gnu architecture
ii  g++-x86-64-linux-gnu                           4:13.2.0-7ubuntu1                        amd64        GNU C++ compiler for the amd64 architecture
ii  gcc                                            4:13.2.0-7ubuntu1                        amd64        GNU C compiler
ii  gcc-13                                         13.3.0-6ubuntu2~24.04                    amd64        GNU C compiler
ii  gcc-13-base:amd64                              13.3.0-6ubuntu2~24.04                    amd64        GCC, the GNU Compiler Collection (base package)
ii  gcc-13-x86-64-linux-gnu                        13.3.0-6ubuntu2~24.04                    amd64        GNU C compiler for the x86_64-linux-gnu architecture
ii  gcc-14-base:amd64                              14.2.0-4ubuntu2~24.04                    amd64        GCC, the GNU Compiler Collection (base package)
ii  gcc-x86-64-linux-gnu                           4:13.2.0-7ubuntu1                        amd64        GNU C compiler for the amd64 architecture
ii  gfortran                                       4:13.2.0-7ubuntu1                        amd64        GNU Fortran 95 compiler
ii  gfortran-13                                    13.3.0-6ubuntu2~24.04                    amd64        GNU Fortran compiler
ii  gfortran-13-x86-64-linux-gnu                   13.3.0-6ubuntu2~24.04                    amd64        GNU Fortran compiler for the x86_64-linux-gnu architecture
ii  gfortran-x86-64-linux-gnu                      4:13.2.0-7ubuntu1                        amd64        GNU Fortran 95 compiler for the amd64 architecture
ii  libbpfcc:amd64                                 0.29.1+ds-1ubuntu7                       amd64        shared library for BPF Compiler Collection (BCC)
ii  libexempi8:amd64                               2.6.5-1build1                            amd64        library to parse XMP metadata (Library)
ii  libllvm17t64:amd64                             1:17.0.6-9ubuntu1                        amd64        Modular compiler and toolchain technologies, runtime library
ii  libllvm18:amd64                                1:18.1.3-1ubuntu1                        amd64        Modular compiler and toolchain technologies, runtime library
ii  libllvm19:amd64                                1:19.1.1-1ubuntu1~24.04.2                amd64        Modular compiler and toolchain technologies, runtime library
ii  libmagic-mgc                                   1:5.45-3build1                           amd64        File type determination library using "magic" numbers (compiled magic file)
ii  libmpich-dev:amd64                             4.2.0-5build3                            amd64        Development files for MPICH
ii  libmpich12:amd64                               4.2.0-5build3                            amd64        Shared libraries for MPICH
ii  liborc-0.4-0t64:amd64                          1:0.4.38-1ubuntu0.1                      amd64        Library of Optimized Inner Loops Runtime Compiler
ii  libxkbcommon0:amd64                            1.6.0-1build1                            amd64        library interface to the XKB compiler - shared library
ii  make                                           4.3-4.1build2                            amd64        utility for directing compilation
ii  mpich                                          4.2.0-5build3                            amd64        Implementation of the MPI Message Passing Interface standard
ii  pkg-config:amd64                               1.8.1-2build1                            amd64        manage compile and link flags for libraries (transitional package)
ii  pkgconf:amd64                                  1.8.1-2build1                            amd64        manage compile and link flags for libraries
ii  pkgconf-bin                                    1.8.1-2build1                            amd64        manage compile and link flags for libraries (binaries)
ii  python3-bpfcc                                  0.29.1+ds-1ubuntu7                       all          Python 3 wrappers for BPF Compiler Collection (BCC)
ii  rpcsvc-proto                                   1.4.2-0ubuntu7                           amd64        RPC protocol compiler and definitions
```


```
eric@fantasy:~$ ldd /usr/bin/mpirun
	linux-vdso.so.1 (0x00007f9071ef6000)
	libhwloc.so.15 => /lib/x86_64-linux-gnu/libhwloc.so.15 (0x00007f9071e24000)
	libslurm.so.40 => /lib/x86_64-linux-gnu/libslurm.so.40 (0x00007f9071cb8000)
	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f9071a00000)
	libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f9071917000)
	libudev.so.1 => /lib/x86_64-linux-gnu/libudev.so.1 (0x00007f9071c85000)
	libresolv.so.2 => /lib/x86_64-linux-gnu/libresolv.so.2 (0x00007f9071c70000)
	/lib64/ld-linux-x86-64.so.2 (0x00007f9071ef8000)
	libcap.so.2 => /lib/x86_64-linux-gnu/libcap.so.2 (0x00007f9071c63000)
```

```
eric@fantasy:~$ ls /usr/lib/x86_64-linux-gnu/libmpich*
/usr/lib/x86_64-linux-gnu/libmpichcxx.so     /usr/lib/x86_64-linux-gnu/libmpichcxx.so.12.4.0  /usr/lib/x86_64-linux-gnu/libmpichfort.so     /usr/lib/x86_64-linux-gnu/libmpichfort.so.12.4.0  /usr/lib/x86_64-linux-gnu/libmpich.so.12
/usr/lib/x86_64-linux-gnu/libmpichcxx.so.12  /usr/lib/x86_64-linux-gnu/libmpichf90.so         /usr/lib/x86_64-linux-gnu/libmpichfort.so.12  /usr/lib/x86_64-linux-gnu/libmpich.so             /usr/lib/x86_64-linux-gnu/libmpich.so.12.4.0
```

cat /etc/ld.so.conf
```
eric@fantasy:~$ cat /etc/ld.so.conf
include /etc/ld.so.conf.d/*.conf
```

tree /etc/ld.so.conf.d/
```
eric@fantasy:~$ tree /etc/ld.so.conf.d/
/etc/ld.so.conf.d/
├── 000_cuda.conf
├── 988_cuda-12.conf
├── fakeroot-x86_64-linux-gnu.conf
├── gds-12-8.conf
├── libc.conf
└── x86_64-linux-gnu.conf

1 directory, 6 files
```

cat /etc/ld.so.conf.d/000_cuda.conf 
```
eric@fantasy:~$ cat /etc/ld.so.conf.d/000_cuda.conf 
/usr/local/cuda/targets/x86_64-linux/lib
```

cat /etc/ld.so.conf.d/988_cuda-12.conf 
```
eric@fantasy:~$ cat /etc/ld.so.conf.d/988_cuda-12.conf 
/usr/local/cuda-12/targets/x86_64-linux/lib
```

cat /etc/ld.so.conf.d/fakeroot-x86_64-linux-gnu.conf 
```
eric@fantasy:~$ cat /etc/ld.so.conf.d/fakeroot-x86_64-linux-gnu.conf 
/usr/lib/x86_64-linux-gnu/libfakeroot
```

cat /etc/ld.so.conf.d/gds-12-8.conf 
```
eric@fantasy:~$ cat /etc/ld.so.conf.d/gds-12-8.conf 
/usr/local/cuda-12.8/targets/x86_64-linux/lib
```

cat /etc/ld.so.conf.d/libc.conf 
```
eric@fantasy:~$ cat /etc/ld.so.conf.d/libc.conf 
# libc default configuration
/usr/local/lib
```

```
eric@fantasy:~$ cat /etc/ld.so.conf.d/x86_64-linux-gnu.conf 
# Multiarch support
/usr/local/lib/x86_64-linux-gnu
/lib/x86_64-linux-gnu
/usr/lib/x86_64-linux-gnu
```

MPI_Comm_size always returns 1 again

```
There is an issue with MPICH and mpiexec/mpirun on Ubuntu 24.04.

It seems MPICH was only built with PMIx support but mpiexec (hydra) only provides a PMI server.

A workaround is to build from source and prrte (several dependencies are needed such as libpmix-dev and libevent-dev
```

```
$ wget https://github.com/openpmix/prrte/releases/download/v3.0.6/prrte-3.0.6.tar.bz2
$ tar xvfj prrte-3.0.6.tar.bz2
$ cd prrte-3.0.6
$ make
$ sudo make install
```

prterun --version
```
eric@fantasy:~$ prterun --version
prterun (PRRTE) 4.0.0
Report bugs to: https://github.com/openpmix/prrte

```

```
$ prterun -n 2 ./hello_c
Hello, world, I am 0 of 2, (MPICH Version:      4.2.0
Hello, world, I am 1 of 2, (MPICH Version:      4.2.0
```

### mpirun -n 2 ./TestMPICH
```
eric@fantasy:~/work/mpi_work/simple/01b/build$ mpirun -n 2 ./TestMPICH 
Hello from rank 0 of 1 processes.
Hello from rank 0 of 1 processes.
```

### prterun -n 2 ./TestMPICH
```
eric@fantasy:~/work/mpi_work/simple/01b/build$ prterun -n 2 ./TestMPICH
Hello from rank 0 of 2 processes.
Hello from rank 1 of 2 processes.
```

### prterun -n 4 ./TestMPICH
```
eric@fantasy:~/work/mpi_work/simple/01b/build$ prterun -n 4 ./TestMPICH
Hello from rank 0 of 4 processes.
Hello from rank 2 of 4 processes.
Hello from rank 1 of 4 processes.
Hello from rank 3 of 4 processes.
```
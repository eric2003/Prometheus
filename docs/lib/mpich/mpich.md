# MPICH

## Link

- [SQLite3](https://github.com/madler/zlib).


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
```
# OpenCASCADE


## Link

- [github OCCT](https://github.com/Open-Cascade-SAS/OCCT).

## Ubuntu

```
find /usr /usr/local /opt/intel/oneapi -name "OpenCASCADEConfig.cmake" 2>/dev/null
find /usr /usr/local /opt/intel/oneapi -name "opencascade-config.cmake" 2>/dev/null
```

### find /usr /usr/local /opt/intel/oneapi -name "OpenCASCADEConfig.cmake" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "OpenCASCADEConfig.cmake" 2>/dev/null
eric@fantasy:~$
```

### find /usr /usr/local /opt/intel/oneapi -name "opencascade-config.cmake" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "opencascade-config.cmake" 2>/dev/null
eric@fantasy:~$ 
```

```
find /usr /usr /opt/intel/local -name "TKBRep.h" 2>/dev/null
find /usr /usr/local /opt -name "libTKernel.so" 2>/dev/null
```

### find /usr /usr /opt/intel/local -name "TKBRep.h" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr /opt/intel/local -name "TKBRep.h" 2>/dev/null
eric@fantasy:~$ 
```

### find /usr /usr/local /opt -name "libTKernel.so" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt -name "libTKernel.so" 2>/dev/null
eric@fantasy:~$ 
```

### dpkg -l | grep opencascade
```
eric@fantasy:~$ dpkg -l | grep opencascade
eric@fantasy:~$ 
```

### git clone git@github.com:Open-Cascade-SAS/OCCT.git
```
eric@fantasy:~/work/OpenCASCADE_work$ git clone git@github.com:Open-Cascade-SAS/OCCT.git
Cloning into 'OCCT'...
remote: Enumerating objects: 288468, done.
remote: Counting objects: 100% (81/81), done.
remote: Compressing objects: 100% (81/81), done.
remote: Total 288468 (delta 2), reused 3 (delta 0), pack-reused 288387 (from 2)
Receiving objects: 100% (288468/288468), 172.30 MiB | 2.04 MiB/s, done.
Resolving deltas: 100% (232823/232823), done.
Updating files: 100% (35818/35818), done.
```

### sudo apt install libfreetype6-dev tcl-dev tk-dev libtbb-dev
```
eric@fantasy:~$ sudo apt install libfreetype6-dev tcl-dev tk-dev libtbb-dev
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Note, selecting 'libfreetype-dev' instead of 'libfreetype6-dev'
libfreetype-dev is already the newest version (2.13.2+dfsg-1build3).
libfreetype-dev set to manually installed.
tcl-dev is already the newest version (8.6.14build1).
tk-dev is already the newest version (8.6.14build1).
libtbb-dev is already the newest version (2021.11.0-2ubuntu2).
libtbb-dev set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
```

### mkdir build && cd build
```
eric@fantasy:~/work/OpenCASCADE_work/OCCT$ mkdir build && cd build
eric@fantasy:~/work/OpenCASCADE_work/OCCT/build$ 
```

```
module load cmake/4.0.2
```

```
eric@fantasy:~/work/OpenCASCADE_work/OCCT/build$ cmake ..
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
-- Info: TCL is used by OCCT
-- Info: TK is used by OCCT
-- Info: Xlib is used by OCCT
-- Info: FreeType is used by OCCT
-- Info: TKIVtk and TKIVtkDraw toolkits excluded due to VTK usage is disabled
-- Found Tclsh: /bin/tclsh (found version "8.6")
-- Info: TCL version isn't found
-- Info: TK version isn't found
-- Found Freetype: /usr/lib/x86_64-linux-gnu/libfreetype.so (found version "2.13.2")
-- Info: The directories of 3rdparty headers: 
	/usr/include/tcl
	/usr/include/freetype2
-- Info: The directories of 3rdparty libraries: 
	/usr/lib/x86_64-linux-gnu
-- 
Info: (23:25:40) Start collecting all OCCT header files into /home/eric/work/OpenCASCADE_work/OCCT/build/inc ...
-- Info: (23:25:42) End the collecting
-- Info: Used native memory manager
-- Info: (23:25:42) OCCT toolkits processed
-- Info: (23:25:42) OCCT configuration files prepared
-- Configuring done (4.1s)
-- Generating done (1.8s)
-- Build files have been written to: /home/eric/work/OpenCASCADE_work/OCCT/build

```

```
make -j$(nproc)
sudo make install
```
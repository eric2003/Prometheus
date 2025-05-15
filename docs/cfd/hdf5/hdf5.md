# HDF5

HDF5 consists of a file format for storing HDF5 data, a data model for logically organizing and accessing HDF5 data from an application, and the software (libraries, language interfaces, and tools) for working with this format.

## Article link

-  [High-performance data management and storage suite(HDF5Group)](https://www.hdfgroup.org/solutions/hdf5/).
-  [The HDF Group Documentation](https://portal.hdfgroup.org/documentation/).
-  [CGNS and HDF5 compiling and linking related article links compilation](https://zhuanlan.zhihu.com/p/452874893/).

## download
-  [HDF5/releases](https://support.hdfgroup.org/ftp/HDF5/releases/).
-  [HDF5 1.14.4.3](https://portal.hdfgroup.org/downloads/hdf5/hdf5_1_14_4.html).
-  [HDF5 1.14.4.3 FTP](https://support.hdfgroup.org/ftp/HDF5/releases/hdf5-1.14/hdf5-1.14.3/).
-  [HDF5 1.14.4.4 FTP](https://support.hdfgroup.org/ftp/HDF5/releases/hdf5-1.14/hdf5-1.14.4/bin/).
-  [https://github.com/HDFGroup/hdf5/releases](https://github.com/HDFGroup/hdf5/releases).
-  [https://github.com/HDFGroup/hdf5/releases/download/hdf5_1.14.6/hdf5-1.14.6-ubuntu-2404_gcc.deb](https://github.com/HDFGroup/hdf5/releases/download/hdf5_1.14.6/hdf5-1.14.6-ubuntu-2404_gcc.deb).

## hdf5-1.14.6

Downloads
Source code and binaries are available at:

-  [https://support.hdfgroup.org/downloads/hdf5/hdf5_1_14_6.html](https://support.hdfgroup.org/releases/hdf5/v1_14/v1_14_6/downloads/index.html).

点击上面页面进入：

-  [https://support.hdfgroup.org/releases/hdf5/v1_14/v1_14_6/downloads/index.html](https://support.hdfgroup.org/releases/hdf5/v1_14/v1_14_6/downloads/index.html).

```
HDF5 (Hierarchical Data Format 5) Software Library and Utilities.

This location provides the following downloads for HDF5 release 1.14.6:

Individual ABI Compatability Reports -- HTML report files
Filter plugins directory -- Binaries and Source packages
sha256 checksums -- all files
hdf5-1.14.6.tar.gz -- TGZ compressed source code with generated files
hdf5-1.14.6.zip -- Zip compressed source code with generated files
hdf5-1.14.6.doxygen.zip -- Doxygen documentation files
hdf5-1.14.6.html.abi.reports.tar.gz -- HTML ABI report files
hdf5-1.14.6-ubuntu-2404_gcc.tar.gz -- Ubuntu 24.04 binary built with GCC C Compiler
hdf5-1.14.6-ubuntu-2404_gcc_s3.tar.gz -- Ubuntu 24.04 binary built with GCC C Compiler and S3 VFD
hdf5-1.14.6-ubuntu-2404_gcc.deb -- Ubuntu 24.04 binary built with GCC C Compiler as debian package
hdf5-1.14.6-ubuntu-2404_gcc.rpm -- Ubuntu 24.04 binary built with GCC C Compiler as RPM package
hdf5-1.14.6-ubuntu-2404_intel.tar.gz -- Ubuntu 24.04 binary built with Intel OneAPI C Compiler
hdf5-1.14.6-macos14_clang.tar.gz -- Mac OS 14 binary built with AppleClang C Compiler
hdf5-1.14.6-macos14_clang.dmg -- Mac OS 14 binary built with AppleClang C Compiler as dmg package
hdf5-1.14.6-win-vs2022_cl.zip -- Windows binary built with MS C Compiler
hdf5-1.14.6-win-vs2022_cl.msi -- Windows binary built with MS C Compiler as msi package
hdf5-1.14.6-win-vs2022_intel.zip -- Windows binary built with Intel OneAPI C Compiler
hdf5-1.14.6-win-vs2022_intel.msi -- Windows binary built with Intel OneAPI C Compiler as msi package
```

```
wget https://github.com/HDFGroup/hdf5/releases/download/hdf5_1.N.N/<distribution>.tar.gz
gzip -cd <distribution>.tar.gz | tar xvf -
```

```
wget https://github.com/HDFGroup/hdf5/releases/download/hdf5_1.14.6/hdf5-1.14.6-ubuntu-2404_gcc.deb
gzip -cd <distribution>.tar.gz | tar xvf -
```


hdf5-1.14.6-ubuntu-2404_gcc.deb
```
https://github.com/HDFGroup/hdf5/releases/download/hdf5_1.14.6/hdf5-1.14.6-ubuntu-2404_gcc.deb
```

## install location

```
c:\dev\HDF_Group\HDF5\1.10.9
c:\dev\HDF_Group\HDF5\1.14.0
c:\dev\HDF_Group\HDF5\1.14.2
c:\dev\HDF_Group\HDF5\1.14.4
```

## HDFView

-  [HDFView 3.3.1](https://portal.hdfgroup.org/downloads/hdfview/hdfview3_3_1.html).

## HDFView Install location

```
c:\Users\eric\AppData\Local\HDFView\HDFView.exe
```

dpkg --contents hdf5-1.14.6-ubuntu-2404_gcc.deb > contents.txt
```
```

使用 dpkg -c package.deb 查看 .deb 包的内容和目标路径。
```
dpkg -c package.deb
```

```
sudo dpkg --instdir=/usr/local -i hdf5-1.14.6-ubuntu-2404_gcc.deb
```

```
sudo dpkg --instdir=/home/eric/software -i hdf5-1.14.6-ubuntu-2404_gcc.deb

sudo dpkg -P hdf5
sudo rm -rf /home/eric/software/HDF_Group
```


## HDF5 1.14.6 module file example
```bash
#%Module1.0
## HDF5 modulefile
## Module for HDF5 1.14.6 installed in /home/eric/software/HDF_Group/HDF5

proc ModulesHelp { } {
    puts stderr "\tHDF5 1.14.6 - Sets up environment for HDF5 library and tools."
    puts stderr "\tThis module adds HDF5 binaries, libraries, and headers to your environment."
    puts stderr "\tInstalled in: /home/eric/software/HDF_Group/HDF5"
    puts stderr "\tWebsite: https://www.hdfgroup.org/solutions/hdf5/"
}

module-whatis "HDF5 1.14.6 - High-performance data management and storage library"

set hdf5_subdir "1.14.6"
set HDF5_ROOT "$env(HOME)/software/HDF_Group/HDF5/$hdf5_subdir"

# Prevent multiple versions of HDF5 from being loaded simultaneously
conflict hdf5

# Set environment variables
setenv HDF5_DIR "${HDF5_ROOT}/cmake"
setenv HDF5_VERSION 1.14.6

prepend-path PATH            $HDF5_ROOT/bin
prepend-path LD_LIBRARY_PATH $HDF5_ROOT/lib
prepend-path LIBRARY_PATH    $HDF5_ROOT/lib
prepend-path CPATH           $HDF5_ROOT/include
```

HDFView
```
wget https://github.com/HDFGroup/hdfview/releases/download/v3.3.2/HDFView-3.3.2-Linux-x86_64.tar.gz
tar -xzvf HDFView-3.3.2-Linux-x86_64.tar.gz 
sudo dpkg --instdir=/home/eric/software -i hdfview_3.3.2_amd64.deb
```

sudo dpkg --remove hdfview
```
eric@fantasy:~/Downloads/HDFView-3.3.2-Linux-x86_64$ sudo dpkg --remove hdfview
(Reading database ... 171239 files and directories currently installed.)
Removing hdfview (3.3.2) ...
Remove hdfview-HDFView.desktop default handler for text/x-hdf mime type from /usr/share/applications/defaults.list file
/usr/share/applications/defaults.list file updated
```

dpkg -l | grep hdfview
```
eric@fantasy:~$ dpkg -l | grep hdfview
rc  hdfview                                        3.3.2                                    amd64        A visual tool for browsing and editing HDF files
```

dpkg -L hdfview
```
eric@fantasy:~$ dpkg -L hdfview
Package 'hdfview' does not contain any files (!)
```

dpkg -s hdfview(检查包的实际状态)
```
eric@fantasy:~$ dpkg -s hdfview
Package: hdfview
Status: deinstall ok config-files
Priority: optional
Section: misc
Installed-Size: 329814
Maintainer: The HDF Group <Unknown>
Architecture: amd64
Version: 3.3.2
Config-Version: 3.3.2
Provides: hdfview
Depends: libc6, xdg-utils
Description: A visual tool for browsing and editing HDF files
```

使用 dpkg --purge 移除残留配置文件
```
eric@fantasy:~$ sudo dpkg --purge hdfview
[sudo] password for eric: 
(Reading database ... 169819 files and directories currently installed.)
Purging configuration files for hdfview (3.3.2) ...

eric@fantasy:~$ dpkg -l | grep hdfview
eric@fantasy:~$ 
eric@fantasy:~$ dpkg -L hdfview
dpkg-query: package 'hdfview' is not installed
Use dpkg --contents (= dpkg-deb --contents) to list archive files contents.
eric@fantasy:~$ dpkg -s hdfview
dpkg-query: package 'hdfview' is not installed and no information is available
Use dpkg --info (= dpkg-deb --info) to examine archive files.
```


```
eric@fantasy:~/Downloads/HDFView-3.3.2-Linux-x86_64$ mkdir -p ~/temp_hdfview
eric@fantasy:~/Downloads/HDFView-3.3.2-Linux-x86_64$ 
eric@fantasy:~/Downloads/HDFView-3.3.2-Linux-x86_64$ cd ~/temp_hdfview
eric@fantasy:~/temp_hdfview$ ar x ~/Downloads/HDFView-3.3.2-Linux-x86_64/hdfview_3.3.2_amd64.deb
eric@fantasy:~/temp_hdfview$ ls
control.tar.zst  data.tar.zst  debian-binary
```

zstd --version
```
eric@fantasy:~/temp_hdfview$ zstd --version
*** Zstandard CLI (64-bit) v1.5.5, by Yann Collet ***
```

zstd -d control.tar.zst
```
eric@fantasy:~/temp_hdfview$ zstd -d control.tar.zst
control.tar.zst     : 20480 bytes                                              
eric@fantasy:~/temp_hdfview$ ls
control.tar  control.tar.zst  data.tar.zst  debian-binary
eric@fantasy:~/temp_hdfview$ zstd -d data.tar.zst
data.tar.zst        : 339189760 bytes                                          
eric@fantasy:~/temp_hdfview$ ls
control.tar  control.tar.zst  data.tar  data.tar.zst  debian-binary
```

```
创建 .tar 文件
tar -cf data.tar mydir
压缩 .tar 文件：
zstd data.tar -o data.tar.zst
```


```
eric@fantasy:~/temp_hdfview/tmp$ tree -L 2
.
├── control.tar
├── control.tar.zst
├── data.tar
├── data.tar.zst
├── DEBIAN
│   ├── control
│   ├── postinst
│   ├── postrm
│   ├── preinst
│   └── prerm
├── debian-binary
└── hdfview
    ├── bin
    ├── lib
    └── share
```

dpkg-deb --build --root-owner-group . hdfview_3.3.2_amd64.deb
```
eric@fantasy:~/temp_hdfview/tmp$ dpkg-deb --build --root-owner-group . hdfview_3.3.2_amd64.deb
dpkg-deb: building package 'hdfview' in 'hdfview_3.3.2_amd64.deb'.
```

```
sudo dpkg --instdir=/home/eric/software -i hdfview_3.3.2_amd64.deb
```
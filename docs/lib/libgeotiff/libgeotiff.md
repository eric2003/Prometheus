# libgeotiff

## Link

- [github libgeotiff](https://github.com/OSGeo/libgeotiff).

git clone git@github.com:OSGeo/libgeotiff.git
```
PS D:\work\libgeotiff_work> git clone git@github.com:OSGeo/libgeotiff.git
Cloning into 'libgeotiff'...
remote: Enumerating objects: 7498, done.
remote: Counting objects: 100% (609/609), done.
remote: Compressing objects: 100% (303/303), done.
remote: Total 7498 (delta 355), reused 533 (delta 300), pack-reused 6889 (from 1)
Receiving objects: 100% (7498/7498), 6.59 MiB | 959.00 KiB/s, done.
Resolving deltas: 100% (4585/4585), done.
```

## Ubuntu

```
sudo find /usr /usr/local /opt -name "geotiff.h" 2>/dev/null
sudo find /usr /usr/local /opt/lib -name "libgeotiff.so" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "geotiff.h" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "geotiff.h" 2>/dev/null
eric@fantasy:~$ 
```

### sudo find /usr /usr/local /opt/lib -name "libgeotiff.so" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt/lib -name "libgeotiff.so" 2>/dev/null
eric@fantasy:~$
```

```
sudo find /usr /usr/local /opt -name "GeoTIFFConfig.cmake" 2>/dev/null
sudo find /usr /usr/local /opt -name "geotiff-config.cmake" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "GeoTIFFConfig.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "GeoTIFFConfig.cmake" 2>/dev/null
eric@fantasy:~$ 
```

### sudo find /usr /usr/local /opt -name "geotiff-config.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "geotiff-config.cmake" 2>/dev/null
eric@fantasy:~$ 
```

### dpkg -l | grep libgeotiff
```
eric@fantasy:~$ dpkg -l | grep libgeotiff
eric@fantasy:~$
```

### sudo apt install libtiff-dev libproj-dev
```
eric@fantasy:~$ sudo apt install libtiff-dev libproj-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libcurl4-gnutls-dev libdeflate-dev libjbig-dev libjpeg-dev libjpeg-turbo8-dev libjpeg8-dev liblerc-dev liblzma-dev libproj25 libsharpyuv-dev libsqlite3-dev libtiffxx6 libwebp-dev libwebpdecoder3 proj-data
Suggested packages:
  libcurl4-doc libgnutls28-dev libidn-dev libkrb5-dev libldap2-dev librtmp-dev libssh2-1-dev liblzma-doc proj-bin sqlite3-doc
The following NEW packages will be installed:
  libcurl4-gnutls-dev libdeflate-dev libjbig-dev libjpeg-dev libjpeg-turbo8-dev libjpeg8-dev liblerc-dev liblzma-dev libproj-dev libproj25 libsharpyuv-dev libsqlite3-dev libtiff-dev libtiffxx6 libwebp-dev libwebpdecoder3 proj-data
0 upgraded, 17 newly installed, 0 to remove and 1 not upgraded.
Need to get 12.3 MB of archives.
After this operation, 40.6 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libcurl4-gnutls-dev amd64 8.5.0-2ubuntu10.6 [438 kB]
Get:2 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libdeflate-dev amd64 1.19-1build1.1 [50.9 kB]
Get:3 http://mirrors.aliyun.com/ubuntu noble/main amd64 libjpeg-turbo8-dev amd64 2.1.5-2ubuntu2 [295 kB]
Get:4 http://mirrors.aliyun.com/ubuntu noble/main amd64 libjpeg8-dev amd64 8c-2ubuntu11 [1,484 B]
Get:5 http://mirrors.aliyun.com/ubuntu noble/main amd64 libjpeg-dev amd64 8c-2ubuntu11 [1,482 B]
Get:6 http://mirrors.aliyun.com/ubuntu noble/main amd64 liblerc-dev amd64 4.0.0+ds-4ubuntu2 [182 kB]
Get:7 http://mirrors.aliyun.com/ubuntu noble/universe amd64 proj-data all 9.4.0-1build2 [7,885 kB]
Get:8 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libproj25 amd64 9.4.0-1build2 [1,396 kB]
Get:9 http://mirrors.aliyun.com/ubuntu noble/main amd64 libsharpyuv-dev amd64 1.3.2-0.4build3 [16.0 kB]
Get:10 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libsqlite3-dev amd64 3.45.1-1ubuntu2.3 [911 kB]
Get:11 http://mirrors.aliyun.com/ubuntu noble/main amd64 libjbig-dev amd64 2.1-6.1ubuntu2 [27.9 kB]
Get:12 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 liblzma-dev amd64 5.6.1+really5.4.5-1ubuntu0.2 [176 kB]
Get:13 http://mirrors.aliyun.com/ubuntu noble/main amd64 libwebpdecoder3 amd64 1.3.2-0.4build3 [114 kB]
Get:14 http://mirrors.aliyun.com/ubuntu noble/main amd64 libwebp-dev amd64 1.3.2-0.4build3 [367 kB]
Get:15 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libtiffxx6 amd64 4.5.1+git230720-4ubuntu2.2 [5,644 B]
Get:16 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libtiff-dev amd64 4.5.1+git230720-4ubuntu2.2 [338 kB]
Get:17 http://mirrors.aliyun.com/ubuntu noble/universe amd64 libproj-dev amd64 9.4.0-1build2 [75.9 kB]
Fetched 12.3 MB in 5s (2,634 kB/s)     
Selecting previously unselected package libcurl4-gnutls-dev:amd64.
(Reading database ... 216074 files and directories currently installed.)
Preparing to unpack .../00-libcurl4-gnutls-dev_8.5.0-2ubuntu10.6_amd64.deb ...
Unpacking libcurl4-gnutls-dev:amd64 (8.5.0-2ubuntu10.6) ...
Selecting previously unselected package libdeflate-dev:amd64.
Preparing to unpack .../01-libdeflate-dev_1.19-1build1.1_amd64.deb ...
Unpacking libdeflate-dev:amd64 (1.19-1build1.1) ...
Selecting previously unselected package libjpeg-turbo8-dev:amd64.
Preparing to unpack .../02-libjpeg-turbo8-dev_2.1.5-2ubuntu2_amd64.deb ...
Unpacking libjpeg-turbo8-dev:amd64 (2.1.5-2ubuntu2) ...
Selecting previously unselected package libjpeg8-dev:amd64.
Preparing to unpack .../03-libjpeg8-dev_8c-2ubuntu11_amd64.deb ...
Unpacking libjpeg8-dev:amd64 (8c-2ubuntu11) ...
Selecting previously unselected package libjpeg-dev:amd64.
Preparing to unpack .../04-libjpeg-dev_8c-2ubuntu11_amd64.deb ...
Unpacking libjpeg-dev:amd64 (8c-2ubuntu11) ...
Selecting previously unselected package liblerc-dev:amd64.
Preparing to unpack .../05-liblerc-dev_4.0.0+ds-4ubuntu2_amd64.deb ...
Unpacking liblerc-dev:amd64 (4.0.0+ds-4ubuntu2) ...
Selecting previously unselected package proj-data.
Preparing to unpack .../06-proj-data_9.4.0-1build2_all.deb ...
Unpacking proj-data (9.4.0-1build2) ...
Selecting previously unselected package libproj25:amd64.
Preparing to unpack .../07-libproj25_9.4.0-1build2_amd64.deb ...
Unpacking libproj25:amd64 (9.4.0-1build2) ...
Selecting previously unselected package libsharpyuv-dev:amd64.
Preparing to unpack .../08-libsharpyuv-dev_1.3.2-0.4build3_amd64.deb ...
Unpacking libsharpyuv-dev:amd64 (1.3.2-0.4build3) ...
Selecting previously unselected package libsqlite3-dev:amd64.
Preparing to unpack .../09-libsqlite3-dev_3.45.1-1ubuntu2.3_amd64.deb ...
Unpacking libsqlite3-dev:amd64 (3.45.1-1ubuntu2.3) ...
Selecting previously unselected package libjbig-dev:amd64.
Preparing to unpack .../10-libjbig-dev_2.1-6.1ubuntu2_amd64.deb ...
Unpacking libjbig-dev:amd64 (2.1-6.1ubuntu2) ...
Selecting previously unselected package liblzma-dev:amd64.
Preparing to unpack .../11-liblzma-dev_5.6.1+really5.4.5-1ubuntu0.2_amd64.deb ...
Unpacking liblzma-dev:amd64 (5.6.1+really5.4.5-1ubuntu0.2) ...
Selecting previously unselected package libwebpdecoder3:amd64.
Preparing to unpack .../12-libwebpdecoder3_1.3.2-0.4build3_amd64.deb ...
Unpacking libwebpdecoder3:amd64 (1.3.2-0.4build3) ...
Selecting previously unselected package libwebp-dev:amd64.
Preparing to unpack .../13-libwebp-dev_1.3.2-0.4build3_amd64.deb ...
Unpacking libwebp-dev:amd64 (1.3.2-0.4build3) ...
Selecting previously unselected package libtiffxx6:amd64.
Preparing to unpack .../14-libtiffxx6_4.5.1+git230720-4ubuntu2.2_amd64.deb ...
Unpacking libtiffxx6:amd64 (4.5.1+git230720-4ubuntu2.2) ...
Selecting previously unselected package libtiff-dev:amd64.
Preparing to unpack .../15-libtiff-dev_4.5.1+git230720-4ubuntu2.2_amd64.deb ...
Unpacking libtiff-dev:amd64 (4.5.1+git230720-4ubuntu2.2) ...
Selecting previously unselected package libproj-dev:amd64.
Preparing to unpack .../16-libproj-dev_9.4.0-1build2_amd64.deb ...
Unpacking libproj-dev:amd64 (9.4.0-1build2) ...
Setting up libjpeg-turbo8-dev:amd64 (2.1.5-2ubuntu2) ...
Setting up proj-data (9.4.0-1build2) ...
Setting up libproj25:amd64 (9.4.0-1build2) ...
Setting up libjbig-dev:amd64 (2.1-6.1ubuntu2) ...
Setting up libwebpdecoder3:amd64 (1.3.2-0.4build3) ...
Setting up libcurl4-gnutls-dev:amd64 (8.5.0-2ubuntu10.6) ...
Setting up libsqlite3-dev:amd64 (3.45.1-1ubuntu2.3) ...
Setting up liblerc-dev:amd64 (4.0.0+ds-4ubuntu2) ...
Setting up liblzma-dev:amd64 (5.6.1+really5.4.5-1ubuntu0.2) ...
Setting up libjpeg8-dev:amd64 (8c-2ubuntu11) ...
Setting up libsharpyuv-dev:amd64 (1.3.2-0.4build3) ...
Setting up libtiffxx6:amd64 (4.5.1+git230720-4ubuntu2.2) ...
Setting up libdeflate-dev:amd64 (1.19-1build1.1) ...
Setting up libjpeg-dev:amd64 (8c-2ubuntu11) ...
Setting up libwebp-dev:amd64 (1.3.2-0.4build3) ...
Setting up libtiff-dev:amd64 (4.5.1+git230720-4ubuntu2.2) ...
Setting up libproj-dev:amd64 (9.4.0-1build2) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### git clone https://github.com/OSGeo/libgeotiff.git
```
eric@fantasy:~/work/geotiff_work$ git clone https://github.com/OSGeo/libgeotiff.git
Cloning into 'libgeotiff'...
remote: Enumerating objects: 7502, done.
remote: Counting objects: 100% (613/613), done.
remote: Compressing objects: 100% (310/310), done.
remote: Total 7502 (delta 355), reused 530 (delta 297), pack-reused 6889 (from 1)
Receiving objects: 100% (7502/7502), 6.59 MiB | 149.00 KiB/s, done.
Resolving deltas: 100% (4585/4585), done.
```

### mkdir build && cd build
```
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff$ mkdir build && cd build
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff/build$ 
```

### module load cmake/4.0.2
```
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff/build$ module load cmake/4.0.2
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff/build$ 
```

### cmake ..
```
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff/build$ cmake ..
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
-- Looking for include file strings.h
-- Looking for include file strings.h - found
-- Generating geo_config.h header
-- Generating geo_config.h header - done
-- Found TIFF: /usr/lib/x86_64-linux-gnu/libtiff.so (found version "4.5.1")
-- Looking for TIFFOpen
-- Looking for TIFFOpen - found
-- Looking for TIFFMergeFieldInfo
-- Looking for TIFFMergeFieldInfo - found
-- Adding GeoTIFF utilities to build
-- Adding GeoTIFF utilities to build - done: makegeo;listgeo;applygeo;geotifcp
-- 
################################
Summary of build options:
   Build shared library:     ON
   Build man pages:          ON
   Build doc files:          ON
   Build GeoTIFF utilities:  ON
   Build TIFF support:       ON
   Build zlib support:       OFF
   Build JPEG support:       OFF
   Build TOWGS84 support:    ON
################################
-- Configuring done (1.2s)
-- Generating done (0.0s)
-- Build files have been written to: /home/eric/work/geotiff_work/libgeotiff/libgeotiff/build
```

```
make -j$(nproc)
sudo make install
```

### make -j$(nproc)
```
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff/build$ make -j$(nproc)
[  4%] Building C object CMakeFiles/geotiff_library.dir/cpl_serv.c.o
[  8%] Building C object CMakeFiles/geotiff_library.dir/geo_extra.c.o
[ 12%] Building C object CMakeFiles/geotiff_library.dir/geo_free.c.o
[ 16%] Building C object CMakeFiles/geotiff_library.dir/geo_get.c.o
[ 20%] Building C object CMakeFiles/geotiff_library.dir/geo_names.c.o
[ 25%] Building C object CMakeFiles/geotiff_library.dir/geo_new.c.o
[ 29%] Building C object CMakeFiles/geotiff_library.dir/geo_normalize.c.o
[ 33%] Building C object CMakeFiles/geotiff_library.dir/geo_print.c.o
[ 37%] Building C object CMakeFiles/geotiff_library.dir/geo_simpletags.c.o
[ 41%] Building C object CMakeFiles/geotiff_library.dir/geo_set.c.o
[ 45%] Building C object CMakeFiles/geotiff_library.dir/geo_trans.c.o
[ 50%] Building C object CMakeFiles/geotiff_library.dir/geo_tiffp.c.o
[ 54%] Building C object CMakeFiles/geotiff_library.dir/geo_write.c.o
[ 58%] Building C object CMakeFiles/geotiff_library.dir/geotiff_proj4.c.o
[ 62%] Building C object CMakeFiles/geotiff_library.dir/libxtiff/xtiff.c.o
[ 66%] Linking C shared library lib/libgeotiff.so
[ 66%] Built target geotiff_library
[ 70%] Building C object bin/CMakeFiles/makegeo.dir/makegeo.c.o
[ 75%] Building C object bin/CMakeFiles/listgeo.dir/listgeo.c.o
[ 79%] Building C object bin/CMakeFiles/applygeo.dir/applygeo.c.o
[ 83%] Building C object bin/CMakeFiles/geotifcp.dir/geotifcp.c.o
[ 87%] Linking C executable applygeo
[ 91%] Linking C executable makegeo
[ 95%] Linking C executable listgeo
[100%] Linking C executable geotifcp
[100%] Built target applygeo
[100%] Built target makegeo
[100%] Built target listgeo
[100%] Built target geotifcp
```

### sudo make install
```
eric@fantasy:~/work/geotiff_work/libgeotiff/libgeotiff/build$ sudo make install
[sudo] password for eric: 
[ 66%] Built target geotiff_library
[ 75%] Built target makegeo
[ 83%] Built target listgeo
[ 91%] Built target applygeo
[100%] Built target geotifcp
Install the project...
-- Install configuration: "Debug"
-- Installing: /usr/local/share/doc/GeoTIFF/AUTHORS
-- Installing: /usr/local/share/doc/GeoTIFF/ChangeLog
-- Installing: /usr/local/share/doc/GeoTIFF/COPYING
-- Installing: /usr/local/share/doc/GeoTIFF/LICENSE
-- Installing: /usr/local/share/doc/GeoTIFF/README
-- Installing: /usr/local/share/doc/GeoTIFF/README_BIN
-- Installing: /usr/local/share/doc/GeoTIFF/README.WIN
-- Installing: /usr/local/share/man/man1/applygeo.1
-- Installing: /usr/local/share/man/man1/geotifcp.1
-- Installing: /usr/local/share/man/man1/listgeo.1
-- Installing: /usr/local/include/geotiff.h
-- Installing: /usr/local/include/geotiffio.h
-- Installing: /usr/local/include/geovalues.h
-- Installing: /usr/local/include/geonames.h
-- Installing: /usr/local/include/geokeys.h
-- Installing: /usr/local/include/geo_config.h
-- Installing: /usr/local/include/geo_tiffp.h
-- Installing: /usr/local/include/geo_keyp.h
-- Installing: /usr/local/include/geo_normalize.h
-- Installing: /usr/local/include/cpl_serv.h
-- Installing: /usr/local/include/geo_simpletags.h
-- Installing: /usr/local/include/epsg_datum.inc
-- Installing: /usr/local/include/epsg_gcs.inc
-- Installing: /usr/local/include/epsg_pm.inc
-- Installing: /usr/local/include/epsg_units.inc
-- Installing: /usr/local/include/geo_ctrans.inc
-- Installing: /usr/local/include/epsg_ellipse.inc
-- Installing: /usr/local/include/epsg_pcs.inc
-- Installing: /usr/local/include/epsg_proj.inc
-- Installing: /usr/local/include/epsg_vertcs.inc
-- Installing: /usr/local/include/geokeys.inc
-- Installing: /usr/local/include/geokeys_v1_1.inc
-- Installing: /usr/local/include/xtiffio.h
-- Installing: /usr/local/lib/libgeotiff.so.5.2.4
-- Installing: /usr/local/lib/libgeotiff.so.5
-- Installing: /usr/local/lib/libgeotiff.so
-- Installing: /usr/local/lib/pkgconfig/libgeotiff.pc
-- Installing: /usr/local/bin/makegeo
-- Set non-toolchain portion of runtime path of "/usr/local/bin/makegeo" to ""
-- Installing: /usr/local/bin/listgeo
-- Set non-toolchain portion of runtime path of "/usr/local/bin/listgeo" to ""
-- Installing: /usr/local/bin/applygeo
-- Set non-toolchain portion of runtime path of "/usr/local/bin/applygeo" to ""
-- Installing: /usr/local/bin/geotifcp
-- Set non-toolchain portion of runtime path of "/usr/local/bin/geotifcp" to ""
-- Installing: /usr/local/share/cmake/GeoTIFF/geotiff-config.cmake
-- Installing: /usr/local/share/cmake/GeoTIFF/geotiff-config-version.cmake
-- Installing: /usr/local/share/cmake/GeoTIFF/geotiff-depends.cmake
-- Installing: /usr/local/share/cmake/GeoTIFF/geotiff-depends-debug.cmake
```
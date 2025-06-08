# libLAS-Ubuntu

## Link

- [SQLite3](https://github.com/madler/zlib).

## Ubuntu

```
sudo find /usr /usr/local /opt -name "libLASConfig.cmake" 2>/dev/null
sudo find /usr /usr/local /opt -name "liblas-config.cmake" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "libLASConfig.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "libLASConfig.cmake" 2>/dev/null
eric@fantasy:~$ 
```

### sudo find /usr /usr/local /opt -name "liblas-config.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "liblas-config.cmake" 2>/dev/null
eric@fantasy:~$
```

```
sudo find /usr /usr/local /opt -name "liblas.h" 2>/dev/null
sudo find /usr /usr/local /opt/lib -name "liblas.so" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "liblas.h" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "liblas.h" 2>/dev/null
eric@fantasy:~$
```

### sudo find /usr /usr/local /opt/lib -name "liblas.so" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt/lib -name "liblas.so" 2>/dev/null
eric@fantasy:~$ 
```

### dpkg -l | grep liblas
```
eric@fantasy:~$ dpkg -l | grep liblas
eric@fantasy:~$ 
```

```
sudo apt update
sudo apt install liblas-dev
```

### git clone https://github.com/libLAS/liblas.git
```
eric@fantasy:~/work/libLAS_work$ git clone https://github.com/libLAS/liblas.git
Cloning into 'liblas'...
remote: Enumerating objects: 22496, done.
remote: Counting objects: 100% (47/47), done.
remote: Compressing objects: 100% (23/23), done.
remote: Total 22496 (delta 35), reused 26 (delta 24), pack-reused 22449 (from 2)
Receiving objects: 100% (22496/22496), 46.23 MiB | 13.62 MiB/s, done.
Resolving deltas: 100% (4322/4322), done.
```

```
#sudo apt install libboost-dev libgdal-dev libgeotiff-dev
sudo apt install libgdal-dev libgeotiff-dev
```

### mkdir build && cd build
```
eric@fantasy:~/work/libLAS_work/liblas$ mkdir build && cd build
eric@fantasy:~/work/libLAS_work/liblas/build$ 
```

```
module load cmake/4.0.2
```

cmake ..
```
eric@fantasy:~/work/libLAS_work/liblas/build$ cmake ..
CMake Error at CMakeLists.txt:8 (cmake_minimum_required):
  Compatibility with CMake < 3.5 has been removed from CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.

  Or, add -DCMAKE_POLICY_VERSION_MINIMUM=3.5 to try configuring anyway.


-- Configuring incomplete, errors occurred!
```

### cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5
```
eric@fantasy:~/work/libLAS_work/liblas/build$ cmake .. -DCMAKE_POLICY_VERSION_MINIMUM=3.5
CMake Deprecation Warning at CMakeLists.txt:8 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


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
-- Setting libLAS build type - Release
-- Searching for Boost 1.38+ - done
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Success
-- Found Threads: TRUE
CMake Warning (dev) at CMakeLists.txt:188 (find_package):
  Policy CMP0167 is not set: The FindBoost module is removed.  Run "cmake
  --help-policy CMP0167" for policy details.  Use the cmake_policy command to
  set the policy and suppress this warning.

This warning is for project developers.  Use -Wno-dev to suppress it.

-- Found Boost: /usr/local/boost/lib/cmake/Boost-1.88.0/BoostConfig.cmake (found suitable version "1.88.0", minimum required is "1.42") found components: iostreams program_options serialization thread
-- Searching for GeoTIFF 1.3.0+ library
-- Found GeoTIFF version: 1.7.4
-- Found GeoTIFF: /usr/local/lib/libgeotiff.so (Required is at least version "1.3.0")
-- Found SQLite3: /usr/include (found version "3.45.1")
-- Found TIFF: /usr/lib/x86_64-linux-gnu/libtiff.so (found version "4.5.1")
-- Found CURL: /usr/lib/x86_64-linux-gnu/libcurl.so (found version "8.5.0")
-- Found JPEG: /usr/lib/x86_64-linux-gnu/libjpeg.so (found version "80")
-- Found ZLIB: /usr/lib/x86_64-linux-gnu/libz.so (found version "1.3")
-- Enable libLAS utilities to build - done
-- Enable libLAS unit tests to build - done
-- Configuring done (0.9s)
-- Generating done (0.1s)
-- Build files have been written to: /home/eric/work/libLAS_work/liblas/build
```

```
make -j$(nproc)
sudo make install
```
# ANARI


## Link

- [github ANARI-SDK](https://github.com/KhronosGroup/ANARI-SDK).

### find /usr /usr/local /opt/intel/oneapi -name "anariConfig.cmake"
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "anariConfig.cmake"
eric@fantasy:~$
```

### git clone https://github.com/KhronosGroup/ANARI-SDK.git
```
eric@fantasy:~/work/anari_work$ git clone https://github.com/KhronosGroup/ANARI-SDK.git
Cloning into 'ANARI-SDK'...
remote: Enumerating objects: 10801, done.
remote: Counting objects: 100% (34/34), done.
remote: Compressing objects: 100% (25/25), done.
remote: Total 10801 (delta 15), reused 14 (delta 9), pack-reused 10767 (from 1)
Receiving objects: 100% (10801/10801), 5.40 MiB | 1.75 MiB/s, done.
Resolving deltas: 100% (7183/7183), done.
```

### mkdir build && cd build
```
eric@fantasy:~/work/anari_work/ANARI-SDK$ mkdir build && cd build
eric@fantasy:~/work/anari_work/ANARI-SDK/build$ 
```

### cmake ..
```
eric@fantasy:~/work/anari_work/ANARI-SDK/build$ cmake ..
-- CMake version: 4.0.2
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
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Success
-- Found Threads: TRUE
-- Performing Test COMPILER_HAS_HIDDEN_VISIBILITY
-- Performing Test COMPILER_HAS_HIDDEN_VISIBILITY - Success
-- Performing Test COMPILER_HAS_HIDDEN_INLINE_VISIBILITY
-- Performing Test COMPILER_HAS_HIDDEN_INLINE_VISIBILITY - Success
-- Performing Test COMPILER_HAS_DEPRECATED_ATTR
-- Performing Test COMPILER_HAS_DEPRECATED_ATTR - Success
CMake Warning (dev) at src/anari_viewer/CMakeLists.txt:8 (install):
  Policy CMP0177 is not set: install() DESTINATION paths are normalized.  Run
  "cmake --help-policy CMP0177" for policy details.  Use the cmake_policy
  command to set the policy and suppress this warning.
This warning is for project developers.  Use -Wno-dev to suppress it.

-- Found Python3: /usr/bin/python3.12 (found version "3.12.3") found components: Interpreter
-- Populating anari_helide_embree
-- Configuring done (0.0s)
-- Generating done (0.0s)
-- Build files have been written to: /home/eric/work/anari_work/ANARI-SDK/build/src/devices/helide/external/embree/anari_helide_embree-subbuild
[ 11%] Creating directories for 'anari_helide_embree-populate'
[ 22%] Performing download step (download, verify and extract) for 'anari_helide_embree-populate'
-- verifying file...
       file='/home/eric/work/anari_work/ANARI-SDK/.anari_deps/anari_helide_embree/v4.3.3.zip'
-- MD5 hash of
    /home/eric/work/anari_work/ANARI-SDK/.anari_deps/anari_helide_embree/v4.3.3.zip
  does not match expected value
    expected: 'a03f49d17084612dc0f28bdc36d92e89'
      actual: 'd41d8cd98f00b204e9800998ecf8427e'
-- File already exists but hash mismatch. Removing...
-- Downloading...
   dst='/home/eric/work/anari_work/ANARI-SDK/.anari_deps/anari_helide_embree/v4.3.3.zip'
   timeout='none'
   inactivity timeout='none'
-- Using src='https://github.com/RenderKit/embree/archive/refs/tags/v4.3.3.zip'
-- verifying file...
       file='/home/eric/work/anari_work/ANARI-SDK/.anari_deps/anari_helide_embree/v4.3.3.zip'
-- Downloading... done
-- extracting...
     src='/home/eric/work/anari_work/ANARI-SDK/.anari_deps/anari_helide_embree/v4.3.3.zip'
     dst='/home/eric/work/anari_work/ANARI-SDK/build/deps/source/anari_helide_embree'
-- extracting... [tar xfz]
-- extracting... [analysis]
-- extracting... [rename]
-- extracting... [clean up]
-- extracting... done
[ 33%] No update step for 'anari_helide_embree-populate'
[ 44%] No patch step for 'anari_helide_embree-populate'
[ 55%] No configure step for 'anari_helide_embree-populate'
[ 66%] No build step for 'anari_helide_embree-populate'
[ 77%] No install step for 'anari_helide_embree-populate'
[ 88%] No test step for 'anari_helide_embree-populate'
[100%] Completed 'anari_helide_embree-populate'
[100%] Built target anari_helide_embree-populate
CMake Deprecation Warning at build/deps/source/anari_helide_embree/CMakeLists.txt:4 (CMAKE_MINIMUM_REQUIRED):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- Performing Test COMPILER_HAS_SYCL_SUPPORT
-- Performing Test COMPILER_HAS_SYCL_SUPPORT - Failed
-- GNU detected
CMake Warning at code_gen/CMakeLists.txt:74 (message):
  Unable to find python Module, skipping python bindings


-- CMake version: 4.0.2
-- Configuring done (23.6s)
-- Generating done (0.2s)
-- Build files have been written to: /home/eric/work/anari_work/ANARI-SDK/build
```

```
make -j$(nproc)
sudo make install
```
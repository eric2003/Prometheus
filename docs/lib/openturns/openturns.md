# OpenTURNS


## Link

- [OpenTURNS](https://github.com/OSGeo/gdal).
- [github openturns](https://github.com/openturns/openturns).


## git clone git@github.com:openturns/openturns.git
```
PS D:\work\openturns_work> git clone git@github.com:openturns/openturns.git
Cloning into 'openturns'...
remote: Enumerating objects: 148420, done.
remote: Counting objects: 100% (2059/2059), done.
remote: Compressing objects: 100% (908/908), done.
remote: Total 148420 (delta 1515), reused 1151 (delta 1151), pack-reused 146361 (from 4)
Receiving objects: 100% (148420/148420), 89.30 MiB | 5.54 MiB/s, done.
Resolving deltas: 100% (125534/125534), done.
Updating files: 100% (6961/6961), done.
```

```
SQLite3_INCLUDE_DIR c:/dev/sqlite3/include/
SQLite3_LIBRARY c:/dev/sqlite3/lib/libsqlite3.lib
```


```
cmake .. `
  -D CMAKE_INSTALL_PREFIX="C:/dev/openturns" `
  -D BLAS_LIBRARIES="c:/dev/OpenBLAS/lib/openblas.lib" `
  -D BLAS_INCLUDE_DIR="c:/dev/OpenBLAS/include" `
  -D LAPACK_LIBRARIES="c:/dev/OpenBLAS/lib/openblas.lib"
```


```
#define _USE_MATH_DEFINES // for M_PI, M_E, etc.
```


```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. `
  -D CMAKE_INSTALL_PREFIX="C:/dev/openturns" `
  -D BLAS_LIBRARIES="c:/dev/OpenBLAS/lib/openblas.lib" `
  -D BLAS_INCLUDE_DIR="c:/dev/OpenBLAS/include" `
  -D LAPACK_LIBRARIES="c:/dev/OpenBLAS/lib/openblas.lib"
cmake .. `
      -T fortran=ifx `
      -D CMAKE_INSTALL_PREFIX="C:/dev/openturns" `
      -D LAPACK_LIBRARIES="c:/dev/OpenBLAS/lib/openblas.lib"
cmake --build . --parallel 4 --config Release
cmake --install . --prefix "c:/dev/OpenBLAS/"  --config Release
```

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. `
      -T fortran=ifx `
      -D CMAKE_INSTALL_PREFIX="C:/dev/openturns" `
      -D LAPACK_LIBRARIES="c:/msys64/usr/local/OpenBLAS/lib/libopenblas.a"
cmake --build . --parallel 4 --config Release
cmake --install . --prefix "c:/dev/OpenBLAS/"  --config Release
```

```
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
cmake .. `
      -T fortran=ifx `
      -D CMAKE_INSTALL_PREFIX="C:/dev/openturns" `
      -D LAPACK_LIBRARIES="c:/msys64/usr/local/OpenBLAS/lib/libopenblas.lib"
cmake --build . --parallel 4 --config Release

$env:PATH += ";C:/msys64/usr/local/OpenBLAS/bin"
or
$env:PATH = "c:/msys64/usr/local/OpenBLAS/bin;" + $env:PATH
cmake --install . --prefix "c:/dev/openturns"  --config Release
```

```
PS D:\work\openturns_work\openturns\build> cmake .. `
>>       -T fortran=ifx `
>>       -D CMAKE_INSTALL_PREFIX="C:/dev/openturns" `
>>       -D LAPACK_LIBRARIES="c:/msys64/usr/local/OpenBLAS/lib/libopenblas.lib"
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- Could NOT find Spectra (missing: Spectra_DIR)
-- Could NOT find primesieve (missing: primesieve_DIR)
-- Could NOT find primesieve (missing: PRIMESIEVE_LIBRARIES PRIMESIEVE_INCLUDE_DIRS)
-- Found TBB: C:/Program Files (x86)/Intel/oneAPI/tbb/latest/lib/cmake/tbb (found version 2022.0.0)
-- Could NOT find LibXml2 (missing: LIBXML2_LIBRARY LIBXML2_INCLUDE_DIR)
-- Found Boost: C:/dev/boost_1_88_0/stage/lib/cmake/Boost-1.88.0 (found suitable version "1.88.0")
-- Could NOT find MPC (missing: MPC_LIBRARY MPC_INCLUDE_DIRS)
-- Could NOT find MPFR (missing: MPFR_LIBRARY MPFR_INCLUDE_DIRS)
-- Could NOT find Cuba (missing: CUBA_LIBRARY CUBA_INCLUDE_DIRS)
-- Could NOT find NLopt (missing: NLopt_DIR)
-- Could NOT find dlib (missing: dlib_DIR)
-- Could NOT find Ceres (missing: Ceres_DIR)
-- Could NOT find CMinpack (missing: CMINPACK_LIBRARY CMINPACK_INCLUDE_DIRS)
-- Could NOT find Bonmin (missing: COIN_BONMIN_LIBRARY COIN_BONMIN_INCLUDE_DIR COIN_INCLUDE_DIR)
-- Could NOT find Ipopt (missing: IPOPT_LIBRARIES IPOPT_INCLUDE_DIRS)
-- Could NOT find Pagmo (missing: Pagmo_DIR)
-- Could NOT find nanoflann (missing: nanoflann_DIR)
-- Could NOT find SWIG (missing: SWIG_EXECUTABLE SWIG_DIR) (Required is at least version "4")
-- Could NOT find scipy (missing: SCIPY_LOCATION _SCIPY_VERSION_MATCH)
-- Could NOT find pandas (missing: PANDAS_LOCATION _PANDAS_VERSION_MATCH)
-- Could NOT find chaospy (missing: CHAOSPY_LOCATION _CHAOSPY_VERSION_MATCH)
-- Could NOT find dill (missing: DILL_LOCATION _DILL_VERSION_MATCH)
-- The following OPTIONAL packages have been found:

 * TBB
 * HDF5
 * boost_headers (required version == 1.88.0)
 * Boost (required version >= 1.70)
 * OpenMP
 * Python (required version >= 3.6)
 * Threads

-- The following OPTIONAL packages have not been found:

 * Spectra (required version >= 1.0)
 * primesieve
 * LibXml2
 * MPC
 * MPFR
 * Cuba
 * NLopt (required version >= 2.6)
 * dlib (required version >= 19.8)
 * Ceres
 * CMinpack
 * Bonmin
 * Ipopt
 * Pagmo
 * nanoflann
 * SWIG (required version >= 4)

-- Configuring done (5.6s)
-- Generating done (23.8s)
-- Build files have been written to: D:/work/openturns_work/openturns/build
PS D:\work\openturns_work\openturns\build> cmake --build . --parallel 4 --config Release
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
    正在创建库 D:/work/openturns_work/openturns/build/lib/src/Release/OT.lib 和对象 D:/work/openturns_work/openturns/build/lib/
  src/Release/OT.exp
  OT.vcxproj -> D:\work\openturns_work\openturns\build\lib\src\Release\OT.dll
  Building Custom Rule D:/work/openturns_work/openturns/CMakeLists.txt
```



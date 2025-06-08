# Alembic-Ubuntu

## Link

- [Alembic](https://github.com/alembic/alembic#).

## git clone git@github.com:alembic/alembic.git
```
PS D:\work\alembic_work> git clone git@github.com:alembic/alembic.git
Cloning into 'alembic'...
remote: Enumerating objects: 20200, done.
remote: Counting objects: 100% (2413/2413), done.
remote: Compressing objects: 100% (252/252), done.
remote: Total 20200 (delta 2224), reused 2161 (delta 2161), pack-reused 17787 (from 2)
Receiving objects: 100% (20200/20200), 15.64 MiB | 49.00 KiB/s, done.
Resolving deltas: 100% (16076/16076), done.
```

## Ubuntu

```
sudo find /usr /usr/local /opt -name "AlembicConfig.cmake" 2>/dev/null
sudo find /usr /usr/local /opt -name "alembic-config.cmake" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "AlembicConfig.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "AlembicConfig.cmake" 2>/dev/null
eric@fantasy:~$ 
```

### sudo find /usr /usr/local /opt -name "alembic-config.cmake" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "alembic-config.cmake" 2>/dev/null
eric@fantasy:~$
```

```
sudo find /usr /usr/local /opt -name "Alembic" -type d 2>/dev/null
sudo find /usr /usr/local /opt/lib -name "libAlembic*.so" 2>/dev/null
```

### sudo find /usr /usr/local /opt -name "Alembic" -type d 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt -name "Alembic" -type d 2>/dev/null
eric@fantasy:~$
```

### sudo find /usr /usr/local /opt/lib -name "libAlembic*.so" 2>/dev/null
```
eric@fantasy:~$ sudo find /usr /usr/local /opt/lib -name "libAlembic*.so" 2>/dev/null
eric@fantasy:~$
```

### dpkg -l | grep alembic
```
eric@fantasy:~$ dpkg -l | grep alembic
eric@fantasy:~$
```

### cat /usr/local/lib/cmake/Alembic/AlembicConfigVersion.cmake
```
eric@fantasy:~$ cat /usr/local/lib/cmake/Alembic/AlembicConfigVersion.cmake
cat: /usr/local/lib/cmake/Alembic/AlembicConfigVersion.cmake: No such file or directory
```

```
sudo apt update
sudo apt install libalembic-dev
```

### sudo apt install libimath-dev libhdf5-dev zlib1g-dev
```
eric@fantasy:~$ sudo apt install libimath-dev libhdf5-dev zlib1g-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libimath-dev is already the newest version (3.1.9-3.1ubuntu2).
libimath-dev set to manually installed.
libhdf5-dev is already the newest version (1.10.10+repack-3.1ubuntu4).
zlib1g-dev is already the newest version (1:1.3.dfsg-3.1ubuntu2.1).
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
```

### git clone https://github.com/alembic/alembic.git
```
eric@fantasy:~/work/Alembic_work$ git clone https://github.com/alembic/alembic.git
Cloning into 'alembic'...
remote: Enumerating objects: 20200, done.
remote: Counting objects: 100% (2413/2413), done.
remote: Compressing objects: 100% (252/252), done.
remote: Total 20200 (delta 2224), reused 2161 (delta 2161), pack-reused 17787 (from 2)
Receiving objects: 100% (20200/20200), 15.64 MiB | 2.01 MiB/s, done.
Resolving deltas: 100% (16076/16076), done.
```

### mkdir build && cd build
```
eric@fantasy:~/work/Alembic_work/alembic$ mkdir build && cd build
eric@fantasy:~/work/Alembic_work/alembic/build$
```

cmake ..
```
eric@fantasy:~/work/Alembic_work/alembic/build$ module load cmake/4.0.2
eric@fantasy:~/work/Alembic_work/alembic/build$ cmake ..
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
-- CMAKE SYSTEM NAME: Linux
Defaulting CMAKE_CXX_STANDARD to 14
-- The install dir is /usr/local
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Success
-- Found Threads: TRUE
-- Found package Imath
-- Skipping AbcConvert: it requires USE_HDF5

   * Alembic Configuration              ===
   * USE_ARNOLD                         OFF
   * USE_BINARIES                       ON
   * USE_EXAMPLES                       OFF
   * USE_HDF5                           OFF
   * USE_MAYA                           OFF
   * USE_PRMAN                          OFF
   * USE_PYALEMBIC                      OFF
   * USE_STATIC_BOOST                   OFF
   * USE_STATIC_HDF5                    OFF
   * USE_TESTS                          ON
   * ALEMBIC_ILMBASE_LINK_STATIC        OFF
   * ALEMBIC_SHARED_LIBS                ON
   * ALEMBIC_DEBUG_WARNINGS_AS_ERRORS   ON
   * PYALEMBIC_PYTHON_MAJOR             3
   * DOCS_PATH                          OFF
-- Configuring done (0.7s)
CMake Warning:
  Value of CMAKE_SYSTEM_PROCESSOR contained a newline; truncating


-- Generating done (0.2s)
CMake Warning:
  Value of CMAKE_SYSTEM_PROCESSOR contained a newline; truncating


-- Build files have been written to: /home/eric/work/Alembic_work/alembic/build
```

```
make -j$(nproc)
sudo make install
```
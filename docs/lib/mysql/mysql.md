# MYSQL


## Link

- [github OCCT](https://github.com/Open-Cascade-SAS/OCCT).

## Ubuntu

```
find /usr /usr/local /opt/intel/oneapi -name "mysql.h" 2>/dev/null
find /usr /usr/local /opt/lib -name "libmysqlclient.so" 2>/dev/null
```

### find /usr /usr/local /opt/intel/oneapi -name "mysql.h" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "mysql.h" 2>/dev/null
eric@fantasy:~$ 
```

### find /usr /usr/local /opt/lib -name "libmysqlclient.so" 2>/dev/null
```
eric@fantasy:~$ find /usr /usr/local /opt/lib -name "libmysqlclient.so" 2>/dev/null
eric@fantasy:~$ 
```

### dpkg -l | grep libmysqlclient-dev
```
eric@fantasy:~$ dpkg -l | grep libmysqlclient-dev
eric@fantasy:~$ 
```

```
sudo apt update
sudo apt install default-libmysqlclient-dev
```

### sudo apt install default-libmysqlclient-dev
```
eric@fantasy:~$ sudo apt install default-libmysqlclient-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libmysqlclient-dev libmysqlclient21 libzstd-dev mysql-common
The following NEW packages will be installed:
  default-libmysqlclient-dev libmysqlclient-dev libmysqlclient21 libzstd-dev mysql-common
0 upgraded, 5 newly installed, 0 to remove and 1 not upgraded.
Need to get 3,217 kB of archives.
After this operation, 17.3 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.aliyun.com/ubuntu noble/main amd64 mysql-common all 5.8+1.1.0build1 [6,746 B]
Get:2 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libmysqlclient21 amd64 8.0.42-0ubuntu0.24.04.1 [1,254 kB]
Get:3 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libzstd-dev amd64 1.5.5+dfsg2-2build1.1 [364 kB]
Get:4 http://mirrors.aliyun.com/ubuntu noble-updates/main amd64 libmysqlclient-dev amd64 8.0.42-0ubuntu0.24.04.1 [1,589 kB]
Get:5 http://mirrors.aliyun.com/ubuntu noble/main amd64 default-libmysqlclient-dev amd64 1.1.0build1 [3,132 B]
Fetched 3,217 kB in 2s (2,138 kB/s)                    
Selecting previously unselected package mysql-common.
(Reading database ... 215994 files and directories currently installed.)
Preparing to unpack .../mysql-common_5.8+1.1.0build1_all.deb ...
Unpacking mysql-common (5.8+1.1.0build1) ...
Selecting previously unselected package libmysqlclient21:amd64.
Preparing to unpack .../libmysqlclient21_8.0.42-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libmysqlclient21:amd64 (8.0.42-0ubuntu0.24.04.1) ...
Selecting previously unselected package libzstd-dev:amd64.
Preparing to unpack .../libzstd-dev_1.5.5+dfsg2-2build1.1_amd64.deb ...
Unpacking libzstd-dev:amd64 (1.5.5+dfsg2-2build1.1) ...
Selecting previously unselected package libmysqlclient-dev.
Preparing to unpack .../libmysqlclient-dev_8.0.42-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libmysqlclient-dev (8.0.42-0ubuntu0.24.04.1) ...
Selecting previously unselected package default-libmysqlclient-dev:amd64.
Preparing to unpack .../default-libmysqlclient-dev_1.1.0build1_amd64.deb ...
Unpacking default-libmysqlclient-dev:amd64 (1.1.0build1) ...
Setting up mysql-common (5.8+1.1.0build1) ...
update-alternatives: using /etc/mysql/my.cnf.fallback to provide /etc/mysql/my.cnf (my.cnf) in auto mode
Setting up libmysqlclient21:amd64 (8.0.42-0ubuntu0.24.04.1) ...
Setting up libzstd-dev:amd64 (1.5.5+dfsg2-2build1.1) ...
Setting up libmysqlclient-dev (8.0.42-0ubuntu0.24.04.1) ...
Setting up default-libmysqlclient-dev:amd64 (1.1.0build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
```

### find /usr -name "mysql.h" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "mysql.h" 2>/dev/null
/usr/include/mysql/mysql.h
```

### find /usr -name "libmysqlclient.so" 2>/dev/null
```
eric@fantasy:~$ find /usr -name "libmysqlclient.so" 2>/dev/null
/usr/lib/x86_64-linux-gnu/libmysqlclient.so
```

### pkg-config --modversion mysqlclient
```
eric@fantasy:~$ pkg-config --modversion mysqlclient
21.2.42
```

### ldd /usr/lib/x86_64-linux-gnu/libmysqlclient.so
```
eric@fantasy:~$ ldd /usr/lib/x86_64-linux-gnu/libmysqlclient.so
	linux-vdso.so.1 (0x00007793d837c000)
	libssl.so.3 => /lib/x86_64-linux-gnu/libssl.so.3 (0x00007793d82b6000)
	libcrypto.so.3 => /lib/x86_64-linux-gnu/libcrypto.so.3 (0x00007793d7600000)
	libresolv.so.2 => /lib/x86_64-linux-gnu/libresolv.so.2 (0x00007793d82a3000)
	libz.so.1 => /lib/x86_64-linux-gnu/libz.so.1 (0x00007793d8287000)
	libzstd.so.1 => /lib/x86_64-linux-gnu/libzstd.so.1 (0x00007793d7b46000)
	libstdc++.so.6 => /lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007793d7200000)
	libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007793d7b18000)
	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007793d6e00000)
	/lib64/ld-linux-x86-64.so.2 (0x00007793d837e000)
	libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007793d7517000)
```

### sudo apt install libssl-dev
```
eric@fantasy:~$ sudo apt install libssl-dev
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libssl-dev is already the newest version (3.0.13-0ubuntu3.5).
libssl-dev set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
```

### pkg-config --cflags --libs mysqlclient
```
eric@fantasy:~$ pkg-config --cflags --libs mysqlclient
-I/usr/include/mysql -lmysqlclient 
```

### which mysql_config
```
eric@fantasy:~$ which mysql_config
/usr/bin/mysql_config
```

```
export PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH
export PKG_CONFIG_PATH=/usr/lib/x86_64-linux-gnu/pkgconfig${PKG_CONFIG_PATH:+:${PKG_CONFIG_PATH}}

```

## Windows

### example 1

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.14)
project(mysql_test)

# 查找 MySQL（或 libmariadb）
#find_package(MySQL REQUIRED)

set( MySQL_INCLUDE_DIR "c:/Program Files/MySQL/MySQL Server 9.3/include" )
set( MySQL_LIBRARY "c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" )

# 添加可执行文件
add_executable(mysql_test main.cpp)

# 包含头文件目录
target_include_directories(mysql_test PRIVATE ${MySQL_INCLUDE_DIR})

# 链接 MySQL 库
#target_link_libraries(mysql_test PRIVATE MySQL::MySQL)
target_link_libraries(mysql_test PRIVATE ${MySQL_LIBRARY})
```

main.cpp

```cpp
#include <mysql.h>
#include <stdio.h>

int main() {
    MYSQL *conn = mysql_init(NULL);

    // 连接数据库（请根据你的环境修改参数）
    if (!mysql_real_connect(conn, "localhost", "root", "your_password", NULL, 3306, NULL, 0)) {
        fprintf(stderr, "Connection error: %s\n", mysql_error(conn));
        return 1;
    }

    printf("Connected to MySQL server version %s\n", mysql_get_server_info(conn));

    mysql_close(conn);
    return 0;
}
```

```
$env:PATH = "c:/Program Files/MySQL/MySQL Server 9.3/lib;" + $env:PATH
$env:PATH = "c:/Program Files/MySQL/MySQL Server 9.3/bin;" + $env:PATH
```

```
PS D:\work\mysql_work\simple\01a\build> $env:PATH = "c:/Program Files/MySQL/MySQL Server 9.3/lib;" + $env:PATH
PS D:\work\mysql_work\simple\01a\build> $env:PATH = "c:/Program Files/MySQL/MySQL Server 9.3/bin;" + $env:PATH
```

cmake ..
```
PS D:\work\mysql_work\simple\01a\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done (5.8s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/mysql_work/simple/01a/build
```

cmake --build .
```
PS D:\work\mysql_work\simple\01a\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  Building Custom Rule D:/work/mysql_work/simple/01a/CMakeLists.txt
  main.cpp
  mysql_test.vcxproj -> D:\work\mysql_work\simple\01a\build\Debug\mysql_test.exe
  Building Custom Rule D:/work/mysql_work/simple/01a/CMakeLists.txt
```

.\Debug\mysql_test.exe
```
PS D:\work\mysql_work\simple\01a\build> .\Debug\mysql_test.exe
Connection error: Access denied for user 'root'@'localhost' (using password: YES)
```

### example 2

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.14)
project(mysql_test)

# 查找 MySQL（或 libmariadb）
#find_package(MySQL REQUIRED)

set( MySQL_INCLUDE_DIR "c:/Program Files/MySQL/MySQL Server 9.3/include" )
set( MySQL_LIBRARY "c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" )

if (NOT TARGET MySQL::MySQL)
  message(STATUS "NOT TARGET MySQL::MySQL")
  add_library(MySQL::MySQL UNKNOWN IMPORTED)
  set_target_properties(MySQL::MySQL PROPERTIES
    IMPORTED_LOCATION "${MySQL_LIBRARY}"
    INTERFACE_INCLUDE_DIRECTORIES "${MySQL_INCLUDE_DIR}")
endif ()

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

# 添加可执行文件
add_executable(mysql_test main.cpp)

# 链接 MySQL 库
target_link_libraries(mysql_test PRIVATE MySQL::MySQL)
```

cmake ..
```powershell
PS D:\work\mysql_work\simple\01b\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- NOT TARGET MySQL::MySQL
-- my_import_targets=MySQL::MySQL
-- Configuring done (5.9s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/mysql_work/simple/01b/build
```

cmake --build .
```
PS D:\work\mysql_work\simple\01b\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf

  1>Checking Build System
  Building Custom Rule D:/work/mysql_work/simple/01b/CMakeLists.txt
  main.cpp
  mysql_test.vcxproj -> D:\work\mysql_work\simple\01b\build\Debug\mysql_test.exe
  Building Custom Rule D:/work/mysql_work/simple/01b/CMakeLists.txt
```

.\Debug\mysql_test.exe
```
PS D:\work\mysql_work\simple\01b\build> $env:PATH = "c:/Program Files/MySQL/MySQL Server 9.3/lib;" + $env:PATH
PS D:\work\mysql_work\simple\01b\build> $env:PATH = "c:/Program Files/MySQL/MySQL Server 9.3/bin;" + $env:PATH
PS D:\work\mysql_work\simple\01b\build> .\Debug\mysql_test.exe
Connection error: Access denied for user 'root'@'localhost' (using password: YES)
```

### example 3

tree /f
```
PS D:\work\mysql_work\simple\01e> tree /f
Folder PATH listing
Volume serial number is B8BF-5D16
D:.
│   CMakeLists.txt
│   main.cpp
│
├───build
└───cmake
        FindMySQL.cmake
```

FindMySQL.cmake
```cmake
set( MySQL_INCLUDE_DIR "c:/Program Files/MySQL/MySQL Server 9.3/include" )
set( MySQL_LIBRARY "c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" )

# Include the standard arguments
include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(MySQL
  REQUIRED_VARS MySQL_LIBRARY MySQL_INCLUDE_DIR
  VERSION_VAR MySQL_VERSION
)

#message(STATUS "MySQL_VERSION=${MySQL_VERSION}")
#message(STATUS "MySQL_FOUND=${MySQL_FOUND}")
if (MySQL_FOUND)
  set(MySQL_INCLUDE_DIRS "${MySQL_INCLUDE_DIR}")
  set(MySQL_LIBRARIES "${MySQL_LIBRARY}")
  if (NOT TARGET MySQL::MySQL)
    add_library(MySQL::MySQL UNKNOWN IMPORTED)
    set_target_properties(MySQL::MySQL PROPERTIES
    IMPORTED_LOCATION "${MySQL_LIBRARY}"
      INTERFACE_INCLUDE_DIRECTORIES "${MySQL_INCLUDE_DIR}")
  endif ()
endif ()
```

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.14)
project(mysql_test)

# Add the directory containing FindMyLibrary.cmake to the module path
list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake")

find_package(MySQL REQUIRED)

message(STATUS "MySQL_FOUND=${MySQL_FOUND}")

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

# 添加可执行文件
add_executable(mysql_test main.cpp)

# 链接 MySQL 库
target_link_libraries(mysql_test PRIVATE MySQL::MySQL)
```
# QSql

## QSql

- [windows11+qt6.4.0编译qsqlmysql Debug+Release动态库](https://zhuanlan.zhihu.com/p/569912059).
- [QMYSQL driver](https://github.com/thecodemonkey86/qt_mysql_driver).

## 安装与配置MySQL 9

- [安装与配置MySQL 9](https://www.showapi.com/news/article/6738c6934ddd79f11a00be23).

download

- [download](https://dev.mysql.com/downloads/mysql).

install

Data Directory
```
C:\ProgramData\MySQL\MySQL Server 9.1\
```

```
Port:3306
X Protocol Port:33060
```

MySQL Root Password
```
123456
```

Windows Service Name
```
MySQL91
```

## 卸载MySQL

- 关闭MySQL服务(管理员权限)

```batch
net stop mysql
```

net stop MYSQL80(服务名)
```batch
PS C:\WINDOWS\system32> net stop MYSQL80
MySQL80 服务正在停止.
MySQL80 服务已成功停止。
```

- 删除服务(在MySQL服务关闭后)

mysqld remove [serviceName]
```powershell
PS C:\WINDOWS\system32> mysqld remove MYSQL80
Service successfully removed.
```


```batch
set PATH=%PATH%;C:\Qt\Tools\CMake_64\bin;C:\Qt\Tools\Ninja
C:
cd C:\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers
call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"
call C:\Qt\6.8.1\msvc2022_64\bin\qt-cmake.bat -G "Ninja Multi-Config" . -DMySQL_INCLUDE_DIR="E:\qt_creator\libs\libmysql\include" -DMySQL_LIBRARY="E:\qt_creator\libs\libmysql\lib\libmysql.lib" -DCMAKE_INSTALL_PREFIX="C:\Qt\6.8.1\msvc2022_64" -DCMAKE_CONFIGURATION_TYPES=Release;Debug  -DQT_GENERATE_SBOM=OFF
ninja
ninja install
pause
```

```batch
set PATH=%PATH%;C:\local\Qt\Tools\CMake_64\bin;C:\local\Qt\Tools\Ninja
C:
cd C:\local\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers
call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"
call C:\local\Qt\6.8.1\msvc2022_64\bin\qt-cmake.bat -G "Ninja Multi-Config" . -DMySQL_INCLUDE_DIR="C:\Program Files\MySQL\MySQL Server 9.1\include"  -DMySQL_LIBRARY="C:\Program Files\MySQL\MySQL Server 9.1\lib\libmysql.lib"  -DCMAKE_INSTALL_PREFIX="C:\local\Qt\6.8.1\msvc2022_64" -DCMAKE_CONFIGURATION_TYPES=Release;Debug  -DQT_GENERATE_SBOM=OFF
ninja
ninja install
pause
```

```batch
call C:\local\Qt\6.8.1\msvc2022_64\bin\qt-cmake.bat -G "Ninja" . ^
-DMySQL_INCLUDE_DIR="C:\Program Files\MySQL\MySQL Server 9.1\include"  ^
-DMySQL_LIBRARY="C:\Program Files\MySQL\MySQL Server 9.1\lib\libmysql.lib"  ^
-DCMAKE_INSTALL_PREFIX="C:\local\Qt\6.8.1\msvc2022_64" ^
-DCMAKE_CONFIGURATION_TYPES=Release;Debug  -DQT_GENERATE_SBOM=OFF
```

windows+cmd

1.
```batch
set PATH=%PATH%;C:\Qt\Tools\CMake_64\bin;C:\Qt\Tools\Ninja
C:\Users\eric>set PATH=%PATH%;C:\Qt\Tools\CMake_64\bin;C:\Qt\Tools\Ninja
```

2.
```batch
C:\Users\eric>cd C:\local\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers
```

3.
```batch
C:\local\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers>call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.11.6
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'
```

4.
```batch
C:\local\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers>call C:\local\Qt\6.8.1\msvc2022_64\bin\qt-cmake.bat -G "Ninja Multi-Config" . -DMySQL_INCLUDE_DIR="C:\Program Files\MySQL\MySQL Server 9.1\include"  -DMySQL_LIBRARY="C:\Program Files\MySQL\MySQL Server 9.1\lib\libmysql.lib"  -DCMAKE_INSTALL_PREFIX="C:\local\Qt\6.8.1\msvc2022_64" -DCMAKE_CONFIGURATION_TYPES=Release;Debug  -DQT_GENERATE_SBOM=OFF
-- The CXX compiler identification is MSVC 19.41.34123.0
-- The C compiler identification is MSVC 19.41.34123.0
-- The ASM compiler identification is MSVC
-- Found assembler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.41.34120/bin/Hostx64/x64/cl.exe
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.41.34120/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.41.34120/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Performing Test HAVE_STDATOMIC
-- Performing Test HAVE_STDATOMIC - Success
-- Found WrapAtomic: TRUE
-- Building for multiple configurations: RelWithDebInfo;Debug.
-- Main configuration is: RelWithDebInfo.

-- Configuration summary has been written to C:/local/Qt/6.8.1/Src/qtbase/src/plugins/sqldrivers/config.summary

-- Configuring done (12.8s)
-- Generating done (0.3s)
-- Build files have been written to: C:/local/Qt/6.8.1/Src/qtbase/src/plugins/sqldrivers
```

5.
```batch
C:\local\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers>ninja
[52/52] Linking CXX shared module plugins\sqldrivers\qsqlite.dll
```

6.
```batch
C:\local\Qt\6.8.1\Src\qtbase\src\plugins\sqldrivers>ninja install
[0/2] Install the project...-- Install configuration: "RelWithDebInfo"
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginConfig.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginConfigVersion.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginConfigVersionImpl.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlmysql.dll
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginTargets.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginTargets-relwithdebinfo.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlmysql.pdb
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginAdditionalTargetInfo.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginConfig.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginConfigVersion.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginConfigVersionImpl.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlodbc.dll
-- Old export file "C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets.cmake" will be replaced.  Removing files [C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets-debug.cmake, C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets-relwithdebinfo.cmake].
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets-relwithdebinfo.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlodbc.pdb
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginAdditionalTargetInfo.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginConfig.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginConfigVersion.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginConfigVersionImpl.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlite.dll
-- Old export file "C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets.cmake" will be replaced.  Removing files [C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets-debug.cmake, C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets-relwithdebinfo.cmake].
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets-relwithdebinfo.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlite.pdb
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginAdditionalTargetInfo.cmake

[1/2] Install the project...-- Install configuration: "Debug"
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginConfig.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginConfigVersion.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginConfigVersionImpl.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlmysqld.dll
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginTargets.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginTargets-debug.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlmysqld.pdb
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QMYSQLDriverPluginAdditionalTargetInfo.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginConfig.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginConfigVersion.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginConfigVersionImpl.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlodbcd.dll
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginTargets-debug.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlodbcd.pdb
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QODBCDriverPluginAdditionalTargetInfo.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginConfig.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginConfigVersion.cmake
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginConfigVersionImpl.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlited.dll
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginTargets-debug.cmake
-- Installing: C:/local/Qt/6.8.1/msvc2022_64/plugins/sqldrivers/qsqlited.pdb
-- Up-to-date: C:/local/Qt/6.8.1/msvc2022_64/lib/cmake/Qt6Sql/Qt6QSQLiteDriverPluginAdditionalTargetInfo.cmake
```
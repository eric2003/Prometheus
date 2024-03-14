# Qt

## Article link

-  [Qt-OneFLOW doc](https://eric2003.github.io/OneFLOW/qt.html).
-  [Qt's official website](https://www.qt.io/).
-  [Qt documentation](https://doc.qt.io/).
-  [QT Series Link Compilation](https://zhuanlan.zhihu.com/p/565066693/).
-  [Qt 6.3.1 C++ GUI Development Tutorial](https://zhuanlan.zhihu.com/p/565557087/).
-  [Qt6+windeployqt Series Link Compilation](https://zhuanlan.zhihu.com/p/566839520/).
-  [QMYSQL driver 6.6.1](https://github.com/thecodemonkey86/qt_mysql_driver/).
-  [《Qt 5.9 C++开发指南》2021 完整版](https://www.bilibili.com/video/BV1AX4y1w7Nt/).
-  [Qt6.3.1 C++ GUI开发教程（完整版）](https://www.bilibili.com/video/BV1G94y1Q7h6/).
-  [《Qt6 C++开发指南 》2023（上册，完整版）](https://www.bilibili.com/video/BV1km4y1k7CW/).



## CMake command

```
cmake .. -D CMAKE_PREFIX_PATH:PATH=C:/local/Qt/6.6.2/msvc2019_64/
cmake --build .
C:\local\Qt\6.6.2\msvc2019_64\bin\windeployqt.exe .\Debug\testprj.exe
```

qmake -v
```
$ c:\local\Qt\6.6.2\msvc2019_64\bin\qmake -v
QMake version 3.1
Using Qt version 6.6.2 in C:/local/Qt/6.6.2/msvc2019_64/lib
```

%(Qt:QT_INSTALL_PREFIX)

Qt ≥ 6.4.2
```
run cmake with -DQt6_DIR=C:/local/Qt/6.6.2/msvc2019_64/lib/cmake/Qt6
```

ModernQt
```
git clone https://github.com/eric2003/ModernQt.git
```

## QT Series Link

-  [Qt源码下载链接](https://download.qt.io/archive/qt/).
-  [qt5-default not in Ubuntu 21.04](https://zhuanlan.zhihu.com/p/443006210/).
-  [QT6.1.2+Win10+VS2019实现最简单的图形窗口](https://zhuanlan.zhihu.com/p/389417392/).
-  [CMake+Vs2019的Qt platform plugin问题](https://zhuanlan.zhihu.com/p/414017803/).
-  [QT学习笔记（1）CMake+vs2019+QT6.0生成最简单图形界面](https://zhuanlan.zhihu.com/p/400804242/).
-  [通过CMake创建包含QT项目和常规C++项目的混合解决方案](https://zhuanlan.zhihu.com/p/400900832/).
-  [QT6.1.2+Ubuntu20.04+GCC9.3.0实现最简单的图形窗口](https://zhuanlan.zhihu.com/p/389505697/).
-  [CMake+QT5.9+VTK9.0.3绘制简单立方体测试](https://zhuanlan.zhihu.com/p/405921252/).
-  [windows11+vcpkg+CMake+QT6+windeployqt部署安装程序](https://zhuanlan.zhihu.com/p/565057648/).
-  [Qt6.3.1 C++ GUI开发教程](https://zhuanlan.zhihu.com/p/565557087/).
-  [QT6.3 + QTreeWidget 读取并显示Json数据](https://zhuanlan.zhihu.com/p/566368801/).
-  [Windows11下查看QT版本号](https://zhuanlan.zhihu.com/p/566402975/).
-  [QT6.3.1+QProcess+QLineEdit+QTextEdit重定向控制台输出](https://zhuanlan.zhihu.com/p/566408821/).
-  [Qt6.3.2+CMake+VS2022+Debug+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566777470/).
-  [Qt6.3.2+CMake+VS2022+Release+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566822126/).
-  [Vcpkg+Qt6.3.1+CMake+VS2022+Release+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566828832/).
-  [Vcpkg+Qt6.3.1+CMake+VS2022+Debug+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566834738/).
-  [qt-everywhere-src-6.3.2\qtbase ./configure -help简单测试](https://zhuanlan.zhihu.com/p/566984107/).
-  [windows11+qt6.3.2编译qsqlmysql Debug动态库](https://zhuanlan.zhihu.com/p/567880829/).
-  [windows11+qt6.3.2编译qsqlmysql Release动态库](https://zhuanlan.zhihu.com/p/567883165/).
-  [windows11+qt6.3.2+mysql连接数据库简单测试](https://zhuanlan.zhihu.com/p/567935314/).
-  [windows11+qt6.3.2+mysql创建数据库简单测试](https://zhuanlan.zhihu.com/p/568180677/).
-  [windows11+qt6.3.2+mysql创建数据库table简单测试](https://zhuanlan.zhihu.com/p/568369643/).
-  [windows11+qt6.3.2+mysql+table+insert简单测试](https://zhuanlan.zhihu.com/p/568440378/).
-  [qt6.3.2+mysql+table+insert+delete简单测试](https://zhuanlan.zhihu.com/p/568451127/).
-  [qt6.3.2+mysql+table+insert+modify+delete简单测试](https://zhuanlan.zhihu.com/p/568457916/).
-  [qt6.3.2+mysql+table+insert+modify+delete+select简单测试](https://zhuanlan.zhihu.com/p/568466560/).
-  [qt+qVersion()简单测试](https://zhuanlan.zhihu.com/p/569314612/).
-  [qt6.3.2+CMake+VS2022编译qsqlmysql Release动态库](https://zhuanlan.zhihu.com/p/569487874/).
-  [qt6.3.2+CMake+VS2022编译qsqlmysql Debug动态库](https://zhuanlan.zhihu.com/p/569491418/).
-  [CMake+VS2022+qt6.3.1编译qsqlmysql Debug动态库](https://zhuanlan.zhihu.com/p/569495786/).
-  [CMake+VS2022+qt6.3.1编译qsqlmysql Release动态库](https://zhuanlan.zhihu.com/p/569505623/).
-  [vcpkg+CMake+qt6.3.1+mysql连接数据库简单测试](https://zhuanlan.zhihu.com/p/569513891/).
-  [Cannot mix incompatible Qt library (6.3.1) with this library (6.3.2)](https://zhuanlan.zhihu.com/p/569797873/).
-  [windows11+qt6.4.0编译qsqlmysql Debug+Release动态库](https://zhuanlan.zhihu.com/p/569912059/).
-  [Qt6.4.0源码+configure.bat --help简单测试](https://zhuanlan.zhihu.com/p/574526276/).
-  [qt6.4.0+VS2022+CMake+moc+sender简单测试](https://zhuanlan.zhihu.com/p/574634547/).
-  [qt6.4.0+VS2022+CMake+moc+sender.h简单测试](https://zhuanlan.zhihu.com/p/574657206/).
-  [Qt6.4.0+moc.exe --help简单测试](https://zhuanlan.zhihu.com/p/574665583/).
-  [qt6.4.0+moc.exe+命令行屏幕输出简单测试](https://zhuanlan.zhihu.com/p/574690800/).
-  [qt6.4.0+moc.exe+命令行文件输出简单测试](https://zhuanlan.zhihu.com/p/574698928/).
-  [qt6.4.0+VS2022+源码编译Bootstrap库简单测试](https://zhuanlan.zhihu.com/p/574708302/).
-  [qt6.4.0+VS2022+源码编译moc.exe简单测试](https://zhuanlan.zhihu.com/p/574714916/).
-  [qt6.4.0+源码编译moc.exe+命令行文件输出简单测试](https://zhuanlan.zhihu.com/p/574724593/).
-  [qt6.4.0+源码编译moc.exe+文件输出debug简单测试](https://zhuanlan.zhihu.com/p/574879089/).

## Qt6+windeployqt

-  [CMake+Vs2019的Qt platform plugin问题](https://zhuanlan.zhihu.com/p/414017803/).
-  [windows11+vcpkg+CMake+QT6+windeployqt部署安装程序](https://zhuanlan.zhihu.com/p/565057648/).
-  [Qt6.3.2+CMake+VS2022+Debug+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566777470/).
-  [Qt6.3.2+CMake+VS2022+Release+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566822126/).
-  [Vcpkg+Qt6.3.1+CMake+VS2022+Release+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566828832/).
-  [Vcpkg+Qt6.3.1+CMake+VS2022+Debug+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566834738/).

# Qt

## Get and Install Qt

-  [Get and Install Qt](https://doc.qt.io/qt-6/get-and-install-qt.html).

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
-  [Qt6 C++ GUI Development Course ( Build GUI Apps in Qt & C++ )](https://www.youtube.com/watch?v=Wi9nQTDFF4U/).
-  [Qt 快速入门系列教程](https://shouce.jb51.net/qt-beginning/45.html).

## 深入理解QT

-  [深入理解QT](https://www.bilibili.com/video/BV1vh4y1r7sc/).


## Qt Github

-  [Qt实战/Qt入门和进阶/Qt教程](https://github.com/feiyangqingyun/qtkaifajingyan/).


## Qt Book

-  [Qt5 Cadaques 正體中文版](https://ycheng.gitbooks.io/qt5_cadaques-zh_tw).
-  [A Book about Qt5](https://qmlbook.readthedocs.io/).


## Qt Tutorial

-  [Qt Tutorial](https://www.youtube.com/playlist?list=PLGLfVvz_LVvQrqLpBB4Sfz7gxMN9shP6v/).
-  [Qt Tutorial : C++ Notepad App](https://www.youtube.com/watch?v=I96uPDifZ1w&list=PLGLfVvz_LVvQrqLpBB4Sfz7gxMN9shP6v&index=2/).
-  [Qt Tutorial 2 : C++ Calculator](https://www.youtube.com/watch?v=txGRU7OrTZo&list=PLGLfVvz_LVvQrqLpBB4Sfz7gxMN9shP6v&index=2/).
-  [Qt Tutorial 3 : Qt Charts](https://www.youtube.com/watch?v=MHn3ZTWcyXk&list=PLGLfVvz_LVvQrqLpBB4Sfz7gxMN9shP6v&index=3/).
-  [Qt Tutorial 4 : C++ Paint App](https://www.youtube.com/watch?v=uzgU2XzhnHY&list=PLGLfVvz_LVvQrqLpBB4Sfz7gxMN9shP6v&index=4/).
-  [Qt Tutorial 5 : Finish Paint App](https://www.youtube.com/watch?v=F-ha0F2yLqA&list=PLGLfVvz_LVvQrqLpBB4Sfz7gxMN9shP6v&index=5/).

## Qt QML

-  [QT6-QML编程快速入门](https://www.bilibili.com/video/BV1hC411h71F/).
-  [QML6(Qt Quick)开发教程（完整版）](https://www.bilibili.com/video/BV1j14y1e7Hf/).
-  [QML教程](https://www.bilibili.com/video/BV1dS4y1u7vN/).
-  [PyQt + QML 桌面 无边框 悬浮 便利签](https://www.bilibili.com/video/BV17N4y157zh/).
-  [浅 浅 入 门 一 下 Q M L 吧！](https://www.bilibili.com/video/BV1jf4y1d7sK/).
-  [【英文字幕】Qt quick(QML)技术解读 入门到熟练（完结）](https://www.bilibili.com/video/BV164411C782/).
-  [Qt QML Tutorial](https://www.youtube.com/watch?v=RWd-zjclFB0&list=PLP7UmEJ9z4mpi0JXcPS0VRK-7eFAfROZI/).
-  [Qt QML Tutorial-KhoaTran Programmer](https://www.youtube.com/watch?v=2c0fpk_aObo&list=PLxkHKJE0D3pCT9qKzQ6eFOZ0gdXKxPaDU/).


## pyQt6 

-  [2024版 PyQt6 Python桌面开发 视频教程(无废话版) 玩命更新中~](https://www.bilibili.com/video/BV11C4y1P7fj/).

## X计划--NodeEditor

-  [X计划--NodeEditor](https://www.bilibili.com/video/BV1hx4y1i7d2//).


## Youtuber 

-  [Derek Banas](https://www.youtube.com/@derekbanas/).
-  [ProgrammingKnowledge](https://www.youtube.com/@ProgrammingKnowledge/).
-  [Abdullah](https://www.youtube.com/@Abdullah-mg5zl/).



## CMake command

```
cmake .. -D CMAKE_PREFIX_PATH:PATH=C:/local/Qt/6.6.2/msvc2019_64/
cmake --build .
C:\local\Qt\6.6.2\msvc2019_64\bin\windeployqt.exe .\Debug\testprj.exe
```
## Check Qt Version

- [Windows11下查看QT版本号](https://zhuanlan.zhihu.com/p/566402975).

qmake -v
```
$ c:\local\Qt\6.6.2\msvc2019_64\bin\qmake -v
QMake version 3.1
Using Qt version 6.6.2 in C:/local/Qt/6.6.2/msvc2019_64/lib
```

```
PS C:\Users\eric> qmake -v
QMake version 3.1
Using Qt version 6.7.2 in C:/local/Qt/6.7.2/msvc2019_64/lib
```

```
PS C:\local\Qt\6.8.1\msvc2022_64\bin> ./qmake -v
QMake version 3.1
Using Qt version 6.8.1 in C:/local/Qt/6.8.1/msvc2022_64/lib
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


Qt MediaPlayer
```
    Qt5
    mediaPlayer = new QMediaPlayer(this);
    mediaPlayer->setMedia(QUrl(filePath.c_str()));
    Qt6
    mediaPlayer = new QMediaPlayer(this);
    QAudioOutput * audioOutput = new QAudioOutput(this);
    mediaPlayer->setAudioOutput(audioOutput);
    mediaPlayer->setSource(QUrl(filePath.c_str()));	
```

stateChanged
```
  Qt5
  QMediaPlayer::stateChanged
  Qt6
  QMediaPlayer::mediaStatusChanged
```

state()
```
  Qt5
  mediaPlayer->state() == QMediaPlayer::PlayingState
  Qt6
  mediaPlayer->playbackState() == QMediaPlayer::PlayingState
```

setMuted(bool)
```
  Qt5
  mediaPlayer->setMuted(true)
  Qt6
  mediaPlayer->->audioOutput()->setMuted(true)
```

setMuted(bool)
```
  Qt5
  mediaPlayer->setMuted(true)
  Qt6
  mediaPlayer->->audioOutput()->setMuted(true)
```

volume()
```
  Qt5
  mediaPlayer->volume()
  Qt6
  mediaPlayer->->audioOutput()->volume()
```

QMediaPlayer::State
```
  Qt5
  enum QMediaPlayer::State
  Qt6
  enum QMediaPlayer::PlaybackState
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
-  [windows11+Qt6.6.2+C++ Notepad App简单测试](https://zhuanlan.zhihu.com/p/687064491/).
-  [windows11+Qt6.6.2+ C++ Calculator App简单测试](https://zhuanlan.zhihu.com/p/687212297/).
-  [windows11+Qt6.6.2+ C++QtCharts+QLineSeries简单测试](https://zhuanlan.zhihu.com/p/687300379/).
-  [windows11+Qt6.6.2+ C++QtCharts+QBarSeries简单测试](https://zhuanlan.zhihu.com/p/687333385/).
-  [windows11+Qt6.6.2+ C++QtCharts+QHorizontalStackedBarSeries简单测试](https://zhuanlan.zhihu.com/p/687336722/).
-  [windows11+Qt6.6.2+QtCharts+QLineSeries+Animation简单测试](https://zhuanlan.zhihu.com/p/687342776/).
-  [windows11+Qt6.6.2+QtCharts+QPieSeries简单测试](https://zhuanlan.zhihu.com/p/687347292/).
-  [windows11+Qt6.6.2+C++ Paint App简单测试](https://zhuanlan.zhihu.com/p/687406964/).
-  [windows11+Qt6.6.2+QThread+Dice简单测试](https://zhuanlan.zhihu.com/p/687457020/).
-  [windows11+Qt6.6.2+QThread::currentThreadId()简单测试](https://zhuanlan.zhihu.com/p/687617049/).

## Qt6+windeployqt

-  [CMake+Vs2019的Qt platform plugin问题](https://zhuanlan.zhihu.com/p/414017803/).
-  [windows11+vcpkg+CMake+QT6+windeployqt部署安装程序](https://zhuanlan.zhihu.com/p/565057648/).
-  [Qt6.3.2+CMake+VS2022+Debug+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566777470/).
-  [Qt6.3.2+CMake+VS2022+Release+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566822126/).
-  [Vcpkg+Qt6.3.1+CMake+VS2022+Release+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566828832/).
-  [Vcpkg+Qt6.3.1+CMake+VS2022+Debug+windeployqt简单测试](https://zhuanlan.zhihu.com/p/566834738/).


## QT C++ GUI Tutorial For Beginners

-  [QT C++ GUI Tutorial For Beginners](https://www.youtube.com/playlist?list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA/).
-  [Qt Tutorials For Beginners 1 - Introduction](https://www.youtube.com/watch?v=EkjaiDsiM-Q&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=2/).
-  [Qt Tutorials For Beginners 2 - How to Install Qt Creator IDE (Open Source Version)](https://www.youtube.com/watch?v=eS7ank-qFjg&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=2/).
-  [Qt Tutorials For Beginners 3 - First Qt Application](https://www.youtube.com/watch?v=5JVLO8yBMXA&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=3/).
-  [Qt Tutorials For Beginners 4 - First Qt GUI widget Application](https://www.youtube.com/watch?v=Y1c-ieVO-UY&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=4/).
-  [Qt Tutorials For Beginners 5 - Qt Signal and slots](https://www.youtube.com/watch?v=F56fSKoNCtk&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=5/).
-  [Qt Tutorials For Beginners 6 - QMessageBox](https://www.youtube.com/watch?v=xJdxE_7IBsU&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=6/).
-  [Qt Tutorials For Beginners 7 - Layouts in QT (Horizontal, Vertical, Grid and Form)](https://www.youtube.com/watch?v=gWa2rqe8l6E&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=7/).
-  [Qt Tutorials For Beginners 8 - Spacers, Splitter, Buddy and Tabs](https://www.youtube.com/watch?v=y9Zx_FJBC1U&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=8/).
-  [Qt Tutorials For Beginners 9 - How to Show Another Window From MainWindow in QT](https://www.youtube.com/watch?v=VigUMAfE2q4&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=9/).
-  [Qt Tutorials For Beginners 10 - Simple Login app using QT](https://www.youtube.com/watch?v=6_elY8O20I8&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=10/).
-  [Qt Tutorials For Beginners 11 - Displaying image using label in Qt](https://www.youtube.com/watch?v=SyzxerD2Yps&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=11/).
-  [Qt Tutorials For Beginners 12 - QStatusBar](https://www.youtube.com/watch?v=BI5TQ_NPp1s&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=12/).
-  [Qt Tutorials For Beginners 13 - Resource Collection Files (.qrc)](https://www.youtube.com/watch?v=CTbpS0PN-JQ&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=13/).
-  [Qt Tutorials For Beginners 14 - Use QLineEdit as password field](https://www.youtube.com/watch?v=Sf-Vr-1q5UA&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=14/).
-  [Qt Tutorials For Beginners 15 - Qt Stylesheets and using HTML](https://www.youtube.com/watch?v=us2bq5vpQ9g&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=15/).
-  [Qt Tutorials For Beginners 16 - QCheckBox](https://www.youtube.com/watch?v=2Dv-TO9KQDE&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=16/).
-  [Qt Tutorials For Beginners 17 - QRadioButton](https://www.youtube.com/watch?v=utjU9csHCO8&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=17/).
-  [Qt Tutorials For Beginners 18 - QAction, QMenu, QToolBar](https://www.youtube.com/watch?v=E9eQO5czNrw&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=18/).
-  [Qt Tutorials For Beginners 19 - QComboBox](https://www.youtube.com/watch?v=-6ZS7nxgzrQ&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=19/).
-  [Qt Tutorials For Beginners 20 - QListWidget](https://www.youtube.com/watch?v=2YRAJt-LbkM&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=20/).
-  [Qt Tutorials For Beginners 21 - QDir](https://www.youtube.com/watch?v=hstOtTEeW9Y&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=21/).
-  [Qt Tutorials For Beginners 22 - QFile](https://www.youtube.com/watch?v=tY6nW3Wm3NE&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=22/).
-  [Qt Tutorials For Beginners 23 - QFileDialog](https://www.youtube.com/watch?v=Fgt4WWdn3Ko&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=23/).
-  [Qt Tutorials For Beginners 24 - QTimer](https://www.youtube.com/watch?v=E4L4IjAR-Ww&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=24/).
-  [Qt Tutorials For Beginners 25 - Creating Digital Clock by using QDateTime](https://www.youtube.com/watch?v=zywq2kpcXP4&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=25/).
-  [Qt Tutorials For Beginners 26 - Simple Notepad Application Part - 1](https://www.youtube.com/watch?v=j4j1gbYJtUw&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=26/).
-  [Qt Tutorials For Beginners 27 - Simple Notepad Application Part - 2](https://www.youtube.com/watch?v=ucWsnp064ow&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=27/).
-  [Qt Tutorials For Beginners 28 - QTabWidget](https://www.youtube.com/watch?v=68_PHjBohAs&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=28/).
-  [Qt Tutorials For Beginners 29 - QFontDialog](https://www.youtube.com/watch?v=Kmpg6MD-LjM&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=29/).
-  [Qt Tutorials For Beginners 30 - QColorDialog](https://www.youtube.com/watch?v=rtgOb03xl_U&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=30/).
-  [Qt Tutorials For Beginners 31 - QPrintDialog and QPrinter](https://www.youtube.com/watch?v=ugW7ULhJwPw&list=PLS1QulWo1RIZiBcTr5urECberTITj7gjA&index=31/).


## Qt 5 Tutorial

-  [QT5 TUTORIAL HELLO WORLD - 2020](https://www.bogotobogo.com/Qt/Qt5_TutorialHelloWorld.php).
-  [《Qt 5.9 C++开发指南》2021 完整版](https://www.bilibili.com/video/BV1AX4y1w7Nt/).


## Qt MediaPlayer

-  [Qt C++ QMediaPlayer -1](https://www.youtube.com/watch?v=aghuCmJd7TY/).


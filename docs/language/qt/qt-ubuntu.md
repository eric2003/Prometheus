# Qt-Ubuntu

## Get and Install Qt

-  [Get and Install Qt](https://doc.qt.io/qt-6/get-and-install-qt.html).

### delete

```
rm -rf ~/.config/QtProject*
rm -rf ~/.local/share/QtProject*
rm -rf ~/.cache/QtSoftware*
```

### qmake
```
eric@fantasy:~$ which qmake
eric@fantasy:~$ 
```

### pkg-config --libs --cflags QtCore
```
eric@fantasy:~$ pkg-config --libs --cflags QtCore
Package QtCore was not found in the pkg-config search path.
Perhaps you should add the directory containing `QtCore.pc'
to the PKG_CONFIG_PATH environment variable
Package 'QtCore', required by 'virtual:world', not found
```

### find /etc/xdg -name "qt.conf"
```
eric@fantasy:~$ find /etc/xdg -name "qt.conf"
```

### dpkg -L qtbase5-dev
```
eric@fantasy:~$ dpkg -L qtbase5-dev
dpkg-query: package 'qtbase5-dev' is not installed
Use dpkg --contents (= dpkg-deb --contents) to list archive files contents.
```

### dpkg -L qtbase6-dev
```
eric@fantasy:~$ dpkg -L qtbase6-dev
dpkg-query: package 'qtbase6-dev' is not installed
Use dpkg --contents (= dpkg-deb --contents) to list archive files contents.
```

### find / -name "qmake" 2>/dev/null
```
eric@fantasy:~$ find / -name "qmake" 2>/dev/null
/home/eric/software/Qt/Examples/Qt-6.9.0/qmake
/home/eric/software/Qt/6.9.0/Src/qtbase/coin/instructions/qmake
/home/eric/software/Qt/6.9.0/Src/qtbase/qmake
/home/eric/software/Qt/6.9.0/Src/qtbase/qmake/doc/snippets/qmake
/home/eric/software/Qt/6.9.0/Src/qtbase/examples/qmake
/home/eric/software/Qt/6.9.0/Src/qtbase/tests/auto/tools/qmake
/home/eric/software/Qt/6.9.0/gcc_64/bin/qmake
/home/eric/software/Qt/Tools/QtCreator/share/qtcreator/templates/wizards/projects/qmake
/home/eric/software/Qt/Tools/QtDesignStudio-4.8.0-preview/share/qtcreator/templates/wizards/projects/qmake
/home/eric/software/Qt/Tools/QtDesignStudio-4.8.0-preview/qt6_design_studio_reduced_version/bin/qmake
/home/eric/software/Qt/Docs/Qt-6.9.0/qmake
```

```
export PATH=/home/eric/software/Qt/6.9.0/gcc_64/bin:$PATH
export PATH=/home/eric/software/Qt/6.9.0/gcc_64/bin${PATH:+:${PATH}}
```

```
QT_DIR=c:\local\Qt\6.9.0\msvc2022_64\lib\cmake\
QT_DIR=/home/eric/software/Qt/6.9.0/gcc_64/lib/cmake
```

### c:\local\Qt\6.9.0\msvc2022_64\bin\windeployqt.exe .\Debug\SimpleQtApp.exe
```
PS D:\work\qt_2025_work\simple\01\build> c:\local\Qt\6.9.0\msvc2022_64\bin\windeployqt.exe .\Debug\SimpleQtApp.exe
```
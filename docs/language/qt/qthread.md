# QThread

## Multithreading with Qt

-  [QMultithreading with Qt / qthread - Giuseppe D’Angelo](https://www.youtube.com/watch?v=dcSsjxhazu0&list=PLGG0IeDfkIVtvdmcvbB-FxAdqv3e3BrhP/).
-  [Multithreading with Qt](https://www.youtube.com/playlist?list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g).
-  [Multithreading with Qt (Part 1) - Introduction to Multithreading with Qt](https://www.youtube.com/watch?v=O1a5Z1ZIbSw&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=1/).
-  [Multithreading with Qt (Part 2) - QThread](https://www.youtube.com/watch?v=1FZO4VKANbM&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=2/).
-  [Multithreading with Qt (Part 3) - QThread with an event loop](https://www.youtube.com/watch?v=SncJ3D-fO7g&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=3/).
-  [Multithreading with Qt (Part 4) - Data Races and How to Avoid Them](https://www.youtube.com/watch?v=5hleFUBO6Ww&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=4/).
-  [Multithreading with Qt (Part 5) - Thread Safety in Qt](https://www.youtube.com/watch?v=QfWeRZ4wGAY&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=5/).
-  [Multithreading with Qt (Part 6) - Signals and Slots across Threads](https://www.youtube.com/watch?v=lTJ-QkC_Sxw&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=6/).
-  [Multithreading with Qt (Part 7) - Comparison of Qt and STL Multithreading Classes](https://www.youtube.com/watch?v=W3ec-_7VPeM&list=PL6CJYn40gN6jgr-Rpl3J4XDQYhmUnxb-g&index=7/).

## QThread

-  [C++ Qt 28 - QThread part 1 creating a thread](https://www.youtube.com/watch?v=JaGqGhRW5Ks/).
-  [C++ Qt 29 - QThread part 2 the Priority](https://www.youtube.com/watch?v=fM2THwKYqq8/).
-  [C++ Qt 30 - QThread part 3 the QMutex](https://www.youtube.com/watch?v=5WEiQ3VJfxc/).
-  [C++ Qt 31 - QThread part 4 threads with a GUI](https://www.youtube.com/watch?v=PR6wVy7Et1A/).
-  [C++ Qt 33 - QThread part 5 Waiting](https://www.youtube.com/watch?v=LCIes6xehlA/).
-  [C++ Qt 35 - QThread part 6 - Threading done correctly in Qt](https://www.youtube.com/watch?v=yazMHbIew0Q/).

## QThread::currentThreadId

-  [windows11+Qt6.6.2+QThread::currentThreadId()简单测试](https://zhuanlan.zhihu.com/p/687617049/).


## QThread多线程

-  [Qt进阶6：认识QThread多线程及线程资源回收](https://www.bilibili.com/video/BV1vB4y1m7GW/).



## Qt中多线程-线程池的使用-C/C++/qt

-  [线程类 QThread](https://subingwen.cn/qt/thread/).
-  [为什么要使用多线程](https://www.bilibili.com/video/BV1iN411f7dY/?p=1/).

There are three variants of QThread::sleep():
```
QThread::sleep(); // seconds
QThread::msleep(); // msec
QThread::usleep(); // usec
```

Current Thread Id
```
qDebug() << "Main Thread ID: " << QThread::currentThreadId();
```

## res

myres.qrc
```
<RCC>
    <qresource prefix="/mydice">
        <file>images/d0.jpg</file>
        <file>images/d1.jpg</file>
        <file>images/d2.jpg</file>
        <file>images/d3.jpg</file>
        <file>images/d4.jpg</file>
        <file>images/d5.jpg</file>
        <file>images/d6.jpg</file>
        <file>images/dice.jpg</file>
        <file>images/timg2.jpg</file>
    </qresource>
</RCC>
```

## Problem not using QThread

mainwindow.ui
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>MainWindow</class>
 <widget class="QMainWindow" name="MainWindow">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>800</width>
    <height>600</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>MainWindow</string>
  </property>
  <widget class="QWidget" name="centralwidget">
   <widget class="QPushButton" name="pushButton">
    <property name="geometry">
     <rect>
      <x>310</x>
      <y>280</y>
      <width>75</width>
      <height>23</height>
     </rect>
    </property>
    <property name="text">
     <string>PushButton</string>
    </property>
   </widget>
   <widget class="QLCDNumber" name="lcdNumber">
    <property name="geometry">
     <rect>
      <x>310</x>
      <y>200</y>
      <width>64</width>
      <height>23</height>
     </rect>
    </property>
   </widget>
  </widget>
  <widget class="QMenuBar" name="menubar">
   <property name="geometry">
    <rect>
     <x>0</x>
     <y>0</y>
     <width>800</width>
     <height>21</height>
    </rect>
   </property>
  </widget>
  <widget class="QStatusBar" name="statusbar"/>
 </widget>
 <resources/>
 <connections/>
</ui>
```

no response
```cpp
void MainWindow::on_pushButton_clicked()
{
    int i = 0;
    while(true)
    {
        this->ui->lcdNumber->display(QString::number(i++));
        std::this_thread::sleep_for( std::chrono::milliseconds( 100 ) );
    }
}
```

## QMutex

### QMutex example 1

mythread.h
```cpp
#ifndef MYTHREAD_H
#define MYTHREAD_H

#include <QThread>
#include <QMutex>

class MyThread : public QThread
{
protected:
    void run();
public:
    static QMutex mutex;
    static int n;
};

#endif // MYTHREAD_H
```

mythread.cpp
```cpp
#include "mythread.h"
#include <QDebug>

QMutex MyThread::mutex;
int MyThread::n = 0;

void MyThread::run()
{
    qDebug() << "MyThread::run() begin n= " << n;
    
    for (int i=0;i<100;++i)
    {
        //MyThread::mutex.lock();
        MyThread::n++;
        //MyThread::mutex.unlock();
        QThread::msleep( 10 );
    }
    qDebug() << "MyThread::run() end n= " << n;
}
```

main.cpp
```cpp
#include <QApplication>
#include "mythread.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread mThread1;
    MyThread mThread2;
    MyThread mThread3;

    mThread1.start();
    mThread2.start();
    mThread3.start();

    mThread1.wait();
    mThread2.wait();
    mThread3.wait();

    qDebug() << "MyThread::n = " << MyThread::n;

    return app.exec();
}
```

output:
```
MyThread::run() begin n=  0
MyThread::run() begin n=  0
MyThread::run() begin n=  0
MyThread::run() end n=  277
MyThread::run() end n=  277
MyThread::run() end n=  277
MyThread::n =  277
```

### QMutex example 2

mythread.h
```cpp
#ifndef MYTHREAD_H
#define MYTHREAD_H

#include <QThread>
#include <QMutex>

class MyThread : public QThread
{
protected:
    void run();
public:
    static QMutex mutex;
    static int n;
};

#endif // MYTHREAD_H
```

mythread.cpp
```cpp
#include "mythread.h"
#include <QDebug>

QMutex MyThread::mutex;
int MyThread::n = 0;

void MyThread::run()
{
    qDebug() << "MyThread::run() begin n= " << n;
    
    for (int i=0;i<100;++i)
    {
        MyThread::mutex.lock();
        MyThread::n++;
        MyThread::mutex.unlock();
        QThread::msleep( 10 );
    }
    qDebug() << "MyThread::run() end n= " << n;
}
```

main.cpp
```cpp
#include <QApplication>
#include "mythread.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread mThread1;
    MyThread mThread2;
    MyThread mThread3;

    mThread1.start();
    mThread2.start();
    mThread3.start();

    mThread1.wait();
    mThread2.wait();
    mThread3.wait();

    qDebug() << "MyThread::n = " << MyThread::n;

    return app.exec();
}
```

output:
```
MyThread::run() begin n=  0
MyThread::run() begin n=  0
MyThread::run() begin n=  0
MyThread::run() end n=  300
MyThread::run() end n=  300
MyThread::run() end n=  300
MyThread::n =  300
```


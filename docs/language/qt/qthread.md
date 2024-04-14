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

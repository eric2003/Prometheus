# Qt-Examples

## Qt Examples And Tutorials

-  [Qt Examples And Tutorials](https://doc.qt.io/qt-6/qtexamplesandtutorials.html).
-  [C++ 全栈聊天项目](https://www.bilibili.com/video/BV1k2421K7ZB/).


## Splitter

```cpp
#include <QApplication>
#include <QSplitter>
#include <QLabel>
#include <QWidget>
#include <QHBoxLayout>
#include <QTextEdit>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QWidget window;

    QSplitter *splitter = new QSplitter(Qt::Horizontal, &window);

    //// 创建两个子 QLabel
    QLabel *label1 = new QLabel("Child Widget 1",&window);
    QLabel *label2 = new QLabel("Child Widget 2",&window);

    QPalette sample_palette;
    sample_palette.setColor(QPalette::Window, Qt::white);
    sample_palette.setColor(QPalette::WindowText, Qt::blue);

    label1->setAutoFillBackground(true);
    label1->setPalette(sample_palette);

    label2->setStyleSheet("QLabel { background-color : red; color : blue; }");

    splitter->addWidget(label1);
    splitter->addWidget(label2);

    QHBoxLayout * hBox = new QHBoxLayout(&window);
    hBox->addWidget(splitter);

    window.show();

    return app.exec();
}
```

## std::thread

```cpp
void MainWindow::display()
{
    int i = 0;
    while(true)
    {
        this->ui->lcdNumber->display(QString::number(i++));
        qDebug() << "i=" << i;
        std::this_thread::sleep_for( std::chrono::milliseconds( 100 ) );
    }
}

void MainWindow::on_pushButton_clicked()
{
    std::thread th( &MainWindow::display, this );
    th.detach();
    //th.join();
}
```

```cpp
void MainWindow::on_pushButton_clicked()
{
    std::thread th([&](){
        int i = 0;
        while(true)
        {
            this->ui->lcdNumber->display(QString::number(i++));
            qDebug() << "i=" << i;
            std::this_thread::sleep_for( std::chrono::milliseconds( 100 ) );
        }
    });

    th.detach();
}
```

## QObject: Cannot create children for a parent that is in a different thread.

### example1

```cpp
#include <QApplication>
#include <QThread>

class A : public QObject
{
public:
    A( QObject * parent = nullptr ) :QObject(parent) {}
};

class MyThread : public QThread
{
public:
    MyThread()
    {
        qDebug() << "MyThread::MyThread, thread = " << QThread::currentThread();
    }

    void run() override
    {
        qDebug() << "MyThread::run, QThread::currentThread() = " << QThread::currentThread();
        qDebug() << "MyThread::run, this->thread() = " << this->thread();

    }
private:

};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread myThread;
    myThread.start();

    return app.exec();
}
```

output:
```
MyThread::MyThread, thread =  QThread(0x2da732e0150)
MyThread::run, QThread::currentThread() =  QThread(0xfd535cfcc8)
MyThread::run, this->thread() =  QThread(0x2da732e0150)
```

### example2

```cpp
#include <QApplication>
#include <QThread>

class A : public QObject
{
public:
    A( QObject * parent = nullptr ) :QObject(parent) 
    {
        qDebug() << "A::A, QThread::currentThread() = " << QThread::currentThread();
    }
};

class MyThread : public QThread
{
public:
    MyThread()
    {
        qDebug() << "MyThread::MyThread, thread = " << QThread::currentThread();
    }

    void run() override
    {
        qDebug() << "MyThread::run, QThread::currentThread() = " << QThread::currentThread();
        qDebug() << "MyThread::run, this->thread() = " << this->thread();
        this->a = new A(this);

    }
private:
    A * a = nullptr;

};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread myThread;
    myThread.start();

    return app.exec();
}
```

output:
```
MyThread::MyThread, thread =  QThread(0x1f720b06ea0)
MyThread::run, QThread::currentThread() =  QThread(0x3347cff6b8)
MyThread::run, this->thread() =  QThread(0x1f720b06ea0)
QObject: Cannot create children for a parent that is in a different thread.
(Parent is QThread(0x3347cff6b8), parent's thread is QThread(0x1f720b06ea0), current thread is QThread(0x3347cff6b8)
A::A, QThread::currentThread() =  QThread(0x3347cff6b8)
```

### example3

```cpp
#include <QApplication>
#include <QThread>

class A : public QObject
{
public:
    A( QObject * parent = nullptr ) :QObject(parent) 
    {
        qDebug() << "A::A, QThread::currentThread() = " << QThread::currentThread();
    }
};

class MyThread : public QThread
{
public:
    MyThread()
    {
        qDebug() << "MyThread::MyThread, thread = " << QThread::currentThread();
    }

    void run() override
    {
        qDebug() << "MyThread::run, QThread::currentThread() = " << QThread::currentThread();
        qDebug() << "MyThread::run, this->thread() = " << this->thread();
        this->a = new A();

    }
private:
    A * a = nullptr;

};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread myThread;
    myThread.start();

    return app.exec();
}
```

output:
```
MyThread::MyThread, thread =  QThread(0x1d6101ac780)
MyThread::run, QThread::currentThread() =  QThread(0xb6ea7bf6c8)
MyThread::run, this->thread() =  QThread(0x1d6101ac780)
A::A, QThread::currentThread() =  QThread(0xb6ea7bf6c8)
```

### example4 moveToThread

```cpp
#include <QApplication>
#include <QThread>

class A : public QObject
{
public:
    A( QObject * parent = nullptr ) :QObject(parent) 
    {
        qDebug() << "A::A, QThread::currentThread() = " << QThread::currentThread();
    }
};

class MyThread : public QThread
{
public:
    MyThread()
    {
        qDebug() << "MyThread::MyThread, thread = " << QThread::currentThread();
    }

    void run() override
    {
        qDebug() << "MyThread::run, QThread::currentThread() = " << QThread::currentThread();
        qDebug() << "MyThread::run, this->thread() = " << this->thread();
        this->a = new A(this);

    }
private:
    A * a = nullptr;

};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread myThread;
    myThread.moveToThread( &myThread );
    myThread.start();

    return app.exec();
}
```

output:
```
MyThread::MyThread, thread =  QThread(0x22b04d79ef0)
MyThread::run, QThread::currentThread() =  QThread(0x93b595f6d8)
MyThread::run, this->thread() =  QThread(0x93b595f6d8)
A::A, QThread::currentThread() =  QThread(0x93b595f6d8)
```

### example5

```cpp
#include <QApplication>
#include <QThread>

class A : public QObject
{
public:
    A( QObject * parent = nullptr ) :QObject(parent) 
    {
        qDebug() << "A::A, QThread::currentThread() = " << QThread::currentThread();
    }
};

class MyThread : public QThread
{
public:
    MyThread()
    {
        qDebug() << "MyThread::MyThread, thread = " << QThread::currentThread();
        this->a = new A(this);
    }

    void run() override
    {
        qDebug() << "MyThread::run, QThread::currentThread() = " << QThread::currentThread();
        qDebug() << "MyThread::run, this->thread() = " << this->thread();
    }
private:
    A * a = nullptr;

};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    MyThread myThread;
    myThread.start();

    return app.exec();
}
```

output:
```
MyThread::MyThread, thread =  QThread(0x1c7ddeeb0f0)
A::A, QThread::currentThread() =  QThread(0x1c7ddeeb0f0)
MyThread::run, QThread::currentThread() =  QThread(0x5d3cfafb08)
MyThread::run, this->thread() =  QThread(0x1c7ddeeb0f0)
```

```
ping www.baidu.com
```

## QTreeView QModelIndex

```cpp
QObject::connect(this->ui->treeView, &QAbstractItemView::clicked, this, &MainWindow::onMyTreeViewClicked);

void MainWindow::on_treeView_clicked(const QModelIndex &index)
{
    qDebug() <<"MainWindow::on_treeView_clicked" << "index=" << index;
    int row = index.row();
    int col = index.column();
    qDebug() <<"item row=" << row << "column=" << col;

    QString text = index.data(Qt::DisplayRole).toString();
    qDebug() << "text = " << text;
}
```


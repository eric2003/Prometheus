# QProcess

## QProcess

-  [QtCreator入门之QProcess篇](https://www.bilibili.com/video/BV1tk4y1X7dV/).

## QtCreator入门之QProcess篇

-  [1.启动进程[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1tk4y1X7dV/).
-  [2.阻塞启动[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1BC4y1e745/).
-  [3.启动信号绑定[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1364y1J7Qt/).
-  [4.进程退出信号绑定[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1Bk4y1X7Yx/).
-  [5.进程退出代码和退出状态[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1PC4y1v7t3/).
-  [6.进程当前状态[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV14i4y1z7RT/).
-  [7.监视进程标准输出数据[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1k5411q7bK/).
-  [8.进程日志监视工具实战[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1RC4y1e7i6/).
-  [9.日志问题补充[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1mK411s7EQ/).
-  [10.readAll读取游戏日志[QtCreator入门之QProcess篇]](https://www.bilibili.com/video/BV1MK4y167Q6/).

## 用Qt和C++实现一个命令行控制台

-  [【C++ Qt入门】10-用C++实现控制台 shell命令行程序](https://www.bilibili.com/video/BV1Fb411n7xe/).
-  [【MyCMD】用Qt和C++实现一个命令行控制台](https://www.bilibili.com/video/BV1Dh411d7EW/).
-  [如何将命令行终端封装到pyqt界面中](https://www.bilibili.com/video/BV1pT411c75C/).
-  [Qt终端命令模拟工具 v1.0.0](https://developer.aliyun.com/article/1151975/).



## QProcess example

open calc.exe example 1
```cpp
    QProcess process;
    process.start( "C:/Windows/System32/calc.exe" );
```

open calc.exe example 2
```cpp
    QProcess process;
    process.start( "calc.exe" );
```

open mspaint.exe
```cpp
    QProcess process;
    process.start( "C:/Program Files/WindowsApps/Microsoft.Paint_11.2404.1020.0_x64__8wekyb3d8bbwe/PaintApp/mspaint.exe" );
```

open mspaint.exe
```cpp
    QProcess process;
    process.start( "mspaint.exe" );
```

## CMD line example

```cpp
void Terminal::OnReturnKeyPressed()
{
    QStringList argument;
    //QString cmd = "dir";
    QString cmd = "cd d:\\ && dir";
    argument << "/c" << cmd;
    //this->procCmd->start("cmd", QStringList() << "/c" << "dir" );
    this->procCmd->start("cmd", argument );
    if ( !this->procCmd->waitForStarted() ) {
        qDebug() << "Terminal::OnReturnKeyPressed waitForStarted Failed";
        return;
    }

    if ( !this->procCmd->waitForFinished() ) {
        qDebug() << "Terminal::OnReturnKeyPressed External waitForFinished Failed";
        return;
    }

    this->ui->textEdit->append( cmd );

    //Information Output
    qDebug() << "Success:OnReturnKeyPressed";
}

```

```cpp
this->procCmd = new QProcess( this );
//Command line related
QObject::connect( this->procCmd, &QProcess::readyRead, this, &Terminal::ReadOutput );                //Read command line data
QObject::connect( this->procCmd, &QProcess::readyReadStandardOutput, this, &Terminal::ReadStandardOutput );  //Read command line standard data
QObject::connect( this->procCmd, &QProcess::finished, this,  &Terminal::FinishedProcess );           //Command line processing ends
QObject::connect( this->procCmd, &QProcess::errorOccurred, this, &Terminal::ErrorProcess );          //Command line error handling
QObject::connect( this->procCmd, &QProcess::stateChanged, this, &Terminal::OnStateChanged );          //Command line error handling

//this->procCmd->start("cmd", QStringList() << "/c" << "ping www.baidu.com" );
```

QDir::setCurrent
```cpp
int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    // 获取当前目录路径
    QString currentPath = QDir::currentPath();
    qDebug() << "Current Path: " << currentPath;

    // 设置新的当前目录路径
    QDir::setCurrent("/path/to/new/directory");

    // 获取新的当前目录路径
    QString newPath = QDir::currentPath();
    qDebug() << "New Path: " << newPath;

    return a.exec();
}
```

```cpp
#include <QCoreApplication>
#include <QDir>
#include <QDebug>
#include <iostream>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    QString currentPath = QDir::currentPath();
    qDebug() << "Current Path: " << currentPath;

    while (true) {
        std::cout << "Enter command (cd <directory> or 'exit' to quit): ";
        std::string input;
        std::getline(std::cin, input);

        if (input == "exit") {
            break;
        } else if (input.substr(0, 3) == "cd ") {
            QString targetDir = QString::fromStdString(input.substr(3));
            if (QDir::setCurrent(targetDir)) {
                qDebug() << "Changed directory to: " << QDir::currentPath();
            } else {
                qDebug() << "Failed to change directory. Please check the path.";
            }
        } else {
            qDebug() << "Invalid command. Please use 'cd <directory>' or 'exit'.";
        }
    }

    return a.exec();
}
```

自动补全功能
```cpp
#include <QCoreApplication>
#include <QDir>
#include <QLineEdit>
#include <QCompleter>
#include <QDebug>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    QString currentPath = QDir::currentPath();
    qDebug() << "Current Path: " << currentPath;

    // 创建一个LineEdit控件用于接收用户输入
    QLineEdit lineEdit;
    lineEdit.setPlaceholderText("Enter command (cd <directory>)");

    // 获取当前目录下的所有子目录
    QDir dir(currentPath);
    QStringList directories = dir.entryList(QDir::Dirs | QDir::NoDotAndDotDot);

    // 创建一个Completer对象，用于提供自动补全功能
    QCompleter completer(directories);
    completer.setCaseSensitivity(Qt::CaseInsensitive);
    lineEdit.setCompleter(&completer);

    // 连接textChanged信号，检测用户输入
    QObject::connect(&lineEdit, &QLineEdit::textChanged, [&]() {
        QString input = lineEdit.text();
        if (input.startsWith("cd ")) {
            QString targetDir = input.mid(3);
            if (directories.contains(targetDir)) {
                qDebug() << "Directory found: " << targetDir;
            }
        }
    });

    lineEdit.show();

    return a.exec();
}
```

installEventFilter
```cpp
    ui->textEdit->installEventFilter(this);
    ui->textEdit->viewport()->installEventFilter(this);
```

QDir
```cpp
QDir directory("Pictures/MyPictures");
```

```cpp
#include <QApplication>
#include <QProcess>
#include <QThread>

class Worker : public QObject
{
    Q_OBJECT
public:
    Worker()
    {
        qDebug() << "Worker::Worker";
        QObject::connect(&process, &QProcess::finished, this, &Worker::onProcessFinished);
    }

    void startProcess( const QString & program )
    {
        qDebug() << "Worker::startProcess";
        process.start( program );
    }
private slots:
    void onProcessFinished( int exitCode, QProcess::ExitStatus exitStatus )
    {
        qDebug() << "Process finished with exit code" << exitCode << "and status" << exitStatus;
    }
private:
    QProcess process;
};

class Thread : public QThread
{
    Q_OBJECT
protected:
    void run() override
    {
        qDebug() << "Thread run";
        Worker worker;
        worker.startProcess( "calc" );
        exec();
    }
};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    Thread * thread = new Thread();
    QObject::connect(thread, &QThread::finished, thread, &QThread::deleteLater);
    thread->start();

    return app.exec();
}
#include "main.moc"
```

 


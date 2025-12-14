# Tools

## Recent Links

- [漫谈一下数学、物理、计算机中的广义的循环结构](https://www.bilibili.com/video/BV1ysxyeREWi/).


## OpenCL CMake Info

CMakeLists.txt
```cmake
cmake_minimum_required ( VERSION 3.20 )

project ( testprj )

set ( PRJ_COMPILE_FEATURES )
set ( PRJ_COMPILE_DEFINITIONS )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )

find_package ( OpenCL )

include(CMakePrintHelpers)

cmake_print_variables( OpenCL_FOUND )
cmake_print_variables( OpenCL_INCLUDE_DIRS )
cmake_print_variables( OpenCL_LIBRARIES )
cmake_print_variables( OpenCL_VERSION_STRING )
cmake_print_variables( OpenCL_VERSION_MAJOR )
cmake_print_variables( OpenCL_VERSION_MINOR )

cmake_print_variables( OpenCL_INCLUDE_DIR )
cmake_print_variables( OpenCL_LIBRARY )

list ( APPEND PRJ_INCLUDE_DIRS ${OpenCL_INCLUDE_DIRS} )
list ( APPEND PRJ_LIBRARIES OpenCL::OpenCL )

get_directory_property( my_system_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} BUILDSYSTEM_TARGETS )
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_system_targets=${my_system_targets}" )
message( STATUS "my_import_targets=${my_import_targets}" )

include(cmake/WriteConfigureFile.cmake)
write_configure_file()

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

add_executable ( ${PROJECT_NAME}
    main.cpp
)

target_include_directories ( ${PROJECT_NAME}
    PRIVATE
        ${PRJ_INCLUDE_DIRS}
)

target_link_libraries( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_LIBRARIES}
)

target_compile_features ( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_COMPILE_FEATURES}
)

target_compile_definitions ( ${PROJECT_NAME}
    PRIVATE
       ${PRJ_COMPILE_DEFINITIONS} 
)
```


```
Qt6_DIR=c:\local\Qt\6.10.0\msvc2022_64\lib\cmake\
```

ControlUtils.h
```cpp
#pragma once

#include <QMap>
#include <QString>
#include <QLineEdit>
#include <QJsonObject>
#include <QTableWidget>
#include <QHeaderView>

QLineEdit *createRoLine(const QString &text);

QMap<QString, QString> readConf();

void saveJson( const QMap<QString, QString> & map,
    const QString & fileName = "opencl.json" );

QMap<QString, QString> jsonObjectToMap( const QJsonObject & obj );
QMap<QString, QString> scanOpenCLviaCMake( const QString & srcDir, const QString & outJson );

QMap<QString, QString> scanOpenCL();
QVector<QPair<QString, QString>> sortOpenCL( const QMap<QString, QString> & raw );
QTableWidget * createTable( const QVector<QPair<QString, QString>> & data );
```

ControlUtils.cpp
```cpp
#include <QApplication>
#include <QFile>
#include <QJsonDocument>
#include <QJsonObject>
#include <QProcess>
#include <QDir>
#include "ControlUtils.h"

// 工厂：生成只读、无框、可划选的 QLineEdit
QLineEdit *createRoLine(const QString &text)
{
    QLineEdit *le = new QLineEdit(text);
    le->setReadOnly(true);
    le->setFrame(false);
    le->setStyleSheet("background:transparent;"); // 彻底去掉背景
    le->setCursorPosition(0);   // ← 关键：始终显示头部
    return le;
}

QMap<QString, QString> readConf()
{
    QMap<QString, QString> map;
    QString path = QCoreApplication::applicationDirPath() + "/../../opencl.conf";
    qDebug() << "loading" << path;          // 调试时可看到实际路径
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly | QIODevice::Text))
        return map;                       // 读不到就返回空表
    QTextStream in(&f);
    while (!in.atEnd()) {
        QString line = in.readLine().trimmed();
        if (line.isEmpty() || line.startsWith('#'))
            continue;
        int eq = line.indexOf('=');
        if (eq > 0)
            map[line.left(eq)] = line.mid(eq + 1);
    }
    return map;
}

void saveJson(const QMap<QString, QString> &map,
    const QString &fileName)
{
    QJsonObject obj;
    for (auto it = map.cbegin(); it != map.cend(); ++it)
        obj[it.key()] = it.value();

    QString path = QCoreApplication::applicationDirPath() + "/" + fileName;
    QFile f(path);
    if (f.open(QIODevice::WriteOnly)) {
        f.write(QJsonDocument(obj).toJson(QJsonDocument::Indented));
        qDebug() << "JSON saved to" << path;
    }
}

QMap<QString, QString> jsonObjectToMap(const QJsonObject &obj)
{
    QMap<QString, QString> map;
    for (auto it = obj.begin(); it != obj.end(); ++it)
        map[it.key()] = it.value().toString();   // JSON 值转 QString
    return map;
}


QMap<QString, QString> scanOpenCLviaCMake(const QString &srcDir, const QString &outJson)
{
    QMap<QString, QString> map;

    QProcess cmake;
    cmake.setProgram("cmake");
    cmake.setWorkingDirectory(srcDir);          // 01a 目录
    cmake.setArguments(QStringList() << "-S" << srcDir << "-B" << "mybuild");

    cmake.start();
    if (!cmake.waitForFinished(30000)) return map;

    QByteArray out = cmake.readAllStandardOutput();
    QJsonObject obj;

    for (QByteArray line : out.split('\n')) {
        if (!line.contains('=')) continue;
        QString whole = QString::fromUtf8(line).trimmed();
        if (whole.startsWith("-- ")) whole.remove(0, 3);   // ← 去掉前缀
        int eq = whole.indexOf('=');
        if (eq <= 0) continue;
        QString key = whole.left(eq).trimmed();
        QString val = whole.mid(eq + 1).trimmed();
        if (val.startsWith('"') && val.endsWith('"'))
            val = val.mid(1, val.size() - 2);
        obj[key] = val;
    }

    QJsonDocument doc(obj);
    QFile f(outJson);
    if (f.open(QIODevice::WriteOnly))
        f.write(doc.toJson(QJsonDocument::Indented));

    map = jsonObjectToMap( obj );
    return map;
}

// --------- 业务逻辑 ---------
QMap<QString, QString> scanOpenCL()
{
    QString srcDir = QCoreApplication::applicationDirPath() + "/../../cmake";
    QString json   = QCoreApplication::applicationDirPath() + "/opencl.json";
    return scanOpenCLviaCMake(srcDir, json);          // 扫描 + 落盘
}

QVector<QPair<QString,QString>> sortOpenCL(const QMap<QString,QString> &raw)
{
    const QStringList prio = {"found","version","version_major","version_minor"};
    QVector<QPair<QString,QString>> hit[4], tail;

    for (auto it = raw.cbegin(); it != raw.cend(); ++it) {
        int pos = -1;
        for (int i = 0; i < prio.size(); ++i)
            if (it.key().toLower().contains(prio[i])) { pos = i; break; }
        (pos != -1 ? hit[pos] : tail).append({it.key(), it.value()});
    }

    QVector<QPair<QString,QString>> ordered;
    for (int i = 0; i < prio.size(); ++i) ordered += hit[i];
    std::sort(tail.begin(), tail.end(),
        [](auto &a, auto &b){ return a.first.toLower() < b.first.toLower(); });
    ordered += tail;
    return ordered;
}

 QTableWidget* createTable(const QVector<QPair<QString,QString>> &data)
{
    QTableWidget *t = new QTableWidget(0, 2);
    t->setHorizontalHeaderLabels({"名称", "值"});
    t->verticalHeader()->setVisible(false);
    t->horizontalHeader()->setStretchLastSection(true);
    t->setShowGrid(false);
    t->setSelectionMode(QAbstractItemView::NoSelection);

    for (auto &kv : data) {
        int row = t->rowCount();
        t->insertRow(row);
        t->setCellWidget(row, 0, createRoLine(kv.first));
        t->setCellWidget(row, 1, createRoLine(kv.second));
    }
    t->resizeColumnToContents(0);
    t->setColumnWidth(0, qMax(180, t->columnWidth(0)));
    return t;
}
```

main.cpp
```cpp
#include "ControlUtils.h"
#include <QApplication>
#include <QTableWidget>
#include <QHeaderView>
#include <QLineEdit>
#include <QVBoxLayout>
#include <QLabel>
#include <QFile>
#include <QTextStream>
#include <QDir>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    QWidget w;
    w.setWindowTitle("OpenCL 信息（两列可复制）");
    w.resize(800, 350);

    QVBoxLayout *lay = new QVBoxLayout(&w);
    lay->addWidget(new QLabel("CMake 检测到的 OpenCL 配置："));

    auto data = sortOpenCL( scanOpenCL() );   // ①扫描 ②排序
    lay->addWidget(createTable(data));      // ③展示

    w.show();
    return a.exec();
}
```


```
PS D:\github\ModernTools\codes\qt\CMakeInfoCollect\02c> tree /f
Folder PATH listing
Volume serial number is B8BF-5D16
D:.
│   CMakeLists.txt
│   ControlUtils.cpp
│   ControlUtils.h
│   main.cpp
│
├───build
└───cmake
        CMakeLists.txt
```

```cmake
cmake_minimum_required ( VERSION 4.2.0 )

project( HAHA )

message("PROJECT_NAME=${PROJECT_NAME}")

# 找到 OpenCL
find_package(OpenCL REQUIRED)

include(CMakePrintHelpers)

cmake_print_variables( OpenCL_FOUND )
cmake_print_variables( OpenCL_INCLUDE_DIRS )
cmake_print_variables( OpenCL_LIBRARIES )
cmake_print_variables( OpenCL_VERSION_STRING )
cmake_print_variables( OpenCL_VERSION_MAJOR )
cmake_print_variables( OpenCL_VERSION_MINOR )

cmake_print_variables( OpenCL_INCLUDE_DIR )
cmake_print_variables( OpenCL_LIBRARY )
```

```cmake
cmake_minimum_required(VERSION 4.2.0)

project(CMakeInfoCollect LANGUAGES CXX)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 COMPONENTS Core Widgets REQUIRED)

message(STATUS "PROJECT_NAME=${PROJECT_NAME}")

set( PROJECT_SOURCES
    main.cpp
	ControlUtils.h ControlUtils.cpp
)

add_executable( ${PROJECT_NAME}
)

target_sources( ${PROJECT_NAME}
  PRIVATE
	${PROJECT_SOURCES}
)

target_link_libraries(${PROJECT_NAME} PRIVATE Qt6::Core Qt6::Widgets)

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
    set_target_properties(${PROJECT_NAME} PROPERTIES
                          LINK_FLAGS "/SUBSYSTEM:WINDOWS /ENTRY:mainCRTStartup")
endif()

```


tmpdir
```cpp
#include <QApplication>
#include <QFile>
#include <QJsonDocument>
#include <QJsonObject>
#include <QProcess>
#include <QDir>
#include <QTemporaryDir>
#include "ControlUtils.h"

// 工厂：生成只读、无框、可划选的 QLineEdit
QLineEdit *createRoLine(const QString &text)
{
    QLineEdit *le = new QLineEdit(text);
    le->setReadOnly(true);
    le->setFrame(false);
    le->setStyleSheet("background:transparent;"); // 彻底去掉背景
    le->setCursorPosition(0);   // ← 关键：始终显示头部
    return le;
}

QMap<QString, QString> readConf()
{
    QMap<QString, QString> map;
    QString path = QCoreApplication::applicationDirPath() + "/../../opencl.conf";
    qDebug() << "loading" << path;          // 调试时可看到实际路径
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly | QIODevice::Text))
        return map;                       // 读不到就返回空表
    QTextStream in(&f);
    while (!in.atEnd()) {
        QString line = in.readLine().trimmed();
        if (line.isEmpty() || line.startsWith('#'))
            continue;
        int eq = line.indexOf('=');
        if (eq > 0)
            map[line.left(eq)] = line.mid(eq + 1);
    }
    return map;
}

void saveJson(const QMap<QString, QString> &map,
    const QString &fileName)
{
    QJsonObject obj;
    for (auto it = map.cbegin(); it != map.cend(); ++it)
        obj[it.key()] = it.value();

    QString path = QCoreApplication::applicationDirPath() + "/" + fileName;
    QFile f(path);
    if (f.open(QIODevice::WriteOnly)) {
        f.write(QJsonDocument(obj).toJson(QJsonDocument::Indented));
        qDebug() << "JSON saved to" << path;
    }
}

QMap<QString, QString> jsonObjectToMap(const QJsonObject &obj)
{
    QMap<QString, QString> map;
    for (auto it = obj.begin(); it != obj.end(); ++it)
        map[it.key()] = it.value().toString();   // JSON 值转 QString
    return map;
}


QMap<QString, QString> scanOpenCLviaCMake(const QString &srcDir, const QString &outJson)
{
    QMap<QString, QString> map;

    /* 1. 创建临时构建目录，生命周期随对象结束自动删除 */
    QTemporaryDir tempBuild;
    if (!tempBuild.isValid()) return map;

    QProcess cmakeProcess;
    cmakeProcess.setProgram("cmake");
    cmakeProcess.setWorkingDirectory(srcDir);          // 01a 目录
    //cmakeProcess.setArguments( QStringList() << "-S" << srcDir << "-B" << "build" );
    cmakeProcess.setArguments( QStringList() << "-S" << srcDir << "-B" << tempBuild.path() );
    cmakeProcess.start();

    QString tmpPath = tempBuild.path();

    if ( !cmakeProcess.waitForFinished(30000) ) return map;

    QByteArray out = cmakeProcess.readAllStandardOutput();
    QJsonObject obj;

    for ( QByteArray line : out.split('\n') ) {
        if (!line.contains('=')) continue;
        QString whole = QString::fromUtf8(line).trimmed();
        if (whole.startsWith("-- ")) whole.remove(0, 3);   // ← 去掉前缀
        int eq = whole.indexOf('=');
        if (eq <= 0) continue;
        QString key = whole.left(eq).trimmed();
        QString val = whole.mid(eq + 1).trimmed();
        if (val.startsWith('"') && val.endsWith('"'))
            val = val.mid(1, val.size() - 2);
        obj[key] = val;
    }

    QJsonDocument doc(obj);
    QFile f(outJson);
    if (f.open(QIODevice::WriteOnly))
        f.write(doc.toJson(QJsonDocument::Indented));

    map = jsonObjectToMap( obj );
    return map;
}

// --------- 业务逻辑 ---------
QMap<QString, QString> scanOpenCL()
{
    QString srcDir = QCoreApplication::applicationDirPath() + "/../../cmake";
    QString json   = QCoreApplication::applicationDirPath() + "/opencl.json";
    return scanOpenCLviaCMake(srcDir, json);          // 扫描 + 落盘
}

QVector<QPair<QString,QString>> sortOpenCL(const QMap<QString,QString> &raw)
{
    const QStringList prio = {"found","version","version_major","version_minor"};
    QVector<QPair<QString,QString>> hit[4], tail;

    for (auto it = raw.cbegin(); it != raw.cend(); ++it) {
        int pos = -1;
        for (int i = 0; i < prio.size(); ++i)
            if (it.key().toLower().contains(prio[i])) { pos = i; break; }
        (pos != -1 ? hit[pos] : tail).append({it.key(), it.value()});
    }

    QVector<QPair<QString,QString>> ordered;
    for (int i = 0; i < prio.size(); ++i) ordered += hit[i];
    std::sort(tail.begin(), tail.end(),
        [](auto &a, auto &b){ return a.first.toLower() < b.first.toLower(); });
    ordered += tail;
    return ordered;
}

 QTableWidget* createTable(const QVector<QPair<QString,QString>> &data)
{
    QTableWidget *t = new QTableWidget(0, 2);
    t->setHorizontalHeaderLabels({"名称", "值"});
    t->verticalHeader()->setVisible(false);
    t->horizontalHeader()->setStretchLastSection(true);
    t->setShowGrid(false);
    t->setSelectionMode(QAbstractItemView::NoSelection);

    for (auto &kv : data) {
        int row = t->rowCount();
        t->insertRow(row);
        t->setCellWidget(row, 0, createRoLine(kv.first));
        t->setCellWidget(row, 1, createRoLine(kv.second));
    }
    t->resizeColumnToContents(0);
    t->setColumnWidth(0, qMax(180, t->columnWidth(0)));
    return t;
}
```

```cpp
#include "ControlUtils.h"
#include <QApplication>
#include <QTableWidget>
#include <QHeaderView>
#include <QLineEdit>
#include <QVBoxLayout>
#include <QLabel>
#include <QFile>
#include <QTextStream>
#include <QDir>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    QWidget w;
    w.setWindowTitle("OpenCL 信息（两列可复制）");
    w.resize(800, 350);

    QVBoxLayout *lay = new QVBoxLayout(&w);
    lay->addWidget(new QLabel("CMake 检测到的 OpenCL 配置："));

    auto data = sortOpenCL( scanOpenCL() );   // ①扫描 ②排序
    lay->addWidget(createTable(data));      // ③展示

    w.show();
    return a.exec();
}
```
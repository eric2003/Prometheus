# Qt-Tools

## PathConverter

main.cpp
```cpp
#include <QApplication>
#include <QWidget>
#include <QVBoxLayout>
#include <QLineEdit>
#include <QPushButton>
#include <QTextEdit>
#include <QRegularExpression>

class PathConverter : public QWidget {
    Q_OBJECT

public:
    PathConverter(QWidget *parent = nullptr) : QWidget(parent) {
        auto *layout = new QVBoxLayout(this);

        inputEdit = new QLineEdit(this);
        inputEdit->setPlaceholderText("请输入路径");
        layout->addWidget(inputEdit);

        convertButton = new QPushButton("转换路径", this);
        connect(convertButton, &QPushButton::clicked, this, &PathConverter::onConvertClicked);
        layout->addWidget(convertButton);

        outputEdit = new QTextEdit(this);
        outputEdit->setReadOnly(true); // 设置为只读
        outputEdit->setLineWrapMode(QTextEdit::NoWrap); // 设置行换行模式
        layout->addWidget(outputEdit);
    }

private slots:
    void onConvertClicked() {
        QString path = inputEdit->text();
        QRegularExpression re("\\\\");
        QRegularExpressionMatchIterator it = re.globalMatch(path);
        QString convertedPath = it.hasNext() ? path.replace(re, "/") : path;
        outputEdit->setText(convertedPath);
    }

private:
    QLineEdit *inputEdit;
    QPushButton *convertButton;
    QTextEdit *outputEdit;
};

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    PathConverter window;
    window.show();

    return app.exec();
}

#include "main.moc"
```

CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.20)

project(PathConverter LANGUAGES CXX)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 COMPONENTS Core Widgets REQUIRED)

add_executable(PathConverter main.cpp)
target_link_libraries(PathConverter PRIVATE Qt6::Core Qt6::Widgets)
```
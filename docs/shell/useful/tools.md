# Tools

## Link

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).

## Tools

git clone git@github.com:eric2003/ModernTools.git
```
PS D:\github> git clone git@github.com:eric2003/ModernTools.git
Cloning into 'ModernTools'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (4/4), done.
```

### case_converter.py

```python
import sys
from PyQt6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QPushButton, QTextEdit, QLabel
from PyQt6.QtCore import Qt

class CaseConverterWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("String Case Converter")
        self.setFixedSize(400, 300)

        # 创建主窗口部件和布局
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        main_layout = QVBoxLayout()
        central_widget.setLayout(main_layout)

        # 输入标签
        input_label = QLabel("Enter Text:")
        input_label.setStyleSheet("font-size: 12pt; font-family: Arial;")
        main_layout.addWidget(input_label)

        # 输入文本框
        self.input_field = QTextEdit()
        self.input_field.setFixedHeight(80)
        self.input_field.setStyleSheet("font-size: 10pt; font-family: Arial;")
        main_layout.addWidget(self.input_field)

        # 按钮布局
        button_layout = QHBoxLayout()
        main_layout.addLayout(button_layout)

        # 大写按钮
        upper_button = QPushButton("To Upper Case")
        upper_button.setStyleSheet("font-size: 10pt; font-family: Arial; padding: 5px;")
        upper_button.clicked.connect(self.to_upper_case)
        button_layout.addWidget(upper_button)

        # 小写按钮
        lower_button = QPushButton("To Lower Case")
        lower_button.setStyleSheet("font-size: 10pt; font-family: Arial; padding: 5px;")
        lower_button.clicked.connect(self.to_lower_case)
        button_layout.addWidget(lower_button)

        # 结果文本框（可复制）
        self.result_field = QTextEdit()
        self.result_field.setFixedHeight(80)
        self.result_field.setStyleSheet("font-size: 10pt; font-family: Arial; background-color: #ffffff; border: 1px solid #ddd;")
        self.result_field.setText("Result will appear here")
        self.result_field.setReadOnly(False)  # 允许复制
        main_layout.addWidget(self.result_field)

        # 添加拉伸以保持布局整洁
        main_layout.addStretch()

        # 设置窗口背景
        self.setStyleSheet("background-color: #f0f0f0;")

    def to_upper_case(self):
        input_text = self.input_field.toPlainText().strip()
        self.result_field.setText(input_text.upper())

    def to_lower_case(self):
        input_text = self.input_field.toPlainText().strip()
        self.result_field.setText(input_text.lower())

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = CaseConverterWindow()
    window.show()
    sys.exit(app.exec())
```

### pip install chardet
```
PS C:\Users\eric> pip install chardet
Collecting chardet
  Downloading chardet-5.2.0-py3-none-any.whl.metadata (3.4 kB)
Downloading chardet-5.2.0-py3-none-any.whl (199 kB)
Installing collected packages: chardet
Successfully installed chardet-5.2.0
```


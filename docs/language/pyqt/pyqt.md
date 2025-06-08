# PyQt

## Link

-  [Julia-OneFLOW doc](https://eric2003.github.io/OneFLOW/julia.html).

## Install

```
pip install PyQt6
```

## PathConverter

```python
import re
from PyQt6.QtWidgets import QApplication, QWidget, QVBoxLayout, QLineEdit, QPushButton, QTextEdit, QLabel
from PyQt6.QtGui import QGuiApplication
from PyQt6.QtCore import Qt

def convert_path():
    path = entry.text()
    converted_path = re.sub(r'\\', '/', path)
    output_text.setPlainText(converted_path)  # 设置不可编辑文本框的内容

# 创建应用
app = QApplication([])

# 创建窗口
window = QWidget()
window.setWindowTitle("路径转换器")
window.resize(600, 300)  # 设置窗口大小

# 创建布局
layout = QVBoxLayout()
layout.setSpacing(10)  # 设置控件之间的间距

# 创建输入框
entry = QLineEdit()
entry.setPlaceholderText("请输入路径")
entry.setFixedHeight(30)  # 设置输入框高度
layout.addWidget(entry)

# 创建转换按钮
convert_button = QPushButton("转换路径")
convert_button.setFixedHeight(30)  # 设置按钮高度
convert_button.clicked.connect(convert_path)
layout.addWidget(convert_button)

# 创建不可编辑的文本框
output_text = QTextEdit()
output_text.setReadOnly(True)  # 设置为不可编辑
output_text.setFixedHeight(100)  # 设置文本框高度
output_text.setPlaceholderText("转换后的路径将显示在这里")
layout.addWidget(output_text)

# 设置布局
window.setLayout(layout)

# 显示窗口
window.show()

# 运行应用
app.exec()
```

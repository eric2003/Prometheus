# Tkinter

## Link

-  [Julia-OneFLOW doc](https://eric2003.github.io/OneFLOW/julia.html).

## PathConverter

```python
import re
import tkinter as tk

def convert_path():
    # 获取输入框中的路径
    path = entry.get()
    # 替换反斜杠为正斜杠
    converted_path = re.sub(r'\\', '/', path)
    # 显示转换后的路径
    output.delete(1.0, tk.END)  # 清空文本框内容
    output.insert(tk.END, converted_path)  # 插入转换后的路径

# 创建主窗口
root = tk.Tk()
root.title("路径转换器")
root.geometry("400x200")  # 设置窗口大小

# 创建输入框
entry = tk.Entry(root, width=50)
entry.pack(pady=10)

# 创建转换按钮
convert_button = tk.Button(root, text="转换路径", command=convert_path)
convert_button.pack(pady=5)

# 创建输出文本框
output = tk.Text(root, height=5, width=50)
output.pack(pady=10)

# 运行主循环
root.mainloop()
```

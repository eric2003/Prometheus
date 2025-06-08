# wxPython

## Link

-  [Julia-OneFLOW doc](https://eric2003.github.io/OneFLOW/julia.html).

## Install

### pip install wxPython
```
PS C:\Users\eric> pip install wxPython
Collecting wxPython
  Downloading wxpython-4.2.3-cp313-cp313-win_amd64.whl.metadata (3.7 kB)
Downloading wxpython-4.2.3-cp313-cp313-win_amd64.whl (16.6 MB)
   ---------------------------------------- 16.6/16.6 MB 4.8 MB/s eta 0:00:00
Installing collected packages: wxPython
Successfully installed wxPython-4.2.3
```

## PathConverter

```python
import re
import wx

class PathConverterApp(wx.App):
    def OnInit(self):
        self.frame = PathConverterFrame(None, title="路径转换器")
        self.frame.Show(True)
        return True

class PathConverterFrame(wx.Frame):
    def __init__(self, parent, title):
        super(PathConverterFrame, self).__init__(parent, title=title, size=(400, 200))
        self.InitUI()

    def InitUI(self):
        panel = wx.Panel(self)

        # 创建输入路径的文本控件
        self.input_path = wx.TextCtrl(panel)
        self.input_path.SetValue("请输入路径")
        self.input_path.Bind(wx.EVT_TEXT, self.OnText)
        self.input_path.Bind(wx.EVT_KILL_FOCUS, self.OnLostFocus)

        # 创建转换按钮
        self.convert_button = wx.Button(panel, label="转换路径")
        self.convert_button.Bind(wx.EVT_BUTTON, self.OnConvertPath)

        # 创建显示转换后路径的文本控件（只读）
        self.output_path = wx.TextCtrl(panel, style=wx.TE_MULTILINE | wx.TE_READONLY)

        # 创建布局管理器
        sizer = wx.BoxSizer(wx.VERTICAL)
        sizer.Add(self.input_path, 0, wx.ALL | wx.EXPAND, 5)
        sizer.Add(self.convert_button, 0, wx.ALL | wx.CENTER, 5)
        sizer.Add(self.output_path, 1, wx.ALL | wx.EXPAND, 5)

        panel.SetSizer(sizer)

    def OnText(self, event):
        if self.input_path.GetValue() == "请输入路径":
            self.input_path.SetValue("")

    def OnLostFocus(self, event):
        if not self.input_path.GetValue():
            self.input_path.SetValue("请输入路径")

    def OnConvertPath(self, event):
        # 获取输入框中的路径并转换
        path = self.input_path.GetValue()
        converted_path = re.sub(r'\\', '/', path)
        # 显示转换后的路径
        self.output_path.SetValue(converted_path)

if __name__ == '__main__':
    app = PathConverterApp()
    app.MainLoop()
```

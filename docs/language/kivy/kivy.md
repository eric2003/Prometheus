# Kivy

## Link

-  [Julia-OneFLOW doc](https://eric2003.github.io/OneFLOW/julia.html).

## Install

### pip install kivy
```
PS C:\Users\eric> pip install kivy
Collecting kivy
  Downloading Kivy-2.3.1-cp313-cp313-win_amd64.whl.metadata (14 kB)
Collecting Kivy-Garden>=0.1.4 (from kivy)
  Downloading Kivy_Garden-0.1.5-py3-none-any.whl.metadata (159 bytes)
Collecting docutils (from kivy)
  Downloading docutils-0.21.2-py3-none-any.whl.metadata (2.8 kB)
Requirement already satisfied: pygments in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from kivy) (2.18.0)
Requirement already satisfied: requests in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from kivy) (2.32.3)
Collecting filetype (from kivy)
  Downloading filetype-1.2.0-py2.py3-none-any.whl.metadata (6.5 kB)
Collecting kivy-deps.angle~=0.4.0 (from kivy)
  Downloading kivy_deps.angle-0.4.0-cp313-cp313-win_amd64.whl.metadata (238 bytes)
Collecting kivy-deps.sdl2~=0.8.0 (from kivy)
  Downloading kivy_deps.sdl2-0.8.0-cp313-cp313-win_amd64.whl.metadata (238 bytes)
Collecting kivy-deps.glew~=0.3.1 (from kivy)
  Downloading kivy_deps.glew-0.3.1-cp313-cp313-win_amd64.whl.metadata (237 bytes)
Collecting pypiwin32 (from kivy)
  Downloading pypiwin32-223-py3-none-any.whl.metadata (236 bytes)
Requirement already satisfied: pywin32>=223 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from pypiwin32->kivy) (308)
Requirement already satisfied: charset-normalizer<4,>=2 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from requests->kivy) (3.4.0)
Requirement already satisfied: idna<4,>=2.5 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from requests->kivy) (3.10)
Requirement already satisfied: urllib3<3,>=1.21.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from requests->kivy) (2.2.3)
Requirement already satisfied: certifi>=2017.4.17 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from requests->kivy) (2024.8.30)
Downloading Kivy-2.3.1-cp313-cp313-win_amd64.whl (4.5 MB)
   ---------------------------------------- 4.5/4.5 MB 18.5 MB/s eta 0:00:00
Downloading kivy_deps.angle-0.4.0-cp313-cp313-win_amd64.whl (5.1 MB)
   ---------------------------------------- 5.1/5.1 MB 4.2 MB/s eta 0:00:00
Downloading kivy_deps.glew-0.3.1-cp313-cp313-win_amd64.whl (123 kB)
Downloading kivy_deps.sdl2-0.8.0-cp313-cp313-win_amd64.whl (4.2 MB)
   ---------------------------------------- 4.2/4.2 MB 3.8 MB/s eta 0:00:00
Downloading Kivy_Garden-0.1.5-py3-none-any.whl (4.6 kB)
Downloading docutils-0.21.2-py3-none-any.whl (587 kB)
   ---------------------------------------- 587.4/587.4 kB 12.2 MB/s eta 0:00:00
Downloading filetype-1.2.0-py2.py3-none-any.whl (19 kB)
Downloading pypiwin32-223-py3-none-any.whl (1.7 kB)
Installing collected packages: kivy-deps.sdl2, kivy-deps.glew, kivy-deps.angle, filetype, pypiwin32, docutils, Kivy-Garden, kivy
Successfully installed Kivy-Garden-0.1.5 docutils-0.21.2 filetype-1.2.0 kivy-2.3.1 kivy-deps.angle-0.4.0 kivy-deps.glew-0.3.1 kivy-deps.sdl2-0.8.0 pypiwin32-223
PS C:\Users\eric>
```

## PathConverter
PathConverter.py
```python
import re
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.core.text import LabelBase

# 注册支持中文的字体
LabelBase.register(name='MicrosoftYaHei', fn_regular='C:/Windows/Fonts/msyh.ttc')

class PathConverterApp(App):
    def build(self):
        # 创建一个垂直布局
        layout = BoxLayout(orientation='vertical', padding=10, spacing=10)

        # 创建输入路径的文本输入框
        self.input_path = TextInput(hint_text="请输入路径", multiline=False, font_name='MicrosoftYaHei')
        layout.add_widget(self.input_path)

        # 创建转换路径的按钮
        self.convert_button = Button(text="转换路径", font_name='MicrosoftYaHei')
        self.convert_button.bind(on_press=self.convert_path)
        layout.add_widget(self.convert_button)

        # 创建显示转换后路径的文本输入框（只读）
        self.output_path = TextInput(text="转换后的路径将显示在这里", readonly=True, multiline=False, font_name='MicrosoftYaHei')
        layout.add_widget(self.output_path)

        return layout

    def convert_path(self, instance):
        # 获取输入框中的路径并转换
        path = self.input_path.text
        converted_path = re.sub(r'\\', '/', path)
        # 显示转换后的路径
        self.output_path.text = converted_path

if __name__ == "__main__":
    PathConverterApp().run()
```

# Pyglet

## pyglet Link

-  [pyglet Documentation](https://pyglet.readthedocs.io/).
-  [pyglet Documentation Index](https://pythonhosted.org/pyglet/).


## github

```
git clone https://github.com/pyglet/pyglet.git
```

## Uninstall
```
pip uninstall pyglet
```

typical results:
```
PS C:\Users\eric> pip uninstall pyglet
Found existing installation: pyglet 2.0.15
Uninstalling pyglet-2.0.15:
  Would remove:
    c:\users\eric\appdata\roaming\python\python312\site-packages\pyglet-2.0.15.dist-info\*
    c:\users\eric\appdata\roaming\python\python312\site-packages\pyglet\*
Proceed (Y/n)? y
  Successfully uninstalled pyglet-2.0.15
```

or
```
PS C:\Users\eric> pip uninstall pyglet
Found existing installation: pyglet 2.0.14
Uninstalling pyglet-2.0.14:
  Would remove:
    c:\users\eric\appdata\local\programs\python\python312\lib\site-packages\pyglet-2.0.14.dist-info\*
    c:\users\eric\appdata\local\programs\python\python312\lib\site-packages\pyglet\*
Proceed (Y/n)? y
  Successfully uninstalled pyglet-2.0.14
```

## Install
```
pip install pyglet
```

typical results:
```
PS C:\Users\eric> pip install pyglet
Collecting pyglet
  Using cached pyglet-2.0.15-py3-none-any.whl.metadata (7.8 kB)
Using cached pyglet-2.0.15-py3-none-any.whl (884 kB)
Installing collected packages: pyglet
Successfully installed pyglet-2.0.15
```
## Code Example

### Hello, World

```python
import pyglet

window = pyglet.window.Window()

label = pyglet.text.Label('Hello, world',
                          font_name='Times New Roman',
                          font_size=36,
                          x=window.width//2, y=window.height//2,
                          anchor_x='center', anchor_y='center')
                          
@window.event
def on_draw():
    window.clear()
    label.draw()

pyglet.app.run()
```

### Image viewer

```python
import pyglet

window = pyglet.window.Window()
image = pyglet.resource.image('kitten.jpg')

@window.event
def on_draw():
    window.clear()
    image.blit(0, 0)

pyglet.app.run()
```

### Handling mouse and keyboard events Example 1

```python
import pyglet

window = pyglet.window.Window()

@window.event
def on_key_press(symbol, modifiers):
    print('A key was pressed')

@window.event
def on_draw():
    window.clear()

pyglet.app.run()
```

### Handling mouse and keyboard events Example 2

```python
import pyglet
from pyglet.window import key

window = pyglet.window.Window()

@window.event
def on_key_press(symbol, modifiers):
    if symbol == key.A:
        print('The "A" key was pressed.')
    elif symbol == key.LEFT:
        print('The left arrow key was pressed.')
    elif symbol == key.ENTER:
        print('The enter key was pressed.')

@window.event
def on_draw():
    window.clear()

pyglet.app.run()
```

### Mouse events

```python
import pyglet
from pyglet.window import mouse

window = pyglet.window.Window()

@window.event
def on_mouse_press(x, y, button, modifiers):
    if button == mouse.LEFT:
        print('The left mouse button was pressed.')        

@window.event
def on_draw():
    window.clear()

pyglet.app.run()
```

### window

```python
import pyglet

window = pyglet.window.Window(width=1280,height=768,caption="Hello Pyglet")

pyglet.app.run()
```
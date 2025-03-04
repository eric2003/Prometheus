# Example

## Argparse

-  [Argparse](https://docs.python.org/zh-cn/3/library/argparse.html).
-  [Argument Parsing with argparse in Python](https://www.youtube.com/watch?v=88pl8TuuKz0).

## F-String

-  [5 Useful F-String Tricks In Python](https://www.youtube.com/watch?v=EoNOWVYKyo0).

```python
n:int = 1000000000
print(f'{n}')
print(f'{n:_}')
print(f'{n:,}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\01> python .\testprj.py
1000000000
1_000_000_000
1,000,000,000
```

```python
var: str = 'var'
print(f'{var:>20}:')
print(f'{var:<20}:')
print(f'{var:^20}:')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\02> python .\testprj.py
                 var:
var                 :
        var         :
```

```python
var: str = 'var'
print(f'{var:_>20}')
print(f'{var:#<20}')
print(f'{var:|^20}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\02a> python .\testprj.py
_________________var
var#################
||||||||var|||||||||
```

```python
from datetime import datetime
now: datetime = datetime.now()

print(f'{now:%d.%m.%y}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\03> python .\testprj.py
21.02.25
```

```python
from datetime import datetime
now: datetime = datetime.now()

print(f'{now:%d.%m.%y (%H:%M:%S)}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\03a> python .\testprj.py
21.02.25 (13:02:50)
```

```python
from datetime import datetime
now: datetime = datetime.now()

print(f'{now:%d.%m.%y (%H:%M:%S)}')
print(f'{now:%c}')
print(f'{now:%I%p}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\03b> python .\testprj.py
21.02.25 (13:06:24)
Fri Feb 21 13:06:24 2025
01PM
```

```python
n: float = 1234.5678
print(round(n,2))
print(f'{n:.2f}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\04> python .\testprj.py
1234.57
1234.57
```

```python
n: float = 1234.5678
print(f'Result: {n:.2f}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\04a> python .\testprj.py
Result: 1234.57
```

```python
n: float = 1234.5678
print(f'Result: {n:.2f}')
print(f'Result: {n:.0f}')
print(f'Result: {n:_.3f}')
print(f'Result: {n:,.3f}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\04b> python .\testprj.py
Result: 1234.57
Result: 1235
Result: 1_234.568
Result: 1,234.568
```

```python
a: int = 5
b: int = 10
my_var: str = 'Bob says hi'

print(f'a + b = {a+b}')
print(f'{a + b =}')
print(f'{my_var =}')
```

output
```powershell
PS D:\work\python_work\ModernPython\codes\F-String\05a> python .\testprj.py
a + b = 15
a + b =15
my_var ='Bob says hi'
```


## logging

-  [logging](https://docs.python.org/zh-cn/3/library/logging.html).

myapp.py
```python
# myapp.py
import logging
import mylib
logger = logging.getLogger(__name__)

def main():
    logging.basicConfig(filename='myapp.log', level=logging.INFO)
    logger.info('Started')
    mylib.do_something()
    logger.info('Finished')

if __name__ == '__main__':
    main()
```

mylib.py
```python
# mylib.py
import logging
logger = logging.getLogger(__name__)

def do_something():
    logger.info('Doing something')
```

如果你运行 myapp.py ，你应该在 myapp.log 中看到：
```
INFO:__main__:Started
INFO:mylib:Doing something
INFO:__main__:Finished
```

## wheel

```
pip install wheel
```

results:
```
Collecting wheel
  Using cached wheel-0.43.0-py3-none-any.whl.metadata (2.2 kB)
Using cached wheel-0.43.0-py3-none-any.whl (65 kB)
Installing collected packages: wheel
Successfully installed wheel-0.43.0
```

## importlib.metadata

version('wheel') 
```python
from importlib.metadata import version 
ver = version('wheel') 
print("version('wheel')=",ver)
```

results:
```
version('wheel')= 0.43.0
```

### version('numpy') 
```python
from importlib.metadata import version 
ver = version('numpy') 
print("version('numpy')=",ver)
```

results:
```
version('numpy')= 1.26.4
```

list(metadata('wheel'))
```python
from importlib.metadata import metadata 
print("list(metadata('wheel'))=",list(metadata('wheel')))
```

results:
```
list(metadata('wheel'))=
['Metadata-Version', 'Name', 'Version', 'Summary', 'Keywords', 'Author-email', 'Maintainer-email', 'Requires-Python', 'Description-Content-Type', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Classifier', 'Requires-Dist', 'Requires-Dist', 'Project-URL', 'Project-URL', 'Project-URL', 'Project-URL', 'Provides-Extra', 'Description']
```

### entry_points()
```python
from importlib.metadata import entry_points 
eps = entry_points()
gp = sorted(eps.groups)
print("gp=",gp)
```

results:
```
gp= ['array_api', 'babel.checkers', 'babel.extractors', 'console_scripts', 'distutils.commands', 'distutils.setup_keywords', 'egg_info.writers', 'markdown.extensions', 'mkdocs.plugins', 'mkdocs.themes', 'networkx.backends', 'pyinstaller40', 'setuptools.finalize_distribution_options', 'sphinx.html_themes']
```

### distribution
```python
from importlib.metadata import distribution 
dist = distribution('wheel')
print("dist.version=",dist.version)
```

results:
```
dist.version= 0.43.0
```

dist.metadata['Requires-Python'] 
```python
from importlib.metadata import distribution 
dist = distribution('wheel')
dm = dist.metadata['Requires-Python']
print("dm=",dm)
```

results:
```
dm= >=3.8
```

dist.metadata
```python
from importlib.metadata import distribution 
dist = distribution('wheel')
print("dist.metadata=",dist.metadata)
```

results:
```
dist.metadata= Metadata-Version: 2.1
Name: wheel
Version: 0.43.0
Summary: A built-package format for Python
Keywords: wheel,packaging
Author-email: Daniel Holth <dholth@fastmail.fm>
Maintainer-email: =?utf-8?q?Alex_Gr=C3=B6nholm_=3Calex=2Egronholm=40nextday=2Efi=3E?=
Requires-Python: >=3.8
Description-Content-Type: text/x-rst
Classifier: Development Status :: 5 - Production/Stable
Classifier: Intended Audience :: Developers
Classifier: Topic :: System :: Archiving :: Packaging
Classifier: License :: OSI Approved :: MIT License
Classifier: Programming Language :: Python
Classifier: Programming Language :: Python :: 3 :: Only
Classifier: Programming Language :: Python :: 3.8
Classifier: Programming Language :: Python :: 3.9
Classifier: Programming Language :: Python :: 3.10
Classifier: Programming Language :: Python :: 3.11
Classifier: Programming Language :: Python :: 3.12
Requires-Dist: pytest >= 6.0.0 ; extra == "test"
Requires-Dist: setuptools >= 65 ; extra == "test"
Project-URL: Changelog, https://wheel.readthedocs.io/en/stable/news.html
Project-URL: Documentation, https://wheel.readthedocs.io/
Project-URL: Issue Tracker, https://github.com/pypa/wheel/issues
Project-URL: Source, https://github.com/pypa/wheel
Provides-Extra: test
Description: wheel
=====
This library is the reference implementation of the Python wheel packaging
standard, as defined in `PEP 427`_.
It has two different roles:
#. A setuptools_ extension for building wheels that provides the
   ``bdist_wheel`` setuptools command
#. A command line tool for working with wheel files
It should be noted that wheel is **not** intended to be used as a library, and
as such there is no stable, public API.
.. _PEP 427: https://www.python.org/dev/peps/pep-0427/
.. _setuptools: https://pypi.org/project/setuptools/
Documentation
-------------
The documentation_ can be found on Read The Docs.
.. _documentation: https://wheel.readthedocs.io/
Code of Conduct
---------------
Everyone interacting in the wheel project's codebases, issue trackers, chat
rooms, and mailing lists is expected to follow the `PSF Code of Conduct`_.
.. _PSF Code of Conduct: https://github.com/pypa/.github/blob/main/CODE_OF_CONDUCT.md

wheel
=====

This library is the reference implementation of the Python wheel packaging
standard, as defined in `PEP 427`_.

It has two different roles:

#. A setuptools_ extension for building wheels that provides the
   ``bdist_wheel`` setuptools command
#. A command line tool for working with wheel files

It should be noted that wheel is **not** intended to be used as a library, and
as such there is no stable, public API.

.. _PEP 427: https://www.python.org/dev/peps/pep-0427/
.. _setuptools: https://pypi.org/project/setuptools/

Documentation
-------------

The documentation_ can be found on Read The Docs.

.. _documentation: https://wheel.readthedocs.io/

Code of Conduct
---------------

Everyone interacting in the wheel project's codebases, issue trackers, chat
rooms, and mailing lists is expected to follow the `PSF Code of Conduct`_.

.. _PSF Code of Conduct: https://github.com/pypa/.github/blob/main/CODE_OF_CONDUCT.md
```

### requires('wheel')
```python
from importlib.metadata import requires 
req=requires('wheel')
print("req=",req)
```

results:
```
req= ['pytest >= 6.0.0 ; extra == "test"', 'setuptools >= 65 ; extra == "test"']
```


### files('wheel')
```python
from importlib.metadata import files 
fs=files('wheel')
for myfile in fs:
   print ('current file: %s'% myfile)
```

results:
```
current file: ../../Scripts/wheel.exe
current file: wheel-0.43.0.dist-info/INSTALLER
current file: wheel-0.43.0.dist-info/LICENSE.txt
current file: wheel-0.43.0.dist-info/METADATA
current file: wheel-0.43.0.dist-info/RECORD
current file: wheel-0.43.0.dist-info/REQUESTED
current file: wheel-0.43.0.dist-info/WHEEL
current file: wheel-0.43.0.dist-info/entry_points.txt
current file: wheel/__init__.py
current file: wheel/__main__.py
current file: wheel/__pycache__/__init__.cpython-312.pyc
current file: wheel/__pycache__/__main__.cpython-312.pyc
current file: wheel/__pycache__/_setuptools_logging.cpython-312.pyc
current file: wheel/__pycache__/bdist_wheel.cpython-312.pyc
current file: wheel/__pycache__/macosx_libfile.cpython-312.pyc
current file: wheel/__pycache__/metadata.cpython-312.pyc
current file: wheel/__pycache__/util.cpython-312.pyc
current file: wheel/__pycache__/wheelfile.cpython-312.pyc
current file: wheel/_setuptools_logging.py
current file: wheel/bdist_wheel.py
current file: wheel/cli/__init__.py
current file: wheel/cli/__pycache__/__init__.cpython-312.pyc
current file: wheel/cli/__pycache__/convert.cpython-312.pyc
current file: wheel/cli/__pycache__/pack.cpython-312.pyc
current file: wheel/cli/__pycache__/tags.cpython-312.pyc
current file: wheel/cli/__pycache__/unpack.cpython-312.pyc
current file: wheel/cli/convert.py
current file: wheel/cli/pack.py
current file: wheel/cli/tags.py
current file: wheel/cli/unpack.py
current file: wheel/macosx_libfile.py
current file: wheel/metadata.py
current file: wheel/util.py
current file: wheel/vendored/__init__.py
current file: wheel/vendored/__pycache__/__init__.cpython-312.pyc
current file: wheel/vendored/packaging/__init__.py
current file: wheel/vendored/packaging/__pycache__/__init__.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/_elffile.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/_manylinux.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/_musllinux.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/_parser.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/_structures.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/_tokenizer.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/markers.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/requirements.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/specifiers.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/tags.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/utils.cpython-312.pyc
current file: wheel/vendored/packaging/__pycache__/version.cpython-312.pyc
current file: wheel/vendored/packaging/_elffile.py
current file: wheel/vendored/packaging/_manylinux.py
current file: wheel/vendored/packaging/_musllinux.py
current file: wheel/vendored/packaging/_parser.py
current file: wheel/vendored/packaging/_structures.py
current file: wheel/vendored/packaging/_tokenizer.py
current file: wheel/vendored/packaging/markers.py
current file: wheel/vendored/packaging/requirements.py
current file: wheel/vendored/packaging/specifiers.py
current file: wheel/vendored/packaging/tags.py
current file: wheel/vendored/packaging/utils.py
current file: wheel/vendored/packaging/version.py
current file: wheel/vendored/vendor.txt
current file: wheel/wheelfile.py
```

```python
from importlib.metadata import files 
fs=files('wheel')
for p in fs:
   if 'utils.py' in str(p):
       print ('current file: %s'% p)
```

results:
```
current file: wheel/vendored/packaging/utils.py
```

```python
from importlib.metadata import files 
fs=files('wheel')
util = [p for p in files('wheel') if 'utils.py' in str(p)][0]  
print("util=",util)
print("type(util)=",type(util))
print("util.size=",util.size)
print("util.dist=",util.dist)
print("util.dist=",util.hash)
#print(util.read_text())
print("util.locate()=",util.locate())

```

results:
```
util= wheel/vendored/packaging/utils.py
type(util)= <class 'importlib.metadata.PackagePath'>
util.size= 5268
util.dist= <importlib.metadata.PathDistribution object at 0x0000017C5F701A30>
util.dist= <FileHash mode: sha256 value: XgdmP3yx9-wQEFjO7OvMj9RjEf5JlR5HFFR69v7SQ9E>
util.locate()= C:\Users\eric\AppData\Local\Programs\Python\Python312\Lib\site-packages\wheel\vendored\packaging\utils.py
```

## http

```
py.exe -m http.server 8080
```

results
```
PS D:\work\qt_2024_work\ModernQt\codes\QML\httpuiremote\httpuiremote> py.exe -m http.server 8080
Serving HTTP on :: port 8080 (http://[::]:8080/) ...
```


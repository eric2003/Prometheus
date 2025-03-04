# Python

## Article link

-  [【Python科学计算三维可视化】北京理工大学](https://www.bilibili.com/video/BV1F7411i74Q/).
-  [Python 从入门到深入](https://pythonhowto.readthedocs.io/zh-cn/latest/index.html).
-  [5 Good Python Habits](https://www.youtube.com/watch?v=I72uD8ED73U/).
-  [5 Uncommon Python Features I Love](https://www.youtube.com/watch?v=sQ1Q96-Vhjk/).
-  [3 Bad Python Habits To Avoid](https://www.youtube.com/watch?v=PoSxMZALVgo/).
-  [If __name__ == "__main__" for Python Developers](https://www.youtube.com/watch?v=NB5LGzmSiCs/).
-  [Convert py to exe - from code to software](https://www.youtube.com/watch?v=Y0HN9tdLuJo/).
-  [25 nooby Python habits you need to ditch](https://www.youtube.com/watch?v=qUeud6DvOWI/).
-  [221 MORE nooby Python habits](https://www.youtube.com/watch?v=E8NijUYfyus/).


## Youtuber

-  [PyCon US](https://www.youtube.com/@PyConUS/).
-  [Python Simplified](https://www.youtube.com/@PythonSimplified/).

## Delete Build directory

```python
import os
import shutil

def remove_git_folder(path):
    os.system(f'rd /s /q {path}')

def delete_build_directories(root_dir):
    print(f'root_dir {root_dir}')
    for dirpath, dirnames, filenames in os.walk(root_dir, topdown=False):
        for dirname in dirnames:
            if dirname == 'build':
                print(f'dirpath {dirpath} dirname {dirname}')
                build_dir = os.path.join(dirpath, dirname)
                print(f'build_dir {build_dir}')
                try:
                    shutil.rmtree(build_dir)
                    print(f'Deleted {build_dir}')
                except OSError as e:
                    if e.errno == 13:
                        print(f'Permission denied: {build_dir}')
                        remove_git_folder(build_dir)
                    elif e.errno == 16:
                        print(f'Directory not empty: {build_dir}')
                    else:
                        print(f'Error deleting {build_dir}: {e}')                

# 获取当前目录
current_directory = os.getcwd()
modernCMakeDir = r'd:\work\modern_cmake_work\ModernCMake\codes'

print(f"current_directory= {current_directory}")
print(f"modernCMakeDir= {modernCMakeDir}")

# 调用函数并传入要删除目录的根目录
delete_build_directories(modernCMakeDir)
input()
```

## Read String

```python
def read_string(path):
    print(f"In read_string path= {path}")

modernCMakeDir = r'd:\work\modern_cmake_work\ModernCMake\codes'
ModernPythonDir = r'd:\work\python_work\ModernPython\codes'

print(f"modernCMakeDir= {modernCMakeDir}")
print(f"ModernPythonDir= {ModernPythonDir}")

read_string(modernCMakeDir)
read_string(ModernPythonDir)
```

## Command Line 

```python
import sys

print(f"Arguments count: {len(sys.argv)}")
for i, arg in enumerate(sys.argv):
    print(f"Argument {i:>6}: {arg}")
```	

results:
```
PS D:\work\python_work\ModernPython\codes\command_line\01> py.exe .\testprj.py d:\work\python_work\ModernPython\codes
Arguments count: 2
Argument      0: .\testprj.py
Argument      1: d:\work\python_work\ModernPython\codes
```

```python
import sys

def my_function():
    print(f"Arguments count: {len(sys.argv)}")
    for i, arg in enumerate(sys.argv):
        print(f"Argument {i:>6}: {arg}")    

my_function()
```

cmd_delete_directories
```python
import os
import sys
import shutil

def remove_git_folder(path):
    os.system(f'rd /s /q {path}')

def delete_build_directories(root_dir):
    print(f'root_dir {root_dir}')
    for dirpath, dirnames, filenames in os.walk(root_dir, topdown=False):
        for dirname in dirnames:
            if dirname == 'build':
                print(f'dirpath {dirpath} dirname {dirname}')
                build_dir = os.path.join(dirpath, dirname)
                print(f'build_dir {build_dir}')
                try:
                    shutil.rmtree(build_dir)
                    print(f'Deleted {build_dir}')
                except OSError as e:
                    if e.errno == 13:
                        print(f'Permission denied: {build_dir}')
                        remove_git_folder(build_dir)
                    elif e.errno == 16:
                        print(f'Directory not empty: {build_dir}')
                    else:
                        print(f'Error deleting {build_dir}: {e}')                

def my_function():
    print(f"Arguments count: {len(sys.argv)}")
    for i, arg in enumerate(sys.argv):
        print(f"Argument {i:>6}: {arg}")
        
def cmd_delete_directories():
    print(f"Arguments count: {len(sys.argv)}")
    for i, arg in enumerate(sys.argv):
        print(f"Argument {i:>6}: {arg}")
    dirname = sys.argv[1]
    delete_build_directories(dirname)

cmd_delete_directories()
input()
```

```
cd d:\github\ModernTools\python\deletebuilddir\
py.exe ./remove_foder.py d:\work\python_work\ModernPython\codes
```

## Read Write

```python
sphinx_filename = "sphinx.rst"    
with open(sphinx_filename, 'r', encoding='UTF-8') as fp:
   line = fp.readline()
   while line:
       str1,str2 = get_sphinx_namelink( line )
       str1_list.append( str1 )
       str2_list.append( str2 )
       line = fp.readline()

mkdocs_filename = "mkdocs.md"
with open(mkdocs_filename, 'w', encoding='UTF-8') as fpout:
    nLines = len(str1_list)
    for i in range( nLines ):
        str1 = str1_list[i]
        str2 = str2_list[i]
        str = "- [" + str1 + "](" + str2 + ")."
        print("str={}".format(str) )
        fpout.write("{}\n".format(str))
```		


## String Split

```python
import re

text = "Python;is,a powerful::language"
words = re.split(';|,|:| ', text)
new_list = [item for item in words if item]
print(words)
print(new_list)
```

results:
```
PS D:\work\python_work\ModernPython\codes\string\split\04b> py.exe .\testprj.py
['Python', 'is', 'a', 'powerful', '', 'language']
['Python', 'is', 'a', 'powerful', 'language']
```

## directory

```python
import os

# Get the current working directory
current_dir = os.getcwd()
print("Current working directory:", current_dir)

# Get the parent directory
parent_dir = os.path.dirname(current_dir)
print("Parent directory:", parent_dir)

# Get the grandparent directory
grandparent_dir = os.path.dirname(parent_dir)
print("Grandparent directory:", grandparent_dir)

relative_path1 = os.path.relpath(parent_dir, current_dir)
relative_path2 = os.path.relpath(grandparent_dir, current_dir)

print("relative_path 1 directory:", relative_path1)
print("relative_path 2 directory:", relative_path2)
```

results:
```
PS D:\work\python_work\ModernPython\codes\getfoderfiles\02> py.exe .\testprj.py
Current working directory: D:\work\python_work\ModernPython\codes\getfoderfiles\02
Parent directory: D:\work\python_work\ModernPython\codes\getfoderfiles
Grandparent directory: D:\work\python_work\ModernPython\codes
relative_path 1 directory: ..
relative_path 2 directory: ..\..
```

## get_sorted_indices

```python
def get_sorted_indices(arr1, arr2):
    sort_map = {value: index for index, value in enumerate(arr2)}
    sorted_indices = []
    for element in arr2:  
        index = sort_map[element] 
        sorted_indices.append(index)
    return sorted_indices
        
# 原始数组  
original_array = [10, 20, 5, 8, 25]  

# 目标数组  
target_array = [25, 8, 20, 10, 5]  

# 创建一个排序map  
sort_map = {value: index for index, value in enumerate(target_array)}  

# 使用排序map对原始数组进行排序  
sorted_array = sorted(original_array, key=lambda x: sort_map[x])  

sorted_indices = get_sorted_indices(original_array, target_array)

print(original_array)
print(sorted_array)
print(sort_map)
print(sorted_indices) 
```

output
```
PS D:\work\python_work\ModernPython\codes\sort\01c> python .\testprj.py
[10, 20, 5, 8, 25]
[25, 8, 20, 10, 5]
{25: 0, 8: 1, 20: 2, 10: 3, 5: 4}
[0, 1, 2, 3, 4]
```

```python
arrx = [10, 30, 50, 60, 80]  

# 获取每个元素的索引  
for element in arrx:  
    index = arrx.index(element)  
    print(f"元素: {element}, 索引: {index}") 
```

output
```
元素: 10, 索引: 0  
元素: 30, 索引: 1  
元素: 50, 索引: 2  
元素: 60, 索引: 3  
元素: 80, 索引: 4 
```

```python

original_array = [10, 20, 5, 8, 25]  
target_array = [25, 8, 20, 10, 5]  
index_map = [4,3,1,0,2]
result_array = original_array[index_map]

print(original_array)
print(index_map)
print(result_array)
print(target_array) 
```
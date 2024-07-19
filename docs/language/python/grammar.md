# Grammar

## for

-  [Python for 循环语句](https://www.runoob.com/python/python-for-loop.html).

### for letter in 'Python'
```python
for letter in 'Python':
   print("current letter: %s" % letter)
```

results:
```
current letter: P
current letter: y
current letter: t
current letter: h
current letter: o
current letter: n
```

### for fruit in fruits:
```python
fruits = ['banana', 'apple',  'mango']
for fruit in fruits:
   print ('current fruit: %s'% fruit)
```

results:
```
current fruit: banana
current fruit: apple
current fruit: mango
```

## string

### print
```python
var1 = 'Hello World!'
var2 = "Runoob"
print("var1=",var1)
print("var2=",var2)
```

results:
```
var1= Hello World!
var2= Runoob
```

### index
```python
var1 = 'Hello World!'
var2 = "Runoob"
 
print ("var1[0]: ", var1[0])
print ("var2[1:5]: ", var2[1:5])
```

results:
```
var1[0]:  H
var2[1:5]:  unoo
```

### Multiline Strings

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
```

results:
```
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
```

### String Length

```python
a = "Hello, World!"
print("len(a)=",len(a))
```

results:
```
len(a)= 13
```

### Check String

To check if a certain phrase or character is present in a string, we can use the keyword in.
```python
txt = "The best things in life are free!"
b = "free" in txt
print('"free" in txt =',b)
```

results:
```
"free" in txt = True
```

Use it in an if statement:
```python
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")
```

results:
```
Yes, 'free' is present.
```

### Check if NOT

Check if "expensive" is NOT present in the following text:
```python
txt = "The best things in life are free!"
print("expensive" not in txt)
```

results:
```
True
```

Use it in an if statement:
```python
txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")
```

results:
```
No, 'expensive' is NOT present.
```

### String Type

```python
a = "Hello, World!"
print(a)
print(type(a))
```

results:
```
Hello, World!
<class 'str'>
```

### Slicing Strings

Slicing
```python
b = "Hello, World!"
print(b[2:5])
```

results:
```
llo
```

Slice From the Start
```python
b = "Hello, World!"
print(b[:5])
```

results:
```
Hello
```

Slice To the End
```python
b = "Hello, World!"
print(b[2:])
```

results:
```
llo, World!
```

Negative Indexing
```python
b = "Hello, World!"
print(b[-5:-2])
```

results:
```
orl
```

### Modify Strings

Upper Case
```python
a = "Hello, World!"
print(a.upper())
```

results:
```
HELLO, WORLD!
```

#### Lower Case
```python
a = "Hello, World!"
print(a.lower())
```

results:
```
hello, world!
```

## Dictionaries

### Create and print a dictionary:
```python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)
```

results:
```
{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
```

### Dictionary Items
```python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
```

results:
```
Ford
```

### Duplicates Not Allowed
```python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(thisdict)
```

results:
```
{'brand': 'Ford', 'model': 'Mustang', 'year': 2020}
```

### Dictionary Length
```python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(len(thisdict))
```

results:
```
3
```

### Dictionary Items 
```python
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
```

results:
```
3
```

### Dictionary Type 
```python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(type(thisdict))
```

results:
```
<class 'dict'>
```

### The dict() Constructor
```python
thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict)
```

results:
```
{'name': 'John', 'age': 36, 'country': 'Norway'}
```

## __init__

### Example 1
```python
# A Sample class with init method
class Person:
 
    # init method or constructor
    def __init__(self, name):
        self.name = name
 
    # Sample Method
    def say_hi(self):
        print('Hello, my name is', self.name)
 
 
p = Person('Nikhil')
p.say_hi()
```

output
```
PS D:\work\python_work\ModernPython\codes\__init__\class_init\01> py.exe .\testprj.py
Hello, my name is Nikhil
```

## __call__


### Example 1 __call__(self)
```python
class Example: 
    def __init__(self): 
        print("Instance Created") 
      
    # Defining __call__ method 
    def __call__(self): 
        print("Instance is called via special method") 
  
# Instance created 
e = Example() 
  
# __call__ method will be called 
e()
```

output
```
PS D:\work\python_work\ModernPython\codes\__call__\01> py.exe .\testprj.py
Instance Created
Instance is called via special method
```

### Example 2 __call__(self, a, b):
```python
class Product: 
    def __init__(self): 
        print("Instance Created") 
  
    # Defining __call__ method 
    def __call__(self, a, b): 
        print(a * b) 
  
# Instance created 
ans = Product() 
  
# __call__ method will be called 
ans(10, 20)
```

output
```
PS D:\work\python_work\ModernPython\codes\__call__\02> py.exe .\testprj.py
Instance Created
200
```

 
## raise 

### Example 1
```python
x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero")
```

output
```
PS D:\work\python_work\ModernPython\codes\raise\01> py.exe .\testprj.py
Traceback (most recent call last):
  File "D:\work\python_work\ModernPython\codes\raise\01\testprj.py", line 4, in <module>
    raise Exception("Sorry, no numbers below zero")
Exception: Sorry, no numbers below zero
```  

### Example 2
```python
x = "hello"

if not type(x) is int:
  raise TypeError("Only integers are allowed")
```

output
```
PS D:\work\python_work\ModernPython\codes\raise\02> py.exe .\testprj.py
Traceback (most recent call last):
  File "D:\work\python_work\ModernPython\codes\raise\02\testprj.py", line 4, in <module>
    raise TypeError("Only integers are allowed")
TypeError: Only integers are allowed
```

### Example 3
```python
def ThorwErr():
    raise Exception("Throw an exception") 
# Exception: Throw an exception 
ThorwErr()
```

output
```
PS D:\work\python_work\ModernPython\codes\raise\03> py.exe .\testprj.py
Traceback (most recent call last):
  File "D:\work\python_work\ModernPython\codes\raise\03\testprj.py", line 4, in <module>
    ThorwErr()
  File "D:\work\python_work\ModernPython\codes\raise\03\testprj.py", line 2, in ThorwErr
    raise Exception("Throw an exception")
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Exception: Throw an exception
```

## Exception 

### Example 1
```python
values = [10, 5, 6, 0, 9, 8, 2]

for value in values:
    try:
        print( 10 / value )
    except ZeroDivisionError as e:
        print(str(e))
```

output
```
PS D:\work\python_work\ModernPython\codes\exceptions\01e> py.exe .\testprj.py
1.0
2.0
1.6666666666666667
division by zero
1.1111111111111112
1.25
5.0
```


## Python Keyword Arguments

### Example 1
```python
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")
```

output
```
PS D:\work\python_work\ModernPython\codes\KeywordArguments\01> py.exe .\testprj.py
The youngest child is Linus
```

## Function decorators

### Example 1
```python
def hi(name="yasoob"):
    return "hi " + name
 
print(hi())
# output: 'hi yasoob'
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\01> py.exe .\testprj.py
hi yasoob
```

### Example 2 Defining functions within functions
```python
def hi(name="yasoob"):
    print("now you are inside the hi() function")
 
    def greet():
        return "now you are in the greet() function"
 
    def welcome():
        return "now you are in the welcome() function"
 
    print(greet())
    print(welcome())
    print("now you are back in the hi() function")
 
hi()
#output:now you are inside the hi() function
#       now you are in the greet() function
#       now you are in the welcome() function
#       now you are back in the hi() function
 
# 上面展示了无论何时你调用hi(), greet()和welcome()将会同时被调用。
# 然后greet()和welcome()函数在hi()函数之外是不能访问的，比如：
 
greet()
#outputs: NameError: name 'greet' is not defined
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\02> py.exe .\testprj.py
now you are inside the hi() function
now you are in the greet() function
now you are in the welcome() function
now you are back in the hi() function
Traceback (most recent call last):
  File "D:\work\python_work\ModernPython\codes\decorators\decorator\02\testprj.py", line 24, in <module>
    greet()
    ^^^^^
NameError: name 'greet' is not defined
```

### Example 3 Returning a function from a function
```python
def hi(name="yasoob"):
    def greet():
        return "now you are in the greet() function"
 
    def welcome():
        return "now you are in the welcome() function"
 
    if name == "yasoob":
        return greet
    else:
        return welcome
 
a = hi()
print(a)
#outputs: <function greet at 0x7f2143c01500>
 
#上面清晰地展示了`a`现在指向到hi()函数中的greet()函数
#现在试试这个
 
print(a())
#outputs: now you are in the greet() function
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\03> py.exe .\testprj.py
<function hi.<locals>.greet at 0x0000019AED09DF80>
now you are in the greet() function
```

### Example 4 Passing a function as a parameter to another function
```python
def hi():
    return "hi yasoob!"
 
def doSomethingBeforeHi(func):
    print("I am doing some boring work before executing hi()")
    print(func())
 
doSomethingBeforeHi(hi)
#outputs:I am doing some boring work before executing hi()
#        hi yasoob!
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\04> py.exe .\testprj.py
I am doing some boring work before executing hi()
hi yasoob!
```


### Example 5 Your first decorator
```python
def a_new_decorator(a_func):
 
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
 
        a_func()
 
        print("I am doing some boring work after executing a_func()")
 
    return wrapTheFunction
 
def a_function_requiring_decoration():
    print("I am the function which needs some decoration to remove my foul smell")
 
a_function_requiring_decoration()
#outputs: "I am the function which needs some decoration to remove my foul smell"
 
a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)
#now a_function_requiring_decoration is wrapped by wrapTheFunction()
 
a_function_requiring_decoration()
#outputs:I am doing some boring work before executing a_func()
#        I am the function which needs some decoration to remove my foul smell
#        I am doing some boring work after executing a_func()
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\05> py.exe .\testprj.py
I am the function which needs some decoration to remove my foul smell
I am doing some boring work before executing a_func()
I am the function which needs some decoration to remove my foul smell
I am doing some boring work after executing a_func()
```

### Example 6 @ Function decorator
```python
def a_new_decorator(a_func):
 
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
 
        a_func()
 
        print("I am doing some boring work after executing a_func()")
 
    return wrapTheFunction

@a_new_decorator
def a_function_requiring_decoration():
    """Hey you! Decorate me!"""
    print("I am the function which needs some decoration to "
          "remove my foul smell")
 
a_function_requiring_decoration()
#outputs: I am doing some boring work before executing a_func()
#         I am the function which needs some decoration to remove my foul smell
#         I am doing some boring work after executing a_func()
 
#the @a_new_decorator is just a short way of saying:
a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\06a> py.exe .\testprj.py
I am doing some boring work before executing a_func()
I am the function which needs some decoration to remove my foul smell
I am doing some boring work after executing a_func()
```

### Example 7 @ Function decorator
```python
def a_new_decorator(a_func):
 
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
 
        a_func()
 
        print("I am doing some boring work after executing a_func()")
 
    return wrapTheFunction

@a_new_decorator
def a_function_requiring_decoration():
    """Hey you! Decorate me!"""
    print("I am the function which needs some decoration to "
          "remove my foul smell")
 
a_function_requiring_decoration()
#outputs: I am doing some boring work before executing a_func()
#         I am the function which needs some decoration to remove my foul smell
#         I am doing some boring work after executing a_func()
 
#the @a_new_decorator is just a short way of saying:
a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)

print(a_function_requiring_decoration.__name__)
# Output: wrapTheFunction
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\06b> py.exe .\testprj.py
I am doing some boring work before executing a_func()
I am the function which needs some decoration to remove my foul smell
I am doing some boring work after executing a_func()
wrapTheFunction
```

```
这并不是我们想要的！Ouput输出应该是"a_function_requiring_decoration"。
这里的函数被warpTheFunction替代了。它重写了我们函数的名字和注释文档(docstring)。
幸运的是Python提供给我们一个简单的函数来解决这个问题，那就是functools.wraps。
我们修改上一个例子来使用functools.wraps：
```

### Example 8 wraps
```python
from functools import wraps
 
def a_new_decorator(a_func):
    @wraps(a_func)
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
        a_func()
        print("I am doing some boring work after executing a_func()")
    return wrapTheFunction
 
@a_new_decorator
def a_function_requiring_decoration():
    """Hey yo! Decorate me!"""
    print("I am the function which needs some decoration to "
          "remove my foul smell")
          
a_function_requiring_decoration()
 
print(a_function_requiring_decoration.__name__)
# Output: a_function_requiring_decoration
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\07> py.exe .\testprj.py
I am doing some boring work before executing a_func()
I am the function which needs some decoration to remove my foul smell
I am doing some boring work after executing a_func()
a_function_requiring_decoration
```

### Example 9 wraps if not
```python
from functools import wraps
def decorator_name(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not can_run:
            return "Function will not run"
        return f(*args, **kwargs)
    return decorated
 
@decorator_name
def func():
    return("Function is running")
 
can_run = True
print(func())
# Output: Function is running
 
can_run = False
print(func())
# Output: Function will not run
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\decorator\08> py.exe .\testprj.py
Function is running
Function will not run
```

### Example 10 Decorators With Arguments
```python
def decorator_function(original_function):
    def wrapper_function(*args, **kwargs):
        print("Executed Before", original_function.__name__)
        result = original_function(*args, **kwargs)
        print("Executed After", original_function.__name__,"\n")
        return result
    return wrapper_function


@decorator_function
def display_info(name, age):
    print("display_info ran with qiguments ({}, {})".format(name, age))
    
display_info('john',25)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\Arguments\01> py.exe .\testprj.py
Executed Before display_info
display_info ran with qiguments (john, 25)
Executed After display_info
```

### Example 11 Decorators With Arguments
```python
def decorator_function(original_function):
    def wrapper_function(*args, **kwargs):
        print("Executed Before", original_function.__name__)
        result = original_function(*args, **kwargs)
        print("Executed After", original_function.__name__,"\n")
        return result
    return wrapper_function


@decorator_function
def display_info(name, age):
    print("display_info ran with qiguments ({}, {})".format(name, age))
    
display_info('john',25)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\Arguments\01> py.exe .\testprj.py
Executed Before display_info
display_info ran with qiguments (john, 25)
Executed After display_info
```

### Example 12 Decorators With Arguments
```python
def decorator_function(original_function):
    def wrapper_function(*args, **kwargs):
        print("Executed Before", original_function.__name__)
        result = original_function(*args, **kwargs)
        print("Executed After", original_function.__name__,"\n")
        return result
    return wrapper_function


@decorator_function
def display_info(name, age):
    print("display_info ran with qiguments ({}, {})".format(name, age))
    
display_info('john',25)
display_info('Travis',30)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\Arguments\01a> py.exe .\testprj.py
Executed Before display_info
display_info ran with qiguments (john, 25)
Executed After display_info

Executed Before display_info
display_info ran with qiguments (Travis, 30)
Executed After display_info
```

### Example 13 Decorators With Arguments
```python
def prefix_decorator(prefix):
    def decorator_function(original_function):
        def wrapper_function(*args, **kwargs):
            print(prefix, "Executed Before", original_function.__name__)
            result = original_function(*args, **kwargs)
            print(prefix, "Executed After", original_function.__name__,"\n")
            return result
        return wrapper_function
    return decorator_function

@prefix_decorator('TESTING')
def display_info(name, age):
    print("display_info ran with qiguments ({}, {})".format(name, age))
    
display_info('john',25)
display_info('Travis',30)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\Arguments\01b> py.exe .\testprj.py
TESTING Executed Before display_info
display_info ran with qiguments (john, 25)
TESTING Executed After display_info

TESTING Executed Before display_info
display_info ran with qiguments (Travis, 30)
TESTING Executed After display_info
```

### Example 14 Decorators With Arguments
```python
def prefix_decorator(prefix):
    def decorator_function(original_function):
        def wrapper_function(*args, **kwargs):
            print(prefix, "Executed Before", original_function.__name__)
            result = original_function(*args, **kwargs)
            print(prefix, "Executed After", original_function.__name__,"\n")
            return result
        return wrapper_function
    return decorator_function

@prefix_decorator('TESTING')
def display_info(name, age):
    print("display_info ran with arguments ({}, {})".format(name, age))
    
@prefix_decorator('DEBUG')
def add_abc(a, b, c):
    print("add_abc ran with arguments ({}+{}+{}={})".format(a, b, c,a+b+c))

    
display_info('john',25)
display_info('Travis',30)

add_abc(1,2,3)
add_abc(a=1,b=2,c=3)
add_abc(a=3,b=2,c=1)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\Arguments\01c> py.exe .\testprj.py
TESTING Executed Before display_info
display_info ran with arguments (john, 25)
TESTING Executed After display_info

TESTING Executed Before display_info
display_info ran with arguments (Travis, 30)
TESTING Executed After display_info

DEBUG Executed Before add_abc
add_abc ran with arguments (1+2+3=6)
DEBUG Executed After add_abc

DEBUG Executed Before add_abc
add_abc ran with arguments (1+2+3=6)
DEBUG Executed After add_abc

DEBUG Executed Before add_abc
add_abc ran with arguments (3+2+1=6)
DEBUG Executed After add_abc
```

### Example 15 Decorators With Arguments
```python
from functools import wraps

def hello_decorator(num):
    """Simple decorator function that supports parameters"""

    def inner_func(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            """Simple decorator wrapper function"""
            result = func(*args, **kwargs)
            result = result + num
            return result
        return wrapper
    return inner_func


@hello_decorator(100)
def add(a, b):
    """Simple function that returns sum of two numbers"""
    return a + b


@hello_decorator(200)
def multiply(a, b):
    """Simple function that returns multiplication of two numbers"""
    return a * b


if __name__ == '__main__':
    output1 = add(2, 2)
    print('Result:: ', output1)
    print("=" * 25)

    output2 = multiply(4, 2)
    print('Result:: ', output2)
```

output
```
PS D:\work\python_work\ModernPython\codes\decorators\Arguments\02> py.exe .\testprj.py
Result::  104
=========================
Result::  208
```



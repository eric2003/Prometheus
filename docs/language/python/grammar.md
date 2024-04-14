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

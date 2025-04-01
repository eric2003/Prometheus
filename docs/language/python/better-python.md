# Better-Python

## Article link

-  [【Python科学计算三维可视化】北京理工大学](https://www.bilibili.com/video/BV1F7411i74Q/).


## 5 Tips To Write Better Python Functions

-  [5 Tips To Write Better Python Functions](https://www.youtube.com/watch?v=7fSHTqM8gHs).


```python
def get_users() -> dict[int, str]:
    users: dict[int, str] = {1: 'Bob', 2: 'Jef', 3:'Tom'}
    return users
    
def display_users(users: dict[int, str]) -> None:    
    for k, v in users.items():
        print(k, v, sep=': ')
        
def main() -> None:
    users: dict[int, str] = get_users()
    display_users(users)

if __name__ == '__main__':
    main()
```

output
```
PS D:\work\python_work\ModernPython\codes\better-python\type\01b> python .\testprj.py
1: Bob
2: Jef
3: Tom
```

# File

## Python Link
-  [Modern Python系列链接整理](https://zhuanlan.zhihu.com/p/526738563).
-  [用Python做科学计算](https://zhuanlan.zhihu.com/p/620268824).

## CSV File

-  [Working with csv files in Python](https://www.geeksforgeeks.org/working-csv-files-python/).
-  [csv --- CSV 文件读写](https://docs.python.org/zh-cn/3/library/csv.html).
-  [csv --- CSV 文件读写](https://docs.python.org/zh-cn/3/library/csv.html).

## Number of columns in CSV file

```python
import csv

with open('example.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    # 假设文件的第一行是标题行  
    headers = next(reader)  
    # 文件的列数等于标题行的元素个数  
    num_columns = len(headers)  
    print(f'列数: {num_columns}')
```

csv file
```
1/2/2014,5,8,red
1/3/2014,5,2,green
1/4/2014,9,1,blue
```

output:
```
PS D:\work\python_work\ModernPython\codes\csv\columns> py.exe .\testprj.py
列数: 4
```

## print

```python
ni=10
nj=20
print(f'ni={ni},nj={nj}')
```

```
PS D:\work\python_work\ModernPython\codes\print\01> python .\testprj.py
ni=10,nj=20
```




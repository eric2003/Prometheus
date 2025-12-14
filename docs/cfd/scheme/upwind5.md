# Upwind5

## WENO Link

- [OneFLOW-WENO schemes](https://eric2003.github.io/OneFLOW/cfd/scheme/weno.html).
- [Efficient Finite Difference WENO Scheme for Hyperbolic Systems with Non-Conservative Products and Stiff Source Terms](https://www.youtube.com/watch?v=D87ctxheEr0).
- [Prof. Chi-Wang Shu: Mathematics in Scientific Computing](https://www.youtube.com/watch?v=0FdOVvCJJEk).
- [High-Order CFD Solvers on Three-Dimensional Unstructured Meshes: Parallel Implementation of RKDG Method with WENO Limiter and Momentum Sources](https://www.mdpi.com/2226-4310/9/7/372).

## 一维标量方程的 ENO 和 weighted ENO 格式


以下是一个偏微分方程及其初始条件和网格划分的描述：

考虑一维标量守恒律组

$$ u_t + (f(u))_x = 0, \quad x \in (a, b), \quad t > 0  $$

$$ u(x, 0) = u^0(x), \quad x \in [a, b]  $$

设网格剖分为

$$ a = x_{\frac{1}{2}} < x_{\frac{3}{2}} < \cdots < x_{N-\frac{1}{2}} < x_{N+\frac{1}{2}} = b  $$

单元$I_{i}=[x_{i-1/2},x_{i+1/2}]$, 单元中点为 $x_i =(x_{i-1/2} + x_{i+1/2})/2$，步长为 $\Delta x_i=x_{i+1/2}-x_{i+1/2},i=1,2,\cdots,N$。  
定义

$$
\Delta x = \max_{1 \le i \le N} \Delta x_i
$$

如同前面的讨论那样，具体格式构造又有两种不同的观点。其一是积分平均型的格式，或称为有限体积型的方法；另一种是有限差分型的方法。


## 积分平均型格式或者有限体积型格式

将原方程在区间 $I_i$ 上积分，并整理得

$$
\frac{d}{dt} \int_{x_{i-\frac{1}{2}}}^{x_{i+\frac{1}{2}}} u(x,t) dx + f\left(u\left(x_{i+\frac{1}{2}}, t\right)\right) - f\left(u\left(x_{i-\frac{1}{2}}, t\right)\right) = 0.
$$

定义函数 $u(x,t)$ 的单元平均值

$$
\bar{u}_i(t) = \frac{1}{\Delta x_i} \int_{x_{i-\frac{1}{2}}}^{x_{i+\frac{1}{2}}} u(x,t) dx,
$$

则有

$$
\frac{d}{dt} \bar{u}_i + \frac{1}{\Delta x_i} \left[ f\left(u\left(x_{i+\frac{1}{2}}, t\right)\right) - f\left(u\left(x_{i-\frac{1}{2}}, t\right)\right) \right] = 0,
$$

这里由于只有单元平均值已知，所以需要构造函数在单元边界点（半网格节点）上的值 $u_{i-1/2}, i=0,1,\cdots,N$。此时有限体积格式可写为

$$
\frac{d}{dt} \bar{u}_i + \frac{1}{\Delta x_i} \left[f\left(u_{i+\frac{1}{2}}\right) - f\left(u_{i-\frac{1}{2}}\right)\right] = 0.
$$

假定周期边界条件，即假定在计算区域外的数值解是可以得到的（这也适合于具有紧致支集的问题）。对于一致网格剖分 $\Delta x_i = \Delta x$，我们可以如下构造单元节点上的函数值：

## 第二类换元法

设 $f(x)$ 为可积函数，$x = x(g)$ 为连续可导函数，则有：

$$
\int_{\alpha}^{\beta} f(x) \, dx = \int_{x^{-1}(\alpha)}^{x^{-1}(\beta)} f(x(g)) x' \, dg
$$

1. **确定一个模板**

	例如可以取包括三个单元的模板，例如 $S = \{I_{i-1}, I_i, I_{i+1}\}$。
	
	$$
    \begin{array}{l}
    I_{i-1}&=[x_{i-3/2},x_{i-1/2}]\\
    I_{i}&=[x_{i-1/2},x_{i+1/2}]\\
    I_{i+1}&=[x_{i+1/2},x_{i+3/2}]\\
    \end{array}	
	$$

2. **构造多项式**：

	构造一个多项式，设为 $p(x)$，使其满足

	$$
	\frac{1}{\Delta x_j} \int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) dx = \bar{u}_j, \quad j = i - 1, i, i + 1 \tag{8.8}
	$$

	在所选择的模板上成立。上述模板下多项式 $p(x)$ 是唯一确定的不超过二次多项式，设

    $$
	p(x) = \hat{p}(\xi) = a_0 + a_1 \xi + a_2 \xi^2, \quad \xi = \frac{x - x_i}{\Delta x_i}
	$$
	
    对比第二类换元法，设 $f(x)$ 为可积函数，$x = x(g)$ 为连续可导函数，则有：

    $$
    \int_{\alpha}^{\beta} f(x) \, dx = \int_{x^{-1}(\alpha)}^{x^{-1}(\beta)} f(x(g)) x' \, dg
    $$
	
	$$
	\int_{\alpha}^{\beta} f(x) \, dx = \int_{\xi(\alpha)}^{\xi(\beta)} f(x(\xi )) x'(\xi ) \, d\xi 
	$$
	
	这里$f(x)=p(x)$，$x=x_{i}+\xi\Delta{x}_{i}$，$x'(\xi )=\Delta{x}_{i}$，$\alpha=x_{j-\frac{1}{2}}$，$\beta=x_{j+\frac{1}{2}}$
	
	$$
	\int_{\alpha}^{\beta} p(x) \, dx = \int_{\xi(\alpha)}^{\xi(\beta)} p(x(\xi )) x'(\xi ) \, d\xi 
	$$

	$$
	\int_{\alpha}^{\beta} p(x) \, dx = \int_{\xi(\alpha)}^{\xi(\beta)} p(x(\xi )) \Delta{x}_{i} \, d\xi 
	$$
	
	$$
	\cfrac{1}{\Delta{x}_{i}}\int_{\alpha}^{\beta} p(x) \, dx = \int_{\xi(\alpha)}^{\xi(\beta)} p(x(\xi ))  \, d\xi 
	$$
	
	$$
	\cfrac{1}{\Delta{x}_{i}}\int_{\alpha}^{\beta} p(x) \, dx = \int_{\xi(\alpha)}^{\xi(\beta)} \hat{p}(\xi)  \, d\xi 
	$$
	
	$$
	\cfrac{1}{\Delta{x}_{i}}\int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) \, dx = \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi 
	$$
	
	$$
    \Delta{x}_{i}\equiv{x}_{i+\frac{1}{2}}-x_{i-\frac{1}{2}}
    $$
	
	
	$$
    \xi = \cfrac{x - x_i}{\Delta x_i}\\
	$$
	
	$$
	\begin{array}{l}
    \xi(\alpha) =\xi(x_{j-\frac{1}{2}})= \cfrac{x_{j-\frac{1}{2}} - x_i}{\Delta x_i}\\
    \xi(\beta) =\xi(x_{j+\frac{1}{2}})= \cfrac{x_{j+\frac{1}{2}} - x_i}{\Delta x_i}\\
    \end{array}
	$$	
	
	![5points in 1D](images/5points.png "5points in 1D")
	
	$$
	p(x) = \hat{p}(\xi) = a_0 + a_1 \xi + a_2 \xi^2, \quad \xi = \frac{x - x_i}{\Delta x_i}
	$$
	
	$$
	\cfrac{1}{\Delta{x}_{i}}\int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) \, dx 
    = \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi 
    =\overline{v}_{j}
	$$
	
	$$
    \int_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}} \hat{p}(\xi)  \, d\xi 
    =\overline{v}_{j},\quad j=i-2,i-1,i,i+1,i+2
	$$	
	
	$$	
	\begin{align}
	\xi_{j+\frac{1}{2}} & = j-i+\cfrac{1}{2}\\
	\xi_{j-\frac{1}{2}} & = j-i-\cfrac{1}{2}\\
	\end{align}
	$$
	
	$$
	\begin{align}
	\xi_{j+\frac{1}{2}} & = j-i+\cfrac{1}{2}=\{-2+\cfrac{1}{2},-1+\cfrac{1}{2},\cfrac{1}{2},1+\cfrac{1}{2},2+\cfrac{1}{2}\}\\
	\xi_{j-\frac{1}{2}} & = j-i-\cfrac{1}{2}=\{-2-\cfrac{1}{2},-1-\cfrac{1}{2},-\cfrac{1}{2},1-\cfrac{1}{2},2-\cfrac{1}{2}\}\\
	\end{align}
	$$
	
xi.py
```python
from fractions import Fraction

def calxi(j):
    half = Fraction(1,2)
    xia = j - half
    xib = j + half
    return xia, xib

jst = -2
jed = 2

for j in range(jst, jed+1):
    xia, xib = calxi(j)
    #print(f'j={j:>2} xia,b=[{xia},{xib}]')
    print(f'j={j:>2} xia,b=[{str(xia):>4},{str(xib):>4}]')
```

python .\xi.py
```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\01a> python .\xi.py
j=-2 xia,b=[-5/2,-3/2]
j=-1 xia,b=[-3/2,-1/2]
j= 0 xia,b=[-1/2, 1/2]
j= 1 xia,b=[ 1/2, 3/2]
j= 2 xia,b=[ 3/2, 5/2]
```

xi.py
```python
from fractions import Fraction

def calxi(x,j):
    return (x**(j+1))/(j+1)

jst = 0
jed = 4
x = Fraction(1,2)
for j in range(0, jed+1):
    v = calxi(x,j)
    print(f'Intergral[({x})^{j}]={v}')
```

python .\xi.py
```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\02> python .\xi.py
Intergral[(1/2)^0]=1/2
Intergral[(1/2)^1]=1/8
Intergral[(1/2)^2]=1/24
Intergral[(1/2)^3]=1/64
Intergral[(1/2)^4]=1/160
```

$$
\begin{array}{c}
q(\xi)&=&1,&\xi,&\xi^{2},&\xi^{3},&\xi^{4}\\
\int q(\xi)d\xi&= &\xi,&\frac{1}{2}\xi^{2},&\frac{1}{3}\xi^{3},&\frac{1}{4}\xi^{4},&\frac{1}{5}\xi^{5}\\
\end{array}
$$

$$
\begin{array}{c}
q(\xi)&=&1,&\xi,&\xi^{2},&\xi^{3},&\xi^{4}\\
\int_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}}q(\xi)d\xi
&= &\xi\bigg|_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}},
&(\frac{1}{2}\xi^{2})\bigg|_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}},
&(\frac{1}{3}\xi^{3})\bigg|_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}},
&(\frac{1}{4}\xi^{4})\bigg|_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}},
&(\frac{1}{5}\xi^{5})\bigg|_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}}\\
\end{array}
$$

```python
from fractions import Fraction

def integral_xi(x, j):
    return (x ** (j + 1)) / (j + 1)

print(f"{'j':>3}  {'interval':>14}  " + "  ".join(f"i={i:^8}" for i in range(5)))
print("-" * 72)

for j in range(-2, 3):
    xia = Fraction(j) - Fraction(1,2)
    xib = Fraction(j) + Fraction(1,2)
    print(f"{j:>3}  [{xia:>4},{xib:>4}]  ", end="")
    for i in range(5):
        val = integral_xi(xib, i) - integral_xi(xia, i)
        s = "0" if val == 0 else str(val)
        print(f"{s:^11}", end="")
    print()
```

```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\02e> python .\xi.py
  j        interval  i=   0      i=   1      i=   2      i=   3      i=   4
------------------------------------------------------------------------
 -2  [-5/2,-3/2]       1         -2        49/12      -17/2     1441/80
 -1  [-3/2,-1/2]       1         -1        13/12      -5/4      121/80
  0  [-1/2, 1/2]       1          0        1/12         0        1/80
  1  [ 1/2, 3/2]       1          1        13/12       5/4      121/80
  2  [ 3/2, 5/2]       1          2        49/12      17/2      1441/80
```

```
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\02f> python .\xi.py
 j   interval   i=0 i=1  i=2   i=3    i=4
-2 [-5/2, -3/2]  1   -2 49/12 -17/2 1441/80
-1 [-3/2, -1/2]  1   -1 13/12  -5/4  121/80
 0  [-1/2, 1/2]  1    0  1/12     0    1/80
 1   [1/2, 3/2]  1    1 13/12   5/4  121/80
 2   [3/2, 5/2]  1    2 49/12  17/2 1441/80
```

$$
\begin{array}{l}
\hat{p}(\xi) = a_0 + a_1 \xi + a_2 \xi^2\\
\int_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}}p(\xi)d\xi
=\int_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}}(a_0 + a_1 \xi + a_2 \xi^2)d\xi
=\overline{w}_{j}=\overline{v}_{i+j}\\
Sum(p(\xi),j)=\int_{\xi_{j-\frac{1}{2}}}^{\xi_{j+\frac{1}{2}}}p(\xi)d\xi\\
a_0*Sum(1,j) + a_1*Sum(\xi,j) + a_2*Sum(\xi^2,j)=\overline{w}_{j}
\end{array}
$$


$$
{v}^{-}_{i+\frac{1}{2}}=\sum_{l=0}^{k-1}c_{rl}\bar{v}_{i-r+l},\quad
{v}^{+}_{i-\frac{1}{2}}=\sum_{l=0}^{k-1}\tilde c_{rl}\bar{v}_{i-r+l}
$$

$$
\begin{array}{l}
k=3,r=0:-r+l=0,1,2:i,i+1,i+2\\
k=3,r=1:-r+l=-1,0,1:i-1,i,i+1\\
k=3,r=2:-r+l=-2,-1,0:i-2,i-1,i\\
\end{array}
$$

$$
\begin{array}{l}
a_0*Sum(1,-1) + a_1*Sum(\xi,-1) + a_2*Sum(\xi^2,-1)=\overline{w}_{-1}=\overline{v}_{i-1}\\
a_0*Sum(1,0) + a_1*Sum(\xi,0) + a_2*Sum(\xi^2,0)=\overline{w}_{0}=\overline{v}_{i}\\
a_0*Sum(1,1) + a_1*Sum(\xi,1) + a_2*Sum(\xi^2,1)=\overline{w}_{1}=\overline{v}_{i+1}\\
\end{array}
$$

$$
A=\begin{bmatrix}
  Sum(1,-1)& Sum(\xi,-1) & Sum(\xi^2,-1)\\
  Sum(1,0)& Sum(\xi,0) & Sum(\xi^2,0)\\
  Sum(1,1)& Sum(\xi,1) &Sum(\xi^2,1)
\end{bmatrix}
$$

$$
A\begin{bmatrix}
 a_{0}\\a_{1}\\a_{2}
\end{bmatrix}=\begin{bmatrix}
 \overline{w}_{-1}\\\overline{w}_{0}\\\overline{w}_{1}
\end{bmatrix}
=\begin{bmatrix}
 \overline{v}_{i-1}\\\overline{v}_{i}\\\overline{v}_{i+1}
\end{bmatrix}
$$

```python
import numpy as np
from fractions import Fraction

def inverse_matrix(matrix):
    # 将矩阵元素转换为浮点数以计算逆矩阵
    matrix_float = matrix.astype(float)
    inverse = np.linalg.inv(matrix_float)
    # 将逆矩阵元素转换为分数
    inverse_fraction = [[Fraction(inverse[i, j]).limit_denominator() for j in range(len(inverse))] for i in range(len(inverse))]
    return inverse_fraction
    
def print_matrix_fraction(matrix):
    # 将矩阵转换为Fraction数组
    fraction_matrix = np.array([[Fraction(x).limit_denominator() for x in row] for row in matrix])
    
    # 转换为字符串矩阵并计算每列的最大宽度
    str_matrix = []
    rows = len(fraction_matrix)
    cols = len(fraction_matrix[0])
    col_widths = [0] * cols  # 每列的最大宽度
    
    # 将数字转换为字符串，并记录每列最大宽度
    for row in fraction_matrix:
        str_row = []
        for j, f in enumerate(row):
            if f.denominator == 1:
                s = f"{f.numerator}"
            else:
                s = f"{f.numerator}/{f.denominator}"
            str_row.append(s)
            current_length = len(s)
            if current_length > col_widths[j]:
                col_widths[j] = current_length
        str_matrix.append(str_row)
    
    # 打印矩阵，每列等宽右对齐，添加逗号
    #print("Matrix in Fraction Form:")
    for i in range(rows):
        row_elements = []
        for j in range(cols):
            element = str_matrix[i][j]
            # 右对齐，使用该列的最大宽度
            formatted_element = f"{element:>{col_widths[j]}}"
            # 除最后一列外添加逗号和空格
            if j < cols - 1:
                formatted_element += ", "
            else:
                formatted_element += " "
            row_elements.append(formatted_element)
        # 拼接一行并打印
        formatted_row = "".join(row_elements)
        print(f"[ {formatted_row}]")    

def integral_xi(x, j):
    return (x ** (j + 1)) / (j + 1)
    

vv = [-1,0,1]
isize = len(vv)
arrays_list = []
for j in vv:
    xia = Fraction(j) - Fraction(1,2)
    xib = Fraction(j) + Fraction(1,2)
    #print(f"{j:>3}  [{xia:>4},{xib:>4}]  ", end="")
    a_list = []
    for i in range( isize ):
        val = integral_xi(xib, i) - integral_xi(xia, i)
        a_list.append(val)
        s = "0" if val == 0 else str(val)
        #print(f"{s:^11}", end="")
    #print()
    arrays_list.append(a_list)
    
# 使用 vstack 函数将列表中的数组堆叠成一个矩阵
matrix = np.vstack(arrays_list)
print_matrix_fraction(matrix)

# 计算逆矩阵
inverse = inverse_matrix(matrix)
    
print("\nInverse Matrix in Fraction Form:")
print_matrix_fraction(inverse)

# 计算两个矩阵的乘积
product = np.dot(matrix, inverse)

print("\nProduct of Matrix and Inverse Matrix:")
print_matrix_fraction(product)
```

```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\03b> python .\xi.py
[ 1, -1, 13/12 ]
[ 1,  0,  1/12 ]
[ 1,  1, 13/12 ]

Inverse Matrix in Fraction Form:
[ -1/24, 13/12, -1/24 ]
[  -1/2,     0,   1/2 ]
[   1/2,    -1,   1/2 ]

Product of Matrix and Inverse Matrix:
[ 1, 0, 0 ]
[ 0, 1, 0 ]
[ 0, 0, 1 ]
```


$$
A=\begin{bmatrix}
1 & -1 & \frac{13}{12} \\
1 & 0 & \frac{1}{12} \\
1 & 1 & \frac{13}{12} \\
\end{bmatrix}
$$

$$
A^{-1}=\begin{bmatrix}
\frac{-1}{24} & \frac{13}{12} & \frac{-1}{24} \\
\frac{-1}{2} & 0 & \frac{1}{2} \\
\frac{1}{2} & -1 & \frac{1}{2} \\
\end{bmatrix}
$$

$$
\begin{array}{l}
v_{i+1/2}=p(x_{i+1/2})=\hat{p}(\xi|_{\xi=1/2})
=\hat{p}(1/2) = (a_0 + a_1 \xi + a_2 \xi^2)|_{\xi=1/2}\\
v_{i+1/2}=(a_0 + a_1 \xi + a_2 \xi^2)|_{\xi=1/2}\\
\end{array}
$$

$$
v_{i+1/2}=\begin{bmatrix}
 1 & \xi &\xi^{2}
\end{bmatrix}\begin{bmatrix}
a_0 \\a_1\\a_2
\end{bmatrix}
$$

$$
A\begin{bmatrix}
 a_{0}\\a_{1}\\a_{2}
\end{bmatrix}=\begin{bmatrix}
 \overline{w}_{-1}\\\overline{w}_{0}\\\overline{w}_{1}
\end{bmatrix}
=\begin{bmatrix}
 \overline{v}_{i-1}\\\overline{v}_{i}\\\overline{v}_{i+1}
\end{bmatrix}
$$

$$
\begin{bmatrix}
 a_{0}\\a_{1}\\a_{2}
\end{bmatrix}
=A^{-1}\begin{bmatrix}
 \overline{w}_{-1}\\\overline{w}_{0}\\\overline{w}_{1}
\end{bmatrix}
=A^{-1}\begin{bmatrix}
 \overline{v}_{i-1}\\\overline{v}_{i}\\\overline{v}_{i+1}
\end{bmatrix}
$$

$$
\begin{array}{l}
v_{i+1/2}&=\begin{bmatrix}
 1 & \xi &\xi^{2}
\end{bmatrix}\begin{bmatrix}
a_0 \\a_1\\a_2
\end{bmatrix}\\
&=\begin{bmatrix}
 1 & \xi &\xi^{2}
\end{bmatrix}A^{-1}\begin{bmatrix}
 \overline{v}_{i-1}\\\overline{v}_{i}\\\overline{v}_{i+1}
\end{bmatrix}
\end{array}
$$

$$
v^{-}_{i+1/2}=\cfrac{1}{30}\overline{v}_{i-2}- \cfrac{13}{60}\overline{v}_{i-1}+ \cfrac{47}{60}\overline{v}_{i}+ \cfrac{9}{20}\overline{v}_{i+1}- \cfrac{1}{20}\overline{v}_{i+2}\\
$$

$$
\begin{alignat}{3}
  v_{i+1/2}^{-,r=2} &= \phantom{+} \frac{1}{3}\bar{v}_{i-2} && - \frac{7}{6}\bar{v}_{i-1} && + \frac{11}{6}\bar{v}_{i} \\
  v_{i+1/2}^{-,r=1} &= - \frac{1}{6}\bar{v}_{i-1} && + \frac{5}{6}\bar{v}_{i} && + \frac{1}{3}\bar{v}_{i+1} \\
  v_{i+1/2}^{-,r=0} &= \phantom{+} \frac{1}{3}\bar{v}_{i} && + \frac{5}{6}\bar{v}_{i+1} && - \frac{1}{6}\bar{v}_{i+2} \\
\end{alignat}
$$

![left-right-side-reconstrcution-v2 in 1D](images/left-right-side-reconstrcution-v2.png "left-right-side-reconstrcution-v2 in 1D")

```
 r | j=0  j=1  j=2
-1 | 11/6 -7/6  1/3 (i+1,i+2,i+3)
 0 |  1/3  5/6 -1/6 (i  ,i+1,i+2)
 1 | -1/6  5/6  1/3 (i-1,i  ,i+1)
 2 |  1/3 -7/6 11/6 (i-2,i-1,i  )
 r | j=0  j=1  j=2
 2 |  1/3 -7/6 11/6 (i-2,i-1,i  )
 1 | -1/6  5/6  1/3 (i-1,i  ,i+1)
 0 |  1/3  5/6 -1/6 (i  ,i+1,i+2)
-1 | 11/6 -7/6  1/3 (i+1,i+2,i+3) 
```

xi.py
```
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\05> python .\xi.py
[ 1/30, -13/60, 47/60, 9/20, -1/20 ]
[ 1/3, 5/6, -1/6 ]
[ -1/6, 5/6, 1/3 ]
[ 1/3, -7/6, 11/6 ]
```

print_coef_formula
```python
import numpy as np
from fractions import Fraction

def inverse_matrix(matrix):
    # 将矩阵元素转换为浮点数以计算逆矩阵
    matrix_float = matrix.astype(float)
    inverse = np.linalg.inv(matrix_float)
    # 将逆矩阵元素转换为分数
    inverse_fraction = [[Fraction(inverse[i, j]).limit_denominator() for j in range(len(inverse))] for i in range(len(inverse))]
    return inverse_fraction

def print_matrix_fraction(matrix, is_column_vector=False):
    """
    支持一维向量和二维矩阵的分数字符串打印
    :param matrix: 一维列表（向量）或二维列表/数组（矩阵）
    :param is_column_vector: 一维向量是否按列向量格式打印（默认False：行向量）
    """
    # 步骤1：统一转换为二维矩阵格式
    if isinstance(matrix, (list, np.ndarray)):
        # 若为一维，转为二维（行向量：1×N 或 列向量：N×1）
        if np.ndim(matrix) == 1:
            if is_column_vector:
                # 列向量：N行1列
                two_d_matrix = [[x] for x in matrix]
            else:
                # 行向量：1行N列
                two_d_matrix = [matrix]
        else:
            # 若为二维，直接使用
            two_d_matrix = matrix
    else:
        raise TypeError("输入必须是列表或numpy数组")
    
    # 步骤2：转换为Fraction数组
    fraction_matrix = np.array([[Fraction(x).limit_denominator() for x in row] for row in two_d_matrix])
    rows = len(fraction_matrix)
    cols = len(fraction_matrix[0])
    
    # 步骤3：转换为字符串矩阵并计算每列最大宽度
    str_matrix = []
    col_widths = [0] * cols  # 每列的最大宽度
    for row in fraction_matrix:
        str_row = []
        for j, f in enumerate(row):
            #if f.denominator == 1:
            #    s = f"{f.numerator}"
            #else:
            #    s = f"{f.numerator}/{f.denominator}"
            s = f"{f.numerator}/{f.denominator}"
            str_row.append(s)
            current_length = len(s)
            if current_length > col_widths[j]:
                col_widths[j] = current_length
        str_matrix.append(str_row)
    
    # 步骤4：打印（保持原有对齐风格）
    for i in range(rows):
        row_elements = []
        for j in range(cols):
            element = str_matrix[i][j]
            formatted_element = f"{element:>{col_widths[j]}}"  # 右对齐
            if j < cols - 1:
                formatted_element += ", "
            else:
                formatted_element += " "
            row_elements.append(formatted_element)
        formatted_row = "".join(row_elements)
        print(f"[ {formatted_row}]")

def integral_xi(x, j):
    return (x ** (j + 1)) / (j + 1)
    
def compute_coef(x,k):
    y = []
    for j in range(k):
        var = x ** j
        y.append(var)
    return y

def id_tostring(rj):
    mystr = str(rj)
    if rj == 0:
        mystr = '  '
    if rj > 0:
        mystr = '+' + str(rj)
    return mystr   
    
def coef_tostring(coef,i):
    mystr = str(coef)
    if coef >= 0:
        if i == 0:
            mystr = ' ' + mystr
        else:
            mystr = '+' + mystr
    return mystr
    
def coef_toabsstring(coef):
    abs_str = str(abs(coef))
    s = '+'
    if coef < 0:
        s = '-'
    return abs_str, s
    
def print_coef_formula(alist,xfrac,ishift=0):
    rows, cols = alist.shape
    #print(f'rows,cols={rows},{cols}')

    widths = np.empty(rows, dtype=int)

    for j in range(rows):
        w = 0
        for i in range(cols):
            absv,ss = coef_toabsstring(alist[i][j])
            ww = len( absv ) + 1
            w = max(w, ww)
        widths[j] = w
        
    #print(f'widths={widths}')
    
    for i in range(rows):
        mystr = ''
        r = i
        for j in range(cols):
            absv,ss = coef_toabsstring(alist[i][j])
            if j == 0 and ss == '+':
                ss = ' '
            tt = f"{absv:>{widths[j]-1}}"
            rj = ishift - r + j
            var_rj = id_tostring(rj)
            mystr += ss + tt + f"*v[i{var_rj}]"
            sxf = ''
            xfrac_new = xfrac + ishift
            if xfrac_new >= 0:
                sxf='+'
            slr='-'
            if xfrac < 0:
                slr='+'
        #print(f'vi{sxf}{xfrac_new}({slr}),r={r}={mystr}')
        print(f'vi{sxf}{xfrac_new}({slr}),{r}={mystr}')
    print()
        
def calc_coef_formula(kk, xfrac):
    xm = compute_coef(xfrac, kk)
    rows_list = []
    for r in range(kk):
        #-r+l
        arrays_list = []
        for m in range(kk):
            j = -r + m
            xia = Fraction(j) - Fraction(1,2)
            xib = Fraction(j) + Fraction(1,2)
            a_list = []
            for i in range(kk):
                val = integral_xi(xib, i) - integral_xi(xia, i)
                a_list.append(val)
            arrays_list.append(a_list)
        matrix = np.vstack(arrays_list)
        inverse = inverse_matrix(matrix)
        ym = np.dot(xm, inverse)
        rows_list.append(ym)
        
    return np.vstack(rows_list)
        
    
kk=3
xfrac = Fraction(1,2)
xp = compute_coef(Fraction(1,2), kk)
xn = compute_coef(-Fraction(1,2), kk)

mymat1 = calc_coef_formula(kk, xfrac)
mymat2 = calc_coef_formula(kk, -xfrac)

print_matrix_fraction(mymat1)
print_coef_formula(mymat1,xfrac)

print_matrix_fraction(mymat2)
print_coef_formula(mymat2,-xfrac,1)
```

python .\xi.py
```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\06c> python .\xi.py
[  1/3,  5/6, -1/6 ]
[ -1/6,  5/6,  1/3 ]
[  1/3, -7/6, 11/6 ]
vi+1/2(-),0= 1/3*v[i  ]+5/6*v[i+1]- 1/6*v[i+2]
vi+1/2(-),1=-1/6*v[i-1]+5/6*v[i  ]+ 1/3*v[i+1]
vi+1/2(-),2= 1/3*v[i-2]-7/6*v[i-1]+11/6*v[i  ]

[ 11/6, -7/6,  1/3 ]
[  1/3,  5/6, -1/6 ]
[ -1/6,  5/6,  1/3 ]
vi+1/2(+),0= 11/6*v[i+1]-7/6*v[i+2]+1/3*v[i+3]
vi+1/2(+),1=  1/3*v[i  ]+5/6*v[i+1]-1/6*v[i+2]
vi+1/2(+),2=- 1/6*v[i-1]+5/6*v[i  ]+1/3*v[i+1]
```

cal_polynomial_coefficients
```python
import numpy as np
from fractions import Fraction

def inverse_matrix(matrix):
    # 将矩阵元素转换为浮点数以计算逆矩阵
    matrix_float = matrix.astype(float)
    inverse = np.linalg.inv(matrix_float)
    # 将逆矩阵元素转换为分数
    inverse_fraction = [[Fraction(inverse[i, j]).limit_denominator() for j in range(len(inverse))] for i in range(len(inverse))]
    return inverse_fraction

def print_matrix_fraction(matrix, is_column_vector=False):
    """
    支持一维向量和二维矩阵的分数字符串打印
    :param matrix: 一维列表（向量）或二维列表/数组（矩阵）
    :param is_column_vector: 一维向量是否按列向量格式打印（默认False：行向量）
    """
    # 步骤1：统一转换为二维矩阵格式
    if isinstance(matrix, (list, np.ndarray)):
        # 若为一维，转为二维（行向量：1×N 或 列向量：N×1）
        if np.ndim(matrix) == 1:
            if is_column_vector:
                # 列向量：N行1列
                two_d_matrix = [[x] for x in matrix]
            else:
                # 行向量：1行N列
                two_d_matrix = [matrix]
        else:
            # 若为二维，直接使用
            two_d_matrix = matrix
    else:
        raise TypeError("输入必须是列表或numpy数组")
    
    # 步骤2：转换为Fraction数组
    fraction_matrix = np.array([[Fraction(x).limit_denominator() for x in row] for row in two_d_matrix])
    rows = len(fraction_matrix)
    cols = len(fraction_matrix[0])
    
    # 步骤3：转换为字符串矩阵并计算每列最大宽度
    str_matrix = []
    col_widths = [0] * cols  # 每列的最大宽度
    for row in fraction_matrix:
        str_row = []
        for j, f in enumerate(row):
            #if f.denominator == 1:
            #    s = f"{f.numerator}"
            #else:
            #    s = f"{f.numerator}/{f.denominator}"
            s = f"{f.numerator}/{f.denominator}"
            str_row.append(s)
            current_length = len(s)
            if current_length > col_widths[j]:
                col_widths[j] = current_length
        str_matrix.append(str_row)
    
    # 步骤4：打印（保持原有对齐风格）
    for i in range(rows):
        row_elements = []
        for j in range(cols):
            element = str_matrix[i][j]
            formatted_element = f"{element:>{col_widths[j]}}"  # 右对齐
            if j < cols - 1:
                formatted_element += ", "
            else:
                formatted_element += " "
            row_elements.append(formatted_element)
        formatted_row = "".join(row_elements)
        print(f"[ {formatted_row}]")

def integral_xi(x, j):
    return (x ** (j + 1)) / (j + 1)
    
def compute_coef(x,k):
    y = []
    for j in range(k):
        var = x ** j
        y.append(var)
    return y

def id_tostring(rj):
    mystr = str(rj)
    if rj == 0:
        mystr = '  '
    if rj > 0:
        mystr = '+' + str(rj)
    return mystr   
    
def coef_tostring(coef,i):
    mystr = str(coef)
    if coef >= 0:
        if i == 0:
            mystr = ' ' + mystr
        else:
            mystr = '+' + mystr
    return mystr
    
def coef_toabsstring(coef):
    abs_str = str(abs(coef))
    s = '+'
    if coef < 0:
        s = '-'
    return abs_str, s
    
def print_coef_formula(alist,xfrac,ishift=0):
    rows, cols = alist.shape
    #print(f'rows,cols={rows},{cols}')

    widths = np.empty(rows, dtype=int)

    for j in range(rows):
        w = 0
        for i in range(cols):
            absv,ss = coef_toabsstring(alist[i][j])
            ww = len( absv ) + 1
            w = max(w, ww)
        widths[j] = w
        
    #print(f'widths={widths}')
    
    for i in range(rows):
        mystr = ''
        r = i
        for j in range(cols):
            absv,ss = coef_toabsstring(alist[i][j])
            if j == 0 and ss == '+':
                ss = ' '
            tt = f"{absv:>{widths[j]-1}}"
            rj = ishift - r + j
            var_rj = id_tostring(rj)
            mystr += ss + tt + f"*v[i{var_rj}]"
            sxf = ''
            xfrac_new = xfrac + ishift
            if xfrac_new >= 0:
                sxf='+'
            slr='-'
            if xfrac < 0:
                slr='+'
        #print(f'vi{sxf}{xfrac_new}({slr}),r={r}={mystr}')
        print(f'vi{sxf}{xfrac_new}({slr}),{r}={mystr}')
    print()
    
def cal_polynomial_matrix(r, kk):
    arrays_list = []
    for m in range(kk):
        j = -r + m
        xia = Fraction(j) - Fraction(1,2)
        xib = Fraction(j) + Fraction(1,2)
        a_list = []
        for i in range(kk):
            val = integral_xi(xib, i) - integral_xi(xia, i)
            a_list.append(val)
        arrays_list.append(a_list)
    matrix = np.vstack(arrays_list)
    return matrix
    
def cal_polynomial_coefficients(r, kk, xfrac):
    matrix = cal_polynomial_matrix(r, kk)
    inverse = inverse_matrix(matrix)
    xv = compute_coef(xfrac, kk)
    yv = np.dot(xv, inverse)
    return yv
        
def calc_coef_formula(kk, xfrac):
    rows_list = []
    for r in range(kk):
        #-r+l
        ym = cal_polynomial_coefficients(r, kk, xfrac)
        rows_list.append(ym)
        
    return np.vstack(rows_list)
    
# i-2 i-1, i i+1 i+2
# vi+1/2(-),r=sum crl*vi-r+l,l=1,kk-1;
# kk=5
# r=0: -r+l=0,1,2,3,4:i,i+1,i+2,i+3,i+4
# r=1: -r+l=-1,0,1,2,3:i-1,i,i+1,i+2,i+3
# r=2: -r+l=-2,-1,0,1,2:i-2,i-1,i,i+1,i+2
        
    
xfrac = Fraction(1,2)
k5=5
mymat5L = calc_coef_formula(k5, xfrac)
print_matrix_fraction(mymat5L)
print_coef_formula(mymat5L,xfrac)

mymat5R = calc_coef_formula(k5, -xfrac)
print_matrix_fraction(mymat5R)
print_coef_formula(mymat5R,-xfrac)

k3=3
mymat3L = calc_coef_formula(k3, xfrac)
mymat3R = calc_coef_formula(k3, -xfrac)

print_matrix_fraction(mymat3L)
print_coef_formula(mymat3L,xfrac)

print_matrix_fraction(mymat3R)
#print_coef_formula(mymat3R,-xfrac,1)
print_coef_formula(mymat3R,-xfrac)
```

python .\xi.py
```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\07a> python .\xi.py
[   1/5,  77/60, -43/60,   17/60,  -1/20 ]
[ -1/20,   9/20,  47/60,  -13/60,   1/30 ]
[  1/30, -13/60,  47/60,    9/20,  -1/20 ]
[ -1/20,  17/60, -43/60,   77/60,    1/5 ]
[   1/5, -21/20, 137/60, -163/60, 137/60 ]
vi+1/2(-),0=  1/5*v[i  ]+77/60*v[i+1]- 43/60*v[i+2]+ 17/60*v[i+3]-  1/20*v[i+4]
vi+1/2(-),1=-1/20*v[i-1]+ 9/20*v[i  ]+ 47/60*v[i+1]- 13/60*v[i+2]+  1/30*v[i+3]
vi+1/2(-),2= 1/30*v[i-2]-13/60*v[i-1]+ 47/60*v[i  ]+  9/20*v[i+1]-  1/20*v[i+2]
vi+1/2(-),3=-1/20*v[i-3]+17/60*v[i-2]- 43/60*v[i-1]+ 77/60*v[i  ]+   1/5*v[i+1]
vi+1/2(-),4=  1/5*v[i-4]-21/20*v[i-3]+137/60*v[i-2]-163/60*v[i-1]+137/60*v[i  ]

[ 137/60, -163/60, 137/60, -21/20,   1/5 ]
[    1/5,   77/60, -43/60,  17/60, -1/20 ]
[  -1/20,    9/20,  47/60, -13/60,  1/30 ]
[   1/30,  -13/60,  47/60,   9/20, -1/20 ]
[  -1/20,   17/60, -43/60,  77/60,   1/5 ]
vi-1/2(+),0= 137/60*v[i  ]-163/60*v[i+1]+137/60*v[i+2]-21/20*v[i+3]+ 1/5*v[i+4]
vi-1/2(+),1=    1/5*v[i-1]+ 77/60*v[i  ]- 43/60*v[i+1]+17/60*v[i+2]-1/20*v[i+3]
vi-1/2(+),2=-  1/20*v[i-2]+  9/20*v[i-1]+ 47/60*v[i  ]-13/60*v[i+1]+1/30*v[i+2]
vi-1/2(+),3=   1/30*v[i-3]- 13/60*v[i-2]+ 47/60*v[i-1]+ 9/20*v[i  ]-1/20*v[i+1]
vi-1/2(+),4=-  1/20*v[i-4]+ 17/60*v[i-3]- 43/60*v[i-2]+77/60*v[i-1]+ 1/5*v[i  ]

[  1/3,  5/6, -1/6 ]
[ -1/6,  5/6,  1/3 ]
[  1/3, -7/6, 11/6 ]
vi+1/2(-),0= 1/3*v[i  ]+5/6*v[i+1]- 1/6*v[i+2]
vi+1/2(-),1=-1/6*v[i-1]+5/6*v[i  ]+ 1/3*v[i+1]
vi+1/2(-),2= 1/3*v[i-2]-7/6*v[i-1]+11/6*v[i  ]

[ 11/6, -7/6,  1/3 ]
[  1/3,  5/6, -1/6 ]
[ -1/6,  5/6,  1/3 ]
vi-1/2(+),0= 11/6*v[i  ]-7/6*v[i+1]+1/3*v[i+2]
vi-1/2(+),1=  1/3*v[i-1]+5/6*v[i  ]-1/6*v[i+1]
vi-1/2(+),2=- 1/6*v[i-2]+5/6*v[i-1]+1/3*v[i  ]
```

If the function \( v(x) \) is smooth in all of the candidate stencils, there are constants \( d_r \) such that

\[
 \quad v_{i+\frac{1}{2}} = \sum_{r=0}^{k-1} d_r v_{i+\frac{1}{2}}^{(r)} = v(x_{i+\frac{1}{2}}) + O(\Delta x^{2k-1}).
\]

For example, \( d_r \) for \( 1 \leq k \leq 3 \) are given by

\[
\begin{align*}
d_0 &= 1, \quad k = 1; \\
d_0 &= \frac{2}{3}, \, d_1 = \frac{1}{3}, \quad k = 2; \\
d_0 &= \frac{3}{10}, \, d_1 = \frac{3}{5}, \, d_2 = \frac{1}{10}, \quad k = 3.
\end{align*}
\]

\[
\begin{array}{l}
v_{i+\frac{1}{2}} = \displaystyle  \sum_{r=0}^{k-1} d_r v_{i+\frac{1}{2}}^{(r)}\\
v_{i+\frac{1}{2}}^{-} = \displaystyle \sum_{r=0}^{k-1} d_{r}^{-} v_{i+\frac{1}{2}}^{-(r)}\\
v_{i-\frac{1}{2}}^{+} = \displaystyle \sum_{r=0}^{k-1} d_{r}^{+} v_{i+\frac{1}{2}}^{-(r)}\\
\end{array}
\]

\( k=3 \)

\[
v_{i+\frac{1}{2}} = d_{0} v_{i+\frac{1}{2}}^{(0)}+d_{1} v_{i+\frac{1}{2}}^{(1)}+d_{2} v_{i+\frac{1}{2}}^{(2)}\\
\]

\[
\begin{array}{l}
v_{i+\frac{1}{2}} &=& d_{0}(\phantom{+} \frac{1}{3}\bar{v}_{i} && + \frac{5}{6}\bar{v}_{i+1} && - \frac{1}{6}\bar{v}_{i+2} ) \\
&+&d_{1}(- \frac{1}{6}\bar{v}_{i-1} && + \frac{5}{6}\bar{v}_{i} && + \frac{1}{3}\bar{v}_{i+1}) \\
&+&d_{2}( \phantom{+} \frac{1}{3}\bar{v}_{i-2} && - \frac{7}{6}\bar{v}_{i-1} && + \frac{11}{6}\bar{v}_{i} \,\, )\\
\end{array}
\]

对比

\[
v^{-}_{i+1/2}=\cfrac{1}{30}\overline{v}_{i-2}- \cfrac{13}{60}\overline{v}_{i-1}+ \cfrac{47}{60}\overline{v}_{i}+ \cfrac{9}{20}\overline{v}_{i+1}- \cfrac{1}{20}\overline{v}_{i+2}\\
\]

\[
\begin{array}{l}
v_{i+\frac{1}{2}} &=(\frac{1}{3}d_{0}+\frac{5}{6}d_{1}+\frac{11}{6}d_{2})\bar{v}_{i}\\
&+(\frac{5}{6}d_{0}+\frac{1}{3}d_{1})\bar{v}_{i+1}\\
&+(-\frac{1}{6}d_{1}-\frac{7}{6}d_{2})\bar{v}_{i-1}\\
&+(-\frac{1}{6}d_{0})\bar{v}_{i+2}\\
&+(\frac{1}{3}d_{2})\bar{v}_{i-2}\\
\end{array}
\]

\[
\begin{array}{l}
\overline{v}_{i-2}:(\frac{1}{3}d_{2})&=\cfrac{1}{30}\\
\overline{v}_{i+2}:(-\frac{1}{6}d_{0})&=-\cfrac{1}{20}\\
\overline{v}_{i-1}:(-\frac{1}{6}d_{1}-\frac{7}{6}d_{2})&=-\cfrac{13}{60}\\
\overline{v}_{i+1}:(\frac{5}{6}d_{0}+\frac{1}{3}d_{1})&=\cfrac{9}{20}\\
\overline{v}_{i}:(\frac{1}{3}d_{0}+\frac{5}{6}d_{1}+\frac{11}{6}d_{2})&=\cfrac{47}{60}\\
\end{array}
\]

\[
\begin{array}{l}
\overline{v}_{i-2}:(\cfrac{1}{3}d_{2})&=\cfrac{1}{30}\Rightarrow d_{2}=\cfrac{1}{10}\\
\overline{v}_{i+2}:(-\cfrac{1}{6}d_{0})&=-\cfrac{1}{20}\Rightarrow d_{0}=\cfrac{3}{10}\\
\overline{v}_{i-1}:(-\cfrac{1}{6}d_{1}-\cfrac{7}{6}d_{2})&=-\cfrac{13}{60}\\ 
\Rightarrow d_{1}=-6(-\cfrac{13}{60}+\cfrac{7}{6}d_{2})&=-6(-\cfrac{13}{60}+\cfrac{7}{6}\cfrac{1}{10})=\cfrac{6}{10}\\
\overline{v}_{i+1}:(\cfrac{5}{6}d_{0}+\cfrac{1}{3}d_{1})&=\cfrac{9}{20}\\
\Rightarrow d_{1}=3(\cfrac{9}{20}-\cfrac{5}{6}d_{0})&=3(\cfrac{9}{20}-\cfrac{5}{6}\cfrac{3}{10})=\cfrac{6}{10}\\
\overline{v}_{i}:(\cfrac{1}{3}d_{0}+\cfrac{5}{6}d_{1}+\cfrac{11}{6}d_{2})&=\cfrac{47}{60}\\
\Rightarrow d_{1}=\cfrac{6}{5}(\cfrac{47}{60}-\cfrac{1}{3}d_{0}-\cfrac{11}{6}d_{2})
&=\cfrac{6}{5}(\cfrac{47}{60}-\cfrac{1}{3}\cfrac{3}{10}-\cfrac{11}{6}\cfrac{1}{10})=\cfrac{6}{10}\\
\end{array}
\]

\[
d_{0,1,2}={\cfrac{3}{10},\cfrac{6}{10},\cfrac{1}{10}}\\
\]

```
[ -1/20, 9/20, 47/60, -13/60, 1/30 ]
vi-1/2(+),2=-1/20*v[i-2]+9/20*v[i-1]+47/60*v[i  ]-13/60*v[i+1]+1/30*v[i+2]
[ 11/6, -7/6,  1/3 ]
[  1/3,  5/6, -1/6 ]
[ -1/6,  5/6,  1/3 ]
vi-1/2(+),0= 11/6*v[i  ]-7/6*v[i+1]+1/3*v[i+2]
vi-1/2(+),1=  1/3*v[i-1]+5/6*v[i  ]-1/6*v[i+1]
vi-1/2(+),2=- 1/6*v[i-2]+5/6*v[i-1]+1/3*v[i  ]
```

```python
import numpy as np
from fractions import Fraction
from collections import defaultdict

def inverse_matrix(matrix):
    # 将矩阵元素转换为浮点数以计算逆矩阵
    matrix_float = matrix.astype(float)
    inverse = np.linalg.inv(matrix_float)
    # 将逆矩阵元素转换为分数
    inverse_fraction = [[Fraction(inverse[i, j]).limit_denominator() for j in range(len(inverse))] for i in range(len(inverse))]
    return inverse_fraction

def print_matrix_fraction(matrix, is_column_vector=False):
    """
    支持一维向量和二维矩阵的分数字符串打印
    :param matrix: 一维列表（向量）或二维列表/数组（矩阵）
    :param is_column_vector: 一维向量是否按列向量格式打印（默认False：行向量）
    """
    # 步骤1：统一转换为二维矩阵格式
    if isinstance(matrix, (list, np.ndarray)):
        # 若为一维，转为二维（行向量：1×N 或 列向量：N×1）
        if np.ndim(matrix) == 1:
            if is_column_vector:
                # 列向量：N行1列
                two_d_matrix = [[x] for x in matrix]
            else:
                # 行向量：1行N列
                two_d_matrix = [matrix]
        else:
            # 若为二维，直接使用
            two_d_matrix = matrix
    else:
        raise TypeError("输入必须是列表或numpy数组")
    
    # 步骤2：转换为Fraction数组
    fraction_matrix = np.array([[Fraction(x).limit_denominator() for x in row] for row in two_d_matrix])
    rows = len(fraction_matrix)
    cols = len(fraction_matrix[0])
    
    # 步骤3：转换为字符串矩阵并计算每列最大宽度
    str_matrix = []
    col_widths = [0] * cols  # 每列的最大宽度
    for row in fraction_matrix:
        str_row = []
        for j, f in enumerate(row):
            s = f"{f.numerator}/{f.denominator}"
            str_row.append(s)
            current_length = len(s)
            if current_length > col_widths[j]:
                col_widths[j] = current_length
        str_matrix.append(str_row)
    
    # 步骤4：打印（保持原有对齐风格）
    for i in range(rows):
        row_elements = []
        for j in range(cols):
            element = str_matrix[i][j]
            formatted_element = f"{element:>{col_widths[j]}}"  # 右对齐
            if j < cols - 1:
                formatted_element += ", "
            else:
                formatted_element += " "
            row_elements.append(formatted_element)
        formatted_row = "".join(row_elements)
        print(f"[ {formatted_row}]")
    print()

def integral_xi(x, j):
    return (x ** (j + 1)) / (j + 1)
    
def compute_coef(x,k):
    y = []
    for j in range(k):
        var = x ** j
        y.append(var)
    return y

def id_tostring(rj):
    mystr = str(rj)
    if rj == 0:
        mystr = '  '
    if rj > 0:
        mystr = '+' + str(rj)
    return mystr   
    
def coef_tostring(coef,i):
    mystr = str(coef)
    if coef >= 0:
        if i == 0:
            mystr = ' ' + mystr
        else:
            mystr = '+' + mystr
    return mystr
    
def coef_toabsstring(coef):
    abs_str = str(abs(coef))
    s = '+'
    if coef < 0:
        s = '-'
    return abs_str, s
    
def cal_polynomial_matrix(r, kk):
    arrays_list = []
    for m in range(kk):
        j = -r + m
        xia = Fraction(j) - Fraction(1,2)
        xib = Fraction(j) + Fraction(1,2)
        a_list = []
        for i in range(kk):
            val = integral_xi(xib, i) - integral_xi(xia, i)
            a_list.append(val)
        arrays_list.append(a_list)
    matrix = np.vstack(arrays_list)
    return matrix
    
def cal_polynomial_coefficients(r, kk, xfrac):
    matrix = cal_polynomial_matrix(r, kk)
    inverse = inverse_matrix(matrix)
    xv = compute_coef(xfrac, kk)
    yv = np.dot(xv, inverse)
    return yv
        
def calc_coef_formula(kk, xfrac):
    rows_list = []
    for r in range(kk):
        #-r+l
        ym = cal_polynomial_coefficients(r, kk, xfrac)
        rows_list.append(ym)
        
    return np.vstack(rows_list)
    
    
def build_moment_matrix(template_index: int, stencil_width: int) -> np.ndarray:
    r"""
    Build the moment matrix M for a given substencil, where
    
        M @ poly_coeffs = cell_averages
    
    The substencil corresponding to `template_index = r` uses the cells:
    
        $$
        I_{i - r},\ I_{i - r + 1},\ \dots,\ I_{i - r + k - 1}
        $$
    
    with $k = \text{stencil\_width}$. Each cell $I_j$ is the interval $[j - 1/2, j + 1/2]$.

    The matrix entry M[m, i] is the integral of the monomial $\xi^i$ over the m-th cell 
    in the substencil (i.e., over $I_{j_m}$ where $j_m = i - r + m$):

        $$
        M[m, i] = \int_{j_m - 1/2}^{j_m + 1/2} \xi^i \, d\xi
        $$

    Parameters
    ----------
    template_index : int
        Index of the substencil (r = 0, 1, ..., k-1). Larger values shift the stencil left.
    stencil_width : int
        Number of cells in the substencil (k).

    Returns
    -------
    M : np.ndarray of shape (k, k)
        Moment matrix with exact fractional entries.
    """
    rows = []
    for m in range(stencil_width):
        # Spatial index of the m-th cell in the substencil: j = i - r + m
        j = -template_index + m
        left = Fraction(j) - Fraction(1, 2)
        right = Fraction(j) + Fraction(1, 2)
        row = []
        for i in range(stencil_width):
            val = integral_xi(right, i) - integral_xi(left, i)
            row.append(val)
        rows.append(row)
    return np.array(rows, dtype=object)
    
def compute_stencil_coefficients_for_point(
    template_index: int,
    stencil_width: int,
    x_point: Fraction
) -> np.ndarray:    
    r"""
    Compute the reconstruction coefficients for a single substencil used to approximate 
    the point value at `x_point` (e.g., $x = i + 1/2$) from cell averages.

    The substencil corresponding to `template_index = r` (where $r = 0, 1, ..., k-1$)
    uses the following $k = \text{stencil\_width}$ consecutive cells:
    
        $$
        I_{i - r},\ I_{i - r + 1},\ \dots,\ I_{i - r + k - 1}
        $$

    For example, when `stencil_width = 3` and reconstructing $v_{i+1/2}^-$:
        - `template_index = 0` → cells [i,   i+1, i+2]  (rightmost)
        - `template_index = 1` → cells [i-1, i,   i+1]  (middle)
        - `template_index = 2` → cells [i-2, i-1, i  ]  (leftmost)

    The returned coefficients `c[0], c[1], ..., c[k-1]` satisfy:
        $$
        p(x_{\text{point}}) = \sum_{j=0}^{k-1} c[j] \cdot \bar{v}_{i - r + j}
        $$
    where $p(\cdot)$ is the unique polynomial of degree ≤ k−1 that matches the 
    cell averages over the substencil.

    Parameters
    ----------
    template_index : int
        Index of the substencil (0 ≤ template_index < stencil_width).
        Larger values shift the stencil further to the left.
    stencil_width : int
        Number of cells in the substencil (order of accuracy = stencil_width).
    x_point : Fraction
        Relative coordinate where the point value is reconstructed, 
        e.g., Fraction(1, 2) for $i + 1/2$.

    Returns
    -------
    coefficients : np.ndarray of shape (stencil_width,)
        Reconstruction coefficients for the cell averages in the substencil,
        ordered from leftmost to rightmost cell in the stencil.
    """
    
    M = build_moment_matrix(template_index, stencil_width)
    M_inv = inverse_matrix(M)
    monomials = np.array([x_point ** i for i in range(stencil_width)], dtype=object)
    coefficients = monomials @ M_inv
    return coefficients
    
def compute_optimal_reconstruction_stencil(
    stencil_width: int,
    x_point: Fraction
) -> np.ndarray:
    """
    Compute the optimal (high-order) reconstruction stencil centered at cell i,
    using `stencil_width` consecutive cells symmetric around i.

    The stencil covers cells: [i - (k-1)//2, ..., i, ..., i + (k-1)//2]
    and reconstructs the point value at x = i + x_point.

    Example:
        k=5, x_point=1/2 → cells [i-2, i-1, i, i+1, i+2]
        Returns coefficients [c_{-2}, c_{-1}, c_0, c_1, c_2]
    """
    if stencil_width % 2 == 0:
        raise ValueError("Optimal stencil requires odd stencil_width for symmetry.")
    
    r = stencil_width // 2
    
    coefficients = compute_stencil_coefficients_for_point(r, stencil_width, x_point)
    return coefficients

def generate_weno_substencils(stencil_width: int, x_point: Fraction) -> np.ndarray:
    """
    Generate all k = stencil_width substencils for reconstructing a point value at x_point.
    
    The returned matrix has shape (k, k), where:
      - Row r corresponds to the substencil that uses cells:
          [I_{i - r}, I_{i - r + 1}, ..., I_{i - r + k - 1}]
        which is the r-th candidate stencil counting from the RIGHTMOST (r=0) 
        to the LEFTMOST (r=k-1) stencil.
    
    For example, when k=3 and reconstructing v_{i+1/2}^-:
        r=0 → cells [i,   i+1, i+2]  (rightmost)
        r=1 → cells [i-1, i,   i+1]  (middle)
        r=2 → cells [i-2, i-1, i  ]  (leftmost)
    """
    
    stencils = []
    for r in range(stencil_width):
        # r = 0 → rightmost stencil
        # r = stencil_width-1 → leftmost stencil
        
        coef = compute_stencil_coefficients_for_point(r, stencil_width, x_point)
        stencils.append(coef)
    return np.vstack(stencils)
    
def generate_left_stencils(stencil_width: int, offset: Fraction = Fraction(1, 2)):
    """生成左偏模板（用于 vi+1/2）"""
    return generate_weno_substencils(stencil_width, offset)

def generate_right_stencils(stencil_width: int, offset: Fraction = Fraction(1, 2)):
    """生成右偏模板（用于 vi-1/2）"""
    return generate_weno_substencils(stencil_width, -offset)    

def cal_iplus_index(jstart,cols):
    var_rj_list=[]
    for j in range(cols):
        rj = jstart + j
        var_rj = id_tostring(rj)
        var_rj_list.append(var_rj)
    return var_rj_list
    
def format_signed_coef(coef,isFirstElement,width):
    """
    vi+1/2(-),0= 1/3*v[i  ]+5/6*v[i+1]- 1/6*v[i+2]
    vi+1/2(-),1=-1/6*v[i-1]+5/6*v[i  ]+ 1/3*v[i+1]
    vi+1/2(-),2= 1/3*v[i-2]-7/6*v[i-1]+11/6*v[i  ]
    """
    abscoef,sign = coef_toabsstring( coef )
    if isFirstElement and sign == '+':
        sign = ' '
    signed_coef_str = f"{sign}{abscoef:>{width-1}}"
    return signed_coef_str
    
def get_sign_and_abs_str(coef):
    """将系数拆分为符号字符（'+', '-', ' '）和绝对值字符串。"""
    if coef >= 0:
        return '+', str(coef)
    else:
        return '-', str(-coef)    
    
def compute_column_widths(coef_matrix):
    """计算每列系数显示所需的最大宽度（含符号位）"""
    rows, cols = coef_matrix.shape
    widths = np.empty(cols, dtype=int)
    for j in range(cols):
        max_width = 0
        for i in range(rows):
            _, abs_str = get_sign_and_abs_str(coef_matrix[i, j])
            width = len(abs_str) + 1  # +1 for sign or space
            max_width = max(max_width, width)
        widths[j] = max_width
    return widths    

def build_variable_index_string(offset):
    """将偏移量转为 '[i+2]', '[i-1]', '[i  ]' 等字符串"""
    if offset == 0:
        return "[i  ]"
    elif offset > 0:
        return f"[i+{offset}]"
    else:
        return f"[i{offset}]"  # offset already includes minus, e.g., -2 → [i-2]
        
def build_variable_indices(start_offset, num_cols):
    """生成每列对应的变量索引字符串列表"""
    return [build_variable_index_string(start_offset + j) for j in range(num_cols)]
    
def build_lhs_label(x_frac: Fraction, shift: int = 0) -> str:
    # 1. 计算总偏移 = shift + x_frac
    total_offset = shift + x_frac

    # 2. 格式化总偏移字符串（带符号）
    if total_offset >= 0:
        offset_str = f"+{total_offset}"  # e.g., +1/2, +3/2
    else:
        offset_str = f"{total_offset}"   # e.g., -1/2（Fraction 会自动带负号）

    # 3. 确定方向标志：由原始 x_frac 的符号决定（非 total_offset！）
    direction = '-' if x_frac >= 0 else '+'

    # 4. 拼接
    return f"vi{offset_str}({direction})"
    
def format_stencil_row(row, jstart, cols, widths):
    terms = []
    ioffset_strs = build_variable_indices(jstart, cols)
    
    for j in range(cols):
        term_str = format_signed_coef(row[j],j==0,widths[j])
        terms.append(f"{term_str}*v{ioffset_strs[j]}")
        
    rhs_label = ''.join(terms)
    return rhs_label   

def print_stencil_formula(coef_matrix,xfrac,ishift=0,base_row=0):
    rows, cols = coef_matrix.shape
    widths = compute_column_widths(coef_matrix)
    
    lhs_label = build_lhs_label(xfrac, ishift)
    
    for i in range(rows):
        r = base_row if rows == 1 else i
        row = coef_matrix[i]
        jstart = ishift - r
        rhs_label = format_stencil_row(row, jstart, cols, widths)
        print(f'{lhs_label},{r}={rhs_label}')
        
    print()
    
def build_substencil_offset_map(sub_stencils):
    """为每个空间偏移 k，记录 (模板索引 r, 系数)"""
    rows, cols = sub_stencils.shape
    offset_map = defaultdict(list)
    for r in range(rows):
        for j in range(cols):
            k = j - r  # spatial offset: v[i + k]
            coef = sub_stencils[r, j]
            offset_map[k].append((r, coef))
    return offset_map
    
def build_target_offset_map(target_row):
    """
    target_row: 1D array like [1/30, -13/60, 47/60, 9/20, -1/20]
    assumes it corresponds to offsets [-2, -1, 0, 1, 2]
    """
    n = len(target_row)
    base_offset = - (n//2)
    offsets = list(range(base_offset, base_offset + n))  # [-2,-1,0,1,2]
    return {k: target_row[i] for i, k in enumerate(offsets)}  
    
def build_linear_system(sub_stencils, target_offset_map):
    """
    Build A x = b for WENO weights.
    
    Returns:
        A: np.ndarray of shape (num_equations, num_templates)
        b: np.ndarray of shape (num_equations,)
        offsets: list of spatial offsets (for labeling)
    """
    sub_offset_map = build_substencil_offset_map(sub_stencils)
    num_templates = sub_stencils.shape[0]
    
    # Get all spatial offsets that appear in target
    offsets = sorted(target_offset_map.keys())
    
    A = []
    b = []
    
    for k in offsets:
        row = [Fraction(0) for _ in range(num_templates)]
        for r, coef in sub_offset_map.get(k, []):
            row[r] = coef
        A.append(row)
        b.append(target_offset_map[k])
    
    # Convert to float for numpy (or keep as Fraction for exact solve)
    A_float = np.array([[float(x) for x in row] for row in A])
    b_float = np.array([float(x) for x in b])
    
    return A_float, b_float, offsets

def solve_weno_weights(sub_stencils, target_offset_map):
    A, b, offsets = build_linear_system(sub_stencils, target_offset_map)
    # Solve Ax = b in least-squares sense
    x, residuals, rank, s = np.linalg.lstsq(A, b, rcond=None)
    
    print("Solved WENO weights:")
    for i, wi in enumerate(x):
        print(f"d[{i}] = {wi:.6f} ≈ {Fraction(wi).limit_denominator(100)}")
    
    # Verify residual
    if len(residuals) > 0:
        print(f"Residual norm: {np.sqrt(residuals[0]):.2e}")
    else:
        # Exact solution (rank-deficient or square)
        residual = np.linalg.norm(A @ x - b)
        print(f"Residual norm: {residual:.2e}")
    
    return x

def print_weno_equations(sub_stencils, target_dict):
    offset_map = build_substencil_offset_map(sub_stencils)
    all_offsets = sorted(target_dict.keys())
    
    rows, cols = sub_stencils.shape
    
    weights = ", ".join(f"d[{i}]" for i in range(rows))
    print(f"WENO linear system (for weights {weights}):\n")
    
    for k in all_offsets:
        terms = []
        for r, coef in offset_map.get(k, []):
            terms.append(f"d[{r}] * ({coef})")
        
        lhs = " + ".join(terms) if terms else "0"
        rhs = target_dict[k]
        print(f"v[i{k:+}] : {lhs} = {rhs}")
    print()
    
def compute_weno_linear_weights(row_matrix, mymat):
    sub_stencils = mymat
    
    # Build target map
    target_dict = build_target_offset_map(row_matrix)
    print_weno_equations(sub_stencils, target_dict)
    
    # Solve
    weights = solve_weno_weights(mymat, target_dict)
    
def compute_weno_linear_weights_new(order):
    xfrac = Fraction(1,2)

    k = order
    kh = 2*k - 1
    
    mymatL = generate_left_stencils(k)
    row_matL = compute_optimal_reconstruction_stencil(kh, xfrac)
    compute_weno_linear_weights(row_matL, mymatL)
    
    mymatR = generate_right_stencils(k)
    row_matR = compute_optimal_reconstruction_stencil(kh, -xfrac)
    compute_weno_linear_weights(row_matR, mymatR)
    
def solve_weno_linear_weights(optimal_stencil: np.ndarray, sub_stencils: np.ndarray) -> np.ndarray:
    """
    Solve for linear weights d such that:
        optimal_stencil ≈ sum_j d[j] * sub_stencils[j]
    
    Prints the linear system and solved weights.
    """
   
    # Build target map
    target_dict = build_target_offset_map(optimal_stencil)
    print_weno_equations(sub_stencils, target_dict)
    
    # Solve
    weights = solve_weno_weights(sub_stencils, target_dict)    
    return weights    
    
def demo_weno_linear_weights(weno_r: int):
    """
    Demonstrate linear weight computation for WENO-r scheme.
    
    Parameters:
        weno_r (int): Number of substencils (e.g., 3 for WENO5, 2 for WENO3)
    """
    x_half = Fraction(1, 2)
    global_stencil_width = 2 * weno_r - 1  # e.g., 5 for WENO3

    # Left-biased (v_{i+1/2}^-)
    substencils_L = generate_weno_substencils(stencil_width=weno_r, x_point=x_half)
    optimal_L = compute_optimal_reconstruction_stencil(
        stencil_width=global_stencil_width, x_point=x_half
    )
    weights_L = solve_weno_linear_weights(optimal_L, substencils_L)

    # Right-biased (v_{i-1/2}^+)
    substencils_R = generate_weno_substencils(stencil_width=weno_r, x_point=-x_half)
    optimal_R = compute_optimal_reconstruction_stencil(
        stencil_width=global_stencil_width, x_point=-x_half
    )
    weights_R = solve_weno_linear_weights(optimal_R, substencils_R)

    return weights_L, weights_R
    
if __name__ == "__main__":
    maxk = 3
    for k in range(1,maxk+1):
        print(f"\n=== WENO{2*k-1} ===")
        demo_weno_linear_weights(weno_r=k)
```

python .\xi.py
```powershell
PS D:\github\OneFLOW\example\figure\1d\interplate\xi\09b> python .\xi.py

=== WENO1 ===
WENO linear system (for weights d[0]):

v[i+0] : d[0] * (1) = 1

Solved WENO weights:
d[0] = 1.000000 ≈ 1
Residual norm: 0.00e+00
WENO linear system (for weights d[0]):

v[i+0] : d[0] * (1) = 1

Solved WENO weights:
d[0] = 1.000000 ≈ 1
Residual norm: 0.00e+00

=== WENO3 ===
WENO linear system (for weights d[0], d[1]):

v[i-1] : d[1] * (-1/2) = -1/6
v[i+0] : d[0] * (1/2) + d[1] * (3/2) = 5/6
v[i+1] : d[0] * (1/2) = 1/3

Solved WENO weights:
d[0] = 0.666667 ≈ 2/3
d[1] = 0.333333 ≈ 1/3
Residual norm: 0.00e+00
WENO linear system (for weights d[0], d[1]):

v[i-1] : d[1] * (1/2) = 1/3
v[i+0] : d[0] * (3/2) + d[1] * (1/2) = 5/6
v[i+1] : d[0] * (-1/2) = -1/6

Solved WENO weights:
d[0] = 0.333333 ≈ 1/3
d[1] = 0.666667 ≈ 2/3
Residual norm: 8.33e-17

=== WENO5 ===
WENO linear system (for weights d[0], d[1], d[2]):

v[i-2] : d[2] * (1/3) = 1/30
v[i-1] : d[1] * (-1/6) + d[2] * (-7/6) = -13/60
v[i+0] : d[0] * (1/3) + d[1] * (5/6) + d[2] * (11/6) = 47/60
v[i+1] : d[0] * (5/6) + d[1] * (1/3) = 9/20
v[i+2] : d[0] * (-1/6) = -1/20

Solved WENO weights:
d[0] = 0.300000 ≈ 3/10
d[1] = 0.600000 ≈ 3/5
d[2] = 0.100000 ≈ 1/10
Residual norm: 1.62e-16
WENO linear system (for weights d[0], d[1], d[2]):

v[i-2] : d[2] * (-1/6) = -1/20
v[i-1] : d[1] * (1/3) + d[2] * (5/6) = 9/20
v[i+0] : d[0] * (11/6) + d[1] * (5/6) + d[2] * (1/3) = 47/60
v[i+1] : d[0] * (-7/6) + d[1] * (-1/6) = -13/60
v[i+2] : d[0] * (1/3) = 1/30

Solved WENO weights:
d[0] = 0.100000 ≈ 1/10
d[1] = 0.600000 ≈ 3/5
d[2] = 0.300000 ≈ 3/10
Residual norm: 2.78e-17
```


# 五点模板上的五阶迎风插值公式（五阶精度）

五点模板上的五阶迎风插值（也称为五阶迎风偏置插值，或 WENO-5 的最优线性权重形式）是计算流体力学高阶 Godunov 类格式中常用的界面值重建方法。在光滑区域可达到五阶精度（局部截断误差 O(h⁵)），模板为 {i-2, i-1, i, i+1, i+2}。

## 1. 公式（正、负两个方向）

假设均匀网格，网格间距 h = Δx，网格点（或单元平均）值为 vᵢ。

### 正向（a > 0，流从左向右，左偏迎风）
界面 i + 1/2 处的左侧值（左状态）：

$$ v_{i+1/2}^{L} = \frac{1}{60} \left( 2v_{i-2} - 13v_{i-1} + 47v_{i} + 27v_{i+1} - 3v_{i+2} \right) $$

### 反向（a < 0，流从右向左，右偏迎风）
界面 i + 1/2 处的右侧值（右状态）：

$$ v_{i+1/2}^{R} = \frac{1}{60} \left( -3v_{i-1} + 27v_{i} + 47v_{i+1} - 13v_{i+2} + 2v_{i+3} \right) $$

实际使用时根据界面波速符号选择：

$$ v_{i+1/2} = \begin{cases} 
v_{i+1/2}^{L} & \text{if } a_{i+1/2} \geqslant 0 \\
v_{i+1/2}^{R} & \text{if } a_{i+1/2} < 0 
\end{cases} $$

对线性对流方程 \(\cfrac{\partial{u}}{\partial t} + a \cfrac{\partial{u}}{\partial x}  = 0\)，数值通量可取 F_{i+1/2} = a v_{i+1/2}。

## 2. 详细推导（以正向为例）

目标：在点 x = xᵢ + 0.5Δx 处用五个点 v_{i-2}∼v_{i+2} 构造五阶精度插值。

令 Δx = 1（不失一般性），求系数 a, b, c, d, e 使得

$$ a v_{i-2} + b v_{i-1} + c v_i + d v_{i+1} + e v_{i+2} = v(x_i + 0.5) + O(\Delta x^5) $$

将 v_{i+k} 在 xᵢ 处泰勒展开并代入，要求 0∼4 阶导数系数精确匹配：

$$
\begin{cases}
a + b + c + d + e = 1 \\[6pt]
-2a - b + 0c + d + 2e = 0.5 \\[6pt]
4a + b + 0c + d + 4e = 0.25 \\[6pt]
-8a - b + 0c + d + 8e = 0.125 \\[6pt]
16a + b + 0c + d + 16e = 0.0625
\end{cases}
$$

解得：

$$ a = \frac{2}{60},\; b = -\frac{13}{60},\; c = \frac{47}{60},\; d = \frac{27}{60},\; e = -\frac{3}{60} $$

即得到正向公式。反向公式只需把网格“翻转”（所有下标整体加 1 并取负波速）或直接对称推导。

## 3. 为什么叫“迎风偏置”（Upwind-biased）

- 模板虽然包含两个下风向点（i+1, i+2），但权重明显偏向迎风侧（左侧）：

$$
\begin{cases}
  |vᵢ| + |v_{i-1}| + |v_{i-2}| = 47+13+2 = 62  \\
  |v_{i+1}| + |v_{i+2}| = 27+3 = 30
\end{cases}  
$$

- 在经典五阶 WENO（Jiang-Shu 1996）正是用这组系数作为三个三阶子模板的最优线性权重 γ = (0.1, 0.6, 0.3)。

在光滑区使用线性权重得到五阶精度；在间断附近直接使用线性形式会产生振荡，故实际多采用 WENO 非线性权重。

## 4. 精度验证（简易方法）

对任意 ≤4 次多项式，该公式在界面 1/2 处给出**精确值**（无误差）。  
只有 ≥5 次多项式才会出现 O(Δx⁵) 误差，从而证明五阶精度。

例如取 f(x) = x⁴，在 xᵢ = 0，Δx = 1，真实 f(0.5) = 0.0625  
公式计算结果也为 0.0625（可自行代入验证 0∼4 阶全匹配）。
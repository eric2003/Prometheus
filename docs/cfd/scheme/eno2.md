# ENO2

## ENO2 Link

- [WENO schemes](https://eric2003.github.io/OneFLOW/cfd/scheme/weno.html).
- [Efficient Finite Difference WENO Scheme for Hyperbolic Systems with Non-Conservative Products and Stiff Source Terms](https://www.youtube.com/watch?v=D87ctxheEr0).
- [Prof. Chi-Wang Shu: Mathematics in Scientific Computing](https://www.youtube.com/watch?v=0FdOVvCJJEk).
- [《Applied Numerical Methods for PDEs》第八章 双曲型方程的数值方法(23)](https://zhuanlan.zhihu.com/p/1892889167643510677).
- [Applied-Numerical-Methods](https://github.com/Kaos599/Applied-Numerical-Methods).

## Code

- [Computer Codes for Applied Numerical Methods for PDEs by Carl L. Gardner](https://github.com/carl-parsec/codes4book).


## 一维标量方程的 ENO 和 weighted ENO 格式


以下是一个偏微分方程及其初始条件和网格划分的描述：

考虑一维标量守恒律组

$$ u_t + (f(u))_x = 0, \quad x \in (a, b), \quad t > 0 \tag{8.1} $$

$$ u(x, 0) = u^0(x), \quad x \in [a, b] \tag{8.2} $$

设网格剖分为

$$ a = x_{\frac{1}{2}} < x_{\frac{3}{2}} < \cdots < x_{N-\frac{1}{2}} < x_{N+\frac{1}{2}} = b \tag{8.3} $$

单元$I_{i}=[x_{i-1/2},x_{i+1/2}]$, 单元中点为 $x_i =(x_{i-1/2} + x_{i+1/2})/2$，步长为 $\Delta x_i=x_{i+1/2}-x_{i+1/2},i=1,2,\cdots,N$。  
定义

$$
\Delta x = \max_{1 \le i \le N} \Delta x_i
$$

如同前面针对 TVD 方法的讨论那样，ENO 或者 weighted ENO 方法的具体构造又有两种不同的观点。其一是积分平均型的格式，或称为有限体积型的 ENO 方法；另一种是有限差分型的 ENO 方法。


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
    ```cpp
    
        i-r   ...   i-2   i-1   i   i+1   i+2   ...   i+s
       | *  | ... |  *  |  *  | * |  *  |  *  | ...  | *  |
    ```

    ![si in 1D](images/si.png "si in 1D")	

	例如可以取包括两个单元的模板，例如 $S = \{I_{i-1}, I_{i}\}$。
	
	$$
    \begin{array}{l}
    I_{i-1}&=[x_{i-3/2},x_{i-1/2}]\\
    I_{i}&=[x_{i-1/2},x_{i+1/2}]\\
    \end{array}	
	$$

2. **构造多项式**：

	构造一个多项式，设为 $p(x)$，使其满足

	$$
	\frac{1}{\Delta x_j} \int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) dx = \bar{u}_j, \quad j = i - 1, i
	$$

	在所选择的模板上成立。上述模板下多项式 $p(x)$ 是唯一确定的不超过二次多项式，设

    $$
	p(x) = \hat{p}(\xi) = a_0 + a_1 \xi, \quad \xi = \frac{x - x_i}{\Delta x_i}
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
	\begin{array}{l}
    \xi = \cfrac{x - x_i}{\Delta x_i}\\
    \xi(\alpha) =\xi(x_{j-\frac{1}{2}})= \cfrac{x_{j-\frac{1}{2}} - x_i}{\Delta x_i}\\
    \xi(\beta) =\xi(x_{j+\frac{1}{2}})= \cfrac{x_{j+\frac{1}{2}} - x_i}{\Delta x_i}\\
    \end{array}
	$$
	
	$$
    \begin{array}{l}
    j=i-1\\
    \xi(x_{i-\frac{3}{2}})= \cfrac{x_{i-\frac{3}{2}} - x_i}{\Delta x_i}\\
    \xi(x_{i-\frac{1}{2}})= \cfrac{x_{i-\frac{1}{2}} - x_i}{\Delta x_i}\\
    j=i\\
    \xi(x_{i-\frac{1}{2}})= \cfrac{x_{i-\frac{1}{2}} - x_i}{\Delta x_i}\\
    \xi(x_{i+\frac{1}{2}})= \cfrac{x_{i+\frac{1}{2}} - x_i}{\Delta x_i}\\
    \end{array}	
	$$
	
	$$
    \begin{array}{c}
    x_{i-\frac{3}{2}} = x_i-\frac{3}{2}\Delta{x}\\
    x_{i-\frac{1}{2}} = x_i-\frac{1}{2}\Delta{x}\\
    x_{i+\frac{1}{2}} = x_i+\frac{1}{2}\Delta{x}\\
    x_{i+\frac{3}{2}} = x_i+\frac{3}{2}\Delta{x}\\
    \end{array}
	$$
	
	$$
    \begin{array}{l}
    \xi(x_{i-\frac{3}{2}})=-\frac{3}{2}\\
    \xi(x_{i-\frac{1}{2}})=-\frac{1}{2}\\
    \xi(x_{i+\frac{1}{2}})=\frac{1}{2}\\
    \xi(x_{i+\frac{3}{2}})=\frac{3}{2}\\
    \end{array}	
	$$
	
	$$
	\int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi= 
    \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} (a_0 + a_1 \xi)  \, d\xi\\
	$$
	
	$$
	\int_{\xi(\alpha)}^{\xi(\beta)} (a_0 + a_1 \xi)  \, d\xi=
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(\alpha)}^{\xi(\beta)}\\
	$$
	
	$$
	(a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})}=\bar{u}_{j}
	$$
	
	$$
    \begin{array}{l}
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{i-\frac{3}{2}})}^{\xi(x_{i-\frac{1}{2}})}=\bar{u}_{i-1}\\
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{i-\frac{1}{2}})}^{\xi(x_{i+\frac{1}{2}})}=\bar{u}_{i}\\
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{-\frac{3}{2}}^{-\frac{1}{2}}=\bar{u}_{i-1}\\
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{-\frac{1}{2}}^{+\frac{1}{2}}=\bar{u}_{i}\\
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    \xi^{2}\bigg|_{-\frac{3}{2}}^{-\frac{1}{2}}=(-\frac{1}{2})^{2}-(-\frac{3}{2})^{2}=-2\\
    \xi^{2}\bigg|_{-\frac{1}{2}}^{+\frac{1}{2}}=(+\frac{1}{2})^{2}-(-\frac{1}{2})^{2}=0\\
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    a_0-a_1=\bar{u}_{i-1}\\
    a_0+0a_1=\bar{u}_{i}\\
	\end{array}	
	$$
	
	$$
    A=\begin{bmatrix}
      1&  -1 \\
      1&  0\\
    \end{bmatrix}	
	$$
	
	$$
    A\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     \bar{u}_{i-1}\\ \bar{u}_{i}\\ 
    \end{bmatrix}	
	$$
	
	$$
    \begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=A^{-1}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=A^{-1}\begin{bmatrix}
     \bar{u}_{i-1}\\ \bar{u}_{i}\\
    \end{bmatrix}	
	$$
	
	$$
	A^{-1}= \begin{bmatrix}
    0 & 1 \\
    -1 & 1
    \end{bmatrix}
	$$
	
	$$
    \begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
    0 & 1 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\begin{bmatrix}
    0 & 1 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     \bar{u}_{i-1}\\ \bar{u}_{i}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{array}{l}
    a_{0}=0b_{0}+1b_{1}\\
    a_{1}=-1b_{0}+1b_{1}\\
	\end{array}
	$$
	
	$$
    \begin{array}{l}
    a_{0}=0\bar{u}_{i-1}+1\bar{u}_{i}\\
    a_{1}=-1\bar{u}_{i-1}+1\bar{u}_{i}\\
    \end{array}
	$$	
	
	$$
    \begin{array}{l}
    p(x)=\hat{p}(\xi)=a_0+a_1\xi\\
    u_{i+1/2}=p(x_{i+1/2})=\hat{p}(\xi=1/2)=(a_0+a_1\xi)\bigg|_{\xi=1/2}\\
	u_{i+1/2}=a_0+\frac{1}{2}a_1\\
    \end{array}
	$$
	
	$$
    u_{i+1/2}=a_0+\frac{1}{2}a_1=\begin{bmatrix}
     1& \frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{bmatrix}
     1& \frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     1& \frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
    0 & 1 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}	
	$$
	
	$$
    C=\begin{bmatrix}
     1& \frac{1}{2}
    \end{bmatrix}\begin{bmatrix}
    0 & 1 \\
    -1 & 1
    \end{bmatrix}
	$$	
	
	$$
	C = \left[\begin{array}{c}
	-\frac{1}{2} & \frac{3}{2}
	\end{array}\right]
	$$
	
	$$
    u_{i+1/2}=C\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\left[\begin{array}{c}
    	-\frac{1}{2} & \frac{3}{2}
    	\end{array}\right]\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}	
	$$
	
	$$
	u_{i+1/2}=-\frac{1}{2}b_{0}+\frac{3}{2}b_{1}
	$$
	
	$$
	u_{i+1/2}=-\frac{1}{2}\bar{u}_{i-1}+\frac{3}{2}\bar{u}_{i}
	$$	
	
    ```cpp
    
        i-r   ...   i-2   i-1   i   i+1   i+2   ...   i+s
       | *  | ... |  *  |  *  | * |  *  |  *  | ...  | *  |
    ```

    ![si in 1D](images/si.png "si in 1D")	
	
	
	再取包括两个单元的模板，$S = \{I_{i},I_{i+1}\}$。

	$$
	\cfrac{1}{\Delta{x}_{i}}\int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) \, dx = \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi 
	$$
	
	$$
    \Delta{x}_{i}\equiv{x}_{i+\frac{1}{2}}-x_{i-\frac{1}{2}}=\Delta{x}
    $$
	
	$$
	\begin{array}{l}
    \xi = \cfrac{x - x_i}{\Delta x}\\
    \xi(\alpha) =\xi(x_{j-\frac{1}{2}})= \cfrac{x_{j-\frac{1}{2}} - x_i}{\Delta x}\\
    \xi(\beta) =\xi(x_{j+\frac{1}{2}})= \cfrac{x_{j+\frac{1}{2}} - x_i}{\Delta x}\\
    \end{array}
	$$
	
	$$
    \begin{array}{l}
    j=i\\
    \xi(x_{i-\frac{1}{2}})= \cfrac{x_{i-\frac{1}{2}} - x_i}{\Delta x}\\
    \xi(x_{i+\frac{1}{2}})= \cfrac{x_{i+\frac{1}{2}} - x_i}{\Delta x}\\
    j=i+1\\
    \xi(x_{i+\frac{1}{2}})= \cfrac{x_{i+\frac{1}{2}} - x_i}{\Delta x}\\
    \xi(x_{i+\frac{3}{2}})= \cfrac{x_{i+\frac{3}{2}} - x_i}{\Delta x}\\	
    \end{array}	
	$$
	
	$$
    \begin{array}{c}
    x_{i-\frac{1}{2}} = x_i-\frac{1}{2}\Delta{x}\\
    x_{i+\frac{1}{2}} = x_i+\frac{1}{2}\Delta{x}\\
    x_{i+\frac{3}{2}} = x_i+\frac{3}{2}\Delta{x}\\
    \end{array}
	$$
	
	$$
    \begin{array}{l}
    \xi(x_{i-\frac{1}{2}})=-\frac{1}{2}\\
    \xi(x_{i+\frac{1}{2}})=\frac{1}{2}\\
    \xi(x_{i+\frac{3}{2}})=\frac{3}{2}\\
    \end{array}	
	$$
	
	$$
	\int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi= 
    \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} (a_0 + a_1 \xi)  \, d\xi\\
	$$
	
	$$
	\int_{\xi(\alpha)}^{\xi(\beta)} (a_0 + a_1 \xi)  \, d\xi=
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(\alpha)}^{\xi(\beta)}\\
	$$
	
	$$
	(a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})}=\bar{u}_{j}
	$$
	
	$$
    \begin{array}{l}
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{i-\frac{1}{2}})}^{\xi(x_{i+\frac{1}{2}})}=\bar{u}_{i}\\
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{i+\frac{1}{2}})}^{\xi(x_{i+\frac{3}{2}})}=\bar{u}_{i+1}\\	
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{-\frac{1}{2}}^{+\frac{1}{2}}=\bar{u}_{i}\\
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{+\frac{1}{2}}^{+\frac{3}{2}}=\bar{u}_{i+1}\\	
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    \xi^{2}\bigg|_{-\frac{1}{2}}^{+\frac{1}{2}}=(+\frac{1}{2})^{2}-(-\frac{1}{2})^{2}=0\\
    \xi^{2}\bigg|_{+\frac{1}{2}}^{+\frac{3}{2}}=(+\frac{3}{2})^{2}-(+\frac{1}{2})^{2}=2\\	
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    a_0+0a_1=\bar{u}_{i}\\
    a_0+1a_1=\bar{u}_{i+1}\\
	\end{array}	
	$$
	
	$$
    A=\begin{bmatrix}
      1&  0\\
      1&  1\\
    \end{bmatrix}	
	$$
	
	$$
    A\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     \bar{u}_{i}\\ \bar{u}_{i+1}\\ 
    \end{bmatrix}	
	$$
	
	$$
    \begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=A^{-1}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=A^{-1}\begin{bmatrix}
     \bar{u}_{i}\\ \bar{u}_{i+1}\\
    \end{bmatrix}	
	$$
	
	$$
	A^{-1}= \begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}
	$$
	
	$$
    \begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     \bar{u}_{i}\\ \bar{u}_{i+1}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{array}{l}
    a_{0}=1b_{0}+0b_{1}\\
    a_{1}=-1b_{0}+1b_{1}\\
	\end{array}
	$$
	
	$$
    \begin{array}{l}
    a_{0}=1\bar{u}_{i}+0\bar{u}_{i+1}\\
    a_{1}=-1\bar{u}_{i}+1\bar{u}_{i+1}\\
    \end{array}
	$$	
	
	$$
    \begin{array}{l}
    p(x)=\hat{p}(\xi)=a_0+a_1\xi\\
    u_{i+1/2}=p(x_{i+1/2})=\hat{p}(\xi=1/2)=(a_0+a_1\xi)\bigg|_{\xi=1/2}\\
	u_{i+1/2}=a_0+\frac{1}{2}a_1\\
    \end{array}
	$$
	
	$$
    u_{i+1/2}=a_0+\frac{1}{2}a_1=\begin{bmatrix}
     1& \frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{bmatrix}
     1& \frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     1& \frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}	
	$$
	
	$$
    C=\begin{bmatrix}
     1& \frac{1}{2}
    \end{bmatrix}\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}
	$$	
	
	$$
	C = \left[\begin{array}{c}
	\frac{1}{2} & \frac{1}{2}
	\end{array}\right]
	$$
	
	$$
    u_{i+1/2}=C\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\left[\begin{array}{c}
    	\frac{1}{2} & \frac{1}{2}
    	\end{array}\right]\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}	
	$$
	
	$$
	u_{i+1/2}=\frac{1}{2}b_{0}+\frac{1}{2}b_{1}
	$$
	
	$$
	u_{i+1/2}=\frac{1}{2}\bar{u}_{i}+\frac{1}{2}\bar{u}_{i+1}
	$$
	
    ![si in 1D](images/si.png "si in 1D")	
	
	右侧插值:再取包括两个单元的模板，$S = \{I_{i+1},I_{i+2}\}$。

	$$
	\cfrac{1}{\Delta{x}_{j}}\int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) \, dx = \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi 
	$$
	
	$$
    \Delta{x}_{j}\equiv{x}_{j+\frac{1}{2}}-x_{j-\frac{1}{2}}=\Delta{x}
    $$
	
	$$
	\begin{array}{l}
    \xi = \cfrac{x - x_{i+1}}{\Delta x}\\
    \xi(\alpha) =\xi(x_{j-\frac{1}{2}})= \cfrac{x_{j-\frac{1}{2}} - x_{i+1}}{\Delta x}\\
    \xi(\beta) =\xi(x_{j+\frac{1}{2}})= \cfrac{x_{j+\frac{1}{2}} - x_{i+1}}{\Delta x}\\
    \end{array}
	$$
	
	$$
    \begin{array}{l}
    j=i+1\\
    \xi(x_{i+\frac{1}{2}})= \cfrac{x_{i+\frac{1}{2}} - x_{i+1}}{\Delta x}\\
    \xi(x_{i+\frac{3}{2}})= \cfrac{x_{i+\frac{3}{2}} - x_{i+1}}{\Delta x}\\	
    j=i+2\\
    \xi(x_{i+\frac{3}{2}})= \cfrac{x_{i+\frac{3}{2}} - x_{i+1}}{\Delta x}\\
    \xi(x_{i+\frac{5}{2}})= \cfrac{x_{i+\frac{5}{2}} - x_{i+1}}{\Delta x}\\	
    \end{array}	
	$$
	
	$$
    \begin{array}{c}
    x_{i+\frac{1}{2}} = x_{i+1}-\frac{1}{2}\Delta{x}\\
    x_{i+\frac{3}{2}} = x_{i+1}+\frac{1}{2}\Delta{x}\\
	x_{i+\frac{5}{2}} = x_{i+1}+\frac{3}{2}\Delta{x}\\
    \end{array}
	$$
	
	$$
    \begin{array}{l}
    \xi(x_{i+\frac{1}{2}})=-\frac{1}{2}\\
    \xi(x_{i+\frac{3}{2}})=+\frac{1}{2}\\
	\xi(x_{i+\frac{5}{2}})=+\frac{3}{2}\\
    \end{array}	
	$$
	
	$$
	\int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} \hat{p}(\xi)  \, d\xi= 
    \int_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})} (a_0 + a_1 \xi)  \, d\xi\\
	$$
	
	$$
	\int_{\xi(\alpha)}^{\xi(\beta)} (a_0 + a_1 \xi)  \, d\xi=
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(\alpha)}^{\xi(\beta)}\\
	$$
	
	$$
	(a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{j-\frac{1}{2}})}^{\xi(x_{j+\frac{1}{2}})}=\bar{u}_{j}
	$$
	
	$$
    \begin{array}{l}
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{i+\frac{1}{2}})}^{\xi(x_{i+\frac{3}{2}})}=\bar{u}_{i+1}\\	
	(a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{\xi(x_{i+\frac{3}{2}})}^{\xi(x_{i+\frac{5}{2}})}=\bar{u}_{i+2}\\
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    (a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{-\frac{1}{2}}^{+\frac{1}{2}}=\bar{u}_{i+1}\\
	(a_0\xi+\frac{1}{2}a_1\xi^{2})\bigg|_{+\frac{1}{2}}^{+\frac{3}{2}}=\bar{u}_{i+2}\\
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    \xi^{2}\bigg|_{-\frac{1}{2}}^{+\frac{1}{2}}=(+\frac{1}{2})^{2}-(-\frac{1}{2})^{2}=0\\
	\xi^{2}\bigg|_{+\frac{1}{2}}^{+\frac{3}{2}}=(+\frac{3}{2})^{2}-(+\frac{1}{2})^{2}=2\\
    \end{array}	
	$$
	
	$$
    \begin{array}{l}
    a_0+0a_1=\bar{u}_{i+1}\\
    a_0+1a_1=\bar{u}_{i+2}\\
	\end{array}	
	$$
	
	$$
    A=\begin{bmatrix}
      1&  0\\
      1&  1\\
    \end{bmatrix}	
	$$
	
	$$
    A\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     \bar{u}_{i+1}\\ \bar{u}_{i+2}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=A^{-1}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=A^{-1}\begin{bmatrix}
     \bar{u}_{i+1}\\ \bar{u}_{i+2}\\
    \end{bmatrix}	
	$$
	
	$$
	A^{-1}= \begin{bmatrix}
      1&  0\\
      -1&  1\\
    \end{bmatrix}
	$$
	
	$$
    \begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
      1&  0\\
      -1&  1\\
    \end{bmatrix}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     \bar{u}_{i+1}\\ \bar{u}_{i+2}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{array}{l}
    a_{0}=1b_{0}+0b_{1}\\
    a_{1}=-1b_{0}+1b_{1}\\
	\end{array}
	$$
	
	$$
    \begin{array}{l}
    a_{0}=1\bar{u}_{i+1}+0\bar{u}_{i+2}\\
    a_{1}=-1\bar{u}_{i+1}+1\bar{u}_{i+2}\\
    \end{array}
	$$	
	
	$$
    \begin{array}{l}
    p(x)=\hat{p}(\xi)=a_0+a_1\xi\\
    u_{i+1/2}=p(x_{i+1/2})=\hat{p}(\xi=-1/2)=(a_0+a_1\xi)\bigg|_{\xi=-1/2}\\
	u_{i+1/2}=a_0-\frac{1}{2}a_1\\
    \end{array}
	$$
	
	$$
    u_{i+1/2}=a_0-\frac{1}{2}a_1=\begin{bmatrix}
     1& -\frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}	
	$$
	
	$$
    \begin{bmatrix}
     1& -\frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
     a_{0}\\ a_{1}\\
    \end{bmatrix}=\begin{bmatrix}
     1& -\frac{1}{2}\\
    \end{bmatrix}\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}	
	$$
	
	$$
    C=\begin{bmatrix}
     1& -\frac{1}{2}
    \end{bmatrix}\begin{bmatrix}
    1 & 0 \\
    -1 & 1
    \end{bmatrix}
	$$	
	
	$$
	C = \left[\begin{array}{c}
	\frac{3}{2} & -\frac{1}{2}
	\end{array}\right]
	$$
	
	$$
    u_{i+1/2}=C\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}=\left[\begin{array}{c}
    	\frac{3}{2} & -\frac{1}{2}
    	\end{array}\right]\begin{bmatrix}
     b_{0}\\ b_{1}\\
    \end{bmatrix}	
	$$
	
	$$
	u_{i+1/2}=\frac{3}{2}b_{0}-\frac{1}{2}b_{1}
	$$
	
	$$
	u_{i+1/2}=\frac{3}{2}\bar{u}_{i+1}-\frac{1}{2}\bar{u}_{i+2}
	$$	
	
Given the cell averages of a function $v(x)$:

$$
\bar{v}_i \equiv \frac{1}{\Delta x_i} \int_{x_{i-\frac{1}{2}}}^{x_{i+\frac{1}{2}}} v(\xi) \, d\xi, \quad i = 1, 2, ..., N, 
$$

find a polynomial $p_i(x)$, of degree at most $k-1$, for each cell $I_i$, such that it is a $k$-th order accurate approximation to the function $v(x)$ inside $I_i$:

$$
p_i(x) = v(x) + O(\Delta x^k), \quad x \in I_i, \ i = 1, ..., N. 
$$

In particular, this gives approximations to the function $v(x)$ at the cell boundaries

$$
v_{i+\frac{1}{2}}^{-} = p_i(x_{i+\frac{1}{2}}), \quad v_{i-\frac{1}{2}}^{+} = p_i(x_{i-\frac{1}{2}}), \quad i = 1, ..., N,
$$

which are $k$-th order accurate:

$$
v_{i+\frac{1}{2}}^{-} = v(x_{i+\frac{1}{2}}) + O(\Delta x^k), \quad v_{i-\frac{1}{2}}^{+} = v(x_{i-\frac{1}{2}}) + O(\Delta x^k), \quad i = 1, ..., N.
$$

Given the location $I_i$ and the order of accuracy $k$, we first choose a “stencil”, based on $r$ cells to the left, $s$ cells to the right, and $I_i$ itself if $r, s \geq 0 $, with $ r + s + 1 = k$:

$$
S(i) \equiv \{I_{i-r}, ..., I_{i+s}\}.
$$

There is a unique polynomial of degree at most $k-1 = r + s$, denoted by $p(x)$ (we will drop the subscript $i$ when it does not cause confusion), whose cell average in each of the cells in $S(i)$ agrees with that of $v(x)$:

$$
\frac{1}{\Delta x_j} \int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(\xi) \, d\xi = \bar{v}_j, \quad j = i-r, ..., i+s.
$$

This polynomial $p(x)$ is the $k$-th order approximation we are looking for, as it is easy to prove (2.5), see the discussion below, as long as the function $v(x)$ is smooth in the region covered by the stencil $S(i)$.

For solving Problem 2.1, we also need the approximations to the values of $v(x)$ at the cell boundaries,
(2.6). Since the mappings from the given cell averages $\bar{v}_j$ in the stencil $S(i)$ to the values $v_{i+\frac{1}{2}}^{-}$ and $v_{i-\frac{1}{2}}^{+}$ in
(2.6) are linear, there exist constants $c_{r,j}$ and $\tilde{c}_{r,j}$, which depend on the left shift of the stencil $r$ of the stencil
$S(i)$ in (2.8), on the order of accuracy $k$, and on the cell sizes $\Delta x_j$ in the stencil $S_i$, but *not* on the function
$v$ itself, such that

$$
v_{i+\frac{1}{2}}^{-} = \sum_{j=0}^{k-1} c_{r,j} \bar{v}_{i-r+j}, \quad v_{i-\frac{1}{2}}^{+} = \sum_{j=0}^{k-1} \tilde{c}_{r,j} \bar{v}_{i-r+j}.
$$

We note that the difference between the values with superscripts ± at the same location $x_{i+\frac{1}{2}}$ is due to the possibility of different stencils for cell $I_i$ and for cell $I_{i+1}$. If we identify the left shift $r$ not with the cell $I_i$ but with the point of reconstruction $x_{i+\frac{1}{2}}$, i.e. using the stencil (2.8) to approximate $\tilde{x}_{i+\frac{1}{2}}$, then we can drop the superscripts ± and also eliminate the need to consider $\tilde{c}_{r,j}$ in (2.10), as it is clear that

$$
\tilde{c}_{r,j} = c_{r-1,j}.
$$

We summarize this as follows: given the $k$ cell averages

$$
\bar{v}_{i-r}, \, ..., \, \bar{v}_{i-r+k-1},
$$

there are constants $c_{r,j}$ such that the reconstructed value at the cell boundary $x_{i+\frac{1}{2}}$:

$$
v_{i+\frac{1}{2}} = \sum_{j=0}^{k-1} c_{r,j} \bar{v}_{i-r+j};
$$
	
$$
v_{i+1/2}=c_{r0}\bar{v}_{i-r}+c_{r1}\bar{v}_{i-r+1}+\dots+c_{r,k-1}\bar{v}_{i-r+k-1}\\
$$

$$
v_{i+1/2}=\sum_{j=0}^{k-1}c_{rj}\bar{v}_{i-r+j}\\
$$

$$
\begin{array}{l}
u_{i+1/2}=&-\frac{1}{2}\bar{u}_{i-1}&+&\frac{3}{2}\bar{u}_{i}\\
u_{i+1/2}=&+\frac{1}{2}\bar{u}_{i}&+&\frac{1}{2}\bar{u}_{i+1}\\
u_{i+1/2}=&+\frac{3}{2}\bar{u}_{i+1}&-&\frac{1}{2}\bar{u}_{i+2}\\
\end{array}
$$

对于$k=2$，有

$$
v_{i+1/2}=\sum_{j=0}^{1}c_{rj}\bar{v}_{i-r+j}\\
$$

$$
v_{i+1/2}=c_{r0}\bar{v}_{i-r}+c_{r1}\bar{v}_{i-r+1}\\
$$

具体为

$$
\begin{array}{l}
v_{i+1/2}=c_{-1,0}\bar{v}_{i+1}+c_{-1,1}\bar{v}_{i+2},\quad r=-1\\
v_{i+1/2}=c_{0,0}\bar{v}_{i}+c_{0,1}\bar{v}_{i+1},\quad r=0\\
v_{i+1/2}=c_{1,0}\bar{v}_{i-1}+c_{1,1}\bar{v}_{i},\quad r=1\\
\end{array}
$$

$r=-1$时，有

$$
\begin{array}{l}
v_{i+1/2}=c_{-1,0}\bar{v}_{i+1}+c_{-1,1}\bar{v}_{i+2}\\
v_{i+1/2}=+\frac{3}{2}\bar{v}_{i+1}-\frac{1}{2}\bar{v}_{i+2}\\
\end{array}
$$

$r=0$时，有

$$
\begin{array}{l}
v_{i+1/2}=c_{0,0}\bar{v}_{i}+c_{0,1}\bar{v}_{i+1}\\
v_{i+1/2}=+\frac{1}{2}\bar{v}_{i}+\frac{1}{2}\bar{v}_{i+1}\\
\end{array}
$$

$r=1$时，有

$$
\begin{array}{l}
v_{i+1/2}=c_{1,0}\bar{v}_{i-1}+c_{0,1}\bar{v}_{i}\\
v_{i+1/2}=-\frac{1}{2}\bar{v}_{i-1}+\frac{3}{2}\bar{v}_{i}\\
\end{array}
$$

To describe the WENO3 finite difference spatial discretization, we start with the scalar conservation law

$$ 
u_t + f(u)_x = 0 \tag{8.150} 
$$

and assume $\frac{\partial f}{\partial u} > 0$ (the wind direction is to the right). 
The computational domain is discretized with $N + 1$ grid points $x_i = i \Delta x, i = 0, 1, \ldots, N$.
A conservative numerical approximation $u_i(t)$ to the exact solution $u(x_i, t)$ of (8.150) satisfies the ODE system
	
$$
\frac{du_i(t)}{dt} + \frac{1}{\Delta x} \left( F_{i+\frac{1}{2}} - F_{i-\frac{1}{2}} \right) = 0 \tag{8.151}
$$

where $F_{i+\frac{1}{2}}$ is the numerical flux function.

![si in 1D](images/si.png "si in 1D")

```
k=2
[  3.0/2.0, -1.0/2.0 ]
[  1.0/2.0,  1.0/2.0 ]
[ -1.0/2.0,  3.0/2.0 ]
```

## WENO3

For third-order WENO, the numerical flux is defined as

$$
F_{i+\frac{1}{2}} = \omega_1^+ F_{i+\frac{1}{2}}^{(1)} + \omega_2^+ F_{i+\frac{1}{2}}^{(2)} \tag{8.152}
$$

where the two second-order accurate numerical fluxes are given by

$$
F_{i+\frac{1}{2}}^{(1)} = -\frac{1}{2} f_{i-1} + \frac{3}{2} f_i, \quad F_{i+\frac{1}{2}}^{(2)} = \frac{1}{2} f_i + \frac{1}{2} f_{i+1} \tag{8.153}
$$

with $f_i \equiv f(u_i(t))$. $F_{i-\frac{1}{2}}$ is constructed by shifting $i \rightarrow i - 1$:

$$
F_{i-\frac{1}{2}} = \omega_1^- F_{i-\frac{1}{2}}^{(1)} + \omega_2^- F_{i-\frac{1}{2}}^{(2)} \tag{8.154}
$$

$$
F_{i-\frac{1}{2}}^{(1)} = -\frac{1}{2} f_{i-2} + \frac{3}{2} f_{i-1}, \quad F_{i-\frac{1}{2}}^{(2)} = \frac{1}{2} f_{i-1} + \frac{1}{2} f_i. \tag{8.155}
$$

Note that the stencil $\{i-2, i-1, i, i+1\}$ for (8.151) is biased to the left due to the positive wind direction.

$$
\begin{array}{l}
\displaystyle v_{i+\frac{1}{2}}^{(r)} = \sum_{j=0}^{k-1} c_{rj} \bar{v}_{i-r+j}, \quad r = 0, ..., k-1,\\
\displaystyle v_{i+\frac{1}{2}}^{(0)} = \sum_{j=0}^{k-1} c_{0,j} \bar{v}_{i+j}\\
\displaystyle v_{i+\frac{1}{2}}^{(1)} = \sum_{j=0}^{k-1} c_{1,j} \bar{v}_{i-1+j}\\
\end{array}
$$

k=2

$$
\begin{array}{l}
k=2\\
\displaystyle v_{i+\frac{1}{2}}^{(0)} = \sum_{j=0}^{1} c_{0,j} \bar{v}_{i+j}
=c_{0,0} \bar{v}_{i}+c_{0,1} \bar{v}_{i+1}=\frac{1}{2}\bar{v}_{i}+\frac{1}{2}\bar{v}_{i+1}\\
\displaystyle v_{i+\frac{1}{2}}^{(1)} = \sum_{j=0}^{1} c_{1,j} \bar{v}_{i-1+j}=
c_{1,0} \bar{v}_{i-1}+c_{1,1} \bar{v}_{i}=-\frac{1}{2}\bar{v}_{i-1}+\frac{3}{2}\bar{v}_{i}\\
\end{array}
$$

$$
\begin{array}{l}
\displaystyle q_{i+1/2}=\sum_{r=0}^{k-1} \omega_{r}q_{i+1/2}^{(r)}\\
\displaystyle q_{i+1/2}^{L}=\sum_{r=0}^{k-1} \omega_{r}^{L}q_{i+1/2}^{L(r)}\\
\displaystyle q_{i+1/2}^{R}=\sum_{r=0}^{k-1} \omega_{r}^{R}q_{i+1/2}^{R(r)}\\
\end{array}
$$

qi+1/2,L

$$
\begin{bmatrix}
 q_{i+1/2}^{L(0)}\\
 q_{i+1/2}^{L(1)}
\end{bmatrix}=
\begin{bmatrix}
\frac{1}{2}q_{i}&+&\frac{1}{2}q_{i+1}\\
 -\frac{1}{2}q_{i-1}&+&\frac{3}{2}q_{i}\\
 \end{bmatrix}
$$

qi+1/2,R

$$
\begin{bmatrix}
 q_{i+1/2}^{R(0)}\\
 q_{i+1/2}^{R(1)}
\end{bmatrix}=
\begin{bmatrix}
 \frac{1}{2}q_{i}&+&\frac{1}{2}q_{i+1}\\
 \frac{3}{2}q_{i+1}&-&\frac{1}{2}q_{i+2}\\
\end{bmatrix}
$$

$$
\begin{array}{l}
\displaystyle q_{i+1/2}^{L}=\omega_{0}^{L}q_{i+1/2}^{L(0)}+\omega_{1}^{L}q_{i+1/2}^{L(1)}\\
\displaystyle q_{i+1/2}^{R}=\omega_{0}^{R}q_{i+1/2}^{R(0)}+\omega_{1}^{R}q_{i+1/2}^{R(1)}\\
\end{array}
$$

where the nonlinear weights are defined as

$$
\omega_{k}=\cfrac{\alpha_{k}}{\alpha_{0}+\alpha_{1}},
\alpha_{k}=\cfrac{d_{k}}{(\beta_{k}+\epsilon)^2},k=0,1\\
$$

or

$$
\alpha_{k}=\cfrac{d_{k}}{(\epsilon+\text{IS}_{k})^p},k=0,1,p=2\\
$$

$$
\begin{array}{l}
\omega_{k}^{L}=\cfrac{\alpha_{k}^{L}}{\alpha_{0}^{L}+\alpha_{1}^{L}},
\alpha_{k}^{L}=\cfrac{d_{k}^{L}}{(\beta_{k}^{L}+\epsilon)^2},k=0,1\\
\omega_{k}^{R}=\cfrac{\alpha_{k}^{R}}{\alpha_{0}^{R}+\alpha_{1}^{R}},
\alpha_{k}^{R}=\cfrac{d_{k}^{R}}{(\beta_{k}^{R}+\epsilon)^2},k=0,1\\
\end{array}
$$

in which the smoothness indicators are defined as

$$
\begin{array}{l}
\beta_{0}^{L}=\text{IS}_{0}^{L}=(q_{i+1}-q_{i})^2\\
\beta_{1}^{L}=\text{IS}_{1}^{L}=(q_{i}-q_{i-1})^2\\
\end{array}
$$

$$
\begin{array}{l}
d_{0}^{L}=\frac{2}{3}\\
d_{1}^{L}=\frac{1}{3}\\
\end{array}
$$

$$
\begin{array}{l}
\beta_{0}^{R}=\text{IS}_{0}^{R}=(q_{i+1}-q_{i})^2\\
\beta_{1}^{R}=\text{IS}_{1}^{R}=(q_{i+2}-q_{i+1})^2\\
\end{array}
$$

$$
\begin{array}{l}
d_{0}^{R}=\frac{2}{3}\\
d_{1}^{R}=\frac{1}{3}\\
\end{array}
$$


## WENO5

$$
\begin{array}{l}
\displaystyle q_{i+1/2}=\sum_{r=0}^{k-1} \omega_{r}q_{i+1/2}^{(r)}\\
\displaystyle q_{i+1/2}^{L}=\sum_{r=0}^{k-1} \omega_{r}^{L}q_{i+1/2}^{L(r)}\\
\displaystyle q_{i+1/2}^{R}=\sum_{r=0}^{k-1} \omega_{r}^{R}q_{i+1/2}^{R(r)}\\
\end{array}
$$

k=3
```cpp
k=3
[ 11.0/6.0, -7.0/6.0,  1.0/3.0 ]
[  1.0/3.0,  5.0/6.0, -1.0/6.0 ]
[ -1.0/6.0,  5.0/6.0,  1.0/3.0 ]
[  1.0/3.0, -7.0/6.0, 11.0/6.0 ]
```

$$
\begin{array}{l}
\displaystyle q_{i+1/2}^{L}=\omega_{0}^{L}q_{i+1/2}^{L(0)}
+\omega_{1}^{L}q_{i+1/2}^{L(1)}
+\omega_{2}^{L}q_{i+1/2}^{L(2)}\\
\displaystyle q_{i+1/2}^{R}=\omega_{0}^{R}q_{i+1/2}^{R(0)}+
\omega_{1}^{R}q_{i+1/2}^{R(1)}
+\omega_{2}^{R}q_{i+1/2}^{R(2)}\\
\end{array}
$$

qi+1/2,L

$$
\begin{bmatrix}
 q_{i+1/2}^{L(0)}\\
 q_{i+1/2}^{L(1)}\\
 q_{i+1/2}^{L(2)}\\
\end{bmatrix}=
\begin{bmatrix}
\frac{1}{3}q_{i}&+&\frac{5}{6}q_{i+1}&-&\frac{1}{6}q_{i+2}\\
-\frac{1}{6}q_{i-1}&+&\frac{5}{6}q_{i}&+&\frac{1}{3}q_{i+1}\\
+\frac{1}{3}q_{i-2}&-&\frac{7}{6}q_{i-1}&+&\frac{11}{6}q_{i}\\
 \end{bmatrix}
$$

qi+1/2,R

$$
\begin{bmatrix}
 q_{i+1/2}^{R(0)}\\
 q_{i+1/2}^{R(1)}\\
 q_{i+1/2}^{R(2)}\\
\end{bmatrix}=
\begin{bmatrix}
\frac{1}{3}q_{i+1}&+&\frac{5}{6}q_{i}-&\frac{1}{6}q_{i-1}\\
-\frac{1}{6}q_{i+2}&+&\frac{5}{6}q_{i+1}+&\frac{1}{3}q_{i}\\
+\frac{1}{3}q_{i+3}&-&\frac{7}{6}q_{i+2}+&\frac{11}{6}q_{i+1}\\
 \end{bmatrix}
$$

or

upwind

$$
\begin{bmatrix}
 V_{0}\\ V_{1}\\ V_{2}\\ V_{3}\\ V_{4}\\
\end{bmatrix}=
\begin{bmatrix}
 q_{i-2}\\ q_{i-1}\\q_{i}\\q_{i+1}\\q_{i+2}\\
\end{bmatrix}
$$

qi+1/2,L

$$
\begin{bmatrix}
 q_{i+1/2}^{L(0)}\\
 q_{i+1/2}^{L(1)}\\
 q_{i+1/2}^{L(2)}\\
\end{bmatrix}=
\begin{bmatrix}
\frac{1}{3}V_{2}&+&\frac{5}{6}V_{3}&-&\frac{1}{6}V_{4}\\
-\frac{1}{6}V_{1}&+&\frac{5}{6}V_{2}&+&\frac{1}{3}V_{3}\\
+\frac{1}{3}V_{0}&-&\frac{7}{6}V_{1}&+&\frac{11}{6}V_{2}\\
 \end{bmatrix}
$$

downwind

$$
\begin{bmatrix}
 \hat{V}_{0}\\ \hat{V}_{1}\\ \hat{V}_{2}\\ \hat{V}_{3}\\ \hat{V}_{4}\\
\end{bmatrix}=
\begin{bmatrix}
 q_{i+3}\\ q_{i+2}\\q_{i+1}\\q_{i}\\q_{i-1}\\
\end{bmatrix}
$$

qi+1/2,R

$$
\begin{bmatrix}
 q_{i+1/2}^{R(0)}\\
 q_{i+1/2}^{R(1)}\\
 q_{i+1/2}^{R(2)}\\
\end{bmatrix}=
\begin{bmatrix}
\frac{1}{3}\hat{V}_{2}&+&\frac{5}{6}\hat{V}_{3}&-&\frac{1}{6}\hat{V}_{4}\\
-\frac{1}{6}\hat{V}_{1}&+&\frac{5}{6}\hat{V}_{2}&+&\frac{1}{3}\hat{V}_{3}\\
+\frac{1}{3}\hat{V}_{0}&-&\frac{7}{6}\hat{V}_{1}&+&\frac{11}{6}\hat{V}_{2}\\
 \end{bmatrix}
$$

where the nonlinear weights are defined as

$$
\omega_{r}=\cfrac{\alpha_{r}}{\alpha_{0}+\alpha_{1}+\alpha_{2}},
\alpha_{r}=\cfrac{d_{r}}{(\beta_{r}+\epsilon)^2},r=0,1,2\\
$$

or

$$
\alpha_{r}=\cfrac{d_{r}}{(\epsilon+\text{IS}_{r})^p},r=0,1,2,p=2\\
$$

$$
\begin{array}{l}
\omega_{r}^{L}=\cfrac{\alpha_{r}^{L}}{\alpha_{0}^{L}+\alpha_{1}^{L}+\alpha_{2}^{L}},
\alpha_{r}^{L}=\cfrac{d_{r}^{L}}{(\beta_{r}^{L}+\epsilon)^2},r=0,1,2\\
\omega_{r}^{R}=\cfrac{\alpha_{r}^{R}}{\alpha_{0}^{R}+\alpha_{1}^{R}+\alpha_{2}^{R}},
\alpha_{r}^{R}=\cfrac{d_{r}^{R}}{(\beta_{r}^{R}+\epsilon)^2},r=0,1,2\\
\end{array}
$$

in which the smoothness indicators are defined as

upwind:

$$
\begin{bmatrix}
 V_{0}\\ V_{1}\\ V_{2}\\ V_{3}\\ V_{4}\\
\end{bmatrix}=
\begin{bmatrix}
 q_{i-2}\\ q_{i-1}\\q_{i}\\q_{i+1}\\q_{i+2}\\
\end{bmatrix}
$$

$$
\begin{array}{l}
\beta_{0}^{L}=\text{IS}_{0}^{L}=\frac{13}{12} (q_{i} - 2q_{i+1} + q_{i+2})^2 + \frac{1}{4} (3q_i - 4q_{i+1} + q_{i+2})^2\\
\beta_{1}^{L}=\text{IS}_{1}^{L}=\frac{13}{12} (q_{i-1} - 2q_i + q_{i+1})^2 + \frac{1}{4} (q_{i-1} - q_{i+1})^2\\
\beta_{2}^{L}=\text{IS}_{2}^{L}=\frac{13}{12} (q_{i-2} - 2q_{i-1} + q_{i})^2 + \frac{1}{4} (q_{i-2} - 4q_{i-1} + 3q_i)^2\\
\end{array}
$$

$$
\begin{array}{l}
\beta_{0}^{L}=\text{IS}_{0}^{L}=\frac{13}{12} (V_{2} - 2V_{3} + V_{4})^2 + \frac{1}{4} (3V_{2}-4V_{3}+V_{4})^2\\
\beta_{1}^{L}=\text{IS}_{1}^{L}=\frac{13}{12} (V_{1} - 2V_{2} + V_{3})^2 + \frac{1}{4} (V_{1} - V_{3})^2\\
\beta_{2}^{L}=\text{IS}_{2}^{L}=\frac{13}{12} (V_{0} - 2V_{1} + V_{2})^2 + \frac{1}{4} (V_{0} - 4V_{1} + 3V_{2})^2\\
\end{array}
$$


$$
\begin{array}{l}
d_{0}^{L}=\frac{3}{10}\\
d_{1}^{L}=\frac{3}{5}\\
d_{2}^{L}=\frac{1}{10}\\
\end{array}
$$

downwind:

$$
\begin{bmatrix}
 \hat{V}_{0}\\ \hat{V}_{1}\\ \hat{V}_{2}\\ \hat{V}_{3}\\ \hat{V}_{4}\\
\end{bmatrix}=
\begin{bmatrix}
 q_{i+3}\\ q_{i+2}\\q_{i+1}\\q_{i}\\q_{i-1}\\
\end{bmatrix}
$$

$$
\begin{array}{l}
\beta_{0}^{R}=\text{IS}_{0}^{R}=\frac{13}{12} (\hat{V}_{2} - 2\hat{V}_{3} + \hat{V}_{4})^2 + \frac{1}{4} (3\hat{V}_{2}-4\hat{V}_{3}+\hat{V}_{4})^2\\
\beta_{1}^{R}=\text{IS}_{1}^{R}=\frac{13}{12} (\hat{V}_{1} - 2\hat{V}_{2} + \hat{V}_{3})^2 + \frac{1}{4} (\hat{V}_{1} - \hat{V}_{3})^2\\
\beta_{2}^{R}=\text{IS}_{2}^{R}=\frac{13}{12} (\hat{V}_{0} - 2\hat{V}_{1} + \hat{V}_{2})^2 + \frac{1}{4} (\hat{V}_{0} - 4\hat{V}_{1} + 3\hat{V}_{2})^2\\
\end{array}
$$

$$
\begin{array}{l}
\beta_{0}^{R}=\text{IS}_{0}^{R}=\frac{13}{12} (q_{i+1}-2q_{i}+q_{i-1})^2 + \frac{1}{4} (3q_{i+1}-4q_{i}+q_{i-1})^2\\
\beta_{1}^{R}=\text{IS}_{1}^{R}=\frac{13}{12} (q_{i+2}-2q_{i+1}+q_{i})^2 + \frac{1}{4} (q_{i+2}-q_{i})^2\\
\beta_{2}^{R}=\text{IS}_{2}^{R}=\frac{13}{12} (q_{i+3}-2q_{i+2}+q_{i+1})^2 + \frac{1}{4} (q_{i+3}- 4q_{i+2}+3q_{i+1})^2\\
\end{array}
$$

$$
\begin{array}{l}
d_{0}^{R}=\frac{3}{10}\\
d_{1}^{R}=\frac{3}{5}\\
d_{2}^{R}=\frac{1}{10}\\
\end{array}
$$
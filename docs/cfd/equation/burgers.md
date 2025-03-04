# Burgers Equation

## Burgers Link

- [Burgers equation(伯格斯方程)](https://zh.wikipedia.org/wiki/%E4%BC%AF%E6%A0%BC%E6%96%AF%E6%96%B9%E7%A8%8B).
- [浅析Burgers 方程](https://zhuanlan.zhihu.com/p/339649042).
- [深度学习求解偏微分方程（13）BURGERS’ EQUATION](https://zhuanlan.zhihu.com/p/678666891).
- [Burgers方程的一类三次有限体积元方法](https://www.hanspub.org/journal/paperinformation?paperid=52294).

## Link

- [Steger Warming Flux Vector Splitting Method](https://www.scribd.com/doc/115034995/Steger-Warming-Flux-Vector-Splitting-Method).

$$
\cfrac{\partial u}{\partial t}+u\cfrac{\partial u}{\partial x}=\nu\cfrac{\partial^{2} u}{\partial x^{2}}
$$

$$
\text{(unsteady term)}=\text{(convective term)}+\text{(viscous term)}
$$

$$
\cfrac{u^{n+1}_{i}-u^{n}_{i}}{\Delta{t}}+u^{n}_{i}\cfrac{u^{n}_{i}-u^{n}_{i-1}}{\Delta{x}}=
\nu\cfrac{u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1}}{\Delta{x}^2} \\
$$

$$
u^{n+1}_{i}-u^{n}_{i}+u^{n}_{i}\cfrac{\Delta{t}}{\Delta{x}}(u^{n}_{i}-u^{n}_{i-1})=
\nu\cfrac{\Delta{t}}{\Delta{x}^{2}}(u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1}) 
$$

$$
u^{n+1}_{i}=u^{n}_{i}-u^{n}_{i}\cfrac{\Delta{t}}{\Delta{x}}(u^{n}_{i}-u^{n}_{i-1})+
\nu\cfrac{\Delta{t}}{\Delta{x}^{2}}(u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1})
$$

CFL数（Courant-Friedrichs-Lewy数）是一个无量纲值，表示在给定时间步长内，数值解在网格单元中传播的相对速度。

$$
\mathrm{CFL}=c\cfrac{\Delta t}{\Delta x}
$$

$$
\Delta t=\mathrm{CFL}\cfrac{ \Delta x}{\mathrm{c}}\\
$$

## Inviscid Burgers Equation: Non-Conservative Form 

$$
\cfrac{\partial u}{\partial t}+u\cfrac{\partial u}{\partial x}=0
$$

### FTCS

$$
\cfrac{u^{(n+1)}_{i}-u^{(n)}_{i}}{\Delta{t}}+u^{(n)}_{i}\cfrac{u^{(n)}_{i+1}-u^{(n)}_{i-1}}{\Delta{x}}=0
$$

## Inviscid Burgers Equation: Conservative Form 

$$
\cfrac{\partial u}{\partial t}+\cfrac{\partial f}{\partial x}=0,\text{ where }f=(\cfrac{u^2}{2})
$$

### Flux Splitting

$$
\cfrac{\partial f}{\partial x} \bigg|_{x=x_{i}}=\cfrac{f_{i+1/2}-f_{i-1/2}}{\Delta{x}}\\
$$

$$
\cfrac{\partial f}{\partial x} \bigg|_{x=x_{i}}=
\cfrac{f^{L}_{i+1/2}-f^{L}_{i-1/2}}{\Delta{x}}
+\cfrac{f^{R}_{i+1/2}-f^{R}_{i-1/2}}{\Delta{x}}\\\\
$$

The superscripts L and R refer to the positive and negative flux component at the interface and the subscripts 𝑖−1/2
and 𝑖+1/2 stands for the left and right side interface of the nodal point i. 
We use WENO-5 reconstruction to compute the left and right side flux at the interface. 
First, we compute the flux at nodal points and then split it into positive and negative components. 
This process is called as Lax-Friedrichs flux splitting and the positive and negative component of the flux at a nodal location is calculated as

$$
\begin{array}{l}
f^{+}_{i}=\cfrac{1}{2}(f_{i}+au_{i})\\
f^{-}_{i}=\cfrac{1}{2}(f_{i}-au_{i})\\
\end{array}
$$

where $a$ is the absolute value of the flux Jacobian$(a=\bigg|\cfrac{\partial f}{\partial u}\bigg|)$. We chose the values of $a$
as the maximum value of $u_{i}$ over the stencil used for WENO-5 reconstruction, i.e.,
$$
a=max(\big|u_{i-2}\big|,\big|u_{i-1}\big|,\big|u_{i}\big|,\big|u_{i+1}\big|,\big|u_{i+2}\big|)\\
$$

Once we split the nodal flux into its positive and negative component we reconstruct the left and right side fluxes at the interface 
using WENO-5 scheme using below formulas

$$
\begin{array}{l}
f^{L}_{i+\frac{1}{2}}
&=&w^{L}_{0}(\cfrac{1}{3}f^{+}_{i-2}-\cfrac{7}{6}f^{+}_{i-1}+\cfrac{11}{6}f^{+}_{i})\\
&+&w^{L}_{1}(-\cfrac{1}{6}f^{+}_{i-1}+\cfrac{5}{6}f^{+}_{i}+\cfrac{1}{3}f^{+}_{i+1})\\
&+&w^{L}_{2}(\cfrac{1}{3}f^{+}_{i}+\cfrac{5}{6}f^{+}_{i+1}-\cfrac{1}{6}f^{+}_{i+2})\\
\end{array}
$$

$$
\begin{array}{l}
f^{R}_{i-\frac{1}{2}}
&=&w^{R}_{0}(-\cfrac{1}{6}f^{-}_{i-2}+\cfrac{5}{6}f^{-}_{i-1}+\cfrac{1}{3}f^{-}_{i})\\
&+&w^{R}_{1}(\cfrac{1}{3}f^{-}_{i-1}+\cfrac{5}{6}f^{-}_{i}-\cfrac{1}{6}f^{-}_{i+1})\\
&+&w^{R}_{2}(\cfrac{11}{6}f^{-}_{i}-\cfrac{7}{6}f^{-}_{i+1}+\cfrac{1}{3}f^{-}_{i+2})\\
\end{array}
$$

We use the third-order Runge-Kutta numerical scheme for time integration and periodic boundary condition for the domain. 
For the conservative form, we need three ghost points on left and right sides, 
since we compute the flux at the left and right boundary of the domain also. The periodic boundary condition for fluxes at ghost points is given by

## Riemann Solver 

Rusanov Scheme

Another approach to computing the nonlinear term in the inviscid Burgers equation is to use Riemann solvers. 
Riemann solvers are used for accurate and efficient simulations of Euler equations along with higher-order WENO schemes.
In this method, first, we reconstruct the left and right side fluxes at the interface similar to the inviscid Burgers equation in non-conservative form.


The Rusanov scheme uses maximum local wave propagation speed to compute the flux as follows

$$
  f_{i+1/2}=\frac{1}{2}(f^{L}_{i+1/2}+f^{R}_{i+1/2})-\frac{1}{2}c_{i+1/2}(u^{R}_{i+1/2}-u^{L}_{i+1/2})
$$

where $f^{L}$ is the flux component using the right reconstructed state $f^{L}_{i+1/2}=f(u^{L}_{i+1/2})$ and $f^{R}$
is the flux component using the right reconstructed state $f^{R}_{i+1/2}=f(u^{R}_{i+1/2})$. Here, $c_{i+1/2}$ 
is the local wave propagation speed which is obtained by taking the maximum absolute value of the eigenvalues corresponding to
the Jacobian, $\cfrac{\partial f}{\partial u}=u$, between cells $i$ and $i+1$ can be obtained as

$$
  c_{i+1/2}=\text{max}(|u_{i}|,|u_{i+1}|)
$$
  
or in a wider stencil as shown in Equation   

$$
  c_{i+1/2}=\left | \cfrac{\partial f}{\partial u} \right |=max(|u_{i-2}|,|u_{i-1}|,|u_{i}|,|u_{i+1}|,|u_{i+2}|) 
$$

## Lax–Friedrichs method

- [Lax–Friedrichs method](https://en.wikipedia.org/wiki/Lax%E2%80%93Friedrichs_method).

## Flux Discretization Schemes

- [Flux Discretization Schemes](https://chimeracfd.com/programming/gryphon/fluxmain.html).

node
```cpp
     x=0                            x=L
|     |     |       ...   |    |     |      
-1    0     1            N-3  N-2   N-1   N   N+1
	                     -2   -1     0    1   2
if ( i == 1 )
{
    //ig = 0: interface value
    //ig=1,2,... ghost cell value
    for ( int ig = 0; ig <= nghost; ++ ig )
    {
        ijk_ghosts.push_back( i - ig );
        ijk_donors.push_back( i + ig );
    }
}
else
{
    //ig = 0: interface value
    //ig=1,2,... ghost cell value
    for ( int ig = 0; ig <= nghost; ++ ig )
    {
        ijk_ghosts.push_back( i + ig );
        ijk_donors.push_back( i - ig );
    }
}	
```

cell center
```cpp
grid point number:(0,1,2,...,N-1)=N=101
cell center: (0,1,2,...,N-2)=N-1=100
   x=0                                     x=L
    0         1                  N-2       N-1
    1         2                  N-1        N
|   |    *    |    *   ...   *    |    *    |     *
   -1/2  0   1/2   1        N-3 N-5/2 N-2 N-3/2  N-1
                             *    |    *    |     *    |     *     |
                            -2  -3/2   -1  -1/2   0   1/2    1    3/2
							      0         1          2           3
							     -1         0          1           2

   x=0                                     x=L
    0         1                  99        100
    1         2                  98        101
|   |    *    |    *   ...   *    |     *    |     *
   -1/2  0   1/2   1        98  99-1/2 99  99+1/2  100
                             *    |     *    |     *    |     *     |
                            -2  -3/2   -1   -1/2   0   1/2    1    3/2
							      0          1          2           3
							     -1          0          1           2


if ( i == 1 )
{
    //ig = 0: interface value
    //ig=1,2,... ghost cell value
    for ( int ig = 0; ig <= nghost; ++ ig )
    {
        ijk_ghosts.push_back( i - ig );
        ijk_donors.push_back( i + ig );
    }
}
else
{
    //ig = 0: interface value
    //ig=1,2,... ghost cell value
    for ( int ig = 0; ig <= nghost; ++ ig )
    {
        ijk_ghosts.push_back( i + ig );
        ijk_donors.push_back( i - ig );
    }
}	
```

### Cole-Hopf 变换与 Burgers 方程的解析解

#### 1. Burgers 方程
Burgers 方程是一个非线性偏微分方程，形式如下：
$$
\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \nu \frac{\partial^2 u}{\partial x^2}
$$
其中：

- \( u(x, t) \) 是速度场，
- \( \nu \) 是粘性系数。

#### 2. Cole-Hopf 变换
Cole-Hopf 变换通过引入一个新的函数 \( \phi(x, t) \)，将 Burgers 方程线性化。变换定义为：
$$
u(x, t) = -2\nu \frac{\partial}{\partial x} \ln \phi(x, t)
$$
或者等价地：
$$
u(x, t) = -2\nu \frac{\phi_x}{\phi}
$$
其中 \( \phi_x = \frac{\partial \phi}{\partial x} \)。

#### 3. 变换后的方程
将 Cole-Hopf 变换代入 Burgers 方程，可以得到：
$$
\frac{\partial}{\partial t} \left( -2\nu \frac{\phi_x}{\phi} \right) + \left( -2\nu \frac{\phi_x}{\phi} \right) \frac{\partial}{\partial x} \left( -2\nu \frac{\phi_x}{\phi} \right) = \nu \frac{\partial^2}{\partial x^2} \left( -2\nu \frac{\phi_x}{\phi} \right)
$$
经过化简，可以得到：
$$
\frac{\partial \phi}{\partial t} = \nu \frac{\partial^2 \phi}{\partial x^2}
$$
这是一个热传导方程，其解可以通过已知的方法求得。

#### 4. 解析解
假设初始条件为 \( u(x, 0) = f(x) \)，则通过 Cole-Hopf 变换，可以得到 \( \phi(x, 0) \) 的初始条件。热传导方程的解为：
$$
\phi(x, t) = \frac{1}{\sqrt{4\pi\nu t}} \int_{-\infty}^{\infty} \exp\left( -\frac{(x - \xi)^2}{4\nu t} \right) \phi(\xi, 0) \, d\xi
$$
然后通过 Cole-Hopf 变换的逆变换，可以得到 Burgers 方程的解析解：
$$
u(x, t) = -2\nu \frac{\partial}{\partial x} \ln \phi(x, t)
$$

---

### 证明

#### 步骤 1：引入 Cole-Hopf 变换
设 \( u(x, t) = -2\nu \frac{\phi_x}{\phi} \)，其中 \( \phi(x, t) \) 是一个新的函数。

#### 步骤 2：计算导数
计算 \( u \) 对 \( t \) 和 \( x \) 的导数：
$$
\frac{\partial u}{\partial t} = -2\nu \frac{\partial}{\partial t} \left( \frac{\phi_x}{\phi} \right)
$$
$$
\frac{\partial u}{\partial x} = -2\nu \frac{\partial}{\partial x} \left( \frac{\phi_x}{\phi} \right)
$$
$$
\frac{\partial^2 u}{\partial x^2} = -2\nu \frac{\partial^2}{\partial x^2} \left( \frac{\phi_x}{\phi} \right)
$$

#### 步骤 3：代入 Burgers 方程
将上述导数代入 Burgers 方程：
$$
-2\nu \frac{\partial}{\partial t} \left( \frac{\phi_x}{\phi} \right) + \left( -2\nu \frac{\phi_x}{\phi} \right) \left( -2\nu \frac{\partial}{\partial x} \left( \frac{\phi_x}{\phi} \right) \right) = \nu \left( -2\nu \frac{\partial^2}{\partial x^2} \left( \frac{\phi_x}{\phi} \right) \right)
$$

#### 步骤 4：化简方程
通过化简，可以得到：
$$
\frac{\partial \phi}{\partial t} = \nu \frac{\partial^2 \phi}{\partial x^2}
$$
这是一个线性热传导方程，其解可以通过标准方法求得。

#### 步骤 5：求解热传导方程
热传导方程的解为：
$$
\phi(x, t) = \frac{1}{\sqrt{4\pi\nu t}} \int_{-\infty}^{\infty} \exp\left( -\frac{(x - \xi)^2}{4\nu t} \right) \phi(\xi, 0) \, d\xi
$$

#### 步骤 6：通过 Cole-Hopf 变换得到 \( u(x, t) \)
最后，通过 Cole-Hopf 变换的逆变换，可以得到 Burgers 方程的解析解：
$$
u(x, t) = -2\nu \frac{\partial}{\partial x} \ln \phi(x, t)
$$

## 热传导方程的解及其证明

### 1. 热传导方程

热传导方程描述了热量在物体内部如何随时间分布的规律。最简单的形式是**一维热传导方程**：

$$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$$

其中：

*   $u(x, t)$ 表示位置 $x$ 在时间 $t$ 时的温度
*   $\alpha$ 是热扩散率，一个常数，表示材料导热能力的强弱

### 2. 热传导方程的解

热传导方程的解有很多种形式，具体形式取决于边界条件和初始条件。下面介绍几种常见的解：

#### 2.1. 分离变量法

分离变量法是一种常用的求解偏微分方程的方法。对于一维热传导方程，我们可以假设解的形式为 $u(x, t) = X(x)T(t)$。将其代入原方程，得到：

$$X(x)T'(t) = \alpha X''(x)T(t)$$

两边同时除以 $\alpha X(x)T(t)$，得到：

$$\frac{T'(t)}{\alpha T(t)} = \frac{X''(x)}{X(x)} = -\lambda^2$$

其中 $-\lambda^2$ 是一个常数，这样我们就将原方程分解为两个常微分方程：

$$\begin{cases} X''(x) + \lambda^2 X(x) = 0 \\ T'(t) + \alpha \lambda^2 T(t) = 0 \end{cases}$$

这两个方程的解分别为：

$$\begin{cases} X(x) = A\sin(\lambda x) + B\cos(\lambda x) \\ T(t) = Ce^{-\alpha \lambda^2 t} \end{cases}$$

因此，原方程的解为：

$$u(x, t) = (A\sin(\lambda x) + B\cos(\lambda x))Ce^{-\alpha \lambda^2 t}$$

其中 $A$、$B$、$C$ 和 $\lambda$ 是常数，由边界条件和初始条件确定。

#### 2.2. 行波解

行波解是一种特殊形式的解，表示热量以恒定的速度传播。对于一维热传导方程，行波解的形式为：

$$u(x, t) = f(x - ct)$$

其中 $f$ 是一个任意函数，$c$ 是波速。将行波解代入原方程，得到：

$$-cf'(x - ct) = \alpha f''(x - ct)$$

令 $\xi = x - ct$，则有：

$$-cf'(\xi) = \alpha f''(\xi)$$

这是一个常微分方程，解为：

$$f(\xi) = Ae^{-\frac{c}{\alpha}\xi} + B$$

因此，行波解为：

$$u(x, t) = Ae^{-\frac{c}{\alpha}(x - ct)} + B$$

其中 $A$ 和 $B$ 是常数。

### 3. 热传导方程解的证明

热传导方程的解是否正确，可以通过将其代入原方程进行验证。下面以分离变量法得到的解为例进行证明：

将 $u(x, t) = (A\sin(\lambda x) + B\cos(\lambda x))Ce^{-\alpha \lambda^2 t}$ 代入 $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$，得到：

$$(A\sin(\lambda x) + B\cos(\lambda x))C(-\alpha \lambda^2)e^{-\alpha \lambda^2 t} = \alpha (-A\lambda^2\sin(\lambda x) - B\lambda^2\cos(\lambda x))Ce^{-\alpha \lambda^2 t}$$

化简后，等式两边相等，因此该解是正确的。

### 4. 总结

热传导方程的解有多种形式，具体形式取决于边界条件和初始条件。分离变量法和行波解是两种常见的求解方法。通过将解代入原方程，可以验证解的正确性。


是的，给定的函数 $ u(x, t) = \frac{1}{\sqrt{4\pi \nu t}} e^{-\frac{x^2}{4\nu t}} $ 是一维热传导方程的一个解。热传导方程（也称为扩散方程）在无源项的情况下写作：

$$
\frac{\partial u}{\partial t} = \nu \frac{\partial^2 u}{\partial x^2}
$$

其中，$ \nu $ 是热扩散率。要证明给定的 $ u(x, t) $ 是该方程的解，我们需要计算 $ u(x, t) $ 关于 $ t $ 的一阶偏导数和关于 $ x $ 的二阶偏导数，并验证它们满足上述热传导方程。

### 计算步骤

#### 1. 计算 $ \frac{\partial u}{\partial t} $

$u(x, t) = \frac{1}{\sqrt{4\pi \nu t}} e^{-\frac{x^2}{4\nu t}}$

使用链式法则，

$$
\frac{\partial u}{\partial t} = \frac{\partial}{\partial t}\left(\frac{1}{\sqrt{4\pi \nu t}}\right)e^{-\frac{x^2}{4\nu t}} + \frac{1}{\sqrt{4\pi \nu t}}\frac{\partial}{\partial t}\left(e^{-\frac{x^2}{4\nu t}}\right)
$$

计算得到，

$$
\frac{\partial u}{\partial t} = -\frac{1}{2t}u(x, t) + \frac{x^2}{4\nu t^2}u(x, t)
$$

简化后，

$$
\frac{\partial u}{\partial t} = \left(\frac{x^2}{4\nu t^2} - \frac{1}{2t}\right)u(x, t)
$$

#### 2. 计算 $ \frac{\partial^2 u}{\partial x^2} $

首先求 $\frac{\partial u}{\partial x}$，

$$
\frac{\partial u}{\partial x} = \frac{-x}{2\nu t}u(x, t)
$$

然后求 $ \frac{\partial^2 u}{\partial x^2} $，

$$
\frac{\partial^2 u}{\partial x^2} = \frac{-1}{2\nu t}u(x, t) + \left(\frac{-x}{2\nu t}\right)^2u(x, t)
$$

简化后，

$$
\frac{\partial^2 u}{\partial x^2} = \left(\frac{x^2}{4\nu^2 t^2} - \frac{1}{2\nu t}\right)u(x, t)
$$

由于 $\nu \frac{\partial^2 u}{\partial x^2} = \nu\left(\frac{x^2}{4\nu^2 t^2} - \frac{1}{2\nu t}\right)u(x, t) = \left(\frac{x^2}{4\nu t^2} - \frac{1}{2t}\right)u(x, t)$，这与 $ \frac{\partial u}{\partial t} $ 相等，因此 $ u(x, t) $ 满足热传导方程。

### 结论

通过计算 $u(x, t)$ 对时间和空间的偏导数，并证明它们满足热传导方程，我们确认了 $u(x, t) = \frac{1}{\sqrt{4\pi \nu t}} e^{-\frac{x^2}{4\nu t}}$ 确实是热传导方程的一个解。这是热核（Heat Kernel）的一个形式，它在物理学中用来描述热量如何随时间在介质中扩散。


### Cole-Hopf 变换证明

1. **Burgers 方程：**

$$
\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \nu \frac{\partial^2 u}{\partial x^2}
$$

2. **Cole-Hopf 变换：**

$$
u(x, t) = -2 \nu \frac{\partial \ln \phi(x, t)}{\partial x}
$$

3. **计算 $\frac{\partial u}{\partial t}$：**

$$
\frac{\partial u}{\partial t} = -2 \nu \frac{\partial}{\partial t} \left( \frac{\partial \ln \phi}{\partial x} \right) = -2 \nu \frac{\partial}{\partial x} \left( \frac{\partial \ln \phi}{\partial t} \right)
$$

使用链式法则：

$$
\frac{\partial \ln \phi}{\partial t} = \frac{1}{\phi} \frac{\partial \phi}{\partial t}
$$

所以：

$$
\frac{\partial u}{\partial t} = -2 \nu \frac{\partial}{\partial x} \left( \frac{1}{\phi} \frac{\partial \phi}{\partial t} \right)
$$

4. **计算 $u \frac{\partial u}{\partial x}$：**

$$
u \frac{\partial u}{\partial x} = \left( -2 \nu \frac{\partial \ln \phi}{\partial x} \right) \left( -2 \nu \frac{\partial^2 \ln \phi}{\partial x^2} \right) = 4 \nu^2 \frac{\partial \ln \phi}{\partial x} \frac{\partial^2 \ln \phi}{\partial x^2}
$$

使用链式法则：

$$
\frac{\partial^2 \ln \phi}{\partial x^2} = \frac{1}{\phi} \frac{\partial^2 \phi}{\partial x^2} - \frac{1}{\phi^2} \left( \frac{\partial \phi}{\partial x} \right)^2
$$

所以：

$$
u \frac{\partial u}{\partial x} = 4 \nu^2 \left( \frac{1}{\phi} \frac{\partial \phi}{\partial x} \right) \left( \frac{1}{\phi} \frac{\partial^2 \phi}{\partial x^2} - \frac{1}{\phi^2} \left( \frac{\partial \phi}{\partial x} \right)^2 \right)
$$

简化：

$$
u \frac{\partial u}{\partial x} = 4 \nu^2 \left( \frac{1}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2} - \frac{1}{\phi^3} \left( \frac{\partial \phi}{\partial x} \right)^3 \right)
$$

5. **计算 $\nu \frac{\partial^2 u}{\partial x^2}$：**

$$
\frac{\partial^2 u}{\partial x^2} = -2 \nu \frac{\partial^2}{\partial x^2} \left( \frac{\partial \ln \phi}{\partial x} \right) = -2 \nu \frac{\partial}{\partial x} \left( \frac{1}{\phi} \frac{\partial^2 \phi}{\partial x^2} - \frac{1}{\phi^2} \left( \frac{\partial \phi}{\partial x} \right)^2 \right)
$$

所以：

$$
\nu \frac{\partial^2 u}{\partial x^2} = -2 \nu^2 \left( \frac{\partial}{\partial x} \left( \frac{1}{\phi} \frac{\partial^2 \phi}{\partial x^2} \right) - \frac{\partial}{\partial x} \left( \frac{1}{\phi^2} \left( \frac{\partial \phi}{\partial x} \right)^2 \right) \right)
$$

使用乘积法则和链式法则：

$$
\frac{\partial}{\partial x} \left( \frac{1}{\phi} \frac{\partial^2 \phi}{\partial x^2} \right) = -\frac{1}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2} + \frac{1}{\phi} \frac{\partial^3 \phi}{\partial x^3}
$$

$$
\frac{\partial}{\partial x} \left( \frac{1}{\phi^2} \left( \frac{\partial \phi}{\partial x} \right)^2 \right) = -\frac{2}{\phi^3} \left( \frac{\partial \phi}{\partial x} \right)^3 + \frac{2}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2}
$$

所以：

$$
\nu \frac{\partial^2 u}{\partial x^2} = -2 \nu^2 \left( -\frac{1}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2} + \frac{1}{\phi} \frac{\partial^3 \phi}{\partial x^3} - \left( -\frac{2}{\phi^3} \left( \frac{\partial \phi}{\partial x} \right)^3 + \frac{2}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2} \right) \right)
$$

简化：

$$
\nu \frac{\partial^2 u}{\partial x^2} = 2 \nu^2 \left( \frac{1}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2} - \frac{1}{\phi} \frac{\partial^3 \phi}{\partial x^3} + \frac{2}{\phi^3} \left( \frac{\partial \phi}{\partial x} \right)^3 - \frac{2}{\phi^2} \frac{\partial \phi}{\partial x} \frac{\partial^2 \phi}{\partial x^2} \right)
$$

6. **将所有项代入 Burgers 方程：**

$$
\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \nu \frac{\partial^2 u}{\partial x^2}
$$

代入上述计算结果，可以验证等式成立。  （此处省略了最终的代入和化简步骤，因为比较繁琐，但原理就是将3,4,5的计算结果代入到原方程中，最终可以证明等式成立。）

### 给定的初值条件

给定的初值条件是  \( u(x, 0) = 0.25 + 0.5 \sin(\pi x) \)。要找到这个初值条件下的 Burgers 方程的解析解，我们可以使用 Cole-Hopf 变换。

### Cole-Hopf 变换

Cole-Hopf 变换的形式为：

$$
u(x, t) = -2 \nu \frac{\partial \ln \phi(x, t)}{\partial x}
$$

其中 \( u(x, t) \) 是 Burgers 方程的解，\( \phi(x, t) \) 是热传导方程的解，\(\nu\) 是粘性系数。

### 初值条件

给定 \( u(x, 0) = 0.25 + 0.5 \sin(\pi x) \)，通过 Cole-Hopf 变换找到 \( \phi(x, 0) \)：

$$
0.25 + 0.5 \sin(\pi x) = -2 \nu \frac{\partial \ln \phi(x, 0)}{\partial x}
$$

### 求解线性热传导方程

使用 \( \phi(x, 0) \) 作为初值，求解线性热传导方程：

$$
\frac{\partial \phi}{\partial t} = \nu \frac{\partial^2 \phi}{\partial x^2}
$$

### 反变换

使用求得的 \( \phi(x, t) \) 通过 Cole-Hopf 变换反变换得到 \( u(x, t) \)：

$$
u(x, t) = -2 \nu \frac{\partial \ln \phi(x, t)}{\partial x}
$$

### 特定初值条件下的解析解

对于特定的初值条件 \( u(x, 0) = 0.25 + 0.5 \sin(\pi x) \)，可以找到解析解。在这种情况下，\( \phi(x, t) \) 的解可以表示为：

$$
\phi(x, t) = \exp\left(-\frac{\pi^2 \nu t}{2}\right) \cos(\pi x)
$$

然后使用 Cole-Hopf 变换得到 \( u(x, t) \)：

$$
u(x, t) = -2 \nu \frac{\partial \ln \phi(x, t)}{\partial x} = -2 \nu \frac{\partial}{\partial x} \left( -\frac{\pi^2 \nu t}{2} + \ln(\cos(\pi x)) \right)
$$

$$
u(x, t) = -2 \nu \left( -\pi \tan(\pi x) \right) = 2 \pi \nu \tan(\pi x)
$$

### 总结

Burgers 方程的解析解通常很难找到，但使用 Cole-Hopf 变换可以将非线性 Burgers 方程转化为线性热传导方程，从而在某些特定初值条件下找到解析解。希望这个解释和公式对您有所帮助！


常用积分公式
常数函数的积分：
$$
\int a , dx = ax + C
$$

其中 (a) 是常数，(C) 是积分常数。

幂函数的积分：
$$
\int x^n , dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)
$$

其中 (n) 是实数，(C) 是积分常数。

指数函数的积分：
$$
\int e^x , dx = e^x + C
$$

其中 (C) 是积分常数。

对数函数的积分：
$$
\int \frac{1}{x} , dx = \ln |x| + C
$$

其中 (C) 是积分常数。

正弦函数的积分：
$$
\int \sin x , dx = -\cos x + C
$$

其中 (C) 是积分常数。

余弦函数的积分：
$$
\int \cos x , dx = \sin x + C
$$

其中 (C) 是积分常数。

正切函数的积分：
$$
\int \tan x , dx = -\ln |\cos x| + C
$$

其中 (C) 是积分常数。

余切函数的积分：
$$
\int \cot x , dx = \ln |\sin x| + C
$$

其中 (C) 是积分常数。

正割函数的积分：
$$
\int \sec x , dx = \ln |\sec x + \tan x| + C
$$

其中 (C) 是积分常数。

余割函数的积分：
$$
\int \csc x , dx = -\ln |\csc x + \cot x| + C
$$

其中 (C) 是积分常数。

反正弦函数的积分：
$$
\int \frac{1}{\sqrt{a^2 - x^2}} , dx = \arcsin \left(\frac{x}{a}\right) + C
$$

其中 (a) 是常数，(C) 是积分常数。

反余弦函数的积分：
$$
\int \frac{1}{\sqrt{a^2 - x^2}} , dx = \arccos \left(\frac{x}{a}\right) + C
$$

其中 (a) 是常数，(C) 是积分常数。

反正切函数的积分：
$$
\int \frac{1}{a^2 + x^2} , dx = \frac{1}{a} \arctan \left(\frac{x}{a}\right) + C
$$

其中 (a) 是常数，(C) 是积分常数。

反余切函数的积分：
$$
\int \frac{1}{a^2 + x^2} , dx = \frac{1}{a} \text{arccot} \left(\frac{x}{a}\right) + C
$$

其中 (a) 是常数，(C) 是积分常数。

双曲正弦函数的积分：
$$
\int \sinh x , dx = \cosh x + C
$$

其中 (C) 是积分常数。

双曲余弦函数的积分：
$$
\int \cosh x , dx = \sinh x + C
$$

其中 (C) 是积分常数。

双曲正切函数的积分：
$$
\int \tanh x , dx = \ln |\cosh x| + C
$$

其中 (C) 是积分常数。

双曲余切函数的积分：
$$
\int \coth x , dx = \ln |\sinh x| + C
$$

其中 (C) 是积分常数。

双曲正割函数的积分：
$$
\int \text{sech} x , dx = 2 \arctan (e^x) + C
$$

其中 (C) 是积分常数。

双曲余割函数的积分：
$$
\int \text{csch} x , dx = -2 \arctan (e^{-x}) + C
$$

其中 (C) 是积分常数。

```fortran
subroutine reconstruction(u,nx,up1_2m,up1_2p,dd,il,ir,coef,iorder,ighost)
    implicit none
    real(8) :: u(-ighost:nx+ighost)
    real(8) :: up1_2m(0:nx),up1_2p(0:nx)            
    real(8) :: dd(0:ighost-1,-ighost:nx+ighost)
    real(8) :: coef(-1:iorder-1,0:iorder-1)
    integer :: il(0:nx), ir(0:nx)
    integer :: i, j, k1, k2, l1, l2, m, nx
    integer :: iorder, ighost
      
    !chose the stencil by ENO method
    do j=-ighost,nx+ighost
        dd(0,j)=u(j)
    enddo
    do i=1,iorder-1
        do j=-ighost,nx+ighost-1
            dd(i,j)=dd(i-1,j+1)-dd(i-1,j)
        enddo
    enddo 
    
    do j=0,nx 
        il(j)=j
        ir(j)=j+1
        do i=1,iorder-1  
            if( abs(dd(i,il(j)-1)) <= abs(dd(i,il(j))) ) then
                il(j)=il(j)-1 
            endif
            if( abs(dd(i,ir(j)-1)) <= abs(dd(i,ir(j))) ) then
                ir(j)=ir(j)-1 
            endif
        enddo
    enddo
    
    !reconstruction u(j+1_2)
    do j = 0, nx
        k1=il(j)       
        k2=ir(j)
        l1=j-k1
        l2=j-k2
        up1_2m(j)=0
        up1_2p(j)=0
        do m=0,iorder-1 
            up1_2m(j)=up1_2m(j)+u(k1+m)*coef(l1,m)
            up1_2p(j)=up1_2p(j)+u(k2+m)*coef(l2,m)
        enddo  
    enddo
    
end subroutine reconstruction
    
!calculate  numerical flux   
subroutine getflux(up1_2m,up1_2p,flux,nx)
    implicit none
    real(8) :: up1_2m(0:nx),up1_2p(0:nx),flux(0:nx)
    integer :: i, nx
      
    do i = 0, nx
        if ( up1_2m(i) >= 0 ) then
            if ( up1_2p(i) >= 0 )  then
                flux(i) = 0.5 * up1_2m(i) * up1_2m(i)
            else 
                flux(i) = 0.5 * ( up1_2m(i) * up1_2m(i) + up1_2p(i) * up1_2p(i) )
            endif    
        else
            if ( up1_2p(i) >= 0 )  then
                flux(i) = 0
            else
                flux(i) = 0.5 * up1_2p(i) * up1_2p(i)
            endif
        endif    
    enddo            
end subroutine getflux
    
subroutine rhs(up1_2m,up1_2p,nx,dx,res)
    implicit none
    real(8) :: up1_2m(0:nx), up1_2p(0:nx), flux(0:nx)
    real(8) :: res(1:nx)
    real(8) :: dx
    integer :: nx, i
    
    call getflux(up1_2m,up1_2p,flux,nx)
    
    do i = 1, nx
        res(i) = - ( flux(i) - flux(i-1) ) / dx
    enddo    
end subroutine rhs
    
subroutine boundary( u, nx, ighost )
    implicit none
    integer :: nx, ighost
    real(8) :: u(-ighost:nx+ighost)
    integer :: i
    
    do i = 0, - ighost, - 1
        u( i ) = u( i + nx )
    enddo
    
    do i = nx + 1, nx + ighost
        u( i ) = u( i - nx )
    enddo
end subroutine
      
program main  
    implicit none
    integer, parameter :: nx = 40
    integer, parameter :: ighost = 10
    integer, parameter :: iorder = 2
    integer, parameter :: isize = iorder * ( iorder + 1 )
    real(8), parameter :: pi = 3.14159265358979323846
    real(8) :: pu(-ighost:nx+ighost), su(-ighost:nx+ighost)
    real(8) :: u1(-ighost:nx+ighost), u2(-ighost:nx+ighost)
    real(8) :: u0(1:nx), x(-ighost:nx+ighost)
    real(8) :: up1_2m(0:nx), up1_2p(0:nx), flux(0:nx)
    real(8) :: res(1:nx)
    real(8) :: dd(0:ighost-1, -ighost:nx+ighost)
    real(8) :: coef(-1:iorder-1,0:iorder-1) 
    integer :: il(0:nx), ir(0:nx)
    integer :: i, j, icount
    real(8) :: supt, t, temp, t1, t2, error, it
    real(8) :: dx, dt
    real(8) :: values(isize) = [1.5d0, -0.5d0, 0.5d0, 0.5d0, -0.5d0, 1.5d0]
            
    dx = 2.0 / nx
    dt = dx * 0.5
    
    write(*,*) 'dx = ', dx, 'dt = ', dt
    write(*,*) 'Input T:'
    read(*,*) supt 
      
!   2nd-order coefficients       
    icount = 1
    do i = -1, iorder-1
        do j = 0, iorder-1
            coef(i, j) = values(icount)
            icount = icount + 1
        end do
    end do    
!   Initialize grid and initial conditions
    do i= - ighost, nx + ighost
        x(i) = (i-1) * dx + dx/2 - 1.0
    enddo
      
!   Initial mean value 1      
    do i = 1, nx 
        pu(i) = 0.25 + 0.5 * sin( pi * x(i) )
    enddo
    
    call boundary( pu, nx, ighost )
    
    do i = 0, nx
       u0(i) = pu(i)
    enddo                           

!   Time stepping
    t = 0                      
    do while ( t < supt ) 
        call reconstruction(pu,nx,up1_2m,up1_2p,dd,il,ir,coef,iorder,ighost)
        call rhs(up1_2m,up1_2p,nx,dx,res)
        do i = 1, nx
            !ress = - ( flux(i) - flux(i-1) ) / dx
            u1(i) = pu(i) + dt * res(i)
        enddo
        
        call boundary( u1, nx, ighost )
        
        call reconstruction(u1,nx,up1_2m,up1_2p,dd,il,ir,coef,iorder,ighost)
        call rhs(up1_2m,up1_2p,nx,dx,res)

        do i = 1, nx
            u2(i) = 3.0/4.0 * pu(i) + 1.0/4.0 * u1(i) + 1.0/4.0 * dt * res(i)
        enddo
        
        call boundary( u2, nx, ighost )
        
        call reconstruction(u2,nx,up1_2m,up1_2p,dd,il,ir,coef,iorder,ighost)
        call rhs(up1_2m,up1_2p,nx,dx,res)

        do i = 1, nx                                
            t1 = 1.0/3
            t2 = 2.0/3
            su(i) = t1 * pu(i) + t2 * u2(i) + t2 * dt * res(i)
        enddo
        
        call boundary( su, nx, ighost )
           
        do i=-ighost,nx+ighost
            pu(i)=su(i)
        enddo
        
        t = t + dt
        if ( t + dt > supt ) then
            dt = supt - t
        endif 
    enddo       

     
    do i = 1, nx
        !if( x(i) > 0.2 .and. x(i) < 0.8 ) then
        error = error + abs( u0(i) - pu(i) )
        it = it + 1
        !endif  
    enddo
    error = error / it
     
    write(*, *) 'Final time:', t
    write(*, *) 'Error:', error
    
    open(1,file='temp.plt',status='unknown')
    do i=-ighost,nx+ighost
        write(1,101) x(i),pu(i)
    enddo
    close(1)
    open(2,file='solution.plt',status='unknown')
    do i=1,nx
        write(2,101) x(i),pu(i)
    enddo
    close(2)
    101 format(1x,e20.10,e20.10)
end program main
```
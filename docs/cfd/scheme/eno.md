# ENO

## ENO Link

- [WENO schemes](https://eric2003.github.io/OneFLOW/cfd/scheme/weno.html).
- [Efficient Finite Difference WENO Scheme for Hyperbolic Systems with Non-Conservative Products and Stiff Source Terms](https://www.youtube.com/watch?v=D87ctxheEr0).
- [Prof. Chi-Wang Shu: Mathematics in Scientific Computing](https://www.youtube.com/watch?v=0FdOVvCJJEk).


## 第八章 ENO 和 weighted ENO 方法

1986年 Harten[93] 提出了无振荡格式（non-oscillatory）的概念和思想。来年，他和 Engquist, Osher 和 Chakravathy 等人提出了本质无振荡（essentially non-oscillatory）格式的方案和方法[93-97]，文献[97]完整而系统地讨论和研究了这种方法的基本结构、步骤和理论。由于本文开创性的历史意义，1997年美国举世闻名的 J. Comput. Phys. 杂志为了纪念其 30 周年而出版的纪念文集中，再次重新发表了全文，Shu 为此写了专门的纪念文章[204]，可以说，ENO 方法的创立，在守恒律方程（组）的高阶和高分辨率数值方法的设计上，找到了一种比较统一而有效的途径。

ENO 方法采用了逐次扩展的节点模板，根据各阶差商的绝对值极小选择方式，提高插值方法精度而实现高分辨率和无振荡的效果。但是，方法的实施过程中，有许多中间计算结果被可惜的丢弃不用。1994 年的文献[149]，提出了 weighted ENO 方案，将这个不足作了弥补，因此得到了更为广泛的应用[203,205]。

### 8.1 一维标量方程的 ENO 和 weighted ENO 格式


# 一维标量方程的 ENO 和 weighted ENO 格式

# 8.1

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

1. **确定一个模板**

	例如可以取包括三个单元的模板，例如 $S = \{I_{i-1}, I_i, I_{i+1}\}$。

2. **构造多项式**：

	构造一个多项式，设为 $p(x)$，使其满足

	$$
	\frac{1}{\Delta x_j} \int_{x_{j-\frac{1}{2}}}^{x_{j+\frac{1}{2}}} p(x) dx = \bar{u}_j, \quad j = i - 1, i, i + 1 \tag{8.8}
	$$

	在所选择的模板上成立。上述模板下多项式 $p(x)$ 是唯一确定的不超过二次多项式，设

    $$
	p(x) = \hat{p}(\xi) = a_0 + a_1 \xi + a_2 \xi^2, \quad \xi = \frac{x - x_i}{\Delta x_i}
	$$

    现在的情况是 $j = i-1, i, i+1$。由(8.8)式得

    $$
    \begin{align*}
    j &= i-1: & a_0 - a_1 + \frac{26}{24} a_2 = \bar{u}_i, \\
    j &= i: & a_0 + \frac{1}{12} a_2 = \bar{u}_{i-1}. \\
    j &= i+1: & a_0 + a_1 + \frac{26}{24} a_2 = \bar{u}_{i+1}.
    \end{align*}
    $$

    解之，可得

	$$
	\begin{align*}
	a_0 &= \bar{u}_i - \frac{1}{24} \delta^2 \bar{u}_i, \\
	a_1 &= \frac{1}{2} \left( \bar{u}_{i+1} - \bar{u}_{i-1} \right), \\
	a_2 &= \frac{1}{2} \delta^2 \bar{u}_i\\
	\delta^2 \bar{u}_i&=\bar{u}_{i+1}-2\bar{u}_{i}+\bar{u}_{i-1}
	\end{align*}
	$$


以下是一个使用已知的单元格平均值来近似边界值并达到三阶精度的例子。我们将详细说明如何确定插值系数，并证明其精度为三阶。

### 问题背景
假设我们有一个一维均匀网格，网格单元定义为 $[x_{i-1/2}, x_{i+1/2}]$，网格间距为 $\Delta x = x_{i+1/2} - x_{i-1/2}$，单元格中心为 $x_i = \frac{x_{i-1/2} + x_{i+1/2}}{2}$。已知每个单元格的平均值 $\bar{u}_i$，定义为：

$$
\bar{u}_i = \frac{1}{\Delta x} \int_{x_{i-1/2}}^{x_{i+1/2}} u(x) \, dx
$$

我们的目标是利用相邻单元格的平均值（例如 $\bar{u}_{i-1}, \bar{u}_i, \bar{u}_{i+1}$）构造一个近似公式来估计边界值 $u(x_{i+1/2})$，并使其具有三阶精度，即误差为 $O(\Delta x^3)$。

### 插值公式的构造
为了达到三阶精度，我们可以假设边界值 $u(x_{i+1/2})$ 是相邻单元格平均值的线性组合：

$$
u(x_{i+1/2}) \approx a \bar{u}_{i-1} + b \bar{u}_i + c \bar{u}_{i+1}
$$

其中 $a, b, c$ 是待确定的系数。我们将通过 Taylor 展开法来确定这些系数，确保近似的前几阶导数项与真实值匹配，从而使误差达到 $O(\Delta x^3)$。

### Taylor 展开
首先，我们需要将单元格平均值 $\bar{u}_{i-1}, \bar{u}_i, \bar{u}_{i+1}$ 和边界值 $u(x_{i+1/2})$ 用 Taylor 级数展开到足够的阶数。假设 $u(x)$ 足够光滑，以 $x_i$ 为展开点。

#### 1. 单元格平均值的展开
对于 $\bar{u}_i$，其定义为单元 $[x_{i-1/2}, x_{i+1/2}]$（即 $[x_i - \frac{\Delta x}{2}, x_i + \frac{\Delta x}{2}]$）上的平均值：

$$
\bar{u}_i = \frac{1}{\Delta x} \int_{x_i - \frac{\Delta x}{2}}^{x_i + \frac{\Delta x}{2}} u(x) \, dx
$$

将 $u(x)$ 在 $x_i$ 处展开：

$$
u(x) = u(x_i) + u'(x_i) (x - x_i) + \frac{u''(x_i)}{2} (x - x_i)^2 + \frac{u'''(x_i)}{6} (x - x_i)^3 + O((x - x_i)^4)
$$

代入积分：

$$
\bar{u}_i = \frac{1}{\Delta x} \int_{x_i - \frac{\Delta x}{2}}^{x_i + \frac{\Delta x}{2}} \left[ u(x_i) + u'(x_i) (x - x_i) + \frac{u''(x_i)}{2} (x - x_i)^2 + \frac{u'''(x_i)}{6} (x - x_i)^3 + O((x - x_i)^4) \right] dx
$$

逐项计算：

- $\int_{x_i - \frac{\Delta x}{2}}^{x_i + \frac{\Delta x}{2}} u(x_i) \, dx = u(x_i) \cdot \Delta x$
- $\int_{x_i - \frac{\Delta x}{2}}^{x_i + \frac{\Delta x}{2}} (x - x_i) \, dx = 0$（奇函数对称积分）
- $\int_{x_i - \frac{\Delta x}{2}}^{x_i + \frac{\Delta x}{2}} (x - x_i)^2 \, dx = 2 \int_0^{\frac{\Delta x}{2}} t^2 \, dt = 2 \cdot \frac{1}{3} \left( \frac{\Delta x}{2} \right)^3 = \frac{\Delta x^3}{12}$
- $\int_{x_i - \frac{\Delta x}{2}}^{x_i + \frac{\Delta x}{2}} (x - x_i)^3 \, dx = 0$（奇函数）
- 高阶项 $O(\Delta x^4)$

因此：

$$
\bar{u}_i = u(x_i) + \frac{u''(x_i)}{2} \cdot \frac{\Delta x^3}{12 \Delta x} + O(\Delta x^4) = u(x_i) + \frac{u''(x_i)}{24} \Delta x^2 + O(\Delta x^4)
$$

对于 $\bar{u}_{i-1}$，中心在 $x_{i-1} = x_i - \Delta x$：

$$
\bar{u}_{i-1} = \frac{1}{\Delta x} \int_{x_i - \frac{3\Delta x}{2}}^{x_i - \frac{\Delta x}{2}} u(x) \, dx
$$

令 $x = x_{i-1} + s = x_i - \Delta x + s$，则 $s$ 从 $-\frac{\Delta x}{2}$ 到 $\frac{\Delta x}{2}$：

$$
u(x) = u(x_{i-1}) + u'(x_{i-1}) s + \frac{u''(x_{i-1})}{2} s^2 + \frac{u'''(x_{i-1})}{6} s^3 + O(s^4)
$$

$$
\bar{u}_{i-1} = u(x_{i-1}) + \frac{u''(x_{i-1})}{24} \Delta x^2 + O(\Delta x^4)
$$

将 $u(x_{i-1})$ 展开到 $x_i$：

$$
u(x_{i-1}) = u(x_i - \Delta x) = u(x_i) - u'(x_i) \Delta x + \frac{u''(x_i)}{2} \Delta x^2 - \frac{u'''(x_i)}{6} \Delta x^3 + O(\Delta x^4)
$$

$$
u''(x_{i-1}) = u''(x_i) - u'''(x_i) \Delta x + O(\Delta x^2)
$$

代入：

$$
\bar{u}_{i-1} = \left[ u(x_i) - u'(x_i) \Delta x + \frac{u''(x_i)}{2} \Delta x^2 - \frac{u'''(x_i)}{6} \Delta x^3 \right] + \frac{\Delta x^2}{24} \left[ u''(x_i) - u'''(x_i) \Delta x \right] + O(\Delta x^4)
$$

$$
= u(x_i) - u'(x_i) \Delta x + \left( \frac{1}{2} + \frac{1}{24} \right) u''(x_i) \Delta x^2 - \left( \frac{1}{6} + \frac{1}{24} \right) u'''(x_i) \Delta x^3 + O(\Delta x^4)
$$

$$
= u(x_i) - u'(x_i) \Delta x + \frac{13}{24} u''(x_i) \Delta x^2 - \frac{5}{24} u'''(x_i) \Delta x^3 + O(\Delta x^4)
$$

类似地，对于 $\bar{u}_{i+1}$，中心在 $x_{i+1} = x_i + \Delta x$：

$$
\bar{u}_{i+1} = u(x_i) + u'(x_i) \Delta x + \frac{13}{24} u''(x_i) \Delta x^2 + \frac{5}{24} u'''(x_i) \Delta x^3 + O(\Delta x^4)
$$

#### 2. 边界值的展开
对于 $u(x_{i+1/2}) = u(x_i + \frac{\Delta x}{2})$：

$$
u(x_{i+1/2}) = u(x_i) + u'(x_i) \frac{\Delta x}{2} + \frac{u''(x_i)}{2} \left( \frac{\Delta x}{2} \right)^2 + \frac{u'''(x_i)}{6} \left( \frac{\Delta x}{2} \right)^3 + O(\Delta x^4)
$$

$$
= u(x_i) + \frac{1}{2} u'(x_i) \Delta x + \frac{1}{8} u''(x_i) \Delta x^2 + \frac{1}{48} u'''(x_i) \Delta x^3 + O(\Delta x^4)
$$

### 确定系数 $a, b, c$

将 $\bar{u}_{i-1}, \bar{u}_i, \bar{u}_{i+1}$ 的展开代入近似公式：

$$
a \bar{u}_{i-1} + b \bar{u}_i + c \bar{u}_{i+1} = a \left[ u(x_i) - u'(x_i) \Delta x + \frac{13}{24} u''(x_i) \Delta x^2 - \frac{5}{24} u'''(x_i) \Delta x^3 \right] + b \left[ u(x_i) + \frac{1}{24} u''(x_i) \Delta x^2 \right] + c \left[ u(x_i) + u'(x_i) \Delta x + \frac{13}{24} u''(x_i) \Delta x^2 + \frac{5}{24} u'''(x_i) \Delta x^3 \right] + O(\Delta x^4)
$$

整理后：

- $u(x_i)$ 项：$(a + b + c)$
- $u'(x_i) \Delta x$ 项：$(-a + c)$
- $u''(x_i) \Delta x^2$ 项：$\left( \frac{13}{24} a + \frac{1}{24} b + \frac{13}{24} c \right)$
- $u'''(x_i) \Delta x^3$ 项：$\left( -\frac{5}{24} a + \frac{5}{24} c \right)$

与 $u(x_{i+1/2})$ 的展开比较，要求：

1. $a + b + c = 1$
2. $-a + c = \frac{1}{2}$
3. $\frac{13}{24} a + \frac{1}{24} b + \frac{13}{24} c = \frac{1}{8}$

解这个方程组：

- 从②得：$c = a + \frac{1}{2}$
- 代入①：$a + b + (a + \frac{1}{2}) = 1 \implies 2a + b + \frac{1}{2} = 1 \implies b = \frac{1}{2} - 2a$
- 代入③：

$$
\frac{13}{24} a + \frac{1}{24} \left( \frac{1}{2} - 2a \right) + \frac{13}{24} \left( a + \frac{1}{2} \right) = \frac{1}{8}
$$

$$
\frac{13}{24} a + \frac{1}{48} - \frac{1}{12} a + \frac{13}{24} a + \frac{13}{48} = \frac{1}{8}
$$

$$
\left( \frac{13}{24} - \frac{1}{12} + \frac{13}{24} \right) a + \left( \frac{1}{48} + \frac{13}{48} \right) = \frac{1}{8}
$$

$$
\left( \frac{13}{24} - \frac{2}{24} + \frac{13}{24} \right) a + \frac{14}{48} = \frac{1}{8}
$$

$$
\left( \frac{24}{24} \right) a + \frac{7}{24} = \frac{3}{24} \implies a + \frac{7}{24} = \frac{3}{24} \implies a = -\frac{4}{24} = -\frac{1}{6}
$$

- $c = a + \frac{1}{2} = -\frac{1}{6} + \frac{3}{6} = \frac{1}{3}$
- $b = \frac{1}{2} - 2 \left( -\frac{1}{6} \right) = \frac{1}{2} + \frac{1}{3} = \frac{5}{6}$

因此，系数为：

- $a = -\frac{1}{6}$
- $b = \frac{5}{6}$
- $c = \frac{1}{3}$

近似公式为：

$$
u(x_{i+1/2}) \approx -\frac{1}{6} \bar{u}_{i-1} + \frac{5}{6} \bar{u}_i + \frac{1}{3} \bar{u}_{i+1}
$$

### 精度验证
将系数代回，检查误差：

$$
-\frac{1}{6} \bar{u}_{i-1} + \frac{5}{6} \bar{u}_i + \frac{1}{3} \bar{u}_{i+1} = u(x_i) + \frac{1}{2} u'(x_i) \Delta x + \frac{1}{8} u''(x_i) \Delta x^2 + \left( -\frac{5}{24} \left( -\frac{1}{6} \right) + \frac{5}{24} \cdot \frac{1}{3} \right) u'''(x_i) \Delta x^3 + O(\Delta x^4)
$$

计算 $\Delta x^3$ 项系数：

$$
-\frac{5}{24} \left( -\frac{1}{6} \right) + \frac{5}{24} \cdot \frac{1}{3} = \frac{5}{144} + \frac{5}{72} = \frac{5}{144} + \frac{10}{144} = \frac{15}{144} = \frac{5}{48}
$$

而 $u(x_{i+1/2})$ 的 $\Delta x^3$ 项系数为 $\frac{1}{48}$，误差为：

$$
\left( \frac{5}{48} - \frac{1}{48} \right) u'''(x_i) \Delta x^3 = \frac{1}{12} u'''(x_i) \Delta x^3
$$

误差为 $O(\Delta x^3)$，表明该近似是三阶精度的。

### 结论
使用公式：

$$
u(x_{i+1/2}) \approx -\frac{1}{6} \bar{u}_{i-1} + \frac{5}{6} \bar{u}_i + \frac{1}{3} \bar{u}_{i+1}
$$

我们可以通过单元格平均值 $\bar{u}_{i-1}, \bar{u}_i, \bar{u}_{i+1}$ 近似边界值 $u(x_{i+1/2})$，且精度达到三阶。这通过匹配 Taylor 展开的前三项（常数项、一阶项、二阶项）并验证误差为 $\Delta x^3$ 阶得到了证明。
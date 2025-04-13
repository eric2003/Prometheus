# Lax-Friedrichs Flux

## Lax-Friedrichs Link

- [CFL condition and Lax-Friedrich numerical flux](https://scicomp.stackexchange.com/questions/18673/cfl-condition-and-lax-friedrich-numerical-flux).
- [The Lax–Friedrichs method in one-dimensional hemodynamics](https://arxiv.org/html/2501.16115v1).
- [A Comparison of Numerical Flux Formulas for the Euler Equations](http://ossanworld.com/cfdnotes/cfdnotes_math671_report.pdf).
- [The advection equation](https://lrhgit.github.io/tkt4140/allfiles/digital_compendium/._main021.html).
- [Numerical Methods for PDEs](https://github.com/mandli/numerical-methods-pdes).
- [Peter Lax](https://en.wikipedia.org/wiki/Peter_Lax).
- [Kurt Otto Friedrichs](https://en.wikipedia.org/wiki/Kurt_Otto_Friedrichs).
- [Numerical Methods for Engineers](https://leifh.folk.ntnu.no/teaching/tkt4140/._main000.html).


$$
\cfrac{\partial u}{\partial t}+c\cfrac{\partial u}{\partial x}=0\\
$$

## Lax-Friedrichs scheme

Lax-Friedrichs' scheme, written in the conservation form, is defined by the following flux function.

$$
\mathbf{F}_{j+\frac{1}{2}} = \frac{1}{2} \left[ f(\mathbf{U}_j^n) + f(\mathbf{U}_{j+1}^n) \right] - \frac{\Delta x}{2 \Delta t} \left[ \mathbf{U}_{j+1}^n - \mathbf{U}_j^n \right]. 
$$

It is well-known that the scheme is very dissipative. In the linear case, it can be shown that the amplitude error gets larger as the CFL number goes down.


# Lax-Friedrichs 通量推导：从原始格式到标准守恒格式

好的，我会以非常“傻瓜化”的方式，详细推导 Lax-Friedrichs 通量是如何从原始格式转换到标准守恒格式的，并解释每一步的变换过程。目标是让你完全明白为什么会得到：

$$
F_{i+1/2} = \frac{1}{2} [f(u_i) + f(u_{i+1})] - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_{i+1} - u_i)
$$

我们将从 Lax-Friedrichs 方法的原始形式开始，一步步推到通量形式。

---

## 起点：Lax-Friedrichs 的原始格式

Lax-Friedrichs 方法最初是用来离散化守恒型方程：

\[
\frac{\partial u}{\partial t} + \frac{\partial f(u)}{\partial x} = 0
\]

它的显式时间步进格式是：

\[
u_i^{n+1} = \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - \frac{\Delta t}{2 \Delta x} [f(u_{i+1}^n) - f(u_{i-1}^n)]
\]

- \(u_i^{n+1}\) 是下一时刻 \(t^{n+1}\) 在网格点 \(x_i\) 的值；
- \(u_{i-1}^n\) 和 \(u_{i+1}^n\) 是当前时刻 \(t^n\) 在左右网格点的值；
- \(f(u)\) 是通量函数，比如线性对流中 \(f(u) = a u\)；
- \(\Delta t\) 是时间步长，\(\Delta x\) 是空间步长。

### 这个公式是什么意思？
- 第一部分 \(\frac{1}{2} (u_{i-1}^n + u_{i+1}^n)\)：取左右两点的平均值，而不是直接用 \(u_i^n\)，这会让解“平滑”一些。
- 第二部分 \(-\frac{\Delta t}{2 \Delta x} [f(u_{i+1}^n) - f(u_{i-1}^n)]\)：这是通量的空间差分，模拟了 \(\frac{\partial f}{\partial x}\)。

我们的目标是把这个格式改写成标准守恒形式，然后找出 \(F_{i+1/2}\)。

---

## 目标：标准守恒格式

标准守恒格式是数值方法中常用的一种形式，写成：

\[
u_i^{n+1} = u_i^n - \frac{\Delta t}{\Delta x} (F_{i+1/2} - F_{i-1/2})
\]

- \(u_i^n\) 是当前时刻的值；
- \(F_{i+1/2}\) 是网格界面 \(x_{i+1/2}\)（即 \(x_i\) 和 \(x_{i+1}\) 之间）的数值通量；
- \(F_{i-1/2}\) 是网格界面 \(x_{i-1/2}\)（即 \(x_{i-1}\) 和 \(x_i\) 之间）的数值通量。

这个形式的意思是：下一时刻的值 \(u_i^{n+1}\) 等于当前值 \(u_i^n\)，减去通量在左右界面的净变化（乘以时间步长比例）。

### 任务
我们要把原始格式：

\[
u_i^{n+1} = \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - \frac{\Delta t}{2 \Delta x} [f(u_{i+1}^n) - f(u_{i-1}^n)]
\]

改成标准守恒格式的样子，然后找出 \(F_{i+1/2}\) 和 \(F_{i-1/2}\)。

---

## 推导过程：一步步变换

### 第1步：把原始格式写成“变化量”的形式

标准守恒格式的核心是 \(u_i^{n+1} = u_i^n - \text{某项}\)。但原始格式的左边是 \(u_i^{n+1}\)，右边却没有直接出现 \(u_i^n\)。我们需要“制造”一个 \(u_i^n\)。

把原始格式改写一下：

\[
u_i^{n+1} = \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - \frac{\Delta t}{2 \Delta x} [f(u_{i+1}^n) - f(u_{i-1}^n)]
\]

我们可以加上和减去 \(u_i^n\) 来调整它：

\[
u_i^{n+1} = u_i^n + \left[ \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n - \frac{\Delta t}{2 \Delta x} (f(u_{i+1}^n) - f(u_{i-1}^n)) \right]
\]

- 这里我加了一个 \(u_i^n\)，又减了一个 \(u_i^n\)，总值没变，只是为了让 \(u_i^n\) 显式出现。
- 现在右边变成了 \(u_i^n + \text{变化量}\)，更接近标准形式了。

### 第2步：整理变化量

看括号里的部分：

\[
\frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n - \frac{\Delta t}{2 \Delta x} (f(u_{i+1}^n) - f(u_{i-1}^n))
\]

我们希望把它写成 \(-\frac{\Delta t}{\Delta x} (F_{i+1/2} - F_{i-1/2})\)。先把 \(\frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n\) 整理一下：

\[
\frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n = \frac{1}{2} u_{i-1}^n + \frac{1}{2} u_{i+1}^n - u_i^n
\]

这部分不好直接看出是通量差的形式，我们先把整个式子代回去：

\[
u_i^{n+1} = u_i^n + \left[ \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n - \frac{\Delta t}{2 \Delta x} (f(u_{i+1}^n) - f(u_{i-1}^n)) \right]
\]

### 第3步：假设通量差形式，匹配两边

假设：

\[
\frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n - \frac{\Delta t}{2 \Delta x} (f(u_{i+1}^n) - f(u_{i-1}^n)) = -\frac{\Delta t}{\Delta x} (F_{i+1/2} - F_{i-1/2})
\]

两边同时乘以 \(-\frac{\Delta x}{\Delta t}\)，去掉负号：

\[
-\frac{\Delta x}{\Delta t} \left[ \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n - \frac{\Delta t}{2 \Delta x} (f(u_{i+1}^n) - f(u_{i-1}^n)) \right] = F_{i+1/2} - F_{i-1/2}
\]

### 第4步：展开并重新分组

计算左边：

\[
-\frac{\Delta x}{\Delta t} \left[ \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n \right] - \left( -\frac{\Delta x}{\Delta t} \right) \left[ -\frac{\Delta t}{2 \Delta x} (f(u_{i+1}^n) - f(u_{i-1}^n)) \right]
\]

- 第一部分：

\[
-\frac{\Delta x}{\Delta t} \left[ \frac{1}{2} (u_{i-1}^n + u_{i+1}^n) - u_i^n \right] = -\frac{\Delta x}{2 \Delta t} (u_{i-1}^n + u_{i+1}^n) + \frac{\Delta x}{\Delta t} u_i^n
\]

- 第二部分：

\[
-\frac{\Delta x}{\Delta t} \cdot \left( -\frac{\Delta t}{2 \Delta x} \right) (f(u_{i+1}^n) - f(u_{i-1}^n)) = \frac{1}{2} (f(u_{i+1}^n) - f(u_{i-1}^n))
\]

  - 注意：\(\frac{\Delta x}{\Delta t} \cdot \frac{\Delta t}{2 \Delta x} = \frac{1}{2}\)，负负得正。

所以：

\[
F_{i+1/2} - F_{i-1/2} = -\frac{\Delta x}{2 \Delta t} (u_{i-1}^n + u_{i+1}^n) + \frac{\Delta x}{\Delta t} u_i^n + \frac{1}{2} (f(u_{i+1}^n) - f(u_{i-1}^n))
\]


### 第5步：拆分成通量差

我们需要 \(F_{i+1/2} - F_{i-1/2}\)，假设：
- \(F_{i+1/2}\) 是与 \(u_i\) 和 \(u_{i+1}\) 相关的项；
- \(F_{i-1/2}\) 是与 \(u_{i-1}\) 和 \(u_i\) 相关的项。

试着写出：

\[
F_{i+1/2} = \frac{1}{2} f(u_i) + \frac{1}{2} f(u_{i+1}) - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_{i+1} - u_i)
\]

\[
F_{i-1/2} = \frac{1}{2} f(u_{i-1}) + \frac{1}{2} f(u_i) - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_i - u_{i-1})
\]

计算差：

\[
F_{i+1/2} - F_{i-1/2} = \left[ \frac{1}{2} f(u_i) + \frac{1}{2} f(u_{i+1}) - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_{i+1} - u_i) \right] - \left[ \frac{1}{2} f(u_{i-1}) + \frac{1}{2} f(u_i) - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_i - u_{i-1}) \right]
\]

展开：

\[
= \frac{1}{2} f(u_i) + \frac{1}{2} f(u_{i+1}) - \frac{1}{2} f(u_{i-1}) - \frac{1}{2} f(u_i) - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_{i+1} - u_i) + \frac{1}{2} \frac{\Delta x}{\Delta t} (u_i - u_{i-1})
\]

合并：
- \(f(u)\) 项：\(\frac{1}{2} f(u_i) - \frac{1}{2} f(u_i) = 0\)，剩下：

\[
\frac{1}{2} f(u_{i+1}) - \frac{1}{2} f(u_{i-1})
\]

- 耗散项：

\[
-\frac{1}{2} \frac{\Delta x}{\Delta t} (u_{i+1} - u_i) + \frac{1}{2} \frac{\Delta x}{\Delta t} (u_i - u_{i-1}) = \frac{1}{2} \frac{\Delta x}{\Delta t} (-u_{i+1} + u_i + u_i - u_{i-1}) = \frac{1}{2} \frac{\Delta x}{\Delta t} (2 u_i - u_{i+1} - u_{i-1})
\]

### 第6步：验证

把结果代回：

\[
F_{i+1/2} - F_{i-1/2} = \frac{1}{2} (f(u_{i+1}) - f(u_{i-1})) + \frac{1}{2} \frac{\Delta x}{\Delta t} (2 u_i - u_{i+1} - u_{i-1})
\]

再与第4步对比：

\[
-\frac{\Delta x}{2 \Delta t} (u_{i-1}^n + u_{i+1}^n) + \frac{\Delta x}{\Delta t} u_i^n + \frac{1}{2} (f(u_{i+1}^n) - f(u_{i-1}^n))
\]

整理：

\[
= \frac{1}{2} (f(u_{i+1}) - f(u_{i-1})) + \frac{\Delta x}{\Delta t} u_i - \frac{\Delta x}{2 \Delta t} (u_{i-1} + u_{i+1})
\]

两式相等，说明我们猜的 \(F_{i+1/2}\) 是正确的。

---

## 最终结果

Lax-Friedrichs 通量为：

\[
F_{i+1/2} = \frac{1}{2} [f(u_i) + f(u_{i+1})] - \frac{1}{2} \frac{\Delta x}{\Delta t} (u_{i+1} - u_i)
\]

## 总结

- 从原始格式出发，我们想让它变成“当前值减去通量差”的样子；
- 通过加减 \(u_i^n\)，整理出变化量；
- 假设通量形式，匹配两边，推导出 \(F_{i+1/2}\)。
- \(\frac{\Delta x}{\Delta t}\) 是耗散项的系数，来源于原始格式的平均和差分设计。



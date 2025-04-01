# Engquist-Osher

## Link

- [High-Order Accurate Flux-Splitting Scheme for Conservation Laws with Discontinuous Flux Function in Space](https://www.mdpi.com/2227-7390/9/10/1079).

## Engquist-Osher Flux公式

在计算流体动力学（CFD）中，Engquist-Osher Flux是一种用于处理双曲守恒律的数值通量计算方法。它主要用于处理非线性守恒律的数值解，特别是在处理间断解（如激波）时表现出色。以下是Engquist-Osher Flux的公式及其详细解释。

### Engquist-Osher Flux公式

对于一维双曲守恒律方程：

$$
\frac{\partial u}{\partial t} + \frac{\partial f(u)}{\partial x} = 0
$$

Engquist-Osher Flux的数值通量可以表示为：

$$
F_{EO}(u_L, u_R) = \frac{1}{2} \left[ f(u_L) + f(u_R) - \int_{u_L}^{u_R} \text{sgn}(u) \frac{df(u)}{du} du \right]
$$

其中：

- $u_L$ 和 $u_R$ 分别是左侧和右侧的物理量。
- $f(u)$ 是物理量 $u$ 的通量函数。
- $\text{sgn}(u)$ 是符号函数，定义为：

$$
\text{sgn}(u) = 
\begin{cases} 
1 & \text{if } u > 0 \\
0 & \text{if } u = 0 \\
-1 & \text{if } u < 0 \\
\end{cases}
$$
 

### 公式解释


Engquist-Osher Flux的核心思想是通过积分来处理通量的非线性部分，从而确保数值通量的稳定性和准确性。具体来说，公式中的积分部分：

$$
\int_{u_L}^{u_R} \text{sgn}(u) \frac{df(u)}{du} du
$$

用于计算通量函数 \(f(u)\) 在 \(u_L\) 和 \(u_R\) 之间的变化，同时考虑了符号函数 \(\text{sgn}(u)\) 的影响。这种处理方式可以有效地捕捉间断解，如激波，而不会引入过多的数值耗散。

### 应用场景

Engquist-Osher Flux在CFD中主要用于处理以下问题：

1. **激波捕捉**：在处理激波等间断解时，Engquist-Osher Flux能够提供稳定的数值解，避免数值振荡。
2. **非线性守恒律**：对于非线性守恒律方程，如Euler方程，Engquist-Osher Flux能够有效地处理通量的非线性部分，确保数值解的准确性。

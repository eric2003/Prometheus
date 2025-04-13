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


# 一维线性对流方程的 Engquist-Osher 数值通量

一维线性对流方程是一个经典的偏微分方程，形式为：

$$
\frac{\partial u}{\partial t} + a \frac{\partial u}{\partial x} = 0,
$$

其中 $a$ 是常数，表示对流速度。对于该方程，通量函数 $f(u)$ 可以写成：

$$
f(u) = a u.
$$

Engquist-Osher 数值通量是一种用于离散化偏微分方程的数值方法，特别适合处理非线性问题中的激波和间断。尽管线性对流方程本身是线性的，但 Engquist-Osher 通量分裂的思想仍然可以应用。

---

## **Engquist-Osher 数值通量**

Engquist-Osher 数值通量的基本思想是将通量函数 $f(u)$ 分裂为两个部分：一个递增部分（正部分）和一个递减部分（负部分）。对于线性对流方程，数值通量定义为：

$$
F_{i+1/2} = F(u_i, u_{i+1}) = \int_0^{u_i} \max(f'(s), 0) \, ds + \int_0^{u_{i+1}} \min(f'(s), 0) \, ds,
$$

其中：

- $f'(s) = a$ 是通量函数的导数；
- $\max(f'(s), 0)$ 和 $\min(f'(s), 0)$ 分别表示正部分和负部分。

在线性对流方程中，$f'(s) = a$ 是常数，因此可以直接计算上述积分。

---

## **具体计算**

### 1. 正部分积分

$$
\int_0^{u_i} \max(f'(s), 0) \, ds = \int_0^{u_i} \max(a, 0) \, ds.
$$

当 $a > 0$ 时，$\max(a, 0) = a$，因此：

$$
\int_0^{u_i} \max(a, 0) \, ds = a \int_0^{u_i} 1 \, ds = a u_i.
$$

当 $a \leq 0$ 时，$\max(a, 0) = 0$，因此：

$$
\int_0^{u_i} \max(a, 0) \, ds = 0.
$$

综合起来：

$$
\int_0^{u_i} \max(f'(s), 0) \, ds = 
\begin{cases} 
a u_i, & \text{if } a > 0, \\
0, & \text{if } a \leq 0.
\end{cases}
$$

---

### 2. 负部分积分

$$
\int_0^{u_{i+1}} \min(f'(s), 0) \, ds = \int_0^{u_{i+1}} \min(a, 0) \, ds.
$$

当 $a < 0$ 时，$\min(a, 0) = a$，因此：

$$
\int_0^{u_{i+1}} \min(a, 0) \, ds = a \int_0^{u_{i+1}} 1 \, ds = a u_{i+1}.
$$

当 $a \geq 0$ 时，$\min(a, 0) = 0$，因此：

$$
\int_0^{u_{i+1}} \min(a, 0) \, ds = 0.
$$

综合起来：

$$
\int_0^{u_{i+1}} \min(f'(s), 0) \, ds = 
\begin{cases} 
a u_{i+1}, & \text{if } a < 0, \\
0, & \text{if } a \geq 0.
\end{cases}
$$

---

### **最终公式**

将上述结果代入 Engquist-Osher 数值通量公式，得到：

$$
F_{i+1/2} = 
\begin{cases} 
a u_i, & \text{if } a > 0, \\
a u_{i+1}, & \text{if } a < 0, \\
0, & \text{if } a = 0.
\end{cases}
$$

这与传统的迎风格式（Upwind Scheme）一致。

---

## **各项含义解释**

1. **通量函数 $f(u) = a u$**:
   - 这是线性对流方程的通量函数，表示物理系统的对流特性。
   - 对于线性对流方程，通量函数的导数 $f'(u) = a$ 是常数。

2. **正部分 $\max(f'(s), 0)$**:
   - 表示通量函数中沿正方向传播的信息。
   - 当 $a > 0$ 时，信息从左向右传播，因此使用左侧值 $u_i$。

3. **负部分 $\min(f'(s), 0)$**:
   - 表示通量函数中沿负方向传播的信息。
   - 当 $a < 0$ 时，信息从右向左传播，因此使用右侧值 $u_{i+1}$。

4. **数值通量 $F_{i+1/2}$**:
   - 这是网格界面 $i+1/2$ 处的数值通量，用于有限体积法或有限差分法中的离散化。
   - 它确保了数值解的守恒性和单调性。

---

## **总结**

对于一维线性对流方程，Engquist-Osher 数值通量的结果与迎风格式一致。尽管线性对流方程本身没有非线性项，但 Engquist-Osher 方法的思想仍然是分解通量函数为正负两部分，并根据传播方向选择适当的数值通量。这种方法在处理非线性问题（如无粘性 Burgers 方程）时尤为重要。

# 一维无粘性 Burgers 方程的 Engquist-Osher 数值通量

一维无粘性 Burgers 方程是一个经典的非线性偏微分方程，常用于研究激波和数值方法。其形式为：

$$
\frac{\partial u}{\partial t} + \frac{\partial f(u)}{\partial x} = 0,
$$

其中 $ f(u) = \frac{1}{2}u^2 $ 是通量函数。

为了用有限体积法离散这个方程，我们需要定义数值通量（numerical flux）。Engquist-Osher 数值通量是一种常用的单调守恒通量分裂方法，特别适用于处理非线性问题中的激波。

---

## **Engquist-Osher 数值通量**

Engquist-Osher 数值通量的基本思想是将通量函数 $ f(u) $ 分裂为两个单调部分：一个递增部分和一个递减部分。具体来说，数值通量定义为：

$$
F_{i+1/2} = F(u_i, u_{i+1}) = \int_0^{u_i} \max(f'(s), 0) \, ds + \int_0^{u_{i+1}} \min(f'(s), 0) \, ds,
$$

其中：

- $f'(s) = s$ 是通量函数的导数；
- $\max(f'(s), 0)$ 和 $\min(f'(s), 0)$ 分别表示正部分和负部分。

对于 Burgers 方程，由于 $f'(s) = s$，我们可以显式地计算这两个积分。

---

## **具体计算**

### 1. 计算正部分积分

$$
\int_0^{u_i} \max(f'(s), 0) \, ds = \int_0^{u_i} \max(s, 0) \, ds.
$$

当 $u_i > 0$ 时，$\max(s, 0) = s$，因此：

$$
\int_0^{u_i} \max(s, 0) \, ds = \int_0^{u_i} s \, ds = \frac{1}{2} u_i^2.
$$

当 $u_i \leq 0$ 时，$\max(s, 0) = 0$，因此：

$$
\int_0^{u_i} \max(s, 0) \, ds = 0.
$$

综合起来：

$$
\int_0^{u_i} \max(f'(s), 0) \, ds = 
\begin{cases} 
\frac{1}{2} u_i^2, & \text{if } u_i > 0, \\
0, & \text{if } u_i \leq 0.
\end{cases}
$$

### 2. 计算负部分积分

$$
\int_0^{u_{i+1}} \min(f'(s), 0) \, ds = \int_0^{u_{i+1}} \min(s, 0) \, ds.
$$

当 $u_{i+1} < 0$ 时，$\min(s, 0) = s$，因此：

$$
\int_0^{u_{i+1}} \min(s, 0) \, ds = \int_0^{u_{i+1}} s \, ds = \frac{1}{2} u_{i+1}^2.
$$

当 $u_{i+1} \geq 0$ 时，$\min(s, 0) = 0$，因此：

$$
\int_0^{u_{i+1}} \min(s, 0) \, ds = 0.
$$

综合起来：

$$
\int_0^{u_{i+1}} \min(f'(s), 0) \, ds = 
\begin{cases} 
\frac{1}{2} u_{i+1}^2, & \text{if } u_{i+1} < 0, \\
0, & \text{if } u_{i+1} \geq 0.
\end{cases}
$$

---

## **最终公式**

将上述结果代入 Engquist-Osher 数值通量公式，得到：

$$
F_{i+1/2} = 
\begin{cases} 
\frac{1}{2} u_i^2, & \text{if } u_i > 0 \text{ and } u_{i+1} \geq 0, \\
\frac{1}{2} u_{i+1}^2, & \text{if } u_i \leq 0 \text{ and } u_{i+1} < 0, \\
\frac{1}{2} u_i^2 + \frac{1}{2} u_{i+1}^2, & \text{if } u_i > 0 \text{ and } u_{i+1} < 0.
\end{cases}
$$

---

## **总结**

Engquist-Osher 数值通量通过分解通量函数为正负两部分，确保了数值解的单调性和守恒性，特别适合处理包含激波的问题。在实际计算中，可以按照上述公式直接实现该通量分裂方法。

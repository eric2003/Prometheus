# Runge-Kutta

## Runge-Kutta Link

- [WENO schemes](https://eric2003.github.io/OneFLOW/cfd/scheme/weno.html).

$$
\cfrac{\partial u}{\partial t}+c\cfrac{\partial u}{\partial x}=0\\
$$

$$
\begin{array}{l}
\cfrac{\partial u}{\partial t}+c\cfrac{\partial u}{\partial x}=0\\
\cfrac{\partial u}{\partial t}+\cfrac{\partial f(u)}{\partial x}=0\\
\cfrac{\partial u}{\partial t}=-\cfrac{\partial f(u)}{\partial x}\\
u_{t}=-\cfrac{\partial f(u)}{\partial x}=L(u)\\
\end{array}
$$

$$
F(u)=-L(u)=\cfrac{\partial f(u)}{\partial x}\\
$$


Third order TVD Runge-Kutta method  

$$
  \begin{array}{l}
  u^{(1)}=u^{n}+\Delta tL(u^{n})\\
  u^{(2)}=\cfrac{3}{4}u^{n}+\cfrac{1}{4}u^{(1)}+\cfrac{1}{4}\Delta tL(u^{(1)})\\
  u^{n+1}=\cfrac{1}{3}u^{n}+\cfrac{2}{3}u^{(2)}+\cfrac{2}{3}\Delta tL(u^{(2)})\\
  \end{array}
$$

ENO

$$
  \begin{array}{l}
  u^1 = u^n - \Delta {t} \cdot F(u^n)\\
  u^2 = \cfrac{3}{4} u^n + \cfrac{1}{4} (u^1 - \Delta {t}\cdot F(u^1))\\
  u^{n+1} = \cfrac{1}{3} u^n + \cfrac{2}{3} (u^2 - \Delta {t}\cdot F(u^2))\\
  \end{array}
$$

$$
  \begin{array}{l}
  u^1 = u^n - \Delta {t} \cdot F(u^n)\\
  u^2 = \cfrac{3}{4} u^n + \cfrac{1}{4} u^1 - \cfrac{1}{4}\Delta {t}\cdot F(u^1)\\
  u^{n+1} = \cfrac{1}{3} u^n + \cfrac{2}{3} u^2 - \cfrac{2}{3} \Delta {t}\cdot F(u^2)\\
  \end{array}
$$


# TVD 三阶 Runge-Kutta 方法介绍

下面我将介绍 TVD 三阶 Runge-Kutta 方法（Total Variation Diminishing 3rd-order Runge-Kutta），并详细解释其背景、公式推导和应用场景。

---

## 背景

Runge-Kutta 方法是一类用于求解常微分方程（ODE）的数值方法，广泛应用于时间离散化，尤其是偏微分方程（PDE）的数值求解中。对于守恒律形式的偏微分方程（如对流方程），时间离散化的稳定性非常重要。TVD（总变差递减，Total Variation Diminishing）方法是一种设计用来避免数值解中出现非物理振荡（特别是在激波附近）的技术。

TVD 三阶 Runge-Kutta 方法由 Shu 和 Osher 在 1988 年提出，结合了高阶精度（三阶）和 TVD 性质，特别适用于非线性守恒律方程的时间推进。它在空间离散（如有限体积法）的基础上，通过时间步进保持解的总变差不增加，从而保证数值解的单调性和稳定性。

---

## 数学形式

考虑一维守恒律方程：

\[
\frac{\partial u}{\partial t} + \frac{\partial f(u)}{\partial x} = 0,
\]

通过空间离散（例如使用有限体积法），将其转化为半离散形式：

\[
\frac{d u_i}{dt} = L(u_i),
\]

其中 \( u_i(t) \) 是网格单元 \( i \) 处的解，\( L(u_i) \) 是空间离散后的算子（例如包含数值通量的差分项）。

TVD 三阶 Runge-Kutta 方法是一种显式时间推进方案，用于求解上述 ODE 系统。其形式如下：

1. **第一步**：

\[
u^{(1)} = u^n + \Delta t L(u^n),
\]

2. **第二步**：

\[
u^{(2)} = \frac{3}{4} u^n + \frac{1}{4} u^{(1)} + \frac{1}{4} \Delta t L(u^{(1)}),
\]

3. **第三步**：

\[
u^{n+1} = \frac{1}{3} u^n + \frac{2}{3} u^{(2)} + \frac{2}{3} \Delta t L(u^{(2)}),
\]

其中：

- \( u^n \) 是当前时间步 \( t^n \) 的解，
- \( u^{n+1} \) 是下一时间步 \( t^{n+1} \) 的解，
- \( \Delta t \) 是时间步长，
- \( u^{(1)} \) 和 \( u^{(2)} \) 是中间阶段的解。

---

## 推导与性质

1. **三阶精度**：
   该方法的 Taylor 展开表明其时间离散误差为 \( O(\Delta t^3) \)，因此是三阶精度的。这种高阶精度通过三个阶段的加权组合实现。

2. **TVD 性质**：
   TVD 要求数值解的总变差 \( TV(u) = \sum_i |u_{i+1} - u_i| \) 在时间推进中不增加。TVD 三阶 Runge-Kutta 方法通过精心设计的系数（例如 \(\frac{3}{4}, \frac{1}{4}, \frac{1}{3}, \frac{2}{3}\)）确保在适当的 CFL 条件下，当空间离散算子 \( L \) 满足 TVD 性质时，整体方案也保持 TVD。

3. **CFL 条件**：
   对于非线性问题，TVD 性质通常要求时间步长满足：

\[
\text{CFL} = \max |f'(u)| \frac{\Delta t}{\Delta x} \leq 1,
\]

   但具体值可能因空间离散方案而略有调整。

---

## 优点与应用

- **优点**：
  - 三阶精度比一阶（如前向 Euler）或二阶 Runge-Kutta 方法更精确。
  - TVD 性质避免了激波或间断处的振荡，适合非线性对流问题（如 Burgers 方程、Euler 方程）。
  - 计算成本适中，比更高阶方法（如四阶 Runge-Kutta）更经济。

- **应用**：
  - 计算流体力学（CFD）中的激波捕捉。
  - 非线性偏微分方程的数值模拟。
  - 与高阶空间离散方法（如 WENO 方案）结合使用。

---

## 示例

假设我们用 TVD 三阶 Runge-Kutta 方法求解线性对流方程 \( \frac{\partial u}{\partial t} + a \frac{\partial u}{\partial x} = 0 \)，空间离散采用一阶迎风格式：

\[
L(u_i) = -a \frac{u_i - u_{i-1}}{\Delta x} \quad (a > 0).
\]

则时间推进为：

1. \( u^{(1)}_i = u^n_i - a \frac{\Delta t}{\Delta x} (u^n_i - u^n_{i-1}) \),
2. \( u^{(2)}_i = \frac{3}{4} u^n_i + \frac{1}{4} u^{(1)}_i - \frac{1}{4} a \frac{\Delta t}{\Delta x} (u^{(1)}_i - u^{(1)}_{i-1}) \),
3. \( u^{n+1}_i = \frac{1}{3} u^n_i + \frac{2}{3} u^{(2)}_i - \frac{2}{3} a \frac{\Delta t}{\Delta x} (u^{(2)}_i - u^{(2)}_{i-1}) \)。

---

# TVD 1~5 阶 Runge-Kutta 方法介绍

下面我将介绍 TVD（Total Variation Diminishing）1 至 5 阶 Runge-Kutta 方法，涵盖其背景、数学形式、性质和应用场景。

---

## 背景

Runge-Kutta 方法是一类用于求解常微分方程（ODE）的数值积分方法，常用于偏微分方程（PDE）的时间离散化。对于守恒律形式的 PDE（如对流方程 \( \frac{\partial u}{\partial t} + \frac{\partial f(u)}{\partial x} = 0 \)），空间离散后得到半离散形式：

\[
\frac{d u_i}{dt} = L(u_i),
\]

其中 \( L(u_i) \) 是空间离散算子。TVD 性质要求时间推进方案保持总变差 \( TV(u) = \sum_i |u_{i+1} - u_i| \) 不增加，以避免非物理振荡。TVD Runge-Kutta 方法通过设计特定的多阶段格式，在保证高阶精度的同时满足 TVD 条件。

以下分别介绍 1 至 5 阶的 TVD Runge-Kutta 方法。

---

## 一、TVD 1 阶 Runge-Kutta 方法

### 数学形式

TVD 1 阶 Runge-Kutta 方法是最简单的前向 Euler 方法：

\[
u^{n+1} = u^n + \Delta t L(u^n).
\]

### 性质

- **阶数**：一阶，误差为 \( O(\Delta t) \)。
- **TVD 条件**：当空间算子 \( L \) 满足 TVD 性质且 CFL 条件 \( \text{CFL} = \max |f'(u)| \frac{\Delta t}{\Delta x} \leq 1 \) 时，该方法保持 TVD。
- **优点**：简单，计算成本低。
- **缺点**：精度低，扩散误差大。

### 应用

适用于简单的线性对流问题或对精度要求不高的场景。

---

## 二、TVD 2 阶 Runge-Kutta 方法

### 数学形式

TVD 2 阶 Runge-Kutta 方法（也称为 Heun 方法的 TVD 变种）包含两个阶段：

1. \( u^{(1)} = u^n + \Delta t L(u^n), \)
2. \( u^{n+1} = \frac{1}{2} u^n + \frac{1}{2} u^{(1)} + \frac{1}{2} \Delta t L(u^{(1)}). \)

### 性质

- **阶数**：二阶，误差为 \( O(\Delta t^2) \)。
- **TVD 条件**：在 CFL 条件适当放宽（通常 \( \text{CFL} \leq 1 \)）下，结合 TVD 空间算子可保持总变差不增加。
- **优点**：比一阶精度更高，计算成本适中。
- **缺点**：TVD 限制可能导致精度退化。

### 应用

适用于中等复杂度的非线性问题，如 Burgers 方程。

---

## 三、TVD 3 阶 Runge-Kutta 方法

### 数学形式

TVD 3 阶 Runge-Kutta 方法由 Shu 和 Osher 提出：

1. \( u^{(1)} = u^n + \Delta t L(u^n), \)
2. \( u^{(2)} = \frac{3}{4} u^n + \frac{1}{4} u^{(1)} + \frac{1}{4} \Delta t L(u^{(1)}), \)
3. \( u^{n+1} = \frac{1}{3} u^n + \frac{2}{3} u^{(2)} + \frac{2}{3} \Delta t L(u^{(2)}). \)

### 性质

- **阶数**：三阶，误差为 \( O(\Delta t^3) \)。
- **TVD 条件**：在 \( \text{CFL} \leq 1 \) 下，与 TVD 空间算子配合可保持 TVD。
- **优点**：高精度与稳定性兼顾。
- **缺点**：需要更多中间计算。

### 应用

广泛用于计算流体力学（CFD）中的激波捕捉问题。

---

## 四、TVD 4 阶 Runge-Kutta 方法

### 数学形式

TVD 4 阶 Runge-Kutta 方法较少直接定义为标准形式，但可以通过强稳定性保持（SSP）方法构造。一个典型的 SSP 4 阶方案如下：

1. \( u^{(1)} = u^n + \frac{1}{2} \Delta t L(u^n), \)
2. \( u^{(2)} = u^n + \frac{1}{2} \Delta t L(u^{(1)}), \)
3. \( u^{(3)} = \frac{2}{3} u^n + \frac{1}{3} u^{(2)} + \frac{1}{6} \Delta t L(u^{(2)}), \)
4. \( u^{n+1} = u^n + \frac{1}{2} \Delta t L(u^{(3)}). \)

### 性质

- **阶数**：四阶，误差为 \( O(\Delta t^4) \)。
- **TVD 条件**：需更严格的 CFL 条件（通常 \( \text{CFL} \leq 0.5 \)），依赖于 SSP 理论。
- **优点**：精度更高。
- **缺点**：计算复杂性增加，TVD 限制更严格。

### 应用

适用于需要高精度的复杂非线性问题，但实际使用较少。

---

## 五、TVD 5 阶 Runge-Kutta 方法

### 数学形式

TVD 5 阶 Runge-Kutta 方法通常基于 SSP 框架设计，一个例子如下：

1. \( u^{(1)} = u^n + \frac{1}{5} \Delta t L(u^n), \)
2. \( u^{(2)} = u^n + \frac{2}{5} \Delta t L(u^{(1)}), \)
3. \( u^{(3)} = u^n + \frac{3}{5} \Delta t L(u^{(2)}), \)
4. \( u^{(4)} = u^n + \frac{4}{5} \Delta t L(u^{(3)}), \)
5. \( u^{n+1} = u^n + \Delta t L(u^{(4)}). \)

（注：具体系数可能因文献不同而调整，此为简化形式。）

### 性质

- **阶数**：五阶，误差为 \( O(\Delta t^5) \)。
- **TVD 条件**：CFL 条件非常严格（通常 \( \text{CFL} \leq 0.2 \)），实现 TVD 较困难。
- **优点**：极高精度。
- **缺点**：计算成本高，TVD 性质难以完全保证。

### 应用

理论研究多于实际应用，通常与高阶空间方案（如 WENO）结合。

---

## 总结与比较

- **阶数与精度**：从 1 阶到 5 阶，精度逐渐提高，但计算复杂度也增加。
- **TVD 稳定性**：低阶（1-3 阶）更容易满足 TVD，高阶（4-5 阶）需更严格条件。
- **应用场景**：1-2 阶用于简单问题，3 阶为实用性与精度的最佳平衡，4-5 阶多用于高精度需求的研究。
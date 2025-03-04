# SCHEME

## SCHEME Link

- [CFD Example in SU2: Start to Finish](https://www.youtube.com/watch?v=ZK8_RxVKuUE/).

## Heat Equation

$$
\cfrac{\partial u}{ \partial t}=\alpha \cfrac{\partial ^{2}u}{ \partial x^{2}}
$$

## Crank–Nicolson method

$$
  \cfrac{u^{n+1}_{i}-u^{n}_{i}}{\Delta t}=\cfrac{1}{2}\cfrac{\alpha}{\Delta x^{2}}
  \left[(u^{n+1}_{i+1}-2u^{n+1}_{i}+u^{n+1}_{i-1})+(u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1})\right]
$$

let

$$
r=\cfrac{1}{2}\cfrac{\alpha\Delta t}{\Delta x^{2}}
$$

we have

$$
-ru^{n+1}_{i-1}+(1+2r)u^{n+1}_{i}-ru^{n+1}_{i+1}=ru^{n}_{i-1}+(1-2r)u^{n}_{i}+ru^{n}_{i+1} 
$$

$$
a_{i}u^{n+1}_{i-1}+b_{i}u^{n+1}_{i}+c_{i}u^{n+1}_{i+1}=d^{n}_{i}
$$

$$
\begin{array}{l}
b_{0}u_{0}+c_{0}u_{1}=d_{0}-a_{0}u_{-1}\\
a_{1}u_{0}+b_{1}u_{1}+c_{1}u_{2}=d_{1}\\
\cdots\\
a_{i}u_{i-1}+b_{i}u_{i}+c_{i}u_{i+1}=d_{i}\\
\cdots\\
a_{N-2}u_{N-3}+b_{N-2}u_{N-2}+c_{N-2}u_{N-1}=d_{N-2}\\
a_{N-1}u_{N-2}+b_{N-1}u_{N-1}=d_{N-1}-c_{N-1}u_{N}\\
\end{array}
$$

$$
  \begin{bmatrix}
  b_{0}&c_{0}  &0&\cdots &0 \\
  a_{1}&b_{1}&c_{1}  &\cdots &0 \\
  \vdots&\vdots&  & &\vdots \\
  0&\cdots&a_{N-2}  &b_{N-2} &c_{N-2} \\
  0&0&\cdots  &a_{N-1} &b_{N-1} \\
  \end{bmatrix}
  \begin{bmatrix}
  u_{0}\\u_{1}\\\vdots \\u_{N-2}\\u_{N-1}
  \end{bmatrix}
  =\begin{bmatrix}
  \hat{d}_{0}\\ \hat{d}_{1}\\ \vdots \\ \hat{d}_{N-2}\\ \hat{d}_{N-1}
  \end{bmatrix}  
$$

## boundary

$$
\begin{array}{l}
  \cfrac{u^{n+1}_{i}-u^{n}_{i}}{\Delta t}=\cfrac{1}{2}\cfrac{\alpha}{\Delta x^{2}}
  \left[(u^{n+1}_{i+1}-2u^{n+1}_{i}+u^{n+1}_{i-1})+(u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1})\right]\\
  u^{n+1}_{i}-u^{n}_{i}=r
  \left[(u^{n+1}_{i+2}-2u^{n+1}_{i+1}+u^{n+1}_{i})+(u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1})\right]\\
  u^{n+1}_{i}-u^{n}_{i}=ru^{n+1}_{i+2}-2ru^{n+1}_{i+1}+ru^{n+1}_{i}+ru^{n}_{i+1}-2ru^{n}_{i}+ru^{n}_{i-1}\\
ru^{n+1}_{i+2}-2ru^{n+1}_{i+1}+(r-1)u^{n+1}_{i}=-ru^{n}_{i+1}+(2r-1)u^{n}_{i}-ru^{n}_{i-1}\\
\end{array}
$$


```cpp
  x=-1              x=1
 o  *  o  o ...  o   *    o
-1  0  1  2      N-2 N-1  N

```

## Implicit Compact Pade (ICP) Scheme

- [Implicit Compact Pade (ICP) Scheme](https://eric2003.github.io/OneFLOW/cfd/scheme/icp.html).

$$
\cfrac{\partial u}{\partial t}=\alpha\cfrac{\partial ^{2} u}{\partial x^{2}}
$$

$$
\cfrac{\partial ^{2} u}{\partial x^{2}}=\cfrac{1}{\alpha}\cfrac{\partial u}{\partial t}
$$

Compact finite difference schemes have very good resolution characteristics and can be used for capturing high-frequency waves. 
In compact formulation, we express the derivative of a function as a linear combination of values of function defined on a set of nodes. 
The compact method tries to mimic global dependence and hence has good resolution characteristics. 
Lele investigated the behavior of compact finite difference schemes for approximating a first and second derivative. 
The fourth-order accurate approximation to the second derivative is given by

$$
\left.\frac{1}{12} \frac{\partial^{2} u}{\partial x^{2}}\right|_{i-1}
+\left.\frac{10}{12} \frac{\partial^{2} u}{\partial x^{2}}\right|_{i}
+\left.\frac{1}{12} \frac{\partial^{2} u}{\partial x^{2}}\right|_{i+1}
=\frac{u_{i-1}-2 u_{i}+u_{i+1}}{\Delta x^{2}}
$$

$$
\left.\frac{1}{12} \frac{1}{\alpha}\frac{\partial u}{\partial t}\right|_{i-1}
+\left.\frac{10}{12} \frac{1}{\alpha}\frac{\partial u}{\partial t}\right|_{i}
+\left.\frac{1}{12} \frac{1}{\alpha}\frac{\partial u}{\partial t}\right|_{i+1}
=\frac{u_{i-1}-2 u_{i}+u_{i+1}}{\Delta x^{2}}\\
$$

$$
\left.\frac{1}{12} \frac{\partial u}{\partial t}\right|_{i-1}
+\left.\frac{10}{12} \frac{\partial u}{\partial t}\right|_{i}
+\left.\frac{1}{12}\frac{\partial u}{\partial t}\right|_{i+1}
={\alpha}\frac{u_{i-1}-2 u_{i}+u_{i+1}}{\Delta x^{2}}\\
$$

We then use Crank-Nicolson numerical scheme for time discretization and we arrive to below equation

$$
\begin{array}{l}
\displaystyle\frac{1}{12\Delta t}u^{n+1}_{i-1}-\frac{1}{12\Delta t}u^{n}_{i-1}+\frac{10}{12\Delta t}u^{n+1}_{i}-\frac{10}{12\Delta t}u^{n}_{i}+\frac{1}{12\Delta t}u^{n+1}_{i+1}-\frac{1}{12\Delta t}u^{n}_{i+1}\\
\\
=\displaystyle\frac{\alpha}{2\Delta x^{2}}  (u^{n+1}_{i-1}-2 u^{n+1}_{i}+u^{n+1}_{i+1}+u^{n}_{i-1}-2 u^{n}_{i}+u^{n}_{i+1})
\end{array}
$$

$$
\begin{array}{l}
\displaystyle\frac{1}{12\Delta t}(u^{n+1}_{i-1}-u^{n}_{i-1})+\frac{10}{12\Delta t} (u^{n+1}_{i}-u^{n}_{i})+\frac{1}{12\Delta t}(u^{n+1}_{i+1}-u^{n}_{i+1})\\
\\
=\displaystyle \frac{\alpha}{2\Delta x^{2}}  (u^{n+1}_{i-1}-2 u^{n+1}_{i}+u^{n+1}_{i+1}+u^{n}_{i-1}-2 u^{n}_{i}+u^{n}_{i+1})
\end{array}
$$

$$
\begin{array}{l}
\displaystyle\frac{1}{12\Delta t}u^{n+1}_{i-1}-\frac{1}{12\Delta t}u^{n}_{i-1}+\frac{10}{12\Delta t}u^{n+1}_{i}-\frac{10}{12\Delta t}u^{n}_{i}+\frac{1}{12\Delta t}u^{n+1}_{i+1}-\frac{1}{12\Delta t}u^{n}_{i+1}\\
\\
= \displaystyle\frac{\alpha}{2\Delta x^{2}}  (u^{n+1}_{i-1}-2 u^{n+1}_{i}+u^{n+1}_{i+1}+u^{n}_{i-1}-2 u^{n}_{i}+u^{n}_{i+1})
\end{array}
$$

$$
\begin{array}{l}
\displaystyle(\frac{1}{12\Delta t}-\frac{\alpha}{2\Delta x^{2}})u^{n+1}_{i-1}
+(\frac{10}{12\Delta t}+\frac{2\alpha}{2\Delta x^{2}})u^{n+1}_{i}
+(\frac{1}{12\Delta t}-\frac{\alpha}{2\Delta x^{2}})u^{n+1}_{i+1}\\
\\
=\displaystyle(\frac{1}{12\Delta t}+\frac{\alpha}{2\Delta x^{2}})u^{n}_{i-1}+
(\frac{10}{12\Delta t}-\frac{2\alpha}{2\Delta x^{2}} )u^{n}_{i}+
(\frac{1}{12\Delta t}+\frac{\alpha}{2\Delta x^{2}} )u^{n}_{i+1}\\
\end{array}
$$

$$
\begin{array}{l}
\displaystyle(\frac{1}{12}-\frac{\alpha\Delta t}{2\Delta x^{2}})u^{n+1}_{i-1}
+(\frac{10}{12}+\frac{2\alpha\Delta t}{2\Delta x^{2}})u^{n+1}_{i}
+(\frac{1}{12}-\frac{\alpha\Delta t}{2\Delta x^{2}})u^{n+1}_{i+1}\\
\\
=\displaystyle(\frac{1}{12}+\frac{\alpha\Delta t}{2\Delta x^{2}})u^{n}_{i-1}+
(\frac{10}{12}-\frac{2\alpha\Delta t}{2\Delta x^{2}} )u^{n}_{i}+
(\frac{1}{12}+\frac{\alpha\Delta t}{2\Delta x^{2}} )u^{n}_{i+1}\\
\end{array}
$$

let

$$
\beta=\frac{\alpha\Delta t}{2\Delta x^{2}}
$$

we have

$$
\begin{array}{l}
\displaystyle(\frac{1}{12}-\beta)u^{n+1}_{i-1}
+(\frac{10}{12}+2\beta)u^{n+1}_{i}
+(\frac{1}{12}-\beta)u^{n+1}_{i+1}\\
\\
=\displaystyle(\frac{1}{12}+\beta)u^{n}_{i-1}+
(\frac{10}{12}-2\beta)u^{n}_{i}+
(\frac{1}{12}+\beta)u^{n}_{i+1}\\
\end{array}
$$

Simplifying above equation, we get the implicit compact Pade (ICP) scheme for heat equation

$$
\begin{array}{l}
a_{i}u^{n+1}_{i-1}+b_{i}u^{n+1}_{i}+c_{i}u^{n+1}_{i+1}=d_{i}\\
a_{i}=\frac{1}{12}-\beta,\bar{a}_{i}=\frac{1}{12}+\beta\\
b_{i}=\frac{10}{12}+2\beta,\bar{b}_{i}=\frac{10}{12}-2\beta\\
c_{i}=\frac{1}{12}-\beta,\bar{c}_{i}=\frac{1}{12}+\beta\\
d_{i}=\bar{a}_{i}u^{n}_{i-1}+\bar{b}_{i}u^{n}_{i}+\bar{c}_{i}u^{n}_{i+1}\\
\end{array}
$$

## boundary

- A Fourth-Order Compact Algorithm for Nonlinear Reaction-Diffusion Equations with Neumann Boundary Conditions



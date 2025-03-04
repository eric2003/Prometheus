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



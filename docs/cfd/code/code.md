# CFD Code

## Codes

- [WENO (Weighted Essentially Non-Oscillatory) schemes](https://github.com/wme7/WENO).
- [WENO52D_fortran](https://github.com/aranyadan/WENO52D_fortran).
- [PyWENO](https://pyweno.readthedocs.io/en/latest/index.html).
- [CFD codes for HPC](https://arc4cfd.github.io/cfd_codes/).
- [Shu-Osher Problem](https://hypar.github.io/a00020.html).
- [Codes for finite element method](https://github.com/cpraveen/fem).
- [Shu-Osher shock tube problem](https://github.com/szaghi/Shu-Osher-shock-tube-problem).


## Books

- [Lecture on the High-Order WENO Scheme for Hyperbolic Conservation Laws](https://www.scribd.com/document/743350502/Lecture-Note-on-WENO-Schemes).
- [Numerical Methods for Engineers](https://leifh.folk.ntnu.no/teaching/tkt4140/._main075.html#___sec163).





首先，通过求解通过一维欧拉方程组建模的一维平滑密度扰动对流问题[33]，检验了各种考虑的WENO方案的收敛性。

应该指出，CFL数被取为 \( \Delta x^{2/3} \) 以消除此处时间积分过程的影响。众所周知，对于三阶龙格-库塔方法[34,35,36]，时间收敛率是 \( O(\Delta t^3) \)。CFL数定义为 \( \text{CFL} = \frac{|\alpha| \Delta t}{\Delta x} \)，因此 \( \Delta t = \text{CFL} \cdot \frac{\Delta x}{|\alpha|} \) 且此处 \( |\alpha| = 1 \)。因此，由于这里只考虑五阶方法，并且为了确保整体方案的误差仅是空间收敛性的度量，CFL数被取为 \( (\Delta x)^{2/3} \)。设 \( (\rho_h)_j \) 为数值解，\( \rho_j^{\text{exact}} \) 为精确解。然后，密度的 \( L_1 \) 和 \( L_\infty \) 误差通过以下方式计算

\[ L_1 = h \cdot \sum_j \left| \rho_j^{\text{exact}} - (\rho_h)_j \right|, \quad L_\infty = \max_j \left| \rho_j^{\text{exact}} - (\rho_h)_j \right|. \tag{19} \]

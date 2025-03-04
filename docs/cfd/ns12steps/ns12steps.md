# 12 steps to Navier–Stokes

## 12 steps Link

- [CFD Python](https://github.com/barbagroup/CFDPython/tree/master).

## 12 Steps to Navier-Stokes in Python

- [12 Steps to Navier-Stokes in Python](https://www.youtube.com/playlist?list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A).
- [12 Steps to Navier-Stokes in Python: Step 1 Linear Convection](https://www.youtube.com/watch?v=Wlph5fNCTfY&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=2).
- [12 Steps to Navier-Stokes in Python: Step 2 Non-linear Convection](https://www.youtube.com/watch?v=csmwHt-1IHQ&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=2).
- [12 Steps to Navier-Stokes in Python: Step 3 Diffusion](https://www.youtube.com/watch?v=9XHkaHkRAOg&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=3).
- [How to install 3rd party libraries into sT Compose](https://www.youtube.com/watch?v=dTAGxPbbcKk&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=4).
- [12 Steps to Navier-Stokes in Python: Step 4 Burgers' equation](https://www.youtube.com/watch?v=q-d8OVs3tnU&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=5).
- [12 Steps to Navier-Stokes in Python: Step 5 Linear Convection 2D](https://www.youtube.com/watch?v=pVegqnI04lE&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=6).
- [12 Steps to Navier-Stokes in Python: Step 6 Convection 2D](https://www.youtube.com/watch?v=YON1whd4kdQ&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=7).
- [12 Steps to Navier-Stokes in Python: Step 7 Diffusion 2D](https://www.youtube.com/watch?v=dnohu72mkWU&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=8).
- [12 Steps to Navier-Stokes in Python: Step 8 Burgers' Equation 2D](https://www.youtube.com/watch?v=n3G8A4-vj20&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=9).
- [12 Steps to Navier-Stokes in Python: Step 9 Laplace Equation 2D](https://www.youtube.com/watch?v=R6kHZX7B2UA&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=10).
- [12 Steps to Navier-Stokes in Python: Step 10 Poisson Equation 2D](https://www.youtube.com/watch?v=4vHvqQX560g&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=11).
- [12 Steps to Navier-Stokes in Python: Step 11 Cavity Flow](https://www.youtube.com/watch?v=Eij8RAf8I-0&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=13).
- [12 Steps to Navier-Stokes in Python: Step 12 Channel Flow](https://www.youtube.com/watch?v=zMdk7-sCtvs&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=12).
- [12 Steps to Navier-Stokes in Python: Step 12 Channel Flow](https://drive.google.com/drive/folders/1qVIQQB7MfBViwcjBv8E8Q7826Xo2Sexc).

## code

- [Solving the Navier-Stokes equations in Python | CFD in Python | Lid-Driven Cavity](https://www.youtube.com/watch?v=BQLvNLgMTQE).

## others

- [1st Year Calculus, But in PYTHON](https://www.youtube.com/watch?v=-SdIZHPuW9o).

## 01_Step_1

- [01_Step_1](https://github.com/barbagroup/CFDPython/blob/master/lessons/01_Step_1.ipynb).
- [12 Steps to Navier-Stokes in Python: Step 1 Linear Convection](https://www.youtube.com/watch?v=Wlph5fNCTfY&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=1).

01
```python
# Remember: comments in python are denoted by the pound sign
import numpy                       #here we load numpy
from matplotlib import pyplot      #here we load matplotlib
import time, sys   

#this makes matplotlib plots appear in the notebook (instead of a separate window)
#%matplotlib inline        

nx = 41  # try changing this number from 41 to 81 and Run All ... what happens?
dx = 2 / (nx-1)
nt = 25    #nt is the number of timesteps we want to calculate
dt = .025  #dt is the amount of time each timestep covers (delta t)
c = 1      #assume wavespeed of c = 1

u = numpy.ones(nx)      #numpy function ones()
u[int(.5 / dx):int(1 / dx + 1)] = 2  #setting u = 2 between 0.5 and 1 as per our I.C.s
print(u)

pyplot.plot(numpy.linspace(0, 2, nx), u);
pyplot.show()
```

02
```python
import numpy                       #here we load numpy
from matplotlib import pyplot as plt     #here we load matplotlib
import time, sys   

nx = 41  # try changing this number from 41 to 81 and Run All ... what happens?
dx = 2 / (nx-1)
nt = 25    #nt is the number of timesteps we want to calculate
dt = .025  #dt is the amount of time each timestep covers (delta t)
c = 1      #assume wavespeed of c = 1

u = numpy.ones(nx)      #numpy function ones()
u[int(.5 / dx):int(1 / dx + 1)] = 2  #setting u = 2 between 0.5 and 1 as per our I.C.s
print(u)

un = numpy.ones(nx) #initialize a temporary array

for n in range(nt):  #loop for values of n from 0 to nt, so it will run nt times
    un = u.copy() ##copy the existing values of u into un
    for i in range(1, nx): ## you can try commenting this line and...
    #for i in range(nx): ## ... uncommenting this line and see what happens!
        u[i] = un[i] - c * dt / dx * (un[i] - un[i-1])
    plt.plot(numpy.linspace(0, 2, nx), u);
        
#plt.plot(numpy.linspace(0, 2, nx), u);
plt.show()
```

## 02_Step_2

- [02_Step_2](https://github.com/barbagroup/CFDPython/blob/master/lessons/02_Step_2.ipynb).
- [12 Steps to Navier-Stokes in Python: Step 2 Non-linear Convection](https://www.youtube.com/watch?v=csmwHt-1IHQ&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=2).

```python
import numpy                 # we're importing numpy 
from matplotlib import pyplot as plt    # and our 2D plotting library

nx = 41
dx = 2 / (nx - 1)
nt = 20    #nt is the number of timesteps we want to calculate
dt = .025  #dt is the amount of time each timestep covers (delta t)

c = 1      #assume wavespeed of c = 1

u = numpy.ones(nx)      #as before, we initialize u with every value equal to 1.
u[int(.5 / dx) : int(1 / dx + 1)] = 2  #then set u = 2 between 0.5 and 1 as per our I.C.s

print(u)

un = numpy.ones(nx) #initialize a temporary array
       
for n in range(nt):  #iterate through time
    un = u.copy() ##copy the existing values of u into un
    for i in range(1, nx):  ##now we'll iterate through the u array
    
     ###This is the line from Step 1, copied exactly.  Edit it for our new equation.
     ###then uncomment it and run the cell to evaluate Step 2   
      
           ###u[i] = un[i] - c * dt / dx * (un[i] - un[i-1]) 
           u[i] = un[i] - un[i] * dt / dx * (un[i] - un[i-1])
    plt.plot(numpy.linspace(0, 2, nx), u); 
plt.show()
```

## 03_CFL_Condition

- [03_CFL_Condition](https://github.com/barbagroup/CFDPython/blob/master/lessons/03_CFL_Condition.ipynb).
- [12 Steps to Navier-Stokes in Python: Step 3 Diffusion](https://www.youtube.com/watch?v=9XHkaHkRAOg&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=3).

```python
import numpy                 # we're importing numpy 
from matplotlib import pyplot as plt    # and our 2D plotting library

def linearconv(nx):
    dx = 2 / (nx - 1)
    nt = 20    #nt is the number of timesteps we want to calculate
    dt = .025  #dt is the amount of time each timestep covers (delta t)
    c = 1

    u = numpy.ones(nx)      #defining a numpy array which is nx elements long with every value equal to 1.
    u[int(.5/dx):int(1 / dx + 1)] = 2  #setting u = 2 between 0.5 and 1 as per our I.C.s

    un = numpy.ones(nx) #initializing our placeholder array, un, to hold the values we calculate for the n+1 timestep

    for n in range(nt):  #iterate through time
        un = u.copy() ##copy the existing values of u into un
        for i in range(1, nx):
            u[i] = un[i] - c * dt / dx * (un[i] - un[i-1])
        
    plt.plot(numpy.linspace(0, 2, nx), u);

linearconv(41) #convection using 41 grid points
#linearconv(61)
#linearconv(71)
#linearconv(85)
plt.show()
```

CFL=0.5
```python
import numpy                 # we're importing numpy 
from matplotlib import pyplot as plt    # and our 2D plotting library

def linearconv(nx):
    dx = 2 / (nx - 1)
    nt = 20    #nt is the number of timesteps we want to calculate
    dt = .025  #dt is the amount of time each timestep covers (delta t)
    c = 1
    CFL = 0.5
    dt = CFL * dx * c

    u = numpy.ones(nx)      #defining a numpy array which is nx elements long with every value equal to 1.
    u[int(.5/dx):int(1 / dx + 1)] = 2  #setting u = 2 between 0.5 and 1 as per our I.C.s

    un = numpy.ones(nx) #initializing our placeholder array, un, to hold the values we calculate for the n+1 timestep

    for n in range(nt):  #iterate through time
        un = u.copy() ##copy the existing values of u into un
        for i in range(1, nx):
            u[i] = un[i] - c * dt / dx * (un[i] - un[i-1])
        
    plt.plot(numpy.linspace(0, 2, nx), u);

linearconv(41)
linearconv(61)
linearconv(71)
linearconv(85)
plt.show()
```

## 04_Step_3

- [04_Step_3](https://github.com/barbagroup/CFDPython/blob/master/lessons/04_Step_3.ipynb).
- [12 Steps to Navier-Stokes in Python: Step 3 Diffusion](https://www.youtube.com/watch?v=9XHkaHkRAOg&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=3).

```python
import numpy                 # we're importing numpy 
from matplotlib import pyplot as plt    # and our 2D plotting library

nx = 41
dx = 2 / (nx - 1)
nt = 20    #the number of timesteps we want to calculate
nu = 0.3   #the value of viscosity
sigma = .2 #sigma is a parameter, we'll learn more about it later
dt = sigma * dx**2 / nu #dt is defined using sigma ... more later!


u = numpy.ones(nx)      #a numpy array with nx elements all equal to 1.
u[int(.5 / dx):int(1 / dx + 1)] = 2  #setting u = 2 between 0.5 and 1 as per our I.C.s

un = numpy.ones(nx) #our placeholder array, un, to advance the solution in time

for n in range(nt):  #iterate through time
    un = u.copy() ##copy the existing values of u into un
    for i in range(1, nx - 1):
        u[i] = un[i] + nu * dt / dx**2 * (un[i+1] - 2 * un[i] + un[i-1])
        
plt.plot(numpy.linspace(0, 2, nx), u);
plt.show()
```

CFL = 0.5
```
import numpy                 # we're importing numpy 
from matplotlib import pyplot as plt    # and our 2D plotting library

def linearconv(nx):
    dx = 2 / (nx - 1)
    nt = 20    #nt is the number of timesteps we want to calculate
    nu = 0.3   #the value of viscosity
    CFL = 0.5
    dt = CFL * dx**2 * nu

    u = numpy.ones(nx)      #defining a numpy array which is nx elements long with every value equal to 1.
    u[int(.5/dx):int(1 / dx + 1)] = 2  #setting u = 2 between 0.5 and 1 as per our I.C.s

    un = numpy.ones(nx) #initializing our placeholder array, un, to hold the values we calculate for the n+1 timestep

    for n in range(nt):  #iterate through time
        un = u.copy() ##copy the existing values of u into un
        for i in range(1, nx - 1):
            u[i] = un[i] + nu * dt / dx**2 * (un[i+1] - 2 * un[i] + un[i-1])
        
    plt.plot(numpy.linspace(0, 2, nx), u);

linearconv(41)
linearconv(61)
linearconv(71)
linearconv(85)
plt.show()
```

## 05_Step_4

- [Step 4: Burgers' Equation](https://github.com/barbagroup/CFDPython/blob/master/lessons/05_Step_4.ipynb).
- [12 Steps to Navier-Stokes in Python: Step 4 Burgers' equation](https://www.youtube.com/watch?v=q-d8OVs3tnU&list=PLE4jpqcRJiBpODH_ksfgJmKsSc9-CN3_A&index=5).

No module named 'sympy'
```
PS D:\work\cfd_python_work\CFDPythonTest\lesson\lesson05\01> python .\testprj.py
Traceback (most recent call last):
  File "D:\work\cfd_python_work\CFDPythonTest\lesson\lesson05\01\testprj.py", line 2, in <module>
    import sympy
ModuleNotFoundError: No module named 'sympy'
```

pip install sympy
```
PS D:\work\cfd_python_work\CFDPythonTest\lesson\lesson05\01> python .\testprj.py
Traceback (most recent call last):
  File "D:\work\cfd_python_work\CFDPythonTest\lesson\lesson05\01\testprj.py", line 2, in <module>
    import sympy
ModuleNotFoundError: No module named 'sympy'
PS D:\work\cfd_python_work\CFDPythonTest\lesson\lesson05\01> pip install sympy
Collecting sympy
  Downloading sympy-1.13.3-py3-none-any.whl.metadata (12 kB)
Collecting mpmath<1.4,>=1.1.0 (from sympy)
  Downloading mpmath-1.3.0-py3-none-any.whl.metadata (8.6 kB)
Downloading sympy-1.13.3-py3-none-any.whl (6.2 MB)
   ---------------------------------------- 6.2/6.2 MB 4.2 MB/s eta 0:00:00
Downloading mpmath-1.3.0-py3-none-any.whl (536 kB)
   ---------------------------------------- 536.2/536.2 kB 9.8 MB/s eta 0:00:00
Installing collected packages: mpmath, sympy
Successfully installed mpmath-1.3.0 sympy-1.13.3

[notice] A new release of pip is available: 25.0 -> 25.0.1
[notice] To update, run: python.exe -m pip install --upgrade pip
```

```python
import numpy
import sympy

from sympy import init_printing
from sympy import print_latex
init_printing(use_latex=True)

x, nu, t = sympy.symbols('x nu t')
phi = (sympy.exp(-(x - 4 * t)**2 / (4 * nu * (t + 1))) +
       sympy.exp(-(x - 4 * t - 2 * sympy.pi)**2 / (4 * nu * (t + 1))))
print('phi=',phi)
print_latex(phi)

phiprime = phi.diff(x)
phiprime
print('phiprime=',phiprime)
print_latex(phiprime)
```

```python
import numpy
import sympy

from sympy import init_printing
init_printing(use_latex=True)

x, nu, t = sympy.symbols('x nu t')
phi = (sympy.exp(-(x - 4 * t)**2 / (4 * nu * (t + 1))) +
       sympy.exp(-(x - 4 * t - 2 * sympy.pi)**2 / (4 * nu * (t + 1))))

phiprime = phi.diff(x)
phiprime

from sympy.utilities.lambdify import lambdify

u = -2 * nu * (phiprime / phi) + 4

ufunc = lambdify((t, x, nu), u)
print(ufunc(1, 4, 3))

from matplotlib import pyplot as plt

###variable declarations
nx = 101
nt = 100
dx = 2 * numpy.pi / (nx - 1)
nu = .07
dt = dx * nu

x = numpy.linspace(0, 2 * numpy.pi, nx)
un = numpy.empty(nx)
t = 0

u = numpy.asarray([ufunc(t, x0, nu) for x0 in x])

for n in range(nt):
    un = u.copy()
    for i in range(1, nx-1):
        u[i] = un[i] - un[i] * dt / dx *(un[i] - un[i-1]) + nu * dt / dx**2 *\
                (un[i+1] - 2 * un[i] + un[i-1])
    u[0] = un[0] - un[0] * dt / dx * (un[0] - un[-2]) + nu * dt / dx**2 *\
                (un[1] - 2 * un[0] + un[-2])
    u[-1] = u[0]
        
u_analytical = numpy.asarray([ufunc(nt * dt, xi, nu) for xi in x])

plt.figure(figsize=(11, 7), dpi=100)
plt.plot(x,u, marker='o', lw=2, label='Computational')
plt.plot(x, u_analytical, label='Analytical')
plt.xlim([0, 2 * numpy.pi])
plt.ylim([0, 10])
plt.legend();
plt.show()
```
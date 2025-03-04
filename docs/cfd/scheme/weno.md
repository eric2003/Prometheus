# WENO

## WENO Link

- [WENO schemes](https://eric2003.github.io/OneFLOW/cfd/scheme/weno.html).
- [Efficient Finite Difference WENO Scheme for Hyperbolic Systems with Non-Conservative Products and Stiff Source Terms](https://www.youtube.com/watch?v=D87ctxheEr0).
- [Prof. Chi-Wang Shu: Mathematics in Scientific Computing](https://www.youtube.com/watch?v=0FdOVvCJJEk).

## Compact Weighted ENO

- Compact Reconstruction Schemes with Weighted ENO Limiting for Hyperbolic Conservation Laws

## code

- [WENO (Weighted Essentially Non-Oscillatory) schemes](https://github.com/wme7/WENO).

## PyWENO

PyWENO contains two modules to help authors generate WENO codes

- [PyWENO](https://pyweno.readthedocs.io/en/latest/index.html).

FEST-3D
FEST-3D (Finite-volume Explicit STructured 3-Dimensional) is computational fluid dynamic solver 
written in Fortran 90 for solving the Navier-Stokes equations on structured grids using state-of-the-art finite-volume methods.
It is a modular, multiblock, finite-volume code developed to solve flow problems in the field of aerodynamics.

## 折叠表达式（Fold Expressions，C++17 引入）
```cpp
template<typename... Args>
auto sum(Args... args) {
    return (... + args); // 使用折叠表达式求和
}
int main() {
    std::cout << sum(1, 2, 3, 4, 5) << std::endl; // 输出：15
    return 0;
}
```

$$
  \left\{\begin{matrix}
  \cfrac{\partial u_{i}}{\partial t}+u_{i}\cfrac{u^{L}_{i+1/2}-u^{L}_{i-1/2}}{\Delta x}=0,& if \quad u_{i}>0\\
  \cfrac{\partial u_{i}}{\partial t}+u_{i}\cfrac{u^{R}_{i+1/2}-u^{R}_{i-1/2}}{\Delta x}=0,& \text{otherwise}\\
  \end{matrix}\right.
$$

which can be combined into a more compact upwind/downwind notation as follows

$$
  \cfrac{\partial u_{i}}{\partial t}
  +u^{+}_{i}\cfrac{u^{L}_{i+1/2}-u^{L}_{i-1/2}}{\Delta x}
  +u^{-}_{i}\cfrac{u^{R}_{i+1/2}-u^{R}_{i-1/2}}{\Delta x}
  =0
$$

```cpp
      x=0                 ui+1/2,L             x=L
o   o  o  ...   *   *   *  |   *    *    ...    o    o    o
-2 -1 i=1      i-2 i-1  i  |  i+1  i+2         i=N+1 N+2 N+3

      x=0                 ui+1/2,R             x=L
o   o  o  ...   o   *   *  |   *    *   *   ...  o    o    o
-2 -1 i=1      i-2 i-1  i  |  i+1  i+2  i+3    i=N+1 N+2 N+3

i=1,..,N+1
-2,-1,1,2,...,N-1,N,N+1,N+2,N+3

boundary ghost point left:-2,-1,right:N+2,N+3
left:
u(-2)=3u(1)-2u(2)
u(-1)=2u(1)-u(2)
right:
u(N+3)=3u(N+1)-2u(N)
u(N+2)=2u(N+1)-u(N)

      x=0              x=L
o   o  *  o  o ...  o   *    o    o
-2 -1  1  2  3      N-1 N   N+1  N+2

i=1,..,N

-2,-1,1,2,...,N-1,N,N+1,N+2
boundary ghost point left:-2,-1,right:N+1,N+2
left:
u(-2)=3u(1)-2u(2)
u(-1)=2u(1)-u(2)
right:
u(N+2)=3u(N)-2u(N-1)
u(N+1)=2u(N)-u(N-1)

```

## Continuous Subscript
```cpp
       x=0              x=L
 o   o  *  o  o ...  o   *    o    o
-1   0  1  2  3      N-1 N   N+1  N+2

-1,0,1,2,...,N-1,N,N+1,N+2
boundary ghost point left:-1,0,right:N+1,N+2
left:
u(-1)=3u(1)-2u(2)
u(0 )=2u(1)- u(2)
right:
u(N+2)=3u(N)-2u(N-1)
u(N+1)=2u(N)- u(N-1)
```

## uL Index List
$$
\begin{array}{l}
u^{L}_{i-1/2}=List(i-3,i-2,i-1,i,i+1)\\
u^{L}_{i+1/2}=List(i-2,i-1,i,i+1,i+2)\\
\text{Inner point form i=2 to i=N-1}\\
\text{i=2: } \\
u^{L}_{i-1/2}=u^{L}_{3/2}=List(i-3,i-2,i-1,i,i+1)=List(-1,0,1,2,3)\\
u^{L}_{i+1/2}=u^{L}_{5/2}=List(i-2,i-1,i,i+1,i+2)=List(0,1,2,3,4)\\
TotalList=(-1,0,1,2,3,4)\\
\text{i=N-1: } \\
u^{L}_{i-1/2}=u^{L}_{N-3/2}=List(i-3,i-2,i-1,i,i+1)\\
u^{L}_{i+1/2}=u^{L}_{N-1/2}=List(i-2,i-1,i,i+1,i+2)\\
u^{L}_{N-3/2}=List(N-4,N-3,N-2,N-1,N)\\
u^{L}_{N-1/2}=List(N-3,N-2,N-1,N,N+1)\\
TotalList=(N-4,N-3,N-2,N-1,N,N+1)\\
\end{array}
$$

## uR Index List
$$
\begin{array}{l}
u^{R}_{i-1/2}=List(i-2,i-1,i,i+1,i+2)\\
u^{R}_{i+1/2}=List(i-1,i,i+1,i+2,i+3)\\
\text{Inner point form i=2 to i=N-1}\\
\text{i=2: } \\
u^{R}_{i-1/2}=u^{R}_{3/2}=List(i-2,i-1,i,i+1,i+2)=List(0,1,2,3,4)\\
u^{R}_{i+1/2}=u^{R}_{5/2}=List(i-1,i,i+1,i+2,i+3)=List(1,2,3,4,5)\\
TotalList=(0,1,2,3,4,5)\\
\text{i=N-1: } \\
u^{R}_{i-1/2}=u^{R}_{N-3/2}=List(i-2,i-1,i,i+1,i+2)\\
u^{R}_{i+1/2}=u^{R}_{N-1/2}=List(i-1,i,i+1,i+2,i+3)\\
u^{R}_{N-3/2}=List(N-3,N-2,N-1,N,N+1)\\
u^{R}_{N-1/2}=List(N-2,N-1,N,N+1,N+2)\\
TotalList=(N-3,N-2,N-1,N,N+1,N+2)\\
\end{array}
$$

## C or python array index starts from zero:
```cpp
       x=0              x=L
 o   o  *  o  o ...  o   *    o   o
-2  -1  0  1  2      N-2 N-1  N  N+1

-2,-1,0,1,2,...,N-1,N,N+1
boundary ghost point left:-2,-1,right:N,N+1
left:
u(-2)=3u(0)-2u(1)
u(-1)=2u(0)- u(1)
right:
u(N+1)=3u(N-1)-2u(N-2)
u(N  )=2u(N-1)- u(N-2)
```

## uL Index List index starts from zero:
$$
\begin{array}{l}
u^{L}_{i-1/2}=List(i-3,i-2,i-1,i,i+1)\\
u^{L}_{i+1/2}=List(i-2,i-1,i,i+1,i+2)\\
\text{Inner point form i=1 to i=N-2}\\
\text{i=1: } \\
u^{L}_{i-1/2}=u^{L}_{1/2}=List(i-3,i-2,i-1,i,i+1)=List(-2,-1,0,1,2)\\
u^{L}_{i+1/2}=u^{L}_{3/2}=List(i-2,i-1,i,i+1,i+2)=List(-1,0,1,2,3)\\
TotalList=(-2,-1,0,1,2,3)\\
\text{i=N-2: } \\
u^{L}_{i-1/2}=u^{L}_{N-5/2}=List(i-3,i-2,i-1,i,i+1)\\
u^{L}_{i+1/2}=u^{L}_{N-3/2}=List(i-2,i-1,i,i+1,i+2)\\
u^{L}_{N-5/2}=List(N-5,N-4,N-3,N-2,N-1)\\
u^{L}_{N-3/2}=List(N-4,N-3,N-2,N-1,N)\\
TotalList=(N-5,N-4,N-3,N-2,N-1,N)\\
\end{array}
$$

## uR Index List index starts from zero:
$$
\begin{array}{l}
u^{R}_{i-1/2}=List(i-2,i-1,i,i+1,i+2)\\
u^{R}_{i+1/2}=List(i-1,i,i+1,i+2,i+3)\\
\text{Inner point form i=1 to i=N-2}\\
\text{i=1: } \\
u^{R}_{i-1/2}=u^{R}_{1/2}=List(i-2,i-1,i,i+1,i+2)=List(-1,0,1,2,3)\\
u^{R}_{i+1/2}=u^{R}_{3/2}=List(i-1,i,i+1,i+2,i+3)=List(0,1,2,3,4)\\
TotalList=(-1,0,1,2,3,4)\\
\text{i=N-2: } \\
u^{R}_{i-1/2}=u^{R}_{N-5/2}=List(i-2,i-1,i,i+1,i+2)\\
u^{R}_{i+1/2}=u^{R}_{N-3/2}=List(i-1,i,i+1,i+2,i+3)\\
u^{R}_{N-5/2}=List(N-4,N-3,N-2,N-1,N)\\
u^{R}_{N-3/2}=List(N-3,N-2,N-1,N,N+1)\\
TotalList=(N-4,N-3,N-2,N-1,N,N+1)\\
\end{array}
$$

```python
def rhs( nx, dx, u, r ):
    uL = np.zeros( nx     )
    uR = np.zeros( nx + 1 )

    wenoL( nx, u, uL )
    wenoR( nx, u, uR ) 

    for i in range(1, nx):
        if ( u[i] >= 0.0 ):
            r[i] = - u[i] * ( uL[i] - uL[i-1] ) / dx
        else:
            r[i] = - u[i] * ( uR[i+1] - uR[i] ) / dx
```

## fluxL

$$
\begin{array}{l}
  \cfrac{\partial u_{i}}{\partial t}
  +u^{+}_{i}\cfrac{u^{L}_{i+1/2}-u^{L}_{i-1/2}}{\Delta x}
  +u^{-}_{i}\cfrac{u^{R}_{i+1/2}-u^{R}_{i-1/2}}{\Delta x}
  =0\\
\text{Total point form i=0 to i=N-1,nPoint=N}\\
\text{Inner point form i=1 to i=N-2}\\
\text{Interface bound from i=1 to i=N-2}\\
fluxListL:\\
{u^{L}_{1/2},u^{L}_{3/2},\cdots,u^{L}_{i-1/2},u^{L}_{i+1/2},\cdots,u^{L}_{N-5/2},u^{L}_{N-3/2}}\\
indexList(1/2,3/2,\cdots,i+1/2,\cdots,N-5/2,N-3/2)\\
indexList(0+1/2,1+1/2,\cdots,i+1/2,\cdots,N-3+1/2,N-2+1/2)\\
\text{Interface iface}(0,1,\cdots,N-2),\text{array len=N-1}\\
\end{array}
$$

```cpp
reference
{
nx=200
nx+1=201
for i in range(1, nx):
    ut[i] = un[i] + dt*r[i]
1,2,...,nx-1
1,2,...,199
boundary point: (0, nx=200)
//1,2,...,nx-1
//1,2,...,199
//uL:0,1,...,nx-1,len=nx
//uR:1,...,nx,len=nx
//uL:0,1,...,199,len=200
//uR:1,2,...,200,len=200
for i in range(1, nx):
    if ( u[i] >= 0.0 ):
        r[i] = - u[i] * ( uL[i] - uL[i-1] ) / dx
    else:
        r[i] = - u[i] * ( uR[i+1] - uR[i] ) / dx

def wenoL(nx,u,f):
    //nx=200
    a = np.zeros(nx)
    b = np.zeros(nx)
    c = np.zeros(nx)
    r = np.zeros(nx)

    i = 0
    v1 = 3.0*u[i] - 2.0*u[i+1]
    v2 = 2.0*u[i] - u[i+1]
    v3 = u[i]
    v4 = u[i+1]
    v5 = u[i+2]
    f[i] = wcL(v1,v2,v3,v4,v5)

    i = 1
    v1 = 2.0*u[i-1] - u[i]
    v2 = u[i-1]
    v3 = u[i]
    v4 = u[i+1]
    v5 = u[i+2]
    f[i] = wcL(v1,v2,v3,v4,v5)
    //2,3,...,nx-2
	//2,3,...,198
    for i in range(2, nx-1):
        v1 = u[i-2]
        v2 = u[i-1]
        v3 = u[i]
        v4 = u[i+1]
        v5 = u[i+2]
        f[i] = wcL(v1,v2,v3,v4,v5)

    i = nx-1
	//nx-1=199
    v1 = u[i-2]
    v2 = u[i-1]
    v3 = u[i]
    v4 = u[i+1]
    v5 = 2.0*u[i+1]-u[i]
    f[i] = wcL(v1,v2,v3,v4,v5)
	//f:0,1,...,nx-1,len=nx
	//f:0,1,...,199,len=200
	
def wenoR(n,u,f):
    a = np.zeros(nx+1)
    b = np.zeros(nx+1)
    c = np.zeros(nx+1)
    r = np.zeros(nx+1)    

    i = 1
    v1 = 2.0*u[i-1] - u[i]
    v2 = u[i-1]
    v3 = u[i]
    v4 = u[i+1]
    v5 = u[i+2]
    f[i] = wcR(v1,v2,v3,v4,v5)

    for i in range(2, nx-1):
        v1 = u[i-2]
        v2 = u[i-1]
        v3 = u[i  ]
        v4 = u[i+1]
        v5 = u[i+2]
        f[i] = wcR(v1,v2,v3,v4,v5)

    i = nx-1
	//i = nx-1=199
    v1 = u[i-2]
    v2 = u[i-1]
    v3 = u[i]
    v4 = u[i+1]
    v5 = 2.0*u[i+1] - u[i]
    f[i] = wcR(v1,v2,v3,v4,v5)

    i = nx
	//i = nx=200
    v1 = u[i-2]
    v2 = u[i-1]
    v3 = u[i]
    v4 = 2.0*u[i] - u[i-1]
    v5 = 3.0*u[i] - 2.0*u[i-1]
    f[i] = wcR(v1,v2,v3,v4,v5)
	//f:1,2,...,nx,len=nx
		
		
u = np.zeros( (nx+1, ns+1 ) )
len=201
u:0,1,...,200
}
N=201
boundary point: (0, N-1=200)
ist=1
ied=N-2=199

```

## fluxR

$$
\begin{array}{l}
  \cfrac{\partial u_{i}}{\partial t}
  +u^{+}_{i}\cfrac{u^{L}_{i+1/2}-u^{L}_{i-1/2}}{\Delta x}
  +u^{-}_{i}\cfrac{u^{R}_{i+1/2}-u^{R}_{i-1/2}}{\Delta x}
  =0\\
\text{Total point form i=0 to i=N-1,nPoint=N}\\
\text{Inner point form i=1 to i=N-2}\\
\text{Interface bound from i=1 to i=N-2}\\
fluxListR:\\
{u^{R}_{1/2},u^{R}_{3/2},\cdots,u^{R}_{i-1/2},u^{R}_{i+1/2},\cdots,u^{R}_{N-5/2},u^{R}_{N-3/2}}\\
indexList(1/2,3/2,\cdots,i+1/2,\cdots,N-5/2,N-3/2)\\
indexList(0+1/2,1+1/2,\cdots,i+1/2,\cdots,N-3+1/2,N-2+1/2)\\
\text{Interface iface}(0,1,\cdots,N-2),\text{array len=N-1}\\
\end{array}
$$

```cpp
       x=0              x=L
 o   o  *  o  o ...  o   *    o   o
-2  -1  0  1  2      N-2 N-1  N  N+1
N=201
N-2=199
//0,1,...,N-2
//0,1,...,199,len=200=N-1
//ui-1/2,R=List(i-2,i-1,i,i+1,i+2)
//i=1
//u1/2,R=List(-1,0,1,2,3)
//i=N-1
//uN-1-1/2,R=uN-3/2,R=List(N-3,N-2,N-1,N,N+1)
//i=1,2,...,N-1
for ( int i = 1; i <= N - 1; ++ i )
{
    int ii = i - 1;
    v1 = u[ i - 2 ];
    v2 = u[ i - 1 ];
    v3 = u[ i ];
    v4 = u[ i + 1 ];
    v5 = u[ i + 2 ];
    f[ ii ] = wcR( v1, v2, v3, v4, v5 );
}
```

```cpp
       x=0              x=L
 o   o  *  o  o ...  o   *    o   o
-2  -1  0  1  2      N-2 N-1  N  N+1
N=201
N-2=199
//0,1,...,N-2
//0,1,...,199,len=200=N-1
//ui-1/2,R=List(i-2,i-1,i,i+1,i+2)
//i=1
//u1/2,R=List(-1,0,1,2,3)
//i=N-1
//uN-1-1/2,R=uN-3/2,R=List(N-3,N-2,N-1,N,N+1)
//i=1,2,...,N-1

i = 1;
ii = i - 1;
v1 = 2.0 * u[ i - 1 ] - u[ i ];
v2 = u[ i - 1 ];
v3 = u[ i ];
v4 = u[ i + 1 ];
v5 = u[ i + 2 ];
f[ ii ] = wcR( v1, v2, v3, v4, v5 );
for ( int i = 2; i <= N - 3; ++ i )
{
    int ii = i - 1;
    v1 = u[ i - 2 ];
    v2 = u[ i - 1 ];
    v3 = u[ i ];
    v4 = u[ i + 1 ];
    v5 = u[ i + 2 ];
    f[ ii ] = wcR( v1, v2, v3, v4, v5 );
}

i = N-2;
ii = i - 1;
v1 = u[ i - 2 ];
v2 = u[ i - 1 ];
v3 = u[ i ];
v4 = u[ i + 1 ];
v5 = 2.0 * u[ i + 1 ] - u[ i ];
f[ ii ] = wcR( v1, v2, v3, v4, v5 );

i = N-1;
ii = i - 1;
v1 = u[ i - 2 ];
v2 = u[ i - 1 ];
v3 = u[ i ];
v4 = 2.0 * u[ i ] - u[ i - 1 ];
v5 = 3.0 * u[ i ] - 2.0 * u[ i - 1 ];
f[ ii ] = wcR( v1, v2, v3, v4, v5 );
```

```cpp
       x=0              x=L
 o   o  *  o  o ...  o   *    o   o
-2  -1  0  1  2      N-2 N-1  N  N+1
N=201
N-2=199
//0,1,...,N-2
//0,1,...,199,len=200=N-1
//ui-1/2,R=List(i-2,i-1,i,i+1,i+2)
//i=1
//u1/2,R=List(-1,0,1,2,3)
//i=N-1
//uN-1-1/2,R=uN-3/2,R=List(N-3,N-2,N-1,N,N+1)
//i=1,2,...,N-1

ist=1
ied=N-1

-2,-1,0,1,...,N-1,N  ,N+1,len=N+4
0 , 1,2,3,...,N+1,N+2,N+3

igL = 2;
igR = 2;
ist = igL; // 2
ied = ist+N-1; //202

ied-(ist + 1)+1=N-1

for ( int i = ist + 1; i <= ied; ++ i )
{
    int ii = i - ist - 1;
    v1 = u[ i - 2 ];
    v2 = u[ i - 1 ];
    v3 = u[ i ];
    v4 = u[ i + 1 ];
    v5 = u[ i + 2 ];
    f[ ii ] = wcR( v1, v2, v3, v4, v5 );
}
```

ui-1/2,L
```cpp
       x=0              x=L
 o   o  *  o  o ...  o   *    o   o
-2  -1  0  1  2      N-2 N-1  N  N+1
N=201
N-2=199
//0,1,...,N-2
//0,1,...,199,len=200=N-1
//ui+1/2,L=List(i-2,i-1,i,i+1,i+2)
//i=0
//u1/2,L=List(-2,-1,0,1,2)
//i=N-2
//ui+1/2,L=List(i-2,i-1,i,i+1,i+2)
//uN-2+1/2,L=uN-3/2,L=List(N-4,N-3,N-2,N-1,N)

//i=0,1,2,...,N-2
for ( int i = 0; i <= N - 2; ++ i )
{
    int ii = i - 1;
    v1 = u[ i - 2 ];
    v2 = u[ i - 1 ];
    v3 = u[ i ];
    v4 = u[ i + 1 ];
    v5 = u[ i + 2 ];
    f[ ii ] = wcL( v1, v2, v3, v4, v5 );
}

-2,-1,0,1,...,N-1,N  ,N+1,len=N+4
0 , 1,2,3,...,N+1,N+2,N+3

igL = 2;
igR = 2;
ist = igL; // 2
ied = ist+N-1; //202

ied-(ist + 1)+1=N-1

for ( int i = ist; i <= ied - 1; ++ i )
{
    int ii = i - ist;
    v1 = u[ i - 2 ];
    v2 = u[ i - 1 ];
    v3 = u[ i ];
    v4 = u[ i + 1 ];
    v5 = u[ i + 2 ];
    f[ ii ] = wcL( v1, v2, v3, v4, v5 );
}
```

```cpp
int main( int argc, char ** argv )
{
    int nx = 200;
    int ns = 10;
    double dt = 0.0001;
    double tm = 0.25;

    double dx = 1.0 / nx;
    //int nt = int( tm / dt );
    int nt = std::round( tm / dt );
    double ds = tm / ns;

    std::print( "nx={}\n", nx );
    std::print( "ns={}\n", ns );
    std::print( "dt={}\n", dt );
    std::print( "tm={}\n", tm );
    std::print( "dx={}\n", dx );
    std::print( "nt={}\n", nt );

    return 0;
}
```

output
```
nx=200
ns=10
dt=1e-04
tm=0.25
dx=0.005
nt=2500
```

ui+1/2,LR
```
      x=0                 ui+1/2,L             x=L
o   o  o  ...   *   *   *  |   *    *    ...    o    o    o
-2 -1 i=1      i-2 i-1  i  |  i+1  i+2         i=N+1 N+2 N+3

      x=0                 ui+1/2,R             x=L
o   o  o  ...   o   *   *  |   *    *   *   ...  o    o    o
-2 -1 i=1      i-2 i-1  i  |  i+1  i+2  i+3    i=N+1 N+2 N+3
```

ui+1/2,LR index from zero
```
      x=0                 ui+1/2,L             x=L
o   o  o  ...   *   *   *  |   *    *    ...    o    o   o
-2 -1 i=0      i-2 i-1  i  |  i+1  i+2         i=N  N+1 N+2

      x=0                 ui+1/2,R             x=L
o   o  o  ...   o   *   *  |   *    *   *   ...  o   o   o
-2 -1 i=0      i-2 i-1  i  |  i+1  i+2         i=N  N+1 N+2

void wenoL( int nx, vec1d & u, vec1d & f )
{
    for ( int i = 0; i <= nx - 1; ++ i )
    {
        double v1 = u[ i - 2 ];
        double v2 = u[ i - 1 ];
        double v3 = u[ i ];
        double v4 = u[ i + 1 ];
        double v5 = u[ i + 2 ];
        f[ i ] = wcL( v1, v2, v3, v4, v5 );
    }
}

ui+1/2,L=List(i-2,i-1,i,i+1,i+2)
ui+1/2,R=List(    i-1,i,i+1,i+2,i+3)
```

ui+1/2,LR index from zero,npoints = N
```
      x=0                ui+1/2,L             x=L
 o  o  o   ...  *   *   *  |   *    *  ...     o    o   o
-2 -1 i=0      i-2 i-1  i  |  i+1  i+2       i=N-1  N  N+1

      x=0                ui+1/2,R              x=L
 o  o  o  ...       *   *  |   *    *   *  ...  o   o   o
-2 -1 i=0      i-2 i-1  i  |  i+1  i+2        i=N-1 N  N+1

         x=0                ui+1/2,L             x=L
 o  o  o  o   ...  *   *   *  |   *    *  ...     o    o   o   o
-3 -2 -1 i=0      i-2 i-1  i  |  i+1  i+2       i=N-1  N  N+1 N+2

         x=0                ui+1/2,R              x=L
 o  o  o  o  ...       *   *  |   *    *   *  ...  o   o   o   o
-3 -2 -1 i=0      i-2 i-1  i  |  i+1  i+2        i=N-1 N  N+1  N+2

int nx = 200;
int ns = 10;
double dt = 0.0001;
double tm = 0.25;
double dx = 1.0 / nx;
int N = nx + 1 = 201
double dx = 1.0 ( N - 1 );

void boundary( int N, vec1d & u )
{
    //left bc
    int i = 0;
    u[ i ] = 0.0;
    u[ i - 1 ] = 2.0 * u[ i ] - u[ i + 1 ];	
    u[ i - 2 ] = 3.0 * u[ i ] - 2.0 * u[ i + 1 ];	
	u[ i - 3 ] = 2 * u[ i - 2 ] - u[ i - 1 ]
	           = 4.0 * u[ i ] - 3.0 * u[ i + 1 ]；
	
    //right bc
    i = N - 1;
    u[ i ] = 0.0;
    u[ i + 1 ] = 2.0 * u[ i ] - u[ i - 1 ];
    u[ i + 2 ] = 3.0 * u[ i ] - 2.0 * u[ i - 1 ];
	u[ i + 3 ] = 4.0 * u[ i ] - 3.0 * u[ i - 1 ];
}

ui+1/2,L=List(i-2,i-1,i,i+1,i+2)
ui+1/2,R=List(    i-1,i,i+1,i+2,i+3)

```

```cpp
std::valarray<double> a,b,c;
a.resize( 3 );
b.resize( 3 );
for ( int i = 0; i < a.size(); ++ i )
{
    a[ i ] = i;
    b[ i ] = i * 10;
}
c = a + b;
for ( int i = 0; i < c.size(); ++ i )
{
    std::print( "{}+{}={}\n", a[ i ], b[ i ], c[ i ] );
}
```

## Third order TVD Runge-Kutta method

$$
  \begin{array}{l}
  u^{(1)}=u^{n}+\Delta tL(u^{n})\\
  u^{(2)}=\cfrac{3}{4}u^{n}+\cfrac{1}{4}u^{(1)}+\cfrac{1}{4}\Delta tL(u^{(1)})\\
  u^{n+1}=\cfrac{1}{3}u^{n}+\cfrac{2}{3}u^{(2)}+\cfrac{2}{3}\Delta tL(u^{(2)})\\
  \end{array}
$$

RungeKutta3
```cpp
void Field::RungeKutta3Stage0( Zone * zone )
{
    int ist = 1;
    int ied = ni;

    this->Rhs( this->un, this->r );

    for ( int i = ist; i <= ied; ++ i )
    {
        u[ i ] = un[ i ] + dt * r[ i ];
    }
}

void Field::RungeKutta3Stage1( Zone * zone )
{
    int ist = 1;
    int ied = ni;

    this->Rhs( this->u1, this->r );

    for ( int i = ist; i <= ied; ++ i )
    {
        u[ i ] = 0.75 * un[ i ] + 0.25 * u1[ i ] + 0.25 * dt * r[ i ];
    }
}

void Field::RungeKutta3Stage2( Zone * zone )
{
    int ist = 1;
    int ied = ni;

    this->Rhs( this->u, this->r );

    double c1 = 1.0 / 3.0;
    double c2 = 2.0 / 3.0;
    double c3 = 2.0 / 3.0;

    for ( int i = ist; i <= ied; ++ i )
    {
        u[ i ] = c1 * un[ i ] + c2 * u[ i ] + c3 * dt * r[ i ];
    }
}
```

## runge_kutta_stage weno
```cpp
void runge_kutta_stage1( int N, vec1d & un, vec1d & ut, vec1d & res, double dx, double dt )
{
    rhs( N, dx, un, res );
    for ( int i = 0; i < N; ++ i )
    {
        ut[ i ] = un[ i ] + dt * res[ i ];
    }
    boundary( N, ut );
}

void runge_kutta_stage2( int N, vec1d & un, vec1d & ut, vec1d & res, double dx, double dt )
{
    rhs( N, dx, ut, res );

    for ( int i = 0; i < N; ++ i )
    {
        ut[ i ] = 0.75 * un[ i ] + 0.25 * ut[ i ] + 0.25 * dt * res[ i ];
    }
    boundary( N, ut );
}

void runge_kutta_stage3( int N, vec1d & un, vec1d & ut, vec1d & res, double dx, double dt )
{
    rhs( N, dx, ut, res );

    for ( int i = 0; i < N; ++ i )
    {
        un[ i ] = ( 1.0 / 3.0 ) * un[ i ] + ( 2.0 / 3.0 ) * ut[ i ] + ( 2.0 / 3.0 ) * dt * res[ i ];
    }
    boundary( N, un );
}
```

void Field::InitHeatEquation( Grid * grid )
```cpp
void Field::InitHeatEquation( Grid * grid )
{
    this->ni = grid->x.size();
    std::cout << "ni = " << ni << "\n";

    std::vector<double> & x = grid->x;
    this->dx = std::abs( x[ 1 ] - x[ 0 ] );
    this->dt = dx / 10.0;
    this->total_time = 1.0;
    this->nt = std::round( total_time / dt );

    //double total_time = nt * dt;

    std::cout << "this->dt   = " << this->dt << "\n";
    std::cout << "this->total_time  = " << this->total_time << "\n";
    std::cout << "this->nt   = " << this->nt << "\n";
    std::cout << "this->ni   = " << this->ni << "\n";
    std::cout << "nt * dt = " << nt * dt << "\n";

    Global::nt = nt;

    this->alpha = 1 / ( std::numbers::pi * std::numbers::pi );
    this->beta = this->alpha * dt / ( dx * dx );

    int nghost = 2;
    int ni_total = ni + nghost;

    int N = this->ni;

    u_e.Allocate( 0, ni_total - 1 );
    u.Allocate( 0, ni_total - 1 );
    un.Allocate( 0, ni_total - 1 );
    r.Allocate( 0, ni_total - 1 );

    // 0 1 2 ... ni-1 ni ni+1
    int ist = 1;
    int ied = ni;

    for ( int i = ist; i <= ied; ++ i )
    {
        double xm = x[ i - ist ];
        u_e[ i ] = - std::exp( -total_time ) * std::sin( std::numbers::pi * xm ); //theory solution
        u[ i ] = - std::sin( std::numbers::pi * xm ); //initial condition @ t=0
    }
}
```

```cpp
o  |  *  *      *    *   |   o  
0  1  2  3 ... ni-2 ni-1 ni ni+1

int N = this->ni;
int nghost = 2;
int ni_total = N + nghost;

u_e.Allocate( 0, ni_total - 1 );
u.Allocate( 0, ni_total - 1 );
un.Allocate( 0, ni_total - 1 );
r.Allocate( 0, ni_total - 1 );

 o  |  *  *      *    *    |   o  
-1  0  1  2 ... ni-3 ni-2 ni-1 ni

//ist=0;
//ied=N-1;

int ighost = 1;
int iist = 0 - ighost;
int iied = N - 1 + ighost;
u_e.Allocate( iist, iied );
u.Allocate( iist, iied );
un.Allocate( iist, iied );
res.Allocate( 0, N, 0 ); //N+1
```

MyWenoPlot.py
```python
import numpy as np
import matplotlib.pyplot as plt
import csv

with open('field_final0.csv', newline='') as csvfile:
    readCSV = csv.reader(csvfile, delimiter= ' ')
    icount = 0
    for row in readCSV:
        icount += 1

ni = icount
print("ni=",ni)

ns = 10

u = np.zeros( (ni, ns + 1 ) )
x = np.zeros( (ni) )

for j in range(ns+1):
    filename = 'field_final'+str((j)*250)+'.csv'
    print('filename=',filename)
    with open(filename, newline='') as csvfile:
        readCSV = csv.reader(csvfile, delimiter= ' ')
        i = 0
        for row in readCSV:
            x[i] = float(row[0])
            u[i][j] = float(row[1])
            i += 1
    
print("u.shape=",u.shape)
n1 = u.shape[0]
n2 = u.shape[1]
print(f"n1={n1},n2={n2}")
#exit()
#x = np.linspace(0,1, num=ni) 

tm = 0.25

plt.figure("OneFLOW-CFD Solver", figsize=(6, 4), dpi=100)
for k in range(0, ns+1):
    plt.plot(x, u[:,k], linewidth=1.0, label="t="+format(tm*k/ns, ".4f"))
plt.xlabel("$x$")
plt.ylabel("$u$")
plt.title("Inviscid Burgers Equation: Non-Conservative Form-WENO-5 Scheme")
plt.legend(loc='upper right', fontsize='6')
plt.show()
```

## void Solver::DownloadInterfaceField()
```cpp
void Solver::DownloadInterfaceField()
{
    for ( int iZone = 0; iZone < LocalZone::nZones; ++ iZone )
    {
        Interface * interface = Global::interfaces[ iZone ];
        Field * field = Global::fields[ iZone ];

        int nInterFaces = interface->data_recv.size();

        int index_dim = 1;
        for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
        {
            int ijkpos = index_dim * iFace * nghost;
            int data_pos = iFace * nghost;
            for ( int ig = 0; ig < nghost; ++ ig )
            {
                int ig_cell = interface->ijk_ghosts[ ijkpos + ig ];

                double donor_value = interface->data_recv[ data_pos + ig ];
                field->u[ ig_cell ] = donor_value;
            }
        }
    }
}
```

## void Interface::SendGeom( int zone, std::vector<int> & donorfaces )
```cpp
void Interface::SendGeom( int zone, std::vector<int> & donorfaces )
{
    Interface * interface = this;

    std::vector<int> & send_to_zones = interface->send_to_zones;

    send_to_zones.push_back( zone );
    interface->donorfaces_for_send.push_back( donorfaces );

    int nface = donorfaces.size();
    std::vector<int> sub_donorijk;
    int index_dim = 1;
    for ( int i = 0; i < nface; ++ i )
    {
        int global_faceid = donorfaces[ i ];
        int local_faceid = interface->global_local_face_map[ global_faceid ];
        int ijkpos = index_dim * local_faceid;
        int i_donor_cell = interface->ijk_donors[ ijkpos + 0 ];
        sub_donorijk.push_back( i_donor_cell );
        int kkk = 1;
    }

    interface->donorijk_for_send.push_back( sub_donorijk );

    std::vector<double> sub_donordata( sub_donorijk.size() );
    interface->donordata_for_send.push_back( sub_donordata );
}
```

```cpp
    Global::interfaceTopo.InitNeighborInfo();
    Global::interfaceTopo.SwapNeighborInfo();
```

## void InterfaceTopo::InitNeighborInfo()
```cpp
void InterfaceTopo::InitNeighborInfo()
{
    this->linkmap.resize( ZoneState::nZones );

    for ( int iZone = 0; iZone < ZoneState::nZones; ++ iZone )
    {
        if ( ! ZoneState::IsValid( iZone ) ) continue;

        int local_zoneid = ZoneState::g2lzoneids[ iZone ];

        Interface * interface = Global::interfaces[ local_zoneid ];

        std::vector<int> & t = this->linkmap[ iZone ];
        t = interface->neighbor_donor_zones;
    }
}
```

void InterfaceTopo::SwapNeighborInfo()
```cpp
void InterfaceTopo::SwapNeighborInfo()
{
    for ( int iZone = 0; iZone < ZoneState::nZones; ++ iZone )
    {
        int pid = ZoneState::pids[ iZone ];

        std::vector<int> & donor_zones = this->linkmap[ iZone ];
        int nNeighbor = donor_zones.size();

        HXBcastData( &nNeighbor, 1, pid );

        donor_zones.resize( nNeighbor );

        HXBcastData( donor_zones.data(), donor_zones.size(), pid );
    }

    this->SwapNeighborDonorfaces();
}
```

## void InterfaceTopo::SwapNeighborDonorfaces()
```cpp
void InterfaceTopo::SwapNeighborDonorfaces()
{
    int gl = 0;
    for ( int iZone = 0; iZone < ZoneState::nZones; ++ iZone )
    {
        int send_pid = ZoneState::pids[ iZone ];

        std::vector<int> & donor_zones = this->linkmap[ iZone ];
        int ndonor_zones = donor_zones.size();

        for ( int iNei = 0; iNei < ndonor_zones; ++ iNei )
        {
            int donor_zone = donor_zones[ iNei ];
            int recv_pid = ZoneState::pids[ donor_zone ];
            int nInterFaces = 0;
            std::vector<int> donorfaces;

            if ( Parallel::pid == send_pid )
            {
                int local_zoneid = ZoneState::g2lzoneids[ iZone ];

                Interface * interface = Global::interfaces[ local_zoneid ];

                std::vector<std::vector<int>> & neighbor_donorfaces = interface->neighbor_donorfaces;

                std::vector<int> & neighbor_donorface = neighbor_donorfaces[ iNei ];

                nInterFaces = neighbor_donorface.size();

                donorfaces = neighbor_donorface;
            }

            HXSendRecvData( &nInterFaces, 1, send_pid, recv_pid );

            if ( Parallel::pid == recv_pid && send_pid != recv_pid )
            {
                donorfaces.resize( nInterFaces );
            }

            HXSendRecvData( donorfaces.data(), donorfaces.size(), send_pid, recv_pid );

            if ( Parallel::pid == recv_pid )
            {
                int local_donor_zoneid = ZoneState::g2lzoneids[ donor_zone ];
                Interface * interface_recv = Global::interfaces[ local_donor_zoneid ];
                interface_recv->SendGeom( iZone, donorfaces );
            }
        }
    }
}
```

## void Interface::SendGeom( int zone, std::vector<int> & donorfaces )
```cpp
void Interface::SendGeom( int zone, std::vector<int> & donorfaces )
{
    Interface * interface = this;

    std::vector<int> & send_to_zones = interface->send_to_zones;

    send_to_zones.push_back( zone );
    interface->donorfaces_for_send.push_back( donorfaces );

    int nface = donorfaces.size();
    std::vector<int> sub_donorijk;
    int index_dim = 1;
    for ( int i = 0; i < nface; ++ i )
    {
        int global_faceid = donorfaces[ i ];
        int local_faceid = interface->global_local_face_map[ global_faceid ];
        int ijkpos = index_dim * local_faceid;
        int i_donor_cell = interface->ijk_donors[ ijkpos + 0 ];
        sub_donorijk.push_back( i_donor_cell );
        int kkk = 1;
    }

    interface->donorijk_for_send.push_back( sub_donorijk );

    std::vector<double> sub_donordata( sub_donorijk.size() );
    interface->donordata_for_send.push_back( sub_donordata );
}
```

## Interface::CalcInterface
```cpp
void Interface::CalcInterface( Transform * transform, std::vector<int> & start, std::vector<int> & end, int donor_zoneid )
{
    int ist = start[ 0 ];
    int ied = end[ 0 ];
    int dim = start.size();
    std::vector<int> index1( dim );
    std::vector<int> index2( dim );

    int icount = this->zoneList.size();
    for ( int i = ist; i <= ied; ++ i )
    {
        int faceid = icount;
        this->zoneList.push_back( donor_zoneid );
        this->local_faceids.push_back( faceid );
        index1[ 0 ] = i;
        transform->MapIndex( index1, index2 );
        Face face;
        face.zone = zoneid;
        face.i = i;

        int i_donor = index2[ 0 ];

        Face face_donor;
        face_donor.zone = donor_zoneid;
        face_donor.i = i_donor;

        FacePair facePair;
        facePair.AddPair( face, face_donor );

        Global::facePairList.push_back( facePair );
        int nSize = Global::facePairList.size();
        this->proc_global_faceids.push_back( nSize - 1 );

        int i_ghost_cell = i + 1;
        int i_local_donor_cell = i - 1;

        if ( i == 1 )
        {
            i_ghost_cell = i - 1;
            i_local_donor_cell = i + 1;
        }
        ijk_ghosts.push_back( i_ghost_cell );
        ijk_donors.push_back( i_local_donor_cell );

        icount ++;
    }
}
```

## CRWENO(Compact Reconstruction)WENO

```cpp
         x=0                ui+1/2,L             x=L
 o  o  o  o   ...  *   *   *  |   *    *  ...     o    o   o   o
-3 -2 -1 i=0      i-2 i-1  i  |  i+1  i+2       i=N-1  N  N+1 N+2

         x=0                ui+1/2,R              x=L
 o  o  o  o  ...       *   *  |   *    *   *  ...  o   o   o   o
-3 -2 -1 i=0      i-2 i-1  i  |  i+1  i+2        i=N-1 N  N+1  N+2

 |    o   |  o  |  o  |       o    |    o   |     o   |
-3/2 -1 -1/2 0 1/2 1 3/2 ... N-2 N-3/2 N-1 N-1/2  N  N+1/2

-3/2 -1  -1/2
-1/2  0   1/2
N-3/2 N-1 N-1/2
N-1/2 N   N+1/2

-1,0,1,...,N-1,N (Len=N+2)
-3/2,-1/2  ,1/2  ,3/2  ,...,N-3/2,N-1/2,N+1/2 (Len=N+3)
-2+1/2,-1+1/2,0+1/2,1+1/2,...,N-2+1/2,N-1+1/2,N+1/2 (Len=N+3)
-2,-1,0,...,N-1,N(Len=N+3)


  -3/2   -1/2,  1/2,...,N-3/2  ,N-1/2  ,N+1/2
-2+1/2,-1+1/2,0+1/2,...,N-2+1/2,N-1+1/2,N+1/2
-2    ,-1    ,0    ,...,N-2    ,N-1    ,N  (Len=N+3)

a*fi-1/2+b*fi+1/2+c*fi+3/2=di
ai*fi-1+1/2+bi*fi+1/2+ci*fi+1+1/2=di
------------------------------------------
a(-1)*f(-3/2)+b(-1)*f(-1/2)+c(-1)*f(1/2)=d(-1)
a0*f-1/2+b0*f1/2+c0*f3/2=d0
a1*f1/2+b1*f3/2+c0*f5/2=d1
...
ai*fi-1+1/2+bi*fi+1/2+ci*fi+1+1/2=di
...
aN-3*fN-7/2+bN-3*fN-5/2+cN-3*fN-3/2=dN-3
aN-2*fN-5/2+bN-2*fN-3/2+cN-2*fN-1/2=dN-2
aN-1*fN-3/2+bN-1*fN-1/2+cN-1*fN+1/2=dN-1
------------------------------------------
equation(0,1,...,N-2)(nEquations=N-1)

------------------------------------------
b(-1)*f(-1/2)+c(-1)*f(1/2)=d(-1)-a(-1)*f(-3/2)
a0*f-1/2+b0*f1/2+c0*f3/2=d0
a1*f1/2+b1*f3/2+c0*f5/2=d1
...
ai*fi-1+1/2+bi*fi+1/2+ci*fi+1+1/2=di
...
aN-3*fN-7/2+bN-3*fN-5/2+cN-3*fN-3/2=dN-3
aN-2*fN-5/2+bN-2*fN-3/2+cN-2*fN-1/2=dN-2
aN-1*fN-3/2+bN-1*fN-1/2=dN-1-cN-1*fN+1/2
------------------------------------------
```

$$
  \begin{bmatrix}
  b_{-1}&c_{-1}& \\
  a_{0}&b_{0}&c_{0}&  & \\
  &  \ddots&\ddots &\ddots \\
  &&a_{i}&b_{i}&c_{i} \\
  &&&\ddots&\ddots &\ddots \\
  &&&&a_{N-2}&b_{N-2}&c_{N-2} \\
  &&&&&a_{N-1}&b_{N-1}
  \end{bmatrix}
  \begin{bmatrix}
  {f}_{-1/2}\\
  {f}_{1/2}\\
  \vdots\\
  {f}_{i+1/2}\\
  \vdots\\
  {f}_{N-3/2}\\
  {f}_{N-1/2}\\
  \end{bmatrix}  
  =\begin{bmatrix}
  {d}_{-1}-{a}_{-1}{f}_{-3/2}\\
  {d}_{0}\\
  \vdots\\
  {d}_{i}\\
  \vdots\\
  {d}_{N-2}\\
  {d}_{N-1}-{c}_{N-1}{f}_{N+1/2}\\
  \end{bmatrix} 
$$

$$
  \begin{array}{l}
  a_{i}=\cfrac{2}{3}\omega^{L}_{1}+\cfrac{1}{3}\omega^{L}_{2}\\
  b_{i}=\cfrac{1}{3}\omega^{L}_{1}+\cfrac{2}{3}(\omega^{L}_{2}+\omega^{L}_{3})\\
  c_{i}=\cfrac{1}{3}\omega^{L}_{3}\\
  d_{i}=\cfrac{\omega^{L}_{1}}{6}{u}_{i-1}
  +\cfrac{5(\omega^{L}_{1}+\omega^{L}_{2})+\omega^{L}_{3}}{6}{u}_{i}
  +\cfrac{\omega^{L}_{2}+5\omega^{L}_{3}}{6}{u}_{i+1}
  \end{array}  
$$

$$
  \underbrace{\overset{\otimes}{-3},\overset{\otimes}{-2}, \overset{\otimes}{-1}}_{\text{ghost points}}
  \underbrace{\overset{|}{-1/2}}_{\text{face}}
  \underbrace{\overset{\otimes}{0}}_{\text{bc}}
  \underbrace{\overset{|}{1/2}}_{\text{face}}
  \underbrace{,\overset{\otimes}{1},\overset{\otimes}{2},\cdots,\overset{\otimes}{N-2},}_{\text{inner points}}
  \underbrace{\overset{|}{N-3/2}}_{\text{face}}
  \underbrace{\overset{\otimes}{N-1}}_{\text{bc}}
  \underbrace{\overset{|}{N-1/2}}_{\text{face}}
  \underbrace{,\overset{\otimes}{N},\overset{\otimes}{N+1},\overset{\otimes}{N+2}}_{\text{ghost points}} 
$$

```cpp
         x=0                ui+1/2,L             x=L
 o  o  o  o   ...  *   *   *  |   *    *  ...     o    o   o   o
-3 -2 -1 i=0      i-2 i-1  i  |  i+1  i+2       i=N-1  N  N+1 N+2

         x=0                ui+1/2,R              x=L
 o  o  o  o  ...       *   *  |   *    *   *  ...  o   o   o   o
-3 -2 -1 i=0      i-2 i-1  i  |  i+1  i+2        i=N-1 N  N+1  N+2

ui-1/2,R=List(i-2,i-1,i,i+1,i+2        )
ui+1/2,R=List(    i-1,i,i+1,i+2,i+3    )
ui+3/2,R=List(        i,i+1,i+2,i+3,i+4)
a(i)*ui-1/2,R+b(i)*ui+1/2,R+c(i)*ui+3/2,R=d(i)
d(i)=b1*u(i-1)+b2*u(i)+b3*u(i+1)
```

coef L

$$
  \begin{array}{l}
  \beta_{0}=\cfrac{13}{12}(u_{i-2}-2u_{i-1}+u_{i})^2+\cfrac{1}{4}(u_{i-2}-4u_{i-1}+3u_{i})^2\\
  \beta_{1}=\cfrac{13}{12}(u_{i-1}-2u_{i}+u_{i+1})^2+\cfrac{1}{4}(u_{i-1}-u_{i+1})^2\\
  \beta_{2}=\cfrac{13}{12}(u_{i}-2u_{i+1}+u_{i+2})^2+\cfrac{1}{4}(3u_{i}-4u_{i+1}+u_{i+2})^2
  \end{array}
$$

$$
\begin{array}{l}
(v_{1},v_{2},v_{3},v_{4},v_{5})=(u_{i-2},u_{i-1},u_{i},u_{i+1},u_{i+2})\\
\beta_{0}=\cfrac{13}{12}(v_{1}-2v_{2}+v_{3})^2+\cfrac{1}{4}(v_{1}-4v_{2}+3v_{3})^2\\
\beta_{1}=\cfrac{13}{12}(v_{2}-2v_{3}+v_{4})^2+\cfrac{1}{4}(v_{2}-v_{4})^2\\
\beta_{2}=\cfrac{13}{12}(v_{3}-2v_{4}+v_{5})^2+\cfrac{1}{4}(3v_{3}-4v_{4}+v_{5})^2
\end{array}
$$

coef R

$$
  \begin{array}{l}
  \beta_{0}=\cfrac{13}{12}(u_{i-1}-2u_{i}+u_{i+1})^2+\cfrac{1}{4}(u_{i-1}-4u_{i}+3u_{i+1})^2\\
  \beta_{1}=\cfrac{13}{12}(u_{i}-2u_{i+1}+u_{i+2})^2+\cfrac{1}{4}(u_{i}-u_{i+2})^2\\
  \beta_{2}=\cfrac{13}{12}(u_{i+1}-2u_{i+2}+u_{i+3})^2+\cfrac{1}{4}(3u_{i+1}-4u_{i+2}+u_{i+3})^2
  \end{array}
$$

$$
\begin{array}{l}
(v_{1},v_{2},v_{3},v_{4},v_{5})=(u_{i-1},u_{i},u_{i+1},u_{i+2},u_{i+3})\\
\beta_{0}=\cfrac{13}{12}(v_{1}-2v_{2}+v_{3})^2+\cfrac{1}{4}(v_{1}-4v_{2}+3v_{3})^2\\
\beta_{1}=\cfrac{13}{12}(v_{2}-2v_{3}+v_{4})^2+\cfrac{1}{4}(v_{2}-v_{4})^2\\
\beta_{2}=\cfrac{13}{12}(v_{3}-2v_{4}+v_{5})^2+\cfrac{1}{4}(3v_{3}-4v_{4}+v_{5})^2
\end{array}
$$

$$
\begin{array}{l}
\alpha_{k}=\cfrac{d_{k}^{L}}{(\beta_{k}+\epsilon )^2},\quad k=0,1,2\\
\omega_{k}^{L}=\cfrac{\alpha_{k}}{\alpha_{0}+\alpha_{1}+\alpha_{2}},\quad k=0,1,2\\
\end{array}
$$

$$
\begin{array}{l}
\alpha_{k}=\cfrac{d_{k}^{R}}{(\beta_{k}+\epsilon )^2},\quad k=0,1,2\\
\omega_{k}^{R}=\cfrac{\alpha_{k}}{\alpha_{0}+\alpha_{1}+\alpha_{2}},\quad k=0,1,2\\
\end{array}
$$

```cpp
         x=0                    ui+1/2,L                 x=L
 o  o  o  o  o  o ...  *   *   *  |   *    *       ...    o    o   o   o
-3 -2 -1 i=0 1  2     i-2 i-1  i  |  i+1  i+2 i+3       i=N-1  N  N+1 N+2

         x=0                    ui+1/2,R                 x=L
 o  o  o  o  o  o ...      *   *  |   *    *    *  ...    o    o   o   o
-3 -2 -1 i=0 1  2     i-2 i-1  i  |  i+1  i+2  i+3      i=N-1  N  N+1 N+2
```

$$
\begin{array}{l}
u_{i+\frac{1}{2},L}^{(0)}=\frac{1}{3}\bar{u}_{i-2}-\frac{7}{6}\bar{u}_{i-1}+\frac{11}{6}\bar{u}_{i}\\
u_{i+\frac{1}{2},L}^{(1)}=-\frac{1}{6}\bar{u}_{i-1}+\frac{5}{6}\bar{u}_{i}+\frac{1}{3}\bar{u}_{i+1}\\
u_{i+\frac{1}{2},L}^{(2)}=\frac{1}{3}\bar{u}_{i}+\frac{5}{6}\bar{u}_{i+1}-\frac{1}{6}\bar{u}_{i+2}\\
u_{i+\frac{1}{2}}^{L}=\omega_{0}^{L}u_{i+\frac{1}{2},L}^{(0)}+
\omega_{1}^{L}u_{i+\frac{1}{2},L}^{(1)}+\omega_{2}^{L}u_{i+\frac{1}{2},L}^{(2)}
\end{array}
$$

$$
\begin{array}{l}
u_{i+\frac{1}{2},R}^{(0)}=\frac{1}{3}\bar{u}_{i+1}+\frac{5}{6}\bar{u}_{i}-\frac{1}{6}\bar{u}_{i-1}\\
u_{i+\frac{1}{2},R}^{(1)}=-\frac{1}{6}\bar{u}_{i+2}+\frac{5}{6}\bar{u}_{i+1}+\frac{1}{3}\bar{u}_{i}\\
u_{i+\frac{1}{2},R}^{(2)}=\frac{1}{3}\bar{u}_{i+3}-\frac{7}{6}\bar{u}_{i+2}+\frac{11}{6}\bar{u}_{i+1}\\
u_{i+\frac{1}{2}}^{R}=\omega_{0}^{R}u_{i+\frac{1}{2},R}^{(0)}+
\omega_{1}^{R}u_{i+\frac{1}{2},R}^{(1)}+\omega_{2}^{R}u_{i+\frac{1}{2},R}^{(2)}
\end{array}
$$

$$
  \begin{array}{l}
  (\cfrac{2}{3}\omega^{L}_{1}+\cfrac{1}{3}\omega^{L}_{2}){u}^{L}_{i-1/2}
  +\left[\cfrac{1}{3}\omega^{L}_{1}+\cfrac{2}{3}(\omega^{L}_{2}+\omega^{L}_{3})\right]{u}^{L}_{i+1/2}
  +\cfrac{1}{3}\omega^{L}_{3}{u}^{L}_{i+3/2}\\
  =\cfrac{\omega^{L}_{1}}{6}{u}_{i-1}
  +\cfrac{5(\omega^{L}_{1}+\omega^{L}_{2})+\omega^{L}_{3}}{6}{u}_{i}
  +\cfrac{\omega^{L}_{2}+5\omega^{L}_{3}}{6}{u}_{i+1}
  \end{array} 
$$

???

$$
  \begin{array}{l}
  \cfrac{1}{3}\omega^{R}_{1}{u}^{R}_{i-1/2}
  +\left[\cfrac{1}{3}\omega^{R}_{3}+\cfrac{2}{3}(\omega^{R}_{2}+\omega^{R}_{1})\right]{u}^{R}_{i+1/2}
  +(\cfrac{2}{3}\omega^{R}_{3}+\cfrac{1}{3}\omega^{R}_{2}){u}^{R}_{i+3/2}\\
  =\cfrac{\omega^{R}_{2}+5\omega^{R}_{1}}{6}{u}_{i-1}
  +\cfrac{5(\omega^{R}_{3}+\omega^{R}_{2})+\omega^{R}_{1}}{6}{u}_{i}
  +\cfrac{\omega^{R}_{3}}{6}{u}_{i+1}
  \end{array}
$$

guess?

$$
  \begin{array}{l}
  \cfrac{1}{3}\omega^{R}_{1}{u}^{R}_{i-1/2}
  +\left[\cfrac{1}{3}\omega^{R}_{3}+\cfrac{2}{3}(\omega^{R}_{2}+\omega^{R}_{1})\right]{u}^{R}_{i+1/2}
  +(\cfrac{2}{3}\omega^{R}_{3}+\cfrac{1}{3}\omega^{R}_{2}){u}^{R}_{i+3/2}\\
  =\cfrac{\omega^{R}_{2}+5\omega^{R}_{1}}{6}{u}_{i}
  +\cfrac{5(\omega^{R}_{3}+\omega^{R}_{2})+\omega^{R}_{1}}{6}{u}_{i+1}
  +\cfrac{\omega^{R}_{3}}{6}{u}_{i+2}
  \end{array}
$$

Only Calc InnerPoint

$$
\begin{array}{l}
a_{i}u_{i-\frac{1}{2}}^{L}+b_{i}u_{i+\frac{1}{2}}^{L}+c_{i}u_{i+\frac{3}{2}}^{L}=d_{i}=List(i-2,i-1,i,i+1,i+2)\\
a_{0}u_{-\frac{1}{2}}^{L}+b_{0}u_{\frac{1}{2}}^{L}+c_{0}u_{\frac{3}{2}}^{L}=d_{0}=List(-2,-1,0,1,2)\\
\cdots \\
a_{N-2}u_{N-\frac{5}{2}}^{L}+b_{N-2}u_{N-\frac{3}{2}}^{L}+c_{N-2}u_{N-\frac{1}{2}}^{L}=d_{N-2}\\
=List(N-4,N-3,N-2,N-1,N)\\
nEqu=Len(0,1,...,N-2)=N-1
\end{array}
$$

???

$$
\begin{array}{l}
a_{i}u_{i-\frac{1}{2}}^{R}+b_{i}u_{i+\frac{1}{2}}^{R}+c_{i}u_{i+\frac{3}{2}}^{R}=d_{i}=List(i-1,i,i+1,i+2,i+3)\\
a_{0}u_{-\frac{1}{2}}^{R}+b_{0}u_{\frac{1}{2}}^{R}+c_{0}u_{\frac{3}{2}}^{R}=d_{0}=List(-1,0,1,2,3)\\
\cdots \\
a_{N-2}u_{N-\frac{5}{2}}^{R}+b_{N-2}u_{N-\frac{3}{2}}^{R}+c_{N-2}u_{N-\frac{1}{2}}^{R}=d_{N-2}\\
=List(N-3,N-2,N-1,N,N+1)\\
nEqu=Len(0,1,...,N-2)=N-1
\end{array}
$$

guess

$$
\begin{array}{l}
a_{i}u_{i-\frac{1}{2}}^{R}+b_{i}u_{i+\frac{1}{2}}^{R}+c_{i}u_{i+\frac{3}{2}}^{R}=d_{i+1}=List(i,i+1,i+2)\\
a_{0}u_{-\frac{1}{2}}^{R}+b_{0}u_{\frac{1}{2}}^{R}+c_{0}u_{\frac{3}{2}}^{R}=d_{1}\\
a_{1}u_{\frac{1}{2}}^{R}+b_{1}u_{\frac{3}{2}}^{R}+c_{1}u_{\frac{5}{2}}^{R}=d_{2}\\
\cdots \\
a_{N-2}u_{N-\frac{5}{2}}^{R}+b_{N-2}u_{N-\frac{3}{2}}^{R}+c_{N-2}u_{N-\frac{1}{2}}^{R}=d_{N-1}\\
nEqu=Len(0,1,...,N-2)=N-1
\end{array}
$$


Calc Boundary Point

$$
\begin{array}{l}
a_{i}u_{i-\frac{1}{2}}^{L}+b_{i}u_{i+\frac{1}{2}}^{L}+c_{i}u_{i+\frac{3}{2}}^{L}=d_{i}=List(i-2,i-1,i,i+1,i+2)\\
a_{-1}u_{-\frac{3}{2}}^{L}+b_{-1}u_{-\frac{1}{2}}^{L}+c_{-1}u_{\frac{1}{2}}^{L}=d_{-1}=List(-3,-2,-1,0,1)\\
a_{0}u_{-\frac{1}{2}}^{L}+b_{0}u_{\frac{1}{2}}^{L}+c_{0}u_{\frac{3}{2}}^{L}=d_{0}\\
\cdots \\
a_{N-1}u_{N-\frac{3}{2}}^{L}+b_{N-1}u_{N-\frac{1}{2}}^{L}+c_{N-1}u_{N+\frac{1}{2}}^{L}=d_{N-1}\\
=List(N-3,N-2,N-1,N,N+1)\\
nEqu=Len(-1,0,1,...,N-1)=N+1
\end{array}
$$

???

$$
\begin{array}{l}
a_{i}u_{i-\frac{1}{2}}^{R}+b_{i}u_{i+\frac{1}{2}}^{R}+c_{i}u_{i+\frac{3}{2}}^{R}=d_{i}=List(i-1,i,i+1,i+2,i+3)\\
a_{-1}u_{-\frac{3}{2}}^{R}+b_{-1}u_{-\frac{1}{2}}^{R}+c_{-1}u_{\frac{1}{2}}^{R}=d_{-1}=List(-2,-1,0,1,2)\\
a_{0}u_{-\frac{1}{2}}^{R}+b_{0}u_{\frac{1}{2}}^{R}+c_{0}u_{\frac{3}{2}}^{R}=d_{0}\\
\cdots \\
a_{N-1}u_{N-\frac{3}{2}}^{R}+b_{N-1}u_{N-\frac{1}{2}}^{R}+c_{N-1}u_{N+\frac{1}{2}}^{R}=d_{N-1}\\
=List(N-2,N-1,N,N+1,N+2)\\
nEqu=Len(-1,0,1,...,N-1)=N+1
\end{array}
$$

guess

$$
\begin{array}{l}
a_{i}u_{i-\frac{1}{2}}^{R}+b_{i}u_{i+\frac{1}{2}}^{R}+c_{i}u_{i+\frac{3}{2}}^{R}=d_{i+1}=List(i,i+1,i+2)\\
a_{-1}u_{-\frac{3}{2}}^{R}+b_{-1}u_{-\frac{1}{2}}^{R}+c_{-1}u_{\frac{1}{2}}^{R}=d_{0}\\
a_{0}u_{-\frac{1}{2}}^{R}+b_{0}u_{\frac{1}{2}}^{R}+c_{0}u_{\frac{3}{2}}^{R}=d_{1}\\
a_{1}u_{\frac{1}{2}}^{R}+b_{1}u_{\frac{3}{2}}^{R}+c_{1}u_{\frac{5}{2}}^{R}=d_{2}\\
\cdots \\
a_{N-2}u_{N-\frac{5}{2}}^{R}+b_{N-2}u_{N-\frac{3}{2}}^{R}+c_{N-2}u_{N-\frac{1}{2}}^{R}=d_{N-1}\\
a_{N-1}u_{N-\frac{3}{2}}^{R}+b_{N-1}u_{N-\frac{1}{2}}^{R}+c_{N-1}u_{N+\frac{1}{2}}^{R}=d_{N}\\
nEqu=Len(-1,0,1,...,N-2,N-1)=N+1
\end{array}
$$


## 1D Euler equation solver written in Python

- [1D Euler equation solver written in Python](https://github.com/chairmanmao256/Python-shock-tube/blob/main/README.md).

Note that the Godunov Riemann solver is rewritten from this repository: ToroExact. 
Other approximate Riemann solvers mainly refers to Toro's book: Riemann Solvers a n d Numerical Methods for Fluid Dynamics and this MATLAB code: Approximate Riemann Solvers.

## 1D Euler Equations - Lax Shock Tube

- [1D Euler Equations - Lax Shock Tube](https://hypar.github.io/a00018.html).
- [HyPar  1.0](https://hypar.github.io/).
- [HyPar  1.0 code](https://github.com/debog/hypar).

## Approximate Riemann Solvers

- [Approximate Riemann Solvers](https://github.com/wme7/ApproximateRiemannSolvers).

## Shu-Osher Shock Tube

- [Shu-Osher Shock Tube Problem](http://ttctech.com/Samples/shockwave/shockwave.htm).
Shu-Osher shock tube problem
- [Shu and Osher's Shocktube Test](https://www.astro.princeton.edu/~jstone/Athena/tests/shu-osher/Shu-Osher.html).


## AEROFLO Sample Problems

- [AEROFLO Sample Problems](http://ttctech.com/Samples/aeroflo_samples.htm).

## Applied & Computational Methods 

- [Applied & Computational Methods ](https://cpraveen.github.io/teaching/acm2025.html).
- [Praveen C-TIFR Center for Applicable Mathematics](https://github.com/cpraveen).




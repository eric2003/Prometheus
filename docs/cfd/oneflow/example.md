# OneFLOW-Example

OneFLOW documentation visit [eric2003.github.io/OneFLOW](https://eric2003.github.io/OneFLOW/).

## Heat Equation

## 1d-Heat Equation

-  [Solving the Heat Diffusion Equation (1D PDE) in Python](https://www.youtube.com/watch?v=6-2Wzs0sXd8).

$$
\frac{\partial u}{\partial t} =\alpha \frac{\partial ^{2}u}{\partial x^{2}}
$$


### FTCS

$$
\frac{u^{(n+1)}_{i}-u^{(n)}_{i}}{\Delta t} =
\alpha \frac{u^{(n)}_{i+1}-2u^{(n)}_{i}+u^{(n)}_{i-1}}{\Delta x^2}
$$

$$
u^{(n+1)}_{i}=u^{(n)}_{i}+
\alpha\frac{\Delta t}{\Delta x^2}(u^{(n)}_{i+1}-2u^{(n)}_{i}+u^{(n)}_{i-1})
$$

$$
\beta =\alpha\frac{\Delta t}{\Delta x^2}
$$

$$
u^{(n+1)}_{i}=u^{(n)}_{i}+
\beta (u^{(n)}_{i+1}-2u^{(n)}_{i}+u^{(n)}_{i-1})
$$

```julia
@printf( "t = %f\n", t)
@printf( "dt = %f\n", dt)
@printf( "nt = %i\n", nt)
@printf( "nx = %i\n", nx)
output:
t = 1.000000
dt = 0.002500
nt = 400
nx = 80
#i=1,81
for i = 1:nx+1
    x[i] = x_l + dx*(i-1)  # location of each grid point
    un[1,i] = -sin(pi*x[i]) # initial condition @ t=0
    u_e[i] = -exp(-t)*sin(pi*x[i]) # initial condition @ t=0
end

#k=2,401
for k = 2:nt+1
    @printf( "k = %i\n", k)
    for i = 2:nx
        un[k,i] = un[k-1,i] + beta*(un[k-1,i+1] -
                                2.0*un[k-1,i] + un[k-1,i-1])
    end
    un[k,1] = 0.0 # boundary condition at x = -1
    un[k,nx+1] = 0.0 # boundary condition at x = -1
end
```


```cpp
std::cout << "dt = " << dt << "\n";
std::cout << "t = " << t << "\n";
std::cout << "nt = " << nt << "\n";
std::cout << "ni = " << ni << "\n";
dt = 0.0025
t = 1
nt = 400
ni = 81
//i=0,ni-1
//i=0,80
for ( int i = 0; i < ni; ++ i )
{
    u_e[ i ] = - std::exp( -t ) * std::sin( std::numbers::pi * x[i] ); //theory solution
    un[ i ] = - std::sin( std::numbers::pi * x[ i ] ); //initial condition @ t=0
}
un[ 0 ] = 0.0;
un[ ni - 1 ] = 0.0;

//it=0,nt-1
for ( int it = 0; it < nt; ++ it )
{
    for ( int i = 1; i < ni - 1; ++ i )
    {
        u[ i ] = un[ i ] + beta * ( un[ i + 1 ] - 2.0 * un[ i ] + un[ i - 1 ] );
    }
    //boundary
    u[ 0 ] = 0.0; // boundary condition at x = -1
    u[ ni - 1 ] = 0.0; // boundary condition at x = 1
    this->update( un, u );
}
```

```cpp
ni = 81
dt = 0.0025
t = 1
nt = 400
ni = 81
alpha = 0.101321183642338
beta = 0.405284734569351

ni = 41
dt = 0.0025
t = 1
nt = 400
ni = 41
alpha = 0.101321183642338
beta = 0.405284734569351
ni = 41
dt = 0.0025
t = 1
nt = 400
ni = 41
alpha = 0.101321183642338
beta = 0.405284734569351

int nghost = 2;
int ni_total = ni + nghost;
ni_total = 43

ghost -1.0             0.0 ghost
  0    1   2  ... 40   41  42
                   0    1   2   3  ... 40  41   42
			     ghost 0.0                -1.0  ghost
#zone 0: 1,41 x[0]-x[40]=[-1,0.0]
for ( int i = ist; i <= ied; ++ i )
{
    double xm = x[ i - ist ];
    u_e[ i ] = - std::exp( -total_time ) * std::sin( std::numbers::pi * xm ); //theory solution
    u[ i ] = - std::sin( std::numbers::pi * xm ); //initial condition @ t=0
}
zone[0] -1.0                 0.0
        x[0] x[1] ... x[39] x[40]
   u[0] u[1] u[2] ... u[40] u[41] u[42]
zone[1]                      0.0                  1.0
                            x[0]  x[1] ... x[39] x[40]
                      u[0]  u[1]  u[2] ... u[40] u[41] u[42]

#zone 1: 1,41 x[0]-x[40]=[0.0,1.0]
for ( int i = ist; i <= ied; ++ i )
{
    double xm = x[ i - ist ];
    u_e[ i ] = - std::exp( -total_time ) * std::sin( std::numbers::pi * xm ); //theory solution
    u[ i ] = - std::sin( std::numbers::pi * xm ); //initial condition @ t=0
}

PhysicalBoundary();
InflowBc
this->u[ ighost ] = 2 * this->u[ i ] - this->u[ iinner ];
u0[0] = 2 * u0[ 1 ] - u0[ 2 ];
OutflowBc
this->u[ ighost ] = 2 * this->u[ i ] - this->u[ iinner ];
u1[42] = 2 * u1[ 41 ] - u1[ 40 ];

ExchangeInterfaceField()

for ( int iZone = 0; iZone < nZones; ++ iZone )
{
    Field * field = Global::fields[ iZone ];
    field->Update( field->un, field->u );
}

void Field::Update( std::vector<double> &un, std::vector<double> &u )
{
    for ( int i = 0; i < u.size(); ++ i )
    {
        un[ i ] = u[ i ];
    }
}

#u_e_total
ni_total = 81
   -1.0                    0.0                     1.0
   x [0] x [1] ... x [39] x [40] x [41] ... x [79] x [80]
   u0[1] u0[2] ... u0[40] u1[1 ] u1[2 ] ... u1[40] u1[41]
   u [0] u [1] ... u [39] u [40] u [41] ... u [79] u [80]

void Field::Solve( Zone * zone )
{
    int nghost = 2;
    int ni_total = ni + nghost;

    int ist = 1;
    int ied = ni;

    for ( int i = ist; i <= ied; ++ i )
    {
        u[ i ] = un[ i ] + beta * ( un[ i + 1 ] - 2.0 * un[ i ] + un[ i - 1 ] );
    }

    this->PhysicalBoundary( zone );

    this->Update( un, u );
}

ghost -1.0             0.0 ghost
  0    1   2  ... 40   41  42
                   0    1   2   3  ... 40  41   42
			     ghost 0.0                -1.0  ghost
				 
        double term1 = un[ i - 1 ];
        double term2 = un[ i ];
        double term3 = un[ i + 1 ];
        double term4 = term1 -2.0 * term2 + term3;
        double term5 = beta * term4;
        double term6 = term2 + term5;
		
zone 0
        double term1 = un[ 40 ];
        double term2 = un[ 41 ];
        double term3 = un[ 42 ];
zone 1
        double term1 = un[ 0 ];
        double term2 = un[ 1 ];
        double term3 = un[ 2 ];
		
zone->zoneIndex = 0
term1 = 0.0782630487959513065909789
term2 = -2.812227774049929009031494e-16
term3 = -0.07845909572784535990219723

zone->zoneIndex = 1
term1 = 0.07845909572784466601280684
term2 = -2.812227774049929009031494e-16
term3 = -0.07826304879595158414673506	
				 
```

### Runge-Kutta Numerical Scheme

$$
\begin{align}
u_{i}^{(1)} & = u_{i}^{(n)}+\frac{\alpha \Delta t}{\Delta x^{2}}\left(u_{i+1}^{(n)}-2 u_{i}^{(n)}+u_{i-1}^{(n)}\right),\\
u_{i}^{(2)}  & = \frac{3}{4} u_{i}^{(n)}+\frac{1}{4} u_{i}^{(1)}+\frac{1}{4}\frac{\alpha \Delta t}{ \Delta x^{2}}\left(u_{i+1}^{(1)}-2 u_{i}^{(1)}+u_{i-1}^{(1)}\right) \\
u_{i}^{(n+1)}  & = \frac{1}{3} u_{i}^{(n)}+\frac{2}{3} u_{i}^{(2)}+\frac{2}{3}\frac{\alpha \Delta t}{\Delta x^{2}}\left(u_{i+1}^{(2)}-2 u_{i}^{(2)}+u_{i-1}^{(2)}\right) .
\end{align}
$$

## Thomas algorithm

-  [PARALLEL TRI- DIAGONAL MATRIX SOLVER USING MPI](https://cse.buffalo.edu/faculty/miller/Courses/CSE702/Paramveer-Singh-Fall-2022.pdf).
-  [Parallel implementation of Thomas algorithm for the 2D heat equation](https://typeset.io/pdf/parallel-implementation-of-thomas-algorithm-for-the-2d-heat-56gzuclpnd.pdf).
-  [TridiagonalMatrices:ThomasAlgorithm](http://www.industrial-maths.com/ms6021_thomas.pdf).
-  [Tridiagonal matrix algorithm - TDMA (Thomas algorithm)](https://www.cfd-online.com/Wiki/Tridiagonal_matrix_algorithm_-_TDMA_(Thomas_algorithm)).
-  [Tri-Diagonal Matrix Algorithm](https://www.thevisualroom.com/01_barba_theory/tri_diagonal_matrix.html).
-  [三对角线性方程组(tridiagonal systems of equations)](https://www.cnblogs.com/jclian91/p/9132838.html).
-  [Thomas Algorithm for Tridiagonal Systems](https://www.youtube.com/watch?v=wheDgqRPikA).
-  [Tridiagonal matrix algorithm](https://en.wikibooks.org/wiki/Algorithm_Implementation/Linear_Algebra/Tridiagonal_matrix_algorithm).
-  [三对角矩阵算法](https://zh.wikipedia.org/wiki/%E4%B8%89%E5%AF%B9%E8%A7%92%E7%9F%A9%E9%98%B5%E7%AE%97%E6%B3%95).
-  [wiki-Tridiagonal matrix algorithm](https://en.wikipedia.org/wiki/Tridiagonal_matrix_algorithm).
-  [Algorithm for solving tridiagonal matrix problems in parallel](https://web.cels.anl.gov/~zippy/publications/partrid/partrid.html).

```cpp
import std;

void thomas_algorithm( const std::vector<double> & a,
    const std::vector<double> & b,
    const std::vector<double> & c,
    const std::vector<double> & d,
    std::vector<double> & x )
{
    size_t N = d.size();

    std::vector<double> c_star( N, 0.0 );
    std::vector<double> d_star( N, 0.0 );

    c_star[ 0 ] = c[ 0 ] / b[ 0 ];
    d_star[ 0 ] = d[ 0 ] / b[ 0 ];

    for ( int i = 1; i < N; ++ i )
    {
        double coef = 1.0 / ( b[ i ] - a[ i ] * c_star[ i - 1 ] );
        c_star[ i ] = c[ i ] * coef;
        d_star[ i ] = ( d[ i ] - a[ i ] * d_star[ i - 1 ] ) * coef;
    }

    x[ N - 1 ] = d_star[ N - 1 ];

    for ( int i = N - 2; i >= 0; -- i )
    {
        x[ i ] = d_star[ i ] - c_star[ i ] * x[ i + 1 ];
    }
}
                                                                                                                                                                                             
int main( int argc, char ** argv )
{
    //std::vector<double> a{ 0, -1, -1, -1, -1, -1 }; // 下对角线  
    //std::vector<double> b{ 2,  2,  2,  2,  2,  2 }; // 主对角线  
    //std::vector<double> c{ -1, -1, -1, -1, -1, 0 }; // 上对角线  
    //std::vector<double> d{ 1, 0, 0, 0, 0, 1 }; // 右边的常数向量  
    //std::vector<double> x( d.size() ); // 结果向量  

    std::vector<double> a{ 0, -1, -1, -1, -1 }; // 下对角线  
    std::vector<double> b{ 2,  2,  2,  2,  2 }; // 主对角线  
    std::vector<double> c{ -1, -1, -1, -1, 0 }; // 上对角线  
    std::vector<double> d{ 1.0, 1.0, 1.0, 1.0, 1.0 }; // 右边的常数向量  
    std::vector<double> x( d.size() ); // 结果向量  
                                                                                                                                                                      
    thomas_algorithm( a, b, c, d, x );
    for ( auto v : x )
    {
        std::print( "{} ", v );
    }
 
    return 0;
}
```


```cpp
#include <iostream>  
#include <mpi.h>  
#include <vector>  

void thomas_algorithm(double* a, double* b, double* c, double* d, double* x, int n) {  
    // 前向消元  
    for (int i = 1; i < n; ++i) {  
        double w = a[i - 1] / b[i - 1];  
        b[i] -= w * c[i - 1];  
        d[i] -= w * d[i - 1];  
    }  

    // 后向替代  
    x[n - 1] = d[n - 1] / b[n - 1];  
    for (int i = n - 2; i >= 0; --i) {  
        x[i] = (d[i] - c[i] * x[i + 1]) / b[i];  
    }  
}  

int main(int argc, char** argv) {  
    MPI_Init(&argc, &argv);  

    int rank, size;  
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);  
    MPI_Comm_size(MPI_COMM_WORLD, &size);  

    const int n = 6; // 假设矩阵大小为6  
    double a[n - 1] = { -1, -1, -1, -1, -1 }; // 下对角线  
    double b[n] = {  2,  2,  2,  2,  2,  2 }; // 主对角线  
    double c[n - 1] = { -1, -1, -1, -1, -1 }; // 上对角线  
    double d[n] = { 1, 0, 0, 0, 0, 1 }; // 右边的常数向量  
    double x[n]; // 结果向量  

    // 将问题划分给各个进程  
    int local_n = n / size; // 每个进程处理的条目数量，假设n可以被size整除  

    // 这里假设每个处理器只计算固定的一部分  
    // 进行并行的前向消元  
    for (int i = 0; i < size; ++i) {  
        if (rank == i) {  
            thomas_algorithm(a + i * local_n, b + i * local_n, c + i * local_n, d + i * local_n, x + i * local_n, local_n);  
        }  
        MPI_Bcast(x, n, MPI_DOUBLE, i, MPI_COMM_WORLD); // 广播结果  
    }  

    if (rank == 0) {  
        std::cout << "Solution: ";  
        for (int i = 0; i < n; ++i) {  
            std::cout << x[i] << " ";  
        }  
        std::cout << std::endl;  
    }  

    MPI_Finalize();  
    return 0;  
}  
```

线性方程组的矩阵和向量

$$
A = \begin{bmatrix}  
2 & -1 & 0 & 0 & 0 & 0 \\
-1 & 2 & -1 & 0 & 0 & 0 \\
0 & -1 & 2 & -1 & 0 & 0 \\
0 & 0 & -1 & 2 & -1 & 0 \\
0 & 0 & 0 & -1 & 2 & -1 \\
0 & 0 & 0 & 0 & -1 & 2  
\end{bmatrix}  
$$

$$
b = \begin{bmatrix}  
1 \\
0 \\
0 \\
0 \\
0 \\
1  
\end{bmatrix}
$$

$$
\begin{align*}  
\begin{bmatrix}  
2 & -1 & 0 & 0 & 0 & 0 \\
-1 & 2 & -1 & 0 & 0 & 0 \\
0 & -1 & 2 & -1 & 0 & 0 \\
0 & 0 & -1 & 2 & -1 & 0 \\
0 & 0 & 0 & -1 & 2 & -1 \\
0 & 0 & 0 & 0 & -1 & 2  
\end{bmatrix}  
\begin{bmatrix}  
x_0 \\
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5  
\end{bmatrix}  
=  
\begin{bmatrix}  
1 \\
0 \\
0 \\
0 \\
0 \\
1  
\end{bmatrix}  
\end{align*} 
$$

### 理论解

通过手动或数值方法求解该方程组，我们得到以下理论解：

$$
\begin{bmatrix}  
x_0 \\
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5  
\end{bmatrix}  
=  
\begin{bmatrix}  
1 \\
1 \\
1 \\
1 \\
1 \\
1  
\end{bmatrix}
$$


## Crank–Nicolson scheme

-  [国产CFD开源软件OneFLOW求解一维热传导方程简单测试（Crank–Nicolson scheme）](https://zhuanlan.zhihu.com/p/635151240).

$$
\cfrac{\partial u}{ \partial t}=\alpha \cfrac{\partial ^{2}u}{ \partial x^{2}}
$$

$$
\cfrac{u^{n+1}_{i}-u^{n}_{i}}{\Delta t}=\cfrac{1}{2}\cfrac{\alpha}{\Delta x^{2}}
\left[(u^{n+1}_{i+1}-2u^{n+1}_{i}+u^{n+1}_{i-1})+(u^{n}_{i+1}-2u^{n}_{i}+u^{n}_{i-1})\right]
$$

$$
r=\cfrac{1}{2}\cfrac{\alpha\Delta t}{\Delta x^{2}}
$$

$$
-ru^{n+1}_{i+1}+(1+2r)u^{n+1}_{i}-ru^{n+1}_{i-1}=ru^{n}_{i+1}+(1-2r)u^{n}_{i}+ru^{n}_{i-1}
$$

$$
-ru^{n+1}_{i-1}+(1+2r)u^{n+1}_{i}-ru^{n+1}_{i+1}=ru^{n}_{i-1}+(1-2r)u^{n}_{i}+ru^{n}_{i+1}  
$$

```cpp
o  |  *  *      *    *   |   o  
0  1  2  3 ... ni-2 ni-1 ni ni+1
```

$$
\begin{matrix}
a_{1}u^{n+1}_{0}+b_{1}u^{n+1}_{1}+c_{1}u^{n+1}_{2}=d_{1}\\
a_{2}u^{n+1}_{1}+b_{2}u^{n+1}_{2}+c_{2}u^{n+1}_{3}=d_{2}\\
...\\
a_{i}u^{n+1}_{i-1}+b_{i}u^{n+1}_{i}+c_{i}u^{n+1}_{i+1}=d_{i} \\
...\\
a_{N-1}u^{n+1}_{N-2}+b_{N-1}u^{n+1}_{N-2}+c_{N-1}u^{n+1}_{N}=d_{N-1} \\
a_{N}u^{n+1}_{N-1}+b_{N}u^{n+1}_{N}+c_{N}u^{n+1}_{N+1}=d_{N} \\
\end{matrix}
$$

$$
\begin{align}
a_{i} & = -r \\
b_{i} & = 1+2r\\
c_{i} & = -r\\
d_{i} & = ru^{n}_{i-1}+(1-2r)u^{n}_{i}+ru^{n}_{i+1}\\
\end{align}
$$

$$
\begin{matrix}
b_{1}u^{n+1}_{1}+c_{1}u^{n+1}_{2}=d_{1}-a_{1}u^{n+1}_{0}\\
a_{2}u^{n+1}_{1}+b_{2}u^{n+1}_{2}+c_{2}u^{n+1}_{3}=d_{2}\\
...\\
a_{i}u^{n+1}_{i-1}+b_{i}u^{n+1}_{i}+c_{i}u^{n+1}_{i+1}=d_{i} \\
...\\
a_{N-1}u^{n+1}_{N-2}+b_{N-1}u^{n+1}_{N-2}+c_{N-1}u^{n+1}_{N}=d_{N-1} \\
a_{N}u^{n+1}_{N-1}+b_{N}u^{n+1}_{N}=d_{N}-c_{N}u^{n+1}_{N+1} \\
\end{matrix}
$$

$$
\begin{matrix}
b_{1}u^{n+1}_{1}+c_{1}u^{n+1}_{2}=\hat{d}_{1}=d_{1}-a_{1}u^{n+1}_{0}\\
a_{2}u^{n+1}_{1}+b_{2}u^{n+1}_{2}+c_{2}u^{n+1}_{3}=\hat{d}_{2}=d_{2}\\
 ...\\
a_{i}u^{n+1}_{i-1}+b_{i}u^{n+1}_{i}+c_{i}u^{n+1}_{i+1}=\hat{d}_{i}=d_{i} \\
...\\
a_{N-1}u^{n+1}_{N-2}+b_{N-1}u^{n+1}_{N-2}+c_{N-1}u^{n+1}_{N}=\hat{d}_{N-1}=d_{N-1} \\
a_{N}u^{n+1}_{N-1}+b_{N}u^{n+1}_{N}=\hat{d}_{N}=d_{N}-c_{N}u^{n+1}_{N+1} \\
\end{matrix}
$$

## Boundary
1、
$$
u_{ghost}=2u_{b}-u_{inner}
$$

```cpp
Error details: 
L-2 Norm = 0.002943958856671853
Maximum Norm = 0.007626445297898438
```

2、
$$
u_{ghost}=-u_{inner}
$$

```cpp
Error details: 
L-2 Norm = 0.0001264755106943961
Maximum Norm = 0.00018037920997449053
```

## Parallel solving tridiagonal matrix

```cpp
1.
Factor the original matrix into a product of a block matrix (that can be divided up between processors) and a reduced matrix, which couples the block problems.
2.
Solve each block problem with one processor.
3.
Solve the reduced matrix problem.
```
Let us consider the problem of solving the linear system

$$
A\mathbf{x}=\mathbf{f}
$$

whose coefficient matrix is tridiagonal,

$$
  A=\begin{pmatrix}
  a_{1}&c_{1}  && && \\
  b_{2}&a_{2}&c_{2} & & & \\
  &.&.  &. & \\
  &&.  &. &.& \\
  &&  &. &.&c_{n-1} \\
  &&  & &b_{n}&a_{n} \\
  \end{pmatrix}
$$

$$
\mathbf{f}=\begin{pmatrix}
  f_{1}&\cdots  &f_{n}
\end{pmatrix}^{T},
\mathbf{x}=\begin{pmatrix}
  x_{1}&\cdots  &x_{n}
\end{pmatrix}^{T}
$$

## The Visual Room

-  [The Visual Room](https://www.thevisualroom.com/).
-  [CFD Projects in Sphinx](https://www.thevisualroom.com/02_barba_projects/barba_cfd_projects.html).

## Parallel-Cyclic-Reduction

-  [Parallel-Cyclic-Reduction](https://github.com/shardoolk/Parallel-Cyclic-Reduction-/blob/main/PCR_omp.cpp).
-  [Parallel tridiagonal matrix solver using cyclic reduction ](https://github.com/jihoonakang/parallel_tdma_cpp).


## The Cyclic Reduction Algorithm

## Gauss-Elimination

-  [C++ Program for Gauss-Elimination for solving a System of Linear Equations](https://www.bragitoff.com/2015/09/c-program-for-gauss-elimination-for-solving-a-system-of-linear-equations/).

```cpp
//Gauss Elimination
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    int n,i,j,k;
    cout.precision(4);        //set precision
    cout.setf(ios::fixed);
    cout<<"\nEnter the no. of equations\n";        
    cin>>n;                //input the no. of equations
    float a[n][n+1],x[n];        //declare an array to store the elements of augmented-matrix    
    cout<<"\nEnter the elements of the augmented-matrix row-wise:\n";
    for (i=0;i<n;i++)
        for (j=0;j<=n;j++)    
            cin>>a[i][j];    //input the elements of array
    for (i=0;i<n;i++)                    //Pivotisation
        for (k=i+1;k<n;k++)
            if (abs(a[i][i])<abs(a[k][i]))
                for (j=0;j<=n;j++)
                {
                    double temp=a[i][j];
                    a[i][j]=a[k][j];
                    a[k][j]=temp;
                }
    cout<<"\nThe matrix after Pivotisation is:\n";
    for (i=0;i<n;i++)            //print the new matrix
    {
        for (j=0;j<=n;j++)
            cout<<a[i][j]<<setw(16);
        cout<<"\n";
    }    
    for (i=0;i<n-1;i++)            //loop to perform the gauss elimination
        for (k=i+1;k<n;k++)
            {
                double t=a[k][i]/a[i][i];
                for (j=0;j<=n;j++)
                    a[k][j]=a[k][j]-t*a[i][j];    //make the elements below the pivot elements equal to zero or elimnate the variables
            }
     
    cout<<"\n\nThe matrix after gauss-elimination is as follows:\n";
    for (i=0;i<n;i++)            //print the new matrix
    {
        for (j=0;j<=n;j++)
            cout<<a[i][j]<<setw(16);
        cout<<"\n";
    }
    for (i=n-1;i>=0;i--)                //back-substitution
    {                        //x is an array whose values correspond to the values of x,y,z..
        x[i]=a[i][n];                //make the variable to be calculated equal to the rhs of the last equation
        for (j=i+1;j<n;j++)
            if (j!=i)            //then subtract all the lhs values except the coefficient of the variable whose value                                   is being calculated
                x[i]=x[i]-a[i][j]*x[j];
        x[i]=x[i]/a[i][i];            //now finally divide the rhs by the coefficient of the variable to be calculated
    }
    cout<<"\nThe values of the variables are as follows:\n";
    for (i=0;i<n;i++)
        cout<<x[i]<<endl;            // Print the values of x, y,z,....    
    return 0;
}
```

## Numerical Methods

-  [Numerical Methods](https://nm.mathforcollege.com/).


```cpp
#include <iostream>  
#include <vector>  
#include <iomanip>  

using namespace std;  

void gaussElimination(vector<vector<double>>& a, vector<double>& b) {  
    int n = a.size();  
    
    // 消元过程  
    for (int i = 0; i < n; ++i) {  
        // 找到当前列的最大值  
        double maxVal = abs(a[i][i]);  
        int maxRow = i;  
        for (int k = i + 1; k < n; k++) {  
            if (abs(a[k][i]) > maxVal) {  
                maxVal = abs(a[k][i]);  
                maxRow = k;  
            }  
        }  
        swap(a[i], a[maxRow]);  
        swap(b[i], b[maxRow]);  

        // 进行消元  
        for (int j = i + 1; j < n; j++) {  
            double factor = a[j][i] / a[i][i];  
            for (int k = i; k < n; k++) {  
                a[j][k] -= factor * a[i][k];  
            }  
            b[j] -= factor * b[i];  
        }  
    }  

    // 回代过程  
    vector<double> x(n);  
    for (int i = n - 1; i >= 0; i--) {  
        x[i] = b[i];  
        for (int j = i + 1; j < n; j++) {  
            x[i] -= a[i][j] * x[j];  
        }  
        x[i] /= a[i][i];  
    }  

    // 输出结果  
    for (int i = 0; i < n; i++) {  
        cout << "x" << i + 1 << " = " << setprecision(6) << fixed << x[i] << endl;  
    }  
}  

int main() {  
    int n;  
    cout << "请输入未知数的数量: ";  
    cin >> n;  

    vector<vector<double>> a(n, vector<double>(n));  
    vector<double> b(n);  

    cout << "请输入增广矩阵的系数:\n";  
    for (int i = 0; i < n; i++) {  
        for (int j = 0; j < n; j++) {  
            cin >> a[i][j];  
        }  
        cin >> b[i];  
    }  

    gaussElimination(a, b);  

    return 0;  
}  
```

## 上三角方程组

$$
\left\{\begin{matrix}
 u_{11}x_{1}&+ u_{12}x_{2}&+\cdots &+u_{1，n-1}x_{n-1}&+u_{1n}x_{n}&=b_{1}\\
    &u_{22}x_{2}&+\cdots &+u_{2，n-1}x_{n-1}&+u_{2n}x_{n}&=b_{2}\\
&&\cdots\\
 &&&u_{n-1,n-1}x_{n-1}&+u_{n-1,n}x_{n}&=b_{n-1}\\
 &&&&u_{nn}x_{n}&=b_{n}\\
\end{matrix}\right.
$$

$$
u_{ii}x_{i} +u_{i，i+1}x_{i+1}+\cdots+u_{in}x_{n}=b_{i}
$$

$$
x_{i}=\frac{b_{i}-\sum_{j=i+1}^{n} u_{ij}x_{j}}{u_{ii}}
$$

```cpp
Input: For N unknowns, input is an augmented 
       matrix of size N x (N+1). One extra 
       column is for Right Hand Side (RHS)
  mat[N][N+1] = {{3.0, 2.0,-4.0, 3.0},
                {2.0, 3.0, 3.0, 15.0},
                {5.0, -3, 1.0, 14.0}
               };
Output: Solution to equations is:
        3.000000
        1.000000
        2.000000
Explanation:
Given matrix represents following equations
3.0X1 + 2.0X2 - 4.0X3 =  3.0
2.0X1 + 3.0X2 + 3.0X3 = 15.0
5.0X1 - 3.0X2 +    X3 = 14.0
There is a unique solution for given equations, 
solutions is, X1 = 3.0, X2 = 1.0, X3 = 2.0, 
```

gaussElimination( std::vector<std::vector<double>> & a, std::vector<double> & b )
```cpp
#include <vector>  
#include <print>

void Print( std::vector<double> & x );
void Print( std::vector<std::vector<double>> & a );
void MatrixMultiply( std::vector<std::vector<double>> & a, std::vector<double> & x, std::vector<double> & y );
void gaussElimination( std::vector<std::vector<double>> & a, std::vector<double> & b );

void Print( std::vector<double> & x )
{
    for ( auto v: x )
    {
        std::print( "{} ", v );
    }
    std::println();
}

void Print( std::vector<std::vector<double>> & a )
{
    int N = a.size();
    for ( int i = 0; i < N; ++ i )
    {
        for ( int j = 0; j < N; ++ j )
        {
            std::print( "{:10f} ", a[ i ][ j ] );
        }
        std::println();
    }
    std::println();
}

void MatrixMultiply( std::vector<std::vector<double>> & a, std::vector<double> & x, std::vector<double> & y )
{
    int N = a.size();
    for ( int i = 0; i < N; ++ i )
    {
        y[ i ] = 0.0;
        for ( int j = 0; j < N; ++ j )
        {
            y[ i ] += a[ i ][ j ] * x[ j ];
        }
    }
}

void gaussElimination( std::vector<std::vector<double>> & a, std::vector<double> & b )
{
    int n = a.size();  

    // 消元过程  
    for ( int i = 0; i < n; ++ i ) {
        // 找到当前列的最大值  
        double maxVal = std::abs( a[ i ][ i ] );
        int maxRow = i;  
        for ( int k = i + 1; k < n; ++ k )
        {
            if ( std::abs( a[ k ][ i ] ) > maxVal )
            {
                maxVal = std::abs( a[ k ][ i ] );
                maxRow = k;
            }  
        }  
        std::swap( a[ i ], a[ maxRow ] );
        std::swap( b[ i ], b[ maxRow ] );

        // 进行消元  
        for ( int j = i + 1; j < n; ++ j )
        {
            double factor = a[ j ][ i ] / a[ i ][ i ];
            for ( int k = i; k < n; ++ k )
            {
                a[ j ][ k ] -= factor * a[ i ][ k ];
            }  
            b[ j ] -= factor * b[ i ];
        }  
    }  

    // 回代过程  
    std::vector<double> x( n );
    for ( int i = n - 1; i >= 0; -- i )
    {
        x[ i ] = b[ i ];
        for ( int j = i + 1; j < n; ++ j )
        {
            x[ i ] -= a[ i ][ j ] * x[ j ];
        }  
        x[ i ] /= a[ i ][ i ];
    }  

    // 输出结果  
    for ( int i = 0; i < n; ++ i )
    {  
        std::print( "b{} = {:12.6f}\n", i + 1, b[ i ] );
    }  

    // 输出结果  
    for ( int i = 0; i < n; ++ i )
    {  
        std::print( "x{} = {:12.6f}\n", i + 1, x[ i ] );
    }  
}  

int main() 
{  
    std::vector<std::vector<double>>a{
        {3.0, 2.0,-4.0},
        {2.0, 3.0, 3.0},
        {5.0, -3, 1.0}
    };

    Print( a );

    //std::print( "a.size()={}\n", a.size() );
    std::vector<double> b{ 3.0,15.0,14.0 };
    std::vector<double> xx{ 3.0,1.0,2.0 };
    std::vector<double> y( xx.size() );

    MatrixMultiply( a, xx, y );

    gaussElimination( a, b );

    Print( a );

    Print( y );

    return 0;
}
```

## 数值分析 (Numerical Analysis)

-  [数值分析 (Numerical Analysis)](https://math.ecnu.edu.cn/~jypan/Teaching/NA/2020/).
-  [【台湾大学】数值分析 (2021 黄美娇)](https://www.bilibili.com/video/BV1BP411u7vK/).
-  [【牛津大学】数值计算 Scientific Computing for DPhil Students 24讲 Nick Trefethen](https://www.bilibili.com/video/BV1VE411Q7ue/).
-  [Scientific Computing 科学计算/数值方法 牛津大学 中英字幕](https://www.bilibili.com/video/BV1sT4y1S7Aa/).
-  [英字【数值分析】斯坦福大学 CS 205A: Mathematical Methods for Robotics, Vision, and Graphics](https://www.bilibili.com/video/BV19J411t7Gh/).

## Parallel Scientific Computing

-  [Parallel Scientific Computing](https://www.youtube.com/playlist?list=PL3xCBlatwrsUng53d3xBfzJdnltbO7god).
-  [Parallel Scientific Computing](https://www.youtube.com/playlist?list=PL3xCBlatwrsUng53d3xBfzJdnltbO7god).
-  [Parallel Numerical Algorithms](https://courses.grainger.illinois.edu/cs554/fa2015/syllabus/index.html).
-  [CS 554 | CSE 512 – Parallel Numerical Algorithms](https://courses.grainger.illinois.edu/cs554/fa2015/notes/index.html).


## Exascale Computing

-  [Exascale Computing](https://fiveable.me/exascale-computing).


## cyclic reduction or odd-even reduction

```cpp
Recursive nested dissection for tridiagonal system can be
effectively implemented using cyclic reduction (or
odd-even reduction)
```

```
Adding appropriate multiples of (i − 1)st and (i + 1)st
equations to ith equation eliminates xi−1 and xi+1,
respectively, from ith equation
将第 (i − 1) 个方程和第 (i + 1) 个方程的适当倍数添加到第 i 个方程中，
分别从第 i 个方程中消除 xi−1 和 xi+1
```

For tridiagonal system, ith equation

$$
a_{i}x_{i-1}+b_{i}x_{i}+c_{i}x_{i+1}=y_{i}
$$

is transformed into

$$
\bar{a}_{i}x_{i-2}+\bar{b}_{i}x_{i}+\bar{c}_{i}x_{i+2}=\bar{y}_{i}
$$

where

$$
\begin{matrix}
  \bar{a}_{i}=\alpha_{i}{a}_{i-1},&\bar{b}_{i}={b}_{i}+\alpha_{i}{c}_{i-1}+\beta_{i}{a}_{i+1}\\
  \bar{c}_{i}=\beta_{i}{c}_{i+1},&\bar{y}_{i}={y}_{i}+\alpha_{i}{y}_{i-1}+\beta_{i}{y}_{i+1}\\
\end{matrix}
$$

with

$$
\begin{matrix}
 \alpha_{i}=-a_{i}/b_{i-1}\\
\beta_{i}=-c_{i}/b_{i+1}
\end{matrix}
$$

After transforming each equation in system (handling first
two and last two equations as special cases), matrix of
resulting new system has form

$$
\begin{bmatrix}
  \bar{b}_{1}& 0 & \bar{c}_{1} &  &  &  & \\
  0&\bar{b}_{2}  & 0 & \bar{c}_{2} &  &  & \\
  \bar{a}_{3}& 0 & \bar{b}_{3} & 0 & \bar{c}_{3} &  & \\
  &  \ddots & \ddots &\ddots  &\ddots  & \ddots & \\
  &  & \bar{a}_{n-2} & 0 & \bar{b}_{n-2} & 0 & \bar{c}_{n-2}\\
  &  &  & \bar{a}_{n-1} & 0 &\bar{b}_{n-1}  & 0\\
  &  &  &  &\bar{a}_{n}  & 0 &\bar{b}_{n}
\end{bmatrix}
$$

Reordering equations and unknowns to place odd indices
before even indices, matrix then has form

$$
\begin{bmatrix}
  \bar{b}_{1}& \bar{c}_{1} &  &  &  &  & & &\\
  \bar{a}_{3}&\bar{b}_{3} & \bar{c}_{3} &  & &  & && \\
  &\ddots  & \ddots & \ddots &  &  & & &\\
  &   & \bar{a}_{n-3} &\bar{b}_{n-3}  &\bar{c}_{n-3}  & & & &\\
  &  & &\bar{a}_{n-1} &\bar{b}_{n-1} & \bar{c}_{n-1} &  && &\\
  &  &  &  & 0 &\bar{b}_{2}  & \bar{c}_{2}& &\\
  &  &  &  &  & \bar{a}_{4} &\bar{b}_{4}&\bar{c}_{4}&\\ 
 &  &  &  && &\ddots   &\ddots &\ddots &\\
 &  &  &  && &   &\bar{a}_{n-2} &\bar{b}_{n-2} &\bar{c}_{n-2}\\  
 &  &  &  && &   & &\bar{a}_{n} &\bar{b}_{n}\\  
\end{bmatrix}
$$

$$
\begin{bmatrix}
  \bar{y}_{1}\\
  \bar{y}_{3}\\
  \vdots \\
  \bar{y}_{n-3}\\
  \bar{y}_{n-1}\\
  \bar{y}_{2}\\
  \bar{y}_{4}\\
  \vdots \\
  \bar{y}_{n-2}\\
  \bar{y}_{n}\\
\end{bmatrix}
$$


* System breaks into two independent tridiagonal systems
that can be solved simultaneously (i.e.,
divide-and-conquer)
*  Each resulting tridiagonal system can in turn be solved
using same technique (i.e., recursively)
* Thus, there are two distinct sources of potential parallelism
    * simultaneous transformation of equations in system
    * simultaneous solution of multiple tridiagonal subsystems
* Cyclic reduction requires log n steps, each of which
requires Θ(n) operations, so total work is Θ(n log n)
* Serially, cyclic reduction is therefore inferior to LU or
Cholesky factorization, which require only Θ(n) work for
tridiagonal system
* But in parallel, cyclic reduction can exploit up to n-fold
parallelism and requires only Θ(log n) time in best case

* i = 1

$$
\begin{matrix}
\alpha_1&=&-a_{1}/b_{0}=0\\
\beta_1&=&-c_{1}/b_{2}\\
\bar{a}_1&=&\alpha_{1}a_{0}=0\\
\bar{c}_1&=&\beta_{1}c_{2}\\
\bar{b}_{1}&=&{b}_{1}+(\alpha_{1}c_{0}=0)+\beta_{1}a_{2} \\
\bar{y}_{1}&=&{y}_{1}+(\alpha_{1}y_{0}=0)+\beta_{1}y_{2} \\
\end{matrix}
$$

* i = 2

$$
\begin{matrix}
\alpha_{2}&=&-a_{2}/b_{1}\\
\beta_{2}&=&-c_{2}/b_{3}\\
\bar{a}_{2}&=&\alpha_{2}a_{1}\\
\bar{c}_{2}&=&\beta_{2}c_{3}\\
\bar{b}_{2}&=&{b}_{2}+\alpha_{2}c_{1}+\beta_{2}a_{3} \\
\bar{y}_{2}&=&{y}_{2}+\alpha_{2}y_{1}+\beta_{2}y_{3} \\
\end{matrix}
$$

* i = n-1

$$
\begin{matrix}
\alpha_{n-1}&=&-a_{n-1}/b_{n-2}\\
\beta_{n-1}&=&-c_{n-1}/b_{n}\\
\bar{a}_{n-1}&=&\alpha_{n-1}a_{n-2}\\
\bar{c}_{n-1}&=&\beta_{n-1}c_{n}\\
\bar{b}_{n-1}&=&{b}_{n-1}+\alpha_{n-1}c_{n-2}+\beta_{n-1}a_{n} \\
\bar{y}_{n-1}&=&{y}_{n-1}+\alpha_{n-1}y_{n-2}+\beta_{n-1}y_{n} \\
\end{matrix}
$$

* i = n

$$
\begin{matrix}
\alpha_{n}&=&-a_{n}/b_{n-1}\\
\beta_{n}&=&-c_{n}/b_{n+1}\\
\bar{a}_{n}&=&\alpha_{n}a_{n-1}\\
\bar{c}_{n}&=&\beta_{n}c_{n+1}=0\\
\bar{b}_{n}&=&{b}_{n}+\alpha_{n}c_{n-1}+(\beta_{n}a_{n+1}=0) \\
\bar{y}_{n}&=&{y}_{n}+\alpha_{n}y_{n-1}+(\beta_{n}y_{n+1}=0) \\
\end{matrix}
$$


## Example

$$
\begin{bmatrix}
2&-1&0\\
-1&2&-1\\
0&-1&2\\
\end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{2}\\x_{3}\\
\end{bmatrix}
=
\begin{bmatrix}
1\\0\\1\\
\end{bmatrix}
$$


## Parallel Gauss

-  [Practical Parallelism in C++: Broadcast Parallel Gaussian Elimination](https://www.youtube.com/watch?v=6WN-fHN5O7s).
-  [Parallel C++: MPI Gaussian Elimination with Cyclic Mapping](https://www.youtube.com/watch?v=4IXylRZIe3g).
-  [Parallel C++: MPI Gaussian Elimination](https://www.youtube.com/watch?v=HeqlFd9auWA).
-  [Parallel C++: MPI](https://www.youtube.com/watch?v=OGez4VNYhJA).
-  [Parallel C++: MPI Collective Communication](https://www.youtube.com/watch?v=GsoZfyiiqIM).

## code

```cpp
import std;

void Print( std::vector<double> & x, const std::string &name="vector")
{
    std::print( "{} = ", name );
    for ( auto v: x )
    {
        std::print( "{} ", v );
    }
    std::println();
}


void thomas_algorithm( const std::vector<double> & a,
    const std::vector<double> & b,
    const std::vector<double> & c,
    const std::vector<double> & d,
    std::vector<double> & x )
{
    size_t N = d.size();

    std::vector<double> c_star( N, 0.0 );
    std::vector<double> d_star( N, 0.0 );

    c_star[ 0 ] = c[ 0 ] / b[ 0 ];
    d_star[ 0 ] = d[ 0 ] / b[ 0 ];

    for ( int i = 1; i < N; ++ i )
    {
        double coef = 1.0 / ( b[ i ] - a[ i ] * c_star[ i - 1 ] );
        c_star[ i ] = c[ i ] * coef;
        d_star[ i ] = ( d[ i ] - a[ i ] * d_star[ i - 1 ] ) * coef;
    }

    x[ N - 1 ] = d_star[ N - 1 ];

    for ( int i = N - 2; i >= 0; -- i )
    {
        x[ i ] = d_star[ i ] - c_star[ i ] * x[ i + 1 ];
    }
}

void split(
    std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & a_bar,
    std::vector<double> & b_bar,
    std::vector<double> & c_bar,
    std::vector<double> & y_bar )
{
    int N = a.size();
    a_bar.resize( N );
    b_bar.resize( N );
    c_bar.resize( N );
    y_bar.resize( N );
    for ( int i = 0; i < N; ++ i )
    {
        double bim1 = 0;
        double bip1 = 0;
        double aim1 = 0;
        double aip1 = 0;
        double cim1 = 0;
        double cip1 = 0;
        double yim1 = 0;
        double yip1 = 0;
        double alpha = 0;
        double beta = 0;
        if ( i != 0 )
        {
            aim1 =  a[ i - 1 ];
            bim1 =  b[ i - 1 ];
            cim1 =  c[ i - 1 ];
            yim1 =  y[ i - 1 ];
            alpha = - a[ i ] / bim1;
        }

        if ( i != N - 1 )
        {
            aip1 =  a[ i + 1 ];
            bip1 =  b[ i + 1 ];
            cip1 =  c[ i + 1 ];
            yip1 =  y[ i + 1 ];
            beta = - c[ i ] / bip1;
        }
        a_bar[ i ] = alpha * aim1;
        c_bar[ i ] = beta * cip1;
        b_bar[ i ] = b[ i ] + alpha * cim1 + beta * aip1;
        y_bar[ i ] = y[ i ] + alpha * yim1 + beta * yip1;
    }
}

void SetCyclicReductionValue
(
    std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & a1,
    std::vector<double> & b1,
    std::vector<double> & c1,
    std::vector<double> & y1,
    std::vector<double> & a2,
    std::vector<double> & b2,
    std::vector<double> & c2,
    std::vector<double> & y2
)
{
    int N = a.size();
    int halfN = N / 2;
    a1.resize( halfN );
    b1.resize( halfN );
    c1.resize( halfN );
    y1.resize( halfN );
    a2.resize( halfN );
    b2.resize( halfN );
    c2.resize( halfN );
    y2.resize( halfN );
    for ( int i = 0; i < halfN; ++ i )
    {
        int ieven = 2 * i;
        int iodd  = ieven + 1;
        a1[ i ] = a[ ieven ];
        b1[ i ] = b[ ieven ];
        c1[ i ] = c[ ieven ];
        y1[ i ] = y[ ieven ];

        a2[ i ] = a[ iodd ];
        b2[ i ] = b[ iodd ];
        c2[ i ] = c[ iodd ];
        y2[ i ] = y[ iodd ];
    }
}
                                                                                                                                                                                             
int main( int argc, char ** argv )
{
    const int N = 8;

    std::vector<double> a( N, -1 );
    std::vector<double> b( N, 2 );
    std::vector<double> c( N, -1 );
    std::vector<double> y( N, 0.0 );
    a[ 0 ] = 0;
    c[ N - 1 ] = 0;
    y[ 0 ] = 1;
    y[ N - 1 ] = 1;

    std::vector<double> x( y.size() );

    std::vector<double> as, bs, cs, ys;
    split( a, b, c, y, as, bs, cs, ys );

    std::vector<double> a1, b1, c1, y1;
    std::vector<double> a2, b2, c2, y2;

    SetCyclicReductionValue( as, bs, cs, ys, a1, b1, c1, y1, a2, b2, c2, y2 );

    std::vector<double> x1( y1.size() );
    std::vector<double> x2( y2.size() );
    std::vector<double> xx;

    thomas_algorithm( a, b, c, y, x );
    thomas_algorithm( a1, b1, c1, y1, x1 );
    thomas_algorithm( a2, b2, c2, y2, x2 );
    Print( x, "x" );
    Print( x1, "x1" );
    Print( x2, "x2" );

    for ( int i = 0; i < x1.size(); ++ i )
    {
        xx.push_back( x1[ i ] );
        xx.push_back( x2[ i ] );
    }

    Print( xx, "xx" );

    return 0;
}
```

matrix 4x4

$$
\begin{bmatrix}
b_{1}&c_{1}\\
a_{2}&b_{2}&c_{2}\\
&a_{3}&b_{3}&c_{3}\\
&&a_{4}&b_{4}\\
\end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{2}\\x_{3}\\x_{4}\\
\end{bmatrix}=
\begin{bmatrix}
y_{1}\\y_{2}\\y_{3}\\y_{4}\\
\end{bmatrix}
$$


$$
\bar{a}_{i}x_{i-2}+\bar{b}_{i}x_{i}+\bar{c}_{i}x_{i+2}=\bar{y}_{i}
$$

$$
\begin{matrix}
 \bar{a}_{1}x_{-1}+\bar{b}_{1}x_{1}+\bar{c}_{1}x_{3}=\bar{y}_{1}\\
 \bar{a}_{2}x_{0}+\bar{b}_{2}x_{2}+\bar{c}_{2}x_{4}=\bar{y}_{2}\\
 \bar{a}_{3}x_{1}+\bar{b}_{3}x_{3}+\bar{c}_{3}x_{5}=\bar{y}_{3}\\
 \bar{a}_{4}x_{2}+\bar{b}_{4}x_{4}+\bar{c}_{4}x_{6}=\bar{y}_{4}\\
\end{matrix}
$$

$$
\begin{matrix}
 \bar{b}_{1}x_{1}+\bar{c}_{1}x_{3}=\bar{y}_{1}\\
 \bar{b}_{2}x_{2}+\bar{c}_{2}x_{4}=\bar{y}_{2}\\
 \bar{a}_{3}x_{1}+\bar{b}_{3}x_{3}=\bar{y}_{3}\\
 \bar{a}_{4}x_{2}+\bar{b}_{4}x_{4}=\bar{y}_{4}\\
\end{matrix}
$$

$$
\begin{matrix}
 \bar{b}_{1}x_{1}+\bar{c}_{1}x_{3}=\bar{y}_{1}\\
 \bar{a}_{3}x_{1}+\bar{b}_{3}x_{3}=\bar{y}_{3}\\
 \bar{b}_{2}x_{2}+\bar{c}_{2}x_{4}=\bar{y}_{2}\\
 \bar{a}_{4}x_{2}+\bar{b}_{4}x_{4}=\bar{y}_{4}\\
\end{matrix}
$$

$$
\begin{bmatrix}
 \bar{b}_{1}&\bar{c}_{1}&0&0\\
 \bar{a}_{3}&\bar{b}_{3}&0&0\\
 0&0&\bar{b}_{2}&\bar{c}_{2}\\
0&0& \bar{a}_{4}&\bar{b}_{4}\\
\end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{3}\\x_{2}\\x_{4}\\
\end{bmatrix}=
\begin{bmatrix}
\bar{y}_{1}\\\bar{y}_{3}\\\bar{y}_{2}\\\bar{y}_{4}\\
\end{bmatrix}
$$

* matrix 2x2

\begin{bmatrix}
b_{1}&c_{1}\\
a_{2}&b_{2}\\
\end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{2}
\end{bmatrix}=
\begin{bmatrix}
{y}_{1}\\ {y}_{2}
\end{bmatrix}


$$
\bar{a}_{i}x_{i-2}+\bar{b}_{i}x_{i}+\bar{c}_{i}x_{i+2}=\bar{y}_{i}
$$


$$
\begin{bmatrix}
\bar{a}_{1}x_{-1}+\bar{b}_{1}x_{1}+\bar{c}_{1}x_{3}=\bar{y}_{1}\\
\bar{a}_{2}x_{0}+\bar{b}_{2}x_{2}+\bar{c}_{2}x_{4}=\bar{y}_{2}\\
\end{bmatrix}
$$

$$
\begin{bmatrix}
\bar{b}_{1}x_{1}=\bar{y}_{1}\\
\bar{b}_{2}x_{2}=\bar{y}_{2}\\
\end{bmatrix}
$$

$$
\begin{bmatrix}
2&-1\\
-1&2\\
\end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{2}
\end{bmatrix}=
\begin{bmatrix}
1\\ 1
\end{bmatrix}
$$

$$
\begin{matrix}
b_{1}x_{1}+c_{1}x_{2}={y}_{1}\\
a_{2}x_{1}+b_{2}x_{2}={y}_{2}\\
\end{matrix}
$$

$$
\begin{matrix}
a_{1}=0,b_{1}=2,c_{1}=-1\\
a_{2}=-1,b_{2}=2,c_{2}=0\\
\end{matrix}
$$

$$
\begin{matrix}
\alpha_{i}=-a_{i}/b_{i-1}=0\\
\alpha_{1}=-a_{1}/b_{0}=0\\
\alpha_{2}=-a_{2}/b_{1}=1/2\\
\beta_{i}=-c_{i}/b_{i+1}\\
\beta_{1}=-c_{1}/b_{2}=1/2\\
\beta_{2}=-c_{2}/b_{3}=0\\
\end{matrix}
$$

$$
\begin{matrix}
\bar{a}_{i}=\alpha_{i}a_{i-1}\\
\bar{a}_{1}=\alpha_{1}a_{0}=0\\
\bar{a}_{2}=\alpha_{2}a_{1}=1/2\cdot 0=0\\
\bar{c}_{i}=\beta_{i}c_{i+1}\\
\bar{c}_{1}=\beta_{1}c_{2}=1/2\cdot 0=0\\
\bar{c}_{2}=\beta_{2}c_{3}=0\\
\end{matrix}
$$

$$
\begin{matrix}
\bar{b}_{i}={b}_{i}+\alpha_{i}c_{i-1}+\beta_{i}a_{i+1}\\
\bar{b}_{1}={b}_{1}+\alpha_{1}c_{0}+\beta_{1}a_{2}=2+0+1/2\cdot(-1)=3/2 \\
\bar{b}_{2}={b}_{2}+\alpha_{2}c_{1}+\beta_{2}a_{3}=2+1/2\cdot(-1)+0=3/2\\
\bar{y}_{i}={y}_{i}+\alpha_{i}y_{i-1}+\beta_{i}y_{i+1}\\
\bar{y}_{1}={y}_{1}+\alpha_{1}y_{0}+\beta_{1}y_{2}=1+0+1/2\cdot(1)=3/2\\
\bar{y}_{2}={y}_{2}+\alpha_{2}y_{1}+\beta_{2}y_{3}=1+1/2\cdot(1)+0=3/2\\
\end{matrix}
$$

```cpp
o   o    o   ...    o   o
0   1    2   ...    N   N+1
```

thomas_algorithm index 1~N(0~N+1)
```cpp
import std;

void Print( std::vector<double> & x, const std::string &name="vector")
{
    std::print( "{} = ", name );
    for ( auto v: x )
    {
        std::print( "{} ", v );
    }
    std::println();
}

void thomas_algorithm( const std::vector<double> & a,
    const std::vector<double> & b,
    const std::vector<double> & c,
    const std::vector<double> & d,
    std::vector<double> & x )
{
    size_t N = d.size();

    std::vector<double> c_star( N, 0.0 );
    std::vector<double> d_star( N, 0.0 );

    c_star[ 0 ] = c[ 0 ] / b[ 0 ];
    d_star[ 0 ] = d[ 0 ] / b[ 0 ];

    for ( int i = 1; i < N; ++ i )
    {
        double coef = 1.0 / ( b[ i ] - a[ i ] * c_star[ i - 1 ] );
        c_star[ i ] = c[ i ] * coef;
        d_star[ i ] = ( d[ i ] - a[ i ] * d_star[ i - 1 ] ) * coef;
    }

    x[ N - 1 ] = d_star[ N - 1 ];

    for ( int i = N - 2; i >= 0; -- i )
    {
        x[ i ] = d_star[ i ] - c_star[ i ] * x[ i + 1 ];
    }
}
                                                                                                                                                                                             
int main( int argc, char ** argv )
{
    const int N = 4;

    for ( int N = 4; N >= 1; --N )
    {
        int totalN = N + 2;
        std::vector<double> a( totalN, -1 );
        std::vector<double> b( totalN, 2 );
        std::vector<double> c( totalN, -1 );
        std::vector<double> y( totalN, 0.0 );
        a[ 0 ] = 0;
        a[ 1 ] = 0;
        b[ 0 ] = 1;
        b[ N + 1 ] = 1;
        c[ N ] = 0;
        c[ N + 1 ] = 0;
        y[ 0 ] = 0;
        y[ 1 ] = 1;
        y[ N ] = 1;
        y[ N + 1 ] = 0;

        std::vector<double> anew( a.begin() + 1, a.end() - 1 );
        std::vector<double> bnew( b.begin() + 1, b.end() - 1 );
        std::vector<double> cnew( c.begin() + 1, c.end() - 1 );
        std::vector<double> ynew( y.begin() + 1, y.end() - 1 );
        std::vector<double> x( ynew.size() );

        thomas_algorithm( anew, bnew, cnew, ynew, x );
        std::print( "N={}\n", N );
        Print( x, "x" );
    }

    return 0;
}
```

output
```
```

CyclicReduction
```cpp
import std;

void Print( std::vector<double> & x, const std::string &name="vector")
{
    std::print( "{} = ", name );
    for ( auto v: x )
    {
        std::print( "{} ", v );
    }
    std::println();
}

void thomas_algorithm( const std::vector<double> & a,
    const std::vector<double> & b,
    const std::vector<double> & c,
    const std::vector<double> & d,
    std::vector<double> & x )
{
    size_t N = d.size();

    std::vector<double> c_star( N, 0.0 );
    std::vector<double> d_star( N, 0.0 );

    c_star[ 0 ] = c[ 0 ] / b[ 0 ];
    d_star[ 0 ] = d[ 0 ] / b[ 0 ];

    for ( int i = 1; i < N; ++ i )
    {
        double coef = 1.0 / ( b[ i ] - a[ i ] * c_star[ i - 1 ] );
        c_star[ i ] = c[ i ] * coef;
        d_star[ i ] = ( d[ i ] - a[ i ] * d_star[ i - 1 ] ) * coef;
    }

    x[ N - 1 ] = d_star[ N - 1 ];

    for ( int i = N - 2; i >= 0; -- i )
    {
        x[ i ] = d_star[ i ] - c_star[ i ] * x[ i + 1 ];
    }
}

void Boundary( std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y )
{
    int totalN = a.size();
    int N = totalN - 2;
    a[ 0 ] = 0;
    a[ 1 ] = 0;
    b[ 0 ] = 1;
    b[ N + 1 ] = 1;
    c[ N ] = 0;
    c[ N + 1 ] = 0;
    y[ 0 ] = 0;
    y[ N + 1 ] = 0;
}

void SetCyclicReductionValue
(
    std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & a1,
    std::vector<double> & b1,
    std::vector<double> & c1,
    std::vector<double> & y1,
    std::vector<double> & a2,
    std::vector<double> & b2,
    std::vector<double> & c2,
    std::vector<double> & y2
)
{
    int N = a.size();
    int halfN = N / 2;
    a1.resize( halfN );
    b1.resize( halfN );
    c1.resize( halfN );
    y1.resize( halfN );
    a2.resize( halfN );
    b2.resize( halfN );
    c2.resize( halfN );
    y2.resize( halfN );
    for ( int i = 0; i < halfN; ++ i )
    {
        int ieven = 2 * i;
        int iodd  = ieven + 1;
        a1[ i ] = a[ ieven ];
        b1[ i ] = b[ ieven ];
        c1[ i ] = c[ ieven ];
        y1[ i ] = y[ ieven ];

        a2[ i ] = a[ iodd ];
        b2[ i ] = b[ iodd ];
        c2[ i ] = c[ iodd ];
        y2[ i ] = y[ iodd ];
    }
}

void CyclicReduction( std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & abar,
    std::vector<double> & bbar,
    std::vector<double> & cbar,
    std::vector<double> & ybar
    )
{
    int totalN = a.size();
    int N = totalN - 2;
    for ( int i = 1; i <= N; ++ i )
    {
        int in = std::max( 0, i - 1 );
        int ip = std::min( N + 1, i + 1 );

        double alpha = - a[ i ] / b[ in ];
        double beta = - c[ i ] / b[ ip ];

        abar[ i ] = alpha * a[ in ];
        cbar[ i ] = beta * c[ ip ];
        bbar[ i ] = b[ i ] + alpha * c[ in ] + beta * a[ ip ];
        ybar[ i ] = y[ i ] + alpha * y[ in ] + beta * y[ ip ];
    }
}

void CR
(
    std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & a1,
    std::vector<double> & b1,
    std::vector<double> & c1,
    std::vector<double> & y1,
    std::vector<double> & a2,
    std::vector<double> & b2,
    std::vector<double> & c2,
    std::vector<double> & y2
)
{
    int totalN = a.size();
    int N = totalN - 2;
    int halfN = N / 2;
    int totalHalfN = halfN + 2;
    a1.resize( totalHalfN );
    b1.resize( totalHalfN );
    c1.resize( totalHalfN );
    y1.resize( totalHalfN );

    a2.resize( totalHalfN );
    b2.resize( totalHalfN );
    c2.resize( totalHalfN );
    y2.resize( totalHalfN );
    for ( int i = 1; i <= halfN; ++ i )
    {
        int iodd = 2 * i - 1;
        int ieven = iodd + 1;

        a1[ i ] = a[ iodd ];
        b1[ i ] = b[ iodd ];
        c1[ i ] = c[ iodd ];
        y1[ i ] = y[ iodd ];

        a2[ i ] = a[ ieven ];
        b2[ i ] = b[ ieven ];
        c2[ i ] = c[ ieven ];
        y2[ i ] = y[ ieven ];
    }
}

void Create( std::vector<double> & a, std::vector<double> & aNew )
{
    aNew.assign( a.begin() + 1, a.end() - 1 );
}
                                                                                                                                                                                             
int main( int argc, char ** argv )
{
    const int N = 8;

    int totalN = N + 2;
    std::vector<double> a( totalN, -1 );
    std::vector<double> b( totalN, 2 );
    std::vector<double> c( totalN, -1 );
    std::vector<double> y( totalN, 1.0 );

    std::vector<double> anew;
    std::vector<double> bnew;
    std::vector<double> cnew;
    std::vector<double> ynew;
    std::vector<double> x;

    Create( a, anew );
    Create( b, bnew );
    Create( c, cnew );
    Create( y, ynew );
    x.resize( ynew.size() );

    thomas_algorithm( anew, bnew, cnew, ynew, x );
    Print( x, "x" );

    Boundary( a, b, c, y );

    std::vector<double> acr( a.size() );
    std::vector<double> bcr( b.size() );
    std::vector<double> ccr( c.size() );
    std::vector<double> ycr( y.size() );

    CyclicReduction( a, b, c, y, acr, bcr, ccr, ycr );

    std::vector<double> a1, b1, c1, y1;
    std::vector<double> a2, b2, c2, y2;

    CR( acr, bcr, ccr, ycr, a1, b1, c1, y1, a2, b2, c2, y2 );

    std::vector<double> a1new,b1new,c1new,y1new;
    std::vector<double> a2new,b2new,c2new,y2new;
    Create( a1, a1new );
    Create( b1, b1new );
    Create( c1, c1new );
    Create( y1, y1new );

    Create( a2, a2new );
    Create( b2, b2new );
    Create( c2, c2new );
    Create( y2, y2new );
    std::vector<double> x1( y1new.size() );
    std::vector<double> x2( y2new.size() );
    std::vector<double> xx;

    thomas_algorithm( a1new, b1new, c1new, y1new, x1 );
    thomas_algorithm( a2new, b2new, c2new, y2new, x2 );
    Print( x1, "x1" );
    Print( x2, "x2" );

    for ( int i = 0; i < x1.size(); ++ i )
    {
        xx.push_back( x1[ i ] );
        xx.push_back( x2[ i ] );
    }
    Print( xx, "xx" );

    return 0;
}
```

```cpp
import std;

void Print( std::vector<double> & x, const std::string &name="vector")
{
    std::print( "{} = ", name );
    for ( auto v: x )
    {
        std::print( "{} ", v );
    }
    std::println();
}

void thomas_algorithm( const std::vector<double> & a,
    const std::vector<double> & b,
    const std::vector<double> & c,
    const std::vector<double> & d,
    std::vector<double> & x )
{
    size_t N = d.size();

    std::vector<double> c_star( N, 0.0 );
    std::vector<double> d_star( N, 0.0 );

    c_star[ 0 ] = c[ 0 ] / b[ 0 ];
    d_star[ 0 ] = d[ 0 ] / b[ 0 ];

    for ( int i = 1; i < N; ++ i )
    {
        double coef = 1.0 / ( b[ i ] - a[ i ] * c_star[ i - 1 ] );
        c_star[ i ] = c[ i ] * coef;
        d_star[ i ] = ( d[ i ] - a[ i ] * d_star[ i - 1 ] ) * coef;
    }

    x[ N - 1 ] = d_star[ N - 1 ];

    for ( int i = N - 2; i >= 0; -- i )
    {
        x[ i ] = d_star[ i ] - c_star[ i ] * x[ i + 1 ];
    }
}

void Boundary( std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y )
{
    int totalN = a.size();
    int N = totalN - 2;
    a[ 0 ] = 0;
    a[ 1 ] = 0;
    b[ 0 ] = 1;
    b[ N + 1 ] = 1;
    c[ N ] = 0;
    c[ N + 1 ] = 0;
    y[ 0 ] = 0;
    y[ N + 1 ] = 0;
}

void SetCyclicReductionValue
(
    std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & a1,
    std::vector<double> & b1,
    std::vector<double> & c1,
    std::vector<double> & y1,
    std::vector<double> & a2,
    std::vector<double> & b2,
    std::vector<double> & c2,
    std::vector<double> & y2
)
{
    int N = a.size();
    int halfN = N / 2;
    a1.resize( halfN );
    b1.resize( halfN );
    c1.resize( halfN );
    y1.resize( halfN );
    a2.resize( halfN );
    b2.resize( halfN );
    c2.resize( halfN );
    y2.resize( halfN );
    for ( int i = 0; i < halfN; ++ i )
    {
        int ieven = 2 * i;
        int iodd  = ieven + 1;
        a1[ i ] = a[ ieven ];
        b1[ i ] = b[ ieven ];
        c1[ i ] = c[ ieven ];
        y1[ i ] = y[ ieven ];

        a2[ i ] = a[ iodd ];
        b2[ i ] = b[ iodd ];
        c2[ i ] = c[ iodd ];
        y2[ i ] = y[ iodd ];
    }
}

void CyclicReduction( std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & abar,
    std::vector<double> & bbar,
    std::vector<double> & cbar,
    std::vector<double> & ybar
    )
{
    int totalN = a.size();
    int N = totalN - 2;
    for ( int i = 1; i <= N; ++ i )
    {
        int in = std::max( 0, i - 1 );
        int ip = std::min( N + 1, i + 1 );

        double alpha = - a[ i ] / b[ in ];
        double beta = - c[ i ] / b[ ip ];

        abar[ i ] = alpha * a[ in ];
        cbar[ i ] = beta * c[ ip ];
        bbar[ i ] = b[ i ] + alpha * c[ in ] + beta * a[ ip ];
        ybar[ i ] = y[ i ] + alpha * y[ in ] + beta * y[ ip ];
    }
}

void CR
(
    std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & a1,
    std::vector<double> & b1,
    std::vector<double> & c1,
    std::vector<double> & y1,
    std::vector<double> & a2,
    std::vector<double> & b2,
    std::vector<double> & c2,
    std::vector<double> & y2
)
{
    int totalN = a.size();
    int N = totalN - 2;
    int halfN = N / 2;
    int totalHalfN = halfN + 2;
    a1.resize( totalHalfN );
    b1.resize( totalHalfN );
    c1.resize( totalHalfN );
    y1.resize( totalHalfN );

    a2.resize( totalHalfN );
    b2.resize( totalHalfN );
    c2.resize( totalHalfN );
    y2.resize( totalHalfN );
    for ( int i = 1; i <= halfN; ++ i )
    {
        int iodd = 2 * i - 1;
        int ieven = iodd + 1;

        a1[ i ] = a[ iodd ];
        b1[ i ] = b[ iodd ];
        c1[ i ] = c[ iodd ];
        y1[ i ] = y[ iodd ];

        a2[ i ] = a[ ieven ];
        b2[ i ] = b[ ieven ];
        c2[ i ] = c[ ieven ];
        y2[ i ] = y[ ieven ];
    }
}

void Create( std::vector<double> & a, std::vector<double> & aNew )
{
    aNew.assign( a.begin() + 1, a.end() - 1 );
}

void crtridiag( std::vector<double> & a,
    std::vector<double> & b,
    std::vector<double> & c,
    std::vector<double> & y,
    std::vector<double> & x
    )
{
    int totalN = a.size();
    int N = totalN - 2;
    x.resize( N );
    if ( N == 1 )
    {
        x[ 0 ] = y[ 1 ] / b[ 1 ];
        return;
    }

    Boundary( a, b, c, y );

    std::vector<double> acr( a.size() );
    std::vector<double> bcr( b.size() );
    std::vector<double> ccr( c.size() );
    std::vector<double> ycr( y.size() );

    CyclicReduction( a, b, c, y, acr, bcr, ccr, ycr );

    std::vector<double> a1, b1, c1, y1;
    std::vector<double> a2, b2, c2, y2;

    CR( acr, bcr, ccr, ycr, a1, b1, c1, y1, a2, b2, c2, y2 );

    std::vector<double> x1;
    crtridiag( a1, b1, c1, y1, x1 );

    Print( x1, std::format( "x1(N={})", N ) );
    std::vector<double> x2;
    crtridiag( a2, b2, c2, y2, x2 );
    Print( x2, std::format( "x2(N={})", N ) );

    std::vector<double> xx;
    for ( int i = 0; i < x1.size(); ++ i )
    {
        xx.push_back( x1[ i ] );
        xx.push_back( x2[ i ] );
    }
    Print( xx, std::format( "x1+2(N={})", N ) );
    x = xx;
}
                                                                                                                                                                                             
int main( int argc, char ** argv )
{
    const int N = 8;

    int totalN = N + 2;
    std::vector<double> a( totalN, -1 );
    std::vector<double> b( totalN, 2 );
    std::vector<double> c( totalN, -1 );
    std::vector<double> y( totalN, 1.0 );
    std::vector<double> x;

    crtridiag( a, b, c, y, x );

    Print( x, "xFinal" );

    return 0;
}
```

output
```powershell
x1(N=2) = 4
x2(N=2) = 10
x1+2(N=2) = 4 10
x1(N=4) = 4 10
x1(N=2) = 9
x2(N=2) = 6.999999999999999
x1+2(N=2) = 9 6.999999999999999
x2(N=4) = 9 6.999999999999999
x1+2(N=4) = 4 9 10 6.999999999999999
x1(N=8) = 4 9 10 6.999999999999999
x1(N=2) = 6.999999999999999
x2(N=2) = 9
x1+2(N=2) = 6.999999999999999 9
x1(N=4) = 6.999999999999999 9
x1(N=2) = 10
x2(N=2) = 4
x1+2(N=2) = 10 4
x2(N=4) = 10 4
x1+2(N=4) = 6.999999999999999 10 9 4
x2(N=8) = 6.999999999999999 10 9 4
x1+2(N=8) = 4 6.999999999999999 9 10 10 9 6.999999999999999 4
xFinal = 4 6.999999999999999 9 10 10 9 6.999999999999999 4
```

$$
\begin{matrix}
 \alpha_{i}=-a_{i}/b_{i-1}\\
\beta_{i}=-c_{i}/b_{i+1}\\
  \bar{a}_{i}=\alpha_{i}{a}_{i-1}\\
  \bar{c}_{i}=\beta_{i}{c}_{i+1}\\
\bar{b}_{i}={b}_{i}+\alpha_{i}{c}_{i-1}+\beta_{i}{a}_{i+1}\\
\bar{y}_{i}={y}_{i}+\alpha_{i}{y}_{i-1}+\beta_{i}{y}_{i+1}\\
  \bar{a}_{i}=\alpha_{i}{a}_{i-1}=-a_{i}/b_{i-1}({a}_{i-1})=-a_{i}{a}_{i-1}/b_{i-1}\\
  \bar{c}_{i}=\beta_{i}{c}_{i+1}=-c_{i}/b_{i+1}({c}_{i+1})=-c_{i}{c}_{i+1}/b_{i+1}\\
\bar{b}_{i}={b}_{i}-a_{i}{c}_{i-1}/b_{i-1}-{a}_{i+1}c_{i}/b_{i+1}\\
\end{matrix}
$$
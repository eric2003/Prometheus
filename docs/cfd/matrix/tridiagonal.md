# Tridiagonal

## Tridiagonal Link

- [Parallel Scientific Computing in C++ and MPI-A seamless approach to parallel algorithms and their implementation](https://www.bilibili.com/video/BV1cG4y1x7G1).
- [On the spectrum of tridiagonal matrices with two-periodic main diagonal](https://www.degruyter.com/document/doi/10.1515/spma-2024-0009/html?lang=en&srsltid=AfmBOoryP-6iW1CTix_2BjAHdoUu3qq0tjfvWmZ3eQ8LCaL7n4aoCYXC).
- [A generalized symbolic Thomas algorithm for the solution of opposite-bordered tridiagonal linear systems](https://www.sciencedirect.com/science/article/pii/S0377042715003246).

## code

- [cuda_tridiangonal_solver_PCR](https://github.com/zw0610/cuda_tridiangonal_solver_PCR).
- [parallel_tdma_cpp](https://github.com/jihoonakang/parallel_tdma_cpp).
- [solve-periodic-tridiagonal](https://github.com/scijs/solve-periodic-tridiagonal).
- [三对角方程与循环三对角方程数值解(附完整代码)](https://blog.csdn.net/maple_2014/article/details/107170005).
- [解三对角矩阵以及循环三对角矩阵方程的数值计算方法](https://blog.csdn.net/liuqihang11/article/details/123402289).
- [Sherman-Morrison公式及其应用](https://blog.csdn.net/jclian91/article/details/80254568).

## Tridiagonal Article

- Parallel Scientific Computing in C++ and MPI-A seamless approach to parallel algorithms and their implementation
- Parallel Solution of Tridiagonal Linear Systems on Modern CPUs
- Parallelization of the Pipelined Thomas Algorithm

### ALGORITHM 1: Thomas Algorithm



Step 1: (LU Decomposition) A = LU.

$$
  A=\begin{bmatrix}
  b_{1}&c_{1}  && && \\
  a_{2}&b_{2}&c_{2} & & & \\
  &a_{3}&b_{3} &c_{3} & \\
  &&\ddots  &\ddots &\ddots& \\
  &&  &a_{n-1} &b_{n-1}&c_{n-1} \\
  &&  & &a_{n}&b_{n} \\
  \end{bmatrix}
$$

$$
LU=\begin{bmatrix}
  1&  && && \\
  l_{2}&1& & & & \\
  &l_{3}&1  & & \\
  &&\ddots  &\ddots && \\
  &&  &l_{n-1} &1& \\
  &&  & &l_{n}&1 \\
  \end{bmatrix}
\begin{bmatrix}
  d_{1}&u_{1}  && && \\
  &d_{2}&u_{2} & & & \\
  &&d_{3} &u_{3} & \\
  &&  &\ddots  &\ddots& \\
  &&  & &d_{n-1}&u_{n-1} \\
  &&  & &&d_{n} \\
  \end{bmatrix}
$$

We determine the elements of matrices L and U in three stages, separating the end-points
from the interior points as follows:

$$
\begin{array}{l}
d_{1}=a_{1},\ u_{1}=c_{1}\\
i^{th}\left\{\begin{array}{l}
 l_{i}d_{i-1}=b_{i}\Rightarrow l_{i}=b_{i}/d_{i-1}\\
 l_{i}u_{i-1}+d_{i}=a_{i}\Rightarrow d_{i}=a_{i}-l_{i}u_{i-1}\\
 u_{i}=c_{i}
\end{array}\right.\\
n^{th}\left\{\begin{array}{l}
 l_{n}d_{n-1}=b_{n}\Rightarrow l_{n}=b_{n}/d_{n-1}\\
 l_{n}u_{n-1}+d_{n}=a_{n}\Rightarrow d_{n}=a_{n}-l_{n}u_{n-1}\\
\end{array}\right.
\end{array}
$$


Step 2: (Forward Substitution) Ly = q The intermediate vector y is determined from

$$
\begin{bmatrix}
  1&  && && \\
  l_{2}&1& & & & \\
  &l_{3}&1  & & \\
  &&\ddots  &\ddots && \\
  &&  &l_{n-1} &1& \\
  &&  & &l_{n}&1 \\
  \end{bmatrix}
\begin{bmatrix}
y_{1}\\y_{2}\\y_{3}\\\vdots\\y_{n-1}\\y_{n}\\
\end{bmatrix}=
\begin{bmatrix}
q_{1}\\q_{2}\\q_{3}\\\vdots\\q_{n-1}\\q_{n}\\
\end{bmatrix}
$$

$$
\Rightarrow \left\{\begin{array}{l}
 y_{1}=q_{1}\\
 l_{i}y_{i-1}+y_{i}=q_{i}\Rightarrow y_{i}=q_{i}-l_{i}y_{i-1}\\
\end{array}\right.
$$

Step 3: (Backward Substitution) Ux = y
In the final step we have

$$
\begin{bmatrix}
  d_{1}&u_{1}  && && \\
  &d_{2}&u_{2} & & & \\
  &&d_{3} &u_{3} & \\
  &&  &\ddots  &\ddots& \\
  &&  & &d_{n-1}&u_{n-1} \\
  &&  & &&d_{n} \\
\end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{2}\\x_{3}\\\vdots\\x_{n-1}\\x_{n}\\
\end{bmatrix}=
\begin{bmatrix}
y_{1}\\y_{2}\\y_{3}\\\vdots\\y_{n-1}\\y_{n}\\
\end{bmatrix}
$$

and the final solution is obtained from:

$$
\left\{\begin{array}{l}
 x_{n}=y_{n}/d_{n}\\
 d_{i}x_{i}+u_{i}x_{i+1}=y_{i}\Rightarrow x_{i}=(y_{i}-u_{i}x_{i+1})/d_{i},
\ i=n-1,\cdots ,1
\end{array}\right.
$$

thomas_algorithm
```cpp
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
        double r = 1.0 / ( b[ i ] - a[ i ] * c_star[ i - 1 ] );
        d_star[ i ] = r * ( d[ i ] - a[ i ] * d_star[ i - 1 ] );
        c_star[ i ] = r * c[ i ];
    }

    x[ N - 1 ] = d_star[ N - 1 ];

    for ( int i = N - 2; i >= 0; -- i )
    {
        x[ i ] = d_star[ i ] - c_star[ i ] * x[ i + 1 ];
    }
}
```

ThomasAlgorithm
```cpp
void ThomasAlgorithm( int N, double * b, double * a, double * c, double * x, double * q )
{
    double *l,*u,*d,*y;
    l = new double[ N ];
    u = new double[ N ];
    d = new double[ N ];
    y = new double[ N ];
    /* LU Decomposition */
    d[ 0 ] = a[ 0 ];
    u[ 0 ] = c[ 0 ];
    for ( int i = 1; i < N - 1; i++ )
    {
        l[ i ] = b[ i ] / d[ i - 1 ];
        d[ i ] = a[ i ] - l[ i ] * u[ i - 1 ];
        u[ i ] = c[ i ];
    }
    l[ N - 1 ] = b[ N - 1 ] / d[ N - 2 ];
    d[ N - 1 ] = a[ N - 1 ] - l[ N - 1 ] * u[ N - 2 ];
    /* Forward Substitution [L][y] = [q] */
    y[ 0 ] = q[ 0 ];
    for ( int i = 1; i < N; i++ )
    {
        y[ i ] = q[ i ] - l[ i ] * y[ i - 1 ];
    }
    /* Backward Substitution [U][x] = [y] */
    x[ N - 1 ] = y[ N - 1 ] / d[ N - 1 ];
    for ( int i = N - 2; i >= 0; i-- )
    {
        x[ i ] = ( y[ i ] - u[ i ] * x[ i + 1 ] ) / d[ i ];
    }
    delete[] l;
    delete[] u;
    delete[] d;
    delete[] y;
    return;
}
```

```cpp
template<typename T>
void Print( std::vector<T> & x, const std::string & name = "vector" )
{
    std::print( "{} = ", name );
    for ( auto v: x )
    {
        std::print( "{} ", v );
    }
    std::println();
}

void Print( std::vector<std::vector<double>> & a, const std::string & name = "matrix" )
{
    int NI = a.size();
    for ( int i = 0; i < NI; ++ i )
    {
        int NJ = a[ i ].size();
        for ( int j = 0; j < NJ; ++ j )
        {
            std::print( "{:4.1f} ", a[ i ][ j ] );
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

void FillA( const std::vector<double> &a, 
    const std::vector<double> &b, 
    const std::vector<double> &c, 
    std::vector<std::vector<double>> &A )
{
    int N = a.size();
    A.resize( N );
    for ( int i = 0; i < N; ++ i )
    {
        A[ i ].resize( N );
        if ( i >= 1 )
        {
            A[ i ][ i - 1 ] = a[ i ];
        }
        A[ i ][ i ] = b[ i ];
        if ( i < N - 1 )
        {
            A[ i ][ i + 1 ] = c[ i ];
        }
    }
}
```

## ThomasAlgorithmLU
```cpp
void ThomasAlgorithmLU(int N, double *b, double *a, double *c,
    double *l, double *u, double *d)
{
    /* LU Decomposition */
    d[ 0 ] = a[ 0 ];
    u[ 0 ] = c[ 0 ];
    for ( int i = 1; i < N -1; i++ )
    {
        l[ i ] = b[ i ] / d[ i - 1 ];
        d[ i ] = a[ i ] - l[ i ] * u[ i - 1 ];
        u[ i ] = c[ i ];
    }
    l[ N - 1 ] = b[ N - 1 ] / d[ N - 2 ];
    d[ N - 1 ] = a[ N - 1 ] - l[ N - 1 ] * u[ N - 2 ];
    return;
}
```

## ThomasAlgorithmSolve
```cpp
void ThomasAlgorithmSolve(int N, double *l, double *u, double *d,
    double *x, double *q)
{
    double * y = new double[ N ];
    /* Forward Substitution [L][y] = [q] */
    y[ 0 ] = q[ 0 ];
    for ( int i = 1; i < N; i++ )
    {
        y[ i ] = q[ i ] - l[ i ] * y[ i - 1 ];
    }
    /* Backward Substitution [U][x] = [y] */
    x[ N - 1 ] = y[ N - 1 ] / d[ N - 1 ];
    for ( int i = N - 2; i >= 0; i-- )
    {
        x[ i ] = ( y[ i ] - u[ i ] * x[ i + 1 ] ) / d[ i ];
    }
    delete[] y;
    return;
}
```

## Numerical Methods for Cyclic Tridiagonal Matrix Equation

- [Tridiagonal_matrix_algorithm](https://en.wikipedia.org/wiki/Tridiagonal_matrix_algorithm).

$$
Ax=d
$$

$$
  A=\begin{bmatrix}
  b_{1}&c_{1}  && &&a_{1} \\
  a_{2}&b_{2}&c_{2} & & & \\
  &a_{3}&b_{3} &c_{3} & \\
  &&\ddots  &\ddots &\ddots& \\
  &&  &a_{n-1} &b_{n-1}&c_{n-1} \\
  c_{n}&&  & &a_{n}&b_{n} \\
  \end{bmatrix}
$$

$$
x=
\begin{bmatrix}
x_{1}\\x_{2}\\x_{3}\\\vdots\\x_{n-1}\\x_{n}\\
\end{bmatrix},d=
\begin{bmatrix}
d_{1}\\d_{2}\\d_{3}\\\vdots\\d_{n-1}\\d_{n}\\
\end{bmatrix}
$$

$$
  B=\begin{bmatrix}
  b_{1}-\gamma&c_{1}  && && \\
  a_{2}&b_{2}&c_{2} & & & \\
  &a_{3}&b_{3} &c_{3} & \\
  &&\ddots  &\ddots &\ddots& \\
  &&  &a_{n-1} &b_{n-1}&c_{n-1} \\
 &&  & &a_{n}&b_{n}-\cfrac{c_{n}a_{1}}{\gamma} \\
  \end{bmatrix},
u=\begin{bmatrix}
\gamma\\0\\0\\\vdots\\0\\c_{n}\\
\end{bmatrix}
,v=\begin{bmatrix}
1\\0\\0\\\vdots\\0\\a_{1}/\gamma\\
\end{bmatrix}
$$

$$
A=B+uv^{T}\\
$$

$$
By=d,Bq=u
$$

$$
x=A^{-1}d=(B+uv^{T})^{-1}d=B^{-1}d-\cfrac{B^{-1}uv^{T}B^{-1}}{1+v^{T}B^{-1}}d
=y-\cfrac{qv^{T}y}{1+v^{T}q}\\
$$

$$
x=y-\cfrac{y_{1}+\cfrac{a_{1}}{\gamma}y_{n}}
{1+q_{1}+\cfrac{a_{1}}{\gamma}q_{n}}q\\
$$

## Cyclic Tridiagonal Matrix Equation

$$
Ax=d
$$

$$
  A=\begin{bmatrix}
  b_{1}&c_{1}  && &&a_{1} \\
  a_{2}&b_{2}&c_{2} & & & \\
  &a_{3}&b_{3} &c_{3} & \\
  &&\ddots  &\ddots &\ddots& \\
  &&  &a_{n-1} &b_{n-1}&c_{n-1} \\
  c_{n}&&  & &a_{n}&b_{n} \\
  \end{bmatrix}
$$

$$
  A^{c}=\begin{bmatrix}
  b_{1}&c_{1}  && && \\
  a_{2}&b_{2}&c_{2} & & & \\
  &a_{3}&b_{3} &c_{3} & \\
  &&\ddots  &\ddots &\ddots& \\
  &&  &a_{n-2} &b_{n-2}&c_{n-2} \\
  &&  & &a_{n-1}&b_{n-1} \\
  \end{bmatrix}
\begin{bmatrix}
x_{1}\\x_{2}\\\vdots\\x_{n-1}\\
\end{bmatrix}
=\mathbf{q}-
\begin{bmatrix}
a_{1}\\0\\\vdots\\0\\c_{n-1}\\
\end{bmatrix}
x_{n}
$$  

Now we use the linear property and propose a superposition of the form

$$
\mathbf{x}=\mathbf{x}^{(1)}+\mathbf{x}^{(2)}x_{n}
$$

$$
\begin{array}{l}
A^{c}\mathbf{x}^{(1)}=\mathbf{q}\\
A^{c}\mathbf{x}^{(2)}=
\begin{bmatrix}
-a_{1}\\0\\\vdots\\-c_{n-1}\\
\end{bmatrix}
\end{array}
$$

We finally compute xn from the last equation in the original system by back substitution,
i.e.,

$$
\begin{array}{l}
c_{n}x^{(1)}_{1}+c_{n}x^{(2)}_{1}x_{n}+
a_{n}x^{(1)}_{n-1}+a_{n}x^{(2)}_{n-1}x_{n}+
b_{n}x_{n}=q_{n}\\
c_{n}x^{(2)}_{1}x_{n}+
a_{n}x^{(2)}_{n-1}x_{n}+
b_{n}x_{n}=q_{n}-c_{n}x^{(1)}_{1}-a_{n}x^{(1)}_{n-1}\\
x_{n}=\cfrac{q_{n}-c_{n}x^{(1)}_{1}-a_{n}x^{(1)}_{n-1}}{c_{n}x^{(2)}_{1}+a_{n}x^{(2)}_{n-1}+b_{n}}\\
\end{array}
$$

## Woodbury matrix identity

$$
(A+UCV)^{-1}=A^{-1}-A^{-1}U(C^{-1}+VA^{-1}U)^{-1}VA^{-1}
$$

## 逆矩阵

\begin{array}{l}
(AB)^{-1}=B^{-1}A^{-1}\\
(A+B)^{-1}=A^{-1}(A^{-1}+B^{-1})^{-1}B^{-1}\\
\end{array}

## Sherman-Morrison formula

## 求解周期性三对角方程组的广义Thomas算法

## Parallel Algorithm for Tridiagonal Systems

$$
L=\begin{bmatrix}
  1&  && && \\
  m_{2}&1& & & & \\
  &m_{3}&1  & & \\
  &&\ddots  &\ddots && \\
  &&  &m_{n-1} &1& \\
  &&  & &m_{n}&1 \\
\end{bmatrix}and\
U=\begin{bmatrix}
  u_{1}&f_{1}  && && \\
  &u_{2}&f_{2} & & & \\
  &&u_{3} &f_{3} & \\
  &&  &\ddots  &\ddots& \\
  &&  & &u_{n-1}&f_{n-1} \\
  &&  & &&u_{n} \\
  \end{bmatrix}
$$

The solution of the tridiagonal system Ax=b has been reduces to the solution of the two bidiagonal systems Ly=b and Ux=y.
The solutions yi of the bidiagonal system Ly=b can be computed by

$$
\begin{array}{l}
y_1=b_1,\;\; y_{i}=b_{i}-m_{i}y_{i-1}
\end{array}
$$

and the solutions xi of the bidiagonal system Ux=y by

$$
x_{n}=\cfrac{y_{n}}{u_{n}},\;x_{i}=\cfrac{y_{i}-x_{i+1}f_{i}}{u_{i}}
$$

$$
\begin{array}{l}
y_1=b_1\\
y_{2}=b_{2}-m_{2}y_{1}\\
y_{3}=b_{3}-m_{3}y_{2}\\
...\\
y_{i-2}=b_{i-2}-m_{i-2}y_{i-3}\\
y_{i-1}=b_{i-1}-m_{i-1}y_{i-2}\\
y_{i}=b_{i}-m_{i}y_{i-1}\\
y_{i}=b_{i}-m_{i}(b_{i-1}-m_{i-1}y_{i-2})\\
y_{i}=b_{i}-m_{i}(b_{i-1}-m_{i-1}(b_{i-2}-m_{i-2}y_{i-3}))\\
y_{i}=b_{i}-m_{i}(b_{i-1}-m_{i-1}(b_{i-2}-m_{i-2}(\cdots+(-m_{2}b_{1}))))\\
\end{array}
$$

$$
\begin{array}{l}
y_{i}=b_{i}+(-m_{i})b_{i-1}+(-m_{i})(-m_{i-1})(b_{i-2}-m_{i-2}(\cdots+(-m_{2}b_{1}))))\\
y_{i}=\sum_{k=1}^{i} b_{k}\prod_{j=k+1}^{i}(-m_{j}) 
\end{array}
$$

$$
y_{i}=\sum_{j=1}^{i} b_{j}\prod_{k=j+1}^{i}(-m_{k}) 
$$

We define the function

$$
Q(r,s)=\sum_{j=s}^{r} b_{j}\prod_{k=j+1}^{r}(-m_{k}) 
$$
# OneFLOW-Example

OneFLOW documentation visit [eric2003.github.io/OneFLOW](https://eric2003.github.io/OneFLOW/).

## Heat Equation

## 1d-Heat Equation

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
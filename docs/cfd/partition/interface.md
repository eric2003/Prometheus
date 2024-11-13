# Interface

## CGNS Transform

-  [Transform](https://cgns.github.io/CGNS_docs_current/sids/cnct.html#Transform).

## Heat Equation
$$
\frac{\partial u}{\partial t} =\alpha \frac{\partial ^{2}u}{\partial x^{2}}
$$

## FTCS

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

$$
\begin{matrix}
u^{(n+1)}_{1}=u^{(n)}_{1}+\beta (u^{(n)}_{2}-2u^{(n)}_{1}+u^{(n)}_{0})\\
u^{(n+1)}_{2}=u^{(n)}_{2}+\beta (u^{(n)}_{3}-2u^{(n)}_{2}+u^{(n)}_{1})\\
\cdots \\
u^{(n+1)}_{i}=u^{(n)}_{i}+\beta (u^{(n)}_{i+1}-2u^{(n)}_{i}+u^{(n)}_{i-1})\\
\cdots \\
u^{(n+1)}_{N-1}=u^{(n)}_{N-1}+\beta (u^{(n)}_{N}-2u^{(n)}_{N-1}+u^{(n)}_{N-2})\\
u^{(n+1)}_{N}=u^{(n)}_{N}+\beta (u^{(n)}_{N+1}-2u^{(n)}_{N}+u^{(n)}_{N-1})\\
\end{matrix}
$$

```cpp
  Zone 0
  o  o  o  o ...  o   o   o   o
  0  1  2    ...      N-1 N   N+1
  
                      Zone 1  
                      *   *   *   * ... *  *
                      0   1   2     ... N  N+1
  Zone 0
  left  inflow    : u(z0,0  ) = u(z0,1)
  right interface : u(z0,N+1) = u(z1,2)
  Zone 1
  left  interface : u(z1,0  ) = u(z0,N-1)
  right outflow   : u(z1,N+1) = u(z1,N  )
```

```cpp
void Field::InterfaceBc( Region &region )
{
    int index_dim = region.start.size();
    if ( index_dim != 1 ) return;
    int st = region.start[ 0 ];
    int ed = region.end[ 0 ];
	int icount = 0;
    for ( int i = st; i <= ed; ++ i )
    {
        int id = i - 1;
		
        this->u[ id ] = interface[ icount ];
		++ icount;
    }
}
```

```cpp
void Field::InterfaceBc( Region &region )
{
    int index_dim = region.start.size();
    int ist = region.start[ 0 ];
	int jst = region.start[ 1 ];
    int ied = region.end[ 0 ];
	int jed = region.end[ 1 ];

	// zone 0
	// o  |  o      o   |   o
	// 0  1  2 ... ni-1 ni ni+1
	//               zone 1
	//               o  |   o      o   |   o
	//               0  1   2 ... ni-1 ni ni+1	
	
     ___________ A     ___________ 
    |__|__|__|__|B    |__|__|__|__|
    |__|__|__|__|C    |__|__|__|__|
    
    ++++++++++A    a++++++++++
    + + + + + +    + + + + + +
    ++++++++++B    b++++++++++
    + + + + + +    + + + + + +
    ++++++++++C    c++++++++++	
	
	class Interface
	{
	   std::vector<int> zoneList;
	   std::vector<int> faceidList;
	   std::vector<int> iList;
	   std::vector<int> jList;
	   std::vector<int> kList;
	   std::vector<double> uList;
	}
	
	class IJKList
	{
	   std::vector<int> iList;
	   std::vector<int> jList;
	   std::vector<int> kList;
	}
	
	IJKList ijkList;
	
	double GetValue( int zoneid, int faceid )
	{
	    Field * field_t = Global::fields[ zoneid ];
		IJKList & ijkList = Global::ijkLists[ zoneid ];
		
		int i_t = ijkList.iList[ faceid ];
		int j_t = ijkList.jList[ faceid ];
		int k_t = ijkList.kList[ faceid ];
		
		double um = field_t->u(i_t, j_t);
		return um;
	}
	
	Interface interface;
	int nIface = interface.zoneList.size();
	
	for ( int iface = 0; iface < nIface; ++ iface )
	{
	    int zoneid = interface.zoneList[ iface ];
		int faceid = interface.faceidList[ iface ];
		double um = GetValue( zoneid, faceid );
		interface.uList[ iface ] = um;
	}
	
	for ( int iface = 0; iface < nIface; ++ iface )
	{
	    int zoneid = interface.zoneList[ iface ];
		int faceid = interface.faceidList[ iface ];
		//ig: ighost
		//jg: jghost
	    int ig = interface.iList[ iface ];
		int jg = interface.jList[ iface ];
		this->u( ig, jg ) = interface.uList[ iface ];
    }
	
	int icount = 0;	
	for ( int j = jst; j <= jed; ++ j )
	{
	    for ( int i = ist; i <= ied; ++ i )
		{
		    
		    this->u( id ) = interface[ icount ];
		    ++ icount;
		}
	}
	
    for ( int i = st; i <= ni; ++ i )
    {
	    int idir;
		if ( i == 1 ) 
		{
		    idir = -1;
		}
		else
		{
		    idir = 1;
		}
        int id = i + idir;
		
        this->u[ id ] = interface[ icount ];
		++ icount;
    }
}
```

## Interface

```cpp
  j            i
  ^  D+++++C   | c+++++d
  |  +     +   | +     +
  |  +  0  +   | +  1  + 
  |  +     +   | +     +
  |  A+++++B   | b+++++a
  |-------->i  ----------->j

  j            i
  ^  D+++++C   | c+++++d
  |  +  3  +   | +  5  +
  |  G+++++H   | h+++++i
  |  +  2  +   | +  4  +
  |  A+++++B   | b+++++a
  |-------->i  ----------->j
  
   ___________ A     ___________ 
  |__|__|__|__|B    |__|__|__|__|
  |__|__|__|__|C    |__|__|__|__|
  
  ++++++++++A    a++++++++++
  |         |    |         |
  ++++++++++B    b++++++++++
  |         |    |         |
  ++++++++++C    c++++++++++
  
  Interface:
  A-B-C:A(41,5)B(41,3)C(41,1)
  a-b-c:a(1 ,5)b(1 ,3)c(1 ,1)
  
  iface    : 1  2  3    iface    : 1  2  3 
  i        : 41 41 41   i        : 1  1  1 
  j        : 1  2  3    j        : 1  2  3 
  izone    : 0  0  0    izone    : 1  1  1 
  donorzone: 1  1  1    donorzone: 0  0  0 
  
  pnts(41,1,41,3)
  region      : start(41,1) end(41,3)
  donor_region: start(1 ,1) end(1 ,3)
  
  int ist = region.start[ 0 ];
  int ied = region.end[ 0 ];  
  int jst = region.start[ 1 ];
  int jed = region.end[ 1 ];  
  
  std::vector<int> begin1 = region.start;
  std::vector<int> begin2 = donor_region.start;
  std::vector<int> index1;
  std::vector<int> index2;
  
  for ( int j = jst; j <= jed; ++ j )
  {
      for ( int i = ist; i <= ied; ++ i )
      {  
	      index1[0] = i;
		  index1[1] = j;
		  index2 = T * ( index1 - begin1 ) + begin2;
		  int donor_i = index2[ 0 ];
		  int donor_j = index2[ 1 ];
      }
  }
  
   ___________ A   a ___________ 
  |__|__|__|__|B   b|__|__|__|__|
  |__|__|__|__|C   c|__|__|__|__|  
  
   ________L__ A  R  r  a __l_________ 
  |__|__|__L__|B  R  r  b|__l__|__|__|
  |__|__|__L__|C  R  r  c|__l__|__|__|    
  
   ____________ A      a ___________ 
  |__|__|__|_L_|B R  r b|_l_|__|__|__|
  |__|__|__|_L_|C R  r c|_l_|__|__|__|    
  
  Node A : L R    Node a : l r
  Node B : L R    Node b : l r
  Node C : L R    Node c : l r
  
  Face A-B : Lcell Rcell   Face a-b : lcell rcell
  Face B-C : Lcell Rcell   Face b-c : lcell rcell
  
Cell  0     1     2     3        N-2   N-1    N
      o  *  o  *  o  *  o  ... *  o  *  o  *  o
Face     1     2     3        N-2    N-1   N

  
  Face 1 : LeftCell 0   RightCell 1
  Face N : LeftCell N-1 RightCell N
  
  Zone0
     N-2   N-1    N   
   *  o  *  o  *  o   
  N-2    N-1   N      
  Zone1
            0     1     2
            o  *  o  *  o
               1     2
  Face(Zone0,N) : LeftCell N-1 RightCell N=Face(Zone1,1).LeftCell
  Face(Zone1,1) : LeftCell 1   RightCell 0=Face(Zone0,N).LeftCell
			   
  
	
Cell  0  1  2  3     N-2 N-1 N  N+1
      *  *  *  *  ... *   *  *  *
Face     1  2  3     N-2 N-1 N  N+1

  Face 1 : LeftCell 0   RightCell 2
  Face N : LeftCell N-1 RightCell N+1
  
  Zone0
   *   *   *   o
  N-2 N-1  N   N+1
  Zone1
       o   *   *
       0   1   2  

  Face(Zone0,N) : LeftCell N-1 RightCell N+1=Face(Zone1,1).LeftCell
  Face(Zone1,1) : LeftCell 2   RightCell 0  =Face(Zone0,N).LeftCell
  
  
  Zone0
    0   1   2   ...  ni-1     ni   ni+1
	   x[1] x[2]    x[ni-1]  x[ni]
	    -1.0 ...             0.0
  Zone1		
					  0       1      2   ...  ni-1     ni   ni+1
					         x[1]   x[2]      x[ni-1] x[ni]
					     	 0.0    ...               1.0  
	   
    int ist = 1;
    int ied = ni;

    // 0(bc) 1(ist) 2 3 ... ni

    for ( int i = ist; i <= ied; ++ i )
    {
        u_e[ i ] = - std::exp( -t ) * std::sin( std::numbers::pi * x[i] ); //theory solution
        un[ i ] = - std::sin( std::numbers::pi * x[ i ] ); //initial condition @ t=0
    }
  
```

Postprocess
```cpp
void Field::AddData( PointFactory &ptfactory, Grid * grid, std::vector<double> &global_x, std::vector<double> &global_ue, std::vector<double> &global_un )
{
    int ni = grid->x.size();
    for ( int i = 0; i < ni; ++ i )
    {
        double xm = grid->x[ i ];
        bool flag = ptfactory.FindPoint( Point( xm ) );
        if ( i == 0 || ( i == ni - 1 ) )
        {
            if ( ! flag )
            {
                ptfactory.AddPoint( Point( xm ) );
                global_x.push_back( grid->x[ i ] );
                global_ue.push_back( this->u_e[ i ] );
                global_un.push_back( this->un[ i ] );
            }
        }
        else
        {
            global_x.push_back( grid->x[ i ] );
            global_ue.push_back( this->u_e[ i ] );
            global_un.push_back( this->un[ i ] );
        }
    }
}
```

## sort

```cpp
    std::vector<std::pair<int, int>> pairs;
    std::vector<int> a{3, 1, 4, 2, 5};
    int nSize = a.size();
    for ( int i = 0; i < nSize; ++ i )
    {
        pairs.push_back( std::make_pair( a[i], i ) );
    }
    
    std::sort( pairs.begin(), pairs.end() );
	
-		my_pairs	{ size=5 }	std::vector<std::pair<int,int>,std::allocator<std::pair<int,int>>>
		[capacity]	6	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<std::pair<int,int>>,std::_Vector_val<std::_Simple_types<std::pair<int,int>>>,1>
+		[0]	(1, 1)	std::pair<int,int>
+		[1]	(2, 3)	std::pair<int,int>
+		[2]	(3, 0)	std::pair<int,int>
+		[3]	(4, 2)	std::pair<int,int>
+		[4]	(5, 4)	std::pair<int,int>
+		[原始视图]	{_Mypair=allocator }	std::vector<std::pair<int,int>,std::allocator<std::pair<int,int>>>
	
```

boundary
```
   o  o  o
   0  1  2
   u[1] = 0.5*( u[0] + u[2]);
   u[0] = 2*u[1] - u[2];
```

single block
```
heat1d1blocksv1.cgns
d:\work\cgns_work\ModernCGNS\codes\Mesh\Structure\SingleBlock\1d\1d-heat-equation\02\
```

plot
```
py.exe ..\plot.py
```


# Euler Equation

## Euler Link

- [Burgers equation(伯格斯方程)](https://zh.wikipedia.org/wiki/%E4%BC%AF%E6%A0%BC%E6%96%AF%E6%96%B9%E7%A8%8B).

```python
nx = 100
dx = 1.0 / nx #0.01
#i=0,1,...,nx-1
for i in range(0, nx):
    x[i] = dx * ( i + 0.5 )
	
 x=0	                                 x=1
  0        1      2...   nx-2     nx-1    nx
  |   *    |   *  |        |   *   |   *  |
      0        1              nx-2    nx-1
   
```

Interface
```cpp
int nInterFaces = donorfaces_for_send.size();
int index_dim = 1;
int ngsize = Global::nghost + 1 - Global::ifinite_volume;
for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
{
    int ijkpos = index_dim * iFace * ngsize;
    int data_pos = iFace * ngsize * Global::nequ;

    for ( int ig = Global::ifinite_volume; ig <= Global::nghost; ++ ig )
    {
        int iig = ig - Global::ifinite_volume;
        int id_cell = donorijk_for_send[ ijkpos + iig ] - 1;
        for ( int iequ = 0; iequ < Global::nequ; ++ iequ )
        {
            Vec1d & u = field->u.vec( iequ );
            donordata_for_send[ data_pos ++ ] = u[ id_cell ];
        }
    }
}

-		donordata_for_send	{ size=3 }	std::vector<double,std::allocator<double>> &
		[capacity]	3	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<double>,std::_Vector_val<std::_Simple_types<double>>,1>
		[0]	1.0000000000000000	double
		[1]	0.0000000000000000	double
		[2]	2.5000000000000004	double
-		donorijk_for_send	{ size=3 }	std::vector<int,std::allocator<int>> &
		[capacity]	3	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<int>,std::_Vector_val<std::_Simple_types<int>>,1>
		[0]	128	int
		[1]	127	int
		[2]	126	int
```

Interface::SendGeom
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
    int ngsize = ( Global::nghost + 1 - Global::ifinite_volume );
    for ( int i = 0; i < nface; ++ i )
    {
        int global_faceid = donorfaces[ i ];
        int local_faceid = interface->global_local_face_map[ global_faceid ];
        int ijkpos = index_dim * local_faceid * ngsize;

        for ( int ig = Global::ifinite_volume; ig <= Global::nghost; ++ ig )
        {
            int iig = ig - Global::ifinite_volume;
            int i_donor_cell = interface->ijk_donors[ ijkpos + iig ];
            sub_donorijk.push_back( i_donor_cell );
        }
        int kkk = 1;
    }

    interface->donorijk_for_send.push_back( sub_donorijk );

    std::vector<double> sub_donordata( sub_donorijk.size() );
    interface->donordata_for_send.push_back( sub_donordata );
}
```

UploadInterfaceField
```cpp
void Solver::UploadInterfaceField()
{
    for ( int iZone = 0; iZone < LocalZone::nZones; ++ iZone )
    {
        Interface * interface = Global::interfaces[ iZone ];

        Field * field = Global::fields[ iZone ];

        int nsend_zones = interface->send_to_zones.size();
        for ( int iSend = 0; iSend < nsend_zones; ++ iSend )
        {
            int zone_to_send = interface->send_to_zones[ iSend ];
            std::vector<int> & donorfaces_for_send = interface->donorfaces_for_send[ iSend ];
            std::vector<int> & donorijk_for_send = interface->donorijk_for_send[ iSend ];
            std::vector<double> & donordata_for_send = interface->donordata_for_send[ iSend ];

            int nInterFaces = donorfaces_for_send.size();
            int index_dim = 1;
            int ngsize = Global::nghost + 1 - Global::ifinite_volume;
            for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
            {
                int ijkpos = index_dim * iFace * ngsize;
                int data_pos = iFace * ngsize * Global::nequ;
  
                for ( int ig = Global::ifinite_volume; ig <= Global::nghost; ++ ig )
                {
                    int iig = ig - Global::ifinite_volume;
                    int id_cell = donorijk_for_send[ ijkpos + iig ] - 1;
                    for ( int iequ = 0; iequ < Global::nequ; ++ iequ )
                    {
                        Vec1d & u = field->u.vec( iequ );
                        donordata_for_send[ data_pos ++ ] = u[ id_cell ];
                    }
                }
            }
        }
    }
}
```

```cpp
nx = 256
1       65     129      193      257
-------------------------------------------
 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |

zone0
-------------------------------------------
index start base 1
 -2   -1  0 |  1     2       62  63  64 | 65  66  67
  * | * | * |  *  |  *       *  | * | * | * | *  | *
            |                           |
   -1   0   1     2    ...     63   64  65  66  67
index start base 0
 -3  -2  -1 |  0     1       61  62  63 | 64  65  66
  * | * | * |  *  |  *       *  | * | * | * | *  | *
            |                           |
   -2  -1   0     1    ...     62   63  64  65  66
   
   
donorijk_for_send
-		donorijk_for_send	{ size=3 }	std::vector<int,std::allocator<int>> &
		[capacity]	3	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<int>,std::_Vector_val<std::_Simple_types<int>>,1>
		[0]	64	int
		[1]	63	int
		[2]	62	int
		
zone1
-		donorijk_for_send	{ size=3 }	std::vector<int,std::allocator<int>> &
		[capacity]	3	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<int>,std::_Vector_val<std::_Simple_types<int>>,1>
		[0]	1	int
		[1]	2	int
		[2]	3	int
-		donorijk_for_send	{ size=3 }	std::vector<int,std::allocator<int>> &
		[capacity]	3	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<int>,std::_Vector_val<std::_Simple_types<int>>,1>
		[0]	64	int
		[1]	63	int
		[2]	62	int
		

```
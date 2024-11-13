# Parallel

## Serial

Serial
```cpp
void Solver::ExchangeInterfaceField()
{
    int nZones = Global::interfaces.size();
    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        Field * field = Global::fields[ iZone ];

        Interface * interface = Global::interfaces[ iZone ];
        int nInterFaces = interface->zoneList.size();
        int index_dim = 1;
        for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
        {
            int donor_zoneid = interface->zoneList[ iFace ];
            int ijkpos = index_dim * iFace;
            int i_ghost_cell = interface->ijk_ghosts[ ijkpos + 0 ];
            int i_donor_cell = interface->ijk_donors[ ijkpos + 0 ];
            
            Field * donor_field = Global::fields[ donor_zoneid ];

            double donor_value = donor_field->u[ i_donor_cell ];
            field->u[ i_ghost_cell ] = donor_value;
        }
    }
}
```

New Version
```cpp
class Interface
{
public:
    std::vector<int> zoneList;
    std::vector<int> faceidList;
    std::vector<int> ijk_ghosts;
    std::vector<int> ijk_donors;
	std::vector<double> data_recv;
	std::vector<double> data_send;
};

ghost -1.0             0.0 ghost
  0    1   2  ... 40   41  42
                   0    1   2   3  ... 40  41   42
                 ghost 0.0                -1.0  ghost
				 
				 
zone 0:
interface(zone1)->data_send[0] = field(zone1)->u[donor=2]
interface(zone0)->data_recv[0] = interface(zone1)->data_send[0]
field(zone0)->u[ghost=42] = interface(zone0)->data_recv[0]
zone 1:
interface(zone0)->data_send[0] = field(zone0)->u[donor=40]
interface(zone1)->data_recv[0] = interface(zone0)->data_send[0]
field(zone1)->u[ghost=0] = interface(zone1)->data_recv[0]

void Solver::ExchangeInterfaceField()
{
    int nZones = Global::interfaces.size();
    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        Field * field = Global::fields[ iZone ];

        Interface * interface = Global::interfaces[ iZone ];
        int nInterFaces = interface->zoneList.size();
        int index_dim = 1;
        for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
        {
            int donor_zoneid = interface->zoneList[ iFace ];
            int ijkpos = index_dim * iFace;
            int i_donor_cell = interface->ijk_donors[ ijkpos + 0 ];
            
            Field * donor_field = Global::fields[ donor_zoneid ];
            double donor_value = donor_field->u[ i_donor_cell ];
			interface->data_recv[ iFace ] = donor_value;
        }
		
        for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
        {
            int donor_zoneid = interface->zoneList[ iFace ];
            int ijkpos = index_dim * iFace;
            int i_ghost_cell = interface->ijk_ghosts[ ijkpos + 0 ];
            
            double donor_value = interface->data_recv[ iFace ];
            field->u[ i_ghost_cell ] = donor_value;
        }
    }
}
```

4blocks
```cpp

 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |
globalfaceid
        0       1        2
		
zone0 global_faceids: 0   local_faceids: 0
zone1 global_faceids: 1 2 local_faceids: 0 1 
      donor: (zone2,gid=1), (zone3,gid=2)
	  donor: (zone2,lid=1), (zone3,lid=0)
zone2 global_faceids: 0 1 local_faceids: 0 1
zone3 global_faceids: 2   local_faceids: 0
```

```cpp
class Interface
{
public:
    int zoneid;
    std::vector<int> zoneList;
    std::vector<int> global_faceids;
    std::vector<int> local_faceids;
    std::vector<int> ijk_ghosts;
    std::vector<int> ijk_donors;
    std::vector<double> data_recv;
    std::vector<double> data_send;
public:
    std::vector<int> neighbor_donor_zones;
    std::vector<std::vector<int>> neighbor_donorfaces;
    std::vector<int> send_zones;
    std::vector<std::vector<int>> send_donorfaces;
};

neighbor_donor_zones;
neighbor_donorfaces;
{
	int donor_zoneid;
	std::vector<int> donorfaces;
}

---------------------------------
send

 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |
globalfaceid
        0       1        2
zone0:
donor zone2 donorfaces(0)
zone0->send_geom(zone=2,facelist(0)) : 
  zone2->recv_geom(zone=0,facelist(0));
  zone2->get_value(facelist(0),valuelist(200));
  zone2->send_value(zone=0,valuelist(200));
zone0->recv_value(zone=2,valuelist(200))

zone1:
donor zone2 donorfaces(1)
zone1->send_geom(zone=2,facelist(1)) : 
  zone2->recv_geom(zone=1,facelist(1));
  zone2->get_value(facelist(0),valuelist(201));
  zone2->send_value(zone=1,valuelist(201));
zone1->recv_value(zone=2,valuelist(201))

donor zone3 donorfaces(2)
zone1->sendgeom(zone=3,facelist(2)) : 
  zone3->recv_geom(zone=1,facelist(2));
  zone3->get_value(facelist(2),valuelist(302));
  zone3->send_value(zone=1,valuelist(302));
zone1->recv_value(zone=3,valuelist(302));

zone2:
donor zone0 donorfaces(0)
zone2->sendgeom(zone=0,facelist(0)) : 
  zone0->recv_geom(zone=2,facelist(0));
  zone0->get_value(facelist(0),valuelist(000));
  zone0->send_value(zone=2,valuelist(000));
zone2->recv_value(zone=0,valuelist(000));

donor zone1 donorfaces(1)
zone2->sendgeom(zone=1,facelist(1)) : 
  zone1->recv_geom(zone=2,facelist(1));
  zone1->get_value(facelist(1),valuelist(201));
  zone1->send_value(zone=2,valuelist(201));
zone2->recv_value(zone=1,valuelist(201));

zone3:
donor zone1 donorfaces(2)
zone3->sendgeom(zone=1,facelist(2)) : 
  zone1->recv_geom(zone=3,facelist(2));
  zone1->get_value(facelist(2),valuelist(102));
  zone1->send_value(zone=3,valuelist(102));
zone3->recv_value(zone=1,valuelist(102));

int nZones = Global::grids.size();
for ( int iZone = 0; iZone < nZones; ++ iZone )
{
    Interface * interface = Global::interfaces[ iZone ];
    std::vector<std::vector<int>> & neighbor_donorfaces = interface->neighbor_donorfaces;

    std::vector<int> &neighbor_donor_zones = interface->neighbor_donor_zones;
    int ndonor_zones = neighbor_donor_zones.size();
    std::cout << "zone = " << iZone << " donorzone = ";
    for ( int iNei = 0; iNei < ndonor_zones; ++ iNei )
    {
        int donorzone = neighbor_donor_zones[ iNei ];
        std::cout << donorzone;
        if( iNei != ndonor_zones - 1 )
        {
            std::cout << ",";
        }
    }
    std::cout << "\n";

    for ( int iNei = 0; iNei < ndonor_zones; ++ iNei )
    {
        int donorzone = neighbor_donor_zones[ iNei ];
        std::cout << "donorzone = " << donorzone << " donorfaces = ";
        std::vector<int> & neighbor_donorface = neighbor_donorfaces[ iNei ];
        int ndonorfaces = neighbor_donorface.size();
        for ( int idonorface = 0; idonorface < ndonorfaces; ++ idonorface )
        {
            std::cout <<  neighbor_donorface[ idonorface ];
            if( idonorface != ndonorfaces - 1 )
            {
                std::cout << ",";
            }
        }
        std::cout << "\n";
    }
    std::cout << "\n";
}
---------------------------------
zone = 0 donorzone = 2
donorzone = 2 donorfaces = 0

zone = 1 donorzone = 2,3
donorzone = 2 donorfaces = 1
donorzone = 3 donorfaces = 2

zone = 2 donorzone = 0,1
donorzone = 0 donorfaces = 0
donorzone = 1 donorfaces = 1

zone = 3 donorzone = 1
donorzone = 1 donorfaces = 2
---------------------------------
recv

 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |
globalfaceid
        0       1        2

zone0:
recv from zone2 donorfaces(0): zone2: donorfaces (0)

zone1:
recv from zone2 donorfaces(1): zone2: donorfaces (1)
recv from zone3 donorfaces(2): zone2: donorfaces (2)

zone2:
recv from zone0 donorfaces(0): zone0: donorfaces (0)
recv from zone1 donorfaces(1): zone2: donorfaces (1)

zone3:
recv from zone1 donorfaces(2): zone1: donorfaces (2)
		
```

typical geom
```cpp
 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |
globalfaceid
        0       1        2
zone = 0 donorzone = 2
donorzone = 2 donorfaces = 0

zone = 1 donorzone = 2,3
donorzone = 2 donorfaces = 1
donorzone = 3 donorfaces = 2

zone = 2 donorzone = 0,1
donorzone = 0 donorfaces = 0
donorzone = 1 donorfaces = 1

zone = 3 donorzone = 1
donorzone = 1 donorfaces = 2

zone = 0
zone_to_send = 2 donorfaces_for_send = 0
zone = 1
zone_to_send = 2 donorfaces_for_send = 1
zone_to_send = 3 donorfaces_for_send = 2
zone = 2
zone_to_send = 0 donorfaces_for_send = 0
zone_to_send = 1 donorfaces_for_send = 1
zone = 3
zone_to_send = 1 donorfaces_for_send = 2

int nZones = Global::grids.size();
for ( int iZone = 0; iZone < nZones; ++ iZone )
{
    Interface * interface = Global::interfaces[ iZone ];

    std::vector<int> & send_to_zones = interface->send_to_zones;
    int nsend_zones = send_to_zones.size();

    std::vector<std::vector<int>> & donorfaces_for_send = interface->donorfaces_for_send;
    for ( int iSend = 0; iSend < nsend_zones; ++ iSend )
    {
        int zone_to_send = send_to_zones[ iSend ];
        std::vector<int> & donorfaces = donorfaces_for_send[ iSend ];
		GeomSendTest( source_zone, zone_to_send, donorfaces );
    }
}

```

debug
```cpp

 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |
globalfaceid
        0       1        2
		

		         zone0
		       |              |
       i,j,k:  1 2 ...   20   21
globalfaceid:                 0
localfaceid :                 0
         u  : [1][2]...  [20][21]
		      0.0             1.0
		
u[1]  = 0.0
u[2]  = 0.078459095727845068
u[20] =	0.99691733373312796
u[21] = 1.0

send_to_zones:2
donorfaces_for_send: 0

zone_to_send: 2
donorfaces:0
donorijks:2

		
		         zone2
		       |              |
       i,j,k:  1 2 ...   20   21
globalfaceid:  0              1
localfaceid :  1              0
         u  : [1][2]...  [20][21]
		      1.0             0.0
			  
u[1]  = 1.0
u[2]  = 0.99691733373312796
u[20] =	0.078459095727844666
u[21] = 0.0

send_to_zones:0,1
donorfaces_for_send: 0,1

zone_to_send: 1
donorfaces:1

		         zone1
		       |              |
       i,j,k:  1 2 ...   20   21
globalfaceid:  1              2
localfaceid :  1              0
         u  : [1][2]...  [20][21]
		      0.0            -1.0

u[1]  = 0.0
u[2]  = -0.078459095727845360
u[20] =	-0.99691733373312796
u[21] = -1.0

-		interface->ijk_donors	{ size=2 }	std::vector<int,std::allocator<int>>
		[capacity]	2	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<int>,std::_Vector_val<std::_Simple_types<int>>,1>
		[0]	20	int
		[1]	2	int


	
int index_dim = 1;
std::vector<double> rrr( nInterFaces );
for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
{
    int donor_zoneid = interface->zoneList[ iFace ];
    int ijkpos = index_dim * iFace;
    int i_donor_cell = interface->ijk_donors[ ijkpos + 0 ];

    Field * donor_field = Global::fields[ donor_zoneid ];
    double donor_value = donor_field->u[ i_donor_cell ];
    rrr[ iFace ] = donor_value;
}		

rrr[ iFace ]
[0]	0.99691733373312796	double

for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
{
    int donor_zoneid = interface->zoneList[ iFace ];
    int ijkpos = index_dim * iFace;
    int i_ghost_cell = interface->ijk_ghosts[ ijkpos + 0 ];

    double donor_value = interface->data_recv[ iFace ];
    field->u[ i_ghost_cell ] = donor_value;
}

-		interface->data_recv	{ size=1 }	std::vector<double,std::allocator<double>>
		[capacity]	1	unsigned __int64
+		[allocator]	allocator	std::_Compressed_pair<std::allocator<double>,std::_Vector_val<std::_Simple_types<double>>,1>
		[0]	0.078459095727844666	double
+		[原始视图]	{_Mypair=allocator }	std::vector<double,std::allocator<double>>


donorijk_for_send

```

void CUpdateInterface::Run()
```cpp
void CUpdateInterface::Run()
{
    ActionState::dataBook = this->dataBook;
    for ( int zId = 0; zId < ZoneState::nZones; ++ zId )
    {
        ZoneState::zid = zId;

        int nNei = Zone::GetNumberOfZoneNeighbors( zId );

        for ( int iNei = 0; iNei < nNei; ++ iNei )
        {
            int jZone = Zone::GetNeighborZoneId( zId, iNei );

            this->SwapInterfaceData( zId, jZone );
        }
    }
}
```

void CUpdateInterface::SwapInterfaceData( int iZone, int jZone )
```cpp
void CUpdateInterface::SwapInterfaceData( int iZone, int jZone )
{
    int sPid = ZoneState::pid[ iZone ];
    int rPid = ZoneState::pid[ jZone ];

    if ( Parallel::pid == sPid )
    {
        ZoneState::zid  = iZone;
        ZoneState::rzid = jZone;

        this->sendAction();
    }

    HXSwapData( ActionState::dataBook, sPid, rPid );

    if ( Parallel::pid == rPid )
    {
        ZoneState::zid  = jZone;
        ZoneState::szid = iZone;

        this->recvAction();
    }
}
```
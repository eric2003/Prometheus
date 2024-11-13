# MPI

## article link
-  [MPI official document](https://www.mpi-forum.org/docs/).
-  [MPICH](https://www.mpich.org/documentation/).
-  [OpenMPI](https://www.open-mpi.org/doc/).
-  [Message Passing Interface (MPI) - LLNL HPC Tutorials](https://hpc-tutorials.llnl.gov/mpi/).
-  [mpitutorial.com](https://mpitutorial.com/tutorials/).
-  [Open MPI Tutorial](https://usc-rc.github.io/tutorials/open-mpi/).
-  [A Comprehensive MPI Tutorial Resource](https://mpitutorial.com/).
-  [Open MPI v5.0.x](https://docs.open-mpi.org/en/v5.0.x/).

## command

mpiexec
```
Examples:

    mpiexec -n 4 pi.exe
    mpiexec -hosts 1 server1 master : -n 8 worker
```

## code example

### Hello, world
```cpp
#include "mpi.h"
#include <iostream>

int main(int argc, char* argv[])
{
    int rank, size, len;
    char version[MPI_MAX_LIBRARY_VERSION_STRING];

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Get_library_version(version, &len);
	std::cout << "Hello, world!  I am " << rank << " of " << size
              << "(" << version << ", " << len << ")" << std::endl;		   
    MPI_Finalize();

    return 0;
}
```

### Run Hello, world
```
PS D:\work\mpi_work\ModernMPI\codes\simple\01\build> mpiexec -n 4 .\Debug\testprj.exe
Hello, world!  I am 0 of 4(Microsoft MPI 10.1.12498.16, 27)
Hello, world!  I am 3 of 4(Microsoft MPI 10.1.12498.16, 27)
Hello, world!  I am 2 of 4(Microsoft MPI 10.1.12498.16, 27)
Hello, world!  I am 1 of 4(Microsoft MPI 10.1.12498.16, 27)
```


```cmake
cmake_minimum_required ( VERSION 3.30 )

project ( testprj )

execute_process(COMMAND cmake --help-property-list OUTPUT_VARIABLE my_property_lists )
STRING ( REGEX REPLACE "\n" ";" my_property_lists "${my_property_lists}" )
list ( SORT my_property_lists )
foreach ( my_property ${my_property_lists})
    string( TOUPPER ${my_property} upperPropName )
    string ( FIND ${upperPropName} "MPI" myloc )
    if ( myloc GREATER_EQUAL 0 )
        message( STATUS "PROPERTY : ${my_property}" )
    endif ()
endforeach()
```

### echo_target
```cmake
function(echo_target tgt)
    if(NOT TARGET ${tgt})
        message("There is no target named '${tgt}'")
        return()
    endif()

    set(props
        DEBUG_OUTPUT_NAME
        DEBUG_POSTFIX
        RELEASE_OUTPUT_NAME
        ...
        LINK_SEARCH_START_STATIC
        LOCATION
        LOCATION_DEBUG
        ...
        WIN32_EXECUTABLE
        XCODE_ATTRIBUTE_WHATEVER
    )
    message(STATUS "======================== ${tgt} ========================")

    # Push the current (NEW) CMake policy onto the stack, and apply the OLD policy.
    cmake_policy(PUSH)
    cmake_policy(SET CMP0026 OLD)

    foreach(p ${props})
        # v for value, d for defined, s for set
        get_property(v TARGET ${tgt} PROPERTY ${p})
        get_property(d TARGET ${tgt} PROPERTY ${p} DEFINED)
        get_property(s TARGET ${tgt} PROPERTY ${p} SET)
        # only produce output for values that are set
        if(s)
            message(STATUS "tgt='${tgt}' p='${p}'")
            message(STATUS "  value='${v}'")
            message(STATUS "  defined='${d}'")
            message(STATUS "  set='${s}'")
            message(STATUS "")
        endif()
    endforeach()

    # Pop the previous policy from the stack to re-apply the NEW behavior.
    cmake_policy(POP)

    message(STATUS "")
endfunction()
```

### void ReadCgnsGrid( const std::string & filename )
```cpp
void ReadCgnsGrid( const std::string & filename )
{
    int fileId = -1;
    if ( Parallel::pid == Parallel::serverid )
    {
        cg_open( filename.c_str(), CG_MODE_READ, &fileId );
        std::cout << "fileId = " << fileId << "\n";
    }
    
    int nbases = -1;
    if ( Parallel::pid == Parallel::serverid )
    {
        cg_nbases( fileId, &nbases );
    }
    MPI_Bcast( &nbases, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
    std::cout << "Parallel::pid = " << Parallel::pid << " ";
    std::cout << "nbases = " << nbases << "\n";

    for ( int iBase = 0; iBase < nbases; ++ iBase )
    {
        char basename[ 33 ];
        int baseId = iBase + 1;
        int icelldim = -1;
        int iphysdim = -1;
        if ( Parallel::pid == Parallel::serverid )
        {
            cg_base_read( fileId, baseId, basename, &icelldim, &iphysdim );
        }
        MPI_Bcast( &icelldim, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
        MPI_Bcast( &iphysdim, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
        std::cout << "Parallel::pid = " << Parallel::pid << " ";
        std::cout << "icelldim = " << icelldim << " iphysdim = " << iphysdim << "\n";

        Global::cell_dim = icelldim;
        Global::phys_dim = iphysdim;

        int nzones = -1;
        if ( Parallel::pid == Parallel::serverid )
        {
            cg_nzones( fileId, baseId, &nzones );
        }
        MPI_Bcast( &nzones, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
        std::cout << "Parallel::pid = " << Parallel::pid << " ";
        std::cout << "nzones = " << nzones << "\n";

        for ( int iZone = 0; iZone < nzones; ++ iZone )
        {
            int zoneId = iZone + 1;
            int index_dim = -1;
            if ( Parallel::pid == Parallel::serverid )
            {
                cg_index_dim( fileId, baseId, zoneId, &index_dim );
            }
            //MPI_Bcast( &index_dim, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
            HXSendRecvData<int>( &index_dim, 1, Parallel::serverid, ZoneState::GetProcID( iZone ) );

            if ( ZoneState::IsValid( iZone ) )
            {
                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "index_dim = " << index_dim << "\n";
            }

            std::vector<cgsize_t> isize( index_dim * 3 );
            char zonename[ 33 ];
            if ( Parallel::pid == Parallel::serverid )
            {
                cg_zone_read( fileId, baseId, zoneId, zonename, isize.data() );
            }

            MPI_Bcast( zonename, 33, MPI_CHAR, Parallel::serverid, MPI_COMM_WORLD );
            MPI_Bcast( isize.data(), index_dim * 3, MPI_LONG_LONG, Parallel::serverid, MPI_COMM_WORLD );

            HXSendRecvData( zonename, 33, Parallel::serverid, ZoneState::GetProcID( iZone ) );

            return;

            std::cout << "Parallel::pid = " << Parallel::pid << " ";
            std::cout << "zonename = " << zonename << "\n";

            for ( int i = 0; i < isize.size(); ++ i )
            {
                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "i = " << i << " isize = " << isize[ i ] << "\n";
            }

            std::vector<cgsize_t> irmin( index_dim );
            std::vector<cgsize_t> irmax( index_dim );
            int nNodes = 1;
            for ( int m = 0; m < index_dim; ++ m )
            {
                /* lower range index */
                irmin[ m ] = 1;
                /* upper range index of vertices */
                irmax[ m ] = isize[ m ];
                nNodes *= irmax[ m ];
            }
            std::cout << "nNodes = " << nNodes << "\n";

            ZoneType_t zoneType;
            if ( Parallel::pid == Parallel::serverid )
            {
                cg_zone_type( fileId, baseId, zoneId, &zoneType );
            }
            MPI_Bcast( &zoneType, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
            std::cout << "Parallel::pid = " << Parallel::pid << " ";
            std::cout << "zoneType = " << zoneType << " ZoneTypeName = " << ZoneTypeName[ zoneType ] << "\n";
            int ncoords = -1;
            if ( Parallel::pid == Parallel::serverid )
            {
                cg_ncoords( fileId, baseId, zoneId, &ncoords );
            }
            MPI_Bcast( &ncoords, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
            std::cout << "Parallel::pid = " << Parallel::pid << " ";
            std::cout << "ncoords = " << ncoords << "\n";

            Zone * zone = new Zone();
            Global::zones.push_back( zone );
            for ( int m = 0; m < index_dim; ++ m )
            {
                zone->nijk.push_back( isize[ m ] );
            }

            Grid * grid = new Grid();
            Global::grids.push_back( grid );

            BaseZone baseZone;
            baseZone.zone_name = zonename;

            int gZoneId = Global::zone_names.FindBaseZone( baseZone );

            for ( int icoord = 0; icoord < ncoords; ++ icoord )
            {
                int coorId = icoord + 1;
                DataType_t dataType;
                char coordname[ 33 ];
                if ( Parallel::pid == Parallel::serverid )
                {
                    cg_coord_info( fileId, baseId, zoneId, coorId, &dataType, coordname );
                }
                MPI_Bcast( coordname, 33, MPI_CHAR, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &dataType, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "coordname = " << coordname << "\n";
                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "dataType = " << dataType << " DataTypeName = " << DataTypeName[ dataType ] << "\n";

                Coor * coor = new Coor();
                zone->coors.push_back( coor );
                coor->coorname = coordname;
                coor->nNodes = nNodes;
                coor->coord.resize( nNodes * sizeof( double ) );
                if ( Parallel::pid == Parallel::serverid )
                {
                    cg_coord_read( fileId, baseId, zoneId, coordname, dataType, irmin.data(), irmax.data(), coor->coord.data() );
                }

                double * pcoor = (double *)coor->coord.data();

                MPI_Bcast( pcoor, nNodes, MPI_DOUBLE, Parallel::serverid, MPI_COMM_WORLD );

                if ( icoord == 0 )
                {
                    grid->x.resize( nNodes );
                    coor->DumpCoorX( grid->x );
                }
            }

            int nbocos = -1;
            if ( Parallel::pid == Parallel::serverid )
            {
                cg_nbocos( fileId, baseId, zoneId, &nbocos );
            }
            MPI_Bcast( &nbocos, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
            std::cout << "Parallel::pid = " << Parallel::pid << " ";
            std::cout << "nbocos = " << nbocos << "\n";


            for ( int iboco = 0; iboco < nbocos; ++ iboco )
            {
                int bccoId = iboco + 1;
                GridLocation_t location;
                if ( Parallel::pid == Parallel::serverid )
                {
                    cg_boco_gridlocation_read( fileId, baseId, zoneId, bccoId, &location );
                }
                MPI_Bcast( &location, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );

                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "iboco = " << iboco <<  " location = " << location << " GridLocationName = " << GridLocationName[location] << "\n";

                char boconame[ 33 ];
                BCType_t bocotype;
                PointSetType_t ptset_type;
                cgsize_t npnts = 0;
                std::vector<int> normalIndex( index_dim, -1 );
                cgsize_t normalListSize = 0;
                DataType_t normalDataType;
                int ndataset = -1;

                if ( Parallel::pid == Parallel::serverid )
                {
                    cg_boco_info( fileId, baseId, zoneId, bccoId, boconame, &bocotype, &ptset_type,
                        &npnts, normalIndex.data(), &normalListSize, &normalDataType, &ndataset );
                }
                MPI_Bcast( boconame, 33, MPI_CHAR, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &bocotype, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &ptset_type, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &normalDataType, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &npnts, 1, MPI_LONG_LONG, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &normalListSize, 1, MPI_LONG_LONG, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( &ndataset, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( normalIndex.data(), index_dim, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
                ZoneBc * zonebc = new ZoneBc();
                zone->bccos.push_back( zonebc );
                zonebc->bcType = bocotype;

                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "boconame = " << boconame << " bocotype = " << bocotype << " BCTypeName = " << BCTypeName[ bocotype ] << "\n";
                std::cout << "ptset_type = " << ptset_type <<  " PointSetTypeName = " << PointSetTypeName[ptset_type] << "\n";
                std::cout << "npnts = " << npnts << "\n";
                std::cout << "normalIndex = ";
                for ( int i = 0; i < index_dim; ++ i )
                {
                    std::cout << normalIndex[ i ] << " ";
                }
                std::cout << "\n";
                std::cout << "normalListSize = " << normalListSize << "\n";
                std::cout << "normalDataType = " << normalDataType << " DataTypeName = " << DataTypeName[ normalDataType ] << "\n";
                std::cout << "ndataset = " << ndataset << "\n";

                std::vector<char> normalList( nNodes * iphysdim * sizeof( double ) );

                std::vector<cgsize_t> pnts( npnts * index_dim );

                if ( Parallel::pid == Parallel::serverid )
                {
                    cg_boco_read( fileId, baseId, zoneId, bccoId, pnts.data(), normalList.data() );
                }

                MPI_Bcast( pnts.data(), npnts * index_dim, MPI_LONG_LONG, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( normalList.data(), nNodes * iphysdim * sizeof( double ), MPI_CHAR, Parallel::serverid, MPI_COMM_WORLD );

                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "pnts = ";
                for ( int i = 0; i < pnts.size(); ++ i )
                {
                    std::cout << pnts[ i ] << " ";
                    zonebc->pnts.push_back( pnts[ i ] );
                }
                std::cout << "\n";
                double * normal_d = reinterpret_cast<double *>( const_cast<char *>( normalList.data() ) );
            }

            int n1to1 = -1;
            if ( Parallel::pid == Parallel::serverid )
            {
                cg_n1to1( fileId, baseId, zoneId, &n1to1 );
            }
            MPI_Bcast( &n1to1, 1, MPI_INT, Parallel::serverid, MPI_COMM_WORLD );
            std::cout << "Parallel::pid = " << Parallel::pid << " ";
            std::cout << "n1to1 = " << n1to1 << "\n";

            for ( int i1to1 = 0; i1to1 < n1to1; ++ i1to1 )
            {
                int i1to1Id = i1to1 + 1;

                ZoneBc1To1 * zonebc_1to1 = new ZoneBc1To1();
                zone->bc1to1s.push_back( zonebc_1to1 );

                char connectname[ 33 ];
                char donorname[ 33 ];
                cgsize_t npnts = 2;
                std::vector<cgsize_t> range( npnts * index_dim );
                std::vector<cgsize_t> donor_range( npnts * index_dim );
                std::vector<int> transform( index_dim );
                if ( Parallel::pid == Parallel::serverid )
                {
                    cg_1to1_read( fileId, baseId, zoneId, i1to1Id, connectname, donorname, range.data(), donor_range.data(), transform.data() );
                }
                MPI_Bcast( connectname, 33, MPI_CHAR, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( donorname, 33, MPI_CHAR, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( range.data(), npnts * index_dim, MPI_LONG_LONG, Parallel::serverid, MPI_COMM_WORLD );
                MPI_Bcast( donor_range.data(), npnts * index_dim, MPI_LONG_LONG, Parallel::serverid, MPI_COMM_WORLD );

                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "connectname = " << connectname << "\n";
                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "donorname = " << donorname << "\n";

                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "range = \n";
                for ( int i = 0; i < range.size(); ++ i )
                {
                    std::cout << range[ i ] << " ";
                }
                std::cout << "\n";
                std::cout << "Parallel::pid = " << Parallel::pid << " ";
                std::cout << "donor_range = \n";
                for ( int i = 0; i < donor_range.size(); ++ i )
                {
                    std::cout << donor_range[ i ] << " ";
                }
                std::cout << "\n";

                BaseZone baseZone;
                baseZone.zone_name = donorname;

                int gDonorZoneId = Global::zone_names.FindBaseZone( baseZone );

                zonebc_1to1->zoneid = gZoneId;
                zonebc_1to1->transform = transform;
                zonebc_1to1->donor_zoneid = gDonorZoneId;

                for ( int i = 0; i < range.size(); ++ i )
                {
                    zonebc_1to1->pnts.push_back( range[ i ] );
                    zonebc_1to1->donor_pnts.push_back( donor_range[ i ] );
                }
            }
        }
    }
    cg_close( fileId );
}
```

### void Solver::InitTopo()
```cpp
void Solver::InitTopo()
{
    int nZones = Global::grids.size();
    Global::donor_zone_sets.resize( nZones );
    Global::donor_zones.resize( nZones );
    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        Interface * interface = new Interface();
        interface->zoneid = iZone;
        Global::interfaces.push_back( interface );
    }

    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        Zone * zone = Global::zones[ iZone ];
        Interface * interface = Global::interfaces[ iZone ];

        int nbc1to1s = zone->bc1to1s.size();
        for ( int ibc1to1 = 0; ibc1to1 < nbc1to1s; ++ ibc1to1 )
        {
            ZoneBc1To1 * bc1to1 = zone->bc1to1s[ ibc1to1 ];
            int zoneid = bc1to1->zoneid;
            int donor_zoneid = bc1to1->donor_zoneid;
            Region region;
            region.SetRegion( bc1to1->pnts );

            Region donor_region;
            donor_region.SetRegion( bc1to1->donor_pnts );

            Transform transform;
            transform.begin1 = region.start;
            transform.begin2 = donor_region.start;
            transform.transform = bc1to1->transform;
            transform.Init();

            interface->CalcInterface( &transform, region.start, region.end, donor_zoneid );
        }
        int nInterfaces = interface->zoneList.size();
        interface->data_recv.resize( nInterfaces );
        interface->data_send.resize( nInterfaces );
    }

    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        Interface * interface = Global::interfaces[ iZone ];
        int nInterFaces = interface->zoneList.size();
        std::set<int> &donor_zoneSet = Global::donor_zone_sets[ iZone ];
        for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
        {
            int donor_zoneid = interface->zoneList[ iFace ];
            donor_zoneSet.insert( donor_zoneid );
        }

        std::vector<int> &donor_zones = Global::donor_zones[ iZone ];
        for ( std::set<int>::iterator iter = donor_zoneSet.begin(); iter != donor_zoneSet.end(); ++ iter )
        {
            donor_zones.push_back( *iter );
        }

        interface->neighbor_donor_zones = donor_zones;

        std::unordered_map<int, int> donor_zonelocal;

        for ( int idonor = 0; idonor < donor_zones.size(); ++ idonor )
        {
            int donor_zone = donor_zones[ idonor ];
            donor_zonelocal.insert( std::make_pair( donor_zone, idonor ) );
        }
        int index_dim = 1;
        int ndonors = donor_zones.size();
        std::vector<std::vector<int>> & neighbor_donorfaces = interface->neighbor_donorfaces;
        neighbor_donorfaces.resize( ndonors );

        std::vector<std::vector<int>> & sub_local_faceids = interface->sub_local_faceids;
        sub_local_faceids.resize( ndonors );

        for ( int iFace = 0; iFace < nInterFaces; ++ iFace )
        {
            int donor_zoneid = interface->zoneList[ iFace ];
            int ineighbor = donor_zonelocal[ donor_zoneid ];
            std::vector<int> &donorfaces = neighbor_donorfaces[ ineighbor ];
            int global_faceid = interface->global_faceids[ iFace ];
            donorfaces.push_back( global_faceid );
            int local_faceid = interface->local_faceids[ iFace ];

            std::vector<int> & sub_local_faces = sub_local_faceids[ ineighbor ];
            sub_local_faces.push_back( local_faceid );
        }
    }

    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        Interface * interface = Global::interfaces[ iZone ];

        std::vector<int> &neighbor_donor_zones = interface->neighbor_donor_zones;
        int ndonor_zones = neighbor_donor_zones.size();

        std::vector<std::vector<int>> & neighbor_donorfaces = interface->neighbor_donorfaces;

        for ( int iNei = 0; iNei < ndonor_zones; ++ iNei )
        {
            int donorzone = neighbor_donor_zones[ iNei ];
            std::vector<int> & neighbor_donorface = neighbor_donorfaces[ iNei ];

            Global::SendGeom( iZone, donorzone, neighbor_donorface );
        }
        int kkk = 1;
    }

    for ( int iZone = 0; iZone < nZones; ++ iZone )
    {
        std::cout << "zone = " << iZone << "\n";

        Interface * interface = Global::interfaces[ iZone ];

        std::vector<int> & send_to_zones = interface->send_to_zones;
        int nsend_zones = send_to_zones.size();
    }

    std::cout << "\n";
}
```

HXBcastData( &nSize, 1, iProc );
```cpp
    for ( int iProc = 0; iProc < Parallel::nProc; ++ iProc )
    {
        int nSize = -1;
        if ( iProc == Parallel::pid )
        {
            nSize = Global::facePairList.size();
        }
        HXBcastData( &nSize, 1, iProc );
        std::cout << "Parallel::pid = " << Parallel::pid << " ";
        std::cout << "nSize = " << nSize << "\n";
    }
```

```cpp
 zone0    zone2   zone1    zone3
|   0   |   2   |   1    |   3   |
globalfaceid
        0       1        2
		
std::vector<int> mpi_global_faceids;
std::vector<int> process_global_faceids;

    for ( int iZone = 0; iZone < LocalZone::nZones; ++ iZone )
    {
        Interface * interface = Global::interfaces[ iZone ];

        std::vector<int> &neighbor_donor_zones = interface->neighbor_donor_zones;
        int ndonor_zones = neighbor_donor_zones.size();

        std::vector<std::vector<int>> & neighbor_donorfaces = interface->neighbor_donorfaces;

        for ( int iNei = 0; iNei < ndonor_zones; ++ iNei )
        {
            int donorzone = neighbor_donor_zones[ iNei ];
            std::vector<int> & neighbor_donorface = neighbor_donorfaces[ iNei ];

            Interface * interface = Global::interfaces[ donorzone ];
            interface->SendGeom( iZone, neighbor_donorface );
        }
    }
	          zone0  zone2   zone1    zone3
zone         |  0  |   2   |    1   |   3   |
faceid             0       1        2
donor zones     2	 (0  1)  (2  3)     1
				
zone0 ghost = zone2 inner
zone2 ghost = zone0 inner
------------------------------------------------------------
zone0 send neighbor_donorface  to   zone2 to set inner donor
zone0 recv neighbor_donorface' from zone2 to set inner donor

zone1 send neighbor_donorface to zone2 to set inner donor
zone1 send neighbor_donorface to zone3 to set inner donor

zone1 recv neighbor_donorface' from zone2 to set inner donor
zone1 recv neighbor_donorface' from zone3 to set inner donor

zone2 send neighbor_donorface to zone0 to set inner donor
zone2 send neighbor_donorface to zone1 to set inner donor

zone2 recv neighbor_donorface' from zone0 to set inner donor
zone2 recv neighbor_donorface' from zone1 to set inner donor

zone3 send neighbor_donorface  to   zone1 to set inner donor
zone3 recv neighbor_donorface' from zone1 to set inner donor
------------------------------------------------------------

for ( int iZone = 0; iZone < LocalZone::nZones; ++ iZone )
{
    Interface * interface = Global::interfaces[ iZone ];
	int zone = LocalZone::global_zoneids[ iZone ];

    std::vector<int> &neighbor_donor_zones = interface->neighbor_donor_zones;
    int ndonor_zones = neighbor_donor_zones.size();

    std::vector<std::vector<int>> & neighbor_donorfaces = interface->neighbor_donorfaces;

    for ( int iNei = 0; iNei < ndonor_zones; ++ iNei )
    {
        int donorzone = neighbor_donor_zones[ iNei ];
        std::vector<int> & neighbor_donorface = neighbor_donorfaces[ iNei ];
		if ( donorzone > zone )
		{
		    Send(donorzone, neighbor_donorface );
		}

        Interface * interface = Global::interfaces[ donorzone ];
        interface->SendGeom( iZone, neighbor_donorface );
    }
}
			 
```

GatherField
```cpp
0 2 1 3
zoneids: 0 2 1 3
ZoneState::pids: 0 1 2 3
ZoneState::g2lzoneids 0 0 0 0

for ( int iZone = 0; iZone < ZoneState::nZones; ++ iZone )
{
    int zoneid = this->zoneids[ iZone ];
    if ( Parallel::pid == ZoneState::pids[ zoneid ] )
    {
        int local_zoneid = ZoneState::g2lzoneids[ zoneid ];
        Grid * grid = Global::grids[ local_zoneid ];
        Field * field = Global::fields[ local_zoneid ];
    }
}

proc 0

iZone = 0;
int zoneid = this->zoneids[ iZone ] = 0;
ZoneState::pids[ zoneid ] = 0;
Parallel::pid = 0;
if ( Parallel::pid == ZoneState::pids[ zoneid ] )
{
    int local_zoneid = ZoneState::g2lzoneids[ zoneid ];
    Grid * grid = Global::grids[ local_zoneid ];
    Field * field = Global::fields[ local_zoneid ];
}

proc 1

iZone = 0;
int zoneid = this->zoneids[ iZone ] = 0;
ZoneState::pids[ zoneid ] = 0;
Parallel::pid = 1;
if ( Parallel::pid == ZoneState::pids[ zoneid ] )
{
    int local_zoneid = ZoneState::g2lzoneids[ zoneid ];
    Grid * grid = Global::grids[ local_zoneid ];
    Field * field = Global::fields[ local_zoneid ];
}

proc 2

iZone = 0;
int zoneid = this->zoneids[ iZone ] = 0;
ZoneState::pids[ zoneid ] = 0;
Parallel::pid = 2;
if ( Parallel::pid == ZoneState::pids[ zoneid ] )
{
    int local_zoneid = ZoneState::g2lzoneids[ zoneid ];
    Grid * grid = Global::grids[ local_zoneid ];
    Field * field = Global::fields[ local_zoneid ];
}

proc 3

iZone = 0;
int zoneid = this->zoneids[ iZone ] = 0;
ZoneState::pids[ zoneid ] = 0;
Parallel::pid = 3;
if ( Parallel::pid == ZoneState::pids[ zoneid ] )
{
    int local_zoneid = ZoneState::g2lzoneids[ zoneid ];
    Grid * grid = Global::grids[ local_zoneid ];
    Field * field = Global::fields[ local_zoneid ];
}

proc 0

zoneids: 0 2 1 3

iZone = 1;
int zoneid = this->zoneids[ iZone ] = 2;
ZoneState::pids[ zoneid ] = 2;
Parallel::pid = 0;
if ( Parallel::pid == ZoneState::pids[ zoneid ] ) 

proc 1

zoneids: 0 2 1 3

iZone = 1;
int zoneid = this->zoneids[ iZone ] = 2;
ZoneState::pids[ zoneid ] = 2;
Parallel::pid = 1;
if ( Parallel::pid == ZoneState::pids[ zoneid ] ) 

proc 2

zoneids: 0 2 1 3

iZone = 1;
int zoneid = this->zoneids[ iZone ] = 2;
ZoneState::pids[ zoneid ] = 2;
Parallel::pid = 2;
if ( Parallel::pid == ZoneState::pids[ zoneid ] )
{
    int local_zoneid = ZoneState::g2lzoneids[ zoneid ];
    Grid * grid = Global::grids[ local_zoneid ];
    Field * field = Global::fields[ local_zoneid ];
}


```
# Example

## string

```cmake
set(str "hello")
set(Item_${str} "world")

message(STATUS "str=${str}")
message(STATUS "Item_hello=${Item_hello}")
message(STATUS "Item_${str}=${Item_${str}}")
```

results:
```
-- str=hello
-- Item_hello=world
-- Item_hello=world
```

## list

```cmake
set(my_list "apple" "banana" "cherry")
message("My list contains: ${my_list}")
```
results:
```
My list contains: apple;banana;cherry
```

```cmake
foreach(item ${my_list})
  message("Item: ${item}")
endforeach()
```

results:
```
Item: apple
Item: banana
Item: cherry
```

## foreach

```cmake
foreach(<loop_var> <items>)
  <commands>
endforeach()
```

example 1
```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

set(my_list "apple" "banana" "cherry")
message("My list contains: ${my_list}")

foreach(item ${my_list})
  set(Item_${item} ${item}_world)
  message("Item: ${item},Item_${item}=${Item_${item}}")
endforeach()
```

results:
```
My list contains: apple;banana;cherry
Item: apple,Item_apple=apple_world
Item: banana,Item_banana=banana_world
Item: cherry,Item_cherry=cherry_world
```

example 2
```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

set( options "MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL" )
message("options contains: ${options}")

foreach(item ${options})
  message("Item: ${item}")
endforeach()
```

results:
```
options contains: MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL
Item: MERGE
Item: QUIET
Item: REPRODUCIBLE
Item: STATIC
Item: SHARED
Item: MODULE
Item: INTERFACE
Item: EXCLUDE_FROM_ALL
```

example 3
```cmake
foreach( item a b)
  message( STATUS "item=${item}" )
endforeach()
```

results:
```
-- item=a
-- item=b
```

## nested foreach
```
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

set( myNames "MYNAME;MYname;myname" )
message("myNames contains: ${myNames}")

set( options "MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL" )
message("options contains: ${options}")

foreach(myName ${myNames})
  message("myName: ${myName}")
  foreach(item ${options})
    message("myName=:${myName} Item: ${item} nameItem=${myName}_${item}")
  endforeach()  
endforeach()
```

results:
```
myNames contains: MYNAME;MYname;myname
options contains: MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL
myName: MYNAME
myName=:MYNAME Item: MERGE nameItem=MYNAME_MERGE
myName=:MYNAME Item: QUIET nameItem=MYNAME_QUIET
myName=:MYNAME Item: REPRODUCIBLE nameItem=MYNAME_REPRODUCIBLE
myName=:MYNAME Item: STATIC nameItem=MYNAME_STATIC
myName=:MYNAME Item: SHARED nameItem=MYNAME_SHARED
myName=:MYNAME Item: MODULE nameItem=MYNAME_MODULE
myName=:MYNAME Item: INTERFACE nameItem=MYNAME_INTERFACE
myName=:MYNAME Item: EXCLUDE_FROM_ALL nameItem=MYNAME_EXCLUDE_FROM_ALL
myName: MYname
myName=:MYname Item: MERGE nameItem=MYname_MERGE
myName=:MYname Item: QUIET nameItem=MYname_QUIET
myName=:MYname Item: REPRODUCIBLE nameItem=MYname_REPRODUCIBLE
myName=:MYname Item: STATIC nameItem=MYname_STATIC
myName=:MYname Item: SHARED nameItem=MYname_SHARED
myName=:MYname Item: MODULE nameItem=MYname_MODULE
myName=:MYname Item: INTERFACE nameItem=MYname_INTERFACE
myName=:MYname Item: EXCLUDE_FROM_ALL nameItem=MYname_EXCLUDE_FROM_ALL
myName: myname
myName=:myname Item: MERGE nameItem=myname_MERGE
myName=:myname Item: QUIET nameItem=myname_QUIET
myName=:myname Item: REPRODUCIBLE nameItem=myname_REPRODUCIBLE
myName=:myname Item: STATIC nameItem=myname_STATIC
myName=:myname Item: SHARED nameItem=myname_SHARED
myName=:myname Item: MODULE nameItem=myname_MODULE
myName=:myname Item: INTERFACE nameItem=myname_INTERFACE
myName=:myname Item: EXCLUDE_FROM_ALL nameItem=myname_EXCLUDE_FROM_ALL
```


## IMPORTED_TARGETS Info

```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

find_package (Python COMPONENTS NumPy)
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
my_import_targets=Python::Interpreter;Python::Module;Python::NumPy
```

## GenerateExportHeader

-  [GenerateExportHeader](https://cmake.org/cmake/help/latest/module/GenerateExportHeader.html#module:GenerateExportHeader).

## find_package_handle_standard_args

```cmake
include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(LibArchive
  REQUIRED_VARS LibArchive_LIBRARY LibArchive_INCLUDE_DIR
  VERSION_VAR LibArchive_VERSION)
```  

## find_library code segment example

```cmake
find_library(MPI_mpi_LIBRARY
  NAMES mpi
  HINTS ${MPI_MPICH_PREFIX_PATHS})
mark_as_advanced(MPI_mpi_LIBRARY)
......
elseif(LANG STREQUAL "Fortran")
  find_library(MPI_fmpich2_LIBRARY
    NAMES fmpich2
    HINTS ${MPI_MPICH_PREFIX_PATHS})
  find_library(MPI_fmpich2s_LIBRARY
    NAMES fmpich2s
    HINTS ${MPI_MPICH_PREFIX_PATHS})
  find_library(MPI_fmpich2g_LIBRARY
    NAMES fmpich2g
    HINTS ${MPI_MPICH_PREFIX_PATHS})
  mark_as_advanced(MPI_fmpich2_LIBRARY MPI_fmpich2s_LIBRARY MPI_fmpich2g_LIBRARY)
  list(APPEND MPI_MPICH_LIB_NAMES "fmpich2")
endif()
```  

simple examples
```cmake
cmake_minimum_required(VERSION 3.29)
project(testprj)

set ( PRJ_COMPILE_FEATURES )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

add_executable( ${PROJECT_NAME} )

target_sources( ${PROJECT_NAME}
    PRIVATE
        main.cpp
)

target_compile_features ( ${PROJECT_NAME} 
    PRIVATE 
    ${PRJ_COMPILE_FEATURES}
)

target_compile_definitions ( ${PROJECT_NAME}
    PRIVATE
       ${PRJ_COMPILE_DEFINITIONS} 
)
```

## cmake_path example

```cmake
set(path "c:/a.txt")
cmake_path(GET path FILENAME myfilename)

message( STATUS "myfilename=${myfilename}" )
```

results:
```
-- myfilename=a.txt
```
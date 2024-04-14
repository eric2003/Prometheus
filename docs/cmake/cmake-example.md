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

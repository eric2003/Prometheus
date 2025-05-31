# libLAS

## Link

- [SQLite3](https://github.com/madler/zlib).


```
STATUS NOTICE: As of 2018, libLAS has been replaced by the PDAL and it is in hibernation mode with very sporadic maintenance.
libLAS does not provide support for LAS or LAZ 1.4, which PDAL does.
If you are interested in submitting a fix or an improvement, please consider becoming a contributor helping with releasing any new changes.
```

```
CMAKE_INSTALL_PREFIX c:/dev/libLAS
GEOTIFF_INCLUDE_DIR c:/dev/GeoTIFF/include
GEOTIFF_LIBRARY c:/dev/GeoTIFF/lib/geotiff_i.lib
```

```
cmake .. `
      -D CMAKE_INSTALL_PREFIX="c:/dev/libLAS" `
      -D GEOTIFF_INCLUDE_DIR="c:/dev/GeoTIFF/include" `
      -D GEOTIFF_LIBRARY="c:/dev/GeoTIFF/lib/geotiff_i.lib"
cmake --build . --target make_osgeo4w_directories
cmake --build . --target copy
cmake --build . --target tar
```

```
boost::placeholders::_1
```

```
3>libboost_thread-vc143-mt-x64-1_88.lib(thread.obj) : 
error LNK2005: "public: __cdecl boost::detail::win32::handle_manager::~handle_manager(void)" 
(??1handle_manager@win32@detail@boost@@QEAA@XZ) 
已经在 boost_thread-vc143-mt-x64-1_88.lib(boost_thread-vc143-mt-x64-1_88.dll) 中定义
```

```
tar_directories(${OSGEO4W_DIR} ${libLAS_SOURCE_DIR}/${OSGEO4W_PACKAGES}/liblas-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 "bin/;etc/")
tar_directories(${OSGEO4W_DIR} ${libLAS_SOURCE_DIR}/${OSGEO4W_PACKAGES}/liblas-python-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 apps)
tar_directories(${OSGEO4W_DIR}/devel ${libLAS_SOURCE_DIR}/${OSGEO4W_PACKAGES}/liblas-devel-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 "lib/;include")

tar_directories source=osgeo4w
tar_directories destination=D:/work/libLAS_work/libLAS-1.8.1/osgeo4w/packages/liblas-1.8.1-1.tar.bz2
tar_directories base_paths=bin/;etc/

tar_directories source=osgeo4w
tar_directories destination=D:/work/libLAS_work/libLAS-1.8.1/osgeo4w/packages/liblas-python-1.8.1-1.tar.bz2
tar_directories base_paths=apps

tar_directories source=osgeo4w/devel
tar_directories destination=D:/work/libLAS_work/libLAS-1.8.1/osgeo4w/packages/liblas-devel-1.8.1-1.tar.bz2
tar_directories base_paths=lib/;include
```

```
get_filename_component(absolute_path "${relative_path}" ABSOLUTE BASE_DIR ${CMAKE_CURRENT_SOURCE_DIR})
```

```
EXEC : CMake error : Cannot open output file "D:/work/libLAS_work/libLAS-1.8.1/osgeo4w/packages/liblas-1.8.1-1.tar.bz2": No such file or directory
7>EXEC : CMake error : Problem creating tar: D:/work/libLAS_work/libLAS-1.8.1/osgeo4w/packages/liblas-1.8.1-1.tar.bz2
```


```
6>Error copying file "python/liblas/__init__.py" to "osgeo4w/apps/python25/lib/site-packages/liblas/".
"C:\Program Files\CMake\bin\cmake.exe" -E copy_directory D:/work/libLAS_work/libLAS-1.8.1/include/liblas/ osgeo4w/devel/include/liblas/
```


```
OSGEO4W_DIRECTORIES=osgeo4w;
osgeo4w/etc;
osgeo4w/etc/ini;
osgeo4w/etc/postinstall;
osgeo4w/lib;
osgeo4w/lib/bin;
osgeo4w/devel;
osgeo4w/devel/include;
osgeo4w/devel/include/liblas;
osgeo4w/devel/lib;
osgeo4w/apps/python25/lib/site-packages/liblas;
osgeo4w/devel/bin;
osgeo4w/packages;
osgeo4w/bin;
```


```
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasinfo.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/lasinfo.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasinfo.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/lasinfo.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasinfo-old.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/lasinfo-old.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasinfo-old.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/lasinfo-old.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2las.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/las2las.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2las.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/las2las.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2las-old.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/las2las-old.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2las-old.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/las2las-old.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2ogr.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/las2ogr.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2ogr.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/las2ogr.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2oci.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/las2oci.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2oci.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/las2oci.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2txt.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/las2txt.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2txt.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/las2txt.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2txt-old.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/las2txt-old.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//las2txt-old.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/las2txt-old.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasblock.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/lasblock.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasblock.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/lasblock.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasmerge.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/lasmerge.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//lasmerge.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/lasmerge.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//txt2las.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/txt2las.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//txt2las.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/txt2las.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//ts2las.exe
-- copy_files 000 DESTINATION=osgeo4w/bin/ts2las.exe
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//ts2las.exe
-- copy_files 111 DESTINATION=osgeo4w/bin/ts2las.exe
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas_c.dll
-- copy_files 000 DESTINATION=osgeo4w/bin/
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas_c.dll
-- copy_files 111 DESTINATION=osgeo4w/bin/
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas.dll
-- copy_files 000 DESTINATION=osgeo4w/bin/
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas.dll
-- copy_files 111 DESTINATION=osgeo4w/bin/
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/liblas-osgeo4w-start.bat.tmpl
-- copy_files 000 DESTINATION=osgeo4w/bin/liblas.bat.tmpl
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/liblas-osgeo4w-start.bat.tmpl
-- copy_files 111 DESTINATION=osgeo4w/bin/liblas.bat.tmpl
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/liblas-osgeo4w-init.bat
-- copy_files 000 DESTINATION=osgeo4w/etc/ini/liblas.bat
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/liblas-osgeo4w-init.bat
-- copy_files 111 DESTINATION=osgeo4w/etc/ini/liblas.bat
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/liblas-osgeo4w-postinstall.bat
-- copy_files 000 DESTINATION=osgeo4w/etc/postinstall/liblas.bat
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/liblas-osgeo4w-postinstall.bat
-- copy_files 111 DESTINATION=osgeo4w/etc/postinstall/liblas.bat
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas.lib
-- copy_files 000 DESTINATION=osgeo4w/devel/lib/
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas.lib
-- copy_files 111 DESTINATION=osgeo4w/devel/lib/
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas_c.lib
-- copy_files 000 DESTINATION=osgeo4w/devel/lib/
-- copy_files COPY_FILES=
-- copy_files 111 GLOBPAT=D:/work/libLAS_work/libLAS-1.8.1-DEBUG/build/bin//liblas_c.lib
-- copy_files 111 DESTINATION=osgeo4w/devel/lib/
-- copy_files CMAKE_CURRENT_SOURCE_DIR=D:/work/libLAS_work/libLAS-1.8.1-DEBUG
-- copy_files 000 GLOBPAT=./python/liblas/*.py
-- copy_files 000 DESTINATION=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files COPY_FILES=python/liblas/__init__.py;python/liblas/color.py;python/liblas/core.py;python/liblas/file.py;python/liblas/guid.py;python/liblas/header.py;python/liblas/point.py;python/liblas/schema.py;python/liblas/srs.py;python/liblas/vlr.py
-- copy_files 111 GLOBPAT=./python/liblas/*.py
-- copy_files 111 DESTINATION=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/__init__.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/color.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/core.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/file.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/guid.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/header.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/point.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/schema.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/srs.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/vlr.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
```


```
-- haha 1
-- copy_files foreach SRC=python/liblas/__init__.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/color.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/core.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/file.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/guid.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/header.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/point.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/schema.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/srs.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
-- copy_files foreach SRC=python/liblas/vlr.py
-- copy_files foreach DST=osgeo4w/apps/python25/lib/site-packages/liblas/
```

```
Error copying directory from "./include/liblas/" to "osgeo4w/devel/include/liblas/".
```

## BuildOSGeo4W.cmake
```cmake
###############################################################################
#
# OSGeo4W packaging
#
###############################################################################


set(OSGEO4W_DIR osgeo4w)
set(OSGEO4W_LIB_DIR ${OSGEO4W_DIR}/lib)
set(OSGEO4W_ETC_DIR ${OSGEO4W_DIR}/etc)
set(OSGEO4W_ETC_INI_DIR ${OSGEO4W_DIR}/etc/ini)
set(OSGEO4W_ETC_POSTINSTALL_DIR ${OSGEO4W_DIR}/etc/postinstall)
set(OSGEO4W_LIB_BIN_DIR ${OSGEO4W_DIR}/lib/bin)
set(OSGEO4W_BIN_DIR ${OSGEO4W_DIR}/bin)
set(OSGEO4W_DEVEL_DIR ${OSGEO4W_DIR}/devel)
set(OSGEO4W_DEVEL_INCLUDE_DIR ${OSGEO4W_DEVEL_DIR}/include)
set(OSGEO4W_DEVEL_INCLUDE_LIBLAS_DIR ${OSGEO4W_DEVEL_INCLUDE_DIR}/liblas)
set(OSGEO4W_DEVEL_LIB_DIR ${OSGEO4W_DEVEL_DIR}/lib)
set(OSGEO4W_DEVEL_BIN_DIR ${OSGEO4W_DEVEL_DIR}/bin)

set(OSGEO4W_PYTHON_DIR ${OSGEO4W_DIR}/apps/python25/lib/site-packages/liblas)
set(OSGEO4W_PACKAGES ${OSGEO4W_DIR}/packages)


set(OSGEO4W_DIRECTORIES
    ${OSGEO4W_DIR}
    ${OSGEO4W_ETC_DIR}
    ${OSGEO4W_ETC_INI_DIR}
    ${OSGEO4W_ETC_POSTINSTALL_DIR}
    ${OSGEO4W_LIB_DIR}
    ${OSGEO4W_LIB_BIN_DIR}
    ${OSGEO4W_DEVEL_DIR}
    ${OSGEO4W_DEVEL_INCLUDE_DIR}
    ${OSGEO4W_DEVEL_INCLUDE_LIBLAS_DIR}
    ${OSGEO4W_DEVEL_LIB_DIR}
    ${OSGEO4W_PYTHON_DIR}
    ${OSGEO4W_DEVEL_BIN_DIR}
    ${OSGEO4W_PACKAGES}
    ${OSGEO4W_BIN_DIR})



add_custom_target(make_osgeo4w_directories
  COMMAND ${CMAKE_COMMAND} -E echo "Building OSGeo4W install directories")

foreach(utility ${LIBLAS_UTILITIES})
    add_dependencies(  make_osgeo4w_directories  ${utility} )
endforeach()


macro (make_directories)
    add_custom_command(
        TARGET make_osgeo4w_directories
        COMMAND ${CMAKE_COMMAND} -E  remove_directory  ${libLAS_SOURCE_DIR}/osgeo4w DEPENDS osgeo4w
    )
    foreach(directory ${OSGEO4W_DIRECTORIES})

    STRING(REGEX REPLACE "/" "_" target "${directory}" )

    add_custom_command(
        TARGET make_osgeo4w_directories
        COMMAND ${CMAKE_COMMAND} -E make_directory ${directory}
    )

    endforeach()

endmacro(make_directories)



add_custom_target(copy ALL COMMENT "Copying OSGeo4W files")
add_dependencies( copy make_osgeo4w_directories  )


macro(copy_files GLOBPAT DESTINATION  )

    file(GLOB_RECURSE COPY_FILES
         RELATIVE ${CMAKE_CURRENT_SOURCE_DIR}
        ${GLOBPAT})
    foreach(FILENAME ${COPY_FILES})
        set(SRC "${FILENAME}")
        set(DST "${DESTINATION}")
        add_custom_command(
            TARGET copy
            #COMMAND ${CMAKE_COMMAND} -E copy ${SRC} ${DST}
            COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/${SRC} ${DST}
        )
    endforeach(FILENAME)
endmacro(copy_files)


macro(copy_directory SOURCE DESTINATION  )
        add_custom_command(
            TARGET copy
            COMMAND ${CMAKE_COMMAND} -E copy_directory ${SOURCE} ${DESTINATION}
        )
endmacro(copy_directory)


add_custom_target(tar
  COMMAND ${CMAKE_COMMAND} -E echo "Tarring OSGeo4W install")
add_dependencies( tar copy  )

macro (tar_directories source destination base_paths)    
    message(STATUS "tar_directories source=${source}")
    message(STATUS "tar_directories destination=${destination}")
    message(STATUS "tar_directories base_paths=${base_paths}")
    add_custom_command(
        TARGET tar
        COMMAND ${CMAKE_COMMAND} -E echo "source={source},destination=${destination}"
        COMMAND ${CMAKE_COMMAND} -E chdir ${source} cmake -E tar cjf  ${destination} ${base_paths}
    )
endmacro(tar_directories)

make_directories()
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/lasinfo.exe ${OSGEO4W_BIN_DIR}/lasinfo.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/lasinfo-old.exe ${OSGEO4W_BIN_DIR}/lasinfo-old.exe   )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/las2las.exe ${OSGEO4W_BIN_DIR}/las2las.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/las2las-old.exe ${OSGEO4W_BIN_DIR}/las2las-old.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/las2ogr.exe ${OSGEO4W_BIN_DIR}/las2ogr.exe   )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/las2oci.exe ${OSGEO4W_BIN_DIR}/las2oci.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/las2txt.exe ${OSGEO4W_BIN_DIR}/las2txt.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/las2txt-old.exe ${OSGEO4W_BIN_DIR}/las2txt-old.exe   )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/lasblock.exe ${OSGEO4W_BIN_DIR}/lasblock.exe   )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/lasmerge.exe ${OSGEO4W_BIN_DIR}/lasmerge.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/txt2las.exe ${OSGEO4W_BIN_DIR}/txt2las.exe  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/ts2las.exe ${OSGEO4W_BIN_DIR}/ts2las.exe  )



copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/liblas_c.dll ${OSGEO4W_BIN_DIR}/  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/liblas.dll ${OSGEO4W_BIN_DIR}/  )

copy_files(${libLAS_SOURCE_DIR}/liblas-osgeo4w-start.bat.tmpl ${OSGEO4W_BIN_DIR}/liblas.bat.tmpl )
copy_files(${libLAS_SOURCE_DIR}/liblas-osgeo4w-init.bat ${OSGEO4W_ETC_INI_DIR}/liblas.bat )
copy_files(${libLAS_SOURCE_DIR}/liblas-osgeo4w-postinstall.bat ${OSGEO4W_ETC_POSTINSTALL_DIR}/liblas.bat )

copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/liblas.lib ${OSGEO4W_DEVEL_LIB_DIR}/  )
copy_files(${LIBLAS_BUILD_OUTPUT_DIRECTORY}/liblas_c.lib ${OSGEO4W_DEVEL_LIB_DIR}/  )


#copy_directory(./include/liblas/ ${OSGEO4W_DEVEL_INCLUDE_LIBLAS_DIR}/  )
#copy_files(./python/liblas/*.py ${OSGEO4W_PYTHON_DIR}/  )
copy_directory(${CMAKE_CURRENT_SOURCE_DIR}/include/liblas/ ${OSGEO4W_DEVEL_INCLUDE_LIBLAS_DIR}/  )
copy_files(${CMAKE_CURRENT_SOURCE_DIR}/python/liblas/*.py ${OSGEO4W_PYTHON_DIR}/  )

#tar_directories(${OSGEO4W_DIR} ${libLAS_SOURCE_DIR}/${OSGEO4W_PACKAGES}/liblas-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 "bin/;etc/")
#tar_directories(${OSGEO4W_DIR} ${libLAS_SOURCE_DIR}/${OSGEO4W_PACKAGES}/liblas-python-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 apps)
#tar_directories(${OSGEO4W_DIR}/devel ${libLAS_SOURCE_DIR}/${OSGEO4W_PACKAGES}/liblas-devel-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 "lib/;include")

tar_directories(${OSGEO4W_DIR} ${CMAKE_BINARY_DIR}/${OSGEO4W_PACKAGES}/liblas-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 "bin/;etc/")
tar_directories(${OSGEO4W_DIR} ${CMAKE_BINARY_DIR}/${OSGEO4W_PACKAGES}/liblas-python-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 apps)
tar_directories(${OSGEO4W_DIR}/devel ${CMAKE_BINARY_DIR}/${OSGEO4W_PACKAGES}/liblas-devel-${LIBLAS_VERSION_MAJOR}.${LIBLAS_VERSION_MINOR}.${LIBLAS_VERSION_PATCH}-${OSGEO4W_UPSTREAM_RELEASE}.tar.bz2 "lib/;include")

add_custom_target(osgeo4w
    COMMAND ${CMAKE_COMMAND} -E echo "Making OSGeo4W build")

add_dependencies( osgeo4w tar   )
```
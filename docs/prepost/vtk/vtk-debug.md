# VTK DEBUG

## VTK_BUILD_TESTING

-  [VTK File Formats](https://docs.vtk.org/en/latest/design_documents/VTKFileFormats.html).

```cmake
cmake_minimum_required ( VERSION 4.0.2 )

project ( testprj )

#set ( VTK_DIR "c:/dev/VTK_debug/lib/cmake/vtk-9.4/" )
set ( VTK_DIR "c:/dev/VTK/lib/cmake/vtk-9.4/" )

find_package(VTK REQUIRED)

set ( PRJ_SRC_LIST )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )

message ( STATUS "CMake root directory: ${CMAKE_ROOT}" )

find_package ( VTK )

if ( VTK_FOUND )
	message ( STATUS " VTK_FOUND =  ${VTK_FOUND}" )
	message ( STATUS " VTK_MAJOR_VERSION = ${VTK_MAJOR_VERSION}" )
	message ( STATUS " VTK_MINOR_VERSION = ${VTK_MINOR_VERSION}" )
	message ( STATUS " VTK_BUILD_VERSION = ${VTK_BUILD_VERSION}" )
	message ( STATUS " VTK_LIBRARY_DIRS  = ${VTK_LIBRARY_DIRS}" )
	message ( STATUS " VTK_LIBRARIES  = ${VTK_LIBRARIES}" )
endif()

list ( APPEND PRJ_LIBRARIES ${VTK_LIBRARIES} )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

add_executable( ${PROJECT_NAME} )

target_sources( ${PROJECT_NAME}
    PRIVATE
        main.cpp
)

target_include_directories ( ${PROJECT_NAME}
	PRIVATE 
        ${PRJ_INCLUDE_DIRS}
)

target_link_libraries ( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_LIBRARIES}
)

target_compile_features ( ${PROJECT_NAME} 
    PRIVATE 
    ${PRJ_COMPILE_FEATURES}
)

# vtk_module_autoinit is needed
vtk_module_autoinit(
    TARGETS ${PROJECT_NAME}
    MODULES ${VTK_LIBRARIES}
)
```

```cpp
#include <vtkNew.h>
#include <vtkNamedColors.h>
#include <iostream>

int main(int, char*[])
{
    vtkNew<vtkNamedColors> colors;
    // 检查颜色表是否包含 "Red"
    if (colors->ColorExists("Red"))
    {
        std::cout << "Color 'Red' exists\n";
        vtkColor3d co = colors->GetColor3d("Red");
        int s = co.GetSize();
        double* t = co.GetData();
        std::cout << "size = " << s << "\n";
        std::cout << "color = " << t[0] << " " << t[1] << " " << t[2] << "\n";
    }
    else
    {
        std::cout << "Color 'Red' not found\n";
    }
    return 0;
}
```


```cpp
#include <vtkNew.h>
#include <vtkNamedColors.h>
#include <iostream>

int main(int, char*[])
{
    vtkNew<vtkNamedColors> colors;
    // 显式添加颜色以测试初始化
    colors->AddColor("Red", vtkColor4ub(255, 0, 0, 255));
    if (colors->ColorExists("Red"))
    {
        std::cout << "Color 'Red' exists\n";
        vtkColor3d co = colors->GetColor3d("Red");
        int s = co.GetSize();
        double* t = co.GetData();
        std::cout << "size = " << s << "\n";
        std::cout << "color = " << t[0] << " " << t[1] << " " << t[2] << "\n";
    }
    else
    {
        std::cout << "Color 'Red' not found\n";
    }
    return 0;
}
```

VTK-RELEASE
```
VTK::DICOM
VTK::zlib
VTK::MomentInvariants
VTK::eigen
VTK::kissfft
VTK::WrappingTools
VTK::ViewsContext2D
VTK::loguru
VTK::TestingRendering
VTK::TestingCore
VTK::vtksys
VTK::ViewsInfovis
VTK::CommonColor
VTK::ViewsCore
VTK::RenderingLabel
VTK::octree
VTK::RenderingLOD
VTK::RenderingLICOpenGL2
VTK::glad
VTK::RenderingImage
VTK::RenderingContextOpenGL2
VTK::RenderingCellGrid
VTK::fmt
VTK::nlohmannjson
VTK::RenderingVolumeOpenGL2
VTK::IOVeraOut
VTK::hdf5
VTK::IOTecplotTable
VTK::utf8
VTK::IOSegY
VTK::IOParallelXML
VTK::IOParallel
VTK::jsoncpp
VTK::IOPLY
VTK::IOOggTheora
VTK::theora
VTK::ogg
VTK::IONetCDF
VTK::netcdf
VTK::IOMotionFX
VTK::pegtl
VTK::IOMINC
VTK::IOLSDyna
VTK::IOImport
VTK::IOIOSS
VTK::ioss
VTK::cgns
VTK::exodusII
VTK::IOHDF
VTK::IOFLUENTCFF
VTK::IOVideo
VTK::IOMovie
VTK::IOFDS
VTK::IOInfovis
VTK::libxml2
VTK::IOExportPDF
VTK::libharu
VTK::png
VTK::IOExportGL2PS
VTK::RenderingGL2PSOpenGL2
VTK::gl2ps
VTK::IOExodus
VTK::IOEngys
VTK::IOEnSight
VTK::IOERF
VTK::IOCityGML
VTK::pugixml
VTK::IOChemistry
VTK::IOCesium3DTiles
VTK::libproj
VTK::IOCONVERGECFD
VTK::IOHDFTools
VTK::IOCGNSReader
VTK::IOAsynchronous
VTK::IOExport
VTK::RenderingVtkJS
VTK::IOGeometry
VTK::RenderingSceneGraph
VTK::IOAMR
VTK::InteractionImage
VTK::InfovisLayout
VTK::ImagingStencil
VTK::ImagingStatistics
VTK::ImagingMorphological
VTK::ImagingMath
VTK::ImagingFourier
VTK::IOSQL
VTK::sqlite
VTK::InteractionWidgets
VTK::RenderingVolume
VTK::RenderingAnnotation
VTK::InteractionStyle
VTK::ImagingHybrid
VTK::ImagingColor
VTK::GeovisCore
VTK::FiltersTopology
VTK::FiltersTensor
VTK::FiltersSelection
VTK::FiltersSMP
VTK::FiltersProgrammable
VTK::FiltersPoints
VTK::FiltersParallelImaging
VTK::FiltersTemporal
VTK::FiltersImaging
VTK::ImagingGeneral
VTK::FiltersPreview
VTK::FiltersGeneric
VTK::FiltersFlowPaths
VTK::FiltersAMR
VTK::FiltersParallel
VTK::FiltersTexture
VTK::FiltersModeling
VTK::DomainsChemistryOpenGL2
VTK::RenderingOpenGL2
VTK::RenderingHyperTreeGrid
VTK::RenderingUI
VTK::FiltersHybrid
VTK::DomainsChemistry
VTK::ChartsCore
VTK::InfovisCore
VTK::FiltersExtraction
VTK::ParallelDIY
VTK::diy2
VTK::IOXML
VTK::IOXMLParser
VTK::expat
VTK::ParallelCore
VTK::IOLegacy
VTK::IOCellGrid
VTK::FiltersCellGrid
VTK::token
VTK::IOCore
VTK::lz4
VTK::lzma
VTK::fast_float
VTK::FiltersStatistics
VTK::FiltersHyperTree
VTK::ImagingSources
VTK::IOImage
VTK::DICOMParser
VTK::jpeg
VTK::metaio
VTK::tiff
VTK::RenderingContext2D
VTK::RenderingFreeType
VTK::freetype
VTK::kwl
VTK::RenderingCore
VTK::FiltersSources
VTK::ImagingCore
VTK::FiltersGeneral
VTK::FiltersVerdict
VTK::verdict
VTK::FiltersGeometry
VTK::CommonComputationalGeometry
VTK::FiltersCore
VTK::FiltersReduction
VTK::CommonExecutionModel
VTK::CommonDataModel
VTK::CommonSystem
VTK::CommonMisc
VTK::exprtk
VTK::CommonTransforms
VTK::CommonMath
VTK::CommonCore
VTK::doubleconversion
```

VTK-DEBUG
```
VTK::DICOM
VTK::zlib
VTK::MomentInvariants
VTK::eigen
VTK::kissfft
VTK::WrappingTools
VTK::ViewsContext2D
VTK::loguru
VTK::TestingRendering
VTK::TestingCore
VTK::vtksys
VTK::ViewsInfovis
VTK::CommonColor
VTK::ViewsCore
VTK::RenderingLabel
VTK::octree
VTK::RenderingLOD
VTK::RenderingLICOpenGL2
VTK::glad
VTK::RenderingImage
VTK::RenderingContextOpenGL2
VTK::RenderingCellGrid
VTK::fmt
VTK::nlohmannjson
VTK::RenderingVolumeOpenGL2
VTK::IOVeraOut
VTK::hdf5
VTK::IOTecplotTable
VTK::utf8
VTK::IOSegY
VTK::IOParallelXML
VTK::IOParallel
VTK::jsoncpp
VTK::IOPLY
VTK::IOOggTheora
VTK::theora
VTK::ogg
VTK::IONetCDF
VTK::netcdf
VTK::IOMotionFX
VTK::pegtl
VTK::IOMINC
VTK::IOLSDyna
VTK::IOImport
VTK::IOIOSS
VTK::ioss
VTK::cgns
VTK::exodusII
VTK::IOHDF
VTK::IOFLUENTCFF
VTK::IOVideo
VTK::IOMovie
VTK::IOFDS
VTK::IOInfovis
VTK::libxml2
VTK::IOExportPDF
VTK::libharu
VTK::png
VTK::IOExportGL2PS
VTK::RenderingGL2PSOpenGL2
VTK::gl2ps
VTK::IOExodus
VTK::IOEngys
VTK::IOEnSight
VTK::IOERF
VTK::IOCityGML
VTK::pugixml
VTK::IOChemistry
VTK::IOCesium3DTiles
VTK::libproj
VTK::IOCONVERGECFD
VTK::IOHDFTools
VTK::IOCGNSReader
VTK::IOAsynchronous
VTK::IOExport
VTK::RenderingVtkJS
VTK::IOGeometry
VTK::RenderingSceneGraph
VTK::IOAMR
VTK::InteractionImage
VTK::InfovisLayout
VTK::ImagingStencil
VTK::ImagingStatistics
VTK::ImagingMorphological
VTK::ImagingMath
VTK::ImagingFourier
VTK::IOSQL
VTK::sqlite
VTK::InteractionWidgets
VTK::RenderingVolume
VTK::RenderingAnnotation
VTK::InteractionStyle
VTK::ImagingHybrid
VTK::ImagingColor
VTK::GeovisCore
VTK::FiltersTopology
VTK::FiltersTensor
VTK::FiltersSelection
VTK::FiltersSMP
VTK::FiltersProgrammable
VTK::FiltersPoints
VTK::FiltersParallelImaging
VTK::FiltersTemporal
VTK::FiltersImaging
VTK::ImagingGeneral
VTK::FiltersPreview
VTK::FiltersGeneric
VTK::FiltersFlowPaths
VTK::FiltersAMR
VTK::FiltersParallel
VTK::FiltersTexture
VTK::FiltersModeling
VTK::DomainsChemistryOpenGL2
VTK::RenderingOpenGL2
VTK::RenderingHyperTreeGrid
VTK::RenderingUI
VTK::FiltersHybrid
VTK::DomainsChemistry
VTK::ChartsCore
VTK::InfovisCore
VTK::FiltersExtraction
VTK::ParallelDIY
VTK::diy2
VTK::IOXML
VTK::IOXMLParser
VTK::expat
VTK::ParallelCore
VTK::IOLegacy
VTK::IOCellGrid
VTK::FiltersCellGrid
VTK::token
VTK::IOCore
VTK::lz4
VTK::lzma
VTK::fast_float
VTK::FiltersStatistics
VTK::FiltersHyperTree
VTK::ImagingSources
VTK::IOImage
VTK::DICOMParser
VTK::jpeg
VTK::metaio
VTK::tiff
VTK::RenderingContext2D
VTK::RenderingFreeType
VTK::freetype
VTK::kwl
VTK::RenderingCore
VTK::FiltersSources
VTK::ImagingCore
VTK::FiltersGeneral
VTK::FiltersVerdict
VTK::verdict
VTK::FiltersGeometry
VTK::CommonComputationalGeometry
VTK::FiltersCore
VTK::FiltersReduction
VTK::CommonExecutionModel
VTK::CommonDataModel
VTK::CommonSystem
VTK::CommonMisc
VTK::exprtk
VTK::CommonTransforms
VTK::CommonMath
VTK::CommonCore
VTK::doubleconversion
```

# VTK Examples

## VTK Examples

-  [VTK Examples](https://examples.vtk.org/).

## discourse

-  [VTK discourse](https://discourse.vtk.org/).

## Data

-  [vtk-data](https://github.com/pyvista/vtk-data/).
-  [dragon.ply](https://github.com/pyvista/vtk-data/blob/master/Data/dragon.ply).
-  [Visualizing rich datasets: the fire_ug.vtu example](https://docs.enthought.com/mayavi/mayavi/example_fire.html).
-  [Mayavi: 3D scientific data visualization and plotting in Python](https://docs.enthought.com/mayavi/mayavi/).
-  [mayavi-tutorial/slides/data/](https://github.com/prabhuramachandran/mayavi-tutorial/tree/master/slides/data).


## Important cases

```
Visualization\ColorSeriesPatches
Visualization\NamedColorPatches
```


## CMake

```
cmake ..
cmake --build . --parallel 4 --config Release
```

```
RELEASE库也需要对于RELEASE，不能使用DEBUG
DEBUG库也需要对于DEBUG，不能使用RELEASE
```


```
$env:PATH = "c:/local/Qt/6.9.0/msvc2022_64/bin;" + $env:PATH
```

or
```
c:\local\Qt\6.9.0\msvc2022_64\bin\windeployqt.exe .\Release
```

```
Search results:
[4 files and 0 directories found]
e:\dev\VTK\include\vtk-9.4\vtkRenderingFFMPEGOpenGL2Module.h
c:\dev\VTK\include\vtk-9.4\vtkIOFFMPEGModule.h
c:\dev\VTK\include\vtk-9.4\vtkFFMPEGVideoSource.h
c:\dev\VTK\include\vtk-9.4\vtkFFMPEGVideoSource.h
c:\dev\VTK\include\vtk-9.4\vtkFFMPEGWriter.h
```

```
D:\work\vtk_2024_work\ModernVTK\codes\examples\Video\MPEG2\01\MPEG2.cxx(2,10): error C1083: 无法打开包括文件: “vtkMPEG2Writer.h
```

## VTK LIB

```
--  VTK_LIBRARIES  = 
VTK::DICOM;
VTK::zlib;VTK::MomentInvariants;VTK::eigen;VTK::kissfft;VTK::WrappingTools;
VTK::ViewsContext2D;VTK::loguru;VTK::TestingRendering;VTK::TestingCore;
VTK::vtksys;VTK::ViewsInfovis;VTK::CommonColor;VTK::RenderingVolumeOpenGL2;
VTK::glew;VTK::opengl;VTK::RenderingLabel;VTK::octree;VTK::RenderingLOD;
VTK::RenderingLICOpenGL2;VTK::RenderingImage;VTK::RenderingContextOpenGL2;
VTK::RenderingCellGrid;VTK::IOVeraOut;VTK::hdf5;VTK::IOTecplotTable;
VTK::utf8;
VTK::IOSegY;VTK::IOParallelXML;VTK::IOParallel;VTK::jsoncpp;VTK::IOPLY;
VTK::IOOggTheora;VTK::theora;VTK::ogg;VTK::IONetCDF;VTK::netcdf;
VTK::libproj;
VTK::IOMotionFX;VTK::pegtl;VTK::IOMINC;VTK::IOLSDyna;VTK::IOInfovis;
VTK::libxml2;VTK::IOImport;VTK::IOIOSS;VTK::fmt;VTK::ioss;VTK::cgns;
VTK::exodusII;VTK::IOFLUENTCFF;VTK::IOVideo;VTK::IOMovie;
VTK::IOExportPDF;VTK::libharu;VTK::IOExportGL2PS;VTK::RenderingGL2PSOpenGL2;
VTK::gl2ps;VTK::png;VTK::IOExport;VTK::RenderingVtkJS;VTK::nlohmannjson;
VTK::RenderingSceneGraph;VTK::IOExodus;VTK::IOEnSight;VTK::IOCityGML;
VTK::pugixml;
VTK::IOChemistry;VTK::IOCesium3DTiles;VTK::IOGeometry;VTK::IOCellGrid;
VTK::IOCONVERGECFD;VTK::IOHDF;VTK::IOCGNSReader;VTK::IOAsynchronous;
VTK::IOAMR;VTK::InteractionImage;VTK::ImagingStencil;VTK::ImagingStatistics;
VTK::ImagingMorphological;VTK::ImagingMath;VTK::ImagingFourier;
VTK::IOSQL;VTK::sqlite;VTK::GeovisCore;VTK::InfovisLayout;VTK::ViewsCore;
VTK::InteractionWidgets;VTK::RenderingVolume;VTK::RenderingAnnotation;
VTK::ImagingHybrid;VTK::ImagingColor;VTK::InteractionStyle;
VTK::FiltersTopology;
VTK::FiltersTensor;VTK::FiltersSelection;VTK::FiltersSMP;
VTK::FiltersReduction;
VTK::FiltersProgrammable;VTK::FiltersPoints;VTK::FiltersParallelImaging;
VTK::FiltersImaging;VTK::ImagingGeneral;VTK::FiltersGeometryPreview;
VTK::FiltersGeneric;VTK::FiltersFlowPaths;VTK::FiltersCellGrid;
VTK::FiltersAMR;
VTK::FiltersParallel;VTK::FiltersTexture;VTK::FiltersModeling;
VTK::DomainsChemistryOpenGL2;VTK::RenderingOpenGL2;
VTK::RenderingHyperTreeGrid;
VTK::RenderingUI;VTK::FiltersHybrid;VTK::DomainsChemistry;VTK::ChartsCore;
VTK::InfovisCore;VTK::FiltersExtraction;VTK::ParallelDIY;VTK::diy2;
VTK::IOXML;VTK::IOXMLParser;VTK::expat;VTK::ParallelCore;VTK::IOLegacy;
VTK::IOCore;VTK::doubleconversion;VTK::lz4;VTK::lzma;VTK::fast_float;
VTK::FiltersStatistics;VTK::FiltersHyperTree;VTK::ImagingSources;
VTK::IOImage;VTK::DICOMParser;VTK::jpeg;VTK::metaio;VTK::tiff;
VTK::RenderingContext2D;VTK::RenderingFreeType;VTK::freetype;VTK::kwiml;
VTK::RenderingCore;VTK::FiltersSources;VTK::ImagingCore;VTK::FiltersGeneral;
VTK::FiltersVerdict;VTK::verdict;VTK::FiltersGeometry;
VTK::CommonComputationalGeometry;
VTK::FiltersCore;VTK::CommonExecutionModel;
VTK::CommonDataModel;VTK::CommonSystem;
VTK::CommonMisc;VTK::exprtk;VTK::CommonTransforms;
VTK::CommonMath;VTK::CommonCore
```

## VTK_LIBRARIES LIST
```
DICOM
zlib
MomentInvariants
eigen
kissfft
WrappingTools
ViewsContext2D
loguru
TestingRendering
TestingCore
vtksys
ViewsInfovis
CommonColor
RenderingVolumeOpenGL2
glew
opengl
RenderingLabel
octree
RenderingLOD
RenderingLICOpenGL2
RenderingImage
RenderingContextOpenGL2
RenderingCellGrid
IOVeraOut
hdf5
IOTecplotTable
utf8
IOSegY
IOParallelXML
IOParallel
jsoncpp
IOPLY
IOOggTheora
theora
ogg
IONetCDF
netcdf
libproj
IOMotionFX
pegtl
IOMINC
IOLSDyna
IOInfovis
libxml2
IOImport
IOIOSS
fmt
ioss
cgns
exodusII
IOFLUENTCFF
IOVideo
IOMovie
IOExportPDF
libharu
IOExportGL2PS
RenderingGL2PSOpenGL2
gl2ps
png
IOExport
RenderingVtkJS
nlohmannjson
RenderingSceneGraph
IOExodus
IOEnSight
IOCityGML
pugixml
IOChemistry
IOCesium3DTiles
IOGeometry
IOCellGrid
IOCONVERGECFD
IOHDF
IOCGNSReader
IOAsynchronous
IOAMR
InteractionImage
ImagingStencil
ImagingStatistics
ImagingMorphological
ImagingMath
ImagingFourier
IOSQL
sqlite
GeovisCore
InfovisLayout
ViewsCore
InteractionWidgets
RenderingVolume
RenderingAnnotation
ImagingHybrid
ImagingColor
InteractionStyle
FiltersTopology
FiltersTensor
FiltersSelection
FiltersSMP
FiltersReduction
FiltersProgrammable
FiltersPoints
FiltersParallelImaging
FiltersImaging
ImagingGeneral
FiltersGeometryPreview
FiltersGeneric
FiltersFlowPaths
FiltersCellGrid
FiltersAMR
FiltersParallel
FiltersTexture
FiltersModeling
DomainsChemistryOpenGL2
RenderingOpenGL2
RenderingHyperTreeGrid
RenderingUI
FiltersHybrid
DomainsChemistry
ChartsCore
InfovisCore
FiltersExtraction
ParallelDIY
diy2
IOXML
IOXMLParser
expat
ParallelCore
IOLegacy
IOCore
doubleconversion
lz4
lzma
fast_float
FiltersStatistics
FiltersHyperTree
ImagingSources
IOImage
DICOMParser
jpeg
metaio
tiff
RenderingContext2D
RenderingFreeType
freetype
kwiml
RenderingCore
FiltersSources
ImagingCore
FiltersGeneral
FiltersVerdict
verdict
FiltersGeometry
CommonComputationalGeometry
FiltersCore
CommonExecutionModel
CommonDataModel
CommonSystem
CommonMisc
exprtk
CommonTransforms
CommonMath
CommonCore
```

## ReadAllPolyDataTypesDemo
```
./ReadAllPolyDataTypesDemo.exe
teapot.g
cowHead.vtp
horse.ply
trumpet.obj
42400-IDGH.stl
v.vtk
```
or
```
./Release/ReadAllPolyDataTypesDemo.exe `
../../../Data/teapot.g `
../../../Data/cowHead.vtp `
../../../Data/horse.ply `
../../../Data/trumpet.obj `
../../../Data/42400-IDGH.stl `
../../../Data/v.vtk
```

## ReadAllUnstructuredGridTypes


## list all vtk files

python code
```python
import os

directory = 'vtkfiles'

file_names = os.listdir(directory)

for file_name in file_names:
    print(file_name)
```

results:
```
PS D:\work\python_work\ModernPython\codes\getfoderfiles\01a> py.exe .\testprj.py
250.vtk
AngularSector.vtk
a_grid.vtk
blow.vtk
blowAttr.vtk
blowGeom.vtk
bore.vtk
brain.vtk
brainImageSmooth.vtk
carotid.vtk
damavand-volcano.vtk
DEC.vtk
faults.vtk
fieldfile.vtk
financial.vtk
fran_cut.vtk
GE.vtk
GM.vtk
hello.vtk
hexa.vtk
honolulu.vtk
IBM.vtk
ironProt.vtk
k.vtk
kitchen.vtk
matrix.vtk
notch_stress.vtk
office.binary.vtk
opal_mound_fault.vtk
PentaHexa.vtk
plate.vtk
polyEx.vtk
polyline.vtk
post.vtk
qualityEx.vtk
RectGrid2.vtk
Ruapehu_mag_dem_15m_NZTM.vtk
SampleStructGrid.vtk
StructuredPoints.vtk
SurfaceVectors.vtk
t.vtk
teeth.lps.vtk
teeth.ras.vtk
teeth.vtk
tensors.vtk
tetraMesh.vtk
texThres.vtk
texThres2.vtk
topo_clean.vtk
track1.binary.vtk
track2.binary.vtk
track3.binary.vtk
uGridEx.vtk
usa.vtk
v.vtk
vtk.vtk
VTKCellTypes.vtk
```

TransientHDFReader简单测试
```
TransientHDFReader简单测试
```

## FullHead.mhd need FullHead.raw.gz
```
FullHead.mhd
FullHead.raw.gz
```

### Remote

```
https://code.ornl.gov/ecpcitest/vtk-m/-/tree/v9.0.0/Remote
```

### Examples Math/VectorDot some error
```
Value 0 : -nan(ind)
Value 1 : inf
Value 2 : inf
```

## Examples

```
cmake ..
cmake --build . --parallel 4 --config Release
cmake --install .  --config Release
```

VTK_DIR
```
c:\dev\VTK\lib\cmake\vtk-9.3\
c:\dev\VTK\lib\cmake\vtk-9.4\
```

### Animation
```
AnimateActors
RotatingSphere
```

### Annotation
```
MultiLineText
TextOrigin
XYPlot
```

### CompositeData
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\CompositeData> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CompositePolyDataMapper
|-- Generate2DAMRDataSetWithPulse
|-- Generate3DAMRDataSetWithPulse
|-- MultiBlockDataSet
`-- OverlappingAMR
```

RELEASE库也需要对于RELEASE，不能使用debug
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\CompositeData\CompositePolyDataMapper\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Failed
-- Looking for pthread_create in pthreads
-- Looking for pthread_create in pthreads - not found
-- Looking for pthread_create in pthread
-- Looking for pthread_create in pthread - not found
-- Found Threads: TRUE
-- Configuring done (7.9s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/CompositeData/CompositePolyDataMapper/01/build
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\CompositeData\CompositePolyDataMapper\01\build> cmake --build . --parallel 4 --config Release
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/CompositeData/CompositePolyDataMapper/01/CMakeLis
  ts.txt
  CompositePolyDataMapper.cxx
  CompositePolyDataMapper.vcxproj -> D:\work\vtk_2024_work\ModernVTK\codes\examples\CompositeData\CompositePolyDataMapp
  er\01\build\Release\CompositePolyDataMapper.exe
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/CompositeData/CompositePolyDataMapper/01/CMakeLis
  ts.txt
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\CompositeData\CompositePolyDataMapper\01\build> .\Release\CompositePolyDataMapper.exe
haha
size = 3
color = 1 0 0
```

### DataStructures
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\DataStructures> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- BuildLocatorFromKClosestPoints
|-- BuildOctree
|-- ClosestNPoints
|-- DataStructureComparison
|-- IncrementalOctreePointLocator
|-- KDTree
|-- KDTreeAccessPoints
|-- KDTreeFindPointsWithinRadius
|-- KDTreeFindPointsWithinRadiusDemo
|-- KDTreeTimingDemo
|-- KdTreePointLocatorClosestPoint
|-- ModifiedBSPTreeExtractCells
|-- ModifiedBSPTreeIntersectWithLine
|-- ModifiedBSPTreeTimingDemo
|-- OBBTreeExtractCells
|-- OBBTreeIntersectWithLine
|-- OBBTreeTimingDemo
|-- OctreeClosestPoint
|-- OctreeFindPointsWithinRadius
|-- OctreeFindPointsWithinRadiusDemo
|-- OctreeKClosestPoints
|-- OctreeTimingDemo
|-- OctreeVisualize
|-- PointLocatorFindPointsWithinRadiusDemo
|-- StaticLocatorFindPointsWithinRadiusDemo
|-- VisualizeKDTree
|-- VisualizeModifiedBSPTree
`-- VisualizeOBBTree
`-- dragon.ply
```

```
cmake ..;cmake --build . --parallel 4 --config Release
rm * -recurse -Force
```

### Developers
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Developers> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AlgorithmFilter
|-- AlgorithmSource
|-- FilterProgress
|-- FilterSelfProgress
|-- GraphAlgorithmFilter
|-- GraphAlgorithmSource
|-- ImageAlgorithmFilter
|-- MultipleInputPorts
|-- PolyDataAlgorithmReader
|-- PolyDataFilter
|-- ProgressReport
`-- Warnings
```

### ExplicitStructuredGrid
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\ExplicitStructuredGrid> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CreateESGrid
|-- LoadESGrid
`-- UNISIM-II-D.vtu
```


### Filtering
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Filtering> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AppendFilter
|-- CombinePolyData
|-- ConnectivityFilter
|-- ConnectivityFilterDemo
|-- ConstrainedDelaunay2D
|-- ContoursFromPolyData
|-- Delaunay2D
|-- ExtractVisibleCells
|-- GaussianSplat
|-- GenericClip
|-- Glyph2D
|-- Glyph3D
|-- ImplicitBoolean
|-- ImplicitBooleanDemo
|-- IterativeClosestPointsTransform
|-- LandmarkTransform
|-- PerlinNoise
|-- ProgrammableFilter
|-- ProgrammableSource
|-- SelectionSource
|-- SurfaceFromUnorganizedPoints
|-- SurfaceFromUnorganizedPointsWithPostProc
|-- TransformPolyData
|-- TriangulateTerrainMap
|-- VectorFieldNonZeroExtraction
|-- VertexGlyphFilter
`-- WarpTo
```

### GeometricObjects
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\GeometricObjects> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Arrow
|-- Axes
|-- Cell3DDemonstration
|-- CellTypeSource
|-- Circle
|-- ColoredLines
|-- Cone
|-- ConeDemo
|-- ConvexPointSet
|-- Cube
|-- Cube1
|-- Cylinder
|-- CylinderExample
|-- Disk
|-- Dodecahedron
|-- EarthSource
|-- EllipticalCylinder
|-- EllipticalCylinderDemo
|-- Frustum
|-- GeometricObjectsDemo
|-- Hexahedron
|-- IsoparametricCellsDemo
|-- Line
|-- LinearCellDemo
|-- LongLine
|-- OrientedArrow
|-- OrientedCylinder
|-- ParametricKuenDemo
|-- ParametricObjectsDemo
|-- ParametricSuperEllipsoidDemo
|-- ParametricSuperToroidDemo
|-- Plane
|-- PlaneSourceDemo
|-- Planes
|-- PlanesIntersection
|-- PlatonicSolids
|-- Point
|-- PolyLine
|-- PolyLine1
|-- Polygon
|-- PolygonIntersection
|-- Polyhedron
|-- Pyramid
|-- Quad
|-- QuadraticHexahedron
|-- QuadraticHexahedronDemo
|-- QuadraticTetra
|-- QuadraticTetraDemo
|-- RegularPolygonSource
|-- ShrinkCube
|-- SourceObjectsDemo
|-- Sphere
|-- TessellatedBoxSource
|-- Tetrahedron
|-- TextActor
|-- Triangle
|-- TriangleStrip
`-- Vertex
```

### Graphs
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Graphs> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AdjacencyMatrixToEdgeTable
|-- AdjacentVertexIterator
|-- BoostBreadthFirstSearchTree
|-- BreadthFirstDistance
|-- ColorEdges
|-- ColorVertexLabels
|-- ColorVerticesLookupTable
|-- ConnectedComponents
|-- ConstructGraph
|-- ConstructTree
|-- CreateTree
|-- DepthFirstSearchAnimation
|-- DepthFirstSearchIterator
|-- DirectedGraphToMutableDirectedGraph
|-- EdgeListIterator
|-- EdgeWeights
|-- GraphToPolyData
|-- InEdgeIterator
|-- LabelVerticesAndEdges
|-- MinimumSpanningTree
|-- MutableDirectedGraphToDirectedGraph
|-- NOVCAGraph
|-- OutEdgeIterator
|-- RandomGraphSource
|-- RemoveIsolatedVertices
|-- ScaleVertices
|-- SelectedVerticesAndEdges
|-- SelectedVerticesAndEdgesObserver
|-- ShortestPath
|-- SideBySideGraphs
|-- TreeBFSIterator
|-- TreeToMutableDirectedGraph
|-- VertexSize
|-- VisualizeDirectedGraph
`-- VisualizeGraph
```

### HyperTreeGrid

```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\HyperTreeGrid> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
`-- HyperTreeGridSource
```

### ImageData

```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\ImageData> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CellIdFromGridCoordinates
|-- ClipVolume
|-- ExtractVOI
|-- GetCellCenter
|-- ImageDataGeometryFilter
|-- ImageDataToPointSet
|-- ImageIterator
|-- ImageIteratorDemo
|-- ImageNormalize
|-- ImageReslice
|-- ImageTranslateExtent
|-- ImageWeightedSum
|-- IntersectLine
|-- IterateImageData
`-- VoxelsOnBoundary
```


### ImageProcessing

```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\ImageProcessing> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Attenuation
|-- EnhanceEdges
|-- GaussianSmooth
|-- HybridMedianComparison
|-- IdealHighPass
|-- IsoSubsample
|-- MedianComparison
|-- MorphologyComparison
|-- Pad
|-- RescaleAnImage
`-- VTKSpectrum
```

### Images
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Images> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Actor2D
|-- BackgroundImage
|-- BorderPixelSize
|-- CannyEdgeDetector
|-- Cast
|-- CenterAnImage
|-- Colored2DImageFusion
|-- CombineImages
|-- CombiningRGBChannels
|-- DotProduct
|-- DrawOnAnImage
|-- DrawShapes
|-- ExtractComponents
|-- FillWindow
|-- Flip
|-- Gradient
|-- ImageAccumulate
|-- ImageAccumulateGreyscale
|-- ImageAnisotropicDiffusion2D
|-- ImageCheckerboard
|-- ImageCityBlockDistance
|-- ImageContinuousDilate3D
|-- ImageContinuousErode3D
|-- ImageConvolve
|-- ImageCorrelation
|-- ImageDifference
|-- ImageDilateErode3D
|-- ImageDivergence
|-- ImageEllipsoidSource
|-- ImageExport
|-- ImageFFT
|-- ImageGaussianSmooth
|-- ImageGradientMagnitude
|-- ImageGridSource
|-- ImageHistogram
|-- ImageHybridMedian2D
|-- ImageIdealHighPass
|-- ImageImport
|-- ImageIslandRemoval2D
|-- ImageLaplacian
|-- ImageLuminance
|-- ImageMagnify
|-- ImageMagnitude
|-- ImageMandelbrotSource
|-- ImageMapToColors
|-- ImageMapper
|-- ImageMask
|-- ImageMathematics
|-- ImageMedian3D
|-- ImageMirrorPad
|-- ImageNoiseSource
|-- ImageNonMaximumSuppression
|-- ImageOpenClose3D
|-- ImageOrder
|-- ImageOrientation
|-- ImagePermute
|-- ImageRFFT
|-- ImageRange3D
|-- ImageRotate
|-- ImageSeparableConvolution
|-- ImageShiftScale
|-- ImageShrink3D
|-- ImageSinusoidSource
|-- ImageSlice
|-- ImageSliceMapper
|-- ImageSobel2D
|-- ImageStack
|-- ImageStencil
|-- ImageText
|-- ImageThreshold
|-- ImageToPolyDataFilter
|-- ImageToStructuredPoints
|-- ImageTransparency
|-- ImageValueRange
|-- ImageVariance3D
|-- ImageWarp
|-- InteractWithImage
|-- Interpolation
|-- MarkKeypoints
|-- NegativeIndices
|-- PickPixel
|-- PickPixel2
|-- RGBToHSI
|-- RGBToHSV
|-- RGBToYIQ
|-- RTAnalyticSource
|-- ResizeImage
|-- ResizeImageDemo
|-- StaticImage
`-- Transparency
```

### ImplicitFunctions
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\ImplicitFunctions> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- BooleanOperationImplicitFunctions
|-- ImplicitDataSet
|-- ImplicitQuadric
|-- ImplicitSphere
|-- ImplicitSphere1
|-- IsoContours
`-- SampleFunction
```

### InfoVis
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\InfoVis> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- ArrayToTable
|-- DelimitedTextReader
|-- DelimitedTextWriter
|-- GraphPoints
|-- KMeansClustering
|-- MutableGraphHelper
`-- PKMeansClustering
```

### Interaction
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Interaction> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Assembly
|-- CallBack
|-- CallData
|-- ClientData
|-- DoubleClick
|-- EllipticalButton
|-- Game
|-- ImageClip
|-- ImageRegion
|-- InteractorStyleTerrain
|-- InteractorStyleUser
|-- KeypressEvents
|-- KeypressObserver
|-- MouseEvents
|-- MouseEventsObserver
|-- MoveAGlyph
|-- MoveAVertexUnstructuredGrid
|-- ObserverMemberFunction
|-- PickableOff
|-- Picking
|-- PointPicker
|-- RubberBand2D
|-- RubberBand2DObserver
|-- RubberBand3D
|-- RubberBandPick
|-- RubberBandZoom
|-- SelectAVertex
|-- SelectAnActor
|-- ShiftAndControl
|-- StyleSwitch
|-- TrackballActor
|-- TrackballCamera
|-- UserEvent
`-- WorldPointPicker
```

### IO
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\IO> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- 3DSImporter
|-- ConvertFile
|-- DEMReader
|-- DumpXMLFile
|-- ExportPolyDataScene
|-- FindAllArrayNames
|-- GLTFExporter
|-- GLTFImporter
|-- GenericDataObjectReader
|-- HDRReader
|-- ImageReader2Factory
|-- ImageWriter
|-- ImportPolyDataScene
|-- ImportToExport
|-- IndividualVRML
|-- JPEGReader
|-- JPEGWriter
|-- MetaImageReader
|-- MetaImageWriter
|-- OBJImporter
|-- PNGReader
|-- PNGWriter
|-- ParticleReader
|-- ReadAllPolyDataTypes
|-- ReadAllPolyDataTypesDemo
|-- ReadAllUnstructuredGridTypes
|-- ReadBMP
|-- ReadCML
|-- ReadDICOM
|-- ReadDICOMSeries
|-- ReadExodusData
|-- ReadImageData
|-- ReadLegacyUnstructuredGrid
|-- ReadOBJ
|-- ReadPDB
|-- ReadPLOT3D
|-- ReadPLY
|-- ReadPNM
|-- ReadPlainTextTriangles
|-- ReadPolyData
|-- ReadRectilinearGrid
|-- ReadSLC
|-- ReadSTL
|-- ReadStructuredGrid
|-- ReadTIFF
|-- ReadTextFile
|-- ReadUnknownTypeXMLFile
|-- ReadUnstructuredGrid
|-- SimplePointsReader
|-- SimplePointsWriter
|-- StructuredGridReader
|-- StructuredPointsReader
|-- TransientHDFReader
|-- VRMLImporter
|-- VRMLImporterDemo
|-- WriteBMP
|-- WriteLegacyLinearCells
|-- WritePLY
|-- WritePNM
|-- WriteSTL
|-- WriteTIFF
|-- WriteVTI
|-- WriteVTP
|-- WriteVTU
|-- WriteXMLLinearCells
|-- XMLPImageDataWriter
|-- XMLPUnstructuredGridWriter
`-- XMLStructuredGridWriter
```

### Lighting
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Lighting> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Light
|-- LightActor
`-- SpotLights
```


### Math
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Math> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- 1DTupleInterpolation
|-- EigenSymmetric
|-- HomogeneousLeastSquares
|-- LUFactorization
|-- LeastSquares
|-- MatrixInverse
|-- MatrixTranspose
|-- NormalizeVector
|-- PerpendicularVector
|-- VectorDot
`-- VectorNorm
```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Math\VectorDot\01\build> .\Release\VectorDot.exe
Value 0 : -nan(ind)
Value 1 : inf
Value 2 : inf
```

### Matlab
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
`-- MatlabEngineFilter
```


### Medical
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Medical> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- GenerateCubesFromLabels
|-- GenerateModelsFromLabels
|-- MedicalDemo1
|-- MedicalDemo2
|-- MedicalDemo3
|-- MedicalDemo4
`-- TissueLens
```

### Meshes
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Meshes> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AddCell
|-- BoundaryEdges
|-- CapClip
|-- CellEdges
|-- ClipClosedSurface
|-- ClipDataSetWithPolyData
|-- ClipFrustum
|-- ColoredElevationMap
|-- Decimation
|-- DeformPointSet
|-- ElevationFilter
|-- ExtractEdges
|-- FillHoles
|-- FitToHeightMap
|-- IdentifyHoles
|-- InterpolateFieldDataDemo
|-- MatrixMathFilter
|-- OBBDicer
|-- PointInterpolator
|-- QuadricClustering
|-- QuadricDecimation
|-- SimpleElevationFilter
|-- SolidClip
|-- SplitPolyData
|-- Subdivision
|-- SubdivisionDemo
|-- TableBasedClipDataSetWithPolyData
|-- TableBasedClipDataSetWithPolyData2
|-- Triangulate
`-- WindowedSincPolyDataFilter
```

### Modelling
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Modelling> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Bottle
|-- CappedSphere
|-- ContourTriangulator
|-- Delaunay3D
|-- Delaunay3DDemo
|-- DelaunayMesh
|-- DiscreteMarchingCubes
|-- ExtractLargestIsosurface
|-- Finance
|-- FinanceFieldData
|-- MarchingCubes
|-- MarchingSquares
|-- SmoothDiscreteMarchingCubes
`-- Spring
```

### Parallel
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Parallel> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
`-- ExodusIIWriter
```

### Picking
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Picking> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AreaPicking
|-- CellPicking
|-- HighlightPickedActor
|-- HighlightSelectedPoints
|-- HighlightSelection
`-- HighlightWithSilhouette
```

### Plotting
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Plotting> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AreaPlot
|-- BarChart
|-- BoxChart
|-- ChartMatrix
|-- ChartsOn3DScene
|-- CompareRandomGeneratorsCxx
|-- Diagram
|-- FunctionalBagPlot
|-- Histogram2D
|-- HistogramBarChart
|-- LinePlot
|-- MultiplePlots
|-- ParallelCoordinates
|-- PieChart
|-- PieChartActor
|-- PlotLine3D
|-- ScatterPlot
|-- SpiderPlot
|-- StackedBar
|-- StackedPlot
`-- SurfacePlot
```

### Points
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Points> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CompareExtractSurface
|-- DensifyPoints
|-- ExtractClusters
|-- ExtractEnclosedPoints
|-- ExtractPointsDemo
|-- ExtractSurface
|-- ExtractSurfaceDemo
|-- FitImplicitFunction
|-- MaskPointsFilter
|-- NormalEstimation
|-- PointOccupancy
|-- PoissonExtractSurface
|-- RadiusOutlierRemoval
|-- SignedDistance
`-- UnsignedDistance
```

### Qt
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Qt> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- BarChartQt
|-- BorderWidgetQt
|-- EventQtSlotConnect
|-- ImageDataToQImage
|-- MinimalQtVTKApp
|-- QImageToImageSource
|-- RenderWindowNoUiFile
|-- RenderWindowUISingleInheritance
|-- ShareCameraQt
|-- ShowEvent
`-- SideBySideRenderWindowsQt
```

### RectilinearGrid
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\RectilinearGrid> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- RGrid
|-- RectilinearGrid
|-- RectilinearGridToTetrahedra
`-- VisualizeRectilinearGrid
```

### RenderMan
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\RenderMan> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
`-- PolyDataRIB
```

### Shaders
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Shaders> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- BozoShader
|-- BozoShaderDemo
|-- ColorByNormal
|-- CubeMap
|-- MarbleShader
|-- MarbleShaderDemo
|-- SpatterShader
`-- SphereMap
```

### SimpleOperations
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\SimpleOperations> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- DistanceBetweenPoints
|-- DistancePointToLine
|-- FloatingPointExceptions
|-- GaussianRandomNumber
|-- PerspectiveTransform
|-- ProjectPointPlane
|-- RandomSequence
`-- UniformRandomNumber
```

### Snippets
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Snippets> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- CameraPosition
`-- CheckVTKVersion
```

### StructuredGrid
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- BlankPoint
|-- GetLinearPointId
|-- ReadStructuredGrid
|-- SGrid
|-- StructuredGrid
|-- StructuredGridOutline
|-- VisualizeStructuredGrid
`-- VisualizeStructuredGridCells
```

### StructuredPoints
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredPoints> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- StructuredPointsToUnstructuredGrid
`-- Vol
```

### Texture
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Texture> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AnimateVectors
|-- ProjectedTexture
|-- TextureCutQuadric
|-- TextureCutSphere
|-- TextureThreshold
`-- TexturedSphere
```

### Tutorial
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Tutorial> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- Tutorial_Step1
|-- Tutorial_Step2
|-- Tutorial_Step3
|-- Tutorial_Step4
|-- Tutorial_Step5
`-- Tutorial_Step6
```

### UnstructuredGrid
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\UnstructuredGrid> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- ClipUnstructuredGridWithPlane
|-- ClipUnstructuredGridWithPlane2
`-- UGrid
```

### Utilities
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Utilities> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- 2DArray
|-- 3DArray
|-- Animation
|-- AnimationScene
|-- ArrayCalculator
|-- ArrayLookup
|-- ArrayRange
|-- ArrayWriter
|-- BoundingBox
|-- BoundingBoxIntersection
|-- Box
|-- BrownianPoints
|-- CameraModifiedEvent
|-- CardinalSpline
|-- CheckVTKVersion
|-- ColorLookupTable
|-- ColorMapToLUT
|-- ColorTransferFunction
|-- CommandSubclass
|-- ConstructTable
|-- Coordinate
|-- CustomDenseArray
|-- DataAnimation
|-- DataAnimationSubclass
|-- DeepCopy
|-- DenseArrayRange
|-- DetermineActorType
|-- DiscretizableColorTransferFunction
|-- ExtractArrayComponent
|-- ExtractFaces
|-- FileOutputWindow
|-- FilenameFunctions
|-- ForLoop
|-- FrameRate
|-- FullScreen
|-- FunctionParser
|-- GetClassName
|-- GetDataRoot
|-- KnownLengthArray
|-- LUTUtilities
|-- MassProperties
|-- ObserveError
|-- OffScreenRendering
|-- PCADemo
|-- PCAStatistics
|-- PiecewiseFunction
|-- PointInPolygon
|-- RenderScalarToFloatBuffer
|-- ReportRenderWindowCapabilities
|-- RescaleReverseLUT
|-- ResetCameraOrientation
|-- SaveSceneToFieldData
|-- SaveSceneToFile
|-- Screenshot
|-- ShallowCopy
|-- ShareCamera
|-- ShepardMethod
|-- SortDataArray
|-- SparseArray
|-- TimeStamp
|-- Timer
|-- TimerLog
|-- UnknownLengthArray
|-- Variant
|-- Vector
|-- VectorArrayKnownLength
|-- VectorArrayUnknownLength
|-- ViewportBorders
|-- WindowModifiedEvent
`-- ZBuffer
```


### Video
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Video> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- FFMPEG
|-- MPEG2
`-- OggTheora
```

### Views
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Views> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
`-- RenderView
```

### Visualization
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Visualization> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AlphaFrequency
|-- AnnotatedCubeActor
|-- Arbitrary3DCursor
|-- AssignCellColorsFromLUT
|-- AxisActor
|-- BackfaceCulling
|-- BackgroundColor
|-- BackgroundGradient
|-- BackgroundTexture
|-- BillboardTextActor3D
|-- BlobbyLogo
|-- Blow
|-- BoxClipStructuredPoints
|-- BoxClipUnstructuredGrid
|-- Camera
|-- CameraActor
|-- CameraModel1
|-- CameraModel2
|-- CaptionActor2D
|-- ChooseTextColor
|-- ChooseTextColorDemo
|-- ClipArt
|-- CloseWindow
|-- CollisionDetection
|-- ColorActorEdges
|-- ColorAnActor
|-- ColorGlyphs
|-- ColorSeriesPatches
|-- ColoredAnnotatedCube
|-- ComplexV
|-- CornerAnnotation
|-- CorrectlyRenderTranslucentGeometry
|-- CreateColorSeriesDemo
|-- CubeAxesActor
|-- CubeAxesActor2D
|-- Cursor2D
|-- Cursor3D
|-- CursorShape
|-- CurvatureBandsWithGlyphs
|-- CurvedReformation
|-- DepthSortPolyData
|-- DisplayCoordinateAxes
|-- DisplayQuadricSurfaces
|-- DistanceToCamera
|-- DrawText
|-- EdgePoints
|-- ElevationBandsWithGlyphs
|-- ExtrudePolyDataAlongLine
|-- FastSplatter
|-- FlatShading
|-- Follower
|-- FontFile
|-- FrogBrain
|-- FrogSlice
|-- FroggieSurface
|-- FroggieView
|-- Glyph3DImage
|-- Glyph3DMapper
|-- Hanoi
|-- HanoiInitial
|-- HanoiIntermediate
|-- Hawaii
|-- HedgeHog
|-- HideActor
|-- HideAllActors
|-- IsosurfaceSampling
|-- Kitchen
|-- KochSnowflake
|-- LODProp3D
|-- LabelContours
|-- LabelPlacementMapper
|-- LabeledDataMapper
|-- LabeledMesh
|-- Legend
|-- LegendScaleActor
|-- LineWidth
|-- LoopShrink
|-- Lorenz
|-- Morph3D
|-- MovableAxes
|-- MoveActor
|-- MoveCamera
|-- MultipleActors
|-- MultipleRenderWindows
|-- MultipleViewports
|-- NamedColorPatches
|-- NamedColors
|-- NoShading
|-- NormalsDemo
|-- Opacity
|-- OrientedGlyphs
|-- PointDataSubdivision
|-- PointSize
|-- ProgrammableGlyphFilter
|-- ProjectSphere
|-- ProteinRibbons
|-- QuadraticSurface
|-- QuadricLODActor
|-- QuadricVisualization
|-- RandomProbe
|-- RenderLargeImage
|-- ReverseAccess
|-- RotateActor
|-- ScalarBarActor
|-- ScalarBarActorColorSeries
|-- ScalarVisibility
|-- ScaleGlyphs
|-- SceneBounds
|-- SelectWindowRegion
|-- ShadowsLightsDemo
|-- ShepardInterpolation
|-- SideBySideViewports
|-- StreamLines
|-- StructuredDataTypes
|-- TensorGlyph
|-- TextSource
|-- TextureMapImageData
|-- TextureMapPlane
|-- TextureMapQuad
|-- TransformActor
|-- TransformActorCollection
|-- VectorField
|-- VectorOfActors
|-- VectorText
|-- Visualize2DPoints
|-- VisualizeImageData
|-- VisualizeVTP
|-- WindowSize
|-- WindowTitle
`-- Wireframe
```

### VisualizationAlgorithms
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\VisualizationAlgorithms> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AnatomicalOrientation
|-- BandedPolyDataContourFilter
|-- BluntStreamlines
|-- CarotidFlow
|-- CarotidFlowGlyphs
|-- ClipSphereCylinder
|-- ColorIsosurface
|-- CombustorIsosurface
|-- ContourQuadric
|-- CreateBFont
|-- CutStructuredGrid
|-- CutWithCutFunction
|-- CutWithScalars
|-- Cutter
|-- DataSetSurface
|-- DecimateFran
|-- DecimateHawaii
|-- DisplacementPlot
|-- ExponentialCosine
|-- ExtractData
|-- FilledContours
|-- FindCellIntersections
|-- FireFlow
|-- FireFlowDemo
|-- FlyingHeadSlice
|-- HeadBone
|-- HeadSlice
|-- Hello
|-- HyperStreamline
|-- IceCream
|-- ImageGradient
|-- IronIsoSurface
|-- LOx
|-- LOxGrid
|-- LOxSeeds
|-- MarchingCases
|-- MarchingCasesA
|-- MarchingCasesB
|-- MarchingCasesC
|-- MarchingCasesD
|-- Moto
|-- Office
|-- OfficeA
|-- OfficeTube
|-- PineRootConnectivity
|-- PineRootConnectivityA
|-- PineRootDecimation
|-- PlateVibration
|-- ProbeCombustor
|-- SingleSplat
|-- SpikeFran
|-- SplatFace
|-- Stocks
|-- StreamlinesWithLineWidget
|-- TensorAxes
|-- TensorEllipsoids
|-- TubesFromSplines
|-- TubesWithVaryingRadiusAndColors
|-- VelocityProfile
`-- WarpCombustor
```

### VolumeRendering
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\VolumeRendering> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- FixedPointVolumeRayCastMapperCT
|-- IntermixedUnstructuredGrid
|-- MinIntensityRendering
|-- OpenVRVolume
|-- PseudoVolumeRendering
|-- RayCastIsosurface
`-- SimpleRayCast
```

### Widgets
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Widgets> &"c:\Program Files\Git\usr\bin\tree.exe" -L 1
.
|-- AffineWidget
|-- AngleWidget
|-- AngleWidget2D
|-- BalloonWidget
|-- BiDimensionalWidget
|-- BorderWidget
|-- BoxWidget
|-- BoxWidget2
|-- CameraOrientationWidget
|-- CaptionWidget
|-- CheckerboardWidget
|-- CompassWidget
|-- ContourWidget
|-- DistanceWidget
|-- HoverWidget
|-- ImagePlaneWidget
|-- ImageTracerWidget
|-- ImageTracerWidgetInsideContour
|-- ImageTracerWidgetNonPlanar
|-- ImplicitPlaneWidget2
|-- LineWidget2
|-- LogoWidget
|-- OrientationMarkerWidget
|-- OrientationMarkerWidget1
|-- PlaneWidget
|-- RectilinearWipeWidget
|-- ScalarBarWidget
|-- SeedWidget
|-- SeedWidgetImage
|-- SeedWidgetWithCustomCallback
|-- Slider
|-- Slider2D
|-- SphereWidget
|-- SphereWidget2
|-- SphereWidgetEvents
|-- SplineWidget
|-- TextWidget
`-- TexturedButtonWidget
```
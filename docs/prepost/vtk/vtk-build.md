# VTK Build

## VTK_BUILD_TESTING

-  [VTK File Formats](https://docs.vtk.org/en/latest/design_documents/VTKFileFormats.html).

## example 1
```
cmake .. -DVTK_GROUP_ENABLE_Qt=YES
```

## example 2
```
cmake .. cmake -DCMAKE_INSTALL_PREFIX="c:/dev/VTK" -DVTK_GROUP_ENABLE_Qt=YES
```

```
cmake .. -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
         -D CMAKE_BUILD_TYPE=Release `
         -D BUILD_SHARED_LIBS=ON `
         -D VTK_GROUP_ENABLE_Qt=YES `
         -D VTK_BUILD_EXAMPLES=ON
```

```
cmake -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_GROUP_ENABLE_Qt=YES `
      -D VTK_BUILD_EXAMPLES=ON `
      ..
```

```
cmake -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_GROUP_ENABLE_Qt=YES `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_BUILD_EXAMPLES=ON `
      ..
```

```
cmake -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      ..
```

```
cmake .. `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO
```

```
cmake .. `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      | Tee-Object -FilePath output.txt
```


```
cmake .. `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO | `
      Tee-Object -FilePath "output.txt"
```

```
cmake .. `
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO `
      | Tee-Object -FilePath "output.txt"
```


```
cmake .. `
      -D ODBC_INCLUDE_DIR="C:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" `
      -D ODBC_LIBRARY="C:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" `
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO `
      | Tee-Object -FilePath "output.txt"
```

```
cmake -D MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" `
      -D MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" `
```

```
cmake .. `
      -D ODBC_INCLUDE_DIR="C:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" `
      -D ODBC_LIBRARY="C:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" `
      -D MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" `
      -D MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" `
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO `
      | Tee-Object -FilePath "output.txt"
```

```
cmake .. `
      -D ODBC_INCLUDE_DIR="C:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" `
      -D ODBC_LIBRARY="C:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" `
      -D MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" `
      -D MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" `
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_USE_MPI=ON `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO `
      -D VTK_MODULE_ENABLE_VTK_GUISupportMFC=NO `
      | Tee-Object -FilePath "output.txt"
```

```
cmake .. `
      -D ODBC_INCLUDE_DIR="c:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" `
      -D ODBC_LIBRARY="c:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" `
      -D MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" `
      -D MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" `
      -D OPENSLIDE_INCLUDE_DIR="c:/msys64/usr/local/openslide/include" `
      -D OPENSLIDE_LIBRARY="c:/msys64/usr/local/openslide/lib/libopenslide.lib" `
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D LibArchive_INCLUDE_DIR="c:/dev/libarchive/include" `
      -D LibArchive_LIBRARY="c:/dev/libarchive/lib/archive.lib" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_USE_MPI=ON `
      -D VTK_MODULE_ENABLE_VTK_jsoncpp=YES `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO `
      -D VTK_MODULE_ENABLE_VTK_GUISupportMFC=NO `
      | Tee-Object -FilePath "output.txt"
```


```
cmake .. `
      -D ODBC_INCLUDE_DIR="c:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" `
      -D ODBC_LIBRARY="c:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" `
      -D MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" `
      -D MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" `
      -D OPENSLIDE_INCLUDE_DIR="c:/msys64/usr/local/openslide/include" `
      -D OPENSLIDE_LIBRARY="c:/msys64/usr/local/openslide/lib/libopenslide.lib" `
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" `
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" `
      -D LibArchive_INCLUDE_DIR="c:/dev/libarchive/include" `
      -D LibArchive_LIBRARY="c:/dev/libarchive/lib/archive.lib" `
      -D JsonCpp_INCLUDE_DIR="c:/dev/jsoncpp/include" `
      -D JsonCpp_LIBRARY="c:/dev/jsoncpp/lib/jsoncpp.lib" `
      -D CMAKE_BUILD_TYPE=Release `
      -D BUILD_SHARED_LIBS=ON `
      -D VTK_BUILD_ALL_MODULES=ON `
      -D VTK_USE_MPI=ON `
      -D VTK_MODULE_USE_EXTERNAL_VTK_jsoncpp=ON `
      -D VTK_MODULE_ENABLE_VTK_MomentInvariants=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingLookingGlass=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO `
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO `
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO `
      -D VTK_MODULE_ENABLE_VTK_GUISupportMFC=NO `
      | Tee-Object -FilePath "output.txt"
```

ubuntu cmake 1
```
cmake .. \
      -D CMAKE_BUILD_TYPE=Release \
      -D BUILD_SHARED_LIBS=ON \
      -D VTK_BUILD_ALL_MODULES=ON \
      -D VTK_USE_MPI=ON \
      -D VTK_MODULE_USE_EXTERNAL_VTK_jsoncpp=ON \
      -D VTK_MODULE_ENABLE_VTK_MomentInvariants=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingLookingGlass=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO \
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO \
      -D VTK_MODULE_ENABLE_VTK_GUISupportMFC=NO \
      | tee output.txt
```

ubuntu cmake 2
```
cmake .. \
      -D ODBC_INCLUDE_DIR="c:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" \
      -D ODBC_LIBRARY="c:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" \
      -D MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" \
      -D MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" \
      -D OPENSLIDE_INCLUDE_DIR="c:/msys64/usr/local/openslide/include" `
      -D OPENSLIDE_LIBRARY="c:/msys64/usr/local/openslide/lib/libopenslide.lib" \
      -D CMAKE_MODULE_PATH="c:/dev/OpenVDB/lib/cmake/OpenVDB" \
      -D CMAKE_INSTALL_PREFIX="c:/dev/VTK" \
      -D LibArchive_INCLUDE_DIR="c:/dev/libarchive/include" \
      -D LibArchive_LIBRARY="c:/dev/libarchive/lib/archive.lib" \
      -D JsonCpp_INCLUDE_DIR="c:/dev/jsoncpp/include" \
      -D JsonCpp_LIBRARY="c:/dev/jsoncpp/lib/jsoncpp.lib" \
      -D CMAKE_BUILD_TYPE=Release \
      -D BUILD_SHARED_LIBS=ON \
      -D VTK_BUILD_ALL_MODULES=ON \
      -D VTK_USE_MPI=ON \
      -D VTK_MODULE_USE_EXTERNAL_VTK_jsoncpp=ON \
      -D VTK_MODULE_ENABLE_VTK_MomentInvariants=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingLookingGlass=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingOpenXRRemoting=NO \
      -D VTK_MODULE_ENABLE_VTK_RenderingFreeTypeFontConfig=NO \
      -D VTK_MODULE_ENABLE_VTK_IOPDAL=NO \
      -D VTK_MODULE_ENABLE_VTK_GUISupportMFC=NO \
      | tee output.txt
```

```cpp
my_bool
typedef unsigned char u_char;
typedef unsigned short u_short;
typedef unsigned int u_int;
typedef unsigned long u_long;

typedef unsigned char u_int8_t;
typedef unsigned int u_int16_t;
typedef unsigned long int u_int32_t;
typedef unsigned long long int u_int64_t;
```

```cpp
vtk_module_add_module(VTK::IOOpenVDB
  CLASSES ${classes})
vtk_module_link(VTK::IOOpenVDB
  NO_KIT_EXPORT_IF_SHARED
  PRIVATE
    OpenVDB::openvdb
	Imath::Imath
	)
```

```
-- Found Boost: C:/dev/boost_1_88_0/stage/lib/cmake/Boost-1.88.0/BoostConfig.cmake (found version "1.88.0")
-- Found OpenSlide: c:/msys64/usr/local/openslide/lib/libopenslide.lib
-- Found LibArchive: c:/dev/libarchive/lib/archive.lib (found version "3.9.0")
-- Configuring done (333.5s)
CMake Error at C:/dev/OPENXR/cmake/OpenXRTargets.cmake:59 (set_target_properties):
  The link interface of target "OpenXR::openxr_loader" contains:

    JsonCpp::JsonCpp

  but the target was not found.  Possible reasons include:

    * There is a typo in the target name.
    * A find_package call is missing for an IMPORTED target.
    * An ALIAS target is missing.

Call Stack (most recent call first):
  C:/dev/OPENXR/cmake/OpenXRConfig.cmake:34 (include)
  CMake/vtkModule.cmake:5351 (find_package)
  Rendering/OpenXR/CMakeLists.txt:1 (vtk_module_find_package)
```

CMakeLists.txt(OLD) d:\work\vtk2025\VTK-9.4.2\Rendering\OpenXR\
```cmake
vtk_module_find_package(PACKAGE OpenXR)

set(classes
  vtkOpenXRRenderWindow
  vtkOpenXRRenderWindowInteractor
  vtkOpenXRCamera
  vtkOpenXRControlsHelper
  vtkOpenXRModel
  vtkOpenXRRenderer
  vtkOpenXRInteractorStyle)

set(nowrap_classes
  vtkOpenXRManager
  vtkOpenXRManagerGraphics
  vtkOpenXRManagerOpenGLGraphics
  vtkOpenXRManagerConnection
  )

set(nowrap_headers
  vtkOpenXR.h
  vtkOpenXRPlatform.h
  vtkOpenXRUtilities.h
  XrExtensions.h
  XrGraphicsExtensions.h
  )

vtk_module_add_module(VTK::RenderingOpenXR
  CLASSES ${classes}
  NOWRAP_CLASSES ${nowrap_classes}
  NOWRAP_HEADERS ${nowrap_headers}
  )

vtk_module_link(VTK::RenderingOpenXR
  PUBLIC
    OpenXR::openxr_loader
    OpenXR::headers)

set(openxr_input_files
  vtk_openxr_actions.json
  vtk_openxr_binding_htc_vive_controller.json
  vtk_openxr_binding_khr_simple_controller.json
  vtk_openxr_binding_hp_mixed_reality.json
  vtk_openxr_binding_knuckles.json
  vtk_openxr_binding_microsoft_hand_interaction.json
)

foreach(inputfile ${openxr_input_files})
  configure_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/${inputfile}
    ${CMAKE_CURRENT_BINARY_DIR}/${inputfile}
    COPYONLY)
endforeach()

install(
  FILES ${openxr_input_files}
  DESTINATION "${CMAKE_INSTALL_DATAROOTDIR}/xr_actions/"
  COMPONENT   runtime
)
vtk_add_test_mangling(VTK::RenderingOpenXR)
```

CMakeLists.txt(NEW)
```cmake
vtk_module_find_package(PACKAGE OpenXR)
vtk_module_find_package(PRIVATE_IF_SHARED
  PACKAGE JsonCpp)

set(classes
  vtkOpenXRRenderWindow
  vtkOpenXRRenderWindowInteractor
  vtkOpenXRCamera
  vtkOpenXRControlsHelper
  vtkOpenXRModel
  vtkOpenXRRenderer
  vtkOpenXRInteractorStyle)

set(nowrap_classes
  vtkOpenXRManager
  vtkOpenXRManagerGraphics
  vtkOpenXRManagerOpenGLGraphics
  vtkOpenXRManagerConnection
  )

set(nowrap_headers
  vtkOpenXR.h
  vtkOpenXRPlatform.h
  vtkOpenXRUtilities.h
  XrExtensions.h
  XrGraphicsExtensions.h
  )

vtk_module_add_module(VTK::RenderingOpenXR
  CLASSES ${classes}
  NOWRAP_CLASSES ${nowrap_classes}
  NOWRAP_HEADERS ${nowrap_headers}
  )

vtk_module_link(VTK::RenderingOpenXR
  PUBLIC
    OpenXR::openxr_loader
    OpenXR::headers)

set(openxr_input_files
  vtk_openxr_actions.json
  vtk_openxr_binding_htc_vive_controller.json
  vtk_openxr_binding_khr_simple_controller.json
  vtk_openxr_binding_hp_mixed_reality.json
  vtk_openxr_binding_knuckles.json
  vtk_openxr_binding_microsoft_hand_interaction.json
)

foreach(inputfile ${openxr_input_files})
  configure_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/${inputfile}
    ${CMAKE_CURRENT_BINARY_DIR}/${inputfile}
    COPYONLY)
endforeach()

install(
  FILES ${openxr_input_files}
  DESTINATION "${CMAKE_INSTALL_DATAROOTDIR}/xr_actions/"
  COMPONENT   runtime
)
vtk_add_test_mangling(VTK::RenderingOpenXR)
```

### IO\MySQL

vtkMySQLQuery.cxx
```
D:\work\vtk2025\VTK-9.4.2\IO\MySQL\vtkMySQLQuery.cxx(93,11): error C3646: “IsNull”: 未知重写说明符 [D:\work\vtk2025\VTK-9.4.2\
build\IO\MySQL\IOMySQL.vcxproj]
  my_bool IsNull;                 // Is this parameter nullptr?
  my_bool IsUnsigned;             // For integer types, is it unsigned?
  char* Data;                     // Buffer holding actual data
  unsigned long BufferSize;       // Buffer size
  unsigned long DataLength;       // Size of the data in the buffer (must
                                  // be less than or equal to BufferSize)
  my_bool HasError;               // for the server to report truncation
  enum enum_field_types DataType; // MySQL data type for the contained data
==>
  bool IsNull;                 // Is this parameter nullptr?
  bool IsUnsigned;             // For integer types, is it unsigned?
  char* Data;                     // Buffer holding actual data
  unsigned long BufferSize;       // Buffer size
  unsigned long DataLength;       // Size of the data in the buffer (must
                                  // be less than or equal to BufferSize)
  bool HasError;               // for the server to report truncation
  enum enum_field_types DataType; // MySQL data type for the contained data

```

vtkMySQLDatabase.cxx
```
D:\work\vtk2025\VTK-9.4.2\IO\MySQL\vtkMySQLDatabase.cxx(127,5): error C2065: “my_bool”: 未声明的标识符 [D:\work\vtk2025\VTK-9.
4.2\build\IO\MySQL\IOMySQL.vcxproj]
  if (this->Reconnect)
  {
    my_bool recon = true;
    mysql_options(&this->Private->NullConnection, MYSQL_OPT_RECONNECT, &recon);
  }
==>
  if (this->Reconnect)
  {
    bool recon = true;
    mysql_options(&this->Private->NullConnection, MYSQL_OPT_RECONNECT, &recon);
  }  
```

### IO\OpenVDB\

vtkOpenVDBWriter.obj
```
vtkOpenVDBWriter.obj : error LNK2019: 无法解析的外部符号 imath_half_to_float_table，函数 "void __cdecl openvdb::v12_0::io::writeCom
pressedValues<float,class openvdb::v12_0::util::NodeMask<3> >(class std::basic_ostream<char,struct std::char_traits<cha
r> > &,float *,unsigned int,class openvdb::v12_0::util::NodeMask<3> const &,class openvdb::v12_0::util::NodeMask<3> con
st &,bool)" (??$writeCompressedValues@MV?$NodeMask@$02@util@v12_0@openvdb@@@io@v12_0@openvdb@@YAXAEAV?$basic_ostream@DU
?$char_traits@D@std@@@std@@PEAMIAEBV?$NodeMask@$02@util@12@2_N@Z) 中引用了该符号 [D:\work\vtk2025\VTK-9.4.2\build\IO\OpenVDB\I
OOpenVDB.vcxproj]
vtkOpenVDBReader.obj : error LNK2001: 无法解析的外部符号 imath_half_to_float_table [D:\work\vtk2025\VTK-9.4.2\build\IO\OpenVDB\I
OOpenVDB.vcxproj]
D:\work\vtk2025\VTK-9.4.2\build\bin\Release\vtkIOOpenVDB-9.4.dll : fatal error LNK1120: 1 个无法解析的外部命令 [D:\work\vtk2025\V
TK-9.4.2\build\IO\OpenVDB\IOOpenVDB.vcxproj]
```

```cmake
# Resolve the OpenVDB external dependency
find_path(OpenVDB_CMAKE_PATH
  NAMES FindOpenVDB.cmake
  DOC "Path to OpenVDB CMake files")
mark_as_advanced(OpenVDB_CMAKE_PATH)

list(INSERT CMAKE_MODULE_PATH 0
  "${OpenVDB_CMAKE_PATH}")
vtk_module_find_package(PRIVATE_IF_SHARED
  PACKAGE OpenVDB)

set(classes
  vtkOpenVDBWriter
  vtkOpenVDBReader)

vtk_module_add_module(VTK::IOOpenVDB
  CLASSES ${classes})
vtk_module_link(VTK::IOOpenVDB
  NO_KIT_EXPORT_IF_SHARED
  PRIVATE
    OpenVDB::openvdb)
vtk_add_test_mangling(VTK::IOOpenVDB)
```

==>

```cmake
# Resolve the OpenVDB external dependency
find_path(OpenVDB_CMAKE_PATH
  NAMES FindOpenVDB.cmake
  DOC "Path to OpenVDB CMake files")
mark_as_advanced(OpenVDB_CMAKE_PATH)

list(INSERT CMAKE_MODULE_PATH 0
  "${OpenVDB_CMAKE_PATH}")
vtk_module_find_package(PRIVATE_IF_SHARED
  PACKAGE OpenVDB)
vtk_module_find_package(PRIVATE_IF_SHARED
  PACKAGE Imath)

set(classes
  vtkOpenVDBWriter
  vtkOpenVDBReader)

vtk_module_add_module(VTK::IOOpenVDB
  CLASSES ${classes})
vtk_module_link(VTK::IOOpenVDB
  NO_KIT_EXPORT_IF_SHARED
  PRIVATE
    OpenVDB::openvdb
    Imath::Imath
)
vtk_add_test_mangling(VTK::IOOpenVDB)
```

### rendering\ANARI

vtkAnariRendererNode.cxx
```
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariRendererNode.cxx(126,15): error C2065: “u_char”: 未声明的标识符 [D:\work\vtk
2025\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariRendererNode.cxx(583,41): error C2061: 语法错误: 标识符“uint” [D:\work\vtk20
25\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]

加入
#ifdef _WIN32
typedef unsigned char u_char;
typedef unsigned int uint;
#endif
```

vtkAnariPolyDataMapperNode.cxx
```
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariPolyDataMapperNode.cxx(81,17): error C2065: “u_int”: 未声明的标识符 [D:\work
\vtk2025\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariPolyDataMapperNode.cxx(370,19): error C2065: “u_char”: 未声明的标识 符 [D:\wo
rk\vtk2025\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariPolyDataMapperNode.cxx(434,19): error C2065: “u_short”: 未声明的标识符 [D:\w
ork\vtk2025\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariPolyDataMapperNode.cxx(1550,41): error C2065: “u_int32_t”: 未声明的 标识符 [D
:\work\vtk2025\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]
加入
#ifdef _WIN32
typedef unsigned char u_char;
typedef unsigned short u_short;
typedef unsigned int u_int;
typedef unsigned long int u_int32_t;
#endif
```

vtkAnariVolumeMapperNode.cxx
```
D:\work\vtk2025\VTK-9.4.2\Rendering\ANARI\vtkAnariVolumeMapperNode.cxx(190,30): error C2131: 表达式的计算结果不是常数 [D:\work\vtk2
025\VTK-9.4.2\build\Rendering\ANARI\RenderingAnari.vcxproj]

  // Color
  int colorSize = this->Owner->GetColorSize();
  float colorArray[colorSize * 3];
#ifdef _WIN32
std::vector<float> colorArray(colorSize * 3);
#else
float colorArray[colorSize * 3];
#endif
```


Release
```
cmake --build . --parallel 4 --config Release
```

Install
```
cmake --install . --prefix "c:/dev/VTK"  --config Release
```

or
```
cmake --install . --prefix "c:/dev/VTK"  --config Debug
```


```
$env:PATH = "c:/local/Qt/6.9.0/msvc2022_64/bin;" + $env:PATH
```

or

```
c:\local\Qt\6.9.0\msvc2022_64\bin\windeployqt.exe .\Release
```


```
VTK_MODULE_ENABLE_VTK_cli11
VTK_MODULE_USE_EXTERNAL_VTK_cli11
VTK_MODULE_ENABLE_VTK_FiltersParallelStatistics
IOFFMPEG
```

```
VTK_MODULE_ENABLE_VTK_InfovisBoost
VTK_MODULE_ENABLE_VTK_InfovisBoostGraphAlgorithms
```

MPEG
```
Search results:
[26 files and 0 directories found]
d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\theora\vtktheora\README
d:\work\vtk2025\codes\VTK-9.4.2\CMake\FindFFMPEG.cmake
d:\work\vtk2025\codes\VTK-9.4.2\CMake\vtkInstallFFMPEGPackage.cmake
d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\libproj\vtklibproj\src\iso191111\operation\parmappings.cpp
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSource.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSourceWithAudio.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGWriter.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGWriter.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\Movie\vtkFFMPEG\vtkFFMPEGWriter.cxx
d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FFMPEGOpenGL2\Testing\Cxx\TestMovieSphere.cxx
d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FFMPEGOpenGL2\vtkOpenGLMovieSphere.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.h
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.h
d:\work\vtk2025\codes\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGWriter.h
d:\work\vtk2025\codes\VTK-9.4.2\Ogg\Theora\vtkOggTheoraWriter.h
d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FFMPEGOpenGL2\vtkOpenGLMovieSphere.h
d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\jpeg\vtkjpeg\README.jg
d:\work\vtk2025\codes\VTK-9.4\Documentation\docs\build_instructions\build.md
d:\work\vtk2025\codes\VTK-9.4\Documentation\release\9.2.md
d:\work\vtk2025\codes\VTK-9.4\IO\FFMPEG\vtk.module
d:\work\vtk2025\codes\VTK-9.4\Rendering\FFMPEGOpenGL2\vtk_module
d:\work\vtk2025\codes\VTK-9.4.2\CMake\vtkcppcheck_Suppressions.txt
d:\work\vtk2025\codes\VTK-9.4\IO\FFMPEG\CMakeLists.txt
d:\work\vtk2025\codes\VTK-9.4\IO\FFMPEG\Testing\Cxx\CMakeLists.txt
d:\work\vtk2025\codes\VTK-9.4\Rendering\FFMPEGOpenGL2\Testing\Cxx\CMakeLists.txt
```

VTK_USE_MPEG2_ENCODER
```
Search results:
[No files found]
```

```
Search results:
[23 files and 0 directories found]
d:\work\vtk2025\VTK-8.2.0\CMake\FindFFMPEG.cmake
d:\work\vtk2025\VTK-8.2\CMake\FindFFMPEG2.cmake
d:\work\vtk2025\VTK-8.2\CMake\VTKcppcheck_Suppressions.txt
d:\work\vtk2025\VTK-8.2\CMake\vtkTestFFMPEG.cmake
d:\work\vtk2025\VTK-8.2\Common\Core\vtkToolkit.h.in
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\CMakeLists.txt
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\module.cmake
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\Testing\Cxx\CMakeLists.txt
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSource.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\Testing\Cxx\TestFFMPEGVideoSourceWithAudio.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGConfig.h.in
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGVideoSource.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGVideoSource.h
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGWriter.cxx
d:\work\vtk2025\VTK-8.2\IO\FFMPEG\vtkFFMPEGWriter.h
d:\work\vtk2025\VTK-8.2\IO\Movie\vtkOggTheoraWriter.h
d:\work\vtk2025\VTK-8.2\ThirdParty\glew\vtkglew\include\GL\glew.h
d:\work\vtk2025\VTK-8.2\ThirdParty\glew\vtkglew\src\glewinfo.c
d:\work\vtk2025\VTK-8.2\ThirdParty\glew\vtkglew\src\glewinfo.c
d:\work\vtk2025\VTK-8.2\ThirdParty\jpeg\vtkjpeg\README
d:\work\vtk2025\VTK-8.2\ThirdParty\theora\vtktheora\README
d:\work\vtk2025\VTK-8.2\Wrapping\Python\CMakeLists.txt
```

VTK_USE_MPEG2_ENCODER
```
Search results:
[2 files and 0 directories found]
d:\work\vtk2025\VTK-8.2.0\CMake\FindMPEG2.cmake
d:\work\vtk2025\VTK-8.2.0\Common\Core\vtkToolkits.h.in
```

## GenericClip: examples/Filtering/GenericClip

```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(GenericClip)

find_package(VTK COMPONENTS 
  CommonColor
  CommonCore
  CommonDataModel
  FiltersCore
  FiltersGeneric
  FiltersSources
  ImagingHybrid
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
  TestingGenericBridge
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "GenericClip: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(GenericClip MACOSX_BUNDLE GenericClip.cxx )
  target_link_libraries(GenericClip PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS GenericClip
  MODULES ${VTK_LIBRARIES}
)
```

output
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Filtering\GenericClip\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  TestingGenericBridge.



CMake Error at CMakeLists.txt:24 (message):
  GenericClip: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

## LinearCellDemo: examples/GeometricObjects/LinearCellDemo

```cmake

cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(LinearCellDemo)

find_package(VTK COMPONENTS 
  CommonColor
  CommonCore
  CommonDataModel
  FiltersSources
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingLabel
  RenderingOpenGL2
  cli11
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "LinearCellDemo: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(LinearCellDemo MACOSX_BUNDLE LinearCellDemo.cxx )
  target_link_libraries(LinearCellDemo PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS LinearCellDemo
  MODULES ${VTK_LIBRARIES}
)
```

output
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\GeometricObjects\LinearCellDemo\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  cli11.



CMake Error at CMakeLists.txt:22 (message):
  LinearCellDemo: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

## ParametricObjectsDemo: examples/GeometricObjects/ParametricObjectsDemo

```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(ParametricObjectsDemo)

find_package(VTK COMPONENTS 
  CommonColor
  CommonComputationalGeometry
  CommonCore
  FiltersCore
  FiltersSources
  IOImage
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
  cli11
  fmt
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "ParametricObjectsDemo: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(ParametricObjectsDemo MACOSX_BUNDLE ParametricObjectsDemo.cxx )
  target_link_libraries(ParametricObjectsDemo PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS ParametricObjectsDemo
  MODULES ${VTK_LIBRARIES}
)
```

output
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\GeometricObjects\ParametricObjectsDemo\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  cli11.



CMake Error at CMakeLists.txt:24 (message):
  ParametricObjectsDemo: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```


```
2025-05-12 17:49:04.559 (   0.249s) [8AB821A10DDBFA96]vtkTreeLayoutStrategy.c:72
ERR| vtkTreeLayoutStrategy (0000021B0B534600):
Layout only works on vtkTree if VTK::InfovisBoostGraphAlgorithms is available.
```


## BoostBreadthFirstSearchTree: examples/Graphs/BoostBreadthFirstSearchTree

```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(BoostBreadthFirstSearchTree)

find_package(VTK COMPONENTS 
  CommonCore
  CommonDataModel
  InfovisBoostGraphAlgorithms
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
  ViewsInfovis
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "BoostBreadthFirstSearchTree: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(BoostBreadthFirstSearchTree MACOSX_BUNDLE BoostBreadthFirstSearchTree.cxx )
  target_link_libraries(BoostBreadthFirstSearchTree PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS BoostBreadthFirstSearchTree
  MODULES ${VTK_LIBRARIES}
)

```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Graphs\BoostBreadthFirstSearchTree\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  InfovisBoostGraphAlgorithms.



CMake Error at CMakeLists.txt:20 (message):
  BoostBreadthFirstSearchTree: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

FiltersParallelStatistics
```cmake
cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

project(PKMeansClustering)

find_package(VTK COMPONENTS 
  CommonCore
  CommonDataModel
  FiltersGeneral
  FiltersParallelStatistics
  IOXML
  InteractionStyle
  RenderingContextOpenGL2
  RenderingCore
  RenderingFreeType
  RenderingGL2PSOpenGL2
  RenderingOpenGL2
)

if (NOT VTK_FOUND)
  message(FATAL_ERROR "PKMeansClustering: Unable to find the VTK build folder.")
endif()

# Prevent a "command line is too long" failure in Windows.
set(CMAKE_NINJA_FORCE_RESPONSE_FILE "ON" CACHE BOOL "Force Ninja to use response files.")
add_executable(PKMeansClustering MACOSX_BUNDLE PKMeansClustering.cxx )
  target_link_libraries(PKMeansClustering PRIVATE ${VTK_LIBRARIES}
)
# vtk_module_autoinit is needed
vtk_module_autoinit(
  TARGETS PKMeansClustering
  MODULES ${VTK_LIBRARIES}
)

```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\InfoVis\PKMeansClustering\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  FiltersParallelStatistics.



CMake Error at CMakeLists.txt:21 (message):
  PKMeansClustering: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Math\VectorDot\01\build> .\Release\VectorDot.exe
Value 0 : -nan(ind)
Value 1 : inf
Value 2 : inf
```

Matlab\MatlabEngineFilter
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab\MatlabEngineFilter\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Generating done (0.0s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/Matlab/MatlabEngineFilter/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/Matlab/MatlabEngineFilter/01/CMakeLists.txt
  MatlabEngineFilter.cxx
D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab\MatlabEngineFilter\01\MatlabEngineFilter.cxx(3,10): error C1083:
无法打开包括文件: “vtkMatlabEngineFilter.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\examples\Matlab\M
atlabEngineFilter\01\build\MatlabEngineFilter.vcxproj]
```

Points\CompareExtractSurface
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\CompareExtractSurface\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Configuring done (8.0s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/CompareExtractSurface/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/CompareExtractSurface/01/CMakeLists.txt
  CompareExtractSurface.cxx
D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\CompareExtractSurface\01\CompareExtractSurface.cxx(9,10): error C
1083: 无法打开包括文件: “vtkPoissonReconstruction.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\examples
\Points\CompareExtractSurface\01\build\CompareExtractSurface.vcxproj]
```


```
1. Verify VTK Installation
Ensure that VTK is properly installed and includes the vtkPoissonReconstruction module. The vtkPoissonReconstruction.h header is part of the vtkFiltersPoints module, which may not be included in a minimal VTK build.

Check VTK Installation:
Confirm that VTK is installed and built correctly on your system.
If you built VTK from source, ensure the VTK_MODULE_ENABLE_VTK_FiltersPoints option was enabled during the CMake configuration. Run cmake -L in your VTK build directory to list available modules and verify that VTK_FiltersPoints is enabled.
If you used a pre-built VTK binary, ensure it includes the vtkFiltersPoints module. Some pre-built distributions may exclude optional modules.
Rebuild VTK if Necessary: If the module is missing, reconfigure and rebuild VTK with CMake:
Open the CMake GUI or use the command line in your VTK source directory.
Set VTK_MODULE_ENABLE_VTK_FiltersPoints=ON.
Configure, generate, and rebuild VTK.
Install the rebuilt VTK to your desired location (e.g., C:\VTK or D:\VTK).
```

Points\PoissonExtractSurface
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\PoissonExtractSurface\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Configuring done (8.0s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/PoissonExtractSurface/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/Points/PoissonExtractSurface/01/CMakeLists.txt
  PoissonExtractSurface.cxx
  vtkPoissonReconstruction.cxx
D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\PoissonExtractSurface\01\PoissonExtractSurface.cxx(12,10): error
C1083: 无法打开包括文件: “vtkPoissonReconstruction.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\example
s\Points\PoissonExtractSurface\01\build\PoissonExtractSurface.vcxproj]
D:\work\vtk_2024_work\ModernVTK\codes\examples\Points\PoissonExtractSurface\01\vtkPoissonReconstruction.h(38,10): error
 C1083: 无法打开包括文件: “PoissonReconstructionModule.h”: No such file or directory [D:\work\vtk_2024_work\ModernVTK\codes\exa
mples\Points\PoissonExtractSurface\01\build\PoissonExtractSurface.vcxproj]
  正在生成代码...
  (编译源文件“../vtkPoissonReconstruction.cxx”)
```


```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Qt\BarChartQt\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:11 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  GUISupportQt, RenderingQt.



CMake Error at CMakeLists.txt:28 (message):
  BarChartQt: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

StructuredGrid\BlankPoint
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
-- Configuring done (8.0s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/vtk_2024_work/ModernVTK/codes/examples/StructuredGrid/BlankPoint/01/build
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a

  1>Checking Build System
  Building Custom Rule D:/work/vtk_2024_work/ModernVTK/codes/examples/StructuredGrid/BlankPoint/01/CMakeLists.txt
  BlankPoint.cxx
BlankPoint.obj : error LNK2019: 无法解析的外部符号 "__declspec(dllimport) public: static class vtkStructuredGridGeometryFilter *
 __cdecl vtkStructuredGridGeometryFilter::New(void)" (__imp_?New@vtkStructuredGridGeometryFilter@@SAPEAV1@XZ)，函数 main 中
引用了该符号 [D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\BlankPoint.vcxproj]
    已定义且可能匹配的符号上的提示:
      "__declspec(dllimport) public: static class vtkActor * __cdecl vtkActor::New(void)" (__imp_?New@vtkActor@@SAPEAV1
  @XZ)
      "__declspec(dllimport) public: static class vtkDataSetMapper * __cdecl vtkDataSetMapper::New(void)" (__imp_?New@v
  tkDataSetMapper@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkNamedColors * __cdecl vtkNamedColors::New(void)" (__imp_?New@vtkNa
  medColors@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkPoints * __cdecl vtkPoints::New(void)" (__imp_?New@vtkPoints@@SAPE
  AV1@XZ)
      "__declspec(dllimport) public: static class vtkRenderWindow * __cdecl vtkRenderWindow::New(void)" (__imp_?New@vtk
  RenderWindow@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkRenderWindowInteractor * __cdecl vtkRenderWindowInteractor::New(vo
  id)" (__imp_?New@vtkRenderWindowInteractor@@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkRenderer * __cdecl vtkRenderer::New(void)" (__imp_?New@vtkRenderer
  @@SAPEAV1@XZ)
      "__declspec(dllimport) public: static class vtkStructuredGrid * __cdecl vtkStructuredGrid::New(void)" (__imp_?New
  @vtkStructuredGrid@@SAPEAV1@XZ)
D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\Release\BlankPoint.exe : fatal error
LNK1120: 1 个无法解析的外部命令 [D:\work\vtk_2024_work\ModernVTK\codes\examples\StructuredGrid\BlankPoint\01\build\BlankPoint.vcx
proj]
```

Visualization\ExtrudePolyDataAlongLine
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\Visualization\ExtrudePolyDataAlongLine\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:6 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  SplineDrivenImageSlicer.



CMake Error at CMakeLists.txt:30 (message):
  ExtrudePolyDataAlongLine: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.19+0d9f5a35a
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

VolumeRendering\OpenVRVolume
```
PS D:\work\vtk_2024_work\ModernVTK\codes\examples\VolumeRendering\OpenVRVolume\01\build> cmake ..;cmake --build . --parallel 4 --config Release
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
CMake Warning at CMakeLists.txt:5 (find_package):
  Found package configuration file:

    C:/dev/VTK/lib/cmake/vtk-9.4/vtk-config.cmake

  but it set VTK_FOUND to FALSE so package "VTK" is considered to be NOT
  FOUND.  Reason given by package:

  Could not find the VTK package with the following required components:
  RenderingOpenVR.



CMake Error at CMakeLists.txt:20 (message):
  OpenVRVolume: Unable to find the VTK build folder.


-- Configuring incomplete, errors occurred!
适用于 .NET Framework MSBuild 版本 17.13.26+f3741e9cf
MSBUILD : error MSB1009: 项目文件不存在。
开关:ALL_BUILD.vcxproj
```

```
200>D:\work\vtk2025\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.cxx(75,7): warning C4996: 'avcodec_close': 被声明为已否决
200>D:\work\vtk2025\VTK-9.4.2\IO\FFMPEG\vtkFFMPEGVideoSource.cxx(80,7): warning C4996: 'avcodec_close': 被声明为已否决
198>  正在创建库 D:/work/vtk2025/VTK-9.4.2/build/lib/Release/vtkFiltersGeometryPreview-9.4.lib 和对象 D:/work/vtk2025/VTK-9.4.2/build/lib/Release/vtkFiltersGeometryPreview-9.4.exp
185>vtkImageCast.cxx
191>vtkBase64Utilities.cxx
184>  正在创建库 D:/work/vtk2025/VTK-9.4.2/build/lib/Release/vtkImagingMath-9.4.lib 和对象 D:/work/vtk2025/VTK-9.4.2/build/lib/Release/vtkImagingMath-9.4.exp
191>vtkDataCompressor.cxx
185>vtkImageChangeInformation.cxx
200>LINK : fatal error LNK1181: 无法打开输入文件“C:\msys64\usr\local\ffmpeg\lib\avformat.lib”
200>已完成生成项目“IOFFMPEG.vcxproj”的操作 - 失败。
198>FiltersGeometryPreview.vcxproj -> D:\work\vtk2025\VTK-9.4.2\build\bin\Release\vtkFiltersGeometryPreview-9.4.dll
184>ImagingMath.vcxproj -> D:\work\vtk2025\VTK-9.4.2\build\bin\Release\vtkImagingMath-9.4.dll
```

```
290>LINK : fatal error LNK1181: 无法打开输入文件“..\..\lib\Release\vtkIOFFMPEG-9.4.lib”
```

VTK::opengl(VTK-9.4.2)
```
Search results:
[5 files and 0 directories found]
- d:\work\vtk2025\codes\VTK-9.4.2\Documentation\release\9.4.md
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\CellGrid\vtk.module
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\ContextOpenGL2\vtk.module
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenGL2\vtk.kit
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenGL2\vtk.module
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\VolumeOpenGL2\vtk.module
```

VTK::opengl(VTK-9.3.1)
```
Search results:
[20 files and 0 directories found]
- d:\work\vtk2025\VTK-9.3.1\CMake\vtk-config.cmake.in
- d:\work\vtk2025\VTK-9.3.1\GUISupport\Qt\vtk.module
- d:\work\vtk2025\VTK-9.3.1\IO\Import\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\CellGrid\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\ContextOpenGL2\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\External\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\GL2PSOpenGL2\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\LICOpenGL2\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\OpenGL2\vtk.kit
- d:\work\vtk2025\VTK-9.3.1\Rendering\OpenGL2\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\OpenVR\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\OpenXR\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\Parallel\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\UI\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\VolumeOpenGL2\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\VR\vtk.module
- d:\work\vtk2025\VTK-9.3.1\ThirdParty\gl2ps\vtk.module
- d:\work\vtk2025\VTK-9.3.1\ThirdParty\glew\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Utilities\OpenGL\CMakeLists.txt
- d:\work\vtk2025\VTK-9.3.1\Utilities\OpenGL\vtk.module
```

d:\work\vtk2025\VTK-9.3.1\Utilities\OpenGL\vtk.module
```
NAME
  VTK::opengl
LIBRARY_NAME
  vtkopengl
THIRD_PARTY
```

vtk_modules=
```
- VTK::DICOM
- VTK::SplineDrivenImageSlicer
- VTK::RenderingLookingGlass
- VTK::MomentInvariants
- VTK::WrappingTools
- VTK::WebGLExporter
- VTK::ViewsQt
- VTK::UtilitiesBenchmarks
- VTK::ViewsContext2D
- VTK::zfp
- VTK::loguru
- VTK::cli11
- VTK::TestingRendering
- VTK::TestingIOSQL
- VTK::TestingGenericBridge
- VTK::TestingDataModel
- VTK::TestingCore
- VTK::RenderingZSpace
- VTK::ViewsInfovis
- VTK::ViewsCore
- VTK::RenderingRayTracing
- VTK::RenderingVolumeAMR
- VTK::RenderingQt
- VTK::RenderingParallel
- VTK::RenderingOpenXRRemoting
- VTK::RenderingOpenXR
- VTK::RenderingOpenVR
- VTK::RenderingVR
- VTK::RenderingVRModels
- VTK::RenderingLabel
- VTK::octree
- VTK::RenderingLOD
- VTK::RenderingLICOpenGL2
- VTK::RenderingImage
- VTK::RenderingFreeTypeFontConfig
- VTK::RenderingFFMPEGOpenGL2
- VTK::RenderingExternal
- VTK::RenderingContextOpenGL2
- VTK::RenderingCellGrid
- VTK::RenderingAnari
- VTK::RenderingVolumeOpenGL2
- VTK::IOXdmf2
- VTK::xdmf2
- VTK::IOVeraOut
- VTK::IOVPIC
- VTK::vpic
- VTK::IOTecplotTable
- VTK::IOTRUCHAS
- VTK::IOSegY
- VTK::IOPostgreSQL
- VTK::IOXdmf3
- VTK::xdmf3
- VTK::IOParallelXML
- VTK::IOParallelLSDyna
- VTK::IOParallelExodus
- VTK::IOParallel
- VTK::IOPLY
- VTK::IOPIO
- VTK::IOPDAL
- VTK::IOOpenVDB
- VTK::IOOggTheora
- VTK::theora
- VTK::ogg
- VTK::IOOMF
- VTK::IOODBC
- VTK::IOOCCT
- VTK::IONetCDF
- VTK::IOMySQL
- VTK::IOMotionFX
- VTK::IOMINC
- VTK::IOLSDyna
- VTK::IOLAS
- VTK::IOImport
- VTK::IOIOSS
- VTK::ioss
- VTK::IOHDF
- VTK::IOH5part
- VTK::h5part
- VTK::IOH5Rage
- VTK::IOGeoJSON
- VTK::IOFides
- VTK::fides
- VTK::IOFLUENTCFF
- VTK::IOFFMPEG
- VTK::IOVideo
- VTK::IOMovie
- VTK::IOFDS
- VTK::IOInfovis
- VTK::libxml2
- VTK::IOExportPDF
- VTK::libharu
- VTK::IOExportGL2PS
- VTK::RenderingGL2PSOpenGL2
- VTK::gl2ps
- VTK::IOExodus
- VTK::exodusII
- VTK::netcdf
- VTK::IOEngys
- VTK::IOEnSight
- VTK::IOERF
- VTK::IOCityGML
- VTK::IOChemistry
- VTK::IOCesium3DTiles
- VTK::IOCONVERGECFD
- VTK::IOHDFTools
- VTK::IOCGNSReader
- VTK::cgns
- VTK::IOAsynchronous
- VTK::IOAlembic
- VTK::IOExport
- VTK::IOGeometry
- VTK::RenderingVtkJS
- VTK::jsoncpp
- VTK::RenderingSceneGraph
- VTK::IOAMR
- VTK::hdf5
- VTK::IOADIOS2
- VTK::InteractionImage
- VTK::InfovisLayout
- VTK::InfovisBoostGraphAlgorithms
- VTK::InfovisBoost
- VTK::ImagingStencil
- VTK::ImagingStatistics
- VTK::ImagingOpenGL2
- VTK::ImagingMorphological
- VTK::ImagingMath
- VTK::ImagingFourier
- VTK::GUISupportQtSQL
- VTK::IOSQL
- VTK::GUISupportQtQuick
- VTK::GUISupportQt
- VTK::InteractionWidgets
- VTK::RenderingVolume
- VTK::RenderingAnnotation
- VTK::InteractionStyle
- VTK::ImagingHybrid
- VTK::ImagingColor
- VTK::GUISupportMFC
- VTK::GeovisGDAL
- VTK::IOGDAL
- VTK::GeovisCore
- VTK::libproj
- VTK::sqlite
- VTK::FiltersTopology
- VTK::FiltersTensor
- VTK::FiltersSelection
- VTK::FiltersSMP
- VTK::FiltersReebGraph
- VTK::FiltersProgrammable
- VTK::FiltersPoints
- VTK::FiltersParallelStatistics
- VTK::FiltersParallelImaging
- VTK::FiltersParallelDIY2
- VTK::FiltersTemporal
- VTK::FiltersOpenTURNS
- VTK::FiltersImaging
- VTK::ImagingGeneral
- VTK::FiltersGeometryPreview
- VTK::FiltersGeneric
- VTK::FiltersFlowPaths
- VTK::FiltersAMR
- VTK::FiltersParallel
- VTK::FiltersTexture
- VTK::FiltersModeling
- VTK::DomainsMicroscopy
- VTK::DomainsChemistryOpenGL2
- VTK::RenderingOpenGL2
- VTK::glad
- VTK::RenderingUI
- VTK::RenderingHyperTreeGrid
- VTK::FiltersHybrid
- VTK::DomainsChemistry
- VTK::CommonArchive
- VTK::ChartsCore
- VTK::InfovisCore
- VTK::FiltersExtraction
- VTK::ParallelDIY
- VTK::IOXML
- VTK::IOXMLParser
- VTK::expat
- VTK::diy2
- VTK::ParallelCore
- VTK::IOLegacy
- VTK::IOCellGrid
- VTK::FiltersCellGrid
- VTK::IOCore
- VTK::lzma
- VTK::lz4
- VTK::FiltersStatistics
- VTK::eigen
- VTK::FiltersHyperTree
- VTK::ImagingSources
- VTK::IOImage
- VTK::tiff
- VTK::png
- VTK::metaio
- VTK::jpeg
- VTK::DICOMParser
- VTK::RenderingContext2D
- VTK::RenderingFreeType
- VTK::utf8
- VTK::freetype
- VTK::zlib
- VTK::RenderingCore
- VTK::FiltersSources
- VTK::CommonColor
- VTK::AcceleratorsVTKmFilters
- VTK::ImagingCore
- VTK::FiltersGeneral
- VTK::fmt
- VTK::FiltersVerdict
- VTK::verdict
- VTK::FiltersGeometry
- VTK::CommonComputationalGeometry
- VTK::FiltersCore
- VTK::FiltersReduction
- VTK::CommonExecutionModel
- VTK::AcceleratorsVTKmDataModel
- VTK::CommonDataModel
- VTK::pugixml
- VTK::pegtl
- VTK::CommonSystem
- VTK::CommonMisc
- VTK::exprtk
- VTK::CommonTransforms
- VTK::CommonMath
- VTK::kissfft
- VTK::AcceleratorsVTKmCore
- VTK::vtkvtkm
- VTK::CommonCore
- VTK::doubleconversion
- VTK::fast_float
- VTK::token
- VTK::nlohmannjson
- VTK::vtksys
- VTK::kwiml
```

OpenXRRemoting
```
Search results:
[14 files and 0 directories found]
- d:\work\vtk2025\codes\VTK-9.4.2\CMake\FindOpenXRRemoting.cmake
- d:\work\vtk2025\codes\VTK-9.4.2\CMake\vtkInstall\CMakePackage.cmake
- d:\work\vtk2025\codes\VTK-9.4.2\Documentation\docs\supported_hardware.md
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXR\README.md
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\CMakeLists.txt
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\README.md
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\Testing\Cxx\CMakeLists.txt
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\Testing\Cxx\TestOpenXRRemotingInitialization.cxx
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\Testing\Cxx\TestOpenXRRemotingInstantiation.cxx
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\vtk.module
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\vtkOpenXRManagerD3DGraphics.h
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\vtkOpenXRManagerRemoteConnection.h
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\vtkOpenXRRemotingRenderWindow.cxx
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\OpenXRRemoting\vtkOpenXRRemotingRenderWindow.h
```

FontConfig(VTK-9.3.1)
```
Search results:
[13 files and 0 directories found]
- d:\work\vtk2025\VTK-9.3.1\CMake\CTestCustom.cmake.in
- d:\work\vtk2025\VTK-9.3.1\CMake\FindFontConfig.cmake
- d:\work\vtk2025\VTK-9.3.1\CMake\patches\3.19\FindX11.cmake
- d:\work\vtk2025\VTK-9.3.1\CMake\vtkInstall\CMakePackage.cmake
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeType\vtkFreeTypeTools.h
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeTypeFontConfig\Testing\Cxx\CMakeLists.txt
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeTypeFontConfig\Testing\Cxx\TestSystemFontRendering.cxx
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeTypeFontConfig\vtkFontConfigFreeTypeTools.cxx
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeTypeFontConfig\vtkFontConfigFreeTypeTools.h
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeTypeFontConfig\vtk.module
- d:\work\vtk2025\VTK-9.3.1\Rendering\FreeTypeFontConfig\CMakeLists.txt
- d:\work\vtk2025\VTK-9.3.1\ThirdParty\freetype\vtkfreetype\include\freetype\ftlcdfil.h
- d:\work\vtk2025\VTK-9.3.1\ThirdParty\freetype\vtkfreetype\src\truetype\ttsubpix.c
```

FontConfig(VTK-9.4.2)
```
Search results:
[13 files and 0 directories found]
- d:\work\vtk2025\codes\VTK-9.4.2\CMake\CTestCustom.cmake.in
- d:\work\vtk2025\codes\VTK-9.4.2\CMake\FindFontConfig.cmake
- d:\work\vtk2025\codes\VTK-9.4.2\CMake\patches\99\FindX11.cmake
- d:\work\vtk2025\codes\VTK-9.4.2\CMake\vtkInstall\CMakePackage.cmake
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeType\vtkFreeTypeTools.h
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeTypeFontConfig\CMakeLists.txt
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeTypeFontConfig\Testing\Cxx\CMakeLists.txt
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeTypeFontConfig\Testing\Cxx\TestSystemFontRendering.cxx
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeTypeFontConfig\vtk.module
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeTypeFontConfig\vtkFontConfigFreeTypeTools.cxx
- d:\work\vtk2025\codes\VTK-9.4.2\Rendering\FreeTypeFontConfig\vtkFontConfigFreeTypeTools.h
- d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\freetype\vtkfreetype\include\freetype\ftlcdfil.h
- d:\work\vtk2025\codes\VTK-9.4.2\ThirdParty\freetype\vtkfreetype\src\truetype\ttsubpix.c
```
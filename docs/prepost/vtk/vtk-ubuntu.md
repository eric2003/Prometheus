# VTK Ubuntu

## VTK_BUILD_TESTING

-  [VTK File Formats](https://docs.vtk.org/en/latest/design_documents/VTKFileFormats.html).

## build

### cmake
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

### sudo apt install libospray-dev
```
sudo apt install libospray-dev
```


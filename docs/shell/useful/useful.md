# Useful

## Link

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).

## 常用命令

### $env:PATH
```powershell
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
```

### IMPORTED_TARGETS
```cmake
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )
```

###
```
$env:PATH = "c:/msys64/mingw64/bin;" + $env:PATH
cmake -DCMAKE_FIND_DEBUG_MODE=TRUE ..
```

```
$env:PATH = "c:/Program Files (x86)/Intel/neAPI/2025.0/bin;" + $env:PATH
c:\Program Files (x86)\Intel\oneAPI\2025.0\bin\tbb12_debug.dll
```

### tar

```
tar -xvf 文件名.tar
tar -zxvf 文件名.tar.gz
tar -jxvf 文件名.tar.bz2
tar -Jxvf 文件名.tar.xz
```
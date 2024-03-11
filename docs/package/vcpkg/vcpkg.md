# vcpkg

vcpkg is a free C/C++ package manager for acquiring and managing libraries. Choose from over 1500 open source libraries to download and build in a single step or add your own private libraries to simplify your build process. Maintained by the Microsoft C++ team and open source contributors.


## article link

- [vcpkg.io](https://vcpkg.io/en/).
- [vcpkg documentation](https://learn.microsoft.com/en-us/vcpkg/).
- [vcpkg系列链接整理](https://zhuanlan.zhihu.com/p/564608106/).

## update
```
  .\vcpkg.exe update
  .\vcpkg.exe upgrade
  .\vcpkg.exe upgrade --no-dry-run
```

## git pull
```
  PS C:\dev\vcpkg> .\vcpkg.exe update
  Using local portfile versions. To update the local portfiles, use `git pull`.
```
 
## update example
```
  PS C:\dev\vcpkg> .\vcpkg.exe update
  Using local portfile versions. To update the local portfiles, use `git pull`.
  The following packages differ from their port versions:
          angle:x64-windows                chromium_5414#4 -> chromium_5414#7
          assimp:x64-windows               5.2.5 -> 5.3.1#3
          eigen3:x64-windows               3.4.0#2 -> 3.4.0#3
          kubazip:x64-windows              0.2.4 -> 0.2.6
          minizip:x64-windows              1.2.13#2 -> 1.3#1
          pugixml:x64-windows              1.13.0 -> 1.14
          rapidjson:x64-windows            2023-04-27 -> 2023-07-17
          utfcpp:x64-windows               3.2.3 -> 4.0.2
          vcpkg-get-python-packages:x64-windows 2022-06-30 -> 2023-07-28
          zlib:x64-windows                 1.2.13 -> 1.3  
```

## upgrade
```
  PS C:\dev\vcpkg> .\vcpkg.exe upgrade
  The following packages will be rebuilt:
    * angle:x64-windows -> chromium_5414#7
    * assimp:x64-windows -> 5.3.1#3
    * eigen3:x64-windows -> 3.4.0#3
    * kubazip:x64-windows -> 0.2.6
    * minizip:x64-windows -> 1.3#1
    * pugixml:x64-windows -> 1.14
    * rapidjson:x64-windows -> 2023-07-17
    * utfcpp:x64-windows -> 4.0.2
    * vcpkg-get-python-packages:x64-windows -> 2023-07-28
    * zlib:x64-windows -> 1.3
  The following packages will be built and installed:
    * polyclipping:x64-windows -> 6.4.2#12
    * vcpkg-cmake-get-vars:x64-windows -> 2023-03-02
  Additional packages (*) will be modified to complete this operation.
  If you are sure you want to rebuild the above packages, run this command with the --no-dry-run option.		  
```
  
## list
```
  .\vcpkg.exe list  
```
  
## install
```
  .\vcpkg.exe install eigen3 
``` 

## cmake
```
  cmake -DCMAKE_TOOLCHAIN_FILE="C:/dev/vcpkg/scripts/buildsystems/vcpkg.cmake" ..  
```  
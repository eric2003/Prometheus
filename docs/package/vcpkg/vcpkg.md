# vcpkg

vcpkg is a free C/C++ package manager for acquiring and managing libraries. Choose from over 1500 open source libraries to download and build in a single step or add your own private libraries to simplify your build process. Maintained by the Microsoft C++ team and open source contributors.


## article link

- [vcpkg.io](https://vcpkg.io/en/).
- [vcpkg documentation](https://learn.microsoft.com/en-us/vcpkg/).
- [vcpkg系列链接整理](https://zhuanlan.zhihu.com/p/564608106/).

## Set up vcpkg

1、Clone the repository
```
PS C:\dev> git clone https://github.com/microsoft/vcpkg.git
Cloning into 'vcpkg'...
remote: Enumerating objects: 245363, done.
remote: Counting objects: 100% (22102/22102), done.
remote: Compressing objects: 100% (378/378), done.
remote: Total 245363 (delta 21931), reused 21736 (delta 21724), pack-reused 223261 (from 1)Receiving objects: 100% (2453Receiving objects: 100% (245363/245363), 72.53 MiB | 4.07 MiB/s, done.

Resolving deltas: 100% (164093/164093), done.
Updating files: 100% (11632/11632), done.
```

2、Run the bootstrap script
```
cd vcpkg && bootstrap-vcpkg.bat
```

```
PS C:\dev\vcpkg> ./bootstrap-vcpkg.bat
Downloading https://github.com/microsoft/vcpkg-tool/releases/download/2024-08-01/vcpkg.exe -> C:\dev\vcpkg\vcpkg.exe (using IE proxy: 127.0.0.1:10809)... done.
Validating signature... done.

vcpkg package management program version 2024-08-01-fd884a0d390d12783076341bd43d77c3a6a15658

See LICENSE.txt for license information.
Telemetry
---------
vcpkg collects usage data in order to help us improve your experience.
The data collected by Microsoft is anonymous.
You can opt-out of telemetry by re-running the bootstrap-vcpkg script with -disableMetrics,
passing --disable-metrics to vcpkg on the command line,
or by setting the VCPKG_DISABLE_METRICS environment variable.

Read more about vcpkg telemetry at docs/about/privacy.md
```

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

## search
```
  .\vcpkg.exe search poly2tri
  .\vcpkg.exe search eigen
```

## remove

```
  .\vcpkg.exe remove --outdated
  .\vcpkg.exe remove --outdated --recurse
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

## error info

```
PS C:\dev\vcpkg> .\vcpkg.exe install eigen3
Computing installation plan...
The following packages will be built and installed:
    eigen3:x64-windows -> 3.4.0#4
  * vcpkg-cmake:x64-windows -> 2024-04-23
  * vcpkg-cmake-config:x64-windows -> 2024-05-23
Additional packages (*) will be modified to complete this operation.
error: in triplet x64-windows: Unable to find a valid Visual Studio instance
Could not locate a complete Visual Studio instance
The following paths were examined for Visual Studio instances:
    C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary/Build\vcvarsall.bat
```
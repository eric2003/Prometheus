# ParaView-Install

## Article Link

-  [ParaView 源码编译教程](https://zhuanlan.zhihu.com/p/591834284).
-  [windows编译Paraview源码](https://blog.csdn.net/changyana/article/details/128588488).
-  [Paraview source code analysis 1: Compile Paraview source code with cmake under Windows](https://www.caxkernel.com/5007.html).
-  [Github Paraview](https://gitlab.kitware.com/paraview/paraview).
-  [科学可视化软件介绍 – Paraview](https://zhuanlan.zhihu.com/p/681761901).
-  [ubuntu22.04安装Paraview 5.12，使用linux包指定版本安装](https://www.cnblogs.com/zhg1016/p/18828829).


## Windows

### download

```
c:\software\ParaView 5.13.3\
```

### git clone --recursive https://gitlab.kitware.com/paraview/paraview.git
```
PS D:\work\paraview_work> git clone --recursive https://gitlab.kitware.com/paraview/paraview.git
Cloning into 'paraview'...
remote: Enumerating objects: 520539, done.
remote: Counting objects: 100% (1239/1239), done.
remote: Compressing objects: 100% (683/683), done.
remote: Total 520539 (delta 610), reused 1013 (delta 510), pack-reused 519300 (from 1)
Receiving objects: 100% (520539/520539), 225.21 MiB | 155.00 KiB/s, done.
Resolving deltas: 100% (388312/388312), done.
Updating files: 100% (10702/10702), done.
Submodule 'ThirdParty/IceT/vtkicet' (https://gitlab.kitware.com/paraview/icet.git) registered for path 'ThirdParty/IceT/vtkicet'
Submodule 'ThirdParty/QtTesting/vtkqttesting' (https://gitlab.kitware.com/paraview/qttesting.git) registered for path 'ThirdParty/QtTesting/vtkqttesting'
Submodule 'Utilities/VisItBridge' (https://gitlab.kitware.com/paraview/visitbridge.git) registered for path 'Utilities/VisItBridge'
Submodule 'VTK' (https://gitlab.kitware.com/vtk/vtk.git) registered for path 'VTK'
Cloning into 'D:/work/paraview_work/paraview/ThirdParty/IceT/vtkicet'...
remote: Enumerating objects: 4600, done.
remote: Total 4600 (delta 0), reused 0 (delta 0), pack-reused 4600 (from 1)
Receiving objects: 100% (4600/4600), 1.15 MiB | 173.00 KiB/s, done.
Resolving deltas: 100% (3457/3457), done.
Cloning into 'D:/work/paraview_work/paraview/ThirdParty/QtTesting/vtkqttesting'...
remote: Enumerating objects: 2750, done.
remote: Counting objects: 100% (631/631), done.
remote: Compressing objects: 100% (230/230), done.
remote: Total 2750 (delta 411), reused 619 (delta 401), pack-reused 2119 (from 1)
Receiving objects: 100% (2750/2750), 777.27 KiB | 220.00 KiB/s, done.
Resolving deltas: 100% (2052/2052), done.
Cloning into 'D:/work/paraview_work/paraview/Utilities/VisItBridge'...
remote: Enumerating objects: 14585, done.
remote: Counting objects: 100% (397/397), done.
remote: Compressing objects: 100% (166/166), done.
remote: Total 14585 (delta 231), reused 395 (delta 231), pack-reused 14188 (from 1)
Receiving objects: 100% (14585/14585), 11.79 MiB | 188.00 KiB/s, done.
Resolving deltas: 100% (11140/11140), done.
Cloning into 'D:/work/paraview_work/paraview/VTK'...
remote: Enumerating objects: 750320, done.
remote: Counting objects: 100% (2834/2834), done.
remote: Compressing objects: 100% (1337/1337), done.
remote: Total 750320 (delta 1543), reused 2686 (delta 1469), pack-reused 747486 (from 1)
Receiving objects: 100% (750320/750320), 287.30 MiB | 232.00 KiB/s, done.
Resolving deltas: 100% (576471/576471), done.
Submodule path 'ThirdParty/IceT/vtkicet': checked out 'a79570acf121231aea53be23fe200b740a85c23c'
Submodule path 'ThirdParty/QtTesting/vtkqttesting': checked out '209801f09fad0ec2ad5577a8cc9e6edb45657c2b'
Submodule path 'Utilities/VisItBridge': checked out 'e7253e13240124d5be544e400bcaa8635712e253'
Submodule path 'VTK': checked out 'd6a17f22a64e161637d28015b43a3b10af07fd0a'
```

```
PARAVIEW_USE_PYTHON
VTK_SMP_ENABLE_TBB
```


```
PARAVIEW_USE_PYTHON
VTK_SMP_ENABLE_TBB
PARAVIEW_BUILD_ALL_MODULES ON
PARAVIEW_BUILD_TESTING ON
PARAVIEW_ENABLE_EXAMPLES ON
VTK_SMP_IMPLEMENTATION_TYPE TBB
```
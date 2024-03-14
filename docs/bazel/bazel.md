# Bazel

## Article link

-  [Bazel build system](https://drake.mit.edu/bazel.html).
-  [Bazel Tutorial for C++ in 30 Minutes](https://www.youtube.com/watch?v=kLLDzLWzuag/).
-  [Bazel编译工具【C++】【Java】【Google Test】](https://www.bilibili.com/video/BV14h411A7r6/).
-  [How to Build Bazel on Windows](https://www.youtube.com/watch?v=cbJRapp_KFw/).
-  [bazel系列链接整理](https://zhuanlan.zhihu.com/p/686281020/).
-  [编译构建工具-bazel](https://zhulao.gitee.io/blog/2019/04/05/%E7%BC%96%E8%AF%91%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7-bazel/index.html).
-  [Bazel学习笔记](https://blog.gmem.cc/bazel-study-note/).
-  [[Bazel]自定义规则实现将多个静态库合并为一个动态库或静态库](https://zhuanlan.zhihu.com/p/202663666/).
-  [Building with Bazel](https://www.kodeco.com/31558158-building-with-bazel/).


## bazel系列链接整理

-  [windows11+powershell+bazel编译运行c++helloworld简单测试](https://zhuanlan.zhihu.com/p/686278307/).
-  [windows11+bazel编译运行c++ helloworld stage2简单测试](https://zhuanlan.zhihu.com/p/686329154/).
-  [windows11+bazel编译运行c++ helloworld stage3简单测试](https://zhuanlan.zhihu.com/p/686337470/).

## bazel rules

-  [November 2022: Writing Bazel Rules (Jay Conrod)](https://www.youtube.com/watch?v=2KUunGBZiiM/).
-  [一步步学写Bazel lib&rules （2） - 写一个简单的 go rules](https://cloud.tencent.com/developer/article/2175870/).
-  [Writing Bazel rules: repository rules](https://jayconrod.com/posts/110/writing-bazel-rules--repository-rules/).
-  [November 2022: Writing Bazel Rules (Jay Conrod)](https://www.youtube.com/watch?v=2KUunGBZiiM/).


## fortran.bzl

-  [fortran.bzl](https://github.com/aburgm/openblas-bazel/blob/master/tools/fortran_rules/fortran.bzl).

## Install bazelisk

```
On macOS: brew install bazelisk.
On Windows: choco install bazelisk.
```

Install example
```
PS C:\WINDOWS\system32> choco install bazelisk
Chocolatey v2.2.2
Installing the following packages:
bazelisk
By installing, you accept licenses for the packages.
Progress: Downloading bazelisk 1.19.0... 100%

bazelisk v1.19.0 [Approved]
bazelisk package files install completed. Performing other installation steps.
The package bazelisk wants to run 'chocolateyinstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): y

Using system proxy server '127.0.0.1:10809'.
Downloading bazelisk 64 bit
  from 'https://github.com/bazelbuild/bazelisk/releases/download/v1.19.0/bazelisk-windows-amd64.exe'
Using system proxy server '127.0.0.1:10809'.
Progress: 100% - Completed download of C:\ProgramData\chocolatey\lib\bazelisk\bazelisk.exe (7.6 MB).
Download of bazelisk.exe (7.6 MB) completed.
Hashes match.
C:\ProgramData\chocolatey\lib\bazelisk\bazelisk.exe
C:\ProgramData\chocolatey\lib\bazelisk\bazel.exe
 ShimGen has successfully created a shim for bazel.exe
 ShimGen has successfully created a shim for bazelisk.exe
 The install of bazelisk was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.

Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
```

choco install bazel
```
PS C:\WINDOWS\system32> choco install bazel
Chocolatey v2.2.2
Installing the following packages:
bazel
By installing, you accept licenses for the packages.
Progress: Downloading chocolatey-compatibility.extension 1.0.0... 100%

chocolatey-compatibility.extension v1.0.0 [Approved]
chocolatey-compatibility.extension package files install completed. Performing other installation steps.
 Installed/updated chocolatey-compatibility extensions.
 The install of chocolatey-compatibility.extension was successful.
  Software installed to 'C:\ProgramData\chocolatey\extensions\chocolatey-compatibility'
Progress: Downloading chocolatey-core.extension 1.4.0... 100%

chocolatey-core.extension v1.4.0 [Approved]
chocolatey-core.extension package files install completed. Performing other installation steps.
 Installed/updated chocolatey-core extensions.
 The install of chocolatey-core.extension was successful.
  Software installed to 'C:\ProgramData\chocolatey\extensions\chocolatey-core'
Progress: Downloading chocolatey-windowsupdate.extension 1.0.5... 100%

chocolatey-windowsupdate.extension v1.0.5 [Approved]
chocolatey-windowsupdate.extension package files install completed. Performing other installation steps.
 Installed/updated chocolatey-windowsupdate extensions.
 The install of chocolatey-windowsupdate.extension was successful.
  Software installed to 'C:\ProgramData\chocolatey\extensions\chocolatey-windowsupdate'
Progress: Downloading KB2919442 1.0.20160915... 100%

KB2919442 v1.0.20160915 [Approved]
KB2919442 package files install completed. Performing other installation steps.
The package KB2919442 wants to run 'ChocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): Y

Skipping installation because this hotfix only applies to Windows 8.1 and Windows Server 2012 R2.
 The install of KB2919442 was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.
Progress: Downloading KB2919355 1.0.20160915... 100%

KB2919355 v1.0.20160915 [Approved]
KB2919355 package files install completed. Performing other installation steps.
The package KB2919355 wants to run 'ChocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): A

Skipping installation because this hotfix only applies to Windows 8.1 and Windows Server 2012 R2.
 The install of KB2919355 was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.
Progress: Downloading KB2999226 1.0.20181019... 100%

KB2999226 v1.0.20181019 [Approved] - Possibly broken
KB2999226 package files install completed. Performing other installation steps.
Skipping installation because update KB2999226 does not apply to this operating system (Microsoft Windows 11 专业版).
 The install of KB2999226 was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.
Progress: Downloading KB3035131 1.0.3... 100%

KB3035131 v1.0.3 [Approved]
KB3035131 package files install completed. Performing other installation steps.
Skipping installation because update KB3035131 does not apply to this operating system (Microsoft Windows 11 专业版).
 The install of KB3035131 was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.
Progress: Downloading KB3033929 1.0.5... 100%

KB3033929 v1.0.5 [Approved]
KB3033929 package files install completed. Performing other installation steps.
Skipping installation because update KB3033929 does not apply to this operating system (Microsoft Windows 11 专业版).
 The install of KB3033929 was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.
Progress: Downloading vcredist140 14.38.33135... 100%

vcredist140 v14.38.33135 [Approved]
vcredist140 package files install completed. Performing other installation steps.
Using system proxy server '127.0.0.1:10809'.
Downloading vcredist140-x86
  from 'https://download.visualstudio.microsoft.com/download/pr/71c6392f-8df5-4b61-8d50-dba6a525fb9d/510FC8C2112E2BC544FB29A72191EABCC68D3A5A7468D35D7694493BC8593A79/VC_redist.x86.exe'
Using system proxy server '127.0.0.1:10809'.
Progress: 100% - Completed download of C:\Users\eric\AppData\Local\Temp\chocolatey\vcredist140\14.38.33135\VC_redist.x86.exe (13.21 MB).
Download of VC_redist.x86.exe (13.21 MB) completed.
Hashes match.
Installing vcredist140-x86...
vcredist140-x86 has been installed.
Using system proxy server '127.0.0.1:10809'.
Downloading vcredist140-x64 64 bit
  from 'https://download.visualstudio.microsoft.com/download/pr/6ba404bb-6312-403e-83be-04b062914c98/1AD7988C17663CC742B01BEF1A6DF2ED1741173009579AD50A94434E54F56073/VC_redist.x64.exe'
Using system proxy server '127.0.0.1:10809'.
Progress: 100% - Completed download of C:\Users\eric\AppData\Local\Temp\chocolatey\vcredist140\14.38.33135\VC_redist.x64.exe (24.24 MB).
Download of VC_redist.x64.exe (24.24 MB) completed.
Hashes match.
Installing vcredist140-x64...
vcredist140-x64 has been installed.
  vcredist140 may be able to be automatically uninstalled.
 The install of vcredist140 was successful.
  Software installed as 'exe', install location is likely default.
Progress: Downloading bazel 7.0.2... 100%

bazel v7.0.2 [Approved]
bazel package files install completed. Performing other installation steps.
Content of C:\ProgramData\chocolatey\lib\bazel\tools\params.txt:
https://github.com/bazelbuild/bazel/releases/download/7.0.2/bazel-7.0.2-windows-x86_64.zip
8805ade79cbb7c17e2d095ee1f26be64769dd5403a14b84dff13ae8cac626fe9

url:  https://github.com/bazelbuild/bazel/releases/download/7.0.2/bazel-7.0.2-windows-x86_64.zip
hash: 8805ade79cbb7c17e2d095ee1f26be64769dd5403a14b84dff13ae8cac626fe9
Using system proxy server '127.0.0.1:10809'.
Downloading bazel 64 bit
  from 'https://github.com/bazelbuild/bazel/releases/download/7.0.2/bazel-7.0.2-windows-x86_64.zip'
Using system proxy server '127.0.0.1:10809'.
Progress: 100% - Completed download of C:\Users\eric\AppData\Local\Temp\chocolatey\bazel\7.0.2\bazel-7.0.2-windows-x86_64.zip (49.44 MB).
Download of bazel-7.0.2-windows-x86_64.zip (49.44 MB) completed.
Hashes match.
Extracting C:\Users\eric\AppData\Local\Temp\chocolatey\bazel\7.0.2\bazel-7.0.2-windows-x86_64.zip to C:\ProgramData\chocolatey\lib\bazel...
C:\ProgramData\chocolatey\lib\bazel
bazel installed to C:\ProgramData\chocolatey\lib\bazel

See also https://bazel.build/docs/windows.html
 ShimGen has successfully created a shim for bazel.exe
 The install of bazel was successful.
  Software installed to 'C:\ProgramData\chocolatey\lib\bazel'

Chocolatey installed 10/10 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

Installed:
 - bazel v7.0.2
 - chocolatey-compatibility.extension v1.0.0
 - chocolatey-core.extension v1.4.0
 - chocolatey-windowsupdate.extension v1.0.5
 - KB2919355 v1.0.20160915
 - KB2919442 v1.0.20160915
 - KB2999226 v1.0.20181019
 - KB3033929 v1.0.5
 - KB3035131 v1.0.3
 - vcredist140 v14.38.33135

Packages requiring reboot:
 - vcredist140 (exit code 3010)

The recent package changes indicate a reboot is necessary.
 Please reboot at your earliest convenience.
```

bazel build
```
bazel build //main:testprj
```

```
.\bazel-bin\main\testprj
```

bazel run //main:testprj

```
bazel run //main:testprj
```

bazel clean --expunge
```
bazel clean --expunge
```

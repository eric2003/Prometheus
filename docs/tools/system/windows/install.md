# Windows Install

## Wix

The WiX toolset lets developers create installers for Windows Installer, the Windows installation engine.

-  [wixtoolset.org](https://wixtoolset.org/).
-  [Get started with WiX](https://wixtoolset.org/docs/intro/).

dotnet tool install --global wix
```
PS C:\Users\eric> dotnet tool install --global wix

欢迎使用 .NET 8.0!
---------------------
SDK 版本: 8.0.204

遥测
---------
.NET 工具会收集用法数据，帮助我们改善你的体验。它由 Microsoft 收集并与社区共享。你可通过使用喜欢的 shell 将 DOTNET_CLI_TELEMETRY_OPTOUT 环境变量设置为 "1" 或 "true" 来选择退出遥测。

阅读有关 .NET CLI 工具遥测的更多信息: https://aka.ms/dotnet-cli-telemetry

----------------
已安装 ASP.NET Core HTTPS 开发证书。
若要信任该证书，请运行 "dotnet dev-certs https --trust"
了解 HTTPS: https://aka.ms/dotnet-https

----------------
编写第一个应用: https://aka.ms/dotnet-hello-world
了解新增功能: https://aka.ms/dotnet-whats-new
浏览文档: https://aka.ms/dotnet-docs
报告问题并在 GitHub 上查找来源: https://github.com/dotnet/core
使用 "dotnet --help" 查看可用命令或访问: https://aka.ms/dotnet-cli
--------------------------------------------------------------------------------------
可使用以下命令调用工具: wix
已成功安装工具“wix”(版本“5.0.0”)。
```

## Path for wix.exe

```
C:\Users\eric\.dotnet\tools\wix.exe
```

wix --version
```
PS C:\Users\eric> wix --version
5.0.0+41e11442
```

dotnet tool update --global wix
```
PS C:\Users\eric> dotnet tool update --global wix
工具“wix”已重新安装稳定版本(版本“5.0.0”)。
```

Get-Command -Name wix
```
PS C:\Users\eric> Get-Command -Name wix

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     wix.exe                                            5.0.0.0    C:\Users\eric\.dotnet\tools\wix.exe
```

## CMake Find WIX_EXECUTABLE

```cmake
if (WIN32)
  set (PF_ENV_EXT "(x86)")
  find_program (NSIS_EXECUTABLE NSIS.exe PATHS "$ENV{ProgramFiles}\\NSIS" "$ENV{ProgramFiles${PF_ENV_EXT}}\\NSIS")
  if(NOT CPACK_WIX_ROOT)
    file(TO_CMAKE_PATH "$ENV{WIX}" CPACK_WIX_ROOT)
  endif ()
  find_program (WIX_EXECUTABLE candle  PATHS "${CPACK_WIX_ROOT}/bin")
endif ()
```
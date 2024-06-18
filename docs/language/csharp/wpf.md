# CSharp WPF

## WPF Link

-  [C Sharp (programming language)](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)).
-  [WPF C# Tutorial - Dynamically add and remove items from canvas in visual studio](https://www.youtube.com/watch?v=8eTWq27h4sY).
-  [WPF | Adding Icon To Your WPF Application | HD](https://www.youtube.com/watch?v=2ikwsp3c0OM).
-  [WPF | Adding Icon To Your WPF Application | HD](https://www.youtube.com/watch?v=2ikwsp3c0OM).
-  [C# Tutorial – Create a Tic Tac Toe game and play against CPU](https://www.youtube.com/watch?v=205ZVRsyXVo/).
-  [C# Tutorial – Create a Tic Tac Toe game and play against AI Opponent](https://www.mooict.com/c-tutorial-create-a-tic-tac-toe-game-and-play-against-ai-opponent/).
-  [C# and WPF: Adding Buttons to ArrayList in Code](https://www.youtube.com/watch?v=hRFPI5-Fykw/).
-  [C# - Tic Tac Toe Game](https://www.youtube.com/watch?v=zIYL0szr7NA/).
-  [Programming a Tic-Tac-Toe Game in C# - Full Guide](https://www.youtube.com/watch?v=OHRWRpT9WcE/).


## WpfApp.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>WinExe</OutputType>
    <TargetFramework>net8.0-windows</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <UseWPF>true</UseWPF>
  </PropertyGroup>

</Project>
```

App.xaml
```xml
<Application x:Class="WpfApp.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp"
             StartupUri="MainWindow.xaml">
    <Application.Resources>
         
    </Application.Resources>
</Application>
```

MainWindow.xaml
```xml
<Window x:Class="WpfApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>

    </Grid>
</Window>
```

AssemblyInfo.cs
```cs
using System.Windows;

[assembly: ThemeInfo(
    ResourceDictionaryLocation.None,            //where theme specific resource dictionaries are located
                                                //(used if a resource is not found in the page,
                                                // or application resource dictionaries)
    ResourceDictionaryLocation.SourceAssembly   //where the generic resource dictionary is located
                                                //(used if a resource is not found in the page,
                                                // app, or any theme specific resource dictionaries)
)]

```

App.xaml.cs
```cs
using System.Configuration;
using System.Data;
using System.Windows;

namespace WpfApp
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
    }

}
```

MainWindow.xaml.cs
```cs
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }
}
```

project.assets.json
```json
{
  "version": 3,
  "targets": {
    "net8.0-windows7.0": {}
  },
  "libraries": {},
  "projectFileDependencyGroups": {
    "net8.0-windows7.0": []
  },
  "packageFolders": {
    "C:\\Users\\eric\\.nuget\\packages\\": {}
  },
  "project": {
    "version": "1.0.0",
    "restore": {
      "projectUniqueName": "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\WpfApp.csproj",
      "projectName": "WpfApp",
      "projectPath": "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\WpfApp.csproj",
      "packagesPath": "C:\\Users\\eric\\.nuget\\packages\\",
      "outputPath": "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\obj\\",
      "projectStyle": "PackageReference",
      "configFilePaths": [
        "C:\\Users\\eric\\AppData\\Roaming\\NuGet\\NuGet.Config"
      ],
      "originalTargetFrameworks": [
        "net8.0-windows"
      ],
      "sources": {
        "c:\\dev\\vcpkg\\scripts\\buildsystems\\": {},
        "https://api.nuget.org/v3/index.json": {}
      },
      "frameworks": {
        "net8.0-windows7.0": {
          "targetAlias": "net8.0-windows",
          "projectReferences": {}
        }
      },
      "warningProperties": {
        "warnAsError": [
          "NU1605"
        ]
      },
      "restoreAuditProperties": {
        "enableAudit": "true",
        "auditLevel": "low",
        "auditMode": "direct"
      }
    },
    "frameworks": {
      "net8.0-windows7.0": {
        "targetAlias": "net8.0-windows",
        "imports": [
          "net461",
          "net462",
          "net47",
          "net471",
          "net472",
          "net48",
          "net481"
        ],
        "assetTargetFallback": true,
        "warn": true,
        "frameworkReferences": {
          "Microsoft.NETCore.App": {
            "privateAssets": "all"
          },
          "Microsoft.WindowsDesktop.App.WPF": {
            "privateAssets": "none"
          }
        },
        "runtimeIdentifierGraphPath": "C:\\Program Files\\dotnet\\sdk\\8.0.300/PortableRuntimeIdentifierGraph.json"
      }
    }
  }
}
```

WpfApp.csproj.nuget.dgspec.json
```json
{
  "format": 1,
  "restore": {
    "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\WpfApp.csproj": {}
  },
  "projects": {
    "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\WpfApp.csproj": {
      "version": "1.0.0",
      "restore": {
        "projectUniqueName": "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\WpfApp.csproj",
        "projectName": "WpfApp",
        "projectPath": "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\WpfApp.csproj",
        "packagesPath": "C:\\Users\\eric\\.nuget\\packages\\",
        "outputPath": "D:\\work\\csharp_work\\ModernCSharp\\codes\\wpf\\simple\\01\\WpfApp\\obj\\",
        "projectStyle": "PackageReference",
        "configFilePaths": [
          "C:\\Users\\eric\\AppData\\Roaming\\NuGet\\NuGet.Config"
        ],
        "originalTargetFrameworks": [
          "net8.0-windows"
        ],
        "sources": {
          "c:\\dev\\vcpkg\\scripts\\buildsystems\\": {},
          "https://api.nuget.org/v3/index.json": {}
        },
        "frameworks": {
          "net8.0-windows7.0": {
            "targetAlias": "net8.0-windows",
            "projectReferences": {}
          }
        },
        "warningProperties": {
          "warnAsError": [
            "NU1605"
          ]
        },
        "restoreAuditProperties": {
          "enableAudit": "true",
          "auditLevel": "low",
          "auditMode": "direct"
        }
      },
      "frameworks": {
        "net8.0-windows7.0": {
          "targetAlias": "net8.0-windows",
          "imports": [
            "net461",
            "net462",
            "net47",
            "net471",
            "net472",
            "net48",
            "net481"
          ],
          "assetTargetFallback": true,
          "warn": true,
          "frameworkReferences": {
            "Microsoft.NETCore.App": {
              "privateAssets": "all"
            },
            "Microsoft.WindowsDesktop.App.WPF": {
              "privateAssets": "none"
            }
          },
          "runtimeIdentifierGraphPath": "C:\\Program Files\\dotnet\\sdk\\8.0.300/PortableRuntimeIdentifierGraph.json"
        }
      }
    }
  }
}
```

WpfApp.deps.json
```json
{
  "runtimeTarget": {
    "name": ".NETCoreApp,Version=v8.0",
    "signature": ""
  },
  "compilationOptions": {},
  "targets": {
    ".NETCoreApp,Version=v8.0": {
      "WpfApp/1.0.0": {
        "runtime": {
          "WpfApp.dll": {}
        }
      }
    }
  },
  "libraries": {
    "WpfApp/1.0.0": {
      "type": "project",
      "serviceable": false,
      "sha512": ""
    }
  }
}
```

WpfApp.runtimeconfig.json
```json
{
  "runtimeOptions": {
    "tfm": "net8.0",
    "frameworks": [
      {
        "name": "Microsoft.NETCore.App",
        "version": "8.0.0"
      },
      {
        "name": "Microsoft.WindowsDesktop.App",
        "version": "8.0.0"
      }
    ],
    "configProperties": {
      "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": true
    }
  }
}
```

xaml comment
```xml
    <!-- Cool comment -->
    <!--
    这是一个多行注释示例
    可以跨越多行
    -->
```


## Dynamically add and remove items from canvas

MainWindow.xaml
```xml
<Window x:Class="MyCanvasApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:MyCanvasApp"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Canvas Name="myCanvas" Background="LightYellow"
            Focusable="True" MouseLeftButtonDown="AddOrRemoveItems">
    </Canvas>
</Window>
```

MainWindow.xaml.cs
```csharp
using System;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MyCanvasApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        Brush customColor;
        Random random = new Random();
        public MainWindow()
        {
            InitializeComponent();
        }
        private void AddOrRemoveItems(object sender, MouseButtonEventArgs e)
        {
            if (e.OriginalSource is Rectangle)
            {
                Rectangle activeRectangle = (Rectangle)e.OriginalSource;
                myCanvas.Children.Remove(activeRectangle);
            }
            else
            {
                byte r = (byte)random.Next(1, 255);
                byte g = (byte)random.Next(1, 255);
                byte b = (byte)random.Next(1, 255);
                customColor = new SolidColorBrush(Color.FromRgb(r,g,b));
                Rectangle newRectangle = new Rectangle
                {
                    Width = 50,
                    Height = 50,
                    Fill = customColor,
                    StrokeThickness = 3,
                    Stroke = Brushes.Black
                };
                Canvas.SetLeft(newRectangle, Mouse.GetPosition(myCanvas).X);
                Canvas.SetTop(newRectangle, Mouse.GetPosition(myCanvas).Y);
                myCanvas.Children.Add(newRectangle);
            }
        }
    }
}
```
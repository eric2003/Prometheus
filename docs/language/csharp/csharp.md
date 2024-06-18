# CSharp

## CSharp Link

-  [C Sharp (programming language)](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)).
-  [C# Tutorial](https://www.w3schools.com/cs/index.php).
-  [Creating and Using DLL (Class Library) in C#](https://www.c-sharpcorner.com/UploadFile/1e050f/creating-and-using-dll-class-library-in-C-Sharp/).
-  [Creating and Using DLL (Class Library) in C#-geeksforgeeks](https://www.geeksforgeeks.org/creating-and-using-dll-class-library-in-c/).
-  [新版C#从入门到精通全套视频教程](https://www.bilibili.com/video/BV1fz421Z72C/).
-  [C# Made Easy Tutorial](https://www.youtube.com/watch?v=g4kapgEkalQ&list=PLHJE4y54mpC4TJHNjp6aYkv2sM8iq7ySd).
-  [Game Math & Physics](https://www.youtube.com/watch?v=mMGgisZP-oc&list=PLHJE4y54mpC6IBdi6KDZrSvrZetHgB3Tl).


## CSharp Game

-  [Programming a Snake Game in C# - Full Guide](https://www.youtube.com/watch?v=uzAXxFBbVoE/).
-  [Programming a Tetris Game in C# - Full Guide](https://www.youtube.com/watch?v=jcUctrLC-7M/).
-  [Programming a Tic-Tac-Toe Game in C# - Full Guide](https://www.youtube.com/watch?v=OHRWRpT9WcE/).
-  [Make a Top Down Zombie Shooter Game in Windows Form and C#](https://www.youtube.com/watch?v=TxmhaSTRav4/).
-  [How to Make a Battle Ship Game in Windows Form and C#](https://www.youtube.com/watch?v=ZMppynIIqKs/).
-  [Make a Top Down Zombie Shooter Game in Windows Form and C#](https://www.youtube.com/watch?v=TxmhaSTRav4/).
-  [C# Tutorial - Make a flappy bird game in windows form](https://www.youtube.com/watch?v=yUCCv-sFUDQ/).
-  [How to make PAC MAN game in Windows Form and C# with Visual Studio](https://www.youtube.com/watch?v=fdw-HGIMZFY/).
-  [How to make a fighter jet shooter game in C# and windows form](https://www.youtube.com/watch?v=tIA9RcpPfgc/).
-  [C#, how to make a basic game with WPF.xaml Pt 1, movement](https://www.youtube.com/watch?v=nU_zuOCkDww/).
-  [How to Make a Game Launcher and an Auto Updater With WPF | C# Game Launcher Tutorial](https://www.youtube.com/watch?v=JIjZQo03YdA/).
-  [How to make a game launcher like epic games in C# easy p1 Source Code](https://www.youtube.com/watch?v=uMpfEYxXK3I/).
-  [How to program Tic Tac Toe in C#](https://www.youtube.com/watch?v=gTt1iqVs0_U/).

## CSharp Graphics

-  [C# Graphics](https://www.youtube.com/watch?v=gTt1iqVs0_U/).


## WPF

-  [油管百万播放量 C# WPF UI 完整教程 - AngelSix](https://www.bilibili.com/video/BV1Lh4y1t7ix/).
-  [Tutorial: Create your first WPF application in Visual Studio 2019](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/getting-started/walkthrough-my-first-wpf-desktop-application?view=netframeworkdesktop-4.8/).



## XNA

-  [Getting Started With MonoGame](https://www.youtube.com/watch?v=N6r87rGDFV8/).
-  [Migrating from XNA](https://docs.monogame.net/articles/migrate_xna.html).

## MonoGame

-  [MonoGame](https://monogame.net/).
-  [MonoGame Basics: Part 1 - Install MonoGame and Visual Studio 2022](https://www.youtube.com/watch?v=Pu_Hi3ThVPs/).



## C# Xna Made Easy Tutorial

-  [C# Xna Made Easy Tutorial ](https://www.youtube.com/watch?v=exqk0lH7-xc&list=PLDC1A9D5C3F8ED318).


## CMake example

-  [CMake C#/.NET WPF Example](https://github.com/bemehiser/cmake_csharp_example).


```cmake
cmake_minimum_required(VERSION 3.29)

project(testprj)

enable_language(CSharp)

add_executable(${PROJECT_NAME})

target_sources( ${PROJECT_NAME}
    PRIVATE
        FileA.cs
		FileB.cs
)
```

## VS2022 set english language

```
Tools->Options->Environment->International Settings
Language
```


## shared library

### create shared library

CMakeList.txt
```
cmake_minimum_required(VERSION 3.29)

project(testprj)

enable_language(CSharp)

add_library( MyDll SHARED )

target_sources( MyDll
    PRIVATE
        MyDll.cs

)
```

MyDll.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDll
{
    public class MyHelloClass
    {
        public void SayHello()
        {
            Console.WriteLine("Hello From MyDll:MyHelloClass");

        }
    }
}
```

### use shared library
```cmake
cmake_minimum_required(VERSION 3.29)

project(testprj)

enable_language(CSharp)

set ( PRJ_LIBRARIES )

list ( APPEND PRJ_LIBRARIES ${LIBRARY_DIR}/MyDll.dll )

set( LIBRARY_DIR ${CMAKE_CURRENT_SOURCE_DIR} )


add_executable( ${PROJECT_NAME} )

set_target_properties( ${PROJECT_NAME} PROPERTIES
    VS_DOTNET_REFERENCE_MyDll ${LIBRARY_DIR}/MyDll.dll)


target_sources( ${PROJECT_NAME}
    PRIVATE
        main.cs
)

target_link_libraries ( ${PROJECT_NAME} 
    PRIVATE 
        ${PRJ_LIBRARIES}
)
```

main.cs
```csharp
using System;
using MyDll;

namespace usedll
{
    internal class MyTest
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            MyHelloClass obj = new MyHelloClass();
            obj.SayHello();
        }
    }
}
```

typical results:
```
PS D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01b\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.40.33808.0
-- The CXX compiler identification is MSVC 19.40.33808.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.40.33807/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.40.33807/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The CSharp compiler identification is Microsoft Visual Studio 2022
-- The CSharp compiler version is 2022
-- Check for working C# compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Current/Bin/Roslyn/csc.exe
-- Check for working C# compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Current/Bin/Roslyn/csc.exe - works
-- Configuring done (8.6s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/csharp_work/ModernCSharp/codes/dll/usedll/01b/build
PS D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01b\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.10.4+10fbfbf2e

  1>Checking Build System
  testprj -> D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01b\build\Debug\testprj.exe
  Building Custom Rule D:/work/csharp_work/ModernCSharp/codes/dll/usedll/01b/CMakeLists.txt
PS D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01b\build> .\Debug\testprj.exe
Hello World!
Hello From MyDll:MyHelloClass
```

use shared library example
```cmake
cmake_minimum_required(VERSION 3.29)

project(testprj)

enable_language(CSharp)

set( LIBRARY_DIR "d:/work/csharp_work/ModernCSharp/codes/dll/createdll/01/build/Debug" )

add_executable( ${PROJECT_NAME} )

set_target_properties( ${PROJECT_NAME} PROPERTIES
    VS_DOTNET_REFERENCE_MyDll ${LIBRARY_DIR}/MyDll.dll)

target_sources( ${PROJECT_NAME}
    PRIVATE
        main.cs
)
```

typical results:
```
PS D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01c\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.40.33808.0
-- The CXX compiler identification is MSVC 19.40.33808.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.40.33807/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.40.33807/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The CSharp compiler identification is Microsoft Visual Studio 2022
-- The CSharp compiler version is 2022
-- Check for working C# compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Current/Bin/Roslyn/csc.exe
-- Check for working C# compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Current/Bin/Roslyn/csc.exe - works
-- Configuring done (9.2s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/csharp_work/ModernCSharp/codes/dll/usedll/01c/build
PS D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01c\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.10.4+10fbfbf2e

  1>Checking Build System
  testprj -> D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01c\build\Debug\testprj.exe
  Building Custom Rule D:/work/csharp_work/ModernCSharp/codes/dll/usedll/01c/CMakeLists.txt
PS D:\work\csharp_work\ModernCSharp\codes\dll\usedll\01c\build> .\Debug\testprj.exe
Hello World!
Hello From MyDll:MyHelloClass
```

Link in other library dependencies that were built locally in this source tree.
```cmake
cmake_minimum_required(VERSION 3.29)

project(mainprj)

enable_language(CSharp)

add_library( MyDllLib SHARED )

target_sources( MyDllLib
    PRIVATE
        MyDll.cs
)

add_executable( mainprj )

target_sources( mainprj
    PRIVATE
        main.cs
)		

target_link_libraries( mainprj 
	private
		MyDllLib
)
```

typical results:
```
PS D:\work\csharp_work\ModernCSharp\codes\dll\createandusedll\01\build> cmake ..
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.40.33808.0
-- The CXX compiler identification is MSVC 19.40.33808.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.40.33807/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.40.33807/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- The CSharp compiler identification is Microsoft Visual Studio 2022
-- The CSharp compiler version is 2022
-- Check for working C# compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Current/Bin/Roslyn/csc.exe
-- Check for working C# compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Current/Bin/Roslyn/csc.exe - works
-- Configuring done (6.5s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/csharp_work/ModernCSharp/codes/dll/createandusedll/01/build
PS D:\work\csharp_work\ModernCSharp\codes\dll\createandusedll\01\build> cmake --build .
适用于 .NET Framework MSBuild 版本 17.10.4+10fbfbf2e

  1>Checking Build System
  MyDllLib -> D:\work\csharp_work\ModernCSharp\codes\dll\createandusedll\01\build\Debug\MyDllLib.dll
  mainprj -> D:\work\csharp_work\ModernCSharp\codes\dll\createandusedll\01\build\Debug\mainprj.exe
  Building Custom Rule D:/work/csharp_work/ModernCSharp/codes/dll/createandusedll/01/CMakeLists.txt
PS D:\work\csharp_work\ModernCSharp\codes\dll\createandusedll\01\build> .\Debug\mainprj.exe
Hello World!
Hello From MyDll:MyHelloClass
```

## VS_XAML_TYPE

```cmake
SET_PROPERTY(SOURCE App.xaml PROPERTY VS_XAML_TYPE "ApplicationDefinition")
```

set_source_files_properties
```
set_source_files_properties(App.xaml
                            PROPERTIES 
							VS_XAML_TYPE "ApplicationDefinition")
```

## VS_DOTNET_REFERENCES
```cmake
VS_DOTNET_REFERENCES 
"System;
System.Core;
System.Data;
System.Data.DataSetExtensions;
System.Drawing;
System.Net.Http;
System.Xaml;
System.Xml.Linq;
Microsoft.CSharp;
PresentationCore;
PresentationFramework;
WindowsBase"
```


## DOTNET_SDK

-  [DOTNET_SDK](https://cmake.org/cmake/help/latest/prop_tgt/DOTNET_SDK.html#dotnet-sdk).

```
Specify the .NET SDK for C# projects. For example: Microsoft.NET.Sdk.
```

## MessageBox

```csharp
MessageBox.Show("Hello, World!", "Message Box Title", MessageBoxButton.OK, MessageBoxImage.Information);
```

string $
```csharp
for ( int i = 0; i < 16; ++ i )
{
    string result = $"X{i}.png";
    Console.WriteLine( "result={0}", result);
}
```

## error
```
A file or folder with the name 'Form1.resx' already exists. 
Please give a unique name to the item you are adding, or delete the existing item first.
```
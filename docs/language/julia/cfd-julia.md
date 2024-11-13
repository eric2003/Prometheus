# Julia

## CFD_Julia系列

-  [CFD_Julia](https://zhuanlan.zhihu.com/p/523286979/).
-  [julialang.org](https://julialang.org/).
-  [Julia调用PyPlot绘图显示](https://zhuanlan.zhihu.com/p/524494365/).
-  [CFD_Julia Heat_Equation_FTCS简单测试](https://zhuanlan.zhihu.com/p/524516874/).
-  [CFD tutorial in Julia](https://zhuanlan.zhihu.com/p/524524598/).
-  [控制台执行Julia Plots](https://zhuanlan.zhihu.com/p/524700016/).
-  [Julia中文文档](https://zhuanlan.zhihu.com/p/524711647/).
-  [CFD_Julia Heat_Equation_RK3简单测试](https://zhuanlan.zhihu.com/p/524768410/).
-  [CFD_Julia Heat_Equation_CN简单测试](https://zhuanlan.zhihu.com/p/524786405/).
-  [CFD_Julia Heat_Equation_ICP简单测试](https://zhuanlan.zhihu.com/p/524816179/).
-  [CFD_Julia Inviscid_Burgers_WENO简单测试](https://zhuanlan.zhihu.com/p/524837303/).
-  [CFD_Julia Inviscid_Burgers_CRWENO简单测试](https://zhuanlan.zhihu.com/p/524843661/).
-  [CFD_Julia Inviscid_Burgers_Flux_Splitting简单测试](https://zhuanlan.zhihu.com/p/524915137/).
-  [CFD_Julia Inviscid_Burgers_Rieman简单测试](https://zhuanlan.zhihu.com/p/524927405/).
-  [CFD_Julia Euler_1D_Roe简单测试](https://zhuanlan.zhihu.com/p/524941082/).
-  [CFD_Julia Euler_1D_HLLC+Rusanov简单测试](https://zhuanlan.zhihu.com/p/524956488/).
-  [CFD_Julia Poisson_Solver_FFT简单测试](https://zhuanlan.zhihu.com/p/524966296/).
-  [CFD_Julia Poisson_Solver_FFT_Spectral简单测试](https://zhuanlan.zhihu.com/p/525055028/).
-  [CFD_Julia Poisson_Solver_FST简单测试](https://zhuanlan.zhihu.com/p/525058286/).
-  [CFD_Julia Poisson_Solver_Conjugate_Gradient简单测试](https://zhuanlan.zhihu.com/p/525072170/).
-  [CFD_Julia Poisson_Solver_Multigrid简单测试](https://zhuanlan.zhihu.com/p/525074670/).
-  [CFD_Julia Poisson_Solver_Gauss_Seidel简单测试](https://zhuanlan.zhihu.com/p/525098595/).
-  [CFD_Julia NS2D_Lid_Driven_Cavity简单测试](https://zhuanlan.zhihu.com/p/525105279/).
-  [CFD_Julia NS2D_Vortex_Merger简单测试](https://zhuanlan.zhihu.com/p/525109410/).
-  [CFD_Julia NS2D_Hybrid_Solver简单测试](https://zhuanlan.zhihu.com/p/525113260/).
-  [CFD_Julia NS2D_PseudoSpectral_32_Rule简单测试](https://zhuanlan.zhihu.com/p/525116517/).
-  [CFD_Julia NS2D_PseudoSpectral_23_Rule简单测试](https://zhuanlan.zhihu.com/p/525118575/).
-  [Julia 删除Manifest.toml+Project.toml后update](https://zhuanlan.zhihu.com/p/586677960/).
-  [Julia using Printf+@printf简单测试](https://zhuanlan.zhihu.com/p/586721694/).
-  [Windows11+Julia1.11.1 (October 16, 2024)Install简单测试](https://zhuanlan.zhihu.com/p/4341816521/).


### CFD_Julia Heat_Equation_FTCS简单测试
```
julia .\ftcs.jl
julia .\plotting2.jl
d:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\build\
julia ..\plotting2.jl
```

```powershell
PS D:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\build> julia ..\plotting2.jl
ERROR: LoadError: ArgumentError: Package CSV not found in current path.
- Run `import Pkg; Pkg.add("CSV")` to install the CSV package.
Stacktrace:
 [1] macro expansion
   @ .\loading.jl:1772 [inlined]
 [2] macro expansion
   @ .\lock.jl:267 [inlined]
 [3] __require(into::Module, mod::Symbol)
   @ Base .\loading.jl:1753
 [4] #invoke_in_world#3
   @ .\essentials.jl:926 [inlined]
 [5] invoke_in_world
   @ .\essentials.jl:923 [inlined]
 [6] require(into::Module, mod::Symbol)
   @ Base .\loading.jl:1746
in expression starting at D:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\plotting2.jl:1
```

```powershell
julia> import Pkg; Pkg.add("CSV")
  Installing known registries into `C:\Users\eric\.julia`
       Added `General` registry to C:\Users\eric\.julia\registries
    Updating registry at `C:\Users\eric\.julia\registries\General.toml`
   Resolving package versions...
   Installed WorkerUtilities ───────────── v1.6.1
   Installed Tables ────────────────────── v1.12.0
   Installed TranscodingStreams ────────── v0.11.2
   Installed Parsers ───────────────────── v2.8.1
   Installed DataAPI ───────────────────── v1.16.0
   Installed OrderedCollections ────────── v1.6.3
   Installed CSV ───────────────────────── v0.10.14
   Installed DataValueInterfaces ───────── v1.0.0
   Installed PooledArrays ──────────────── v1.4.3
   Installed InlineStrings ─────────────── v1.4.2
   Installed CodecZlib ─────────────────── v0.7.6
   Installed TableTraits ───────────────── v1.0.1
   Installed FilePathsBase ─────────────── v0.9.22
   Installed IteratorInterfaceExtensions ─ v1.0.0
   Installed SentinelArrays ────────────── v1.4.5
   Installed Compat ────────────────────── v4.16.0
   Installed PrecompileTools ───────────── v1.2.1
   Installed Preferences ───────────────── v1.4.3
   Installed WeakRefStrings ────────────── v1.4.2
    Updating `C:\Users\eric\.julia\environments\v1.10\Project.toml`
  [336ed68f] + CSV v0.10.14
    Updating `C:\Users\eric\.julia\environments\v1.10\Manifest.toml`
  [336ed68f] + CSV v0.10.14
  [944b1d66] + CodecZlib v0.7.6
  [34da2185] + Compat v4.16.0
  [9a962f9c] + DataAPI v1.16.0
  [e2d170a0] + DataValueInterfaces v1.0.0
  [48062228] + FilePathsBase v0.9.22
  [842dd82b] + InlineStrings v1.4.2
  [82899510] + IteratorInterfaceExtensions v1.0.0
  [bac558e1] + OrderedCollections v1.6.3
  [69de0a69] + Parsers v2.8.1
  [2dfb63ee] + PooledArrays v1.4.3
  [aea7be01] + PrecompileTools v1.2.1
  [21216c6a] + Preferences v1.4.3
  [91c51154] + SentinelArrays v1.4.5
  [3783bdb8] + TableTraits v1.0.1
  [bd369af6] + Tables v1.12.0
  [3bb67fe8] + TranscodingStreams v0.11.2
  [ea10d353] + WeakRefStrings v1.4.2
  [76eceee3] + WorkerUtilities v1.6.1
  [ade2ca70] + Dates
  [9fa8497b] + Future
  [8f399da3] + Libdl
  [a63ad114] + Mmap
  [de0858da] + Printf
  [9a3f8284] + Random
  [ea8e919c] + SHA v0.7.0
  [fa267f1f] + TOML v1.0.3
  [cf7118a7] + UUIDs
  [4ec0a83e] + Unicode
  [83775a58] + Zlib_jll v1.2.13+1
Precompiling project...
  22 dependencies successfully precompiled in 24 seconds. 1 already precompiled.
```

```powershell
PS D:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\build> julia ..\plotting2.jl
ERROR: LoadError: ArgumentError: Package DataFrames not found in current path.
- Run `import Pkg; Pkg.add("DataFrames")` to install the DataFrames package.
Stacktrace:
 [1] macro expansion
   @ .\loading.jl:1772 [inlined]
 [2] macro expansion
   @ .\lock.jl:267 [inlined]
 [3] __require(into::Module, mod::Symbol)
   @ Base .\loading.jl:1753
 [4] #invoke_in_world#3
   @ .\essentials.jl:926 [inlined]
 [5] invoke_in_world
   @ .\essentials.jl:923 [inlined]
 [6] require(into::Module, mod::Symbol)
   @ Base .\loading.jl:1746
in expression starting at D:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\plotting2.jl:2
```

```powershell
julia> import Pkg; Pkg.add("DataFrames")
    Updating registry at `C:\Users\eric\.julia\registries\General.toml`
   Resolving package versions...
   Installed SortingAlgorithms ── v1.2.1
   Installed Crayons ──────────── v4.1.1
   Installed InvertedIndices ──── v1.3.0
   Installed DataStructures ───── v0.18.20
   Installed LaTeXStrings ─────── v1.3.1
   Installed Reexport ─────────── v1.2.2
   Installed StringManipulation ─ v0.3.4
   Installed PrettyTables ─────── v2.3.2
   Installed Missings ─────────── v1.2.0
   Installed DataFrames ───────── v1.6.1
    Updating `C:\Users\eric\.julia\environments\v1.10\Project.toml`
  [a93c6f00] + DataFrames v1.6.1
    Updating `C:\Users\eric\.julia\environments\v1.10\Manifest.toml`
  [a8cc5b0e] + Crayons v4.1.1
  [a93c6f00] + DataFrames v1.6.1
  [864edb3b] + DataStructures v0.18.20
  [41ab1584] + InvertedIndices v1.3.0
  [b964fa9f] + LaTeXStrings v1.3.1
  [e1d29d7a] + Missings v1.2.0
  [08abe8d2] + PrettyTables v2.3.2
  [189a3867] + Reexport v1.2.2
  [a2af1166] + SortingAlgorithms v1.2.1
  [892a3eda] + StringManipulation v0.3.4
  [56f22d72] + Artifacts
  [2a0f44e3] + Base64
  [b77e0a4c] + InteractiveUtils
  [37e2e46d] + LinearAlgebra
  [d6f4376e] + Markdown
  [3fa0cd96] + REPL
  [9e88b42a] + Serialization
  [6462fe0b] + Sockets
  [2f01184e] + SparseArrays v1.10.0
  [10745b16] + Statistics v1.10.0
  [e66e0078] + CompilerSupportLibraries_jll v1.1.1+0
  [4536629a] + OpenBLAS_jll v0.3.23+4
  [bea87d4a] + SuiteSparse_jll v7.2.1+1
  [8e850b90] + libblastrampoline_jll v5.11.0+0
Precompiling project...
  12 dependencies successfully precompiled in 38 seconds. 25 already precompiled.
```

```powershell
PS D:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\build> julia ..\plotting2.jl
ERROR: LoadError: ArgumentError: Package PyPlot not found in current path.
- Run `import Pkg; Pkg.add("PyPlot")` to install the PyPlot package.
Stacktrace:
 [1] macro expansion
   @ .\loading.jl:1772 [inlined]
 [2] macro expansion
   @ .\lock.jl:267 [inlined]
 [3] __require(into::Module, mod::Symbol)
   @ Base .\loading.jl:1753
 [4] #invoke_in_world#3
   @ .\essentials.jl:926 [inlined]
 [5] invoke_in_world
   @ .\essentials.jl:923 [inlined]
 [6] require(into::Module, mod::Symbol)
   @ Base .\loading.jl:1746
in expression starting at D:\github\OneFLOW\example\1d-heat-equation\ftcs\cpp\01a\plotting2.jl:3
```

```
PyCall not properly installed. Please run Pkg.build("PyCall")

ENV["PYTHON"] = raw"c:\Users\eric\AppData\Local\Programs\Python\Python312\python.exe";
Pkg.build("PyCall");
```

```powershell
julia> ENV["PYTHON"] = raw"c:\Users\eric\AppData\Local\Programs\Python\Python312\python.exe";

julia> Pkg.build("PyCall");
    Building Conda ─→ `C:\Users\eric\.julia\scratchspaces\44cfe95a-1eb2-52ea-b672-e2afdf69b78f\b19db3927f0db4151cb86d073689f2428e524576\build.log`
    Building PyCall → `C:\Users\eric\.julia\scratchspaces\44cfe95a-1eb2-52ea-b672-e2afdf69b78f\9816a3826b0ebf49ab4926e2b18842ad8b5c8f04\build.log`
```

### 01_Heat_Equation_FTCS

location
```
d:\work\julia_work\ModernJulia\codes\CFD\01_Heat_Equation_FTCS\
```

Package CPUTime not found
```
PS D:\work\julia_work\ModernJulia\codes\CFD\01_Heat_Equation_FTCS> julia .\ftcs.jl
ERROR: LoadError: ArgumentError: Package CPUTime not found in current path.
- Run `import Pkg; Pkg.add("CPUTime")` to install the CPUTime package.
Stacktrace:
 [1] macro expansion
   @ .\loading.jl:2223 [inlined]
 [2] macro expansion
   @ .\lock.jl:273 [inlined]
 [3] __require(into::Module, mod::Symbol)
   @ Base .\loading.jl:2198
 [4] #invoke_in_world#3
   @ .\essentials.jl:1089 [inlined]
 [5] invoke_in_world
   @ .\essentials.jl:1086 [inlined]
 [6] require(into::Module, mod::Symbol)
   @ Base .\loading.jl:2191
in expression starting at D:\work\julia_work\ModernJulia\codes\CFD\01_Heat_Equation_FTCS\ftcs.jl:1
```

### ENV["PYTHON"]
```
PS C:\Users\eric> julia
               _
   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.11.1 (2024-10-16)
 _/ |\__'_|_|_|\__'_|  |  Official https://julialang.org/ release
|__/                   |

julia> ENV["PYTHON"] = raw"c:\Users\eric\AppData\Local\Programs\Python\Python313\python.exe";

julia> import Pkg; Pkg.build("PyCall");
    Building Conda ─→ `C:\Users\eric\.julia\scratchspaces\44cfe95a-1eb2-52ea-b672-e2afdf69b78f\b19db3927f0db4151cb86d073689f2428e524576\build.log`
    Building PyCall → `C:\Users\eric\.julia\scratchspaces\44cfe95a-1eb2-52ea-b672-e2afdf69b78f\9816a3826b0ebf49ab4926e2b18842ad8b5c8f04\build.log`
Precompiling project...
  2 dependencies successfully precompiled in 13 seconds. 208 already precompiled.
```

### Julia ---- PyCall.jl 的正确安装方式
-  [Julia ---- PyCall.jl 的正确安装方式](https://blog.csdn.net/weixin_41715077/article/details/106330252/).

1
```
import Pkg; 
Pkg.add("Conda")
Pkg.build("Conda")

Pkg.add("PyCall")
Pkg.build("PyCall")
```

2
```
import Pkg; 
Pkg.add("Conda")
Pkg.add("PyCall")
#这里使用自己的安装路径
ENV["PYTHON"] = raw"c:\Users\eric\AppData\Local\Programs\Anaconda3";
Pkg.build("PyCall")
```


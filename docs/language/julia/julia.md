# Julia

## Article link

-  [Julia-OneFLOW doc](https://eric2003.github.io/OneFLOW/julia.html).
-  [Julia 教程](https://www.runoob.com/julia/julia-tutorial.html).
-  [Julia中文文档](https://docs.juliacn.com/).
-  [Julia Documentation](https://docs.julialang.org/).
-  [北大李东风 Julia 语言入门](https://www.math.pku.edu.cn/teachers/lidf/docs/Julia/html/_book/index.html).
-  [Julia Roadmap 入门](https://learn.juliacn.com/).
-  [Julia Data Science](https://cn.julialang.org/JuliaDataScience/).
-  [JuliaLogging 文档 中文版](https://cn.julialang.org/julialogging.github.io/).
-  [Julia Pkg.jl 中文版](https://cn.julialang.org/Pkg.jl/dev/).
-  [每个科研工作者在写高性能代码时都需了解的硬件知识](https://guixinliu.github.io/hardware_introduction/pluto.jl.html).
-  [Package to call Python functions from the Julia language](https://github.com/JuliaPy/PyCall.jl).
-  [CFD_Julia系列链接整理](https://zhuanlan.zhihu.com/p/523584688/).
-  [Julia By Example](https://juliabyexample.helpmanual.io/).


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


## Windows Julia

### download

-  [Official Binaries for Manual Download](https://julialang.org/downloads/).

### Install

```
winget install julia -s msstore
```

File position(winget install)
```
c:\Users\eric\AppData\Local\Microsoft\WindowsApps\julia.exe
```

File position(install julia-1.10.5-win64.exe)
```
C:\Users\eric\AppData\Local\Programs\Julia-1.10.5
c:\Users\eric\AppData\Local\Programs\Julia-1.10.5\bin\julia.exe
```

### Get-Command julia

```powershell
PS C:\Users\eric> Get-Command julia

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     julia.exe                                          1.10.2.0   C:\Users\eric\AppData\Local\Programs\J...
```

```powershell
PS C:\Users\eric> Get-Command julia | out-string -Width 160

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     julia.exe                                          1.10.2.0   C:\Users\eric\AppData\Local\Programs\Julia-1.10.2\bin\julia.exe
```

### position

```
C:\Users\eric\AppData\Local\Programs\Julia-1.11.4
```


## Import

Import Pkg
```
import Pkg
```

## Julia 交互式命令窗口

执行 exit() 退出交互式命令窗口，也可以通过输入 CTRL-D（同时按 Ctrl 键和 d 键）退出。
```
执行 exit() 退出交互式命令窗口，也可以通过输入 CTRL-D（同时按 Ctrl 键和 d 键）退出。
```

## 第一个 Julia 程序
接下来我们来编写第一个 Julia 程序 hello.jl（Julia 文件扩展名 .jl），代码如下：
```
println("Hello World!")
```

### julia -v 命令用于查看版本号。
```
PS C:\Users\eric> julia -v
julia version 1.10.2
```

### VERSION
```
julia> VERSION
v"1.10.2"
```

### julia --version
```
PS C:\Users\eric> julia --version
julia version 1.11.4
```

### versioninfo()
```
julia> versioninfo()
Julia Version 1.10.2
Commit bd47eca2c8 (2024-03-01 10:14 UTC)
Build Info:
  Official https://julialang.org/ release
Platform Info:
  OS: Windows (x86_64-w64-mingw32)
  CPU: 16 × Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz
  WORD_SIZE: 64
  LIBM: libopenlibm
  LLVM: libLLVM-15.0.7 (ORCJIT, skylake)
Threads: 1 default, 0 interactive, 1 GC (on 16 virtual cores)
```

### Julia

```
PS C:\Users\eric> julia
               _
   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.10.5 (2024-08-27)
 _/ |\__'_|_|_|\__'_|  |  Official https://julialang.org/ release
|__/                   |

julia>
```

## 注释

Julia 中的注释有单行注释和多行注释。
Julia 中单行注释以 # 开头，例如：

```
# 这是一行注释
# 这是另外一行注释
println("Hello World!")
```

多行注释用 #= 与 =# 将注释括起来，例如:

```
#=
1、这是一行注释
2、这是另外一行注释
=#
println("Hello World!")
```

## 创建一维数组
下面实例创建了一个简单的一维数组：
```
julia>  arr = [1,2,3]
3-element Vector{Int64}:
 1
 2
 3
```

-  [Printf Link](https://docs.julialang.org/en/v1/stdlib/Printf/).

### printf
```julia
# importing Printf
using Printf
 
# using printf macro with @ sign 
@printf("pi = %0.20f", float(pi))
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\Printf\01> julia .\testprj.jl
pi = 3.14159265358979311600
```

### @printf "Hello %s" "world"
```julia
# importing Printf
using Printf

@printf "Hello %s" "world"
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\02> julia .\testprj.jl
Hello world
```

### @printf "Scientific notation %e" 1.234
```julia
# importing Printf
using Printf

@printf "Scientific notation %e" 1.234
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\03> julia .\testprj.jl
Scientific notation 1.234000e+00
```

### @printf "Scientific notation three digits %.3e" 1.23456
```julia
# importing Printf
using Printf

@printf "Scientific notation three digits %.3e" 1.23456
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\04> julia .\testprj.jl
Scientific notation three digits 1.235e+00
```

### @printf "Decimal two digits %.2f" 1.23456
```julia
# importing Printf
using Printf

@printf "Decimal two digits %.2f" 1.23456
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\05> julia .\testprj.jl
Decimal two digits 1.23
```

### @printf "Padded to length 5 %5i" 123
```julia
# importing Printf
using Printf

@printf "Padded to length 5 %5i" 123
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\06> julia .\testprj.jl
Padded to length 5   123
```

### @printf "Padded with zeros to length 6 %06i" 123
```julia
# importing Printf
using Printf

@printf "Padded with zeros to length 6 %06i" 123
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\07> julia .\testprj.jl
Padded with zeros to length 6 000123
```

### @printf "Use shorter of decimal or scientific %g %g" 1.23 12300000.0
```julia
# importing Printf
using Printf

@printf "Use shorter of decimal or scientific %g %g" 1.23 12300000.0
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\08> julia .\testprj.jl
Use shorter of decimal or scientific 1.23 1.23e+07
```

### @printf "Use dynamic width and precision  %*.*f" 10 2 0.12345
```julia
# importing Printf
using Printf

@printf "Use dynamic width and precision  %*.*f" 10 2 0.12345
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\09> julia .\testprj.jl
Use dynamic width and precision        0.12
```

### @printf("%f %F %f %F", Inf, Inf, NaN, NaN)
```julia
# importing Printf
using Printf

@printf("%f %F %f %F", Inf, Inf, NaN, NaN)
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\10> julia .\testprj.jl
Inf Inf NaN NaN
```

### @printf "%.0f %.1f %f" 0.5 0.025 -0.0078125
```julia
# importing Printf
using Printf

@printf "%.0f %.1f %f" 0.5 0.025 -0.0078125
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\11> julia .\testprj.jl
0 0.0 -0.007812
```

### @printf "this is a %s %15.1f" "test" 34.567
```julia
# importing Printf
using Printf

@printf "this is a %s %15.1f" "test" 34.567
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printf\12> julia .\testprj.jl
this is a test            34.6
```

### printstyled
```julia
# using printstyled 
 
# printing text in different colors
for color in [:red, :cyan, :blue, :magenta]
    printstyled("Hello World $(color)\n"; color = color)
end
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\printstyled\01> julia .\testprj.jl
Hello World red
Hello World cyan
Hello World blue
Hello World magenta
```

### sprintf
```julia
# importing Printf
using Printf
 
# using @macro with sprintf where output is a string
String1 = @sprintf("pi = %0.20f", float(pi))

println(String1)
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\sprintf\01> julia .\testprj.jl
pi = 3.14159265358979311600
```

### println
```julia
for i in 1:10
    println("Iteration: $(i)/10")
end
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\println\01> julia .\testprj.jl
Iteration: 1/10
Iteration: 2/10
Iteration: 3/10
Iteration: 4/10
Iteration: 5/10
Iteration: 6/10
Iteration: 7/10
Iteration: 8/10
Iteration: 9/10
Iteration: 10/10
```

### print for loop
```julia
for i in 1:10
    sleep(0.1)
    print("\rIteration: $(i)/10")
end
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\print\04> julia .\testprj.jl
Iteration: 10/10
```

### Creating a String
```julia
# Julia Program for  
# Creation of String  
  
# Creating a String  
# with double Quotes  
String1 = "Welcome to the Geeks World"
println("String with the use of Double Quotes: ")  
println(String1)  
  
# Creating a String  
# with triple Quotes  
String1 = """I'm a Geek and I live in a world of Geeks"""
println("\nString with the use of Triple Quotes: ")  
println(String1)  
  
# Creating String with triple  
# Quotes allows multiple lines  
String1 ="""Geeks  
            For  
            Life"""
println("\nCreating a multiline String: ")  
println(String1)  
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\String\01> julia .\testprj.jl
String with the use of Double Quotes:
Welcome to the Geeks World

String with the use of Triple Quotes:
I'm a Geek and I live in a world of Geeks

Creating a multiline String:
Geeks
For
Life
```

### Access characters of String 
```julia
# Julia Program to Access  
# characters of String  
    
String1 = "GeeksForGeeks"
println("Initial String: ")  
println(String1)  
    
# Printing First character  
println("\nFirst character of String is: ")  
println(String1[1])  
    
# Printing Last character  
println("\nLast character of String is: ")  
println(String1[end])  
```

output
```powershell
PS D:\work\julia_work\ModernJulia\codes\String\02> julia .\testprj.jl
Initial String:
GeeksForGeeks

First character of String is:
G

Last character of String is:
s
```
  

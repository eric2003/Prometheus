# Example

## Link
-  [FORTRAN系列链接整理](https://zhuanlan.zhihu.com/p/662370470).


```powershell
cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
```

output
```powershell
PS D:\github\OneFLOW\example\weno-coef\crj\fortran\01\build> cmd.exe "/K" '"C:\Program Files (x86)\Intel\oneAPI\setvars.bat" && powershell'
:: initializing oneAPI environment...
   Initializing Visual Studio command-line environment...
   Visual Studio version 17.12.4 environment configured.
   "C:\Program Files\Microsoft Visual Studio\2022\Community\"
   Visual Studio command-line environment initialized for: 'x64'
:  advisor -- latest
:  compiler -- latest
:  dal -- latest
:  debugger -- latest
:  dev-utilities -- latest
:  dnnl -- latest
:  dpcpp-ct -- latest
:  dpl -- latest
:  ipp -- latest
:  ippcp -- latest
:  mkl -- latest
:  mpi -- latest
:  ocloc -- latest
:  tbb -- latest
:  vtune -- latest
:: oneAPI environment initialized ::
Windows PowerShell
版权所有（C） Microsoft Corporation。保留所有权利。

安装最新的 PowerShell，了解新功能和改进！https://aka.ms/PSWindows
```

```fortran
program main  
	implicit none
	integer :: i, j
	integer, parameter :: iorder = 2
    double precision :: coef(0:iorder-1, 0:iorder-1)
    data ((coef(i,j),j=0,iorder-1),i=0,iorder-1) &
         /0.5,0.5,-0.5,1.5/
    do i = 0, iorder-1
        do j = 0, iorder-1
            print *, 'coef(', i, ',', j, ') = ', coef(i,j)
        end do
    end do	
end program main 
```

```
ifort coef.f90 -o coef
```

output
```
PS D:\github\OneFLOW\example\weno-coef\crj\fortran\01\build> ifort ../coef.f90 -o coef
Intel(R) Fortran Intel(R) 64 Compiler Classic for applications running on Intel(R) 64, Version 2021.12.0 Build 20240222_000000
Copyright (C) 1985-2024 Intel Corporation.  All rights reserved.

ifort: remark #10448: Intel(R) Fortran Compiler Classic (ifort) is now deprecated and will be discontinued late 2024. Intel recommends that customers transition now to using the LLVM-based Intel(R) Fortran Compiler (ifx) for continued Windows* and Linux* support, new language support, new language features, and optimizations. Use '/Qdiag-disable:10448' to disable this message.
Microsoft (R) Incremental Linker Version 14.42.34436.0
Copyright (C) Microsoft Corporation.  All rights reserved.

-out:coef.exe
-subsystem:console
coef.obj
```

ls
```
PS D:\github\OneFLOW\example\weno-coef\crj\fortran\01\build> ls


    目录: D:\github\OneFLOW\example\weno-coef\crj\fortran\01\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          2025/2/9      0:23         580608 coef.exe
-a----          2025/2/9      0:23           3014 coef.obj
```

.\coef.exe
```output
PS D:\github\OneFLOW\example\weno-coef\crj\fortran\01\build> .\coef.exe
 coef(           0 ,           0 ) =   0.500000000000000
 coef(           0 ,           1 ) =   0.500000000000000
 coef(           1 ,           0 ) =  -0.500000000000000
 coef(           1 ,           1 ) =    1.50000000000000
```
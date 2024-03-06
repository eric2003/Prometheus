# Fortran

## article link
-  [Fortran Programming Language](https://fortran-lang.org/).
-  [Fortran Tutorial](https://www.tutorialspoint.com/fortran/index.htm).
-  [Getting started with gfortran (PDF)](https://gcc.gnu.org/onlinedocs/gfortran.pdf).
-  [gfortran(1) — Linux manual page](https://man7.org/linux/man-pages/man1/gfortran.1.html).
-  [Using GNU Fortran](https://gcc.gnu.org/wiki/GFortranGettingStarted/).
-  [INTRODUCTION TO FORTRAN](https://ourcodingclub.github.io/tutorials/fortran-intro/).
-  [GNU Fortran compiler (gfortran)](http://magnin.plil.net/spip.php?article97).
-  [LINK : fatal error LNK1104: cannot open file 'ifmodintr.lib](https://community.intel.com/t5/Intel-Fortran-Compiler/LINK-fatal-error-LNK1104-cannot-open-file-ifmodintr-lib/td-p/933371/).
-  [Configuring Visual Studio for Mixed-Language Applications](https://www.intel.com/content/www/us/en/developer/articles/technical/configuring-visual-studio-for-mixed-language-applications.html).
-  [Fortran for C/C++ developers made easier with CMake](https://www.kitware.com/fortran-for-cc-developers-made-easier-with-cmake/).
-  [Using C/C++ and Fortran together](http://www.yolinux.com/TUTORIALS/LinuxTutorialMixingFortranAndC.html).
-  [Calling Fortran From C - Part 1: Hello, World](https://www.youtube.com/watch?v=urcy6-kXZDw/).
-  [Calling Fortran From C - Part 2: A Simple Function](https://www.youtube.com/watch?v=LmVUTWQDdC4/).
-  [Calling Fortran From C - Part 3: Arrays and Matrices](https://www.youtube.com/watch?v=_h8eZ7vI_uw/).
-  [Fortran与C/C++混合编程示例](https://www.cnblogs.com/snake553/p/6962386.html).
-  [C与Fortran混合编程](https://zhejianggaoxiao.github.io/2017/03/15/C%E4%B8%8EFortran%E6%B7%B7%E5%90%88%E7%BC%96%E7%A8%8B/).
-  [Visual Studio 中 Fortran 和 C 的混合编程](https://zhuanlan.zhihu.com/p/455728972/).
-  [Mix C Fortran](https://wiki.ubuntu.org.cn/Mix_C_Fortran/).
-  [C-Fortran 接口](https://docs.oracle.com/cd/E19205-01/820-1204/6nct259sc/index.html).
-  [Fortran-C-CPP混合编程-1](https://www.jianshu.com/p/aefef17cef69/).
-  [混合 Fortran 和 C++](https://www.ibm.com/docs/zh/openxl-fortran-aix/17.1.1?topic=calls-mixing-fortran-c/).
-  [Windows系统下Fortran编程](https://www.bilibili.com/video/BV1XD4y1S7jz/).
-  [VS2019中C++与Fortran的混合编程](https://blog.csdn.net/weixin_41124748/article/details/120037882/).
-  [Fortran C/C++ interoperability](https://github.com/aerosayan/fortran-c-interop/).
-  [A Modern Fortran Scientific Programming Ecosystem](https://degenerateconic.com/a-modern-fortran-scientific-programming-ecosystem.html).
-  [Intel® C++ & Fortran Compiler](https://indico.cern.ch/event/403113/contributions/1847270/attachments/1123921/1603880/03_Intel_C__Fortran_Compiler.pdf).
-  [Fortran Programming Tutorials (Revised)](https://www.youtube.com/watch?v=ProXdx6xJb8/).
-  [Compiling C/C++/Fortran code](https://wiki.usask.ca/pages/viewpage.action?pageId=1955337523).
-  [Fortran with CMake (Simple Tutorial)](https://www.youtube.com/watch?v=Tl3Ph-4dMTI/).
-  [Modern Fortran: Concurrency and Parallelism](https://www.youtube.com/watch?v=tdjo1OI-30g/).
-  [Parallel programming without MPI - Using coarrays in Fortran](https://www.youtube.com/watch?v=tGSoCvTLfkw/).
-  [Fortran 90 Module Dependencies](https://lagrange.mechse.illinois.edu/f90_mod_deps/).
-  [Modern Fortran in Science and Technology](https://modern-fortran-in-science-and-technology.readthedocs.io/en/latest/index.html).
-  [Writing Makefiles for Modern Fortran](https://aoterodelaroza.github.io/devnotes/modern-fortran-makefiles/).
-  [Mixing C++ and Fortran](https://enccs.github.io/cmake-workshop/cxx-fortran/).
-  [Getting started with Fortran](https://riptutorial.com/fortran/).
-  [Visual Studio Code C/C++/Fortran with Multiple Source Files](https://iraspa.org/blog/visual-studio-code-c-cpp-fortran-with-multiple-source-files/).
-  [Using gfortran with external libraries and module files](https://kacv.net/brad/engr325/gfortrancompile.pdf).
-  [GfortranApps](https://gcc.gnu.org/wiki/GfortranApps).
-  [Setting Up Windows For Fortran Development](https://www.youtube.com/watch?v=kzloL99wtN0/).
-  [Awesome Fortran](https://github.com/rabbiabram/awesome-fortran/).
-  [Fortran Programming Tutorials](https://www.bilibili.com/video/BV1pN411k7zy/).
-  [Modern Fortran by Example](https://www.bilibili.com/video/BV1Tu4y1o74s/).


## Compiling the source code

But the basics are simple enough. Take the gfortran compiler, part of the GNU compiler collection. To compile a simple program as the one above, that consists of one source file, you run the following command, assuming the source code is stored in the file “hello.f90”:
```
$ gfortran -c hello.f90
```  

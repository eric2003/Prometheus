# Install

## Link
-  [oneAPI系列文章或资源链接](https://zhuanlan.zhihu.com/p/461830738/).

Path
```
c:\Program Files (x86)\Intel\oneAPI\
```

Intel® oneAPI Base Toolkit for Windows* (64 bit)
```
```

icpx --version
```
eric@fantasy:~/work/cpp_work/ModernCpp/codes/ubuntu/ranges/icx/01$ icpx --version
Intel(R) oneAPI DPC++/C++ Compiler 2025.1.0 (2025.1.0.20250317)
Target: x86_64-unknown-linux-gnu
Thread model: posix
InstalledDir: /opt/intel/oneapi/compiler/2025.1/bin/compiler
Configuration file: /opt/intel/oneapi/compiler/2025.1/bin/compiler/../icpx.cfg
```

icpx -std=c++23  -v main.cpp
```
eric@fantasy:~/work/cpp_work/ModernCpp/codes/ubuntu/ranges/icx/01$ icpx -std=c++23  -v main.cpp
Intel(R) oneAPI DPC++/C++ Compiler 2025.1.0 (2025.1.0.20250317)
Target: x86_64-unknown-linux-gnu
Thread model: posix
InstalledDir: /opt/intel/oneapi/compiler/2025.1/bin/compiler
Configuration file: /opt/intel/oneapi/compiler/2025.1/bin/compiler/../icpx.cfg
Found candidate GCC installation: /usr/lib/gcc/x86_64-linux-gnu/13
Selected GCC installation: /usr/lib/gcc/x86_64-linux-gnu/13
Candidate multilib: .;@m64
Selected multilib: .;@m64
Found CUDA installation: /usr/local/cuda-12.8, version 
 "/opt/intel/oneapi/compiler/2025.1/bin/compiler/clang" -cc1 -triple x86_64-unknown-linux-gnu -emit-obj -dumpdir a- -disable-free -clear-ast-before-backend -disable-llvm-verifier -discard-value-names -main-file-name main.cpp -mrelocation-model static -fveclib=SVML -faltmathlib=SVMLAltMathLibrary -mframe-pointer=none -fapprox-func -funsafe-math-optimizations -fno-signed-zeros -mreassociate -freciprocal-math -fdenormal-fp-math=preserve-sign,preserve-sign -ffp-contract=fast -fno-rounding-math -complex-range=promoted -mconstructor-aliases -funwind-tables=2 -target-cpu x86-64 -mllvm -x86-enable-unaligned-vector-move=true -tune-cpu generic -debugger-tuning=gdb -fdebug-compilation-dir=/home/eric/work/cpp_work/ModernCpp/codes/ubuntu/ranges/icx/01 -v -fcoverage-compilation-dir=/home/eric/work/cpp_work/ModernCpp/codes/ubuntu/ranges/icx/01 -fclang-abi-compat=17 -resource-dir /opt/intel/oneapi/compiler/2025.1/lib/clang/20 -I/opt/intel/oneapi/ccl/2021.15/include/ -I/opt/intel/oneapi/dev-utilities/2025.1/include -I/opt/intel/oneapi/dnnl/2025.1/include -I/opt/intel/oneapi/dpcpp-ct/2025.1/include -I/opt/intel/oneapi/dpl/2022.8/include -I/opt/intel/oneapi/ipp/2022.1/include -I/opt/intel/oneapi/ippcp/2025.1/include -I/opt/intel/oneapi/ishmem/1.3/include -I/opt/intel/oneapi/mkl/2025.1/include -I/opt/intel/oneapi/mpi/2021.15/include -I/opt/intel/oneapi/tbb/2022.1/include -I/opt/intel/oneapi/umf/0.10/include/ -internal-isystem /opt/intel/oneapi/compiler/2025.1/bin/compiler/../../opt/compiler/include -internal-isystem /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13 -internal-isystem /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/x86_64-linux-gnu/c++/13 -internal-isystem /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13/backward -internal-isystem /opt/intel/oneapi/compiler/2025.1/lib/clang/20/include -internal-isystem /usr/local/include -internal-isystem /usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/include -internal-externc-isystem /usr/include/x86_64-linux-gnu -internal-externc-isystem /include -internal-externc-isystem /usr/include -O2 -std=c++23 -fdeprecated-macro -ferror-limit 19 -fgnuc-version=4.2.1 -fno-implicit-modules -fskip-odr-check-in-gmf -fcxx-exceptions -fexceptions -fcolor-diagnostics -vectorize-loops -vectorize-slp -mllvm -disable-hir-generate-mkl-call -mllvm -loopopt=1 -floopopt-pipeline=light -mllvm -intel-abi-compatible=true -D__GCC_HAVE_DWARF2_CFI_ASM=1 -fintel-compatibility -fintel-libirc-allowed -fintel-libimf-allowed -o /tmp/icpx-b375a1a8aa/main-2941a5.o -x c++ main.cpp
clang -cc1 version 20.0.0git based upon LLVM 20.0.0git default target x86_64-unknown-linux-gnu
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/13/../../../../x86_64-linux-gnu/include"
ignoring nonexistent directory "/include"
#include "..." search starts here:
#include <...> search starts here:
 /opt/intel/oneapi/ccl/2021.15/include
 /opt/intel/oneapi/dev-utilities/2025.1/include
 /opt/intel/oneapi/dnnl/2025.1/include
 /opt/intel/oneapi/dpcpp-ct/2025.1/include
 /opt/intel/oneapi/dpl/2022.8/include
 /opt/intel/oneapi/ipp/2022.1/include
 /opt/intel/oneapi/ippcp/2025.1/include
 /opt/intel/oneapi/ishmem/1.3/include
 /opt/intel/oneapi/mkl/2025.1/include
 /opt/intel/oneapi/mpi/2021.15/include
 /opt/intel/oneapi/tbb/2022.1/include
 /opt/intel/oneapi/umf/0.10/include
 /opt/intel/oneapi/compiler/2025.1/bin/compiler/../../opt/compiler/include
 /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13
 /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/x86_64-linux-gnu/c++/13
 /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13/backward
 /opt/intel/oneapi/compiler/2025.1/lib/clang/20/include
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
main.cpp:1:10: error: use of undeclared identifier 'ranges'
    1 | include <ranges>
      |          ^
In file included from main.cpp:2:
In file included from /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13/iostream:38:
In file included from /usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13/bits/requires_hosted.h:31:
/usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/x86_64-linux-gnu/c++/13/bits/c++config.h:306:1: error: expected unqualified-id
  306 | namespace std
      | ^
main.cpp:5:18: error: no member named 'views' in namespace 'std'; did you mean 'std::ranges::views'?
    5 |     for (int x : std::views::iota(1, 10) | std::views::filter([](int n) { return n % 2 == 0; })) {
      |                  ^~~~~~~~~~
      |                  std::ranges::views
/usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13/bits/ranges_util.h:247:13: note: 'std::ranges::views' declared here
  247 |   namespace views { struct _Drop; } // defined in <ranges>
      |             ^
main.cpp:5:44: error: no member named 'views' in namespace 'std'; did you mean 'std::ranges::views'?
    5 |     for (int x : std::views::iota(1, 10) | std::views::filter([](int n) { return n % 2 == 0; })) {
      |                                            ^~~~~~~~~~
      |                                            std::ranges::views
/usr/lib/gcc/x86_64-linux-gnu/13/../../../../include/c++/13/bits/ranges_util.h:247:13: note: 'std::ranges::views' declared here
  247 |   namespace views { struct _Drop; } // defined in <ranges>
      |             ^
main.cpp:5:30: error: no member named 'iota' in namespace 'std::ranges::views'
    5 |     for (int x : std::views::iota(1, 10) | std::views::filter([](int n) { return n % 2 == 0; })) {
      |                       ~~~~~~~^
main.cpp:5:56: error: no member named 'filter' in namespace 'std::ranges::views'
    5 |     for (int x : std::views::iota(1, 10) | std::views::filter([](int n) { return n % 2 == 0; })) {
      |                                                 ~~~~~~~^
6 errors generated.
```

```
icpx -std=c++20 main.cpp -o main.exe
```
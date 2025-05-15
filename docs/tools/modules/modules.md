# Environment Modules

Environment Modules is a tool for managing applications and environment variables, allowing users to dynamically load and unload software packages as needed, and configure the necessary environment variables for applications as required. Using Environment Modules, users can run multiple versions of applications on the same system without version conflicts or dependency issues. In addition, Environment Modules can help administrators simplify the installation and management of software packages, thereby improving the maintainability and reliability of the system.

## Link

-  [Environment Modules Official Website](http://modules.sourceforge.net/).
-  [Environment Modules Wikipedia page](https://en.wikipedia.org/wiki/Environment_Modules).
-  [Environment Modules usage tutorial:](https://modules.readthedocs.io/).
-  [Environment Modules GitHub page](https://github.com/cea-hpc/modules/).
-  [A Compilation of Links Related to Environment Modules, an Environment Variable Management Tool](https://zhuanlan.zhihu.com/p/559136017/).


## Ubuntu Install

```
sudo apt install tcl
sudo apt install tcl-dev
sudo apt install dejagnu
./configure --prefix=/home/eric/software/modules --modulefilesdir=/home/eric/software/modules/modulefiles --enable-dotmodulespath
```

curl -LJO https://github.com/envmodules/modules/releases/download/v5.5.0/modules-5.5.0.tar.gz
```
eric@fantasy:~/work/install_work$ curl -LJO https://github.com/cea-hpc/modules/releases/download/v5.5.0/modules-5.5.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
100 2267k  100 2267k    0     0  15629      0  0:02:28  0:02:28 --:--:-- 12821
eric@fantasy:~/work/install_work$ ls
modules-5.5.0.tar.gz
```

tar xfz modules-5.5.0.tar.gz
```
eric@fantasy:~/work/install_work$ tar xfz modules-5.5.0.tar.gz
eric@fantasy:~/work/install_work$ ls
modules-5.5.0  modules-5.5.0.tar.gz
```

cd modules-5.5.0/
```
eric@fantasy:~/work/install_work$ cd modules-5.5.0/
eric@fantasy:~/work/install_work/modules-5.5.0$ ls
ChangeLog.gz        doc              Makefile.inc.in  site.exp.in
CODE_OF_CONDUCT.md  init             MIGRATING.rst    tcl
configure           INSTALL.rst      NEWS.rst         testsuite
contrib             INSTALL-win.rst  README.md        version.inc.in
CONTRIBUTING.rst    lib              script
COPYING.GPLv2       Makefile         siteconfig.tcl
eric@fantasy:~/work/install_work/modules-5.5.0$ 
```

./configure --prefix=/home/eric/software/modules --modulefilesdir=/home/eric/software/modules/modulefiles --enable-dotmodulespath
```
eric@fantasy:~/work/install_work/modules-5.5.0$ ./configure --prefix=/home/eric/software/modules --modulefilesdir=/home/eric/software/modules/modulefiles --enable-dotmodulespath
checking for uname... /usr/bin/uname
checking for make... /usr/bin/make
checking for sed... /usr/bin/sed
checking for runtest... /usr/bin/runtest
checking for manpath... /usr/bin/manpath
checking for tclsh... /usr/bin/tclsh
checking for python... not found
checking for python3... /usr/bin/python3
checking for ps... /usr/bin/ps
checking for basename... /usr/bin/basename
checking for logger... /usr/bin/logger
checking for less... /usr/bin/less
checking for nagelfar.tcl... not found
WARNING: nagelfar.tcl could not be found
TCLSH = /usr/bin/tclsh
PYTHON = /usr/bin/python3
SPHINXBUILD = sphinx-build
PS = /usr/bin/ps
BASENAME = /usr/bin/basename
RMDIR_IGN_NON_EMPTY = rmdir --ignore-fail-on-non-empty
SED_ERE = sed -E
VERSION = 5.5.0
RELEASE = 5.5.0
baseprefix = /home/eric/software/modules
prefix = /home/eric/software/modules
bindir = /home/eric/software/modules/bin
libdir = /home/eric/software/modules/lib
libexecdir = /home/eric/software/modules/libexec
etcdir = /home/eric/software/modules/etc
initdir = /home/eric/software/modules/init
datarootdir = /home/eric/software/modules/share
mandir = /home/eric/software/modules/share/man
docdir = /home/eric/software/modules/share/doc
vimdatadir = /home/eric/software/modules/share/vim/vimfiles
modulefilesdir = /home/eric/software/modules/modulefiles
setmanpath = y
appendmanpath = n
setbinpath = y
appendbinpath = n
setmodulespath = y
docinstall = y
vimaddons = y
examplemodulefiles = y
builddoc = p
usemanpath = y
libtclenvmodules = y
SHLIB_SUFFIX = .so
multilibsupport = n
libdir64 = undefined
libdir32 = undefined
versioning = n
silentshdbgsupport = n
setshellstartup = n
quarantinesupport = n
autohandling = y
availindepth = y
implicitdefault = y
extendeddefault = y
moduleshome = /home/eric/software/modules
initconfin = etcdir
pager = /usr/bin/less
pageropts = -eFKRX
verbosity = normal
color = y
darkbgcolors = hi=1:db=2:tr=2:se=2:er=91:wa=93:me=95:in=94:mp=1;94:di=94:al=96:va=93:sy=95:de=4:cm=92:aL=100:L=90;47:H=2:F=41:nF=43:S=46:sS=44:kL=30;48;5;109
lightbgcolors = hi=1:db=2:tr=2:se=2:er=31:wa=33:me=35:in=34:mp=1;34:di=34:al=36:va=33:sy=35:de=4:cm=32:aL=107:L=47:H=2:F=101:nF=103:S=106:sS=104:kL=48;5;109
termbg = dark
lockedconfigs = 
icase = search
unloadmatchorder = returnlast
searchmatch = starts_with
modulepath = /home/eric/software/modules/modulefiles
loadedmodules = 
quarantinevars = 
wa277 = n
advversspec = y
ml = y
windowssupport = n
nearlyforbiddendays = 14
implicitrequirement = y
tagabbrev = auto-loaded=aL:loaded=L:hidden=H:hidden-loaded=H:forbidden=F:nearly-forbidden=nF:sticky=S:super-sticky=sS:keep-loaded=kL
tagcolorname = 
mcookieversioncheck = y
availoutput = modulepath:alias:dirwsym:sym:tag:variantifspec:key
availterseoutput = modulepath:alias:dirwsym:sym:tag:variantifspec
listoutput = header:idx:variant:sym:tag:key
listterseoutput = header
editor = vi
variantshortcut = 
bashcompletiondir = 
fishcompletiondir = 
zshcompletiondir = 
tcllinter = nagelfar.tcl
tcllinteropts = 
nagelfardatadir = /home/eric/software/modules/share/nagelfar
nagelfaraddons = y
stickypurge = error
uniquenameloaded = n
abortonerror = ml:reload:switch_unload
sourcecache = n
logger = /usr/bin/logger
loggeropts = -t modules
loggedevents = 
conflictunload = n
--- configuring extension library sources --------
libarglist = 
~/work/install_work/modules-5.5.0/lib ~/work/install_work/modules-5.5.0
checking TEA configuration... ok (TEA 3.13)
configure: configuring Envmodules 1.4.3
checking system version... Linux-6.11.0-24-generic
checking for Tcl configuration... found /usr/lib/tclConfig.sh
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether the compiler supports GNU C... yes
checking whether gcc accepts -g... yes
checking for gcc option to enable C11 features... none needed
checking for existence of /usr/lib/tclConfig.sh... loading
checking platform... unix
checking for stdio.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for strings.h... yes
checking for sys/stat.h... yes
checking for sys/types.h... yes
checking for unistd.h... yes
checking for fcntl.h... yes
checking for unistd.h... (cached) yes
checking for errno.h... yes
checking for limits.h... yes
checking for sys/types.h... (cached) yes
checking for pwd.h... yes
checking for grp.h... yes
checking for stdlib.h... (cached) yes
checking for stdio.h... (cached) yes
checking for dirent.h... yes
checking for time.h... yes
checking for ssize_t... yes
checking how to run the C preprocessor... gcc -E
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking for uid_t in sys/types.h... yes
checking type of array argument to getgroups... gid_t
checking for size_t... yes
checking build system type... x86_64-pc-linux-gnu
checking host system type... x86_64-pc-linux-gnu
checking for getgroups... yes
checking for working getgroups... yes
checking for gcc... (cached) gcc
checking whether the compiler supports GNU C... (cached) yes
checking whether gcc accepts -g... (cached) yes
checking for gcc option to enable C11 features... (cached) none needed
checking how to run the C preprocessor... gcc -E
checking whether make sets $(MAKE)... yes
checking for ranlib... ranlib
checking if the compiler understands -pipe... yes
checking whether byte ordering is bigendian... no
checking for Tcl public headers... /usr/include/tcl8.6
checking for ranlib... (cached) ranlib
checking if 64bit support is requested... no
checking if 64bit Sparc VIS support is requested... no
checking if compiler supports visibility "hidden"... yes
checking if rpath support is requested... yes
checking system version... (cached) Linux-6.11.0-24-generic
checking for ar... ar
checking for cast to union support... yes
checking for stdbool.h... yes
checking for required early compiler flags... none
checking for 64-bit integer type... yes
checking for build with symbols... no
checking how to build libraries... shared
configure: creating ./config.status
config.status: creating Makefile
config.status: creating config.h
~/work/install_work/modules-5.5.0
--------------------------------------------------
creating ./Makefile.inc
creating ./site.exp
eric@fantasy:~/work/install_work/modules-5.5.0$ 
```

make
```
eric@fantasy:~/work/install_work/modules-5.5.0$ make
  GEN init/sh
  GEN init/ksh
  GEN init/bash
  GEN init/zsh
  GEN init/profile.sh
  GEN init/csh
  GEN init/tcsh
  GEN init/tcsh_completion
  GEN init/profile.csh
  GEN init/perl.pm
  GEN init/python.py
  GEN init/ruby.rb
  GEN init/lisp
  GEN init/tcl
  GEN init/fish
  GEN init/cmake
  GEN init/r.R
  GEN init/pwsh.ps1
  GEN init/initrc
  GEN init/bash_completion
  GEN init/zsh-functions/_module
  GEN init/../contrib/modulefiles/modules
  GEN init/modulespath
  GEN version.inc
  GEN tcl/cache.tcl
  GEN tcl/coll.tcl
  GEN tcl/envmngt.tcl
  GEN tcl/init.tcl
  GEN tcl/interp.tcl
  GEN tcl/main.tcl
  GEN tcl/modfind.tcl
  GEN tcl/report.tcl
  GEN tcl/subcmd.tcl
  GEN modulecmd.tcl
  GEN README
  GEN script/add.modules
  GEN script/modulecmd
  CC  lib/envmodules.o
  LD  lib/libtclenvmodules.so
  GEN doc/build/module.1
make[1]: Nothing to be done for 'txt'.
```

make install
```
eric@fantasy:~/work/install_work/modules-5.5.0$ make install
install -d -m 755 '/home/eric/software/modules/libexec'
install -d -m 755 '/home/eric/software/modules/bin'
install -d -m 755 '/home/eric/software/modules/etc'
install -m 755 modulecmd.tcl '/home/eric/software/modules/libexec/'
install -d -m 755 '/home/eric/software/modules/lib'
install -m 755 lib/libtclenvmodules.so '/home/eric/software/modules/lib/'
install -m 755 script/envml '/home/eric/software/modules/bin/'
install -m 755 script/add.modules '/home/eric/software/modules/bin/'
install -m 755 script/modulecmd '/home/eric/software/modules/bin/'
install -m 755 script/mkroot '/home/eric/software/modules/bin/'
install -m 644 siteconfig.tcl '/home/eric/software/modules/etc/'
install -d -m 755 '/home/eric/software/modules/share/doc'
install -m 644 COPYING.GPLv2 '/home/eric/software/modules/share/doc/'
install -m 644 ChangeLog.gz '/home/eric/software/modules/share/doc/'
install -m 644 README '/home/eric/software/modules/share/doc/'
install -d -m 755 '/home/eric/software/modules/share/vim/vimfiles/ftdetect'
install -d -m 755 '/home/eric/software/modules/share/vim/vimfiles/ftplugin'
install -d -m 755 '/home/eric/software/modules/share/vim/vimfiles/syntax'
install -m 644 contrib/vim/ftdetect/modulefile.vim '/home/eric/software/modules/share/vim/vimfiles/ftdetect'
install -m 644 contrib/vim/ftplugin/modulefile.vim '/home/eric/software/modules/share/vim/vimfiles/ftplugin'
install -m 644 contrib/vim/syntax/modulefile.vim '/home/eric/software/modules/share/vim/vimfiles/syntax'
install -d -m 755 '/home/eric/software/modules/share/nagelfar'
install -m 644 contrib/nagelfar/plugin_modulefile.tcl  '/home/eric/software/modules/share/nagelfar/'
install -m 644 contrib/nagelfar/plugin_modulerc.tcl  '/home/eric/software/modules/share/nagelfar/'
install -m 644 contrib/nagelfar/plugin_globalrc.tcl  '/home/eric/software/modules/share/nagelfar/'
install -m 644 contrib/nagelfar/syntaxdb_modulefile.tcl  '/home/eric/software/modules/share/nagelfar/'
install -m 644 contrib/nagelfar/syntaxdb_modulerc.tcl  '/home/eric/software/modules/share/nagelfar/'
make -C init install DESTDIR=''
make[1]: Entering directory '/home/eric/work/install_work/modules-5.5.0/init'
install -d -m 755 '/home/eric/software/modules/init'
install -d -m 755 '/home/eric/software/modules/init/ksh-functions'
install -d -m 755 '/home/eric/software/modules/etc'
install -d -m 755 '/home/eric/software/modules/init/zsh-functions'
install -d -m 755 '/home/eric/software/modules/modulefiles'
install -m 644 sh ksh bash zsh profile.sh csh tcsh tcsh_completion profile.csh perl.pm python.py ruby.rb lisp tcl fish cmake r.R pwsh.ps1 '/home/eric/software/modules/init/'
install -m 644 fish_completion '/home/eric/software/modules/init/'
install -m 644 bash_completion '/home/eric/software/modules/init/'
install -m 644 zsh-functions/_module '/home/eric/software/modules/init/zsh-functions/'
install -m 644 ksh '/home/eric/software/modules/init/ksh-functions/module'
install -m 644 ksh '/home/eric/software/modules/init/ksh-functions/ml'
install -m 644 initrc '/home/eric/software/modules/etc/initrc'
install -m 644 modulespath /home/eric/software/modules/etc/modulespath
install -m 644 ../contrib/modulefiles/dot ../contrib/modulefiles/module-git ../contrib/modulefiles/module-info ../contrib/modulefiles/modules ../contrib/modulefiles/null ../contrib/modulefiles/use.own '/home/eric/software/modules/modulefiles/'
make[1]: Leaving directory '/home/eric/work/install_work/modules-5.5.0/init'
make -C doc install DESTDIR=''
make[1]: Entering directory '/home/eric/work/install_work/modules-5.5.0/doc'
install -d -m 755 '/home/eric/software/modules/share/man/man1' '/home/eric/software/modules/share/man/man5'
install -d -m 755 '/home/eric/software/modules/share/doc'
install -m 644 build/changes.txt '/home/eric/software/modules/share/doc/'
install -m 644 build/MIGRATING.txt '/home/eric/software/modules/share/doc/'
install -m 644 build/INSTALL.txt '/home/eric/software/modules/share/doc/'
install -m 644 build/INSTALL-win.txt '/home/eric/software/modules/share/doc/'
install -m 644 build/NEWS.txt '/home/eric/software/modules/share/doc/'
install -m 644 build/CONTRIBUTING.txt '/home/eric/software/modules/share/doc/'
install -m 644 build/module.1 '/home/eric/software/modules/share/man/man1/'
install -m 644 build/ml.1 '/home/eric/software/modules/share/man/man1/'
install -m 644 build/modulefile.5 '/home/eric/software/modules/share/man/man5/'
make[1]: Leaving directory '/home/eric/work/install_work/modules-5.5.0/doc'

NOTICE: Modules installation is complete.
        Please read the 'Configuration' section in INSTALL guide to learn
        how to adapt your installation and make it fit your needs.

eric@fantasy:~/work/install_work/modules-5.5.0$ 
```

```
code ~/.bashrc:
source /home/eric/software/modules/init/bash
```

module --version
```
eric@fantasy:~$ module --version
Modules Release 5.5.0 (2024-11-11)
```


## Use Environment Modulefiles with Linux

-  [Use Environment Modulefiles with Linux*](https://www.intel.com/content/www/us/en/docs/oneapi/programming-guide/2025-1/use-environment-modulefiles-with-linux.html).

```
/opt/intel/oneapi/2025.1/etc/modulefiles
```


```
eric@fantasy:~$ module --version
Modules Release 5.5.0 (2024-11-11)
eric@fantasy:~$ module list
No Modulefiles Currently Loaded.
eric@fantasy:~$ module use /opt/intel/oneapi/2025.1/etc/modulefiles/
eric@fantasy:~$ module list
No Modulefiles Currently Loaded.
eric@fantasy:~$ module avail
------------------- /opt/intel/oneapi/2025.1/etc/modulefiles -------------------
ccl/2021.15.0                 dnnl/3.7.1                  mkl/2025.1       
compiler-intel-llvm/2025.1.0  dpct/2025.1.0               mpi/2021.15      
compiler-rt/2025.1.0          dpl/2022.8                  oneapi/2025.1.0  
compiler/2025.1.0             intel_ipp_intel64/2022.1    tbb/2022.1       
debugger/2025.1.0             intel_ippcp_intel64/2025.1  umf/0.10.0       
dev-utilities/2025.1.0        ishmem/1.3.0                

------------------- /home/eric/software/modules/modulefiles --------------------
dot  module-git  module-info  modules  null  use.own  

Key:
modulepath  
eric@fantasy:~$ module load compiler
Loading compiler/2025.1.0
  Loading requirement: tbb/2022.1 compiler-rt/2025.1.0 umf/0.10.0
eric@fantasy:~$ module list
Currently Loaded Modulefiles:
 1) tbb/2022.1             3) umf/0.10.0         
 2) compiler-rt/2025.1.0   4) compiler/2025.1.0  

Key:
auto-loaded
```


home/eric/software/modules/etc/modulespath
```
# This file defines the initial setup for the modulefiles search path
# Each line containing one or multiple paths delimited by ':' will be
# added to the MODULEPATH environment variable.
/home/eric/software/modules/modulefiles
/opt/intel/oneapi/2025.1/etc/modulefiles/

```

## CMake Module file

```
#%Module1.0#####################################################################
#
# Module file for CMake 4.0.1
#
# Copyright (c) 2025, Eric
# Licensed under the BSD 3-Clause License (same as CMake)
#

# Metadata
module-whatis "Name: CMake"
module-whatis "Version: 4.0.1"
module-whatis "Description: Cross-platform build system for managing the build process of software."
module-whatis "URL: https://cmake.org/"
module-whatis "Dependencies: none"

# Help message
proc ModulesHelp { } {
    puts stderr "CMake 4.0.1 - Cross-platform build system"
    puts stderr "This module sets up the environment for CMake 4.0.1."
    puts stderr "Website: https://cmake.org/"
}

# Define CMake root directory
set cmake_subdir "cmake-4.0.1-linux-x86_64"
set cmake_root "$env(HOME)/software/cmake/$cmake_subdir"

# Check if CMake root directory exists
if { ![file exists "$cmake_root"] } {
    puts stderr "ERROR: CMake directory $cmake_root does not exist!"
    exit 1
}

# Set environment variables
prepend-path PATH "$cmake_root/bin"
prepend-path MANPATH "$cmake_root/man"
prepend-path CMAKE_PREFIX_PATH "$cmake_root"

# Optional: Set an environment variable for CMake root
setenv CMAKE_ROOT "$cmake_root"
```

```bash
eric@fantasy:~$ module avail
------------------- /home/eric/software/modules/modulefiles --------------------
cmake/4.0.1  dot  module-git  module-info  modules  null  use.own  

------------------- /opt/intel/oneapi/2025.1/etc/modulefiles -------------------
ccl/2021.15.0                 dnnl/3.7.1                  mkl/2025.1       
compiler-intel-llvm/2025.1.0  dpct/2025.1.0               mpi/2021.15      
compiler-rt/2025.1.0          dpl/2022.8                  oneapi/2025.1.0  
compiler/2025.1.0             intel_ipp_intel64/2022.1    tbb/2022.1       
debugger/2025.1.0             intel_ippcp_intel64/2025.1  umf/0.10.0       
dev-utilities/2025.1.0        ishmem/1.3.0                

Key:
modulepath  
eric@fantasy:~$ module load cmake/4.0.1 
eric@fantasy:~$ cmake --version
cmake version 4.0.1

CMake suite maintained and supported by Kitware (kitware.com/cmake).
```

## Cuda

-  [Steps to manage multiple CUDA environments](https://gist.github.com/garg-aayush/156ec6ddda3d62e2c0ddad00b7e66956).

```
#%Module1.0
##
## cuda 12.1 modulefile
##

proc ModulesHelp { } {
    global version
    
    puts stderr "\tSets up environment for CUDA $version\n"
}

module-whatis "sets up environment for CUDA 12.1"

if { [ is-loaded cuda/11.8 ] } {
module unload cuda/11.8
}

set version 12.1
set root /usr/local/cuda-12.1
setenv CUDA_HOME	$root

prepend-path PATH $root/bin
prepend-path LD_LIBRARY_PATH $root/extras/CUPTI/lib64
prepend-path LD_LIBRARY_PATH $root/lib64
conflict cuda
```



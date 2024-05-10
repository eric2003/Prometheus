# Perl

## Perl Link

-  [www.perl.org](https://www.perl.org/).

## find_package(PerlLibs)

```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

#find_package (Perl)
find_package(PerlLibs)
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )

message( STATUS "PERL_FOUND=${PERL_FOUND}" )
message( STATUS "PERLLIBS_FOUND=${PERLLIBS_FOUND}" )
message( STATUS "PERL_INCLUDE_PATH=${PERL_INCLUDE_PATH}" )
message( STATUS "PERL_LIBRARY=${PERL_LIBRARY}" )
message( STATUS "PERL_EXECUTABLE=${PERL_EXECUTABLE}" )
message( STATUS "PERL_SITESEARCH=${PERL_SITESEARCH}" )
message( STATUS "PERL_SITEARCH=${PERL_SITEARCH}" )
message( STATUS "PERL_SITELIB=${PERL_SITELIB}" )
message( STATUS "PERL_VENDORARCH=${PERL_VENDORARCH}" )
message( STATUS "PERL_VENDORLIB=${PERL_VENDORLIB}" )
message( STATUS "PERL_ARCHLIB=${PERL_ARCHLIB}" )
message( STATUS "PERL_PRIVLIB=${PERL_PRIVLIB}" )
message( STATUS "PERL_UPDATE_ARCHLIB=${PERL_UPDATE_ARCHLIB}" )
message( STATUS "PERL_UPDATE_PRIVLIB=${PERL_UPDATE_PRIVLIB}" )
message( STATUS "PERL_EXTRA_C_FLAGS=${PERL_EXTRA_C_FLAGS}" )
```

results:
```
PS D:\work\modern_cmake_work\ModernCMake\codes\perl\FindPerlLibs\01\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.22631.
-- The C compiler identification is MSVC 19.39.33523.0
-- The CXX compiler identification is MSVC 19.39.33523.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.39.33519/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.39.33519/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found Perl: C:/Users/eric/AppData/Local/ActiveState/cache/bin/perl.exe (found version "5.36.0")
-- Found PerlLibs: C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib/CORE/libperl536.a (found version "5.36.0")
-- my_import_targets=
-- PERL_FOUND=TRUE
-- PERLLIBS_FOUND=TRUE
-- PERL_INCLUDE_PATH=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib/CORE
-- PERL_LIBRARY=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib/CORE/libperl536.a
-- PERL_EXECUTABLE=C:/Users/eric/AppData/Local/ActiveState/cache/bin/perl.exe
-- PERL_SITESEARCH=UNKNOWN
-- PERL_SITEARCH=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/site/lib
-- PERL_SITELIB=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/site/lib
-- PERL_VENDORARCH=
-- PERL_VENDORLIB=
-- PERL_ARCHLIB=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib
-- PERL_PRIVLIB=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib
-- PERL_UPDATE_ARCHLIB=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib
-- PERL_UPDATE_PRIVLIB=C:/Users/eric/AppData/Local/ActiveState/cache/e5ba7d56/lib
-- PERL_EXTRA_C_FLAGS=-DWIN32
-- Configuring done (6.2s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/modern_cmake_work/ModernCMake/codes/perl/FindPerlLibs/01/build
```

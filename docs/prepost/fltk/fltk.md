# FLTK

## Article Link

-  [Win10+64位+VS2019编译FLTK1.4.0源代码](https://zhuanlan.zhihu.com/p/111037258).

## Windows

## Download
 
git clone https://github.com/fltk/fltk.git
```
PS D:\work\fltk_work> git clone https://github.com/fltk/fltk.git
Cloning into 'fltk'...
remote: Enumerating objects: 96557, done.
remote: Counting objects: 100% (168/168), done.
remote: Compressing objects: 100% (116/116), done.
remote: Total 96557 (delta 105), reused 74 (delta 52), pack-reused 96389 (from 3)
Receiving objects: 100% (96557/96557), 42.83 MiB | 3.33 MiB/s, done.
Resolving deltas: 100% (78877/78877), done.
```

convert_doxyfile.bat
```
@echo off
REM Convert 'Doxyfile.in' to 'Doxyfile' or 'Doxybook' for doxygen docs
REM
REM Usage:
REM   convert_doxyfile.bat doxygen_path input output logfile
REM
REM where
REM - 'doxygen_path' is the full path to the doxygen executable (e.g., "C:\Program Files\doxygen\bin\doxygen.exe")
REM - 'input' is the input file (e.g., 'Doxybook.in')
REM - 'output' is the generated doxygen file (e.g., 'Doxybook')
REM - 'logfile' is the file to store doxygen warnings and errors
REM
REM Example:
REM   convert_doxyfile.bat "C:\Program Files\doxygen\bin\doxygen.exe" Doxybook.in Doxybook D:\work\fltk_work\fltk\build\documentation\Doxybook_error.log
REM
REM Doxygen warnings and errors are stored in 'logfile' for review.
REM
REM Dependencies: Requires 'doxygen.exe' and Windows commands 'echo' and 'date'.

REM Store parameters
set DOXYGEN=%1
set INFILE=%2
set OUTFILE=%3
set LOGFILE=%4

REM Remove quotes from DOXYGEN path for version check
set DOXYGEN_NOQUOTES=%DOXYGEN:"=%

REM Validate parameters
if "%DOXYGEN%"=="" (
    echo Error: Doxygen path not provided
    exit /b 1
)
if "%INFILE%"=="" (
    echo Error: Input file not provided
    exit /b 1
)
if "%OUTFILE%"=="" (
    echo Error: Output file not provided
    exit /b 1
)
if "%LOGFILE%"=="" (
    echo Error: Log file not provided
    exit /b 1
)

REM Get Doxygen version
for /f "tokens=*" %%i in ('%DOXYGEN_NOQUOTES% --version') do set VERSION=%%i

REM Get current date and time (Windows equivalent of 'date')
set DATETIME=%date% %time%

REM Write info header to LOGFILE
echo %OUTFILE% created by doxygen version %VERSION%>%LOGFILE%
echo   at %DATETIME%>>%LOGFILE%
echo.>>%LOGFILE%

REM Convert doxygen file and append errors/warnings to LOGFILE
%DOXYGEN% -u -s - <%INFILE% >%OUTFILE% 2>>%LOGFILE%

REM Check if the command was successful
if %ERRORLEVEL% neq 0 (
    echo Error: Doxygen conversion failed, check %LOGFILE% for details
    exit /b %ERRORLEVEL%
)

exit /b 0
```

```
@echo off
REM Convert 'Doxyfile.in' to 'Doxyfile' or 'Doxybook' for doxygen docs
REM
REM Usage:
REM   convert_doxyfile.bat doxygen_path input output logfile
REM
REM where
REM - 'doxygen_path' is the full path to the doxygen executable (e.g., "C:\Program Files\doxygen\bin\doxygen.exe")
REM - 'input' is the input file (e.g., 'Doxybook.in')
REM - 'output' is the generated doxygen file (e.g., 'Doxybook')
REM - 'logfile' is the file to store doxygen warnings and errors
REM
REM Example:
REM   convert_doxyfile.bat "C:\Program Files\doxygen\bin\doxygen.exe" Doxybook.in Doxybook D:\work\fltk_work\fltk\build\documentation\Doxybook_error.log
REM
REM Dependencies: Requires 'doxygen.exe' and Windows commands 'echo' and 'date'.

REM Store parameters, normalize paths (replace / with \)
set "DOXYGEN=%~1"
set "INFILE=%~2"
set "OUTFILE=%~3"
set "LOGFILE=%~4"

REM Normalize DOXYGEN path for version check (remove quotes and convert / to \)
set "DOXYGEN_NOQUOTES=%DOXYGEN:"=%"
set "DOXYGEN_NOQUOTES=%DOXYGEN_NOQUOTES:/=\%"

REM Validate parameters
if "%DOXYGEN%"=="" (
    echo Error: Doxygen path not provided
    exit /b 1
)
if not exist "%DOXYGEN_NOQUOTES%" (
    echo Error: Doxygen executable not found at %DOXYGEN_NOQUOTES%
    exit /b 1
)
if "%INFILE%"=="" (
    echo Error: Input file not provided
    exit /b 1
)
if not exist "%INFILE%" (
    echo Error: Input file %INFILE% not found
    exit /b 1
)
if "%OUTFILE%"=="" (
    echo Error: Output file not provided
    exit /b 1
)
if "%LOGFILE%"=="" (
    echo Error: Log file not provided
    exit /b 1
)

REM Ensure log file directory exists
for %%F in ("%LOGFILE%") do set "LOGDIR=%%~dpF"
if not exist "%LOGDIR%" (
    mkdir "%LOGDIR%"
    if %ERRORLEVEL% neq 0 (
        echo Error: Failed to create log directory %LOGDIR%
        exit /b %ERRORLEVEL%
    )
)

REM Get Doxygen version
for /f "tokens=*" %%i in ('"%DOXYGEN_NOQUOTES%" --version') do set "VERSION=%%i"

REM Get current date and time
set "DATETIME=%date% %time%"

REM Write info header to LOGFILE
echo %OUTFILE% created by doxygen version %VERSION%>%LOGFILE%
echo   at %DATETIME%>>%LOGFILE%
echo.>>%LOGFILE%

REM Convert doxygen file and append errors/warnings to LOGFILE
"%DOXYGEN%" -u -s - < "%INFILE%" > "%OUTFILE%" 2>> "%LOGFILE%"

REM Check if the command was successful
if %ERRORLEVEL% neq 0 (
    echo Error: Doxygen conversion failed, check %LOGFILE% for details
    exit /b %ERRORLEVEL%
)

echo Successfully created %OUTFILE%
exit /b 0
```


```
convert_doxyfile.bat "C:/Program Files/doxygen/bin/doxygen.exe" Doxybook.in Doxybook Doxybook_error.log
```

```
@echo off
REM Makefile helper script for the Fast Light Tool Kit (FLTK) documentation.
REM
REM Copyright 1998-2020 by Bill Spitzak and others.
REM
REM This library is free software. Distribution and use rights are outlined in
REM the file "COPYING" which should have been included with this file.  If this
REM file is missing or damaged, see the license at:
REM
REM     https://www.fltk.org/COPYING.php
REM
REM Please see the following page on how to report bugs and issues:
REM
REM      https://www.fltk.org/bugs.php
REM
REM This script generates latex/refman.pdf after doxygen has been executed.
REM
REM Input:  run 'doxygen Doxybook' (creates files in subdirectory latex)
REM Output: latex/refman.pdf (if successful)
REM
REM Next step: copy /Y latex/refman.pdf fltk.pdf
REM
REM Working directory: @CMAKE_CURRENT_BINARY_DIR@
REM
REM Used in: Makefile and CMakeLists.txt

REM Ensure latex directory exists
if not exist latex (
    echo Error: latex directory not found
    exit /b 1
)

REM Change to latex directory
cd latex
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to change to latex directory
    exit /b %ERRORLEVEL%
)

REM Verify refman.tex exists
if not exist refman.tex (
    echo Error: refman.tex not found
    cd ..
    exit /b 1
)

REM Define pdflatex command with PDF metadata
set "PDFLATEX_CMD=pdflatex --interaction=nonstopmode \"\pdfinfo{/CreationDate(@PDF_DATE@)/ModDate(@PDF_DATE@)}\input{refman.tex}\""

REM Run pdflatex
echo Running pdflatex...
%PDFLATEX_CMD% > pdfall.log 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: First pdflatex run failed, check pdfall.log
    type pdfall.log
    cd ..
    exit /b %ERRORLEVEL%
)

REM Run makeindex
echo Running makeindex...
makeindex refman.idx >> pdfall.log 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: makeindex failed, check pdfall.log
    type pdfall.log
    cd ..
    exit /b %ERRORLEVEL%
)

REM Run pdflatex again
echo Running pdflatex again...
%PDFLATEX_CMD% >> pdfall.log 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: Second pdflatex run failed, check pdfall.log
    type pdfall.log
    cd ..
    exit /b %ERRORLEVEL%
)

REM Loop to rerun pdflatex if cross-references need updating
set "LATEX_COUNT=5"
:rerun_loop
findstr /C:"Rerun LaTeX" /C:"Rerun to get cross-references right" refman.log >nul
if %ERRORLEVEL% equ 0 if %LATEX_COUNT% gtr 0 (
    echo Rerunning pdflatex...
    %PDFLATEX_CMD% >> pdfall.log 2>&1
    if %ERRORLEVEL% neq 0 (
        echo Error: pdflatex rerun failed, check pdfall.log
        type pdfall.log
        cd ..
        exit /b %ERRORLEVEL%
    )
    set /a LATEX_COUNT-=1
    goto rerun_loop
)

REM Return to parent directory
cd ..
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to return to parent directory
    exit /b %ERRORLEVEL%
)

echo Successfully generated latex/refman.pdf
exit /b 0
```


```
@echo off
REM Makefile helper script for the Fast Light Tool Kit (FLTK) documentation.
REM
REM Copyright 1998-2020 by Bill Spitzak and others.
REM
REM This library is free software. Distribution and use rights are outlined in
REM the file "COPYING" which should have been included with this file.  If this
REM file is missing or damaged, see the license at:
REM
REM     https://www.fltk.org/COPYING.php
REM
REM Please see the following page on how to report bugs and issues:
REM
REM      https://www.fltk.org/bugs.php
REM
REM This script generates latex/refman.pdf after doxygen has been executed.
REM
REM Input:  run 'doxygen Doxybook' (creates files in subdirectory latex)
REM Output: latex/refman.pdf (if successful)
REM
REM Next step: copy /Y latex/refman.pdf fltk.pdf
REM
REM Working directory: @CMAKE_CURRENT_BINARY_DIR@
REM
REM Used in: Makefile and CMakeLists.txt

REM Ensure latex directory exists
if not exist latex (
    echo Error: latex directory not found
    exit /b 1
)

REM Change to latex directory
cd latex
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to change to latex directory
    exit /b %ERRORLEVEL%
)

REM Verify refman.tex exists
if not exist refman.tex (
    echo Error: refman.tex not found
    cd ..
    exit /b 1
)

REM Define pdflatex command with PDF metadata
set "PDFLATEX_CMD=pdflatex --interaction=nonstopmode \"\pdfinfo{/CreationDate(@PDF_DATE@)/ModDate(@PDF_DATE@)}\input{refman.tex}\""

REM Run pdflatex
echo Running pdflatex...
%PDFLATEX_CMD% > pdfall.log 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: First pdflatex run failed, check pdfall.log
    type pdfall.log
    cd ..
    exit /b %ERRORLEVEL%
)

REM Run makeindex
echo Running makeindex...
makeindex refman.idx >> pdfall.log 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: makeindex failed, check pdfall.log
    type pdfall.log
    cd ..
    exit /b %ERRORLEVEL%
)

REM Run pdflatex again
echo Running pdflatex again...
%PDFLATEX_CMD% >> pdfall.log 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: Second pdflatex run failed, check pdfall.log
    type pdfall.log
    cd ..
    exit /b %ERRORLEVEL%
)

REM Loop to rerun pdflatex if cross-references need updating
set "LATEX_COUNT=5"
:rerun_loop
findstr /C:"Rerun LaTeX" /C:"Rerun to get cross-references right" refman.log >nul
if %ERRORLEVEL% equ 0 if %LATEX_COUNT% gtr 0 (
    echo Rerunning pdflatex...
    %PDFLATEX_CMD% >> pdfall.log 2>&1
    if %ERRORLEVEL% neq 0 (
        echo Error: pdflatex rerun failed, check pdfall.log
        type pdfall.log
        cd ..
        exit /b %ERRORLEVEL%
    )
    set /a LATEX_COUNT-=1
    goto rerun_loop
)

REM Return to parent directory
cd ..
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to return to parent directory
    exit /b %ERRORLEVEL%
)

echo Successfully generated latex/refman.pdf
exit /b 0
```

## pdflatex --version
```
PS C:\Users\eric> pdflatex --version
pdfTeX 3.141592653-2.6-1.40.24 (TeX Live 2022)
kpathsea version 6.3.4
Copyright 2022 Han The Thanh (pdfTeX) et al.
There is NO warranty.  Redistribution of this software is
covered by the terms of both the pdfTeX copyright and
the Lesser GNU General Public License.
For more information about these matters, see the file
named COPYING and the pdfTeX source.
Primary author of pdfTeX: Han The Thanh (pdfTeX) et al.
Compiled with libpng 1.6.37; using libpng 1.6.37
Compiled with zlib 1.2.11; using zlib 1.2.11
Compiled with xpdf version 4.03
```

## makeindex --version

```
PS C:\Users\eric> makeindex --version
Unknown option --.
Usage: makeindex [-ilqrcg] [-s sty] [-o ind] [-t log] [-p num] [idx0 idx1 ...]
```

## type pdfall.log
```
PS C:\Users\eric> type D:\work\fltk_work\fltk\build\documentation\latex\pdfall.log
This is pdfTeX, Version 3.141592653-2.6-1.40.24 (TeX Live 2022) (preloaded format=pdflatex)
 restricted \write18 enabled.
entering extended mode
LaTeX2e <2021-11-15> patch level 1
L3 programming layer <2022-02-24> (./refman.tex
```

## pdflatex test.tex
```
PS D:\work\fltk_work\fltk\build\documentation\latex> echo '\documentclass{book}\usepackage{doxygen}\begin{document}Test\end{document}' > test.tex
PS D:\work\fltk_work\fltk\build\documentation\latex> pdflatex test.tex
This is pdfTeX, Version 3.141592653-2.6-1.40.24 (TeX Live 2022) (preloaded format=pdflatex)
 restricted \write18 enabled.
entering extended mode
(./test.tex
LaTeX2e <2021-11-15> patch level 1
L3 programming layer <2022-02-24>
(d:/software/texlive/2022/texmf-dist/tex/latex/base/book.cls
Document Class: book 2021/10/04 v1.4n Standard LaTeX document class
(d:/software/texlive/2022/texmf-dist/tex/latex/base/bk10.clo)) (./doxygen.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/base/alltt.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/tools/calc.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/float/float.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/tools/verbatim.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/xcolor/xcolor.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics-cfg/color.cfg)
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics-def/pdftex.def)
(d:/software/texlive/2022/texmf-dist/tex/latex/colortbl/colortbl.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/tools/array.sty)))
(./longtable_doxygen.sty) (./tabu_doxygen.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/varwidth/varwidth.sty))
(d:/software/texlive/2022/texmf-dist/tex/latex/fancyvrb/fancyvrb.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics/keyval.sty))
(d:/software/texlive/2022/texmf-dist/tex/latex/tools/tabularx.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/tools/multicol.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/multirow/multirow.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/hanging/hanging.sty)
(d:/software/texlive/2022/texmf-dist/tex/generic/iftex/ifpdf.sty
(d:/software/texlive/2022/texmf-dist/tex/generic/iftex/iftex.sty))
(d:/software/texlive/2022/texmf-dist/tex/latex/adjustbox/adjustbox.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/xkeyval/xkeyval.sty
(d:/software/texlive/2022/texmf-dist/tex/generic/xkeyval/xkeyval.tex
(d:/software/texlive/2022/texmf-dist/tex/generic/xkeyval/xkvutils.tex)))
(d:/software/texlive/2022/texmf-dist/tex/latex/adjustbox/adjcalc.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/adjustbox/trimclip.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics/graphicx.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics/graphics.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics/trig.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/graphics-cfg/graphics.cfg)))
(d:/software/texlive/2022/texmf-dist/tex/latex/collectbox/collectbox.sty)
(d:/software/texlive/2022/texmf-dist/tex/latex/adjustbox/tc-pdftex.def))
(d:/software/texlive/2022/texmf-dist/tex/latex/ifoddpage/ifoddpage.sty))
(d:/software/texlive/2022/texmf-dist/tex/latex/amsfonts/amssymb.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/amsfonts/amsfonts.sty))
(d:/software/texlive/2022/texmf-dist/tex/latex/stackengine/stackengine.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/etoolbox/etoolbox.sty)
(d:/software/texlive/2022/texmf-dist/tex/generic/listofitems/listofitems.sty
(d:/software/texlive/2022/texmf-dist/tex/generic/listofitems/listofitems.tex)))
 (d:/software/texlive/2022/texmf-dist/tex/latex/enumitem/enumitem.sty)
(d:/software/texlive/2022/texmf-dist/tex/generic/alphalph/alphalph.sty
(d:/software/texlive/2022/texmf-dist/tex/generic/infwarerr/infwarerr.sty)
(d:/software/texlive/2022/texmf-dist/tex/generic/intcalc/intcalc.sty))
(d:/software/texlive/2022/texmf-dist/tex/generic/ulem/ulem.sty))
(d:/software/texlive/2022/texmf-dist/tex/latex/l3backend/l3backend-pdftex.def)
No file test.aux.
(d:/software/texlive/2022/texmf-dist/tex/context/base/mkii/supp-pdf.mkii
[Loading MPS to PDF converter (version 2006.09.02).]
) (d:/software/texlive/2022/texmf-dist/tex/latex/epstopdf-pkg/epstopdf-base.sty
(d:/software/texlive/2022/texmf-dist/tex/latex/latexconfig/epstopdf-sys.cfg))
[1{d:/software/texlive/2022/texmf-var/fonts/map/pdftex/updmap/pdftex.map}]
(./test.aux) )<d:/software/texlive/2022/texmf-dist/fonts/type1/public/amsfonts/
cm/cmr10.pfb>
Output written on test.pdf (1 page, 11638 bytes).
Transcript written on test.log.
PS D:\work\fltk_work\fltk\build\documentation\latex> dir test.pdf

    Directory: D:\work\fltk_work\fltk\build\documentation\latex

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---            2025/6/6    10:18          11638 test.pdf
```


```
pdflatex --interaction=nonstopmode "\pdfinfo{/CreationDate(D:20250606013634Z)/ModDate(D:20250606013634Z)}\input{refmantest.tex}"
pdflatex --interaction=nonstopmode "\pdfinfo{/CreationDate(D:20250606013634Z)/ModDate(D:20250606013634Z)}\input{refman.tex}"
```

```
PS D:\work\fltk_work\fltk\build\documentation\latex> Copy-Item refman.tex refman_backup.tex
PS D:\work\fltk_work\fltk\build\documentation\latex> $content = Get-Content refman.tex
PS D:\work\fltk_work\fltk\build\documentation\latex> $newContent = $content -replace '(\\documentclass\[twoside\]\{book\})', '$1`n\usepackage[utf8]{inputenc}'
PS D:\work\fltk_work\fltk\build\documentation\latex> $newContent | Set-Content refman_utf8.tex
PS D:\work\fltk_work\fltk\build\documentation\latex> pdflatex --interaction=nonstopmode "\pdfinfo{/CreationDate(D:20250606013634Z)/ModDate(D:20250606013634Z)}\input{refman_utf8.tex}" > pdfall_utf8.log 2>&1
PS D:\work\fltk_work\fltk\build\documentation\latex> Get-Content pdfall_utf8.log
This is pdfTeX, Version 3.141592653-2.6-1.40.24 (TeX Live 2022) (preloaded format=pdflatex)
 restricted \write18 enabled.
entering extended mode
LaTeX2e <2021-11-15> patch level 1
L3 programming layer <2022-02-24> (./refman_utf8.tex
```
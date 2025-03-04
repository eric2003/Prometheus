# LaTeX 

## LaTeX 

-  [www.latexlive.com](https://www.latexlive.com/).
-  [LaTeX – A document preparation system](https://www.latex-project.org/).

## latex --version

latex --version
```
PS C:\Users\eric> latex --version
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

pdflatex --version
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

Get-Command -Name latex
```
PS C:\Users\eric> Get-Command -Name latex

CommandType     Name        Version    Source
-----------     ----        -------    ------
Application     latex.exe   0.0.0.0    D:\software\texlive\2022\bin\win32\lat..
```


## Path for LaTeX, latex.exe, pdflatex.exe

```
d:\software\texlive\2022\bin\win32\
```

## Examples

```latex
\documentclass{article}
\usepackage{amsmath}
\usepackage[UTF8]{ctex} % For Chinese support

\begin{document}

\section{8.1}

\begin{equation}
w_t + (f(w))_x = 0, \quad x \in (a, b), \quad t > 0
\label{eq:8.1}
\end{equation}

\begin{equation}
w(x, 0) = w^0(x), \quad x \in [a, b]
\label{eq:8.2}
\end{equation}

\begin{equation}
a = x_{\frac{1}{2}} < x_{\frac{3}{2}} < \cdots < x_{N-\frac{1}{2}} = b
\label{eq:8.3}
\end{equation}

其中计算点为 \( x_i = \frac{x_{i-1/2} + x_{i+1/2}}{2} \)，步长为 \( \Delta x_i \)。  
\( \Delta x = \max \Delta x_i \)，表示最大网格步长。

加权ENO方法是一种高阶、非振荡的数值方法，适用于求解偏微分方程。

\end{document}
```
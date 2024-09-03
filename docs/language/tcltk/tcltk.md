# Tcl/tk

Tcl is a general purpose multi-paradigm system programming language. It is a scripting language that aims at providing the ability for applications to communicate with each other. On the other hand, Tk is a cross platform widget toolkit used for building GUI in many languages.

## Tcl/Tk

- [Tcl/Tk 系列链接整理](https://zhuanlan.zhihu.com/p/512365807/).
- [Tcler's Wiki](https://wiki.tcl-lang.org/).

## Tcl/Tk Tutorial

- [Tcl/Tk Tutorial](https://www.tutorialspoint.com/tcl-tk/index.htm).
- [TkDocs](https://tkdocs.com/).
- [Tcl Tutorial](https://wiki.tcl-lang.org/page/Tcl+Tutorial+Lesson+0).
- [TCL tutorial: Basics to Advanced](https://www.youtube.com/playlist?list=PL1h5a0eaDD3rsGDFnVki_fFEtDWQfXjca).
- [Writing Tcl-Based Applications in C](https://wiki.tcl-lang.org/page/Writing+Tcl-Based+Applications+in+C).


## Tk

- [Tk - Button Widget](https://www.tutorialspoint.com/tcl-tk/tk_button_widget.htm).
- [Tk - Overview](https://www.tutorialspoint.com/tcl-tk/tk_overview.htm).
- [Tk tutorial](https://tk-tutorial.readthedocs.io/en/latest/button/button.html).


## Code Example

First Tcl Program
```tcl
#!/usr/bin/tclsh

puts "Hello, World!"
```

Assuming, Tcl environment is setup correctly; let's run the program after switching to file's directory and then execute the program using −
```
$ tclsh test.tcl
```

We will get the following output −
```
Hello, World!
```

## $tcl_version

```powershell
PS D:\work\tcltk_work\TcltkStudy\codes\tcl_version\tcl_version01> tclsh
% puts $tcl_version
8.6
```

## Tcl Package Path

```powershell
PS C:\Users\eric> tclsh
% puts $tcl_pkgPath
can't read "tcl_pkgPath": no such variable
```

## Tcl Library

```powershell
PS C:\Users\eric> tclsh
% puts $tcl_library
C:/dev/ActiveTcl/lib/tcl8.6
```

## Tcl Patch Level

```powershell
PS C:\Users\eric> tclsh
% puts $tcl_patchLevel
8.6.13
```

## Tcl Precision

```powershell
PS C:\Users\eric> tclsh
% puts $tcl_precision
0
```

## Tcl Startup File

```powershell
PS C:\Users\eric> tclsh
% puts $tcl_rcFileName
~/tclshrc.tcl
```

## Hello World!

```powershell
PS C:\Users\eric> tclsh
% puts "Hello World!"
Hello World!
```

## [expr 3 + 2]

```powershell
PS C:\Users\eric> tclsh
% puts [expr 3 + 2]
5
```

## [expr 3 + 4]

```powershell
PS C:\Users\eric> tclsh
% puts [expr 3 + 4]
7
```

## Variable Substitution

```powershell
PS C:\Users\eric> tclsh
% set a 3
3
% puts $a
3
```

## Backslash Substitution

```powershell
PS C:\Users\eric> tclsh
% puts "Hello\nWorld"
Hello
World
```

## String Representations

```tcl
#!/usr/bin/tclsh

set myVariable hello
puts $myVariable
```

output
```powershell
hello
```




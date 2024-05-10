# Doxygen 

## Doxygen Link

-  [Doxygen homepage](https://www.doxygen.nl/).
-  [Doxygen Basics](https://www.youtube.com/watch?v=TtRn3HsOm1s/).
-  [How to Create (HTML and PDF) Software Documentation Using Doxygen](https://www.youtube.com/watch?v=M6vqbvXnwG4/).
-  [C++ Professional API Documentation with Doxygen!](https://www.youtube.com/watch?v=pnnKzkNTo4w/).


## doxygen --version

doxygen --version
```
PS C:\Users\eric> doxygen --version
1.10.0 (ebc57c6dd303a980bd19dd74b8b61c8f3f5180ca)
```

Get-Command -Name doxygen
```
PS C:\Users\eric> Get-Command -Name doxygen

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     doxygen.exe                                        0.0.0.0    c:\Program Files\doxygen\bin\doxygen.exe
```

## Path for Doxygen.exe

```
c:\Program Files\doxygen\bin\doxygen.exe
```

## Doxygen Operation


```
#pragma once

/// This is the brief description for this class
/// 
/// This is the *detailed* description. More **stuff** here
/// ### Example
/// ~~~~~~~~~~~~~~~~~~~~~~.cpp
/// MyClass *a=new MyClass(); // a comment
/// ~~~~~~~~~~~~~~~~~~~~~~
class MyClass1
{
public:
    /// Brif desc.
    ///
    /// This is the detailed one. More details.
    /// @param a This describes parameter a
    /// @param b This describes parameter b
    /// @returns Nothing important.
    /// @see anotherMemberfunction() anotherMemberfunction1()
    /// @see anotherMemberfunction2 anotherMemberfunction3
    /// @note A little side note.
    /// @attention Alittle more important than a note.
    /// @warning A warning is super important!
    void memberFunction( int a, int b);

    void anotherMemberfunction();
    void anotherMemberfunction1( int a);
    void anotherMemberfunction2( int a, int b );
    void anotherMemberfunction3( int a, int b, float c );
};

```

## Step 1: Creating a configuration file

```
doxygen -g <config-file>
```

typical results:
```
PS D:\work\doxygen_work\ModernDoxygen\codes\command\02> doxygen -g
Configuration file 'Doxyfile' created.

Now edit the configuration file and enter

  doxygen
```

or
```
PS D:\work\doxygen_work\ModernDoxygen\codes\command\02> doxygen -g test
Configuration file 'test' created.

Now edit the configuration file and enter

  doxygen test

to generate the documentation for your project
```

## doxygen --help

```
PS C:\Users\eric> doxygen --help
Doxygen version 1.10.0 (ebc57c6dd303a980bd19dd74b8b61c8f3f5180ca)
Copyright Dimitri van Heesch 1997-2021

You can use doxygen in a number of ways:

1) Use doxygen to generate a template configuration file*:
    c:\Program Files\doxygen\bin\doxygen.exe [-s] -g [configName]

2) Use doxygen to update an old configuration file*:
    c:\Program Files\doxygen\bin\doxygen.exe [-s] -u [configName]

3) Use doxygen to generate documentation using an existing configuration file*:
    c:\Program Files\doxygen\bin\doxygen.exe [configName]

4) Use doxygen to generate a template file controlling the layout of the
   generated documentation:
    c:\Program Files\doxygen\bin\doxygen.exe -l [layoutFileName]

    In case layoutFileName is omitted DoxygenLayout.xml will be used as filename.
    If - is used for layoutFileName doxygen will write to standard output.

5) Use doxygen to generate a template style sheet file for RTF, HTML or Latex.
    RTF:        c:\Program Files\doxygen\bin\doxygen.exe -w rtf styleSheetFile
    HTML:       c:\Program Files\doxygen\bin\doxygen.exe -w html headerFile footerFile styleSheetFile [configFile]
    LaTeX:      c:\Program Files\doxygen\bin\doxygen.exe -w latex headerFile footerFile styleSheetFile [configFile]

6) Use doxygen to generate a rtf extensions file
    c:\Program Files\doxygen\bin\doxygen.exe -e rtf extensionsFile

    If - is used for extensionsFile doxygen will write to standard output.

7) Use doxygen to compare the used configuration file with the template configuration file
    c:\Program Files\doxygen\bin\doxygen.exe -x [configFile]

   Use doxygen to compare the used configuration file with the template configuration file
   without replacing the environment variables or CMake type replacement variables
    c:\Program Files\doxygen\bin\doxygen.exe -x_noenv [configFile]

8) Use doxygen to show a list of built-in emojis.
    c:\Program Files\doxygen\bin\doxygen.exe -f emoji outputFileName

    If - is used for outputFileName doxygen will write to standard output.

*) If -s is specified the comments of the configuration items in the config file will be omitted.
   If configName is omitted 'Doxyfile' will be used as a default.
   If - is used for configFile doxygen will write / read the configuration to /from standard output / input.

If -q is used for a doxygen documentation run, doxygen will see this as if QUIET=YES has been set.

-v print version string, -V print extended version information
-h,-? prints usage help information
c:\Program Files\doxygen\bin\doxygen.exe -d prints additional usage flags for debugging purposes
```

## CMake Link

-  [C++ documentation with Doxygen/CMake/Sphinx/Breathe for those of us who are totally lost](https://medium.com/practical-coding/c-documentation-with-doxygen-cmake-sphinx-breathe-for-those-of-use-who-are-totally-lost-7d555386fe13).
-  [CMake-Episode 025: CMake - Generating the documentation with Doxygen: Doxyfile | CMake Starts Here](https://www.youtube.com/watch?v=eDsF01QFG-0/).

## cmake --build . --target doxygen

```
cmake --build . --target doxygen
```
# C++ Examples

## main

### main version 1

```cpp
int main(int argc, char* argv[])
{
	return 0;
}
```

### main version 2

```cpp
int main(int argc, char** argv)
{
	return 0;
}
```

### main version 3

```cpp
int main()
{
	return 0;
}
```

## filesystem

```cpp
#include <iostream>
#include <filesystem>

int main()
{
	std::filesystem::path currentPath = std::filesystem::current_path();
	std::cout << "Current Path: " << currentPath << std::endl;

	std::filesystem::path targetPath("d:\work\opengl_work_2024\ModernOpenGL\codes\simple\glsl\01d\");
	std::filesystem::path relativePath = std::filesystem::relative(targetPath, currentPath);
	std::cout << relativePath << std::endl;
    
    return 0;
}

```

## printf

-  [printf](https://cplusplus.com/reference/cstdio/printf/).

```cpp
/* printf example */
#include <stdio.h>

int main()
{
   printf ("Characters: %c %c \n", 'a', 65);
   printf ("Decimals: %d %ld\n", 1977, 650000L);
   printf ("Preceding with blanks: %10d \n", 1977);
   printf ("Preceding with zeros: %010d \n", 1977);
   printf ("Some different radices: %d %x %o %#x %#o \n", 100, 100, 100, 100, 100);
   printf ("floats: %4.2f %+.0e %E \n", 3.1416, 3.1416, 3.1416);
   printf ("Width trick: %*d \n", 5, 10);
   printf ("%s \n", "A string");
   return 0;
}
```

## Formatted Input/Output

-  [Formatted Input/Output](https://site.sci.hkbu.edu.hk/tdgc/tutorial/C/09-FormatIO.pdf).

## std::format

```cpp
#include <iostream>  
#include <format>

int main(int argc, char* argv[])
{
    double number = 1234.56789;  

    // 格式化为固定小数位数  
    std::string formatted_fixed = std::format("{:.2f}", number);  
    std::cout << "Fixed format: " << formatted_fixed << std::endl;  

    // 格式化为科学记数法  
    std::string formatted_scientific = std::format("{:.2e}", number);  
    std::cout << "Scientific format: " << formatted_scientific << std::endl;  

    // 格式化为通用格式  
    std::string formatted_general = std::format("{:.2g}", number);  
    std::cout << "General format: " << formatted_general << std::endl;  

    return 0;
}  
```


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
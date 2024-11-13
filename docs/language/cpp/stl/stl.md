# STL

## round

## round case1
```cpp
#include <iostream>
#include <cmath>

int main(int argc, char* argv[])
{
    double num, result;

    num = 11.16;
    result = round(num);

    std::cout << "round(" << num << ") = " << result << std::endl;

    num = 13.87;
    result = round(num);

    std::cout << "round(" << num << ") = " << result << std::endl;

    num = 50.5;
    result = round(num);

    std::cout << "round(" << num << ") = " << result;

    return 0;
}
```

output
```powershell
round(11.16) = 11
round(13.87) = 14
round(50.5) = 51
```

## round case2
```cpp
#include <iostream>
#include <cmath>

int main(int argc, char* argv[])
{
    double num, result;

    num = -11.16;
    result = round(num);

    std::cout << "round(" << num << ") = " << result << std::endl;

    num = -13.87;
    result = round(num);

    std::cout << "round(" << num << ") = " << result << std::endl;

    num = -50.5;
    result = round(num);

    std::cout << "round(" << num << ") = " << result << std::endl;

    return 0;
}
```

output
```powershell
round(-11.16) = -11
round(-13.87) = -14
round(-50.5) = -51
```

## round case3
```cpp
#include <iostream>
#include <cmath>

int main(int argc, char* argv[])
{
    double result;

    int num = 15;
    result = round(num);

    std::cout << "round(" << num << ") = " << result << std::endl;

    return 0;
}
```

output
```powershell
round(15) = 15
```

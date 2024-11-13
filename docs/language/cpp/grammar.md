# C++ Gammar

## CRTP(Curiously Recurring Template Pattern)

-  [Curiously Recurring Template Pattern](https://en.cppreference.com/w/cpp/language/crtp/).

## C++23 explicit object parameter

-  [Johan Berg: Deducing this, C++23's Explicit Object Parameter](https://www.youtube.com/watch?v=78JQq52A0b0/).

Old version
```cpp
#include <iostream>  

struct X {  
    // 普通的 lvalue 版本  
    void f() & {  
        std::cout << "Called f() on an lvalue." << std::endl;  
    }  

    // 普通的 rvalue 版本  
    void f() && {  
        std::cout << "Called f() on an rvalue." << std::endl;  
    }  

    // const lvalue 版本  
    void f() const& {  
        std::cout << "Called f() on a const lvalue." << std::endl;  
    }  

    // const rvalue 版本  
    void f() const&& {  
        std::cout << "Called f() on a const rvalue." << std::endl;  
    }  
};  

int main() {  
    X x;                // x 是一个 lvalue  
    const X cx;       // cx 是一个 const lvalue  

    // 调用 lvalue 和 const lvalue 版本  
    x.f();            // 输出: Called f() on an lvalue.  
    cx.f();          // 输出: Called f() on a const lvalue.  

    // 调用 rvalue 和 const rvalue 版本  
    X().f();          // 输出: Called f() on an rvalue.  
    const X().f();    // 输出: Called f() on a const rvalue.  

    return 0;  
}  
```

output
```powershell
Called f() on an lvalue.
Called f() on a const lvalue.
Called f() on an rvalue.
Called f() on a const rvalue.
```

New version
```cpp
#include <iostream>  

struct X {  
    // lvalue 版本  
    void f(this X&) {  
        std::cout << "Called f() on an lvalue (explicit). " << std::endl;  
    }  

    // rvalue 版本  
    void f(this X&&) {  
        std::cout << "Called f() on an rvalue (explicit). " << std::endl;  
    }  

    // const lvalue 版本  
    void f(this const X&) const {  
        std::cout << "Called f() on a const lvalue (explicit). " << std::endl;  
    }  

    // const rvalue 版本  
    void f(this const X&&) const {  
        std::cout << "Called f() on a const rvalue (explicit). " << std::endl;  
    }  
};  

int main() {  
    X x;                  // x 是一个 lvalue  
    const X cx;          // cx 是一个 const lvalue  

    // 调用 lvalue 和 const lvalue 版本  
    x.f();               // 输出: Called f() on an lvalue (explicit).  
    cx.f();             // 输出: Called f() on a const lvalue (explicit).  

    // 调用 rvalue 和 const rvalue 版本  
    X().f();             // 输出: Called f() on an rvalue (explicit).  
    const X().f();       // 输出: Called f() on a const rvalue (explicit).  

    return 0;  
}
```

output
```powershell
Called f() on an lvalue.
Called f() on a const lvalue.
Called f() on an rvalue.
Called f() on a const rvalue.
```



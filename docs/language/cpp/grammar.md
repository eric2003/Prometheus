# C++ Gammar

## CRTP(Curiously Recurring Template Pattern)

-  [Curiously Recurring Template Pattern](https://en.cppreference.com/w/cpp/language/crtp/).

## CTAD(constructor template argument deduction)

## [[nodiscard]] Attribute

-  [C++ Weekly - Ep 30 - C++17's [[nodiscard]] Attribute](https://www.youtube.com/watch?v=l_5PF3GQLKc).

[[nodiscard]]
```cpp
[[nodiscard]] int something()
{
    return 1;
}

int main()
{
    something();
    return 0;  
}
```

```powershell
D:\work\modern_cpp_work\ModernCpp\codes\grammar\nodiscard\01\main.cpp(8,14): 
warning C4834: 放弃具有 [[nodiscard]] 属性的函数的返回值
```

[[nodiscard("Hello World!")]]
```cpp
[[nodiscard("Hello World!")]] int something()
{
    return 1;
}

int main()
{
    something();
    return 0;  
}
```

```powershell
D:\work\modern_cpp_work\ModernCpp\codes\grammar\nodiscard\01a\main.cpp(8,14):
warning C4858: 正在放弃返回值: Hello World!
```

## [[maybe_unused]] Attribute

-  [C++ Weekly - Ep 29 - C++17's [[maybe_unused]] Attribute](https://www.youtube.com/watch?v=WSPmNL9834U).

```cpp
int main()
{
    int i = 0;
    return 0;
}
```

```powershell
D:\work\modern_cpp_work\ModernCpp\codes\grammar\maybe_unused\01\main.cpp(3,9): 
warning C4189: “i”: 局部变量已初始化但不引用
```

```cpp
int main()
{
    [[maybe_unused]] int i = 0;
    return 0;
}
```

```powershell
```

## virtual

```cpp
struct FooInterface {
    [[nodiscard]] virtual auto func() const -> int = 0;
};

struct Foo final : public FooInterface {
    [[nodiscard]] auto func() const -> int override {
        return 42;
    }
};

int main()
{
    return 0;
}
```


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

Deducing this
```cpp
#include <iostream>  

struct Base {  
    template<typename Self>  
    void f(this Self&& self) {  
        std::cout << "f(this Self&& self)." << std::endl;  
    }  
};  

struct Derived : Base {};

int main() {  
    Base b;
    b.f();               // Self = Base&
    std::move( b ).f();  // Self = Base
    Derived d;           // Self = Derived&
    d.f();
    return 0;  
}
```

Deduplication version1
```cpp
template<typename T>
struct X{
    T val;
	T& value(){return val;}
	const T& value() const { return val; }
};
```

Deduplication version2
```cpp
template<typename T>
struct X{
    T val;
	
	template<typename Self>
	auto && value(this Self &&self){
	    return self.val;
	}
};
```

Deduplication + Forwarding
```cpp
template<typename T>
struct X{
    T val;
	
	template<typename Self>
	auto && value(this Self &&self){
	    return std::forward<Self>(self).val;
	}
};
```

## CRTP
```cpp
template<typename T>
struct Base{
    void work() {
	    T & derived = static_cast<T&>(*this);
		derived.do_work();
	}
};

struct Derived: Base<Derived>{
    void do_work(){
	    std::cout << "Derived do_work\n";
	}
}
```

CRTP Simplified
```cpp
#include <iostream>  

struct Base{
    template<typename Self>
    void work(this Self&& self) {
        self.do_work();
    }
    void do_work() {
        std::cout << "Base do_work\n";
    }
};

struct Derived : Base {
    void do_work() {
        std::cout << "Derived do_work\n";
    }
};

int main() {  
    Base b;
    b.work();
    Derived d;
    d.work();
    return 0;  
}
```

output
```powershell
Base do_work
Derived do_work
```

## C++ Lambda Idioms

-  [C++ Lambda Idioms - Timur Doumler - CppCon 2022](https://www.youtube.com/watch?v=xBAduq0RGes).

```cpp
#include <iostream>  

void legacy_call( int( *f )( int ) ) {
    std::cout << f( 7 ) << "\n";
}

int main() {  
    legacy_call( []( int i ) {
        return i * i;
        } );
    return 0;  
}
```

output
```powershell
49
```

Immediately Invoked Function Expressions(IIFE)
```cpp
#include <iostream>  

int main() {  
    [] { std::cout << "Hello, World!\n"; } ( );

    return 0;  
}
```

output
```powershell
Hello, World!
```

Variable template lambda
```cpp
#include <iostream>  

template <typename T>
constexpr auto c_cast = []( auto x ) {
    return (T)x;
};

int main() {  
    std::cout << " c_cast<int>( 3.14159 ) = " << c_cast<int>( 3.14159 ) << "\n";
    return 0;  
}
```

output
```powershell
 c_cast<int>( 3.14159 ) = 3
```

Lambda overload set
```cpp
#include <iostream>  

template <typename... Ts>
struct overload : Ts... {
    using Ts::operator()...;
};

int main() {  
    overload f = {
        []( int i ) { std::cout << "int thingy\n"; },
        []( float f ) { std::cout << "float thingy\n"; }
    };
    f( 2 ); //prints int thingy
    f( 2.0f ); //prints float thingy
    return 0;  
}
```
output
```powershell
int thingy
float thingy
```

variant version
```cpp
#include <iostream>  
#include <variant>

template <typename... Ts>
struct overload : Ts... {
    using Ts::operator()...;
};

int main() {  
    overload f = {
        []( int i ) { std::cout << "int thingy\n"; },
        []( float f ) { std::cout << "float thingy\n"; }
    };

    std::variant<int, float> v = 2.0f;
    std::variant<int, float> w = 2;
    std::visit( f, v ); //prints float thingy
    std::visit( f, w ); //prints int thingy
    return 0;  
}
```

output
```powershell
float thingy
int thingy
```

Recursive Lambda (wrong)
```cpp
#include <iostream>  

int main() {  
    auto f = []( int i ) {
        if ( i == 0 )
            return 1;
        return i * f( i - 1 ); //error: 'f' declared with auto
                               // cannot appear in its own initialiser!
    };
    std::cout << f( 5 );
    return 0;  
}
```

std::function version(right)
```cpp
#include <iostream>
#include <functional>

int main() {  
    std::function<int(int)> f = [&](int i) {
        if ( i == 0 )
            return 1;
        return i * f( i - 1 );
    };

    std::cout << f( 5 ); //prints 120
    return 0;  
}
```

output
```powershell
120
```

Recursive Lambda (right)
```cpp
#include <iostream>

int main() {  
    auto f = []( auto&& self, int i ) {
        if ( i == 0 )
            return 1;
        return i * self( self, i - 1 ); 
    };

    std::cout << f( f, 5 ); //prints 120
    return 0;  
}
```

output
```powershell
120
```

Recursive Lambda (right,better)
```cpp
#include <iostream>

int main() {  
    auto f = []( this auto&& self, int i ) {
        if ( i == 0 )
            return 1;
        return i * self( i - 1 ); 
    };

    std::cout << f( 5 ); //prints 120
    return 0;  
}
```

output
```powershell
120
```

Recursive Lambda fibonacci
```cpp
#include <iostream>

int main() {  
    auto fibonacci = []( this auto&& self, int n ) {
        if ( n < 2 )
            return n;
        return self( n - 1 ) + self( n - 2 ); 
    };

    std::cout << fibonacci( 5 ) << "\n";
    return 0;  
}
```

output
```powershell
5
```

Class template argument deduction(CTAD)
```cpp
```

## noexcept

## constexpr

## const vs constexpr vs consteval vs constinit in C++20

-  [const vs constexpr vs consteval vs constinit in C++20](https://www.cppstories.com/2022/const-options-cpp20/).

const example 1
```cpp
#include <iostream>
#include <map>
// might be optimized to compile-time if compiled decides...
const int importantNum = 42;

// will be inited at runtime
std::map<std::string, double> buildMap()
{
    return std::map<std::string, double>();
}

int main() {  
    const std::map<std::string, double> countryToPopulation = buildMap();
    return 0;  
}
```

const example 2
```cpp
#include <iostream>
#include <array>

int main() {  
    const int count = 3;
    std::array<double, count> doubles {1.1, 2.2, 3.3};

    // but not double:
    const double dCount = 3.3;
    std::array<double, static_cast<int>(dCount)> moreDoubles {1.1, 2.2, 3.3};
    return 0;  
}
```

const example 3(right)
```cpp
#include <iostream>
#include <array>

int main() {  
    constexpr double dCount = 3.3;
    std::array<double, static_cast<int>(dCount)> moreDoubles {1.1, 2.2, 3.3};

    return 0;  
}
```

## constexpr vs consteval

example 1
```cpp
consteval int sum(int a, int b) {
    return a + b;
}

constexpr int sum_c(int a, int b) {
    return a + b;
}

int main() {
    constexpr auto c = sum(100, 100);
    static_assert(c == 200);

    constexpr auto val = 10;
    static_assert(sum(val, val) == 2*val);

    int a = 10;
    int b = sum_c(a, 10); // fine with constexpr function

    // int d = sum(a, 10); // error! the value of 'a' is 
    // not usable in a constant expression
}
```

example 2
```cpp
consteval int sum(int a, int b) {
    return a + b;
}

constexpr int sum_c(int a, int b) {
    return a + b;
}

int main() {
    constexpr auto c = sum(100, 100);
    static_assert(c == 200);

    constexpr auto val = 10;
    static_assert(sum(val, val) == 2*val);

    int a = 10;
    int b = sum_c(a, 10); // fine with constexpr function

    int d = sum(a, 10); // error! the value of 'a' is 
                        // not usable in a constant expression
}
```

output
```powershell
生成开始于 15:59...
1>------ 已启动生成: 项目: ZERO_CHECK, 配置: Debug x64 ------
1>1>Checking Build System
2>------ 已启动生成: 项目: testprj, 配置: Debug x64 ------
2>Building Custom Rule D:/work/modern_cpp_work/ModernCpp/codes/grammar/consteval/01a/CMakeLists.txt
2>正在扫描源以查找模块依赖项...
2>main.cpp
2>正在编译...
2>main.cpp
2>D:\work\modern_cpp_work\ModernCpp\codes\grammar\consteval\01a\main.cpp(19,13): error C7595: “sum”: 对即时函数的调用不是常量表达式
2>    D:\work\modern_cpp_work\ModernCpp\codes\grammar\consteval\01a\main.cpp(19,17):
2>    因读取超过生命周期的变量而失败
2>    D:\work\modern_cpp_work\ModernCpp\codes\grammar\consteval\01a\main.cpp(19,17):
2>    请参见“a”的用法
2>已完成生成项目“testprj.vcxproj”的操作 - 失败。
========== 生成: 1 成功，1 失败，0 最新，0 已跳过 ==========
========== 生成 于 15:59 完成，耗时 01.910 秒 ==========
```

## constexpr vs constinit 

example 1
```cpp
#include <array>

// init at compile time
constexpr int compute(int v) { return v*v*v; }
constinit int global = compute(10);

// won't work:
// constinit int another = global;

int main() {
    // but allow to change later...
    global = 100;

    // global is not constant!
    // std::array<int, global> arr;
}
```

## C++23: More Small Pearls

## Multidimensional Subscript Operator

-  [C++23: multidimensional operator[]](https://www.sandordargo.com/blog/2023/08/09/cpp23-multidimensional-subscription-operator).
-  [C++23: More Small Pearls](https://www.modernescpp.com/index.php/c23-more-small-pearls/).
-  [C++23: Multidimensional Subscript Operator](https://www.nuonsoft.com/blog/2023/02/26/c23-multidimensional-subscript-operator/).

```cpp
// multidimensionalSubscript.cpp

#include <array>
#include <iostream>
 
template<typename T, std::size_t X, std::size_t Y>
struct Matrix {
    std::array<T, X * Y> mat{};
 
    T& operator[](std::size_t x, std::size_t y) {               // (1)
        return mat[y * X + x];
    }
};
 
int main() {

    std::cout << '\n';

    Matrix<int, 3, 3> mat;
    for (auto i : {0, 1, 2}) {
        for (auto j : {0, 1, 2}) mat[i, j] = (i * 3) + j;       // (2)
    }
    for (auto i : {0, 1, 2}) {
        for (auto j : {0, 1, 2}) std::cout << mat[i, j] << " "; // (3)
    }

    std::cout << '\n';

}
```

C++23: Multidimensional Subscript Operator
```cpp
import std;
 
template <typename T>
class Matrix
{
public:
    Matrix(std::size_t rows, std::size_t cols)
        : m_rows{ rows }, m_cols{ cols }
    {
        m_data.resize(rows * cols);
    }
 
    T& operator[](std::size_t x, std::size_t y) { return m_data[x + y * m_cols]; }
 
private:
    std::size_t m_rows;
    std::size_t m_cols;
    std::vector<T> m_data;
};

const std::size_t Rows{4};
const std::size_t Cols{4};
Matrix<int> m{ Rows, Cols };
std::size_t counter{ 0 };
for (std::size_t y{ 0 }; y < Rows; ++y)
{
    for (std::size_t x{ 0 }; x < Cols; ++x)
    {
        m[x, y] = ++counter;
    }
}
 
for (std::size_t y{ 0 }; y < Rows; ++y)
{
    for (std::size_t x{ 0 }; x < Cols; ++x)
    {
        std::print("{} ", m[x, y]);
    }
    std::println("");
}
```

trace
```cpp
import std;

class MyException : public std::exception {
public:
    MyException( std::string message, std::stacktrace st = std::stacktrace::current() )
        : m_message{ std::move( message ) }, m_stacktrace{ std::move( st ) } {}
    const char * what() const noexcept override { return m_message.c_str();  }
    const std::stacktrace & trace() const noexcept { return m_stacktrace;  }
private:
    std::string m_message;
    std::stacktrace m_stacktrace;
};

void bar() { throw MyException{ "Some exception..." }; }
void foo() { bar(); }

int main() {
    try { foo(); }
    catch ( const MyException & e ) {
        std::println( "Exception caught: {}", e.what() );
        std::println( "Stacktrace:\n{}", e.trace() );
    }
    return 0;
}
```

```powershell
Exception caught: Some exception...
Stacktrace:
0> D:\work\modern_cpp_work\ModernCpp\codes\std\stacktrace\01b\main.cpp(14): testprj!bar+0x48
1> D:\work\modern_cpp_work\ModernCpp\codes\std\stacktrace\01b\main.cpp(15): testprj!foo+0xB
2> D:\work\modern_cpp_work\ModernCpp\codes\std\stacktrace\01b\main.cpp(18): testprj!main+0x1F
3> D:\a\_work\1\s\src\vctools\crt\vcstartup\src\startup\exe_common.inl(79): testprj!invoke_main+0x39
4> D:\a\_work\1\s\src\vctools\crt\vcstartup\src\startup\exe_common.inl(288): testprj!__scrt_common_main_seh+0x132
5> D:\a\_work\1\s\src\vctools\crt\vcstartup\src\startup\exe_common.inl(331): testprj!__scrt_common_main+0xE
6> D:\a\_work\1\s\src\vctools\crt\vcstartup\src\startup\exe_main.cpp(17): testprj!mainCRTStartup+0xE
7> KERNEL32!BaseThreadInitThunk+0x1D
8> ntdll!RtlUserThreadStart+0x28
```

## std::ranges::shift_left

```cpp
import std;

void PrintVector( std::vector<std::string > & v )
{
    for ( int i = 0; i < v.size(); ++ i )
    {
        std::print( "{} ", v[ i ] );
    }
    std::print( "\n" );
}

int main() {  
    std::vector<std::string > v{ "a", "b", "c", "d", "e" };
    PrintVector( v );
    std::ranges::shift_left( v, 2 );
    PrintVector( v );
    std::ranges::shift_right( v, 1 );
    PrintVector( v );
    return 0;  
}  
```

output
```powershell
```


std::views::iota
```cpp
import std;

int main() {  
    for ( int i : std::views::iota( 1, 10 ) )
        std::print( "{} ", i );
    std::print( "\n" );
    return 0;  
}
```

output
```powershell
1 2 3 4 5 6 7 8 9
```

typeid().name()
```
import std;

int main() {  
    auto ints = std::views::iota( 1, 5 );
    std::print( "typeid( ints ).name() = {}\n ", typeid( ints ).name() );
    return 0;  
}  
```

output
```powershell
ypeid( ints ).name() = class std::ranges::iota_view<int,int>
```


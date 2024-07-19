# Thread

## STD C++ Thread

-  [C++11 14 17 20 多线程从原理到线程池实战](https://www.bilibili.com/video/BV1Zf4y1z7wT/).
-  [C++11开始的多线程编程](https://www.bilibili.com/video/BV1Ya411q7y4/).
-  [std::thread从入门到精通系列链接](https://zhuanlan.zhihu.com/p/463537452/).
-  [C++ 并发编程（从C++11到C++17）](https://paul.pub/cpp-concurrency/).


## Qt QThread

-  [QThread创建多线程程序](https://www.bilibili.com/video/BV1AX4y1w7Nt?p=77).
-  [基于互斥量同步QMutex](https://www.bilibili.com/video/BV1AX4y1w7Nt?p=78).

## Github

-  [ModernThread](https://github.com/eric2003/ModernThread.git).
-  [thread](https://github.com/eric2003/ModernCMake/tree/main/codes/thread).

## CMake

```cmake
cmake_minimum_required(VERSION 3.29)

project(testprj LANGUAGES CXX)

set ( PRJ_COMPILE_FEATURES )
set ( PRJ_COMPILE_DEFINITIONS )
set ( PRJ_LIBRARIES )
set ( PRJ_INCLUDE_DIRS )

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()


add_executable( ${PROJECT_NAME}
)

target_sources( ${PROJECT_NAME}
  PRIVATE
    main.cpp
)

target_include_directories ( ${PROJECT_NAME}
  PRIVATE
    ${PRJ_INCLUDE_DIRS}
)

target_link_libraries( ${PROJECT_NAME} 
  PRIVATE 
    ${PRJ_LIBRARIES}
)

target_compile_features ( ${PROJECT_NAME} 
  PRIVATE 
    ${PRJ_COMPILE_FEATURES}
)

target_compile_definitions ( ${PROJECT_NAME}
  PRIVATE
    ${PRJ_COMPILE_DEFINITIONS} 
)

```


## thread
### sleep_for
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
int main()
{
    using namespace std::chrono_literals;
 
    std::cout << "Hello waiter\n" << std::flush;
 
    const auto start = std::chrono::high_resolution_clock::now();
    std::this_thread::sleep_for(2000ms);
    const auto end = std::chrono::high_resolution_clock::now();
    const std::chrono::duration<double, std::milli> elapsed = end - start;
 
    std::cout << "Waited " << elapsed << '\n';
}
```

### join
```cpp
#include <thread>
#include <iostream>

void ThreadMain()
{
	std::cout << "begin thread main" << std::endl;
}

int main(int argc, char *argv[])
{
	//Create and start a thread
	std::thread th(ThreadMain);
	//Block and wait for the child thread to exit
	th.join();
    return 0;
}
```

### std::this_thread::get_id()
```cpp
#include <thread>
#include <iostream>

void ThreadMain()
{
	std::cout << "begin sub thread main " <<  std::this_thread::get_id() << std::endl;
}

int main(int argc, char *argv[])
{
	std::cout <<  "main thread ID " << std::this_thread::get_id() << std::endl;
	//Create and start a thread
	std::thread th(ThreadMain);
	//Block and wait for the child thread to exit
	th.join();
    return 0;
}
```

typical results
```
main thread ID 5760
begin sub thread main 20344
```

example

```cpp
#include <thread>
#include <chrono>
#include <iostream>

void ThreadMain()
{
	using namespace std::chrono_literals;
	std::cout << "begin sub thread main " <<  std::this_thread::get_id() << std::endl;
	for ( int i = 0; i < 10; ++ i )
	{
		std::cout << " in sub thread main loop i = " << i << std::endl;
		std::this_thread::sleep_for(1000ms);
	}
	std::cout << "end sub thread main " <<  std::this_thread::get_id() << std::endl;
}

int main(int argc, char *argv[])
{
	std::cout <<  "main thread ID " << std::this_thread::get_id() << std::endl;
	//Create and start a thread
	std::thread th(ThreadMain);
	std::cout <<  "begin wait sub thread " << std::endl;
	//Block and wait for the child thread to exit
	th.join();
	std::cout <<  "after th.join()  " << std::endl;
    return 0;
}
```

typical results
```
main thread ID 17020
begin wait sub thread
begin sub thread main 12116
 in sub thread main loop i = 0
 in sub thread main loop i = 1
 in sub thread main loop i = 2
 in sub thread main loop i = 3
 in sub thread main loop i = 4
 in sub thread main loop i = 5
 in sub thread main loop i = 6
 in sub thread main loop i = 7
 in sub thread main loop i = 8
 in sub thread main loop i = 9
end sub thread main 12116
after th.join()
```

###call_once

```cpp
#include <thread>
#include <iostream>
#include <string>

void SystemInit()
{
    std::cout << "Call SystemInit" << std::endl;
}

void CallOnceSystemInit()
{
    static std::once_flag flag;
    std::call_once( flag, SystemInit );
}

int main(int argc, char *argv[])
{
    CallOnceSystemInit();
    CallOnceSystemInit();

    for ( int i = 0; i < 3; ++ i )
    {
        std::thread th(CallOnceSystemInit);
        th.join();
    }

    return 0;
}
```

typical results
```
Call SystemInit
```

### thread state

```
running
ready
blocked
terminated
```

## mutex
### mutex
### lock_guard
### unique_lock

std::defer_lock
```cpp
#include <thread>
#include <iostream>
#include <string>
#include <vector>
#include <mutex>

int main(int argc, char *argv[])
{
    std::vector<int> arr;
    std::mutex mtx;
    std::thread th1( [&]() {
        for ( int i = 0; i < 100; ++i )
        {
            std::unique_lock grd( mtx );
            arr.push_back(i);
        }
        });
    std::thread th2( [&]() {
        for ( int i = 0; i < 100; ++i )
        {
            std::unique_lock grd( mtx, std::defer_lock );
            arr.push_back(i+10000);
            grd.unlock();
            //std::cout << "outside of lock, i = " << i<< "\n";
        }
        });
    th1.join();
    th2.join();
    int kkk = 1;

    return 0;
}
```

std::adopt_lock
```cpp
#include <thread>
#include <iostream>
#include <string>
#include <vector>
#include <mutex>

int main(int argc, char *argv[])
{
    std::vector<int> arr;
    std::mutex mtx;
    std::thread th1( [&]() {
        std::unique_lock grd( mtx);
        std::printf("th1 owns the lock\n");
        std::this_thread::sleep_for(std::chrono::milliseconds(1000));
        });
    std::thread th2( [&]() {
        mtx.lock();
        std::unique_lock grd( mtx, std::adopt_lock );
        std::printf("th2 owns the lock\n");
        std::this_thread::sleep_for(std::chrono::milliseconds(1000));
        });
    th1.join();
    th2.join();

    return 0;
}
```

## atomic
### atomic
compare_exchange_strong
```cpp
#include <thread>
#include <iostream>
#include <vector>

int main(int argc, char *argv[])
{
    std::boolalpha( std::cout );
    std::atomic<int> counter;
    counter.store( 2 );

    int old = 1;
    bool equal = counter.compare_exchange_strong( old, 3 );
    std::cout << "equal = " << equal << std::endl; //false
    std::cout << "old=" << old << std::endl; //2

    int now = counter.load();
    std::cout << "now=" << now << std::endl; //2

    old = 2;
    equal = counter.compare_exchange_strong( old, 3 );
    std::cout << "equal = " << equal << std::endl; //true
    std::cout << "old=" << old << std::endl; //2

    now = counter.load();
    std::cout << "now=" << now << std::endl; //3

    return 0;
}
```

typical results:
```
equal = false
old=2
now=2
equal = true
old=2
now=3
```

### atomic_flag
## condition_variable
### wait
### wait_for
### wait_until
### notify_one
```
#include <thread>
#include <iostream>
#include <mutex>
#include <condition_variable>

int main(int argc, char *argv[])
{
    std::condition_variable cv;
    std::mutex mtx;
    bool ready = false;

    std::thread th( [&]() {
        std::unique_lock lck( mtx );
        cv.wait( lck, [&]() { return ready; } );
        lck.unlock();
        std::cout << "th is awake" << std::endl;
        });
    std::cout << "notifying is not ready" << std::endl;
    cv.notify_one(); // useless now, since ready = false
    ready = true;
    std::cout << "notifying ready" << std::endl;
    cv.notify_one(); //awakening th, since ready = true
    th.join();

    return 0;
}
```

typical results:
```
notifying is not ready
notifying ready
th is awake
```

### notify_all
```cpp
#include <thread>
#include <iostream>
#include <mutex>
#include <condition_variable>

int main(int argc, char *argv[])
{
    std::condition_variable cv;
    std::mutex mtx;
    bool ready = false;

    std::thread th1( [&]() {
        std::unique_lock lck( mtx );
        cv.wait( lck );
        std::cout << "th1 is awake" << std::endl;
        });
    std::thread th2( [&]() {
        std::unique_lock lck( mtx );
        cv.wait( lck );
        std::cout << "th2 is awake" << std::endl;
        });
    std::thread th3( [&]() {
        std::unique_lock lck( mtx );
        cv.wait( lck );
        std::cout << "th3 is awake" << std::endl;
        });
    std::this_thread::sleep_for( std::chrono::milliseconds( 1000 ) );
    std::cout << "notifying one" << std::endl;
    cv.notify_one(); // awakening th1 only

    std::this_thread::sleep_for( std::chrono::milliseconds( 1000 ) );
    std::cout << "notifying all" << std::endl;
    cv.notify_all(); //awakening th2 and th3
    th1.join();
    th2.join();
    th3.join();

    return 0;
}
```

typical results:
```
notifying one
th1 is awake
notifying all
th2 is awake
th3 is awake
```

## future
### future

```cpp
#include <thread>
#include <future>
#include <iostream>
#include <string>

int download(const std::string &file)
{
    for ( int i = 0; i < 10; ++ i )
    {
        std::cout << "Downloading " << file
            << " (" << i * 10 << "%)..." << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(1000));
    }
    std::cout << "Download complete: " << file << std::endl;
    return 404;
}

void interact()
{
    std::string name;
    std::cout << "Input name: " << std::endl;
    std::cin >> name;
    std::cout << "Hi, " << name << std::endl;
}

int main(int argc, char *argv[])
{
    std::future<int> fret = std::async( []() {
        return download( "hello.zip" );
        }
    );
    interact();
    int ret = fret.get();
    std::cout << "Download result: " << ret << std::endl;

    return 0;
}
```

typical results:
```
Input name:
Downloading hello.zip (0%)...
Downloading hello.zip (10%)...
haha
Hi, haha
Downloading hello.zip (20%)...
Downloading hello.zip (30%)...
Downloading hello.zip (40%)...
Downloading hello.zip (50%)...
Downloading hello.zip (60%)...
Downloading hello.zip (70%)...
Downloading hello.zip (80%)...
Downloading hello.zip (90%)...
Download complete: hello.zip
Download result: 404
```
### shared_future
### promise
### packaged_task
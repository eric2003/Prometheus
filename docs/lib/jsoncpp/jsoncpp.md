# jsoncpp

## Link

- [github jsoncpp](https://github.com/open-source-parsers/jsoncpp).

## git clone git@github.com:open-source-parsers/jsoncpp.git
```
PS D:\work\jsoncpp_work> git clone git@github.com:open-source-parsers/jsoncpp.git
Cloning into 'jsoncpp'...
remote: Enumerating objects: 8811, done.
remote: Counting objects: 100% (2700/2700), done.
remote: Compressing objects: 100% (378/378), done.
remote: Total 8811 (delta 2468), reused 2322 (delta 2322), pack-reused 6111 (from 3)
Receiving objects: 100% (8811/8811), 2.92 MiB | 179.00 KiB/s, done.
Resolving deltas: 100% (5607/5607), done.
```

```
libarchive_ROOT="c:/dev/libarchive"
```

## example 1


```cmake
cmake_minimum_required(VERSION 3.14)
project(JsonCppExample)

set(CMAKE_CXX_STANDARD 17)

find_package(jsoncpp REQUIRED)

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )

add_executable(jsoncpp_example main.cpp)

target_link_libraries(jsoncpp_example PRIVATE JsonCpp::JsonCpp)
```

```cpp
#include <json/json.h>
#include <iostream>
#include <sstream>

int main() {
    // 创建 JSON 对象
    Json::Value root;
    root["name"] = "Alice";
    root["age"] = 30;

    Json::Value hobbies(Json::arrayValue);
    hobbies.append("reading");
    hobbies.append("coding");
    root["hobbies"] = hobbies;

    // 转换为字符串输出
    Json::StreamWriterBuilder builder;
    std::string jsonStr = Json::writeString(builder, root);
    std::cout << "Generated JSON:\n" << jsonStr << std::endl;

    // 解析 JSON 字符串
    Json::Value parsedRoot;
    std::istringstream jsonStream(jsonStr);
    Json::CharReaderBuilder charReaderBuilder;
    std::string errs;
    if (Json::parseFromStream(charReaderBuilder, jsonStream, &parsedRoot, &errs)) {
        std::cout << "\nParsed JSON:\n";
        std::cout << "Name: " << parsedRoot["name"].asString() << std::endl;
        std::cout << "Age: " << parsedRoot["age"].asInt() << std::endl;

        const Json::Value& parsedHobbies = parsedRoot["hobbies"];
        for (const auto& hobby : parsedHobbies) {
            std::cout << "Hobby: " << hobby.asString() << std::endl;
        }
    } else {
        std::cerr << "Failed to parse JSON: " << errs << std::endl;
    }

    return 0;
}
```

```powershell
PS D:\work\jsoncpp_work\simple\01a\build> cmake ..
-- Building for: Visual Studio 17 2022
-- Selecting Windows SDK version 10.0.22621.0 to target Windows 10.0.26100.
-- The C compiler identification is MSVC 19.43.34810.0
-- The CXX compiler identification is MSVC 19.43.34810.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.43.34808/bin/Hostx64/x64/cl.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- my_import_targets=jsoncpp_lib;jsoncpp_static;jsoncpp_object;JsonCpp::JsonCpp
-- Configuring done (5.6s)
-- Generating done (0.0s)
-- Build files have been written to: D:/work/jsoncpp_work/simple/01a/build
```

## example 2

```
cmake_minimum_required(VERSION 3.14)
project(JsonCppExample)

set(CMAKE_CXX_STANDARD 17)

#find_package(jsoncpp REQUIRED)

set( JsonCpp_INCLUDE_DIR "c:/dev/jsoncpp/include" )
set( JsonCpp_LIBRARY "c:/dev/jsoncpp/lib/jsoncpp.lib" )

get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )

message( STATUS "my_import_targets=${my_import_targets}" )

add_executable(jsoncpp_example main.cpp)

#target_link_libraries(jsoncpp_example PRIVATE JsonCpp::JsonCpp)
target_include_directories(jsoncpp_example PRIVATE ${JsonCpp_INCLUDE_DIR} )
target_link_libraries(jsoncpp_example PRIVATE ${JsonCpp_LIBRARY})
```


```
cmake .. -D jsoncpp_DIR="c:/dev/jsoncpp/lib/cmake/jsoncpp"
cmake .. -D jsoncpp_DIR=c:/dev/jsoncpp/lib/cmake/jsoncpp
```
# CMake Regex

## string

```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )
set(myString "#define FFMPEG_VERSION \"7.0.1-full_build-www.gyan.dev\"")

message ( STATUS "myString = ${myString}" )

string(REGEX REPLACE ".*\"([0-9\.]*)(.*)\"" "\\1" FFMPEG_VERSION "${myString}")

message ( STATUS "CMAKE_MATCH_1 = ${CMAKE_MATCH_1}" )
message ( STATUS "FFMPEG_VERSION = ${FFMPEG_VERSION}" )
```

typical results:
```
-- myString = #define FFMPEG_VERSION "7.0.1-full_build-www.gyan.dev"
-- CMAKE_MATCH_1 = 7.0.1
-- FFMPEG_VERSION = 7.0.1
```

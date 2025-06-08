# rkcommon

## Link

- [github ospray](https://github.com/RenderKit/ospray).

## git clone https://github.com/ospray/rkcommon.git
```
eric@fantasy:~/work/rkcommon_work$ git clone https://github.com/ospray/rkcommon.git
Cloning into 'rkcommon'...
remote: Enumerating objects: 2246, done.
remote: Counting objects: 100% (60/60), done.
remote: Compressing objects: 100% (46/46), done.
remote: Total 2246 (delta 19), reused 34 (delta 14), pack-reused 2186 (from 1)
Receiving objects: 100% (2246/2246), 774.06 KiB | 868.00 KiB/s, done.
Resolving deltas: 100% (1592/1592), done.
```

## mkdir build && cd build
```
mkdir build && cd build
```

## make -j$(nproc)
```
make -j$(nproc)
sudo make install
```

```
eric@fantasy:~/work/rkcommon_work/rkcommon/build$ cmake ..
CMake Deprecation Warning at CMakeLists.txt:9 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


-- The CXX compiler identification is GNU 13.3.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD
-- Performing Test CMAKE_HAVE_LIBC_PTHREAD - Success
-- Found Threads: TRUE
-- Configuring done (0.5s)
-- Generating done (0.1s)
-- Build files have been written to: /home/eric/work/rkcommon_work/rkcommon/build
eric@fantasy:~/work/rkcommon_work/rkcommon/build$ make -j$(nproc)
[  1%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/common.cpp.o
[  3%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/memory/malloc.cpp.o
[  4%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/networking/DataStreaming.cpp.o
[  6%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/networking/Fabric.cpp.o
[  9%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/os/FileName.cpp.o
[  9%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/os/library.cpp.o
[ 11%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/tasking/detail/tasking_system_init.cpp.o
[ 12%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/utility/demangle.cpp.o
[ 14%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/utility/ParameterizedObject.cpp.o
[ 16%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/utility/PseudoURL.cpp.o
[ 19%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/utility/TimeStamp.cpp.o
[ 19%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/xml/XML.cpp.o
[ 20%] Building CXX object rkcommon/CMakeFiles/rkcommon.dir/tracing/Tracing.cpp.o
[ 22%] Linking CXX shared library ../librkcommon.so
[ 22%] Built target rkcommon
[ 24%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/catch_main.cpp.o
[ 25%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/array3D/test_Array3D.cpp.o
[ 27%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/array3D/test_for_each.cpp.o
[ 29%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_AffineSpace.cpp.o
[ 30%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_box.cpp.o
[ 32%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_constants.cpp.o
[ 33%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_LinearSpace.cpp.o
[ 35%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_rkmath.cpp.o
[ 37%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_Quaternion.cpp.o
[ 38%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_range.cpp.o
[ 41%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/memory/test_DeletedUniquePtr.cpp.o
[ 41%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/math/test_vec.cpp.o
[ 43%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/memory/test_malloc.cpp.o
[ 45%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/memory/test_RefCount.cpp.o
[ 46%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/os/test_FileName.cpp.o
[ 48%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/os/test_library.cpp.o
[ 50%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/containers/test_AlignedVector.cpp.o
[ 51%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/containers/test_FlatMap.cpp.o
[ 53%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/containers/test_TransactionalBuffer.cpp.o
[ 54%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/tasking/test_async.cpp.o
[ 56%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/tasking/test_AsyncLoop.cpp.o
[ 58%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/tasking/test_AsyncTask.cpp.o
[ 59%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/tasking/test_parallel_for.cpp.o
[ 61%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/tasking/test_parallel_foreach.cpp.o
[ 62%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/tasking/test_schedule.cpp.o
[ 64%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/traits/test_traits.cpp.o
[ 66%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_AbstractArray.cpp.o
[ 67%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_Any.cpp.o
[ 69%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_ArgumentList.cpp.o
[ 70%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_ArrayView.cpp.o
[ 72%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_CodeTimer.cpp.o
[ 74%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_DataView.cpp.o
[ 75%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_demangle.cpp.o
[ 77%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_DoubleBufferedValue.cpp.o
[ 79%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_getEnvVar.cpp.o
[ 80%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_multidim_index_sequence.cpp.o
[ 82%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_Observers.cpp.o
[ 83%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_OnScopeExit.cpp.o
[ 85%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_Optional.cpp.o
[ 87%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_OwnedArray.cpp.o
[ 88%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_ParameterizedObject.cpp.o
[ 90%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_PseudoURL.cpp.o
[ 91%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_random.cpp.o
[ 93%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_SaveImage.cpp.o
[ 95%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_StringManip.cpp.o
[ 96%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_TimeStamp.cpp.o
[ 98%] Building CXX object tests/CMakeFiles/rkcommon_test_suite.dir/utility/test_TransactionalValue.cpp.o
[100%] Linking CXX executable ../rkcommon_test_suite
[100%] Built target rkcommon_test_suite
eric@fantasy:~/work/rkcommon_work/rkcommon/build$ sudo make install
[ 22%] Built target rkcommon
[100%] Built target rkcommon_test_suite
Install the project...
-- Install configuration: "Release"
-- Installing: /usr/local/lib/cmake/rkcommon-1.14.2/rkcommonConfig.cmake
-- Installing: /usr/local/lib/cmake/rkcommon-1.14.2/rkcommonConfigVersion.cmake
-- Installing: /usr/local/lib/cmake/rkcommon-1.14.2/FindTBB.cmake
-- Installing: /usr/local/lib/cmake/rkcommon-1.14.2/rkcommon_macros.cmake
-- Installing: /usr/local/lib/librkcommon.so.1.14.2
-- Installing: /usr/local/lib/librkcommon.so.1
-- Set non-toolchain portion of runtime path of "/usr/local/lib/librkcommon.so.1.14.2" to "$ORIGIN"
-- Installing: /usr/local/lib/cmake/rkcommon-1.14.2/rkcommon_Exports.cmake
-- Installing: /usr/local/lib/cmake/rkcommon-1.14.2/rkcommon_Exports-release.cmake
-- Installing: /usr/local/lib/librkcommon.so
-- Installing: /usr/local/include/rkcommon
-- Installing: /usr/local/include/rkcommon/xml
-- Installing: /usr/local/include/rkcommon/xml/XML.h
-- Installing: /usr/local/include/rkcommon/platform.h
-- Installing: /usr/local/include/rkcommon/containers
-- Installing: /usr/local/include/rkcommon/containers/aligned_allocator.h
-- Installing: /usr/local/include/rkcommon/containers/TransactionalBuffer.h
-- Installing: /usr/local/include/rkcommon/containers/AlignedVector.h
-- Installing: /usr/local/include/rkcommon/containers/FlatMap.h
-- Installing: /usr/local/include/rkcommon/utility
-- Installing: /usr/local/include/rkcommon/utility/FixedArray.h
-- Installing: /usr/local/include/rkcommon/utility/multidim_index_sequence.h
-- Installing: /usr/local/include/rkcommon/utility/SaveImage.h
-- Installing: /usr/local/include/rkcommon/utility/TransactionalValue.h
-- Installing: /usr/local/include/rkcommon/utility/detail
-- Installing: /usr/local/include/rkcommon/utility/detail/pcg_random.hpp
-- Installing: /usr/local/include/rkcommon/utility/detail/pcg_uint128.hpp
-- Installing: /usr/local/include/rkcommon/utility/detail/pcg_extras.hpp
-- Installing: /usr/local/include/rkcommon/utility/ParameterizedObject.h
-- Installing: /usr/local/include/rkcommon/utility/TimeStamp.h
-- Installing: /usr/local/include/rkcommon/utility/FixedArrayView.h
-- Installing: /usr/local/include/rkcommon/utility/DoubleBufferedValue.h
-- Installing: /usr/local/include/rkcommon/utility/DataView.h
-- Installing: /usr/local/include/rkcommon/utility/OwnedArray.h
-- Installing: /usr/local/include/rkcommon/utility/OnScopeExit.h
-- Installing: /usr/local/include/rkcommon/utility/getEnvVar.h
-- Installing: /usr/local/include/rkcommon/utility/ArrayView.h
-- Installing: /usr/local/include/rkcommon/utility/random.ih
-- Installing: /usr/local/include/rkcommon/utility/CodeTimer.h
-- Installing: /usr/local/include/rkcommon/utility/random.h
-- Installing: /usr/local/include/rkcommon/utility/Any.h
-- Installing: /usr/local/include/rkcommon/utility/AbstractArray.h
-- Installing: /usr/local/include/rkcommon/utility/Optional.h
-- Installing: /usr/local/include/rkcommon/utility/ArgumentList.h
-- Installing: /usr/local/include/rkcommon/utility/PseudoURL.h
-- Installing: /usr/local/include/rkcommon/utility/demangle.h
-- Installing: /usr/local/include/rkcommon/utility/StringManip.h
-- Installing: /usr/local/include/rkcommon/utility/Observer.h
-- Installing: /usr/local/include/rkcommon/common.h
-- Installing: /usr/local/include/rkcommon/memory
-- Installing: /usr/local/include/rkcommon/memory/RefCount.h
-- Installing: /usr/local/include/rkcommon/memory/IntrusivePtr.h
-- Installing: /usr/local/include/rkcommon/memory/malloc.h
-- Installing: /usr/local/include/rkcommon/memory/DeletedUniquePtr.h
-- Installing: /usr/local/include/rkcommon/networking
-- Installing: /usr/local/include/rkcommon/networking/Fabric.h
-- Installing: /usr/local/include/rkcommon/networking/DataStreaming.h
-- Installing: /usr/local/include/rkcommon/array3D
-- Installing: /usr/local/include/rkcommon/array3D/for_each.h
-- Installing: /usr/local/include/rkcommon/array3D/Array3D.h
-- Installing: /usr/local/include/rkcommon/tasking
-- Installing: /usr/local/include/rkcommon/tasking/detail
-- Installing: /usr/local/include/rkcommon/tasking/detail/schedule.inl
-- Installing: /usr/local/include/rkcommon/tasking/detail/parallel_for.inl
-- Installing: /usr/local/include/rkcommon/tasking/detail/TaskSys.h
-- Installing: /usr/local/include/rkcommon/tasking/detail/async_task.inl
-- Installing: /usr/local/include/rkcommon/tasking/detail/enkiTS
-- Installing: /usr/local/include/rkcommon/tasking/detail/enkiTS/TaskScheduler.h
-- Installing: /usr/local/include/rkcommon/tasking/detail/enkiTS/LockLessMultiReadPipe.h
-- Installing: /usr/local/include/rkcommon/tasking/AsyncTask.h
-- Installing: /usr/local/include/rkcommon/tasking/tasking_system_init.h
-- Installing: /usr/local/include/rkcommon/tasking/async.h
-- Installing: /usr/local/include/rkcommon/tasking/parallel_foreach.h
-- Installing: /usr/local/include/rkcommon/tasking/parallel_for.h
-- Installing: /usr/local/include/rkcommon/tasking/AsyncLoop.h
-- Installing: /usr/local/include/rkcommon/tasking/schedule.h
-- Installing: /usr/local/include/rkcommon/traits
-- Installing: /usr/local/include/rkcommon/traits/rktraits.h
-- Installing: /usr/local/include/rkcommon/math
-- Installing: /usr/local/include/rkcommon/math/vec.ih
-- Installing: /usr/local/include/rkcommon/math/box.ih
-- Installing: /usr/local/include/rkcommon/math/constants.h
-- Installing: /usr/local/include/rkcommon/math/LinearSpace.h
-- Installing: /usr/local/include/rkcommon/math/AffineSpace.ih
-- Installing: /usr/local/include/rkcommon/math/AffineSpace.h
-- Installing: /usr/local/include/rkcommon/math/LinearSpace.ih
-- Installing: /usr/local/include/rkcommon/math/arm
-- Installing: /usr/local/include/rkcommon/math/arm/emulation.h
-- Installing: /usr/local/include/rkcommon/math/arm/sse2neon.h
-- Installing: /usr/local/include/rkcommon/math/box.h
-- Installing: /usr/local/include/rkcommon/math/Quaternion.h
-- Installing: /usr/local/include/rkcommon/math/rkmath.h
-- Installing: /usr/local/include/rkcommon/math/math.ih
-- Installing: /usr/local/include/rkcommon/math/range.h
-- Installing: /usr/local/include/rkcommon/math/vec.h
-- Installing: /usr/local/include/rkcommon/os
-- Installing: /usr/local/include/rkcommon/os/FileName.h
-- Installing: /usr/local/include/rkcommon/os/library.h
-- Installing: /usr/local/include/rkcommon/tracing
-- Installing: /usr/local/include/rkcommon/tracing/Tracing.h
-- Installing: /usr/local/bin/rkcommon_test_suite
-- Set non-toolchain portion of runtime path of "/usr/local/bin/rkcommon_test_suite" to "$ORIGIN"
```
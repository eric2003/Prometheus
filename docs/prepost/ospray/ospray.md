# Intel® OSPRay

The Open, Scalable, and Portable Ray Tracing Engine

## OSPRay Link

-  [www.vulkan.org](https://www.ospray.org/).
-  [github code](https://github.com/ospray/ospray).


## CMake Superbuild

```
mkdir build
cd build
cmake [<OSPRAY_SOURCE_DIR>/scripts/superbuild]
cmake --build .
```

example
```
mkdir build
cd build
cmake ../scripts/superbuild
```

## Compile


rkcommon\math\Quaternion.h
```
2>D:\work\ospray_work\ospray\apps\ospTestSuite\test_framebuffer.cpp(91,49): warning C4146: unary minus operator applied to unsigned type, result still unsigned [D:\work\ospray_work\ospray\build\ospray\build\apps\ospTestSuite\ospTestSuite.vcxproj]
12>D:\work\ospray_work\ospray\build\install\rkcommon\include\rkcommon\math\Quaternion.h(243,14): error C2593: 'operator *' is ambiguous [D:\work\ospray_work\ospray\build\ospray\build\apps\ospTestSuite\ospTestSuite.vcxproj]
12>  (编译源文件“../../../../../apps/ospTestSuite/test_motionblur.cpp”)
12>  D:\work\ospray_work\ospray\build\install\rkcommon\include\rkcommon\math\Quaternion.h(163,44):
12>  could be 'rkcommon::math::vec_t<float,3,false,void> rkcommon::math::operator *<float>(const rkcommon::math::QuaternionT<float,void> &,const rkcommon::math::vec_t<float,3,false,void> &)'
12>  D:\work\ospray_work\ospray\build\install\rkcommon\include\rkcommon\math\Quaternion.h(85,17):
12>  or       'rkcommon::math::QuaternionT rkcommon::math::operator *<float,rkcommon::math::vec_t<float,3,false,void>,void>(const rkcommon::math::QuaternionT<float,void> &,const U &)'
12>          with
12>          [
12>              U=rkcommon::math::vec_t<float,3,false,void>
12>          ]
12>  D:\work\ospray_work\ospray\build\install\rkcommon\include\rkcommon\math\vec.h(569,5):
12>  or       'rkcommon::math::vec_t rkcommon::math::operator *<rkcommon::math::QuaternionT<float,void>,float,3,false,void>(const T &,const rkcommon::math::vec_t<float,3,false,void> &)'
12>          with
12>          [
12>              T=rkcommon::math::QuaternionT<float,void>
12>          ]
12>  D:\work\ospray_work\ospray\build\install\rkcommon\include\rkcommon\math\Quaternion.h(243,14):
12>  while trying to match the argument list '(const rkcommon::math::QuaternionT<float,void>, const rkcommon::math::vec_t<float,3,false,void>)'
12>  D:\work\ospray_work\ospray\build\install\rkcommon\include\rkcommon\math\Quaternion.h(243,14):
12>  the template instantiation context (the oldest one first) is
12>  	D:\work\ospray_work\ospray\apps\ospTestSuite\test_motionblur.cpp(183,11):
12>  	see reference to function template instantiation 'rkcommon::math::vec_t<float,3,false,void> rkcommon::math::xfmPoint<float>(const rkcommon::math::QuaternionT<float,void> &,const rkcommon::math::vec_t<float,3,false,void> &)' being compiled
12>
12>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(254,5): 
error MSB8066: Custom build for 'D:\work\ospray_work\ospray\build\CMakeFiles\9e614091a9c1abb557f4bf96fe62b299\ospray-build.rule;
D:\work\ospray_work\ospray\build\CMakeFiles\9e614091a9c1abb557f4bf96fe62b299\ospray-install.rule;
D:\work\ospray_work\ospray\build\CMakeFiles\d495d4bc75bc7876be8c7a62a2353da5\ospray-complete.rule;
D:\work\ospray_work\ospray\build\CMakeFiles\0ddf79cc0c329b02dce82ad807b207e8\ospray.rule' exited with code 1.
12>Done building project "ospray.vcxproj" -- FAILED.
```

detail
```
could be 
'rkcommon::math::vec_t<float,3,false,void> 
rkcommon::math::operator *
<float>
(const rkcommon::math::QuaternionT<float,void> &,
const rkcommon::math::vec_t<float,3,false,void> &)'
D:\work\ospray_work\ospray\build\install\rkcommon
\include\rkcommon\math\Quaternion.h(85,17):
or
'rkcommon::math::QuaternionT 
rkcommon::math::operator *
<float,rkcommon::math::vec_t<float,3,false,void>,void>
(const rkcommon::math::QuaternionT<float,void> &,
const U &)'
with
[
   U=rkcommon::math::vec_t<float,3,false,void>
]
D:\work\ospray_work\ospray\build\install\rkcommon
\include\rkcommon\math\vec.h(569,5):
or
'rkcommon::math::vec_t 
rkcommon::math::operator *
<rkcommon::math::QuaternionT<float,void>,float,3,false,void>
(const T &,
const rkcommon::math::vec_t<float,3,false,void> &)'
with
[
    T=rkcommon::math::QuaternionT<float,void>
]
```

### Modified

```cpp
//eric modified
template <typename T>
inline typename QuaternionT<T>::Vector multiplay_operator(
    const QuaternionT<T> &a, const typename QuaternionT<T>::Vector &b)
{
  return (a * QuaternionT<T>(b) * conj(a)).v();
}

template <typename T>
inline typename QuaternionT<T>::Vector xfmPoint(
    const QuaternionT<T> &a, const typename QuaternionT<T>::Vector &b)
{
  // eric modified
  return multiplay_operator(a, b);
  //return a * b;
}
```


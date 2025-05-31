# GDAL


## Link

- [GDAL](https://github.com/OSGeo/gdal).
- [GDAL简介](https://www.osgeo.cn/pygis/gdal-gdalintro.html).


## git clone git@github.com:OSGeo/gdal.git
```
PS D:\work\GDAL_work> git clone git@github.com:OSGeo/gdal.git
Cloning into 'gdal'...
remote: Enumerating objects: 557991, done.
remote: Counting objects: 100% (443/443), done.
remote: Compressing objects: 100% (164/164), done.
remote: Total 557991 (delta 380), reused 281 (delta 279), pack-reused 557548 (from 3)
Receiving objects: 100% (557991/557991), 385.27 MiB | 50.00 KiB/s, done.
Resolving deltas: 100% (434321/434321), done.
Updating files: 100% (10696/10696), done.
```

```
SQLite3_INCLUDE_DIR c:/dev/sqlite3/include/
SQLite3_LIBRARY c:/dev/sqlite3/lib/libsqlite3.lib
```

```
cmake .. `
      -D SQLite3_INCLUDE_DIR="c:/dev/sqlite3/include" `
      -D SQLite3_LIBRARY="c:/dev/sqlite3/lib/libsqlite3.lib"
 
```


```
2>D:\work\GDAL_work\gdal\ogr\ogrsf_frmts\ods\ods_formula.h(18,10): error C1083: 无法打开包括文件: “cpl_conv.h”: No such file or directory
2>(编译源文件“../../../../ogr/ogrsf_frmts/ods/testparser.cpp”)
```

```
生成开始于 2:21...
1>------ 已跳过“生成”: 项目: uninstall, 配置: Release x64 ------
1>没有为此解决方案配置选中要生成的项目 
2>------ 已启动生成: 项目: testparser, 配置: Release x64 ------
3>------ 已跳过“生成”: 项目: generate_swq_parser, 配置: Release x64 ------
3>没有为此解决方案配置选中要生成的项目 
4>------ 已跳过“生成”: 项目: generate_ods_formula_parser, 配置: Release x64 ------
4>没有为此解决方案配置选中要生成的项目 
5>------ 已启动生成: 项目: generate_gdal_version_h, 配置: Release x64 ------
6>------ 已跳过“生成”: 项目: completion, 配置: Release x64 ------
6>没有为此解决方案配置选中要生成的项目 
7>------ 已启动生成: 项目: check_swq_parser_md5, 配置: Release x64 ------
8>------ 已启动生成: 项目: check_ods_formula_parser_md5, 配置: Release x64 ------
9>------ 已跳过“生成”: 项目: RUN_TESTS, 配置: Release x64 ------
9>没有为此解决方案配置选中要生成的项目 
8>1>
5>1>
5>-- Found Git: C:/Program Files/Git/cmd/git.exe (found version "2.49.0.windows.1")
7>1>
10>------ 已跳过“生成”: 项目: test-sse2, 配置: Release x64 ------
10>没有为此解决方案配置选中要生成的项目 
11>------ 已跳过“生成”: 项目: test-sse2-emulation, 配置: Release x64 ------
11>没有为此解决方案配置选中要生成的项目 
12>------ 已跳过“生成”: 项目: test-sse41, 配置: Release x64 ------
12>没有为此解决方案配置选中要生成的项目 
13>------ 已跳过“生成”: 项目: test-ssse3, 配置: Release x64 ------
13>没有为此解决方案配置选中要生成的项目 
14>------ 已跳过“生成”: 项目: fuzzer_check, 配置: Release x64 ------
14>没有为此解决方案配置选中要生成的项目 
15>------ 已跳过“生成”: 项目: test-include-from-C-file, 配置: Release x64 ------
15>没有为此解决方案配置选中要生成的项目 
16>------ 已跳过“生成”: 项目: test-avx2, 配置: Release x64 ------
16>没有为此解决方案配置选中要生成的项目 
17>------ 已启动生成: 项目: spatialite_geom_import_fuzzer, 配置: Release x64 ------
18>------ 已跳过“生成”: 项目: test-C-include-from-CPP-file, 配置: Release x64 ------
18>没有为此解决方案配置选中要生成的项目 
2>testparser.cpp
2>  正在创建库 D:/work/GDAL_work/gdal/build/ogr/ogrsf_frmts/ods/Release/testparser.lib 和对象 D:/work/GDAL_work/gdal/build/ogr/ogrsf_frmts/ods/Release/testparser.exp
2>testparser.obj : error LNK2019: 无法解析的外部符号 GDALDestroyScaledProgress，函数 "public: void __cdecl GDALScaledProgressReleaser::operator()(void *)const " (??RGDALScaledProgressReleaser@@QEBAXPEAX@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 VSIFree，函数 "public: void __cdecl VSIFreeReleaser::operator()(void *)const " (??RVSIFreeReleaser@@QEBAXPEAX@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CPLTurnFailureIntoWarning，函数 "public: __cdecl CPLTurnFailureIntoWarningBackuper::CPLTurnFailureIntoWarningBackuper(void)" (??0CPLTurnFailureIntoWarningBackuper@@QEAA@XZ) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CPLPushErrorHandler，函数 "public: __cdecl CPLErrorHandlerPusher::CPLErrorHandlerPusher(void (__cdecl*)(enum CPLErr,int,char const *))" (??0CPLErrorHandlerPusher@@QEAA@P6AXW4CPLErr@@HPEBD@Z@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CPLPushErrorHandlerEx，函数 "public: __cdecl CPLErrorHandlerPusher::CPLErrorHandlerPusher(void (__cdecl*)(enum CPLErr,int,char const *),void *)" (??0CPLErrorHandlerPusher@@QEAA@P6AXW4CPLErr@@HPEBD@ZPEAX@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CPLPopErrorHandler，函数 "public: __cdecl CPLErrorHandlerPusher::~CPLErrorHandlerPusher(void)" (??1CPLErrorHandlerPusher@@QEAA@XZ) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: __cdecl CPLErrorStateBackuper::CPLErrorStateBackuper(void (__cdecl*)(enum CPLErr,int,char const *))" (??0CPLErrorStateBackuper@@QEAA@P6AXW4CPLErr@@HPEBD@Z@Z)，函数 "public: void __cdecl CPLErrorStateBackuper::`default constructor closure'(void)" (??_FCPLErrorStateBackuper@@QEAAXXZ) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CPLStrdup，函数 "public: class CPLStringList & __cdecl CPLStringList::InsertString(int,char const *)" (?InsertString@CPLStringList@@QEAAAEAV1@HPEBD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CSLDestroy，函数 "public: void __cdecl CSLDestroyReleaser::operator()(char * *)const " (??RCSLDestroyReleaser@@QEBAXPEAPEAD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CSLFindString，函数 "public: int __cdecl CPLStringList::FindString(char const *)const " (?FindString@CPLStringList@@QEBAHPEBD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 CSLPartialFindString，函数 "public: int __cdecl CPLStringList::PartialFindString(char const *)const " (?PartialFindString@CPLStringList@@QEBAHPEBD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: class CPLStringList & __cdecl CPLStringList::Clear(void)" (?Clear@CPLStringList@@QEAAAEAV1@XZ)，函数 "public: void __cdecl CPLStringList::clear(void)" (?clear@CPLStringList@@QEAAXXZ) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: int __cdecl CPLStringList::Count(void)const " (?Count@CPLStringList@@QEBAHXZ)，函数 "public: __cdecl CPLStringList::operator class std::vector<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,class std::allocator<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > > >(void)const " (??BCPLStringList@@QEBA?AV?$vector@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V?$allocator@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@2@@std@@XZ) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: class CPLStringList & __cdecl CPLStringList::AddString(char const *)" (?AddString@CPLStringList@@QEAAAEAV1@PEBD@Z)，函数 "public: void __cdecl CPLStringList::push_back(class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const &)" (?push_back@CPLStringList@@QEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: class CPLStringList & __cdecl CPLStringList::InsertStringDirectly(int,char *)" (?InsertStringDirectly@CPLStringList@@QEAAAEAV1@HPEAD@Z)，函数 "public: class CPLStringList & __cdecl CPLStringList::InsertString(int,char const *)" (?InsertString@CPLStringList@@QEAAAEAV1@HPEBD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: char const * __cdecl CPLStringList::FetchNameValue(char const *)const " (?FetchNameValue@CPLStringList@@QEBAPEBDPEBD@Z)，函数 "public: char const * __cdecl CPLStringList::operator[](char const *)const " (??ACPLStringList@@QEBAPEBDPEBD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: class CPLStringList & __cdecl CPLStringList::Assign(char * *,int)" (?Assign@CPLStringList@@QEAAAEAV1@PEAPEADH@Z)，函数 "public: class CPLStringList & __cdecl CPLStringList::operator=(char * *)" (??4CPLStringList@@QEAAAEAV0@PEAPEAD@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: char * __cdecl CPLStringList::operator[](int)" (??ACPLStringList@@QEAAPEADH@Z)，函数 "public: char * __cdecl CPLStringList::operator[](unsigned __int64)" (??ACPLStringList@@QEAAPEAD_K@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: char const * __cdecl CPLStringList::operator[](int)const " (??ACPLStringList@@QEBAPEBDH@Z)，函数 "public: char const * __cdecl CPLStringList::operator[](unsigned __int64)const " (??ACPLStringList@@QEBAPEBD_K@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: bool __cdecl cpl::CSLIterator::operator==(struct cpl::CSLIterator const &)const " (??8CSLIterator@cpl@@QEBA_NAEBU01@@Z)，函数 "public: bool __cdecl cpl::CSLIterator::operator!=(struct cpl::CSLIterator const &)const " (??9CSLIterator@cpl@@QEBA_NAEBU01@@Z) 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: __cdecl ods_formula_node::~ods_formula_node(void)" (??1ods_formula_node@@QEAA@XZ)，函数 main 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: void __cdecl ods_formula_node::Dump(struct _iobuf *,int)" (?Dump@ods_formula_node@@QEAAXPEAU_iobuf@@H@Z)，函数 main 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "public: bool __cdecl ods_formula_node::Evaluate(class IODSCellEvaluator *)" (?Evaluate@ods_formula_node@@QEAA_NPEAVIODSCellEvaluator@@@Z)，函数 main 中引用了该符号
2>testparser.obj : error LNK2019: 无法解析的外部符号 "class ods_formula_node * __cdecl ods_formula_compile(char const *)" (?ods_formula_compile@@YAPEAVods_formula_node@@PEBD@Z)，函数 main 中引用了该符号
2>D:\work\GDAL_work\gdal\build\ogr\ogrsf_frmts\ods\Release\testparser.exe : fatal error LNK1120: 24 个无法解析的外部命令
2>已完成生成项目“testparser.vcxproj”的操作 - 失败。
19>------ 已启动生成: 项目: ogr_miramon_fuzzer, 配置: Release x64 ------
20>------ 已启动生成: 项目: ogr_filesystem_fuzzer, 配置: Release x64 ------
21>------ 已启动生成: 项目: mrf_fuzzer, 配置: Release x64 ------
22>------ 已跳过“生成”: 项目: test-driver-metadata-multithread.cpp, 配置: Release x64 ------
22>没有为此解决方案配置选中要生成的项目 
23>------ 已启动生成: 项目: test-block-cache-6, 配置: Release x64 ------
24>------ 已启动生成: 项目: test-block-cache-5, 配置: Release x64 ------
25>------ 已启动生成: 项目: test-block-cache-4, 配置: Release x64 ------
26>------ 已启动生成: 项目: test-block-cache-3, 配置: Release x64 ------
27>------ 已启动生成: 项目: test-block-cache-2, 配置: Release x64 ------
28>------ 已启动生成: 项目: test-block-cache-1, 配置: Release x64 ------
29>------ 已启动生成: 项目: test-block-cache-limit, 配置: Release x64 ------
30>------ 已启动生成: 项目: test-block-cache-write, 配置: Release x64 ------
31>------ 已启动生成: 项目: test-closed-on-destroy-DM, 配置: Release x64 ------
32>------ 已启动生成: 项目: test-copy-words, 配置: Release x64 ------
33>------ 已启动生成: 项目: test-destroy, 配置: Release x64 ------
34>------ 已启动生成: 项目: test-float16, 配置: Release x64 ------
19>ogr_fuzzer.cpp
17>spatialite_geom_import_fuzzer.cpp
20>ogr_fuzzer.cpp
26>1>
25>1>
21>gdal_fuzzer.cpp
24>1>
28>1>
27>1>
30>1>
33>1>
25>Exit code 0xc0000135
25>
26>Exit code 0xc0000135
26>
24>Exit code 0xc0000135
24>
28>Exit code 0xc0000135
28>
27>Exit code 0xc0000135
27>
25>系统找不到指定的批处理标签 - VCEnd
25>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-4.rule”的自定义生成已退出，代码为 1。
25>已完成生成项目“test-block-cache-4.vcxproj”的操作 - 失败。
26>系统找不到指定的批处理标签 - VCEnd
26>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-3.rule”的自定义生成已退出，代码为 1。
26>已完成生成项目“test-block-cache-3.vcxproj”的操作 - 失败。
30>Exit code 0xc0000135
30>
24>系统找不到指定的批处理标签 - VCEnd
24>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-5.rule”的自定义生成已退出，代码为 1。
24>已完成生成项目“test-block-cache-5.vcxproj”的操作 - 失败。
28>系统找不到指定的批处理标签 - VCEnd
28>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-1.rule”的自定义生成已退出，代码为 1。
28>已完成生成项目“test-block-cache-1.vcxproj”的操作 - 失败。
33>Exit code 0xc0000135
33>
27>系统找不到指定的批处理标签 - VCEnd
27>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-2.rule”的自定义生成已退出，代码为 1。
27>已完成生成项目“test-block-cache-2.vcxproj”的操作 - 失败。
30>系统找不到指定的批处理标签 - VCEnd
30>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-write.rule”的自定义生成已退出，代码为 1。
30>已完成生成项目“test-block-cache-write.vcxproj”的操作 - 失败。
35>------ 已启动生成: 项目: test-log, 配置: Release x64 ------
33>系统找不到指定的批处理标签 - VCEnd
33>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-destroy.rule”的自定义生成已退出，代码为 1。
33>已完成生成项目“test-destroy.vcxproj”的操作 - 失败。
36>------ 已启动生成: 项目: test-multi-threaded-writing, 配置: Release x64 ------
37>------ 已启动生成: 项目: test-threaded-condition, 配置: Release x64 ------
38>------ 已启动生成: 项目: test-virtual-memory, 配置: Release x64 ------
32>1>
32>Exit code 0xc0000135
32>
32>系统找不到指定的批处理标签 - VCEnd
32>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-copy-words.rule”的自定义生成已退出，代码为 1。
32>已完成生成项目“test-copy-words.vcxproj”的操作 - 失败。
39>------ 已启动生成: 项目: test-deferred-plugin, 配置: Release x64 ------
40>------ 已启动生成: 项目: test-bug1488, 配置: Release x64 ------
41>------ 已启动生成: 项目: test-unit, 配置: Release x64 ------
23>1>
23>Exit code 0xc0000135
23>
23>系统找不到指定的批处理标签 - VCEnd
23>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-6.rule”的自定义生成已退出，代码为 1。
23>已完成生成项目“test-block-cache-6.vcxproj”的操作 - 失败。
31>1>
31>Exit code 0xc0000135
31>
31>系统找不到指定的批处理标签 - VCEnd
31>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-closed-on-destroy-DM.rule”的自定义生成已退出，代码为 1。
31>已完成生成项目“test-closed-on-destroy-DM.vcxproj”的操作 - 失败。
34>1>
34>Exit code 0xc0000135
34>
34>系统找不到指定的批处理标签 - VCEnd
34>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-float16.rule”的自定义生成已退出，代码为 1。
34>已完成生成项目“test-float16.vcxproj”的操作 - 失败。
42>------ 已启动生成: 项目: gdal_filesystem_fuzzer, 配置: Release x64 ------
43>------ 已跳过“生成”: 项目: gdalapps, 配置: Release x64 ------
43>没有为此解决方案配置选中要生成的项目 
29>1>
29>Exit code 0xc0000135
29>
29>系统找不到指定的批处理标签 - VCEnd
29>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-block-cache-limit.rule”的自定义生成已退出，代码为 1。
29>已完成生成项目“test-block-cache-limit.vcxproj”的操作 - 失败。
44>------ 已启动生成: 项目: bna_fuzzer, 配置: Release x64 ------
45>------ 已跳过“生成”: 项目: INSTALL, 配置: Release x64 ------
45>没有为此解决方案配置选中要生成的项目 
19>D:\work\GDAL_work\gdal\fuzzers\ogr_fuzzer.cpp(117,13): error C3861: “CPLGetExtension”: 找不到标识符
19>D:\work\GDAL_work\gdal\fuzzers\ogr_fuzzer.cpp(118,13): error C3861: “CPLGetExtension”: 找不到标识符
19>D:\work\GDAL_work\gdal\fuzzers\ogr_fuzzer.cpp(119,13): error C3861: “CPLGetExtension”: 找不到标识符
19>已完成生成项目“ogr_miramon_fuzzer.vcxproj”的操作 - 失败。
35>1>
35>Exit code 0xc0000135
35>
35>系统找不到指定的批处理标签 - VCEnd
35>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-log.rule”的自定义生成已退出，代码为 1。
35>已完成生成项目“test-log.vcxproj”的操作 - 失败。
17>D:\work\GDAL_work\gdal\ogr\ogrsf_frmts\sqlite\ogrsqlitebase.h(21,10): error C1083: 无法打开包括文件: “sqlite3.h”: No such file or directory
17>(编译源文件“../fuzzers/spatialite_geom_import_fuzzer.cpp”)
17>已完成生成项目“spatialite_geom_import_fuzzer.vcxproj”的操作 - 失败。
21>D:\work\GDAL_work\gdal\gcore\gdal_frmts.h(20,14): error C2059: 语法错误:“常数”
21>(编译源文件“../fuzzers/gdal_fuzzer.cpp”)
21>D:\work\GDAL_work\gdal\fuzzers\gdal_fuzzer.cpp(89,5): error C2064: 项不会计算为接受 0 个参数的函数
21>已完成生成项目“mrf_fuzzer.vcxproj”的操作 - 失败。
20>D:\work\GDAL_work\gdal\fuzzers\ogr_fuzzer.cpp(92,19): error C3861: “getpid”: 找不到标识符
20>D:\work\GDAL_work\gdal\fuzzers\ogr_fuzzer.cpp(91,54): warning C4477: “snprintf”: 格式字符串“%d”需要类型“int”的参数，但可变参数 1 拥有了类型“unknown-type”
20>已完成生成项目“ogr_filesystem_fuzzer.vcxproj”的操作 - 失败。
36>1>
36>Exit code 0xc0000135
36>
36>系统找不到指定的批处理标签 - VCEnd
36>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-multi-threaded-writing.rule”的自定义生成已退出，代码为 1。
36>已完成生成项目“test-multi-threaded-writing.vcxproj”的操作 - 失败。
37>1>
37>Exit code 0xc0000135
37>
37>系统找不到指定的批处理标签 - VCEnd
37>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-threaded-condition.rule”的自定义生成已退出，代码为 1。
37>已完成生成项目“test-threaded-condition.vcxproj”的操作 - 失败。
39>1>
39>Exit code 0xc0000135
39>
39>系统找不到指定的批处理标签 - VCEnd
39>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-deferred-plugin.rule”的自定义生成已退出，代码为 1。
39>已完成生成项目“test-deferred-plugin.vcxproj”的操作 - 失败。
38>1>
38>Exit code 0xc0000135
38>
38>系统找不到指定的批处理标签 - VCEnd
38>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-virtual-memory.rule”的自定义生成已退出，代码为 1。
38>已完成生成项目“test-virtual-memory.vcxproj”的操作 - 失败。
41>1>
41>Exit code 0xc0000135
41>
41>系统找不到指定的批处理标签 - VCEnd
41>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-unit.rule”的自定义生成已退出，代码为 1。
41>已完成生成项目“test-unit.vcxproj”的操作 - 失败。
40>1>
40>Exit code 0xc0000135
40>
40>系统找不到指定的批处理标签 - VCEnd
40>C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v170\Microsoft.CppCommon.targets(237,5): error MSB8066: “D:\work\GDAL_work\gdal\build\CMakeFiles\c58e92b1ee380d9e81842e404ea475b2\test-bug1488.rule”的自定义生成已退出，代码为 1。
40>已完成生成项目“test-bug1488.vcxproj”的操作 - 失败。
42>gdal_fuzzer.cpp
44>ogr_fuzzer.cpp
46>------ 已跳过“生成”: 项目: quicktest, 配置: Release x64 ------
46>没有为此解决方案配置选中要生成的项目 
42>D:\work\GDAL_work\gdal\fuzzers\gdal_fuzzer.cpp(195,19): error C3861: “getpid”: 找不到标识符
42>D:\work\GDAL_work\gdal\fuzzers\gdal_fuzzer.cpp(194,54): warning C4477: “snprintf”: 格式字符串“%d”需要类型“int”的参数，但可变参数 1 拥有了类型“unknown-type”
44>D:\work\GDAL_work\gdal\fuzzers\ogr_fuzzer.cpp(82,5): error C3861: “RegisterOGRBNA”: 找不到标识符
42>已完成生成项目“gdal_filesystem_fuzzer.vcxproj”的操作 - 失败。
47>------ 已跳过“生成”: 项目: fuzzers, 配置: Release x64 ------
47>没有为此解决方案配置选中要生成的项目 
44>已完成生成项目“bna_fuzzer.vcxproj”的操作 - 失败。
========== 生成: 3 成功，26 失败，307 最新，18 已跳过 ==========
========== 生成 于 2:21 完成，耗时 05.106 秒 ==========

```


```
#include "cpl_conv.h"
testparser
错误	C1083	无法打开包括文件: “cpl_conv.h”: No such file or directory	testparser	D:\work\GDAL_work\gdal-3.11.0\ogr\ogrsf_frmts\ods\ods_formula.h	18		
无法打开包括文件: “cpl_conv.h”: No such file or directory
严重性	代码	说明	项目	文件	行	禁止显示状态	详细信息
错误(活动)	E1696	无法打开 源 文件 "cpl_conv.h"	testparser	D:\work\GDAL_work\gdal-3.11.0\ogr\ogrsf_frmts\ods\ods_formula.h	18		
严重性	代码	说明	项目	文件	行	禁止显示状态	详细信息
错误(活动)	E1696	无法打开 源 文件 "cpl_string.h"	testparser	D:\work\GDAL_work\gdal-3.11.0\ogr\ogrsf_frmts\ods\ods_formula.h	19		
严重性	代码	说明	项目	文件	行	禁止显示状态	详细信息
错误	C1083	无法打开包括文件: “cpl_conv.h”: No such file or directory	testparser	D:\work\GDAL_work\gdal-3.11.0\ogr\ogrsf_frmts\ods\ods_formula.h	18		
```

Find text ogr_VRT
```
[20 files and 0 directories found]
d:\work\GDAL_work\gdal\.git\index
d:\work\GDAL_work\gdal\ogr\ogrsf_frmts\vrt\ogrvrtdatasource.cpp
d:\work\GDAL_work\gdal\ogr\ogrsf_frmts\vrt\ogrvrtdriver.cpp
d:\work\GDAL_work\gdal\ogr\ogrsf_frmts\vrt\ogrvrtlayer.cpp
d:\work\GDAL_work\gdal\ogr\ogrsf_frmts\vrt\ogr_vrt.h
d:\work\GDAL_work\gdal\ogr\ogrsfvirtualgeometrytypes.h
d:\work\GDAL_work\gdal\port\cpl_known_config_options.h
d:\work\GDAL_work\gdal\frmts\albers\albers.ini
d:\work\GDAL_work\gdal\NEWS.md
d:\work\GDAL_work\gdal\.git\objects\pack\pack-db6e4c288d42297e223af2e5734fec07219553.pack
d:\work\GDAL_work\gdal\autotest\ogr\ogr_sql_test.py
d:\work\GDAL_work\gdal\autotest\ogr\ogr_vrt.py
d:\work\GDAL_work\gdal\autotest\pyscripts\test_ogmregex.py
d:\work\GDAL_work\gdal\autotest\utilities\test_ogrinfo.py
d:\work\GDAL_work\gdal\swig\python\gdal_utils\osgeo_utils\ogrname.py
d:\work\GDAL_work\gdal\doc\source\development\building_from_source.rst
d:\work\GDAL_work\gdal\.github\workflows\ubuntu_24.04\expected_ogrinfo_formats.txt
d:\work\GDAL_work\gdal\.github\workflows\windows_conda_expected_ogrinfo_formats.txt
d:\work\GDAL_work\gdal\MIGRATION_GUIDE.TXT
# d:\work\GDAL_work\gdal\ogr\ogrsf_frmts\vrt\CMakeLists.txt
```


```cmake
add_gdal_driver(
  TARGET ogr_ODS
  SOURCES ods_formula_node.cpp
          ods_formula.cpp
          ogrodsdatasource.cpp
          ogrodsdriver.cpp
          ods_formula_parser.hpp
          ods_formula.h
          ogr_ods.h
          PLUGIN_CAPABLE
          NO_DEPS)
gdal_standard_includes(ogr_ODS)
target_include_directories(ogr_ODS PRIVATE $<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>)
add_executable(testparser EXCLUDE_FROM_ALL testparser.cpp)

if (GDAL_USE_EXPAT)
  gdal_target_link_libraries(ogr_ODS PRIVATE ${EXPAT_TARGET})
  target_compile_definitions(ogr_ODS PRIVATE -DHAVE_EXPAT=1)
endif ()

###########################################################
# Targets to refresh ods_formula_parser.cpp
###########################################################

# Those targets need to be run manually each time ods_formula_parser.y
# is modified.
# We could of course run them automatically, but that would make building
# GDAL harder.

# This target checks that ods_formula_parser.y md5sum has not changed
# If it has, then it should be updated and the generate_ods_formula_parser target
# should be manually run
add_custom_target(check_ods_formula_parser_md5 ALL
                  COMMAND ${CMAKE_COMMAND}
                      "-DIN_FILE=ods_formula_parser.y"
                      "-DTARGET=generate_ods_formula_parser"
                      "-DEXPECTED_MD5SUM=4471312c8be1baeef3509fb36ab668df"
                      "-DFILENAME_CMAKE=${CMAKE_CURRENT_SOURCE_DIR}/CMakeLists.txt"
                      -P "${PROJECT_SOURCE_DIR}/cmake/helpers/check_md5sum.cmake"
                  WORKING_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}"
                  DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/ods_formula_parser.y"
                  VERBATIM)

find_package(BISON)
add_custom_target(generate_ods_formula_parser
                  COMMAND ${CMAKE_COMMAND}
                      "-DBISON_FOUND=${BISON_FOUND}"
                      "-DBISON_EXECUTABLE=${BISON_EXECUTABLE}"
                      -P "${CMAKE_CURRENT_SOURCE_DIR}/generate_ods_formula_parser.cmake"
                  WORKING_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}"
                  VERBATIM)

```


```cmake
cmake_minimum_required(VERSION 3.12)

project(GDALExample)

message(STATUS "GDAL_DIR=${GDAL_DIR}")
message(STATUS "GDAL_ROOT=${GDAL_ROOT}")

message(STATUS "ENV{GDAL_DIR}=$ENV{GDAL_DIR}")
message(STATUS "ENV{GDAL_ROOT}=ENV{GDAL_ROOT}")

add_executable(gdal_example main.cpp)

target_link_libraries(gdal_example PRIVATE ${GDAL_LIBRARY})
```

output
```
-- GDAL_DIR=
-- GDAL_ROOT=
-- ENV{GDAL_DIR}=c:\dev\gdal\lib\cmake\gdal\
-- ENV{GDAL_ROOT}=ENV{GDAL_ROOT}
```

```
cmake -DCMAKE_FIND_DEBUG_OUTPUT=ON ..
```
# SQLite3

## Link

- [SQLite3](https://github.com/madler/zlib).

git clone https://github.com/sqlite/sqlite.git
```
PS D:\work\sqlite3_work> git clone https://github.com/sqlite/sqlite.git
Cloning into 'sqlite'...
remote: Enumerating objects: 272034, done.
remote: Counting objects: 100% (1256/1256), done.
remote: Compressing objects: 100% (561/561), done.
remote: Total 272034 (delta 965), reused 707 (delta 695), pack-reused 270778 (from 5)
Receiving objects: 100% (272034/272034), 456.66 MiB | 266.00 KiB/s, done.
Resolving deltas: 100% (198465/198465), done.
Updating files: 100% (2209/2209), done.
```

cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
```
PS D:\work\sqlite3_work\sqlite> cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
**********************************************************************
** Visual Studio 2022 Developer Command Prompt v17.13.7
** Copyright (c) 2022 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
```

```
PS D:\work\sqlite3_work\sqlite>  nmake /f Makefile.msc sqlite3.exe

Microsoft (R) Program Maintenance Utility Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

        cl -DHAVE__FULLPATH=1 .\autosetup\jimsh0.c
Microsoft (R) C/C++ Optimizing Compiler Version 19.43.34810 for x64
Copyright (C) Microsoft Corporation.  All rights reserved.

jimsh0.c
Microsoft (R) Incremental Linker Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

/out:jimsh0.exe
jimsh0.obj
        jimsh0.exe .\tool\mkshellc.tcl shell.c
        cl -nologo -W4 -Fdmksourceid.pdb   -MT -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -O2 -Zi -wd4054 -wd4055 -wd4100 -wd4127 -wd4130 -wd4152 -wd4189 -wd4206 -wd4210 -wd4232 -wd4244 -wd4305 -wd4306 -wd4702 -wd4706 -Femksourceid.exe .\tool\mksourceid.c /link /DEBUG
mksourceid.c
        jimsh0.exe .\tool\mksqlite3h.tcl "." -o sqlite3.h
        echo #ifndef SQLITE_RESOURCE_VERSION > sqlite3rc.h
        for /F %V in ('type ".\VERSION"') do (  echo #define SQLITE_RESOURCE_VERSION %V  | jimsh0.exe .\tool\replace.tcl exact . ^, >> sqlite3rc.h  )

D:\work\sqlite3_work\sqlite>(echo #define SQLITE_RESOURCE_VERSION 3.50.0   | jimsh0.exe .\tool\replace.tcl exact . ,   1>>sqlite3rc.h )
        echo #endif >> sqlite3rc.h
        rc -DSQLITE_OS_WIN=1 -I. -I. -I.\src   -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -DSQLITE_THREADSAFE=1 -DSQLITE_THREAD_OVERRIDE_LOCK=-1  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS   -r -fo sqlite3res.lo .\src\sqlite3.rc
Microsoft (R) Windows (R) Resource Compiler Version 10.0.10011.16384
Copyright (C) Microsoft Corporation.  All rights reserved.

        jimsh0.exe .\tool\mkctimec.tcl
Overwriting ctime.c...
        jimsh0.exe .\tool\mkpragmatab.tcl
Overwriting pragma.h with new pragma table...
        copy /Y .\tool\lempar.c .
        1 file(s) copied.
        copy /B lempar.c +,,
        1 file(s) copied.
        cl -nologo -W4 -Fdlemon.pdb   -MT -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -O2 -Zi -wd4054 -wd4055 -wd4100 -wd4127 -wd4130 -wd4152 -wd4189 -wd4206 -wd4210 -wd4232 -wd4244 -wd4305 -wd4306 -wd4702 -wd4706 -Daccess=_access  -Felemon.exe .\tool\lemon.c /link /DEBUG
lemon.c
        del /Q parse.y parse.h parse.h.temp 2>NUL
        copy /Y .\src\parse.y .
        1 file(s) copied.
        copy /B parse.y +,,
        1 file(s) copied.
        .\lemon.exe  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS   -S parse.y
        type parse.h .\src\vdbe.c | jimsh0.exe .\tool\mkopcodeh.tcl > opcodes.h

parse.h



.\src\vdbe.c


        jimsh0.exe .\tool\mkopcodec.tcl opcodes.h > opcodes.c
        cl -nologo -W4 -Fdmkkeywordhash.pdb   -MT -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -O2 -Zi -wd4054 -wd4055 -wd4100 -wd4127 -wd4130 -wd4152 -wd4189 -wd4206 -wd4210 -wd4232 -wd4244 -wd4305 -wd4306 -wd4702 -wd4706 -Femkkeywordhash.exe  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS    .\tool\mkkeywordhash.c /link /DEBUG
mkkeywordhash.c
        .\mkkeywordhash.exe > keywordhash.h
        copy /Y .\ext\fts5\fts5parse.y .
        1 file(s) copied.
        copy /B fts5parse.y +,,
        1 file(s) copied.
        del /Q fts5parse.h 2>NUL
        .\lemon.exe  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS   -S fts5parse.y
        jimsh0.exe .\ext\fts5\tool\mkfts5c.tcl
        copy /Y .\ext\fts5\fts5.h .
        1 file(s) copied.
        copy /B fts5.h +,,
        1 file(s) copied.
        rmdir /Q/S tsrc 2>NUL
        mkdir tsrc
        jimsh0.exe .\tool\cp.tcl .\src\alter.c  .\src\analyze.c  .\src\attach.c  .\src\auth.c  .\src\backup.c  .\src\bitvec.c  .\src\btmutex.c  .\src\btree.c  .\src\build.c  .\src\callback.c  .\src\complete.c  ctime.c  .\src\date.c  .\src\dbpage.c  .\src\dbstat.c  .\src\delete.c  .\src\expr.c  .\src\fault.c  .\src\fkey.c  .\src\func.c  .\src\global.c  .\src\hash.c  .\src\insert.c  .\src\json.c  .\src\legacy.c  .\src\loadext.c  .\src\main.c  .\src\malloc.c  .\src\mem0.c  .\src\mem1.c  .\src\mem2.c  .\src\mem3.c  .\src\mem5.c  .\src\memdb.c  .\src\memjournal.c  .\src\mutex.c  .\src\mutex_noop.c  .\src\mutex_unix.c  .\src\mutex_w32.c  .\src\notify.c  .\src\os.c  .\src\os_kv.c  .\src\os_unix.c  .\src\os_win.c .\src\pager.c  .\src\pcache.c  .\src\pcache1.c  .\src\pragma.c  .\src\prepare.c  .\src\printf.c  .\src\random.c  .\src\resolve.c  .\src\rowset.c  .\src\select.c  .\src\status.c  .\src\table.c  .\src\threads.c  .\src\tclsqlite.c  .\src\tokenize.c  .\src\treeview.c  .\src\trigger.c  .\src\utf.c  .\src\update.c  .\src\upsert.c  .\src\util.c  .\src\vacuum.c  .\src\vdbe.c  .\src\vdbeapi.c  .\src\vdbeaux.c  .\src\vdbeblob.c  .\src\vdbemem.c  .\src\vdbesort.c  .\src\vdbetrace.c  .\src\vdbevtab.c  .\src\vtab.c  .\src\wal.c  .\src\walker.c  .\src\where.c  .\src\wherecode.c  .\src\whereexpr.c  .\src\window.c .\src\parse.y .\src\btree.h  .\src\btreeInt.h  .\src\hash.h  .\src\hwtime.h  .\src\msvc.h  .\src\mutex.h  .\src\os.h  .\src\os_common.h  .\src\os_setup.h  .\src\os_win.h .\src\pager.h  .\src\pcache.h  pragma.h  .\src\sqlite.h.in  .\src\sqlite3ext.h  .\src\sqliteInt.h  .\src\sqliteLimit.h  .\src\vdbe.h  .\src\vdbeInt.h  .\src\vxworks.h  .\src\wal.h  .\src\whereInt.h .\ext\fts3\fts3.c  .\ext\fts3\fts3_aux.c  .\ext\fts3\fts3_expr.c  .\ext\fts3\fts3_hash.c  .\ext\fts3\fts3_icu.c  .\ext\fts3\fts3_porter.c  .\ext\fts3\fts3_snippet.c  .\ext\fts3\fts3_tokenizer.c  .\ext\fts3\fts3_tokenizer1.c  .\ext\fts3\fts3_tokenize_vtab.c  .\ext\fts3\fts3_unicode.c  .\ext\fts3\fts3_unicode2.c  .\ext\fts3\fts3_write.c  .\ext\icu\icu.c  .\ext\rtree\rtree.c  .\ext\session\sqlite3session.c  .\ext\rbu\sqlite3rbu.c  .\ext\misc\stmt.c .\ext\fts3\fts3.h  .\ext\fts3\fts3Int.h  .\ext\fts3\fts3_hash.h  .\ext\fts3\fts3_tokenizer.h  .\ext\icu\sqliteicu.h  .\ext\rtree\rtree.h  .\ext\rtree\geopoly.c  .\ext\rbu\sqlite3rbu.h  .\ext\session\sqlite3session.h opcodes.c  parse.c keywordhash.h  opcodes.h  parse.h  shell.c  sqlite3.h  fts5.c fts5.h tsrc
        copy /B tsrc\fts5.c +,,
        1 file(s) copied.
        copy /B tsrc\fts5.h +,,
        1 file(s) copied.
        del /Q tsrc\sqlite.h.in tsrc\parse.y 2>NUL
        jimsh0.exe .\tool\vdbe-compress.tcl  < tsrc\vdbe.c > vdbe.new
        move vdbe.new tsrc\vdbe.c
        1 file(s) moved.
        echo > .target_source
        copy /Y tsrc\sqlite3ext.h sqlite3ext.h
        1 file(s) copied.
        copy /B sqlite3ext.h +,,
        1 file(s) copied.
        copy /Y .\ext\session\sqlite3session.h .
        1 file(s) copied.
        copy /B sqlite3session.h +,,
        1 file(s) copied.
        cl -nologo -W4 -DINCLUDE_MSVC_H=1   -DSQLITE_OS_WIN=1 -I. -I. -I.\src -fp:precise -MT -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -DSQLITE_THREADSAFE=1 -DSQLITE_THREAD_OVERRIDE_LOCK=-1  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS   -O2 -Zi -Fesrc-verify.exe -wd4054 -wd4055 -wd4100 -wd4127 -wd4130 -wd4152 -wd4189 -wd4206 -wd4210 -wd4232 -wd4244 -wd4305 -wd4306 -wd4702 -wd4706 .\tool\src-verify.c
src-verify.c
        jimsh0.exe .\tool\mksqlite3c.tcl --linemacros=0
        cl -nologo -W4 -DINCLUDE_MSVC_H=1   -DSQLITE_OS_WIN=1 -I. -I. -I.\src -fp:precise -MT -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -DSQLITE_THREADSAFE=1 -DSQLITE_THREAD_OVERRIDE_LOCK=-1  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS   -O2 -Zi -Fesqlite3.exe  -DSQLITE_DQS=0 -DSQLITE_ENABLE_FTS4=1 -DSQLITE_ENABLE_EXPLAIN_COMMENTS=1 -DSQLITE_ENABLE_OFFSET_SQL_FUNC=1 -DSQLITE_ENABLE_UNKNOWN_SQL_FUNCTION=1 -DSQLITE_ENABLE_STMT_SCANSTATUS=1 -DSQLITE_STRICT_SUBTYPE=1 -DHAVE_READLINE=0 shell.c sqlite3.c  /link /pdb:sqlite3sh.pdb /DEBUG  /NOLOGO /MACHINE:x64   sqlite3res.lo
shell.c
sqlite3.c
Generating Code...
```

```
PS D:\work\sqlite3_work\sqlite> nmake /f Makefile.msc sqlite3.dll

Microsoft (R) Program Maintenance Utility Version 14.43.34810.0
Copyright (C) Microsoft Corporation.  All rights reserved.

        cl -nologo -W4 -DINCLUDE_MSVC_H=1   -DSQLITE_OS_WIN=1 -I. -I. -I.\src -fp:precise -MT -DNDEBUG -D_CRT_SECURE_NO_DEPRECATE -D_CRT_SECURE_NO_WARNINGS -D_CRT_NONSTDC_NO_DEPRECATE -D_CRT_NONSTDC_NO_WARNINGS -DSQLITE_THREADSAFE=1 -DSQLITE_THREAD_OVERRIDE_LOCK=-1  -DSQLITE_MAX_TRIGGER_DEPTH=100  -DSQLITE_ENABLE_FTS3=1 -DSQLITE_ENABLE_FTS5=1 -DSQLITE_ENABLE_RTREE=1 -DSQLITE_ENABLE_GEOPOLY=1 -DSQLITE_ENABLE_STMTVTAB=1 -DSQLITE_ENABLE_DBPAGE_VTAB=1 -DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_BYTECODE_VTAB=1 -DSQLITE_ENABLE_COLUMN_METADATA=1 -DSQLITE_ENABLE_MATH_FUNCTIONS   -O2 -Zi -Fosqlite3.lo -Fdsqlite3.pdb  -c sqlite3.c
sqlite3.c
        lib.exe /NOLOGO /MACHINE:x64 /OUT:libsqlite3.lib sqlite3.lo
        echo EXPORTS > sqlite3.def
        dumpbin /all libsqlite3.lib  | jimsh0.exe .\tool\replace.tcl include "^\s+1 _?(sqlite3(?:session|changeset|changegroup|rebaser|rbu)?_[^@]*)(?:@\d+)?$" \1  | sort >> sqlite3.def
        link.exe /DEBUG  /NOLOGO /MACHINE:x64  /DLL /DEF:sqlite3.def /OUT:sqlite3.dll sqlite3.lo sqlite3res.lo
LINK : sqlite3.dll not found or not built by the last incremental link; performing full link
   Creating library sqlite3.lib and object sqlite3.exp
```
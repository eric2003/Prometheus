# Example

## string

```cmake
set(str "hello")
set(Item_${str} "world")

message(STATUS "str=${str}")
message(STATUS "Item_hello=${Item_hello}")
message(STATUS "Item_${str}=${Item_${str}}")
```

results:
```
-- str=hello
-- Item_hello=world
-- Item_hello=world
```

## list

```cmake
set(my_list "apple" "banana" "cherry")
message("My list contains: ${my_list}")
```
results:
```
My list contains: apple;banana;cherry
```

```cmake
foreach(item ${my_list})
  message("Item: ${item}")
endforeach()
```

results:
```
Item: apple
Item: banana
Item: cherry
```

## foreach

```cmake
foreach(<loop_var> <items>)
  <commands>
endforeach()
```

example 1
```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

set(my_list "apple" "banana" "cherry")
message("My list contains: ${my_list}")

foreach(item ${my_list})
  set(Item_${item} ${item}_world)
  message("Item: ${item},Item_${item}=${Item_${item}}")
endforeach()
```

results:
```
My list contains: apple;banana;cherry
Item: apple,Item_apple=apple_world
Item: banana,Item_banana=banana_world
Item: cherry,Item_cherry=cherry_world
```

example 2
```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

set( options "MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL" )
message("options contains: ${options}")

foreach(item ${options})
  message("Item: ${item}")
endforeach()
```

results:
```
options contains: MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL
Item: MERGE
Item: QUIET
Item: REPRODUCIBLE
Item: STATIC
Item: SHARED
Item: MODULE
Item: INTERFACE
Item: EXCLUDE_FROM_ALL
```

example 3
```cmake
foreach( item a b)
  message( STATUS "item=${item}" )
endforeach()
```

results:
```
-- item=a
-- item=b
```

## nested foreach
```
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

set( myNames "MYNAME;MYname;myname" )
message("myNames contains: ${myNames}")

set( options "MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL" )
message("options contains: ${options}")

foreach(myName ${myNames})
  message("myName: ${myName}")
  foreach(item ${options})
    message("myName=:${myName} Item: ${item} nameItem=${myName}_${item}")
  endforeach()  
endforeach()
```

results:
```
myNames contains: MYNAME;MYname;myname
options contains: MERGE;QUIET;REPRODUCIBLE;STATIC;SHARED;MODULE;INTERFACE;EXCLUDE_FROM_ALL
myName: MYNAME
myName=:MYNAME Item: MERGE nameItem=MYNAME_MERGE
myName=:MYNAME Item: QUIET nameItem=MYNAME_QUIET
myName=:MYNAME Item: REPRODUCIBLE nameItem=MYNAME_REPRODUCIBLE
myName=:MYNAME Item: STATIC nameItem=MYNAME_STATIC
myName=:MYNAME Item: SHARED nameItem=MYNAME_SHARED
myName=:MYNAME Item: MODULE nameItem=MYNAME_MODULE
myName=:MYNAME Item: INTERFACE nameItem=MYNAME_INTERFACE
myName=:MYNAME Item: EXCLUDE_FROM_ALL nameItem=MYNAME_EXCLUDE_FROM_ALL
myName: MYname
myName=:MYname Item: MERGE nameItem=MYname_MERGE
myName=:MYname Item: QUIET nameItem=MYname_QUIET
myName=:MYname Item: REPRODUCIBLE nameItem=MYname_REPRODUCIBLE
myName=:MYname Item: STATIC nameItem=MYname_STATIC
myName=:MYname Item: SHARED nameItem=MYname_SHARED
myName=:MYname Item: MODULE nameItem=MYname_MODULE
myName=:MYname Item: INTERFACE nameItem=MYname_INTERFACE
myName=:MYname Item: EXCLUDE_FROM_ALL nameItem=MYname_EXCLUDE_FROM_ALL
myName: myname
myName=:myname Item: MERGE nameItem=myname_MERGE
myName=:myname Item: QUIET nameItem=myname_QUIET
myName=:myname Item: REPRODUCIBLE nameItem=myname_REPRODUCIBLE
myName=:myname Item: STATIC nameItem=myname_STATIC
myName=:myname Item: SHARED nameItem=myname_SHARED
myName=:myname Item: MODULE nameItem=myname_MODULE
myName=:myname Item: INTERFACE nameItem=myname_INTERFACE
myName=:myname Item: EXCLUDE_FROM_ALL nameItem=myname_EXCLUDE_FROM_ALL
```


## IMPORTED_TARGETS Info

```cmake
cmake_minimum_required ( VERSION 3.28 )

project ( testprj )

find_package (Python COMPONENTS NumPy)
get_directory_property( my_import_targets DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} IMPORTED_TARGETS )
message( STATUS "my_import_targets=${my_import_targets}" )
```

results:
```
my_import_targets=Python::Interpreter;Python::Module;Python::NumPy
```

## GenerateExportHeader

-  [GenerateExportHeader](https://cmake.org/cmake/help/latest/module/GenerateExportHeader.html#module:GenerateExportHeader).

## find_package_handle_standard_args

```cmake
include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(LibArchive
  REQUIRED_VARS LibArchive_LIBRARY LibArchive_INCLUDE_DIR
  VERSION_VAR LibArchive_VERSION)
```  

## find_library code segment example

```cmake
find_library(MPI_mpi_LIBRARY
  NAMES mpi
  HINTS ${MPI_MPICH_PREFIX_PATHS})
mark_as_advanced(MPI_mpi_LIBRARY)
......
elseif(LANG STREQUAL "Fortran")
  find_library(MPI_fmpich2_LIBRARY
    NAMES fmpich2
    HINTS ${MPI_MPICH_PREFIX_PATHS})
  find_library(MPI_fmpich2s_LIBRARY
    NAMES fmpich2s
    HINTS ${MPI_MPICH_PREFIX_PATHS})
  find_library(MPI_fmpich2g_LIBRARY
    NAMES fmpich2g
    HINTS ${MPI_MPICH_PREFIX_PATHS})
  mark_as_advanced(MPI_fmpich2_LIBRARY MPI_fmpich2s_LIBRARY MPI_fmpich2g_LIBRARY)
  list(APPEND MPI_MPICH_LIB_NAMES "fmpich2")
endif()
```  

simple examples
```cmake
cmake_minimum_required(VERSION 3.29)
project(testprj)

set ( PRJ_COMPILE_FEATURES )

if ( MSVC )
    set_property( DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME} )
endif()

list ( APPEND PRJ_COMPILE_FEATURES cxx_std_23 )

add_executable( ${PROJECT_NAME} )

target_sources( ${PROJECT_NAME}
    PRIVATE
        main.cpp
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

## cmake_path example

```cmake
set(path "c:/a.txt")
cmake_path(GET path FILENAME myfilename)

message( STATUS "myfilename=${myfilename}" )
```

results:
```
-- myfilename=a.txt
```

## check_c_source_compiles

```cmake
include_guard(GLOBAL)
include(Internal/CheckSourceCompiles)

macro(CHECK_C_SOURCE_COMPILES SOURCE VAR)
  cmake_check_source_compiles(C "${SOURCE}" ${VAR} ${ARGN})
endmacro()
```

## cmake_check_source_compiles

```cmake
include_guard(GLOBAL)
include(Internal/CheckSourceCompiles)

function(CHECK_SOURCE_COMPILES _lang _source _var)
  cmake_check_source_compiles(${_lang} "${_source}" ${_var} ${ARGN})
endfunction()
```


## CMAKE_CHECK_SOURCE_COMPILES code

```cmake
include_guard(GLOBAL)

block(SCOPE_FOR POLICIES)
cmake_policy(SET CMP0054 NEW) # if() quoted variables not dereferenced
cmake_policy(SET CMP0057 NEW) # if() supports IN_LIST

function(CMAKE_CHECK_SOURCE_COMPILES _lang _source _var)
  if(NOT DEFINED "${_var}")
    set(_lang_filename "src")
    if(_lang STREQUAL "C")
      set(_lang_textual "C")
      set(_lang_ext "c")
    elseif(_lang STREQUAL "CXX")
      set(_lang_textual "C++")
      set(_lang_ext "cxx")
    elseif(_lang STREQUAL "CUDA")
      set(_lang_textual "CUDA")
      set(_lang_ext "cu")
    elseif(_lang STREQUAL "Fortran")
      set(_lang_textual "Fortran")
      set(_lang_ext "F90")
    elseif(_lang STREQUAL "HIP")
      set(_lang_textual "HIP")
      set(_lang_ext "hip")
    elseif(_lang STREQUAL "ISPC")
      set(_lang_textual "ISPC")
      set(_lang_ext "ispc")
    elseif(_lang STREQUAL "OBJC")
      set(_lang_textual "Objective-C")
      set(_lang_ext "m")
    elseif(_lang STREQUAL "OBJCXX")
      set(_lang_textual "Objective-C++")
      set(_lang_ext "mm")
    elseif(_lang STREQUAL "Swift")
      set(_lang_textual "Swift")
      set(_lang_ext "swift")
      if (NOT DEFINED CMAKE_TRY_COMPILE_TARGET_TYPE
          OR CMAKE_TRY_COMPILE_TARGET_TYPE STREQUAL "EXECUTABLE")
        set(_lang_filename "main")
      endif()
    else()
      message (SEND_ERROR "check_source_compiles: ${_lang}: unknown language.")
      return()
    endif()

    get_property (_supported_languages GLOBAL PROPERTY ENABLED_LANGUAGES)
    if (NOT _lang IN_LIST _supported_languages)
      message (SEND_ERROR "check_source_compiles: ${_lang}: needs to be enabled before use.")
      return()
    endif()

    set(_FAIL_REGEX)
    set(_SRC_EXT)
    set(_key)
    foreach(arg ${ARGN})
      if("${arg}" MATCHES "^(FAIL_REGEX|SRC_EXT|OUTPUT_VARIABLE)$")
        set(_key "${arg}")
      elseif(_key STREQUAL "FAIL_REGEX")
        list(APPEND _FAIL_REGEX "${arg}")
      elseif(_key STREQUAL "SRC_EXT")
        set(_SRC_EXT "${arg}")
        set(_key "")
      elseif(_key STREQUAL "OUTPUT_VARIABLE")
        set(_OUTPUT_VARIABLE "${arg}")
        set(_key "")
      else()
        message(FATAL_ERROR "Unknown argument:\n  ${arg}\n")
      endif()
    endforeach()

    if(NOT _SRC_EXT)
      set(_SRC_EXT ${_lang_ext})
    endif()

    if(CMAKE_REQUIRED_LINK_OPTIONS)
      set(CHECK_${LANG}_SOURCE_COMPILES_ADD_LINK_OPTIONS
        LINK_OPTIONS ${CMAKE_REQUIRED_LINK_OPTIONS})
    else()
      set(CHECK_${LANG}_SOURCE_COMPILES_ADD_LINK_OPTIONS)
    endif()
    if(CMAKE_REQUIRED_LIBRARIES)
      set(CHECK_${LANG}_SOURCE_COMPILES_ADD_LIBRARIES
        LINK_LIBRARIES ${CMAKE_REQUIRED_LIBRARIES})
    else()
      set(CHECK_${LANG}_SOURCE_COMPILES_ADD_LIBRARIES)
    endif()
    if(CMAKE_REQUIRED_INCLUDES)
      set(CHECK_${LANG}_SOURCE_COMPILES_ADD_INCLUDES
        "-DINCLUDE_DIRECTORIES:STRING=${CMAKE_REQUIRED_INCLUDES}")
    else()
      set(CHECK_${LANG}_SOURCE_COMPILES_ADD_INCLUDES)
    endif()

    if(NOT CMAKE_REQUIRED_QUIET)
      message(CHECK_START "Performing Test ${_var}")
    endif()
    string(APPEND _source "\n")
    try_compile(${_var}
      SOURCE_FROM_VAR "${_lang_filename}.${_SRC_EXT}" _source
      COMPILE_DEFINITIONS -D${_var} ${CMAKE_REQUIRED_DEFINITIONS}
      ${CHECK_${LANG}_SOURCE_COMPILES_ADD_LINK_OPTIONS}
      ${CHECK_${LANG}_SOURCE_COMPILES_ADD_LIBRARIES}
      CMAKE_FLAGS -DCOMPILE_DEFINITIONS:STRING=${CMAKE_REQUIRED_FLAGS}
      "${CHECK_${LANG}_SOURCE_COMPILES_ADD_INCLUDES}"
      OUTPUT_VARIABLE OUTPUT)

    foreach(_regex ${_FAIL_REGEX})
      if("${OUTPUT}" MATCHES "${_regex}")
        set(${_var} 0)
      endif()
    endforeach()

    if (_OUTPUT_VARIABLE)
      set(${_OUTPUT_VARIABLE} "${OUTPUT}" PARENT_SCOPE)
    endif()

    if(${_var})
      set(${_var} 1 CACHE INTERNAL "Test ${_var}")
      if(NOT CMAKE_REQUIRED_QUIET)
        message(CHECK_PASS "Success")
      endif()
    else()
      if(NOT CMAKE_REQUIRED_QUIET)
        message(CHECK_FAIL "Failed")
      endif()
      set(${_var} "" CACHE INTERNAL "Test ${_var}")
    endif()
  endif()
endfunction()

endblock()
```

## cmTryCompileCommand.h

```cpp
/* Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
   file Copyright.txt or https://cmake.org/licensing for details.  */
#pragma once

#include "cmConfigure.h" // IWYU pragma: keep

#include <string>
#include <vector>

class cmExecutionStatus;

bool cmTryCompileCommand(std::vector<std::string> const& args,
                         cmExecutionStatus& status);
```

## cmTryCompileCommand.cxx

```cpp
/* Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
   file Copyright.txt or https://cmake.org/licensing for details.  */
#include "cmTryCompileCommand.h"

#include <cm/optional>

#include "cmConfigureLog.h"
#include "cmCoreTryCompile.h"
#include "cmExecutionStatus.h"
#include "cmMakefile.h"
#include "cmMessageType.h"
#include "cmRange.h"
#include "cmState.h"
#include "cmStateTypes.h"
#include "cmStringAlgorithms.h"
#include "cmValue.h"
#include "cmake.h"

namespace {
#ifndef CMAKE_BOOTSTRAP
void WriteTryCompileEvent(cmConfigureLog& log, cmMakefile const& mf,
                          cmTryCompileResult const& compileResult)
{
  // Keep in sync with cmFileAPIConfigureLog's DumpEventKindNames.
  static const std::vector<unsigned long> LogVersionsWithTryCompileV1{ 1 };

  if (log.IsAnyLogVersionEnabled(LogVersionsWithTryCompileV1)) {
    log.BeginEvent("try_compile-v1", mf);
    cmCoreTryCompile::WriteTryCompileEventFields(log, compileResult);
    log.EndEvent();
  }
}
#endif
}

bool cmTryCompileCommand(std::vector<std::string> const& args,
                         cmExecutionStatus& status)
{
  cmMakefile& mf = status.GetMakefile();

  if (args.size() < 3) {
    mf.IssueMessage(
      MessageType::FATAL_ERROR,
      "The try_compile() command requires at least 3 arguments.");
    return false;
  }

  if (mf.GetCMakeInstance()->GetWorkingMode() == cmake::FIND_PACKAGE_MODE) {
    mf.IssueMessage(
      MessageType::FATAL_ERROR,
      "The try_compile() command is not supported in --find-package mode.");
    return false;
  }

  cmStateEnums::TargetType targetType = cmStateEnums::EXECUTABLE;
  cmValue tt = mf.GetDefinition("CMAKE_TRY_COMPILE_TARGET_TYPE");
  if (cmNonempty(tt)) {
    if (*tt == cmState::GetTargetTypeName(cmStateEnums::EXECUTABLE)) {
      targetType = cmStateEnums::EXECUTABLE;
    } else if (*tt ==
               cmState::GetTargetTypeName(cmStateEnums::STATIC_LIBRARY)) {
      targetType = cmStateEnums::STATIC_LIBRARY;
    } else {
      mf.IssueMessage(
        MessageType::FATAL_ERROR,
        cmStrCat("Invalid value '", *tt,
                 "' for CMAKE_TRY_COMPILE_TARGET_TYPE.  Only '",
                 cmState::GetTargetTypeName(cmStateEnums::EXECUTABLE),
                 "' and '",
                 cmState::GetTargetTypeName(cmStateEnums::STATIC_LIBRARY),
                 "' are allowed."));
      return false;
    }
  }

  cmCoreTryCompile tc(&mf);
  cmCoreTryCompile::Arguments arguments =
    tc.ParseArgs(cmMakeRange(args), false);
  if (!arguments) {
    return true;
  }

  cm::optional<cmTryCompileResult> compileResult =
    tc.TryCompileCode(arguments, targetType);
#ifndef CMAKE_BOOTSTRAP
  if (compileResult && !arguments.NoLog) {
    if (cmConfigureLog* log = mf.GetCMakeInstance()->GetConfigureLog()) {
      WriteTryCompileEvent(*log, mf, *compileResult);
    }
  }
#endif

  // if They specified clean then we clean up what we can
  if (tc.SrcFileSignature) {
    if (!mf.GetCMakeInstance()->GetDebugTryCompile()) {
      tc.CleanupFiles(tc.BinaryDirectory);
    }
  }
  return true;
}
```

## TryCompile

```cpp
  // actually do the try compile now that everything is setup
  int res = this->Makefile->TryCompile(
    sourceDirectory, this->BinaryDirectory, projectName, targetName,
    this->SrcFileSignature, cmake::NO_BUILD_PARALLEL_LEVEL,
    &arguments.CMakeFlags, output);
	
int cmMakefile::TryCompile(const std::string& srcdir,
                           const std::string& bindir,
                           const std::string& projectName,
                           const std::string& targetName, bool fast, int jobs,
                           const std::vector<std::string>* cmakeArgs,
                           std::string& output)	
						   
  // finally call the generator to actually build the resulting project
  int ret = this->GetGlobalGenerator()->TryCompile(
    jobs, srcdir, bindir, projectName, targetName, fast, output, this);	

	int cmGlobalGenerator::TryCompile(int jobs, const std::string& srcdir,
                                  const std::string& bindir,
                                  const std::string& projectName,
                                  const std::string& target, bool fast,
                                  std::string& output, cmMakefile* mf)
```


## cmGlobalGenerator::TryCompile

```cpp
int cmGlobalGenerator::TryCompile(int jobs, const std::string& srcdir,
                                  const std::string& bindir,
                                  const std::string& projectName,
                                  const std::string& target, bool fast,
                                  std::string& output, cmMakefile* mf)
{
  // if this is not set, then this is a first time configure
  // and there is a good chance that the try compile stuff will
  // take the bulk of the time, so try and guess some progress
  // by getting closer and closer to 100 without actually getting there.
  if (!this->CMakeInstance->GetState()->GetInitializedCacheValue(
        "CMAKE_NUMBER_OF_MAKEFILES")) {
    // If CMAKE_NUMBER_OF_MAKEFILES is not set
    // we are in the first time progress and we have no
    // idea how long it will be.  So, just move 1/10th of the way
    // there each time, and don't go over 95%
    this->FirstTimeProgress += ((1.0f - this->FirstTimeProgress) / 30.0f);
    if (this->FirstTimeProgress > 0.95f) {
      this->FirstTimeProgress = 0.95f;
    }
    this->CMakeInstance->UpdateProgress("Configuring",
                                        this->FirstTimeProgress);
  }

  std::vector<std::string> newTarget = {};
  if (!target.empty()) {
    newTarget = { target };
  }
  std::string config =
    mf->GetSafeDefinition("CMAKE_TRY_COMPILE_CONFIGURATION");
  cmBuildOptions defaultBuildOptions(false, fast, PackageResolveMode::Disable);

  std::stringstream ostr;
  auto ret =
    this->Build(jobs, srcdir, bindir, projectName, newTarget, ostr, "", config,
                defaultBuildOptions, true, this->TryCompileTimeout);
  output = ostr.str();
  return ret;
}
```

## cmGlobalGenerator::Build

```cpp
int cmGlobalGenerator::Build(
  int jobs, const std::string& /*unused*/, const std::string& bindir,
  const std::string& projectName, const std::vector<std::string>& targets,
  std::ostream& ostr, const std::string& makeCommandCSTR,
  const std::string& config, const cmBuildOptions& buildOptions, bool verbose,
  cmDuration timeout, cmSystemTools::OutputOption outputflag,
  std::vector<std::string> const& nativeOptions)
{
  bool hideconsole = cmSystemTools::GetRunCommandHideConsole();

  /**
   * Run an executable command and put the stdout in output.
   */
  cmWorkingDirectory workdir(bindir);
  ostr << "Change Dir: '" << bindir << '\'' << std::endl;
  if (workdir.Failed()) {
    cmSystemTools::SetRunCommandHideConsole(hideconsole);
    std::string err = cmStrCat("Failed to change directory: ",
                               std::strerror(workdir.GetLastResult()));
    cmSystemTools::Error(err);
    ostr << err << std::endl;
    return 1;
  }
  std::string realConfig = config;
  if (realConfig.empty()) {
    realConfig = this->GetDefaultBuildConfig();
  }

  int retVal = 0;
  cmSystemTools::SetRunCommandHideConsole(true);
  std::string outputBuffer;
  std::string* outputPtr = &outputBuffer;

  std::vector<GeneratedMakeCommand> makeCommand = this->GenerateBuildCommand(
    makeCommandCSTR, projectName, bindir, targets, realConfig, jobs, verbose,
    buildOptions, nativeOptions);

  // Workaround to convince some commands to produce output.
  if (outputflag == cmSystemTools::OUTPUT_PASSTHROUGH &&
      makeCommand.back().RequiresOutputForward) {
    outputflag = cmSystemTools::OUTPUT_FORWARD;
  }

  // should we do a clean first?
  if (buildOptions.Clean) {
    std::vector<GeneratedMakeCommand> cleanCommand =
      this->GenerateBuildCommand(makeCommandCSTR, projectName, bindir,
                                 { "clean" }, realConfig, jobs, verbose,
                                 buildOptions);
    ostr << "\nRun Clean Command: " << cleanCommand.front().QuotedPrintable()
         << std::endl;
    if (cleanCommand.size() != 1) {
      this->GetCMakeInstance()->IssueMessage(MessageType::INTERNAL_ERROR,
                                             "The generator did not produce "
                                             "exactly one command for the "
                                             "'clean' target");
      return 1;
    }
    if (!cmSystemTools::RunSingleCommand(cleanCommand.front().PrimaryCommand,
                                         outputPtr, outputPtr, &retVal,
                                         nullptr, outputflag, timeout)) {
      cmSystemTools::SetRunCommandHideConsole(hideconsole);
      cmSystemTools::Error("Generator: execution of make clean failed.");
      ostr << *outputPtr << "\nGenerator: execution of make clean failed."
           << std::endl;

      return 1;
    }
    ostr << *outputPtr;
  }

  // now build
  std::string makeCommandStr;
  std::string outputMakeCommandStr;
  bool isWatcomWMake = this->CMakeInstance->GetState()->UseWatcomWMake();
  bool needBuildOutput = isWatcomWMake;
  std::string buildOutput;
  ostr << "\nRun Build Command(s): ";

  retVal = 0;
  for (auto command = makeCommand.begin();
       command != makeCommand.end() && retVal == 0; ++command) {
    makeCommandStr = command->Printable();
    outputMakeCommandStr = command->QuotedPrintable();
    if ((command + 1) != makeCommand.end()) {
      makeCommandStr += " && ";
      outputMakeCommandStr += " && ";
    }

    ostr << outputMakeCommandStr << std::endl;
    if (!cmSystemTools::RunSingleCommand(command->PrimaryCommand, outputPtr,
                                         outputPtr, &retVal, nullptr,
                                         outputflag, timeout)) {
      cmSystemTools::SetRunCommandHideConsole(hideconsole);
      cmSystemTools::Error(
        cmStrCat("Generator: execution of make failed. Make command was: ",
                 makeCommandStr));
      ostr << *outputPtr
           << "\nGenerator: execution of make failed. Make command was: "
           << outputMakeCommandStr << std::endl;

      return 1;
    }
    ostr << *outputPtr << std::flush;
    if (needBuildOutput) {
      buildOutput += *outputPtr;
    }
  }
  ostr << std::endl;
  cmSystemTools::SetRunCommandHideConsole(hideconsole);

  // The OpenWatcom tools do not return an error code when a link
  // library is not found!
  if (isWatcomWMake && retVal == 0 &&
      buildOutput.find("W1008: cannot open") != std::string::npos) {
    retVal = 1;
  }

  return retVal;
}
```


# VTK Macro

## VTK Macro

-  [VTK File Formats](https://docs.vtk.org/en/latest/design_documents/VTKFileFormats.html).


## vtkStandardNewMacro
```cpp
vtkObjectFactory.h
// Macro to implement the standard form of the New() method.
#define vtkStandardNewMacro(thisClass)                                                             \
  thisClass* thisClass::New() { VTK_STANDARD_NEW_BODY(thisClass); }
```

## VTK_STANDARD_NEW_BODY

```cpp
// Macro to implement the body of the standard form of the New() method.
#if defined(VTK_ALL_NEW_OBJECT_FACTORY)
#define VTK_STANDARD_NEW_BODY(thisClass) VTK_OBJECT_FACTORY_NEW_BODY(thisClass)
#else
#define VTK_STANDARD_NEW_BODY(thisClass)                                                           \
  auto result = new thisClass;                                                                     \
  result->InitializeObjectBase();                                                                  \
  return result
#endif
```


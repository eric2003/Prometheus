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

vtkTypeMacro(vtkPolyData, vtkPointSet);
```
protected: const char* GetClassNameInternal() const override {
    return "vtkPolyData";
} public: typedef vtkPointSet Superclass; static vtkTypeBool IsTypeOf(const char* type) {
    if (!strcmp("vtkPolyData", type)) {
        return 1;
    } return vtkPointSet::IsTypeOf(type);
} vtkTypeBool IsA(const char* type) override {
    return this->vtkPolyData::IsTypeOf(type);
} static vtkPolyData* SafeDownCast(vtkObjectBase* o) {
    if (o && o->IsA("vtkPolyData")) {
        return static_cast<vtkPolyData*>(o);
    } return nullptr;
}  vtkPolyData* NewInstance() const {
    return vtkPolyData::SafeDownCast(this->NewInstanceInternal());
} static vtkIdType GetNumberOfGenerationsFromBaseType(const char* type) {
    if (!strcmp("vtkPolyData", type)) {
        return 0;
    } return 1 + vtkPointSet::GetNumberOfGenerationsFromBaseType(type);
} vtkIdType GetNumberOfGenerationsFromBase(const char* type) override {
    return this->vtkPolyData::GetNumberOfGenerationsFromBaseType(type);
} public: protected: vtkObjectBase* NewInstanceInternal() const override {
    return vtkPolyData::New();
} public:
```


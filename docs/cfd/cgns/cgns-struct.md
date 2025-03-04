# CGNS

## char_33

```cpp
typedef char char_33[33];
#ifdef CG_BUILD_BASESCOPE
typedef char char_66[66]; /* 32 + '/' + 32 + '\0' */
#else
typedef char char_66[33]; /* 32 + '\0' (caller's malloc compat issues) */
#endif
typedef char char_md[CG_MAX_GOTO_DEPTH*33+1]; /* ('/'+ 32)*MAX_GOTO_DEPTH + '\0' (FAMILY TREE) */
typedef char const cchar_33[33];
typedef cgsize_t cgsize6_t[6];
typedef int cgint3_t[3];
```

# size_of

```cpp
int size_of(const char_33 data_type)
{
    if (strcmp(data_type, "I4") == 0) return sizeof(int);
    if (strcmp(data_type, "I8") == 0) return sizeof(cglong_t);
    if (strcmp(data_type, "R4") == 0) return sizeof(float);
    if (strcmp(data_type, "R8") == 0) return sizeof(double);
    if (strcmp(data_type, "C1") == 0) return sizeof(char);
    if (strcmp(data_type, "X4") == 0) return 2*sizeof(float);
    if (strcmp(data_type, "X8") == 0) return 2*sizeof(double);

    cgi_error("data_type '%s' not supported by function 'size_of'",data_type);
    return CG_OK;
}
```

# cgi_adf_datatype

```cpp
const char *cgi_adf_datatype(CGNS_ENUMV(DataType_t) type)
{

    if (type == CGNS_ENUMV(Integer)) return "I4";
    if (type == CGNS_ENUMV(LongInteger)) return "I8";
    if (type == CGNS_ENUMV(RealSingle)) return "R4";
    if (type == CGNS_ENUMV(RealDouble)) return "R8";
    if (type == CGNS_ENUMV(Character))  return "C1";
    if (type == CGNS_ENUMV(ComplexSingle)) return "X4";
    if (type == CGNS_ENUMV(ComplexDouble)) return "X8";
    return "NULL";
}
```

# cgi_datatype

```cpp
CGNS_ENUMT(DataType_t) cgi_datatype(char const *adf_type)
{
    if (strncmp(adf_type, "I4", 33) == 0) return CGNS_ENUMV(Integer);
    if (strncmp(adf_type, "I8", 33) == 0) return CGNS_ENUMV(LongInteger);
    if (strncmp(adf_type, "R4", 33) == 0) return CGNS_ENUMV(RealSingle);
    if (strncmp(adf_type, "R8", 33) == 0) return CGNS_ENUMV(RealDouble);
    if (strncmp(adf_type, "C1", 33) == 0) return CGNS_ENUMV(Character);
    if (strncmp(adf_type, "X4", 33) == 0) return CGNS_ENUMV(ComplexSingle);
    if (strncmp(adf_type, "X8", 33) == 0) return CGNS_ENUMV(ComplexDouble);
    return CGNS_ENUMV(DataTypeNull);
}
```

## cgns_array

```cpp
typedef struct {            /* DataArray_t Node         */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    char_33 data_type;      /* type of data                         */
    int data_dim;           /* number of dimensions                 */
    cgsize_t dim_vals[12];  /* Size in each dimension               */
    void *data;             /* data */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    CGNS_ENUMT(DataClass_t) data_class; /* Class of data                        */
    cgns_units *units;      /* ptrs to in-memory copy of units      */
    cgns_exponent *exponents;/* ptrs to in-memory copy of exponents */
    cgns_conversion *convert;/* ptrs to in-memory copy of convert   */
    cgsize_t range[2];       /* index range for currently stored data*/
} cgns_array;
```

## cgns_bcdata

```cpp
typedef struct {            /* BCData_t node            */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    int narrays;            /* no. of global data arrays        */
    cgns_array *array;      /* ptrs to in-mem. copy of local data   */
    CGNS_ENUMT(DataClass_t) data_class; /* Class of data                        */
    cgns_units *units;      /* Dimensional Units                    */
    int nuser_data;         /* number of user defined data nodes    */  /* V2.1 */
    cgns_user_data *user_data; /* User defined data.        */  /* V2.1 */
} cgns_bcdata;
```

## cgns_user_data

```cpp
typedef struct cgns_user_data_s /* UserDefinedData_t Node       */
{
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    int narrays;            /* No of DataArray_t nodes              */
    cgns_array *array;      /* ptrs to in-mem. copy of Data Arrays  */
    CGNS_ENUMT(DataClass_t) data_class; /* Class of data                        */
    cgns_units *units;      /* ptrs to in-memory copy of units      */
    CGNS_ENUMT(GridLocation_t) location;/* Grid location where data is recorded */
    char_md family_name;    /* Family name              */            /* ** FAMILY TREE ** */
    int ordinal;            /* option to specify a rank     */
    cgns_ptset *ptset;      /* PointList, PointRange                */
    int nuser_data;         /* number of user defined data nodes    */
    struct cgns_user_data_s *user_data; /* User defined data.   */
    /* CPEX 0034 */
    int nfamname;
    cgns_famname *famname;
} cgns_user_data;
```

## cgns_ptset

```cpp
typedef struct {            /* IndexArray/Range_t Node      */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    CGNS_ENUMT(PointSetType_t) type;  /* PointList, PointRange, ...       */
    char_33 data_type;      /* type of data                         */
    cgsize_t npts;          /* number of points to define the patch */
    cgsize_t size_of_patch; /* nr of nodes or elements in patch     */
    void *data;             /* data (only loaded in MODE_MODIFY     */
} cgns_ptset;
```

## cgns_dataset

```cpp
typedef struct {            /* BCDataSet_t node         */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    CGNS_ENUMT(BCType_t) type;/* type of boco                         */
    cgns_bcdata *dirichlet; /* ptrs to in-mem. copy of DirichletData*/
    cgns_bcdata *neumann;   /* ptrs to in-mem. copy of NeumannData  */
    cgns_state *state;      /* ptrs to in-memory copies of Ref.state*/
    CGNS_ENUMT(DataClass_t) data_class; /* Class of data                        */
    cgns_units *units;      /* Dimensional Units                    */
    int nuser_data;         /* number of user defined data nodes    */  /* V2.1 */
    cgns_user_data *user_data; /* User defined data.        */  /* V2.1 */
    CGNS_ENUMT(GridLocation_t) location;/* Grid location where data is recorded */
    cgns_ptset *ptset;      /* PointList, PointRange                */
} cgns_dataset;
```

## cgns_boco

```cpp
typedef struct {            /* BC_t node                */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    CGNS_ENUMT(GridLocation_t) location;/* Grid location                        */
    CGNS_ENUMT(BCType_t) type;          /* type of boco                         */
    cgns_ptset *ptset;      /* PointList, PointRange                */
    char_md family_name;    /* Family name for the bound. patch */  /* ** FAMILY TREE ** */
    int *Nindex;            /* Inward Normal Index          */
    double index_id;        /* ADF ID number of InwardNormalIndex   */
    cgns_array *normal;     /* Inward Normal List           */
    int ndataset;           /* no of BCDataSet nodes        */
    cgns_dataset *dataset;  /* ptrs to in-mem. copy of BCDataSet    */
    cgns_bprop *bprop;      /* ptrs to in-mem. copy of BCProperty_t */  /* V2.2 */
    cgns_state *state;      /* ptrs to in-memory copies of Ref.state*/
    CGNS_ENUMT(DataClass_t) data_class; /* Class of data                        */
    cgns_units *units;      /* Dimensional Units                    */
    int ordinal;            /* option to define a rank      */
    int nuser_data;         /* number of user defined data nodes    */  /* V2.1 */
    cgns_user_data *user_data; /* User defined data.        */  /* V2.1 */
    /* CPEX 0034 */
    int nfamname;
    cgns_famname *famname;
} cgns_boco;
```

cgns_section
```cpp
typedef struct {            /* Elements_t node                      */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    CGNS_ENUMT(ElementType_t) el_type;  /* element type             */
    int el_bound;           /* nr of bound. el. if sorted, else 0   */
    cgsize_t range[2];      /* index of first and last element  */
    int *rind_planes;       /* No. of rind-elements                 */
    cgns_array *connect;    /* ElementConnectivity                  */
    cgns_array *connect_offset; /* ElementStartOffset               */
    cgns_array *parelem;    /* ParentElements                       */
    cgns_array *parface;    /* ParentElementsPosition               */
    int nuser_data;         /* number of user defined data nodes    */  /* V2.1 */
    cgns_user_data *user_data; /* User defined data.        */  /* V2.1 */
} cgns_section;
```

ElementStartOffset
```
typedef struct {            /* Elements_t node                      */
    char_33 name;           /* name of ADF node                     */
    double id;              /* ADF ID number (address) of node      */
    cgns_link *link;        /* link information         */  /* V2.1 */
    int in_link;            /* set if child of a linked node        */
    int ndescr;             /* no of Descriptor_t nodes             */
    cgns_descr *descr;      /* ptrs to in-memory copy of descr      */
    CGNS_ENUMT(ElementType_t) el_type;  /* element type             */
    int el_bound;           /* nr of bound. el. if sorted, else 0   */
    cgsize_t range[2];      /* index of first and last element  */
    int *rind_planes;       /* No. of rind-elements                 */
    cgns_array *connect;    /* ElementConnectivity                  */
    cgns_array *connect_offset; /* ElementStartOffset               */
    cgns_array *parelem;    /* ParentElements                       */
    cgns_array *parface;    /* ParentElementsPosition               */
    int nuser_data;         /* number of user defined data nodes    */  /* V2.1 */
    cgns_user_data *user_data; /* User defined data.        */  /* V2.1 */
} cgns_section;
```

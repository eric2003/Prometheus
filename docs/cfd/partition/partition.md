# Partition

## Article link

-  [CFD General Notation System](https://cgns.github.io/).

## CGNS Transform

-  [Transform](https://cgns.github.io/CGNS_docs_current/sids/cnct.html#Transform).

```
Default names for the Descriptor_t and UserDefinedData_t lists are as shown; users may choose other legitimate names.
Legitimate names must be unique within a given instance of GridConnectivity1to1_t 
and shall not include the names GridConnectivityProperty, PointRange, PointRangeDonor, Transform, or Ordinal.
If Transform is absent, then its default value is [+1,+2,+3].
ZoneDonorName must be equated to a 32 character maximum zone identifier within the current CGNS database 
(i.e., it must be equal to one of the Zone_t identifiers contained in the current CGNSBase_t entity) 
or to a 65 character maximum zone identifier in another base of the same CGNS tree; 
in that case the ZoneDonorName string has the pattern base/zone, only one single "/" character is allowed, 
and neither basename nor zonename should be empty. ZoneDonorName should also not be empty.
Beginning indices of PointRange and PointRangeDonor must coincide (i.e., must be the same physical point); 
ending indices of PointRange and PointRangeDonor must also coincide.
Elements of Transform must be signed integers in the range -IndexDimension, ..., +IndexDimension; 
element magnitudes may not be repeated. In 3-D allowed elements are 0, ±1, ±2, ±3.
```

```
Transform contains a short-hand notation for the transformation matrix describing the relation between indices of the two adjacent zones.
The transformation matrix itself has rank IndexDimension and contains elements +1, −1 and 0; 
it is orthonormal and its inverse is its transpose. 
The transformation matrix (T) works as follows: 
If Index1 and Index2 are the indices of a given point on the interface, 
where Index1 is in the current zone and Index2 is in the adjacent zone, then their relationship is,

        Index2 = T.(Index1 - Begin1) + Begin2 

        Index1 = Transpose[T].(Index2 - Begin2) + Begin1 
where the "." notation indicates matrix-vector multiply. 
Begin1 and End1 are the subrange indices contained in PointRange, 
and Begin2 and End2 are the subrange indices contained in PointRangeDonor.	
```

$\mathbf{Index2}=\mathbf{T}\cdot (\mathbf{Index1}-\mathbf{Begin1})+\mathbf{Begin2}$

$\mathbf{Index1}=\mathbf{T}^{T} \cdot (\mathbf{Index2}-\mathbf{Begin2})+\mathbf{Begin1}$

```
The short-hand notation used in Transform is as follows: 
Each element shows the image in the adjacent zone's face of a positive index increment in the current zone's face. 
The first element is the image of a positive increment in i; 
the second element is the image of an increment in j; 
and the third (in 3-D) is the image of an increment in k on the current zone's face. 
For 3-D, the transformation matrix T is constructed from 
Transform = [±a, ±b, ±c] as follows:
```

$$\mathbf{T}=\begin{bmatrix}
  \mathbf{sgn}(a)\mathbf{del}(a-1)& \mathbf{sgn}(b)\mathbf{del}(b-1) & \mathbf{sgn}(c)\mathbf{del}(c-1)\\
  \mathbf{sgn}(a)\mathbf{del}(a-2)& \mathbf{sgn}(b)\mathbf{del}(b-2) & \mathbf{sgn}(c)\mathbf{del}(c-2)\\
  \mathbf{sgn}(a)\mathbf{del}(a-3)& \mathbf{sgn}(b)\mathbf{del}(b-3) & \mathbf{sgn}(c)\mathbf{del}(c-3)
\end{bmatrix}$$

```
where sgn(x) ≡ +1 if x ≥ 0, and −1 if x < 0, 
and del(x−y) ≡ +1 if |x| = |y|, and 0 otherwise.
For example, Transform = [−2, +3, +1] gives the transformation matrix,
```

$$\mathbf{T}=\begin{bmatrix}
  0& 0 & +1\\
  -1& 0 & 0\\
  0& +1 & 0
\end{bmatrix}$$

```
For establishing relationships between adjacent and current zone indices lying on the interface itself, 
one of the elements of Transform is superfluous since one component of both interface indices remains constant. 
It is therefore acceptable to set that element of Transform to zero.
If the transformation matrix is used for continuation of computational coordinates into the adjacent zone 
(e.g., to find the location of a rind point in the adjacent zone), then all elements of Transform are needed. 
If the above mentioned superfluous element is set to zero, 
it can be easily regenerated from PointRange and PointRangeDonor and the grid sizes of the two zones. 
This is done by determining the faces represented by PointRange and PointRangeDonor (i.e., i-min, i-max, j-min, etc.). 
If one is a minimum face and the other a maximum face, 
then the sign of the missing element in Transform is "+", 
and the value of the missing element in the transformation matrix (T) is +1. 
If the faces are both minimums or are both maximums, the sign is "−". 
Next, the position and magnitude of the element in Transform, 
and hence the row and column in the transformation matrix, 
is given by the combinations of i, j and k faces for the two. 
For example, if PointRange represents a j-min or j-max face 
and PointRangeDonor represents an i-min or i-max face, 
then the missing element's position in Transform is 2 
and its magnitude is 1 (i.e., Transform = [*, ±1, *]).

Note also that the transform matrix and the two index pairs overspecify the interface patch. 
For example, End2 can be obtained from Transform, Begin1, End1 and Begin2.
```


## Partition

$$\begin{align}  
ni &= 5 \\
nj &= 11 \\
nk &= 9  \\
\end{align}$$

## Example

Left zone (id 0)

$$\begin{matrix}
ni &=& 5 \\
nj &=& 11 \\
nk &=& 9
\end{matrix}$$

```
faceDirection = 0
```

$$\mathbf{Begin1}=\begin{bmatrix}5\\1\\1 \end{bmatrix} \ \ 
\mathbf{End1}=\begin{bmatrix}5\\11\\9 \end{bmatrix}$$

Right zone (id 1)

$$\begin{matrix}
ni &=& 5 \\
nj &=& 11 \\
nk &=& 9
\end{matrix}$$

```
faceDirection = 0
```

$$\mathbf{Begin2}=\begin{bmatrix}1\\1\\1 \end{bmatrix} \ \ 
\mathbf{End2}=\begin{bmatrix}1\\11\\9 \end{bmatrix}$$

$$\mathbf{End2}-\mathbf{Begin2}=\mathbf{T}\cdot (\mathbf{End1}-\mathbf{Begin1})$$

case1:

```
Transform = [+1, +2, +3]
```

$$\mathbf{T}=\begin{bmatrix}
  +1&  0 & 0\\
  0& +1 & 0\\
  0& 0 & +1
\end{bmatrix}$$

$$\begin{bmatrix}0\\10\\8 \end{bmatrix}=
\begin{bmatrix}
  +1&  0 & 0\\
  0& +1 & 0\\
  0& 0 & +1
\end{bmatrix}
\begin{bmatrix}0\\10\\8 \end{bmatrix}$$

case2:

```
Transform = [+1, -2, -3]
```

$$\mathbf{Begin2}=\begin{bmatrix}1\\11\\9 \end{bmatrix} \ \ 
\mathbf{End2}=\begin{bmatrix}1\\1\\1\end{bmatrix}$$

$$\mathbf{T}=\begin{bmatrix}
  +1&  0 & 0\\
  0& -1 & 0\\
  0& 0 & -1
\end{bmatrix}$$

$$\begin{bmatrix}0\\-10\\-8 \end{bmatrix}=
\begin{bmatrix}
  +1&  0 & 0\\
  0& -1 & 0\\
  0& 0 & -1
\end{bmatrix}
\begin{bmatrix}0\\10\\8 \end{bmatrix}$$

case3:

```
Transform = [+1, +3, +2]
```

$$\mathbf{T}=\begin{bmatrix}
  \mathbf{sgn}(a)\mathbf{del}(a-1)& \mathbf{sgn}(b)\mathbf{del}(b-1) & \mathbf{sgn}(c)\mathbf{del}(c-1)\\
  \mathbf{sgn}(a)\mathbf{del}(a-2)& \mathbf{sgn}(b)\mathbf{del}(b-2) & \mathbf{sgn}(c)\mathbf{del}(c-2)\\
  \mathbf{sgn}(a)\mathbf{del}(a-3)& \mathbf{sgn}(b)\mathbf{del}(b-3) & \mathbf{sgn}(c)\mathbf{del}(c-3)
\end{bmatrix}$$

$$\mathbf{T}=\begin{bmatrix}
  +1&  0 & 0\\
  0& 0 & +1\\
  0& +1 & 0
\end{bmatrix}$$

$$\mathbf{Begin2}=\begin{bmatrix}1\\1\\1\end{bmatrix} \ \ 
\mathbf{End2}=\begin{bmatrix}1\\9\\11\end{bmatrix}$$

$$\begin{bmatrix}0\\8\\10 \end{bmatrix}=
\begin{bmatrix}
  +1&  0 & 0\\
  0& 0 & +1\\
  0& +1 & 0
\end{bmatrix}
\begin{bmatrix}0\\10\\8 \end{bmatrix}$$

case4:

```
Transform = [+1, +2]
```

$$\mathbf{T}=\begin{bmatrix}
  +1&  0 \\
  0& +1 \\
\end{bmatrix}$$

$$\mathbf{Begin1}=\begin{bmatrix}3\\1\end{bmatrix} \ \ 
\mathbf{End1}=\begin{bmatrix}3\\5\end{bmatrix}$$

$$\mathbf{Begin2}=\begin{bmatrix}1\\1\end{bmatrix} \ \ 
\mathbf{End2}=\begin{bmatrix}1\\5\end{bmatrix}$$


$\mathbf{Index2}=\mathbf{T}\cdot (\mathbf{Index1}-\mathbf{Begin1})+\mathbf{Begin2}$

overlapRegion

$$\mathbf{newBegin1}=\begin{bmatrix}3\\3\end{bmatrix} \ \ 
\mathbf{newEnd1}=\begin{bmatrix}3\\5\end{bmatrix}$$

$\mathbf{newBegin2}=\mathbf{T}\cdot (\mathbf{newBegin1}-\mathbf{Begin1})+\mathbf{Begin2}$

$\mathbf{newEnd2}=\mathbf{T}\cdot (\mathbf{newEnd1}-\mathbf{Begin1})+\mathbf{Begin2}$

$$\mathbf{oriPoint}=\begin{bmatrix}0\\2\end{bmatrix}$$

$$\mathbf{newBegin1}-\mathbf{Begin1}=\begin{bmatrix}3\\3\end{bmatrix}-\begin{bmatrix}3\\1\end{bmatrix} 
=\begin{bmatrix}0\\2\end{bmatrix}=\mathbf{oriPoint}$$

$$\mathbf{newBegin2}=\mathbf{T}\cdot(\mathbf{newBegin1}-\mathbf{Begin1})+\mathbf{Begin2}=
\begin{bmatrix}0\\2\end{bmatrix}+\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}1\\3\end{bmatrix}$$

$$\mathbf{newEnd2}=\mathbf{T}\cdot(\mathbf{newEnd1}-\mathbf{Begin1})+\mathbf{Begin2}=
\begin{bmatrix}0\\4\end{bmatrix}+\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}1\\5\end{bmatrix}$$

```
由于(newBegin1,newEnd1)只是(Begin1,End1)的一部分，两者一般情况下并不相等。
```

$$
\begin{matrix}
\mathbf{newBegin2}=\mathbf{T}\cdot (\mathbf{newBegin1}-\mathbf{Begin1})+\mathbf{Begin2}\\
\mathbf{newIndex2}=\mathbf{T}\cdot (\mathbf{newIndex1}-\mathbf{Begin1})+\mathbf{Begin2}\\
\mathbf{newIndex2}-\mathbf{newBegin2}=\mathbf{T}\cdot (\mathbf{newIndex1}-\mathbf{newBegin1})\\
\mathbf{newIndex2}=\mathbf{T}\cdot (\mathbf{newIndex1}-\mathbf{newBegin1})+\mathbf{newBegin2}\\
\end{matrix}
$$

$$
\begin{matrix}
\mathbf{newIndex1}^{'}=\mathbf{newIndex1}-\mathbf{oriPoint}\\
\mathbf{newBegin1}^{'}=\mathbf{newBegin1}-\mathbf{oriPoint}\\
\mathbf{newIndex1}^{'}-\mathbf{newBegin1}^{'}=\mathbf{newIndex1}-\mathbf{newBegin1}\\
\mathbf{newIndex2}=\mathbf{T}\cdot (\mathbf{newIndex1}-\mathbf{newBegin1})+\mathbf{newBegin2}\\
\mathbf{newIndex2}=\mathbf{T}\cdot (\mathbf{newIndex1}^{'}-\mathbf{newBegin1}^{'})+\mathbf{newBegin2}\\
\end{matrix}
$$

$$
\mathbf{newIndex1}\in \left [ \mathbf{newBegin1},\mathbf{newEnd1} \right ]
$$

$$
\mathbf{newIndex1}\in \left ( \begin{bmatrix}3\\3\end{bmatrix},\begin{bmatrix}3\\5\end{bmatrix} \right )
$$

$$
\begin{matrix}
\mathbf{newIndex1}^{'}=\mathbf{newIndex1}-\mathbf{oriPoint}\\
\mathbf{newIndex1}\in \left ( \begin{bmatrix}3\\3\end{bmatrix},\begin{bmatrix}3\\5\end{bmatrix} \right )\\
\mathbf{newIndex1}^{'}\in \left ( \begin{bmatrix}3\\3\end{bmatrix}-\begin{bmatrix}0\\2\end{bmatrix},\begin{bmatrix}3\\5\end{bmatrix}-\begin{bmatrix}0\\2\end{bmatrix} \right )\\
\mathbf{newIndex1}^{'}\in \left ( \begin{bmatrix}3\\1\end{bmatrix},\begin{bmatrix}3\\3\end{bmatrix} \right )\\
\end{matrix}
$$

case5:

```
Transform = [-1, +2]

  D+++++C c+++++d
  +     + +     +
  +  0  + +  1  + 
  +     + +     +
  A+++++B b+++++a
  
  D(1,5) C(3,5)  c(3,5) d(1,5)
  A(1,1) B(3,1)  b(3,1) a(1,1)
```

$$\mathbf{T}=\begin{bmatrix}
  \mathbf{sgn}(a)\mathbf{del}(a-1)& \mathbf{sgn}(b)\mathbf{del}(b-1) & \mathbf{sgn}(c)\mathbf{del}(c-1)\\
  \mathbf{sgn}(a)\mathbf{del}(a-2)& \mathbf{sgn}(b)\mathbf{del}(b-2) & \mathbf{sgn}(c)\mathbf{del}(c-2)\\
  \mathbf{sgn}(a)\mathbf{del}(a-3)& \mathbf{sgn}(b)\mathbf{del}(b-3) & \mathbf{sgn}(c)\mathbf{del}(c-3)
\end{bmatrix}$$

$$\mathbf{T}=\begin{bmatrix}
  \mathbf{sgn}(a)\mathbf{del}(a-1)& \mathbf{sgn}(b)\mathbf{del}(b-1)\\
  \mathbf{sgn}(a)\mathbf{del}(a-2)& \mathbf{sgn}(b)\mathbf{del}(b-2)
\end{bmatrix}$$

```
where sgn(x) ≡ +1 if x ≥ 0, and −1 if x < 0, 
and del(x−y) ≡ +1 if |x| = |y|, and 0 otherwise.
Transform = [-1, +2]
a=-1,b=+2
sgn(a)=sgn(-1)=-1
sgn(b)=sgn(+2)=1
del(a-1)=del(a,-1)=del(-1,-1)=1
del(a-2)=del(a,-2)=del(-1,-2)=0
del(b-1)=del(b,-1)=del(+2,-1)=0
del(b-2)=del(b,-2)=del(+2,-2)=1
( -1*1 1*0 )
( -1*0 1*1 )
```

$$\mathbf{T}=\begin{bmatrix}
  -1&  0 \\
  0& +1 \\
\end{bmatrix}$$

$$\mathbf{Begin1}=\begin{bmatrix}3\\1\end{bmatrix} \ \ 
\mathbf{End1}=\begin{bmatrix}3\\5\end{bmatrix}$$

$$\mathbf{Begin2}=\begin{bmatrix}3\\1\end{bmatrix} \ \ 
\mathbf{End2}=\begin{bmatrix}3\\5\end{bmatrix}$$

$$\mathbf{Index2}=\mathbf{T}\cdot (\mathbf{Index1}-\mathbf{Begin1})+\mathbf{Begin2}$$

$$\begin{bmatrix}0\\4 \end{bmatrix}=
\begin{bmatrix}
  -1&  0 \\
  0& +1 \\
\end{bmatrix}
\begin{bmatrix}0\\4 \end{bmatrix}$$



overlapRegion
```
0. Begin1=(3,1),End1=(3,5)
   Begin2=(1,1),End2=(1,5)
   T=( +1  0  )
     (  0, +1 )
1. overlapRegion=(newBegin1,newEnd1)<=(Begin1,End1)
   newBegin1=(3,3), newEnd1=(3,5)
2. newBegin2=T*(newBegin1-Begin1)+Begin2, newBegin2=(1,3)
   newEnd2=T*(newEnd1-Begin1)+Begin2, newEnd2=(1,5)
3. oriPoint=(0,2)
   newIndex1_bar = newIndex1 - oriPoint
   newBegin1_bar = newBegin1 - oriPoint, (3,3)-(0,2)=(3,1)
   newEnd1_bar   = newEnd1   - oriPoint, (3,5)-(0,2)=(3,3)
```

void CreateInterfaceBc( SplitZone * zoneL, SplitZone * zoneR )
```
    RangeRegion globalBoxL, globalBoxR, globalInterfaceRegion;
    zoneR     (1,5)   (3,5)
	          (1,3)   (3,3)
    Interface (1,3)   (3,3)
    zoneL     (1,3)   (3,3)
	          (1,1)   (3,1)
    zoneL->GetZoneGlobalBox( globalBoxL );
    zoneR->GetZoneGlobalBox( globalBoxR );
	globalBoxL: start (1,1) end (3,3)
	globalBoxR: start (1,3) end (3,5)
	globalInterfaceRegion start (1,3) end (3,3)
	
    zoneL->GetZoneLocalBox( globalInterfaceRegion, localInterfaceRegionL );
    zoneR->GetZoneLocalBox( globalInterfaceRegion, localInterfaceRegionR );	
	
	localInterfaceRegionL start (1,3) end (3,3)
	localInterfaceRegionR start (1,1) end (3,1)
```

mesh
```
1. zone(0,1)
+++++++++++++           D+++++C+++++F
+     +     +           +     +     +
+  0  +  1  +           +  0  +  1  + 
+     +     +           +     +     +
+++++++++++++           A+++++B+++++E

2.zone(0)->zone(2,3)
+++++++++++++           D+++++C+++++F
+  3  +     +           +  3  +     +
+++++++  1  +           G+++++H  1  +
+  2  +     +           +  2  +     +
+++++++++++++           A+++++B+++++E

3.zone(1)->zone(4,5)
+++++++++++++          D+++++C+++++F
+  3  +  5  +          +  3  +  5  +
+++++++++++++          G+++++H+++++I
+  2  +  4  +          +  2  +  4  +
+++++++++++++          A+++++B+++++E


```

index
```
1. zone(0,1)
+++++++++++++           D+++++C,c+++++F
+     +     +           +     +,+     +
+  0  +  1  +           +  0  +,+  1  + 
+     +     +           +     +,+     +
+++++++++++++           A+++++B,b+++++E
D(1,5) C(3,5) c(1,5) F(3,5)
A(1,1) B(3,1) b(1,1) E(3,1)
Interface:
BC:start(3,1) end(3,5)

2.zone(0)->zone(2,3)
+++++++++++++           D+++++C,c+++++F
+  3  +     +           +  3  +,+     +
+++++++  1  +           G+++++H,h  1  +
+  2  +     +           +  2  +,+     +
+++++++++++++           A+++++B,b+++++E
D(1,5) C(3,5) c(1,5) F(3,5)
G(1,3) H(3,3) h(1,3)
A(1,1) B(3,1) b(1,1) E(3,1)

zone(3)
global        local
(1,5)+(3,5)  (1,3)+(3,3)
  +  3  +      +  3  +
(1,3)+(3,3)  (1,1)+(3,1)
zone(2)
global        local
(1,3)+(3,3)  (1,3)+(3,3)
  +  2  +      +  2  +
(1,1)+(3,1)  (1,1)+(3,1)

zone(1)
global     
(1,5)+(3,5)
  +     +  
(1,3) 1 +  
  +     +  
(1,1)+(3,1)

Interface:
BC:start(3,1) end(3,5)
BH:start(3,1) end(3,3) local:start(3,1) end(3,3)
HC:start(3,3) end(3,5) local:start(3,1) end(3,3)

3.zone(1)->zone(4,5)
+++++++++++++          D+++++C+++++F
+  3  +  5  +          +  3  +  5  +
+++++++++++++          G+++++H+++++I
+  2  +  4  +          +  2  +  4  +
+++++++++++++          A+++++B+++++E

```

SplitZone * Partition::Split( SplitZone * zone, double nCell )
```
SplitZone * Partition::Split( SplitZone * zone, double nCell )
{
    SplitZone * zoneL = new SplitZone();
    zoneL->SetParentAndChild( zone );

    SplitZone * zoneR = new SplitZone();
    zoneR->SetParentAndChild( zone );

    //Remove the original block from the UnsignedGroup
    this->RemoveZoneFromUnsignedGroup( zone );

    this->AddNewZone( zoneL );
    this->AddNewZone( zoneR );

    zone->Split( zoneL, zoneR, nCell );

    return zoneL;
}
```

void SplitZone::Split( SplitZone *& zoneL, SplitZone *& zoneR, double nCell )
```
void SplitZone::Split( SplitZone *& zoneL, SplitZone *& zoneR, double nCell )
{
    //Find the longest axis
    int axisNeedSplit = this->FindAxisNeedSplit();
    int iSplit        = this->FindSplitPosition( axisNeedSplit, nCell );

    zoneL->SetLeftDimension( this->dimInfo.dimList, axisNeedSplit, iSplit );
    zoneR->SetRightDimension( this->dimInfo.dimList, axisNeedSplit, iSplit );

    zoneL->CreateBcFromParent();
    zoneR->CreateBcFromParent();
    
    CreateInterfaceBc( zoneL, zoneR );
}
```

void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
```
void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
{
    InterfaceSplitBc * interfaceSplitBc = new InterfaceSplitBc();
    this->interfaceSplitBcList.push_back( interfaceSplitBc );
	
	this->zoneIndex : 4
	overlapRegion: start (1,1) end (1,3)
	parentInterfaceSplitBc->zone : 1
	parentInterfaceSplitBc->donor_zone : 0

    interfaceSplitBc->region = overlapRegion;
    interfaceSplitBc->zone = this;
    interfaceSplitBc->transform = parentInterfaceSplitBc->transform;
    interfaceSplitBc->CopyMatrix( parentInterfaceSplitBc );
    RangeRegion subDonorRegion( Dim::dim );
    parentInterfaceSplitBc->CalcSubDonorRegion( overlapRegion, subDonorRegion );
    interfaceSplitBc->ChangeRegionToLocalCoordinate();
    interfaceSplitBc->donor_region = subDonorRegion;
	
	subDonorRegion: start (3,1) end (3,3)

    interfaceSplitBc->donor_zone = parentInterfaceSplitBc->donor_zone;

    SplitZone * donor_zone = interfaceSplitBc->donor_zone;
    interfaceSplitBc->donor_bc = donor_zone->FindDonorInterface( interfaceSplitBc );
    int kkk = 1;
}
```

data
```
subDonorRegion =
start:(3,1)
end  :(3,3)
 iChild = 0 nChild = 2
 zoneIndex = 2
 iInter = 0
interfaceSplitBc local =
start:(3,1)
end  :(3,3)
interfaceSplitBc global =
global start:(3,1)
global end  :(3,3)
 iInter = 1
interfaceSplitBc local =
start:(1,3)
end  :(3,3)
interfaceSplitBc global =
global start:(1,3)
global end  :(3,3)
 iChild = 1 nChild = 2
 zoneIndex = 3
 iInter = 0
interfaceSplitBc local =
start:(3,1)
end  :(3,3)
interfaceSplitBc global =
global start:(3,3)
global end  :(3,5)
 iInter = 1
interfaceSplitBc local =
start:(1,1)
end  :(3,1)
interfaceSplitBc global =
global start:(1,3)
global end  :(3,3)
```

interface : zone(4)->zone(2)
```
interface : zone(4)->zone(2)
+++++++++++++          D+++++C+++++F
+  3  +  5  +          +  3  +  5  +
+++++++++++++          G+++++H+++++I
+  2  +  4  +          +  2  +  4  +
+++++++++++++          A+++++B+++++E

zone->zoneIndex = 1
zone->Split( zoneL, zoneR, nCell );
testprj.exe!SplitZone::Split(SplitZone * & zoneL, SplitZone * & zoneR, double nCell) 行 773	C++
testprj.exe!SplitZone::CreateBcFromParent() 行 781	C++
zoneL->CreateBcFromParent();
zoneR->CreateBcFromParent();
zone split to zoneL, zoneR
zoneL : zoneIndex = 4; parent zone: zoneIndex = 1;
zoneR : zoneIndex = 5; parent zone: zoneIndex = 1;
testprj.exe!SplitZone::CreateInterfaceBcFromParent() 行 826	C++
void SplitZone::CreateInterfaceBcFromParent()
{
    int nInterfaceSplitBcs = this->parent->interfaceSplitBcList.size();

    for ( int iInterfaceSplitBcs = 0; iInterfaceSplitBcs < nInterfaceSplitBcs; ++ iInterfaceSplitBcs )
    {
        InterfaceSplitBc * parentInterfaceSplitBc = this->parent->interfaceSplitBcList[ iInterfaceSplitBcs ];

        this->CreateInterfaceBcFromParent( parentInterfaceSplitBc );
    }
}

this->CreateInterfaceBcFromParent( parentInterfaceSplitBc, overlapRegion );

void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
{
    this : zoneIndex = 4; 
	parentInterfaceSplitBc : zoneIndex = 1; donor_zone zoneIndex = 0;
    InterfaceSplitBc * interfaceSplitBc = new InterfaceSplitBc();
    this->interfaceSplitBcList.push_back( interfaceSplitBc );
	
	overlapRegion: start (1,1) end (1,3)

    interfaceSplitBc->region = overlapRegion;
    interfaceSplitBc->zone = this; zoneIndex = 4; 
	
    interfaceSplitBc->transform = parentInterfaceSplitBc->transform;
    interfaceSplitBc->CopyMatrix( parentInterfaceSplitBc );
    RangeRegion subDonorRegion( Dim::dim );
    parentInterfaceSplitBc->CalcSubDonorRegion( overlapRegion, subDonorRegion );
	
	subDonorRegion: start (3,1) end (3,3)
	
    interfaceSplitBc->ChangeRegionToLocalCoordinate();
    interfaceSplitBc->donor_region = subDonorRegion;
    SplitZone * donor_zone = parentInterfaceSplitBc->donor_zone;
	parentInterfaceSplitBc->donor_zone : zoneIndex = 0;
	donor_zone->zoneIndex = 0 ->child : zoneIndex = 2; zoneIndex = 3;
	
    +++++++++++++          D+++++C+++++F
    +  3  +  5  +          +  3  +  5  +
    +++++++++++++          G+++++H+++++I
    +  2  +  4  +          +  2  +  4  +
    +++++++++++++          A+++++B+++++E	
	
    +++++++++++++          D+++++C,c+++++F
    +     +     +          +     +,+     +
    +  0  +  1  +          +  0  +,+  1  + 
    +     +     +          +     +,+     +
    +++++++++++++          A+++++B,b+++++E	
	
    if ( donor_zone->child.size() > 0 )
    {
        InterfaceInfo interfaceInfo;
        donor_zone->GetChildDonorRegion( subDonorRegion, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
		
		interfaceSplitBc:(zoneIndex=4)
		interfaceSplitBc: B-H (B-C)
		interfaceSplitBc->zone->zoneIndex = 4;
		interfaceSplitBc->donor_zone->zoneIndex = 2;
		interfaceSplitBc->donor_bc:(zoneIndex=2)
		InterfaceSplitBc * zone2_donor_bc = interfaceSplitBc->donor_bc;
		zone2_donor_bc: (zoneIndex=2)
		interfaceSplitBc->donor_bc->zone->zoneIndex = 2;
		interfaceSplitBc->donor_bc->donor_zone->zoneIndex = 1;
		zone2_donor_bc->zone->zoneIndex = 2;
		zone2_donor_bc->donor_zone->zoneIndex = 1;
		zone2_donor_bc->donor_bc->zoneIndex = 1;
		
        //compatibility
        InterfaceSplitBc * donor_bc = interfaceSplitBc->donor_bc;
        SplitZone * donor_zone = interfaceSplitBc->donor_zone;
        if ( interfaceSplitBc->zone != donor_bc->donor_zone )
        {
            donor_bc->donor_zone = interfaceSplitBc->zone;
        }
    }
    else
    {
        InterfaceInfo interfaceInfo;
        donor_zone->FindDonorInterface( interfaceSplitBc, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
    }
}

```

interface : zone(5)->zone(3)
```
    +++++++++++++          D+++++C+++++F
    +  3  +  5  +          +  3  +  5  +
    +++++++++++++          G+++++H+++++I
    +  2  +  4  +          +  2  +  4  +
    +++++++++++++          A+++++B+++++E
void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
{
    InterfaceSplitBc * interfaceSplitBc = new InterfaceSplitBc();
    this->interfaceSplitBcList.push_back( interfaceSplitBc );
	
	overlapRegion: start (1,3) end (1,5)

    interfaceSplitBc->region = overlapRegion;
    interfaceSplitBc->zone = this;
	
	interfaceSplitBc->zone : zoneIndex = 5;
	interfaceSplitBc->region : start (1,3) end (1,5)
	
    interfaceSplitBc->transform = parentInterfaceSplitBc->transform;
    interfaceSplitBc->CopyMatrix( parentInterfaceSplitBc );
    RangeRegion subDonorRegion( Dim::dim );
    parentInterfaceSplitBc->CalcSubDonorRegion( overlapRegion, subDonorRegion );
    interfaceSplitBc->ChangeRegionToLocalCoordinate();
	
	interfaceSplitBc->region : start (1,1) end (1,3)
	
    interfaceSplitBc->donor_region = subDonorRegion;
	
	subDonorRegion: start (3,3) end (3,5)
	
    SplitZone * parent_donor_zone = parentInterfaceSplitBc->donor_zone;
    std::cout << " parentInterfaceSplitBc->zone->zoneIndex " << parentInterfaceSplitBc->zone->zoneIndex << "\n";
    std::cout << " parentInterfaceSplitBc->donor_zone->zoneIndex " << parent_donor_zone->zoneIndex << "\n";
	
	parentInterfaceSplitBc->donor_zone : zoneIndex = 0;
	donor_zone->zoneIndex = 0 ->child : zoneIndex = 2; zoneIndex = 3;	
	
    if ( parent_donor_zone->child.size() > 0 )
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->GetChildDonorRegion( subDonorRegion, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
		
		interfaceSplitBc:(zoneIndex=5)
		interfaceSplitBc: H-C (B-C)
		
        //compatibility
        InterfaceSplitBc * donor_bc = interfaceSplitBc->donor_bc;
        SplitZone * donor_zone = interfaceSplitBc->donor_zone;
		
		donor_bc->donor_zone: (zoneIndex=1)
		donor_zone : (zoneIndex=3)
		
        D+++++C+++++F
        +  3  +  5  +
        G+++++H+++++I
        +  2  +  4  +
        A+++++B+++++E
		
        if ( interfaceSplitBc->zone != donor_bc->donor_zone )
        {
            donor_bc->donor_zone = interfaceSplitBc->zone;
			donor_bc->donor_region = interfaceSplitBc->region;
			donor_bc->donor_zone   : (zoneIndex=5)
			donor_bc->zone         : (zoneIndex=3)
			donor_bc->region       : start (3,1) end (3,3)
			donor_bc->donor_region : start (1,3) end (1,5)
        }
    }
    else
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->FindDonorInterface( interfaceSplitBc, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
    }
}
```

```
original
    +++++++++++++          D+++++C+++++F
    +  3  +  5  +          +  3  +  5  +
    +++++++++++++          G+++++H+++++I
    +  2  +  4  +          +  2  +  4  +
    +++++++++++++          A+++++B+++++E
final
    +++++++++++++          D+++++C+++++F
    +  2  +  3  +          +  2  +  3  +
    +++++++++++++          G+++++H+++++I
    +  0  +  1  +          +  0  +  1  +
    +++++++++++++          A+++++B+++++E
	
Zone0
B-H	Interface0 Zone1
    Transform      : 1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (1,3)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
B-H	Interface0 Zone0
    Transform      : 1 2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,1)
	                 (3,3)
H-I	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
					 
Zone2
G-H	Interface0 Zone0
    Transform      : 1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)	
H-C	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (1,3)
					 
Zone3
H-C	Interface0 Zone2
    Transform      : 1 2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,1)
	                 (3,3)
H-I	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)
```

### heat2d2blocksv1
```
Transform = [-1, +2]

  D+++++C c+++++d
  +     + +     +
  +  0  + +  1  + 
  +     + +     +
  A+++++B b+++++a
 
  D(1,5) C(3,5)  c(3,5) d(1,5)
  A(1,1) B(3,1)  b(3,1) a(1,1)
  
  Zone0               Zone1
  (ilo,jhi)(ihi,jhi)  (ihi,jhi)(ilo,jhi)
  (ilo,jlo)(ihi,jlo)  (ihi,jlo)(ilo,jlo)
  
  Zone0                           Zone1
  (ilo[0],jhi[0])(ihi[0],jhi[0])  (ihi[1],jhi[1])(ilo[1],jhi[1])
  (ilo[0],jlo[0])(ihi[0],jlo[0])  (ihi[1],jlo[1])(ilo[1],jlo[1])
  
  ilo[0] = 1 ihi[0] = 3
  jlo[0] = 1 jhi[0] = 5
  ilo[1] = 1 ihi[1] = 3
  jlo[1] = 1 jhi[1] = 5
  
  B-C
  (ihi[0],jlo[0]),(ihi[0],jhi[0])
  b-c
  (ihi[1],jlo[1]),(ihi[1],jhi[1])
  
  B-C
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  ipnts[ 1 ] = jlo[ 0 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 0 ];
  ipnts[ 3 ] = jhi[ 0 ];
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 1 ];
  ipntsdonor[ 1 ] = jlo[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 1 ];
  ipntsdonor[ 3 ] = jhi[ 1 ];
  
  b-c
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 1 ];
  ipnts[ 1 ] = jlo[ 1 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 1 ];
  ipnts[ 3 ] = jhi[ 1 ];
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  ipntsdonor[ 1 ] = jlo[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 0 ];
  ipntsdonor[ 3 ] = jhi[ 0 ];  
  
original
    +++++++++++++          D+++++C+++++F
    +  3  +  5  +          +  3  +  5  +
    +++++++++++++          G+++++H+++++I
    +  2  +  4  +          +  2  +  4  +
    +++++++++++++          A+++++B+++++E
final
    +++++++++++++          D+++++C+++++F
    +  2  +  3  +          +  2  +  3  +
    +++++++++++++          G+++++H+++++I
    +  0  +  1  +          +  0  +  1  +
    +++++++++++++          A+++++B+++++E  
	
Zone0
B-H	Interface0 Zone1
    Transform      : -1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,1)
	                 (3,3)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
B-H	Interface0 Zone0
    Transform      : -1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,1)
	                 (3,3)
H-I	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
					 
Zone2
G-H	Interface0 Zone0
    Transform      : 1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)	
H-C	Interface1 Zone3
    Transform      : -1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,1)
	                 (3,3)
					 
Zone3
H-C	Interface0 Zone2
    Transform      : -1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,1)
	                 (3,3)
H-I	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)	
```

### heat2d2blocksv2
```
Transform = [+1, -2]

j            -----------> i
^  D+++++C   | c+++++d
|  +     +   | +     +
|  +  0  +   | +  1  + 
|  +     +   | +     +
|  A+++++B   | b+++++a
|-------->i  j

  D(1,5) C(3,5)  c(1,1) d(3,1)
  A(1,1) B(3,1)  b(1,5) a(3,5)
  
  Zone0               Zone1
  (ilo,jhi)(ihi,jhi)  (ilo,jlo)(ihi,jlo)
  (ilo,jlo)(ihi,jlo)  (ilo,jhi)(ihi,jhi)
  
  Zone0                                 Zone1
  D: (ilo[0],jhi[0]) C:(ihi[0],jhi[0])  c:(ilo[1],jlo[1])d:(ihi[1],jlo[1])
  A: (ilo[0],jlo[0]) B:(ihi[0],jlo[0])  b:(ilo[1],jhi[1])a:(ihi[1],jhi[1])  
  
  ilo[0] = 1 ihi[0] = 3
  jlo[0] = 1 jhi[0] = 5
  ilo[1] = 1 ihi[1] = 3
  jlo[1] = 1 jhi[1] = 5
  
  Zone0 BC
  Top   : D-C D:(ilo[0],jhi[0])C:(ihi[0],jhi[0])
  Bottom: A-B A:(ilo[0],jlo[0])B:(ihi[0],jlo[0])
  Left  : A-D A:(ilo[0],jlo[0])D:(ilo[0],jhi[0])  
  
  Zone1 BC
  Top   : c-d c:(ilo[1],jlo[1])d:(ihi[1],jlo[1])
  Bottom: b-a b:(ilo[1],jhi[1])a:(ihi[1],jhi[1])
  Right : d-a d:(ihi[1],jlo[1])a:(ihi[1],jhi[1]) 
  
  Interface Zone0
  B-C
  B:(ihi[0],jlo[0]),C:(ihi[0],jhi[0])
  b-c
  b:(ilo[1],jhi[1]),c:(ilo[1],jlo[1])
  
  Interface Zone1
  c-b
  c:(ilo[1],jlo[1]),b:(ilo[1],jhi[1])
  C-B
  C:(ihi[0],jhi[0]),B:(ihi[0],jlo[0])
  
  B-C
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  ipnts[ 1 ] = jlo[ 0 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 0 ];
  ipnts[ 3 ] = jhi[ 0 ];
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ilo[ 1 ];
  ipntsdonor[ 1 ] = jhi[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ilo[ 1 ];
  ipntsdonor[ 3 ] = jlo[ 1 ];
  
  b-c
  /* lower point of receiver range */
  ipnts[ 0 ] = ilo[ 1 ];
  ipnts[ 1 ] = jlo[ 1 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ilo[ 1 ];
  ipnts[ 3 ] = jhi[ 1 ];
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  ipntsdonor[ 1 ] = jhi[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 0 ];
  ipntsdonor[ 3 ] = jlo[ 0 ];  
  
j            -----------> i
^  D+++++C   | c+++++d
|  +  3  +   | +  4  +
|  ++++++H   | h++++++
|  +  2  +   | +  5  +
|  A+++++B   | b+++++a
|-------->i  j
  
zone->Split( zoneL, zoneR, nCell );
zone : zoneIndex = 1
zoneL: zoneIndex = 4
zoneR: zoneIndex = 5

C-H: (3,3)(3,1)
c-h: (1,1)(1,3)

overlapRegion: (1,1)(1,3)

void SplitZone::Split( SplitZone *& zoneL, SplitZone *& zoneR, double nCell )
{
    //Find the longest axis
    int axisNeedSplit = this->FindAxisNeedSplit();
    int iSplit        = this->FindSplitPosition( axisNeedSplit, nCell );

    zoneL->SetLeftDimension( this->dimInfo.dimList, axisNeedSplit, iSplit );
    zoneR->SetRightDimension( this->dimInfo.dimList, axisNeedSplit, iSplit );

    zoneL->CreateBcFromParent();
    zoneR->CreateBcFromParent();
    
    CreateInterfaceBc( zoneL, zoneR );
}

void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
{
    parentInterfaceSplitBc: zoneIndex=1
    overlapRegion: (1,1)(1,3)
	
    InterfaceSplitBc * interfaceSplitBc = new InterfaceSplitBc();
    this->interfaceSplitBcList.push_back( interfaceSplitBc );

    interfaceSplitBc->region = overlapRegion;
    interfaceSplitBc->zone = this;
	
	interfaceSplitBc->region: (1,1)(1,3)
	interfaceSplitBc->zone: zoneIndex=5
	
    interfaceSplitBc->transform = parentInterfaceSplitBc->transform;
    interfaceSplitBc->CopyMatrix( parentInterfaceSplitBc );
	
    RangeRegion subDonorRegion( Dim::dim );
    parentInterfaceSplitBc->CalcSubDonorRegion( overlapRegion, subDonorRegion );
	
    j            -----------> i
    ^  D+++++C   | c+++++d
    |  +     +   | +     +
    |  +  0  +   | +  1  + 
    |  +     +   | +     +
    |  A+++++B   | b+++++a
    |-------->i  j
	
    j            -----------> i
    ^  D+++++C   | c+++++d
    |  +  3  +   | +  4  +
    |  ++++++H   | h++++++
    |  +  2  +   | +  5  +
    |  A+++++B   | b+++++a
    |-------->i  j
      
    zone->Split( zoneL, zoneR, nCell );
    zone : zoneIndex = 1
    zoneL: zoneIndex = 4
    zoneR: zoneIndex = 5
	
    Zone3            Zone0
    C-H: (3,3)(3,1)  C-H: (3,5)(3,3)
	Zone4            Zone1
    c-h: (1,1)(1,3)	 c-h: (1,1)(1,3)
	
	subDonorRegion: C-H(zoneIndex=0)(3,5)(3,3)
	
    interfaceSplitBc->ChangeRegionToLocalCoordinate();
    interfaceSplitBc->donor_region = subDonorRegion;
    SplitZone * parent_donor_zone = parentInterfaceSplitBc->donor_zone;
    std::cout << " parentInterfaceSplitBc->zone->zoneIndex " << parentInterfaceSplitBc->zone->zoneIndex << "\n";
    std::cout << " parentInterfaceSplitBc->donor_zone->zoneIndex " << parent_donor_zone->zoneIndex << "\n";
	
	parent_donor_zone: zoneIndex=0
	
    if ( parent_donor_zone->child.size() > 0 )
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->GetChildDonorRegion( subDonorRegion, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
        interfaceSplitBc->donor_region = interfaceInfo.donor_region;
		
		interfaceSplitBc->zone      : zoneIndex = 5
		interfaceSplitBc->donor_zone: zoneIndex = 2
        //compatibility
        InterfaceSplitBc * donor_bc = interfaceSplitBc->donor_bc;
        SplitZone * donor_zone = interfaceSplitBc->donor_zone;
		
        if ( interfaceSplitBc->zone != donor_bc->donor_zone )
        {
            donor_bc->donor_zone = interfaceSplitBc->zone;
            donor_bc->donor_region = interfaceSplitBc->region;
           
            int kkk = 1;
        }
        int kkk = 1;
    }
    else
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->FindDonorInterface( interfaceSplitBc, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
    }
}

other
void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
{
    parentInterfaceSplitBc: zoneIndex=1
    overlapRegion: (1,3)(1,5)
	
    InterfaceSplitBc * interfaceSplitBc = new InterfaceSplitBc();
    this->interfaceSplitBcList.push_back( interfaceSplitBc );

    interfaceSplitBc->region = overlapRegion;
    interfaceSplitBc->zone = this;
	
	interfaceSplitBc->region: (1,3)(1,5)
	interfaceSplitBc->zone: zoneIndex=5
	
    interfaceSplitBc->transform = parentInterfaceSplitBc->transform;
    interfaceSplitBc->CopyMatrix( parentInterfaceSplitBc );
	
    RangeRegion subDonorRegion( Dim::dim );
    parentInterfaceSplitBc->CalcSubDonorRegion( overlapRegion, subDonorRegion );
	
    j            -----------> i
    ^  D+++++C   | c+++++d
    |  +     +   | +     +
    |  +  0  +   | +  1  + 
    |  +     +   | +     +
    |  A+++++B   | b+++++a
    |-------->i  j
	
    j            -----------> i
    ^  D+++++C   | c+++++d
    |  +  3  +   | +  4  +
    |  ++++++H   | h++++++
    |  +  2  +   | +  5  +
    |  A+++++B   | b+++++a
    |-------->i  j
      
    zone->Split( zoneL, zoneR, nCell );
    zone : zoneIndex = 1
    zoneL: zoneIndex = 4
    zoneR: zoneIndex = 5
	
    Zone2            Zone0
    H-B: (3,3)(3,1)  H-B: (3,3)(3,1)
	Zone5            Zone1
    h-b: (1,1)(1,3)	 h-b: (1,3)(1,5)
	
	subDonorRegion: H-B(zoneIndex=0)(3,3)(3,1)
	
    interfaceSplitBc->ChangeRegionToLocalCoordinate();
    interfaceSplitBc->donor_region = subDonorRegion;
    SplitZone * parent_donor_zone = parentInterfaceSplitBc->donor_zone;
    std::cout << " parentInterfaceSplitBc->zone->zoneIndex " << parentInterfaceSplitBc->zone->zoneIndex << "\n";
    std::cout << " parentInterfaceSplitBc->donor_zone->zoneIndex " << parent_donor_zone->zoneIndex << "\n";
	
	parent_donor_zone: zoneIndex=0
	
    if ( parent_donor_zone->child.size() > 0 )
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->GetChildDonorRegion( subDonorRegion, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
        interfaceSplitBc->donor_region = interfaceInfo.donor_region;
        //compatibility
        InterfaceSplitBc * donor_bc = interfaceSplitBc->donor_bc;
        SplitZone * donor_zone = interfaceSplitBc->donor_zone;

		donor_zone: zoneIndex=2
		
        j            -----------> i
        ^  D+++++C   | c+++++d
        |  +     +   | +     +
        |  +  0  +   | +  1  + 
        |  +     +   | +     +
        |  A+++++B   | b+++++a
        |-------->i  j
	    
        j            -----------> i
        ^  D+++++C   | c+++++d
        |  +  3  +   | +  4  +
        |  ++++++H   | h++++++
        |  +  2  +   | +  5  +
        |  A+++++B   | b+++++a
        |-------->i  j		
		
		interfaceSplitBc->zone: zoneIndex = 5
		donor_bc: B-H
		donor_bc->zone        : zoneIndex = 2
		donor_bc->donor_zone  : zoneIndex = 1
		donor_bc->region: (3,1)(3,3)
		donor_bc->donor_region: b-h(zoneIndex=1)(1,5)(1,3)
		hope to get results:
		donor_bc->donor_region: b-h(zoneIndex=5)(1,3)(1,1)

        if ( interfaceSplitBc->zone != donor_bc->donor_zone )
        {
		    interfaceSplitBc->region: h-b(1,1)(1,3)
            donor_bc->donor_zone = interfaceSplitBc->zone;
            donor_bc->donor_region = interfaceSplitBc->region;
           
            int kkk = 1;
        }
        int kkk = 1;
    }
    }
    else
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->FindDonorInterface( interfaceSplitBc, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
    }
}

  
original
    j            -----------> i
    ^  D+++++C   | c+++++d
    |  +  3  +   | +  4  +
    |  ++++++H   | h++++++
    |  +  2  +   | +  5  +
    |  A+++++B   | b+++++a
    |-------->i  j
final
    j            -----------> i  j
    ^  D+++++C   | c+++++d       | b+++++a y=0
    |  +  2  +   | +  1  +       | +  3  +
    |  G+++++H   | h+++++i       | h+++++i y=2
    |  +  0  +   | +  3  +       | +  1  +
    |  A+++++B   | b+++++a       | c+++++d y=4
    |-------->i  j               -----------> i

Zone1
    c-h:c(1,1) h(1,3)
	h-i:h(1,3) i(3,3)
Zone3
    h-b:h(1,1) b(1,3)
	h-i:h(1,1) i(3,1)
	
Zone0
B-H	Interface0 Zone3
    Transform      : 1 -2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,3)
	                 (1,1)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
c-h	Interface0 Zone2
    Transform      : 1 -2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,3)
	                 (3,1)
h-i	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
					 
Zone2
H-C	Interface0 Zone1
    Transform      : 1 -2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,3)
	                 (1,1)	
G-H	Interface1 Zone0
    Transform      :  1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)
					 
Zone3
h-b	Interface0 Zone0
    Transform      : 1 -2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,3)
	                 (3,1)
h-i	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)	
```

### heat2d2blocksv3
```
Transform = [+2, +1]

  j            i
  ^  D+++++C   | c+++++d
  |  +     +   | +     +
  |  +  0  +   | +  1  + 
  |  +     +   | +     +
  |  A+++++B   | b+++++a
  |-------->i  ----------->j

  D(1,5) C(3,5)  c(5,1) d(5,3): c(i=5,j=1) d(i=5,j=3)
  A(1,1) B(3,1)  b(1,1) a(1,3): b(i=1,j=1) a(i=1,j=3)
  
  Zone0                 Zone1
  D(ilo,jhi)C(ihi,jhi)  c(ihi,jlo)d(ihi,jhi)
  A(ilo,jlo)B(ihi,jlo)  b(ilo,jlo)a(ilo,jhi)
  Zone0 detail                  Zone1 detail
  D(ilo=1,jhi=5)C(ihi=3,jhi=5)  c(ihi=5,jlo=1)d(ihi=5,jhi=3)
  A(ilo=1,jlo=1)B(ihi=3,jlo=1)  b(ilo=1,jlo=1)a(ilo=1,jhi=3)
  
  Zone0                                 Zone1
  D: (ilo[0],jhi[0]) C:(ihi[0],jhi[0])  c:(ihi[1],jlo[1])d:(ihi[1],jhi[1])
  A: (ilo[0],jlo[0]) B:(ihi[0],jlo[0])  b:(ilo[1],jlo[1])a:(ilo[1],jhi[1])  
  
  ilo[0] = 1 ihi[0] = 3
  jlo[0] = 1 jhi[0] = 5
  
  ilo[1] = 1 ihi[1] = 5
  jlo[1] = 1 jhi[1] = 3
  
  Zone0 B-C
  Top      : D-C D:(ilo[0],jhi[0])C:(ihi[0],jhi[0])
  Bottom   : A-B A:(ilo[0],jlo[0])B:(ihi[0],jlo[0])
  Left     : A-D A:(ilo[0],jlo[0])D:(ilo[0],jhi[0])  
  Interface: B-C B:(ihi[0],jlo[0])C:(ihi[0],jhi[0])  
  
  Zone1 b-c
  Top      : c-d c:(ihi[1],jlo[1])d:(ihi[1],jhi[1])
  Bottom   : b-a b:(ilo[1],jlo[1])a:(ilo[1],jhi[1])
  Right    : a-d a:(ilo[1],jhi[1])d:(ihi[1],jhi[1])
  Interface: b-c b:(ilo[1],jlo[1])c:(ihi[1],jlo[1])
  
  Interface Zone0
  B-C
  B:(ihi[0],jlo[0]),C:(ihi[0],jhi[0])
  b-c
  b:(ilo[1],jlo[1]),c:(ihi[1],jlo[1])
  
  Interface Zone1
  b-c
  b:(ilo[1],jlo[1]),c:(ihi[1],jlo[1])
  B-C
  B:(ihi[0],jlo[0]),C:(ihi[0],jhi[0]) 
  
  B-C
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  ipnts[ 1 ] = jlo[ 0 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 0 ];
  ipnts[ 3 ] = jhi[ 0 ];
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ilo[ 1 ];
  ipntsdonor[ 1 ] = jlo[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 1 ];
  ipntsdonor[ 3 ] = jlo[ 1 ];
  
  b-c
  /* lower point of receiver range */
  ipnts[ 0 ] = ilo[ 1 ];
  ipnts[ 1 ] = jlo[ 1 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 1 ];
  ipnts[ 3 ] = jlo[ 1 ];
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  ipntsdonor[ 1 ] = jlo[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 0 ];
  ipntsdonor[ 3 ] = jhi[ 0 ];

  j            i
  ^  D+++++C   | c+++++d
  |  +     +   | +     +
  |  +  0  +   | +  1  + 
  |  +     +   | +     +
  |  A+++++B   | b+++++a
  |-------->i  ----------->j
  
  j            i
  ^  D+++++C   | c+++++d
  |  +  3  +   | +  5  +
  |  G+++++H   | h+++++i
  |  +  2  +   | +  4  +
  |  A+++++B   | b+++++a
  |-------->i  ----------->j
  
  j            i
  ^  D+++++C   | c+++++d
  |  +  2  +   | +  3  +
  |  G+++++H   | h+++++i
  |  +  0  +   | +  1  +
  |  A+++++B   | b+++++a
  |-------->i  ----------->j
  
Zone0
B-H	Interface0 Zone1
    Transform      : +2 +1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
b-h	Interface0 Zone0
    Transform      : +2 +1
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (3,1)
	                 (3,3)
h-i	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (1,3)
					 
Zone2
H-C	Interface0 Zone3
    Transform      : +2 +1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)	
G-H	Interface1 Zone0
    Transform      :  1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)
					 
Zone3
h-c	Interface0 Zone2
    Transform      : +2 +1
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (3,1)
	                 (3,3)
h-i	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,1)
	                 (3,3)	
```  


### heat2d2blocksv4
```
Transform = [+2, -1]
a=+2
b=-1
T = [sgn(a)del(a-1) sgn(b)del(b-1)]
    [sgn(a)del(a-2) sgn(b)del(b-2)]

where sgn(x) ≡ +1 if x ≥ 0, and −1 if x < 0, 
and del(x−y) ≡ +1 if |x| = |y|, and 0 otherwise.
a=+2,b=-1
T = [sgn(a)del(a-1) sgn(b)del(b-1)]
    [sgn(a)del(a-2) sgn(b)del(b-2)]
sgn(a)=sgn(+2)=+1
sgn(b)=sgn(-1)=-1
del(a-1)=del(a,-1)=del(+2,-1)=0
del(a-2)=del(a,-2)=del(+2,-2)=1
del(b-1)=del(b,-1)=del(-1,-1)=1
del(b-2)=del(b,-2)=del(-1,-2)=0
T = [sgn(a)del(a-1) sgn(b)del(b-1)]
    [sgn(a)del(a-2) sgn(b)del(b-2)]
  = [+1*0 -1*1]
    [+1*1 -1*0]
  = [0 -1]
    [1  0]

  j            ----------->j
  ^  D+++++C   | c+++++d
  |  +     +   | +     +
  |  +  0  +   | +  1  + 
  |  +     +   | +     +
  |  A+++++B   | b+++++a
  |-------->i  i

  D(1,5) C(3,5)  c(1,1) d(1,3): c(i=1,j=1) d(i=1,j=3)
  A(1,1) B(3,1)  b(5,1) a(5,3): b(i=5,j=1) a(i=5,j=3)
  
  Zone0                 Zone1
  D(ilo,jhi)C(ihi,jhi)  c(ilo,jlo)d(ilo,jhi)
  A(ilo,jlo)B(ihi,jlo)  b(ihi,jlo)a(ihi,jhi)
  Zone0 detail                  Zone1 detail
  D(ilo=1,jhi=5)C(ihi=3,jhi=5)  c(ilo=1,jlo=1)d(ilo=1,jhi=3)
  A(ilo=1,jlo=1)B(ihi=3,jlo=1)  b(ihi=5,jlo=1)a(ihi=5,jhi=3)
  
  Zone0                                 Zone1
  D: (ilo[0],jhi[0]) C:(ihi[0],jhi[0])  c:(ilo[1],jlo[1])d:(ilo[1],jhi[1])
  A: (ilo[0],jlo[0]) B:(ihi[0],jlo[0])  b:(ihi[1],jlo[1])a:(ihi[1],jhi[1])  
  
  ilo[0] = 1 ihi[0] = 3
  jlo[0] = 1 jhi[0] = 5
  
  ilo[1] = 1 ihi[1] = 5
  jlo[1] = 1 jhi[1] = 3
  
  Zone0 B-C
  Top      : D-C D:(ilo[0],jhi[0])C:(ihi[0],jhi[0])
  Bottom   : A-B A:(ilo[0],jlo[0])B:(ihi[0],jlo[0])
  Left     : A-D A:(ilo[0],jlo[0])D:(ilo[0],jhi[0])  
  Interface: B-C B:(ihi[0],jlo[0])C:(ihi[0],jhi[0])  
  
  Zone1 c-b
  Top      : c-d c:(ilo[1],jlo[1])d:(ilo[1],jhi[1])
  Bottom   : b-a b:(ihi[1],jlo[1])a:(ihi[1],jhi[1])
  Right    : d-a d:(ilo[1],jhi[1])a:(ihi[1],jhi[1])
  Interface: c-b c:(ilo[1],jlo[1])b:(ihi[1],jlo[1])
  
  Interface Zone0
  B-C
  B:(ihi[0],jlo[0]),C:(ihi[0],jhi[0])
  b-c
  b:(ihi[1],jlo[1]),c:(ilo[1],jlo[1])
  
  Interface Zone1
  c-b
  c:(ilo[1],jlo[1]),b:(ihi[1],jlo[1])
  C-B
  C:(ihi[0],jhi[0]),B:(ihi[0],jlo[0])
  
  j            ----------->j
  ^  D+++++C   | c+++++d
  |  +     +   | +     +
  |  +  0  +   | +  1  + 
  |  +     +   | +     +
  |  A+++++B   | b+++++a
  |-------->i  i  
  
  //B-C
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  ipnts[ 1 ] = jlo[ 0 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 0 ];
  ipnts[ 3 ] = jhi[ 0 ];
  //b-c
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 1 ];
  ipntsdonor[ 1 ] = jlo[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ilo[ 1 ];
  ipntsdonor[ 3 ] = jlo[ 1 ];
  
  //c-b
  /* lower point of receiver range */
  ipnts[ 0 ] = ilo[ 1 ];
  ipnts[ 1 ] = jlo[ 1 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 1 ];
  ipnts[ 3 ] = jlo[ 1 ];
  //C-B
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  ipntsdonor[ 1 ] = jhi[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 0 ];
  ipntsdonor[ 3 ] = jlo[ 0 ];

  j            ----------->j
  ^  D+++++C   | c+++++d
  |  +     +   | +     +
  |  +  0  +   | +  1  + 
  |  +     +   | +     +
  |  A+++++B   | b+++++a
  |-------->i  i  
  
  j            ----------->j
  ^  D+++++C   | c+++++d
  |  +  3  +   | +  4  +
  |  G+++++H   | h+++++i
  |  +  2  +   | +  5  +
  |  A+++++B   | b+++++a
  |-------->i  i    
  
  j            ----------->j
  ^  D+++++C   | c+++++d
  |  +  2  +   | +  1  +
  |  G+++++H   | h+++++i
  |  +  0  +   | +  3  +
  |  A+++++B   | b+++++a
  |-------->i  i  
  
void SplitZone::CreateInterfaceBcFromParent( InterfaceSplitBc * parentInterfaceSplitBc, RangeRegion & overlapRegion )
{
    InterfaceSplitBc * interfaceSplitBc = new InterfaceSplitBc();
    this->interfaceSplitBcList.push_back( interfaceSplitBc );

    j            ----------->j
    ^  D+++++C   | c+++++d
    |  +  3  +   | +  4  +
    |  G+++++H   | h+++++i
    |  +  2  +   | +  5  +
    |  A+++++B   | b+++++a
    |-------->i  i  
  
    interfaceSplitBc->region = overlapRegion;
    interfaceSplitBc->zone = this;
	
	overlapRegion: (1,1)(3,1)
	interfaceSplitBc->zone: zoneIndex = 4
	
    interfaceSplitBc->transform = parentInterfaceSplitBc->transform;
    interfaceSplitBc->CopyMatrix( parentInterfaceSplitBc );
    RangeRegion subDonorRegion( Dim::dim );
	
	parentInterfaceSplitBc->zone: zoneIndex = 1
	parentInterfaceSplitBc->donor_zone: zoneIndex = 0
	
    parentInterfaceSplitBc->CalcSubDonorRegion( overlapRegion, subDonorRegion );
	
	parentInterfaceSplitBc->region      : (1,1)(5,1)
	parentInterfaceSplitBc->donor_region: (3,5)(3,1)
	
void InterfaceSplitBc::CalcSubDonorRegion( RangeRegion &subRegion, RangeRegion &subDonorRegion )
{
    this->region      : (1,1)(5,1)
	this->donor_region: (3,5)(3,1)
	
    std::vector<int> begin1 = this->region.start;
    std::vector<int> end1 = this->region.end;
    std::vector<int> begin2 = this->donor_region.start;
    std::vector<int> end2 = this->donor_region.end;
	
    std::vector<int> new_begin1 = subRegion.start;
    std::vector<int> new_end1 = subRegion.end;
	
	begin1: (1,1)
	end1  : (5,1)

	begin2: (3,5)
	end2  : (3,1)
	
	c-h
	subRegion: (1,1)(3,1)
	
	new_begin1: (1,1)
	new_end1  : (3,1)

    int dim = Dim::dim;
    std::vector<int> new_begin2( dim );
    std::vector<int> new_end2( dim );
	
    T = [0 -1]
        [1  0]
    Index2 = T * ( Index1 - Begin1 ) + Begin2
	new_begin2 = T * ( new_begin1 - Begin1 ) + Begin2
	new_end2   = T * ( new_end1   - Begin1 ) + Begin2
	new_begin2[0] = [0 -1] ( [1]-[1] ) + [3] = [3]
	new_begin2[1] = [1  0]*( [1]-[1] ) + [5] = [5]
	
	new_end2  [0] = [0 -1] ( [3]-[1] ) + [3]
	new_end2  [1] = [1  0]*( [1]-[1] ) + [5]
	
	new_end2  [0] = [0 -1] ( [2] ) + [3] = [0] + [3] = [3]
	new_end2  [1] = [1  0]*( [0] ) + [5] = [2] + [5] = [7]
	
    mapindex( begin1, begin2, new_begin1, new_begin2 );
	
    mapindex( begin1, begin2, new_end1, new_end2 );
	
	new_begin2: (3,5)
	new_end2  : (3,7)

    subDonorRegion.start = new_begin2;
    subDonorRegion.end = new_end2;
}	

    interfaceSplitBc->ChangeRegionToLocalCoordinate();
    interfaceSplitBc->donor_region = subDonorRegion;
	
	subDonorRegion: (3,5)(3,7)
	
	interfaceSplitBc->region: (1,1)(3,1)
	
	
    SplitZone * parent_donor_zone = parentInterfaceSplitBc->donor_zone;
    std::cout << " parentInterfaceSplitBc->zone->zoneIndex " << parentInterfaceSplitBc->zone->zoneIndex << "\n";
    std::cout << " parentInterfaceSplitBc->donor_zone->zoneIndex " << parent_donor_zone->zoneIndex << "\n";
    if ( parent_donor_zone->child.size() > 0 )
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->GetChildDonorRegion( subDonorRegion, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
        interfaceSplitBc->donor_region = interfaceInfo.donor_region;
        //compatibility
        InterfaceSplitBc * donor_bc = interfaceSplitBc->donor_bc;
        SplitZone * donor_zone = interfaceSplitBc->donor_zone;
        if ( interfaceSplitBc->zone != donor_bc->donor_zone )
        {
            if ( interfaceSplitBc->zone->parent == donor_bc->donor_zone )
            {
                RangeRegion d_region = donor_bc->donor_region;
                d_region.ToLocal( interfaceSplitBc->zone->dimInfo.oriPoint );
                donor_bc->donor_region = d_region;
            }
            donor_bc->donor_zone = interfaceSplitBc->zone;
         
            int kkk = 1;
        }
        int kkk = 1;
    }
    else
    {
        InterfaceInfo interfaceInfo;
        parent_donor_zone->FindDonorInterface( interfaceSplitBc, interfaceInfo );
        interfaceSplitBc->donor_zone = interfaceInfo.donor_zone;
        interfaceSplitBc->donor_bc = interfaceInfo.donor_interface;
    }
    
    int kkk = 1;
}  
  
Zone0
B-H	Interface0 Zone3
    Transform      : +2 -1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,1)
	                 (1,1)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
c-h	Interface0 Zone2
    Transform      : -2 +1
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (3,3)
	                 (3,1)
h-i	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (1,3)
					 
Zone2
H-C	Interface0 Zone1
    Transform      : +2 -1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,1)
	                 (1,1)	
G-H	Interface1 Zone0
    Transform      :  1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)
					 
Zone3
c-h	Interface0 Zone0
    Transform      : -2 +1
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (3,3)
	                 (3,1)
h-i	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,1)
	                 (3,3)	
```

### heat2d2blocksv5
```
Transform(0->1) = [-2, -1]
Transform(1->0) = [-2, -1]
	
  j            j----------
  ^  D+++++C     c+++++d |
  |  +     +     +     + |
  |  +  0  +     +  1  + | 
  |  +     +     +     + |
  |  A+++++B     b+++++a |
  |-------->i     	     i

  D(1,5) C(3,5)  c(1,3) d(1,1): c(i=1,j=3) d(i=1,j=1)
  A(1,1) B(3,1)  b(5,3) a(5,1): b(i=5,j=3) a(i=5,j=1)
  
  Zone0                 Zone1
  D(ilo,jhi)C(ihi,jhi)  c(ilo,jhi)d(ilo,jlo)
  A(ilo,jlo)B(ihi,jlo)  b(ihi,jhi)a(ihi,jlo)
  Zone0 detail                  Zone1 detail
  D(ilo=1,jhi=5)C(ihi=3,jhi=5)  c(ilo=1,jhi=3)d(ilo=1,jlo=1)
  A(ilo=1,jlo=1)B(ihi=3,jlo=1)  b(ihi=5,jhi=3)a(ihi=5,jlo=1)
  
  Zone0                                 Zone1
  D: (ilo[0],jhi[0]) C:(ihi[0],jhi[0])  c:(ilo[1],jhi[1])d:(ilo[1],jlo[1])
  A: (ilo[0],jlo[0]) B:(ihi[0],jlo[0])  b:(ihi[1],jhi[1])a:(ihi[1],jlo[1])  
  
  ilo[0] = 1 ihi[0] = 3
  jlo[0] = 1 jhi[0] = 5
  
  ilo[1] = 1 ihi[1] = 5
  jlo[1] = 1 jhi[1] = 3
  
  Zone0 B-C
  Top      : D-C D:(ilo[0],jhi[0])C:(ihi[0],jhi[0])
  Bottom   : A-B A:(ilo[0],jlo[0])B:(ihi[0],jlo[0])
  Left     : A-D A:(ilo[0],jlo[0])D:(ilo[0],jhi[0])  
  Interface: B-C B:(ihi[0],jlo[0])C:(ihi[0],jhi[0])  
  
  Zone1 c-b
  Top      : d-c d:(ilo[1],jlo[1])c:(ilo[1],jhi[1])
  Bottom   : a-b a:(ihi[1],jlo[1])b:(ihi[1],jhi[1])
  Right    : d-a d:(ilo[1],jlo[1])a:(ihi[1],jlo[1])
  Interface: c-b c:(ilo[1],jhi[1])b:(ihi[1],jhi[1])
  
  Interface Zone0
  B-C
  B:(ihi[0],jlo[0]),C:(ihi[0],jhi[0])
  b-c
  b:(ihi[1],jhi[1]),c:(ilo[1],jhi[1])
  
  Interface Zone1
  c-b
  c:(ilo[1],jhi[1]),b:(ihi[1],jhi[1])
  C-B
  C:(ihi[0],jhi[0]),B:(ihi[0],jlo[0])
  
  j            j----------
  ^  D+++++C     c+++++d |
  |  +     +     +     + |
  |  +  0  +     +  1  + | 
  |  +     +     +     + |
  |  A+++++B     b+++++a |
  |-------->i     	     i
  
  //B-C
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  ipnts[ 1 ] = jlo[ 0 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 0 ];
  ipnts[ 3 ] = jhi[ 0 ];
  //b-c
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 1 ];
  ipntsdonor[ 1 ] = jhi[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ilo[ 1 ];
  ipntsdonor[ 3 ] = jhi[ 1 ];
  
  //c-b
  /* lower point of receiver range */
  ipnts[ 0 ] = ilo[ 1 ];
  ipnts[ 1 ] = jhi[ 1 ];
  /* upper point of receiver range */
  ipnts[ 2 ] = ihi[ 1 ];
  ipnts[ 3 ] = jhi[ 1 ];
  //C-B
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  ipntsdonor[ 1 ] = jhi[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 2 ] = ihi[ 0 ];
  ipntsdonor[ 3 ] = jlo[ 0 ];

  j            j----------
  ^  D+++++C     c+++++d |
  |  +     +     +     + |
  |  +  0  +     +  1  + | 
  |  +     +     +     + |
  |  A+++++B     b+++++a |
  |-------->i     	     i
  
  j            j----------
  ^  D+++++C     c+++++d |
  |  +  3  +     +  4  + |
  |  G+++++H     h+++++i | 
  |  +  2  +     +  5  + |
  |  A+++++B     b+++++a |
  |-------->i     	     i  
  
  j            j----------
  ^  D+++++C     c+++++d |
  |  +  2  +     +  1  + |
  |  G+++++H     h+++++i | 
  |  +  0  +     +  3  + |
  |  A+++++B     b+++++a |
  |-------->i     	     i   
  
Zone0
B-H	Interface0 Zone3
    Transform      : -2 -1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (1,3)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
c-h	Interface0 Zone2
    Transform      : -2 -1
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (3,1)
i-h	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (1,3)
					 
Zone2
H-C	Interface0 Zone1
    Transform      : -2 -1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (1,3)	
G-H	Interface1 Zone0
    Transform      :  1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)
					 
Zone3
h-b	Interface0 Zone0
    Transform      : -2 -1
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (3,1)
i-h	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,1)
	                 (3,3)	
```

### heat2d1blockv1
```

  j          
  ^  D+++++C 
  |  +     + 
  |  +  0  +  
  |  +     + 
  |  A+++++B 
  |-------->i
  
  j          
  ^  D+F+++C 
  |  + +   + 
  |  +1+ 2 +  
  |  + +   + 
  |  A+E+++B 
  |-------->i  
  
  j          
  ^  D+F+++C 
  |  + + 4 + 
  |  +1G+++H
  |  + + 3 + 
  |  A+E+++B 
  |-------->i   

    j          
  ^  D+F+++C 
  |  + + 2 + 
  |  +0G+++H
  |  + + 1 + 
  |  A+E+++B 
  |-------->i  

  D(1,5) C(5,5)
  A(1,1) B(5,1)
  
  Zone0               
  D(ilo,jhi)C(ihi,jhi)
  A(ilo,jlo)B(ihi,jlo)
 
  ilo = 1 ihi = 5
  jlo = 1 jhi = 5
  
 
  
Zone0
B-H	Interface0 Zone3
    Transform      : -2 -1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (1,3)
G-H	Interface1 Zone2
    Transform      : 1 2
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (3,1)
Zone1
c-h	Interface0 Zone2
    Transform      : -2 -1
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (3,1)
i-h	Interface1 Zone3
    Transform      : 1 2
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (1,1)
	                 (1,3)
					 
Zone2
H-C	Interface0 Zone1
    Transform      : -2 -1
    PointRange     : (3,1)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (1,3)	
G-H	Interface1 Zone0
    Transform      :  1 2
    PointRange     : (1,1)
	                 (3,1)
    PointRangeDonor: (1,3)
	                 (3,3)
					 
Zone3
h-b	Interface0 Zone0
    Transform      : -2 -1
    PointRange     : (1,3)
	                 (3,3)
    PointRangeDonor: (3,3)
	                 (3,1)
i-h	Interface1 Zone1
    Transform      : 1 2
    PointRange     : (1,1)
	                 (1,3)
    PointRangeDonor: (3,1)
	                 (3,3)	
```

### heat1d1blocksv1
```cpp
  A++++++++B
  o-------->i
  x_l      x_r
  1        ni
  
  const int ni = 81;
  double x[ ni ];
  
  double x_l = -1.0;
  double x_r = 1.0;
  
  double dx = ( x_r - x_l ) / ( ni - 1 );
  
  for ( int i = 0; i < ni; ++ i )
  {
      x[ i ] = x_l + i * dx;
  }
  
  A(1) B(81)
  
  Zone0
  Left : A-A A:(ilo)A:(ilo)
  Right: B-B B:(ihi)B:(ihi)
  
```

### heat1d1blocksv2
```cpp
  A++++++++B
  o-------->i
  x<--------O
  x_r      x_l
  1        ni
  
  const int ni = 81;
  double x[ ni ];
  
  double x_l = -1.0;
  double x_r =  1.0;
  
  double dx = ( x_r - x_l ) / ( ni - 1 );
  
  for ( int i = 0; i < ni; ++ i )
  {
      x[ i ] = x_r - i * dx;
  }
  
  A(1) B(81)
  
  Zone0
  Left  OutFLow: A-A A:(ilo)A:(ilo)
  Right Inflow : B-B B:(ihi)B:(ihi)
  
```

### heat1d1blocksv3
```cpp
  A++++++++B
  i<--------o
  o-------->x
  x_l      x_r
  ni        1
  
  const int ni = 81;
  double x[ ni ];
  
  double x_l = -1.0;
  double x_r =  1.0;
  
  double dx = ( x_r - x_l ) / ( ni - 1 );
  
  for ( int i = 0; i < ni; ++ i )
  {
      x[ i ] = x_r - i * dx;
  }
  
  A(81) B(1)
  
  Zone0
  Left  Inflow : A-A A:(ihi)A:(ihi)
  Right OutFLow: B-B B:(ilo)B:(ilo)
  
```

### heat1d2blockv1
```
Transform(0->1) = [+1]
Transform(1->0) = [+1]

  A+++++B      b+++++a
  o-------->i  o-------->i
  
  A(1) B(5)  b(1) a(5)
  
  Zone0             Zone1
  A(ilo)B(ihi)      b(ilo)a(ihi)
  
  Zone0 detail      Zone1 detail
  A(ilo=1)B(ihi=5)  b(ilo=1)a(ihi=5)
  
  Zone0                   Zone1
  A: (ilo[0]) B:(ihi[0])  b:(ilo[1]) a:(ihi[1])
  
  ilo[0] = 1 ihi[0] = 5
  ilo[1] = 1 ihi[1] = 5
  
  Zone0 B-B
  Left     : A-A A:(ilo[0])A:(ilo[0])
  Interface: B-B B:(ihi[0])B:(ihi[0])
  
  Zone1 b-b
  Right    : a-a a:(ihi[1])a:(ihi[1])
  Interface: b-b b:(ilo[1])b:(ilo[1])
  
  Interface Zone0
  B-B
  B:(ihi[0]),B:(ihi[0])
  b-b
  b:(ilo[1]),b:(ilo[1])
  
  Interface Zone1
  b-b
  b:(ilo[1]),b:(ilo[1])
  B-B
  B:(ihi[0]),B:(ihi[0])
  
  //B-B
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  /* upper point of receiver range */
  ipnts[ 1 ] = ihi[ 0 ];
  //b-b
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ilo[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 1 ] = ilo[ 1 ];
  
  //b-b
  /* lower point of receiver range */
  ipnts[ 0 ] = ilo[ 1 ];
  /* upper point of receiver range */
  ipnts[ 1 ] = ilo[ 1 ];
  //B-B
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 1 ] = ihi[ 0 ];
  
```

### heat1d2blockv2
```
Transform(0->1) = [-1]
Transform(1->0) = [-1]

  A+++++B      b+++++a
  o-------->i  <--------O
  
  A(1) B(5)    b(5) a(1)
  
  Zone0             Zone1
  A(ilo)B(ihi)      b(ihi)a(ilo)
  
  Zone0 detail      Zone1 detail
  A(ilo=1)B(ihi=5)  b(ihi=5)a(ilo=1)
  
  Zone0                   Zone1
  A: (ilo[0]) B:(ihi[0])  b:(ihi[1]) a:(ilo[1])
  
  ilo[0] = 1 ihi[0] = 5
  ilo[1] = 1 ihi[1] = 5
  
  Zone0 B-B
  Left     : A-A A:(ilo[0])A:(ilo[0])
  Interface: B-B B:(ihi[0])B:(ihi[0])
  
  Zone1 b-b
  Right    : a-a a:(ilo[1])a:(ilo[1])
  Interface: b-b b:(ihi[1])b:(ihi[1])
  
  Interface Zone0
  B-B
  B:(ihi[0]),B:(ihi[0])
  b-b
  b:(ihi[1]),b:(ihi[1])
  
  Interface Zone1
  b-b
  b:(ihi[1]),b:(ihi[1])
  B-B
  B:(ihi[0]),B:(ihi[0])
  
  //B-B
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  /* upper point of receiver range */
  ipnts[ 1 ] = ihi[ 0 ];
  //b-b
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 1 ] = ihi[ 1 ];
  
  //b-b
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 1 ];
  /* upper point of receiver range */
  ipnts[ 1 ] = ihi[ 1 ];
  //B-B
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 1 ] = ihi[ 0 ];
  
```

### heat1d2blockv3
```cpp
Transform(0->1) = [+1]
Transform(1->0) = [+1]

  const int ni1 = 41;
  const int ni2 = 41;
  double x1[ ni ];
  double x2[ ni ];
  
  double xl1 = -1.0;
  double xr1 =  0.0;
  
  double xl2 =  0.0;
  double xr2 =  1.0;
  
  double dx1 = ( xr1 - xl1 ) / ( ni1 - 1 );
  double dx2 = ( xr2 - xl2 ) / ( ni2 - 1 );
  
  for ( int i = 0; i < ni1; ++ i )
  {
      x1[ i ] = xl1 + i * dx1;
  }
  
  for ( int i = 0; i < ni2; ++ i )
  {
      x2[ i ] = xl2 + i * dx2;
  }
  
  A+++++B      b+++++a
  o-------->i  o-------->i
  
  A(1) B(41)  b(1) a(41)
  
  Zone0             Zone1
  A(ilo)B(ihi)      b(ilo)a(ihi)
  
  Zone0 detail      Zone1 detail
  A(ilo=1)B(ihi=41)  b(ilo=1)a(ihi=41)
  
  Zone0                   Zone1
  A: (ilo[0]) B:(ihi[0])  b:(ilo[1]) a:(ihi[1])
  
  ilo[0] = 1 ihi[0] = 41
  ilo[1] = 1 ihi[1] = 41
  
  Zone0 B-B
  Left     : A-A A:(ilo[0])A:(ilo[0])
  Interface: B-B B:(ihi[0])B:(ihi[0])
  
  Zone1 b-b
  Right    : a-a a:(ihi[1])a:(ihi[1])
  Interface: b-b b:(ilo[1])b:(ilo[1])
  
  Interface Zone0
  B-B
  B:(ihi[0]),B:(ihi[0])
  b-b
  b:(ilo[1]),b:(ilo[1])
  
  Interface Zone1
  b-b
  b:(ilo[1]),b:(ilo[1])
  B-B
  B:(ihi[0]),B:(ihi[0])
  
  //B-B
  /* lower point of receiver range */
  ipnts[ 0 ] = ihi[ 0 ];
  /* upper point of receiver range */
  ipnts[ 1 ] = ihi[ 0 ];
  //b-b
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ilo[ 1 ];
  /* upper point of donor range */
  ipntsdonor[ 1 ] = ilo[ 1 ];
  
  //b-b
  /* lower point of receiver range */
  ipnts[ 0 ] = ilo[ 1 ];
  /* upper point of receiver range */
  ipnts[ 1 ] = ilo[ 1 ];
  //B-B
  /* lower point of donor range */
  ipntsdonor[ 0 ] = ihi[ 0 ];
  /* upper point of donor range */
  ipntsdonor[ 1 ] = ihi[ 0 ];
  
```


## Theory

MapBoundaryConditionVertex
```cpp
void MapBoundaryConditionVertex( FYZoneBoundaryCondition * zoneBoundaryCondition )
	//两个对接块之间的对接边界条件，本质上可以看作是两个平移和旋转坐标系之间的变换
	//由于有坐标重合的关系，实际要上简单一些
	//下面要确定块s的坐标轴和块t的坐标轴之间的对应关系，并且还有方向的问题

	//我们这样来考虑，对于三维问题，每个平面有一个坐标是固定的，只有两个坐标是可动的
	//记这个不动的坐标为i0，剩下的为j0, k0,(！！！未必满足右手系。)
	
   int sourceToTargetAxisMapping[ 3 ], targetToSourceAxisMapping[ 3 ], iprn[ 3 ];
   //sourceToTargetAxisMapping表示块s的轴0, 1, 2和块t的轴0, 1, 2之间的对应关系
   //targetToSourceAxisMapping表示块t的轴0, 1, 2和块s的轴0, 1, 2之间的对应关系	
    for ( int m = 0; m < 3; ++ m )
    {
        sourceToTargetAxisMapping[ faceDirectionIndexOfSourceZone[ m ] ] = faceDirectionIndexOfTargetZone[ m ];
        targetToSourceAxisMapping[ faceDirectionIndexOfTargetZone[ m ] ] = faceDirectionIndexOfSourceZone[ m ];
    }   
```

# MathJax Test Page

When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

# interface ideas

![示例图片](images/add.png "这是示例图片")

```
1. parent interface split left
2. 
```

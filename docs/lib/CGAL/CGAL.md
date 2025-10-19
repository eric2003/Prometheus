# CGAL

## Link

- [www.cgal.org](https://www.cgal.org/).
- [github cgal](https://github.com/CGAL/cgal).

## download

git clone --recursive git@github.com:CGAL/cgal.git

git clone git@github.com:CGAL/cgal.git
```
PS D:\work\libjpeg_work> git clone git@github.com:winlibs/libjpeg.git
Cloning into 'libjpeg'...
remote: Enumerating objects: 1563, done.
remote: Counting objects: 100% (994/994), done.
remote: Compressing objects: 100% (477/477), done.
remote: Total 1563 (delta 535), reused 893 (delta 497), pack-reused 569 (from 1)
Receiving objects: 100% (1563/1563), 5.02 MiB | 2.69 MiB/s, done.
Resolving deltas: 100% (922/922), done.
```


```
cmake .. -DCMAKE_PREFIX_PATH="C:/dev/CGAL"
```

```
== CMake setup ==
== CMake setup (DONE) ==

Build CGAL from git-branch: master
Removed not-a-package: .clang-format;.clang-tidy;.devcontainer;.gitattributes;.github;.gitignore;.markdownlint.json;CGALConfig.cmake;CGALConfigVersion.cmake;Data;Documentation;INSTALL.md;LICENSE.md;LICENSES;Miscellany;README.md;REUSE.toml;build;cmake_uninstall.cmake.in
Include CGAL/Qt directories: D:/work/cgal_work/cgal/Arrangement_on_surface_2/include/CGAL/Qt;D:/work/cgal_work/cgal/Basic_viewer/include/CGAL/Qt;D:/work/cgal_work/cgal/GraphicsView/include/CGAL/Qt
Installation package directory: D:/work/cgal_work/cgal/Installation
Maintenance package directory: D:/work/cgal_work/cgal/Maintenance
Core package directory: D:/work/cgal_work/cgal/Core
Packagenames: AABB_tree;
Advancing_front_surface_reconstruction;
Algebraic_foundations;
Algebraic_kernel_d;
Algebraic_kernel_for_circles;
Algebraic_kernel_for_spheres;
Alpha_shapes_2;Alpha_shapes_3;
Alpha_wrap_3;Apollonius_graph_2;
Arithmetic_kernel;
Arrangement_on_surface_2;
BGL;Barycentric_coordinates_2;
Basic_viewer;Boolean_set_operations_2;
Bounding_volumes;Box_intersection_d;
CGAL_Core;CGAL_ImageIO;
CGAL_ipelets;Cartesian_kernel;
Circular_kernel_2;
Circular_kernel_3;
Circulator;Classification;
Combinatorial_map;Cone_spanners_2;
Constrained_triangulation_3;
Convex_decomposition_3;
Convex_hull_2;Convex_hull_3;
Convex_hull_d;Distance_2;
Distance_3;
Envelope_2;
Envelope_3;
Filtered_kernel;
Frechet_distance;
Generalized_map;
Generator;GraphicsView;
HalfedgeDS;
Hash_map;
Heat_method_3;
Homogeneous_kernel;
Hyperbolic_triangulation_2;
Inscribed_areas;
Installation;
Interpolation;
Intersections_2;
Intersections_3;
Interval_skip_list;
Interval_support;
Isosurfacing_3;
Jet_fitting_3;
Kernel_23;
Kernel_d;
Kinetic_space_partition;
Kinetic_surface_reconstruction;
LEDA;
Lab;
Linear_cell_complex;
Maintenance;
Matrix_search;
Mesh_2;
Mesh_3;
Mesher_level;
Minkowski_sum_2;
Minkowski_sum_3;
Modifier;
Modular_arithmetic;
Nef_2;
Nef_3;
Nef_S2;
NewKernel_d;
Number_types;
Optimal_bounding_box;
Optimal_transportation_reconstruction_2;
Optimisation_basic;
Orthtree;
Partition_2;
Periodic_2_triangulation_2;
Periodic_3_mesh_3;
Periodic_3_triangulation_3;
Periodic_4_hyperbolic_triangulation_2;
Point_set_2;
Point_set_3;
Point_set_processing_3;
Poisson_surface_reconstruction_3;
Polygon;
Polygon_mesh_processing;
Polygon_repair;
Polygonal_surface_reconstruction;
Polyhedron;
Polyline_simplification_2;
Polynomial;
Polytope_distance_d;
Principal_component_analysis;
Principal_component_analysis_LGPL;
Profiling_tools;
Property_map;
QP_solver;
Random_numbers;
Ridges_3;
SMDS_3;
STL_Extension;
Scale_space_reconstruction_3;
Scripts;
SearchStructures;
Segment_Delaunay_graph_2;
Segment_Delaunay_graph_Linf_2;
Set_movable_separability_2;
Shape_detection;
Shape_regularization;
Skin_surface_3;
Snap_rounding_2;
Solver_interface;
Spatial_searching;
Spatial_sorting;
Straight_skeleton_2;
Straight_skeleton_extrusion_2;
Stream_lines_2;
Stream_support;
Subdivision_method_3;
Surface_mesh;
Surface_mesh_approximation;
Surface_mesh_deformation;
Surface_mesh_parameterization;
Surface_mesh_segmentation;
Surface_mesh_shortest_path;
Surface_mesh_simplification;
Surface_mesh_skeletonization;
Surface_mesh_topology;
Surface_mesher;
Surface_sweep_2;
TDS_2;
TDS_3;
Testsuite;
Tetrahedral_remeshing;
Three;
Triangulation;
Triangulation_2;
Triangulation_3;
Triangulation_on_hyperbolic_surface_2;
Triangulation_on_sphere_2;
Union_find;Visibility_2;
Voronoi_diagram_2;
Weights
== Setting paths (DONE) ==

== Generate version files ==
CGAL_VERSION is 6.1-I-900
CGAL_VERSION_NR is 1060100900
CGAL_GIT_HASH is 
CGAL_CREATED_SVN_REVISION is 99999 (dummy)
CGAL_MAJOR_VERSION=6
CGAL_MINOR_VERSION=1
CGAL_BUGFIX_VERSION=0
CGAL_BUILD_VERSION=900
Visual Leak Detector (VLD) is not found.
Targeting Visual Studio 17 2022
Target build environment supports auto-linking
Using VC toolset 143.
Generator uses intermediate configuration directory: $(Configuration)
USING CMake version: 4.1.0
System: Windows
== Generate version files (DONE) ==

Multi-configuration CMake generator: cannot display flags
== Detect external libraries ==
== Detect external libraries (DONE) ==

== Generating build files ==
== Generating build files (DONE) ==

== Setting paths ==
Configuring done (0.2s)
Generating done (0.1s)
```

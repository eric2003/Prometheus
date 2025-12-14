# Babysimu

## 第一步：安装 TDW 并跑通官方 demo

### 安装 TDW

#### pip install tdw
```
PS C:\Users\eric> pip install tdw
Collecting tdw
  Downloading tdw-1.13.0.0.tar.gz (22.3 MB)
     ---------------------------------------- 22.3/22.3 MB 94.2 kB/s  0:03:51
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... done
Collecting pyzmq (from tdw)
  Downloading pyzmq-27.1.0-cp312-abi3-win_amd64.whl.metadata (6.0 kB)
Requirement already satisfied: numpy in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tdw) (2.3.4)
Requirement already satisfied: scipy in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tdw) (1.16.2)
Requirement already satisfied: pillow in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tdw) (12.0.0)
Requirement already satisfied: tqdm in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tdw) (4.67.1)
Collecting psutil (from tdw)
  Downloading psutil-7.1.2-cp37-abi3-win_amd64.whl.metadata (23 kB)
Collecting boto3 (from tdw)
  Downloading boto3-1.40.63-py3-none-any.whl.metadata (6.6 kB)
Collecting botocore (from tdw)
  Downloading botocore-1.40.63-py3-none-any.whl.metadata (5.7 kB)
Requirement already satisfied: requests in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tdw) (2.32.5)
Collecting pyinstaller (from tdw)
  Downloading pyinstaller-6.16.0-py3-none-win_amd64.whl.metadata (8.5 kB)
Collecting overrides (from tdw)
  Using cached overrides-7.7.0-py3-none-any.whl.metadata (5.8 kB)
Requirement already satisfied: packaging in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tdw) (25.0)
Collecting pydub (from tdw)
  Using cached pydub-0.25.1-py2.py3-none-any.whl.metadata (1.4 kB)
Collecting ikpy==3.1 (from tdw)
  Downloading ikpy-3.1-py3-none-any.whl.metadata (446 bytes)
Collecting screeninfo (from tdw)
  Using cached screeninfo-0.8.1-py3-none-any.whl.metadata (2.9 kB)
Collecting inflection (from tdw)
  Downloading inflection-0.5.1-py2.py3-none-any.whl.metadata (1.7 kB)
Requirement already satisfied: sympy in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from ikpy==3.1->tdw) (1.14.0)
Collecting jmespath<2.0.0,>=0.7.1 (from boto3->tdw)
  Downloading jmespath-1.0.1-py3-none-any.whl.metadata (7.6 kB)
Collecting s3transfer<0.15.0,>=0.14.0 (from boto3->tdw)
  Downloading s3transfer-0.14.0-py3-none-any.whl.metadata (1.7 kB)
Collecting python-dateutil<3.0.0,>=2.1 (from botocore->tdw)
  Using cached python_dateutil-2.9.0.post0-py2.py3-none-any.whl.metadata (8.4 kB)
Requirement already satisfied: urllib3!=2.2.0,<3,>=1.25.4 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from botocore->tdw) (2.5.0)
Collecting six>=1.5 (from python-dateutil<3.0.0,>=2.1->botocore->tdw)
  Downloading six-1.17.0-py2.py3-none-any.whl.metadata (1.7 kB)
Collecting altgraph (from pyinstaller->tdw)
  Downloading altgraph-0.17.4-py2.py3-none-any.whl.metadata (7.3 kB)
Collecting pefile!=2024.8.26,>=2022.5.30 (from pyinstaller->tdw)
  Downloading pefile-2023.2.7-py3-none-any.whl.metadata (1.4 kB)
Collecting pyinstaller-hooks-contrib>=2025.8 (from pyinstaller->tdw)
  Downloading pyinstaller_hooks_contrib-2025.9-py3-none-any.whl.metadata (16 kB)
Collecting pywin32-ctypes>=0.2.1 (from pyinstaller->tdw)
  Downloading pywin32_ctypes-0.2.3-py3-none-any.whl.metadata (3.9 kB)
Requirement already satisfied: setuptools>=42.0.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from pyinstaller->tdw) (80.9.0)
Requirement already satisfied: charset_normalizer<4,>=2 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests->tdw) (3.4.4)
Requirement already satisfied: idna<4,>=2.5 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests->tdw) (3.11)
Requirement already satisfied: certifi>=2017.4.17 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests->tdw) (2025.10.5)
Requirement already satisfied: mpmath<1.4,>=1.1.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from sympy->ikpy==3.1->tdw) (1.3.0)
Requirement already satisfied: colorama in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from tqdm->tdw) (0.4.6)
Downloading ikpy-3.1-py3-none-any.whl (23 kB)
Downloading boto3-1.40.63-py3-none-any.whl (139 kB)
Downloading botocore-1.40.63-py3-none-any.whl (14.1 MB)
   ---------------------------------------- 14.1/14.1 MB 75.7 kB/s  0:02:39
Downloading jmespath-1.0.1-py3-none-any.whl (20 kB)
Using cached python_dateutil-2.9.0.post0-py2.py3-none-any.whl (229 kB)
Downloading s3transfer-0.14.0-py3-none-any.whl (85 kB)
Downloading six-1.17.0-py2.py3-none-any.whl (11 kB)
Downloading inflection-0.5.1-py2.py3-none-any.whl (9.5 kB)
Using cached overrides-7.7.0-py3-none-any.whl (17 kB)
Downloading psutil-7.1.2-cp37-abi3-win_amd64.whl (246 kB)
Using cached pydub-0.25.1-py2.py3-none-any.whl (32 kB)
Downloading pyinstaller-6.16.0-py3-none-win_amd64.whl (1.4 MB)
   ---------------------------------------- 1.4/1.4 MB 92.2 kB/s  0:00:14
Downloading pefile-2023.2.7-py3-none-any.whl (71 kB)
Downloading pyinstaller_hooks_contrib-2025.9-py3-none-any.whl (444 kB)
Downloading pywin32_ctypes-0.2.3-py3-none-any.whl (30 kB)
Downloading altgraph-0.17.4-py2.py3-none-any.whl (21 kB)
Downloading pyzmq-27.1.0-cp312-abi3-win_amd64.whl (619 kB)
   ---------------------------------------- 619.5/619.5 kB 67.7 kB/s  0:00:07
Using cached screeninfo-0.8.1-py3-none-any.whl (12 kB)
Building wheels for collected packages: tdw
  Building wheel for tdw (pyproject.toml) ... done
  Created wheel for tdw: filename=tdw-1.13.0.0-py3-none-any.whl size=24149654 sha256=2e88aad987cebd1f077b667ac9d8aacaac3c04b2a1b3591ab7657b3129d29756
  Stored in directory: c:\users\eric\appdata\local\pip\cache\wheels\92\36\35\ea1dc0a7e4d96212a69843fef395083a1029d1d7a4c9ba3dbf
Successfully built tdw
Installing collected packages: pydub, altgraph, six, screeninfo, pyzmq, pywin32-ctypes, pyinstaller-hooks-contrib, psutil, pefile, overrides, jmespath, inflection, python-dateutil, pyinstaller, ikpy, botocore, s3transfer, boto3, tdw
Successfully installed altgraph-0.17.4 boto3-1.40.63 botocore-1.40.63 ikpy-3.1 inflection-0.5.1 jmespath-1.0.1 overrides-7.7.0 pefile-2023.2.7 psutil-7.1.2 pydub-0.25.1 pyinstaller-6.16.0 pyinstaller-hooks-contrib-2025.9 python-dateutil-2.9.0.post0 pywin32-ctypes-0.2.3 pyzmq-27.1.0 s3transfer-0.14.0 screeninfo-0.8.1 six-1.17.0 tdw-1.13.0.0

[notice] A new release of pip is available: 25.2 -> 25.3
[notice] To update, run: python.exe -m pip install --upgrade pip
PS C:\Users\eric>
```

#### pip install opencv-python
```
PS C:\Users\eric> pip install opencv-python
Collecting opencv-python
  Downloading opencv_python-4.12.0.88-cp37-abi3-win_amd64.whl.metadata (19 kB)
Collecting numpy<2.3.0,>=2 (from opencv-python)
  Downloading numpy-2.2.6.tar.gz (20.3 MB)
     ---------------------------------------- 20.3/20.3 MB 103.2 kB/s  0:03:41
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Installing backend dependencies ... done
  Preparing metadata (pyproject.toml) ... done
Downloading opencv_python-4.12.0.88-cp37-abi3-win_amd64.whl (39.0 MB)
   ---------------------------------------- 39.0/39.0 MB 80.7 kB/s  0:09:21
Building wheels for collected packages: numpy
  Building wheel for numpy (pyproject.toml) ... done
  Created wheel for numpy: filename=numpy-2.2.6-cp314-cp314-win_amd64.whl size=6935666 sha256=dafbbcd2ea0cb6378fee2cd076bd9d90af4aad24ff2bd6b7e9654de653aa4a53
  Stored in directory: c:\users\eric\appdata\local\pip\cache\wheels\83\be\bb\986b1bdc6955e697e6c56b03ef4aa1d67eb2c9fbeaf8e2804f
Successfully built numpy
Installing collected packages: numpy, opencv-python
  Attempting uninstall: numpy
    Found existing installation: numpy 2.3.4
    Uninstalling numpy-2.3.4:
      Successfully uninstalled numpy-2.3.4
Successfully installed numpy-2.2.6 opencv-python-4.12.0.88
PS C:\Users\eric>
```

#### py -3.14 -m pip install mkdocs
```
PS C:\Users\eric> py -3.14 -m pip install mkdocs
Collecting mkdocs
  Using cached mkdocs-1.6.1-py3-none-any.whl.metadata (6.0 kB)
Collecting click>=7.0 (from mkdocs)
  Downloading click-8.3.0-py3-none-any.whl.metadata (2.6 kB)
Requirement already satisfied: colorama>=0.4 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs) (0.4.6)
Collecting ghp-import>=1.0 (from mkdocs)
  Using cached ghp_import-2.1.0-py3-none-any.whl.metadata (7.2 kB)
Requirement already satisfied: jinja2>=2.11.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs) (3.1.6)
Collecting markdown>=3.3.6 (from mkdocs)
  Downloading markdown-3.9-py3-none-any.whl.metadata (5.1 kB)
Requirement already satisfied: markupsafe>=2.0.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs) (3.0.3)
Collecting mergedeep>=1.3.4 (from mkdocs)
  Using cached mergedeep-1.3.4-py3-none-any.whl.metadata (4.3 kB)
Collecting mkdocs-get-deps>=0.2.0 (from mkdocs)
  Using cached mkdocs_get_deps-0.2.0-py3-none-any.whl.metadata (4.0 kB)
Requirement already satisfied: packaging>=20.5 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs) (25.0)
Collecting pathspec>=0.11.1 (from mkdocs)
  Using cached pathspec-0.12.1-py3-none-any.whl.metadata (21 kB)
Collecting pyyaml-env-tag>=0.1 (from mkdocs)
  Downloading pyyaml_env_tag-1.1-py3-none-any.whl.metadata (5.5 kB)
Requirement already satisfied: pyyaml>=5.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs) (6.0.3)
Collecting watchdog>=2.0 (from mkdocs)
  Downloading watchdog-6.0.0-py3-none-win_amd64.whl.metadata (44 kB)
Requirement already satisfied: python-dateutil>=2.8.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from ghp-import>=1.0->mkdocs) (2.9.0.post0)
Collecting platformdirs>=2.2.0 (from mkdocs-get-deps>=0.2.0->mkdocs)
  Downloading platformdirs-4.5.0-py3-none-any.whl.metadata (12 kB)
Requirement already satisfied: six>=1.5 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from python-dateutil>=2.8.1->ghp-import>=1.0->mkdocs) (1.17.0)
Using cached mkdocs-1.6.1-py3-none-any.whl (3.9 MB)
Downloading click-8.3.0-py3-none-any.whl (107 kB)
Using cached ghp_import-2.1.0-py3-none-any.whl (11 kB)
Downloading markdown-3.9-py3-none-any.whl (107 kB)
Using cached mergedeep-1.3.4-py3-none-any.whl (6.4 kB)
Using cached mkdocs_get_deps-0.2.0-py3-none-any.whl (9.5 kB)
Using cached pathspec-0.12.1-py3-none-any.whl (31 kB)
Downloading platformdirs-4.5.0-py3-none-any.whl (18 kB)
Downloading pyyaml_env_tag-1.1-py3-none-any.whl (4.7 kB)
Downloading watchdog-6.0.0-py3-none-win_amd64.whl (79 kB)
Installing collected packages: watchdog, pyyaml-env-tag, platformdirs, pathspec, mergedeep, markdown, click, mkdocs-get-deps, ghp-import, mkdocs
Successfully installed click-8.3.0 ghp-import-2.1.0 markdown-3.9 mergedeep-1.3.4 mkdocs-1.6.1 mkdocs-get-deps-0.2.0 pathspec-0.12.1 platformdirs-4.5.0 pyyaml-env-tag-1.1 watchdog-6.0.0
PS C:\Users\eric>
```

#### py -3.14 -m pip install mkdocs-material
```
PS C:\Users\eric> py -3.14 -m pip install mkdocs-material
Collecting mkdocs-material
  Downloading mkdocs_material-9.6.22-py3-none-any.whl.metadata (19 kB)
Collecting babel~=2.10 (from mkdocs-material)
  Downloading babel-2.17.0-py3-none-any.whl.metadata (2.0 kB)
Collecting backrefs~=5.7.post1 (from mkdocs-material)
  Downloading backrefs-5.9-py314-none-any.whl.metadata (3.2 kB)
Requirement already satisfied: colorama~=0.4 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs-material) (0.4.6)
Requirement already satisfied: jinja2~=3.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs-material) (3.1.6)
Requirement already satisfied: markdown~=3.2 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs-material) (3.9)
Collecting mkdocs-material-extensions~=1.3 (from mkdocs-material)
  Using cached mkdocs_material_extensions-1.3.1-py3-none-any.whl.metadata (6.9 kB)
Requirement already satisfied: mkdocs~=1.6 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs-material) (1.6.1)
Collecting paginate~=0.5 (from mkdocs-material)
  Using cached paginate-0.5.7-py2.py3-none-any.whl.metadata (11 kB)
Collecting pygments~=2.16 (from mkdocs-material)
  Downloading pygments-2.19.2-py3-none-any.whl.metadata (2.5 kB)
Collecting pymdown-extensions~=10.2 (from mkdocs-material)
  Downloading pymdown_extensions-10.16.1-py3-none-any.whl.metadata (3.1 kB)
Requirement already satisfied: requests~=2.26 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs-material) (2.32.5)
Requirement already satisfied: MarkupSafe>=2.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from jinja2~=3.1->mkdocs-material) (3.0.3)
Requirement already satisfied: click>=7.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (8.3.0)
Requirement already satisfied: ghp-import>=1.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (2.1.0)
Requirement already satisfied: mergedeep>=1.3.4 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (1.3.4)
Requirement already satisfied: mkdocs-get-deps>=0.2.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (0.2.0)
Requirement already satisfied: packaging>=20.5 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (25.0)
Requirement already satisfied: pathspec>=0.11.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (0.12.1)
Requirement already satisfied: pyyaml-env-tag>=0.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (1.1)
Requirement already satisfied: pyyaml>=5.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (6.0.3)
Requirement already satisfied: watchdog>=2.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs~=1.6->mkdocs-material) (6.0.0)
Requirement already satisfied: charset_normalizer<4,>=2 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests~=2.26->mkdocs-material) (3.4.4)
Requirement already satisfied: idna<4,>=2.5 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests~=2.26->mkdocs-material) (3.11)
Requirement already satisfied: urllib3<3,>=1.21.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests~=2.26->mkdocs-material) (2.5.0)
Requirement already satisfied: certifi>=2017.4.17 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from requests~=2.26->mkdocs-material) (2025.10.5)
Requirement already satisfied: python-dateutil>=2.8.1 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from ghp-import>=1.0->mkdocs~=1.6->mkdocs-material) (2.9.0.post0)
Requirement already satisfied: platformdirs>=2.2.0 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from mkdocs-get-deps>=0.2.0->mkdocs~=1.6->mkdocs-material) (4.5.0)
Requirement already satisfied: six>=1.5 in c:\users\eric\appdata\local\programs\python\python314\lib\site-packages (from python-dateutil>=2.8.1->ghp-import>=1.0->mkdocs~=1.6->mkdocs-material) (1.17.0)
Downloading mkdocs_material-9.6.22-py3-none-any.whl (9.2 MB)
   ---------------------------------------- 9.2/9.2 MB 74.8 kB/s  0:01:56
Downloading babel-2.17.0-py3-none-any.whl (10.2 MB)
   ---------------------------------------- 10.2/10.2 MB 89.3 kB/s  0:01:52
Downloading backrefs-5.9-py314-none-any.whl (411 kB)
Using cached mkdocs_material_extensions-1.3.1-py3-none-any.whl (8.7 kB)
Using cached paginate-0.5.7-py2.py3-none-any.whl (13 kB)
Downloading pygments-2.19.2-py3-none-any.whl (1.2 MB)
   ---------------------------------------- 1.2/1.2 MB 80.5 kB/s  0:00:14
Downloading pymdown_extensions-10.16.1-py3-none-any.whl (266 kB)
Installing collected packages: paginate, pymdown-extensions, pygments, mkdocs-material-extensions, backrefs, babel, mkdocs-material
Successfully installed babel-2.17.0 backrefs-5.9 mkdocs-material-9.6.22 mkdocs-material-extensions-1.3.1 paginate-0.5.7 pygments-2.19.2 pymdown-extensions-10.16.1
```

#### py -3.10 -m venv venv310
```
PS D:\github\babysimu> py -3.10 -m venv venv310
PS D:\github\babysimu> ls

    Directory: D:\github\babysimu

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2025/11/1     0:24                venv310
```

#### .\venv310\Scripts\Activate.ps1
```
PS D:\github\babysimu> .\venv310\Scripts\Activate.ps1
(venv310) PS D:\github\babysimu>
```

#### pip install tdw
```
(venv310) PS D:\github\babysimu\01> pip install tdw
Collecting tdw
  Downloading tdw-1.13.0.0.tar.gz (22.3 MB)
     ---------------------------------------- 22.3/22.3 MB 145.6 kB/s eta 0:00:00
  Preparing metadata (setup.py) ... done
Collecting pyzmq
  Downloading pyzmq-27.1.0-cp310-cp310-win_amd64.whl (632 kB)
     ---------------------------------------- 632.2/632.2 kB 127.2 kB/s eta 0:00:00
Collecting numpy
  Downloading numpy-2.2.6-cp310-cp310-win_amd64.whl (12.9 MB)
     ---------------------------------------- 12.9/12.9 MB 181.7 kB/s eta 0:00:00
Collecting scipy
  Downloading scipy-1.15.3-cp310-cp310-win_amd64.whl (41.3 MB)
     ---------------------------------------- 41.3/41.3 MB 280.9 kB/s eta 0:00:00
Collecting pillow
  Downloading pillow-12.0.0-cp310-cp310-win_amd64.whl (7.0 MB)
     ---------------------------------------- 7.0/7.0 MB 290.7 kB/s eta 0:00:00
Collecting tqdm
  Downloading tqdm-4.67.1-py3-none-any.whl (78 kB)
     ---------------------------------------- 78.5/78.5 kB 726.6 kB/s eta 0:00:00
Collecting psutil
  Downloading psutil-7.1.2-cp37-abi3-win_amd64.whl (246 kB)
     ---------------------------------------- 246.7/246.7 kB 308.7 kB/s eta 0:00:00
Collecting boto3
  Downloading boto3-1.40.63-py3-none-any.whl (139 kB)
     ---------------------------------------- 139.3/139.3 kB 305.9 kB/s eta 0:00:00
Collecting botocore
  Downloading botocore-1.40.63-py3-none-any.whl (14.1 MB)
     ---------------------------------------- 14.1/14.1 MB 292.2 kB/s eta 0:00:00
Collecting requests
  Downloading requests-2.32.5-py3-none-any.whl (64 kB)
     ---------------------------------------- 64.7/64.7 kB 579.8 kB/s eta 0:00:00
Collecting pyinstaller
  Downloading pyinstaller-6.16.0-py3-none-win_amd64.whl (1.4 MB)
     ---------------------------------------- 1.4/1.4 MB 304.3 kB/s eta 0:00:00
Collecting overrides
  Downloading overrides-7.7.0-py3-none-any.whl (17 kB)
Collecting packaging
  Downloading packaging-25.0-py3-none-any.whl (66 kB)
     ---------------------------------------- 66.5/66.5 kB 163.5 kB/s eta 0:00:00
Collecting pydub
  Downloading pydub-0.25.1-py2.py3-none-any.whl (32 kB)
Collecting ikpy==3.1
  Downloading ikpy-3.1-py3-none-any.whl (23 kB)
Collecting screeninfo
  Downloading screeninfo-0.8.1-py3-none-any.whl (12 kB)
Collecting inflection
  Downloading inflection-0.5.1-py2.py3-none-any.whl (9.5 kB)
Collecting sympy
  Downloading sympy-1.14.0-py3-none-any.whl (6.3 MB)
     ---------------------------------------- 6.3/6.3 MB 263.4 kB/s eta 0:00:00
Collecting jmespath<2.0.0,>=0.7.1
  Downloading jmespath-1.0.1-py3-none-any.whl (20 kB)
Collecting s3transfer<0.15.0,>=0.14.0
  Downloading s3transfer-0.14.0-py3-none-any.whl (85 kB)
     ---------------------------------------- 85.7/85.7 kB 692.4 kB/s eta 0:00:00
Collecting python-dateutil<3.0.0,>=2.1
  Downloading python_dateutil-2.9.0.post0-py2.py3-none-any.whl (229 kB)
     ---------------------------------------- 229.9/229.9 kB 351.4 kB/s eta 0:00:00
Collecting urllib3!=2.2.0,<3,>=1.25.4
  Downloading urllib3-2.5.0-py3-none-any.whl (129 kB)
     ---------------------------------------- 129.8/129.8 kB 305.8 kB/s eta 0:00:00
Collecting pyinstaller-hooks-contrib>=2025.8
  Downloading pyinstaller_hooks_contrib-2025.9-py3-none-any.whl (444 kB)
     ---------------------------------------- 444.3/444.3 kB 229.5 kB/s eta 0:00:00
Requirement already satisfied: setuptools>=42.0.0 in d:\github\babysimu\venv310\lib\site-packages (from pyinstaller->tdw) (65.5.0)
Collecting altgraph
  Downloading altgraph-0.17.4-py2.py3-none-any.whl (21 kB)
Collecting pefile!=2024.8.26,>=2022.5.30
  Downloading pefile-2023.2.7-py3-none-any.whl (71 kB)
     ---------------------------------------- 71.8/71.8 kB 436.5 kB/s eta 0:00:00
Collecting pywin32-ctypes>=0.2.1
  Downloading pywin32_ctypes-0.2.3-py3-none-any.whl (30 kB)
Collecting certifi>=2017.4.17
  Downloading certifi-2025.10.5-py3-none-any.whl (163 kB)
     ---------------------------------------- 163.3/163.3 kB 239.1 kB/s eta 0:00:00
Collecting charset_normalizer<4,>=2
  Downloading charset_normalizer-3.4.4-cp310-cp310-win_amd64.whl (107 kB)
     ---------------------------------------- 107.2/107.2 kB 326.5 kB/s eta 0:00:00
Collecting idna<4,>=2.5
  Downloading idna-3.11-py3-none-any.whl (71 kB)
     ---------------------------------------- 71.0/71.0 kB 431.0 kB/s eta 0:00:00
Collecting colorama
  Using cached colorama-0.4.6-py2.py3-none-any.whl (25 kB)
Collecting six>=1.5
  Downloading six-1.17.0-py2.py3-none-any.whl (11 kB)
Collecting mpmath<1.4,>=1.1.0
  Downloading mpmath-1.3.0-py3-none-any.whl (536 kB)
     ---------------------------------------- 536.2/536.2 kB 285.2 kB/s eta 0:00:00
Installing collected packages: pydub, mpmath, altgraph, urllib3, sympy, six, screeninfo, pyzmq, pywin32-ctypes, psutil, pillow, pefile, packaging, overrides, numpy, jmespath, inflection, idna, colorama, charset_normalizer, certifi, tqdm, scipy, requests, python-dateutil, pyinstaller-hooks-contrib, pyinstaller, ikpy, botocore, s3transfer, boto3, tdw
  DEPRECATION: tdw is being installed using the legacy 'setup.py install' method, because it does not have a 'pyproject.toml' and the 'wheel' package is not installed. pip 23.1 will enforce this behaviour change. A possible replacement is to enable the '--use-pep517' option. Discussion can be found at https://github.com/pypa/pip/issues/8559
  Running setup.py install for tdw ... done
Successfully installed altgraph-0.17.4 boto3-1.40.63 botocore-1.40.63 certifi-2025.10.5 charset_normalizer-3.4.4 colorama-0.4.6 idna-3.11 ikpy-3.1 inflection-0.5.1 jmespath-1.0.1 mpmath-1.3.0 numpy-2.2.6 overrides-7.7.0 packaging-25.0 pefile-2023.2.7 pillow-12.0.0 psutil-7.1.2 pydub-0.25.1 pyinstaller-6.16.0 pyinstaller-hooks-contrib-2025.9 python-dateutil-2.9.0.post0 pywin32-ctypes-0.2.3 pyzmq-27.1.0 requests-2.32.5 s3transfer-0.14.0 scipy-1.15.3 screeninfo-0.8.1 six-1.17.0 sympy-1.14.0 tdw-1.13.0.0 tqdm-4.67.1 urllib3-2.5.0

[notice] A new release of pip is available: 23.0.1 -> 25.3
[notice] To update, run: python.exe -m pip install --upgrade pip
(venv310) PS D:\github\babysimu\01>
```

## 第二步：切换到“婴儿avatar”第一人称视角
```
现在我们不要第三人称摄像头，而是：
创建一个婴儿avatar（TDW 支持）
把摄像头绑在婴儿头部
让你能控制婴儿转头、爬行
```

### 创建婴儿avatar（TDW 已支持）

```
```


```
(venv310) PS D:\github\babysimu\01> python -c "import gymnasium as gym; import mujoco; import torch; print('Gymnasium:', gym.__version__); print('MuJoCo:', mujoco.__version__); print('PyTorch:', torch.__version__); print('All good!')"
Gymnasium: 0.29.1
MuJoCo: 3.1.6
PyTorch: 2.9.0+cpu
All good!
```
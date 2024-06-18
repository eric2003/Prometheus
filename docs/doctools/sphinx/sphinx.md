# Sphinx

## Article link

-  [Tutorials - Olga Matoula, Aya Elsayed: Automate Documentation with Sphinx & GitHub Actions](https://www.youtube.com/watch?v=_K6cLQufv9k/).
-  [Sphinx tutorial](https://olgarithms.github.io/sphinx-tutorial/).
-  [Sphinx to GitHub Pages via GitHub Actions](https://redandgreen.co.uk/sphinx-to-github-pages-via-github-actions/).
-  [Introduction to Sphinx Python Document Generation](https://www.youtube.com/watch?v=nZttMg_n_s0/).
-  [Document Your Scientific Project With Markdown, Sphinx, and Read the Docs | PyData Global 2021](https://www.youtube.com/watch?v=qRSb299awB0/).
-  [[22] Sphinx for Python Documentation Tutorial (Melissa Weber Mendonça)](https://www.youtube.com/watch?v=tXWscUSYdBs/).


## step
```
git clone https://github.com/eric2003/Sphinx-Site.git
```

Debian/Ubuntu
安装以下任一 python3-sphinx 使用 apt-get ：
```
sudo apt-get install python3-sphinx
python3 -m pip install sudo sphinx
```

mkdir 
```
mkdir test-sphinx
cd test-sphinx
mkdir docs
cd docs
sphinx-quickstart
n
testprj
eric
1.0.2
```

sphinx-build --version
```
sphinx-build --version
typical results:
PS C:\Users\eric> sphinx-build --version
sphinx-build 7.2.6
```

pip uninstall sphinx
```
PS C:\Users\eric> pip uninstall sphinx
Found existing installation: Sphinx 7.2.6
Uninstalling Sphinx-7.2.6:
  Would remove:
    c:\users\eric\appdata\local\programs\python\python312\lib\site-packages\sphinx-7.2.6.dist-info\*
    c:\users\eric\appdata\local\programs\python\python312\lib\site-packages\sphinx\*
    c:\users\eric\appdata\local\programs\python\python312\scripts\sphinx-apidoc.exe
    c:\users\eric\appdata\local\programs\python\python312\scripts\sphinx-autogen.exe
    c:\users\eric\appdata\local\programs\python\python312\scripts\sphinx-build.exe
    c:\users\eric\appdata\local\programs\python\python312\scripts\sphinx-quickstart.exe
Proceed (Y/n)? y
  Successfully uninstalled Sphinx-7.2.6
```

pip install -U sphinx
```
PS C:\Users\eric> pip install -U sphinx
Collecting sphinx
  Downloading sphinx-7.3.7-py3-none-any.whl.metadata (6.0 kB)
Requirement already satisfied: sphinxcontrib-applehelp in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (1.0.7)
Requirement already satisfied: sphinxcontrib-devhelp in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (1.0.5)
Requirement already satisfied: sphinxcontrib-jsmath in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (1.0.1)
Requirement already satisfied: sphinxcontrib-htmlhelp>=2.0.0 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (2.0.4)
Requirement already satisfied: sphinxcontrib-serializinghtml>=1.1.9 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (1.1.9)
Requirement already satisfied: sphinxcontrib-qthelp in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (1.0.6)
Requirement already satisfied: Jinja2>=3.0 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (3.1.2)
Requirement already satisfied: Pygments>=2.14 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (2.17.2)
Requirement already satisfied: docutils<0.22,>=0.18.1 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (0.20.1)
Requirement already satisfied: snowballstemmer>=2.0 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (2.2.0)
Requirement already satisfied: babel>=2.9 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (2.14.0)
Collecting alabaster~=0.7.14 (from sphinx)
  Downloading alabaster-0.7.16-py3-none-any.whl.metadata (2.9 kB)
Requirement already satisfied: imagesize>=1.3 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (1.4.1)
Requirement already satisfied: requests>=2.25.0 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (2.31.0)
Requirement already satisfied: packaging>=21.0 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (23.2)
Requirement already satisfied: colorama>=0.4.5 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from sphinx) (0.4.6)
Requirement already satisfied: MarkupSafe>=2.0 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from Jinja2>=3.0->sphinx) (2.1.3)
Requirement already satisfied: charset-normalizer<4,>=2 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from requests>=2.25.0->sphinx) (3.3.2)
Requirement already satisfied: idna<4,>=2.5 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from requests>=2.25.0->sphinx) (3.6)
Requirement already satisfied: urllib3<3,>=1.21.1 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from requests>=2.25.0->sphinx) (2.1.0)
Requirement already satisfied: certifi>=2017.4.17 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from requests>=2.25.0->sphinx) (2023.11.17)
Downloading sphinx-7.3.7-py3-none-any.whl (3.3 MB)
   ---------------------------------------- 3.3/3.3 MB 6.9 MB/s eta 0:00:00
Downloading alabaster-0.7.16-py3-none-any.whl (13 kB)
Installing collected packages: alabaster, sphinx
  Attempting uninstall: alabaster
    Found existing installation: alabaster 0.7.13
    Uninstalling alabaster-0.7.13:
      Successfully uninstalled alabaster-0.7.13
Successfully installed alabaster-0.7.16 sphinx-7.3.7
```

check new version
```
PS C:\Users\eric> sphinx-build --version
sphinx-build 7.3.7
```

sphinx-build
```
sphinx-build -b html ./ _build/html
```

version 2
```
sphinx-build -b html source/ build/html
```

## error

### Could not import extension breathe 

```
Could not import extension breathe (exception: No module named 'breathe')
```

modify
```powershell
pip install breathe
```

# MkDocs

## Article Links

-  [MkDocs](https://www.mkdocs.org/).
-  [GitHub Pages 个人网站构建与发布](https://www.bilibili.com/video/BV1hL4y1w72r/).


## mkdocs serve

```
mkdocs serve
```

## Write formulas

-  [Write formulas](https://mkdocs-magicspace.alnoda.org/tutorials/markdown/formulas/).
-  [写数学公式的坑](https://yangzhang.site/Note/mkdocs/about_math/).


```
pip install pymdown-extensions
PS C:\Users\eric> pip install pymdown-extensions
Requirement already satisfied: pymdown-extensions in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (10.7)
Requirement already satisfied: markdown>=3.5 in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from pymdown-extensions) (3.5.2)
Requirement already satisfied: pyyaml in c:\users\eric\appdata\local\programs\python\python312\lib\site-packages (from pymdown-extensions) (6.0.1)
```

## Example

Inline and block formulas render differently. 

For example, this is $\sum_{i=0}^n i^2 = \frac{(n^2+\epsilon)(2n+1)}{6\phi}$
an inline mode) 

And the block mode looks like this (don't forget empty line!)

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

## mkdocs --version

```
PS C:\Users\eric> mkdocs --version
mkdocs, version 1.6.1 from C:\Users\eric\AppData\Local\Programs\Python\Python313\Lib\site-packages\mkdocs (Python 3.13)
```

## pip install -U mkdocs

```
PS C:\Users\eric> pip install -U mkdocs
Requirement already satisfied: mkdocs in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (1.6.1)
Requirement already satisfied: click>=7.0 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (8.1.7)
Requirement already satisfied: colorama>=0.4 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (0.4.6)
Requirement already satisfied: ghp-import>=1.0 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (2.1.0)
Requirement already satisfied: jinja2>=2.11.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (3.1.4)
Requirement already satisfied: markdown>=3.3.6 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (3.7)
Requirement already satisfied: markupsafe>=2.0.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (3.0.1)
Requirement already satisfied: mergedeep>=1.3.4 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (1.3.4)
Requirement already satisfied: mkdocs-get-deps>=0.2.0 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (0.2.0)
Requirement already satisfied: packaging>=20.5 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (24.1)
Requirement already satisfied: pathspec>=0.11.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (0.12.1)
Requirement already satisfied: pyyaml-env-tag>=0.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (0.1)
Requirement already satisfied: pyyaml>=5.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (6.0.2)
Requirement already satisfied: watchdog>=2.0 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs) (5.0.3)
Requirement already satisfied: python-dateutil>=2.8.1 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from ghp-import>=1.0->mkdocs) (2.9.0.post0)
Requirement already satisfied: platformdirs>=2.2.0 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from mkdocs-get-deps>=0.2.0->mkdocs) (4.3.6)
Requirement already satisfied: six>=1.5 in c:\users\eric\appdata\local\programs\python\python313\lib\site-packages (from python-dateutil>=2.8.1->ghp-import>=1.0->mkdocs) (1.16.0)
```

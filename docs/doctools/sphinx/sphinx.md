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

sphinx-build
```
sphinx-build -b html ./ _build/html
```

version 2
```
sphinx-build -b html source/ build/html
```
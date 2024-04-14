# Markdown

## Markdown Link

-  [www.markdownguide.org](https://www.markdownguide.org/).
-  [Quickstart for writing on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github/).
-  [How to use Markdown for writing technical documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/writing-essentials/markdown.html?lang=en/).
-  [20+ Useful Markdown Syntaxes for Developers](https://blog.greenroots.info/20-useful-markdown-syntaxes-for-developers/).
-  [How to write in Markdown](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN/).
-  [The Only Markdown Crash Course You Will Ever Need](https://www.youtube.com/watch?v=_PPWWRV6gbA/).
-  [Markdown Crash Course](https://blog.webdevsimplified.com/2023-06/markdown-crash-course/#interactive-markdown-editor/).
-  [Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html).
-  [GitHub Flavored Markdown Spec](https://github.github.com/gfm/).
-  [Markdown语法大全(超级版)](https://www.jianshu.com/p/ebe52d2d468f/).
-  [Mkdocs-et](https://pageperso.lis-lab.fr/~edouard.thiel/mkdocs-et/).
-  [Mkdocs-Python Markdown Extensions](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/).


## Learn X in Y Minutes

-  [Learn X in Y Minutes](https://www.youtube.com/watch?v=iiADhChRriM&list=PLZlA0Gpn_vH85jM1TWO6TdCtSr6ruglWn&index=1/).


## Youtuber

-  [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified/).


## Headings

`Just like HTML, Markdown has six levels of headings. Headings in Markdown are created by putting one to six # in front of your heading text with a space separating the # and text. Each # represents a heading level with # being the largest heading and ###### being the smallest heading. Here is an example of all six heading levels.`

input:
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Paragraphs

input:
```
This is a paragraph.
  
Since there is a new line between these two sentences they will be converted to two separate paragraphs.

This paragraph
has new lines in it
but
it will not show up as a new line in the output.

This paragraph
has two spaces HERE  
so it will push this onto a new line within the same paragraph.
```

output:

This is a paragraph.
  
Since there is a new line between these two sentences they will be converted to two separate paragraphs.

This paragraph
has new lines in it
but
it will not show up as a new line in the output.

This paragraph
has two spaces HERE  
so it will push this onto a new line within the same paragraph.


## Text Styling
input:
```
*This is italicized text*

_This is also italicized text_

**This is bold text**

__This is also bold text__
```

output:

*This is italicized text*

_This is also italicized text_

**This is bold text**

__This is also bold text__


input:
```
***This is both***

___This is also both___
```

output:

***This is both***

___This is also both___

## Strikethrough

input:
```
~~Crossed off~~
```

output:

~~Crossed off~~

## Highlight

input:
```
==Highlighted==

<mark>Highlighted</mark>
```

output:

==Highlighted==

<mark>Highlighted</mark>

## Superscript/Subscript

input:
```
This is a ^superscript^

This is a ~subscript~

This is a ~~subscript~~

This is a <sup>superscript</sup>

This is a <sub>subscript</sub>
```

output:

This is a ^superscript^

This is a ~subscript~

This is a ~~subscript~~

This is a <sup>superscript</sup>

This is a <sub>subscript</sub>

## Emoji

input:
```
:smile:
  
😊
```

output:

:smile:
  
😊

## Inline Code

input:
```
This is `inline code` within a paragraph.
```

output:

This is `inline code` within a paragraph.


## Code Blocks

input:

\`\`\`js

// This is a code block

const a = 1;

\`\`\`


output:

```js
// This is a code block
const a = 1;
```


## Links

input:
```
[This is a link](https://blog.webdevsimplified.com)
  
[Relative](/2023-06/markdown-crash-course)

https://blog.webdevsimplified.com

<https://blog.webdevsimplified.com>
```

output:

[This is a link](https://blog.webdevsimplified.com)
  
[Relative](/2023-06/markdown-crash-course)

https://blog.webdevsimplified.com

<https://blog.webdevsimplified.com>

## Images

input:
```
![RUNOOB 图标](https://static.jyshare.com/images/runoob-logo.png)
```

output:

![RUNOOB 图标](https://static.jyshare.com/images/runoob-logo.png)

## Blockquotes

input:
```
> This is a blockquote
>> This is a nested blockquote
```

output:

> This is a blockquote
>> This is a nested blockquote

## Horizontal Rule

input:
```
This is above the horizontal rule

***

This is between the horizontal rules

---

This is between the horizontal rules

___

This is below the horizontal rule
```

output:

This is above the horizontal rule

***

This is between the horizontal rules

---

This is between the horizontal rules

___

This is below the horizontal rule

## Lists

input:
```
- This is an unordered list
- Of items

1. This is an ordered list
2. The numbers do not matter
1. This says 3
    * This is a nested list
    * Of items
        1. This is a nested
        2. List of items
```

output:

- This is an unordered list
- Of items

1. This is an ordered list
2. The numbers do not matter
1. This says 3
    * This is a nested list
    * Of items
        1. This is a nested
        2. List of items
		
## Tables		

input:
```
| Col 1 | Col 2   |
| ----- | ------- |
| This  | is      |
| an    | example |
| table | with    |
| two   | columns |

| Right  | Center | Left |
| -----: | :----: | :--- |
| R      | C      | L    |

| Head One | Head Two |
| --- | --- |
| Does Not Need | To Be |
| Aligned | Properly |
```

output:

| Col 1 | Col 2   |
| ----- | ------- |
| This  | is      |
| an    | example |
| table | with    |
| two   | columns |

| Right  | Center | Left |
| -----: | :----: | :--- |
| R      | C      | L    |

| Head One | Head Two |
| --- | --- |
| Does Not Need | To Be |
| Aligned | Properly |

## Checklist

input:
```
- [ ] Unchecked
- [x] Checked
```

output:

- [ ] Unchecked
- [x] Checked
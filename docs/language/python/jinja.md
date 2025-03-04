# Jinja2

Jinja is a fast, expressive, extensible templating engine. Special placeholders in the template allow writing code similar to Python syntax. Then the template is passed data to render the final document.

## Jinja2

-  [Jinja2](https://docs.jinkan.org/docs/jinja2/).
-  [Jinja](https://jinja.palletsprojects.com/).
-  [Introduction to Jinja Templating](https://www.youtube.com/watch?v=OraYXEr0Irg).
-  [YAML & Jinja Templating Course Episode 1: Expressions, Statements, Comments, Variables, and Filters](https://www.youtube.com/watch?v=-7zo6l6QG80).
-  [Code Generation With Jinja2](https://docs.nordicsemi.com/bundle/ncs-2.1.2/page/tfm/technical_references/design_docs/tfm_code_generation_with_jinja2.html).
-  [Primer on Jinja Templating](https://realpython.com/primer-on-jinja-templating/).


## C++

-  [C++ Code Generation using Python and Jinja2](https://www.youtube.com/watch?v=-7zo6l6QG80).
-  [Jinja2C++ doc](https://jinja2cpp.github.io/).
-  [Jinja2C++ code](https://github.com/jinja2cpp/Jinja2Cpp).

## Install

```
python -m pip install jinja2
```

## code

helloName.jinja
```
Hello {{name}}!
```

```python
from jinja2 import Environment, FileSystemLoader

# loading the environment
env = Environment(loader = FileSystemLoader('templates'))

# loading the template
template = env.get_template('helloName.jinja')

# rendering the template and storing the resultant text in variable output
output = template.render(name = 'Geeks')

# printing the output on screen
print(output)
```

message.jinja
```
Hello {{ name }}!

I'm happy to inform you that you did very well on today's {{ test_name }}.
You reached {{ score }} out of {{ max_score }} points.

See you tomorrow!
Anke
```

```python
from jinja2 import Environment, FileSystemLoader

max_score = 100
test_name = "Python Challenge"
students = [
    {"name": "Sandrine",  "score": 100},
    {"name": "Gergeley", "score": 87},
    {"name": "Frieda", "score": 92},
]

environment = Environment(loader=FileSystemLoader("templates/"))
template = environment.get_template("message.jinja")

for student in students:
    filename = f"message_{student['name'].lower()}.txt"
    content = template.render(
        student,
        max_score=max_score,
        test_name=test_name
    )
    with open(filename, mode="w", encoding="utf-8") as message:
        message.write(content)
        print(f"... wrote {filename}")
```




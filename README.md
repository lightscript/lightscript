# LightScript

### JavaScript, with a cleaned-up syntax and a few conveniences.

Intended to make programmers more productive by zapping cruft. ⚡

Implemented as a fork of Babel's parser (babylon) wrapped in a Babel plugin. 
Fully compatible with JSX, all ES6/7 features, and the Flow static typing engine.

Coming soon. A quick taste:

```coffee
fizzBuzz(n = 100) ->
  [for i from 1 thru n:
    if i % 3 is 0 and i % 5 is 0:
      "fizzbuzz"
    elif i % 3 is 0:
      "fizz"
    elif i % 5 is 0:
      "buzz"
    else:
      i
  ]
```

Completed features include:

- implicit returns
- optional whitespace
- if-expressions
- array comprehensions
- unified function declaration
- bound methods
- const shorthand
- automatic semicolon insertion
- range-based for-loops
- array-based for-loops
- commaless objects and arrays
- several others

Real documentation with compelling examples is the top priority at this point. Tooling is next.

WIP tests can be seen [here](https://github.com/lightscript/babylon-lightscript/tree/lightscript/test/fixtures/lightscript) and [here](https://github.com/lightscript/babel-plugin-lightscript/tree/master/test/fixtures). WIP docs are [here](https://github.com/lightscript/planning/blob/wip/docs.md), though not really intended for public viewing just yet.

![Node.js CI](https://github.com/akwanmaroso/sorting-js/workflows/Node.js%20CI/badge.svg?branch=master) ![Codecov](https://img.shields.io/codecov/c/github/akwanmaroso/sorting-js?style=flat-square) ![Repo Size](https://img.shields.io/github/repo-size/akwanmaroso/sorting-js)

## Sorting Javascript

this is simple package to implementation alogrithm sorting in javascript

## Installation

Use NPM

```shell
    npm install sorting-js
```

Use CDN

```html
    <script src="https://unpkg.com/sorting-js@1.0.1/dist/bundle.js" type="module"></script>
```

## How To Use

Node.JS

```js
const {bubble_sort} = require("sorting-js");

const res = bubble_sort([1,2,1,2,5,6,5,3,5,57,86])

console.log(res);
```

Browser

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sorting JS</title>
  </head>
  <body>
    <script
      src="https://unpkg.com/sorting-js@1.0.1/dist/bundle.js"
      type="module"
    ></script>
    <script type="module">
      import { insertion_sort } from "./bundle.js";
      const res = insertion_sort([2, 3, 4, 5, 6, 4, 3, 4]);
      console.log(res);
    </script>
  </body>
</html>
```

## How To Contribute

- Fork and Clone this repository
- Make changes
- Create test case
- Push and create Pull Request

## Algorithm Sorting List

- Bubble Sort(✔)
- Insertion Sort(✔)
- Selection Sort(✔)
- Merge Sort(✔)
- Shell Sort(✔)
- Cycle Sort(✔)
- Radix Sort(⏳)

## Author

Akwan Maroso

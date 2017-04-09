# array-intersection [![Build Status](https://travis-ci.org/maticzav/array-intersection.svg?branch=master)](https://travis-ci.org/maticzav/array-intersection)

> Get the intersection of multiple arrays.
> Works with objects and array of objects etc. (It works!)

## Install

```
$ npm install --save array-intersection
```


## Usage

```js
const a = { foo: 1, bar: { zoo: 1} }
const b = { foo: 1 }
const c = { foo: 1, bar: 1 }

const in1 = intersection([a, b], [a, c], [a, b, c])
//=> [a]

const in1 = intersection([[a, b], [a, c], [a, b, c]])
//=> [a]
```

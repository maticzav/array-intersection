'use strict'
const unique = require('arr-unique')
const equals = require('deep-equal')

const includes = (el, all) => all.find(f => equals(f, el)) !== undefined

module.exports = (...args) => {
  const arrOfArrs = args.length === 1 && args[0].length > 1
  const arrs = arrOfArrs ? args[0] : args
  if (arrs.some(a => !Array.isArray(a))) {
    throw new Error(`Some of provided values weren't arrays.`)
  }

  const elements = unique([].concat(...arrs))
  return elements.filter(e => arrs.every(arr => includes(e, arr)))
}

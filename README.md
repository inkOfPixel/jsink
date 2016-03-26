# [jsink](http://inkofpixel.github.io/jsink) [![npm version](https://badge.fury.io/js/jsink.svg)](https://badge.fury.io/js/jsink)
A library with useful Javascript extensions.

> Note: this library is not ready to depend on.

## Installation

Use with [npm](http://npmjs.com):

```sh
npm install jsink --save
```

## Reference

### Objects

```javascript
deepMerge(a: Any, b: Any)
```
deeply merges a and b.


### Date

```javascript
areSameDate(a: Date, b: Date)
```
Returns true if `a` and `b`represents the same day (same day of same month of same year).

```javascript
isDate(a: Any)
```
Returns true if `a` is a Javascript Date object.

```javascript
monthName(date: Date, [locale: String])
```
Returns a `String` that represents the month name with the given locale.
Default locale is english. Locale supported values are `"en"`, `"it"`.


### utils

```javascript
uuid()
```
Generates a uuid.

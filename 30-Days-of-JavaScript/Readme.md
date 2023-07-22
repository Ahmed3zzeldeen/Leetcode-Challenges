# 30 Days of JavaScript Challenge

> Learn JS Basics with 30 Qs
> Designed For JavaScript beginners Master basic JavaScript skills Support high-quality editorials

**_To Join in this challenge :_** [30 days of javascript](https://leetcode.com/studyplan/30-days-of-javascript/)

## All Days :

- **Closures**
- [x] Day 01 : [Create Hello World Function](#day-01--create-hello-world-function)
- [x] Day 02 : [Counter](#)
- [x] Day 03 : [To Be Or Not To Be](#)
- [x] Day 04 : [Counter II](#)
- **Basic Array Transformations**
- [x] Day 05 : [Apply Transform Over Each Element in Array](#)
- [x] Day 06 : [Filter Elements from Array](#)
- [x] Day 07 : [Array Reduce Transformation](#)
- **Function Transformations**
- [x] Day 08 : [Function Composition](#)
- [ ] Day 09 : [Return Length of Arguments Passed](#)
- [ ] Day 10 : [Allow One Function Call](#)
- [ ] Day 11 : [Memoize](#)
- **Promises and Time**
- [ ] Day 12 : [Add Two Promises](#)
- [ ] Day 13 : [Sleep](#)
- [ ] Day 14 : [Execute Cancellable Function With Delay](#)
- [ ] Day 15 : [Interval Cancellation](#)
- [ ] Day 16 : [Promise Time Limit](#)
- [ ] Day 17 : [Cache With Time Limit](#)
- [ ] Day 18 : [Debounce](#)
- [ ] Day 19 : [Execute Asynchronous Functions in Parallel](#)
- **JSON**
- [ ] Day 20 : [Is Object Empty](#Day-20)
- [ ] Day 21 : [Chunk Array](#Day-21)
- [ ] Day 22 : [Array Prototype Last](#Day-22)
- [ ] Day 23 : [Group By](#Day-23)
- [ ] Day 24 : [Sort By](#Day-24)
- [ ] Day 25 : [Join Two Arrays by ID](#Day-25)
- [ ] Day 26 : [Flatten Deeply Nested Array](#Day-26)
- [ ] Day 27 : [Compact Object](#Day-27)
- **Classes**
- [ ] Day 28 : [Event Emitter Medium](#)
- [ ] Day 29 : [Array Wrapper](#)
- [ ] Day 30 : [Calculator with Method Chaining](#)

---

### Day 01 : Create Hello World Function

Welcome to Day 1 of the "30 Days of JavaScript" challenge! Today's challenge is to Write a function createHelloWorld. It should return a new function that always returns "Hello World".

**Problem Statement**
Write a function createHelloWorld. It should return a new function that always returns "Hello World".

#### Input

`args = []`

#### Output

`"Hello World"`

**Example 1:**

```
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
```

**Example 2:**

```
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
```

**Starter Code**

```js
/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    // TODO: Write Your Code Here
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```

#### How to Approach This Challenge

To solve this challenge, you can use static text to return it.

#### Submission

To submit your solution to this challenge, create a new file called `day01.js` in the `./solutions` directory, and write your function `createHelloWorld()` in that file. Then, commit your changes and submit a pull request to this repository.

---

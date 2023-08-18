# 30 Days of JavaScript Challenge

> Learn JS Basics with 30 Qs
> Designed For JavaScript beginners Master basic JavaScript skills Support high-quality editorials

**_To Join in this challenge :_** [30 days of javascript](https://leetcode.com/studyplan/30-days-of-javascript/)

## All Days :

- **Closures**
- [x] Day 01 : [Create Hello World Function](#day-01--create-hello-world-function)
- [x] Day 02 : [Counter](./solutions/day02.js)
- [x] Day 03 : [To Be Or Not To Be](./solutions/day03.js)
- [x] Day 04 : [Counter II](./solutions/day04.js)
- **Basic Array Transformations**
- [x] Day 05 : [Apply Transform Over Each Element in Array](./solutions/day05.js)
- [x] Day 06 : [Filter Elements from Array](./solutions/day06.js)
- [x] Day 07 : [Array Reduce Transformation](./solutions/day07.js)
- **Function Transformations**
- [x] Day 08 : [Function Composition](./solutions/day08.js)
- [x] Day 09 : [Return Length of Arguments Passed](./solutions/day09.js)
- [x] Day 10 : [Allow One Function Call](./solutions/day10.js)
- [x] Day 11 : [Memoize](./solutions/day11.js)
- **Promises and Time**
- [x] Day 12 : [Add Two Promises](./solutions/day12.js)
- [x] Day 13 : [Sleep](./solutions/day13.js)
- [x] Day 14 : [Execute Cancellable Function With Delay](./solutions/day14.js)
- [x] Day 15 : [Interval Cancellation](./solutions/day15.js)
- [x] Day 16 : [Promise Time Limit](./solutions/day16.js)
- [x] Day 17 : [Cache With Time Limit](./solutions/day17.js)
- [x] Day 18 : [Debounce](./solutions/day18.js)
- [x] Day 19 : [Execute Asynchronous Functions in Parallel](./solutions/day19.js)
- **JSON**
- [x] Day 20 : [Is Object Empty](./solutions/day20.js)
- [x] Day 21 : [Chunk Array](./solutions/day21.js)
- [x] Day 22 : [Array Prototype Last](./solutions/day22.js)
- [x] Day 23 : [Group By](./solutions/day23.js)
- [x] Day 24 : [Sort By](./solutions/day24.js)
- [x] Day 25 : [Join Two Arrays by ID](./solutions/day25.js)
- [x] Day 26 : [Flatten Deeply Nested Array](./solutions/day26.js)
- [x] Day 27 : [Compact Object](./solutions/day27.js)
- **Classes**
- [x] Day 28 : [Event Emitter Medium](./solutions/day28.js)
- [x] Day 29 : [Array Wrapper](./solutions/day29.js)
- [x] Day 30 : [Calculator with Method Chaining](./solutions/day30.js)

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

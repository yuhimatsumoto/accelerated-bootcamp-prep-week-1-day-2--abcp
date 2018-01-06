# Week 2, Day 2

Today, we'll introduce the use data structures like arrays and objects to write more  We'll gain a basic understanding of control flow, and understand how we use it to teach our programs what to do. We'll learn how to implement control flow with `if` statements and looping.

# Arrays

Let's say you're getting ready to make an amazing grilled cheese. You have all your ingredients ready:

```javascript
var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
```

But now what if we want to make a tomato sauce? Well, we already have garlic and tomato — but we have no idea what recipe they belong to. Pretty soon, we'll have a hard time keeping our ingredients safe, and we'd end up with bread in our tomato sauce.

This is an admittedly contrived example, but it goes to show that we can't just put everything in a variable and hope to remember what order things should go in. It also shows that sometimes it would be helpful to be able to group like items together.

In JavaScript, we can group like items in an object (well, everything in JavaScript is an object — but more on that some other time) called an array. An array is an ordered list of items (called "elements" of the array) separated by commas.

We define an array by enclosing a comma separated list in square brackets. We can store our arrays and re-use them by setting an array equal to a variable:

```javascript
var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
```

## Creating Arrays

* Array literals

```javascript
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
```
* Array constructor

```javascript
var array = Array.new()
```

## Accessing Elements

* Bracket notation + index number

## Adding Elements

* `push` mutates or changes the array when it adds something to the end of the array.
* `unshift` changes the array by adding an element to the beginning.
* `...`, the spread operator, makes a copy of the original array, plus the element you want to add. You can use the spread operator to add to the beginning or end of the array.

## Deleting Elements

* `shift`, destructively removes an element from the beginning of the array
* `pop`, destructively removes an element from the end of the array
* `slice`, non-destructively removes an element from the array. `slice` takes in a minimum of 1 argument: the index number of the element you want to remove. It can take in an optional second argument of the number of elements you want to remove. It starts counting at the index you give the first argument.

# Objects

An object is an associative data structure, like a dictionary.
Think of it like a little bundle of attributes or data in which you can look up a key in order to find it’s value. Much like looking up the definition of a word in a dictionary.

## Creating

Two ways to create an object. Ojbect literal and Object constructor:

```javascript
var course = {
  title: "Bootcamp Prep",
  description: "an introduction to JavaScript"
}

var course = new Object({
  title: "Bootcamp Prep",
  description: "an introduction to JavaScript"
})
```

## Adding

* dot notation

```javascript
course.instructor = "Sophie DeBenedetto"
```

* bracket method

```javascript
course["instructor"] = "Sophie DeBenedetto"
```

## Accessing Value of a Key

* dot notation

```javascript
course.instructor
  => "Sophie DeBenedetto"
```

* bracket notation

```javascript
course["instructor"]
  => "Sophie DeBenedetto"
```

## Updating
We can use the same dot or bracket notation to update the value of an existing key.

However, using bracket or dot notation to add a key/value pair or update the value of an existing key changes the given object

What if we don't want to change the original object, but make a new object with the necessary changes/additions?

## Non-Destructively Adding/Updating an Object with `Object.assign()`

Create a new object from an existing object.
Takes in arguments of objects that you want to copy and combine into a brand new object.

What is the difference between the following two lines of code?
What happens to the `course` object after the first line is executed?

```javascript
Object.assign(course, {start_date: "2017-01-01"})

Object.assign({}, course, {start_date: "2017-01-01"})
```

## Deleting

```javascript
delete course["title"]
```

## Updating with Object.assign()

```javascript
Object.assign({}, course, {description: "a kick-ass introduction to JS"})
```

# Control Flow/Conditional Logic

Control flow is how our programs know what to do, what code to execute.
We teach our programs to execute certain lines of code based on certain conditions.

Two types of control flow:

* `if` statements
* Looping

## If Statements

In order to understand `if` statements, we need to understand the comparison operators.

```javascript
>
<
==
!=
>=
<=
```

### Writing an `if` statement

```javascript

var pokemon = "Pikachu"

if (pokemon == "Pikachu") {
  console.log("I choose you Pikachu!!")
}
```

```javascript
if (comparison statement is true) {
  // do a thing
} else {
  // do a different thing
}
```

## Looping

Allows us to repeat a certain action under a specified condition.
For example, given a list, or array, of names, print out a greeting for each name.

```javascript
var names = ["Hansel", "Greta", "Wicked Witch"]

console.log(names[0])
console.log(names[1])
console.log(names[2])
```

### What's Wrong with this?

Repetitive, annoying to have to write the same code so many times.
Not flexible. In other words, we have to know ahead of time exactly how many elements are in the array in order to console.log each element.
What if we want to execute a line of code, like our console.log statement, for every element in any given array?

### For loop
```javascript
for(i = 0; i < names.length; i++, ) {
  console.log(name)
}
```

```javascript
for(initial condition; stopping condition;iteration instructions, ) {
  // code to run
}
```

Initial condition: the value of the variable, `i`, at the first “step” or pass through the loop

Stopping condition: continue to loop while this condition is true. Stop when it is no longer true.

Iteration instructions: every time a “step”, or iteration of the loop is completed, do this to the value of the `i` variable. The instructions we want to provide are: “increase the value of the `i` variable by 1 every time you run the code in the block.

### While Loop

The while loop is similar to an if statement, except that its body will keep executing until the condition evaluates to false. It has the following structure:

Syntax:

```javascript
while ([condition]) {
  [loopBody]
}
```

A while loop is best used when we don't know how many times a loop needs to run - that is, the condition is dependent on a dynamic function/return value.

### Iteration

We can use more advanced iterators like `forEach`.

These are methods that we call on a collection like an array.

We pass in an argument of a function called a "callback" function. This function is defined to take in an argument of a single element from the array. The function is called automatically for us by `forEach`. The function body will execute once for each element in the array.

### forEach
### map

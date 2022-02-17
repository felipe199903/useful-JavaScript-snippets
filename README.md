# useful-JavaScript-snippets

few snippets that I think will be helpful to developers.

References: https://medium.com/javascript-in-plain-english/here-are-some-useful-javascript-snippets-47f4fa75bdd4

## Details:

1- isLowerCase

Used to determine whether a string is lower case or not.

```
const isLowerCase = str => str === str.toLowerCase();

console.log(isLowerCase('Batman'));         // false
console.log(isLowerCase('jamesbond007'));   // true
console.log(isLowerCase('FLASH'));          // false
```

2- isNullOrUndefined

isNullOrUndefined : check whether a value is null or undefined.

```
const isNullOrUndefined = val => val === undefined || val === null;

console.log(isNullOrUndefined(null));        // true
console.log(isNullOrUndefined(undefined));   // true
console.log(isNullOrUndefined('Batman'));    // false
```

3 - DefaultValueObject

Assigning Default Value to Object

```
const setDefaultObject = (obj, ...defs) =>
         Object.assign({}, obj, ...defs.reverse(), obj);

setDefaultObject({ hero: 'Batman' }, { villain: 'Joker' });
```

4 - smoothScroll

can be used to smoothly scroll the element on which it is called into the visible area of the browser window.

```
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

// scrolls smoothly to the element with the id elementID
smoothScroll('#elementID');

// scrolls smoothly to the first element with class name - elementClassName
smoothScroll('.elementClassName');
```

5 - Delaying Function execution

Can delay the function execution until the current call stack is cleared.

```
const deferFunction = (fn, ...args) => setTimeout(fn, 1, ...args);

deferFunction(console.log, 'Batman arrives..!!!'), console.log('Joker is here...!!');

Output ->
Joker is here...!!
Batman arrives..!!!
```

6 - Arrays Intersection

Returns elements present in both the arrays.

```
const matchingElements = (array1, array2) =>
             array1.filter(element => array2.includes(element));

var heroes = ['Batman', 'Superman', 'X-Men', 'Captain America'];

var dcUniverse = ['Batman', 'Superman', 'Joker', 'Lex Luthor'];

console.log(matchingElements(heroes, dcUniverse));

Output -->
[ 'Batman', 'Superman' ]
```

7 - Array Difference

Finds the difference between two arrays.

```
const arrayDiff = (array1, array2) => {
  const setArray = new Set(array2);

  return array1.filter(arr => !setArray.has(arr));

};
var heroes = ['Batman','Flash','Superman','Wolverine']
var justiceLeaque = arrayDiff(heroes, ['Wolverine']);

console.log(justiceLeaque);

Output -->
[ 'Batman', 'Flash', 'Superman' ]
```

8 - Return Array from Number

Returns an array of digits which the number consists.

```
const numberArray = number => [...`${number}`].map(num => parseInt(num));

console.log(numberArray(987));

Output -->
[ 9, 8, 7 ]
```

9 - Splitting of multi line string

splits a multi-line string into an array of lines.

```
const splitLines = str => str.split(/\r?\n/);

console.log(splitLines('First Line\nSecond Line\nThird Line\nFourth Line'));

Output -->
[ 'First Line', 'Second Line', 'Third Line', 'Fourth Line' ]
```

10 - elementContains

Check whether the respective child element is present in the parent element or not.

```
const elementPresent = (parentEle, childEle) => parentEle !== childEle && parentEle.contains(childEle);

elementPresent(document.querySelector('body'), document.querySelector('body'));             // false

elementPresent(document.querySelector('head'), document.querySelector('title'));            // true
```

11 - Removing Duplicates

Will remove duplicate values from an array.

```
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([11, 22, 22, 33, 44, 44, 55]));

Output -->
[ 11, 22, 33, 44, 55 ]
```

12 - findLast

Returns the last element for which a given function returns a truthy value.

```
const findLast = (array, func) => array.filter(func).pop();

console.log(findLast([1, 2, 3, 4, 5], num => num % 2 === 0));

Output -->
4
```
13 - forEachReverse

Executes a function on each element of an array starting from the end ie. from array’s last element.

```
const forEachReverse = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
function calculateSquare(num)
{
    return num * num;
}

var array = [1, 2, 3, 4];

forEachReverse(array, val => console.log(calculateSquare(val)));

Output -->
16
9
4
1
```

14 - Set a variable default

The “||” operator will, just like inside an if statement, work as an OR operator.

```
doSomethingVeryCool = (coolParameter) => {
   const coolThing = coolParameter || "This is not so cool"
   console.log(coolThing);
}

doSomethingVeryCool("This is super cool")
// Result: "This is super cool"

doSomethingVeryCool()
// Result: "This is not so cool"
```

15 - Shuffle an Array

```
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]
```

16 - Check if Date is Valid

```
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 17, 1995 03:24:00");
// Result: true
```
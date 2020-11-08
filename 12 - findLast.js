const findLast = (array, func) => array.filter(func).pop();

console.log(findLast([1, 2, 3, 4, 5], num => num % 2 === 0));

Output --> 
4
const numberArray = number => [...`${number}`].map(num => parseInt(num));

console.log(numberArray(987));

Output -->
[ 9, 8, 7 ]
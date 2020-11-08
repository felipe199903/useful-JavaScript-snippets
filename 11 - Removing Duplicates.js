const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([11, 22, 22, 33, 44, 44, 55]));

Output -->
[ 11, 22, 33, 44, 55 ]
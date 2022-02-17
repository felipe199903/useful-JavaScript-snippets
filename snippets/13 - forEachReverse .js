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
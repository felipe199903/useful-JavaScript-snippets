const matchingElements = (array1, array2) => 
             array1.filter(element => array2.includes(element));

var heroes = ['Batman', 'Superman', 'X-Men', 'Captain America'];
var dcUniverse = ['Batman', 'Superman', 'Joker', 'Lex Luthor'];

console.log(matchingElements(heroes, dcUniverse));

Output -->
[ 'Batman', 'Superman' ]
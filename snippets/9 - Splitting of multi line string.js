const splitLines = str => str.split(/\r?\n/);

console.log(splitLines('First Line\nSecond Line\nThird Line\nFourth Line'));

Output --> 
[ 'First Line', 'Second Line', 'Third Line', 'Fourth Line' ]
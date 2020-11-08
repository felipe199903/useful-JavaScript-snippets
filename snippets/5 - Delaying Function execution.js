const deferFunction = (fn, ...args) => setTimeout(fn, 1, ...args);
deferFunction(console.log, 'Batman arrives..!!!'), console.log('Joker is here...!!');

Output -->
'Joker is here...!!'
'Batman arrives..!!!'
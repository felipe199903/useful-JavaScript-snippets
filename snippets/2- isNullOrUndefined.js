const isNullOrUndefined = val => val === undefined || val === null;

console.log(isNullOrUndefined(null));        // true
console.log(isNullOrUndefined(undefined));   // true
console.log(isNullOrUndefined('Batman'));    // false
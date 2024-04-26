[foo, bar] = [bar, foo];
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const merge = [...new Set(a.concat(b))];
console.log( "A" - "B" + 2);
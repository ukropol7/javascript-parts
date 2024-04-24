var DELIM_SIZE = 4;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const stringReverse = str => str.split("").reverse().join("");
const merge = (a, b) => a.concat(b);
var pattern = {};
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
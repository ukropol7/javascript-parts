const removeDuplicates = (arr) => [...new Set(arr)];
var c = new Counter(); c.add(); c.add(); c.add();
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const removeDuplicates = (arr) => [...new Set(arr)];
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const flattenedArray = arr => [].concat(...arr);
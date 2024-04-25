const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isTabInView = () => !document.hidden;
const uniqueArr = (arr) => [...new Set(arr)];
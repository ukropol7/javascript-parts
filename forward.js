const isEmptyArray = arr => !arr.length;
const isEven = (num) => num % 2 === 0;
const resultingPromises = urls.map((url) => makHttpRequest(url));
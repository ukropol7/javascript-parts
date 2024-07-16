const results = await Promise.all(resultingPromises);
const lastElement = arr => arr[arr.length - 1];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
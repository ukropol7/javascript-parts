const maxNumber = arr => Math.max(...arr);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
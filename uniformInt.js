const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
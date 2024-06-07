const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
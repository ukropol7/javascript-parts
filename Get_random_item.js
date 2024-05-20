const currentDate = () => new Date().toLocaleDateString('en-US');
const timeFromDate = date => date.toTimeString().slice(0, 8);
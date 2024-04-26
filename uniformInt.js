const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
var DELIM_SIZE = 4;
var pattern = {};
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
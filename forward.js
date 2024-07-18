const symbolsPath = path.join(buildOutputPath, 'symbols');
const isEmptyArray = arr => !arr.length;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
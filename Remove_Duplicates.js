console.log("1 || 2 = "+(1 || 2));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const minNumber = arr => Math.min(...arr);
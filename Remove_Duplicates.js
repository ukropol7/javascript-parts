const scriptRootPath = path.join(repositoryRootPath, 'script');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const reversedString = str => str.split('').reverse().join('');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const intermediateAppPath = path.join(buildOutputPath, 'app');
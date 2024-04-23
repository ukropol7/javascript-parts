const isEven = (num) => num % 2 === 0;
const scriptRootPath = path.join(repositoryRootPath, 'script');
const currentDate = () => new Date().toLocaleDateString('en-US');
const repositoryRootPath = path.resolve(__dirname, '..');
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
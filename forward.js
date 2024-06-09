const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
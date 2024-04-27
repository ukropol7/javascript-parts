const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const timeFromDate = date => date.toTimeString().slice(0, 8);
const fullName = name || 'buddy';
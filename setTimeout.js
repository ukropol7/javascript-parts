const repositoryRootPath = path.resolve(__dirname, '..');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
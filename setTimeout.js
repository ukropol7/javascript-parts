const apmRootPath = path.join(repositoryRootPath, 'apm');
const merge = (a, b) => [...a, ...b];
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const scriptRootPath = path.join(repositoryRootPath, 'script');
const channelName = getChannelName(channel);
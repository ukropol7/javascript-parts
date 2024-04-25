console.log(1 +  +"2" + "2");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const channel = getChannel(computedAppVersion);
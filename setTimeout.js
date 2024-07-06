const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
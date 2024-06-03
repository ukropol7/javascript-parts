const currentDate = () => new Date().toLocaleDateString('en-US');
const goToTop = () => window.scrollTo(0, 0);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const goToTop = () => window.scrollTo(0, 0);
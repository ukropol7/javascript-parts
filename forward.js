const isEmptyArray = arr => !arr.length;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log(1 +  "2" + "2");
[foo, bar] = [bar, foo];
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
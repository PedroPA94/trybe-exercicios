const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);

console.log(sum(1, 2, 3)); // 6
console.log(sum(-10, 20, 123, 56)); // 189

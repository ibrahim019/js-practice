var a = [1, 10, 100, 1000, 10000, 100000];

const b = a.filter((fi) => {
  return fi > 10 && fi < 10000;
});

let sum = b.reduce((accum, current) => {
  accum.push(current);
  return accum;
}, []);

console.log(sum);

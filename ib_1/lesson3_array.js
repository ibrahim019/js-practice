var a = [1, 2, 3, 4, 5, 6, 7];
var b = ["Ibrahim", "Musa", "Isaac"];
var c = [...a, ...b];
console.log(c);
var filterd = c.filter((val) => {
  return typeof val != "number";
});
console.log(filterd);

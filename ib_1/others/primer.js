var start = new Date().getTime();
var primes = [];

function findPrime(a) {
  var j = 0;
  for (var i = 2; i <= a / 2 && j == 0; i++) {
    if (a % i == 0) {
      j++;
      return false;
    }
  }
  if (j == 0) {
    return true;
  }
}

Array.from({ length: 100}, (_, x) => {
  if (findPrime(x+1)) {
    primes.push(x+1)
  }
});

console.log(primes)
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time/1000);
// fibbonaci sequnce
function *fibonacci(n) {
  let fibbo;
  let first = 0;
  let next = 1;
    for (i=0; i<=n; i++) {
      fibbo = first + next;
	  first = next;
      next = fibbo;
      yield fibbo;
    }
}
var fibo = fibonacci(50);
Array.from(fibo)


// recurssion
function *pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      yield x * pow(x, n - 1);
    }
  }
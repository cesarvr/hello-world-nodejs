function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const N = 5

require('http').createServer((req, res) => {
 console.log('running fib: ', N) 
 res.end( 'fibonacci: iter:'+N+ "->" +  fibonacci(N) )
}).listen(8080)

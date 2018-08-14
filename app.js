function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

let rnd = () => Math.floor(Math.random() * 6) + 1   

require('http').createServer((req, res) => {
    
    res.end( 'Hello World V1', fibonacci(rnd(5)) )
}).listen(8080)

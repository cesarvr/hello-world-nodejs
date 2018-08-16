const url = require('url')

function fibonacci(num) {
  if (num <= 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

function get_query(request) {
  var url_parts = url.parse(request.url, true)
  return url_parts.query
}

const N = 5

require('http').createServer((req, res) => {
 const query = get_query(req) 
 res.end( 'fibonacci: iter:'+N+ '->' +  fibonacci(N) + ' query->' + JSON.stringify(query) )
}).listen(8080)

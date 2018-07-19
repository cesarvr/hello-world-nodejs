require('http').createServer((req, res) => {
    res.end('Hello World from: '+ process.env['PLANET'])
}).listen(8080)

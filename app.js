let count = 0
let status = 200
const msg = {
    200: 'Hello World!!',
    500: 'Boom!'
}

const random = Math.floor(Math.random() * 10) + 1  

require('http').createServer((req, res) => {
    res.writeHead(status, { 'Content-Type': 'text/plain' })

    res.end('> '+ msg[status])

    if (count > random)
        status = 500

    count++
}).listen(8080)

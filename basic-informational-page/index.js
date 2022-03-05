const http = require('http')
const fs = require('fs')

const port = 3000
const hostname = "localhost"

const server = http.createServer((req, res) => {
    const myURL = req.url
    if (myURL == '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        })
    } else if (myURL == '/contact-me.html') {
        fs.readFile('./contact-me.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        })
    } else if (myURL == '/about.html') {
        fs.readFile('./about.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        })
    } else{
        fs.readFile('./404.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        })
    }
}
)

server.listen(port, () => {
    console.log(`Server running at port http://${hostname}:${port}`)
})
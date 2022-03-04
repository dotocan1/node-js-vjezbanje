const http = require('http')
const fs = require('fs')

const port = 3000
const hostname = "localhost"

const server = http.createServer((req, res) => {
    const myURL = req.url
    if(myURL == '/404.html'){
        fs.readFile("./", () => {
            console.log("No such file!")
        })
    }
})

server.listen(port, () => {
    console.log(`Server running at port http://${hostname}:${port}`)
})
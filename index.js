const http = require('http')

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  
  sendResponse(request, response)
})

function sendResponse(request, response) {
  response.write('<html>')
  response.write('<body>')
  response.write('<h1>request info</h1>')

  writeRemoteAddress(request, response)

  writeAccessDate(response)

  writeRequestHeaders(request, response)

  response.write('</body>')
  response.write('</html>')
  response.end()
}

function writeRemoteAddress(request, response) {
  response.write('<h2>ip address</h2>')
  response.write(`<p>${request.}:${request.connection.remotePort}</p>`)
}

function writeAccessDate(response) {
  response.write('<h2>access date</h2>')
  response.write(`<p>${new Date()}</p>`)
}

function writeRequestHeaders(request, response) {
  response.write('<h2>headers</h2>')
  response.write(`<ul>`)
  const headers = request.headers
  for (let [key, value] of Object.entries(headers)) {
      response.write(`<li>${key}: ${value}</li>`)
  }
  response.write(`</ul>`)
}

const hostname = '127.0.0.1'
const port = 7878

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
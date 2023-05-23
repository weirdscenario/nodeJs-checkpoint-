const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created successfully');
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
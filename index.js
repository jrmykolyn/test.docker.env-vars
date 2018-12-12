const http = require('http');

const ENV = process.env.ENVIRONMENT;
const PORT = 8080;

http.createServer((req, res) => {
  res.end(`Hello, world! Running in environment: ${ENV}`);
}).listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});

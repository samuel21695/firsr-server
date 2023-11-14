const http = require('http');
// createServer는 매개변수로 callback function으로만 받는다.
// 강사님이 작성한 것과 예제를 비교하면서 확인
// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
http.createServer(function(request, response){
  let writeHeadObject = {
    'Content-Type': 'text/html'
  }

  response.writeHead(200, writeHeadObject);
  response.end("hello");


}).listen(8080);

// create a local server to receive data from
const server = http.createServer
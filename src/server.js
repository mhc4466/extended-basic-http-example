const http = require('http'); 
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  //responses.getIndex(request, response);
  if (request.url === '/client2') {
    responses.getClient2(request, response);
  }
  else if (request.url === '/message') {
    responses.getMessage(request, response);
  }
  else {
    responses.getIndex(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

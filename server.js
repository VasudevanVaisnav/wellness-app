const http = require('http');
const app = require('./app');
http.createServer(app).listen(3000,()=>{
  console.log("server started at 3000")
});
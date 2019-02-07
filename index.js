const http = require('http');
const ipModule = require('./ipModule');
const port = process.env.PORT || 3000
const server = http.createServer();

server.on('request', (req, res)=>{
    ipModule.ipFetching(req);
    res.end("Done");
});
server.listen(port, ()=>{
    console.log("server is running on port "+port);
});

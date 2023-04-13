// This program creates the  server in local host 4242 

const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('Hello\n');
});
server.listen(4242, () =>{
    console.log('Server is running...');
});

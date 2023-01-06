// const http = require('http');
// var server = http.createServer((req,res) => {
//     res.write('node server is up 22222222222222222222222222222222222222222222222222');
//     res.end();
// });

// server.listen(3000);
// console.log('server is execting at 3000');


const http = require('http');
var server = http.createServer ((req,res) => {
    console.log(req)
    res.write('node server is executing');
    res.end();
})

server.listen(4000);
console.log('server is executing your code');
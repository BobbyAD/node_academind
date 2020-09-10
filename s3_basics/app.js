const http = require("http");

const server = http.createServer((req, res) => {
    // hard exits, don't use this
    // process.exit();

    console.log(req.url, req.method, req.headers);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Testing sending HTML</title></head>");
    res.write("<body><h1>Hey, I am sending this from Node</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);

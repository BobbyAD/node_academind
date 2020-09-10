const http = require("http");

const server = http.createServer((req, res) => {
    // hard exits, don't use this
    // process.exit();

    const url = req.url;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Testing sending HTML</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text'><button type='submit'>Send</button></input></form></body>"
        );
        res.write("</html>");
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Testing sending HTML</title></head>");
    res.write("<body><h1>Hey, I am sending this from Node</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // hard exits, don't use this
    // process.exit();

    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Testing sending HTML</title></head>");
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>'
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            // body is a reference constant, can edit the array it references
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString(); // converting to string because I know it's a string
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });

        res.writeHead(302, {
            Location: "/",
        });
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

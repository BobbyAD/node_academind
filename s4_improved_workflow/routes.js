const fs = require("fs");

const requestHandler = (req, res) => {
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
            // synchronous, blocking execution
            // fs.writeFileSync("message.txt", message);
            // asynchronous, non-blocking
            fs.writeFile("message.txt", message, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });

        res.writeHead(302, {
            Location: "/",
        });
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Testing sending HTML</title></head>");
    res.write("<body><h1>Hey, I am sending this from Node, also testing nodemon</h1></body>");
    res.write("</html>");
    res.end();
};

module.exports = requestHandler;

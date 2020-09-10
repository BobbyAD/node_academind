const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Testing sending HTML</title></head>");
        res.write("<body>");
        res.write("<h1>What up, boooooooiiiiii</h1>");
        res.write(
            "<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></input></form>"
        );
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });

        res.writeHead(302, {
            Location: "/users",
        });
        return res.end();
    }

    if (url === "/users") {
        res.write("<html>");
        res.write("<head><title>Testing sending HTML</title></head>");
        res.write("<body><ul>");
        res.write("<li>User 1</li>");
        res.write("<li>User 2</li>");
        res.write("<li>User 3</li>");
        res.write("<li>User 4</li>");
        res.write("<li>User 5</li>");
        res.write("<li>User 6</li>");
        res.write("</ul></body>");
        res.write("</html>");
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Testing sending HTML</title></head>");
    res.write("<body><h1>Default Page</h1></body>");
    res.write("</html>");
    res.end();
};

module.exports = requestHandler;

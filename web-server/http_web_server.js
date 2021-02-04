const http = require('http');
const app = http.createServer(requestHandler);

function requestHandler(req, res) {
    // handling root route request
    if (req.url === '/') {
        res.writeHead(200, { "content-type": "text/html" })
            .write("<h1>congratulations, you made it</h1>");
        return res.end(); // returning to end the function
    }

    // handling 404
    console.log("Page not found");

    res.writeHead(404, { "content-type": "text/html"})
        .write("<h1>Error 404</h1>");
    res.end();
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));

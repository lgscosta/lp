const app = require('./src/config/custom-express.js');
const fs = require('fs').promises;

const requestListener = function (req, res) {
    fs.readFile("/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
};

app.listen(3000, () => console.log("Server running at 3000"));



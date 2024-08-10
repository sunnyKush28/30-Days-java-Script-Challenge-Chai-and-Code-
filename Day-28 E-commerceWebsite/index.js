import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

const server = http.createServer((req, res) => {
    const root = path.join(__dirname);

    // Correct file path for index.html
    let filePath = path.join(root, req.url === '/' ? 'index.html' : req.url);

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Make sure you have a 404.html file or handle the 404 case differently
                fs.readFile(path.join(root, '404.html'), (err404, content404) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content404, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

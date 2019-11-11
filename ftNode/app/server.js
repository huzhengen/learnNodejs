const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    let content
    const doc_path = path.join(__dirname, 'document_root', path.normalize(req.url))
    const ext = path.extname(req.url)
    let mine = { 'Content-type': 'text/html' }
    switch (ext) {
        case '.html':
        case '.htm':
            mine = { 'Content-type': 'text/html' }
            break;
        case '.css':
            mine = { 'Content-type': 'text/css' }
            break;
        case '.ico':
            mine = { 'Content-type': 'image/x-icon' }
            break;
    }
    console.log(ext);
    console.log(doc_path);

    if (ext !== '' && fs.readFileSync(doc_path)) {
        res.writeHead(200, mine)
        content = fs.readFileSync(doc_path)
    } else {
        res.writeHead(404, mine)
        content = '文件不存在'
    }

    res.write(content);
    res.end();
})

server.listen(8090)
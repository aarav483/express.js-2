const http=require("http");
const express=require("express");
const app=express();
const server=http.createServer(app);

app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'MyCustomHeaderValue');
    next();
});

// Route handler for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Hello to Node.js with Express</h1>');
});
server.listen(3000);
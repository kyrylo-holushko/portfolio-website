const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`, { extensions: ['html'], maxAge: 0 }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

app.get((['/','/home','/about','/portfolio','/services']), (req,res)=>{
    console.log('one-time entry');
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('*', (req,res)=>{res.send('<h1>404 PAGE NOT FOUND</h1>')});

app.listen(8080, console.log('SERVER RUNNING ⚙️💡'));
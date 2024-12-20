const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`, { extensions: ['html']}));

app.get('/', (req, res) =>{
    res.redirect('/home');
});

app.get('/home',(req, res)=>{
    res.sendFile(`${__dirname}/public/home.html`);
});

app.get('/about',(req, res)=>{
    res.sendFile(`${__dirname}/public/about.html`);
});

app.get('/portfolio',(req, res)=>{
    res.sendFile(`${__dirname}/public/portfolio.html`);
});

app.get('/services',(req, res)=>{
    res.sendFile(`${__dirname}/public/services.html`);
});

app.listen(1337, console.log('SERVER RUNNING ⚙️💡'));
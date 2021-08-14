const express = require('express');
const app = express();

const PORT = process.env.PORT || 8087

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/sorting', (req, res) => {
    res.render('sorting');
})

app.listen(PORT, ()=>{
    console.log(`Server has started at ${PORT}`);
})
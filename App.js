const express = require('express');
const app = express();

const PORT = process.env.PORT || 8087

app.use(express.static("public"));
app.set("view engine", "ejs");

//const img_url = 'https://i.pinimg.com/originals/84/f2/9b/84f29bf2b716195014ca859c77c5d107.jpg'
const sort = [
    {name: 'Bubble Sort', id: 'bubble'},
    {name: 'Selection Sort', id:'selection'},
    {name: 'Insertion Sort', id:'insertion'},
    {name: 'Quick Sort', id:'quick'},
    {name: 'Merge Sort', id:'merge'},
    {name: 'Heap Sort', id:'heap'},
]

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/sorting', (req, res) => {
    res.render('sorting', {sort: sort});
})

app.listen(PORT, ()=>{
    console.log(`Server has started at ${PORT}`);
})
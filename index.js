
const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const categories = require('./data/categories.json');
console.log(categories)


app.get('/', (req, res) => {
    res.send('Course API Running');
});


app.get('/courses', (req, res) => {
    res.send(categories)
});


app.get('/courses/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    console.log(id);
    const categoryCourses = categories.find(course => course.id === id);
    console.log(categoryCourses);
    res.send(categoryCourses);
})



app.listen(port, () => {
    console.log('online courses server', port);
})

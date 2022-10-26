const express = require('express')
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data.courses.json');


app.get('/',(req,res)=>{
    res.send('Course API Running');
});

app.get('/courses-categories',(req,res)=>{
   // console.log('online-courses-server',)
   res.send( categories)
});
app.get('/category/:id',(req, res)=>{
    const id=req.params.id;
    const categoryCourses = courses.filter(courses=>courses.id===id);
    res.send(categoryCourses);
})
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourses= courses.find(course=>course.id===id);
    res.send(selectedCourses);
})
app.listen(port,()=>{
    console.log('online courses server',port);
})
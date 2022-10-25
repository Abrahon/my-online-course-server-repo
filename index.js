const express = require('express')
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const categories = require('./data/categories.json');


app.get('/',(req,res)=>{
    res.send('Course API Running');
});

app.get('/courses-categories',(req,res)=>{
   // console.log('online-courses-server',)
   res.send( categories)
})
app.listen(port,()=>{
    console.log('online courses server',port);
})
const path = require('path');
const express = require('express');

const port = process.env.PORT || 8000;
const app = express();



// Serve static files
 //app.use(express.static( path.join( __dirname, 'public' )))
//app.use(express.static(path.join(__dirname, 'public')));
 

let posts = [

    {id:1, title: 'post one'},
    {id:2 , title: 'post two'},
    {ide:3, title: 'post three'}
]
 app.get('/api/posts' , (req, res)  => {
res.json(posts);
 })
 // single posts 

 app.get('/api/posts/:id' , (req, res)  => {
    console.log(re1)
    res.json(posts);
     })


 

app.listen(port, () => console.log("server started"))

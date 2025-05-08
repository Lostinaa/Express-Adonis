const express  = require('express');
const router = express.Router();


let posts = [

    {id:1, title: 'post one'},
    {id:2 , title: 'post two'},
    {id:3, title: 'post three'}

]


 router.get('/' , (req, res)  => {
 const limit = parseInt(req.query.limit);
 if (!isNaN(limit) && limit > 0){
    res.json(posts.slice(0, limit))

 } else {
    res.status(200).json(posts);
 }
res.json(posts);
 })
 // single posts 

 router.get('/:id' , (req, res)  => {
    const id = parseInt(req.params.id)
  const  post = posts.find((post) => post.id === id);

  if(!post){
    res.status(404).json(`{msg: posts not found }`)
  }else {
    res.status(200).json(post);
  }
     })
     // create new posts
     router.post('/', (req, res) =>{
    const newPost = {
      id: posts.length +1,
      tittle: req.body.tittle,

    };
   
    if(!newPost.tittle){

    return res.status(400).json({msg:'please include tittle'})

    } 
    else{
      posts.push(newPost)
    }
      res.status(201).json(posts);
     });

     //update
     router.put('/:id', (req,res) =>{
      const id = parseInt(req.params.id);
      const post = posts.find((post) => post.id === id);
      
      if(!post) {
         return res.status(404)
         .json(`msg: post with id {id} not found`)
      }
      post.tittle = req.body.tittle;
      res.status(200).json(posts)
     });

     //delete
     router.delete('/:id', (req,res) =>{
      const id = parseInt(req.params.id);
      const post = posts.find((post) => post.id === id);
      
      if(!post) {
         return res.status(404)
         .json(`msg: post with id {id} not found`)
      }
      posts = posts.filter((post)=> post.id !==id);
      res.status(200).json(posts)
     });


      module.exports = router;


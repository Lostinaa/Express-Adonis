const path = require('path');
const express = require('express');
const posts = require('./routes/posts');
const logger =  require('./middleware/logger.js')

const port = process.env.PORT || 8000;
const app = express();



//
// logger midddleware



//NODY PARSER MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// Serve static files
 //app.use(express.static( path.join( __dirname, 'public' )))
 app.use(logger);
//route
app.use('/api/posts',  posts);



 

app.listen(port, () => console.log("server started"))

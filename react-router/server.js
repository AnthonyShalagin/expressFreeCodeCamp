const express = require('express'),
      app = express();

//requiring the basic_router.js
app.use('/users',require('.react-router/basic_router'));

//routes
app.get('/posts/newpost',(request,response)=>{
  response.send('new post');
});

app.get('/api',(request,response)=>{
  response.send('API route');
});

app.listen(3000,()=>console.log('Express server started at port 3000'));
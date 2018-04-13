const express = require('express'),
      app = express();

app.use('/users',require('./basic_router'));
                         
app.use('/api',require('./api_route'));

app.get('/posts/newpost',(request,response)=>{
   response.send('new post');
});

app.listen(3000,()=>console.log('Express server started at port 3000'));

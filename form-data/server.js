//server.js file

const express = require('express'),
      app = express();

//setting the port 
app.set('port', process.env.PORT || 3000);

//
app.get('/',(request,response)=>{
  response.sendFile(__dirname +'/form.html');
});

app.get('/process',(request,response)=>{
  console.log(request.query);
  response.send(`${request.query.name} said ${request.query.message}`);
});

app.listen(3000,()=>{
  console.log('Express server started at port 3000');
});

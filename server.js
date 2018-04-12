const express = require('express'),
      app = express();

app.get('/',(request,response)=>{
  response.send('Hello world');
});

//Binding the server to a port(3000)
app.listen(3000,()=>console.log('express server started at port 300'));



/*
const express = require('express'),
      app = express();
function sayHello(request,response,next){
  console.log(‘I must be called’);
  next();
}
app.get('/', sayHello, (request, response)=>{
  response.send('sayHello');
});
app.listen(3000,()=>console.log('Express server started at port 3000'));

*/
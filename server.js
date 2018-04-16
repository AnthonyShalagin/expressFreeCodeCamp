const express = require('express'),
      app = express();
      
//setting the port
app.set('port', process.env.PORT || 3000);

//first middleware
app.use((request,respone,next)=>{
	console.log(`processing for data for ${request.url}`);
	next();
});

//second middleware
app.use((request,response,next)=>{
	console.log(`The response.send will terminate the request`);
	response.send(`Hello world`);
});

//third middleware
app.use((request,respone,next)=>{
	console.log(`I’ll never get called`);
});

app.listen(3000,()=>console.log('Express server started at port 3000'));
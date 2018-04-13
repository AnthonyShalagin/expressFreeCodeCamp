const express = require('express'),
      hbs = require('express-handlebars').create({defaultLayout:'main.hbs'}),
      app = express();

//setting our app engine to handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.get('/',(request,response)=>{
  response.render('home',{title: 'Home'});
});

app.get('/about',(request,response)=>{
  response.render('about',{title: 'About'});
});

app.listen(3000,()=>console.log('Express server started at port 3000'));

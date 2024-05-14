const express =require('express');
const port =8000;




const app=express();
const bodyParser =require('body-parser');

//
require('./db');
require('./models/user');
require('./models/footprint')
//
const authenRoutes= require('./router/authenRoutes');
const requiredToken=require('./Middleware/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authenRoutes);
//

app.get('/',requiredToken,(req ,res )=>{
    console.log( req.data);
    res.send( "This is home page");
})
 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
const express= require("express");
const app= express();
const bodyParser = require('body-parser');
//Middlewares
app.use(express.json());
//app.use(express.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
//app.use(bodyParser.json({ limit: '50mb' }));

//routes
app.use(require("./Routes/routes"));

app.listen(5000);
console.log("Server on port 5000")
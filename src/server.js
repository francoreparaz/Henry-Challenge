const express= require("express");
const app= express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use(require("./Routes/routes"));

app.listen(5000);
console.log("Server on port 5000")
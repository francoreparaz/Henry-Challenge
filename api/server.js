const express= require("express");
const app= express();
const bodyParser = require('body-parser');
//Middlewares

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//routes
app.use(require("./routes"));

app.listen(5000);
console.log("Server on port 5000")
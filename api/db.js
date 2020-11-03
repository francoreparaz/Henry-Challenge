const {Sequelize}= require("sequelize");
const sequelize = new Sequelize("postgres://postgres:mishermosos@localhost:5432/challenge")

sequelize.authenticate()
.then(()=>{console.log("conectado")})
.catch(err=>{console.log("ERROR",err)})
//cimporting components
import './App.css';
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductsCard from './components/ProductsCard';
import { useState } from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom"



function App() {
const [input,setInput]=useState("")  
const[productos,setProductos]=useState([])
const[sort,setSort]=useState("")
const[condicion,setCondicion]=useState("")


function SetStateInput(props){
  setInput(props)
}
 
 function peticion(){
  const inputValue = input;
   Axios.get(`http://localhost:5000/api/search?q=${inputValue}`)
  .then (res=>{
    setProductos(productos => [...productos, res.data]);
  })
  .catch(error=>(error))
}

localStorage.getItem("productos", JSON.stringify(productos));
//var aValue = localStorage.getItem("productos")

 
function handleSubmit(e){
  e.preventDefault();
  peticion()
  setInput("")
}

function sortProducts(e){
  const sort= e.target.value;
  console.log(sort)
  setSort(sort);
  setProductos(productos.slice().sort((a,b)=>(
    sort === "Lowest"?
    ((a[0].price > b[0].price) ? 1 : -1):
    sort === "Highest" ?
    ((a[0].price < b[0].price) ? 1 : -1):productos
    
  )))
}

function filterCondicion(e){
  const condition = e.target.value
  console.log(condition)
  setCondicion(condition);
  setProductos(productos.slice().sort(x=>(
    condicion === "Nuevo"?
    (x.response[0].condition ==="new"?1:-1):
    condicion === "Usado"?
    ((x.response[0].condition.used))?1:-1:productos
  )))
}

  return (
    <div className="App">
      <Router>
      <NavBar
       state={input} 
       SetStateInput={SetStateInput} 
       handleSubmit={handleSubmit} 
       sort={sort} sortProducts={sortProducts}
       condicion={condicion}
       filterCondicion={filterCondicion}

       />
     <h1>Henry Challenge</h1>
     <hr></hr>
     <ProductsCard productos={productos}/>
    

    
      </Router>
    </div>
  );
}

export default App;

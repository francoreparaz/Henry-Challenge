//cimporting components
import './App.css';
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogo from './components/Catalogo';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import Carrusel from './components/Carrusel';
import Pagination from './components/pagination';




function App() {
const [input,setInput]=useState("")  
const[productos,setProductos]=useState([])
const[sort,setSort]=useState("")
const[condicion,setCondicion]=useState("")
const[currentPage,setCurrentPage]=useState(1)
const[productsPerPage]=useState(30)


function SetStateInput(props){
  setInput(props)
}


  function peticion(){
    const inputValue = input;
     Axios.get(`http://localhost:5000/api/search?q=${inputValue}`)
     .then (res=>{ 
      setProductos(res.data)
       
      })
      
    }
 

function handleSubmit(e){
  e.preventDefault();
  peticion()
  setInput("")
}

function sortProducts(e){
  const sort= e.target.value;
  setProductos(productos.slice().sort((a,b)=>(
    sort === "Lowest"?
    ((a.price > b.price) ? 1 : -1):
    sort === "Highest" ?
    ((a.price < b.price) ? 1 : -1):productos
    
  )))
}

function filterCondicion(e){
  const condition = e.target.value
  if(condition === ""){
     setCondicion(condition)
     setProductos(productos)
   
  }else
  
   if(condition === "new"){
    setCondicion(condition);
    setProductos(productos.slice().filter(x=>x.condition.indexOf(condition)>=0) )
   } else{
    setCondicion(condition);
    setProductos(productos.slice().filter(x=>x.condition.indexOf(condition)>=0) )
   }
  
  
}
 
const indexOfLastPost= currentPage * productsPerPage
const indexOfFirstPost= indexOfLastPost - productsPerPage
const currentProducts = productos.slice(indexOfFirstPost,indexOfLastPost)

function paginate(pageNumbers){
  setCurrentPage(pageNumbers)
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
     <Carrusel/>
     <hr></hr>
    
     <Route exact path="/" render={() => <Catalogo productos={currentProducts}/>}/>
      </Router>

      <Pagination productsPerPage={productsPerPage} totalProducts={productos.length} paginate={paginate}/>
    </div>
  );
}

export default App;

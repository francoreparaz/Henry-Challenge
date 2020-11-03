import React from "react";
import SearchBar from "./searchBar"
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap"
import "./navBar.css"

export default function NavBar(){
  return(
    <div className="Nav">
  <div className="henry">
     <Link to="/">
      <h2>Henry-Challenge</h2>
     </Link>
      
      </div>
         <Navbar>
            <SearchBar/>
         </Navbar>

         <div className="filter-prices">
        <h2>Prices</h2>
        </div> 
        
         <div className="filter">
          <select>
              <option value="Lastest">Lastest</option>
              <option className="Lowest">Lowest</option>
              <option className="Highest">Highest</option>
          </select>
        </div>

       <div className="categories">
        <h2>Categories</h2>
        </div> 
               
        <div className="filter">
            
            <select>
                <option>Tecnologias</option>
                <option>Vehiculos</option>
                <option>Libros</option>
                <option>Supermercados</option>
            </select>
        </div>
           
    </div>
  )
}
import React from "react";
import SearchBar from "./searchBar"
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap"
import logo from "../logo/logoHenry.png"
import logoUbi from "../logo/Logo.png"
import "./navBar.css"

export default function NavBar({state,SetStateInput,handleSubmit,sort,sortProducts,condicion,filterCondicion}){
  return(
    <div className="Nav">
  <div className="henry">
     
      <h2>Henry-Challenge <img className="logo" src={logo}/> </h2>
    
     <div className="ubicacionYlogo">
      <p>
        <img className="ubi"src={logoUbi}></img>
           Enviar a Toni
         <strong>
           <p className="avenida">Avenida siempre viva 742</p>
           </strong>
        
        </p>
      
     </div>
      
      </div>
         <Navbar>
            <SearchBar state={state} SetStateInput={SetStateInput} handleSubmit={handleSubmit}/>
         <div className="filter-prices">
        <h5>Prices</h5>
        </div> 
         <div className="filter">
          <select value={sort} onChange={sortProducts}>
              <option>Filter</option>
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
          </select>
        </div>
        
       <div className="categories">
        <h5>Condición</h5>
        </div> 
               
        <div className="filter">
            
            <select value={condicion} onChange={filterCondicion}>
                <option>Filter</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
                
            </select>
        </div>
         </Navbar>


           
    </div>
  )
}
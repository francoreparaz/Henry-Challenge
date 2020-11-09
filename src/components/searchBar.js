import React, { useState } from "react"
import axios from "axios";
import "./searchBar.css"
import ProductsCard from "./ProductsCard";

export default function SearchBar({state,SetStateInput,handleSubmit}){
// [input,setInput]=useState("")

    return(
        <form className="Form" onSubmit={handleSubmit}>
         <input
          className="Search-input" 
          value= {state}
          type="text"
          placeholder="Buescar Productos,marcas y mas..."
          onChange={e=>{SetStateInput(e.target.value)}}
          />
          <button className="button" type="submit">
              <strong>Search...</strong>
              </button>
              
        </form>
    )
}
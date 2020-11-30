import React, { useState } from "react"
import axios from "axios";
import "./searchBar.css"
import Catalogo from "./Catalogo";

export default function SearchBar({state,SetStateInput,handleSubmit}){


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
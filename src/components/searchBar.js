import React, { useState } from "react"
import axios from "axios";
import "./searchBar.css"
export default function SearchBar(){
    const [input,setInput]=useState("")

    function handleSubmit(e){
       e.preventDefault();
       setInput("")
    }
    return(
        <form className="Form" onSubmit={handleSubmit}>
         <input
          className="Search-input" 
          value= {input}
          type="text"
          placeholder="Buescar Productos,marcas y mas..."
          onChange={e=>{setInput(e.target.value)}}
          />
          <button className="button" type="submit">
              <strong>Search...</strong>
              </button>
        </form>
    )
}
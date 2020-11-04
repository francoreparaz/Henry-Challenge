import React, { useState } from "react"
import axios from "axios";
import "./searchBar.css"
export default function SearchBar(){
    const [input,setInput]=useState("")

 
     function peticion(){
        const inputValue= input
        axios.get(`http://localhost:5000/api/search?q=${inputValue}`)
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
     }

    function handleSubmit(e){
       e.preventDefault();
       peticion()
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
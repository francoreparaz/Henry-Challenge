import React from 'react'
import "./pagination.css"

export default function Pagination({productsPerPage, totalProducts,paginate}) {
    const pageNumbers=[];
    for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i)
        
    }
    return (
        
            <nav className="pagination">
                <ul>
                    {
                        pageNumbers.map(num=>(
                            <li key={num} className="page-item">
                                <a onClick={()=>paginate(num)}  className="page-Link">
                                    {num}
                                </a>

                            </li>
                        ))
                    }
                </ul>
            </nav>
       
    )
}

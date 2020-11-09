import React from "react";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
//import logoCarrito from '../logo/logoCarrito.png'
import "./ProductsCard.css"

export default function ProductsCard({productos}){
  //console.log(productos)
  //  var map= productos.map(x=>(
  //  <li>{x.title}</li>
  //  ))
  //    console.log(map)
  return(
    <div>
        
      {productos&&productos.map(x=>
      <div className="productos">
          <Card className="cartas">
       
        <Card.Img variant="top" className="imagen" src={x[0].thumbnail} />
          <Card.Body>
            <Card.Title className="title">{x[0].title}</Card.Title>
            {console.log(x)}
          <Card.Text>
              <div>
              <strong className="Price">{x[0].currency_id} {x[0].price}</strong>
              </div>
              <div className="Condition">
               Condition: {x[0].condition} 
              </div>
              <div className="Stock">
           Stock: {x[0].available_quantity}
              </div>
            <button className="Button">Add To Cart</button>
              
          </Card.Text>
          </Card.Body>
          
        </Card>
        
        </div>
        )}
     
    </div>
  )
}


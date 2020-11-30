import {React} from "react";
import {Card,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"
import {Fade} from "react-reveal"
import "./Catalogo.css"

export default function Catalogo({productos}){


  
  return(
    <div>

      <Fade bottom cascade>
        {
        
    <div className="productos">
    
      {productos && productos.map((x)=>{
  
       
      return (
      <Card className="cartas">
      <Card.Img variant="top" className="imagen" src={x.thumbnail} />
      <Card.Body>
        <Link>
        <Card.Title className="title" >{x.title}</Card.Title>
        </Link>
        
        <hr/>
      <Card.Text>
        <div>
        <strong className="Price">{x.currency_id} {x.price}</strong>
        </div>
        <hr/>
        <div className="Condition">
         Condition: {x.condition} 
        </div>
        <div className="Stock">
       Stock: {x.available_quantity}
        </div>
        <Button
      variant="primary"
       
      onClick={()=>alert(`${x.title} Adeed Succesfully`)}
     
    >
      Add To Cart
    </Button>
    
        
      </Card.Text>
      </Card.Body>
      
      </Card>
      
    )})}
     
      </div>
  }</Fade>

    </div>
  )
  }

import {React,useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Logo from '../logo/Marketing.jpg'
import imagen from '../logo/carrusel.jpg'
import "./Carrusel.css"

export default function Carrusel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="imagenCarrusel"
          src={Logo}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenCarrusel"
          src={imagen}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
        </div>
    )
}

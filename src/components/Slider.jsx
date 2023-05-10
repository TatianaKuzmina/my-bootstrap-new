import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Slider = () => {
  return (
<Carousel>
      <Carousel.Item interval={2000}>
        <img height={800}
          className="d-block w-100"
          src="./img/i (2).webp"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <Link exact to={'/form'}>
          <Button variant="primary">Обратная связь</Button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img height={800}
          className="d-block w-100"
          src="./img/i.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img height={800} 
          className="d-block w-100"
          src="./img/i-97-13.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
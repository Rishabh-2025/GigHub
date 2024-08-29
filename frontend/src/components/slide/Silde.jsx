import React from 'react';
import { CarouselProvider, Slider, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Slide.scss';
import { cards } from "../../data";

function Slides({children,slides,index}) {
  return (
    <div className='slide'>
      <div className='slide_container'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={cards.length}
          visibleSlides={4}
          infinite={true}
          interval={4000}
          isPlaying={true} 
        >
          <Slider slides={slides} index ={index}>
            {children}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Slides;

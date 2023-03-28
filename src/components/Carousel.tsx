import React from 'react';
import "./Carousel.css"
// import Media from '../assets/MediatekNg.svg'
import "@splidejs/react-splide/css";
import { 
    Options,
    SplideTrack, 
    Splide, 
    SplideSlide 
} from "@splidejs/react-splide";

const options: Options = {
    perPage: 3,
    type: 'loop',
    autoplay: true,
    arrows: false,
    pagination: false,
    rewind: true,
    gap   : '1rem',
};

const slides = [
    {
        name: "Mediatek Ng",
        text: "mediatekng.com",
        icon: "/static/media/Stars%20Icon.233149f8ef135a0d51813dfdf11778a0.svg",
        image: "https://adewaleimg.netlify.app/img-assests/MediatekNg.webp",
    },
    {
        name: "Reset USA",
        text: "reset-usa.com",
        icon: "/static/media/Stars%20Icon.233149f8ef135a0d51813dfdf11778a0.svg",
        image: "https://adewaleimg.netlify.app/img-assests/Reset-USA%20Mockup.webp",
    },
    {
        name: "Custom QR Code Generator",
        text: "custom-qrcode.netlify.app",
        icon: "/static/media/Stars%20Icon.233149f8ef135a0d51813dfdf11778a0.svg",
        image: "https://adewaleimg.netlify.app/img-assests/Custom-QR-CODE.webp",
    },
    {
        name: "Ask Shola",
        text: "askshola.com",
        icon: "/static/media/Stars%20Icon.233149f8ef135a0d51813dfdf11778a0.svg",
        image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA.webp",
        url: "#"
    },
];

export default function Carousel() {
  return (
    <>
        <div className='wrapper'>
            <div className='splide'>
                <Splide options={options}
                        aria-labelledby="autoplay-example-heading"
                        hasTrack={ false }>
                            <SplideTrack>
                    {slides.map((slide) => (
                        <SplideSlide>
                            <div className='slide'>
                                <div className='card'>
                                    <div className='carousel-text'>
                                        <a href={slide.url}>
                                            <div>
                                                <h3>{slide.name}</h3>
                                                <p>{slide.text}</p>
                                            </div>
                                            <img src={slide.icon} alt='stars' />
                                        </a>
                                    </div>
                                    <div className='carousel-img'>
                                        <img src={slide.image} alt={slide.name} />
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>        
                    ))}
                    </SplideTrack>
                </Splide>
            </div>
        </div>
    </>
  )
}

import React from 'react';
import "./Carousel.css"
import Star from '../assets/Stars Icon.svg'
import "@splidejs/react-splide/css";
import { 
    Options, 
    Splide, 
    SplideSlide 
} from "@splidejs/react-splide";

const options: Options = {
    perPage: 2,
    arrows: false,
    pagination: false,
};

const slides = [
    {
        name: "Mediatek Ng",
        text: "mediatekng.com",
        icon: "/static/media/github.dfb30978126e916bf849186a778eb9e8.svg",
        image: "",
    },
    {
        name: "Reset USA",
        text: "reset-usa.com",
        icon: "star",
        image: "",
    },
    {
        name: "Custom QR Code Generator",
        text: "custom-qrcode.netlify.app",
        icon: "star",
        image: "",
    },
    {
        name: "Ask Shola",
        text: "askshola.com",
        icon: "",
        image: "",
    },
];

export default function Carousel() {
  return (
    <>
        <div className='wrapper'>
            <div className='splide'>
                <Splide options={options}>
                    {slides.map((slide) => (
                        <SplideSlide>
                            <div className='slide'>
                                <div className='card'>
                                    <div className='carousel-text'>
                                        <a href='#'>
                                            <div>
                                                <h3>{slide.name}</h3>
                                                <p>{slide.text}</p>
                                            </div>
                                            {slide.icon}
                                        </a>
                                    </div>
                                    <div className='carousel-img'>
                                        {slide.image}
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    </>
  )
}

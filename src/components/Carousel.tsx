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
    rewind: true,
    gap   : '1rem',
};

const slides = [
    {
        name: "Mediatek Ng",
        text: "mediatekng.com",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        image: "https://responsive-nav-with-megamenu.netlify.app/images/MediatekNg.svg",
    },
    {
        name: "Reset USA",
        text: "reset-usa.com",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        image: "https://responsive-nav-with-megamenu.netlify.app/images/MediatekNg.svg",
    },
    {
        name: "Custom QR Code Generator",
        text: "custom-qrcode.netlify.app",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        image: "https://responsive-nav-with-megamenu.netlify.app/images/MediatekNg.svg",
    },
    {
        name: "Ask Shola",
        text: "askshola.com",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        image: "https://responsive-nav-with-megamenu.netlify.app/images/MediatekNg.svg",
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
                                            <img src={slide.icon} alt='Open Link' />
                                        </a>
                                    </div>
                                    <div className='carousel-img'>
                                        <img src={slide.image} alt='Open Link' />
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

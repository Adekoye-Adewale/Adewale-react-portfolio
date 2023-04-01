import React from 'react'
import './ExperienceList.css'
import CardItem from './CardItem'
import Star from '../assets/Stars Icon.svg'

const experiencesFile = [
    {
        title: "WordPress",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "#",
        urlname: "Since 2019",
        image: "https://adewaleimg.netlify.app/img-assests/WordPress.webp",
        imagename: "WordPress",
    }, {
        title: "Content Writing",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "#",
        urlname: "Since 2016",
        image: "https://adewaleimg.netlify.app/img-assests/Content%20Writing.webp",
        imagename: "Content Writing",
    }, {
        title: "Social Media Management",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "#",
        urlname: "Since 2016",
        image: "https://adewaleimg.netlify.app/img-assests/SMM.webp",
        imagename: "Social Media Management",
    }, {
        title: "Graphics Designing",
        icon: "",
        url: "#",
        urlname: "Since 2017",
        image: "https://adewaleimg.netlify.app/img-assests/Graphics%20Designing.webp",
        imagename: "Graphics Designing",
    }, {
        title: "SEO and Analytics",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "",
        urlname: "Since 2019",
        image: "https://adewaleimg.netlify.app/img-assests/SEO.webp",
        imagename: "SEO and Analytics",
    }, {
        title: "JavaScript",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "#",
        urlname: "Since 2021",
        image: "../static/media/JavaScript.3bb36fd89f0277e27fd5fa1e744820c7.svg",
        imagename: "JavaScript",
    }, {
        title: "React JS",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "#",
        urlname: "Since 2021",
        image: "https://adewaleimg.netlify.app/img-assests/React%20JS.webp",
        imagename: "React JS",
    }, {
        title: "HTML & CSS",
        icon: "https://responsive-nav-with-megamenu.netlify.app/images/Stars%20Icon.svg",
        url: "#",
        urlname: "Since 2020",
        image: "https://adewaleimg.netlify.app/img-assests/HTML%20and%20CSS.webp",
        imagename: "HTML & CSS",
    }
];


export default function ExperienceList() {
  return (

    <div className='projects-wrapper'>
            {experiencesFile.map((experienceFile, index) => (
        <CardItem 
            key={index}
            icon={Star}
            title={experienceFile.title} 
            link={experienceFile.url} 
            linkName={experienceFile.urlname}
            image={experienceFile.image}
            imageName={experienceFile.imagename}/>
            )
            )}
    </div>
  )
}

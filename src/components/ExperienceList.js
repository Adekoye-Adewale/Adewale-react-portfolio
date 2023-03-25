import React from 'react'
import './ExperienceList.css'
import CardItem from './CardItem'
import JS from '../assets/JavaScript.svg'
import Star from '../assets/Stars Icon.svg'

const experiencesFile = [
    {
        title: "WordPress",
        icon: "",
        url: "#",
        urlname: "Since 2019",
        image: "",
        imagename: "WordPress",
    }, {
        title: "Content Writing",
        icon: "",
        url: "#",
        urlname: "Since 2016",
        image: "",
        imagename: "Content Writing",
    }, {
        title: "Social Media Management",
        icon: "",
        url: "#",
        urlname: "Since 2016",
        image: "",
        imagename: "Custom QR Code",
    }, {
        title: "SEO and Analytics",
        icon: "",
        url: "",
        urlname: "Since 2019",
        image: "",
        imagename: "SEO and Analytics",
    }, {
        title: "JavaScript",
        icon: "",
        url: "#",
        urlname: "Since 2021",
        image: "../static/media/JavaScript.3bb36fd89f0277e27fd5fa1e744820c7.svg",
        imagename: "JavaScript",
    }, {
        title: "React JS",
        icon: "",
        url: "#",
        urlname: "Since 2021",
        image: "",
        imagename: "React JS",
    }, {
        title: "HTML & CSS",
        icon: "",
        url: "#",
        urlname: "Since 2020",
        image: "",
        imagename: "HTML & CSS",
    }, {
        title: "Graphics Designing",
        icon: "",
        url: "#",
        urlname: "Since 2017",
        image: "",
        imagename: "Graphics Designing",
    }
];


export default function ExperienceList() {
  return (

    <div className='projects-wrapper'>
            {experiencesFile.map((experienceFile) => (
        <CardItem 
            icon={Star}
            title={experienceFile.title} 
            link={experienceFile.url} 
            linkName={experienceFile.urlname}
            image={JS}
            imageName={experienceFile.imagename}/>
            )
            )}
    </div>
  )
}

import React from 'react'
import './ProjectLists.css'
import ProjectItem from './CardItem'
import OpenLink from '../assets/Open-Link-Icon.svg';

const projectsFile = [
        {
            title: "Reset USA",
            icon: "",
            url: "https://www.reset-usa.com",
            urlname: "reset-usa.com",
            image: "https://adewaleimg.netlify.app/img-assests/Reset-USA%20Mockup.webp",
            imagename: "Reset USA",
        }, {
            title: "MediatekNg",
            icon: "",
            url: "https://www.mediatekng.com/",
            urlname: "mediatekng.com",
            image: "https://adewaleimg.netlify.app/img-assests/MediatekNg.webp",
            imagename: "Mediatek Ng",
        }, {
            title: "Custom QR Code Generator",
            icon: "",
            url: "https://custom-qrcode.netlify.app/",
            urlname: "adekoyeadewale.com",
            image: "https://adewaleimg.netlify.app/img-assests/Custom-QR-CODE.webp",
            imagename: "Custom QR Code",
        }, {
            title: "Responsive-MegaMenu",
            icon: "",
            url: "",
            urlname: "adekoyeadewale.com",
            image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA.webp",
            imagename: "Responsive-MegaMenu",
        }, {
            title: "AskShola",
            icon: "",
            url: "https://askshola.com/",
            urlname: "askshola.com",
            image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA.webp",
            imagename: "Askshola",
        }, {
            title: "ScrapBeta",
            icon: "",
            url: "https://scrapbeta.com/",
            urlname: "scrapbeta.com",
            image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA.webp",
            imagename: "Scrapbeta",
        }, {
            title: "FinnGrey",
            icon: "",
            url: "https://finngreyprojects.com/",
            urlname: "finngreyprojects.com",
            image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA.webp",
            imagename: "Finngreyprojects",
        }, {
            title: "Ayoola Photography",
            icon: "",
            url: "https://ayoolaoluwatosin.com/",
            urlname: "ayoolaoluwatosin.com",
            image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA.webp",
            imagename: "Ayoolaoluwatosin",
        }
    ];

export default function ProjectLists() {
  return (
    <>
        <div className='projects-wrapper'>
            {projectsFile.map((projectFile) => (
                    <ProjectItem 
                        icon={OpenLink}
                        title={projectFile.title} 
                        link={projectFile.url} 
                        linkName={projectFile.urlname}
                        image={projectFile.image}
                        imageName={projectFile.imagename}/>
            )
            )}
        </div>
    </>
  )
}

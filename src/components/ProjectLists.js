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
            image: "https://adewaleimg.netlify.app/img-assests/RESET%20USA%20Small.webp",
            imagename: "Reset USA",
        }, {
            title: "MediatekNg",
            icon: "",
            url: "https://www.mediatekng.com/",
            urlname: "mediatekng.com",
            image: "https://adewaleimg.netlify.app/img-assests/MediaTek%20NG-%20Small.webp",
            imagename: "Mediatek Ng",
        }, {
            title: "Custom QR Code Generator",
            icon: "",
            url: "https://custom-qrcode.netlify.app/",
            urlname: "adekoyeadewale.com",
            image: "https://adewaleimg.netlify.app/img-assests/QR%20CODE%20GEN%20small.webp",
            imagename: "Custom QR Code",
        }, {
            title: "Responsive-MegaMenu",
            icon: "",
            url: "https://responsive-nav-with-megamenu.netlify.app/",
            urlname: "adekoyeadewale.com",
            image: "https://adewaleimg.netlify.app/img-assests/MEGA%20MENU.webp",
            imagename: "Responsive-MegaMenu",
        }, {
            title: "AskShola",
            icon: "",
            url: "https://askshola.com/",
            urlname: "askshola.com",
            image: "https://adewaleimg.netlify.app/img-assests/ASK%20SHOLA%20Small.webp",
            imagename: "Askshola",
        }, {
            title: "ScrapBeta",
            icon: "",
            url: "https://scrapbeta.com/",
            urlname: "scrapbeta.com",
            image: "https://adewaleimg.netlify.app/img-assests/ScrapBeta.webp",
            imagename: "Scrapbeta",
        }, {
            title: "FinnGrey",
            icon: "",
            url: "https://finngreyprojects.com/",
            urlname: "finngreyprojects.com",
            image: "https://adewaleimg.netlify.app/img-assests/FinnGrey.webp",
            imagename: "Finngreyprojects",
        }, {
            title: "Super User Group",
            icon: "",
            url: "https://www.superusergroup.com/",
            urlname: "superusergroup.com",
            image: "https://adewaleimg.netlify.app/img-assests/Super%20User%20Group.webp",
            imagename: "superusergroup",
        }, {
            title: "Ayoola Photography",
            icon: "",
            url: "https://ayoolaoluwatosin.com/",
            urlname: "ayoolaoluwatosin.com",
            image: "https://adewaleimg.netlify.app/img-assests/AyoOla.webp",
            imagename: "Ayoolaoluwatosin",
        }, {
            title: "Scribe Workforce Management",
            icon: "",
            url: "https://www.scribewmgt.com",
            urlname: "scribewmgt.com",
            image: "https://adewaleimg.netlify.app/img-assests/Scribe%20Workforce%20Management.webp",
            imagename: "Scribe Workforce Management",
        }, {
            title: "POF LUXURY",
            icon: "",
            url: "https://www.pofluxury.com",
            urlname: "pofluxury.com",
            image: "https://adewaleimg.netlify.app/img-assests/Scribe%20Workforce%20Management.webp",
            imagename: "Posfik Brand",
        }
    ];

export default function ProjectLists() {
  return (
    <>
        <div className='projects-wrapper'>
            {projectsFile.map((projectFile, index) => (
                    <ProjectItem 
                        key={index}
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

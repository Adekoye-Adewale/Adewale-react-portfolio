import React from 'react'
import './ProjectLists.css'
import ProjectItem from './ProjectItem'
import ResetUSA from '../assets/ResetUSA.svg'

const projectsFile = [
        {
            title: "Reset USA",
            icon: "",
            url: "https://www.reset-usa.com",
            urlname: "reset-usa.com",
            image: "",
            imagename: "Reset USA",
        }, {
            title: "MediatekNg",
            icon: "",
            url: "https://www.mediatekng.com/",
            urlname: "mediatekng.com",
            image: "../assets/github.svg",
            imagename: "Mediatek Ng",
        }, {
            title: "Custom QR Code Generator",
            icon: "",
            url: "https://custom-qrcode.netlify.app/",
            urlname: "adekoyeadewale.com",
            image: "",
            imagename: "Custom QR Code",
        }, {
            title: "Responsive-MegaMenu",
            icon: "",
            url: "",
            urlname: "adekoyeadewale.com",
            image: "",
            imagename: "Responsive-MegaMenu",
        }, {
            title: "AskShola",
            icon: "",
            url: "https://askshola.com/",
            urlname: "askshola.com",
            image: "",
            imagename: "Askshola",
        }, {
            title: "ScrapBeta",
            icon: "",
            url: "https://scrapbeta.com/",
            urlname: "scrapbeta.com",
            image: "",
            imagename: "Scrapbeta",
        }, {
            title: "FinnGrey",
            icon: "",
            url: "https://finngreyprojects.com/",
            urlname: "finngreyprojects.com",
            image: "",
            imagename: "Finngreyprojects",
        }, {
            title: "Ayoola Photography",
            icon: "",
            url: "https://ayoolaoluwatosin.com/",
            urlname: "ayoolaoluwatosin.com",
            image: "",
            imagename: "Ayoolaoluwatosin",
        }
    ];

export default function ProjectLists() {
  return (
    <>
        <div className='projects-wrapper'>
            {projectsFile.map((projectFile) => (
                    <ProjectItem 
                        icon={projectFile.icon}
                        title={projectFile.title} 
                        link={projectFile.url} 
                        linkName={projectFile.urlname}
                        image={ResetUSA}
                        imageName={projectFile.imagename}/>
            )
            )}
        </div>
    </>
  )
}

import React from 'react'
import './Sidebar.css'
import logo from '../logo.svg'

export default function Sidebar() {
  return (
    <>
        <div className='side-bar'>
            <img src={logo} alt='Adekoye-Adewale' />
            <h1>Adekoye Adewale</h1>
            <h3>Developer | Creator | Strategist | Designer</h3>
            <p>Self-taught Web Developer, Based in Lagos, Nigeria</p>
            
            <div className='space'>
                <h3>
                    Passionate about building accessible website, 
                    web apps, and mobile applications that users love
                    and solve their problems.
                </h3>
                <p>I am open to projects/collaboration opportunities</p>
            </div>

            <div className='btn-wrapper'>
                <a href='./contact' className='btn'>
                    Contact
                </a>
                <a href='./projects' className='btn'>
                    Projects
                </a>
                <a href='./contact' className='btn'>
                    Experience
                </a>
            </div>

            <div className='foot'>
                <a href='mailto:adekoyeadewale@gmail.com'>
                    adekoyeadewale@gmail.com
                </a> <br/>
                <a href='tel:2347045043007'>
                    +234 704 504 3007
                </a><br/>
                <a href='tel:8067355472'>
                    +234 806 735 5472
                </a>
            </div>
        </div>
    </>
  )
}

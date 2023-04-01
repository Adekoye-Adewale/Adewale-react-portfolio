import { useState, useEffect } from 'react';
import './Sidebar.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) {
                setIsMenuVisible(true);
            } else {
                setIsMenuVisible(false);
            }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        
        const handleMenuClick = () => {
            setIsMenuVisible(true);
            if (window.innerWidth < 767) {
              window.scrollTo({ top: 500, behavior: 'smooth' });
            }
        };
          

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
                    
                    {isMenuVisible ? (
                    <div className='btn-wrapper'>
                        <Link to="/contact" className='btn' onClick={handleMenuClick}>
                            Contact
                        </Link>
                        <Link to="/projects" className='btn' onClick={handleMenuClick}>
                            Projects
                        </Link>
                        <Link to="/experience" className='btn' onClick={handleMenuClick}>
                            Experience
                        </Link>
                    </div>
                    ) : (
                        <div className='btn-wrapper'>
                            <Link to="/contact" className='btn' onClick={handleMenuClick}>
                                Contact
                            </Link>
                            <Link to="/projects" className='btn' onClick={handleMenuClick}>
                                Projects
                            </Link>
                            <Link to="/experience" className='btn' onClick={handleMenuClick}>
                                Experience
                            </Link>
                        </div>
                        )}

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

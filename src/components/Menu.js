import { useState, useEffect } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
import { RiUserLine, RiBriefcaseLine, RiChat3Line, RiFolderLine } from 'react-icons/ri';

const menuItems = [
  { name: 'About', path: '/', icon: <RiUserLine /> },
  { name: 'Contact', path: '/contact', icon: <RiChat3Line /> },
  { name: 'Experience', path: '/experience', icon: <RiBriefcaseLine /> },
  { name: 'Projects', path: '/projects', icon: <RiFolderLine /> },
];

const MobileMenu = () => {
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
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  return (
    <>
      {isMenuVisible && (
        <nav className='mobile-menu'>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name} onClick={handleMenuClick}>
              <div className="menu-item">
                {item.icon}
                <span className="menu-item-name">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default MobileMenu;

import React, { useState } from 'react'; // Import React and useState hook
import arm from '../../assets/arm.png'; // Import logo image
import navbar from '../../assets/navbar.png'; // Import hamburger menu image
import style from '../../styles/components/common/NavBar.module.css'; // Import CSS module for styling
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

const NavBar: React.FC = () => {
  // State to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook to get the current location object
  const location = useLocation();

  // Function to check if the current route matches the provided route
  const matchRoute = (route: string): boolean => {
    return route === location.pathname;
  };

  // Function to toggle the mobile menu open/close state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={style.container}>
      {/* Header with logo and app name */}
      <h3 className={style.heading}>
        S<img src={arm} alt='logo' />Fitness
      </h3>

      {/* Navigation links container */}
      <div className={`${style.navlink} ${isMobileMenuOpen ? style.mobileMenuOpen : ''}`}>
        {/* Home link */}
        <Link 
          to='/' 
          style={matchRoute('/') ? { color: 'rgb(239, 113, 55)' } : undefined} 
          onClick={closeMobileMenu}
        >
          <span>Home</span>
        </Link>
        
        {/* Challenges link */}
        <Link 
          to='/challenges' 
          style={matchRoute('/challenges') ? { color: 'rgb(239, 113, 55)' } : undefined} 
          onClick={closeMobileMenu}
        >
          <span>Challenges</span>
        </Link>
        
        {/* Workouts link */}
        <Link 
          to='/workouts' 
          style={matchRoute('/workouts') ? { color: 'rgb(239, 113, 55)' } : undefined} 
          onClick={closeMobileMenu}
        >
          <span>Workouts</span>
        </Link>
      </div>

      {/* Hamburger menu button */}
      <button className={style.hamburger} onClick={toggleMobileMenu}>
        <img src={navbar} alt="Open Menu" className={style.navbarImage} />
      </button>
    </div>
  );
};

export default NavBar;

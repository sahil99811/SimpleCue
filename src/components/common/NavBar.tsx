import React from 'react';
import arm from '../../assets/arm.png';
import style from '../../styles/components/homepage/NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);

  const matchRoute = (route: string): boolean => {
    return route === location.pathname;
  };

  return (
    <div className={style.container}>
      <h3 className={style.heading}>S<img src={arm} alt='logo' />Fitness</h3>
      <div className={style.navlink}>
        <Link to='/' style={matchRoute('/') ? { color: 'rgb(239, 113, 55)' } : undefined}>
          <span>Home</span>
        </Link>
        <Link to='/challenges' style={matchRoute('/challenges') ? { color: 'rgb(239, 113, 55)' } : undefined}>
          <span>Challenges</span>
        </Link>
        <Link to='/workouts' style={matchRoute('/workouts') ? { color: 'rgb(239, 113, 55)' } : undefined}>
          <span>Workouts</span>
        </Link>
      </div>
      {/* <button className={style.button}>Sign In</button> */}
    </div>
  );
};

export default NavBar;

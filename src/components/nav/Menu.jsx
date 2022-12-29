import React, { useState } from 'react';
import './menu.scss'
import logo from '../../assets/Todo-Logo-removebg-preview.png'
import { Link } from 'react-router-dom';
const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll= () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    console.log(isScrolled)
  return (
    <div className={isScrolled ? "navbar scrolled " : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={logo}
            alt=""
          />
         <Link to="/"><span>Add todo</span></Link>
         <Link to='/mytodo'> <span>My Todo</span></Link>
         <Link to='/complete'> <span>Completed</span></Link>
          
        </div>
     
      </div>
    </div>
  );
};

export default Menu;
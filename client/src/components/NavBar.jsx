import React, { useState } from 'react';
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };

    return (
        <header>
            <h3>logo</h3>
            <nav className={menuOpen ? 'open-menudropdown' : 'nav-menu'}>
                <a href='/home'>Home</a>
                <a href='/ai'>Ai</a>
                <a href='/about'>About</a>
                <a href='/settings'>Settings</a>
                <VscChromeClose className='Nav-close-btn' onClick={toggleMenu} />
            </nav>
            <VscMenu className= {menuOpen ? 'Nav-No-menu-btn':'Nav-menu-btn' } onClick={toggleMenu} />
        </header>
    );
};

export default NavBar;

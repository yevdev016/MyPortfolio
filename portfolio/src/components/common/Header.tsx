import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    function toggleMenu() {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <div className="header-container">
            <div className="left-panel-container">
                <h1>yev.dev</h1>
            </div>

            <div className={`right-panel-container ${isMenuActive ? 'active' : ''}`}>
                <Link to='/AboutMe'>About me</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div className="hamburger-menu" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
}

export default Header;
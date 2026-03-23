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
                <Link to="/AboutMe" onClick={toggleMenu}>About me</Link>
                <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                <Link to="/skills" onClick={toggleMenu}>Skills</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>

            <div
                className={`hamburger-menu ${isMenuActive ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
}

export default Header;
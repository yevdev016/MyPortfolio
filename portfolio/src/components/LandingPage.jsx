import './LandingPage.css';
import myImage from '../assets/mypic.png';

function LandingPage() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h2>Hello, I'm <span className="highlight">Arvey Cura</span></h2>
                <p className="role">A Full Stack Developer.</p>
                <p className="description">Building modern web applications from front to back.</p>
                <button className="cta-button">View My Work</button>
            </div>
            <div className="hero-image">
                <img src={myImage} alt="Arvey Cura" />
            </div>
        </section>
    );
}

export default LandingPage;
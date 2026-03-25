import './LandingPage.css';
import data from '../data/data'

function LandingPage() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h2>Hello, I'm <span className="highlight">{data.personal.name}</span></h2>
                <p className="role">{data.personal.role}</p>
                <p className="description">{data.personal.description}</p>
                <div className='tech-stack'>
                    <div className="tech-badge">{data.frontend.html.name}
                        <img src={data.frontend.html.logo} alt="HTML" />
                    </div>
                    <div className="tech-badge">{data.frontend.css.name}
                        <img src={data.frontend.css.logo} alt="CSS" />
                    </div>
                    <div className="tech-badge">{data.frontend.javascript.name}
                        <img src={data.frontend.javascript.logo} alt="Javascript" />
                    </div>
                    <div className="tech-badge">{data.frontend.react.name}
                        <img src={data.frontend.react.logo} alt="React" />
                    </div>
                    <div className="tech-badge">{data.backend.nodejs.name}
                        <img src={data.backend.nodejs.logo} alt="Node" />
                    </div>
                    <div className="tech-badge">{data.backend.express.name}
                        <img src={data.backend.express.logo} alt="Express" />
                    </div>
                    <div className="tech-badge">{data.database.postgre.name}
                        <img src={data.database.postgre.logo} alt="Postgre" />
                    </div>
                    <div className="tech-badge">
                        {data.database.prisma.logo}
                    </div>
                    <div className="tech-badge">{data.services.api.name}
                        <img src={data.services.api.logo} alt="REST API" />
                    </div>
                    <div className="tech-badge">{data.tools.git.name}
                        <img src={data.tools.git.logo} alt="GIT" />
                    </div>
                    <div className="tech-badge">{data.tools.github.name}
                        <img src={data.tools.github.logo} alt="GIT" />
                    </div>
                    <div className="tech-badge">{data.tools.postman.name}
                        <img src={data.tools.postman.logo} alt="Postman" />
                    </div>
                </div>
                <div className='button-container'>
                    <button className="cta-button">View My Work</button>
                    <button className='resume-btn'>Resume</button>   
                </div>
            </div>
            <div className="hero-image">
                <img src={data.personal.image} alt="Arvey Cura" />
                <div className='socials-container'>
                    <p>LinkIn</p>
                    <p>Github</p>
                    <p>Facebook</p>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
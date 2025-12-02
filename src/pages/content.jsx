import picProfile from '../img/pic-profile.png'

const Content = () => {

    const handleButton  = () => {
             // Optional JS for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function () {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    return (
    <>

    <header>
        <nav>
            <div class="logo">Reza Nur Arifin</div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <div class="hero-content">
            <h1>Hello, I'm a Fullstack Developer</h1>
            <p>Building robust web applications with passion and precision.</p>
            <a href="#projects" onClick={handleButton} class="btn">View My Work</a>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About Me</h2>
            <p>I'm a dedicated fullstack developer with expertise in front-end and back-end technologies. I love creating user-friendly, scalable solutions.</p>
            <div className="photos">
                <img src={picProfile} alt="Your Photo" class="profile-img"/>
            </div>
        </div>
    </section>

    <section id="skills">
        <div class="container">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Tailwindcss</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div class="skill">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Python</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div class="skill">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>VS Code</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project">
                    <img src="project1.jpg" alt="Project 1"/>
                    <h3>E-Commerce App</h3>
                    <p>A fullstack e-commerce platform built with React and Node.js.</p>
                    <a href="#" class="btn">View Demo</a>
                </div>
                <div class="project">
                    <img src="project2.jpg" alt="Project 2"/>
                    <h3>Task Manager</h3>
                    <p>A productivity app using MERN stack.</p>
                    <a href="#" class="btn">View Demo</a>
                </div>
                <div class="project">
                    <img src="project3.jpg" alt="Project 3"/>
                    <h3>Portfolio Site</h3>
                    <p>This very site, showcasing CSS elegance.</p>
                    <a href="#" class="btn">View Demo</a>
                </div>
            </div>
        </div>
    </section>
    
    <section id="contact">
        <div class="container">
            <h2>Contact</h2>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <textarea placeholder="Message" required></textarea>
                <button type="submit" class="btn">Send</button>
            </form>
        </div>
    </section>
    <footer>
        <p>&copy; 2025 Reza Nur Arifin. All rights reserved.</p>
    </footer>

  


        
        
        
        </>
    )
}

export default Content
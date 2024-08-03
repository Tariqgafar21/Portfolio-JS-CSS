"use client";
import { useState } from "react";
import Image from "next/image";
import react from "react";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
     <header>
        <a href="#" className="logo-holder">
            <div className ="logo">TG</div>
            <div className ="logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto: tariqgafar13@gmail.com" className ="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className ="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className ="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                  </svg>                                                                      
              </a>              
        </nav>
    </header>
    <main>
        <section className ="hero container">
            <div className ="hero-blue">
                <div>
                    <h1><small>Hi I'm </small>
                        Tariq Gafar
                    </h1>
                    <p>
                        Hello! I’m Tariq Gafar, a senior Computer Science major with a deep passion for programming and technology. As I advance in my studies and career, 
                        I'm continually excited about expanding my skills and exploring new challenges in the tech world. 
                        I am committed to staying engaged with the latest industry trends and am eager to share my journey and progress with you. 
                        Thank you for joining me on this exciting path!
                    </p>
                    <div className ="call-to-action">
                        <a href="./Tariq-Gafar May2025.pdf" className ="button black">
                            View Resume
                        </a>
                       
                        <a href="mailto: tariqgafar13@gmail.com" className ="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className ="social-links">
                        <a href="https://github.com/Tariqgafar21">
                            <img src="./imgs/github.png" alt="GitHub" width="48"/>
                        </a>
                        <a href="https://www.linkedin.com/in/tariqgafar/">
                            <img src="./imgs/linkedin.png" alt="LinkedIn" width="48"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className ="hero-gray">
                <img src="./imgs/accenturePIC-fotor-bg-remover-2024073114276.png" alt="Tariq Gafar" width="100%"/>
            </div>
        </section>
        <section className Name="logos container">
            <div className ="marquee">
                <div className ="track">
                    <img src="./imgs/html.png" alt="HTML" width="128"/>
                    <img src="./imgs/css.png" alt="CSS" width="128"/>
                    <img src="./imgs/javascript.png" alt="JS" width="128"/>
                    <img src="./imgs/sass.png" alt="Sass" width="128"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="128"/>
                    <img src="./imgs/python.png" alt="Python" width="128"/>
                    <img src="./imgs/nextjs.png" alt="next js" width="128"/>
                    <img src="./imgs/html.png" alt="HTML" width="128"/>
                    <img src="./imgs/css.png" alt="CSS" width="128"/>
                    <img src="./imgs/javascript.png" alt="JS" width="128"/>
                    <img src="./imgs/sass.png" alt="Sass" width="128"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="128"/>
                    <img src="./imgs/python.png" alt="Python" width="128"/>
                    <img src="./imgs/nextjs.png" alt="next js" width="128"/>
                </div>
            </div>
        </section>
        <section id="skills" className ="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className ="holder-blue">
                <div className ="left-column">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>Kotlin</li>
                    </ul>
                    <h3>Frameworks/Technologies</h3>
                    <ul>
                        <li>React</li>
                        <li>Git</li>
                        <li>Postman</li>
                        <li>SASS</li>
                        <li>Node.js</li>
                        <li>SAP HANA Studio</li>
                        
                        
                    </ul>
                </div>
                <div className ="right-column">
                    <h3>A bit about me</h3>
                    <p>Hi, I'm Tariq Gafar, a Computer Science student at Virginia Commonwealth University. 
I am currently serving as the Treasurer for the National Society of Black Engineers for the second term.</p>

<p>In my free time, I enjoy learning new skills to become a more experienced engineer. 
I am currently working on full-stack projects to showcase my abilities!</p>

                </div>
            </div>
        </section>
        <section className ="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
            <div className ="jobs">
                <article>
                    <figure>
                        <div>
                            <img src="./imgs/MatchGroup.png" alt="WorkPlace -1" width="100%"/>
                            <figcaption>
                                 Workplace-1
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Match Group Android Engineer Intern</h3>
                    <div>Jun 2023-Aug 2023</div>
                    <p>Developed and optimized features for a leading dating app, enhancing user experience and performance.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="./imgs/COE.png" alt="WorkPlace -2" width="100%"/>
                            <figcaption>
                                Workplace -2
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Research Assistant</h3>
                    <div>Aug 2023-May 2024</div>
                    <p>Led research on end-user programming barriers in ABB industrial robots, managing experiments, data collection, and advanced analysis in both physical and simulated environments.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="./imgs/ACC.png" alt="WorkPlace -3" width="100%"/>
                            <figcaption>
                                Workplace -3
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Accenture Tech Summer Analyst</h3>
                    <div>Jun 2024-Aug 2024</div>
                    <p>Utilized SAP S/4HANA to streamline business processes, enhancing efficiency and data management for client operations.</p>
                </article>
            </div>
        </section>    
        <section id="projects" className ="bento container">
            <h2>
                <small>
                    Previous
                </small>
                Completed Projects
            </h2>
            <div className ="bento-grid">
                <div className ="bento-item">
                    <img src="./imgs/NSBE.png" alt="NSBE" width="100%"/>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}

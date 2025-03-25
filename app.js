import React from "react";
import "./styles.css";

const projects = [
    { title: "Algorithm Visualizer", description: "Visualize sorting and graph algorithms.", link: "#" },
    { title: "E-Commerce Website", description: "Built an online store using React and Firebase.", link: "#" },
    { title: "Blog App", description: "A personal blogging platform using MERN stack.", link: "#" }
];

const App = () => {
    return (
        <div>
            <header>
                <h1>Chitranshu's Portfolio</h1>
            </header>

            <div className="container">
                <img src="profile.jpg" alt="Profile" className="profile-img" />
                <h2>About Me</h2>
                <p>I'm an aspiring developer passionate about building web applications.</p>

                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>
                                <button>View Project</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <p>Contact: chitranshu@example.com | LinkedIn | GitHub</p>
            </footer>
        </div>
    );
};

export default App;

import '../styles/project_display.css';
import ProjectCard from './ProjectCard';
import bird from '../assets/bird.png';
import logo from '../assets/nba-logo-transparent.png';
import react from '../assets/react.png';
import flutter from '../assets/flutter.png'

export default function ProjectDisplay({

}) {
    return (
        <div>
            <h2 className="projects">
                Projects
            </h2>
            <div className="project-container">
                <ProjectCard projectName={"Duolingo Feed"} projectImage={bird} link="/feed" id='duolingo-card' />
                <ProjectCard projectName={"Development"} projectImage={logo} />
                <ProjectCard projectName={"React Lab"} projectImage={react} />
                <ProjectCard projectName={"Flutter Lab"} projectImage={flutter} />
            </div>
        </div>
    )
}
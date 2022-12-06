import '../styles/project_card.css';
import { Link } from "react-router-dom";

export default function ProjectCard({
    projectName,
    projectImage,
    link,
    id,
}) {
    return (
        <div id={id} className="display-container">
            <Link to={link}>
                <div className='image-container'>
                    <img className='project-image' src={projectImage}></img>
                    <h1 className='project-name'>{projectName}</h1>
                </div>
            </Link>
        </div>
    )
}
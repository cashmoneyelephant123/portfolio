import '../styles/project_intro.css';

export default function ProjectIntro({
    title,
    application,
    text,
    id
}) {
    return (
        <div id={id}>
            <div>
                <h1 className='title'>{title}</h1>
                <p className='application'>{application}</p>
            </div>

            <h2 className='text'>{text}</h2>
        </div>
    )
}
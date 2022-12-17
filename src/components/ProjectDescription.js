import '../styles/project_description.css';


export default function ProjectDescription({
    background,
    problem,
    motivation,
    results,
    images,
    link
}) {

    const resultImgs =
        results.map(i =>
            <a href={link}>
                <img className="result-image" src={i}></img>
            </a>
        )

    return (
        <div>
            <h1 className='headline'>Project Background</h1>
            <div className='project-background'>
                <p className='description'>{background}</p>
                <img className='description-image' src={images[0]}></img>
            </div>

            <h1 className='headline'>Problem</h1>
            <div className='problem'>
                <p className='description'>{problem}</p>
                <img className='description-image' src={images[1]}></img>
            </div>

            <h1 className='headline'>Motivation</h1>
            <div className='motivation'>
                <p className='description'>{motivation}</p>
                <img className='description-image' src={images[2]}></img>
            </div>

            <div className='results'>
                <h1 className='headline'>Results</h1>
                <div className='result-image-container'>
                    {resultImgs}
                </div>
            </div>

        </div>
    )
}
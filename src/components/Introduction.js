import '../styles/introduction.css';
import bg from '../assets/intro-background.jpg'

export default function Introduction({

}) {

    return (
        <div className="introduction">
            <h1 className='info'>Hey, I'm Pedro!</h1>
            <h3 className='info'>Incoming Software Engineer at <span className="duolingo">Duolingo</span>,</h3>
            <h3 className='info'>currently a senior at <span className="brown">Brown</span></h3>
        </div>
    )
}
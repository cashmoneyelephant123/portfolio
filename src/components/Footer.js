import logo from '../assets/linkedin.png';
import '../styles/footer.css';

export default function Footer({

}) {
    return (
        <div className='footer-container'>
            <h1>Let's Connect!</h1>
            <a href="https://www.linkedin.com/in/pedro-monteiro-borges/">
                <img className='linkedin-logo' src={logo}></img>
            </a>
        </div>
    )
}
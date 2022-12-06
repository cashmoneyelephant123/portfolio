import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header({

}) {
    return (
        <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="header-container">
                <h1 className='name'>Pedro Monteiro Borges</h1>
            </div>
        </Link>
    )
}
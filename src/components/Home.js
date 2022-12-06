import Footer from './Footer';
import Header from './Header';
import Introduction from './Introduction';
import ProjectDisplay from './ProjectDisplay';

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Introduction />
            <ProjectDisplay />
            <Footer />
        </div>
    )
}
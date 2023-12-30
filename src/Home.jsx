import './index.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';
import Services from './components/Services';
import Experience from './components/Experience';
import Footer from './components/Footer';


function Home() {
    return (
        <div>
            <Header />
            <Welcome />
            <Banner />
            <About />
            <Project />
            <Services />
            <Experience />
            <Footer />

        </div>

    );
}

export default Home;

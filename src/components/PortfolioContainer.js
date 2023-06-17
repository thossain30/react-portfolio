import React, {useState} from "react";
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer(props) {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <AboutMe />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header>
                Tamjid Hossain
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
        </div>
    );
}
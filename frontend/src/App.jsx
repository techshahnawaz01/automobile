import { useEffect } from "react";
import { loadScripts } from "./utils/loadScripts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Services from "./pages/Services";
import Servicesdetails from "./pages/Servicesdetail";
import About from "./pages/About";
import Team from "./pages/Team";
import Teamdetails from "./pages/Teamdetails";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";


function App() {

    useEffect(() => {
        loadScripts(); // Load scripts when the app starts
    }, []);
    return (
        <Router>
            <Navbar />
            <main className="main-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-details" element={<BlogDetails />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service-details" element={<Servicesdetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/team-details" element={<Teamdetails />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio-details" element={<PortfolioDetails />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;

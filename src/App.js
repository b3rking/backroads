import React from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/Services"
import Tours from "./components/Tours"
import Footer from "./components/Footer"


function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Tours />
            <Footer />
        </React.Fragment>
    );
}

export default App;

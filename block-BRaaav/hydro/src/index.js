import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/style.css";
import Header from "./component/header";
import Hero from "./component/hero";
import About from "./component/about";
import Blog from "./component/blog";
import Work from "./component/work";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App(){
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Blog />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
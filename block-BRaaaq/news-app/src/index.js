import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css"
import Header from "./componet/header";
import Hero from "./componet/hero";
import Articles from "./componet/articles";
import Footer from "./componet/footer";

function App(){
    return (
        <>
        <Header />
        <Hero />
        <Articles />
        <Footer />
        </> 
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
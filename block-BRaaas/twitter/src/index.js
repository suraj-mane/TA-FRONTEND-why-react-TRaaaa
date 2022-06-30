import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import { FaTwitter } from "react-icons/fa";
import LeftSide from "./component/leftSide";
import Middle from "./component/middle"
import RightSide from "./component/rightSide";

function App() {
    return(
        <>
        <LeftSide />
        <Middle />
        <RightSide />
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
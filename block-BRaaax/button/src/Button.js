import { FaAngleDown } from "react-icons/fa";
function Button (props) {
    return (
        <div className="container text-center mt-5">
            <button className=" m-3 d-block btn1">{props.lebal}</button>
            <button className="btn m-3 d-block btn2"><FaAngleDown />{props.lebal}</button>
            <button className="btn m-3 d-block btn3">{props.lebal}</button>
            <button className="btn m-3 d-block btn4">{props.lebal}</button>
            <button className="btn m-3 d-block btn5">{props.lebal}</button>
            <button className="btn m-3 d-block btn6">{props.lebal}</button>
            <button className="btn m-3 d-block btn7">{props.lebal}</button>
            <button className="btn m-3 d-block btn8">{props.lebal}</button>
        </div>
    )
}

export default Button;
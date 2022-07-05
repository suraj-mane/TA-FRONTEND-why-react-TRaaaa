import { FaAngleDown } from "react-icons/fa";
function Button (props) {
    return (
        <div className=" mt-5 text-center">
            <div className=" text-center d-block">
            <button className=" btn m-3  btn1">{props.lebal}</button>
            <button className="btn m-3  btn2"><FaAngleDown />{props.lebal}</button>
            <button className="btn m-3  btn3">{props.lebal}</button>
            <button className="btn m-3  btn4">{props.lebal}</button>
            <button className="btn m-3  btn5">{props.lebal}</button>
            <button className="btn m-3  btn6">{props.lebal}</button>
            <button className="btn m-3  btn7">{props.lebal}</button>
            <button className="btn m-3  btn8">{props.lebal}</button>
            <button className="btn m-3  btn9">{props.lebal}</button>
            <button className="btn m-3  btn10">{props.lebal}</button>
            </div>
        </div>
    )
}

export default Button;
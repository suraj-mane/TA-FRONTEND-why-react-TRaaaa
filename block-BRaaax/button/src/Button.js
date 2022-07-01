function Button (props) {
    return (
        <div className="container text-center mt-5">
            <button className="btn btn-primary m-3 d-block">{props.lebal}</button>
            <button className="btn btn-primary m-3 d-block">{props.lebal}</button>
            <button className="btn btn-primary m-3 d-block">{props.lebal}</button>
            <button className="btn btn-primary m-3 d-block">{props.lebal}</button>
            <button className="btn btn-primary m-3 d-block">{props.lebal}</button>
        </div>
    )
}

export default Button;
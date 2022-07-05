import color from "../colors.json";
import ColorPallet from "./ColorPallet";

function Colors(props) {
    let varients = color[props.shade]
    return (
        <div className="m-5">
            <h2>
            {
             props.shade.charAt(0).toUpperCase() +
             props.shade.slice(1, props.shade.length)
            }
            </h2>
            {varients.map((v, i) => {
            return <ColorPallet key = {v} index = {i} colorCode = {v} />
             })}
        </div>
    )
}

export default Colors;
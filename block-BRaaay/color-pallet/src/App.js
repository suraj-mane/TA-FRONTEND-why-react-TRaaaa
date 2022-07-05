import Colors from "./component/Colors";
import color from "./colors.json";
function App() {
    var keys = Object.keys(color);
    return keys.map((k) => {
      return <Colors key = {k} shade ={k} />
    })
}

export default App;
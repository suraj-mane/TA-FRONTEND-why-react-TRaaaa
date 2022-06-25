var root = document.querySelector('.root');
var input = document.querySelector('.input');

let movie = JSON.parse(localStorage.getItem('movies')) || [];

function display(event){
    if(event.keyCode === 13 && event.target.value !== ""){
        var m = {
            name:event.target.value,
            isWatch: "Watch It",
        }
        movie.push(m);
        event.target.value =" ";
        createUI()
    }
    localStorage.setItem("movies",JSON.stringify(movie));
}

function checks(event){
    let id = event.target.dataset.id;
    movie[id].isWatch = "Watched";
    localStorage.setItem("movies",JSON.stringify(movie));
    createUI()
}

// function elm(type, att = {}, ...childern){
//     let element = document.createElement(type);
//     for (const key in att) {
//         if (key.startsWith("data-")) {
//             element.setAttribute(key, att[key]);
//         } else {
//             element[key] = att[key]
//         }
//     }
//     childern.forEach(child => {
//         if(typeof child === Object){
//             element.append(child);
//         }
//         if(typeof child === String){
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     })
//     return element;
// }

function createUI(){
    var ul =  movie.map((ele,index) => {
        var ul = React.createElement("li",{
            className: "list"
        }, ele.name, React.createElement("button", {
            className:"btn"
        }, ele.isWatch));
        return ul;
    })   
    ReactDOM.render(ul, root);
}

input.addEventListener('keyup', display);

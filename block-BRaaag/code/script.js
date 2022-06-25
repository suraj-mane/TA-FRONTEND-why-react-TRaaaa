var root = document.querySelector('.root');
var input = document.querySelector('.input');

let movie = JSON.parse(localStorage.getItem('movies')) || [];

function display(event){
    if(event.keyCode === 13 && event.target.value !== ""){
        var m = {
            name:event.target.value,
            isWatch:""
        }
        movie.push(m);
        event.target.value =" ";
        createUI()
    }
    localStorage.setItem("movies",JSON.stringify(movie));
}

function checks(event){
    let id = event.target.dataset.id;
    movie[id].isWatch ? "watch" : "Watched";
    localStorage.setItem("movies",JSON.stringify(movie));
    createUI()
}


function createUI(){
    var ul =  movie.map((ele,index) => {
        // console.log(ele.isWatch);
        // var ul = React.createElement("li",{
        //     className: "list"
        // }, ele.name, React.createElement("button", {
        //     className:"btn",
        //     "data-id": index,
        //     onclick: checks
        // }, ele.isWatch ? "watch" : "Watched"));
        return <li className="list">{ele.name}<button className="btn" data-id="index" onclick="checks">{"Watched"}</button></li>;
    })   
    ReactDOM.render(ul, root);
}

input.addEventListener('keyup', display);
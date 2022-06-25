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

function elm(type, att = {}){
    let element = document.createElement(type);
    for (const key in att) {
        if (key.startsWith("data-")) {
            element.setAttribute(key, att[key]);
        } else {
            element[key] = att[key]
            console.log(att[key]);
        }
    }
    return element;
}

function createUI(){
    root.innerHTML = " ";
    movie.forEach((ele, index) => {
        var ul = elm('ul');
        var li = elm('li', {
            className: "list",
            innerText: ele.name 
        }); 
        var button = elm('button', {
            innerText: ele.isWatch,
            "data-id" : index,
            className: "btn"
        });
        ul.append(li,button);
        root.append(ul);
        button.addEventListener('click', checks);
    })
}

input.addEventListener('keyup', display);
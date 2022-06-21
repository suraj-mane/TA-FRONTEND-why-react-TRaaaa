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

function createUI(){
    root.innerHTML = " ";
    movie.forEach((ele, index) => {
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = ele.isWatch;
        button.setAttribute("data-id", index);
        button.classList.add('btn');
        li.classList.add('list')
        li.innerText = ele.name;
        ul.append(li,button);
        root.append(ul);
        button.addEventListener('click', checks);
    })
}

input.addEventListener('keyup', display);


function RightSide() {
    function MessageShow(){
        alert("To learn React use https://reactjs.org");
        alert("React and ReactDOM works together");
        alert("Babel helps in writing JSX");
    }
    function Showname(name){
        alert(`Hello ${name}`);
    }
    let fruits = [
        { id: 'apple', value: '🍎 apple' },
        { id: 'orange', value: '🍊 orange' },
        { id: 'grape', value: '🍇 grape' },
        { id: 'pear', value: '🍐 pear' },
    ];
    return (
        <>
           <div className="ml-3 mt-2">
                <div className="pb-3">
                    <input className="search-bar" placeholder="Search"></input>
                </div>
                <div className="">
                    <div className="box">
                        <h5>What's happening</h5>
                        <div className="s-box">
                        </div>
                    </div>
                    <button className="btn mt-3 mr-2" onClick={MessageShow}>How can I help you?</button>
                    <button className="btn mt-3 mr-2" onClick={() => Showname("Aray")}>Aray</button>
                    <button className="btn mt-3 mr-2" onClick={() => Showname("Jhon")}>Jhon</button>
                    <button className="btn mt-3 mr-2" onClick={() => Showname("Bran")}>Bran</button>
                    {
                        fruits.map((text) => (
                            <Btn key={text.id}  {...text}/>
                        ))
                    }
                    <div className="box s-box">
                        <h5>What's happening</h5>
                        <div className="s-box">
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

function Btn(props){
    return(
        <button className="btn mt-3 mr-2">{props.value}</button>
    )
}

export default RightSide;
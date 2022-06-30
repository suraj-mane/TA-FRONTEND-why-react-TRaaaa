import { FaTwitter,FaHome,FaSlackHash,FaBell,FaMailBulk,FaRegBookmark,FaUserAlt,FaEllipsisH } from "react-icons/fa";


function LeftSide() {
    function Message(){
        alert( `Hello React Event`);
    }
    return (
       <>
        <div>
            <ul>
                <li className="icon active"><FaTwitter/><span></span></li>
                <li className="icon active"><FaHome/><span className="icon-name">Home</span></li>
                <li className="icon"><FaSlackHash/><span className="icon-name">Expolre</span></li>
                <li className="icon"><FaBell/><span className="icon-name">Notifictions</span></li>
                <li className="icon"><FaMailBulk/><span className="icon-name">Bookmarks</span></li>
                <li className="icon"><FaRegBookmark/><span className="icon-name">Lists</span></li>
                <li className="icon"><FaUserAlt/><span className="icon-name">Profie</span></li>
                <li className="icon"><FaEllipsisH/><span className="icon-name">More</span></li>
                <li className="icon btn"><span>Twitter</span></li>
                <button className="btn mt-3" onClick={Message}>Click Me</button>
            </ul>
            <div className="p-info">
                <span className="p-icon"><FaUserAlt/></span><span className="ml-2 p-name">Ankit</span>
            </div>
        </div>
       </>
    )
}

export default LeftSide;
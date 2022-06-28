import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSlackHash } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa"; 
import {FaEllipsisH} from "react-icons/fa"
function LeftSide() {
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
            </ul>
            <div className="p-info">
                <span className="p-icon"><FaUserAlt/></span><span className="ml-2 p-name">Ankit</span>
            </div>
        </div>
       </>
    )
}

export default LeftSide;
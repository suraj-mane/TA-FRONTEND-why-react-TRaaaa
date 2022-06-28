import { FaTwitter } from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa"; 
import {FaAlignJustify} from "react-icons/fa";
import {FaCommentAlt} from "react-icons/fa";
import {FaFolderOpen} from "react-icons/fa";
import {FaImage} from "react-icons/fa";
import {FaRegComment} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
function Middle(){
    return (
        <>
        <div className="m-main">
            <div className="d-flex justify-content-between p-3 border border-dark">
                <h4>Home</h4>
                <span className="text-primary"><FaTwitter /></span>
            </div>
            <div className="m-main-1">
                <div>
                    <span className="p-icon m-profile"><FaUserAlt/></span>
                    <span className="m-profile-post">What's happening?</span>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mt-5">
                        <span className="ml-4 text-primary"><FaAlignJustify/></span>
                        <span className="ml-4 text-primary"><FaCommentAlt/></span>
                        <span className="ml-4 text-primary"><FaFolderOpen /></span>
                    </div>
                    <div>
                        <button className="mt-5 mb-1 mr-1 bg-primary text-light btn btn-primary">Tweet</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="m-main-2">
                    <span className="p-icon m-profile"><FaUserAlt/></span>
                    <span className="m-profile-post">Ankit Kumar</span>
                    <p className="mt-4 ml-3">
                        Customer ratings and reviews
                    </p>
                    <div className="ml-3 d-flex justify-content-around">
                        <span><FaRegComment />19</span>
                        <span><FaRegStar />100</span>
                        <span><FaRegHeart />5021</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="m-main-2">
                    <span className="p-icon m-profile"><FaUserAlt/></span>
                    <span className="m-profile-post">Suraj Kumar <span className="text-primary"><FaRegStar /></span></span>
                    <p className="mt-4 ml-3">
                    I'm trying to decide how to record the ARTICLE TITLE in a citation for a news brief found in a newspaper. Often briefs are listed under a heading such as "Local News", "Deaths", "About Town" or "Circuit Court".  What follows are usually one paragraph for each reported event.
                    </p>
                    <div className="ml-3 d-flex justify-content-around">
                        <span><FaRegComment />50</span>
                        <span><FaRegStar />200</span>
                        <span><FaRegHeart />4000</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Middle;
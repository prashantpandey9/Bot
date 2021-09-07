import React from 'react'
import './LeftNav.css'
import { 
    VscHome, 
    RiMessage2Line, 
    IoPersonOutline, 
    IoSettingsOutline ,
    FiSun,
    FiMoon
} from 'react-icons/all';

// import { AiOutlineHome } from "@react-icons/";

export default function LeftNav() {
    return (
        <>
        <div className="col-md-1 p-4 border-right h-100 m-0">
            <div className="nav_profile mt-3">
                <p className="m-0">ATOS</p>
            </div>
            <div className="mb-5 pb-5"></div>
            
            <div className="icon_styles mt-3">
                <VscHome />
            </div>
            <div className="icon_styles mt-3">
                <RiMessage2Line />
            </div>
            <div className="icon_styles mt-3">
                <IoPersonOutline />
            </div> 
            <div className="icon_styles mt-3">
                <IoSettingsOutline />
            </div>  
            <div className="mb-4 pb-4"></div>
            <h6>Modes</h6>
            <div className="icon_styles mt-1">
                <FiSun />
            </div> 
            <div className="icon_styles mt-1">
                <FiMoon />
            </div>   
        </div>
     </>
    )
}

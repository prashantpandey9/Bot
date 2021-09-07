import React from 'react'
import './LeftNav.css'
// import { FaBeer } from 'react-icons/fa';
// import { CgHome } from "@react-icons/cg/";

export default function LeftNav() {
    return (
        <>
        <div className="col-md-1 p-4 border-end h-100 m-0">
            <div className="nav_profile mt-3">
                <p className="m-0">ATOS</p>
            </div>
            <div className="nav_profile mt-3">
                {/* <CgHome /> */}
            </div><div className="nav_profile mt-3">
                <i className="fa fa-home"></i>
            </div><div className="nav_profile mt-3">
                <i className="fa fa-home"></i>
            </div> 
        </div>
     </>
    )
}

import React from "react";
import { useNavigate } from "react-router-dom";

// import images
import BackArrow from '../assets/icons/backarrow.svg'

// import CSS
import '../index.css';

const Nav = (props) => {

    const navigate = useNavigate();

    return (
        <nav className='w-full'>
            <div className='container flex-row align-center'>
                <img
                    onClick={()=>{navigate(-1)}}
                    className="nav-icon"
                    src={BackArrow}
                    alt="BACK"
                />                
            </div>
        </nav>
    )
}

export default Nav;
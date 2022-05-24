import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Congrats = () => {

    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className='container position-relative h-full padding-nav'>
            <h3>Well done!</h3>

            <button
                className='btn-primary'
                onClick={()=>{
                    navigate(`/tools/${params.name}`);
                }}
                >
                Done
            </button>
        </div>
        
    )
}

export default Congrats;
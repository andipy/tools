import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recap = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [entries, setEntries] = useState([]);
    const [options, setOptions] = useState([]);

    return (
        <div className='container position-relative h-full padding-nav'>
            <h3>Your feeling</h3>
            <h1>{JSON.parse(localStorage.getItem('entries'))[0].entry}</h1>

            <h3 className="mt-sm">What caused it</h3>
            {JSON.parse(localStorage.getItem('options')).map((el) => {
                if ( el.checked == true ) {
                    return (
                        <div className='p-4 bg-grey-200 mt-xs rounded-xs' key={el.id}>{el.content}</div>
                    )
                }                
            })}

            <button
                className='btn-primary'
                onClick={()=>{
                    navigate(`/tools/${params.name}/congrats`);
                }}
                >
                Save
            </button>

        </div>
        
    )
}

export default Recap;
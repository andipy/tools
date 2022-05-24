import React, { useState, useEffect,  } from "react";
import { useParams, useNavigate } from "react-router-dom";

import '../index.css';

const ToolIntro = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [entries, setEntries] = useState([]);
    const [options, setOptions] = useState([]);

    const tools = [
        {
            id: 1,
            title: 'Track Mood',
            description: 'Keep track of how you feel over time and why',
            durationMin: 3,
            type: 'audio',
            slug: 'track-mood',
            steps: 2
        },{
            id: 2,
            title: 'Ambient Sounds',
            description: 'Listen to grey sounds to help you relax',
            durationMin: 7,
            type: 'audio',
            slug: 'ambient-sounds',
            steps: 7
        },{
            id: 3,
            title: 'Combating Climate Dread',
            description: 'Climate change have you down? Combat it"',
            durationMin: 7,
            type: 'content refresher',
            slug: 'combating-climate-dread',
            steps: 6
        }
    ]

    const [currentTool, setCurrentTool] = useState({});
    const getTool = () => {
        tools.map((tool) => {
            if ( tool.slug == params.name ) {
                setCurrentTool(tool);
            }
        })        
    }

    useEffect(() => {
        getTool();
        const entries = JSON.parse(localStorage.getItem('entries'));
        if (entries) {
            setEntries(entries);
        };
        const options = JSON.parse(localStorage.getItem('options'));
        if (options) {
            setOptions(options);
        }
    },[]);

    return (
        <div>
            <div className='container position-relative h-full padding-nav'>
                <h2>{currentTool.title}</h2>
                <img src="" alt="" />
                {entries.length > 0 &&
                    <div className='p-6 bg-grey-200 rounded-sm '>
                        {entries.map((el) => {
                            return (                           
                                <div
                                    key={el.id}
                                >
                                    {el.entry}
                                </div>
                            )
                        })}
                        <div className="mt-sm">
                            {options.map((option) => {
                                if ( option.checked == true ) {
                                    return (
                                        <div
                                            key={option.id}
                                            className='p-2 bg-white inline mr-xs rounded-sm'
                                        >
                                            {option.content}
                                        </div>
                                    )
                                }                                
                            })}
                        </div>
                    </div>
                }

                {entries.length == 0 &&
                    <div>
                        <div className='flex-row justify-center'>
                        <p className='w-75 text-center'>{currentTool.description}</p>
                        </div>

                        <div className='flex-row justify-center'>
                        <div className='flex-row mr-xs p-4 rounded-sm align-center justify-start bg-grey-200 mt-xs'>
                            <img src="" alt="" />
                            <p>{currentTool.type}</p>
                        </div>
                        <div className='flex-row mr-xs p-4 rounded-sm align-center justify-start bg-grey-200 mt-xs'>
                            <img src="" alt="" />
                            <p>{currentTool.durationMin + ' min'}</p>
                        </div>
                        </div>

                        <button className='btn-secondary mt-xs'>Why Do This?</button>
                    </div>
                }

                <button
                    className='btn-primary'
                    onClick={()=>{
                        navigate(`/tools/${params.name}/step-1`)
                    }}
                    >
                    Get Started
                </button>

            </div>
        </div>
    )
}

export default ToolIntro;


/*
if ( direction == 'back' ) {
    setAnimation({initialX: '100%', exitX: '-100%'});
} else if ( direction == 'forward' ) {
    setAnimation({initialX: '-100%', exitX: '100%'});
}
*/
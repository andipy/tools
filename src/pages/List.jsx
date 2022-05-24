import '../index.css';
import React from "react";
import { Link } from "react-router-dom";

// import components
import ListItem from "../components/ListItem";

const List = () => {

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

    return (
        <div>
            <div className='container padding-nav'>
                {tools.map((tool) => {
                    return (
                        <Link
                            to={`/tools/${tool.slug}`}                            
                            key={tool.id}>
                                <ListItem                            
                                    title={tool.title}                    
                                />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default List;





/*
if ( direction == 'back' ) {
    setAnimation({initialX: '100%', exitX: '-100%'});
} else if ( direction == 'forward' ) {
    setAnimation({initialX: '-100%', exitX: '100%'});
}
*/
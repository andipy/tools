import React from "react";
import { createContext } from "react";

export const ToolContext = createContext([]);

export const ToolProvider = (props) => {

    const tools = [
        {
            id: 1,
            title: 'Breathe to Relax',
            description: 'Relax your body and mind by breathing',
            durationMin: 3,
            type: 'audio',
            slug: 'breathe-to-relax'
        },{
            id: 2,
            title: 'Ambient Sounds',
            description: 'Listen to grey sounds to help you relax',
            durationMin: 7,
            type: 'audio',
            slug: 'ambient-sounds'
        },{
            id: 3,
            title: 'Combating Climate Dread',
            description: 'Climate change have you down? Combat it"',
            durationMin: 7,
            type: 'content refresher',
            slug: 'combating-climate-dread'
        }
    ]

    return (
        <ToolContext.Provider value={tools}>
            {props.childern}
        </ToolContext.Provider>
    )
}
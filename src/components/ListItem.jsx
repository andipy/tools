import React from "react";

import '../index.css';

const ListItem = (props) => {
    return (
        <div className='flex-row py-6 px-8 rounded-sm align-center justify-start bg-grey-200 mt-xs'>
            <img src="" alt="" />
            <h3 className=''>{props.title}</h3>
        </div>
    )
}

export default ListItem;
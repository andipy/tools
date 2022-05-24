import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Step1 = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [entry, setEntry] = useState('');
    const handleInput = (e) => {        
        setEntry(e.target.value);
    }

    const [entries, setEntries] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEntries([...entries, {entry: entry, id: entries.length + 1}]);
        setEntry('');
    }

    //DEAL WITH LOCAL STORAGE TO SAVE DATA IN THE BROWSER
    //this function checks if there is any data in the local storage, and if yes, it parses the data from local storage in json format and saves the data in the 'entries' array
    useEffect(() => {
        const entries = JSON.parse(localStorage.getItem('entries'));
        if (entries) {
            setEntries(entries);
        }
    }, []);
    //this function checks if there is any data in the local storage, and if yes, it stringifies the data and saves it to local storage
    useEffect(() =>{
        if(entries?.length) {
            localStorage.setItem('entries', JSON.stringify(entries));
        }
    }, [entries]);
    
    return (
        <div className='container position-relative h-full padding-nav'>
            <h4 className='mb-sm'>Type here how you feel</h4>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInput}
                    value={entry}
                    className='input-main w-full p-6 rounded-sm shadow-xs'
                    placeholder='Type here'
                />
            </form>

            <section>
                {entries.map((item) => {
                    return (
                        <div className='p-4 bg-grey-200 mt-xs rounded-xs' key={item.id}>
                            <p>{item.entry}</p>
                        </div>
                    )
                    
                })}
            </section>

            <button
                    className='btn-primary'
                    onClick={()=>{
                        navigate(`/tools/${params.name}/step-2`)
                    }}
                    >
                    Next
                </button>
        </div>
    )
}

export default Step1;
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Step2 = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [entry, setEntry] = useState('');
    const handleEntry = (e) => {
        setEntry(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setOptions([...options, {id: options.length + 1, content: entry, checked: false}]);
        console.log(options);
        setEntry('');
    }

    const [options, setOptions] = useState([
        {
            id: 1,
            content: 'Work',
            checked: false
        },{
            id: 2,
            content: 'Family',
            checked: false
        },{
            id: 3,
            content: 'Friends',
            checked: false
        },{
            id: 4,
            content: 'Drugs',
            checked: false
        }
    ]);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheck = (e) => {
        for ( let i = 0; i <= options.length; i++ ) {
            if ( options[i].id == e.target.parentElement.id ) {
                options[i].checked = !options[i].checked;
                setSelectedOptions(options.filter((option) => option.checked == true));                
            }
        }        
    }

    //DEAL WITH LOCAL STORAGE TO SAVE DATA IN THE BROWSER
    //this function checks if there is any data in the local storage, and if yes, it parses the data from local storage in json format and saves the data in the 'entries' array
    useEffect(() => {
        const options = JSON.parse(localStorage.getItem('options'));
        if (options) {
            setOptions(options);
        }
    }, []);
    //this function checks if there is any data in the local storage, and if yes, it stringifies the data and saves it to local storage
    useEffect(() =>{
        if(options?.length) {
            localStorage.setItem('options', JSON.stringify(options));
        }
    }, [handleCheck]);
    
    return (
        <div className='container position-relative h-full padding-nav'>
            <h4 className='mb-sm'>Select what contributed to your feeling</h4>

            <section>
                {options.map((item) => {
                    return (
                        <div className='p-4 bg-grey-200 mt-xs rounded-xs' key={item.id} id={item.id}>
                            <input type="checkbox" className='mr-xs' onChange={handleCheck} checked={item.checked} />
                            <p className='inline-flex'>{item.content}</p>
                        </div>
                    )
                    
                })}
            </section>

            <form onSubmit={handleSubmit}>
                <input
                    value={entry}                    
                    onChange={handleEntry}
                    className='input-main w-full p-6 rounded-sm shadow-xs mt-sm'
                    placeholder='Add your own'
                />
            </form>

            <button
                className='btn-primary'
                onClick={()=>{
                    navigate(`/tools/${params.name}/recap`)
                }}
                >
                Next
            </button>
        </div>
    )
}

export default Step2;
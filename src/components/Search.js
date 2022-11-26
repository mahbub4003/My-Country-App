import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [text, setText] = useState('')
    const {handleSearch} = props;
    const handleChange= (e)=>{
     setText(e.target.value)
    }
    useEffect(()=>{
     handleSearch(text)
    }, [text])
    return (
        <div>
           <input className='input' onChange={handleChange} placeholder="Search country" type="text" />
        </div>
    );
};

export default Search;<h1>Search</h1>
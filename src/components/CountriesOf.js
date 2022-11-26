import React from 'react';
import {v4 as uuidv4} from 'uuid'
import CountryOf from './CountryOf';

const CountriesOf = (props) => {
    
    return (
        <div className='countries'>
            {props.countries.map((country) => {
                const newCountry = {country, id : uuidv4()};
               return (<div key={newCountry.id} ><CountryOf deleteCountry={props.deleteCountry}  newCountry={newCountry} /></div>)
            })}
        </div>
    );
};

export default CountriesOf;
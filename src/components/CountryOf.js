import React from 'react';

const CountryOf = (props) => {
    const {newCountry} = props;
    const {country} = newCountry;

    const deleteHandler = (name) => {
        props.deleteCountry(name)
      }

    return (
       <div className='main'>
         <article className='card'>
            <img src={country.flags.png} alt="" />
            <h2>{country.name.common}</h2>
            <h3>Population: {country.population} person</h3>
            <p>Area code: {country.area}</p>
            <button onClick={()=>deleteHandler(country.name.common)}>Delete Country</button>
        </article>
       </div>
    );
};

export default CountryOf;
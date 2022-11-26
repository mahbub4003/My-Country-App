import React, { useEffect, useState } from 'react';
import CountriesOf from './CountriesOf';
import Search from './Search';
const url = "https://restcountries.com/v3.1/all";

const Country = () => {
    const [countries, setCoumtries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fatchData = async (url) => {
        setLoading(true)
        try {
        const response = await fetch(url);
        const data = await response.json();
        setCoumtries(data)
        setFilteredCountries(data)
        setLoading(false);
        setError(null);
       } catch (error) {
          setLoading(false);
          setError(error);
       }
    }

    const deleteCountry = (name) => {
        const filteredCountrie = filteredCountries.filter((country) => country.name.common !== name);
        setFilteredCountries(filteredCountrie);
    }

    useEffect(()=>{
        fatchData(url)
    }, [])

    const handleSearch = (searchText) => {
        let value = searchText.toLowerCase();
        const searchFilteredCountries = countries.filter((country) => {
            const name =country.name.common.toLowerCase();
            return name.includes(value)
        })
        setFilteredCountries(searchFilteredCountries)
    }

    return (
        <div>
            <h1>Country App</h1>
            {loading && <h2>Loding</h2>}
            {error && <h2>Failed to fetch</h2>}
            <Search handleSearch= {handleSearch}/>
            {countries && <CountriesOf deleteCountry={deleteCountry} countries= {filteredCountries}/>}
        </div>
    );
};

export default Country;
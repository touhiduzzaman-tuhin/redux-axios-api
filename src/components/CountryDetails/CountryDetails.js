import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './CountryDetails.css';

const CountryDetails = (props) => {
    console.log(props);
    const {name, capital, population, flag, region, subregion, area} = props.country;
    const [pop, setPop] = useState('');
    const [cap, setCap] = useState('');

    return (
        <div className='col-md-4'>
            <div className='country-area'>
                <img className='w-50' src={flag} alt=""/>
                <p>Name : {name}</p>
                <p>Capital : {cap}</p>
                <p>Area : {area}</p>
                <p>Population : {pop}</p>
                <p>Region : {region}</p>
                <p>Sub-Region : {subregion}</p>
                <Button variant='success' onClick={() => setCap(capital)}>
                    Capital
                </Button>
                &nbsp; &nbsp;
                <Button variant='dark' onClick={() => setPop(population)}>
                    Population
                </Button>
            </div>
        </div>
    );
};

export default CountryDetails;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCountry } from '../../redux/restCountry/restCountryAction';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = (props) => {
    console.log(props);
    const { countryData, fetchCountry } = props;
    useEffect(() => {
        fetchCountry()
    }, [])

    // return (
    //     <div>

    //     </div>
    // );

    return countryData.loading ? (
        <h1 className='my-5' align='center'>Loading .....</h1>
    ) : countryData.error ? (
        <h1 className='my-5' align='center'>{countryData.error}</h1>
    ) : (
        <div align='center' className='container'>
            <h3 className='my-5'>Country List</h3>
            <div className='row'>
                {
                    countryData.length > 0 && countryData && countryData.map(country => <CountryDetails key={country.alpha3Code} country={country}></CountryDetails>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        countryData: state.restCountry.restCountry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCountry: () => dispatch(fetchCountry())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);
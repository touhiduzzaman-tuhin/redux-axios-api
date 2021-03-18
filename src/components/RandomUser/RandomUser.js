import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomUsers } from '../../redux/randomUser/randomUserAction';
import RandomUserDetails from '../RadnomUserDetails/RandomUserDetails';

const RandomUser = (props) => {
    // console.log(props);
    const { fetchRandomUsers, randomUserData } = props;
    useEffect(() => {
        fetchRandomUsers()
    }, [])
    // return (
    //     <div>

    //     </div>
    // )
    return randomUserData.loading ? (
        <h1 className='my-5' align='center'>Loading</h1>
    ) : randomUserData.error ? (
        <h1 className='my-5' align='center'>{randomUserData.error}</h1>
    ) : (
        <div className='container' align='center'>
            <h3>Random User</h3>
            <div className='row'>
                {
                    randomUserData && randomUserData.results && randomUserData.results.map(randomUsers => <RandomUserDetails key={randomUsers.phone} randomUsers={randomUsers}></RandomUserDetails>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        randomUserData: state.randomUsers.randomUsers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRandomUsers: () => dispatch(fetchRandomUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RandomUser);
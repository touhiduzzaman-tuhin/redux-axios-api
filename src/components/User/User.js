import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/user/userAction';
import UserDetails from '../UserDetails/UserDetails';

const User = (props) => {
    // console.log(props);
    const { fetchUsers, userData } = props;

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (
        <h1 className='my-5' align='center'>Loading ....</h1>
    ) : userData.error ? (
        <h1>{userData.error}</h1>
    ) : (
        <div align='center' className='container'>
            <h3 className='my-5'>User List</h3>

            <div className='row'>
                {
                    userData && userData.length > 0 && userData.map(user => <UserDetails key={user.id} user={user}></UserDetails>)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        userData: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
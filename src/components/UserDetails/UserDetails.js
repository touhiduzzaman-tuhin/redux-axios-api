import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './UserDetails.css';

const UserDetails = (props) => {
    // console.log(props);
    const { name, email, phone, website, username } = props.user;
    const [mail, setMail] = useState('');
    const [number, setNumber] = useState('');

    return (
        <div className='col-md-4'>
            <div className='user-details-area'>
                <p>Name : {name}</p>
                <p>User Name : {username}</p>
                <p>Email : {mail}</p> 
                <p>Phone : {number}</p>
                <p>Website : {website}</p>

                <Button variant='dark' onClick={() => setMail(email)}>
                    Show Email
                </Button>
                &nbsp; &nbsp;
                <Button variant='success' onClick={() => setNumber(phone)}>
                        Show Phone
                </Button>
            </div>
        </div>
    );
};

export default UserDetails;
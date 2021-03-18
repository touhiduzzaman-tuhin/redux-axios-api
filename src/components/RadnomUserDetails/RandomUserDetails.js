import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './RandomUserDetails.css';

const RandomUserDetails = (props) => {
    // console.log(props);
    const { name, phone, email, gender, picture, location } = props.randomUsers;
    const { first, last, title } = name;
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    return (
        <div className='col-md-4'>
            <div className='random-user-details'>
                <img src={picture.medium} alt="" />
                <p>Name : {title} {first} {last}</p>
                <p>Gender : {gender}</p>
                <p>Phone : {number}</p>
                <p>Email : {mail}</p>
                <p>Address : {location.state}-{location.city}-{location.country}</p>
                <Button variant='secondary' onClick={() => setNumber(phone)}>
                    Show Number
                </Button>
                &nbsp; &nbsp;
                <Button variant='success' onClick={() => setMail(email)}>
                        Show Email
                </Button>
            </div>
        </div>
    );
};

export default RandomUserDetails;

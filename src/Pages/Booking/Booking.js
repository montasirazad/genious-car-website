import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {service} = useParams()
    return (
        <div>
            <p>Booking page</p>
            <p>You choose {service}</p>
        </div>
    );
};

export default Booking;
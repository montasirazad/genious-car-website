import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const [service, setService] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setService(data)
            })

    }, [id]);

    return (
        <div>
            <p>Booking page</p>
            <h4>Details of {service.name}</h4>
            <p>id: {id}</p>
        </div>
    );
};

export default Booking;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'


const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <>
            <h1 className='mt-5' id='services'>Our services</h1>
            <div className='service-container mt-5' >

                {
                    service.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </>
    );
};

export default Services;
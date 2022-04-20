import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const { img, name, price, description } = props.service;
    return (
        <div className='service'>

            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
            <Link to={`/booking/${name}`}><button className='btn btn-warning mb-3'>{name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;
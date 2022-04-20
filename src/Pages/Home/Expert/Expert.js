import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertise } = expert
    return (
        <div className='col-lg-3'>
            <img src={img} style={{height:'200px',width:'200px'}} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertise}</h5>
        </div>
    );
};

export default Expert; <h3>This is expert</h3>
import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.png';
import Expert from '../Expert/Expert';

const ourExperts = [
    {
        img: expert1,
        name: 'Mr. X',
        expertise: 'car engine'
    },
    {
        img: expert2,
        name: 'Mr. Y',
        expertise: 'car paint'
    },
    {
        img: expert3,
        name: 'Mr. A',
        expertise: 'car denting'
    }, {
        img: expert4,
        name: 'Mr. K',
        expertise: 'car washing'
    },



]
const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h3>Our Experts</h3>

            <div className="row">
                {
                    ourExperts.map(expert =><Expert key={expert.name} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts; <h3>Our Experts</h3>
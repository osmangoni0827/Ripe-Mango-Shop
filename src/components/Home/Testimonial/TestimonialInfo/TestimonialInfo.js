import React from 'react';
import './TestimonialInfo.css';
const TestimonialInfo = ({info}) => {
   
    const{name,image,description}=info;
    
    return (
        <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
            <div className='TestimonialInfo'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TestimonialInfo;
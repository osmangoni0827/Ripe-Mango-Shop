import React from 'react';
import { Link } from 'react-router-dom';
import './InfoOfChutney.css';
const InfoOfChutney = ({information}) => {
    const{name,prize,image,_id,productType}=information;
    return (
        <div className='col-md-4 col-lg-4 col-sm-6 col-12'>
            <div className='Chutney-Info shadow'>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <h5>${prize}</h5>
                <a href={`/product/${_id}/${productType}`}>
                    <button className='order-button'>Order Now</button>
                    {/* <Order Button /> */}
                </a>
            </div>
        </div>
    );
};

export default InfoOfChutney;
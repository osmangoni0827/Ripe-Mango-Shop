import React from 'react';
import './ServicePdInfo.css';
const ServicePdInfo = ({information}) => {
    const{name,price,priceType,image,serviceType}=information;
    // console.log(name,price,priceType)
    return (
        <div className='col-md-4 col-sm-12 col-lg-4 col-12'>
           <a href={serviceType}>
           <div className='ServicePdInfo shadow'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <h6>{price}</h6>
                <p>{priceType}</p>
            </div>
           </a>
        </div>
    );
};

export default ServicePdInfo;
import React from 'react';
import { Link } from 'react-router-dom';
import './InfoMangoProducts.css';
const InfoMangoProducts = ({pdDescription}) => {
    // InfoMangoProducts information
    const{name,prize,image,productType,_id}=pdDescription;
    
    return (
        // <div className=''>
            <div className='col-md-6 col-sm-6 col-12 col-lg-4'>
              <div className='productCard shadow'>
              {/* Information */}
               <div>
               <img src={image} alt='' ></img>
                   <h4>{name}</h4>
                   <h5>${prize}</h5>
               </div>
               <a href={`/product/${_id}/${productType}`}>
                    <button className='order-button'>Order Now</button>
                    {/* <Order Button /> */}
                </a>
              </div>
            </div>
        // </div>
    );
};

export default InfoMangoProducts;
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './RelatedProducts.css'
const RelatedProducts = (profs) => {
    
    const{prize,image,ReletedProduct,id,name}=profs;
   
    return (
        <div className="Related-Products">
            <h5>Related Products</h5>
                        <Carousel autoPlay showThumbs={false}>
                                <div>
                                    <a href={`/product/${ ReletedProduct[0]?._id||id}/${ ReletedProduct[0]?.productType}`}>
                                        <p>
                                        <img src={ ReletedProduct[0]?.image||image} alt="" />
                                        <h6>{ReletedProduct[0]?.name||name}</h6>
                                        <span>Price:{ReletedProduct[0]?.prize||prize}</span> 
                                        </p>
                                    </a>
                                </div>

                                <div>
                                <a href={`/product/${ ReletedProduct[1]?._id||id}/${ ReletedProduct[1]?.productType}`}>
                                        <p>
                                        <img src={ ReletedProduct[1]?.image||image} alt="" />
                                        <h6>{ReletedProduct[1]?.name||name}</h6>
                                        <span>Price:{ReletedProduct[1]?.prize||prize}</span> 
                                        </p>
                                </a>
                                </div>

                                <div>
                                <a href={`/product/${ ReletedProduct[2]?._id||id}/${ ReletedProduct[2]?.productType}`}>
                                        <p>
                                        <img src={ ReletedProduct[2]?.image||image} alt="" />
                                        <h6>{ReletedProduct[2]?.name||name}</h6>
                                        <span>Price:{ReletedProduct[2]?.prize||prize}</span> 
                                        </p>
                                </a>
                                </div>
                                  
                        </Carousel>
        </div>
    );
};

export default RelatedProducts;
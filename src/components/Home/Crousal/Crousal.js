import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Bannar1 from '../Bannar/Bannar1/Bannar1';
import Bannar2 from '../Bannar/Bannar2/Bannar2';
import Bannar3 from '../Bannar/Bannar3/Bannar3';
const Crousal = () => {
    return (
        <div>
             <Carousel autoPlay showThumbs={false}>
                <div>
                    <Bannar1></Bannar1>
                </div>
                <div>
                   <Bannar2></Bannar2>
                </div>
                <div>
                   <Bannar3></Bannar3>
                </div>
            </Carousel>
        </div>
    );
};

export default Crousal;
import React from 'react';
import '../Bannar.css';
const Bannar2 = () => {
    return (

        <div className='bannar1 row '>

            <div className='col-md-6 col-12 col-sm-12 col-lg-6 order-sm-1 order-2 '>
                <div className='info'>
                    <h1> HIMSHAGOR MANGO </h1>
                    <h6>Only 250 rupees per kg</h6>
                    <a href={`/product/60c2fbbe57f30721708f36c1/Ripe-Mango`}>
                        <button className='bannarOrderButton'>Order Now</button>
                        {/* <Order Button /> */}
                    </a>              </div>
            </div>
            <div className='col-md-6 col-12 col-sm-12 col-lg-6  order-sm-2 order-1 '>

                <img src="https://i.ibb.co/hDXGLgW/himsagar-mango-1591013391-5461337-removebg-preview.png" alt="" />

            </div>
        </div>
    );
};

export default Bannar2;
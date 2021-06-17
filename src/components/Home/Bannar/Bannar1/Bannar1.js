import React from 'react';
import '../Bannar.css';
const Bannar1 = () => {
    return (

        <div className='bannar1 row '>

            <div className='col-md-6 col-12 col-sm-12 col-lg-6 order-sm-1 order-2 '>
                <div className='info'>
                    <h1> LANGRA MANGO</h1>
                    <h5>Only 150 rupees per kg</h5>
                    <a href={`/product/60c2fbbe57f30721708f36c1/Ripe-Mango`}>
                        <button className='bannarOrderButton'>Order Now</button>
                        {/* <Order Button /> */}
                    </a>
                </div>
            </div>
            <div className='col-md-6 col-12 col-sm-12 col-lg-6  order-sm-2 order-1 '>
                <img src="https://i.ibb.co/k1knpn3/LANGRA-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Bannar1;
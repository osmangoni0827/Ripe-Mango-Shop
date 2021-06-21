import React, { useState } from 'react';

import InfoMangoProducts from '../InfoMangoProducts/InfoMangoProducts';
import './ProductOfMango.css';
import { useEffect } from 'react';
const ProductOfMango = ({ header }) => {
    const[RipeMango,setRipeMango]=useState([])
   
    useEffect(()=>{
            fetch('https://nameless-wildwood-35129.herokuapp.com/ripeMango')
            .then(res=>res.json())
            .then(data=>{
                setRipeMango(data)
            }).catch(err=>{
                console.log(err)
            })
    },[])
    return (
        <section className="mt-5 All-products">
            <div className='container text-center' id='RipeMango'>
                <h1>{header}</h1>
                <div className='row py-5'>

                    {/* All Mango List  */}
                    {
                        RipeMango.map(pd => <InfoMangoProducts pdDescription={pd}></InfoMangoProducts>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductOfMango;
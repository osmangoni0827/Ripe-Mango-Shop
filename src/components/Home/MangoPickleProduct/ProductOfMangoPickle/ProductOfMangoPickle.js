import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InofOfPickle from '../InofOfPickle/InofOfPickle';
import './ProductOfMangoPickle.css';
const ProductOfMangoPickle = ({header}) => {

    const[Mangopickle,setMangoPickle]=useState([]);
   
    useEffect(()=>{
            fetch('http://localhost:5200/mangoPickle')
            .then(res=>res.json())
            .then(data=>{
                setMangoPickle(data)
            }).catch(err=>{
                console.log(err)
            })
    },[])

    return (
        <div className='MangoPickle container' id="Pickle">
            <h1>{header}</h1>
            <div className='row py-4'>
                {
                    Mangopickle.map(pd=><InofOfPickle information={pd}></InofOfPickle>)
                }
            </div>
        </div>
    );
};

export default ProductOfMangoPickle;
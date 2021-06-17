import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InfoOfChutney from '../InfoOfChutney/InfoOfChutney';
import './ProductOfChutney.css';
const ProductOfChutney = ({ header }) => {

    const [Mangochutney, setMangoChutney] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5200/mangoChutney')
            .then(res => res.json())
            .then(data => {
                setMangoChutney(data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='Chutney container' id="Chutney">
            <h1>{header}</h1>
            <div className='row py-4'>
                {
                    Mangochutney.map(pd => <InfoOfChutney information={pd}></InfoOfChutney>)
                }
            </div>
        </div>
    );
};

export default ProductOfChutney;
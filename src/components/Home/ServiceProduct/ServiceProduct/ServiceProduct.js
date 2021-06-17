import React from 'react';
import ServicePdInfo from '../ServicePdInfo/ServicePdInfo';
import './ServiceProduct.css';

const ServiceCardInformation=[
    {
        id:1,
        image:'https://i.ibb.co/8bJJ4Y6/unnamed-removebg-preview.png',
        name:'Ripe Mango',
        price:'Price Start From $100',
        priceType:'Price Changeable',
        serviceType:'#RipeMango'
    },
    {
        id:2,
        image:'https://i.ibb.co/r0wQ4m5/mango-chutney-achar-pickle-removebg-preview.png',
        name:'Mango Pickle Recipe',
        price:'Price Start From $120',
        priceType:'Price Changeable',
        serviceType:"#Pickle"
    },
    {
        id:3,
        image:'https://i.ibb.co/QbMpcNq/aamer-chatni1-removebg-preview.png',
        name:'Mango Chutney Recipe',
        price:'Price Start From $110',
        priceType:'Price Changeable',
        serviceType:"#Chutney"
    }
]
const ServiceProduct = ({header}) => {
    return (
        <div className='ServicePd container'>
            {/* Heading of Service Card */}
            <h1>{header}</h1>
            <div className='row'>
            {
                ServiceCardInformation.map(pd=><ServicePdInfo information={pd} key={pd.id}></ServicePdInfo>)
            }
            </div>
        </div>
    );
};

export default ServiceProduct;
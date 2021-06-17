import React from 'react';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import './Testimonial.css';
const TestimonailInformation=[
    {
        id:1,
        name:'First Delivery',
        image:'https://i.ibb.co/1QZJCF1/22-222412-home-delivery-hd-png-download-removebg-preview.png',
        description:'We Alwayse try to provide to first delivery. Our Team is very professional. We always happy to our customer.'
    },
    {
        id:2,
        name:'Home Delivery',
        image:'https://i.ibb.co/YBscLHs/52362057-free-delivery-flat-vector-isometric-illustration.jpg',
        description:'We Alwayse try to provide to first delivery. Our Team is very professional. We always happy to our customer.'
    },
    {
        id:3,
        name:'Product Returnable',
        image:'https://i.ibb.co/yy740Zz/return-and-refund.png',
        description:'We Alwayse try to provide to first delivery. Our Team is very professional. We always happy to our customer.'
    },
]
const Testimonial = () => {
    return (
        <div className='testimonial container py-4 mt-5'>
            <h1>Why You Chose Us</h1>
            <div className='row'>
            {
                TestimonailInformation.map(info=><TestimonialInfo key={info.id} info={info}></TestimonialInfo>)
            }
            </div>
        </div>
    );
};

export default Testimonial;
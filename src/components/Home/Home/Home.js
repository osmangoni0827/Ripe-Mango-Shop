import React from 'react';

import Crousal from '../Crousal/Crousal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceProduct from '../ServiceProduct/ServiceProduct/ServiceProduct';
import ProductOfMango from '../MangoProduct/ProductOfMango/ProductOfMango'
import ProductOfMangoPickle from '../MangoPickleProduct/ProductOfMangoPickle/ProductOfMangoPickle';
import ProductOfChutney from '../MangoChutneyProduct/ProductOfChutney/ProductOfChutney';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import TeamMember from '../Team-Member/TeamMember/TeamMember';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Crousal></Crousal>
            <ServiceProduct header="Our Service Product"></ServiceProduct>
            <ProductOfMango header="Populer Mangos"></ProductOfMango>
            <ProductOfMangoPickle header="Mango Pickle Recipe"></ProductOfMangoPickle>
            <ProductOfChutney header="Mango Chutney Recipe"></ProductOfChutney>
            <Testimonial></Testimonial>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;
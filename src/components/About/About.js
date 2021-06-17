import React from 'react';
import Footer from '../Home/Footer/Footer';
import ServiceProduct from '../Home/ServiceProduct/ServiceProduct/ServiceProduct';
import TeamMember from '../Home/Team-Member/TeamMember/TeamMember';
import Testimonial from '../Home/Testimonial/Testimonial/Testimonial';
import Navbar from '../Shared/Navbar/Navbar';
// import ServiceProduct from '../ServiceProduct/ServiceProduct/ServiceProduct';
// import Testimonial from '../Testimonial/Testimonial/Testimonial';
// import TeamMember from '../Team-Member/TeamMember/TeamMember';
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ServiceProduct header="Our Product"></ServiceProduct>
            <Testimonial></Testimonial>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default About;
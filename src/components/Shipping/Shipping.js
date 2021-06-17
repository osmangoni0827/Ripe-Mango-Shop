import React, { useState } from 'react';
import PaymentMethod from '../PaymentMethod/OrderPaymentMethod/OrderPaymentMethod';
import './Shipping.css'
const Shipping = ({ orderProduct }) => {

    
    const [OrderInfoData, setOrderInfoData] = useState({ orderProduct });
   
    const HandleInput = (e) => {
        
        console.log(OrderInfoData);
        if (e.target.name === "name") {
            const name = e.target.value;
            const ShippingNewData = { ...OrderInfoData, name }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "email") {
            const email = e.target.value;
            const ShippingNewData = { ...OrderInfoData, email }
            setOrderInfoData(ShippingNewData);
        }

        else if (e.target.name === "pic-office") {
            const picOrder = e.target.value;
            const ShippingNewData = { ...OrderInfoData, picOrder }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "number") {
            const number = e.target.value;
            const ShippingNewData = { ...OrderInfoData, number }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "alt-number") {
            const altNumber = e.target.value;
            const ShippingNewData = { ...OrderInfoData, altNumber }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "area") {
            const area = e.target.value;
            const ShippingNewData = { ...OrderInfoData, area }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "city") {
            const city = e.target.value;
            const ShippingNewData = { ...OrderInfoData, city }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "country") {
            const country = e.target.value;
            const ShippingNewData = { ...OrderInfoData, country }
            setOrderInfoData(ShippingNewData);
        }
        else if (e.target.name === "address") {
            const address = e.target.value;
            const ShippingNewData = { ...OrderInfoData, address }
            setOrderInfoData(ShippingNewData);
        }
    }

    return (

        <div className="shippingPart">
            <div className="shippingHeder">
                <h2>Address Information </h2>
                <p>Please Fill Out Your Information</p>
            </div>
            <div className="shippingInfo" >
                <div id="caseOnDelevery" className="d-flex justify-content-start radioInput">

                    {/*  Pick parcel Part */}

                    <h5>Pick up your parcel from: </h5>
                    <p>
                        <input type="radio" onBlur={HandleInput} id="home" name="pick-office" value="Home" />
                        <label for="home"> Home</label>
                    </p>

                    <p>
                        <input type="radio" onBlur={HandleInput} id="home-order" name="pick-office" value="Office" />
                        <label for="home-order"> Office</label>
                    </p>
                </div>

                {/* Submit Form */}
                <form className='submitForm' >
                    <div class="form-group w-100 p-1">
                        <input type="email" onChange={HandleInput} name='email' class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group w-100 p-1">
                        <input type="text" onBlur={HandleInput} name='name' class="form-control" id="name" placeholder="Name" />
                    </div>
                    {/* Phone Number Input */}
                    <div className='d-flex align-items-center'>
                        <div class="form-group w-100 p-1">
                            <input type="text" onBlur={HandleInput} class="form-control" name='number' id="phone" placeholder="Phone Number" />
                        </div>
                        <div class="form-group w-100 p-1">
                            <input type="text" onBlur={HandleInput} class="form-control" name='alt-number' id="phone" placeholder="Alternative Phone Number" />
                        </div>
                    </div>
                    {/* Select Country & City  */}
                    <div className="d-flex justify-content-center">
                        <div class="form-group w-100 p-1">
                            <select className=" w-100 h-10" onBlur={HandleInput} name="country" id="cars" form="carform">
                                <option disabled value="">Select Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="India">India</option>
                                <option value="Pakistan">Pakistan</option>
                            </select>
                        </div>
                        <div class="form-group w-100 p-1">
                            <select className=" w-100 h-10" onBlur={HandleInput} name="city" id="cars" form="carform">
                                <option disabled value="">Select City</option>
                                <option value="Bangladesh">Dhaka</option>
                                <option value="India">Dilhi</option>
                                <option value="Pakistan">Islamabad</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex ">
                        <div class="form-group w-50 p-1">
                            <select className=" w-100 h-10" onBlur={HandleInput} name="area" id="cars" form="carform">
                                <option disabled value="">Select Area</option>
                                <option value="Bangladesh">Feni</option>
                                <option value="India">Murshidabad</option>
                                <option value="Pakistan">Koraci</option>
                            </select>
                        </div>
                    </div>

                    {/* //Address Part */}
                    <div class="form-group w-100 address" >
                        <input type="text" onBlur={HandleInput} name='address' class="form-control " id="address" placeholder="Your Address" />
                    </div>
                </form>
            </div>
            <div className="Payment">
                <PaymentMethod setOrderInfoData={setOrderInfoData} OrderInfoData={OrderInfoData}></PaymentMethod>
            </div>
        </div>
    );
};

export default Shipping;
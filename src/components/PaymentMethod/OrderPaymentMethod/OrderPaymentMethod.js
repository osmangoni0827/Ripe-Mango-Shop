import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PaymentType from '../PaymentType/PaymentType';
import './PaymentMethod.css';

const PaymentMethodInfo = [
    {
        id: "1",
        image: "https://i.ibb.co/MVRD5By/index-removebg-preview.png",
        paymentTypeLink: "#caseOnDelevery",
        paymentType: "caseOnDalibary",
    },
    {
        id: 2,
        image: "https://i.ibb.co/hLXkkdj/stripe-removebg-preview.png",
        paymentTypeLink: "/strip-visaCard",
        paymentType: "stripe"
    },
    {
        id: 3,
        image: "https://i.ibb.co/gg2NNRL/nogod-removebg-preview.png",
        paymentTypeLink: "#bikas",
        paymentType: "bkash"
        // https://i.ibb.co/Mg1bFGp/bkash-train-ticket-796x445-removebg-preview-removebg-preview.png
    },
    {
        id: 4,
        image: "https://i.ibb.co/gg2NNRL/nogod-removebg-preview.png",
        paymentTypeLink: "#nogod",
        paymentType: "nogod"
    },
    {
        id: 5,
        image: "https://i.ibb.co/GQxKRcy/roket-removebg-preview-removebg-preview-removebg-preview.png",
        paymentTypeLink: "#roket",
        paymentType: 'roket'
    }
]
const PaymentMethod = ({ OrderInfoData, setOrderInfoData }) => {
    console.log(OrderInfoData);
    const history = useHistory();
    const [paymentType, setPaymentType] = useState("");
    const HandlePaymentType = (value) => {
        setPaymentType(value);
        const PaymentInfoAndStatus = { ...OrderInfoData, PaymentType: value,status:"Pending" }
        setOrderInfoData(PaymentInfoAndStatus)
    }
    //Confirm Order Handle
   
    const HandleConfirmOrder = () => {
    
        fetch("https://nameless-wildwood-35129.herokuapp.com/addOrder", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OrderInfoData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Successfully")

                fetch("https://nameless-wildwood-35129.herokuapp.com/deleteCardProducts")
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        localStorage.setItem("CountCartProduct", 0);
                        history.push('/')
                        window.location.reload();
                    }
                })
            })

       
    }
    return (
        <div className="">
            <div className="container PaymentMethod">
                {/* Payment Type  Heder */}
                <div className="payment-header">
                    <h3>Payment Method</h3>
                    <p>Please select only one! payment method</p>
                </div>

                {/* All Payment Type */}
                <div className="AllpaymentType row">
                    {
                        PaymentMethodInfo.map(method => <PaymentType HandlePaymentType={HandlePaymentType} paymenttypeInfo={method}></PaymentType>)
                    }
                </div>
                {/* Confirm Order Button */}
                <div className=" d-flex justify-content-center">
                    {
                        paymentType ? <button type="submit" onClick={HandleConfirmOrder} class="">Confirm Order</button> :
                            <div>
                                <p className="text-danger text-center">Please Select Any Payment Method</p>
                                <button disabled type="submit" class="">Confirm Order</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
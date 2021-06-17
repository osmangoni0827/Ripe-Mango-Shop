import React from 'react';
import './CostInformation.css'
import './CostInformation.css';
const CostInformation = ({totalprize}) => {

    const SubTotal=totalprize;
    let ShippingCost;
    let Vat;
    if(SubTotal>2000){
        Vat=SubTotal*.20;
    }
    else if(SubTotal>1000){
        Vat=ShippingCost*0.10;
    }
    else{
        Vat=0;
    }
    if(SubTotal>5000){
        ShippingCost=0;
    }
    else{
        ShippingCost=40;
    }
    const TotalCost=SubTotal+ShippingCost+Vat;
    // console.log(totalprize,TotalCost,Vat,SubTotal);
    return (
        <div  className="Cost-Info sticky-top">
                 <div className="checkout-summary" >
            <div className="checkout-heder">
                <h3>Checkout Summary</h3>
                <hr></hr>
            </div>
            <div className="cost-info">
            
            <div className="d-flex justify-content-between">
                <p>Sub Total</p>
                <p>{SubTotal} Tk</p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
                <p>Shipping Cost</p>
                <p>{ShippingCost} Tk</p>
            </div>
            
            <hr></hr>
            <div className="d-flex justify-content-between">
                <p>Vat/Tax</p>
                <p>{Vat} Tk</p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
                <p>Total Cost</p>
                <p>{TotalCost} Tk</p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
                <h5>Payable Taka</h5>
                <h5>{TotalCost} Tk</h5>
            </div>
            </div>
        </div>
        </div>
       
    );
};

export default CostInformation;
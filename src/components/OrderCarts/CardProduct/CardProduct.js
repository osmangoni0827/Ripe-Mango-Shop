import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteOrder } from '../../Orders/actions';
import './CardProduct.css';
const CardProduct = ({ info, setDeleteItem, settotalprize, HandleUpdateQuantity, deleteItem, TotalPrize }) => {
    const [total, setTotal] = useState(TotalPrize);
    const { name, image, Demand, prize, _id, quantity } = info;
    const [quantityCount, setquantity] = useState(quantity)
    const dispatch = useDispatch();
    const HandleDeleteCardProduct = (id) => {
        if (window.confirm("Are you remove this item ?")) {

            fetch("http://localhost:5200/deleteCardProducts/" + id)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDeleteItem(!deleteItem);
                        const CurrentCountValue = localStorage.getItem("CountCartProduct")
                        if (CurrentCountValue >= 1) {
                            localStorage.setItem("CountCartProduct", Number(CurrentCountValue) - 1);
                            dispatch(DeleteOrder());
                        }
                        console.log("Remove Item")
                    }
                })
        }

    }

    const HandleQuantity = (counter, status) => {
        if (status === "+") {
            counter += 1
            setquantity(counter);
            HandleUpdateQuantity(counter, _id);
        }
        else if (status === "-") {
            counter > 1 ? counter = counter - 1 : counter = 1;
            setquantity(counter)
            HandleUpdateQuantity(counter, _id);
        }
    }

    return (
        <>
            <div className="col-md-4 col-lg-4 col-sm-4 col-4 card-pdImage">
                <img src={image} alt="" />
            </div>
            <div className="col-md-8 col-lg-8 col-sm-8 col-8 card-pd-info">
                <h4>{name}</h4>
                <p>{Demand}</p>
                <div className='mb-2 d-flex justify-content-between align-items-center'>
                    <div>
                        <button style={{ marginRight: '5px' }} className="btn btn-secondary " onClick={() => HandleQuantity(quantityCount, "+")}>+</button>
                        <button className="btn btn-secondary" onClick={() => HandleQuantity(quantityCount, "-")}>-</button>
                    </div>
                    <h3>{(quantityCount) * prize} Tk ({quantityCount} Kg)</h3>
                </div>
                <button onClick={() => HandleDeleteCardProduct(_id)} className="btn btn-danger">Remove</button>

            </div>
            <hr className="hyper-line"></hr>
        </>
    );
};

export default CardProduct;
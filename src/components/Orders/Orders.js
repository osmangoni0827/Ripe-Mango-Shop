import React, { useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { CountIncrementOrder } from './actions/index'
import './Orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyBill, faUndoAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { Link } from 'react-router-dom';
import ProductOfMango from '../Home/MangoProduct/ProductOfMango/ProductOfMango';
import { useEffect } from 'react';
import ProductOfChutney from '../Home/MangoChutneyProduct/ProductOfChutney/ProductOfChutney';
import ProductOfMangoPickle from '../Home/MangoPickleProduct/ProductOfMangoPickle/ProductOfMangoPickle';
const Orders = () => {

    const dispatch = useDispatch()
    const { ProductId, ProductType } = useParams();
    const [selectProductData, setSelectProductData] = useState({});
    const [ReletedProduct, setReletedProduct] = useState([]);
    const [clickButton, setClickButton] = useState(false)
    const { name, image, prize, quality, Category, description, Demand, Stock, _id } = selectProductData
    const counter = useSelector(count => count.TotalOrder);
    if (!localStorage.getItem("CountCartProduct")) {
        localStorage.setItem("CountCartProduct", 0);
    }

                             // Selected Product Using Fetch
    useEffect(() => {
        fetch(`http://localhost:5200/ProductById/${ProductId}/${ProductType}`)
            .then(res => res.json())
            .then(data => {
                setSelectProductData(data);
            })
    }, [ProductId, ProductType])

                        //  Product By Type
    useEffect(() => {
        fetch(`http://localhost:5200/ProductByType/${ProductType}`)
            .then(res => res.json())
            .then(data => {
                setReletedProduct(data);
            })
    }, [ProductType])

                                 // Add Button 
    const HandleAddCard = () => {

        const NewSelectData = { ...selectProductData };
        NewSelectData.quantity=1;
        NewSelectData.status = "pending";

        fetch("http://localhost:5200/addToCart", {
            method: "POST",
            headers: {
                "Content-type": "application/Json"
            },
            body: JSON.stringify(NewSelectData)
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    alert("This Product Add to Order Card")
                    setClickButton(!clickButton)
                    !clickButton && dispatch(CountIncrementOrder())
                    localStorage.setItem("CountCartProduct", Number(counter) + 1);
                }
            })
    }
    return (
        <div className='order-page'>
            <Navbar></Navbar>
            <div className='container'>
                <div className='row product-order'>

                    {/* Product Information */}

                    <div className='col-md-4 col-lg-4 col-sm-12 col-12 image'>
                        <img src={image} alt=""></img>
                        <h6>{description}</h6>
                    </div>
                    <div className='col-md-5 col-lg-5 col-sm-12 col-12 '>
                        <div className="product-information ">
                            <h1>{name}</h1>
                            <ul>
                                <li>Quality: <span>{quality}</span></li>
                                <li>Category: <span>{Category}</span></li>
                                <li>Demand: <span>{Demand}</span></li>
                            </ul>
                            <h5>Review:<span>1 Review</span></h5>
                            <h5>Stock: <span>{Stock}</span></h5>
                            <h5>Price: {prize}</h5>

                            {/* Input quantity*/}

                            <div class="mb-3 ">
                                {/* Card Button */}

                                {
                                    clickButton ?
                                        <Link to='/order-cart'>
                                            <button onClick={() => HandleAddCard()} className="d-block mt-3 btn btn-primary">
                                                <FontAwesomeIcon className='icon' icon={faShoppingCart} size='1x' color="#FFFFFF" />
                                                <span>Go To Cart</span>
                                            </button>
                                        </Link> :
                                        <button onClick={() => HandleAddCard()} className="d-block mt-3 btn btn-primary">
                                            <FontAwesomeIcon className='icon' icon={faShoppingCart} size='1x' color="#FFFFFF" />
                                            <span>Add To Card</span>
                                        </button>

                                }
                            </div>
                        </div>
                    </div>

                    {/* Delevery Information & Releted Products Part */}
                    <div className=' col-md-3 col-lg-3 col-sm-12 col-12 deliveryInformation'>
                        <p> <FontAwesomeIcon className='icon' icon={faMoneyBill} size='1x' color="#000000" /> <span>Cash on delivery</span></p>
                        <p> <FontAwesomeIcon className='icon' icon={faCcVisa} size='1x' color="#000000" /> <span>Payment with visa card</span></p>
                        <p><FontAwesomeIcon className='icon' icon={faUndoAlt} size='1x' color="#000000" /> <span>7 days happy return</span></p>
                        <p><FontAwesomeIcon className='icon' icon={faTruck} size='1x' color="#000000" /> <span>Delivery Charge Tk. 40</span></p>
                        <hr></hr>
                        <RelatedProducts ReletedProduct={ReletedProduct} id={_id} name={name} image={image} prize={prize}></RelatedProducts>
                    </div>
                </div>
                <div className="RecomandedProduct">
                    {
                        ProductType === "Ripe-Mango" && <ProductOfMango header="Recommanded Products"></ProductOfMango>
                    }
                    {
                        ProductType === "Chutney" && <ProductOfChutney header="Recommanded Products"></ProductOfChutney>
                    }
                    {
                        ProductType === "Pickle" && <ProductOfMangoPickle header="Recommanded Products"></ProductOfMangoPickle>
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
};
export default Orders;

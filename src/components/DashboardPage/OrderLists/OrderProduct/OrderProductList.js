import React from 'react';
import './OrderProductList.css';
const OrderProduct = ({orderlist,index}) => {
    return (
        <div className="orderProductList">
            <h6 className="text-center">Order No: {index}</h6>
            <table>
                  <thead>
                    <th>Order Id</th>        
                    <th>Image</th>
                    <th>Name</th>
                    <th>Prize</th>
                    <th>Quantity</th>
                  </thead>
                  <tbody>
                  {orderlist.orderProduct.map((pd)=>(
                    <tr>
                        <td>{orderlist._id}</td>
                        <td><img src={pd.image} alt="" /></td>
                        <td>{pd.name}</td>
                        <td>{pd.prize}</td>
                        <td>{pd.quantity}</td>
                    </tr>
                  ))
                }
                  </tbody>
                 </table>
        </div>
    );
};

export default OrderProduct;
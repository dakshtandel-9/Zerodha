import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Orders = () => {

  let [orders, setOrders] = useState([])

  useEffect(() => {
    axios("https://zerodha-z2zr.onrender.com/allOrders").then((res) => {
      setOrders(res.data)
    })
  })

  return (
    <div className="order-table">
      <table>
        <tr>
          <th>Stock Name</th>
          <th> QTY</th>
          <th>Price</th>
          <th>Mode</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>{order.mode}</td>
            </tr>
          )
        })}
      </table>

      <div className="no-orders">

        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;

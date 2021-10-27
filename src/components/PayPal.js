import React from 'react'
import { useState } from 'react';
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = () => {
    const [price, setPrice] =useState(0);

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price,
              },
            },
          ],
        });
      }

      const onApprove = (data, actions) => {
        console.log(data);
        return actions.order.capture();
      }

      return (
        <div className="app">
          <div className="wrapper">                   
              <h3>商品價格</h3>
              <input className="price" placeholder="商品價格" type="number" onChange={e=>setPrice(e.target.value)}
              value={price}/>
              <br/>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
            {/* 官網提供的按鈕 刪除了=>之.this*/}
          </div>
        </div>
      );
}

export default PayPal

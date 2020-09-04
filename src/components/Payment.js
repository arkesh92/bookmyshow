import React from 'react';

const Payment = (props) => {
  return (
    <div className="payment">
      <h4>Rs. {props.cost} /-</h4>
      <button className="pay-now">Pay Now</button>
    </div>
  );
}

export default Payment;

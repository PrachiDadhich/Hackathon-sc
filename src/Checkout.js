import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtot from "./Subtot";
import CheckoutProduct from './CheckoutProduct';
import userEvent from '@testing-library/user-event';
function Checkout() {
  const [{ basket, user }, dispatch]= useStateValue();
  return (
    <div className="Checkout">
    <div className='checkout__left'>
    <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />checkout__title

    <div>
      <h3>Hello, {user?.email}</h3>
    <h2 className=''>Your shopping basket</h2>
    {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

      </div>
    </div>

    <div className='checkout__right'>
        <Subtot />
    </div>
  </div>  
  );
}

export default Checkout;


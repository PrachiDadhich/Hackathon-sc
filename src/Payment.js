import React from 'react';
import { useStateValue } from './StateProvider';
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useState } from 'react';
import axios from './axios';
import {useEffect} from 'react';
import { ConnectedTvOutlined } from '@mui/icons-material';


function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, SetError] = useState(null);

    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
     const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        console.log("resp", response)
        setClientSecret(response.data.clientSecret)
     }
     getClientSecret();
    }, [basket]);
    
    console.log('The secret is >>>', clientSecret)
    const handleSubmit = async (event)  => {
        event.preventDefault();
        setProcessing(true);
        console.log('here1')
        const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method: {
               card: elements.getElement(CardElement)
           }
        }).then(({paymentIntent}) => {
            console.log('here2')
            setSucceeded(true);
            SetError(null)
            setProcessing(false)

            navigate.replace('./orders')


        })
       
    }
    const handleChange = e => {
        setDisabled(e.empty);
        SetError(e.error ? e.error.message : "");
    }
  return (
    <div className='payment'>
      <div className = 'payment__container'>
          <h1>
              Checkout {
                  <Link to= "/checkout">{basket?.length} items</Link>
              }
          </h1>
         <div className='payment__section'>
            <div className = 'payment__title'>
                <h3>Delivery Address</h3> 
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>123 bajbajnakj</p>
                <p> Los Angeles, CA</p> 
            </div>
         </div>
            {/* Payment section - Review Items */}
            <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/*Stripe*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                            <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                            />
                            <button disabled = {processing || disabled || succeeded}></button> 
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

                
         </div>
      </div>
   
  );
}

export default Payment;

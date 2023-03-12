import React from 'react';
import {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51MkirTSDFCbdq8pyr6TsgkJf3Vd1NXpHandDdlnhYjnUe4LNO32DwPlju0tXHDefNOz838zAHbUFzb6QoC4GkwaK00iRelUebc");
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is>>>', authUser);
      if(authUser) {
         dispatch({
           type: 'SET_USER',
           user: authUser
         })
      } else{

      }
    })

  }, [])
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes> 
      
      
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Home/>} />
      
      <Route path="/login" element={<Login/>} />
      
        
      <Route path="/payment" element={
      
        <Elements stripe={promise}>
          <Payment/>
          </Elements>
       
        }  />


      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
  
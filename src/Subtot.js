import React from 'react';
import CurrencyFormat from "react-currency-format";
import { Navigate, useNavigate } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtot.css";
import { useHistory } from "react-router-dom";

function Subtot() {
  const navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className = "subtot">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtot;

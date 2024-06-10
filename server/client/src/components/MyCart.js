import React, { useContext } from 'react'
import CartItem from "./CartItem";
import FormatPrice from "../Helpers/FormatPrice";
import payment from "../Helpers/payment";
import { v4 as uuidv4 } from 'uuid';
import {Button} from "../styles/Button";
import { useCartContext } from "../context/addToCartContext";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { userContext } from '../context/userContext';
export const MyCart = () => {
  const { token } = useContext(userContext);
    const {cart,clearCart, total_price, shipping_Fee} =useCartContext();
    if(cart.length===0){
      return <EmptyDiv>
        <h3>No item in the cart</h3>
        <div>
          <NavLink to="/products">
              <Button>Continue Shopping</Button>
            </NavLink>
        </div>
      </EmptyDiv>
    }else{
      return (
        <>
             <div className="cart-heading grid grid-five-column">
               <p>Item</p>
               <p className="cart-hide">Price</p>
               <p>Quantity</p>
               <p className="cart-hide">Subtotal</p>
               <p>Remove</p>
       
             </div>
             <hr />
           <div>
             {cart.map((currEle)=>{
               
                return <CartItem key={uuidv4()} {...currEle} />
             })}
           </div>
           <hr />
           <div className="cart-two-button">
             <div>
               <NavLink to="/products">
                   <Button>Continue Shopping</Button>
                 </NavLink>
             </div>
             <div>
               <Button className="btn-clear" onClick={clearCart}>Clear Cart</Button>
             </div>
           </div>
           <div className="order-total--amount">
             <div className="order-total--subdata">
                 <div>
                   <p>Subtotal: </p>
                   <p><FormatPrice price={total_price} /></p>
                 </div>
                 <div>
                   <p>Shipping Price</p>
                   <p><FormatPrice price={shipping_Fee} /></p>
                 </div>
                 <hr />
                 <div>
                   <p>Order Total</p>
                   <p><FormatPrice price={total_price+shipping_Fee} /></p>
                 </div>
                 <Button onClick={()=>payment({total_price,token,clearCart})}style={{"backgroundColor": "rgb(98 84 243)"}}>Pay now</Button>
             </div>
           </div>
        </>
       )
    }
    
}
const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;
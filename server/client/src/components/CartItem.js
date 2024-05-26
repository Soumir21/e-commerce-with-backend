import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import {MdDelete} from "react-icons/md";
import { useCartContext } from "../context/addToCartContext";

 const CartItem=({id,name,image,color,amount,price,stock})=>
 {
    // const [newAmount, setAmount]=useState(amount);
    // const setDecrease = () => {
    //     if(newAmount-1===0){
    //         removeItem(id);
    //         setAmount(newAmount);
    //     }
    //     else{
    //         setAmount(newAmount-1);
    //     }
        
    //   };
      
    //   const setIncrease = () => {
    //     if(newAmount+1>stock){
    //         setAmount(newAmount);
    //     }
    //     else{
    //         setAmount(newAmount+1);
    //     }
       
    //   };

    //   amount=newAmount;
    const {removeItem,setDecrease, setIncrease}=useCartContext();
    return <div className="container grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                   <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>Color:</p>
                    <div className="color-style" style={{backgroundColor:color}}>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="cart-hide">
                <p>
                <FormatPrice price={price} />
                </p> 
        </div>
        <div>
                <CartAmountToggle
                amount={amount}
                setDecrease={()=>setDecrease(id)}
                setIncrease={()=>setIncrease(id)}
            />
        </div>
        <div className="cart-hide">
                <p>
                <FormatPrice price={price*amount} />
                </p> 
        </div>
        <div>
       
        <MdDelete className="remove_icon" onClick={()=> removeItem(id)}/>
    
            
        </div>
    </div>;
 }

 export default CartItem;
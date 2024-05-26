import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";
import {userContext} from "../context/userContext";
const CartContext= createContext();

const getCart=()=>{
    const localCart=localStorage.getItem("soumirCart");
    if(localCart===0){
        return [];
    }
    else{
        return JSON.parse(localCart);
    }
}
const initialState={
    cart:getCart(),
    total_item:"",
    total_price:"",
    shipping_Fee: 50000
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer, initialState);
    const {token}=useContext(userContext);
   
    const addCartToBackEnd=async()=>{
        try{
            const response=await fetch("http://localhost:5000/api/product/postproduct",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                },
                body:JSON.stringify({cart:state.cart})
            })

            const data=await response.json();
        }catch(err){
            console.log(err);
        }
    }

    
    useEffect(()=>{
        if(token){
        addCartToBackEnd();
        }
    },[state.cart]);

    useEffect(()=>{
        const outerFunction=async()=>{
            const getCart=async()=>{
                try{
                    const response=await fetch("http://localhost:5000/api/product/getproduct",{
                        method:"GET",
                        headers:{
                            "Authorization":`Bearer ${token}`
                        },
                    })
                    const data=await response.json();
                    return data.cart;
                }catch(err){
                    console.log(err);
                }
            }
            if(token){
                const userCart=await getCart();
                dispatch({type:"DATA_FROM_BACKEND",payload:userCart});   
                
            }
           else{
            dispatch({type:"LOGOUT_CART"})
           }
        }
       outerFunction();
        
        
    },[token])



    const addToCart=(id, color, amount, product)=>{
         dispatch({type:"ADD_TO_CART", payload:{id, color, amount, product}})
    }

    const removeItem=(id)=>{
        dispatch({type: "REMOVE_ITEM", payload:id});
    }

    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }  
    
    const setDecrease=(id)=>{
        dispatch({type:"DECREASE_AMOUNT",payload:id})
    }

    const setIncrease=(id)=>{
        dispatch({type:"INCREASE_AMOUNT",payload:id})
    }

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
        localStorage.setItem("soumirCart", JSON.stringify(state.cart))
    },[state.cart])

    return(<CartContext.Provider value={{...state, addToCart, removeItem, clearCart,setDecrease, setIncrease}}>
            {children}
    </CartContext.Provider>);
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {useCartContext};


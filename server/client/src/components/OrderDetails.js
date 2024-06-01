import React, { useEffect,useContext, useState } from 'react'
import {userContext} from "../context/userContext";
import { SingleOrder } from './SingleOrder';
export const OrderDetails = () => {
    const {token}=useContext(userContext);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const findOrders=async()=>{
            try{
                const response=await fetch("https://e-commerce-with-backend-1.onrender.com/api/order/getorder",{
                    method:"GET",
                    headers:{
                        "Authorization":`Bearer ${token}`
                    },
                   
                })
                const data=await response.json();
                setOrders(data.orderDetails);
            }catch(err){
                console.log(err);
            }
        }
        findOrders()
    },[]);
  return (
    <>
        <h2>My Orders</h2>
        {orders.map((currOrder)=>{
            return( <SingleOrder order={currOrder}/>)

        })}
    </>
  )
}

import React from 'react'
import styled from "styled-components";
export const SingleOrder = ({order}) => {
   
  return (
    <Wrapper>
        <div className='order-container'>
            <div className='order-details'>
                <p>Ordered on: <span  style={{"font-weight":"bold"}}>{order.date}</span></p>
                <p>Order id: <span  style={{"font-weight":"bold"}}>{order.order_id}</span></p>
            </div>
            <div className='order-items'>
                {order.cart.map((currItem)=>{
                    const {id,name,image,color,amount,price,stock}=currItem;
                    return(
                        <>
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
                        </>
                    )
                })}
        </div>
    </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin:2rem;
  .order-details{
    display:flex;
    gap:10rem;
    padding:1rem; 
  }
  .order-items{
    padding:1rem;
    display:flex;
    gap:4rem;
    figure{
        img{
            width:10rem;
            height:auto;
        }
    }
    .color-div{
        display:flex;
        align-items:center;
        gap:1rem;
        .color-style{
        height:2rem;
        width:2rem;
        border-radius:50%;
    }
    }
    
  }
`;

const cartReducer=(state,action)=>{
    switch(action.type){
        case("ADD_TO_CART"):
        const {id, color, amount, product}=action.payload;
        const cartProduct={
            id: id+color,
            name:product.name,
            image:product.image[0].url,
            color,
            amount,
            stock: product.stock,
            price: product.price
        }
        let marker=0;
        const sameProductIndex=state.cart.map((currEle,index)=>{
           if(currEle.id===cartProduct.id){
            marker=1;
            if(currEle.amount+cartProduct.amount<=currEle.stock){
                currEle.amount=currEle.amount+cartProduct.amount;
            }
            else{
                currEle.amount=currEle.stock
            }
            
           }
           return currEle;
        })

        if(marker){
            return{
                ...state,
                cart: sameProductIndex
            }
        }
        else{
                return{
            ...state,
            cart: [...state.cart, cartProduct]
    
        }

        }
        case "DATA_FROM_BACKEND":
            console.log(action.payload);
            return{
                ...state,
                cart:[...action.payload,...state.cart]
            }
        case("LOGOUT_CART"):
        console.log("called");
        return{
            ...state,
            cart:[]
        }
        case("DECREASE_AMOUNT"):
        const decreasedCart= state.cart.map((currEle)=>{
            if(currEle.id===action.payload){
                currEle.amount--;
                if(currEle.amount<1){
                    currEle.amount=0 ;
                }
            }
            return currEle;
        } );
        return {
            ...state,
            cart: decreasedCart
        }

        case("INCREASE_AMOUNT"):
        const increasedCart= state.cart.map((currEle)=>{
            if(currEle.id===action.payload){
                currEle.amount++;
                if(currEle.amount>currEle.stock){
                    currEle.amount=currEle.stock;
                }
            }
            return currEle;
        } );
        return {
            ...state,
            cart: increasedCart
        }
        
        
        case("REMOVE_ITEM"):
        const updatedCart= state.cart.filter((currEle)=> currEle.id !== action.payload);
        return{
            ...state,
            cart: updatedCart
        }

        case("CLEAR_CART"):
        return{
            ...state,
            cart:[]
        }

        case("CART_TOTAL_ITEM"):
        let updatedTotalItem=0;
        if(state.cart){
            updatedTotalItem =state.cart.reduce((accum,currEle)=>{
                let {amount}=currEle;
                accum=accum+amount;
                return accum;
            },0)
        }
       
        
        return{
            ...state,
             total_item: updatedTotalItem
        }
        case("CART_TOTAL_PRICE"):
        let updatedTotalPrice=0;
        if(state.cart){
            updatedTotalPrice=state.cart.reduce((accum,currEle)=>{
                let {amount, price}=currEle;
                accum=accum+amount*price;
                return accum;
            },0)
            
        }
      
        return{
            ...state,
            total_price: updatedTotalPrice
        }
        default:
            return{
                ...state
            }

    }}

export default cartReducer;

const afterPayment=async({order_id,payment_id})=>{
    const cart=localStorage.getItem("soumirCart");
    const cartArray=JSON.parse(cart);
    const d=new Date();
    try{
        const formattedDate = d.toLocaleDateString('en-US')
        const response=await fetch("hhttps://e-commerce-with-backend-1.onrender.com/api/order/postorder",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email:"soumir1@gmail.com",
                order_id,
                payment_id,
                cart:cartArray,
                date: formattedDate
            })
        })
        console.log(await response.json());

    }catch(err){
        console.log("err");
    }

}

export default afterPayment;
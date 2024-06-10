import afterPayment from "./afterrPayment";
const payment=async(total_price,token,clearCart)=>{
    try{
        console.log(total_price)
        const currency="INR";
        const receiptId="qwsaq1";
        const response=await fetch("https://e-commerce-with-backend-1.onrender.com/api/payment/getproductid",{
            method:"POST",
            body: JSON.stringify({
                amount:total_price,
                currency,
                receipt:receiptId
            }),
            headers:{
                "Content-Type":"application/json"
            }

        })

        const order=await response.json();
       
        var options = {
            "key": "rzp_test_mSQoMYI2h4LRTQ", // Enter the Key ID generated from the Dashboard
            amount:total_price ,// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "A simple store", //your business name
            "description": "Test Transaction",
            "image": "/images/newLogo.png",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
               const body={
                ...response,
               }
               const validateResponse=await fetch("https://e-commerce-with-backend-1.onrender.com/api/payment/validate",{
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    "Content-Type":"application/json"
                }
                }
                )
                const jsonRes=await validateResponse.json();
    
                if(jsonRes.msg==="success"){
                    alert("payment successfull");
                    const order_id=jsonRes.order_id;
                    const payment_id=jsonRes.payment_id;
                    await afterPayment({order_id,payment_id,token});
                    clearCart();
                }
                else{
                    alert("why not successfull")
                }
               
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Soumir duarah", //your customer's name
                "email": "soumir.duarah@example.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    }catch(err){
        console.log("error happened")
    }
}

export default payment;
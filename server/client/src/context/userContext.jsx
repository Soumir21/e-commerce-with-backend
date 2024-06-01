import { createContext, useContext, useState,useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const userContext=createContext();

const UserContextProvider=({children})=>{
   
   const [token,setToken]=useState("");
    

    const LoginInContext=async(user)=>{
         try{
            const response=await fetch("https://e-commerce-with-backend-1.onrender.com/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const data=await response.json();
            
            if(response.ok){
                const theToken=data.token;
                setToken(theToken);
                localStorage.setItem("token",theToken)
                toast.success(data.message);
            }
            else{
                toast.error(data.extraDetails?data.extraDetails:data.message)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    const Logout=()=>{
        
        setToken("");
        localStorage.removeItem("token");
    }
   
    const RegisterInContext=async(user)=>{
        try{
           const response=await fetch("https://e-commerce-with-backend-1.onrender.com/api/auth/register",{
               method:"POST",
               headers:{
                   "Content-Type":"application/json"
               },
               body:JSON.stringify(user)
           })
           const data=await response.json();
           console.log(data);
           if(response.ok){
            const theToken=data.token;
            setToken(theToken);
            toast.success(data.message);
        }
        else{
            toast.error(data.extraDetails?data.extraDetails:data.message)
        }
    }
       catch(err){
           console.log(err)
       }
   }
    return( <userContext.Provider value={{LoginInContext,RegisterInContext,token,Logout}}>
        {children}
    </userContext.Provider>
)}

const useUserContext=()=>{
    return useContext(userContext);
}
export  {UserContextProvider,userContext,useUserContext};

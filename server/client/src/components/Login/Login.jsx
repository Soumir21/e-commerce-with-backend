import React, { useState,useContext, useEffect } from 'react'
import styled from "styled-components";
import { Button } from '../../styles/Button';
import { NavLink } from "react-router-dom";
import {userContext} from "../../context/userContext";
import { useNavigate } from 'react-router-dom';
import { Transition } from '../../styles/Transition';

const Wrapper = styled.section`
  padding: 12rem 0;
  .container{
    padding:4rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  input{
    min-width:30rem;
    text-transform:none;
  }

  .input-field{
    margin:2rem 0;
  }
  Button{
    border-radius:1rem;
  }
  .first-time--login{
    margin:2rem 0;
    

    Button{
        margin:1rem 0;
        background:#cbedf7;
        color:black;
    }
  }
`;

const Login = () => {
  const navigate=useNavigate();
   const [userLogin,setUserLogin]=useState({
    email:"",
    password:""
   })
   const {token,LoginInContext}=useContext(userContext)
  
   const loginChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;

      setUserLogin({
        ...userLogin,
        [name]:value
      })
   }

   const handleLoginSubmit=async(e)=>{
    e.preventDefault();
   
    await LoginInContext(userLogin);
  
   }
   useEffect(() => {
    // console.log("Token updated:", token);
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Wrapper>
        <div className='container'>
        <div className='grid grid-two-column'>
            <div>
                <img src="images/login.jpg" />
            </div>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className='input-field'>
                    <label htmlFor='email'><h3>Email: </h3></label>
                    <input type='email' name='email' placeholder='email' value={userLogin.email} onChange={loginChange}></input>
                    </div>
                    
                    <div className='input-field'>
                    <label htmlFor='password'><h3>Passwod: </h3></label>
                    <input type='password' name='password' placeholder='password'  value={userLogin.password} onChange={loginChange}></input>
                    </div>

                    <Button type='submit'>
                        Login
                    </Button>
                   
                </form>
                <div className='first-time--login'>
                <p>First time login?</p>
               
                    <NavLink to="/register">
                        <Button>
                        Create an account
                        </Button>
                     
                    </NavLink>
             
                </div>
                
            </div>
        </div>
          
        </div>
       
    </Wrapper>
  )
}

export default Transition(Login)
import React,{useState,useContext,useEffect} from 'react'
import styled from "styled-components";
import { Button } from '../../styles/Button';
import {userContext} from "../../context/userContext";
import { useNavigate } from 'react-router-dom';
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
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
`;

export const Register = () => {
  const navigate=useNavigate();
  const [userLogin,setUserLogin]=useState({
    email:"",
    password:"",
    phone:"",
    username:"",
   })
   const {token,RegisterInContext}=useContext(userContext)

   const registeChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;

      setUserLogin({
        ...userLogin,
        [name]:value
      })
   }

   const handleRegisterSubmit=(e)=>{
    e.preventDefault();
    console.log(userLogin);
    RegisterInContext(userLogin)
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
                <h2>Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                     <div className='input-field'>
                    <label htmlFor='username'><h3>Use name: </h3></label>
                    <input type='username' name='username' placeholder='Use name' onChange={registeChange}></input>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='email'><h3>Email: </h3></label>
                    <input type='email' name='email' placeholder='email' onChange={registeChange}></input>
                    </div>
                    
                    <div className='input-field'>
                    <label htmlFor='password'><h3>Passwod: </h3></label>
                    <input type='password' name='password' placeholder='password' onChange={registeChange}></input>
                    </div>

                    <div className='input-field'>
                    <label htmlFor='phone'><h3>Phone: </h3></label>
                    <input type='phone' name='phone' placeholder='phone' onChange={registeChange}></input>
                    </div>

                    <Button type='submit'>
                        Register
                    </Button>
                   
                </form>
                
            </div>
        </div>
          
        </div>
       
    </Wrapper>
  )
}

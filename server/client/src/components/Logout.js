import React, { useContext, useEffect } from 'react'
import {userContext} from "../context/userContext";
import { useNavigate,NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import styled from "styled-components";
import { IoMdHappy } from "react-icons/io";
export const Logout = () => {
    const {Logout} = useContext(userContext);
     const navigate=useNavigate();
      useEffect(()=>{
          Logout();
        
        },[])
 return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>Hey There!</h2>
          <h3>You logged out successfully </h3>
          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
          <NavLink to="/login">
            <Button>Login again</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    div>*{
      margin:3rem;
    }
    .icon{
      font-size:3rem;
      color:violet;
    }
${'' /* 
    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    } */}
  }
`;

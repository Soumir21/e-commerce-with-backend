import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import Product from "./Product";
import TrackVisibility from 'react-on-screen';
import "animate.css"
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
 
  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Wrapper className="section">
     <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animate__animated animate__slideInUp":""}>
                <div className="container">
                    <div className="intro-data">Check Now!</div>
                    <div className="common-heading">Our Feature Services</div>
                    <div className="grid grid-three-column">
                      {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                      })}
                </div>
              </div>
                </div>}

                </TrackVisibility>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
      transform: scale(1.2);
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

`;

export default FeatureProduct;

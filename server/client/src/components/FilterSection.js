import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import {Button} from "../styles/Button";
import {FaCheck} from "react-icons/fa";
const FilterSection=()=>{
    const {updateFilterValue, filters:{text,color,maxPrice,minPrice,price},all_products, clearFilters} = useFilterContext();
   
    const findUniqueCategory=(products,property)=>{
      //console.log(products);
      const tempProduct=products.map((currEle)=>{
        return currEle[property];
      })
      return tempProduct;
    }
    
    let uniqueCategory= findUniqueCategory(all_products,"category");
    uniqueCategory=["All",...new Set(uniqueCategory)];
    
    let uniqueCompany =findUniqueCategory(all_products,"company");
    uniqueCompany=["All", ...new Set(uniqueCompany)];
   
    let uniqueColor= findUniqueCategory(all_products,"colors");
    uniqueColor = ["All", ...new Set(uniqueColor.flat())];
  
return <Wrapper>
        <div className="filter-search">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="text"  placeholder="Search" value={text} onChange={updateFilterValue}/>
        </form>
        <div className="filter-category">
        <h3>Category</h3>
          <div>
            {uniqueCategory.map((currEle, index)=>{
              return <button type="button" id={index} name="category" value={currEle} onClick={updateFilterValue}>{currEle}</button>
            })}
          </div>
        </div>
        <div className="filter-company">
            <h3> company</h3>
      
        <form action="#" >
          <label htmlFor="sort">
            <select name="company" className="filter-company--select" onClick={updateFilterValue}>
              {uniqueCompany.map((currEle,index)=>{
                return   <option value={currEle} key={index}>{currEle}</option>
              })}
            </select>
            </label>
        </form>
        </div>
        <div className="filter-colors colors">
         <h3>Colors</h3>
         <div className="filter-color-style">
         {uniqueColor.map((currEle, index)=>{
                if(currEle==="All"){
                  return <button type="button" key={index} name="color" value={currEle}  onClick={updateFilterValue} className="color-all--style">All </button>
                }
                  return <button type="button" key={index} name="color" value={currEle} style={{background:currEle}} onClick={updateFilterValue} 
                  className={currEle===color?"btnStyle active checkStyle":"btnStyle"}>{currEle===color?<FaCheck className="checkStyle"/>:null}</button>
              })}
         </div>         
        </div>
        <div className="filter_price">
              <h3>Price</h3>
              <p>{<FormatPrice price={price} />}</p>
             
              <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
        </div>
        <div className="filter-clear">
          <Button className="btn" onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
        </div>
    
    </Wrapper>
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
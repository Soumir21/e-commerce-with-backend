import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";

const FilterContext= createContext();
const initialState = {
    filter_products: [],
    all_products: [],
     grid_view: true,
    sorting_value: "lowest",
    filters:{
        text: "",
        category:"All",
        company: "All",
        color: "All",
        maxPrice:0,
        minPrice:0,
        price:0,
    }, 
    
  };
export const FilterContextProvider=({children})=>{

    const {products}=useProductContext();
   
    
    const [state, dispatch]= useReducer(reducer, initialState);

    
    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products]);
    
    
    const updateFilterValue=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
         dispatch({type:"SET_FILTER", payload:{name, value}})
    }

   const clearFilters=()=>{
    return dispatch({type: "CLEAR_FILTERS"})
   }
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
      };
  
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS", payload:products})
    },[state.sorting_value]);

    useEffect(()=>{
        dispatch({type:"SET_SEARCH",payload:products})},[state.filters,products])
    
    const setListView=()=>{
        return dispatch({type: "SET_LIST_VIEW"})
    }

    const sorting=(event)=>{
        const userValue= event.target.value;
        return dispatch({type: "SET_SORTING_VALUE", payload:userValue})
    }

        return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>{children}</FilterContext.Provider>
    }

    export const useFilterContext=()=>{
        return useContext(FilterContext);
    }
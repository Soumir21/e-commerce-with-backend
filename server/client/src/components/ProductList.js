import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./gridView";
import ListView from "./LsitView";
const ProductsList=()=>{
    const {filter_products, grid_view}=useFilterContext();
    
    if(grid_view){
        return <GridView  products={filter_products}/>
    }
    else{
        return <ListView products={filter_products}/>
    }
}

export default ProductsList
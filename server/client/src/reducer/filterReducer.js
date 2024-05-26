
const filterReducer = (state, action) => {
  


    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        const priceArray= action.payload.map((currEle)=>currEle.price);
        const  maxPrice = Math.max(...priceArray);
        const minPrice=Math.min(...priceArray);
      
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filters:{
            ...state.filters,
            maxPrice:maxPrice,
            minPrice:minPrice,
            price: maxPrice
          }
        };
      case "SET_GRID_VIEW":
         return{
        ...state,
        grid_view: true
      }

      case "SET_LIST_VIEW":
        return{
          ...state,
          grid_view: false
        }
      case "SET_SORTING_VALUE":
        // let userSortValue = document.getElementById("sort");
        // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        return{
          ...state,
          sorting_value: action.payload
        }
      case "SORTING_PRODUCTS":
       
        let tempProduct;

        const {filter_products}= state;
        let toBeSorted= [...filter_products];
        
          tempProduct=toBeSorted.sort((a,b)=>{
            if(state.sorting_value==="a-z"){
              return a.name.localeCompare(b.name);
            }
            if(state.sorting_value==="z-a"){
              return b.name.localeCompare(a.name);
            }
            if(state.sorting_value==="lowest"){
              return a.price-b.price;
            }
            if(state.sorting_value==="highest"){
              return b.price-a.price;
            }
            return  tempProduct
          
          })
          return{
            ...state,
            filter_products: tempProduct
           
          }

        case "SET_FILTER":
          const {name,value} = action.payload;
          return {
            ...state,
            filters: {
              ...state.filters,
              [name]: value,
            },
          };

        case "SET_SEARCH":
          
          let findTheProducts=[...action.payload];
         
          const {text, category, company, color, price}=state.filters;
        
          if(text){
          findTheProducts=findTheProducts.filter((currEle)=>{
            return currEle.name.toLowerCase().includes(text);
          })}

          if(category!== "All"){
             
              findTheProducts=findTheProducts.filter((currEle)=>{
                return currEle.category.toLowerCase().includes(category);
            })
            }
          if(company!=="All"){
            
            findTheProducts=findTheProducts.filter((currEle)=>{
              return currEle.company.toLowerCase().includes(company);
          })}
          if(color!=="All"){
          
            findTheProducts=findTheProducts.filter((currEle)=>{
              return currEle.colors.includes(color);
          })}   
              
         
          if (price!==6000000) {
            
            findTheProducts = findTheProducts.filter(
              (curElem) => curElem.price <= price
            );
          }
          return{
            ...state,
            filter_products: findTheProducts
          }
        case "CLEAR_FILTERS":
          return {
            ...state,
            filters: {...state.filters,
              text: "",
              category:"All",
              company: "All",
              color: "All",
              maxPrice:state.filters.maxPrice,
              minPrice:state.filters.minPrice,
              price:state.filters.maxPrice,
          }
        }
      default:
        return state;
    }
  };
  
  export default filterReducer;
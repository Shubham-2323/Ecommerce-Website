// adding cart

import Products from "../../components/Products"
import Products1 from "../../components/Products1"

export const addcart = (product)=>{

return{

    type:"ADDITEM", 
    payload : product


}

}

// deleting item from cart


export const delCart =(product)=>{

return{

    type:"DELITEM",
    payload :product

}

}
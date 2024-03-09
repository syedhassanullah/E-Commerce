import React from "react";
import CallUser from "./CallUser";
import ProductDetailState from "./Context/ProductDetailState";


const Context =()=>{
    return(
        <>
        <ProductDetailState>
            <CallUser/>
        </ProductDetailState>
        </>
    )
}

export default Context;
import React from "react";
import CallUser from "./CallUser";
import UserState from "./Context/UserState";
import ProductDetailState from "./Context/ProductDetailState";


const Context =()=>{
    return(
        <>
        <UserState>
            <CallUser/>
        </UserState>
        <ProductDetailState>
            <CallUser/>
        </ProductDetailState>
        </>
    )
}

export default Context;
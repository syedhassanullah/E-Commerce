import React from "react";
import UserContext from "./UserContext";


const UserState = (props) =>{

    const UserDetail ={
        name: "Hassan",
        fname: "khan",
        address: "House # xyz",
    };

    return(
        <>
        <UserContext.Provider value={UserDetail}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}

export default UserState;
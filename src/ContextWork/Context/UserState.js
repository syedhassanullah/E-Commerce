import React, { useState } from "react";
import UserContext from "./UserContext";


const UserState = (props) =>{
    
    const [UserDetail,SetUserDetail] = useState({
        name: "Hassan",
        password: " "
    });
    
    
    return(
        <>
        <UserContext.Provider value={{UserDetail,SetUserDetail}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}

export default UserState;
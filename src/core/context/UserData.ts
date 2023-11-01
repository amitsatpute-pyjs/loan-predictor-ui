import React from "react";

export const userDataContext  = {
    name:"",
    contact:"",
    Address:""
}

export const UserDataContext = React.createContext(userDataContext);
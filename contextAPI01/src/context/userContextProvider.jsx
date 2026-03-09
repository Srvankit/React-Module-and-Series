import React from "react";
import userContext from "./userContext";

const userContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)
    return(
        <userContextProvider.Provider>
        {children}
        </userContextProvider.Provider>
    )
}

export default userContextProvider;
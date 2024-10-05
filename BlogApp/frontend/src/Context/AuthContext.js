import { createContext, useState } from "react"

export const CreateContext = createContext()
function AuthContext ({children}){
    
    const [AuthDetails,setAuthDetails]= useState({})  
    
    return(
        <CreateContext.Provider value={{AuthDetails,setAuthDetails}}>
           {children}
        </CreateContext.Provider>
    )
}

export default AuthContext
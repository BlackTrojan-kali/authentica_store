import { useForm } from "@inertiajs/react";
import { createContext, useState } from "react";

export const AuthContext = createContext(
    
);

export function AuthContextProvider ({children}){
    const [user,setUser] = useState(null);
    

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
    
}
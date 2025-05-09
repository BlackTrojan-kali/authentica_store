import { useForm } from "@inertiajs/react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({children}){
    const [user,setUser] = useState(null);
    
    const register = async(user)=>{

    };
    const logout = () =>{
        
    }
    return(
        <AuthContext.Provider value={{user,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}
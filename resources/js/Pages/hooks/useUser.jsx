import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useUser(){
    const context = useContext(AuthContext);
    if(!context) throw new Error("the useUse hook should be used under an AuthContextProvider");
    return context;
}
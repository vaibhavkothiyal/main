import { createContext, useState } from "react";
export const loginContext=createContext();

export const LoginContextProvider=({children})=>{
    const [sts,setsts]=useState(false);
    
    const SetLoginStatus=()=>{
        if(sts){
            setsts(false);
        }else{
            setsts(true);
        }
    }

    return <loginContext.Provider value={{sts,SetLoginStatus}}>{children}
    </loginContext.Provider>
}
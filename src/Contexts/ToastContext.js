import { createContext,useState,useContext } from "react";  
import CustomizedSnackbars from "../SnakBar";


export const ToastContext = createContext({})
export const ToastProvider = ({children})=>{

    const [open, setOpen] = useState(false);
    let [msg , setMsg] = useState("") 
        function showBar(x){
            setOpen(true);
            setMsg(x)
            setTimeout(()=>{    
                setOpen(false)
            },2000)
        };
    return (
        <ToastContext.Provider value={{showBar}}>
            <CustomizedSnackbars open ={open}  msg={msg}/>
            {children}
        </ToastContext.Provider >
    )
}
// export const useToast = ()=>{
//     return useContext(ToastContext)};
// export const useToast = useContext(ToastContext) 
export function useToast(){
    return useContext(ToastContext) 
}
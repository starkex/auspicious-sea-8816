import { createContext, useReducer } from "react";

export const Appcontext = createContext();

const initState = {
    isAuth:true
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'Login_success':{
            return {
                isAuth:true
            }
        }
            
        case 'Login_Failue':{
            return {
                isAuth:false
            }
        }
        default:{
            return state;
        }
    }
}

const AppContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initState);

    <Appcontext.Provider value={{state, dispatch}}>
        {children}
    </Appcontext.Provider>
} 

export {AppContextProvider};
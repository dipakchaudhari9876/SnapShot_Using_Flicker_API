import React, { useReducer } from "react";
import { createContext } from "react";

const InitialState = {
    arr:[],
    text:''
}

const AppReducer =(state,action)=>{
    switch(action.type) {

        case('Search'):
        console.log(action.data)
        console.log(action.text)
            return {
                ...state,
                arr:action.data,
                text:action.text
            }
        
        default:
            return state
    }


}


export const AppContext = createContext()

const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(AppReducer,InitialState)
    return(
        <AppContext.Provider value={{
            arr:state.arr,
            text:state.text,
            dispatch
            }}>
            {children}

        </AppContext.Provider>
    )

}
export default AppProvider
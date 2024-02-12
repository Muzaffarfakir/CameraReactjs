import React, { createContext, useReducer } from "react";
import SinglepageView from "./SinglePageView";
import App from "./App";
import Navbar from "./Navbar";
let cc=createContext();
export {cc};

function reducer(state,action){
    switch(action.type){
        case'view':
        return{
            s:action.s
        }
        default :
        return state;
    }

}


export default function Context(){
    let intailValue=0;
    let [state,dispatch]=useReducer(reducer,intailValue)


    return(
        <>
        <cc.Provider value={{state,dispatch}}>
            {/* <SinglepageView/>
            <App/> */}
            <Navbar/>

        </cc.Provider>
        
        </>
    )
}
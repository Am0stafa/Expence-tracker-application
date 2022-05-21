//! this is where we are going to create our context AND as it is a small application we are going to have one global state but in general we create a context for each component for example profile context and so on

import {createContext,useReducer} from 'react';
import AppReducer from './AppReducer'


//? initials state 
const initialState = {
    transaction: []
}

//? create context 
export const GlobalContext = createContext(initialState)

//! in order for other components to have access to this global state we need to have a provider so that we can wrap all the components with a provider component

//! and since we are wrapping all the components therefor all the components wrapped will be children 


//? Provider component
export const GlobalProvider = ({children}) => {
    //? here is were we are going to use the useReducer

    const [state,dispatch] = useReducer(AppReducer, initialState);
    
    //! Actions
    function deleteTransition(id){
      //? dispatch bet3mel send lel action
      dispatch({
        //? awl 7aga the action to execute
        type:'DELETE_TRANSACTION',
        //? tany 7aga payload: which is any data that we want to send
        payload: id
      })
    
    }
    
    function addTransition(transaction){
      //? dispatch bet3mel send lel action
      dispatch({
        //? awl 7aga the action to execute
        type:'ADD_TRANSACTION',
        //? tany 7aga payload: which is any data that we want to send
        payload: transaction
      })
    
    }
    
  return (
    <GlobalContext.Provider value={{transactions:state.transaction,deleteTransition,addTransition}}>
        {children}
    </GlobalContext.Provider>
  )
}
//! now we can use this transaction from any where using useContext
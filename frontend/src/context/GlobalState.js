//! this is where we are going to create our context AND as it is a small application we are going to have one global state but in general we create a context for each component for example profile context and so on

import {createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';

//? initials state 
const initialState = {
    transaction: [],
    error: null,
    loading: true
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
    async function deleteTransition(id){
    
      try {
      //! first delete from the server
        axios.delete(`/api/v1/transaction/${id}`)
      
      
      //! then delete from the client
      
        //? dispatch bet3mel send lel action
        dispatch({
          //? awl 7aga the action to execute
          type:'DELETE_TRANSACTION',
          //? tany 7aga payload: which is any data that we want to send
          payload: id
        })  
      } catch (error) {
        dispatch({
          type:'TRANSACTION_ERROR',
          payload: err.response.data.error
        })
      }
    
 
    }
    
    async function addTransition(transaction){
      //^ since we are sending data using axios we need config type
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      try {
      //? first update the data base
        const res = await axios.post('/api/v1/transaction', transaction, config);
      //? update the local state
        dispatch({
          type: 'ADD_TRANSACTION',
          //^ finally we will pass it the new data that have been added to the database
          payload: res.data.data
        });
      } catch (err) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.res.data.error
        });
      }
    }
    
    async function getTransactions(){
      try {
        const response = await axios.get('/api/v1/transaction')
        //? it start as an empty array we make a request and then we want to send the response down through the state
        
        dispatch({
          type:'GET_TRANSACTION',
          payload: response.data.data
        })
      } catch (err) {
        dispatch({
          type:'TRANSACTION_ERROR',
          payload: err.response.data.error
        })
      }
    
    }
    
  return (
    <GlobalContext.Provider value={{transactions:state.transaction,error:state.error,loading:state.loading,deleteTransition,addTransition,getTransactions}}>
        {children}
    </GlobalContext.Provider>
  )
}
//! now we can use this transaction from any where using useContext
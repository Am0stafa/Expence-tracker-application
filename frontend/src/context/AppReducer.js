//? this is basically where we specify the application state changes in response to certain actions

//! reducer is a way to change a state and send it down to a component. WE can not change it we have to create a new state and send it down to change the reference making it actually rerender
export default (state, action) => { 

    switch (action.type) {
        case'DELETE_TRANSACTION':
            return {
                //? pass the previous state
                ...state,
                //? send all the transactions except the one that was deleted
                transaction: state.transaction.filter(transaction => transaction._id !== action.payload) 
            }
        case'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [...state.transaction,action.payload,]
            }
            
        case 'GET_TRANSACTION':
            return {
                ...state,
                loading: false,
                transaction: action.payload
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state
    }

}
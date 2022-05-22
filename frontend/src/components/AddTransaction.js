import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text , setText] = useState("");
    const [amount,setAmount] = useState(0)
    const {addTransition} = useContext(GlobalContext)
  
    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        text,
        amount: +amount
      }
  
      addTransition(newTransaction);
    }
  return (
    <div>
        
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label 
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value) } placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
        
    </div>
  )
}

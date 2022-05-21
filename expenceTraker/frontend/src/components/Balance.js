import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  
  //? first we will get all the amounts in an array
  const amount =transactions.map(t=>t.amount)
  //? secondly reduce the amount to calculate the total after that change it to two decimal places
  const total = amount.reduce((acc,a)=>acc+=a,0).toFixed(2);

  return (
    <div>
        <h4>Your Balance</h4>
        <h1 className="balance">${total}</h1>   
    </div>
  )
}

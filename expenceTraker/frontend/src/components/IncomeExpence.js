import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'



export const IncomeExpence = () => {

  const {transactions} = useContext(GlobalContext)
  const amount =transactions.map(t=>t.amount)

  //? to add all the income we will filer by getting all the positive numbers and then adding them all up
  
  const income = amount.filter(el => el > 0).reduce((acc,el) => acc+=el,0)
  const expense = amount.filter(el => el < 0).reduce((acc,el) => acc+=el,0) *-1

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
  </div>
  )
}

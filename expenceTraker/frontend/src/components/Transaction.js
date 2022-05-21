import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({t}) => {
    const sign = t.amount < 0 ? '-' : '+';
    const {deleteTransition} = useContext(GlobalContext)

    
  return (
    <div>
        <li className={t.amount < 0 ? 'minus':'plus'}>
        {t.text} <span>{sign}${Math.abs(t.amount)}</span><button className="delete-btn" onClick={() => deleteTransition(t.id)}>X</button>
       </li>
    </div>
  )
}

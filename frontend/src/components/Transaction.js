import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({t}) => {
    const sign = t.amount < 0 ? '-' : '+';
    const {deleteTransition} = useContext(GlobalContext)

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
  return (
    <div>
        <li className={t.amount < 0 ? 'minus':'plus'}>
        {t.text} <span>{sign}${numberWithCommas(Math.abs(t.amount))}</span><button className="delete-btn" onClick={() => deleteTransition(t._id)}>X</button>
       </li>
    </div>
  )
}

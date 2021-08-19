import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card.component'

export const CardList = (props) => (

<div className="card-list"> 
{  props.monister.map((m)=>(   
      <Card key={m.id} monister ={m}/>
    )) }
  
</div> 

);
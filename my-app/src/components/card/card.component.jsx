import React from 'react';
import './card.style.css'


export const Card = (props) => ( 

<div className="card-container">
<img alt="wa7sh" src={`https://robohash.org/${props.monister.id}?set=set2`}/>
<h1>{props.monister.name}</h1>
<p>{props.monister.email}</p>
</div>

);
 
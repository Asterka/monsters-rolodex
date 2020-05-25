import React from "react"
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const CardList = props => (
  <div className="card-list"> 
    {props.users.filter(user => {return user.name.toLowerCase().includes(props.str)}).map(
        user => (<Card key={user.id} user={user}/>)
    )}
    </div>
);
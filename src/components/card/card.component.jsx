import React from "react";

import "./card.styles.css"

export const Card = props =>(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.user.id}`}></img>
        <h1>{props.user.name}</h1>
    </div>
);
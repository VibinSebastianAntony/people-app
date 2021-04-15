import React from 'react';
import '../card/card.styles.css';

export const Card = (props) => {
    return (
        <div className='Card'>
            <img src={`https://robohash.org/${props.name.id}?set=set1&size=180x180`} alt="monster"/>
            <h2>{props.name.name}</h2>
            <p>{props.name.email}</p>
        </div>
    )
}

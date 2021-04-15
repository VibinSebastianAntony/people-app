import React from 'react';
import { Card } from '../card/card.components';
import './card-list.styles.css'

export const CardList = (props) => {
    return (
        
        <div className='cardList'>
            {props.name.map(monsters =>
                <Card key={monsters.id} name={monsters}></Card>
            )}
        </div>


    )
}

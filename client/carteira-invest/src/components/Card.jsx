import styles from './Card.module.css';
import React, { useState, useEffect } from 'react';
import FormDialog from './dialog/dialog'

export function Card(props){
    
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true)
    }

    return (
        <div className={styles.Card}>
            <FormDialog 
                open={open} 
                setOpen={setOpen} 
                name={props.name} 
                cost={props.cost} 
                category={props.category}
                id={props.id}
            />
            <div key={props.id} onClick={()=> handleClickCard()}>
                <p>{props.name}</p>
                <div>
                    <span>{props.cost}</span>
                    <span>{props.category}</span>
                </div>
            </div>
        </div>
    )
}
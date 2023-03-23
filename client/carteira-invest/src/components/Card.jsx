import styles from './Card.module.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export function Card(){
    const [listActives, setListActives] = useState();

    useEffect(()=>{
        Axios.get("http://localhost:5174/getCards").then((res) =>{
            setListActives(res.data)
        })
    }, [])
    return(
        <div>
            <h3>Cards</h3>
            {
            typeof listActives !== "undefined" &&
            listActives.map((value) =>{
                return <div key={value.id}>
                    <p>{value.name}</p>
                    <div>
                        <span>{value.cost}</span>
                        <span>{value.category}</span>
                    </div>
                </div>
            })
            }
        </div>
    )
}
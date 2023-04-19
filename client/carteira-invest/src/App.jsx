import { Header } from './components/Header';
import { Form } from './components/Form';
import { Card } from "./components/Card";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styles from './App.module.css';
import './global.css'

export function App() {
	const [listActives, setListActives] = useState();

	useEffect(()=>{
        Axios.get("http://localhost:5174/getCards").then((res) =>{
            setListActives(res.data)
        })
    }, [])
  return (
    <div>
		<Header />
		<div className={styles.wrapper}>
			<h1>Carteira</h1>
		</div>
		<Form className={styles.wrapper}></Form>
		{
			listActives &&
			listActives.map((value)=>{
				return (
					<Card 
						key={value.id} 
						listCard={listActives} 
						setListCard={setListActives}
						id={value.id}
						name={value.name}
						cost={value.cost}
						category={value.category}
					></Card>
				)
			})
		}
	</div>
  )
}

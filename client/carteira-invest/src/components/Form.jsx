import React, {useState} from "react"
import styles from './Form.module.css';
import Axios from 'axios';

export function Form(){
	const [values, setValues] = useState();

	const handleChangeValues = value => {
		setValues(preValue=>({
			...preValue,
			[value.target.name]: value.target.value
		}))
	}

	const handleClickButton = () =>{
		Axios.post("http://localhost:5174/register", {
			name: values.name,
			cost: values.cost,
			category: values.category
		}).then(()=>{
			setListActives([])
		})
	}

	return (
		<div className={styles.form}>
			<h2>Cadastro de ativo</h2>
			<div className={styles.content}>
				<form>
					<div className={styles.form_group}>
						<input
							type="text"
							name="name"
							placeholder="Nome"
							onChange={handleChangeValues}
						/>
						<label>Nome</label>
					</div>
					<div className={styles.form_group}>
						<input
							type="text"
							placeholder="Preço"
							name="cost"
							onChange={handleChangeValues}
						/>
						<label>Preço</label>
					</div>
					<div className={styles.form_group}>
						<input
							type="text"
							placeholder="Categoria"
							name="category"
							onChange={handleChangeValues}
						/>
						<label>Categoria</label>
					</div>
					<button
						className="register-button"
						onClick={()=>handleClickButton()}
					>
						Cadastrar
					</button>
				</form>
			</div>
			{}
		</div>
	)
}

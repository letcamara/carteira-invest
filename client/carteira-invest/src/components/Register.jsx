import styles from './Register.module.css';

export function Register(){
	return (
		<div className={styles.register}>
			<h2>Cadastro</h2>
			<form>
				<input
					type='text'
					placeholder='Name'

				/>
			</form>
		</div>
	)
}

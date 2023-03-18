import styles from './Header.module.css'
import walletLogo from '../assets/wallet.png';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={walletLogo} alt='Logotipo do wallet' />
		</header>
	);
}

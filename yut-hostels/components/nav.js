import classes from '../styles/nav.module.scss';
import Link from 'next/link';

export default function Nav({ children }) {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<div className={classes.navLogo}>Уют</div>
					<div className={classes.navMenu}>
						<Link href='/'><a>список хостелов</a></Link>
						<Link href='/'><a>о нас</a></Link>
					</div>
				</nav>
				<main>
					{children}
				</main>
			</div>
		</div>
	)
}
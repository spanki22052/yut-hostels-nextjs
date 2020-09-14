import classes from '../styles/searchBar.module.scss';

export default function SearchBar() {
	return (
		<div className={classes.searchBarBlock}>
			<input className={classes.searchBar} placeholder='Введите название хостела'></input>
			<div className={classes.searchIconBlock}>
				<img className={classes.searchIcon} src='/svg/Vector.svg' />
			</div>
		</div>
	)
}
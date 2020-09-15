import classes from "../styles/cards.module.scss";

export default function Card() {
	return (
		<>
			<div className={classes.cardBlock}>
				<div className={classes.cardTitle}>Диско</div>
				<div className={classes.cardSupTitle}>Количество свободных мест</div>
				<div className={classes.cardProgressBar}>
					<div className={classes.Progress}></div>
				</div>
				<div>75%</div>
				<img className={classes.icon} src="/svg/play.svg" />
			</div>
		</>
	);
}

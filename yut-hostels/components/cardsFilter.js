import SearchBar from "./searchBar";

import "../styles/cardsFilter.module.scss";
import classes from "../styles/cardsFilter.module.scss";

export default function CardsFilter({ overflow, height }) {
	console.log(overflow);
	return (
		<>
			<ul className={classes.cardList}>
				<li className={classes.activeCard}>Популярные</li>
				<li>Новые</li>
				<li>По ближе к метро</li>
			</ul>
			<div className={classes.cardItemBlock} style={{ overflow: overflow, height: height }}>
				<div className={classes.cardItem}>
					<img className={classes.cardItemSvg} src="/svg/sleep.svg" />
					<div className={classes.cardItemContent}>
						<div className={classes.cardItemTitle}>Диско</div>
						<div className={classes.cardItemSuptitle}>
							Отличный, недорогой хостел в неплохом районе! Отличный, недорогой
							хостел в неплохом районе!
            		</div>
						<div className={classes.cardItemInfo}>
							<div className={classes.cardItemLocation}>м. Первомайское</div>
							<div className={classes.cardItemPrice}>от 220р</div>
						</div>
					</div>
				</div>
				<div className={classes.cardItem}>
					<img className={classes.cardItemSvg} src="/svg/bed.svg" />
					<div className={classes.cardItemContent}>
						<div className={classes.cardItemTitle}>Кино</div>
						<div className={classes.cardItemSuptitle}>
							Отличный, недорогой хостел в неплохом районе! Отличный, недорогой
							хостел в неплохом районе!
            		</div>
						<div className={classes.cardItemInfo}>
							<div className={classes.cardItemLocation}>м. Баррикадная</div>
							<div className={classes.cardItemPrice}>от 330р</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

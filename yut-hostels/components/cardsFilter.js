import HostelCard from "./hostelCard";
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

				<HostelCard href="/hostel" title="Диско" description="Отличный, недорогой хостел в неплохом районе! Отличный, недорогой
				хостел в неплохом районе!" station="м. Первомайское" price="от 220р"/>

				<HostelCard href="/hostel" title="Кино" description="Отличный, недорогой хостел в неплохом районе! Отличный, недорогой
				хостел в неплохом районе!" station="м. Баррикадная" price="от 330р"/>

			</div>
		</>
	);
}

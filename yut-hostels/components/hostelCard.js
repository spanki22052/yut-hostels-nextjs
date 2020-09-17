import Link from "next/link";
import classes from "../styles/cardsFilter.module.scss";

export default function HostelCard({href, title, description, station, price}){

  return (
	<Link href={href}>
		<div className={classes.cardItem}>
			<img className={classes.cardItemSvg} src="/svg/sleep.svg" />
			<div className={classes.cardItemContent}>
				<div className={classes.cardItemTitle}>{title}</div>
				<div className={classes.cardItemSuptitle}>{description}</div>
				<div className={classes.cardItemInfo}>
					<div className={classes.cardItemLocation}>{station}</div>
					<div className={classes.cardItemPrice}>{price}</div>
				</div>
			</div>
		</div>
	</Link>
  );
}

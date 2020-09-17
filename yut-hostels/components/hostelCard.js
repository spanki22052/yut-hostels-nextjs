import Link from "next/link";
import classes from "../styles/cardsFilter.module.scss";

export default function HostelCard({ infoObject }) {

	return (
		<>
			{Object.keys(infoObject).length > 0 && (
				<Link href='/'>
					<div className={classes.cardItem}>
						<img className={classes.cardItemSvg} src="/svg/sleep.svg" />
						<div className={classes.cardItemContent}>
							<div className={classes.cardItemTitle}>{infoObject.title}</div>
							<div className={classes.cardItemSuptitle}>{infoObject.description}</div>
							<div className={classes.cardItemInfo}>
								<div className={classes.cardItemLocation}>м. {infoObject.metro[0]}</div>
								<div className={classes.cardItemPrice}>{infoObject.pricelist} р.</div>
							</div>
						</div>
					</div>
				</Link>)}
		</>
	);
}

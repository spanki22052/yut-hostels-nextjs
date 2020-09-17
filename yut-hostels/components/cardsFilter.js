import Link from "next/link";
import "../styles/cardsFilter.module.scss";
import classes from "../styles/cardsFilter.module.scss";
import React, { useEffect, useState } from "react";
import firebase from "./firebaseDB";

export default function CardsFilter({ overflow, height }) {
	const [infoObject, setObject] = useState({});
	const [infoList, setList] = useState({});


	useEffect(() => {
		firebase
			.firestore()
			.collection("hostels")
			.doc("hostelsObject")
			.get()
			.then((info) => setObject(info.data().hostels));

		firebase
			.firestore()
			.collection("hostels")
			.doc("hostelsList")
			.get()
			.then((info) => setList(info.data().hostels));
	}, []);
	return (
		<>
			<ul className={classes.cardList}>
				<li className={classes.activeCard}>Популярные</li>
				<li>Новые</li>
				<li>По ближе к метро</li>
			</ul>
			<div className={classes.cardItemBlock} style={{ overflow: overflow, height: height }}>

				{infoList.length > 0 &&
					infoList.map((el, index) => {
						return (
							<div key={index} className={classes.cardItem}>
								<img className={classes.cardItemSvg} src="/svg/sleep.svg" />
								<div className={classes.cardItemContent}>
									<div className={classes.cardItemTitle}>{infoObject[el].title}</div>
									<div className={classes.cardItemSuptitle}>{infoObject[el].description}</div>
									<div className={classes.cardItemInfo}>
										<div className={classes.cardItemLocation}>м. {infoObject[el].metro}</div>
										<div className={classes.cardItemPrice}>от {infoObject[el].pricelist[0]} р</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
}

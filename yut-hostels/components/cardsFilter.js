import HostelCard from "./hostelCard";
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
					infoList.map((element, index) => {
						return (
							<HostelCard key={index} infoObject={infoObject[element]} />
						);
					})}
			</div>
		</>
	);
}

import classes from '../styles/aboutus.module.scss';
import React, { useEffect, useState } from "react";
import firebase from "./firebaseDB";
export default function aboutUsPage() {
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
			<div className={classes.title}>
				О нас
			</div>
			{infoList.length > 0 &&
				infoList.map((element, index) => {
					return (
						<div key={index}>
							<div className={classes.hostelsInfoBlock}>
								<div className={classes.hostelTitle}>Хостел {infoObject[element].title}</div>
								<div>м. {infoObject[element].metro}</div>
								<div>тел: {infoObject[element].phoneNumber} </div>
							</div>
						</div>
					);
				})}
		</>
	)
}
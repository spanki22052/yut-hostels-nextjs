import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./cards";
import classes from "../styles/cardsSlider.module.scss";
import firebase from "./firebaseDB";

export default function SimpleSlider() {
	const [infoObject, setObject] = useState({});
	const [infoList, setList] = useState({});

	// var settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	variableWidth: false,
	// 	centerMode: true,
	// 	swipeToSlide: true,
	// 	touchThreshold: 10,
	// };
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: false

	};

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
		<div className={classes.cardsSlider}>
			<Slider {...settings}>
				{infoList.length > 0 &&
					infoList.map((element, index) => {
						return (
							<div key={index}>
								<Card infoObject={infoObject[element]} />
							</div>
						);
					})}
			</Slider>
		</div>
	);
}

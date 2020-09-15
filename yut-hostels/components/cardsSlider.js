import React from "react";
import Slider from "react-slick";
import Card from "./cards";
import classes from "../styles/cardsSlider.module.scss"

export default class SimpleSlider extends React.Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			centerMode: true,
			swipeToSlide: true,
			touchThreshold: 10,
		};
		return (
			<div className={classes.cardsSlider}>
				<Slider {...settings}>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
				</Slider>
			</div>
		);
	}
}

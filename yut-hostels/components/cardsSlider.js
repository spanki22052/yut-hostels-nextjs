import React from "react";
import Slider from "react-slick";
import Card from "./cards";

export default class SimpleSlider extends React.Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			variableWidth: true,
			centerMode: true
		};
		return (
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
		);
	}
}

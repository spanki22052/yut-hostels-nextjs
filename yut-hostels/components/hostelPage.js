import classes from "../styles/hostelid.module.scss";
import Nav from '../components/nav';
import Slider from "react-slick";



export default function HostelPage() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// variableWidth: true
	};

	return (
		<div className={classes.hostelPage}>
			<div className={classes.hostelMainInfo}>
				<div className={classes.bookingInfo}>
					<div className={classes.reservation}><img src="/svg/reservation.png"></img></div>
					<div className={classes.booking}>Booking<span>.com</span></div>
				</div>
				<div className={classes.hostelInfo}>
					<div className={classes.title}>Хостел “Диско”</div>
					<div className={classes.suptitle}>Отличный, недорогой хостел в неплохом районе! Желающие, встречайте! Хостел лучший из лучших!</div>
					<div className={classes.freePlaces}>Количество свободных мест</div>
					<div className={classes.progressBar}>
						<div
							className={classes.progress}></div>
					</div>
					<div className={classes.procent}>75%</div>
				</div>
			</div>
			<div className={classes.hostelSlider}>
				<Slider {...settings}>
					<div className={classes.sliderItem}>
						<img src="/svg/hostels.png"></img>
					</div>
					<div className={classes.sliderItem}>
						<img src="/svg/hostels.png"></img>
					</div>
					<div className={classes.sliderItem}>
						<img src="/svg/hostels.png"></img>
					</div>
					<div className={classes.sliderItem}>
						<img src="/svg/hostels.png"></img>
					</div>
				</Slider>
			</div>
			<div className={classes.location}>
				<div className={classes.metro}>
					<img className={classes.metroIcon} src="/svg/metro.svg" />
					<div className={classes.hostelLocation}>м. Первомайское</div>
					<div className={classes.stroka}></div>
					<div className={classes.metroLocation}>350м ходьбы</div>
					<div className={classes.metroLocation}>около 5 мин</div>
				</div>
				<div className={classes.phone}>
					<div>Телефон</div>
					<div className={classes.phoneInfo}>
						<img src="/svg/phone.svg" />
						<div>8-977-597-48-12</div>
					</div>
				</div>
			</div>
		</div>
	)

}
import classes from "../styles/hostelid.module.scss";
import Nav from "../components/nav";
import Slider from "react-slick";

export default function HostelPage({ infoObject }) {
	console.log(infoObject);
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
		<>
			{infoObject !== undefined && (
				<div className={classes.hostelPage}>
					<div className={classes.hostelMainInfo}>
						<div className={classes.bookingInfo}>
							<div className={classes.reservation}>
								<img src="/svg/reservation.png"></img>
							</div>
							<div className={classes.booking}>
								Booking<span>.com</span>
							</div>
						</div>
						<div className={classes.hostelInfo}>
							<div className={classes.title}>Хостел “{infoObject.title}”</div>
							<div className={classes.suptitle}>{infoObject.description}</div>
							<div className={classes.freePlaces}>
								Количество свободных мест
              </div>
							<div className={classes.progressBar}>
								<div className={classes.progress}></div>
							</div>
							<div className={classes.procent}>
								{infoObject.peoplePercentage}%
              </div>
						</div>
					</div>
					<div className={classes.hostelSlider}>
						<Slider {...settings}>
							{infoObject.photos.length > 0 &&
								infoObject.photos.map((el, index) => {
									return (
										<div key={index} className={classes.sliderItem}>
											<img src={"/svg/hostels.png"}></img>
										</div>
									);
								})}
						</Slider>
					</div>
					<div className={classes.location}>
						<div className={classes.metro}>
							<img className={classes.metroIcon} src="/svg/metro.svg" />
							<div className={classes.hostelLocation}>
								м. {infoObject.metro}
							</div>
							<div
								className={classes.stroka}
								style={{
									backgroundColor: `#${infoObject.hex}`,
									boxShadow: `0px 0px 6px 1px #${infoObject.hex}`,
								}}
							></div>
							<div className={classes.metroLocation}>350м ходьбы</div>
							<div className={classes.metroLocation}>около 5 мин</div>
						</div>
						<div className={classes.priceInfo}>
							<div className={classes.price}>
								Цена
							</div>
							<div className={classes.priceList}>
								{infoObject.pricelist[0]} р
							</div>
						</div>
						<div className={classes.phone}>
							<div>Телефон</div>
							<div className={classes.phoneInfo}>
								<a className={classes.phoneIcon}
									href={`tel:${infoObject.phoneNumber}`}
									style={{ textDecoration: "none", color: "#988A7A" }}
								>
									<img src="/svg/phone.svg" />
								</a>
								<a className={classes.phoneNum}
									href={`tel:${infoObject.phoneNumber}`}
									style={{ textDecoration: "none", color: "#988A7A" }}
								>
									{infoObject.phoneNumber}
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

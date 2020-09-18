import classes from "../styles/hostelid.module.scss";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import Head from 'next/head';

export default function HostelPage({ infoObject }) {

	const [imgOpen, imgClose] = useState(false);

	console.log(infoObject);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
	};

	return (
		<>
			{infoObject !== undefined && (
				<>
					<Head>
						<title>Хостел {infoObject.title}</title>
						<meta name="description" content={`Отличный, комфортный, уютный хостел у метро ${infoObject.metro}. Мы ждем тебя, дорогой гость!`} />
						<meta name="Keywords" content={`дешевый хостел у метро ${infoObject.metro}, дешевый хостел в районе ${infoObject.metro}, хостел, дешевый, дешевое общежитие у метро ${infoObject.metro}, недорогой хостел у метро ${infoObject.metro}, хостел у метро ${infoObject.metro}, хостел от ${infoObject.pricelist[0]}`} />
					</Head>
					<div className={classes.hostelPage}>
						<div className={classes.hostelMainInfo}>
							<div className={classes.bookingInfo}>
								<div className={classes.reservation}>
									<h1>Адрес</h1>
									<p>{infoObject.adress}</p>
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
									<div
										style={{ width: `${infoObject.peoplePercentage}%` }}
										className={classes.progress}
									></div>
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
												<Zoom
													overlayBgColorEnd='rgba(0, 0, 0, 0.50)'
													zoomMargin={80}
													onZoomChange={5}
													width={100}
												>
													<img width="550px" style={{ objectFit: "cover" }} height="220px" src={`/${el}.jpg`}></img>
												</Zoom>
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
								<div className={classes.price}>Цена</div>
								<div className={classes.priceList}>
									от {infoObject.pricelist[0]} до {infoObject.pricelist[1]} р
              </div>
							</div>
							<div className={classes.phone}>
								<div>Телефон</div>
								<div className={classes.phoneInfo}>
									<a
										className={classes.phoneIcon}
										href={`tel:${infoObject.phoneNumber}`}
										style={{ textDecoration: "none", color: "#988A7A" }}
									>
										<img src="/svg/phone.svg" />
									</a>
									<a
										className={classes.phoneNum}
										href={`tel:${infoObject.phoneNumber}`}
										style={{ textDecoration: "none", color: "#988A7A" }}
									>
										{infoObject.phoneNumber}
									</a>
								</div>
							</div>
						</div>
					</div>
				</>
			)
			}
		</>
	);
}

import classes from "../styles/nav.module.scss";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

export default function Nav({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleClass = () => {

	}
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.nav}>
					<Link href="/">
						<a>
							<div className={classes.navLogo}>
								<span onClick={() => {
									document.querySelector("body").classList.toggle("lock");
									isMenuOpen && setIsMenuOpen(!isMenuOpen);
								}}>Уют</span>
							</div>
						</a>
					</Link>
					<div className={classes.navBurger} style={{ zIndex: "3" }}>
						<HamburgerMenu
							isOpen={isMenuOpen}
							menuClicked={() => {
								setIsMenuOpen(!isMenuOpen);
								document.querySelector("body").classList.toggle("lock");
							}}
							width={25}
							height={20}
							strokeWidth={2}
							rotate={0}
							color="black"
							borderRadius={0}
							animationDuration={0.5}
						/>
					</div>
					<div
						className={
							!isMenuOpen
								? classes.navMenu + " " + classes.active
								: classes.navMenu
						}
					>
						<Link className={"hamb"} href="/hostelslist">
							<a>
								<span onClick={() => { setIsMenuOpen(!isMenuOpen); document.querySelector("body").classList.toggle("lock"); }}>
									список хостелов
                </span>
							</a>
						</Link>
						<Link href="/">
							<a>
								<span onClick={() => { setIsMenuOpen(!isMenuOpen); document.querySelector("body").classList.toggle("lock"); }}>о нас</span>
							</a>
						</Link>
					</div>
				</div>
				<main>{children}</main>
			</div>
		</div>
	);
}

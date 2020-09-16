import classes from "../styles/nav.module.scss";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

export default function Nav({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.nav}>
          <Link href="/">
            <a>
              <div className={classes.navLogo}>Уют</div>
            </a>
          </Link>
          <div className={classes.navBurger} style={{ zIndex: "3" }}>
            <HamburgerMenu
              isOpen={isMenuOpen}
              menuClicked={() => setIsMenuOpen(!isMenuOpen)}
              width={25}
              height={20}
              strokeWidth={1}
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
                : classes.navMenu + " " + classes.active
            }
          >
            <Link className={"hamb"} href="/hostelslist">
              <a>список хостелов</a>
            </Link>
            <Link href="/">
              <a>о нас</a>
            </Link>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}

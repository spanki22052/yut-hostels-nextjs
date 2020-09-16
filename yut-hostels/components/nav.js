import classes from "../styles/nav.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <Link href="/">
            <a>
              <div className={classes.navLogo}>Уют</div>
            </a>
          </Link>
          <div
            className={
              !isMenuOpen
                ? classes.navBurger
                : classes.navBurger + " " + classes.active
            }
            onClick={() =>
              isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
            }
          >
            <span></span>
          </div>
          <div
            className={
              isMenuOpen
                ? classes.navMenu
                : classes.active
            }
          >
            <Link href="/hostelslist">
              <a>список хостелов</a>
            </Link>
            <Link href="/">
              <a>о нас</a>
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
}

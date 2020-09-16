import classes from "../styles/nav.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    console.log(isMenuOpen);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <Link href="/">
            <a>
              <div className={classes.navLogo}>Уют</div>
            </a>
          </Link>
          <div className={classes.navBurger} onClick={handleClick}>
            <span></span>
          </div>
          <div className={classes.navMenu}>
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

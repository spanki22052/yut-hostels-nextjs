import classes from "../styles/cards.module.scss";
import Link from "next/link";

export default function Card({ infoObject, goto }) {
  return (
    <>
      {Object.keys(infoObject).length > 0 && (
        <div className={classes.cardBlock}>
          <div className={classes.cardTitle}>{infoObject.title}</div>
          <div className={classes.cardSupTitle}>Количество свободных мест</div>
          <div className={classes.cardProgressBar}>
            <div
              className={classes.Progress}
              style={{ width: infoObject.peoplePercentage + "%" }}
            ></div>
          </div>
          <div>{infoObject.peoplePercentage}%</div>
          <Link href={goto}>
            <img className={classes.icon} src="/svg/play.svg" />
          </Link>
        </div>
      )}
    </>
  );
}

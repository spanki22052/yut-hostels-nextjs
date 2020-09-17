import classes from "../styles/cards.module.scss";

export default function Card({ infoObject }) {
  console.log(infoObject);
  return (
    <>
      {Object.keys(infoObject).length > 0 && (
        <div className={classes.cardBlock}>
          <div className={classes.cardTitle}>{infoObject.title}</div>
          <div className={classes.cardSupTitle}>Количество свободных мест</div>
          <div className={classes.cardProgressBar}>
            <div className={classes.Progress}></div>
          </div>
          <div>{infoObject.peoplePercentage}%</div>
          <img className={classes.icon} src="/svg/play.svg" />
        </div>
      )}
    </>
  );
}

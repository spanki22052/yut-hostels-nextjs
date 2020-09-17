import Link from "next/link";
import "../styles/cardsFilter.module.scss";
import classes from "../styles/cardsFilter.module.scss";
import React, { useEffect, useState } from "react";
import firebase from "./firebaseDB";

export default function CardsFilter({
  searchInput,
  showCategory,
  overflow,
  height,
}) {
  const [infoObject, setObject] = useState({});
  const [infoList, setList] = useState([]);
  const [infoBadge, setBadge] = useState({});

  const showIt = (el, index) => {
    return (
      <Link key={index} href={`/hostels/${infoObject[el].badge}`}>
        <div className={classes.cardItem}>
          <img className={classes.cardItemSvg} src="/svg/sleep.svg" />
          <div className={classes.cardItemContent}>
            <div className={classes.cardItemTitles}>
              <div className={classes.cardItemTitle}>
                {infoObject[el].title}
              </div>
              <div className={classes.cardItemSuptitle}>
                {infoObject[el].description}
              </div>
            </div>
            <div className={classes.cardItemInfo}>
              <div className={classes.cardItemLocation}>
                м. {infoObject[el].metro}
              </div>
              <div className={classes.cardItemPrice}>
                от {infoObject[el].pricelist[0]} р
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("hostels")
      .doc("hostelsObject")
      .get()
      .then((info) => setObject(info.data().hostels));

    firebase
      .firestore()
      .collection("hostels")
      .doc("hostelsList")
      .get()
      .then((info) => setList(info.data().hostels));

    firebase
      .firestore()
      .collection("hostels")
      .doc("hostelBadges")
      .get()
      .then((info) => setBadge(info.data().hostels));
  }, []);

  return (
    <>
      <div
        className={classes.cardItemBlock}
        style={{ overflow: overflow, height: height }}
      >
        {showCategory &&
          infoList.length > 0 &&
          infoList.map((el, index) => {
            return index < 3 && showIt(el, index);
          })}
        {!showCategory &&
          infoList.length > 0 &&
          infoList.filter((el) => {
            return el.toLowerCase().includes(searchInput.toLowerCase());
          }).length > 0 &&
          infoList
            .filter((el) => {
              return el.toLowerCase().includes(searchInput.toLowerCase());
            })
            .map((el, index) => {
              return showIt(el, index);
            })}
      </div>
    </>
  );
}

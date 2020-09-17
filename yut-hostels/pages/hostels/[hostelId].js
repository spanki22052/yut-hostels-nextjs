import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../../components/firebaseDB";
import Nav from "../../components/nav";
import classes from "../../styles/hostelid.module.scss";

export default () => {
  const router = useRouter();
  const currentUrl = router.query.hostelId;
  const [hostelBadges, setBadges] = useState({});
  const [hostelsOject, setHostel] = useState({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("hostels")
      .doc("hostelBadges")
      .get()
      .then((el) => setBadges(el.data().hostels));
      
    firebase
      .firestore()
      .collection("hostels")
      .doc("hostelsObject")
      .get()
      .then((el) => setHostel(el.data().hostels));
  }, []);

  const hostelObj = hostelsOject[hostelBadges[currentUrl]];

  return (
    <Nav>
      {hostelObj != undefined && (
        <div className={classes.hostelBlock}>
          <div className={classes.blocksHolder}>
            <div className={classes.leftBlock}></div>
            <div className={classes.rightBlock}>
              <h1>{hostelObj.title}</h1>
              <p>{hostelObj.description}</p>
              <div className={classes.proccessbarBlock}>
                <p>Кол-во свободных мест</p>
                <div className={classes.processbar}>
                  <div
                    style={{ width: `${hostelObj.peoplePercentage}%` }}
                    className={classes.bar}
                  ></div>
                  <p>{hostelObj.peoplePercentage}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Nav>
  );
};

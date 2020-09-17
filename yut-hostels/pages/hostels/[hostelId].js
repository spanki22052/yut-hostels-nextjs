import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../../components/firebaseDB";
import Nav from "../../components/nav";
import HostelPage from "../../components/hostelPage";

export default () => {
  const router = useRouter().query.hostelId;
  const [infoObject, setObject] = useState({});
  const [infoBadges, setBadges] = useState({});
  
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
      .doc("hostelBadges")
      .get()
      .then((info) => setBadges(info.data().hostels));
  }, []);

  return (
    <Nav>
      <HostelPage infoObject={infoObject[infoBadges[router]]} />
    </Nav>
  );
};

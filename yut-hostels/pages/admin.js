import firebase from "../components/firebaseDB";
import AdminPanelLogin from "../components/adminPanelLogin";
import React, { useState, useEffect } from "react";

export default function AdminPage() {
  const [hostelsList, setList] = useState();
  useEffect(() => {
    firebase
      .collection("hostels")
      .doc("hostelsList")
      .get()
      .then((el) => setList(el.data().hostels));
  }, []);
  return (
    <div>
      <h1 style={{ fontFamily: "Montserrat, sans-serif" }}>Список хостелов!</h1>
      <ul>
        {hostelsList !== undefined &&
          hostelsList.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
      </ul>
      <AdminPanelLogin />
    </div>
  );
}

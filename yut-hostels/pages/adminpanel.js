import React, { useState, useEffect } from "react";
import firebase from "../components/firebaseDB";
import css from "../styles/adminPanel.module.scss";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [currentAdd, setAdd] = useState("");
  const [hostelsList, setHostels] = useState([]);
  const [hostelTitle, setHostelTitle] = useState("");
  const Router = useRouter();

  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      Router.push("/");
    }
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection("hostels")
      .doc("hostelsList")
      .get()
      .then((el) => setHostels(el.data().hostels));
  }, []);

  const addNewElementToList = (element) => {
    element.length > 0 &&
      element.length < 15 &&
      hostelsList.includes(element) === false &&
      firebase
        .firestore()
        .collection("hostels")
        .doc("hostelsList")
        .set({ hostels: [...hostelsList, element] });
    setHostelTitle("");
  };

  return (
    <div className={css.adminPanelBox}>
      <h1>Админ панель</h1>
      <div className={css.buttonsBlock}>
        <button onClick={() => setAdd("hostel")}>Добавить хостел</button>
        <button onClick={() => setAdd("parameters")}>Добавить параметры</button>
      </div>

      <div className={css.inputsBlock}>
        {currentAdd != "parameters" ? (
          <div className={css.hostelBlock}>
            <input
              onChange={(e) => setHostelTitle(e.target.value)}
              value={hostelTitle}
              placeholder="Название хостела"
            />
            <button onClick={() => addNewElementToList(hostelTitle)}>
              Применить
            </button>
          </div>
        ) : (
          <div className={css.hostelBlock}>
            <h1>Parameters</h1>
          </div>
        )}
      </div>
    </div>
  );
}

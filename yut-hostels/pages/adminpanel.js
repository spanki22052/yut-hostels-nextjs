import React, { useState } from "react";
import firebase from "../components/firebaseDB";
import css from "../styles/adminPanel.module.scss";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [currentAdd, setAdd] = useState("");
  const Router = useRouter();

  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      Router.push("/");
    }
  });
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
            <input placeholder="Название хостела" />
            <button>Применить</button>
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

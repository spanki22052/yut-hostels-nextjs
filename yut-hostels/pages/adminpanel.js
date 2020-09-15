import React, { useState } from "react";
import firebase from "../components/firebaseDB";
import css from "../styles/adminPanel.module.scss";
import { useRouter } from "next/router";

export default function AdminPage() {
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
          <button>Добавить хостел</button>
          <button>Добавить параметры</button>
      </div>
    </div>
  );
}

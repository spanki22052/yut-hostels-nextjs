import React, { useState } from "react";
import firebase from "../components/firebaseDB";
import css from "../styles/adminLogin.module.scss";
import { useRouter } from "next/router";

export default function AdminPage() {
  const Router = useRouter();

  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      Router.push("/");
    }
  });
  return (
    <div className={css.loginBox}>
      <h1>Вы успешно вошли в админ панель!</h1>
      <button onClick={() => firebase.auth().signOut()}>Выйти</button>
    </div>
  );
}

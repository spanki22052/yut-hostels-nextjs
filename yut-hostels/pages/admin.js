import React from "react";
import css from "../styles/adminLogin.module.scss";

export default function AdminPage() {
  return (
    <div className={css.loginBox}>
      <h1>Вход в админ панель</h1>
      <input placeholder="Логин" />
      <input placeholder="Пароль" />
      <button>ВОЙТИ</button>
    </div>
  );
}

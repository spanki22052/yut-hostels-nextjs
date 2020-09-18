import React, { useState } from "react";
import firebase from "../components/firebaseDB";
import css from "../styles/adminLogin.module.scss";
import { useRouter } from "next/router";
import Head from 'next/head';

export default function AdminPage() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const Router = useRouter();

	const signInFunction = (login, password) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(login, password)
			.catch((err) => setError("Wrong login or password"));
	};

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			Router.push("/adminpanel");
		}
	});
	return (
		<div className={css.loginBox}>
			<h1>Вход в админ панель</h1>
			<input
				placeholder="Логин"
				onChange={(e) => setLogin(e.target.value)}
				value={login}
			/>
			<input
				placeholder="Пароль"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type="password"
			/>
			<p>{error}</p>
			<button onClick={() => signInFunction(login, password)}>ВОЙТИ</button>
		</div>
	);
}

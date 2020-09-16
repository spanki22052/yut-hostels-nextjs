import React, { useState, useEffect } from "react";
import firebase from "../components/firebaseDB";
import css from "../styles/adminPanel.module.scss";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [currentAdd, setAdd] = useState("");
  const [hostelsList, setHostels] = useState([]);
  const [hostelTitle, setHostelTitle] = useState("");
  const [hostelParametersObject, setHostelObject] = useState({
    title: "",
    description: "",
    peoplePercentage: 0,
    phoneNumber: "",
    metro: "",
    photos: "",
  });

  const inputStringsHolder = [
    "Название хостела",
    "title",
    "Описание",
    "description",
    "Процент населенности",
    "peoplePercentage",
    "Телефон",
    "phoneNumber",
    "Метро + HEX",
    "metro",
    "Название фото (через пробел)",
    "photos",
  ];

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
        <button
          className={
            currentAdd === "hostel" ? css.choosedButton : css.notButton
          }
          onClick={() => setAdd("hostel")}
        >
          Добавить хостел
        </button>
        <button
          className={
            currentAdd === "parameters" ? css.choosedButton : css.notButton
          }
          onClick={() => setAdd("parameters")}
        >
          Добавить параметры
        </button>
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
            {inputStringsHolder
              .filter((el, index) => {
                return index % 2 === 0 && el;
              })
              .map((el, index) => {
                let objectKey = inputStringsHolder.filter((el, index) => {
                  return index % 2 === 1 && el;
                });
                let objKey = objectKey[index];
                return (
                  <input
                    key={index}
                    style={{ marginTop: "10px" }}
                    onChange={(e) => {
                      let newObject = { ...hostelParametersObject };
                      newObject[objKey] = e.target.value;
                      setHostelObject(newObject);
                    }}
                    value={hostelParametersObject[objKey]}
                    placeholder={el}
                  />
                );
              })}
            <button onClick={() => console.log(hostelParametersObject)}>
              Добавить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

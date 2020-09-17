import classes from "../styles/searchBar.module.scss";
import CardsFilter from "./cardsFilter";
import { useState } from "react";

export default function SearchBar({ showSearchbar, showCategories }) {
  const [searchInput, setSearch] = useState("");
  return (
    <>
      {showSearchbar === true && (
        <div className={classes.searchBarBlock}>
          <input
            className={classes.searchBar}
            placeholder="Введите название хостела"
            value={searchInput}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <div className={classes.searchIconBlock}>
            <img className={classes.searchIcon} src="/svg/Vector.svg" />
          </div>
        </div>
      )}

      <CardsFilter searchInput={searchInput} showCategory={showCategories} overflow="visible" />
    </>
  );
}

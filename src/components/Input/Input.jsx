import React, { useContext, useEffect, useRef } from "react";
import { DealContext } from "../../context/DealProvider";
import styles from "./Input.module.scss";
import { getSearchResults } from "../../services/DealsAPI.service.js";

const Input = () => {
  const { setSearchResults, searchQuery, clearState, setSearchQuery } =
    useContext(DealContext);
  const searchForm = useRef(null);
  const handleClick = () => {
    const form = searchForm.current;
    setSearchQuery(form["searchvalue"].value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults(getSearchResults(searchQuery));
  };
  useEffect(() => {
    clearState();
  }, []);
  return (
    <form onSubmit={handleSubmit} ref={searchForm} className={styles.input}>
      <input
        type="text"
        placeholder="search for deals here"
        className={styles.input__box}
        name="searchvalue"
      ></input>
      <button type="submit" onClick={handleClick} className={styles.input__button}>
        Search for best deals.
      </button>
    </form>
  );
};

export default Input;

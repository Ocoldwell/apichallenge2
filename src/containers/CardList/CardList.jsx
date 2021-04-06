import React, { useContext } from "react";
import Card from "../../components/Card/Card.jsx";
import styles from "./CardList.module.scss";
import { DealContext } from "../../context/DealProvider.js";

const CardList = (props) => {
  const { deals, searchResults } = useContext(DealContext);
 

  const getCard = (gameDeal) => (
    <div key={gameDeal.dealID}>
      <Card gameDeal={gameDeal} />
    </div>
  );

  return (
    <div className={styles.list}>
      {searchResults.length > 0
        ? searchResults.map(getCard)
        : deals.map(getCard)}
    </div>
  );
};

export default CardList;

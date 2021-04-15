import React, { useContext } from "react";
import GameCard from "../../components/GameCard/GameCard";
import styles from "./CardList.module.scss";
import { DealContext } from "../../context/DealProvider.js";

const CardList = () => {
  const { deals, searchResults } = useContext(DealContext);
 

  const getCard = (gameDeal) => (
    <div key={gameDeal.dealID}>
      <GameCard gameDeal={gameDeal} />
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

import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { DealContext } from "../../context/DealProvider.js";

const Card = (props) => {
  const API = 'https://www.cheapshark.com/'
  const { stores } = useContext(DealContext);
  const { gameDeal } = props;
  const findStoreImages = (stores) => {
    return stores.find((store) => {
      if (store.storeID === gameDeal.storeID) {
        return store.images;
      } 
    });
  };
  console.log(findStoreImages(stores))
  return (
    <div className={styles.Card}>
      <React.Fragment key={gameDeal.dealId}>
        <img src={gameDeal.thumb} alt={gameDeal.title} />
        <a
          href={`${API}redirect?dealID=${gameDeal.dealID}`}
          target="_blank"
          rel="noreferrer"
        >
          <h3>{`${gameDeal.title}`}</h3>
        </a>
        <img src={ `${API}`+findStoreImages(stores).images.logo} alt="store-banner" />
        <p>
          {`Sale Price: ${gameDeal.salePrice} Regular Price: `}
          <span>{`${gameDeal.normalPrice}`}</span>
        </p>
      </React.Fragment>
    </div>
  );
};

export default Card;

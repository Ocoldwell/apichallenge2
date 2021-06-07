import React, { useContext } from "react";
import styles from "./GameCard.module.scss";
import { DealContext } from "../../context/DealProvider.js";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

const GameCard = (props) => {
  const API = "https://www.cheapshark.com/";
  const { stores } = useContext(DealContext);
  const { gameDeal } = props;
  const findStoreImages = (stores) => {
    return stores.find((store) => {
      return store.storeID === gameDeal.storeID ? store.images : null;
    });
  };
  return (
      <Card className={styles.cardWhole}>
        <CardBody className={styles.card__body}>
          <React.Fragment key={gameDeal.dealId}>
            <CardImg src={gameDeal.thumb} alt={gameDeal.title} />
            <CardTitle
              tag="h3"
            >
            <a href={`${API}redirect?dealID=${gameDeal.dealID}`}
              target="_blank"
              rel="noreferrer"
              className={styles.text}>{`${gameDeal.title}`}</a>
            </CardTitle>
            <CardImg
              src={`${API}` + findStoreImages(stores).images.logo}
              className={styles.card__image}
              alt="store-banner"
            />
            <CardText className={styles.text}>
              {`Sale Price: ${gameDeal.salePrice} Regular Price: `}
              <span>{`${gameDeal.normalPrice}`}</span>
            </CardText>
          </React.Fragment>
        </CardBody>
      </Card>
  );
};

export default GameCard;

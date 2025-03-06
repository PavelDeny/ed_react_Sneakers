import React from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState();

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/hurt_nofill.svg" alt="hurt_nofill" />
      </div>

      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          // width={11}
          // height={11}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;

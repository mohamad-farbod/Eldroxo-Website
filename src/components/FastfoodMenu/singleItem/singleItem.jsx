/* eslint-disable default-case */
import React from "react";
import styles from "./singleItem.module.scss";
// import { useDispatch, useSelector } from "react-redux";

const SingleItem = ({
  name,
  price,
  category,
  image,
  order,
  ingredients,
  increaseAmount,
  decreaseAmount,
}) => {
  return (
    <div className={styles["container"]}>
      <h3>{name}</h3>
      <div className={styles["image-container"]}>
        <img src={image} alt="images" />
      </div>
      <div className={styles["ingredients-container"]}>
        <h5>Ingredients:</h5> <h6>{ingredients.join(", ")}</h6>
      </div>
      <div className={styles["price-container"]}>
        <h4>Price : {price}$</h4>
        <div>
          <button onClick={() => increaseAmount(name)}>+</button>
          <button
            className={styles["decrease-btn"]}
            onClick={() => decreaseAmount(name)}
            disabled={order[name].amount >= 1 ? false : true}
          >
            -
          </button>
        </div>
      </div>
      <div className={`${styles["amount-container"]} `}>
        <h5>
          Amount:
          <span
            className={`${
              order[name].amount === 0
                ? styles["zero-amount"]
                : styles["more-amount"]
            } `}
          >
            {order[name].amount}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default SingleItem;

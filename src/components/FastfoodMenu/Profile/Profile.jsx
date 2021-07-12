import React from "react";
import styles from "./Profile.module.scss";
import { FaUserAlt, FaShoppingBasket } from "react-icons/fa";

const Profile = ({ order, increaseAmount, decreaseAmount }) => {
  let totalOrderAmount = 0;
  let totalPrice = 0;
  let orderArray = [];
  for (const item in order) {
    totalOrderAmount = order[item].amount + totalOrderAmount;
    totalPrice = totalPrice + order[item].amount * order[item].price;
    if (order[item].amount > 0) {
      orderArray.push([
        item,
        order[item].amount,
        order[item].amount * order[item].price,
      ]);
    }
  }
  return (
    <>
      <div className={styles["profile-container"]}>
        <h3>Orders</h3>
        <div>
          <span>
            <FaUserAlt />
          </span>
          <span className={styles["order-basket"]}>
            <FaShoppingBasket />
            <h6>{totalOrderAmount}</h6>
          </span>
        </div>
      </div>
      <div className={styles["order-container"]}>
        <ul>
          {!orderArray
            ? null
            : orderArray.map((item) => {
                return (
                  <li key={item[0]}>
                    <div className={styles["order-name-container"]}>
                      <h5>{item[0]} :</h5> <h4>{item[1]}</h4>
                    </div>
                    <div className={styles["btn-container"]}>
                      <div className={styles["order-btns"]}>
                        <button onClick={() => increaseAmount(item[0])}>
                          +
                        </button>
                        <button
                          onClick={() => decreaseAmount(item[0])}
                          className={styles["decrease-btn"]}
                        >
                          -
                        </button>
                      </div>
                      <span className={styles["order-price-container"]}>
                        {item[2]}$
                      </span>
                    </div>
                  </li>
                );
              })}
        </ul>

        {orderArray.length ? (
          <h3 className={styles["total-price-container"]}>
            Total Price: <span>{totalPrice} $</span>
          </h3>
        ) : (
          <h2 className={styles["no-order"]}>You Have No Orders Yet!</h2>
        )}
      </div>
    </>
  );
};

export default Profile;

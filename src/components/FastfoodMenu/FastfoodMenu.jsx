import React, { useState } from "react";
import styles from "./FastfoodMenu.module.scss";
import { menu, categories } from "./data/fastFoodItems";
import SingleItem from "./singleItem/singleItem";
import Profile from "./Profile/Profile";

const FastfoodMenu = () => {
  const [food, setFood] = useState(menu);
  const [foodCategory, setFoodCategory] = useState("All");

  const [order, setOrder] = useState({
    Pepperoni: { amount: 0, price: 10 },
    "Cheese Steak": { amount: 0, price: 13 },
    Marinara: { amount: 0, price: 8 },
    "Cheese Burger": { amount: 0, price: 9 },
    "Big Mac": { amount: 0, price: 12 },
    "Vegi Burger": { amount: 0, price: 7 },
    "Hot Dog": { amount: 0, price: 8 },
    Salami: { amount: 0, price: 7 },
    "Cordon Bleu": { amount: 0, price: 10 },
    "Fried Chicken": { amount: 0, price: 9 },
  });

  const increaseAmountHandler = (name) => {
    const newOrder = { ...order };
    newOrder[name].amount++;
    setOrder(newOrder);
  };
  const decreaseAmountHandler = (name) => {
    const newOrder = { ...order };
    newOrder[name].amount--;
    setOrder(newOrder);
  };
  const setCategory = (category) => {
    if (category === "All") {
      setFood(menu);
      setFoodCategory("All");
      return;
    } else {
      setFood(menu.filter((item) => item.category === category));
      setFoodCategory(category);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["menus-container"]}>
        <div className={styles["fastfood-container"]}>
          <nav className={styles["category-nav"]}>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setCategory(category)}
                  className={
                    category === foodCategory ? styles["category-active"] : null
                  }
                >
                  {category}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles["foodlist-container"]}>
            {food.map((item) => {
              const { ...props } = item;
              return (
                <SingleItem
                  key={item.name}
                  increaseAmount={increaseAmountHandler}
                  decreaseAmount={decreaseAmountHandler}
                  {...props}
                  order={order}
                />
              );
            })}
          </div>
        </div>
        <div className={styles["profile-container"]}>
          <Profile
            order={order}
            increaseAmount={increaseAmountHandler}
            decreaseAmount={decreaseAmountHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default FastfoodMenu;

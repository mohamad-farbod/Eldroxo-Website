import pepperoni from "./images/pepperoni.jpg";
import cheeseSteak from "./images/CheeseSteak.jpg";
import marinara from "./images/Marinara.jpg";
import cheeseBurger from "./images/CheeseBurger.jpg";
import bigMac from "./images/Bigmac.jpg";
import vegiBurger from "./images/VegiBurger.jpg";
import hotDog from "./images/Hotdog.jpg";
import salami from "./images/Salami.jpg";
import cordonBleu from "./images/CordonBleu.jpg";
import friedChicken from "./images/FriedChicken.jpg";

export const menu = [
  {
    name: "Pepperoni",
    price: 10,
    ingredients: ["Cheese", "Pepperoni", "Jalopino"],
    image: pepperoni,
    category: "Pizzas",
  },
  {
    name: "Cheese Steak",
    price: 13,
    ingredients: ["Cheese", "Steak", "Garlic", "Mushroom"],
    image: cheeseSteak,
    category: "Pizzas",
  },
  {
    name: "Marinara",
    price: 8,
    ingredients: ["Cheese", "Eggplant", "Tomato", "Bell Pepper", "Mushroom"],
    image: marinara,
    category: "Pizzas",
  },

  {
    name: "Cheese Burger",
    price: 9,
    ingredients: ["Cheese", "Meat", "Mushroom"],
    image: cheeseBurger,
    category: "Burgers",
  },
  {
    name: "Big Mac",
    price: 12,
    ingredients: ["Cheese", "Meat x2", "Mushroom", "Bacon"],
    image: bigMac,
    category: "Burgers",
  },
  {
    name: "Vegi Burger",
    price: 7,
    ingredients: ["Cheese", "Soya", "Jalopino"],
    image: vegiBurger,
    category: "Burgers",
  },

  {
    name: "Hot Dog",
    price: 8,
    ingredients: ["Cheese", "Hotdog", "Jalopino"],
    image: hotDog,
    category: "Sandwiches",
  },
  {
    name: "Salami",
    price: 7,
    ingredients: ["Cheese", "Salami", "Jalopino"],
    image: salami,
    category: "Sandwiches",
  },

  {
    name: "Cordon Bleu",
    price: 10,
    ingredients: ["Chicken Breast", "Cheese", "Salami"],
    image: cordonBleu,
    category: "Chicken",
  },
  {
    name: "Fried Chicken",
    price: 9,
    ingredients: ["Chicken Thigh x2", "French Fries"],
    image: friedChicken,
    category: "Chicken",
  },
];

let oldCategories = [];
menu.forEach((item) => oldCategories.push(item.category));

export const categories = ["All", ...new Set(oldCategories)];

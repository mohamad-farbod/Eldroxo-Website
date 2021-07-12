/* eslint-disable default-case */
import * as actionTypes from "./FastFoodActions";

const initialState = {
  pepperoni: { amount: 1, price: 10 },
  cheeseSteak: { amount: 0, price: 13 },
  marinara: { amount: 0, price: 8 },
  cheeseBurger: { amount: 0, price: 9 },
  bigMac: { amount: 0, price: 12 },
  vegiBurger: { amount: 0, price: 7 },
  hotDog: { amount: 0, price: 8 },
  salami: { amount: 0, price: 7 },
  cordonBleu: { amount: 0, price: 10 },
  friedChicken: { amount: 0, price: 9 },
  totalFoodPrice: 0,
};

const fastFoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDPEPPERONI:
      const newState = { ...state };
      newState.pepperoni.amount = state.pepperoni.amount + 1;
      return newState;

    case actionTypes.REDUCEPEPPERONI:
      const newState2 = { ...state };
      newState.pepperoni.amount = state.pepperoni.amount - 1;
      return newState2;

    case actionTypes.ADDCHEESESTEAK:
      const newState3 = { ...state };
      newState.cheeseSteak.amount = state.cheeseSteak.amount + 1;
      return newState3;

    case actionTypes.REDUCECHEESESTEAK:
      const newState4 = { ...state };
      newState.cheeseSteak.amount = state.cheeseSteak.amount - 1;
      return newState4;

    case actionTypes.ADDCORDONBLEU:
      const newState5 = { ...state };
      newState.cordonBleu.amount = state.cordonBleu.amount + 1;
      return newState5;

    case actionTypes.REDUCECORDONBLEU:
      const newState6 = { ...state };
      newState.cordonBleu.amount = state.cordonBleu.amount - 1;
      return newState6;

    case actionTypes.ADDFRIEDCHICKEN:
      const newState7 = { ...state };
      newState.friedChicken.amount = state.friedChicken.amount + 1;
      return newState7;

    case actionTypes.REDUCEFRIEDCHICKEN:
      const newState8 = { ...state };
      newState.friedChicken.amount = state.friedChicken.amount - 1;
      return newState8;

    case actionTypes.ADDHOTDOG:
      const newState9 = { ...state };
      newState.hotDog.amount = state.hotDog.amount + 1;
      return newState9;

    case actionTypes.REDUCEHOTDOG:
      const newState10 = { ...state };
      newState.hotDog.amount = state.hotDog.amount - 1;
      return newState10;

    case actionTypes.ADDSALAMI:
      const newState11 = { ...state };
      newState.salami.amount = state.salami.amount + 1;
      return newState11;

    case actionTypes.REDUCESALAMI:
      const newState12 = { ...state };
      newState.salami.amount = state.salami.amount - 1;
      return newState12;

    case actionTypes.ADDVEGIBURGER:
      const newState13 = { ...state };
      newState.vegiBurger.amount = state.vegiBurger.amount + 1;
      return newState13;

    case actionTypes.REDUCEVEGIBURGER:
      const newState14 = { ...state };
      newState.vegiBurger.amount = state.vegiBurger.amount - 1;
      return newState14;

    case actionTypes.ADDBIGMAC:
      const newState15 = { ...state };
      newState.bigMac.amount = state.bigMac.amount + 1;
      return newState15;

    case actionTypes.REDUCEBIGMAC:
      const newState16 = { ...state };
      newState.bigMac.amount = state.bigMac.amount - 1;
      return newState16;

    case actionTypes.ADDCHEESEBURGER:
      const newState17 = { ...state };
      newState.cheeseBurger.amount = state.cheeseBurger.amount + 1;
      return newState17;

    case actionTypes.REDUCECHEESEBURGER:
      const newState18 = { ...state };
      newState.cheeseBurger.amount = state.cheeseBurger.amount - 1;
      return newState18;

    case actionTypes.ADDMARINARA:
      const newState19 = { ...state };
      newState.marinara.amount = state.marinara.amount + 1;
      return newState19;

    case actionTypes.REDUCEMARINARA:
      const newState20 = { ...state };
      newState.marinara.amount = state.marinara.amount - 1;
      return newState20;
  }
  return state;
};

export default fastFoodReducer;

/* eslint-disable default-case */
import * as actionTypes from "./FootActions";

const initialState = {
  goalkeeper: "Buffon",
  defenders: ["Ramos", "Roberto Carlos"],
  midfielders: ["Zidane", "Lampard"],
  attackers: ["Messi", "Cr Ronaldo"],
  showBackdrop: false,
};

const footReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ATTACKERSELECT:
      if (state.attackers.includes(action.player)) {
        return state;
      } else {
        const newState = { ...state, attackers: [...state.attackers] };
        newState.attackers.unshift(action.player);
        newState.attackers.pop();
        return newState;
      }

    case actionTypes.DEFENDERSELECT:
      if (state.defenders.includes(action.player)) {
        return state;
      } else {
        const newState2 = { ...state, defenders: [...state.defenders] };

        newState2.defenders.unshift(action.player);
        newState2.defenders.pop();

        return newState2;
      }

    case actionTypes.MIDFIELDERSELECT:
      if (state.midfielders.includes(action.player)) {
        return state;
      } else {
        const newState3 = { ...state, midfielders: [...state.midfielders] };
        newState3.midfielders.unshift(action.player);
        newState3.midfielders.pop();
        return newState3;
      }

    case actionTypes.GOALKEEPERSELECT:
      const newState4 = { ...state };
      newState4.goalkeeper = action.player;
      return newState4;

    case actionTypes.SHOWBACKDROP:
      const newState5 = { ...state };
      newState5.showBackdrop = true;
      return newState5;

    case actionTypes.HIDEBACKDROP:
      const newState6 = { ...state };
      newState6.showBackdrop = false;
      return newState6;
  }

  return state;
};

export default footReducer;

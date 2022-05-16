import { ActionType } from "../contants/action-type";

const initialState = {
  products: [
    {
      id: 1,
      title: "doston",
      category: "Full-Stack developer....",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

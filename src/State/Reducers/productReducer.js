export const productReducer = (state = { product: ["Nike Shoes"] }, action) => {
  console.log("state------->", state);

  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: action.data,
    };
  }
  return state;
};

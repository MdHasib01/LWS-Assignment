import { DECREMENT, INCREMENT, REMOVE } from "./actionTypes";

const initialState = {
  cartProduct: [],
  totalItem: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    const { id, title, price, totalQuantity } = action.payload;
    const sameProduct = state.cartProduct?.find((item) => item.id === id);
    if (!sameProduct) {
      return {
        ...state,
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + price,
        cartProduct: [
          ...state.cartProduct,
          {
            id: id,
            title,
            price,
            totalQuantity: totalQuantity - 1,
            quantity: 1,
          },
        ],
      };
    } else {
      const updatedProducts = state.cartProduct.map((item) => {
        if (item.id === id) {
          return {
            id,
            title,
            price,
            totalQuantity: item.totalQuantity - 1,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + price,
        cartProduct: [...updatedProducts],
      };
    }
  } else if (action.type === DECREMENT) {
    const { id, title, price } = action.payload;
    const updatedProducts = state.cartProduct.map((item) => {
      if (item.id === id) {
        return {
          id,
          title,
          price,
          totalQuantity: item.totalQuantity + 1,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      totalItem: state.totalItem - 1,
      totalPrice: state.totalPrice - price,
      cartProduct: [...updatedProducts],
    };
  } else if (action.type === REMOVE) {
    const { price, id, quantity } = action.payload;
    const filteredItems = state.cartProduct.filter((item) => item.id !== id);
    console.log(filteredItems);
    return {
      ...state,
      totalItem: state.totalItem - quantity,
      totalPrice: state.totalPrice - price * quantity,
      cartProduct: [...filteredItems],
    };
  } else {
    return state;
  }
};

export default cartReducer;
